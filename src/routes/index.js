import { addViewToListingRouter } from './addViewToListing';
import { getUserListingsRoute } from './getUserListings';
import { getAllListingsRoute } from './getAllListings';
import { getListingRoute } from './getListing';

export default [
  getAllListingsRoute,
  getListingRoute,
  addViewToListingRouter,
  getUserListingsRoute,
];
