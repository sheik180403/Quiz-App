import QUESTION from "../QUESTION";

export default function Answers() {
  return (
    <>
      {QUESTION.map((item) => (
        <div className="flex flex-col justify-center items-center ">
          <div className="w-8 h-8 mt-4 bg-slate-900 text-white rounded-[100%] flex flex-col justify-center items-center">
            <p>{item.qId}</p>
          </div>
          <p className="text-[15px] lg:text-lg lg:font-normal font-semibold">
            {item.question}
          </p>
          <div className="px-5 mt-2 ">
            <p className="text-green-400 font-semibold">
              <span className="text-black">ans:</span> {item.answer[0]}
            </p>
            <p className="text-white font-semibold mt-1">
              <span className="text-black">explanation: </span>
              {item.explanation}
            </p>
          </div>
          <p>-------------------------------------------------------</p>
        </div>
      ))}
    </>
  );
}
