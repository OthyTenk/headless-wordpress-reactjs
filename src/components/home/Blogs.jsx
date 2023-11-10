import useFetch from "../../hooks/useFetch";
import BlogCard from "../BlogCard";

const Blogs = () => {
  const { data, loading } = useFetch(
    "/wp-json/wp/v2/posts?_fields=id,slug,title,content"
  );

  if (loading) {
    return (
      <div className="md:w-5/6">
        <h1 className="text-4xl font-semibold mb-8">Blog</h1>
        loading...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="md:w-5/6">
        <h1 className="text-4xl font-semibold mb-8">Blog</h1>
        No posts found
      </div>
    );
  }

  return (
    <div className="md:w-5/6">
      <h1 className="text-4xl font-semibold mb-8">Blog</h1>
      <div className="w-full">
        {data.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title.rendered}
            slug={post.slug}
            summary={post.content.rendered.substring(0, 100)}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
