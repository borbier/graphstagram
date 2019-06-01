import React, { useState } from 'react'
import { Button, Dropdown, Divider, Menu, Input, Col, Row } from 'antd'
import { withRouter } from 'react-router-dom'
import Header from '../components/Header'
import styled from 'styled-components'

const question = [
    {
        "topic": "Type",
        "choices": [
            "house",
            "condominium",
            "hotel",
            "resort",
            "store",
            "office"
        ]
    },
    {
        "topic": "Style",
        "choices": [
            "house",
            "condominium",
            "hotel",
            "resort",
            "store",
            "office"
        ]
    },
    {
        "topic": "Area",
        "choices": [
            "narrow",
            "medium",
            "wide",
        ]
    },
    {
        "topic": "Budget",
        "choices": [
            "economy",
            "medium",
            "high"
        ]
    }
];

const ButtonHatch = withRouter(({ history }) => (
    <Button
      type="primary"
      shape="round"
      icon="search"
      size="large"
      onClick={() => {
        history.push('/main')
      }}
    >
      Search
    </Button>
  ))

function ToggleButton(props) {
    const [toggleState, setToggleState] = useState("off")

    function toggle() {
        setToggleState(toggleState === "off" ? "on" : "off")
    }

    return <Button type={toggleState === "on" ? "primary" : ""} onClick={toggle}>{props.text}</Button>
}

const Container = styled.div`
  text-align: center;
  margin: 20px 0;
`
const choices = (props) => (
    <Menu>{props.map(choice => <Menu.Item>{choice}</Menu.Item>)}</Menu>
)

const Questionnaire = (props) => (
    <Dropdown overlay={choices(props.choices)} placement="bottomCenter">
        <Button>{props.topic}</Button>
    </Dropdown>
)

const Polls = () => (
  <div>
    <Header />
    <Container>
        <Row>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}></Col>
            <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                <Divider>Select your solution</Divider>
                    <Questionnaire choices={question[0].choices} topic={question[0].topic} />
                    <Questionnaire choices={question[1].choices} topic={question[1].topic} />
                    <Questionnaire choices={question[2].choices} topic={question[2].topic} />
                    <Questionnaire choices={question[3].choices} topic={question[3].topic} />
                <Divider>In case of no choice that fit your solution</Divider>
                    <Input placeholder="Put your word here." />
                <ButtonHatch />
            </Col>
            <Col xs={2} sm={4} md={6} lg={8} xl={10}></Col>
        </Row>
    </Container>
  </div>
)
export default Polls
