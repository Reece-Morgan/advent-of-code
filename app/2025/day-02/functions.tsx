export const calculateInvalidIds = (input: string): number => {
  let invalidIdTotal = 0;
  const ranges = input.split(",");

  for (const range of ranges) {
    const [firstId, lastId] = range.split("-");
    let start = Number(firstId);
    let end = Number(lastId);

    for (let id = start; id <= end; id++) {
      const s = String(id);
      const len = s.length;

      // Skip odd lengths (cannot be split evenly)
      if (len % 2 !== 0) continue;

      const half = len / 2;
      if (s.slice(0, half) === s.slice(half)) {
        invalidIdTotal += id;
      }
    }
  }

  return invalidIdTotal;
};

export const calculateMoreInvalidIds = (input: string): number => {
  let invalidIdTotal = 0;
  const ranges = input.split(",");

  for (const range of ranges) {
    const [firstId, lastId] = range.split("-");
    let start = Number(firstId);
    let end = Number(lastId);

    for (let id = start; id <= end; id++) {
      const s = String(id);

      // Repeated-pattern detection:
      // A string s is a repetition of a smaller substring
      // if s exists inside (s + s).slice(1, -1)
      const doubled = (s + s).slice(1, -1);

      if (doubled.includes(s)) {
        invalidIdTotal += id;
      }
    }
  }

  return invalidIdTotal;
};