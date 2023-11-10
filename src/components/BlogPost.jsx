// eslint-disable-next-line react/prop-types
const BlogPost = ({ title, author, slug }) => {
  return (
    <div className="mb-4">
      <a href={`/blog/${slug}`}>
        <h2 className="font-semibold text-lg text-rose-500">{title}</h2>
      </a>
      <span className="text-sm text-neutral-500">{author}</span>
    </div>
  );
};

export default BlogPost;
