import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import useFetch from "../../hooks/useFetch";

const BlogDetailsPage = () => {
  const { blogSlug } = useParams();
  const { data, loading } = useFetch(
    `/wp-json/wp/v2/posts?_fields=id,slug,title,content&slug=${blogSlug}`
  );

  if (loading) {
    return (
      <Container>
        <section>
          <div className="prose prose-slate max-w-2xl mx-auto text-center">
            loading...
          </div>
        </section>
      </Container>
    );
  }

  if (!data[0] && !loading) {
    return (
      <Container>
        <section>
          <div className="prose prose-slate max-w-2xl mx-auto text-center">
            No data found
          </div>
        </section>
      </Container>
    );
  }

  return (
    <Container>
      <section>
        <h1
          className="text-4xl font-semibold mb-8 text-center"
          dangerouslySetInnerHTML={{ __html: data[0].title.rendered }}
        />
        <div
          className="prose prose-slate max-w-2xl mx-auto"
          dangerouslySetInnerHTML={{ __html: data[0].content.rendered }}
        />
      </section>
    </Container>
  );
};

export default BlogDetailsPage;
