import Head from 'next/head'
import {useRouter} from "next/router";
import Image from "next/image";

export default function Home() {

    const router = useRouter();
    const techLogos = [
        '/logos/amplify.svg',
        '/logos/aws.svg',
        '/logos/graphql.svg',
        '/logos/javascript.svg',
        '/logos/mongodb.svg',
        '/logos/next-js.svg',
        '/logos/nodejs.svg',
        '/logos/react.svg',
        '/logos/typescript.svg',
    ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 scrollbar-hide">
      <Head>
        <title>byRookas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center max-w-screen-xl">
      {/*      her  */}
          <div className="flex flex-col mt-10 md:flex-row">
          {/*    taglines   */}
              <div className="flex flex-col justify-center items-center px-3 md:flex-1">
                  <span className="text-blue-300 text-md md:text-left">Development | Code | Entrepreneurship</span>
                  <h1 className="text-gray-100 text-3xl font-bold  mt-4 md:text-left">Rokas Rudzianskas, creative entrepreneur and my life in the online world.</h1>

                  <p className="text-gray-300 mt-6 md:text-left">Creative fullstack developer, Brainlyemails & Connexious Founder and CEO. Enthusiastic Growth Hacker, Internet Marketer, and Adobe Creative Cloud Junky</p>
                  <div className="bg-yellow-300 px-4 py-2 rounded-md mt-5 hover:bg-yellow-600 transition duration-150 ease-in-out">
                    <button className="text-gray-900">Subscribe!</button>
                  </div>
              </div>

              <div className="flex-1 relative justify-center items-center pr-9 mb-10 w-full px-5 mt-6">
                  <Image
                      src={'https://images.unsplash.com/photo-1632224120647-e7abd8225fb4?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'}
                      height={144}
                      width={144}
                      alt="profile image"
                      layout="responsive"
                  />
                  <div className="absolute bottom-0 right-0 w-14 transform translate-y-9 md:w-24 md:translate-y-16 md:translate-x-6">
                      <Image src="/pattern_4.svg"    height={144} width={144} alt="brand element" layout="responsive" />
                  </div>
              </div>

          </div>

          <div className="flex flex-row flex-wrap items-center mt-10 mt-1 justify-center md:mt-0">
              {techLogos.map((logo) => (
                  <div className="relative w-10 h-10 mx-3 mt-3">
                    <Image key={logo} src={logo} layout="fill" objectFit="contain" className=""/>
                  </div>
                  ))}
          </div>

      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t border-gray-900">
        <a
          className="flex items-center justify-center text-white"
        >
          Powered by{' '} <span className=" ml-1 text-blue-600 font-bold mr-1" onClick={() => router.push('starting')}>Rokas Rudzianskas</span> ❤️
        </a>
      </footer>
    </div>
  )
}
