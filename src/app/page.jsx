import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Containers/Hero/Hero";
import Basics from "./Containers/Basics/Basics";
import Courses from "./Containers/Courses/Courses";

import Hero2 from "./Containers/Hero2/Hero2";
import Apply from "./Containers/Apply/Apply";
import Footer from "./Containers/Footer/Footer";
import Success from "./Containers/Success/Success";
import Upskill from "./Containers/Upskill/Upskill";
import BlogsV2 from "./Resources/Components/BlogsV2/BlogsV2";
import TrustedBy from "./Components/TrustedBy/TrustedBy";
import Links from "./WhyAMIT/Containers/Links/Links";
import FAQs from "./Containers/FAQs/FAQs";

import groq from "groq";
import { client } from "../../sanity/lib/client";

const revalidate = 30;

const query = groq`*[_type == "post"]{
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc)`;

const Home = async () => {
  const posts = await client.fetch(query, revalidate);
  // console.log(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
  // console.log(posts);

  return (
    <main className={styles.main}>
      <div className="App">
        {/* <NavBar /> */}
        <Hero />
        <Basics />
        <Courses id="courses" />
        <Hero2 />
        <Apply formType="apply" />
        {/* <Success /> */}
        <BlogsV2 posts={posts} />
        <Upskill />
        <TrustedBy />
        <Links direction="row" />
        <FAQs />
        {/* <Footer /> */}
      </div>
    </main>
  );
};

export default Home;
