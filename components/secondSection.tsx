"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const images = [
    '/Img/ill1.png',
    '/Img/ill2.png',
    '/Img/ill3.png',
    '/Img/ill4.png',
];

const SecondSection = () => {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % images.length);
                setFade(true);
            }, 400);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='bg-[url("/Img/bg.png")] bg-cover bg-top rounded-t-[4rem] h-[500px] relative max-w-lg mx-auto'>
            <Image
                src="/Img/circle.png"
                alt="circle text"
                width={350}
                height={350}
                className='animate-spin-slow absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'
            />
            <Image
                key={index}
                src={images[index]}
                alt={`circle ill${index + 1}`}
                width={50}
                height={50}
                className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-400 ${fade ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionProperty: 'opacity' }}
            />
        </div>
    );
}

export default SecondSection