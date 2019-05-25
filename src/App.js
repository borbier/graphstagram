import React from 'react'
import './App.css'
import Map from './components/Map'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { updateMaker } from './stores/Locations'
import { LOCATION_DATAS, BTSLocationSet } from './assets/data'
import { measureTotal } from './method/MeasureDistance'
import { Container } from './styles/Container'

const Describe = styled.div`
  position: absolute;
  top: 10vh;
  right: 2vw;
  height: 70vh;
  width: 280px;
  background: white;
  z-index: 2;
  border-radius: 7px;
  text-align: left;
  overflow-y: scroll;
  ._pad {
    padding: 20px;
  }
  h3 {
    margin: 0;
    font-size: 15px;
  }
  h1 {
    margin: 0;
    font-size: 22px;
    ._blog-color {
      width: 20px;
      height: 20px;
      margin-right: 2px;
      display: inline-block;
      vertical-align: middle;
    }
  }
  ul {
    margin-top: 8px;
    padding-left: 22px;
    li {
    }
  }
`
const Link = styled.a`
  z-index: 3;
  background: white;
  padding: 6px 10px;
  border-radius: 13px;
  margin: 0 2px;
  cursor: pointer;
  display: inline-block;
  margin-bottom: 10px;
  font-size: 11px;
  &:hover,
  &:focus {
    box-shadow: 0 0 7px grey;
  }
  &._active {
    background: #ffc800;
  }
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    this.props.dispatch(updateMaker(e))
  }
  componentDidMount() {
    // this.props.dispatch(updateMaker(LOCATION_DATAS[0]))
  }
  render() {
    const BTS_MAP = Object.keys(BTSLocationSet.marker)
    const { collections } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <Map height="768px" width="100%" disableUI markerable />
        </header>
        {collections.type === 'connected-line' && (
          <Describe>
            <div className="_pad">
              <h1>
                <span
                  className="_blog-color"
                  style={{ background: collections.bg }}
                />{' '}
                {collections.from}
              </h1>
              <div style={{ marginTop: '7px' }}>
                <h3>รวมทั้งหมด {collections.coordinate.length}สถานี</h3>
                <h3>
                  ระยะทางประมาณ {measureTotal(collections.coordinate)} กม.
                </h3>
              </div>

              <ul>
                {collections.coordinate.map(mark => (
                  <li>{mark.name}</li>
                ))}
              </ul>
            </div>
          </Describe>
        )}
        <Container>
          <div className="_transit-tag">
            BANGKOK
            <br />
            <span>2030</span>
          </div>
          {/* {LOCATION_DATAS.map(place => (
            <Link
              className={place.from === collections.from ? '_active' : ''}
              onClick={() => this.handleClick(place)}
            >
              {place.from}
            </Link>
          ))} */}
          <div className="_rails-container">
            {BTS_MAP.map(key => {
              const marker = BTSLocationSet.marker[key]
              return (
                <Link
                  className={marker.from === collections.from ? '_active' : ''}
                  onClick={() => this.handleClick(marker)}
                >
                  {marker.from}
                </Link>
              )
            })}
          </div>
        </Container>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    collections: state.locations.marker
  }
}

export default connect(mapStateToProps)(App)
