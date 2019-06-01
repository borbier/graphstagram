import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { MDBRow } from 'mdbreact'

import IMG_1 from '../assets/reference/interior/1.jpg'
import IMG_2 from '../assets/reference/interior/2.jpg'
import IMG_3 from '../assets/reference/interior/3.jpg'
import IMG_4 from '../assets/reference/interior/4.jpg'
import IMG_5 from '../assets/reference/interior/5.jpg'
import IMG_6 from '../assets/reference/interior/6.png'
import IMG_7 from '../assets/reference/interior/7.png'
import IMG_8 from '../assets/reference/interior/8.png'
import IMG_9 from '../assets/reference/interior/9.png'
import IMG_10 from '../assets/reference/interior/10.png'
import IMG_11 from '../assets/reference/interior/11.png'
import IMG_12 from '../assets/reference/interior/12.png'
import IMG_13 from '../assets/reference/interior/13.png'
import IMG_14 from '../assets/reference/interior/14.png'
import IMG_15 from '../assets/reference/interior/15.png'
import IMG_16 from '../assets/reference/interior/16.png'
import EXT_1 from '../assets/reference/exterior/1.png'
import EXT_2 from '../assets/reference/exterior/2.png'
import EXT_3 from '../assets/reference/exterior/3.png'
import EXT_4 from '../assets/reference/exterior/4.png'
import EXT_5 from '../assets/reference/exterior/5.png'
import EXT_6 from '../assets/reference/exterior/6.png'
import EXT_7 from '../assets/reference/exterior/7.png'
import EXT_8 from '../assets/reference/exterior/8.png'
import EXT_9 from '../assets/reference/exterior/9.png'
import EXT_10 from '../assets/reference/exterior/10.png'
import EXT_11 from '../assets/reference/exterior/11.png'
import EXT_12 from '../assets/reference/exterior/12.png'
import EXT_13 from '../assets/reference/exterior/13.png'
import EXT_14 from '../assets/reference/exterior/14.png'
import EXT_15 from '../assets/reference/exterior/15.png'
import EXT_16 from '../assets/reference/exterior/16.png'

const MasonContainer = styled.div`
  width: 100%;
  margin: auto;
  .masonry-with-columns {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    max-height: 1000px;
  }
  .masonry-with-columns div {
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 auto;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    background: #00997b;
    color: white;
    margin: 0 1rem 1rem 0;
    text-align: center;
    font-weight: 900;
    font-size: 2rem;
  }
  ._masonry {
    position: relative;
    img._checked {
      position: absolute;
      bottom: 8px;
      left: 8px;
      height: 40px;
      cursor: pointer;
    }
  }
`

const findInterior = index => {
  switch (index) {
    case 1:
      return IMG_1
    case 2:
      return IMG_2
    case 3:
      return IMG_3
    case 4:
      return IMG_4
    case 5:
      return IMG_5
    case 6:
      return IMG_6
    case 7:
      return IMG_7
    case 8:
      return IMG_8
    case 9:
      return IMG_9
    case 10:
      return IMG_10
    case 11:
      return IMG_11
    case 12:
      return IMG_12
    case 13:
      return IMG_13
    case 14:
      return IMG_14
    case 15:
      return IMG_15
    case 16:
      return IMG_16
    default:
      return IMG_16
  }
}

const findExterior = index => {
  switch (index) {
    case 1:
      return EXT_1
    case 2:
      return EXT_2
    case 3:
      return EXT_3
    case 4:
      return EXT_4
    case 5:
      return EXT_5
    case 6:
      return EXT_6
    case 7:
      return EXT_7
    case 8:
      return EXT_8
    case 9:
      return EXT_9
    case 10:
      return EXT_10
    case 11:
      return EXT_11
    case 12:
      return EXT_12
    case 13:
      return EXT_13
    case 14:
      return EXT_14
    case 15:
      return EXT_15
    case 16:
      return EXT_16
    default:
      return EXT_16
  }
}

class MasonList extends React.Component {
  constructor() {
    super()
    this.MasonryRef = React.createRef()
  }

  componentDidMount() {
    this.arrangeMasonry()
  }

  arrangeMasonry = () => {
    const numCols = 3
    const colHeights = Array(numCols).fill(0)
    const container = ReactDOM.findDOMNode(this.MasonryRef.current)

    Array.from(container.children).forEach((child, i) => {
      const order = i % numCols
      child.style.order = order
      colHeights[order] += parseFloat(child.clientHeight)
    })
    container.style.height = Math.max(...colHeights) + 'px'
  }
  render() {
    const { genre, lists } = this.props
    return (
      <MasonContainer>
        <MDBRow className="masonry-with-columns" ref={this.MasonryRef}>
          {lists.map((item, index) => {
            let cs = 'null'
            const background =
              genre === 'exterior' ? findExterior(index) : findInterior(index)
            return (
              <div
                className="_masonry"
                style={{
                  height: `${item}px`,
                  lineHeight: `${item}px`,
                  background: `url(${background}) no-repeat center center`,
                  backgroundSize: 'cover'
                }}
              />
            )
          })}
        </MDBRow>
      </MasonContainer>
    )
  }
}

export default MasonList
