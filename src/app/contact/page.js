"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { gsap } from 'gsap';
import ContactForm from '../components/contactform'; // 导入 ContactForm 组件

const Navbar = dynamic(() => import('../components/navbar'));
const Footer = dynamic(() => import('../components/footer'));

import { FiHexagon, FiPhone, FiMail, FiMapPin } from "../assets/icons/vander";

export default function Contact() {
  useEffect(() => {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  useEffect(() => {
    // 选择 SVG 元素
    const svgElement = document.querySelector('.animated-svg');

    // 创建动画时间线
    const tl = gsap.timeline({ repeat: -10, yoyo: true });

    // 添加动画到时间线
    tl.to(svgElement, {
      duration: 2,
      scale: 1,
      ease: "power1.inOut",
    })
    .to(svgElement, {
      duration: 2,
      opacity: 0.3,
      ease: "power1.inOut",
    })
    .to(svgElement, {
      duration: 2,
      scale: 1,
      ease: "power1.inOut",
    })
    .to(svgElement, {
      duration: 2,
      opacity: 1.8,
      ease: "power1.inOut",
    });

  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fluid relative mt-20">
        <div className="grid grid-cols-1">
          <div className="w-full leading-[0] border-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.4335489686764!2d-99.17716282771387!3d19.39366494192889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff718f4416e1%3A0x6e35698f0852629c!2sWorld%20Trade%20Center%20Ciudad%20de%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1716483570866!5m2!1ses-419!2smx"
              title="my-map"
              style={{ border: "0" }}
              className="w-full h-[500px]"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <section className="relative lg:py-24 py-16">
        <div className="container">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-7 md:col-span-6">
              <Image
                src="/images/contact.svg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt=""
                className="animated-svg"
              />
            </div>

            <div className="lg:col-span-5 md:col-span-6">
              <div className="lg:ms-5">
                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                  <h3 className="mb-6 text-2xl leading-normal font-semibold">
                    与我们交流！
                  </h3>
                  <ContactForm />
                  <div className="mt-4">
                    <Link href="https://tally.so/r/mD104p" legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer" className="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded block text-center">
                        艺术家表格
                      </a>
                    </Link>
                    <Link href="https://tally.so/r/waxd2E" legacyBehavior>
                      <a target="_blank" rel="noopener noreferrer" className="mt-4 bg-purple-500 text-white font-bold py-2 px-4 rounded block text-center">
                        社区表格
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container lg:mt-24 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-[30px]">
            <div className="text-center px-6">
              <div className="relative overflow-hidden text-transparent -m-3">
                <FiHexagon className="h-24 w-24 fill-amber-400/5 group-hover:fill-white/10 mx-auto" />
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-amber-400 rounded-xl group-hover:text-white duration-500 text-2xl flex align-middle justify-center items-center">
                  <FiMail />
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-lg font-semibold">电子邮件</h5>
                <p className="text-slate-400 mt-3">
                  所有的想法都欢迎
                </p>

                <div className="mt-5">
                  <Link href="mailto:contacto@dfb.mx" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
                      contacto@dfb.mx
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center px-6">
              <div className="relative overflow-hidden text-transparent -m-3">
                <FiHexagon className="h-24 w-24 fill-amber-400/5 group-hover:fill-white/10 mx-auto" />
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-amber-400 rounded-xl group-hover:text-white duration-500 text-2xl flex align-middle justify-center items-center">
                  <FiMapPin />
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="title h5 text-lg font-semibold">位置</h5>
                <p className="text-slate-400 mt-3">
                  墨西哥城，拿破仑大街 38 号 <br /> CDMX，墨西哥
                </p>

                <div className="mt-5">
                  <Link
                    href="https://maps.app.goo.gl/yo1StBahbJTmQMTu6"
                    legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer" className="video-play-icon read-more lightbox hover:text-amber-400">
                      查看谷歌地图
                    </a>
                  </Link>
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
