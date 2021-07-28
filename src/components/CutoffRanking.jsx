import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import _ from "lodash";
import { useParams, useLocation, useHistory } from "react-router-dom";
import { Pagination, Row, Col } from "react-bootstrap";

const CutoffRanking = () => {
	let query = useQuery();

	const history = useHistory();

	let { coc, con, searchType } = useParams();

	const [data, setData] = useState([]);

	const [year, setYear] = useState(query.get("year") ? query.get("year") : 2020);

	const filterIt = async () => {
		const { default: dataFromJson } = await import(`../data/${year}/${searchType}.json`);
		// console.log(dataFromJson);
		if (con && con.length > 0) {
			// If you have the College Name
			const returnData = _.filter(dataFromJson, (clg) => {
				const valid = clg.con.toUpperCase().includes(con.toUpperCase());
				if (valid) {
					// console.log("returning College Name data");
				}
				return valid;
			});
			// console.log(returnData);
			setData(returnData);
			return returnData;
		} else if (coc) {
			// If you have the counselling code
			const returnData = _.filter(dataFromJson, (clg) => {
				const valid = clg.coc === parseInt(coc);
				if (valid) {
					// console.log("returning Counselling Code data");
				}
				return valid;
			});
			// console.log(returnData);
			setData(returnData);
			return returnData;
		} else {
			// No valid input
			// console.log("returning no data");
			const returnData = [];
			setData(returnData);
			return returnData;
		}
	};

	useEffect(filterIt, []);

	useEffect(filterIt, [year]);

	const gotoYear = (e) => {
		const anYear = e.target.innerHTML;
		// console.log(anYear);
		setYear(anYear);
		history.push(`/data/${searchType}/${coc}?year=${anYear}`);
	};

	const getPagination = () => {
		let items = [];
		for (let anYear = 2020; anYear >= 2017; anYear--) {
			items.push(
				<Pagination.Item
					key={anYear}
					active={anYear === parseInt(year)}
					onClick={gotoYear}
					activeLabel=""
				>
					{anYear}
				</Pagination.Item>
			);
		}
		return items;
	};

	const columns = [
		{
			name: "Branch Code",
			selector: (row) => row.brc,
			sortable: true,
			cell: (row) => <div title={row.brn}>{row.brc}</div>,
		},
		{
			name: "BC",
			selector: (row) => row.BC,
			sortable: true,
		},
		{
			name: "BCM",
			selector: (row) => row.BCM,
			sortable: true,
		},
		{
			name: "MBC",
			selector: (row) => row.MBC,
			sortable: true,
		},
		{
			name: "OC",
			selector: (row) => row.OC,
			sortable: true,
		},
		{
			name: "SC",
			selector: (row) => row.SC,
			sortable: true,
		},
		{
			name: "SCA",
			selector: (row) => row.SCA,
			sortable: true,
		},
		{
			name: "ST",
			selector: (row) => row.ST,
			sortable: true,
		},
	];

	return (
		<React.Fragment>
			<Row>
				<Col>
					<Pagination size="lg" className="my-3">
						{getPagination()}
					</Pagination>
				</Col>
			</Row>
			<Row>
				<Col>
					<DataTable
						title={data[0] && (year == 2017 ? data[0].crn : data[0].con)}
						columns={columns}
						data={data}
						defaultSortField="coc"
						defaultSortAsc="false"
						pagination="true"
						maxWidth="1px"
						grow={10}
					/>
				</Col>
			</Row>
		</React.Fragment>
	);
};

const useQuery = () => {
	return new URLSearchParams(useLocation().search);
};

export default CutoffRanking;
