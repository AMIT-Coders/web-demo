import React from "react";
import "./BlogsV1.scss";
import RightPanel from "../RightPanel/RightPanel.jsx";

import { client } from "../../../../../sanity/lib/client.js";
import { getProfile } from "../../../../../sanity/sanity.query.js";
import Image from "next/image";
import { urlFor } from "../../../../../sanity/lib/client";
import Link from "next/link";

// export const revalidate = 10;

const BlogsV1 = async ({ posts }) => {
  // const posts = await client.fetch(
  //   `*[_type == "post"]{
  //     ...,
  //     author->,
  //     categories[]->,
  //   } | order(_createdAt desc)`
  // );

  return (
    <>
      <div className="blogs-v1">
        <div className="first-version">
          <div className="blog-cards1">
            <h2>Popular Blogs</h2>
            {posts &&
              posts.map((post, idx) => {
                return (
                  <Link
                    href={{
                      pathname: `/Resources/blog/${post?.slug?.current}`,
                      query: { slug: post?.slug?.current },
                    }}
                    key={idx}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="blog-card">
                      <div className="content">
                        <div className="d-flex align-items-center gap-2">
                          <img
                            className="author-img"
                            src={urlFor(post?.author?.image).url()}
                            alt=""
                          />
                          <p>
                            {post.author.name},{" "}
                            {new Date(post?.publishedAt).toLocaleString(
                              "en-UK",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              }
                            )}
                          </p>
                        </div>
                        {/* <p className="summary">{post.body[0]?.children[0]?.text}</p> */}

                        <h4>"{post.title}"</h4>
                        <div className="categories">
                          {post.categories.map((cat) => {
                            return (
                              <div key={cat?._id} className="category">
                                {cat.title}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <img src={urlFor(post?.mainImage).url()} />
                    </div>
                  </Link>
                );
              })}
          </div>
          <RightPanel posts={posts} />
        </div>
      </div>
    </>
  );
};

export default BlogsV1;
