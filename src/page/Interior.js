import React from 'react'
import ReactDOM from 'react-dom'
import logo from '../assets/image/logo.png'
import { Button, Radio, Icon, Divider } from 'antd'
import { withRouter } from 'react-router-dom'
import Header from '../components/Header'
import styled from 'styled-components'
import { MDBRow } from 'mdbreact'
import Clicker from '../components/Clicker'
import BackButton from '../components/Button/Back'
import IMG_1 from '../assets/reference/interior/1.jpg'
import IMG_2 from '../assets/reference/interior/2.jpg'
import IMG_3 from '../assets/reference/interior/3.jpg'
import IMG_4 from '../assets/reference/interior/4.jpg'
import IMG_5 from '../assets/reference/interior/5.jpg'
import IMG_6 from '../assets/reference/interior/6.jpg'
import IMG_7 from '../assets/reference/interior/7.jpg'
import IMG_8 from '../assets/reference/interior/8.jpg'
import IMG_9 from '../assets/reference/interior/9.jpg'
import IMG_10 from '../assets/reference/interior/10.jpg'
import IMG_11 from '../assets/reference/interior/11.jpg'
import IMG_12 from '../assets/reference/interior/12.jpg'
import IMG_13 from '../assets/reference/interior/13.jpg'
import IMG_14 from '../assets/reference/interior/14.jpg'
import IMG_15 from '../assets/reference/interior/15.jpg'
import IMG_16 from '../assets/reference/interior/16.jpg'
import {
  Input,
  Col,
  Row,
  Select,
  InputNumber,
  DatePicker,
  AutoComplete,
  Cascader
} from 'antd'

const InputGroup = Input.Group
const { Option } = Select

const Container = styled.div`
  text-align: center;
  margin: 20px 0;
  min-height: 100vh;
`
const Space = ({ height = 40 }) => <div style={{ margin: `${height}px 0` }} />
const SpaceLess = styled.div`
  margin: 20px 0;
`
const MasonContainer = styled.div`
  width: 80vw;
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
    max-height: 600px;
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
const findIMg = index => {
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
      return IMG_9
  }
}

const ButtonHatch = withRouter(({ history }) => (
  <Button
    type="primary"
    shape="round"
    size="large"
    style={{ minWidth: '200px' }}
    onClick={() => {
      history.push('/summary')
    }}
  >
    Summary
  </Button>
))

class Main extends React.Component {
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
    const listSets = [180, 160, 90, 120, 200, 240, 110, 150, 160, 180, 160, 90]
    return (
      <div>
        <Container>
          <Divider>
            <span style={{ fontSize: '24px' }}>
              Select favourite interior schematic.
            </span>
          </Divider>
          <MasonContainer>
            <MDBRow className="masonry-with-columns" ref={this.MasonryRef}>
              {listSets.map((item, index) => {
                let cs = 'null'
                return <Clicker item={item} background={findIMg(index)} />
              })}
            </MDBRow>
          </MasonContainer>
          <Space height="10" />
          <div>
            <BackButton link="/exterior" />
            <ButtonHatch />
          </div>
          <SpaceLess />
        </Container>
      </div>
    )
  }
}

export default Main
