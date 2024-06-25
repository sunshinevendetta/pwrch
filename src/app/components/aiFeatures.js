import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { IoIosSchool, GiInspiration, TbFriends, FaGamepad, GiSwordsPower, MdLocalGroceryStore } from "../assets/icons/vander";

const ToggleButton = dynamic(() => import('./toggleButton'));

export default function AiFeatures() {
  const featureData = [
    {
      icon: GiInspiration,
      title: '启发',
      desc: '展示你如何重塑世界。这是你的动力。点燃变革的火花，让你的影响力传播开来。'
    },
    {
      icon: IoIosSchool,
      title: '教育',
      desc: '为无畏者传播智慧。无需先修课程，只有潜力。赋予他人知识，激励伟大。'
    },
    {
      icon: GiSwordsPower,
      title: '赋能',
      desc: '突出游戏中最大胆的想法。在这里，梦想成真。释放创新的力量，留下你的印记。'
    },
    {
      icon: FaGamepad,
      title: '游乐场',
      desc: '为那些敢于挑战和征服的人而设。挑战现状。进入一个无限可能的领域，并茁壮成长。'
    },
    {
      icon: TbFriends,
      title: '社区',
      desc: '为你的社区举办活动，创造特别的活动并留下美好的回忆。促进联系，庆祝团结。'
    },
    {
      icon: MdLocalGroceryStore,
      title: '市场',
      desc: '购买、出售、交易RWA代币及其反向交易，NFT画廊、商品、产品。活动的角落店，唯一的规则：仅限加密货币。'
    },
  ];
  
  return (
    <>
      <div className="container relative md:mt-24 mt-16 hover-gradient-amber-7 text-white">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">定制领域</h3>
          <p className="text-slate-400 max-w-xl mx-auto">沉浸在精心打造的领域中，激发您的激情，扩展您的知识，并赋予您旅程以力量。这些变革性空间作为解锁您真正潜力的催化剂，并将开创性的想法变为现实。</p>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 mt-6 gap-6 ">
          {featureData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="group flex duration-500 xl:p-3 " key={index}>
                <div className="flex align-middle justify-center items-center w-14 h-14 mt-1 bg-green-400/5 group-hover:bg-amber-400 group-hover:text-white border-2 border-green-400/20 hover:border-green-600 text-green-400 rounded-lg text-2xl shadow-sm dark:shadow-gray-800 duration-500">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 ms-4">
                  <h4 className="mb-0 text-lg font-semibold hover:text-amber-400 ">{item.title}</h4>
                  <p className="text-slate-400 mt-2 hover:text-amber-400">{item.desc}</p>
                </div>
              </div>
            );
          })}
          <ToggleButton />
        </div>
      </div>
    </>
  );
}
