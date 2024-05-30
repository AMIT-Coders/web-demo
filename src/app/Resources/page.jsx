// "use client";
import React from "react";
import "./style.scss";
import Head from "next/head";
import { client } from "../../../sanity/lib/client";
import groq from "groq";

import Apply from "../Containers/Apply/Apply";
import ContactSection from "../Containers/ContactSection/ContactSection";
import Header from "./Components/Header/Header.jsx";
import RightPanel from "./Components/RightPanel/RightPanel.jsx";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import BlogsV1 from "./Components/BlogsV1/BlogsV1.jsx";
import BlogsV2 from "./Components/BlogsV2/BlogsV2.jsx";
import BlogsV3 from "./Components/BlogsV3/BlogsV3.jsx";

const revalidate = 30;

const query = groq`*[_type == "post"]{
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc)`;

const Resources = async () => {
  // useEffect(() => {
  //   document.title = `Resources - AMIT Coders`;
  // }, []);

  const posts = await client.fetch(query, revalidate);

  return (
    <div className="resources-page">
      <Head>
        <title>Resources - AMIT Coders</title>
      </Head>
      <Header posts={posts} />
      <BlogsV1 posts={posts} />
      <BlogsV2 posts={posts} />
      <Apply formSource={"blogs"} />
      <BlogsV3 posts={posts} />
      <br />
      <ContactSection />
      <NewsLetter />
    </div>
  );
};

export const dynamic = "force-dynamic";

export default Resources;
