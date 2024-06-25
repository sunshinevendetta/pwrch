import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { FiCheckCircle, AiOutlineClose } from '../assets/icons/vander';

export default function Pricing() {
    const [selectedCrypto, setSelectedCrypto] = useState('MXN');
    const [selectedCryptoBusiness, setSelectedCryptoBusiness] = useState('MXN');
    const [selectedCryptoDiamond, setSelectedCryptoDiamond] = useState('MXN'); 
    const [ethPrice, setEthPrice] = useState(0);
    const [btcPrice, setBtcPrice] = useState(0);
    const usdcPrice = 50;
    const mxnPrice = 500;
    const [businessPriceMXN, setBusinessPriceMXN] = useState(3500);
    const businessPriceUSDC = 150;
    const [diamondPriceMXN, setDiamondPriceMXN] = useState(35000); 
    const diamondPriceUSDC = 3500;
    const [selectedCategory, setSelectedCategory] = useState('Traders');
  
    useEffect(() => {
      axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin&vs_currencies=usd')
        .then(response => {
          setEthPrice(response.data.ethereum.usd);
          setBtcPrice(response.data.bitcoin.usd);
        })
        .catch(error => {
          console.error('Error fetching prices:', error);
        });
    }, []);
  
    return (
      <>
        <div className="max-w-3xl mx-auto mt-6 gap-6">
          

    

                <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
        <div className="p-6">
          <h5 className="text-2xl leading-normal font-semibold">交易员</h5>
          <p className="text-slate-400 mt-2">对于那些敢于建立荣耀并证明自己是第一的人</p>
          <div className="flex mt-4">
            <span className="text-lg font-semibold">Ξ</span>
            <span className="text-5xl font-semibold mb-0 ms-1">
              {selectedCategory === 'Traders' || selectedCategory === 'Artist' ? '0.005' : selectedCategory === 'Traders' ? '0.005' : '0.025'}
            </span>
            <span className="text-lg font-semibold ms-2">
              / {selectedCategory === 'Traders' || selectedCategory === 'Artist' ? (0.005 * ethPrice).toFixed(2) : selectedCategory === 'Traders' ? (0.005 * ethPrice).toFixed(2) : (0.025 * ethPrice).toFixed(2)} USDC
              / {selectedCategory === 'Traders' || selectedCategory === 'Artist' ? (0.005 * ethPrice / btcPrice).toFixed(6) : selectedCategory === 'Traders' ? (0.005 * ethPrice / btcPrice).toFixed(6) : (0.025 * ethPrice / btcPrice).toFixed(6)} ₿
              / {selectedCategory === 'Traders' || selectedCategory === 'Artist' ? (0.005 * ethPrice * 20).toFixed(2) : selectedCategory === 'Traders' ? (0.005 * ethPrice * 20).toFixed(2) : (0.025 * ethPrice * 20).toFixed(2)} MXN
            </span>
          </div>
         

          <div className="mt-6 flex items-center">
            <button
              className={`py-2 px-5 mr-2 font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded ${selectedCategory === 'Traders' ? 'bg-amber-400 text-white' : 'bg-amber-400/5 text-amber-400 hover:bg-amber-400 hover:text-white'}`}
              onClick={() => setSelectedCategory('Traders')}
            >
              交易员
            </button>
            <Link href={`/signup`}>
            <button className="py-2 px-5 mr-2 font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded">注册</button>
          </Link>
          <Link href={`/studentsignup`}>
            <button className="py-2 px-5 mr-2 font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded">学生</button>
          </Link>
      
    </div>
  </div>

  <div className="p-6 bg-gray-50 dark:bg-slate-800">
    <ul className="list-none text-slate-400">
    <li className="font-semibold text-slate-900 dark:text-white text-sm uppercase">特点:</li>

<li className="flex items-center mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text-white me-1 font-semibold">2天展览楼层访问</span>
</li>
<li className="flex items-center mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text-white me-1 font-semibold">PWR2TP社交资料和礼物</span>
</li>
<li className="flex items-center mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text-white me-1 font-semibold">现场任务和奖励</span>
</li>
<li className="flex items-center mt-2">
<FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text-white me-1 font-semibold">所有侧活动访问</span>
</li>
<li className="flex items-center mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text-white me-1 font-semibold">精选会议</span>
</li>
<li className="flex items-center mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text-white me-1 font-semibold">配备专业工具的特别套装</span>
</li>
<li className="flex items-center mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text-white me-1 font-semibold">链上POAP收藏品</span>
</li>
<li className="flex items-center mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text-white me-1 font-semibold">专门的构建区</span>
</li>

<li className="flex items-center mt-2">
<FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text-white me-1 font-semibold">
  参加比赛赢取10万美元以上的奖金</span>
</li>
                        </ul>
                    </div>
                </div>           
            </div>           
        </>    
    )
}
