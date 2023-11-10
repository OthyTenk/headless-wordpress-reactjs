import { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";

const url = `http://localhost/wordpress/wp-json/contact-form-7/v1/contact-forms/6/feedback`;

const ContactForm = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.target);
    const req = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const response = await req.json();

    if (response.invalid_fields && response.invalid_fields.length > 0) {
      let errors = "";
      response.invalid_fields.forEach((field) => {
        errors += `${field.field}: ${field.message}\n`;
      });
      setError(errors);
    } else {
      alert(response.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        {error && (
          <div className="bg-rose-500 text-white py-2 text-center rounded-md">
            {error}
          </div>
        )}
        <Input required id="name" name="your-name" label="Name" />
        <Input
          required
          type="email"
          id="email"
          name="your-email"
          label="Email"
        />
        <Input required id="subject" name="your-subject" label="Subject" />
        <Textarea required id="message" name="your-message" label="Message" />
        <button
          type="submit"
          className="w-40 bg-rose-400 hover:bg-red-500 text-white rounded-md p-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
