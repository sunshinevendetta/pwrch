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
const Pricing = dynamic(() => import('../components/pricingartists'));
const ArtNews = dynamic(() => import('../components/artnews'));
const ArtContest = dynamic(() => import('../components/artcontest'));
const Cloud = dynamic(() => import('../components/cloud'));
const ArtRules = dynamic(() => import('../components/artrules'));

import { FaFileContract, GiTeamIdea, GiStairsGoal, FaTools, GiTribunalJury, FaAward, RiLightbulbFlashFill, RiTeamFill } from '../assets/icons/vander';

export default function Services() {
    useEffect(() => {
        document.documentElement.classList.add('dark');
    }, []);

    const casesData = [
        {
            icon: FaFileContract,
            image: '/images/blog/artists.webp',
            title: '注册',
            desc: '独特的艺术家通行证，可以通过支付0.001 ETH进行铸造，如果您是学生，无需支付铸造费，只需上传您的学校ID或输入学校名称即可获得折扣。'
        },
        {
            icon: GiTeamIdea,
            image: '/images/blog/2.webp',
            title: '团队组建',
            desc: '加入一个团队或独自建立，您可以加入预先形成的团队或发布消息寻求即时联盟。'
        },
        {
            icon: GiStairsGoal,
            image: '/images/blog/3.webp',
            title: '挑战选择',
            desc: '选择您的挑战领域，或者如果您感觉勇敢，选择跨参与以构建多重体验。'
        },
        {
            icon: FaTools,
            image: '/images/blog/4.webp',
            title: '开发',
            desc: '这是与自己的速度比赛，一个48小时的马拉松，用于构思、开发和原型创新解决方案。'
        },
        {
            icon: GiTribunalJury,
            image: '/images/blog/5.webp',
            title: '提交与评判',
            desc: '提交详细的项目文档和视频演示，评判标准为创新、执行力和实用性，我们重视思想和项目而非美学。'
        },
        {
            icon: FaAward,
            image: '/images/blog/6.webp',
            title: '颁奖典礼',
            desc: '光荣属于您，在现场直播的活动中庆祝最明亮的想法，并加冕创新的统治者。'
        },
        {
          icon: RiLightbulbFlashFill,
          image: '/images/blog/submit.webp',
          title: '资格',
          desc: '全球向18岁以上的艺术家和团体开放，或者在18岁以下的年龄需要监护人在区块链上签署同意书。'
      },
      {
          icon: RiLightbulbFlashFill,
          image: '/images/blog/criteria.webp',
          title: '提交标准',
          desc: '包括艺术作品概念的详细描述、使用的工具及其相关性。提交必须使用生成艺术方法，并符合截止日期。欢迎使用Touchdesigner、Hydra、Processing等传统艺术方法或解开新的混合方法。'
      },
      {
          icon: RiLightbulbFlashFill,
          image: '/images/blog/guidelines.webp',
          title: '内容和创意指南',
          desc: '艺术必须尊重所有人类，避免政治、宗教、敏感或暴力话题，如果是情色作品，必须适合家庭观众。平衡AI与创造过程，增强艺术性，使用Mid Journey、Dall-e、RunwayML等工具可以使用，但要超越简单的提示。'
      },
      {
          icon: RiLightbulbFlashFill,
          image: '/images/blog/copyright.webp',
          title: '无版权侵犯',
          desc: '提交作品必须是原创，并专为比赛创建。确保所有组件都是合法获取的，并尊重知识产权。严禁使用过去的作品、混音、修改、衍生品和/或类似已发布作品，即使版权持有人同意使用它们，从零开始创作更有趣。'
      },
      {
          icon: RiLightbulbFlashFill,
          image: '/images/blog/integrations.webp',
          title: '集成',
          desc: '动态或交互式作品应与HTML5和WebGL等网络技术兼容，以增强可访问性。鼓励艺术家记录并分享他们的创意旅程，包括代码片段和幕后/测试视频。'
    },
      {
          icon: RiLightbulbFlashFill,
          image: '/images/blog/judges.webp',
          title: '选题过程',
          desc: '评委将根据艺术和技术价值、技术创新以及主题符合度评估参赛作品。此外，将向最多参与现场活动场地铸造的艺术作品授予社区奖，确保选题过程中的积极参与和公平性。'
      },
        {
            icon: RiTeamFill,
            image: '/images/blog/12.webp',
            title: '生物黑客社区',
            desc: '加入充满活力的生物黑客社区，并为人类潜力的发展做出贡献。'
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
        <NavLight />
        <Cloud />
        <section className="relative md:py-24 py-16">
          <div className="container relative md:mt-24 mt-16">
            <div className="grid  grid-cols-1 pb-6 text-center">
            <h3 className="mb-4  md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">棱镜艺术比赛</h3> <p className="text-white rounded-xl  bg-black bg-opacity-50">探索我们棱镜比赛中数学和艺术的迷人融合。创建令人惊叹的算法艺术作品，体现加速度。顶级奖金：$10,000。</p>
            </div>
            <Slider ref={sliderRef} {...settings}>
              {casesData.map((item, index) => {
                const Icon = item.icon;
                return (
                    (<div className="relative blur-xl hover:blur-none p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:bg-amber-400 dark:hover:bg-amber-500 duration-500" key={index}>
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
  <div className="my-4 rounded-xl  bg-black bg-opacity-50 text-center">
  <h5>比赛指南</h5>
</div>
<ArtRules />
<ArtContest />
<Pricing />

          </div>
          <ArtNews />
          <AboutThree />
         
        </section>
        <Footer />
    </>);
}
