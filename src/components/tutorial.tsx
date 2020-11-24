export const css = (
  <div className="container-code" id="css-tutorial">
    <p className="s1">
      <a
        className="blue"
        href="https://github.com/djpogo/avif-webp-css-support"
        title="avif detection"
      >
        Check for avif support & use
      </a>
    </p>
    <div className="opacity-half">
      <p className="gray">
        <span className="secondary">.div</span>
        <span className="braces">{`{`}</span>
        <span className="primary">{`background-image: url("lion.jpg")`}</span>
        <span className="braces">{`}`}</span>
      </p>

      <p className="gray">
        <span className="secondary">.webp .div</span>
        <span className="braces">{`{`}</span>
        <span className="primary">
          {`background-image: url("lion.webp")`}
        </span>
        <span className="braces">{`}`}</span>
      </p>
    </div>

    <p className="gray">
      <span className="secondary">.avif .div</span>
      <span className="braces">{`{`}</span>
      <span className="blue">{`background-image: url("lion.avif")`}</span>
      <span className="braces">{`}`}</span>
    </p>
  </div>
);

export const html = (
  <div className="container-code" id="html-tutorial">
    <p className="gray">
      <span>{`<`}</span>
      <span className="secondary">picture</span>
      <span>{`>`}</span>
    </p>

    <p className="gray">
      <span className="braces">{`<`}</span>
      <span className="secondary">source </span>
      <span>type=</span>
      <span className="blue">"image/avif" </span>
      <span>srcset=</span>
      <span className="blue">"lion.avif"</span>
      <span className="braces">{`>`}</span>
    </p>
    <div className="opacity-half">
      <p className="gray">
        <span className="braces">{`<`}</span>
        <span className="secondary">source </span>
        <span>type=</span>
        <span className="primary">"image/webp" </span>
        <span>srcset=</span>
        <span className="primary">"lion.webp"</span>
        <span className="braces">{`>`}</span>
      </p>

      <p className="gray">
        <span className="braces">{`<`}</span>
        <span className="secondary">source </span>
        <span>type=</span>
        <span className="primary">"image/jpg" </span>
        <span>srcset=</span>
        <span className="primary">"lion.jpg"</span>
        <span className="braces">{`>`}</span>
      </p>

      <p className="gray">
        <span>{`<`}</span>
        <span className="secondary">/picture</span>
        <span>{`>`}</span>
      </p>
    </div>
  </div>
);

export const wordpress = (
  <div className="container-code" id="wordpress-tutorial">
    <p>By default, WordPress does not (yet) accept avif files.</p>
    <p>
      {" "}
      In order to upload them,{" "}
      <a
        href="https://wordpress.org/plugins/wp-add-mime-types/"
        title="mime type"
      >
        use this plugin
      </a>{" "}
      and
    </p>
    <p>
      enable the mime type with:{" "}
      <span className="blue">avif = image/avif</span>.
    </p>
    <div>
      Then, add images to your site with the picture element:
      <p className="s1" />
      <p className="gray">
        <span>{`<`}</span>
        <span className="secondary">picture</span>
        <span>{`>`}</span>
      </p>
      <p className="gray">
        <span className="braces">{`<`}</span>
        <span className="secondary">source </span>
        <span>type=</span>
        <span className="blue">"image/avif" </span>
        <span>srcset=</span>
        <span className="blue">"lion.avif"</span>
        <span className="braces">{`>`}</span>
      </p>
      <div className="opacity-half">
        <p className="gray">
          <span className="braces">{`<`}</span>
          <span className="secondary">source </span>
          <span>type=</span>
          <span className="primary">"image/webp" </span>
          <span>srcset=</span>
          <span className="primary">"lion.webp"</span>
          <span className="braces">{`>`}</span>
        </p>

        <p className="gray">
          <span className="braces">{`<`}</span>
          <span className="secondary">source </span>
          <span>type=</span>
          <span className="primary">"image/jpg" </span>
          <span>srcset=</span>
          <span className="primary">"lion.jpg"</span>
          <span className="braces">{`>`}</span>
        </p>

        <p className="gray">
          <span>{`<`}</span>
          <span className="secondary">/picture</span>
          <span>{`>`}</span>
        </p>
      </div>
    </div>
  </div>
);

export const netlify = (
  <div className="container-code" id="netlify-tutorial">
    <p className="s1">
      Define a custom header within the Netlify configuration file:
    </p>
    <div className="secondary s1">
      <p>[[headers]]</p> <p>for = "*.avif"</p>
      <p>[headers.values]</p>
      <p>Content-Type = "image/avif"</p>
      <p>Content-Disposition = "inline"</p>
    </div>

    <div>
      Now you can add images to your site with the picture element (see HTML).
      <a
        href="https://reachlightspeed.com/blog/using-the-new-high-performance-avif-image-format-on-the-web-today/"
        title="avif on netlify"
      >
        Thanks to Lightspeed for this approach.
      </a>
    </div>
  </div>
);