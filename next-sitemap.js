export const siteUrl = "https://avif.io";
export async function transform(config, path) {
  return {
    loc: path,
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
  };
}
