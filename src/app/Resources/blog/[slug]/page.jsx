import React from "react";
import { client, urlFor } from "../../../../../sanity/lib/client";
import groq from "groq";
import { Container } from "react-bootstrap";
import Image from "next/image";
import "./style.scss";
import { PortableText } from "@portabletext/react";
import { RichText } from "../../../Components/RichText/RichText";
import Header from "../../Components/Header/Header";
import RightPanel from "../../Components/RightPanel/RightPanel";
import Head from "next/head";

export const revalidate = 30;

export const generateStaticParams = async () => {
  const query = groq`*[_type == "post"]{
        slug
    }`;
  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug?.slug?.current);
  return slugRoutes?.map((slug) => {
    slug;
  });
};

const BlogPage = async ({ params: { slug } }) => {
  const query = groq`*[_type == 'post' && slug.current == $slug][0]{
        ...,
        author->,
        categories[]->,
    }`;
  const post = await client.fetch(query, { slug });
  // document.title = `${post.title} - AMIT Coders`;
  // console.log(post);

  return (
    <div className="blog-page">
      <Header />
      <div>
        <div className="blog-content">
          <p>{post.categories[0].title}</p>
          <h1>{post.title}</h1>
          <img className="main-img" src={urlFor(post?.mainImage).url()} />
          <div className="content">
            <div className="left">
              <PortableText value={post?.body} components={RichText} />
            </div>
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
