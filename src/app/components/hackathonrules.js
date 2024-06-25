'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function RuleSection() {
  const [currentRuleIndex, setCurrentRuleIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const rules = useMemo(() => ({
    SyntehIQ: [
      {
        title: 'SyntehIQ 概述',
        text: 'AI 创新的熔炉，专注于预测分析、机器学习和智能自动化，提供 25,000 美元的奖金，用于推动社会进步的项目。',
      },
      {
        title: '资格和注册',
        text: '开放给所有热衷于 AI 的参与者。参与者可以个人或团队（最多五名成员）参赛。',
      },
      {
        title: '开发和提交',
        text: '参与者有 48 小时时间构思、开发和制作他们的 AI 解决方案。提交内容必须包括详细的项目文档、功能原型和引人注目的视频演讲。',
      },
      {
        title: '评审标准：创新和创意',
        text: 'AI 领域的突破性想法和新颖方法。',
      },
      {
        title: '评审标准：执行',
        text: 'AI 解决方案的无缝实施和用户体验。',
      },
      {
        title: '评审标准：演示',
        text: '有效阐述和推广愿景的能力。',
      },
      {
        title: '资源和指导',
        text: '通过合作伙伴提供的行业权威和丰富的工具、API 和数据，获取创新动力。',
      },
    ],
    LifeCode: [
      {
        title: 'LifeCode 概述',
        text: '生物黑客的前沿，为能够革新遗传学、可穿戴技术或新健康范式，增强人类能力和寿命，提供 15,000 美元的奖金。',
      },
      {
        title: '资格和注册',
        text: '开放给所有生物黑客和爱好者。参与者可以个人或团队（最多五名成员）参赛。',
      },
      {
        title: '开发和提交',
        text: '参与者有 48 小时时间构思、开发和制作他们的生物黑客解决方案。提交内容必须包括详细的项目文档、功能原型和引人注目的视频演讲。',
      },
      {
        title: '评审标准：创新和创意',
        text: '生物黑客领域的突破性想法和新颖方法。',
      },
      {
        title: '评审标准：执行',
        text: '生物黑客解决方案的无缝实施和用户体验。',
      },
      {
        title: '评审标准：演示',
        text: '有效阐述和推广愿景的能力。',
      },
      {
        title: '资源和指导',
        text: '通过合作伙伴提供的行业权威和丰富的工具、API 和数据，获取创新动力。',
      },
    ],
    Automate: [
      {
        title: 'Automate 概述',
        text: '这个领域以 20,000 美元的赏金，呼吁提供针对工业、医疗保健或个人使用的机器人创新解决方案，提高效率和人机协同。',
      },
      {
        title: '资格和注册',
        text: '开放给所有机器人爱好者和专业人士。参与者可以个人或团队（最多五名成员）参赛。',
      },
      {
        title: '开发和提交',
        text: '参与者有 48 小时时间构思、开发和制作他们的机器人解决方案。提交内容必须包括详细的项目文档、功能原型和引人注目的视频演讲。',
      },
      {
        title: '评审标准：创新和创意',
        text: '机器人领域的突破性想法和新颖方法。',
      },
      {
        title: '评审标准：执行',
        text: '机器人解决方案的无缝实施和用户体验。',
      },
      {
        title: '评审标准：演示',
        text: '有效阐述和推广愿景的能力。',
      },
      {
        title: '资源和指导',
        text: '通过合作伙伴提供的行业权威和丰富的工具、API 和数据，获取创新动力。',
      }
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
        <Image src="/images/blog/fintechfuture.webp" alt="背景图片" className="opacity-30" fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 p-6 flex items-center justify-center flex-col">
        <h3 id="myText4" className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">
          规则
        </h3>
        {!selectedCategory ? (
          <div className="flex flex-wrap justify-center gap-4">
            <button className="hover-gradient-amber-4 text-white font-bold px-4 py-2 rounded" onClick={() => setSelectedCategory('SyntehIQ')}>
              SyntehIQ 规则
            </button>
            <button className="hover-gradient-amber-4 font-bold text-white px-4 py-2 rounded" onClick={() => setSelectedCategory('LifeCode')}>
              LifeCode 规则
            </button>
            <button className="hover-gradient-amber-4 font-bold text-white px-4 py-2 rounded" onClick={() => setSelectedCategory('Automate')}>
              Automate 规则
            </button>
          </div>
        ) : (
          <>
            <button className="hover-gradient-amber-3 text-white font-bold px-4 py-2 rounded mb-4" onClick={() => setSelectedCategory(null)}>
              返回分类
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
