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
              className="flex justify-start items-center text-xl font-medium text-white font-display"
              text="avif.io"
              link="/"
            />

            <div className="my-4 text-gray-400">
              A tool by{" "}
              <Link text="Justin Schmitz" link="justinschmitz.de/" ext />
              and Niksa Sporin that is now open-source.
              <Link text="- @jschmitz97" link="twitter.com/jschmitz97" ext />
            </div>
            <span className="inline-flex justify-start mt-0">
              <a className="text-gray-400 hover:text-white">
                <svg
                  aria-hidden="true"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-400 hover:text-white">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 256 256"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4"
                >
                  <g fill="none">
                    <path
                      d="M128 256a128 128 0 100-256 128 128 0 000 256z"
                      fill="currentColor"
                    />
                    <path
                      d="M96 76.8v102.4h19.2v-32h29c19.4-.5 35-16.2 35-35.2a35 35 0 00-35-35.2H96zm48.5 51.2h-29.3V96h29.3c8.6 0 15.5 7.2 15.5 16s-7 16-15.5 16z"
                      fill="#FFF"
                    />
                  </g>
                  <path fill="rgba(0, 0, 0, 0)" d="M0 0h256v256H0z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-400 hover:text-white">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 104 104"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M50 0a50 50 0 100 100A50 50 0 0050 0zm33 23c6 7.3 9.6 16.6 9.7 26.6-1.4-.3-15.5-3.1-29.7-1.3L62 46c-.8-2-1.8-4.1-2.8-6.1A57.2 57.2 0 0083 23zM50 7.4c10.8 0 20.8 4 28.3 10.7-.8 1.1-7.2 9.7-22.4 15.4-7-12.8-14.7-23.4-16-25 3.3-.7 6.6-1.1 10.1-1.1zm-18.2 4c1.2 1.5 8.8 12 15.9 24.7-20 5.3-37.6 5.2-39.5 5.2a43 43 0 0123.6-30zM7.3 50v-1.3c1.8 0 22.5.3 43.8-6.1a127 127 0 013.5 7.2l-1.7.5a67.9 67.9 0 00-34.7 28.2A42.6 42.6 0 017.2 50zM50 92.7c-9.9 0-19-3.3-26.2-9 .8-1.5 9.4-18.2 33.5-26.7h.3c6 15.5 8.5 28.6 9.1 32.3A42 42 0 0150 92.7zm23.8-7.3c-.4-2.6-2.7-15-8.3-30.4a62.4 62.4 0 0126.6 1.8 42.3 42.3 0 01-18.3 28.6z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </span>
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
            <h6 className="mt-6 mb-3 font-bold text-white">
              Most viewed articles
            </h6>
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
                text="Image Web Performance"
                link="/blog/articles/optimize-images-for-web-performance/"
              />
            </nav>
          </div>
          <div className="px-4 w-full md:w-1/2 lg:w-1/4">
            <h6 className="mt-6 mb-3 font-bold text-white">Other Pages</h6>
            <nav className="list-none">
              <FooterLink
                text="Follow ProductHunt"
                link="discord.com/invite/6w42YpF5hm"
                ext
              />
              <FooterLink
                text="Join Discord"
                link="producthunt.com/posts/avif-io-avif-image-converter"
                ext
              />
              <FooterLink
                text="Github issues and requests"
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
