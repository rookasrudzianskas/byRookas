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
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900">
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
                  <h1 className="text-gray-100 text-3xl font-bold  mt-4 md:text-left">Your journey to becoming an awesome developer!</h1>

                  <p className="text-gray-300 mt-6 md:text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci earum provident quisquam voluptatum. Architecto assumenda laboriosam perferendis sit suscipit voluptas?</p>
                  <div className="bg-yellow-300 px-4 py-2 rounded-md mt-5 hover:bg-yellow-600 transition duration-150 ease-in-out">
                    <button className="text-gray-900">Subscribe!</button>
                  </div>
              </div>

          {/*    video  */}
          {/*    <div className="flex items-center justify-center mt-5 px-10 mr-6 md:flex-1 px-3">*/}
          {/*        <div className="bg-red-500 flex-1 z-0 relative">*/}
          {/*          <Image height={144} width={144} layout="responsive" className="" src={'https://images.unsplash.com/photo-1632224120647-e7abd8225fb4?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'} />*/}

          {/*            <div className="absolute top-0 right-0 w-14 transform translate-x-9 translate-y-1 md:absolute right-0 top-64 transform translate-x-9 translate-y-64 lg:absolute right-0 transform translate-y-60">*/}
          {/*                <Image height={2106} width={1204} layout="responsive" className="rounded-md" src="/pattern_4.svg" />*/}
          {/*            </div>*/}
          {/*        </div>*/}

          {/*    </div>*/}
              <div className="flex-1 relative justify-center items-center pr-9 mb-10 w-full">
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

          <div className="flex flex-row">
              {techLogos.map((logo) => (
                  <div className="relative w-10 h-10">
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
