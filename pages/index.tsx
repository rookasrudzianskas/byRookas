import Head from 'next/head'
import {useRouter} from "next/router";

export default function Home() {

    const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900">
      <Head>
        <title>byRookas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">

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
