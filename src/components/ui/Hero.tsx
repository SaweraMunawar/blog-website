"use client"

import Head from 'next/head';
import { useRouter } from 'next/navigation';

const HomePage = () => {
    const router = useRouter();
  return (
    <div className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/pizza-background.jpg')" }}>
      <Head>
        <title>Pizza Blog</title>
        <meta name="description" content="Welcome to the Pizza Blog!" />
      </Head>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-white text-center p-5">
        <h1 className="text-5xl md:text-7xl font-bold">Welcome to the Pizza Blog!</h1>
        <p className="mt-4 text-lg md:text-2xl">Your go-to source for all things pizza.</p>
        <button onClick={()=>router.push('/blog')} className="mt-6 inline-block bg-orange-400 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default HomePage;
