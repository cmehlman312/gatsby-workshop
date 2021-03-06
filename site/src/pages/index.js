import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import TalkCard from "../components/talkCard";
import sketchnoting from "../images/taking-notes.svg";
import { useStaticQuery, graphql } from "gatsby";

const Hero = ({ talks }) => (
  <div className="text-center">
    <h1 className="text-5xl font-extrabold text-blue-500 leading-9 tracking-tight font-inter">
      October 7th, 2020
      <br />
      Cyberspace
    </h1>
    <br />
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-4...">
        <img src={sketchnoting} alt="illustrated woman doodling" />
      </div>
      <div className="text-lg text-gray-700 col-span-6 sm:col-span-6 md:col-span-2 lg:col-span-2 xl:col-span-2...">
        <h2 className="text-3xl font-bold text-gray-800 leading-8 tracking-tight">
          Join Us!
        </h2>{" "}
        We're looking forward to gathering virtually in October 2020 for our
        inaugural conference! Below you can find our schedule and learn more
        about our dynamic lineup. Be sure to secure a ticket before we sell out
        as tickets are limited.
      </div>
    </div>
    <br />
    <h2
      className="text-5xl font-extrabold text-blue-500 leading-9 tracking-tight font-inter p-4"
      id="schedule"
    >
      Schedule
    </h2>
    {talks.map((talk) => {
      return <TalkCard talk={talk.node} key={talk.node.name} />;
    })}
  </div>
);

function IndexPage() {
  const data = useStaticQuery(graphql`
    query FetchSpeakers {
      allSpeakersYaml {
        edges {
          node {
            id
            avatar
            name
            title
            time
            fields {
              slug
            }
            description
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <Hero talks={data.allSpeakersYaml.edges} />
    </Layout>
  );
}

export default IndexPage;
