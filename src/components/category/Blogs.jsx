import useFetch from "../../hooks/useFetch";
import BlogCard from "../BlogCard";

// eslint-disable-next-line react/prop-types
const Blogs = ({ slug }) => {
  const { data, loading } = useFetch(
    `/wp-json/wp/v2/posts?_fields=id,slug,title,content&categories=${slug}`
  );

  if (loading) {
    return <div>loading...</div>;
  }

  if (!data) {
    return <div>No posts found</div>;
  }

  return (
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
  );
};

export default Blogs;
