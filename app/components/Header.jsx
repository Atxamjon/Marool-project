  import Image from "next/image";
import Link from "next/link";
import React from "react";

import { logo, cart, human } from "@public";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white">
      <div className="container mx-auto flex justify-between py-10">
        <Link href="/">
          <Image src={logo} alt="Logo" />
        </Link>
        <nav className="flex gap-9 text-color-first">
          <Link href="/products">Каталог</Link>
          <Link href="/about">О нас</Link>
          <Link href="/contact">Контакты</Link>
          <Link href="/profile">
            <Image src={human} alt="Human" />
          </Link>
          <Link href="/cart">
            <Image src={cart} alt="Cart" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
