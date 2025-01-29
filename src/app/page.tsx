"use client"
import { Card } from "./components/Card";
import { CardModal } from "./components/CardModal";
import { TextBox } from "./components/TextBox";
import { useModalStore } from "./store/useModalStore";
import { info, card, } from "./utils/info";


export default function Home() {
  const openModal = useModalStore((state) => state.openModal);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // Scroll suave
        block: "start",     // Alinha ao início do elemento
      });
    } else {
      console.error(`Elemento com id "${id}" não encontrado.`);
    }
  };

  return (
    <main className="bg-[#e4eaf6] py-20 font-nunito font-normal">


      <TextBox content={info.intro} title={info.title} hide={false} bgColor='bg-[#fff]' />

      <div className="relative w-[90%] md:w-fit text-center my-14 bg-[#fff] shadow-solid mx-auto px-10 py-5 rounded-2xl ">
        <h1 className="font-bold text-2xl  md:text-5xl text-[#ba7bd3] text-center">Onde usamos catalisadores?</h1>
        <p className="text-pink-950">Clique nos boxes para saber mais!</p>

        <div className="absolute right-[30px] bottom-[-28px] bg-[#ba7bd3] flex justify-center items-center rounded-[50%] w-[70px] h-[70px] animate-pulse cursor-pointer animate-bounce"
          onClick={() => handleClick("cards")}
        >
          <svg className="rotate-180 fill-[#fff] " xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24"><path fill="#fff" d="M19.221 10.803L12 10V4a2 2 0 0 0-4 0v12l-3.031-1.212a2 2 0 0 0-2.64 1.225l-.113.34a1 1 0 0 0 .309 1.084l5.197 4.332c.179.149.406.231.64.231H19a2 2 0 0 0 2-2v-7.21a2 2 0 0 0-1.779-1.987" /></svg>
        </div>
      </div>




      <section id="cards" className={`flex flex-col pl-9 pr-4 gap-24 } `}>
        {card.map(item => {
          return <Card key={item.id} title={item.title} subtitle={item.subtitle} cardSubtitle={item.cardSubtitle} content={item.content} tapeColor={item.tapeColor} bgColor={item.bgColor} imageThumb={item.imageThumb} image1={item.image1} image2={item.image2} video={item.video} />
        })}

      </section>
        <div id="important" className="relative w-[90%] md:w-fit text-center my-8   mx-auto px-10 py-5 rounded-2xl ">
          <h1 className="font-bold text-2xl  md:text-5xl text-[#ba7bd3] text-center">Importante!</h1>
          <p className="text-[#fff] font-bold text-lg sm:text-2xl m-auto my-8 w-full lg:w-[50%]  bg-[#ba7bd3] rounded-lg py-4 px-8 ">Esses catalisadores são escolhidos com base na especificidade da reação desejada, considerando fatores como atividade catalítica, seletividade, durabilidade e custo.</p>
          <p className="text-[#fff] font-bold text-lg sm:text-2xl m-auto my-8 w-full lg:w-[50%]  bg-[#83abdc] rounded-lg py-4 px-8 ">O desenvolvimento de catalisadores mais eficientes e sustentáveis continua sendo uma área de intensa pesquisa na indústria química.</p>

    
        </div>

        <div id="conclusion">
          <TextBox content={info.conclusion} title={info.conclusionTitle} hide={false} bgColor='bg-[#fff]' />
        </div>

      <CardModal />

    </main>
  );
}
