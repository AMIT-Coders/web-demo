"use client";
import React, { useEffect, useState, useRef } from "react";
import "./BlogsV3.scss";
import { urlFor } from "../../../../../sanity/lib/client.js";
import { client } from "../../../../../sanity/lib/client.js";
import Link from "next/link";

const BlogsV3 = ({ posts }) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const uniqueCategories = new Set();
    posts.forEach((post) =>
      post.categories.forEach((category) =>
        uniqueCategories.add(category.title)
      )
    );
    setCategories(["All", ...Array.from(uniqueCategories)]);
    console.log(renderBlockContent(posts[0].body));
  }, [posts]);

  const showMorePosts = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) =>
          post.categories.some(
            (category) => category.title === selectedCategory
          )
        );

  return (
    <div className="blogs-v3-section">
      <div className="tabs sticky">
        {categories.map((category) => (
          <div
            key={category}
            className={`tab ${selectedCategory === category ? "active" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <br />
      <div className="blog-cards-v3">
        {filteredPosts.slice(0, visibleCount).map((post, idx) => (
          <div className="blog-card-v3" key={idx}>
            <img
              className="header-img"
              src={urlFor(post.mainImage).url()}
              alt=""
            />
            <div className="content">
              <div className="cat-date">
                <div className="cat">
                  <p>{post.categories[0]?.title.toString()}</p>
                </div>
                <p className="date">
                  Published in{" "}
                  {new Date(post?.publishedAt).toISOString().split("T")[0]}
                </p>
              </div>
              <h4>{post.title}</h4>

              {renderBlockContent(post.body)}
              <Link
                href={{
                  pathname: `/Resources/blog/${post?.slug?.current}`,
                  query: { slug: post?.slug?.current },
                }}
                key={idx}
                style={{ textDecoration: "none" }}
              >
                <div className="readmore-btn d-flex align-items-center gap-2">
                  <p className="read-more-p">Read more</p>
                  <img
                    className="read-more-icon"
                    src="/Assets/read-more-icon.svg"
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < posts.length && (
        <div className="blurred-cards blog-cards-v3">
          {visibleCount < posts.length && (
            <div className="show-more-container">
              <button
                className="show-more-btn primary-btn"
                onClick={showMorePosts}
              >
                Show More
              </button>
            </div>
          )}
          {posts.slice(visibleCount).map((post, idx) => (
            <div className="blog-card-v3 blurred" key={`blurred-${idx}`}>
              <div className="blog-card-v3" key={idx}>
                <img
                  className="header-img"
                  src={urlFor(post.mainImage).url()}
                  alt=""
                />
                <div className="content">
                  <h4>{post.title}</h4>
                  <div className="cat">
                    <p>{post.categories[0]?.title.toString()}</p>
                  </div>
                  {renderBlockContent(post.body)}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogsV3;
