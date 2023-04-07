import { groq } from "next-sanity";
import { sanityClient } from "./client";

export const fetchAllWorks = () => {
  return sanityClient.fetch(groq`
        *[_type == "work" && !(_id in path("drafts.**"))] {
            name,
            "slug": slug.current,
            "image": image.asset -> url
        }
    `);
};

export const fetchAllBlogs = () => {
  return sanityClient.fetch(groq`
        *[_type == "blog" && !(_id in path("drafts.**"))] {
            name,
            "slug": slug.current,
            "image": image.asset -> url
        }
    `);
};
