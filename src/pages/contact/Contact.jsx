import Container from "../../components/Container";
import ContactForm from "../../components/ContactForm";

const ContactPage = () => {
  return (
    <Container>
      <section>
        <h1 className="text-4xl font-semibold mb-8 text-center">Contact</h1>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </Container>
  );
};

export default ContactPage;
