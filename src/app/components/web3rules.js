'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function RuleSection() {
  const [currentRuleIndex, setCurrentRuleIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const rules = useMemo(() => ({
    DeFi: [
      {
        title: 'DeFi 概述',
        text: '创新重塑金融，强调安全性、包容性和效率。奖金：10,000 美元。',
      },
      {
        title: '资格和注册',
        text: '对所有对去中心化金融充满热情的参与者开放。参与者可以单独竞争或组成最多五人的团队。',
      },
      {
        title: '开发和提交',
        text: '参与者有 48 小时的时间来构思、开发和原型化他们的 DeFi 解决方案。提交内容必须包括详细的项目文档、功能原型和引人注目的视频演示。',
      },
      {
        title: '评审标准：创新与创意',
        text: '在去中心化金融中的突破性想法和新颖方法。',
      },
      {
        title: '评审标准：执行',
        text: 'DeFi 解决方案的无缝实施和用户体验。',
      },
      {
        title: '评审标准：展示',
        text: '有效阐述和销售愿景的能力。',
      },
      {
        title: '资源和指导',
        text: '可以获得业界精英的指导和合作伙伴提供的工具、API 和数据资源，以推动创新引擎。',
      },
    ],
    Gaming: [
      {
        title: '游戏概述',
        text: '基于区块链的游戏，提供真正的所有权、治理和沉浸式体验。奖金：10,000 美元。',
      },
      {
        title: '资格和注册',
        text: '对所有对区块链游戏充满热情的参与者开放。参与者可以单独竞争或组成最多五人的团队。',
      },
      {
        title: '开发和提交',
        text: '参与者有 48 小时的时间来构思、开发和原型化他们的游戏解决方案。提交内容必须包括详细的项目文档、功能原型和引人注目的视频演示。',
      },
      {
        title: '评审标准：创新与创意',
        text: '在区块链游戏中的突破性想法和新颖方法。',
      },
      {
        title: '评审标准：执行',
        text: '游戏解决方案的无缝实施和用户体验。',
      },
      {
        title: '评审标准：展示',
        text: '有效阐述和销售愿景的能力。',
      },
      {
        title: '资源和指导',
        text: '可以获得业界精英的指导和合作伙伴提供的工具、API 和数据资源，以推动创新引擎。',
      },
    ],
    DecentralizedSocialMedia: [
      {
        title: '去中心化社交媒体概述',
        text: '优先考虑用户控制、隐私和言论自由的平台。奖金：10,000 美元。',
      },
      {
        title: '资格和注册',
        text: '对所有对去中心化社交媒体充满热情的参与者开放。参与者可以单独竞争或组成最多五人的团队。',
      },
      {
        title: '开发和提交',
        text: '参与者有 48 小时的时间来构思、开发和原型化他们的去中心化社交媒体解决方案。提交内容必须包括详细的项目文档、功能原型和引人注目的视频演示。',
      },
      {
        title: '评审标准：创新与创意',
        text: '在去中心化社交媒体中的突破性想法和新颖方法。',
      },
      {
        title: '评审标准：执行',
        text: '去中心化社交媒体解决方案的无缝实施和用户体验。',
      },
      {
        title: '评审标准：展示',
        text: '有效阐述和销售愿景的能力。',
      },
      {
        title: '资源和指导',
        text: '可以获得业界精英的指导和合作伙伴提供的工具、API 和数据资源，以推动创新引擎。',
      },
    ],
    ZkTech: [
      {
        title: 'Zk 技术概述',
        text: '利用零知识证明增强隐私和安全的解决方案。奖金：10,000 美元。',
      },
      {
        title: '资格和注册',
        text: '对所有对 Zk 技术充满热情的参与者开放。参与者可以单独竞争或组成最多五人的团队。',
      },
      {
        title: '开发和提交',
        text: '参与者有 48 小时的时间来构思、开发和原型化他们的 Zk 技术解决方案。提交内容必须包括详细的项目文档、功能原型和引人注目的视频演示。',
      },
      {
        title: '评审标准：创新与创意',
        text: '在 Zk 技术中的突破性想法和新颖方法。',
      },
      {
        title: '评审标准：执行',
        text: 'Zk 技术解决方案的无缝实施和用户体验。',
      },
      {
        title: '评审标准：展示',
        text: '有效阐述和销售愿景的能力。',
      },
      {
        title: '资源和指导',
        text: '可以获得业界精英的指导和合作伙伴提供的工具、API 和数据资源，以推动创新引擎。',
      },
    ],
    Web3Appliances: [
      {
        title: 'Web3 应用概述',
        text: '将数字世界与物理世界结合起来，提升日常生活的 Web3 技术的实际应用。奖金：10,000 美元。',
      },
      {
        title: '资格和注册',
        text: '对所有对 Web3 应用充满热情的参与者开放。参与者可以单独竞争或组成最多五人的团队。',
      },
      {
        title: '开发和提交',
        text: '参与者有 48 小时的时间来构思、开发和原型化他们的 Web3 应用解决方案。提交内容必须包括详细的项目文档、功能原型和引人注目的视频演示。',
      },
      {
        title: '评审标准：创新与创意',
        text: '在 Web3 应用中的突破性想法和新颖方法。',
      },
      {
        title: '评审标准：执行',
        text: 'Web3 应用解决方案的无缝实施和用户体验。',
      },
      {
        title: '评审标准：展示',
        text: '有效阐述和销售愿景的能力。',
      },
      {
        title: '资源和指导',
        text: '可以获得业界精英的指导和合作伙伴提供的工具、API 和数据资源，以推动创新引擎。',
      },
    ],
  }), []);

  const showRule = useCallback((index) => {
    setCurrentRuleIndex(index);
    gsap.fromTo('.rule-card', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5 });
  }, []);

  const hideRule = useCallback(() => {
    gsap.to('.rule-card', { opacity: 0, y: 50, duration: 0.5, onComplete: () => setCurrentRuleIndex(null) });
  }, []);

  const handleNext = useCallback(() => {
    if (currentRuleIndex !== null) {
      const nextIndex = (currentRuleIndex + 1) % rules[selectedCategory].length;
      showRule(nextIndex);
    }
  }, [currentRuleIndex, selectedCategory, showRule, rules]);

  const handlePrev = useCallback(() => {
    if (currentRuleIndex !== null) {
      const prevIndex = (currentRuleIndex - 1 + rules[selectedCategory].length) % rules[selectedCategory].length;
      showRule(prevIndex);
    }
  }, [currentRuleIndex, selectedCategory, showRule, rules]);

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [handleNext, handlePrev]);

  useEffect(() => {
    const handleSwipe = (e) => {
      const direction = e.deltaX > 0 ? 'right' : 'left';
      if (direction === 'right') handleNext();
      if (direction === 'left') handlePrev();
    };

    window.addEventListener('swiped', handleSwipe);
    return () => window.removeEventListener('swiped', handleSwipe);
  }, [handleNext, handlePrev]);

  return (
    <section className="panel green mx-auto text-center relative h-auto py-12">
      <div className="absolute inset-0">
        <Image src="/images/blog/specialrules.webp" alt="背景图像" className="opacity-30" fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 p-6 flex items-center justify-center flex-col">
        <h3 id="myText4" className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">
          规则
        </h3>
        <p className="text-white mb-6">本次比赛有 5 个子类别。选择一个子类别查看规则。</p>
        {!selectedCategory ? (
          <div className="flex flex-wrap justify-center gap-4">
            <button className="hover-gradient-amber-4 text-white font-bold px-4 py-2 rounded" onClick={() => setSelectedCategory('DeFi')}>
              DeFi 规则
            </button>
            <button className="hover-gradient-amber-4 font-bold text-white px-4 py-2 rounded" onClick={() => setSelectedCategory('Gaming')}>
              游戏规则
            </button>
            <button className="hover-gradient-amber-4 font-bold text-white px-4 py-2 rounded" onClick={() => setSelectedCategory('DecentralizedSocialMedia')}>
              去中心化社交媒体规则
            </button>
            <button className="hover-gradient-amber-4 font-bold text-white px-4 py-2 rounded" onClick={() => setSelectedCategory('ZkTech')}>
              Zk 技术规则
            </button>
            <button className="hover-gradient-amber-4 font-bold text-white px-4 py-2 rounded" onClick={() => setSelectedCategory('Web3Appliances')}>
              Web3 应用规则
            </button>
          </div>
        ) : (
          <>
            <button className="hover-gradient-amber-3 text-white font-bold px-4 py-2 rounded mb-4" onClick={() => setSelectedCategory(null)}>
              返回类别
            </button>
            <div className="flex flex-wrap justify-center gap-4">
              {rules[selectedCategory].map((rule, index) => (
                <button key={index} className="bg-green-500 hover-gradient-amber-6 border-green-500 bg-opacity-80 text-white px-4 py-2 rounded" onClick={() => showRule(index)}>
                  {rule.title}
                </button>
              ))}
            </div>
          </>
        )}
        {currentRuleIndex !== null && (
          <div className="rule-card absolute inset-0 bg-black bg-opacity-90 p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <h4 className="text-2xl font-bold mb-4">{rules[selectedCategory][currentRuleIndex].title}</h4>
            <p className="text-lg">{rules[selectedCategory][currentRuleIndex].text}</p>
            <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={hideRule}>关闭</button>
            <div className="flex mt-4">
              <button className="px-4 py-2 bg-gray-500 text-white rounded mx-2" onClick={handlePrev}>上一个</button>
              <button className="px-4 py-2 bg-gray-500 text-white rounded mx-2" onClick={handleNext}>下一个</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
