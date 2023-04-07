import { fetchAllBlogs, fetchAllWorks } from "@/sanity/fetch";

export default async function sitemap() {
  const blogs = await fetchAllBlogs();
  const works = await fetchAllWorks();

  const blogRoutes = blogs.map((blog: Blog) => ({
    url: `https://mandjoudama.ml/blogs/${blog.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const workRoutes = works.map((work: Work) => ({
    url: `https://mandjoudama.ml/works/${work.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const routes = ["", "/services", "/works", "/contact", "/blogs"].map(
    (route) => ({
      url: `https://mandjoudama.ml${route}`,
      lastModified: new Date().toISOString().split("T")[0],
    })
  );

  return [...routes, ...blogRoutes, ...workRoutes];
}
