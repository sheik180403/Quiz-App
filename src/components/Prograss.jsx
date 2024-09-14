import { useEffect, useState } from "react";

function Prograss({ max, addAns }) {
  const [remaining, setRemaining] = useState(max);

  useEffect(() => {
    // console.log("timeout set");
    const timer = setTimeout(() => {
      addAns(null, null);
    }, max);

    return () => {
      clearTimeout(timer);
      // console.log("timeout cleared");
    };
  }, [addAns]);

  useEffect(() => {
    // console.log("interval set");
    const timer = setInterval(() => {
      setRemaining((prev) => prev - 10);
    }, 10);

    return () => {
      clearInterval(timer);
      // console.log("interval cleared");
    };
  }, []);

  return (
    <>
      <progress value={remaining} max={max} />
    </>
  );
}

export default Prograss;
