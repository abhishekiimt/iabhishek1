import Head from "next/head";
import ExamplePages from "../components/ExamplePages";
import Hero from "../components/Hero";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>iabhishek || Portfolio </title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Hi, Abhishek Pandey this side. I love code and design a websites and surffing web to explore new advance website that motivate me . Also, I like pushing myself and taking up new challenges."
        />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Intro />
      <ExamplePages />
    </div>
  );
}
