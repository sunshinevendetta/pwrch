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
            desc: '一个独特的艺术家通行证，可以通过支付0.001 ETH 进行铸造, 如果您是学生您可以上传学校ID 或在得到优惠.'
        },
        {
            icon: GiTeamIdea,
            image: '/images/blog/2.webp',
            title: '组建团队',
            desc: '加入一个团队或独自建立, 您可以参加预先组成的团队或发布信息寻求突发联盟.'
        },
        {
            icon: GiStairsGoal,
            image: '/images/blog/3.webp',
            title: '挑战选择',
            desc: '选择您的挑战竞技场或者如果您感到勇敢可以选择跨领域参与建立多种体验.'
        },
        {
            icon: FaTools,
            image: '/images/blog/4.webp',
            title: '开发',
            desc: '这是一个与自己竞速的比赛, 是一个48小时的马拉松思考, 开发, 和原型创新解决方案.'
        },
        {
            icon: GiTribunalJury,
            image: '/images/blog/5.webp',
            title: '提交和评审',
            desc: '提交详细的项目文档和视频介绍, 以创新, 执行力和创意而评判, 我们更重视想法和项目而不是美学.'
        },
        {
            icon: FaAward,
            image: '/images/blog/6.webp',
            title: '颁奖典礼',
            desc: '光荣归于你们在直播事件中庆祝最明亮的想法并加冕创新的统治者.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/submit.webp',
            title: '合格',
            desc: '全球开放给18岁以上的艺术家和团体, 或者在18岁以下的监护人同意下, 签署了链上.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/criteria.webp',
            title: '提交标准',
            desc: '包括艺术作品的概念, 使用工具, 以及相关性的详细描述, 提交必须使用生成艺术方法并在期限内完成, Touchdesigner, Hydra, Processing等都欢迎使用以及传统的艺术方法或者揭示新的混合艺术.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/guidelines.webp',
            title: '内容和创造力指导方针',
            desc: '艺术必须尊重所有人类, 避免政治, 宗教, 敏感或暴力主题, 如果色情请家庭友好. 平衡AI与创造过程以增强艺术性, 使用Mid Journey, Dall-e, RunwayML是可以使用的但超出简单提示.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/copyright.webp',
            title: '没有版权侵权',
            desc: '提交必须是原创并为比赛而创建, 确保所有组件都是合法获得并尊重知识产权, 过去的作品, 混音, 修改, 改变, 衍生或者外观相似的作品都是禁止的即使版权持有者同意使用他们, 从头开始创意和开始的方式更有趣.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/integrations.webp',
            title: '整合',
            desc: '动态或交互式作品应与HTML5和WebGL等Web技术兼容, 以增强可访问性. 艺术家被鼓励记录并分享他们的创作旅程, 包括代码片段和幕后/测试视频.'
        },
        {
            icon: RiLightbulbFlashFill,
            image: '/images/blog/judges.webp',
            title: '选择过程',
            desc: '评委将根据艺术和技术价值, 对技术的创新使用以及对主题的遵循评估参赛作品. 此外, 社区奖将颁发给在事件现场由参与者铸造最多的艺术作品, 确保评选过程的积极参与和公正性.'
        },
        {
            icon: RiTeamFill,
            image: '/images/blog/12.webp',
            title: '生物黑客社区',
            desc: '加入充满活力的生物黑客社区, 为提升人类潜力做出贡献.'
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
            <h3 className="mb-4  md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">分形艺术竞赛</h3> <p className="text-white rounded-xl  bg-black bg-opacity-50">探索我们的分形竞赛中数学与艺术的迷人融合. 创建令人惊叹的算法艺术作品, 体现加速度. 顶级奖项: $10,000.</p>
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
  <h5>竞赛指导方针</h5>
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
