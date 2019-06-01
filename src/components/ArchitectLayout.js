import React from "react"
import styled from "styled-components"
import { Layout, Menu } from 'antd'
const { Header, Content, Footer } = Layout

const Space = styled.img`
  height: 28px;
`

const ArchitectLayout = (props) => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Project</Menu.Item>
        <Menu.Item key="2">Customer</Menu.Item>
				<Menu.Item key="3">Quotation</Menu.Item>
				<Menu.Item key="4">Time Shift</Menu.Item>
      </Menu>
  	</Header>
    <Content style={{ padding: '0 50px' }}>
      <Space />
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>{props.children}</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
)

export default ArchitectLayout