// import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const data = useStaticQuery(graphql`
  query SiteInfoQUery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
  }
`);

export const title = data.site.siteMetadata.title;
export const author = data.site.siteMetadata.author;
export const description = data.site.siteMetadata.description;
