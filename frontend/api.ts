import sanityClient from './sanity';

let sanityQuery = (query: any, params: any) => sanityClient.fetch(query, params);

export const getFeaturedRestaurants =  () => {
    return sanityQuery(`*[_type=='featured']{
  ...,
  restaurants[]->{
    ...,
    dishes[]->{
      ...
    },
    type->{
    name
    }
  }
}`, {})
}

export const getFeaturedRestaurantById =  (id: number) => {
    return sanityQuery(`*[_type=='featured' && _id==$id]{
    ...,
    restaurants[]-> {
    ...,
    dishes[] -> {
    ty[e->{
    name
    }
    }[0]
    `, {id})
}

export const getCategories =  () => {
    return sanityQuery(`*[_type=='category']`, {})
}