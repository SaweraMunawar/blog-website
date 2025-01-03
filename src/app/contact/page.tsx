// pages/contact.tsx
import Head from "next/head";

const Contact: React.FC = () => {
  return (
    <div className="bg-orange-200 min-h-screen p-8">
      <Head>
        <title>Contact Us - Pizza Blog</title>
        <meta name="description" content="Get in touch with us!" />
      </Head>

      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="flex flex-col md:flex-row items-center justify-around mb-8">
        <img
          src="contact.jpg"
          alt="Contact Us"
          className="w-full md:w-1/2 h-auto rounded-lg shadow-lg mb-4 md:mb-0"
        />
        <form className="w-full md:w-1/2 bg-orange-100 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-black">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
              Email
            <label htmlFor="email" className="block text-black">
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-black">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-300 hover:bg-orange-400 text-black font-semibold py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
