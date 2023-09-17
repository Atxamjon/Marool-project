import { arrowRight, hero1, hero2, logo } from "@public";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const Hero = () => {
  return (
    <section className="hero bg-bg-hero pt-8 pb-16">
      <div className="container mx-auto flex justify-center">
        <div className="">
          <Image src={hero1} alt="Hero" />
          <div className="flex justify-between items-center pt-4">
            <p className="text-color-first">Уход для лица</p>
            <Link href="/products">
              <Image src={arrowRight} alt="Arrow right" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center px-12">
          <Image src={logo} alt="Logo" width={260} height={40} />
          <p className="mb-10 mt-8">
            Натуральная косметика для бережного ухода за кожей
          </p>
          <button className="px-7 py-4 border rounded-sm border-color-second">
            Подробнее
          </button>
        </div>
        <div className="">
          <Image src={hero2} alt="Hero" />
          <div className="flex justify-between items-center pt-4">
            <p className="text-color-first">Уход для тела</p>
            <Link href="/products">
              <Image src={arrowRight} alt="Arrow right" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
