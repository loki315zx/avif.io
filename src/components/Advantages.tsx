export interface Advantages {
  pre: string;
  text: string;
  post: string;
  number: string;
}

function AdvantageItem(props: Advantages) {
  return (
    <div className="advantage__grid__item">
      <div className="advantage__text">
        {props.pre} <span className="advantage__important">{props.text}</span> {props.post}
      </div>
      <div className="advantage__visualizer" id={props.number}></div>
    </div>
  );
}

export default function Advantages() {
  return (
    <>
      <section id="avifbadge">
        <div className="white center badge__avif">
          <p className="bold">.AVIF</p>
          <div className="badge__shadow"></div>
        </div>
      </section>
      <section id="avifadvantages">
        <div className="advantage__grid">
          <AdvantageItem
            pre="usually"
            text="reduces file size"
            post="of images by 20-90% for faster page loading"
            number="visualizer-1"
          />
          <AdvantageItem
            pre=""
            text="decreases required bandwidth"
            post="for service providers"
            number="visualizer-2"
          />
          <AdvantageItem
            pre="is"
            text="actively developed by tech giants"
            post="like Google, Apple & Microsoft"
            number="visualizer-3"
          />
          <AdvantageItem
            pre="is"
            text="open to use and royalty-free"
            post="for everyone"
            number="visualizer-4"
          />
          <AdvantageItem
            pre="provides the"
            text="highest quality to compression rate"
            post="ever achieved"
            number="visualizer-5"
          />
          <AdvantageItem
            pre="already"
            text="supported by Chrome, Opera and Firefox"
            post=""
            number="visualizer-6"
          />
          <AdvantageItem
            pre=""
            text="supports transparency"
            post="and is therefore a better version of PNG"
            number="visualizer-7"
          />
          <AdvantageItem
            pre=""
            text="offers support for animated frames"
            post="and can replace GIFs & aPNGs"
            number="visualizer-8"
          />
          <AdvantageItem
            pre=""
            text="embraces HDR"
            post="with 12-bit color depth and wide color gamut"
            number="visualizer-9"
          />
          <AdvantageItem
            pre="provides"
            text="future-proof VP-10 codec technology"
            post=""
            number="visualizer-9"
          />
          <AdvantageItem
            pre="latest GPUs already support"
            text="hardware decoding"
            post=""
            number="visualizer-9"
          />
          <AdvantageItem
            pre="is"
            text="rich of features for smartphones"
            post="like live photos"
            number="visualizer-9"
          />
        </div>
        <div className="advantages-explainer">
          In the last 10 years, the size of an average website has increased from 500kb to 2000kb.
          Images have always been taking up half the amount. To counteract the increasing size, the
          web is in need of a new alternative to JPEG, which currently is the most popular image
          format, despite its age and due to its high compability. AV1 (.avif) is the modern
          solution. It is developed by the Alliance for Open Media, a collaboration of Google, Apple
          Mozilla, Intel and other tech giants. Avif is a codec for super-compressed images with
          acceptable quality. Avif is in continuous development with the goal to achieve the best
          ratio of compression and quality. Avif offers significant reduction of file size compared
          to the current JPEG or WebP codec. You can typically reduce file sizes by 20-90%. Even for
          images with transparency or animated frames. Currently supported by Chrome, Opera and
          Firefox, you can expect it to get more support quickly.
        </div>
      </section>
    </>
  );
}
