/* eslint-disable react/prop-types */

const Card = ({ title, category, slug, summary }) => {
  return (
    <div className="mb-4">
      <a href={`/blog/${slug}`}>
        <h2
          className="font-semibold text-lg text-rose-500 hover:underline"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </a>

      <span className="font-thin text-md text-neutral-500">{category}</span>

      <div className="w-full" dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
};

export default Card;
