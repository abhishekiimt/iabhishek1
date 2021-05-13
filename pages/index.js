import Head from 'next/head'
import Image from 'next/image'
import AboveFooter from '../components/AboveFooter'
import ExamplePages from '../components/ExamplePages'
import Hero from '../components/Hero'
import Intro from '../components/Intro'


export default function Home() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Head>
        <title>iabhishek || home </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Intro />
      <ExamplePages />
    </div>
  )
}
 