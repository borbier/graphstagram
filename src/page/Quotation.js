import React from "react"
import ArchitectLayout from "../components/ArchitectLayout"
import { Divider, DatePicker, Table, Col, Row } from "antd"

const quotationData = [
  {
    key: '1',
    project: 'TH001',
    customer: 'Brandon',
		contact: '083191191',
		responsibles: 'John, Edward, William',
		start: '19/6/2019',
		issue: '-'
  },
];

const quotationCol = [
  { title: 'Project', dataIndex: 'project', key: 'project' },
  { title: 'Customer', dataIndex: 'customer', key: 'customer' },
	{ title: 'Responsibles', dataIndex: 'responsibles', key: 'responsibles' },
	{ title: 'Start Date', dataIndex: 'start', key: 'start' },
	{ title: 'Issue', dataIndex: 'issue', key: 'issue' },
];

function onChangeDate(date, dateString) {
  console.log(date, dateString);
}

const Dashboard = () => (
	<ArchitectLayout children={
		<div>
			<h1>Quotation</h1>
      <Divider />
			<Row type="flex" justify="left" align="top">
      	<Col span={6}>
        	<h3>Win/Lose Rate</h3><br/><h5>80.33%</h5>
      	</Col>
      	<Col span={6}>
					<h3>Terminated Quotation</h3><br/><h5>3</h5>
				</Col>
				<Col span={6}>
					<h3>Completed Quotation</h3><br/><h5>8</h5>
				</Col>
    	</Row>
      <Divider />
			<DatePicker onChange={onChangeDate} />
			<Table dataSource={quotationData} columns={quotationCol} />
		</div>
	} />
)

export default Dashboard