'use client';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function RuleSection() {
  const [currentRuleIndex, setCurrentRuleIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const rules = useMemo(() => ({
    Mecha: [
      {
        title: 'Mecha 类别概述',
        text: '“Mecha”类别在“Trade Arena”中开辟了新的竞争时代，邀请参与者利用人工智能和算法策略的力量。参赛者将在模拟环境中开发和部署AI交易机器人，展示自动化系统通过分析精度和速度超越人类交易员的潜力。数千美元的奖金。',
      },
      {
        title: '资格和注册',
        text: '对所有人开放，从经验丰富的交易员到热情的初学者。参与者可以作为独立交易员或最多五人的团队进行比赛，既培养个人才华又促进协作策略。',
      },
      {
        title: '实时损益展示',
        text: '创新功能，在活动现场实时展示利润和损失，增加比赛的吸引力和透明度。',
      },
      {
        title: '独家活动场地',
        text: '比赛仅在“Accelerate”活动期间进行，确保充满创新和激动人心的沉浸式比赛氛围。',
      },
      {
        title: '评判标准：盈利能力',
        text: '主要的成功衡量标准，奖励每个竞技场中的最高收入者。',
      },
      {
        title: '评判标准：策略和创新',
        text: '认可创意和有效使用交易策略和工具。',
      },
      {
        title: '评判标准：风险管理',
        text: '评估参与者在平衡大胆交易与谨慎风险策略方面的能力。',
      },
      {
        title: '数据来源',
        text: '所有交易机器人必须使用公开且合法的数据来源。使用未经授权的私有或专有数据的机器人将被取消资格。',
      },
      {
        title: '公平竞争',
        text: '机器人在比赛期间必须独立运行，不得进行人为干预。比赛期间严禁手动覆盖或调整。',
      },
      {
        title: '透明性',
        text: '参赛者必须在比赛开始前提交其算法策略和操作原则的详细报告，以确保透明性和公平评估。',
      },
      {
        title: '道德考量',
        text: '算法必须遵循道德交易规范。利用市场状况或违反交易所规定的策略将导致立即取消资格。',
      },
      {
        title: '技术稳定性',
        text: '机器人应经过充分测试，以确保其能够处理实时数据馈送并在不发生技术故障的情况下执行交易。不稳定或不可靠的机器人将被取消资格。',
      },
      {
        title: '颁奖后活动',
        text: '获胜者将在“Power 2 The People: Trade Arena Magazine”及合作平台上分享他们的深刻故事和策略，获得显著的认可。颁奖典礼和活动为获胜者、参与者和合作伙伴提供了深度机会，以建立超越比赛的联系。',
      },
    ],
    Nova: [
      {
        title: 'Nova 类别概述',
        text: '在去中心化交易所的流动环境中导航，利用如闪电贷和自动做市商执行在多链环境中的前沿策略。唯一的规则是禁止使用机器人。数千美元的奖金。',
      },
      {
        title: '资格和注册',
        text: '对所有交易员开放。参与者可以单独比赛或组成最多五人的团队。',
      },
      {
        title: '实时损益展示',
        text: '实时显示利润和损失，以增强透明度和参与度。',
      },
      {
        title: '独家活动场地',
        text: '比赛仅在“Accelerate”活动期间进行，确保专注和沉浸式的比赛环境。',
      },
      {
        title: '评判标准：盈利能力',
        text: '主要的成功衡量标准，奖励最高收入者。',
      },
      {
        title: '评判标准：策略和创新',
        text: '认可创意和有效的交易策略。',
      },
      {
        title: '评判标准：风险管理',
        text: '评估参与者有效管理风险的能力。',
      },
      {
        title: '合规性',
        text: '所有交易活动必须遵守相关法律法规。',
      },
      {
        title: '道德交易',
        text: '交易员必须遵守道德标准，避免操纵性或剥削性行为。',
      },
      {
        title: '数据完整性',
        text: '交易必须基于准确且可验证的数据来源。',
      },
      {
        title: '透明性',
        text: '参与者必须提供其交易策略和决策过程的详细报告。',
      },
      {
        title: '禁止使用机器人',
        text: '仅允许手动交易；严禁使用机器人。',
      },
      {
        title: '颁奖后活动',
        text: '获胜者将在“Power 2 The People: Trade Arena Magazine”及合作平台上分享他们的深刻故事和策略，获得显著的认可。颁奖典礼和活动为获胜者、参与者和合作伙伴提供了深度机会，以建立超越比赛的联系。',
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
        <Image src="/images/blog/specialrules.webp" alt="Background Image" className="opacity-30" fill style={{ objectFit: "cover" }} />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 p-6 flex items-center justify-center flex-col">
        <h3 id="myText4" className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-white">
          规则
        </h3>
        {!selectedCategory ? (
          <div className="flex flex-wrap justify-center gap-4">
            <button className="hover-gradient-amber-4 text-white font-bold px-4 py-2 rounded" onClick={() => setSelectedCategory('Mecha')}>
              Mecha 规则
            </button>
            <button className="hover-gradient-amber-4 font-bold text-white px-4 py-2 rounded" onClick={() => setSelectedCategory('Nova')}>
              Nova 规则
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
