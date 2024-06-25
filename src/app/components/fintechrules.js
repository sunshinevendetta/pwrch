'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function RuleSection() {
  const [currentRuleIndex, setCurrentRuleIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const rules = useMemo(() => ({
    Comet: [
      {
        title: '彗星类别概述',
        text: '参与者将在股票、大宗商品和法定货币领域进行交易，展示其在传统现货市场中导航的技能。这个竞技场考验交易员有效利用基本分析和技术分析的能力。奖金数以千美元计。此比赛仅限18岁及以上参与者。',
      },
      {
        title: '资格和注册',
        text: '开放给所有已验证帐户的交易员。参与者可以组成最多三名成员的团队，共同制定战略和执行。',
      },
      {
        title: '交易工具',
        text: '参与者必须交易指定的股票、大宗商品和法定货币。比赛前将提供符合资格的交易工具清单。',
      },
      {
        title: '交易执行',
        text: '交易员必须高效准确地执行交易。执行速度和准确性将受到评估。',
      },
      {
        title: '市场分析',
        text: '必须提交详细的市场分析报告，展示用于交易的策略和工具。',
      },
      {
        title: '风险管理',
        text: '展示强大的风险管理实践。最大化回报并最小化风险的策略将受到高度重视。',
      },
      {
        title: '透明度和报告',
        text: '团队必须提供详细的交易策略和结果报告。透明度对公平评估至关重要。',
      },
      {
        title: '活动地点',
        text: '传统的交易比赛将在活动前在活动现场举行，奖项将在主活动期间颁发。这允许在主活动期间进行实时活动和网络。',
      },
      {
        title: '实时排行榜',
        text: '实时排行榜将显示表现最佳的参与者，增加了激动和竞争的元素。',
      },
      {
        title: '最终评审',
        text: '根据整体表现、创新和遵守比赛规则选择获奖者。评委将考虑盈利能力和策略。',
      },
      {
        title: '奖品发放',
        text: '仪式结束后，加密货币奖金将直接转入获奖者的数字钱包。这一过程迅速、安全，确保获奖者能及时访问他们的资金。奖品的转移是透明进行的，并与获奖者分享确认和承认。',
      },
      {
        title: '仪式后项目',
        text: '获奖者在《力量到人民：贸易竞技场杂志》和合作平台上分享他们的深刻故事和策略，获得重要认可。仪式和项目为获奖者、参与者和合作伙伴提供了深层次的机会，促进比赛之外的连接。',
      }
    ],
    Stellar: [
      {
        title: '恒星类别概述',
        text: '这里是传统期货市场，理解和预测市场走向可以带来可观的回报。这个竞技场要求深入理解影响价格的市场指标和经济因素。奖金数以千美元计。此比赛仅限18岁及以上参与者。',
      },
      {
        title: '资格和注册',
        text: '开放给所有已验证帐户的交易员。参与者可以组成最多三名成员的团队，共同制定战略和执行。',
      },
      {
        title: '期货交易工具',
        text: '参与者必须交易指定的期货合约。比赛前将提供符合资格的交易工具清单。',
      },
      {
        title: '交易执行',
        text: '交易员必须高效准确地执行交易。执行速度和准确性将受到评估。',
      },
      {
        title: '市场分析',
        text: '必须提交详细的市场分析报告，展示用于交易的策略和工具。',
      },
      {
        title: '风险管理',
        text: '展示强大的风险管理实践。最大化回报并最小化风险的策略将受到高度重视。',
      },
      {
        title: '透明度和报告',
        text: '团队必须提供详细的交易策略和结果报告。透明度对公平评估至关重要。',
      },
      {
        title: '活动地点',
        text: '传统的交易比赛将在活动前在活动现场举行，奖项将在主活动期间颁发。这允许在主活动期间进行实时活动和网络。',
      },
      {
        title: '实时排行榜',
        text: '实时排行榜将显示表现最佳的参与者，增加了激动和竞争的元素。',
      },
      {
        title: '最终评审',
        text: '根据整体表现、创新和遵守比赛规则选择获奖者。评委将考虑盈利能力和策略。',
      },
      {
        title: '奖品发放',
        text: '仪式结束后，加密货币奖金将直接转入获奖者的数字钱包。这一过程迅速、安全，确保获奖者能及时访问他们的资金。奖品的转移是透明进行的，并与获奖者分享确认和承认。',
      },
      {
        title: '仪式后项目',
        text: '获奖者在《力量到人民：贸易竞技场杂志》和合作平台上分享他们的深刻故事和策略，获得重要认可。仪式和项目为获奖者、参与者和合作伙伴提供了深层次的机会，促进比赛之外的连接。',
      }
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
        <Image src="/images/blog/fintechfuture.webp" alt="背景图片" className="opacity-30" fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 p-6 flex items-center justify-center flex-col">
        <h3 id="myText4" className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">
          规则
        </h3>
        {!selectedCategory ? (
          <div className="flex flex-wrap justify-center gap-4">
            <button className="hover-gradient-amber-4 text-white font-bold px-4 py-2 rounded" onClick={() => setSelectedCategory('Comet')}>
              彗星规则
            </button>
            <button className="hover-gradient-amber-4 font-bold text-white px-4 py-2 rounded" onClick={() => setSelectedCategory('Stellar')}>
              恒星规则
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
