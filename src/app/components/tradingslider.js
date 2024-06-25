'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { FaFileContract, GiTeamIdea, GiStairsGoal, FaTools, GiTribunalJury, FaAward, RiLightbulbFlashFill, RiTeamFill } from '../assets/icons/vander';

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

const TradingSlider = () => {
    const casesData = [
        {
            icon: FaFileContract,
            image: '/images/blog/tradepass.webp',
            title: '注册',
            desc: '0.005 ETH 的入场费包括一个交易员徽章 +$10M 虚拟美元，用于在无风险的模拟交易环境中交易。'
        },
        {
            icon: GiTeamIdea,
            image: '/images/blog/tradeformation.webp',
            title: '团队组建',
            desc: '单独竞争或加入最多五人的团队，既培养个人才华又促进协作策略。'
        },
        {
            icon: GiStairsGoal,
            image: '/images/blog/tradechallenge.webp',
            title: '挑战选择',
            desc: '选择您的挑战竞技场，每个竞技场都旨在测试交易的不同方面，即现货或期货。'
        },
        {
            icon: FaTools,
            image: '/images/blog/tradepro.webp',
            title: '交易工具',
            desc: '价格馈送反映了实时市场状况，无滞后，确保真实的交易体验。'
        },
        {
            icon: GiTribunalJury,
            image: '/images/blog/tradejudge.webp',
            title: '评判标准',
            desc: '评判标准包括盈利能力、策略、创新和风险管理。实时损益显示增加了透明度和参与度。'
        },
        {
            icon: FaAward,
            image: '/images/blog/tradeaward.webp',
            title: '颁奖典礼',
            desc: '在直播活动中庆祝出色的交易员，并向表现最好的参与者颁发奖品。'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/tradefutures.webp',
            title: '期货',
            desc: '专注于预测和利用未来市场动向，在集中交易所内进行保证金交易和杠杆交易。'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/tradespot.webp',
            title: '现货',
            desc: '掌握在集中平台上进行现货交易的艺术，即时市场动向决定成功。'
        },
        {
            icon: RiTeamFill,
            image: '/images/blog/12.webp',
            title: '交易员社区',
            desc: '加入充满活力的交易员社区，通过创新促进人类潜力的发展。'
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
        prevArrow: <CustomPrevArrow />
    };

    return (
        <section className="container mt-12 mb-12 mx-auto w-full max-w-screen-lg overflow-hidden">
            <Slider ref={sliderRef} {...settings}>
                {casesData.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div className="relative p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:bg-amber-400 dark:hover:bg-amber-500 duration-500" key={index}>
                            <div className="relative blur-xl hover:blur-none overflow-hidden h-96 w-full">
                                <Image src={item.image} alt={item.title} className="opacity-80 object-cover w-full h-full" layout="fill" />
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
        </section>
    );
}

export default TradingSlider;
