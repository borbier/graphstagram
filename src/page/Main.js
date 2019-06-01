import React from 'react'
import logo from '../assets/image/logo.png'
import { Button, Radio, Icon } from 'antd'
import { withRouter } from 'react-router-dom'
import Header from '../components/Header'
import styled from 'styled-components'
import { MDBRow } from 'mdbreact'
import IMG_1 from '../assets/image/arch/1.jpg'
import IMG_2 from '../assets/image/arch/2.jpg'
import IMG_3 from '../assets/image/arch/3.jpg'
import IMG_4 from '../assets/image/arch/4.jpg'
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
`
const MasonContainer = styled.div`
  .masonry-with-flex {
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
  .masonry-with-flex div {
    width: auto;
    background: #975a58;
    color: white;
    margin: 0 1rem 1rem 0;
    text-align: center;
    font-weight: 900;
    font-size: 2rem;
    img {
      width: 180px;
    }
  }
`

const Main = () => (
  <div>
    <Header />
    {/* <div>Main</div> */}
    <Container>
      <InputGroup compact>
        <Select defaultValue="Option1">
          <Option value="Option1">Option1</Option>
          <Option value="Option2">Option2</Option>
        </Select>
        <Input style={{ width: '50%' }} defaultValue="input content" />
        <InputNumber />
      </InputGroup>
      <MasonContainer>
        <MDBRow className="masonry-with-flex">
          <div>
            <img src={IMG_1} alt="" />
          </div>
          <div>
            <img src={IMG_2} alt="" />
          </div>
          <div>
            <img src={IMG_3} alt="" />
          </div>
          <div>
            <img src={IMG_4} alt="" />
          </div>
          <div>
            <img src={IMG_1} alt="" />
          </div>
          <div>
            <img src={IMG_2} alt="" />
          </div>
          <div>
            <img src={IMG_3} alt="" />
          </div>
          <div>
            <img src={IMG_4} alt="" />
          </div>
          <div>
            <img src={IMG_1} alt="" />
          </div>
          <div>
            <img src={IMG_2} alt="" />
          </div>
          <div>
            <img src={IMG_3} alt="" />
          </div>
          <div>
            <img src={IMG_4} alt="" />
          </div>
          <div>
            <img src={IMG_1} alt="" />
          </div>
          <div>
            <img src={IMG_2} alt="" />
          </div>
          <div>
            <img src={IMG_3} alt="" />
          </div>
          <div>
            <img src={IMG_4} alt="" />
          </div>
        </MDBRow>
      </MasonContainer>
    </Container>

    {/* <Masonry style={{ margin: 'auto' }} /> */}
  </div>
)
export default Main
