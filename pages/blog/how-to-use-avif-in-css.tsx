import Header from "@components/Header";
import Footer from "@components/Footer";
import CTA from "@components/CTA";

export default function SampleBlog() {
  return (
    <div className="blog">
      <Header />
      <h1 className="f3 white">How to use avif images in CSS.</h1>

      <div className="content__container">
        <div className="content">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
          elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
          gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam.{" "}
          <div className="tutorial__container">
            <div className="tutorial__item">
              <div className="tutorial__number">1</div>
              <div className="tutorial__text">
                In the markup the media-type hint helps us and the browser to deliver the best
                experience to the user. For css we need a javascript feature detection to help us.
              </div>
            </div>{" "}
            <div className="tutorial__item">
              <div className="tutorial__number">2</div>
              <div className="tutorial__text">
                In the markup the media-type hint helps us and the browser to deliver the best
                experience to the user. For css we need a javascript feature detection to help us.
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="posts">
        <div className="posts__container">
          <div className="posts__item">
            <div className="posts__img">7 tips on how to efficiently use avif in CSS.</div>
            <div className="posts__data">
              <div className="posts__date">last update: November 12, 2020</div>
              <div className="posts__summary">
                AVIF, the file format based on the AV1 video codec, is the latest addition to the
                next-gen image formats. Early reports and comparisons show good results.
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </div>
  );
}
