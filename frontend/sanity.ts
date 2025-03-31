import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const client = sanityClient({
    projectId: 'xlud2j4e',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2025-03-31',
});

const builder = imageBuilder(client);

export const urlFor = (source: SanityImageSource) =>builder.image(source);

export default client;