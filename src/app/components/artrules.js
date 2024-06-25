'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';

export default function RuleSection() {
  const [currentRuleIndex, setCurrentRuleIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const rules = useMemo(() => ({
    Fractal: [
      {
        title: '分形类别概述',
        text: '分形邀请艺术家利用算法、代码和数字过程创作作品，体现加速主题。该类别挑战参与者将艺术视觉与计算创造力融合，创造出与观众产生共鸣的动态作品。奖金：10000美元。',
      },
      {
        title: '资格要求',
        text: '开放给世界各地的艺术家和协作团体。必须年满18岁，未满18岁者须得到监护人同意。',
      },
      {
        title: '提交标准',
        text: '艺术家必须包含详细描述，突出作品的概念基础、使用的技术工具和过程，以及与加速主题的相关性。',
      },
      {
        title: '生成技术',
        text: '必须主要采用生成艺术方法，其中代码和算法是创作过程中的关键。这包括静态图像、动态动画和交互作品。',
      },
      {
        title: '尊重内容',
        text: '艺术作品不得包含贬低或歧视任何群体、宗教或政治立场的内容。必须避免敏感或有争议的话题。',
      },
      {
        title: '创意优于AI依赖',
        text: '提交作品应展示人工智能与其他创意过程或技术的和谐融合。目标是确保艺术作品反映出多方面的创造性努力，而不仅仅依赖于单一的AI生成内容。',
      },
      {
        title: '无版权侵犯',
        text: '所有参赛作品必须是提交艺术家的原创作品，专为Vivid比赛创建。艺术作品中使用的每个元素必须合法获取或由艺术家创建。',
      },
      {
        title: '提交截止日期',
        text: '所有参赛作品必须在指定截止日期前提交。逾期提交将不予考虑评审。',
      },
      {
        title: '颁奖典礼后计划',
        text: '获奖者在“力量归于人民：贸易竞技场杂志”和合作平台上分享他们的深刻故事和策略，获得显著认可。',
      },
    ],
    Prism: [
      {
        title: '棱镜类别概述',
        text: 'Prism寻找能够概念化和制作作品的艺术家，这些作品能够深思熟虑地解释社会加速主题，强调技术与艺术创新的融合。奖金：10000美元。',
      },
      {
        title: '资格要求',
        text: '开放给世界各地的艺术家和协作团体。必须年满18岁，未满18岁者须得到监护人同意。',
      },
      {
        title: '提交标准',
        text: '艺术家必须包含详细描述，突出作品的概念基础、使用的技术工具和过程，以及与加速主题的相关性。',
      },
      {
        title: '活动地点的艺术',
        text: '加速活动场地将作为Vivid艺术作品的沉浸式画廊，为交互装置、数字显示和体现比赛主题的物理作品提供指定空间。',
      },
      {
        title: 'WTC外立面展示',
        text: '来自分形和棱镜的精选艺术作品将在世界贸易中心的外立面展示，将这座标志性建筑转化为数字创新和艺术光辉的画布。',
      },
      {
        title: '建筑作为画布',
        text: '活动场地本身，包括结构和装置，可以用作展示艺术作品的画布。这种做法不仅将艺术无缝地融入活动环境，还鼓励艺术家超越传统的展览空间。',
      },
      {
        title: '尊重内容',
        text: '艺术作品不得包含贬低或歧视任何群体、宗教或政治立场的内容。必须避免敏感或有争议的话题。',
      },
      {
        title: '无版权侵犯',
        text: '所有参赛作品必须是提交艺术家的原创作品，专为Vivid比赛创建。艺术作品中使用的每个元素必须合法获取或由艺术家创建。',
      },
      {
        title: '颁奖典礼后计划',
        text: '获奖者在“力量归于人民：贸易竞技场杂志”和合作平台上分享他们的深刻故事和策略，获得显著认可。',
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
  }, [currentRuleIndex, selectedCategory, rules, showRule]);

  const handlePrev = useCallback(() => {
    if (currentRuleIndex !== null) {
      const prevIndex = (currentRuleIndex - 1 + rules[selectedCategory].length) % rules[selectedCategory].length;
      showRule(prevIndex);
    }
  }, [currentRuleIndex, selectedCategory, rules, showRule]);

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
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 p-6 flex items-center justify-center flex-col">
        <h3 id="myText4" className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">
          规则
        </h3>
        {!selectedCategory ? (
          <div className="flex flex-wrap justify-center gap-4">
            <button className="hover-gradient-amber-4 text-white font-bold px-4 py-2 rounded" onClick={() => setSelectedCategory('Fractal')}>
              分形规则
            </button>
            <button className="hover-gradient-amber-4 font-bold text-white px-4 py-2 rounded" onClick={() => setSelectedCategory('Prism')}>
              棱镜规则
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
