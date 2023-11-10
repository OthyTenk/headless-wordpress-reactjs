import Container from "../../components/Container";

import Blogs from "../../components/home/Blogs";
import Categories from "../../components/home/Categories";

const HomePage = () => {
  return (
    <Container>
      <section className="flex flex-col md:flex-row gap-8">
        <Blogs />
        <Categories />
      </section>
    </Container>
  );
};

export default HomePage;
