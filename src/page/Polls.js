import React, { useState } from 'react'
import { Button, Radio, Icon } from 'antd'
import { withRouter } from 'react-router-dom'
import Header from '../components/Header'
import styled from 'styled-components'

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

const Polls = () => (
  <div>
    <Header />
    {/* <div>Main</div> */}
    <Container>
    <ToggleButton text="Condominium"/>
    <ButtonHatch />
    </Container>

    {/* <Masonry style={{ margin: 'auto' }} /> */}
  </div>
)
export default Polls
