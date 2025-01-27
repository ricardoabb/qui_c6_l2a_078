"use client"
import Image from 'next/legacy/image';
import React from 'react';
import { useModalStore } from '../store/useModalStore';
import { SoftColors } from '../utils/info';

type textInfoProp = {
    title: string;
    subtitle?: string;
    cardSubtitle?: string;
    content: string;
    imageThumb: string;
    image1?: string;
    image2?: string;
    video?: string;
    tapeColor?: string;
    bgColor?: string;

};


export function Card({ title = "title test", subtitle, cardSubtitle, content, imageThumb = "", image1 = "", image2 = "", video = "", tapeColor = "fill-red-300", bgColor, }: textInfoProp) {
    const openModal = useModalStore((state) => state.openModal);


    return (
        <div className={`group relative bg-[#fff] mx-auto  flex justify-center items-center py-9 rounded-3xl w-full md:w-10/12 shadow-solid cursor-pointer`} onClick={() => openModal({
            title: title,
            subtitle: subtitle,
            cardSubtitle: cardSubtitle,
            content: content,
            image1: image1,
            image2: image2,
            video: video,
            tapeColor: tapeColor,
            bgColor: bgColor,

        })}>
            <div className='flex flex-col justify-center items-start ml-[82px] md:ml-[182px] lg:ml-[200px]'>
                <h1 className="font-handlee w-8/12 text-xl md:text-2xl lg:text-5xl text-[#ba7bd3]">{title}</h1>
                <p className='w-9/12 text-pink-950  '>{subtitle}</p>
            </div>

{/* 
            <div className="absolute right-[30px] bottom-[-28px] bg-white flex justify-center items-center rounded-[50%] w-[60px] h-[60px] shadow-md ">
                <svg className="transition-all ease-out group-hover:rotate-180 " width="20" height="24" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 2.31818C17 1.21361 16.1046 0.318176 15 0.318176C13.8954 0.318176 13 1.21361 13 2.31818V26.529L4.3233 17.8523C3.54225 17.0712 2.27592 17.0712 1.49487 17.8523C0.713826 18.6333 0.713826 19.8997 1.49487 20.6807L13.9207 33.1065C14.7017 33.8876 15.9681 33.8876 16.7491 33.1065L29.1749 20.6807C29.956 19.8997 29.956 18.6333 29.1749 17.8523C28.3939 17.0712 27.1276 17.0712 26.3465 17.8523L17 27.1988V2.31818Z" fill="#410F33" />
                </svg>
            </div> */}


            <svg className={`absolute top-[-60px] right-[-20px] lg:top-[-50px] lg:right-[-30px] w-20 lg:w-32 ${tapeColor} `}
                width="190" height="132" viewBox="0 0 190 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5 0L189.548 98.1773L167.167 101.421L170.048 131.952L0 33.775L20.0677 28.6179L19.5 0Z" />
            </svg>
            <div className="absolute left-[-52px] w-28 lg:w-44 sm:w-36 h-72 lg:h-72 sm:h-36 ml-3  animate-pulse select-none">
                <Image
                    src={imageThumb}
                    alt={title}
                    layout="fill" // Faz a imagem preencher o contêiner
                    objectFit="contain" // Ajusta a imagem para cobrir o contêiner  
                    priority={true}
                />
            </div>
        </div>
    )
}