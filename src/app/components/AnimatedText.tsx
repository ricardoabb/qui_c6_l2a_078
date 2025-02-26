"use client"
import Image from "next/image";
import React, { useState, useEffect } from 'react';

import iconDown from '@/app/assets/icon-down.svg';

type TextBoxProps = {
    text: string;
    limit?: number;
    delay?: number;
};

export function AnimatedText({ text, limit = 140, delay = 5 }: TextBoxProps) {
    const [displayedText, setDisplayedText] = useState<string>('');
    const [remainingText, setRemainingText] = useState<string>(text);
    const [baseText, setBaseText] = useState<string>(text);
    const [textEnd, setTextEnd] = useState<boolean>(false);

    const [displayBtn, setDisplayBtn] = useState<string>('hidden');
    const [animationNextBtn, setAnimationNextBtn] = useState<string>('animate-fade-in-out');

    useEffect(() => {
        let currentText = '';
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            if (currentIndex < baseText.length) {
                currentText += baseText[currentIndex];
                if (currentText.length <= limit || (currentText.length > limit && baseText[currentIndex] !== ' ')) {

                    setDisplayedText(currentText);
                    baseText.length <= limit ? setDisplayBtn('') : setDisplayBtn('hidden')
                    baseText.length <= limit ? setAnimationNextBtn('') : setAnimationNextBtn('animate-fade-in-out')

                } else {
                    setRemainingText(baseText.slice(currentIndex));
                    setDisplayedText(currentText + '...');
                    clearInterval(intervalId);
                }
                currentIndex++;
            } else {
                clearInterval(intervalId);
                setTextEnd(!textEnd);

            }
        }, delay);


        return () => clearInterval(intervalId);
    }, [baseText, limit, delay]);

    function handlerLoadText() {
        setBaseText(remainingText);

    }

    function handlerBack() {
        setBaseText(text);

    }
    interface TextWithHighlightsProps {
        text: string;
      }
      
      function TextWithHighlights({ text }: TextWithHighlightsProps): JSX.Element {
        const phrasesToHighlight: string[] = [
          'Estudar', 'Reino de Jerusalém', 'o Condado de Trípoli', 'o Principado de Antioquia', 'Condado de Edessa.', 'proto',
          'CO2', 'H2O', 'O2', 'CH4', 'NH3', 'SO2', 'NO2', 'Haber-Bosch' // Adicionamos "Haber-Bosch"
        ];
      
        // Ordenar as frases para evitar conflito de palavras curtas dentro de frases mais longas
        const sortedPhrases = phrasesToHighlight.sort((a, b) => b.length - a.length);
      
        // Criar regex para encontrar frases destacadas e fórmulas químicas
        const regex = new RegExp(`(${sortedPhrases.join('|')})`, 'gi');
      
        const highlightedText = text.split(regex).map((part, index) => {
          if (sortedPhrases.includes(part)) {
            // Se for uma fórmula química, separar os números e adicionar subscrito
            const chemicalParts = part.split(/(\d+)/).map((subPart, subIndex) =>
              /\d+/.test(subPart) ? <sub key={`${index}-${subIndex}`}>{subPart}</sub> : subPart
            );
      
            // Adiciona Soft Hyphen (hífen condicional) antes do hífen existente
            const formattedText = part.includes('-') ? part.replace('-', '\u00AD-') : chemicalParts;
      
            return (
              <strong key={index} style={{ wordBreak: 'break-word' }}>
                {formattedText}
              </strong>
            );
          }
      
          return part.includes('-') ? (
            <span key={index} style={{ wordBreak: 'break-word' }}>
              {part.replace('-', '\u00AD-')}
            </span>
          ) : (
            part
          );
        });
      
        return <p className="text-[1.1rem] whitespace-pre-wrap select-none">{highlightedText}</p>;
      }
      
      
      
      

    return (
        <div className="relative h-full flex flex-col justify-between z-40">
                  {TextWithHighlights({ text: displayedText })}
                  {/* <p className="text-sm md:text-lg whitespace-pre-wrap select-none"></p> */}
            {remainingText && <p style={{ display: 'none' }}>{remainingText}</p>}
            <div className={`${text.length <= limit ? "hidden" : "flex"} items-center ml-auto gap-3 `}>
                <a onClick={handlerBack} className={`${displayBtn} cursor-pointer animate-fade-in-out`}>voltar</a>
                <div className={`w-4 py-3 none cursor-pointer ${animationNextBtn}  `}>
                    <a onClick={handlerLoadText}  ><Image width={100} height={100} src={iconDown} alt="carregar restante do texto..." /></a>
                </div>
            </div>
        </div>
    );
};


