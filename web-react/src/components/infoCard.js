/* 
import React from 'react'
import {
  LocationOn as LocationOnIcon,
  Comment as CommentIcon,
  Apps as InventoryIcon,
  DataUsage as DataUsageIcon,
  More as MoreIcon,
} from '@material-ui/icons'

import PropTypes from 'prop-types'

const demosx = {
  display: 'flex',
  alignSelf: 'center',
  fontSize: '18px',
  transform: 'translate(0px,4px)',
}
const configs = {
  location: {
    icon: <LocationOnIcon sx={demosx} />,
    caption: 'Unknown location',
  },
  inventory: {
    icon: <InventoryIcon sx={demosx} />,
    caption: 'Unknown inventory',
  },
  type: {
    icon: <CommentIcon sx={demosx} />,
    caption: 'Unknown type',
  },
  utilisation: {
    icon: <DataUsageIcon sx={demosx} />,
    caption: 'Unknown utilisation',
  },
  facilities: {
    icon: <MoreIcon sx={demosx} />,
    caption: 'Unkonwn facilities',
  },
}
const defaultConfigs = {
  label: 'Unknown label',
  logo: `${process.env.PUBLIC_URL}/img/burger.svg`,
}
const configLabels = Object.keys(configs)
const DemoCard = ({
  label,
  picture,
  location,
  inventory,
  type,
  utilisation,
  facilities,
}) => {
  const data = {
    label,
    picture,
    location,
    inventory,
    type,
    utilisation,
    facilities,
  }
  return (
    <div className="supplier_info_card_div">
      <div>
        <div className="info_card_top_div">
          <img
            src={data.picture ? data.picture : defaultConfigs.logo}
            alt="Not available yet"
          />
        </div>
        <div className="info_card_bottom_div">
          {configLabels.map((key) => (
            <div className="info_card_item_div">
              {configs[key].icon}
              <p className="info_content_p">
                {data[key] ? data[key] : configs[key].caption}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="info_supplier_name_p">
          {data.label ? data.label : defaultConfigs.label}
        </p>
      </div>
    </div>
  )
}
DemoCard.propTypes = {
  label: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  inventory: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  utilisation: PropTypes.string.isRequired,
  facilities: PropTypes.string.isRequired,
}
export default DemoCard
*/

import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { useQuery, gql } from '@apollo/client'

const GET_RECENT_REVIEWS_QUERY = gql`
  {
    data1s {
      id
      Supplier_name
      Shipped_from
      Warehouse_cost
      Shipment_cost
      Rejection_rate
    }
  }
`

export default function DemoCard() {
  const theme = useTheme()
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
  const { loading, error, data } = useQuery(GET_RECENT_REVIEWS_QUERY)
  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  return (
    <Grid item xs={4}>
      <Paper className={classes.paper}>
        <ul>
          <li>Square Feet: {data.Supplier_name}</li>
          <li>Bedrooms: {data.Supplier_name}</li>
          <li>Full baths: {data.Supplier_name}</li>
          <li>Half baths: {data.Supplier_name}</li>
        </ul>
      </Paper>
    </Grid>
  )
}
