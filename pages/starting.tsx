import React from 'react';
import Head from "next/head";
import {useRouter} from "next/router";

const Starting = () => {

    const router = useRouter();
    return (
            <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
                <Head>
                    <title>byRookas</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className="flex flex-col items-center justify-center w-full flex-1 px-3 text-center md:px-20">
                    <h1 className="text-white text-3xl font-bold md:text-7xl">I thought we would get the right amount of candles to put on your cake this year, but quickly ran out of space. Happy Birthday! 🚀</h1>
                    <h2 className="text-white text-2xl mt-6 md:text-3xl">Wishes from Rokas, Rimas, Rusne & Lina 🔥</h2>
                    <h3 onClick={() => router.push('index')} className="text-blue-600 text-xl font-bold mt-6 md:text-2xl">Go back to somewhere magical!</h3>

                </main>

                <footer className="flex items-center justify-center w-full h-24 border-t border-gray-900">
                    <a
                        className="flex items-center justify-center text-white"
                    >
                        Powered by{' '} <span className=" ml-1 text-blue-600 font-bold mr-1">Rokas Rudzianskas</span> ❤️
                    </a>
                </footer>
            </div>
    );
};

export default Starting;
