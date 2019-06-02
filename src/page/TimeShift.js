import React from 'react'
import ArchitectLayout from '../components/ArchitectLayout'
import { Divider, Table, Input } from 'antd'

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
  <ArchitectLayout
    current="4"
    children={
      <div>
        <h1>Timeshift</h1>
        <Input placeholder="Employee" />
        <Divider />
        <Table dataSource={manHourData} columns={manHourCol} />
      </div>
    }
  />
)

export default TimeShift
