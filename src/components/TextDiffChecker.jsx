import { useState } from "react";
import { diffChars } from "diff";
import { GrClear } from "react-icons/gr";
import { Link } from "react-scroll";

const TextDiffChecker = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [diff, setDiff] = useState([]);

  const handleTextChange = (event, setText) => {
    setText(event.target.value);
  };

  const handleCheckDiff = () => {
    if (text1 == "" || text2 == "") return;
    const diff = diffChars(text1, text2);
    setDiff(diff);
  };

  const handleClearText1 = () => {
    setText1("");
  };
  const handleClearText2 = () => {
    setText2("");
  };

  const handleClearAll = () => {
    setText1("");
    setText2("");
    setDiff([]);
  };

  return (
    <div id="top">
      <div className="w-100 flex h-[70vh] m-1 md:m-3 md:space-x-3 space-y-1 md:space-y-0 flex-col md:flex-row">
        <div className="flex-1 rounded-md md:mb-0 mb-8">
          <textarea
            className="w-[100%] h-[100%] p-2 dark:bg-[#0f172a] dark:text-white rounded-md border-[3px] border-slate-300 dark:border-slate-400 outline-none focus-visible:border-[#5002d0] dark:focus-visible:border-slate-300"
            placeholder="Old content"
            value={text1}
            onChange={(e) => handleTextChange(e, setText1)}
          />
          <div className="flex justify-between">
            <p className="text-sm text-slate-500 dark:text-slate-300">
              Word count: <b>{text1.length}</b>
            </p>
            <button
              className="text-2xl text-slate-600 dark:text-slate-200"
              onClick={handleClearText1}
            >
              <GrClear />
            </button>
          </div>
        </div>
        <div className="flex-1 rounded-md md:mb-0 mb-8">
          <textarea
            className="w-[100%] h-[100%] p-2 rounded-md border-[3px] dark:bg-[#0f172a] dark:text-white border-slate-300 dark:border-slate-400 outline-none focus-visible:border-[#5002d0] dark:focus-visible:border-slate-300"
            placeholder="New content"
            value={text2}
            onChange={(e) => handleTextChange(e, setText2)}
          />
          <div className="flex justify-between">
            <p className="text-sm text-slate-500 dark:text-slate-300">
              Word count: <b>{text2.length}</b>
            </p>
            <button
              className="text-2xl text-slate-600 dark:text-slate-200"
              onClick={handleClearText2}
            >
              <GrClear />
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[35px] md:mt-[50px]">
        <Link
          // to={text1.length > 5 && text2.length > 5 && "result"}
          to="result"
          spy={true}
          smooth={true}
          offset={-10}
          duration={500}
          className="bg-[#4608ad] rounded text-white px-6 py-[14px] md:px-8 md:py-3 mb-6 md:mb-0 dark:bg-[#0f172a] dark:text-white dark:border-2 cursor-pointer"
          onClick={handleCheckDiff}
        >
          Compute Difference
        </Link>
      </div>
      <div className="md:mt-12 md:m-3 m-2" id="result">
        <div className=" bg-white p-2 md:p-2 rounded min-h-20 dark:bg-[#0f172a] dark:border-2 dark:text-white">
          {diff.length == 0 ? (
            <span className="text-slate-400">
              Difference results (if there are any)
            </span>
          ) : (
            diff.map((part, index) => {
              return (
                <span
                  key={index}
                  className={
                    part.added ? "added" : part.removed ? "removed" : ""
                  }
                >
                  {part.value}
                </span>
              );
            })
          )}
        </div>

        <Link
          to="top"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          className="bg-[#4608ad] dark:bg-[#0f172a] dark:border-2 rounded text-white px-6 py-2 md:mt-5 mt-3 cursor-pointer inline-block"
          onClick={handleClearAll}
        >
          Clear all
        </Link>
      </div>
    </div>
  );
};

export default TextDiffChecker;
