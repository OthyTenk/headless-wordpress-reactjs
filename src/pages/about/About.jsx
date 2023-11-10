import Container from "../../components/Container";
import useFetch from "../../hooks/useFetch";

// Here set page slug
// const PAGE_SLUG = "sample-page";
// you can replace below text
const PAGE_SLUG = "холбоо-барих";

const AboutPage = () => {
  const { data, loading } = useFetch(
    `/wp-json/wp/v2/pages?_fields=id,slug,title,content&slug=${PAGE_SLUG}`
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
        <h1 className="text-4xl font-semibold mb-8 text-center">
          {data[0].title.rendered}
        </h1>
        <div
          className="prose prose-slate max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: data[0].content.rendered }}
        />
      </section>
    </Container>
  );
};

export default AboutPage;
