'use client';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const NavLight = dynamic(() => import('../components/navlight'));
const Footer = dynamic(() => import('../components/footer'));
const AboutThree = dynamic(() => import('../components/aboutThree'));
const Pricing = dynamic(() => import('../components/pricinghackers'));
const BioNews = dynamic(() => import('../components/bionews'));
const Hackathons = dynamic(() => import('../components/hackathons'));
const HackathonRules = dynamic(() => import('../components/hackathonrules'));
const Sparks = dynamic(() => import('../components/sparks'));

import { FaFileContract, GiTeamIdea, GiStairsGoal, FaTools, GiTribunalJury, FaAward, RiLightbulbFlashFill, RiTeamFill } from '../assets/icons/vander';

export default function Services() {
    useEffect(() => {
        document.documentElement.classList.add('dark');
    }, []);

    const casesData = [
        {
            icon: FaFileContract,
            image: '/images/blog/1.webp',
            title: '注册',
            desc: '唯一的黑客通行证，可在0.001 ETH的情况下进行铸造，并作为入场券，如果您是学生，则无需支付铸造费，只需上传您的机构ID或填写您的机构名称以获取折扣。'
        },
        {
            icon: GiTeamIdea,
            image: '/images/blog/2.webp',
            title: '团队组建',
            desc: '加入一个团队或独自参赛，您可以加入预先形成的团队或发布消息以进行即时结盟。'
        },
        {
            icon: GiStairsGoal,
            image: '/images/blog/3.webp',
            title: '挑战选择',
            desc: '选择您的挑战领域，或者如果您感到勇敢，可以选择跨领域参与，以构建多重体验。'
        },
        {
            icon: FaTools,
            image: '/images/blog/4.webp',
            title: '开发',
            desc: '这是一个与自己竞速的速度比赛，一个48小时的马拉松，用于构思、开发和原型创新解决方案。'
        },
        {
            icon: GiTribunalJury,
            image: '/images/blog/5.webp',
            title: '提交与评审',
            desc: '提交详细的项目文档和视频演示，评审标准包括创新性、执行力，我们更重视思想和项目胜过美学。'
        },
        {
            icon: FaAward,
            image: '/images/blog/6.webp',
            title: '颁奖典礼',
            desc: '在现场直播的活动中庆祝最明亮的创意，加冕创新的统治者。'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/7.webp',
            title: '基因工程',
            desc: '开发基因工程的创新解决方案，以增强人类能力和寿命。'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/8.webp',
            title: '可穿戴技术',
            desc: '设计与人体无缝集成并增强其功能的前沿可穿戴设备。'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/9.webp',
            title: '健康范式',
            desc: '通过探索健康范式的新方法，革新健康、疾病预防和长寿领域。'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/10.webp',
            title: '生物数据分析',
            desc: '利用生物数据分析获取对人类健康的洞察，并开发个性化解决方案。'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/11.webp',
            title: '再生医学',
            desc: '探索再生医学的潜力，修复和再生受损组织和器官。'
        },
        {
            icon: RiTeamFill,
            image: '/images/blog/12.webp',
            title: '生物黑客社区',
            desc: '加入充满活力的生物黑客社区，并为人类潜力的推进做出贡献。'
        }
    ];

    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: () => setUpdateCount(updateCount + 1),
        beforeChange: (current, next) => setSlideIndex(next),
        adaptiveHeight: true
    };

    return (<>
        <Sparks />
        <NavLight />

        <section className="relative md:py-24 py-16">
            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal hover-gradient-amber-5 text-2xl leading-normal font-semibold">LifeCode 生物黑客马拉松</h3>
                    <p className="text-white font-semibold max-w-xl mx-auto">探索基因学、可穿戴技术和新的健康范式，以增强人类能力和寿命。</p>
                </div>
                <Slider ref={sliderRef} {...settings}>
                    {casesData.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div className="relative blur-sm hover:blur-none p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:bg-amber-400 dark:hover:bg-amber-500 duration-500" key={index}>
                                <div className="relative overflow-hidden h-96">
                                    <Image src={item.image} alt={item.title} className="opacity-80" fill style={{
                                        objectFit: "cover"
                                    }} />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col p-4">
                                        <Icon className="h-12 w-12 text-white mb-4" />
                                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                                        <p className="text-m text-white px-3 text-center">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>

                <div className="flex justify-center mt-4">
                    <input
                        type="range"
                        min={0}
                        max={casesData.length - 1}
                        value={slideIndex}
                        onChange={e => sliderRef.current.slickGoTo(parseInt(e.target.value, 10))}
                        className="slider"
                    />
                </div>
                <div className="my-4 text-center">
                    <h5>比赛指南</h5>
                </div>

                <HackathonRules />
                <Hackathons />
                <Pricing />

            </div>
            <BioNews />
            <AboutThree />

        </section>
        <Footer />
    </>);
}
