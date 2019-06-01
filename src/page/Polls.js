import React, { useState } from 'react'
import BackButton from '../components/Button/Back'
import background from '../assets/image/graph_background.png'
import {
  Button,
  Dropdown,
  Divider,
  Menu,
  Icon,
  Input,
  Col,
  Row,
  message
} from 'antd'
import { withRouter } from 'react-router-dom'
import Header from '../components/Header'
import styled from 'styled-components'
import Logo from '../assets/image/icon/logo_architect.jpg'
const { TextArea } = Input
const question = [
  {
    topic: 'Type',
    choices: ['house', 'condominium', 'hotel', 'resort', 'store', 'office']
  },
  {
    topic: 'Style',
    choices: [
      'loft',
      'tropical',
      'minimal',
      'industrial',
      'brutalist',
      'comtemporary'
    ]
  },
  {
    topic: 'Area',
    choices: ['narrow', 'medium', 'wide']
  },
  {
    topic: 'Budget',
    choices: ['economy', 'medium', 'high']
  }
]

const ButtonHatch = withRouter(({ history }) => (
  <Button
    type="primary"
    shape="round"
    size="large"
    style={{ minWidth: '200px' }}
    onClick={() => {
      history.push('/exterior')
    }}
  >
    Next | Exterior
  </Button>
))

function ToggleButton(props) {
  const [toggleState, setToggleState] = useState('off')

  function toggle() {
    setToggleState(toggleState === 'off' ? 'on' : 'off')
  }

  return (
    <Button type={toggleState === 'on' ? 'primary' : ''} onClick={toggle}>
      {props.text}
    </Button>
  )
}

const Container = styled.div`
  text-align: center;
  position: relative;
  display: flex;
  margin: 20px 0;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ._container {
    width: 50vw;
  }
`

class Polls extends React.Component {
  constructor() {
    super()
    this.state = {
      quote: ''
    }
    this.choiceSelect = this.choiceSelect.bind(this)
    this.updateQuote = this.updateQuote.bind(this)
  }
  updateQuote = e => {
    this.setState({ quote: e.target.value })
  }
  choiceSelect = (props, item) => {
    // console.log('COLLECT >>>', props, item)
    const getIndex = props.key.split('_')[1]
    const findQuery = question.find(list => list.topic === item).choices[
      getIndex
    ]
    let result = ''
    switch (item) {
      case 'Type':
        result = `We want ${findQuery}, `
        break
      case 'Style':
        result = `with ${findQuery} style, `
        break
      case 'Area':
        result = `a ${findQuery} shape {SIZE} SQM., `
        break
      case 'Budget':
        result = `and ${findQuery} cost around {BUDGET} Million THB.`
        break
    }
    this.setState({
      quote: `${this.state.quote}${result}`
    })
    // message.info(result)
    message.success('asked .. ')
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
            height: '233px',
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
            height: '233px',
            opacity: '0.4',
            transform: 'scale(-1)'
          }}
          alt=""
        />
        <div className="_container">
          <img
            src={Logo}
            alt=""
            style={{ height: '130px', marginBottom: '24px' }}
          />
          <Divider>
            <span style={{ fontSize: '24px' }}>Select your solution</span>
          </Divider>
          {question.map(({ topic, choices }) => (
            <Dropdown
              overlay={e => (
                <Menu onClick={e => this.choiceSelect(e, topic)}>
                  {choices.map(choice => (
                    <Menu.Item>{choice}</Menu.Item>
                  ))}
                </Menu>
              )}
              placement="bottomCenter"
            >
              <Button
                style={{
                  minWidth: '150px',
                  height: '54px',
                  fontSize: '18px',
                  marginRight: '10px'
                }}
              >
                {topic}
              </Button>
            </Dropdown>
          ))}

          <Divider>In case of no choice that fit your solution</Divider>
          <TextArea
            rows={3}
            onChange={e => this.updateQuote(e)}
            placeholder="Put your word here."
            value={this.state.quote}
            style={{
              fontSize: '20px',
              maxWidth: '636px',
              marginLeft: '-10px'
            }}
          />
          <Divider />
          <div>
            <BackButton link="/" />
            <ButtonHatch />
          </div>
        </div>
      </Container>
    )
  }
}

export default Polls
