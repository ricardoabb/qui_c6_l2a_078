"use client"
import Image from 'next/legacy/image';
import React from 'react';
import { useModalStore } from "../store/useModalStore";
import { motion, AnimatePresence } from 'framer-motion';
import { TextBox } from "./TextBox";
import { VideoComponent } from "./VideoComponent";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';






export function Modal() {
  const { isOpen, title, content, image1, image2, video, tapeColor, bgColor, closeModal } = useModalStore();
  if (!isOpen) return null;
  
  
  

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-slate-900 bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-modal bg-no-repeat bg-cover bg-opacity-50 p-6 rounded shadow-lg w-full h-full flex items-center justify-center"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <div className="relative w-full md:w-auto -mt-8 md:-mt-52">
              <button onClick={closeModal} className="absolute top-[-20px] md:top-[20px] right-0 md:right-[-0px] bg-white shadow-md rounded-full p-6 z-50">
                <svg width="33" height="35" viewBox="0 0 33 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.0156 34.2656H23.7188L15.75 21.3047L7.78125 34.2656H0L11.3672 16.5938L0.726562 0H8.74219L16.125 12.3281L23.3672 0H31.1953L20.4375 16.9922L32.0156 34.2656Z" fill="#410F33" />
                </svg>
              </button>
              <div className="relative ">
                <VideoComponent url={video!} />
                <TextBox title={title} content={content} bgColor={bgColor!} hide={false} />
                <div className='absolute flex left-0 -bottom-[200px] md:-bottom-[330px] w-full'>
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    {image1 && (
                      <SwiperSlide>
                        <div className="left-[-10px] -bottom-20 w-64 lg:w-56 h-44 lg:h-96 ml-3  select-none">
                          <Image
                            src={image1!}
                            alt={''}
                            layout="fill" // Faz a imagem preencher o contêiner
                            objectFit="contain" // Ajusta a imagem para cobrir o contêiner                          
                          />
                        </div>
                      </SwiperSlide>
                    )}
                    {image2 && (
                                          
                      <SwiperSlide>
                        <div className="left-[-10px] -bottom-20 w-64 lg:w-56 h-44 lg:h-72 sm:h-36 ml-3  select-none">
                          <Image
                            src={image2!}
                            alt={''}
                            layout="fill" // Faz a imagem preencher o contêiner
                            objectFit="contain" // Ajusta a imagem para cobrir o contêiner                          
                          />
                        </div>
                      </SwiperSlide>
                    )}
                  </Swiper>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};    
