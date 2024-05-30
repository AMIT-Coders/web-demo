"use client";
import React, { useEffect, useState } from "react";
import "./RightPanel.scss";
import ApplyModal from "../../../Components/ApplyModal/ApplyModal";
import { urlFor } from "../../../../../sanity/lib/client";
import { client } from "../../../../../sanity/lib/client";
import Link from "next/link";

const RightPanel = ({ posts: initialPosts }) => {
  const [currentURL, setCurrentUrl] = useState("");
  const [show, setShow] = useState(false);
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [posts, setPosts] = useState(initialPosts);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"]{
        ...,
        title,
        slug,
        mainImage,
        
      }`; // Adjust the query as needed for your use case
      const fetchedPosts = await client.fetch(query);
      setPosts(fetchedPosts);
    };

    if (!posts || posts.length === 0) {
      fetchPosts();
    }
  }, [posts]);

  useEffect(() => {
    // Function to shuffle the posts array
    const shufflePosts = (postsArray) => {
      for (let i = postsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [postsArray[i], postsArray[j]] = [postsArray[j], postsArray[i]]; // Swap elements
      }
      return postsArray;
    };

    // If posts exist, shuffle and select the first two
    if (posts && posts.length > 0) {
      const shuffledPosts = shufflePosts([...posts]);
      setSelectedPosts(shuffledPosts.slice(0, 2)); // Select first two posts
    }
  }, [posts]);

  const handleShare = () => {
    navigator.clipboard
      .writeText(currentURL)
      .then(() => {
        alert("Copied to clipboard: " + currentURL);
      })
      .catch((error) => {
        console.error("Failed to copy URL: ", error);
        alert("Failed to copy URL.");
      });
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

  // console.log(posts);
  return (
    <>
      <ApplyModal
        show={show}
        setShow={setShow}
        title="Blogs Panel Apply"
        formSource={"apply"}
        note="blogs right panel"
      />
      <div className="right-panel">
        <h2>Similar articles </h2>
        <h3>Data Science</h3>
        <div className="cards">
          {selectedPosts.map((post) => (
            <Link
              href={`/Resources/blog/${post.slug.current}`}
              key={post.slug.current}
              style={{ textDecoration: "none", color: "#000" }}
            >
              <div className="card1">
                {renderBlockContent(post.body)}
                <img src={urlFor(post.mainImage).url()} alt="" />
              </div>
            </Link>
          ))}
        </div>
        <div className="share">
          <h5>Share our blogs</h5>

          <div className="links">
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${currentURL}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Assets/Containers/Links/Facebook.svg" alt="Facebook" />
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=Check%20this%20out!&url=${currentURL}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Assets/Containers/Links/X.svg" alt="Twitter" />{" "}
            </a>
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentURL}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Assets/Containers/Links/Linkedin.svg" alt="LinkedIn" />
            </a>
          </div>
          <a className="share-link" onClick={handleShare}>
            <h5>
              Or <img src="/Assets/link.svg" alt="" /> Copy Link
            </h5>
          </a>
        </div>

        <div className="course-card">
          <h3>Start For Free Now</h3>
          <img
            className="course"
            src="/Assets/Resources/right-panel/course.png"
            alt=""
          />
          <div className="course-content">
            <h4>Data Science bootcamp</h4>
            <h6>Learn To be Data Scientist</h6>
            <div className="item">
              <img src="/Assets/Courses/icon1.svg" alt="" />
              <p>
                <span style={{ fontFamily: "Poppins semibold" }}>
                  Bootcamp:
                </span>{" "}
                Online Live Sessions | Capstone Project
              </p>
            </div>
            <div className="item">
              <img src="/Assets/Courses/icon2.svg" alt="" />
              <p>
                <span style={{ fontFamily: "Poppins semibold" }}>
                  Duration:
                </span>
                Hours: 960, 6 Months Full Time, 1 Year Part Time
              </p>
            </div>
            <div className="item">
              <img src="/Assets/Courses/icon3.svg" alt="" />
              <p>
                <span style={{ fontFamily: "Poppins semibold" }}>
                  Certificate:
                </span>{" "}
                Yes{" "}
              </p>
            </div>
            <button
              onClick={() => {
                setShow(true);
              }}
              className="primary-btn"
            >
              Enroll in Course Now
            </button>
            {/* <div className="divider"></div>
              <div className="item share">
                <img src="/Assets/Courses/icon4.svg" alt="" />
                <h5>Share Course</h5>
              </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RightPanel;
