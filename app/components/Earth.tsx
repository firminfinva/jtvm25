"use client";

import Image from "next/image";

const Earth = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
      <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
        {/* Rotating Earth Image - Using NASA Blue Marble */}
        <div className="absolute inset-0 rounded-full overflow-hidden shadow-[0_0_80px_rgba(0,86,214,0.6)]">
          <div className="w-[200%] h-full animate-spin-slow flex" style={{ height: '100%', width: '200%' }}>
            <div
              className="h-full"
              style={{
                width: '50%',
                height: '100%',
                backgroundImage: 'url(https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73909/world.topo.bathy.200412.3x5400x2700.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                filter: 'brightness(1.1) contrast(1.1)',
                flexShrink: 0
              }}
            />
            {/* Duplicate image for seamless loop */}
            <div
              className="h-full"
              style={{
                width: '50%',
                height: '100%',
                backgroundImage: 'url(https://eoimages.gsfc.nasa.gov/images/imagerecords/73000/73909/world.topo.bathy.200412.3x5400x2700.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                filter: 'brightness(1.1) contrast(1.1)',
                flexShrink: 0
              }}
            />
          </div>
        </div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0056D6]/20 to-[#1A3B70]/20 blur-3xl animate-pulse -z-10"></div>
        <div className="absolute inset-[-20px] rounded-full bg-gradient-to-br from-[#0056D6]/10 to-transparent blur-2xl -z-10"></div>
      </div>
    </div>
  );
};

export default Earth;

