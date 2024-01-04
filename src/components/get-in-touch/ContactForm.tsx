import axios from "axios";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    agreeTerms: false,
  });
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/emailSend", formData);
      response.data.message;
      // Setting formSucces
      if (response.status === 200) {
        setFormError("");
        setFormSuccess(true);
        // Clear form data upon
        setFormData({
          fullName: "",
          email: "",
          message: "",
          agreeTerms: false,
        });

        setTimeout(() => setFormSuccess(false), 2000);
      }
    } catch (err: any) {
      let errorMessage = "Error sending email";
      if (err.response) {
        // The request was made, but the server responded with an error
        errorMessage = err.response.data.message || err.response.statusText;
      } else if (err.request) {
        // The request was made, but no response was received
        errorMessage = "No response received";
      } else {
        // Something happened in setting up the request that triggered an error
        errorMessage = err.message || "Unknown error";
      }

      console.error("Error submitting form:", errorMessage);

      setFormError(errorMessage);
      setFormSuccess(false);
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form
      className="mt-10 flex flex-col gap-4 lg:order-1 lg:w-[60%]"
      onSubmit={handleFormSubmit}
    >
      <input
        placeholder="Full name *"
        className="border-[1px] border-gray-100 rounded-full p-4 bg-gray-50 w-full"
        required
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />
      <input
        placeholder="Email *"
        className="border-[1px] border-gray-100 rounded-full p-4 bg-gray-50 w-full"
        required
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        placeholder="What's the primary concern we need to prioritize? *"
        className="rounded-lg px-4 py-8 bg-gray-50 w-full h-[15rem] resize-none borde"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <div className="flex gap-4">
        <input
          type="checkbox"
          id="agreeTerms"
          name="agreeTerms"
          checked={formData.agreeTerms}
          onChange={(e) =>
            setFormData((prevData) => ({
              ...prevData,
              agreeTerms: e.target.checked,
            }))
          }
        />
        <label htmlFor="agreeTerms">I agree to the terms and conditions</label>
      </div>
      <input
        type="submit"
        value="Send message"
        className="mt-4 bg-primary text-white font-semibold rounded-xl p-4"
      />{" "}
      {formError !== "" && (
        <p className="text-lg font-light text-red-400 ">{formError}</p>
      )}
      {formSuccess && (
        <p className="ext-lg font-light text-green-400">
          Email has been sent successfully
        </p>
      )}
    </form>
  );
}
