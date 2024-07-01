import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-[3rem] justify-center gap-4 bg-black">
      <p className="text-white font-mono">You can also find us on</p>
      <div className="flex gap-6">
        <Link href="https://www.linkedin.com/company/lumox-games/">
          <img
            src="/images/homepage/footer/linkedin.png"
            alt="Linkedin"
            height={30}
            width={30}
          />
        </Link>
        <Link href="https://medium.com/@LumoxStudio">
          <img
            src="/images/homepage/footer/social.png"
            alt="Medium"
            height={30}
            width={30}
          />
        </Link>
        <Link href="https://t.me/LumoxStudiosNews">
          <img
            src="/images/homepage/footer/telegram.png"
            alt="Telegram"
            height={30}
            width={30}
          />
        </Link>
        <Link href="https://x.com/LumoxStudio">
          <img
            src="/images/homepage/footer/twitter (2).png"
            alt="Twitter"
            height={30}
            width={30}
          />
        </Link>
        <Link href="https://www.instagram.com/lumoxstudio_/">
          <img
            src="/images/homepage/footer/instagram.png"
            alt="Instagram"
            height={30}
            width={30}
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
