import React from "react"
import ArchitectLayout from "../components/ArchitectLayout"
import { Divider, Menu, Dropdown, Button, Icon, message, DatePicker, Table } from "antd"

const contractData = [
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

const contractCol = [
  { title: 'Project', dataIndex: 'project', key: 'project' },
  { title: 'Customer', dataIndex: 'customer', key: 'customer' },
	{ title: 'Responsibles', dataIndex: 'responsibles', key: 'responsibles' },
	{ title: 'Start Date', dataIndex: 'start', key: 'start' },
	{ title: 'Issue', dataIndex: 'issue', key: 'issue' },
];

function onChangeDate(date, dateString) {
  console.log(date, dateString);
}

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}
  
const phaseDropdown = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">ALL</Menu.Item>
    <Menu.Item key="2">PRELM</Menu.Item>
    <Menu.Item key="3">EIA</Menu.Item>
		<Menu.Item key="1">TENDER</Menu.Item>
    <Menu.Item key="2">FOR LON</Menu.Item>
    <Menu.Item key="3">PERMIT</Menu.Item>
	</Menu>
);

const studioDropdown = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">STUDIO 1</Menu.Item>
    <Menu.Item key="2">STUDIO 2</Menu.Item>
    <Menu.Item key="3">STUDIO 3</Menu.Item>
	</Menu>
);

const Project = () => (
	<ArchitectLayout children={
		<div>
			<h1>Projects Management</h1>
			<Divider />
			<h3>Contracts</h3>
			<Dropdown overlay={phaseDropdown}>
      	<Button>Phase   <Icon type="down" /></Button>
			</Dropdown>
			<DatePicker onChange={onChangeDate} />
			<Table dataSource={contractData} columns={contractCol} />;
			<Divider />
			<h3>Studio Workload</h3>
			<Dropdown overlay={studioDropdown}>
      	<Button>Studio  <Icon type="down" /></Button>
			</Dropdown>
			
		</div>
	} />
)

export default Project