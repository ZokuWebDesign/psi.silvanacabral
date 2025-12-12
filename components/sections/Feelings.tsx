'use client';

import React from 'react';
import Image from 'next/image';

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const feelings = [
  {
    emojis: ["/assets/icons/face-sad.svg", "/assets/icons/Watch, Clock, Time.svg", "😰"],
    text: "Ansiedade, angústia ou preocupações que parecem não ter fim"
  },
  {
    emojis: ["/assets/icons/cloud-raining-05.svg", "/assets/icons/Cloud, Rain.svg", "🌧️"],
    text: "Tristeza, desânimo ou perda de interesse no que antes fazia sentido"
  },
  {
    emojis: ["/assets/icons/link-broken-01.svg", "/assets/icons/Box.svg", "💔"],
    text: "Dificuldade em lidar com mudanças, perdas ou separações"
  },
  {
    emojis: ["/assets/icons/battery-low.svg", "/assets/icons/Drugs, Pill.svg", "😵‍💫"],
    text: "Sensação de estar perdido(a), sem propósito ou desmotivado(a)"
  },
  {
    emojis: ["/assets/icons/book-open-01.svg", "/assets/icons/backpack.svg", "🧸"],
    text: "Questões da infância ou traumas que ainda impactam sua vida"
  },
  {
    emojis: ["/assets/icons/lock-01.svg", "/assets/icons/Chat, Messages, Bubble.svg", "🧑‍🎓"],
    text: "Adolescentes lidando com pressões, identidade e mudanças"
  },
  {
    emojis: ["/assets/icons/home-03.svg", "/assets/icons/crutches.svg", "👵"],
    text: "Idosos enfrentando solidão, luto, medos e adaptações nesta fase"
  }
];

export function Feelings() {
  const [emojiSetIndex, setEmojiSetIndex] = React.useState(0);

  React.useEffect(() => {
    // Only randomize on client-side to avoid hydration mismatch on first render
    const width = window.innerWidth;
    const isDesktop = width > 1280;

    // Desktop: options 0 or 1
    // Mobile: options 0, 1, or 2
    const maxOption = isDesktop ? 2 : 3;
    const randomIndex = Math.floor(Math.random() * maxOption);

    setEmojiSetIndex(randomIndex);
  }, []);

  return (
    <section className="unselectable w-full bg-[#faf8f2] px-4 md:px-6 xl:px-[72px] py-16 md:py-24 flex justify-center">
      <div className="flex flex-col w-full max-w-7xl items-center gap-12 text-center">
        <div className="flex flex-col gap-2 max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-hero-text">
            Quando pode ser hora de buscar terapia
          </h2>
          <p className="font-mono text-lg md:text-xl text-hero-text">
            Talvez você esteja passando por algo assim:
          </p>
        </div>


        <Carousel
          className="w-full"
          opts={{
            align: "start",
            containScroll: "trimSnaps",
            dragFree: true,
            skipSnaps: false
          }}
        >
          <CarouselContent className="gap-6 !-ml-0">
            {feelings.map((item, index) => {
              const currentContent = item.emojis[emojiSetIndex] || item.emojis[0];
              const isImage = currentContent.startsWith('/');

              return (
                <CarouselItem
                  key={index}
                  className="bg-transparent border border-[#1fad9a] rounded-xl px-4 py-[12px] flex flex-col items-center justify-center gap-2 max-w-[252px] min-h-[147px] transition-all hover:shadow-md"
                >
                  {isImage ? (
                    <div className="relative w-12 h-12 flex items-center justify-center">
                      <Image
                        src={currentContent}
                        alt="icon"
                        width={48}
                        height={48}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <span className="text-4xl md:text-5xl" role="img" aria-label="emoji">
                      {currentContent}
                    </span>
                  )}
                  <p className="font-mono text-sm md:text-base text-hero-text text-center leading-relaxed">
                    {item.text}
                  </p>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>


        <div className="max-w-4xl">
          <p className="font-mono text-base md:text-lg text-hero-text text-center leading-relaxed">
            Se você se reconhece em algum desses pontos, a psicoterapia pode ser um espaço seguro para falar sobre isso com calma, sem julgamentos, com alguém preparado para escutar e acompanhar o seu processo.
          </p>
        </div>
      </div>
    </section>
  );
}
