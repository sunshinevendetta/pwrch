'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function RuleSection() {
  const [currentRuleIndex, setCurrentRuleIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const rules = useMemo(() => ({
    Lunar: [
      {
        title: 'Lunar Category Overview',
        text: '掌握在中心化交易所内预测和利用未来市场走势的精度。奖金总额数千美元。本比赛仅适用于18岁及以上参与者。',
      },
      {
        title: '资格与注册',
        text: '向所有已验证账户的交易者开放。参与者可组成最多三人的团队，共同制定策略和执行。',
      },
      {
        title: '交易对',
        text: '参与者必须在中心化交易所上交易指定的交易对。比赛开始前将提供合格交易对的列表。',
      },
      {
        title: '预测准确性',
        text: '交易者必须以高准确性预测未来市场走势。预测将根据准确性和盈利能力进行评估。',
      },
      {
        title: '市场分析',
        text: '必须提交详细的市场分析报告，展示用于市场预测的策略和工具。',
      },
      {
        title: '风险管理',
        text: '展示强大的风险管理实践。最大程度地降低风险并实现回报的策略将受到高度重视。',
      },
      {
        title: '透明度和报告',
        text: '团队必须提供其交易策略和结果的详细报告。透明度对公平评估至关重要。',
      },
      {
        title: '比赛地点',
        text: '比赛将在“月球峰会”期间举行，为参与者提供充满活力和引人入胜的环境。',
      },
      {
        title: '实时排行榜',
        text: '实时排行榜将显示表现最佳的参与者，增加竞争和刺激的元素。',
      },
      {
        title: '最终评判',
        text: '将根据整体表现、创新精神和遵守比赛规则选择获奖者。评委将同时考虑盈利能力和策略。',
      },
      {
        title: '奖品发放',
        text: '在颁奖仪式后，加密货币奖金将直接转入获奖者的数字钱包。此过程透明、安全，确保获奖者能够即时访问其资金。奖品的转移透明进行，与获奖者共享确认和感谢。',
      },
      {
        title: '仪式后计划',
        text: '获奖者将在《权力归人：交易竞技场杂志》和合作平台上分享他们的深刻故事和策略，获得重要认可。仪式和计划为获奖者、参与者和合作伙伴提供了深层次的机会，以建立超越比赛的联系。',
      }
    ],
    Solar: [
      {
        title: 'Solar Category Overview',
        text: '掌握在加密货币中心化平台上进行现货交易的艺术，即时市场走势可以决定成功。奖金总额数千美元。本比赛仅适用于18岁及以上参与者。',
      },
      {
        title: '资格与注册',
        text: '向所有已验证账户的交易者开放。参与者可组成最多三人的团队，共同制定策略和执行。',
      },
      {
        title: '现货交易对',
        text: '参与者必须在中心化交易所上交易指定的交易对。比赛开始前将提供合格交易对的列表。',
      },
      {
        title: '交易执行',
        text: '交易者必须高效准确地执行现货交易。执行速度和准确性将被评估。',
      },
      {
        title: '市场分析',
        text: '必须提交详细的市场分析报告，展示用于现货交易的策略和工具。',
      },
      {
        title: '风险管理',
        text: '展示强大的风险管理实践。最大程度地降低风险并实现回报的策略将受到高度重视。',
      },
      {
        title: '透明度和报告',
        text: '团队必须提供其交易策略和结果的详细报告。透明度对公平评估至关重要。',
      },
      {
        title: '比赛地点',
        text: '比赛将在“太阳峰会”期间举行，为参与者提供充满活力和引人入胜的环境。',
      },
      {
        title: '实时排行榜',
        text: '实时排行榜将显示表现最佳的参与者，增加竞争和刺激的元素。',
      },
      {
        title: '最终评判',
        text: '将根据整体表现、创新精神和遵守比赛规则选择获奖者。评委将同时考虑盈利能力和策略。',
      },
      {
        title: '奖品发放',
        text: '在颁奖仪式后，加密货币奖金将直接转入获奖者的数字钱包。此过程透明、安全，确保获奖者能够即时访问其资金。奖品的转移透明进行，与获奖者共享确认和感谢。',
      },
      {
        title: '仪式后计划',
        text: '获奖者将在《权力归人：交易竞技场杂志》和合作平台上分享他们的深刻故事和策略，获得重要认可。仪式和计划为获奖者、参与者和合作伙伴提供了深层次的机会，以建立超越比赛的联系。',
      },
    ]
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
        <Image src="/images/blog/tradepass.webp" alt="背景图片" className="opacity-30" fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 p-6 flex items-center justify-center flex-col">
        <h3 id="myText4" className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">
          规则
        </h3>
        {!selectedCategory ? (
          <div className="flex flex-wrap justify-center gap-4">
            <button className="hover-gradient-amber-4 text-white font-bold px-4 py-2 rounded" onClick={() => setSelectedCategory('Lunar')}>
              月球规则
            </button>
            <button className="hover-gradient-amber-4 font-bold text-white px-4 py-2 rounded" onClick={() => setSelectedCategory('Solar')}>
              太阳规则
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
