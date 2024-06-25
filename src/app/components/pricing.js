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
    const [diamondPriceMXN, setDiamondPriceMXN] = useState(7500); 
    const diamondPriceUSDC = 3500;
    const [selectedCategory, setSelectedCategory] = useState('Hackers');

    const handleCryptoChangeBusiness = (crypto) => {
        setSelectedCryptoBusiness(crypto);
        if (crypto === 'ETH') {
          setBusinessPriceMXN(businessPriceMXN * 1.1);
        } else if (crypto === 'BTC') {
          setBusinessPriceMXN(businessPriceMXN * 0.9);
        } else {
          setBusinessPriceMXN(3500);
        }
    };

    const handleCryptoChangeDiamond = (crypto) => {
        setSelectedCryptoDiamond(crypto);
        if (crypto === 'ETH') {
          setDiamondPriceMXN(diamondPriceMXN * 1.1);
        } else if (crypto === 'BTC') {
          setDiamondPriceMXN(diamondPriceMXN * 0.9);
        } else {
          setDiamondPriceMXN(7500);
        }
      };

    const handleCryptoChange = (crypto) => {
      setSelectedCrypto(crypto);
    };

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
        <div className="grid lg:grid-cols-4 bg-black bg-opacity-30  md:grid-cols-2 grid-cols-1 mt-6 gap-6">
          <div className="relative  overflow-hidden rounded-md shadow bg-black bg-opacity-70">
            <div className="p-6">
              <h5 className="text-2xl leading-normal font-semibold">仅限展览</h5>
              <p className="text-slate-400 mt-2">敢于探索进化的新前沿，让权力掌握在自己手中</p>
              <div className="flex mt-4">
              <span className="text-lg font-semibold">
                {selectedCrypto === 'ETH' ? 'Ξ' :
                  selectedCrypto === 'BTC' ? '₿' :
                    selectedCrypto === 'USDC' || selectedCrypto === 'MXN' ? '$' : ''}
              </span>
                <span className="text-5xl font-semibold mb-0 ms-1">
                  {selectedCrypto === 'ETH' ? (ethPrice ? (usdcPrice / ethPrice).toFixed(4) : '加载中...') :
                    selectedCrypto === 'BTC' ? (btcPrice ? (usdcPrice / btcPrice).toFixed(6) : '加载中...') :
                      selectedCrypto === 'USDC' ? usdcPrice : mxnPrice}
                </span>
              </div>
              <p className="text-slate-400 uppercase text-xs">
                {selectedCrypto === 'ETH' ? 'ETH' :
                  selectedCrypto === 'BTC' ? 'BTC' :
                    selectedCrypto === 'USDC' ? 'USDC' : 'MXN'}
              </p>

              <div className="mt-6 flex items-center">
                <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400/5 hover:bg-amber-400 rounded border-amber-400/10 hover:border-amber-400 text-amber-400 hover:text-white">立即购买</Link>

                <div className="ml-4">
                  <button
                    className={`py-1 px-2 mr-2 font-semibold tracking-wide border align-middle duration-500 text-sm text-center rounded ${selectedCrypto === 'MXN' ? 'bg-amber-400 text-white' : 'bg-amber-400/5 text-amber-400 hover:bg-amber-400 hover:text-white'}`}
                    onClick={() => handleCryptoChange('MXN')}
                  >
                    MXN
                  </button>
                  <button
                    className={`py-1 px-2 mr-2 font-semibold tracking-wide border align-middle duration-500 text-sm text-center rounded ${selectedCrypto === 'ETH' ? 'bg-amber-400 text-white' : 'bg-amber-400/5 text-amber-400 hover:bg-amber-400 hover:text-white'}`}
                    onClick={() => handleCryptoChange('ETH')}
                  >
                    ETH
                  </button>
                  <button
                    className={`py-1 px-2 mr-2 font-semibold tracking-wide border align-middle duration-500 text-sm text-center rounded ${selectedCrypto === 'BTC' ? 'bg-amber-400 text-white' : 'bg-amber-400/5 text-amber-400 hover:bg-amber-400 hover:text-white'}`}
                    onClick={() => handleCryptoChange('BTC')}
                  >
                    BTC
                  </button>
                  <button
                    className={`py-1 px-2 font-semibold tracking-wide border align-middle duration-500 text-sm text-center rounded ${selectedCrypto === 'USDC' ? 'bg-amber-400 text-white' : 'bg-amber-400/5 text-amber-400 hover:bg-amber-400 hover:text-white'}`}
                    onClick={() => handleCryptoChange('USDC')}
                  >
                    USDC
                  </button>
              </div>
            </div>

            <p className="text-slate-400 text-sm mt-3">接受信用卡、借记卡、现金和加密货币支付<br />使用加密货币支付享受特价**</p>
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
                <span className="text-slate-900 dark:text-white me-1 font-semibold">PWR2TP 社交资料和礼物</span>
              </li>
              <li className="flex items-center mt-2">
                <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
                <span className="text-slate-900 dark:text-white me-1 font-semibold">现场任务和奖励</span>
              </li>
              <li className="flex items-center mt-2 text-slate-400">
                <AiOutlineClose className="h-[18px] w-[18px] me-2" />
                <span>侧活动访问（可单独购买）</span>
              </li>
              <li className="flex items-center mt-2 text-slate-400">
                <AiOutlineClose className="h-[18px] w-[18px] me-2" />
                <span>行业会议</span>
              </li>
              <li className="flex items-center mt-2 text-slate-400">
                <AiOutlineClose className="h-[18px] w-[18px] me-2" />
                <span>比赛参与</span>
                <span className="text-slate-500 text-sm ms-1">（黑客马拉松、艺术、交易竞技场）</span>
              </li>

                        </ul>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
  <div className="p-6">
    <h5 className="text-2xl leading-normal font-semibold">商业</h5>
    <p className="text-slate-400 mt-2">为行业专业人士加速、扩展和改进其所有领域的旅程</p>
    <div className="flex mt-4">
      <span className="text-lg font-semibold">
        {selectedCryptoBusiness === 'ETH' ? 'Ξ' :
          selectedCryptoBusiness === 'BTC' ? '₿' :
            selectedCryptoBusiness === 'USDC' || selectedCryptoBusiness === 'MXN' ? '$' : ''}
      </span>
      <span className="text-5xl font-semibold mb-0 ms-1">
        {selectedCryptoBusiness === 'ETH' ? (ethPrice ? (150 / ethPrice).toFixed(4) : '加载中...') :
          selectedCryptoBusiness === 'BTC' ? (btcPrice ? (150 / btcPrice).toFixed(6) : '加载中...') :
            selectedCryptoBusiness === 'USDC' ? (150) : businessPriceMXN}
      </span>
    </div>
    <p className="text-slate-400 uppercase text-xs">
      {selectedCryptoBusiness === 'ETH' ? 'ETH' :
        selectedCryptoBusiness === 'BTC' ? 'BTC' :
          selectedCryptoBusiness === 'USDC' ? 'USDC' : 'MXN'}
    </p>

    <div className="mt-6 flex items-center">
      <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-amber-400/5 hover:bg-amber-400 rounded border-amber-400/10 hover:border-amber-400 text-amber-400 hover:text-white">立即购买</Link>

      <div className="ml-4">
        <button
          className={`py-1 px-2 mr-2 font-semibold tracking-wide border align-middle duration-500 text-sm text-center rounded ${selectedCryptoBusiness === 'MXN' ? 'bg-amber-400 text白' : 'bg-amber-400/5 text-amber-400 hover:bg-amber-400 hover:text白'}`}
          onClick={() => handleCryptoChangeBusiness('MXN')}
        >
          MXN
        </button>
        <button
          className={`py-1 px-2 mr-2 font-semibold tracking-wide border align-middle duration-500 text-sm text-center rounded ${selectedCryptoBusiness === 'ETH' ? 'bg-amber-400 text白' : 'bg-amber-400/5 text-amber-400 hover:bg-amber-400 hover:text白'}`}
          onClick={() => handleCryptoChangeBusiness('ETH')}
        >
          ETH
        </button>
        <button
          className={`py-1 px-2 mr-2 font-semibold tracking-wide border align-middle duration-500 text-sm text-center rounded ${selectedCryptoBusiness === 'BTC' ? 'bg-amber-400 text白' : 'bg-amber-400/5 text-amber-400 hover:bg-amber-400 hover:text白'}`}
          onClick={() => handleCryptoChangeBusiness('BTC')}
        >
          BTC
        </button>
        <button
          className={`py-1 px-2 font-semibold tracking-wide border align-middle duration-500 text-sm text-center rounded ${selectedCryptoBusiness === 'USDC' ? 'bg-amber-400 text白' : 'bg-amber-400/5 text-amber-400 hover:bg-amber-400 hover:text白'}`}
          onClick={() => handleCryptoChangeBusiness('USDC')}
        >
          USDC
        </button>
      </div>
    </div>

    <p className="text-slate-400 text-sm mt-3">接受信用卡、借记卡、现金和加密货币支付<br />使用加密货币支付享受特价**</p>
  </div>

  <div className="p-6 bg-gray-50 dark:bg-slate-800">
    <ul className="list-none text-slate-400">
      <li className="font-semibold text-slate-900 dark:text白 text-sm uppercase">特点:</li>

<li className="flex items-center mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text白 me-1 font-semibold">2天展览楼层访问</span>
</li>
<li className="flex items-center mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text白 me-1 font-semibold">PWR2TP 社交资料和礼物</span>
</li>
<li className="flex items-center mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text白 me-1 font-semibold">现场任务和奖励</span>
</li>
<li className="flex items-center mt-2">
<FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text白 me-1 font-semibold">参加2个侧活动</span>
</li>
<li className="flex items中心 mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text白 me-1 font-semibold">行业会议</span>
</li>

<li className="flex items中心 mt-2 text-slate-400">
  <AiOutlineClose className="h-[18px] w-[18px] me-2" />
  <span>比赛参与</span>
  <span className="text-slate-500 text-sm ms-1">（黑客马拉松、艺术、交易竞技场）</span>
</li>

                        </ul>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
  <div className="p-6">
    <h5 className="text-2xl leading-normal font-semibold">钻石</h5>
    <p className="text-slate-400 mt-2">为巨头提供无限访问，与鲨鱼同游，与鲸鱼共猎</p>
    <div className="flex mt-4">
      <span className="text-lg font-semibold">
        {selectedCryptoDiamond === 'ETH' ? 'Ξ' :
          selectedCryptoDiamond === 'BTC' ? '₿' :
            selectedCryptoDiamond === 'USDC' || selectedCryptoDiamond === 'MXN' ? '$' : ''}
      </span>
      <span className="text-5xl font-semibold mb-0 ms-1">
        {selectedCryptoDiamond === 'ETH' ? (ethPrice ? (diamondPriceUSDC / ethPrice).toFixed(4) : '加载中...') :
          selectedCryptoDiamond === 'BTC' ? (btcPrice ? (diamondPriceUSDC / btcPrice).toFixed(6) : '加载中...') :
            selectedCryptoDiamond === 'USDC' ? (diamondPriceUSDC) : diamondPriceMXN}
      </span>
    </div>
    <p className="text-slate-400 uppercase text-xs">
      {selectedCryptoDiamond === 'ETH' ? 'ETH' :
        selectedCryptoDiamond === 'BTC' ? 'BTC' :
          selectedCryptoDiamond === 'USDC' ? 'USDC' : 'MXN'}
    </p>

    <div className="mt-6 flex items中心">
      <Link href="" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text中心 bg-amber-400/5 hover:bg-amber-400 rounded border-amber-400/10 hover:border-amber-400 text-amber-400 hover:text白">立即购买</Link>

      <div className="ml-4">
        <button
          className={`py-1 px-2 mr-2 font-semibold tracking-wide border align-middle duration-500 text-sm text中心 rounded ${selectedCryptoDiamond === 'MXN' ? 'bg-amber-400 text白' : 'bg-amber-400/5 text-amber-400 hover:bg-amber-400 hover:text白'}`}
          onClick={() => handleCryptoChangeDiamond('MXN')}
        >
          MXN
        </button>
        <button
          className={`py-1 px-2 mr-2 font-semibold tracking-wide border align-middle duration-500 text-sm text中心 rounded ${selectedCryptoDiamond === 'ETH' ? 'bg-amber-400 text白' : 'bg-amber-400/5 text-amber-400 hover:bg-amber-400 hover:text白'}`}
          onClick={() => handleCryptoChangeDiamond('ETH')}
        >
          ETH
        </button>
        <button
          className={`py-1 px-2 mr-2 font-semibold tracking-wide border align-middle duration-500 text-sm text中心 rounded ${selectedCryptoDiamond === 'BTC' ? 'bg-amber-400 text白' : 'bg-amber-400/5 text-amber-400 hover:bg-amber-400 hover:text白'}`}
          onClick={() => handleCryptoChangeDiamond('BTC')}
        >
          BTC
        </button>
        <button
          className={`py-1 px-2 font-semibold tracking-wide border align-middle duration-500 text-sm text中心 rounded ${selectedCryptoDiamond === 'USDC' ? 'bg-amber-400 text白' : 'bg-amber-400/5 text-amber-400 hover:bg-amber-400 hover:text白'}`}
          onClick={() => handleCryptoChangeDiamond('USDC')}
        >
          USDC
        </button>
      </div>
    </div>

    <p className="text-slate-400 text-sm mt-3">接受信用卡、借记卡、现金和加密货币支付<br />使用加密货币支付享受特价**</p>
  </div>

  <div className="p-6 bg-gray-50 dark:bg-slate-800">
    <ul className="list-none text-slate-400">
      <li className="font-semibold text-slate-900 dark:text白 text-sm uppercase">特点:</li>

<li className="flex items中心 mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text白 me-1 font-semibold">2天展览楼层访问</span>
</li>
<li className="flex items中心 mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text白 me-1 font-semibold">PWR2TP 社交资料和礼物</span>
</li>
<li className="flex items中心 mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text白 me-1 font-semibold">现场任务和奖励</span>
</li>
<li className="flex items中心 mt-2">
<FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text白 me-1 font-semibold">所有侧活动访问</span>
</li>
<li className="flex items中心 mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text白 me-1 font-semibold">行业会议</span>
</li>
<li className="flex items中心 mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text白 me-1 font-semibold">行业领袖VIP开幕和闭幕活动</span>
</li>
<li className="flex items中心 mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text白 me-1 font-semibold">商务会议的VIP私人房间</span>
</li>
<li className="flex items中心 mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text白 me-1 font-semibold">独家秘密活动</span>
</li>

<li className="flex items中心 mt-2">
<FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text白 me-1 font-semibold">
  以评审身份参加比赛（黑客马拉松、艺术、交易竞技场）</span>
</li>

                        </ul>
                    </div>
                </div>

                <div className="relative overflow-hidden rounded-md shadow dark:shadow-gray-800">
        <div className="p-6">
          <h5 className="text-2xl leading-normal font-semibold">黑客、艺术家、交易竞技场和人工智能交易</h5>
          <p className="text-slate-400 mt-2">为那些敢于获得荣耀并证明自己是第一的人</p>
          <div className="flex mt-4">
            <span className="text-lg font-semibold">Ξ</span>
            <span className="text-5xl font-semibold mb-0 ms-1">
              {selectedCategory === 'Hackers' || selectedCategory === 'Artist' ? '0.001' : selectedCategory === 'Traders' ? '0.005' : '0.025'}
            </span>
            <span className="text-lg font-semibold ms-2">
              / {selectedCategory === 'Hackers' || selectedCategory === 'Artist' ? (0.001 * ethPrice).toFixed(2) : selectedCategory === 'Traders' ? (0.005 * ethPrice).toFixed(2) : (0.025 * ethPrice).toFixed(2)} USDC
              / {selectedCategory === 'Hackers' || selectedCategory === 'Artist' ? (0.001 * ethPrice / btcPrice).toFixed(6) : selectedCategory === 'Traders' ? (0.005 * ethPrice / btcPrice).toFixed(6) : (0.025 * ethPrice / btcPrice).toFixed(6)} ₿
              / {selectedCategory === 'Hackers' || selectedCategory === 'Artist' ? (0.001 * ethPrice * 20).toFixed(2) : selectedCategory === 'Traders' ? (0.005 * ethPrice * 20).toFixed(2) : (0.025 * ethPrice * 20).toFixed(2)} MXN
            </span>
          </div>
          <Link href={`/${selectedCategory.toLowerCase()}info`}>
            <button className="py-2 px-5 mr-2 font-semibold tracking-wide border align-middle duration-500 text-base text-center rounded">更多信息</button>
          </Link>

          <div className="mt-6 flex items中心">
            <button
              className={`py-2 px-5 mr-2 font-semibold tracking-wide border align-middle duration-500 text-base text中心 rounded ${selectedCategory === 'Hackers' ? 'bg-amber-400 text白' : 'bg-amber-400/5 text-amber-400 hover:bg-amber-400 hover:text白'}`}
              onClick={() => setSelectedCategory('Hackers')}
            >
              黑客
            </button>
            <button
              className={`py-2 px-5 mr-2 font-semibold tracking-wide border align-middle duration-500 text-base text中心 rounded ${selectedCategory === 'Artist' ? 'bg-amber-400 text白' : 'bg-amber-400/5 text-amber-400 hover:bg-amber-400 hover:text白'}`}
              onClick={() => setSelectedCategory('Artist')}
            >
              艺术家
            </button>
            <button
              className={`py-2 px-5 mr-2 font-semibold tracking-wide border align-middle duration-500 text-base text中心 rounded ${selectedCategory === 'Traders' ? 'bg-amber-400 text白' : 'bg-amber-400/5 text-amber-400 hover:bg-amber-400 hover:text白'}`}
              onClick={() => setSelectedCategory('Traders')}
            >
              交易员
            </button>
            <button
              className={`py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text中心 rounded ${selectedCategory === 'AiTrading' ? 'bg-amber-400 text白' : 'bg-amber-400/5 text-amber-400 hover:bg-amber-400 hover:text白'}`}
              onClick={() => setSelectedCategory('AiTrading')}
            >
              人工智能交易
            </button>
      
    </div>
  </div>

  <div className="p-6 bg-gray-50 dark:bg-slate-800">
    <ul className="list-none text-slate-400">
    <li className="font-semibold text-slate-900 dark:text白 text-sm uppercase">特点:</li>

<li className="flex items中心 mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text白 me-1 font-semibold">2天展览楼层访问</span>
</li>
<li className="flex items中心 mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text白 me-1 font-semibold">PWR2TP 社交资料和礼物</span>
</li>
<li className="flex items中心 mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text白 me-1 font-semibold">现场任务和奖励</span>
</li>
<li className="flex items中心 mt-2">
<FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text白 me-1 font-semibold">所有侧活动访问</span>
</li>
<li className="flex items中心 mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text白 me-1 font-semibold">精选会议</span>
</li>
<li className="flex items中心 mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text白 me-1 font-semibold">配备专业工具的特别套件</span>
</li>
<li className="flex items中心 mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text白 me-1 font-semibold">OnChain POAP 收藏品</span>
</li>
<li className="flex items中心 mt-2">
  <FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text白 me-1 font-semibold">特别区域建设</span>
</li>

<li className="flex items中心 mt-2">
<FiCheckCircle className="text-green-600 h-[18px] w-[18px] me-2" />
  <span className="text-slate-900 dark:text白 me-1 font-semibold">
  参加比赛，赢取超过100K USD 的奖品</span>
</li>
                        </ul>
                    </div>
                    
                </div>
                
            </div>
            
        </>
    )
}
