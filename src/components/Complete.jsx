import { useEffect, useState } from "react";
import logo from "../../Img/quiz-complete.png";
import QUESTION from "../QUESTION";
import Question from "./Question";
import { comma } from "postcss/lib/list";
import Answers from "./Answers";

function Complete({ ans }) {
  let skipped = 0;
  let correct = 0;
  let wrong = 0;

  let size = QUESTION.length;

  for (let i = 0; i < size; i++) {
    if (ans[i] === QUESTION[i].answer[0]) correct++;
    else if (ans[i] === null) {
      skipped++;
    } else {
      wrong++;
    }
  }

  console.log(
    "skipped: " + skipped + " correct :" + correct + " wrong :" + wrong
  );

  console.log(((skipped / size) * 10).toFixed(2));
  console.log(((correct / size) * 10).toFixed(2));
  console.log(((wrong / size) * 10).toFixed(2));

  return (
    <>
      <div className="flex pb-5 flex-col justify-center items-center bg-[#b02cca] sm:overflow-x-hidden w-[450px] rounded-[10px]">
        <div className="rounded-[100%] mt-5 bg-[#e781fb] h-24 w-24 relative  border-[2px] border-black ">
          <img className="w-14 h-14 absolute top-5 left-5" src={logo} alt="" />
        </div>
        <h1 className="mt-6 text-[25px] tracking-[2px] text-gray-900 font-bold ">
          QUIZ COMPLETED !
        </h1>
        <p className="mt-3 font-normal text-gray-900 text-lg">
          Total Questions: {QUESTION.length}
        </p>

        <div className="flex gap-16 mt-4 ">
          <div className="space-y-[-5px] flex flex-col items-center justify-center">
            <h2 className="text-[20px] font-bold text-orange-400">Skipped</h2>
            <h1 className="text-[35px] text-gray-800">{skipped}</h1>
          </div>

          <div className="space-y-[-5px] flex flex-col items-center justify-center">
            <h2 className="text-[20px] font-bold text-green-400">Correct</h2>
            <h1 className="text-[35px] text-gray-800">{correct}</h1>
          </div>

          <div className="space-y-[-5px] flex flex-col items-center justify-center">
            <h2 className="text-[20px] font-bold text-red-800">Wrong</h2>
            <h1 className="text-[35px] text-gray-800">{wrong}</h1>
          </div>
        </div>

        <Answers />
      </div>
    </>
  );
}

export default Complete;
