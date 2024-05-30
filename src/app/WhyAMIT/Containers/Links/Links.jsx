"use client";
import React, { useState, useEffect } from "react";
import "./Links.scss";
import TitleBlob from "../../../Components/TitleBlob/TitleBlob";
import { BounceOnScroll, SlideInFromLeft } from "../../../utils/animations";
import axios from "axios";
import backend from "../../../utils/backend";

const Links = ({ direction }) => {
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const response = await axios.get(`${backend}/api/links/`);
      setLinks(response.data[0]);
      // console.log(response.data[0]);
    } catch (error) {
      console.error("Error fetching links:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="links-section">
      {direction === "row" ? (
        <BounceOnScroll>
          <div className="content" style={{ flexDirection: "row !important" }}>
            <h2>Join Us on</h2>
            <div className="links">
              <a href={links.facebook} target="_blank">
                <img src="/Assets/Containers/Links/Facebook.svg" alt="" />
              </a>
              <a href={links.instagram} target="_blank">
                <img src="/Assets/Containers/Links/Instgram.svg" alt="" />
              </a>
              <a href={links.x} target="_blank">
                <img src="/Assets/Containers/Links/X.svg" alt="" />
              </a>
              <a href={links.linkedIn} target="_blank">
                <img src="/Assets/Containers/Links/Linkedin.svg" alt="" />
              </a>
              <a href={links.tiktok} target="_blank">
                <img src="/Assets/Containers/Links/TikTok.svg" alt="" />
              </a>
            </div>
          </div>
        </BounceOnScroll>
      ) : (
        <>
          <SlideInFromLeft>
            <TitleBlob
              title="AMIT Social Links"
              fontsize="40px"
              textalign="flex-start"
            />
          </SlideInFromLeft>
          <BounceOnScroll>
            <div className="content">
              <h2>Join Us on</h2>
              <div className="links">
                <a href={links.facebook}>
                  <img src="/Assets/Containers/Links/Facebook.svg" alt="" />
                </a>
                <a href={links.instagram}>
                  <img src="/Assets/Containers/Links/Instgram.svg" alt="" />
                </a>
                <a href={links.x}>
                  <img src="/Assets/Containers/Links/X.svg" alt="" />
                </a>
                <a href={links.linkedIn}>
                  <img src="/Assets/Containers/Links/Linkedin.svg" alt="" />
                </a>
                <a href={links.tiktok}>
                  <img src="/Assets/Containers/Links/TikTok.svg" alt="" />
                </a>
              </div>
            </div>
          </BounceOnScroll>
        </>
      )}
    </div>
  );
};

export default Links;
