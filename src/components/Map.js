import React from 'react'
import MapCell from './MapRoot'
import styled from 'styled-components'
import { latLongFinder } from '../method/LatLongFinder'
import { connect } from 'react-redux'
import { Color } from './Element/Identity'

// stateful compoene
class Map extends React.Component {
  componentDidMount() {}
  render() {
    const {
      zoom,
      markerable,
      height,
      width,
      mapType,
      disableUI,
      mapStyling,
      noPath,
      adjust,
      collections
    } = this.props
    const location =
      collections.type === 'connected-line'
        ? collections
        : latLongFinder(collections)
    let Height = height !== undefined ? height : '610px'
    let Width = width !== undefined ? width : '356px'
    let Position = adjust !== undefined ? 'static' : 'fixed'

    const MapContainer = styled.div`
      vertical-align: top;
      display: inline-block;
      position: ${Position};
      height: ${Height};
      width: ${Width};
    `
    return (
      <MapContainer>
        <MapCell
          location={location.coordinate}
          fromLocation={location.from}
          toLocation={location.to}
          zoom={collections.type === 'connected-line' ? 12 : 7}
          markerable={markerable}
          mapType={mapType}
          disableUI={disableUI}
          mapStyling={mapStyling}
          noPath={noPath}
          info={collections.type !== 'connected-line'}
          pathColor={
            collections.bg !== undefined ? collections.bg : Color.secondary
          }
          containerElement={
            <div style={{ height: `${height}`, width: `${width}` }} />
          }
        />
      </MapContainer>
    )
  }
}

function mapStateToProps(state) {
  return {
    collections: state.locations.marker
  }
}

// export default Map
export default connect(mapStateToProps)(Map)
