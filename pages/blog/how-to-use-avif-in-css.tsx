import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";

export default function SampleBlog() {
  return (
    <div className="blog">
      <div className="blog-blur"></div>
      <Header />
      <h1 className="f3 white">How to use avif images in CSS.</h1>

      <div className="content__container">
        <div className="content">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam.{" "}
          <div className="tutorial__container">
            <div className="tutorial__item">
              <div className="tutorial__number">1</div>
              <div className="tutorial__text">
                In the markup the media-type hint helps us and the browser to
                deliver the best experience to the user. For css we need a
                javascript feature detection to help us.
              </div>
            </div>{" "}
            <div className="tutorial__item">
              <div className="tutorial__number">2</div>
              <div className="tutorial__text">
                In the markup the media-type hint helps us and the browser to
                deliver the best experience to the user. For css we need a
                javascript feature detection to help us.
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
