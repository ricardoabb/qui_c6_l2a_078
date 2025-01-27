"use client"

import React, { useState } from 'react';


type videoComponentProp = {
    url: string;
};

export function VideoComponent({ url = "/videos/card-1.mp4", }: videoComponentProp) {

    const [isLoading, setIsLoading] = useState(true);

    const handleCanPlay = () => {
        setIsLoading(false);
    };

    const handleWaiting = () => {
        setIsLoading(true);
    };



    return (
        <div className="relative max-w-52 md:max-w-80 ml-2 md:ml-14 -mb-6 overflow-hidden rounded-2xl border-solid border-8 -rotate-6 border-white z-10  shadow-md">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="w-6 h-6 border-4 border-t-4 border-t-white border-gray-300 rounded-full animate-spin"></div>
                </div>
            )}
            <video autoPlay loop muted className="object-cover w-full h-full"
                onCanPlay={handleCanPlay}
                onWaiting={handleWaiting}
            >
                <source src={url} type="video/mp4" />
                Seu navegador não suporta vídeo HTML5.
            </video>
        </div>
    )
}