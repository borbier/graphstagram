import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import logo from '../assets/image/logo.png'
const { SubMenu } = Menu
const { Header, Content, Sider } = Layout

const Head = props => {
  return (
    <Header
      className="header"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <img src={logo} style={{ height: '36px' }} alt="" />
      <span style={{ color: 'white' }}>Graph-strgram</span>
    </Header>
  )
}
export default Head
