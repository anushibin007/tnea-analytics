import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import _ from "lodash";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { Pagination, Row, Col } from "react-bootstrap";
import { Line } from "react-chartjs-2";

const Analytics = () => {
	let query = useQuery();

	const history = useHistory();

	let { coc } = useParams();

	const [rawData, setRawData] = useState([]);

	const [chartDatasets, setChartDatasets] = useState([]);

	const [dept, setDept] = useState(query.get("dept") ? query.get("dept") : "CS");

	const filterIt = async () => {
		let analyticsYearWiseRanking = [];
		for (let anYear = 2017; anYear <= 2020; anYear++) {
			const { default: dataFromJson } = await import(`../data/${anYear}/ranking.json`);
			console.log(dataFromJson);
			let returnData = [];
			if (coc) {
				// If you have the counselling code
				returnData = _.filter(dataFromJson, (clg) => {
					const valid = clg.coc === parseInt(coc);
					if (valid) {
						console.log("returning Counselling Code data");
					}
					return valid;
				});
				console.log(returnData);
			} else {
				// No valid input
				console.log("returning no data");
			}
			analyticsYearWiseRanking.push({ year: anYear, data: returnData });
		}
		setRawData(analyticsYearWiseRanking);
	};

	useEffect(filterIt, []);

	useEffect(filterIt, [dept]);

	useEffect(() => {
		console.log(rawData);
		let bcData = [];
		let bcmData = [];
		let mbcData = [];
		let ocData = [];
		let scData = [];
		let scaData = [];
		let stData = [];
		rawData.map((aRawData) => {
			aRawData.data.map((aDept) => {
				if (aDept.brc === dept) {
					bcData.push(aDept.BC ? aDept.BC : 1);
					bcmData.push(aDept.BCM ? aDept.BCM : 1);
					mbcData.push(aDept.MBC ? aDept.MBC : 1);
					ocData.push(aDept.OC ? aDept.OC : 1);
					scData.push(aDept.SC ? aDept.SC : 1);
					stData.push(aDept.ST ? aDept.ST : 1);
				}
			});
		});
		setChartDatasets([
			{
				label: "BC",
				data: bcData,
				fill: false,
				backgroundColor: "red",
				borderColor: "red",
			},
			{
				label: "BCM",
				data: bcmData,
				fill: false,
				backgroundColor: "blue",
				borderColor: "blue",
			},
			{
				label: "MBC",
				data: mbcData,
				fill: false,
				backgroundColor: "green",
				borderColor: "green",
			},
			{
				label: "OC",
				data: ocData,
				fill: false,
				backgroundColor: "violet",
				borderColor: "violet",
			},
			{
				label: "SC",
				data: scData,
				fill: false,
				backgroundColor: "cyan",
				borderColor: "cyan",
			},
			{
				label: "SCA",
				data: scaData,
				fill: false,
				backgroundColor: "chartreuse",
				borderColor: "chartreuse",
			},
			{
				label: "ST",
				data: stData,
				fill: false,
				backgroundColor: "LightSeaGreen",
				borderColor: "LightSeaGreen",
			},
		]);
	}, [rawData]);

	useEffect(() => {
		console.log(chartDatasets);
	}, [chartDatasets]);

	const options = {
		maintainAspectRatio: true,
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	};

	const gotoDept = (e) => {
		const aDept = e.target.innerHTML;
		console.log(aDept);
		setDept(aDept);
		history.push(`/data/analytics/${coc}?dept=${aDept}`);
	};

	const getPagination = () => {
		let items = [];
		const depts = ["BM", "CE", "CS", "EC", "EE", "IT", "ME"];
		depts.map((aDept) => {
			items.push(
				<Pagination.Item
					key={aDept}
					active={dept === aDept}
					onClick={gotoDept}
					activeLabel=""
				>
					{aDept}
				</Pagination.Item>
			);
		});
		return items;
	};

	return (
		<React.Fragment>
			<Row>
				<Col>
					<Pagination size="md" className="my-3">
						{getPagination()}
					</Pagination>
				</Col>
			</Row>
			<Row>
				<Line
					data={{ labels: ["2017", "2018", "2019", "2020"], datasets: chartDatasets }}
					options={options}
				/>
			</Row>
		</React.Fragment>
	);
};

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};

export default Analytics;
