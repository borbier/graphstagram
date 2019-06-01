import React from 'react'
import styled from 'styled-components'
import logo from '../assets/image/logo.png'
import { Button, Radio, Icon } from 'antd'
import { withRouter } from 'react-router-dom'

const Whole = styled.div`
  width: 100vw;
  height: 100vh;
  background: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Image = styled.img`
  height: 240px;
`
const Space = styled.img`
  height: 28px;
`

const ButtonHatch = withRouter(({ history }) => (
  <Button
    type="primary"
    shape="round"
    icon="search"
    size="large"
    onClick={() => {
      history.push('/polls')
    }}
  >
    Search
  </Button>
))

const Intro = () => (
  <Whole>
    <Image src={logo} alt="" />
    <Space />
    <h3>GRAPH-Stagram</h3>
    <ButtonHatch />
  </Whole>
)
export default Intro
