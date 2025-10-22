export function SectionHeader(props: { title: string; subtitle: string }) {
  return (
    <div className="w-full">
      <h2 className="text-[#0A0A0A] lg:text-4xl text-3xl font-[700] leading-[40px] lg:w-[576px] w-full mx-auto text-center">
        {props.title}
      </h2>
      <h3 className="text-[#020F2C] lg:text-lg text-base font-[400] leading-[28px] mt-[20px] lg:w-[576px] w-full mx-auto text-center">
        {props.subtitle}
      </h3>
    </div>
  );
}
