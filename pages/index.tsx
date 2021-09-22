import Head from 'next/head'
import {useRouter} from "next/router";
import Image from "next/image";

export default function Home() {

    const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900">
      <Head>
        <title>byRookas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center max-w-screen-xl">
      {/*      her  */}
          <div className="flex flex-col md:flex-row">
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
              <div className="flex items-center justify-center mt-5 px-10 md:flex-1 px-3">
                  <div className="bg-red-500 flex-1 z-0 relative">
                    <Image height={144} width={144} layout="responsive" className="" src={'https://images.unsplash.com/photo-1632224120647-e7abd8225fb4?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'} />

                      <div className="absolute top-0 right-0 w-28 h-28">
                          <Image height={144} width={144} layout="responsive" className="" src="/pattern_4.svg" />
                      </div>
                  </div>

              </div>

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
