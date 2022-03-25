import { memo } from "react";
import NewsLetterForm from "./NewsLetterForm";
import { SOCIALS } from "../../constants/routes/homeMenu";

const firstCols = [
  {
    link: "",
    label: "The Game",
  },
  {
    link: "",
    label: "Spend Curio",
  },
  {
    link: "",
    label: "Team",
  },
  {
    link: "",
    label: "Roadmap",
  },
];

const secondCols = [
  {
    link: "",
    label: "FAQ",
  },
  {
    link: "",
    label: "Blog",
  },
  {
    link: "",
    label: "Terms of Use",
  },
  {
    link: "",
    label: "Privacy Policy",
  },
  {
    link: "",
    label: "Contact Us",
  },
];

const DesktopFooter = () => {
  return (
    <div className="hidden lg:block w-full bg-fuchsia-900 py-12 px-24">
      <div className="flex flex-row justify-center gap-8">
        <div className="w-72 flex flex-col items-end pr-8 border-r-2 border-white border-solid">
          {firstCols.map((item, index) => (
            <a key={index} className="text-white cursor-pointer">
              {item.label}
            </a>
          ))}
        </div>
        <div className="w-72 flex flex-col items-end pr-8 border-r-2 border-white border-solid">
          {secondCols.map((item, index) => (
            <a key={index} className="text-white cursor-pointer">
              {item.label}
            </a>
          ))}
        </div>
        <div className="w-96">
          <NewsLetterForm />
          <div className="flex flex-row flex-wrap gap-2 mt-2">
            {SOCIALS.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="w-12 mt-3 flex items-center justify-center"
              >
                <div className="w-12 h-12 rounded-[24px] bg-teal-400 flex items-center justify-center">
                  <item.icon className="w-8 h-8" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="text-slate-300 mt-8 text-center">
        Copyright &copy; 2021, Hedgie Inc. All rights reserved.
      </p>
    </div>
  );
};

export default memo(DesktopFooter);
