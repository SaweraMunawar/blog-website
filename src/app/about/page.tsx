// pages/about.tsx
import Head from 'next/head';

const About: React.FC = () => {
  return (
    <div className="bg-orange-200 min-h-screen p-8">
      <Head>
        <title>About - Pizza Blog</title>
        <meta name="description" content="Learn more about our pizza blog and its mission." />
      </Head>

      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="flex flex-col md:flex-row items-center justify-around mb-8">
        <img src="pizza2.jpg" alt="Delicious Pizza" className="w-full md:w-1/3 h-auto rounded-lg shadow-lg mb-4 md:mb-0" />
        <img src="pizza1.jpg" alt="Pizza Making" className="w-full md:w-1/3 h-auto rounded-lg shadow-lg" />
      </div>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to the Pizza Blog! We are passionate about all things pizza, from classic recipes to innovative creations.
        Our mission is to share delicious pizza recipes, tips, and stories that inspire you to create your own pizza masterpieces at home.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Whether you are a seasoned chef or a beginner in the kitchen, our blog offers something for everyone. 
        Join us on this flavorful journey as we explore the world of pizza, one slice at a time!
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Thank you for visiting our blog, and we hope you find inspiration and joy in making and enjoying pizza!
      </p>
    </div>
  );
};

export default About;
