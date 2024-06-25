'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const NavLight = dynamic(() => import('../components/navlight'));
const Footer = dynamic(() => import('../components/footer'));
const Blogs = dynamic(() => import('../components/blogs'));

export default function AboutUs() {
    const [isOpen, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const teamData = [
        {
            image:'/images/team/joseluis.webp',
            name:"Jose Luis Perez",
            title:'首席执行官'
        },
        {
            image:'/images/team/porras.webp',
            name:"José Carlos Porras",
            title:'创意总监'
        },
        {
            image:'/images/team/sv.webp',
            name:"SV",
            title:'总监兼协议负责人'
        },
        {
            image:"/images/team/ricardo.webp",
            name:"Ricardo Pérez",
            title:'销售总监'
        },
        {
            image:"/images/team/alain.webp",
            name:"Alain Olvera",
            title:'公关 - 联络'
        },
        {
            image:'/images/team/damian.webp',
            name:"Damian Diaz",
            title:'行政总监'
        },
        {
            image:'/images/team/jaen.webp',
            name:"Jaen Paniagua",
            title:'运营总监'
        },
        {
            image:'/images/team/ayax.webp',
            name:"Ayax Velázquez",
            title:'销售'
        },
        {
            image:'/images/team/fer.webp',
            name:"Fer Elosegui",
            title:'业务发展主管'
        },
        {
            image:'/images/team/kevin.webp',
            name:"Kevin",
            title:'销售'
        },
    ];

    return (
        <>
            <NavLight/>

            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            <section className="relative md:py-24 py-16">
                <div className="container relative md:mt-24 mt-16">
                    <div className="lg:flex justify-center">
                        <div className="lg:w-4/5">
                            <div className="text-center mb-6">
                                <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold text-white mb-0">自定义领域</h5>
                            </div>
                            <ul className="md:flex shadow hover:shadow-md dark:shadow-slate-800 inline-block w-fit mx-auto flex-wrap justify-center text-center p-2 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                                <li role="presentation" className="inline-block md:w-1/3 w-full p-2">
                                    <button className={`${activeIndex === 0 ? "text-white bg-amber-400" : " hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"} px-5 py-3 text-start rounded-md w-full duration-500 `} onClick={() => setActiveIndex(0)}>
                                        <h5 className="text-base font-semibold">启发</h5>
                                        <p className="text-sm mt-1">展示您如何改变世界。这是您的动力。</p>
                                    </button>
                                </li>
                                <li role="presentation" className="inline-block md:w-1/3 w-full p-2">
                                    <button className={`${activeIndex === 1 ? "text-white bg-amber-400" : " hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"} px-5 py-3 text-start rounded-md w-full duration-500 `} onClick={() => setActiveIndex(1)}>
                                        <h5 className="text-base font-semibold">教育</h5>
                                        <p className="text-sm mt-1">为那些无所畏惧的人传播您的智慧。无先决条件，只有潜力。</p>
                                    </button>
                                </li>
                                <li role="presentation" className="inline-block md:w-1/3 w-full p-2">
                                    <button className={`${activeIndex === 2 ? "text-white bg-amber-400" : " hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"} px-5 py-3 text-start rounded-md w-full duration-500 `} onClick={() => setActiveIndex(2)}>
                                        <h5 className="text-base font-semibold">赋权</h5>
                                        <p className="text-sm mt-1">突出游戏中最大胆的想法。在这里，梦想成真。</p>
                                    </button>
                                </li>
                                <li role="presentation" className="inline-block md:w-1/3 w-full p-2">
                                    <button className={`${activeIndex === 3 ? "text-white bg-amber-400" : " hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"} px-5 py-3 text-start rounded-md w-full duration-500 `} onClick={() => setActiveIndex(3)}>
                                        <h5 className="text-base font-semibold">游乐场</h5>
                                        <p className="text-sm mt-1">对于那些敢于沉浸并征服的人。挑战现状。</p>
                                    </button>
                                </li>
                                <li role="presentation" className="inline-block md:w-1/3 w-full p-2">
                                    <button className={`${activeIndex === 4 ? "text-white bg-amber-400" : " hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"} px-5 py-3 text-start rounded-md w-full duration-500 `} onClick={() => setActiveIndex(4)}>
                                        <h5 className="text-base font-semibold">社区</h5>
                                        <p className="text-sm mt-1">为您的社区提供一个场所，创建特别活动并制造美好回忆。</p>
                                    </button>
                                </li>
                                <li role="presentation" className="inline-block md:w-1/3 w-full p-2">
                                    <button className={`${activeIndex === 5 ? "text-white bg-amber-400" : " hover:text-amber-400 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-800"} px-5 py-3 text-start rounded-md w-full duration-500 `} onClick={() => setActiveIndex(5)}>
                                        <h5 className="text-base font-semibold">市场</h5>
                                        <p className="text-sm mt-1">购买和出售RWA代币及其反之物，获取链上艺术、商品、产品，这是活动的角落商店，有一个规则：<br/><br/>仅接受加密货币付款。</p>
                                    </button>
                                </li>
                            </ul>
    
                            <div id="StarterContent" className="mt-6">
                                {activeIndex === 0 ? 
                                    <div>
                                        <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6">
                                            <Image src="/images/1.webp" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-t-lg" alt=""/>
                                        </div>
                                    </div> :''
                                }
                                {activeIndex === 1 ? 
                                    <div>
                                        <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6">
                                            <Image src="/images/2.webp" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-t-lg" alt=""/>
                                        </div>
                                    </div> :''
                                }
                                {activeIndex === 2 ? 
                                    <div>
                                        <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6">
                                            <Image src="/images/3.webp" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-t-lg" alt=""/>
                                        </div>
                                    </div> :''
                                }
                                {activeIndex === 3 ? 
                                    <div>
                                        <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6">
                                            <Image src="/images/4.webp" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-t-lg" alt=""/>
                                        </div>
                                    </div> :''
                                }
                                {activeIndex === 4 ? 
                                    <div>
                                        <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6">
                                            <Image src="/images/5.webp" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-t-lg" alt=""/>
                                        </div>
                                    </div> :''
                                }
                                {activeIndex === 5 ? 
                                    <div>
                                        <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30  from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 px-6 pt-6">
                                            <Image src="/images/6.webp" width={0} height={0} sizes="100vw" style={{width:"100%", height:"auto"}} className="rounded-t-lg" alt=""/>
                                        </div>
                                    </div> :''
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div id="Leadership" className="relative md:py-24 py-16">
                <div className="container relative md:mt-24 mt-16">
                    <div className="text-center mb-6">
                        <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold text-white mb-0">主要人物</h5>
                    </div>
                    <div className="flex justify-between flex-wrap items-center -mx-4">
                        {teamData.map((person, index) => (
                            <div key={index} className="md:w-1/3 w-full p-4">
                                <div className="relative bg-white dark:bg-slate-900 dark:border-slate-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                                    <div className="w-32 h-32 overflow-hidden mx-auto mb-4 rounded-full border-4 border-amber-400">
                                        <Image src={person.image} layout="responsive" width={100} height={100} className="object-cover rounded-full" alt={person.name} />
                                    </div>
                                    <div className="text-center">
                                        <h6 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">{person.name}</h6>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">{person.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}
