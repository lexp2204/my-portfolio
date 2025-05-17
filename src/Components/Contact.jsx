import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "641f454b-e2a7-4274-8e71-a86370e71d49");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("Form Submitted Successfully");
      event.target.reset();
      setResult("");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className="font-['Ubuntu_Sans_Mono'] w-full bg-[#0C0C16] text-white py-16 px-8 md:px-24"
    >
      <h2 className="text-2xl text-white pb-15">Contact Me</h2>

      <div className="flex flex-col md:flex-row gap-16">
        {/* Left Text Section */}
        <div className="md:w-1/2 flex flex-col">
          <p className="text-lg mb-4">
            I'm currently available to work or collaborate on new projects.
          </p>
          <p className="text-lg">
            Feel free to contact me for any questions or job opportunities!
          </p>
        </div>

        {/* Right Form Section */}
        <div className="md:w-1/2">
          <form onSubmit={onSubmit} className="flex flex-col gap-8">
            <input
              className="p-3 rounded-2xl text-white border border-gray-600 "
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              className="p-3 rounded-2xl text-white border border-gray-600 "
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              className="p-3 rounded-2xl text-white border border-gray-600 h-32 resize-none"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <button
              className="bg-gray-700 hover:bg-[#9013FE] text-white py-3 px-6 rounded-2xl transition duration-300"
              type="submit"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
