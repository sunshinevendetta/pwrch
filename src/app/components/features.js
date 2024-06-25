import React from "react";
import Image from "next/image";

export default function Features({ classlist }) {
    const featuresData = [
        {
            image: '/images/features/video-1.webp',
            title: "未来在OnChain上。",
            desc: "区块链、比特币、加密货币、Web3和现实世界资产的代币化即将带来震撼。准备好见证一场数字革命，解锁疯狂的金融、艺术、社会运动，将权力归还给人民。"
        },
        {
            image: '/images/features/video-2.webp',
            title: "释放人类进化：生物黑客。",
            desc: "生物黑客是优化你的思维、身体和生活的尖端艺术。用突破性工具和技术释放你超人的潜力。欢迎来到自主进化时代！"
        },
        {
            image: '/images/features/video-3.webp',
            title: "交易：塑造未来的金融。",
            desc: "探索颠覆金融的尖端技术和创新策略。从算法交易到人工智能驱动的投资，探索金融市场的民主化及其塑造社会的潜力。深入探讨转型趋势及其对全球经济的影响。"
        },
        {
            image: '/images/features/video-4.webp',
            title: "革命将会自动化。",
            desc: "从工厂到农场，这些尖端技术正在以前所未有的方式改变行业。随着能够思考、学习和适应的机器人和人工智能，我们正在进入一个新的效率和创新时代。准备好见证自动化革命在你眼前展开。"
        },
    ];

    return (
        <>
            <div className={classlist}>
                <div className="grid grid-cols-1 pb-6 mt-6 text-center bg-transparent rounded-lg">
                    <h3 className=" font-bold text-4xl"><span className="bg-gradient-to-br from-green-600 to-fuchsia-400 text-transparent bg-clip-text hover-gradient-amber-5">垂直</span> <span className="bg-gradient-to-br from-fuchsia-400 to-green-600 text-transparent bg-clip-text hover-gradient-amber-6">主题</span></h3>

                    <p className="p-6 bg-gradient-to-br from-green-200 to-fuchsia-400 text-transparent bg-clip-text hover-gradient-amber-5 font-semibold text-xl">比特币 - 加密货币 - Web3 - 去中心化金融 - 实物资产代币化 <br/> 社交媒体代币 - 游戏 - 研讨会 - 演讲者 - 生物黑客 <br/> OnChain艺术 - 黑客马拉松 - 交易比赛 <br/> 人工智能 - 机器人技术 <br/> 量子技术 </p>
                </div>

                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {featuresData.map((item, index) => (
                        <div className="relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800  hover-gradient-amber-5 filter" key={index}>
                            <div className="p-6 pb-0 relative overflow-hidden after:content-[''] after:absolute after:inset-0 after:mx-auto after:w-72 after:h-72 after:bg-gradient-to-tl after:to-amber-400 after:from-fuchsia-600 after:blur-[80px] after:rounded-full">
                                <Image src={item.image} width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="relative rounded-t-md shadow-md dark:shadow-slate-700 z-1" alt="" />
                            </div>

                            <div className="p-6">
                                <h5 className="text-lg font-semibold bg-gradient-to-br from-fuchsia-400 to-green-600 text-transparent bg-clip-text hover-gradient-amber-6 ">{item.title}</h5>
                                <p className="text-slate-200 mt-3 ">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
