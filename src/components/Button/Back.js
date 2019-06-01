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

const BackButton = withRouter(({ history, link }) => {
  return (
    <SaveButton>
      <Button
        shape="circle"
        icon="arrow-left"
        size="large"
        onClick={() => {
          history.push(link)
        }}
      />
    </SaveButton>
  )
})
export default BackButton
