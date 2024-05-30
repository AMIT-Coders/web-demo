import Image from "next/image";
import Link from "next/link";
import "./CourseCard.scss";

const CourseCard = ({ image, title, link, description }) => {
  // console.log(image);
  return (
    <Link style={{ textDecoration: "none" }} href={`${link}`}>
      <div className="course-card">
        <img className="mainImg" src={image} alt="" />
        <div className="content">
          <div className="tags">
            <div className="tag-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
              >
                <circle cx="4" cy="4" r="4" fill="#DF2E38" />
              </svg>
              <p className="tag d-flex" style={{ whiteSpace: "nowrap" }}>
                Start for free
              </p>
            </div>
          </div>
          <h4>{title}</h4>
          <p className="course-desc">{description}</p>
          <div className="footer">
            <div className="left">
              <img src="/Assets/courseicon1.svg" alt="" />
              <h4>With Certificate</h4>
            </div>

            <img
              className="arw-img default"
              src="/Assets/redirect-icon.svg"
              alt=""
            />
            <img
              className="arw-img hover"
              src="/Assets/redirect-icon-red.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
