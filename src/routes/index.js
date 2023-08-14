import { addViewToListingRouter } from './addViewToListing';
import { createNewListingRoute } from './createNewListing';
import { getUserListingsRoute } from './getUserListings';
import { getAllListingsRoute } from './getAllListings';
import { updateListingRoute } from './updateListing';
import { deleteListingRoute } from './deleteListing';
import { getListingRoute } from './getListing';

export default [
  addViewToListingRouter,
  createNewListingRoute,
  getUserListingsRoute,
  getAllListingsRoute,
  updateListingRoute,
  deleteListingRoute,
  getListingRoute,
];
