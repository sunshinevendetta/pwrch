"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const NavLight = dynamic(() => import('../components/navbar'));
const Footer = dynamic(() => import('../components/footer'));

import { MdKeyboardArrowDown } from "../assets/icons/vander";

export default function Terms() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  const [activeIndex, setActiveIndex] = useState(1);

  const accordianData = [
    {
      id: 1,
      title: '活动概览',
      desc: 'Power 2 The People 是一个前卫的活动，专注于技术、金融和艺术的交汇。旨在推动创新、赋权和社会进步，总奖金池达数千美元。'
    },
    {
      id: 2,
      title: '参与和资格',
      desc: '开放给所有对技术、金融和艺术充满热情的人。未成年人需获得监护人同意。参与者可以个人或最多五人的团队形式参赛。'
    },
    {
      id: 3,
      title: '黑客松规则',
      desc: '参与者有48小时的时间来构思、开发和原型化他们的解决方案。提交的作品必须包括详细的项目文档、一个功能原型和一个引人注目的视频演讲。'
    },
    {
      id: 4,
      title: '评判标准',
      desc: '项目将根据创新和创意、执行和展示进行评判。合作伙伴提供的资源和行业专家将提供支持。'
    },
    {
      id: 5,
      title: '奖品和奖励',
      desc: '总奖金池达数千美元。将为SyntehIQ、Anon Empire、LifeCode和Automate提供特别奖项。'
    },
    {
      id: 6,
      title: '提交指南',
      desc: '提交的作品必须包括项目的详细描述、所使用的技术及其与加速主题的相关性。所有参赛作品必须是为本次活动专门创作的原创作品。'
    },
    {
      id: 7,
      title: '合规和道德',
      desc: '参与者必须遵守道德标准并遵守相关法律法规。严禁任何形式的操纵或利用行为。'
    },
  ];

  const challengeAreas = [
    {
      title: '黑客松',
      desc: [
        { id: 1, title: 'SyntehIQ (人工智能黑客松)', desc: '一个专注于预测分析、机器学习和智能自动化的AI创新熔炉，为推动社会进步的项目提供数千美元的奖品。' },
        { id: 2, title: 'Anon Empire (Web3黑客松)', desc: '这一挑战提供数千美元的奖品，寻求能够增强用户主权、隐私和社区主导增长的去中心化应用，利用区块链的变革力量。' },
        { id: 3, title: 'LifeCode (生物黑客黑客松)', desc: '一个生物黑客的前沿挑战，提供数千美元的奖品，鼓励那些能够革新遗传学、可穿戴技术或新的健康范式，以增强人类能力和延长寿命的项目。' },
        { id: 4, title: 'Automate (机器人黑客松)', desc: '这一领域提供数千美元的奖品，呼吁机器人创新，为工业、医疗或个人使用提供新颖解决方案，提高效率和人机协同。' },
      ]
    },
    {
      title: '交易比赛',
      desc: [
        { id: 1, title: '概览', desc: '参与者参加交易比赛，专注于通过战略交易和风险管理来最大化利润。' },
        { id: 2, title: '资格', desc: '开放给所有级别的交易者。参与者可以个人或团队形式参赛。' },
        { id: 3, title: '规则', desc: '对交易行为、透明度和道德有严格规定。参与者必须遵守公平竞赛准则。' },
        { id: 4, title: '奖品', desc: '根据盈利能力、策略和风险管理为表现最好的参与者提供丰厚的现金奖品。' },
      ]
    },
    {
      title: '艺术比赛',
      desc: [
        { id: 1, title: 'Fractal (生成艺术)', desc: '邀请艺术家利用算法、代码和数字过程的力量，创作出符合加速主题的艺术作品。' },
        { id: 2, title: 'Prism (策展艺术)', desc: '寻求能够概念化并制作出巧妙解释加速社会主题的艺术作品，强调技术与艺术创新的融合。' },
      ]
    }
  ];

  return (
    <>
      <NavLight />
      <section className="relative md:pt-44 pt-32 pb-8 bg-gradient-to-b from-amber-400/20 dark:from-amber-400/40 to-transparent">
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-6">
            <div>
              <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold mb-0">服务条款</h5>
            </div>
            <ul className="tracking-[0.5px] mb-0 inline-block mt-5">
              <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out hover:text-amber-400">
                <Link href="/">首页</Link>
              </li>
              <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180">
                <i className="mdi mdi-chevron-right"></i>
              </li>
              <li className="inline-block capitalize text-[15px] font-medium duration-500 ease-in-out text-amber-400" aria-current="page">条款</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="md:flex justify-center">
            <div className="md:w-3/4">
              <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                <h5 className="text-xl font-semibold mb-4">简介：</h5>
                <p className="text-slate-400">Power 2 The People 旨在利用开发者、交易者、艺术家和梦想家的集体智慧，促进技术作为全球进步和包容性增长的催化剂的未来。</p>

                <h5 className="text-xl font-semibold mb-4 mt-8">活动概览：</h5>
                <p className="text-slate-400">Accelerate不仅仅是一个黑客松，它是一个熔炉，AI、Web3、生物黑客和机器人技术的未来在这里锻造。拥有数千美元的奖金池和48小时的时间，这一挑战是对那些渴望塑造未来的颠覆者、创新者和梦想家的灯塔。</p>

                <h5 className="text-xl font-semibold mb-4 mt-8">挑战领域：</h5>
                <ul className="list-none text-slate-400 mt-3">
                  {challengeAreas.map((area, idx) => (
                    <li className="flex mt-2" key={idx}>
                      <i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>{area.title}
                    </li>
                  ))}
                </ul>

                <h5 className="text-xl font-semibold mb-4 mt-8">注册过程：</h5>
                <p className="text-slate-400">参与者需要通过直观的在线注册过程进行注册。可以以0.001 ETH铸造的独特黑客通行证，作为入场券，强调了活动的区块链中心理念。</p>

                <h5 className="text-xl font-semibold mt-8">规则：</h5>

                <div className="mt-6">
                  {accordianData.map((item, index) => (
                    <div className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4" key={index}>
                      <h2 className="text-base font-semibold">
                        <button
                          type="button"
                          onClick={() => setActiveIndex(item.id)}
                          className={`${activeIndex === item.id ? "bg-gray-50 dark:bg-slate-800 text-amber-400" : ""} flex justify-between items-center p-5 w-full font-medium text-start`}
                        >
                          <span>{item.title}</span>
                          <MdKeyboardArrowDown className={`${activeIndex === item.id ? "rotate-180" : ""} w-4 h-4 shrink-0`} />
                        </button>
                      </h2>
                      <div className={activeIndex === item.id ? "" : "hidden"}>
                        <div className="p-5">
                          <p className="text-slate-400 dark:text-gray-400">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link href="/privacy" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400 hover:bg-amber-500 border-amber-400 hover:border-amber-500 text-white rounded-md">接受</Link>
                  <Link href="/" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-amber-400 border-amber-400 text-amber-400 hover:text-white rounded-md ms-2">拒绝</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
