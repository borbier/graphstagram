import React from "react"
import ArchitectLayout from "../components/ArchitectLayout"
import { Divider, Input, Row, Col, Avatar, Table } from "antd"

const projectData = [
  {
    key: '1',
    project: 'US011',
		responsibles: 'John, Edward, William',
		status: 'PERMIT',
		start: '2/4/2019',
		issue: '-'
	},
	{
    key: '2',
    project: 'UK002',
		responsibles: 'John, Mark, Alex',
		status: 'TERMINATED',
		start: '11/6/2017',
		issue: '-'
	},
];

const projectCol = [
  { title: 'Project', dataIndex: 'project', key: 'project' },
	{ title: 'Responsibles', dataIndex: 'responsibles', key: 'responsibles' },
	{ title: 'Status', dataIndex: 'status', key: 'status'},
	{ title: 'Start Date', dataIndex: 'start', key: 'start' },
	{ title: 'Issue', dataIndex: 'issue', key: 'issue' },
];

const Customer = () => (
	<ArchitectLayout children={
		<div>
			<h1>Customer Persona</h1>
      <Input placeholder="Name" />
			<Divider />
			<Row type="flex" justify="left" align="middle">
				<Col span={4}>
					<span>
						<Avatar shape="square" size={64} icon="user" />
					</span>
				</Col>
				<Col span={20}>
				<h1>Mads Mikkelsen</h1>
				</Col>
			</Row>
			<Row type="flex" justify="left" align="top">
				<Col span={6}>
					<h3>General</h3>
					<ul>
						<li>Age : 53</li>
						<li>Nationality : USA</li>
						<li>Occupation : Actor</li>
						<li>Marital Status : Married (with Hideo Kojima)</li>
					</ul>
				</Col>
				<Col span={6}>
					<h4>Interests</h4>
					<p>Video games, human anatomy</p>
					<h4>Personality</h4>
					<p>Calm and charming</p>
				</Col>
				<Col span={6}>
					<h3>Preferrred Style</h3>
					<p>Avant-grande, Minimalist</p>
				</Col>
				<Col span={6}>
					<h4>Ongoing projects</h4>
					<h5>1</h5>
					<h4>Completed projects</h4>
					<h5>0</h5>
				</Col>
			</Row>
			<Divider />
			<h3>Projects</h3>
			<Table dataSource={projectData} columns={projectCol} />
		</div>
	} />
)

export default Customer