import { useCallback, useEffect, useRef, useState } from "react";
import QUESTION from "../QUESTION";
import Prograss from "./Prograss";
import Complete from "./Complete";

const MAX = 15000;

function Question() {
  const [ans, setAns] = useState([]);
  const [ansStatus, setAnsStatus] = useState({
    ans: "",
    index: undefined,
  });
  const arr = useRef();
  const [temp, setTemp] = useState("");
  const ansStyle =
    "bg-[#6cb7f5] h-[50px] mb-4 w-[80%] rounded-[30px] text-stone-950 text-[15px] lg:hover:bg-[#9d5af5] lg:hover:text-white font-bold font-sans";

  const activeIndex = ans.length;

  const addAns = useCallback(
    function addAns(answer, index) {
      if (QUESTION[activeIndex].answer[0] == answer) {
        setAnsStatus((prev) => ({ ...prev, ans: "correct", index }));
        setTemp(ansStyle + " bg-green-600 hover:bg-green-600");
      } else {
        setAnsStatus((prev) => ({ ...prev, ans: "wrong", index }));
        setTemp(ansStyle + " bg-red-600 hover:bg-red-600");
      }

      setTimeout(() => {
        setAnsStatus((prev) => ({ ...prev, ans: "", index: undefined }));
        setAns((prev) => [...prev, answer]);
        arr.current = undefined;
      }, 1000);

      console.log(answer);
    },
    [ans]
  );

  const addnothing = useCallback(
    function addnothing(n) {
      addAns(n);
    },
    [ans]
  );

  //   console.log(ans);

  if (QUESTION.length === ans.length) {
    return <Complete ans={ans} />;
  }
  if (!arr.current) {
    arr.current = [...QUESTION[activeIndex].answer];
    arr.current.sort(() => 0.5 - Math.random());
  }

  return (
    <>
      <div className="bg-stone-900 rounded-[20px]  w-[700px] flex justify-center flex-col items-center ">
        <h3 className="text-gray-50 mt-4 text-[20px]">
          {QUESTION[activeIndex].question}
        </h3>
        <Prograss
          max={MAX}
          addAns={() => {
            addnothing(null);
          }}
          key={activeIndex}
        />
        <div className="flex flex-col mt-5 mb-10 w-full justify-center items-center ">
          {arr.current.map((ans, index) => (
            <button
              onClick={() => addAns(ans, index)}
              className={ansStatus.index === index ? temp : ansStyle}
              key={index}
              disabled={ansStatus.index != undefined}
            >
              {ans}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Question;
