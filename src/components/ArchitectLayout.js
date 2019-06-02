import React from 'react'
import styled from 'styled-components'
import { Layout, Menu } from 'antd'
import { withRouter } from 'react-router-dom'

const { Header, Content, Footer } = Layout
const Space = styled.img`
  height: 28px;
`

const ArchitectLayout = withRouter(props => {
  const { history } = props
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[props.current]}
          onClick={e => {
            // console.log(e)
            switch (e.key) {
              case '1':
                history.push('/projects')
                break
              case '2':
                history.push('/customer')
                break
              case '3':
                history.push('/quotation')
                break
              case '4':
                history.push('/timeshift')
                break
              case '5':
                history.push('/')
                break
            }
          }}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">Project</Menu.Item>
          <Menu.Item key="2">Customer</Menu.Item>
          <Menu.Item key="3">Quotation</Menu.Item>
          <Menu.Item key="4">Time Shift</Menu.Item>
          <div />
          <Menu.Item key="5">Logout</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', minHeight: '90vh' }}>
        <Space />
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  )
})

export default ArchitectLayout
