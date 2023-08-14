import { addViewToListingRouter } from './addViewToListing';
import { createNewListingRoute } from './createNewListing';
import { getUserListingsRoute } from './getUserListings';
import { getAllListingsRoute } from './getAllListings';
import { getListingRoute } from './getListing';

export default [
  getAllListingsRoute,
  createNewListingRoute,
  getListingRoute,
  addViewToListingRouter,
  getUserListingsRoute,
];
