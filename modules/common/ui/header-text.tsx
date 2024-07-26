/** @format */

import React from "react";

interface CustomCSSProperties extends React.CSSProperties {
  "--rotation-duration"?: string;
  "--rotation-direction"?: string;
}

const HeaderText: React.FC = () => {
  return (
    <div className='loader1 flex -space-x-3 items-center'>
      <svg height='0' width='0' viewBox='0 0 64 64' className='absolute'>
        <defs className='s-xJBuHA073rTt' xmlns='http://www.w3.org/2000/svg'>
          <linearGradient
            className='s-xJBuHA073rTt'
            gradientUnits='userSpaceOnUse'
            y2='2'
            x2='0'
            y1='62'
            x1='0'
            id='b'>
            <stop className='s-xJBuHA073rTt' stopColor='#973BED'></stop>
            <stop
              className='s-xJBuHA073rTt'
              stopColor='#007CFF'
              offset='1'></stop>
          </linearGradient>
          <linearGradient
            className='s-xJBuHA073rTt'
            gradientUnits='userSpaceOnUse'
            y2='0'
            x2='0'
            y1='64'
            x1='0'
            id='c'>
            <stop className='s-xJBuHA073rTt' stopColor='#FFC800'></stop>
            <stop className='s-xJBuHA073rTt' stopColor='#F0F' offset='1'></stop>
            <animateTransform
              repeatCount='indefinite'
              keySplines='.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1;.42,0,.58,1'
              keyTimes='0; 0.125; 0.25; 0.375; 0.5; 0.625; 0.75; 0.875; 1'
              dur='8s'
              values='0 32 32;-270 32 32;-270 32 32;-540 32 32;-540 32 32;-810 32 32;-810 32 32;-1080 32 32;-1080 32 32'
              type='rotate'
              attributeName='gradientTransform'></animateTransform>
          </linearGradient>
          <linearGradient
            className='s-xJBuHA073rTt'
            gradientUnits='userSpaceOnUse'
            y2='2'
            x2='0'
            y1='62'
            x1='0'
            id='d'>
            <stop className='s-xJBuHA073rTt' stopColor='#00E0ED'></stop>
            <stop
              className='s-xJBuHA073rTt'
              stopColor='#00DA72'
              offset='1'></stop>
          </linearGradient>
        </defs>
      </svg>

      {/* Letter T */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 64 64'
        height='44'
        width='44'
        className='inline-block'>
        <path
          strokeLinejoin='round'
          strokeLinecap='round'
          strokeWidth='4'
          stroke='url(#b)'
          d='M 16 8 H 48 V 16 H 40 V 56 H 24 V 16 H 16 Z'
          className='dash'
          id='t'
          pathLength='360'></path>
      </svg>

      <div className='w-2'></div>

      {/* Letter A */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 64 64'
        height='44'
        width='44'
        className='inline-block'
        style={
          {
            "--rotation-duration": "0ms",
            "--rotation-direction": "normal",
          } as CustomCSSProperties
        }>
        <path
          strokeLinejoin='round'
          strokeLinecap='round'
          strokeWidth='4'
          stroke='url(#d)'
          d='M 32 8 L 16 56 H 24 L 28 44 H 36 L 40 56 H 48 L 32 8 Z M 28 36 L 36 36 L 32 24 Z'
          className='dash'
          id='a'
          pathLength='360'></path>
      </svg>
    </div>
  );
};

export default HeaderText;
