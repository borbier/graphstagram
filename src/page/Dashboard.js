import React from "react"
import ArchitectLayout from "../components/ArchitectLayout"
import { Divider } from "antd"
const Dashboard = () => (
	<ArchitectLayout children={
		<div>
			<h1>Architect Dashboard</h1>
			<Divider />
		</div>
	} />
)

export default Dashboard