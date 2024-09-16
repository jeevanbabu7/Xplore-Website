import React from 'react';

const FloatingBlob = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="250" viewBox="-25 -25 250 250" className="animation-float bg-gradient-custom rounded-full blur-2xl shadow-custom absolute top-80 -right-2/4">
      <defs>
        <linearGradient id="lgrad" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" className="stop-color-[#8f6900]" />
          <stop offset="100%" className="stop-color-[#ff751a]" />
        </linearGradient>
      </defs>
      {/* <path d="M95.63109017538208 0.09548244976927833 C66.08482889207247 -3.1657949383844812 13.99757003169918 47.19803833510012 3.2027403633094877 74.89441243812195 C-3.8833732920695425 93.07530651101428 -0.9682782763773634 140.40065321958164 14.646195224531738 152.10305183337397 C51.32917136445008 179.59541711258524 179.2215520803413 169.54482799243038 196.28666023766772 126.9977602825852 C211.36084926882896 89.41449181062585 135.88026528303436 4.538133362918038 95.63109017538208 0.09548244976927833Z" stroke="none" fill="url(#lgrad)" /> */}
    </svg>
  );
};

export default FloatingBlob;
