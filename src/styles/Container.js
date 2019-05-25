import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  z-index: 2;
  width: 100%;
  background: #3c3c3c94;
  padding: 20px 0 12px;
  height: 10vh;
  ._rails-container {
    max-width: 840px;
    margin-left: 16px;
  }
  ._transit-tag {
    color: #ffc800;
    font-size: 19px;
    font-weight: 700;
    span {
      margin-top: -2px;
      display: inline-block;
      font-size: 36px;
    }
  }
`
