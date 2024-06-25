'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { TextPlugin } from 'gsap/dist/TextPlugin';
import '../assets/css/tailwind.css';
import Image from 'next/image';

const NavLight = dynamic(() => import('../components/navlight'));
const Footer = dynamic(() => import('../components/footer'));
const AboutThree = dynamic(() => import('../components/aboutThree'));
const Pricing = dynamic(() => import('../components/pricingtraders'));
const TraderNews = dynamic(() => import('../components/tradernews'));
const TradingSlider = dynamic(() => import('../components/tradingslider'));
const DexArena = dynamic(() => import('../components/dexarenarules'));
const Arenas = dynamic(() => import('../components/arenas'));

const Animations = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    const animations = [
      {
        trigger: ".green",
        target: "#myText",
        duration: 5,
        text: "去中心化竞技场"
      },
      {
        trigger: ".orange",
        target: "#myText2",
        duration: 5,
        text: "欢迎来到去中心化交易竞技场，旨在挑战交易者，在高风险无风险模拟交易环境中使用专业工具和策略的结合。"
      },
      {
        trigger: ".purple",
        target: "#myText3",
        duration: 7,
        text: "获胜者将通过展示卓越的交易洞察力和策略，智胜竞争对手并获得胜利。"
      }
    ];

    animations.forEach(animation => {
      gsap.to(animation.target, {
        duration: animation.duration,
        text: animation.text,
        scrollTrigger: {
          trigger: animation.trigger,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reset"
        }
      });

      document.querySelector(animation.target).addEventListener('click', () => {
        gsap.to(animation.target, {
          duration: animation.duration,
          text: animation.text
        });
      });
    });

    gsap.to(".orange p", {
      scrollTrigger: ".orange",
      duration: 5
    });

    gsap.to(".orange", {
      scrollTrigger: ".orange",
      duration: 5
    });

    gsap.to(".purple", {
      scrollTrigger: {
        trigger: ".purple",
        toggleActions: "restart pause reverse pause"
      },
      duration: 10,
      backgroundColor: "#000",
      ease: "none"
    });

    gsap.to(".yoyo p", {
      scrollTrigger: ".yoyo",
      scale: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2"
    });

  }, []);

  return (
    <>
      <NavLight />
      <div>
        <section className="panel green hover-gradient-amber-5 mx-auto text-center relative h-96">
          <div className="absolute inset-0">
            <Image src="/images/blog/tradepass.webp" alt="背景图片" className="opacity-30" fill style={{ objectFit: "cover" }} />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative z-10 p-6 flex items-center justify-center flex-col">
            <h3 id="myText" className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">
              交易竞技场
            </h3>
          </div>
        </section>

        <section className="panel orange mx-auto text-center relative h-96">
          <div className="absolute inset-0">
            <Image src="/images/blog/tradeteam.webp" alt="背景图片" className="opacity-70" fill style={{ objectFit: "cover" }} />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative z-10 p-6 flex items-center justify-center flex-col">
            <p id="myText2" className='mb-4  md:leading-normal text-lg leading-normal text-white hover-gradient-amber-5 text-center p-8'>你准备好了吗？</p>
          </div>
        </section>

        <section className="panel purple mx-auto text-center relative h-96">
          <div className="absolute inset-0">
            <Image src="/images/blog/tooltrade.webp" alt="背景图片" className="opacity-60 hover-gradient-amber-5 hoover:blur-xs rounded-lg z-0" fill style={{ objectFit: "cover" }} />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          <div className="relative z-10 p-6 flex items-center justify-center flex-col">
            <h1 id='myText3' className="text-green-400 max-w-xl text-xl  hover-gradient-amber-5 z-0 mx-auto p-8 text-center">🏆</h1>
          </div>
        </section>

        <DexArena />
        <TradingSlider />
        <Arenas />
        <Pricing />
      </div>
      <TraderNews />
      <AboutThree />
      <Footer />
    </>
  );
}

export default Animations;
