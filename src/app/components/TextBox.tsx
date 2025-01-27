"use client"
import Image from "next/image";




import React, { useState, useEffect } from 'react';
import { AnimatedText } from "./AnimatedText";
import { SoftColors } from "../utils/info";
import { useModalStore } from "../store/useModalStore";

type textInfoProp = {
    title: string;
    subtitle?: string;
    cardSubtitle?: string;
    content: string;
    hide: boolean;
    bgColor: string;

};





export function TextBox({ content = "", title = "", subtitle, cardSubtitle, hide = false, bgColor = "black" }: textInfoProp) {
    const { isOpen } = useModalStore();


    return (
        <div id="container" className={`relative ${isOpen ? 'w-full mb-24 md:mb-auto  md:h-[356px]' : 'w-[90%] mb-16 h-auto'}  lg:w-[750px]   mx-auto    py-8 pt-14 px-5 ${bgColor} rounded-2xl shadow-solid`}>
            {/* <svg className={`${isOpen ? "hidden" : "block"} absolute bottom-[-60px] left-[-15px] md:left-[-40px] fill-teal-400 w-20 md:w-28"`} width="190" height="132" viewBox="0 0 190 132" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5 0L189.548 98.1773L167.167 101.421L170.048 131.952L0 33.775L20.0677 28.6179L19.5 0Z" />
            </svg>
            <svg className="absolute top-[-60px] right-[-15px] md:right-[-40px] fill-red-300 w-20 md:w-28" width="190" height="132" viewBox="0 0 190 132" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.5 0L189.548 98.1773L167.167 101.421L170.048 131.952L0 33.775L20.0677 28.6179L19.5 0Z" />
            </svg> */}

            <div id="title" className={`flex items-center justify-center gap-2 border-sand-500  ${hide ? "hidden" : "block"} `}>
                <div id="text">
                    <h1 className={`font-handlee ${isOpen ? 'text-[#ba7bd3]' : "text-[#ba7bd3]"}  text-[1.769rem] md:text-[2.1rem] mb-2 md:mb-2 leading-9 md:leading-10`}>{title}</h1>
                    {
                        isOpen ? <p className="mb-5 card-subtitle">{cardSubtitle}</p> : <p className="mb-5">{subtitle}</p>
                    }
                </div>
            </div>

            <div id="box-container" className={`bg-gradient-to-r h-full from-sand-300 to-sand-100 rounded-2xl   `}>
                <div className={`text-pink`}>
                    <AnimatedText text={content} limit={140} />
                </div>
            </div>

        </div>
    )
}