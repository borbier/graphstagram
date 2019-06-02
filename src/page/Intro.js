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
  img {
    cursor: pointer;
  }
`

const ButtonHatch = withRouter(({ history, current }) => {
  const text = current === 'designer' ? 'Ready to Organize' : 'Ready to Design'
  const link = current === 'designer' ? '/projects' : '/polls'
  return (
    <Button
      type="primary"
      shape="round"
      size="large"
      onClick={() => {
        history.push(link)
      }}
    >
      {text}
    </Button>
  )
})

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

class Intro extends React.Component {
  state = {
    currentRole: 'client'
  }

  constructor() {
    super()
    this.setCurrent = this.setCurrent.bind(this)
  }

  setCurrent(current) {
    this.setState({
      currentRole: current
    })
  }

  render() {
    return (
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
            <div>
              <img
                src={
                  this.state.currentRole === 'designer'
                    ? architectLogoHovered
                    : architectLogo
                }
                onClick={() => this.setCurrent('designer')}
                width="100"
                height="100"
              />
            </div>
            <span className="_spanner" />
            <div>
              <img
                src={
                  this.state.currentRole === 'client'
                    ? customerLogoHovered
                    : customerLogo
                }
                onClick={() => this.setCurrent('client')}
                width="100"
                height="100"
              />
            </div>
          </Flexer>
          <Divider />
          <div>
            <ButtonHatch current={this.state.currentRole} />
          </div>
        </div>
      </Container>
    )
  }
}

export default Intro
