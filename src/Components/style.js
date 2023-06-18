const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2:
    "font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph:
    "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "md:px-16 px-5",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  specialButton:
    "bg-brand-color-1 mt-2 mb-6 mx-auto w-40 bg-transparent py-[0.8rem] px-[1.7rem] relative overflow-hidden pointer duration-500 font-normal border border-brand-color-1 text-lg uppercase z-[1] before:content-[''] before:block before:w-[50px] before:h-[50px] before:absolute before:rounded-[50%] before:z-[-1] before:bg-brand-color-1 before:duration-1000 before:ease-in before:top-[-1rem] before:left-[-1rem] after:content-[''] after:block after:w-[50px] after:h-[50px] after:absolute after:rounded-[50%] after:z-[-1] after:bg-brand-color-1 after:duration-1000 after:ease-in after:left-buttonSpecialCalc",

  card: "shadow-xl flex flex-col text-center text-xl w-full p-6 space-y-6 rounded-lg bg-brand-color-1",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
