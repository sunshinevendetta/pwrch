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
const RoboticNews = dynamic(() => import('../components/roboticnews'));
const Hackathons    = dynamic(() => import('../components/hackathons'));
const HackathonRules    = dynamic(() => import('../components/hackathonrules'));
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
            desc: '独特的黑客通行证，可铸造为0.001 ETH，作为入场券，如果您是学生，无需支付铸造费，只需上传您的机构ID或填写您的机构名称以获得折扣。'
        },
        {
            icon: GiTeamIdea,
            image: '/images/blog/2.webp',
            title: '团队组建',
            desc: '加入团队或单打独斗，您可以加入预先形成的小组或发布消息寻求即时联盟。'
        },
        {
            icon: GiStairsGoal,
            image: '/images/blog/3.webp',
            title: '挑战选择',
            desc: '选择您的挑战领域，或者如果您感到勇敢，可以选择跨界参与，构建多重体验。'
        },
        {
            icon: FaTools,
            image: '/images/blog/4.webp',
            title: '开发',
            desc: '这是一场与自己的速度比赛，一场为期48小时的马拉松，构思、开发和原型设计创新解决方案。'
        },
        {
            icon: GiTribunalJury,
            image: '/images/blog/5.webp',
            title: '提交与评审',
            desc: '提交详细的项目文档和视频演讲，评审标准为创新、执行力，我们重视思想和项目胜过美学。'
        },
        {
            icon: FaAward,
            image: '/images/blog/6.webp',
            title: '颁奖典礼',
            desc: '荣耀属于您，在直播活动中庆祝最明亮的想法，并加冕创新的统治者。'
        },
        {
                icon: RiLightbulbFlashFill,
                image: "/images/blog/25.webp",
                title: "机器人流程自动化",
                desc: "开发并集成机器人流程自动化解决方案，以简化企业运营并提升工作流效率。"
            },
            {
                icon: RiLightbulbFlashFill,
                image: "/images/blog/26.webp",
                "title": "智能家居自动化",
                "desc": "创建创新解决方案，自动化家庭环境，提升舒适性、能源效率和安全性。"
            },
            {
                icon: RiLightbulbFlashFill,
                "image": "/images/blog/27.webp",
                "title": "AI驱动分析",
                "desc": "利用人工智能的力量自动化数据分析，发现可行动的见解和预测结果。"
            },
            {
                icon: RiLightbulbFlashFill,
                "image": "/images/blog/28.webp",
                "title": "自动化医疗解决方案",
                "desc": "在医疗领域创新，通过自动化技术改善患者护理和运营效率。"
            },
            {
                icon: RiLightbulbFlashFill,
                "image": "/images/blog/29.webp",
                "title": "自动驾驶车辆",
                "desc": "推动交通界限与增强安全和导航的自动化车辆技术。"
            },
            {
                icon: RiLightbulbFlashFill,
                "image": '/images/blog/30.webp',
                "title": "协作机器人技术",
                "desc": "探索协作机器人技术，自动化复杂任务，专注于人机交互和共同工作环境。"
            },
        
        {
            icon: RiTeamFill,
            image: '/images/blog/12.webp',
            title: '机器人社区',
            desc: '加入充满活力的建造者社区，为推动人类潜力做出贡献。'
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
              <h3 className="mb-4 md:text-3xl md:leading-normal hover-gradient-amber-5 text-2xl leading-normal font-semibold">自动化机器人编程比赛</h3>
              <p className="text-white font-semibold max-w-xl mx-auto">赢得挑战，开发创新的机器人项目和解决方案，今天可以应用于现实场景。</p>
            </div>
            <Slider ref={sliderRef} {...settings}>
              {casesData.map((item, index) => {
                const Icon = item.icon;
                return (
                    (<div className="relative p-6 blur-xl hover:blur-none rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:bg-amber-400 dark:hover:bg-amber-500 duration-500" key={index}>
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
                    </div>)
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
      className="slider"/>
               
  </div>
  <div className="my-4 text-center">
  <h5>比赛指南</h5>
</div>
<HackathonRules />
<Hackathons />
<Pricing />

          </div>
          <RoboticNews />
          <AboutThree />
         
        </section>
        <Footer />
    </>);
}
