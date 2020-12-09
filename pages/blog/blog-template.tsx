import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";

export interface BlogProps {
  title: string;
}

export default function BlogTemplate(props: BlogProps) {
  return (
    <div className="blog">
      <div className="blog-blur"></div>
      <Header />
      <h1 className="f3 white">{props.title}</h1>

      <div className="content__container">
        <div className="content">
          a
          <div className="tutorial__container">
            <div className="tutorial__item">
              <div className="tutorial__number">1</div>
              <div className="tutorial__text">b</div>
            </div>{" "}
            <div className="tutorial__item">
              <div className="tutorial__number">2</div>
              <div className="tutorial__text">c</div>
            </div>
          </div>
        </div>
      </div>
      <CTA />
      <Footer />
    </div>
  );
}
