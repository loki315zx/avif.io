export default function Image(props: { alt: string; url: string }) {
  return (
    <>
      <picture>
        {/*
        <source
          sizes="(max-width: 720px) 100vw, 720px"
          srcSet={`/images/${props.url}.avif 1440w, /images/${props.url}-720.avif 720w, /images/${props.url}-360.avif 360w,`}
          type="image/avif"
        />
        <source
          sizes="(max-width: 720px) 100vw, 720px"
          srcSet={`/images/${props.url}.webp 1440w, /images/${props.url}-720.webp 720w, /images/${props.url}-360.webp 360w,`}
          type="image/webp"
        />
        
        <source
          sizes="(max-width: 720px) 100vw, 720px"
          srcSet={`/images/${props.url}.jpg 1440w, /images/${props.url}-720.jpg 720w, /images/${props.url}-360.jpg 360w,`}
          type="image/jpeg"
        />*/}
        <img
          width="720"
          height="405"
          decoding="async"
          loading="lazy"
          src={`/images/${props.url}.jpg`}
          alt={props.alt}
        />
      </picture>
    </>
  );
}
