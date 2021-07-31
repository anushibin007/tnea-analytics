import React, { useEffect, useState } from "react";
import cutoff2020 from "../data/2020/cutoff.json";
import { InputGroup, FormControl, Row, Col, Container } from "react-bootstrap";
import DataTable from "react-data-table-component";
import _ from "lodash";
import { NavLink, useParams } from "react-router-dom";

const CollegeSearch = () => {
	const [clgName, setClgName] = useState("");

	const { searchType } = useParams();

	const clgNameChanged = (e) => {
		setClgName(e.target.value);
	};

	useEffect(() => {
		console.log(searchType);
	}, [searchType]);

	useEffect(() => {
		// console.log(filterIt().length);
		// console.log(filterIt());
	}, [clgName]);

	const filterIt = () => {
		const filteredArray = _.filter(cutoff2020, (clg) => {
			return clg.con.toUpperCase().includes(clgName.toUpperCase()) || clg.coc === parseInt(clgName);
		});
		return _.uniqBy(filteredArray, "coc");
	};

	const getCell = (row, rowKey) => {
		return <NavLink to={`/data/${searchType}/${row.coc}?year=2020`}>{row[rowKey]}</NavLink>;
	};

	const columns = [
		{
			name: "College Name",
			selector: (row) => row.con,
			sortable: true,
			grow: 10,
			cell: (row) => getCell(row, "con"),
		},
		{
			name: "Counseling Code",
			selector: (row) => row.coc,
			sortable: true,
			cell: (row) => getCell(row, "coc"),
		},
	];
	return (
		<React.Fragment>
			<Container>
				<Row className="my-3">
					<Col md={12} lg={2}>
						<Row className="text-center">
							<InputGroup.Text id="basic-addon1" className="bg-success text-white text-wrap">
								College Name or Address or Counseling Code
							</InputGroup.Text>
						</Row>
					</Col>
					<Col md={12} lg={10} className="align-items-stretch d-flex px-0">
						<FormControl aria-label="College Name/Address" aria-describedby="basic-addon1" value={clgName} onChange={clgNameChanged} placeholder="🔍 Search here" autoFocus />
					</Col>
				</Row>
			</Container>
			<DataTable
				/*title="TNEA Cutoff 2020"*/
				columns={columns}
				data={filterIt()}
				defaultSortField="con"
				defaultSortAsc="false"
				pagination="true"
				maxWidth="1px"
				grow={10}
			/>
		</React.Fragment>
	);
};

export default CollegeSearch;
