"use client";

import React, { useState, useEffect } from "react";
import "./Header.scss";
import Link from "next/link";
import { client } from "../../../../../sanity/lib/client";

const Header = ({ posts: initialPosts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState(initialPosts);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"]{
        title,
        slug
      }`;
      const fetchedPosts = await client.fetch(query);
      setPosts(fetchedPosts);
    };

    if (!posts) {
      fetchPosts();
    }
  }, [posts]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts =
    searchTerm && posts
      ? posts.filter((post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];

  return (
    <div className="header">
      <h1>AMIT Blog: Largest Free Online Resource on Information Technology</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Type Here"
          onChange={handleInputChange}
          value={searchTerm}
        />
        <button type="submit">
          <img src="/Assets/Resources/search-md.svg" alt="Search" />
          <p>Search</p>
        </button>
        {searchTerm && (
          <ul className="search-results">
            {filteredPosts.map((post) => (
              <Link href={`/Resources/blog/${post.slug.current}`}>
                <li key={post.slug.current}>
                  <div>{post.title}</div>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
