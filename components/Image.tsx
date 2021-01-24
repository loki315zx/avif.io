export default function Image(props: { alt: string; url: string }) {
  return (
    <>
      <picture>
        <source
          sizes="(max-width: 720px) 100vw, 720px"
          srcSet={`/images/${props.url}-1440.avif 2x,
            /images/${props.url}-720.avif 720w,
            /images/${props.url}-630.avif 630w,
            /images/${props.url}-540.avif 540w,
            /images/${props.url}-450.avif 450w,
            /images/${props.url}-360.avif 360w`}
          type="image/avif"
        />
        <source
          sizes="(max-width: 720px) 100vw, 720px"
          srcSet={`/images/${props.url}-1440.webp 2x,
            /images/${props.url}-720.webp 720w,
            /images/${props.url}-630.webp 630w,
            /images/${props.url}-540.webp 540w,
            /images/${props.url}-450.webp 450w,
            /images/${props.url}-360.webp 360w`}
          type="image/webp"
        />

        <source
          sizes="(max-width: 720px) 100vw, 720px"
          srcSet={`/images/${props.url}-1440.jpg 2x,
            /images/${props.url}-720.jpg 720w,
            /images/${props.url}-630.jpg 630w,
            /images/${props.url}-540.jpg 540w,
            /images/${props.url}-450.jpg 450w,
            /images/${props.url}-360.jpg 360w`}
          type="image/jpeg"
        />
        <img
          width="2880"
          height="1620"
          decoding="async"
          loading="lazy"
          src={`/images/${props.url}.jpg`}
          alt={props.alt}
        />
      </picture>
    </>
  );
}
