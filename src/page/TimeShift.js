import React from "react"
import ArchitectLayout from "../components/ArchitectLayout"
import { Divider, Table, Input, Row, Col } from "antd"

const manHourData = [
  {
    key: '1',
    project: 'SG003',
    day1: '5',
    day2: '6',
    day3: '0',
    day4: '4',
    day5: '2',
    day6: '0',
    day7: '0',
    sum: '17'
  },
  {
    key: '2',
    project: 'SG004',
    day1: '3',
    day2: '6',
    day3: '0',
    day4: '0',
    day5: '9',
    day6: '1',
    day7: '0',
    sum: '19'
  }
]

const manHourCol = [
  { title: 'Project', dataIndex: 'project', key: 'project' },
  { title: 'Monday', dataIndex: 'day1', key: 'day1' },
  { title: 'Monday', dataIndex: 'day2', key: 'day2' },
  { title: 'Monday', dataIndex: 'day3', key: 'day3' },
  { title: 'Monday', dataIndex: 'day4', key: 'day4' },
  { title: 'Monday', dataIndex: 'day5', key: 'day5' },
  { title: 'Monday', dataIndex: 'day6', key: 'day6' },
  { title: 'Monday', dataIndex: 'day7', key: 'day7' },
  { title: 'Total', dataIndex: 'sum', key: 'sum' }
]

const TimeShift = () => (
	<ArchitectLayout children={
		<div>
			<h1>Timeshift</h1>
			<Input placeholder="Employee" />
			<Divider />
			<h2>John Travolta</h2>
			<Row type="flex" justify="left" align="top">
      	<Col span={6}>
        	<h3>Studio</h3><br/><h5>Aurora 3</h5>
      	</Col>
      	<Col span={6}>
					<h3>Completed works</h3><br/><h5>14</h5>
				</Col>
				<Col span={6}>
					<h3>Work Since</h3><br/><h5>2015</h5>
				</Col>
    	</Row>
			<Divider />
			<h2>Man-hour in current week</h2>
			<Table dataSource={manHourData} columns={manHourCol} />
		</div>
	} />
)

export default TimeShift
