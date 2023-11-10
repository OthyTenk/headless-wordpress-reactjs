import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import Title from "../../components/category/Title";
import Blogs from "../../components/category/Blogs";

const CategoryPage = () => {
  const { categoryId } = useParams();

  return (
    <Container>
      <section>
        <Title slug={categoryId} />
        <Blogs slug={categoryId} />
      </section>
    </Container>
  );
};

export default CategoryPage;
