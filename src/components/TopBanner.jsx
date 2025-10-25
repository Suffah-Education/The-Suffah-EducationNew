import React from "react";

const TopBanner = () => {
  return (
    <div
      className="w-full fixed top-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex justify-center items-center font-semibold h-12 sm:h-14 md:h-16 px-4 z-50 shadow-md"
      style={{
        fontSize: "clamp(14px, 2.5vw, 28px)", // auto-adjusts font size
        lineHeight: "1.2",
        textAlign: "center",
        whiteSpace: "nowrap", // keeps it in one line
         transform: "translateY(-15px)",
      }}
    >
      🌟 تم میں سب سے بہتر وہ ہے جو قرآن کو سیکھے اور سیکھاۓ 🌟
    </div>
  );
};

export default TopBanner;
