import Head from 'next/head'

export default function Home() {


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
      <Head>
        <title>byRookas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-white text-7xl font-bold">Hello, let's build some awesome shit 🚀</h1>
          <h2 className="text-white text-4xl mt-6">Proudly by the guy, who loves making some damn good shit with react 🔥</h2>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t border-gray-900">
        <a
          className="flex items-center justify-center text-white"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '} byRookas ❤️
        </a>
      </footer>
    </div>
  )
}
