import svgPaths from "./imports/svg-4clbyaz01u";
import img553366211178513951475546268021866254933006617N1 from "figma:asset/67b326bf20402a3a58b4da040aa11f0a36359f64.png";

// Constants
const BRAND_COLOR = '#41AFEB';
const BACKGROUND_COLOR = '#5AE4DB';

const TEXT_SHADOW_OUTLINE = `
  -3px -3px 0 ${BRAND_COLOR},
  3px -3px 0 ${BRAND_COLOR},
  -3px 3px 0 ${BRAND_COLOR},
  3px 3px 0 ${BRAND_COLOR},
  -3px 0 0 ${BRAND_COLOR},
  3px 0 0 ${BRAND_COLOR},
  0 -3px 0 ${BRAND_COLOR},
  0 3px 0 ${BRAND_COLOR},
  -2px -2px 0 ${BRAND_COLOR},
  2px -2px 0 ${BRAND_COLOR},
  -2px 2px 0 ${BRAND_COLOR},
  2px 2px 0 ${BRAND_COLOR},
  0 0 10px rgba(65, 175, 235, 0.5)
`;

const SOCIAL_LINKS = [
  {
    name: 'Discord',
    url: 'https://discord.gg/PxWfYRVcWV',
    ariaLabel: 'Join our Discord community',
    icon: HugeiconsDiscord
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/bearth.earth/',
    ariaLabel: 'Follow us on Instagram',
    icon: IconParkOutlineInstagram
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/Bearth_earth',
    ariaLabel: 'Follow us on X (formerly Twitter)',
    icon: XIcon
  }
];

function BearthLogotype() {
  return (
    <div className="w-full max-w-[883px] aspect-[883/259]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 883 259">
        <g clipPath="url(#clip0_3_68)" id="Bearth Logotype">
          <path d={svgPaths.p107ccb00} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p212afe00} fill={`var(--fill-0, ${BRAND_COLOR})`} id="Vector_2" />
          <g id="Group">
            <path d={svgPaths.p2fd4bf00} fill="var(--fill-0, white)" id="Vector_3" />
            <path d={svgPaths.p233bc740} fill="var(--fill-0, white)" id="Vector_4" />
            <path d={svgPaths.p29b76380} fill="var(--fill-0, white)" id="Vector_5" />
            <path d={svgPaths.p197a5700} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p1c715680} fill="var(--fill-0, white)" id="Vector_7" />
            <path d={svgPaths.pdb72f00} fill="var(--fill-0, white)" id="Vector_8" />
            <path d={svgPaths.p36058300} fill="var(--fill-0, white)" id="Vector_9" />
            <path d={svgPaths.p1c71b980} fill="var(--fill-0, white)" id="Vector_10" />
            <path d={svgPaths.p14c5d200} fill="var(--fill-0, white)" id="Vector_11" />
            <path d={svgPaths.pe459a00} fill="var(--fill-0, white)" id="Vector_12" />
            <g id="Vector_13"></g>
            <path d={svgPaths.p29ea9b00} fill="var(--fill-0, white)" id="Vector_14" />
            <path d={svgPaths.pb0c2200} fill="var(--fill-0, white)" id="Vector_15" />
            <path d={svgPaths.p2c734f00} fill="var(--fill-0, white)" id="Vector_16" />
            <path d={svgPaths.p2b34e770} fill="var(--fill-0, white)" id="Vector_17" />
            <path d={svgPaths.p19318280} fill="var(--fill-0, white)" id="Vector_18" />
            <path d={svgPaths.pe29b080} fill="var(--fill-0, white)" id="Vector_19" />
            <path d={svgPaths.p3e8bbe00} fill="var(--fill-0, white)" id="Vector_20" />
            <path d={svgPaths.p34c59f70} fill="var(--fill-0, white)" id="Vector_21" />
            <path d={svgPaths.p997c400} fill="var(--fill-0, white)" id="Vector_22" />
            <path d={svgPaths.pea3c380} fill="var(--fill-0, white)" id="Vector_23" />
            <path d={svgPaths.p3e2b9300} fill="var(--fill-0, white)" id="Vector_24" />
            <path d={svgPaths.p2013bc00} fill="var(--fill-0, white)" id="Vector_25" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_3_68">
            <rect fill="white" height="259" width="883" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function HugeiconsDiscord() {
  return (
    <div className="relative shrink-0 w-[60px] h-[60px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="hugeicons:discord">
          <g id="Vector">
            <path d={svgPaths.p111ba080} fill={`var(--fill-0, ${BRAND_COLOR})`} />
            <path d={svgPaths.p2f0a4200} fill={`var(--fill-0, ${BRAND_COLOR})`} />
            <path d={svgPaths.pe11780} fill={`var(--fill-0, ${BRAND_COLOR})`} />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconParkOutlineInstagram() {
  return (
    <div className="relative shrink-0 w-[60px] h-[60px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60 60">
        <g id="icon-park-outline:instagram">
          <g id="Vector">
            <path d={svgPaths.p13510780} fill={`var(--fill-0, ${BRAND_COLOR})`} />
            <path d={svgPaths.pe39cd80} fill={`var(--fill-0, ${BRAND_COLOR})`} />
          </g>
          <path d={svgPaths.p11879a00} fill={`var(--fill-0, ${BRAND_COLOR})`} id="Vector_2" stroke={`var(--stroke-0, ${BRAND_COLOR})`} strokeWidth="5" />
        </g>
      </svg>
    </div>
  );
}

function XIcon() {
  return (
    <div className="relative shrink-0 w-[60px] h-[60px] -ml-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 60 60">
        <path d="M35.5 26.25L47.25 12.5H44.5L34.25 24.5L26 12.5H15L27.25 31.75L15 46H17.75L28.5 33.5L37 46H48L35.5 26.25ZM30 32L28.75 30.25L18.75 14.5H24.75L32.75 27.25L34 29L44.25 44H38.25L30 32Z" fill={BRAND_COLOR} stroke={BRAND_COLOR} strokeWidth="2.5" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function BearImage({ position }: { position: 'left' | 'right' }) {
  const altText = position === 'left' ? 'Brown bear mascot' : 'White bear mascot';
  
  return (
    <div className={`absolute w-[90px] h-[63px] md:w-[140px] md:h-[97px] lg:w-[180px] lg:h-[125px] ${position === 'left' ? 'left-[2%]' : 'right-[2%]'} bottom-[-30px] md:bottom-[-45px] lg:bottom-[-60px]`}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img 
          alt={altText}
          className={`absolute h-[434.78%] max-w-none top-[-160%] w-[288.94%] ${position === 'left' ? 'left-0' : 'left-[-188.94%]'}`}
          src={img553366211178513951475546268021866254933006617N1} 
        />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: BACKGROUND_COLOR }}>
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source src="https://bearth.earth/static/media/ComingSoonBG.webm" type="video/webm" />
      </video>
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-8 md:py-0 w-full max-w-[1200px]">
        {/* Logo with Bears */}
        <div className="relative w-full max-w-[450px] md:max-w-[600px] lg:max-w-[883px] mb-6 md:mb-8">
          <BearthLogotype />
          {/* Left Bear */}
          <BearImage position="left" />
          {/* Right Bear */}
          <BearImage position="right" />
        </div>
        
        {/* Coming Soon Text */}
        <h1 
          className="text-white text-[28px] md:text-[40px] mb-8 md:mb-12 font-['Istok_Web'] tracking-wide"
          style={{ textShadow: TEXT_SHADOW_OUTLINE }}
        >
          COMING SOON
        </h1>
        
        {/* Social Media Card */}
        <div className="bg-white box-border flex flex-col items-center px-[24px] md:px-[32px] py-[12px] md:py-[16px] rounded-[10px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)]">
          {/* Social Icons */}
          <div className="flex items-center mb-2 gap-[15px]">
            {SOCIAL_LINKS.map((link) => {
              const IconComponent = link.icon;
              return (
                <a 
                  key={link.name}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="transition-opacity hover:opacity-70"
                  aria-label={link.ariaLabel}
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
          
          {/* Follow Text */}
          <p className="font-['Istok_Web'] text-[16px] md:text-[20px] text-center whitespace-nowrap" style={{ color: BRAND_COLOR }}>
            Follow us for latest update
          </p>
        </div>
      </div>
    </div>
  );
}
