import React from 'react'
import styled from 'styled-components'
import { compose, withProps } from 'recompose'
import { Color } from './Element/Identity'
import Styling from '../assets/koh-map-style.json'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Polyline,
  InfoWindow,
  Marker
} from 'react-google-maps'

// CONFIG
const API_KEY = 'AIzaSyABQ_VlKDqdqHUcOKKRIkMvNljwWDUIzMc'
const LIBRARY = 'geometry,drawing,places'

export const MapText = styled.span`
  text-transform: capitalize;
  font-weight: 500;
  font-size: 13px;
  color: #4e4e4e;
  margin-left: 4px;
`

// Method
const zoomCalc = locs => {
  var GLOBE_WIDTH = 256
  var west = locs[0].lng
  var east = typeof locs[1] !== 'undefined' ? locs[1].lng : 0
  var angle = east - west
  if (angle < 0) {
    angle += 360
  }
  var zoom = Math.round(Math.log((320 * 320) / angle / GLOBE_WIDTH) / Math.LN2)
  const zoomLevel = east === 0 || zoom === 0 ? 6 : zoom - 1
  return zoomLevel
}
const collecCenter = locs => {
  let latReduce =
    locs.map(loc => loc.lat).reduce((lat, val) => lat + val) / locs.length
  let lngReduce =
    locs.map(loc => loc.lng).reduce((lat, val) => lat + val) / locs.length
  return { lat: latReduce, lng: lngReduce }
}
const checkZoom = (t, alt) => {
  // console.log('zoom ', t)
  return t !== undefined || t != null ? parseInt(t, 10) : alt
}

const checkNull = (t, alt) => {
  return t !== undefined || t != null ? t : alt
}

// Map Composer
const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&v=3.exp&libraries=${LIBRARY}`,
    loadingElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(
  ({
    markerable,
    noPath,
    location,
    fromLocation,
    toLocation,
    zoom,
    info,
    pathColor,
    mapType,
    disableUI,
    mapStyling,
    onToggleOpen
  }) => (
    <GoogleMap
      defaultZoom={checkZoom(zoom, 7)}
      defaultCenter={collecCenter(location)}
      center={collecCenter(location)}
      zoom={zoom}
      mapTypeId={checkNull(mapType, 'roadmap')}
      //options={disableUI && { disableDefaultUI: true }}
      defaultOptions={{
        styles: mapStyling && Styling,
        disableDefaultUI: disableUI && true
      }}
    >
      {markerable &&
        location.map((key, index) => (
          <Marker
            key={index}
            position={{ lat: key.lat, lng: key.lng }}
            onClick={() => alert(key.name)}
            icon={{
              path: 'M-20,0a20,20 0 1,0 40,0a20,20 0 1,0 -40,0',
              fillColor: '#FFFFFF',
              fillOpacity: 1,
              strokeWeight: 4,
              strokeColor: pathColor,
              scale: 0.3
            }}
          >
            <InfoWindow>
              <div className="_description">
                <MapText>{fromLocation}</MapText>
              </div>
            </InfoWindow>
          </Marker>
        ))}
      {markerable && !noPath && (
        <Polyline
          path={location}
          geodesic={true}
          options={{
            strokeColor: pathColor,
            strokeWeight: 3
          }}
        />
      )}
    </GoogleMap>
  )
)

export default MapComponent
// Read more | https://tomchentw.github.io/react-google-maps/
