import { getDayInput } from "@aoc/shared-utils";
import { PuzzleInput } from "@aoc/types";
import { useEffect, useState } from "react";

const CmsTest = () => {
  const [data, setData] = useState<PuzzleInput>();

  useEffect(() => {
    const fetchInputData = async () => {
      const res = await getDayInput("2023 Day 1");
      console.log("res: ", res);
      setData(res);
    };
    fetchInputData();
  }, []);

  return (
    <>
      <p>{data?.data.puzzleInput.title}</p>
      <p>{data?.data.puzzleInput.inputData.markdown}</p>
    </>
  );
};

export default CmsTest;
