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
const AINews = dynamic(() => import('../components/ainews'));
const Hackathons = dynamic(() => import('../components/hackathons'));
const HackathonRules = dynamic(() => import('../components/hackathonrules'));

import { FaFileContract, GiTeamIdea, GiStairsGoal, FaTools, GiTribunalJury, FaAward, RiLightbulbFlashFill, RiTeamFill } from '../assets/icons/vander';

export default function Services() {
    useEffect(() => {
        document.documentElement.classList.add('dark');
    }, []);

    const CustomNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-arrow`}
                style={{ ...style, display: 'block', right: '10px' }}
                onClick={onClick}
            />
        );
    }

    const CustomPrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-arrow`}
                style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
                onClick={onClick}
            />
        );
    }

    const casesData = [
        {
            icon: FaFileContract,
            image: '/images/blog/1.webp',
            title: '注册',
            desc: '独特的黑客通行证，可铸造以0.001 ETH的价格作为入场券，如果您是学生，则无需支付铸造费，只需上传您的学校ID或输入您的学校名称以获取折扣。'
        },
        {
            icon: GiTeamIdea,
            image: '/images/blog/2.webp',
            title: '团队形成',
            desc: '加入团队或独自挑战，您可以加入预先组建的团队或发布消息以进行即兴联盟。'
        },
        {
            icon: GiStairsGoal,
            image: '/images/blog/3.webp',
            title: '挑战选择',
            desc: '选择您的挑战领域，或者如果您感到勇敢，选择跨领域参与，打造多重体验。'
        },
        {
            icon: FaTools,
            image: '/images/blog/4.webp',
            title: '开发',
            desc: '这是与自己竞速的比赛，一场48小时的马拉松，用于构思、开发和原型化创新解决方案。'
        },
        {
            icon: GiTribunalJury,
            image: '/images/blog/5.webp',
            title: '提交与评审',
            desc: '提交详细的项目文档和视频演示，评判创新、执行力，我们重视思想和项目胜过美学。'
        },
        {
            icon: FaAward,
            image: '/images/blog/6.webp',
            title: '颁奖典礼',
            desc: '在直播活动中荣耀属于您，庆祝最明亮的思想，加冕创新之王。'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/13.webp',
            title: 'AI与机器学习',
            desc: '开发通过经验改进的算法。解决神经网络、深度学习或强化学习项目。'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/14.webp',
            title: 'AI伦理',
            desc: '解决AI中的伦理问题，从机器学习模型中的偏见到自主系统中的决策制定。'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/15.webp',
            title: '自然语言处理',
            desc: '创建处理人类语言的解决方案。致力于翻译、情感分析或聊天机器人技术。'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/16.webp',
            title: '计算机视觉',
            desc: '利用AI的力量解释和理解视觉世界。参与涉及图像识别或动作检测的项目。'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/17.webp',
            title: '医疗AI',
            desc: '通过使用AI预测疾病、个性化治疗或增强诊断准确性来创新医疗保健。'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/18.webp',
            title: '机器人技术中的AI',
            desc: '开发智能机器人，能够从环境中学习并自主执行复杂任务。'
        },
        {
            icon: RiTeamFill,
            image: '/images/blog/12.webp',
            title: '人工智能社区',
            desc: '加入充满活力的AI黑客社区，为推进人类潜力作出贡献。'
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
        adaptiveHeight: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (<>
        <NavLight />
        <section className="container mt-12 mb-12 mx-auto w-full max-w-screen-lg overflow-hidden">
            <div className="container relative md:mt-24 mt-16">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="mb-4 md:text-3xl md:leading-normal hover-gradient-amber-5 text-2xl leading-normal font-semibold">SynthetIQ人工智能黑客马拉松</h3>
                    <p className="text-white font-semibold max-w-xl mx-auto">与最前沿的AI技术互动，创新数据分析、机器学习和自动化解决方案，改变行业并增强日常生活。</p>
                </div>
                <Slider ref={sliderRef} {...settings}>
                    {casesData.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div className="relative blur-xl hover:blur-none p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:bg-amber-400 dark:hover:bg-amber-500 duration-500" key={index}>
                                <div className="relative overflow-hidden h-96 w-full">
                                    <Image src={item.image} alt={item.title} className="object-cover w-full h-full" layout="fill" />
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
            <AINews />
            <AboutThree />
        </section>
        <Footer />
    </>);
}
