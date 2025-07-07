"use client"
import Image from 'next/image';
import SmallInput from '../common/SmallInput';

interface MyFooterProps {
  onOpen?: () => void;
}

export default function MyFooter({ onOpen }: MyFooterProps) {
  return (
    <div className="w-full h-[930px] mx-auto bg-[url('/assets/页尾背景.png')] bg-white bg-no-repeat bg-[center_38px] bg-[length:100%] text-center">
      <div className="relative w-[1106px] mx-auto pt-[166px] max-lg:w-full max-lg:pt-12">
        <div className="w-[646px] h-[86px] text-[48px] font-semibold leading-none text-[#020f2c] text-left max-lg:w-full max-lg:text-lg max-lg:px-3 max-lg:box-border max-lg:leading-normal">
          Ready to transform your brokerage operations?
        </div>
        <div className="w-[534px] mt-12 mb-[82px] h-12 text-lg font-medium leading-6 text-[#020f2c] text-left max-lg:w-full max-lg:text-xs max-lg:px-3 max-lg:box-border max-lg:leading-normal max-lg:my-3">
          Our team will present the solution,demonstrate demo-cases, provide a commercial offer
        </div>
        <SmallInput onOpen={onOpen} />
        
        <div className="footer-info">
          <div className="flex mt-[88px] max-lg:block max-lg:mt-6 max-lg:px-3">
            {/* Footer Info Top Description */}
            <div className="flex-none w-[296px] max-lg:w-full">
              <div className="w-28 h-7 mb-3">
                <Image
                  src="/assets/haame-logo.png"
                  alt="Haame Logo"
                  width={112}
                  height={28}
                />
              </div>
              <p className="font-normal text-sm text-[#656b8a] leading-6 text-left">
                As a financial technology company headquartered in Hong Kong, Haame is committed to providing reliable and
                continuous CRM operation management system services to brokerages and exchanges around the world.
              </p>
            </div>
            
            {/* Solutions */}
            <div className="flex-1 text-left pl-[162px] max-lg:pl-0 max-lg:mt-6">
              <div className="font-bold text-sm text-[#0f172a] mb-[14px]">Solutions</div>
              <div className="font-normal text-sm text-[#656b8a] mb-4">Brokerages</div>
              <div className="font-normal text-sm text-[#656b8a] mb-4">Exchange</div>
              <div className="font-normal text-sm text-[#656b8a] mb-4">Asset Management</div>
            </div>
            
            {/* Products */}
            <div className="flex-1 text-left max-lg:mt-6">
              <div className="font-bold text-sm text-[#0f172a] mb-[14px]">Products</div>
              <div className="font-normal text-sm text-[#656b8a] mb-4">CRM</div>
              <div className="font-normal text-sm text-[#656b8a] mb-4">PAMM</div>
              <div className="font-normal text-sm text-[#656b8a] mb-4">CopyTrading</div>
            </div>
            
            {/* Links */}
            <div className="flex-1 text-left max-lg:mt-6">
              <div className="font-bold text-sm text-[#0f172a] mb-[14px]">Links</div>
              <div className="font-normal text-sm text-[#656b8a] mb-4">Insights</div>
              <div className="font-normal text-sm text-[#656b8a] mb-4">Event</div>
              <div className="font-normal text-sm text-[#656b8a] mb-4">About</div>
            </div>
          </div>
          
          {/* Footer Info Bottom */}
          <div className="flex justify-between items-end h-[41px] border-t border-[#f1f5f9] box-border mt-[90px] max-[750px]:block max-[750px]:pt-3">
            <div className="font-normal text-xs text-[#64748b]">
              Copyright © HAAME TECH LIMITED 2024. All Rights Reserved
            </div>
            <div className="mr-[84px] max-[750px]:mr-0 max-[750px]:mt-3 max-[750px]:text-center">
              <svg className="inline-block ml-6 cursor-pointer first:ml-0" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_0_737" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                  <path d="M0 0H20V20H0V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_0_737)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.99998 0.416993C7.62598 0.416993 5.32998 1.25899 3.52198 2.78899C1.71614 4.31522 0.514078 6.43566 0.131977 8.76899C-0.247566 11.0999 0.21884 13.4898 1.44698 15.507C2.67884 17.5296 4.58905 19.0489 6.83698 19.794C7.33398 19.886 7.52098 19.578 7.52098 19.317C7.52098 19.055 7.51098 18.296 7.50798 17.466C4.72598 18.066 4.13798 16.292 4.13798 16.292C3.68498 15.139 3.02798 14.836 3.02798 14.836C2.12098 14.221 3.09698 14.232 3.09698 14.232C4.10198 14.303 4.62998 15.258 4.62998 15.258C5.52098 16.778 6.96998 16.338 7.53998 16.081C7.62898 15.437 7.88898 14.999 8.17498 14.751C5.95298 14.501 3.61798 13.648 3.61798 9.83799C3.60435 8.84851 3.97335 7.89198 4.64798 7.16799C4.54598 6.91799 4.20298 5.90799 4.74598 4.53399C4.74598 4.53399 5.58598 4.26799 7.49598 5.55399C9.13555 5.10821 10.8644 5.10821 12.504 5.55399C14.414 4.26799 15.251 4.53399 15.251 4.53399C15.796 5.90399 15.453 6.91499 15.351 7.16899C16.0273 7.89282 16.3968 8.85051 16.382 9.84099C16.382 13.659 14.042 14.501 11.817 14.746C12.174 15.056 12.494 15.66 12.494 16.588C12.494 17.918 12.482 18.988 12.482 19.317C12.482 19.582 12.662 19.891 13.17 19.794C15.4181 19.0487 17.3284 17.529 18.56 15.506C19.7883 13.4881 20.2544 11.0975 19.874 8.76599C19.4915 6.43285 18.2891 4.31275 16.483 2.78699C14.671 1.25598 12.3752 0.416324 10.003 0.416993H9.99998Z"
                    fill="#656B8A"
                  />
                  <path
                    d="M3.78697 14.694C3.76497 14.743 3.68597 14.758 3.62097 14.724C3.55697 14.689 3.50897 14.624 3.53197 14.574C3.55497 14.522 3.63297 14.509 3.69797 14.544C3.76197 14.578 3.81197 14.644 3.78697 14.694ZM4.19297 15.143C4.15863 15.1604 4.1193 15.1654 4.08172 15.157C4.04414 15.1486 4.01064 15.1274 3.98697 15.097C3.92297 15.027 3.90997 14.932 3.95897 14.889C4.00897 14.846 4.09897 14.866 4.16297 14.935C4.22797 15.005 4.24297 15.1 4.19297 15.143ZM4.58697 15.714C4.52597 15.757 4.42097 15.714 4.36297 15.629C4.33916 15.6057 4.3229 15.5758 4.3163 15.5432C4.30971 15.5106 4.31307 15.4767 4.32597 15.446C4.3346 15.4257 4.34717 15.4074 4.36297 15.392C4.42497 15.35 4.52897 15.392 4.58697 15.476C4.64497 15.559 4.64697 15.671 4.58697 15.714ZM5.12197 16.267C5.06697 16.328 4.95597 16.312 4.86497 16.23C4.77397 16.147 4.75197 16.035 4.80697 15.976C4.86197 15.916 4.97297 15.933 5.06697 16.014C5.16097 16.094 5.17997 16.208 5.12197 16.267ZM5.87197 16.59C5.84697 16.668 5.73397 16.702 5.62197 16.67C5.50897 16.636 5.43497 16.544 5.45597 16.465C5.47797 16.386 5.59197 16.35 5.70597 16.386C5.81997 16.422 5.89297 16.51 5.87197 16.59ZM6.68997 16.646C6.68997 16.726 6.59697 16.796 6.47797 16.797C6.35797 16.799 6.26097 16.733 6.26097 16.652C6.26097 16.572 6.35397 16.502 6.47297 16.501C6.59297 16.499 6.68997 16.564 6.68997 16.646ZM7.45197 16.52C7.46597 16.6 7.38397 16.684 7.26397 16.704C7.14497 16.724 7.04097 16.676 7.02597 16.597C7.01097 16.517 7.09697 16.432 7.21297 16.411C7.32897 16.389 7.43697 16.439 7.45197 16.519V16.52Z"
                    fill="#656B8A"
                  />
                </g>
              </svg>
              <svg className="inline-block ml-6 cursor-pointer" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_0_738" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x="0" y="0" width="21" height="20">
                  <path d="M0.5 0H20.5V20H0.5V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_0_738)">
                  <path
                    d="M6.792 18.125C14.337 18.125 18.465 11.872 18.465 6.45196C18.465 6.27596 18.461 6.09596 18.453 5.91996C19.2562 5.33934 19.9494 4.62007 20.5 3.79596C19.7522 4.12887 18.9581 4.34634 18.145 4.44096C19.0012 3.92753 19.6422 3.121 19.949 2.17096C19.1435 2.64844 18.2626 2.98525 17.344 3.16696C16.7252 2.50908 15.9068 2.07347 15.0155 1.92753C14.1242 1.78158 13.2097 1.93344 12.4134 2.35961C11.617 2.78577 10.9834 3.46248 10.6104 4.28504C10.2374 5.1076 10.1459 6.03015 10.35 6.90996C8.71904 6.82818 7.12348 6.40456 5.66675 5.66655C4.21003 4.92854 2.92467 3.89262 1.894 2.62596C1.3707 3.529 1.21074 4.59737 1.44663 5.61407C1.68251 6.63078 2.29654 7.51958 3.164 8.09996C2.51215 8.07935 1.87457 7.90385 1.304 7.58796V7.63896C1.30341 8.58689 1.63114 9.50577 2.23147 10.2394C2.83181 10.973 3.66769 11.476 4.597 11.663C3.99354 11.828 3.3602 11.8519 2.746 11.733C3.00822 12.5479 3.51831 13.2607 4.20509 13.7718C4.89187 14.2829 5.72108 14.5668 6.577 14.584C5.72555 15.2528 4.75049 15.7471 3.70769 16.0385C2.66489 16.3298 1.57484 16.4126 0.5 16.282C2.37742 17.4865 4.5614 18.1262 6.792 18.125Z"
                    fill="#656B8A"
                  />
                </g>
              </svg>
              <svg className="inline-block ml-6 cursor-pointer" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.5825 5.169C19.3517 4.29817 18.6717 3.619 17.8 3.3865C16.35 2.9165 10 2.9165 10 2.9165C10 2.9165 3.65 2.9165 2.2 3.3865C1.3275 3.61984 0.6475 4.29984 0.416667 5.169C0.000833323 6.74734 0 9.99984 0 9.99984C0 9.99984 0 13.2523 0.416667 14.8307C0.6475 15.7015 1.3275 16.3807 2.19917 16.6132C3.65 17.0832 10 17.0832 10 17.0832C10 17.0832 16.35 17.0832 17.8 16.6132C18.6708 16.3807 19.35 15.7015 19.5825 14.8307C19.9992 13.2523 19.9992 9.99984 19.9992 9.99984C19.9992 9.99984 19.9992 6.74734 19.5825 5.169ZM8.125 12.5015V7.5015L13.125 10.0015L8.125 12.5015Z"
                  fill="#656B8A"
                />
              </svg>
              <svg className="inline-block ml-6 cursor-pointer" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z"
                  fill="#656B8A"
                />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-0 left-[calc(646px+36px)] w-[462px] h-[406px] bg-[url('/assets/logo-立体效果-1.png')] bg-no-repeat bg-center bg-cover max-lg:hidden"></div>
        <div className="absolute top-[38px] left-[646px] w-[90px] h-[120px] bg-[url('/assets/logo-立体效果-2.png')] bg-no-repeat bg-center bg-cover max-lg:hidden"></div>
        <div className="absolute top-[350px] left-[532px] w-[64px] h-[98px] bg-[url('/assets/logo-立体效果-3.png')] bg-no-repeat bg-center bg-cover max-lg:hidden"></div>
        <div className="absolute top-[466px] left-[calc(418px+496px)] w-[64px] h-[56px] bg-[url('/assets/logo-立体效果-4.png')] bg-no-repeat bg-center bg-cover max-lg:hidden"></div>
        <div className="absolute top-[250px] left-[calc(532px+620px)] w-[44px] h-[72px] bg-[url('/assets/logo-立体效果-5.png')] bg-no-repeat bg-center bg-cover max-lg:hidden"></div>
      </div>
    </div>
  );
}
