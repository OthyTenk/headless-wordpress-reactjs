import Footer from "./Footer";
import Header from "./Header";

/* eslint-disable react/prop-types */
const Container = ({ children }) => {
  return (
    <div className="container mx-auto p-8">
      <Header />
      <hr />
      <div className="py-8">{children}</div>
      <hr />
      <Footer />
    </div>
  );
};

export default Container;
