import React from "react"
import { server } from "../../lib/api";
import { ListingData, DeleteListingData, DeleteListingVariable } from "./types";

const LISTINGS = `
query Listings{
  listings {
    id
    title
    image
    address
    price
    numOfGuests
    numOfBeds
    numOfBaths
    rating
  }
} 
`
const DELETE_LISTING = `
mutation DeleteListing($id: ID!) {
  deleteListing(id: $id) {
    id
  }
}
`

interface Props {
  title : string
}

export const Listings = ({title}: Props) => {
  const fetchListings = async () => {
    const { data } = await server.fetch<ListingData>({query: LISTINGS})
    console.log(data)
  }
  const deleteListing = async () => {
    const { data } = await server.fetch<DeleteListingData, DeleteListingVariable>({
      query: DELETE_LISTING,
      variables: {
        id: "5fbf8ac52c04125813a31f52"
      }
    })
    console.log(data)
  }
  return  (
    <div>
      <h2>{title}</h2>
      <button onClick={fetchListings}>Query Listings!</button>
      <button onClick={deleteListing}>Delete a Listing!</button>
    </div>
  );

}