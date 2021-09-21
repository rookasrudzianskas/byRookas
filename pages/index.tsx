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

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      {/*      her  */}
          <div className="">
          {/*    taglines   */}
              <div className="">
                  <span className="text-gray-100">Development | Code | Entrepreneurship</span>
                  <h1 className="text-gray-100">Your journey to becoming a full-stack technical lead starts today. Learn faster by building real projects.</h1>
                  <button className="text-gray-100">Subscribe!</button>
              </div>

          {/*    video  */}
              <div>
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
