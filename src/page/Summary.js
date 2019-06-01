import React from 'react'
import styled from 'styled-components'
import logo from '../assets/image/logo.png'
import { Button, Radio, Icon } from 'antd'
import { withRouter } from 'react-router-dom'
import MasonList from '../components/MasonList'
import BackButton from '../components/Button/Back'

const Whole = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #efefef;
  text-align: center;
`
const Image = styled.img`
  height: 240px;
`
const Flexer = styled.div`
  display: flex;
  justify-content: center;
  button {
    margin-right: 13px;
  }
  .anticon {
    vertical-align: text-top;
  }
`

const QuationContainer = styled.div`
  margin: auto;
  max-width: 900px;
  width: 70vw;
  min-height: 250px;
  background: white;
  padding: 48px;
  text-align: left;
  ${'' /* border-radius: 12px; */};
  box-shadow: 0 21px 21px #d0d0d0;
  border: 1px solid #dadada;
  font-family: 'Sukhumvit Set';
  font-size: 19px;
  ._row {
    display: flex;
    line-height: 36px;
    .label {
      min-width: 148px;
    }
    .desc {
      flex-grow: 1;
      position: relative;
      ._dashed {
        display: inherit;
        left: 20px;
        width: 85%;
        height: 2px;
        background: #eaeaea;
      }
    }
  }
`

const Space = ({ size = 28 }) => {
  return <div style={{ height: `${size}px` }} />
}

const CButton = withRouter(({ history, text, linkTo, icon }) => {
  return (
    <Button
      type="primary"
      shape="round"
      icon={icon}
      size="large"
      onClick={() => {
        history.push(linkTo)
      }}
    >
      {text}
    </Button>
  )
})

const MoodList = styled.div`
  display: flex;
  ._split {
    flex-grow: 1;
    ._small {
      font-size: 15px;
    }
  }
  ._spanner {
    width: 40px;
  }
`

const Row = ({ label, text }) => (
  <div className="_row">
    <span className="label">{label}</span>
    <span className="desc">
      {text}
      <span className="_dashed" />
    </span>
  </div>
)

const Intro = () => (
  <Whole>
    <Space size="72" />
    <h3>SUMMARY</h3>
    <QuationContainer>
      <h4>Office A เสนอ Owner B</h4>
      <Row label="ประเภทโครงการ : " text="โรงเเรม Low rise" />
      <Row label="ขนาดพื้นที่ : " text="8,000 ตรม." />
      <Row label="Style : " text="Loft" />
      <Row label="งบประมาณ : " text="200 ล้านบาท" />
      <Row label="อื่นๆ : " text="ขอหรูๆ ..." />
      <Space />
      <h4>Mood & Tone</h4>
      <MoodList>
        <div className="_split">
          <div className="_small">Exterior design</div>
          <MasonList genre="exterior" lists={[80, 44, 60, 100, 120]} />
        </div>
        <div className="_spanner" />
        <div className="_split">
          <div className="_small">Interior design</div>
          <MasonList
            genre="interior"
            lists={[90, 80, 44, 60, 100, 90, 80, 54, 60, 100]}
          />
        </div>
      </MoodList>
    </QuationContainer>
    <Space size="40" />
    <Flexer>
      <BackButton link="/interior" />
      <CButton text="Print" linkTo="/" icon="printer" />
      <CButton text="Email" linkTo="/" icon="mail" />
      <CButton text="Share" linkTo="/" icon="share-alt" />
    </Flexer>
    <Space size="54" />
  </Whole>
)
export default Intro
