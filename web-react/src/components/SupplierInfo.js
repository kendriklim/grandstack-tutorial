import React from 'react'
import MapResults from './MapResults'
import { useQuery, gql } from '@apollo/client'

/*
const PROPERTY_SEARCH_QUERY = gql`
  {
    properties(
      options: { limit: 200 }
      where: {
        location_LTE: {
          point: { latitude: 45.667397, longitude: -111.054718 }
          distance: 2000
        }
      }
    ) {
      AddressLin
      bedrooms
      full_baths
      half_baths
      sqft
      in_subdivision {
        name
      }
      location {
        latitude
        longitude
      }
    }
  }
`
*/
const PROPERTY_SEARCH_QUERY = gql`
  {
    data1s {
      Shipped_from
    }
  }
`

export default function Supplier_Info() {
  const { loading, error, data } = useQuery(PROPERTY_SEARCH_QUERY)

  if (error) return <p>Error</p>
  if (loading) return <p>Loading...</p>

  return <MapResults properties={data.properties} />
}
