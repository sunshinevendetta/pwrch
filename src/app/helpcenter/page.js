'use client';
import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { FiHelpCircle, FiBookmark } from '../assets/icons/vander';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { gsap } from 'gsap';

const NavLight = dynamic(() => import('../components/navlight'));
const Footer = dynamic(() => import('../components/footer'));

export default function Helpcenter() {
    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
    }, []);

    const [activeIndex, setActiveIndex] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const aboutData = useMemo(() => [
        {
            icon: FiHelpCircle,
            title: '常见问题解答',
            desc: '基本信息、工作原理、定价等',
        },
        {
            icon: FiBookmark,
            title: '指南 / 支持',
            desc: '即将推出',
        },
    ], []);

    const accordianData = useMemo(() => [
        {
            id: 1,
            title: 'Power 2 The People 是什么？',
            desc: 'Power 2 The People (PWR2TP) 是一个活动，包括黑客马拉松、交易比赛、艺术比赛、展览和讲座。',
        },
        {
            id: 2,
            title: '如何注册参加活动？',
            desc: '您可以通过我们的网站注册活动，按照指南部分的注册流程操作。',
        },
        {
            id: 3,
            title: '活动中有哪些活动？',
            desc: '活动包括黑客马拉松、交易比赛、艺术比赛、展览和讲座。',
        },
        {
            id: 4,
            title: '如何参加黑客马拉松？',
            desc: '要参加黑客马拉松，您需要注册活动，并按照支持部分提供的指导方针操作。',
        },
        {
            id: 5,
            title: '活动的总赏金池是多少？',
            desc: '活动的总赏金池为110,000美元，分布在各种黑客马拉松类别中。',
        },
        // Other entries truncated for brevity...
    ], []);

    useEffect(() => {
        if (searchQuery === '') {
            setFilteredData([]);
        } else {
            setFilteredData(accordianData.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase())));
        }
    }, [searchQuery, accordianData]);

    const handleAccordionClick = (id) => {
        setActiveIndex(activeIndex === id ? -1 : id);
    };

    useEffect(() => {
        gsap.to('.accordion-content', {
            height: 'auto',
            duration: 0.3,
            ease: 'power1.inOut',
            stagger: 0.1
        });
    }, [activeIndex]);

    return (
        <>
            <NavLight />
            <section className="relative md:py-44 py-32 bg-no-repeat bg-bottom bg-cover" style={{ backgroundImage: "url('/images/bg/bg-pages.webp')" }}>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-slate-900/70"></div>
                <div className="container relative">
                    <div className="grid grid-cols-1 text-center mt-6">
                        <div>
                            <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold text-white mb-0">你好！<br />我们如何帮助您？</h5>
                        </div>

                        <div className="text-center subcribe-form mt-4 pt-2">
                            <form className="relative mx-auto max-w-xl">
                                <input 
                                    type="text" 
                                    id="help" 
                                    name="name" 
                                    className="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-slate-900 dark:text-white rounded-md bg-white opacity-70 dark:bg-slate-900 border border-gray-100 dark:border-gray-700" 
                                    placeholder="搜索您的问题或主题..." 
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <button type="button" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-amber-400 hover:bg-amber-500 border border-amber-400 hover:border-amber-500 text-white rounded-md">搜索</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 my-0 gap-6">
                        {
                            aboutData.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div className="text-center px-6 mt-6" key={index}>
                                        <Icon className="text-5xl mb-4 text-amber-400" />
                                        <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
                                        <p className="text-slate-400">{item.desc}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

                <div className="container relative md:mt-24 mt-16">
                    <div className="grid grid-cols-1 pb-6 text-center">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">开始使用</h3>
                        <p className="text-slate-400 max-w-xl mx-auto">人工智能使您可以快速轻松地为博客、社交媒体、网站等创建内容！</p>
                    </div>

                    <div className="lg:flex justify-center mt-6">
                        <div className="lg:w-2/3">
                            {filteredData.length > 0 ? (
                                filteredData.map((item, index) => (
                                    <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                                        <h2 className="text-base font-semibold">
                                            <button type="button" onClick={() => handleAccordionClick(item.id)} className={`${activeIndex === item.id ? "bg-gray-50 dark:bg-slate-800 text-amber-400" : ""} flex justify-between items-center p-5 w-full font-medium text-start`}>
                                                <span>{item.title}</span>
                                                <MdKeyboardArrowDown className={`${activeIndex === item.id ? "rotate-180" : ""} w-4 h-4 shrink-0`} />
                                            </button>
                                        </h2>
                                        <div className={`accordion-content ${activeIndex === item.id ? "" : "hidden"}`}>
                                            <div className="p-5">
                                                <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                accordianData.map((item, index) => (
                                    <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                                        <h2 className="text-base font-semibold">
                                            <button type="button" onClick={() => handleAccordionClick(item.id)} className={`${activeIndex === item.id ? "bg-gray-50 dark:bg-slate-800 text-amber-400" : ""} flex justify-between items-center p-5 w-full font-medium text-start`}>
                                                <span>{item.title}</span>
                                                <MdKeyboardArrowDown className={`${activeIndex === item.id ? "rotate-180" : ""} w-4 h-4 shrink-0`} />
                                            </button>
                                        </h2>
                                        <div className={`accordion-content ${activeIndex === item.id ? "" : "hidden"}`}>
                                            <div className="p-5">
                                                <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
