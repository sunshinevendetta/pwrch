'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// 动态导入以提升性能
const NavLight = dynamic(() => import('../components/navbar'));
const Footer = dynamic(() => import('../components/footer'));

export default function Privacy() {
  const [signers, setSigners] = useState([]);
  const [showSigners, setShowSigners] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  return (
    <>
      <NavLight />
      <section className="relative md:pt-44 pt-32 pb-8 bg-gradient-to-b from-amber-400/20 dark:from-amber-400/40 to-transparent">
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-6">
            <div>
              <h5 className="md:text-4xl text-3xl md:leading-normal leading-normal tracking-wider font-semibold mb-0">隐私政策</h5>
            </div>
            <ul className="tracking-[0.5px] mb-0 inline-block mt-5">
              <li className="inline-block capitalize font-medium duration-500 ease-in-out hover:text-amber-400"><Link href="/">首页</Link></li>
              <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
              <li className="inline-block capitalize font-medium duration-500 ease-in-out text-amber-400" aria-current="page">隐私政策</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="md:flex justify-center">
            <div className="md:w-3/4">
              <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                <h5 className="text-xl font-semibold mb-4">概述：</h5>
                <p className="text-slate-400">
                  Power 2 The People (PWR2TP) 致力于保护您的隐私。本隐私政策概述了我们在活动期间如何处理您的个人信息，包括黑客马拉松、交易比赛、艺术比赛、展会和演讲会。
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">信息收集与使用：</h5>
                <p className="text-slate-400">
                  当您注册活动、参加活动或与我们沟通时，我们会收集您自愿提供的个人信息。这包括您的姓名、联系方式和任何您选择提供的其他信息。
                </p>
                <ul className="list-none text-slate-400 mt-3">
                  <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>促进活动注册和参与</li>
                  <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>提供与活动相关的更新和信息</li>
                  <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>确保遵守活动规则和法规</li>
                  <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>增强活动体验并改进未来活动</li>
                  <li className="flex mt-2"><i className="mdi mdi-arrow-right text-amber-400 text-lg align-middle me-2"></i>促进参与者之间的网络和合作</li>
                </ul>

                <h5 className="text-xl font-semibold mb-4 mt-8">信息分享与披露：</h5>
                <p className="text-slate-400">
                  我们除了为了运营活动、遵守法律或保护我们的权利必要时，不会与第三方分享您的个人信息。您的信息可能会与活动合作伙伴和赞助商共享，用于提供活动服务。
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">安全性：</h5>
                <p className="text-slate-400">
                  我们实施适当的技术和组织措施，保护您的个人信息免遭意外或非法的破坏、丢失、更改、未经授权的披露或访问。
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">数据保留：</h5>
                <p className="text-slate-400">
                  您的个人信息将仅在收集目的实现所需的时间内保留，或者按照法律要求。
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">您的权利：</h5>
                <p className="text-slate-400">
                  您有权访问、更正或删除您的个人信息。如果您对您的数据或本隐私政策有任何疑虑，请通过 contacto@dfb.mx 联系我们。
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">录音同意：</h5>
                <p className="text-slate-400">
                  参加 PWR2TP 活动即表示您同意录制您的图像、声音和参与情况。这些录音可能用于促销目的，包括但不限于社交媒体、网站和未来活动营销。
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">本隐私政策的变更：</h5>
                <p className="text-slate-400">
                  我们可能会不时更新本隐私政策。我们将通过在我们的网站上发布新的隐私政策来通知您任何更改。您继续参与活动即表示您接受新的隐私政策。
                </p>

                <div className="mt-8">
                  <div className="mt-4">
                    <h5 className="text-xl font-semibold mb-4"></h5>
                    <ul className="list-disc text-slate-400 ml-5">
                      {signers.map((signer, index) => (
                        <li key={index}>{signer}</li>
                      ))}
                    </ul>
                  </div>
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
