import React from 'react'
import styled from 'styled-components'
import { Button, Radio, Icon } from 'antd'
import { withRouter } from 'react-router-dom'

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

const Polls = () => (
    <div>
    <ButtonHatch />
    </div>
)

export default Polls