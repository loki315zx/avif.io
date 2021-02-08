export default function Image(props: { alt: string; url: string }) {
  return (
    <>
      <picture>
        <source
          sizes="(max-width: 720px) 100vw, 720px"
          srcSet={`/img/${props.url}-1440.avif 2x, /img/${props.url}-720.avif 720w, /img/${props.url}-630.avif 630w, /img/${props.url}-540.avif 540w, /img/${props.url}-450.avif 450w, /img/${props.url}-360.avif 360w`}
          type="image/avif"
        />
        <source
          sizes="(max-width: 720px) 100vw, 720px"
          srcSet={`/img/${props.url}-1440.webp 2x, /img/${props.url}-720.webp 720w, /img/${props.url}-630.webp 630w, /img/${props.url}-540.webp 540w, /img/${props.url}-450.webp 450w, /img/${props.url}-360.webp 360w`}
          type="image/webp"
        />
        <source
          sizes="(max-width: 720px) 100vw, 720px"
          srcSet={`/img/${props.url}-1440.jpg 2x, /img/${props.url}-720.jpg 720w, /img/${props.url}-630.jpg 630w, /img/${props.url}-540.jpg 540w, /img/${props.url}-450.jpg 450w, /img/${props.url}-360.jpg 360w`}
          type="image/jpeg"
        />
        <img
          width="2880"
          height="1620"
          decoding="async"
          loading="lazy"
          src={`/img/${props.url}-720.jpg`}
          alt={props.alt}
        />
      </picture>
    </>
  );
}
