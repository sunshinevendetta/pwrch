import React from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { MdKeyboardArrowRight } from '../assets/icons/vander';
import { TbFlagFilled } from "react-icons/tb";
import { LuNetwork } from "react-icons/lu";
import { TbWorldHeart } from "react-icons/tb";
const ToggleButton = dynamic(() => import('./toggleButton'));

export default function AboutOne() {
    return (
        <>
            <div className="container relative md:mt-24 mt-16">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
                    <div className="relative overflow-hidden rounded-lg border border-amber-400/5 bg-gradient-to-tl to-amber-400/30 from-fuchsia-600/30 dark:to-amber-400/50 dark:from-fuchsia-600/50 ps-6 pt-6 lg:me-8">
                        <Image src="/images/features/1.webp" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="ltr:rounded-tl-lg rtl:rounded-tr-lg" alt="" />
                    </div>

                    <div className="">
                        <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">欢迎来到 <span className="bg-gradient-to-br from-green-600 to-fuchsia-600 text-transparent bg-clip-text hover-gradient-amber-6"> 聚集</span></h3>
                        <p className="text-slate-400 max-w-xl">+10,000 人的灵魂，准备在活动中掀起一场史诗般的变革。</p>

                        <ul className="list-none text-slate-400 mt-4">
                            <li className="mb-2 flex items-center">
                                <TbFlagFilled className="text-amber-400 h-5 w-5 me-2" />
                                使命：通过教育和技术赋能。
                            </li>
                            <li className="mb-2 flex items-center">
                                <LuNetwork className="text-amber-400 h-5 w-5 me-2" />
                                工作坊与活动：在HIR礼堂和Mixteca 1 & 2举行。
                            </li>
                            <li className="mb-2 flex items-center">
                                <TbWorldHeart className="text-amber-400 h-5 w-5 me-2" />
                                我们相信去中心化技术正在建设有效的社会。
                            </li>
                        </ul>
                        <div className="font-sans mt-4">
                            <ToggleButton />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}