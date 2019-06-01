import React from 'react'
import styled from 'styled-components'
import ICON_NULL from '../assets/image/icon/icon_null.png'
import ICON_CHECKED from '../assets/image/icon/icon_checked.png'

const Mason = styled.div`
  &._masonry {
  position: relative;
  cursor: pointer;
`

const IMageClicker = styled.img`
  &._checked {
    position: absolute;
    bottom: 8px;
    left: 8px;
    height: 84px;
    cursor: pointer;
  }
`

class Clicker extends React.Component {
  state = {
    check: false
  }

  render() {
    const { item, background } = this.props
    return (
      <Mason
        className="_masonry"
        style={{
          height: `${item}px`,
          lineHeight: `${item}px`,
          background: `url(${background}) no-repeat center center`,
          backgroundSize: 'cover'
        }}
        onClick={() => {
          if (this.state.check) {
            this.setState({ check: false })
          } else {
            this.setState({ check: true })
          }
        }}
      >
        <IMageClicker
          className="_checked"
          src={this.state.check ? ICON_CHECKED : ICON_NULL}
          alt=""
        />
      </Mason>
    )
  }
}

export default Clicker
