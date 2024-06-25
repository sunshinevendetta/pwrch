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
const Web3News = dynamic(() => import('../components/web3news'));
const Hackathons = dynamic(() => import('../components/hackathons'));
const Web3Rules = dynamic(() => import('../components/web3rules'));
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
            desc: '一种独特的黑客通行证，可铸造以获得0.001 ETH，用作入场券，如果您是学生，则无需支付铸造费，只需上传您的学校身份证或输入学校名称以获得折扣。'
        },
        {
            icon: GiTeamIdea,
            image: '/images/blog/2.webp',
            title: '团队组建',
            desc: '加入一个团队或独自黑客，您可以加入预先形成的团队或发布消息寻求即兴联盟。'
        },
        {
            icon: GiStairsGoal,
            image: '/images/blog/3.webp',
            title: '挑战选择',
            desc: '选择您的挑战竞技场，或者如果您感到勇敢，选择跨部门参与以构建多重体验。'
        },
        {
            icon: FaTools,
            image: '/images/blog/4.webp',
            title: '开发',
            desc: '这是与自己竞争的速度比赛，一个48小时的马拉松，用于构思、开发和原型化创新解决方案。'
        },
        {
            icon: GiTribunalJury,
            image: '/images/blog/5.webp',
            title: '提交与评审',
            desc: '提交详细的项目文档和视频演讲，评审标准包括创新、执行力，我们重视思想和项目胜过美学。'
        },
        {
            icon: FaAward,
            image: '/images/blog/award.webp',
            title: '颁奖典礼',
            desc: '荣耀属于您，在直播活动中庆祝最亮的想法，并加冕创新的统治者。'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/20.webp',
            title: 'DeFi创新',
            desc: '开发优先考虑安全性、包容性和效率的去中心化金融解决方案，重塑全球金融运作方式。'
          },
          {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/21.webp',
            title: '去中心化社交媒体',
            desc: '创建增强用户控制、确保隐私并支持自由表达的平台，转变人们在线连接和交流的方式。'
          },
          {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/22.webp',
            title: '区块链游戏',
            desc: '开发基于区块链的游戏，提供真正的所有权、参与式治理和深度沉浸式游戏体验。'
          },
          {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/23.webp',
            title: 'Zk技术',
            desc: '利用零知识证明构建能够显著增强数字交易和互动中隐私和安全性的解决方案。'
          },
          {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/24.webp',
            title: 'Web3技术在现实生活中的应用',
            desc: '利用Web3技术创新，创建与物理世界无缝集成的现实生活应用，增强日常体验。'
          },          
        {
            icon: RiTeamFill,
            image: '/images/blog/12.webp',
            title: 'Web3建设者社区',
            desc: '加入充满活力的Web3黑客社区，为人类潜力的推进做出贡献。'
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
          <h3 className="mb-4 md:text-3xl hover-gradient-amber-5 md:leading-normal text-2xl leading-normal font-semibold">Anon Empire Web3 黑客马拉松</h3>
  <p className="text-white font-semibold max-w-xl mx-auto">开发促进用户主权和隐私的去中心化应用。</p>
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
<Web3Rules />
<Hackathons />
<Pricing />

        </div>
        <Web3News />
        <AboutThree />
       
      </section>
      <Footer />
    </>);
}
