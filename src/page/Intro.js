import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/image/logo.png'
import architectLogo from '../assets/image/icon-architect.png'
import architectLogoHovered from '../assets/image/icon-architect-hover.png'
import customerLogo from '../assets/image/icon-customer.png'
import customerLogoHovered from '../assets/image/icon-customer-hover.png'
import { Button, Input, Divider, Row, Col } from 'antd'
import { withRouter } from 'react-router-dom'
import background from '../assets/image/graph_background.png'

const Whole = styled.div`
  width: 100vw;
  height: 100vh;
  background: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const FountIcon = styled.h1`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 48px;
  color: #2a78b7;
`
const Container = styled.div`
  text-align: center;
  display: flex;
  margin: 20px 0;
  height: 100vh;
  width: 100vw;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ._container {
    width: 50vw;
  }
`
const Image = styled.img`
  height: 240px;
`
const Space = styled.img`
  height: 28px;
`
const Flexer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ._spanner {
    width: 54px;
  }
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
    Ready to Design
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
  <Container>
    <img
      src={background}
      style={{
        position: 'absolute',
        right: 0,
        top: '-40px',
        height: '273px',
        opacity: '0.65'
      }}
      alt=""
    />
    <img
      src={background}
      style={{
        position: 'absolute',
        left: 0,
        bottom: '-40px',
        height: '273px',
        opacity: '0.4',
        transform: 'scale(-1)'
      }}
      alt=""
    />
    <div className="_container">
      <FountIcon>{`Graph<>Stagram`}</FountIcon>
      <Divider>Login or register</Divider>
      <Input
        size="large"
        addonBefore="Username"
        placeholder="Username"
        style={{ maxWidth: '360px' }}
      />
      <div style={{ height: '12px' }} />
      <Input
        size="large"
        addonBefore="Password"
        placeholder="Password"
        style={{ maxWidth: '360px' }}
      />

      <Divider>Select your role</Divider>
      <Flexer>
        <ImageButton
          image={architectLogo}
          imageHovered={architectLogoHovered}
        />
        <span className="_spanner" />
        <ImageButton image={customerLogo} imageHovered={customerLogoHovered} />
      </Flexer>
      <Divider />
      <div>
        <ButtonHatch />
      </div>
    </div>
  </Container>
)
export default Intro
