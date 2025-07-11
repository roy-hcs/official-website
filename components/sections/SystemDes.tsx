import ContainerWrap from '../common/ContainerWrap';

export default function SystemDes() {
  return (
    <div className="w-full bg-white lg:mb-[240px]">
      <ContainerWrap>
        <div className="h-[58px] font-semibold text-5xl text-[#020f2c] text-center leading-none lg:text-[48px] text-[24px]">
          Integrated Systems Architecture
        </div>
        <div className="lg:w-[710px] h-[52px] font-normal lg:text-lg text-[#020f2c] text-center mx-auto my-6 mb-12 text-xs w-full lg:px-0 px-3 lg:leading-6 leading-normal">
          Explore how our technology infrastructure supports your brokerage
          operations with seamless integrations across platforms.
        </div>
        <div className="w-[146px] h-[52px] rounded-[14px] bg-[#020f2c] text-base font-semibold leading-[52px] text-white text-center mx-auto mb-6 cursor-pointer">
          Get A Demo
        </div>
        <div className="w-full max-w-[1076px] lg:h-[474px] h-auto bg-[url('/assets/Haame-平台链接图.png')] bg-no-repeat bg-center bg-contain mx-auto lg:w-[1076px] w-[94%] lg:h-[474px] h-0 lg:pt-0 pt-[44%]"></div>
      </ContainerWrap>
    </div>
  );
}
