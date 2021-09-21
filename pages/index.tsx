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

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
      {/*      her  */}
          <div className="flex flex-col md:flex-row">
          {/*    taglines   */}
              <div className="flex flex-col justify-center items-center px-3 md:flex-1">
                  <span className="text-blue-300 text-md">Development | Code | Entrepreneurship</span>
                  <h1 className="text-gray-100 text-3xl font-bold  mt-4">Your journey to becoming an awesome developer!</h1>
                  <div className="bg-yellow-300 px-4 py-2 rounded-md mt-5 hover:bg-yellow-600 transition duration-150 ease-in-out">
                    <button className="text-gray-900">Subscribe!</button>
                  </div>
              </div>

          {/*    video  */}
              <div className="flex items-center justify-center mt-5 md:flex-1">
                  <Image height={144} width={144} src={'https://images.unsplash.com/photo-1632224120647-e7abd8225fb4?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'} />
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
