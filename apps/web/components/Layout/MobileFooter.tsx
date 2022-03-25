import { memo } from "react";
import NewsLetterForm from "./NewsLetterForm";

const MobileFooter = () => {
  return (
    <div className="lg:hidden w-full bg-fuchsia-900 py-12 px-8">
      <NewsLetterForm />
      <p className="text-slate-300 mt-4 text-center">
        Copyright &copy; 2021, Hedgie Inc. All rights reserved.
      </p>
    </div>
  );
};

export default memo(MobileFooter);
