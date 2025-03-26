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
    image3?: string;
    video?: string;
    tapeColor?: string;
    bgColor?: string;

};


export function Card({ title = "title test", subtitle, cardSubtitle, content, imageThumb = "", image1 = "", image2 = "",image3 = "", video = "", tapeColor = "fill-red-300", bgColor, }: textInfoProp) {
    const openModal = useModalStore((state) => state.openModal);


    function TextWithHighlights({ text }: { text?: string }): JSX.Element {
        const boldWords: string[] = [];
        const nowrapWords: string[] = ['Haber-Bosch', 'Fischer-Tropsch']; // Adicione palavras que devem manter hífen
        
        // Usar string vazia como fallback se `text` for undefined
        const safeText = text || '';
    
        // Criar regex para capturar palavras de ambos os arrays
        const regex = new RegExp(
          `(${[...boldWords, ...nowrapWords].join('|')}|\\b\\w+-\\w+\\b)`, 
          'gi'
        );
    
        const highlightedText = safeText.split(regex).map((part, index) => {
          if (boldWords.includes(part)) {
            return (
              <strong key={index} className="whitespace-nowrap">
                {part}
              </strong>
            );
          }
    
          if (nowrapWords.includes(part) || part.includes('-')) {
            return (
              <span key={index} className="whitespace-nowrap">
                {part}
              </span>
            );
          }
    
          return part;
        });
    
        return <p className="text-[1.1rem] whitespace-pre-wrap select-none">{highlightedText}</p>;
      }
    

    return (
        <div className={`group relative bg-[#fff] mx-auto  flex justify-center items-center py-9 rounded-3xl w-full md:w-8/12 shadow-solid cursor-pointer`} onClick={() => openModal({
            title: title,
            subtitle: subtitle,
            cardSubtitle: cardSubtitle,
            content: content,
            image1: image1,
            image2: image2,
            image3: image3,
            video: video,
            tapeColor: tapeColor,
            bgColor: bgColor,

        })}>
            <div className='flex flex-col justify-center items-start w-full ml-[82px] sm:ml-[140px] md:ml-[182px] lg:ml-[200px]'>
                <h1 className="font-nunito font-semibold w-8/12 text-xl md:text-2xl lg:text-3xl text-[#ba7bd3]">{title}</h1>
                <p className='w-10/12 text-pink-950 hyphens-none '>{TextWithHighlights({ text: subtitle })}</p>
            </div>




            <svg className={`absolute top-[-60px] right-[-20px] lg:top-[-50px] lg:right-[-30px] w-20 lg:w-32 ${tapeColor} `}
                width="190" height="132" viewBox="0 0 190 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5 0L189.548 98.1773L167.167 101.421L170.048 131.952L0 33.775L20.0677 28.6179L19.5 0Z" />
            </svg>
            <div className="absolute left-[-32px] w-20  md:w-48 h-20  md:h-32  ml-5 animate-pulse select-none">
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