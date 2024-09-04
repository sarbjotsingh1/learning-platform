import React from "react";
import Hero from "../Componets/Hero";
import CodeBlocks from "../Componets/CodeBlock";

export const Home = () => {
  return (
    <>
      <Hero />
      <div>
        <CodeBlocks
          position={"lg:flex-row"}
          heading={
            <div className="text-4xl font-semibold">
              Unlock your
              {/* <HighlightText text={"coding potential"} /> with our online */}
              courses.
            </div>
          }
          subheading={
            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
          }
          ctabtn1={{
            btnText: "Try it Yourself",
            link: "/register",
            active: true,
          }}
          ctabtn2={{
            btnText: "Learn More",
            link: "/register",
            active: false,
          }}
          codeColor={"text-yellow-25"}
          codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
          backgroundGradient={<div className="codeblock1 absolute"></div>}
        />
      </div>
    </>
  );
};
