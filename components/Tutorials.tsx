import Link from "next/link";

export interface TutorialsBoxProps {
  cssclass: string;
  title: string;
  url: string;
}

function TutorialsBox(props: TutorialsBoxProps) {
  return (
    <Link href={`/blog/tutorials/use-avif-in-${props.url}`}>
      <div className={"tutorials__box overlay-before"} id={props.cssclass}>
        <div className={"tutorial__overflow overlay"}>
          <span className="tutorial__title">{props.title}</span>
        </div>
        <div className="tutorial__shadow overlay"></div>
      </div>
    </Link>
  );
}

export default function Tutorials() {
  return (
    <section className="section__tutorials overlay-before overlay-after">
      <h2 className="f3 center">How to use AVIF</h2>
      <div className="white s5 center">
        Support is constantly rising across browsers, software and hardware. Thanks to being
        royalty-free, companies can include the format without having to deal with patents. We
        created articles for you on how to get started on all different type of browsers, operating
        systems and software. We didn't cover your software? Feel free to tell us on support@avif.io
        and we will write an article about it.
      </div>
      <div className="tutorials__container">
        <TutorialsBox cssclass="css" title="CSS" url="css" />
        <TutorialsBox cssclass="html" title="HTML" url="html" />
        <TutorialsBox cssclass="angular" title="Angular" url="frameworks" />
        <TutorialsBox cssclass="react" title="React" url="frameworks" />
        <TutorialsBox cssclass="vue" title="Vue" url="frameworks" />
        <TutorialsBox cssclass="nextjs" title="Next.JS" url="nextjs" />
        <TutorialsBox cssclass="firefox" title="Firefox" url="firefox" />
        <TutorialsBox cssclass="edge" title="Edge" url="edge" />
        <TutorialsBox cssclass="gimp" title="GIMP" url="gimp" />
        <TutorialsBox cssclass="netlify" title="Netlify" url="netlify" />
        <TutorialsBox cssclass="wordpress" title="WordPress" url="wordpress" />
        <TutorialsBox cssclass="cloudflare" title="Cloudflare" url="cloudflare" />
        <TutorialsBox cssclass="windows" title="Windows" url="windows" />
      </div>
    </section>
  );
}
