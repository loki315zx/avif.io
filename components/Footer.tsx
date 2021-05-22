import SmartLink from "@components/SmartLink";
import { conversions } from "../lib/conversions";

export default function Footer() {
  return (
    <footer>
      <div id="footer-info">
        <div className="s2 f2">
          <b>avif.io</b>
        </div>
        <div className="s2 text-80">
          A tool by <SmartLink text="Justin Schmitz" link="https://justinschmitz.de/" external />{" "}
          and Niksa Sporin that has already converted {conversions} files.
        </div>
        <div>© 2020 avif.io</div>
      </div>
      <div id="footer-more">
        <div className="s1">
          <b>More</b>
        </div>
        <SmartLink text="Blog" link="/blog/" newLine />
        <SmartLink text="Release Notes" link="/blog#releases" newLine />
        <SmartLink text="Contact" link="mailto:support@avif.io" newLine />
        <SmartLink text="Donate" link="https://www.buymeacoffee.com/justinschmitz" newLine />
      </div>
      <div id="footer-about">
        <div className="s1">
          <b>Misc</b>
        </div>
        <SmartLink text="Sitemap" link="/sitemap.xml" newLine />
        <SmartLink text="Legal and Privacy" link="/privacy-policy/" newLine />
      </div>
      <div id="communication">
        <a
          className="producthunt"
          href="https://www.producthunt.com/posts/avif-io-avif-image-converter"
          target="_blank"
          rel="noreferrer">
          <svg width="250" height="54" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <rect fill="#0c0014" x=".5" y=".5" width="249" height="53" rx="10" />
              <text fontFamily="Poppins" fontSize="9" fontWeight="normal" fill="#FFF">
                <tspan x="53" y="20">
                  COME JOIN US ON
                </tspan>
              </text>
              <text fontFamily="Poppins" fontSize="21" fontWeight="bold" fill="#FFF">
                <tspan x="52" y="40">
                  Product Hunt
                </tspan>
              </text>
              <g fill="#FFF">
                <path d="M227 23h-11l5.5-10z" />
                <text
                  fontFamily="Poppins"
                  fontSize="13"
                  fontWeight="normal"
                  transform="translate(201 13)">
                  <tspan x="9.1" y="27">
                    109
                  </tspan>
                </text>
              </g>
              <path d="M42 27.5a15.5 15.5 0 11-31 0 15.5 15.5 0 0131 0" fill="#EA532A" />
              <path
                d="M28.4 28h-4.3v-4.7h4.3c1.3 0 2.3 1 2.3 2.3 0 1.3-1 2.4-2.3 2.4m0-7.8H21v15.5h3v-4.6h4.4c3 0 5.4-2.5 5.4-5.5s-2.4-5.4-5.4-5.4"
                fill="#FFF"
              />
            </g>
          </svg>
        </a>
        <a
          className="discord white"
          href="https://discord.com/invite/6w42YpF5hm"
          target="_blank"
          rel="noreferrer">
          Talk to us on Discord!
        </a>
      </div>
    </footer>
  );
}
