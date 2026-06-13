import Image from "next/image";
import React from "react";

const WelcomeBanner = () => {
  return (
    <div className="flex items-center gap-5 rounded-xl p-4 bg-secondary">
      <Image
        src={"/bannerImage.jpg"}
        width={100}
        height={100}
        alt="banner image"
        className="rounded-full lg:w-25 lg:h-25 w-20 h-20  object-cover bg-transparent"
      />
      <div>
        <h2 className="font-bold text-[20px] lg:text-[30px]">Welcome To <span className="text-primary">LearnBridge</span> Portal</h2>
        <p className="lg:text-lg text-sm text-muted-foreground">Explore, Learn and Build All Real Life Projects</p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
