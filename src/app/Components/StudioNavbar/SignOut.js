// "use server";
// import { cookies } from "next/headers";

// import { signOutHandler } from "next-auth-sanity";
import axios from "axios";

export const handleSignOut = async () => {
  try {
    // cookies().delete("sanitySession");
    //   window.location.href = "/"; // Redirect to the homepage
    const response = await axios.post(
      "https://fixz215g.api.sanity.io/v2021-06-07/auth/logout?tag=sanity.studio"
    );
    console.log("Response:", response.data);
  } catch (error) {
    console.error("Error signing out:", error);
  }
};
