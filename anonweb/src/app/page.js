import HeroSection from "./components/Home/hero-section";
import Skills from "./components/Home/skills";
import Experience from "./components/Home/experence";
import Projects from "./components/Home/project";
import AboutSection from "./components/Home/about";
import Education from "./components/Home/education";
import ContactSection from "./components/Home/contact";
// import Blog from "./components/Home/blog";
// import { useState, useEffect } from "react";

export default function Home() {
  // const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     const response = await fetch("/api/blogs");
  //     const data = await response.json();
  //     setBlogs(data);
  //   };

  //   fetchBlogs();
  // }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
      {/* <Blog blogs={blogs} /> */}
      {/* <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection /> */}
    </>
  );
}
