import sanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
  projectId: "2vlpc6sp",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21"
});

// to get the links from the images in sanity studio
const builder = ImageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

export default client

// sanity cors add http://localhost:3000