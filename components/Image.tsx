export default function Image(props: { alt: string; url: string }) {
  return (
    <>
      <picture>
        <source
          type="image/avif"
          srcSet={`/img/${props.url}-1440.avif 1440w, /img/${props.url}-720.avif 720w, /img/${props.url}-540.avif 540w, /img/${props.url}-360.avif 360w`}
          sizes="(max-width: 720px) 100vw, 720px"
        />
        <source
          type="image/webp"
          srcSet={`/img/${props.url}-1440.webp 1440w, /img/${props.url}-720.webp 720w, /img/${props.url}-540.webp 540w, /img/${props.url}-360.webp 360w`}
          sizes="(max-width: 720px) 100vw, 720px"
        />
        <source
          type="image/jpeg"
          srcSet={`/img/${props.url}-1440.jpg 1440w, /img/${props.url}-720.jpg 720w, /img/${props.url}-540.jpg 540w, /img/${props.url}-360.jpg 360w`}
          sizes="(max-width: 720px) 100vw, 720px"
        />
        <img
          loading="lazy"
          decoding="async"
          width={2880}
          height={1620}
          src={`/img/${props.url}-1440.jpg`}
          alt={props.alt}
        />
      </picture>
    </>
  );
}
