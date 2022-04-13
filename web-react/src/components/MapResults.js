import React, { useState } from 'react'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import clsx from 'clsx'
import MapGL, { Marker } from '@urbica/react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

export default function MapResults(props) {
  console.log(props.properties)
  const theme = useTheme()

  // 地图上Marker的style
  const style = {
    padding: '4px',
    color: '#fff',
    cursor: 'pointer',
    background: '#1978c8',
    borderRadius: '50%',
  }

  // 整体style设定
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 540,
    },
  }))
  const classes = useStyles(theme)
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  // 控制地图可以移动和缩放
  const [viewport, setViewport] = useState({
    latitude: 45.667397,
    longitude: -111.054718,
    zoom: 15,
  })

  // 定义Marker被点击时会发生什么
  const [currentProperty, setCurrentProperty] = useState(props.properties[0])

  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} md={12} lg={12}>
          <Paper className={fixedHeightPaper}>
            <MapGL
              style={{ width: '100%', height: '100%' }}
              mapStyle="mapbox://styles/mapbox/light-v9"
              accessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              // 控制地图可以移动和缩放
              latitude={viewport.latitude}
              longitude={viewport.longitude}
              zoom={viewport.zoom}
              onViewportChange={setViewport}
            >
              {props.properties.map((p, i) => {
                // 根据Search中GraphQL的查询内容来显示Marker
                return (
                  <Marker
                    key={i}
                    longitude={p.location.longitude}
                    latitude={p.location.latitude}
                  >
                    <div
                      onClick={() => setCurrentProperty(p)} // 点击Marker时会发生什么
                      style={style}
                    ></div>
                  </Marker>
                )
              })}
            </MapGL>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <p>{currentProperty.AddressLin}</p>
            <ul>
              <li>Square Feet: {currentProperty.sqft}</li>
              <li>Bedrooms: {currentProperty.bedrooms}</li>
              <li>Full baths: {currentProperty.full_baths}</li>
              <li>Half baths: {currentProperty.half_baths}</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <p>{currentProperty.AddressLin}</p>
            <ul>
              <li>Square Feet: {currentProperty.sqft}</li>
              <li>Bedrooms: {currentProperty.bedrooms}</li>
              <li>Full baths: {currentProperty.full_baths}</li>
              <li>Half baths: {currentProperty.half_baths}</li>
            </ul>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <p>{currentProperty.AddressLin}</p>
            <ul>
              <li>Square Feet: {currentProperty.sqft}</li>
              <li>Bedrooms: {currentProperty.bedrooms}</li>
              <li>Full baths: {currentProperty.full_baths}</li>
              <li>Half baths: {currentProperty.half_baths}</li>
            </ul>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
/*
import React from 'react'

// import RatingsChart from './RatingsChart'
import DemoCard from './infoCard'
import { Info as InfoIcon } from '@material-ui/icons'
import { Col } from 'reactstrap'

export default function MapResults() {
  return (
    <div>
      <Col>
        <div
          style={{
            display: 'flex',
            paddingLeft: '12px',
            verticalAlign: 'center',
          }}
        >
          <InfoIcon />
          <div style={{ paddingLeft: '12px', paddingBottom: '12px' }}>
            <b className="page-title">Suppliers Information</b>
          </div>
        </div>
        <div className="info_main_div">
          <div className="supplier_info_item">
            <DemoCard />
          </div>
        </div>
      </Col>
    </div>
  )
}
*/
