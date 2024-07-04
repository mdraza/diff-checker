import { useState } from "react";
import { Link } from "react-scroll";
import beautify from "js-beautify";

const TextDiffChecker = () => {
  const [minifiedCss, setMinifiedCss] = useState("");
  // const [unminifiedCss, setUnminifiedCss] = useState("");

  const handleUnminify = () => {
    const beautifiedCss = beautify.css(minifiedCss);
    setMinifiedCss(beautifiedCss);
  };

  return (
    <div id="top">
      <div className="w-100 flex h-[77vh] md:m-3 md:mt-5 md:space-x-3 space-y-1 md:space-y-0 flex-col md:flex-row">
        <div className="flex-1 rounded-md md:mb-0 mb-[20px] md:mx-auto m-2 flex justify-center">
          <textarea
            className="w-[100%] md:w-[60%] h-[100%] text-[18px] p-2 dark:bg-[#2b2b2b] dark:text-white rounded-md border-[2px] border-slate-300 dark:border-[#464646] outline-none focus-visible:border-[#150332] dark:focus-visible:border-slate-300"
            placeholder="Paste your minified css here..."
            value={minifiedCss}
            onChange={(e) => setMinifiedCss(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-center md:mt-[18px] mt-[0px]">
        <Link
          to="result"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className="bg-[#150332] hover:bg-[#000] dark:hover:bg-[#333] dark:transition-all transition-all rounded text-white text-[16px] px-[24px] py-[12px] mb-6 md:mb-0 mt-3  dark:text-white dark:bg-[#2b2b2b]  cursor-pointer"
          onClick={handleUnminify}
        >
          Unminify CSS
        </Link>
      </div>
    </div>
  );
};

export default TextDiffChecker;
