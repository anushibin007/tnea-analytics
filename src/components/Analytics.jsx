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

	const [labels, setLabels] = useState([]);

	const [dept, setDept] = useState(query.get("dept") ? query.get("dept") : "CS");

	const [depts, setDepts] = useState([]);

	const [analyticsType, setAnalyticsType] = useState(
		query.get("type") ? query.get("type") : "ranking"
	);

	const filterIt = async () => {
		let analyticsYearWiseRanking = [];
		for (let anYear = 2017; anYear <= 2020; anYear++) {
			const { default: dataFromJson } = await import(
				`../data/${anYear}/${analyticsType}.json`
			);
			// console.log(dataFromJson);
			let returnData = [];
			if (coc) {
				// If you have the counseling code
				returnData = _.filter(dataFromJson, (clg) => {
					const valid = clg.coc === parseInt(coc);
					if (valid) {
						// console.log("returning Counseling Code data");
					}
					return valid;
				});
				// console.log(returnData);
			} else {
				// No valid input
				// console.log("returning no data");
			}
			analyticsYearWiseRanking.push({ year: anYear, data: returnData });
		}
		setRawData(analyticsYearWiseRanking);
	};

	useEffect(filterIt, []);

	useEffect(filterIt, [dept, analyticsType]);

	useEffect(() => {
		// console.log(rawData);
		let labelsStage = [];
		let deptsStage = new Set();
		let bcData = [];
		let bcmData = [];
		let mbcData = [];
		let ocData = [];
		let scData = [];
		let scaData = [];
		let stData = [];
		rawData.map((aRawData) => {
			aRawData.data.map((aDept) => {
				deptsStage.add(aDept.brc);
				if (aDept.brc === dept) {
					labelsStage.push(aRawData.year);
					bcData.push(aDept.BC ? aDept.BC : 0);
					bcmData.push(aDept.BCM ? aDept.BCM : 0);
					mbcData.push(aDept.MBC ? aDept.MBC : 0);
					ocData.push(aDept.OC ? aDept.OC : 0);
					scData.push(aDept.SC ? aDept.SC : 0);
					stData.push(aDept.ST ? aDept.ST : 0);
				}
			});
		});
		// console.log({ labels: labelsStage });
		// console.log({ deptsStage });
		setDepts(Array.from(deptsStage).sort());
		setLabels(labelsStage);
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
		// console.log(chartDatasets);
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
		// console.log(aDept);
		setDept(aDept);
		history.push(`/data/analytics/${coc}?dept=${aDept}&type=${analyticsType}`);
	};

	const getDeptPagination = () => {
		let items = [];
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

	const gotoType = (e) => {
		const aType = e.target.innerHTML.toLowerCase();
		// console.log(aType);
		setAnalyticsType(aType);
		history.push(`/data/analytics/${coc}?dept=${dept}&type=${aType}`);
	};

	const getTypePagination = () => {
		let items = [];
		const depts = ["Ranking", "Cutoff"];
		depts.map((aType) => {
			items.push(
				<Pagination.Item
					key={aType}
					active={analyticsType.toLowerCase() === aType.toLowerCase()}
					onClick={gotoType}
					activeLabel=""
				>
					{aType}
				</Pagination.Item>
			);
		});
		return items;
	};

	return (
		<React.Fragment>
			<Row>
				<Pagination size="md" className="my-3">
					{getDeptPagination()}
				</Pagination>
			</Row>
			<Row>
				<Pagination size="md" className="my-3">
					{getTypePagination()}
				</Pagination>
			</Row>
			<Row>
				<Line data={{ labels: labels, datasets: chartDatasets }} options={options} />
			</Row>
		</React.Fragment>
	);
};

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};

export default Analytics;
