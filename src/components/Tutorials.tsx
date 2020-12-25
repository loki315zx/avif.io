export interface TutorialsBoxProps {
  cssclass: string;
  title: string;
}

function TutorialsBox(props: TutorialsBoxProps) {
  return (
    <div className={"tutorials__box"} id={props.cssclass}>
      <div className={"tutorial__overflow"}>
        <span className="tutorial__title">{props.title}</span>
      </div>
      <div className="tutorial__shadow"></div>
    </div>
  );
}

export default function Tutorials() {
  return (
    <section className="section__tutorials">
      <div className="text-60 white f3">How to use avif in a productive environment.</div>
      <div className="text-40 white s5">
        Support is constantly rising across browsers, software and hardware. Thanks to being
        royalty-free, companies can include the format without having to deal with patents. We
        created articles for you on how to get started on all different type of browsers, operating
        systems and software. We didn't cover your software? Feel free to tell us on support@avif.io
        and we will write an article about it.
      </div>
      <div className="tutorials__container">
        <TutorialsBox cssclass="css" title="CSS" />
        <TutorialsBox cssclass="html" title="HTML" />
        <TutorialsBox cssclass="angular" title="Angular" />
        <TutorialsBox cssclass="react" title="React" />
        <TutorialsBox cssclass="vue" title="Vue" />
        <TutorialsBox cssclass="nextjs" title="Next.JS" />
        <TutorialsBox cssclass="firefox" title="Firefox" />
        <TutorialsBox cssclass="edge" title="Edge" />
        <TutorialsBox cssclass="gimp" title="GIMP" />
        <TutorialsBox cssclass="netlify" title="Netlify" />
        <TutorialsBox cssclass="wordpress" title="WordPress" />
        <TutorialsBox cssclass="cloudflare" title="Cloudflare" />
        <TutorialsBox cssclass="windows" title="Windows" />
      </div>
    </section>
  );
}
