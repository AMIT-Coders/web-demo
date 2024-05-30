import React from "react";
import "./BlogsV2.scss";
import RightPanel from "../RightPanel/RightPanel.jsx";

import { client } from "../../../../../sanity/lib/client.js";
import { getProfile } from "../../../../../sanity/sanity.query.js";
import Image from "next/image";
import { urlFor } from "../../../../../sanity/lib/client.js";
import Link from "next/link";
import TitleBlob from "../../../Components/TitleBlob/TitleBlob";
import groq from "groq";

export const revalidate = 30;

const BlogsV2 = async ({ posts }) => {
  const renderBlockContent = (blockContent) => {
    // Ensure blockContent is defined and is an array
    if (!Array.isArray(blockContent)) {
      // Return an empty <p> tag if blockContent is not as expected
      return <p></p>;
    }

    // Find the first block of type 'block' with style 'normal' (paragraph)
    const firstParagraph = blockContent.find(
      (block) => block._type === "block" && block.style === "normal"
    );

    if (firstParagraph) {
      // Assuming the paragraph content is in the 'children' array, concatenate the text
      const text = firstParagraph.children
        ?.map((child) => child.text)
        .join(" ");
      return <p className="content-preview">{text}</p>;
    }
    // Return an empty <p> tag if no paragraph content is found
    return <p className="content-preview"></p>;
  };

  return (
    <div className="blogs-v2">
      <h2>See Our Recent blogs</h2>
      <TitleBlob
        title="Our Blogs all related Learning"
        fontsize={"40px"}
        textalign={"flex-start"}
      />

      {posts && (
        <div className="second-version mt-4 mb-2">
          <div className="mainCard">
            <Link
              href={{
                pathname: `/Resources/blog/${posts[0]?.slug?.current}`,
                query: { slug: posts[0]?.slug?.current },
              }}
              key={posts[0]?._id}
              style={{ textDecoration: "none" }}
            >
              <div className="blog-card">
                <img
                  className="main-img"
                  src={urlFor(posts[0]?.mainImage).url()}
                />
                <div className="content">
                  <div className="d-flex align-items-center gap-2">
                    <img
                      className="author-img"
                      src={urlFor(posts[0]?.author?.image).url()}
                      alt=""
                    />
                    <p>
                      {posts[0].author.name},{" "}
                      {new Date(posts[0]?.publishedAt).toLocaleString("en-UK", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  {/* <p className="summary">{posts[0].body[0]?.children[0]?.text}</p> */}

                  <h4>"{posts[0].title}"</h4>
                  {renderBlockContent(posts[0].body)}
                  <div className="categories">
                    {posts[0].categories.map((cat) => {
                      return (
                        <span key={cat?._id} className="category">
                          {cat.title}
                        </span>
                      );
                    })}
                  </div>
                  <br />

                  <div className="d-flex align-items-center gap-2 mt-2 arrow-hover">
                    <p>See more</p>
                    <img
                      className="arrow"
                      src="/Assets/Bullets/arrow-circle.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="blog-cards1">
            {posts.slice(1, 4).map((post) => {
              return (
                <Link
                  href={{
                    pathname: `/Resources/blog/${post?.slug?.current}`,
                    query: { slug: post?.slug?.current },
                  }}
                  key={post?._id}
                  style={{ textDecoration: "none" }}
                >
                  <div className="blog-card">
                    <img
                      src={urlFor(post?.mainImage).url()}
                      className="post-img"
                    />
                    <div className="content">
                      <div className="d-flex align-items-center gap-2">
                        <img
                          className="author-img"
                          src={urlFor(post?.author?.image).url()}
                          alt=""
                        />
                        <p>
                          {post.author.name},{" "}
                          {new Date(post?.publishedAt).toLocaleString("en-UK", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                      {/* <p className="summary">{post.body[0]?.children[0]?.text}</p> */}

                      <h4>"{post.title}"</h4>
                      <div className="dd">{renderBlockContent(post.body)}</div>
                      <div className="categories">
                        {post.categories.map((cat) => {
                          return (
                            <span key={cat?._id} className="category">
                              {cat.title}
                            </span>
                          );
                        })}
                      </div>
                      {/* <br /> */}
                      <div className="d-flex align-items-center gap-2 mt-2 arrow-hover">
                        <p>See more</p>
                        <img
                          className="arrow"
                          src="/Assets/Bullets/arrow-circle.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsV2;
