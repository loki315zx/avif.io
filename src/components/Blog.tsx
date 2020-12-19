import React from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";
import CTA from "@components/CTA";
import { BlogSources, BlogSubtitle, BlogTitle, BlogPosts } from "@components/BlogComponents";

export default function Blog(props: any) {
  return (
    <div className="blog">
      <Header />
      <BlogTitle text={props.title} />
      <div className="content__container">
        <div className="content">
          {props.children}
          <BlogSubtitle text="Sources" />
          <BlogSources sources={props.sources} />
        </div>
      </div>
      <BlogPosts posts={props.posts} />
      <CTA />
      <Footer />
    </div>
  );
}
