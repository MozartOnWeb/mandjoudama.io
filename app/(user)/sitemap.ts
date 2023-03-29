export default async function sitemap() {
  const routes = ["", "/services", "/works", "/contact", "/blogs"].map(
    (route) => ({
      url: `https://mandjoudama.ml/${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    })
  );

  return [...routes];
}
