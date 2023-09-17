import React from "react";
import Image from "next/image";
import { logo, fecebook} from "@public";
const Footer = () => {
  return (
    <footer className="content-center bg-orange-50 bg-cover mt-109">
      <div className="container mx-auto">
        <div>
          <div className=" flex justify-between mb-8">
            <ul className="flex gap-10 mt-8">
            <Image src={logo} alt="Logo" />
              <li>Каталог</li>
              <li>О нас</li>
              <li>Магазины</li>
              <li>Контакты</li>
            </ul>
            <ul className="flex gap-10 mt-8">
              <Image src={fecebook} alt="fecebook"/>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
          <hr />
          <ul className=" flex justify-between pb-3 mt-3 content-center">
            <li>Maroon © 2020 Все права защищены</li>
            <li>Политика конфиденциальности</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
