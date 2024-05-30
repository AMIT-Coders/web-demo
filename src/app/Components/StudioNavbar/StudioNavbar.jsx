// import React from "react";
import "./StudioNavbar.scss";
import { IoReturnDownBack } from "react-icons/io5";
// import { useCurrentUser, logout } from "sanity";
import NavBar from "../NavBar/NavBar";
import Link from "next/link";
import { handleSignOut } from "./SignOut";

const StudioNavbar = () => {
  // const user = useCurrentUser();
  // console.log(user);

  return (
    <div className="studio-navbar">
      <Link href="/" className="return-btn">
        <IoReturnDownBack className="return-icon" />
        <p>Back to Website</p>
      </Link>
      <img style={{ width: "225px" }} src="/Assets/Brand/logo2.gif" alt="" />

      {/* <div className="user">
        <img className="profile-pic" src={user.profileImage} alt="" />
        {user && (
          <button onClick={() => handleSignOut()} className="signout-btn">
            Log Out
          </button>
        )}
      </div> */}
    </div>
  );
};

export default StudioNavbar;
