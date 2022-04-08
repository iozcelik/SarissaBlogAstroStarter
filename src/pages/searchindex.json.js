export async function get() {
  let posts = await import.meta.globEager(`./post/*.md`);
  return {
    body: JSON.stringify(
      Object.values(posts)
        .filter((f) => f.frontmatter.draft != true)
        .map((p) => {
          return {
            title: p.frontmatter.title,
            description: p.frontmatter.description,
            date: p.frontmatter.date,
            slug: p.url,
            image: p.frontmatter.image,
          };
        }),
      false,
      1
    ),
  };
}
