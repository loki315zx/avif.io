import Link from "@components/Link";

const FooterLink = (props: any) => {
  return (
    <Link
      className="block text-gray-400 hover:text-white"
      text={props.text}
      link={props.link}
    />
  );
};

export default function Footer() {
  return (
    <footer className="text-gray-400 bg-tenpercent body-font">
      <div className="container py-8 px-1 mx-auto">
        <div className="flex flex-wrap order-first text-left">
          <div className="flex flex-col px-4 mt-6 w-full md:w-1/2 lg:w-1/4">
            <Link
              className="flex justify-start items-center text-xl font-bold text-white font-display"
              text="avif.io"
              link="/"
            />

            <div className="my-4 text-gray-400">
              A tool by{" "}
              <Link text="Justin Schmitz" link="justinschmitz.de/" ext />
              and Niksa Sporin that is now open-source.
              <Link text="- @jschmitz97" link="twitter.com/jschmitz97" ext />
            </div>
          </div>
          <div className="px-4 w-full md:w-1/2 lg:w-1/4">
            <h6 className="mt-6 mb-3 font-bold text-white">Categories</h6>
            <nav className="list-none">
              <FooterLink text="Blog" link="/blog" />
              <FooterLink text="Tutorials" link="/blog#tutorials" />
              <FooterLink text="Articles" link="/blog#articles" />
              <FooterLink text="Comparisons" link="/blog#comparisons" />
              <FooterLink text="Release Notes" link="/blog#releasenotes" />
            </nav>
          </div>
          <div className="px-4 w-full md:w-1/2 lg:w-1/4">
            <h6 className="mt-6 mb-3 font-bold text-white">Most viewed</h6>
            <nav className="list-none">
              <FooterLink
                text="AVIF in Wordpress"
                link="/blog/tutorials/use-avif-in-wordpress/"
              />
              <FooterLink
                text="AVIF in Safari"
                link="/blog/tutorials/use-avif-in-safari/"
              />
              <FooterLink
                text="AVIF in JS Frameworks"
                link="/blog/tutorials/use-avif-in-frameworks/"
              />
              <FooterLink
                text="AVIF in CSS"
                link="/blog/tutorials/use-avif-in-css/"
              />
              <FooterLink
                text="Image Web Perf"
                link="/blog/articles/optimize-images-for-web-performance/"
              />
            </nav>
          </div>
          <div className="px-4 w-full md:w-1/2 lg:w-1/4">
            <h6 className="mt-6 mb-3 font-bold text-white">Other Pages</h6>
            <nav className="list-none">
              <FooterLink
                text="ProductHunt"
                link="discord.com/invite/6w42YpF5hm"
                ext
              />
              <FooterLink
                text="Join Discord"
                link="producthunt.com/posts/avif-io-avif-image-converter"
                ext
              />
              <FooterLink
                text="Github"
                link="https://github.com/justinschmitz97/avif.io/issues"
                ext
              />
              <FooterLink text="Sitemap" link="/sitemap.xml" />
              <FooterLink text="Legal and Privacy" link="/privacy-policy/" />
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
