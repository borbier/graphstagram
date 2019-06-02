import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Radio, Icon } from 'antd'
import styled from 'styled-components'

const SaveButton = styled.span`
  button {
    margin-right: 10px;
  }
  i {
    vertical-align: baseline;
  }
`

const HomeButton = withRouter(({ history }) => {
  return (
    <SaveButton>
      <Button
        shape="circle"
        icon="arrow-right"
        size="large"
        onClick={() => {
          history.push('/')
        }}
      />
    </SaveButton>
  )
})
export default HomeButton
