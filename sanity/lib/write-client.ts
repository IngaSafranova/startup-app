import 'server-only';

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, token } from '../env'

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation.
  //If want real time data make false. to get new data after refresh.
})

if (!writeClient.config().token) {
  throw new Error('Write token not found.')
}
