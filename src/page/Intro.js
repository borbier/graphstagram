import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/image/logo.png'
import architectLogo from '../assets/image/icon-architect.png'
import architectLogoHovered from '../assets/image/icon-architect-hover.png'
import customerLogo from '../assets/image/icon-customer.png'
import customerLogoHovered from '../assets/image/icon-customer-hover.png'
import { Button, Input, Divider, Row, Col } from 'antd'
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
    size="large"
    onClick={() => {
      history.push('/polls')
    }}
  >
    Login
  </Button>
))

function ImageButton(props) {
  const [isHovered, setHovered] = useState(false)

  return (
    <div>
      <img
        src={isHovered ? props.imageHovered : props.image}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        width="100"
        height="100"
      />
    </div>
  )
}

const Intro = () => (
  <Whole>
    <Divider>
      <h4>GRAPH-Stagram</h4>
    </Divider>
    <Input placeholder="Username" />
    <Input placeholder="Password" />
    <Divider>
      <h4>Type</h4>
    </Divider>
    <Row>
      <Col>
        <ImageButton
          image={architectLogo}
          imageHovered={architectLogoHovered}
        />
        <ImageButton image={customerLogo} imageHovered={customerLogoHovered} />
      </Col>
    </Row>
    <Space />
    <ButtonHatch />
  </Whole>
)
export default Intro
