"use client";
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Banner() {
    const [currentIndex, setCurrentIndex] = useState(1);

    const [cards] = useState([
        {
            product: 'TV',
            title: 'Cinema is Coming Home',
            description: 'Experience stunning visuals and immersive sound.',
            image: '../assets/livingRoom.jpeg',
        },
        {
            product: 'Sony Alpha 7 IV',
            title: 'Camera',
            description: 'Capture your moments with precision and clarity.',
            image: '../assets/camera.jpeg',
        },
        {
            product: 'Movie',
            title: 'A New era of Evil',
            description: 'Experience the thrill of a new era of evil with our latest movie release.',
            image: '../assets/movie.jpeg',
        }
    ]);

    function handleNext() {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }

    function handleBack() {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    }

    const activeCard = cards[currentIndex];

    return (
        <div className="w-full h-screen bg-blue-800">
            <div className="flex flex-col items-center h-full gap-8 overflow-hidden">

                {/* Card Strip */}
                <div
                    className="flex gap-8 mt-2"
                    style={{
                        transform: `translateX(calc(50vw - 375px - ${currentIndex * 785}px))`,
                        transition: 'transform 0.5s ease-in-out'
                    }}
                >
                    {cards.map((card, i) => (
                        <div
                            key={card.product}
                            className='w-[750px] h-[420px] rounded-md bg-gray-200 flex-shrink-0'
                            style={{
                                backgroundImage: `url(${card.image})`,
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                opacity: i === currentIndex ? 1 : 0.5,
                                transform: i === currentIndex ? 'scale(1)' : 'scale(0.92)',
                                transition: 'opacity 0.5s ease, transform 0.5s ease',
                            }}
                        />
                    ))}
                </div>

                {/* Controls + Description */}
                <div className='flex flex-col items-center gap-3 -translate-y-4'>
                    <div className='flex justify-center items-center gap-4'>
                        <ChevronLeft
                            size={60}
                            color="white"
                            className="hover:cursor-pointer hover:opacity-70 transition-opacity"
                            onClick={handleBack}
                        />
                        <div className='flex flex-col gap-1 text-white text-center min-w-[300px]'>
                            <h1 className="text-2xl font-bold">{activeCard.product}</h1>
                            <p className="text-lg">{activeCard.title}</p>
                            <p className="text-sm opacity-80">{activeCard.description}</p>
                        </div>
                        <ChevronRight
                            size={60}
                            color="white"
                            className="hover:cursor-pointer hover:opacity-70 transition-opacity"
                            onClick={handleNext}
                        />
                    </div>

                    {/* Dot Indicators */}
                    <div className='flex gap-2 justify-center mt-1'>
                        {cards.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    i === currentIndex ? 'bg-white w-4' : 'bg-white/40 w-2'
                                }`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}