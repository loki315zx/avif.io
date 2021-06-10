export default function Ad() {
  return (
    <div
      className="ad"
      style={{
        display: "block",
        width: "100%",
      }}
    >
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          textAlign: "center",
          width: "100%",
          margin: "var(--s4) 0",
        }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-4499854243209236"
        data-ad-slot="9846855571"
      ></ins>
      <script>{`(adsbygoogle = window.adsbygoogle || []).push({});`}</script>
    </div>
  );
}
