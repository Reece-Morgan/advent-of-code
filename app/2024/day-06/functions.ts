type Position = [number, number];

export const getDistinctPositions = (input: string): number => {
  const map: string[][] = input.split("\n").map((row) => row.split(""));

  // Initalize objects for visited and current positions
  // and the current direction
  let visitedPositions: Position[] = [];
  // Initialize with an invalid position
  let currentPosition: Position = [-1, -1];
  let currentDirection: string = "Up";

  // Findi the initial position marked with "^"
  for (let x = 0; x < map.length; x++) {
    for (let y = 0; y < map[x].length; y++) {
      if (map[x][y] === "^") {
        currentPosition = [x, y];
        visitedPositions.push(currentPosition);
        // Mark the starting position as visited
        map[x][y] = "X";
      }
    }
  }

  // Flag for still being on the map
  let stillOnMap = true;

  // Loop for movement around the map
  while (stillOnMap) {
    if (currentDirection === "Up") {
      if (currentPosition[0] === 0) {
        break;
      }
      // Get new position and if direction has changed
      const [newPos, changeDir] = checkUp(map, currentPosition);
      if (changeDir) {
        currentDirection = changeDirection(currentDirection);
      }
      // Set current position and add to visited positions array
      currentPosition = newPos;
      visitedPositions.push(currentPosition);
      // Mark the position as visited on the map
      map[currentPosition[0]][currentPosition[1]] = "X";
    } else if (currentDirection === "Down") {
      if (currentPosition[0] === map.length - 1) {
        break;
      }
      // Get new position and if direction has changed
      const [newPos, changeDir] = checkDown(map, currentPosition);
      if (changeDir) {
        currentDirection = changeDirection(currentDirection);
      }
      // Set current position and add to visited positions array
      currentPosition = newPos;
      visitedPositions.push(currentPosition);
      // Mark the position as visited on the map
      map[currentPosition[0]][currentPosition[1]] = "X";
    } else if (currentDirection === "Left") {
      if (currentPosition[1] === 0) {
        break;
      }
      // Get new position and if direction has changed
      const [newPos, changeDir] = checkLeft(map, currentPosition);
      if (changeDir) {
        currentDirection = changeDirection(currentDirection);
      }
      // Set current position and add to visited positions array
      currentPosition = newPos;
      visitedPositions.push(currentPosition);
      // Mark the position as visited on the map
      map[currentPosition[0]][currentPosition[1]] = "X";
    } else if (currentDirection === "Right") {
      if (currentPosition[1] === map[0].length - 1) {
        break;
      }
      // Get new position and if direction has changed
      const [newPos, changeDir] = checkRight(map, currentPosition);
      if (changeDir) {
        currentDirection = changeDirection(currentDirection);
      }
      // Set current position and add to visited positions array
      currentPosition = newPos;
      visitedPositions.push(currentPosition);
      // Mark the position as visited on the map
      map[currentPosition[0]][currentPosition[1]] = "X";
    }
  }

  // Loop through map and count number of positions marked as "X"
  let noOfPositions: number = 0;
  for (let x = 0; x < map.length; x++) {
    for (let y = 0; y < map[x].length; y++) {
      if (map[x][y] === "X") noOfPositions++;
    }
  }

  return noOfPositions;
};

const changeDirection = (currentDirection: string): string => {
  if (currentDirection == "Up") return "Right";
  if (currentDirection == "Down") return "Left";
  if (currentDirection == "Left") return "Up";
  if (currentDirection == "Right") return "Down";
  return "Up";
};

const checkUp = (
  inputMap: string[][],
  currentPosition: Position
): [Position, boolean] => {
  let newPos: Position = [...currentPosition];
  let changeDir = false;

  if (
    inputMap[currentPosition[0] - 1]?.[currentPosition[1]] === "." ||
    inputMap[currentPosition[0] - 1]?.[currentPosition[1]] === "X"
  ) {
    // Move up
    newPos[0] -= 1;
  } else if (inputMap[currentPosition[0] - 1]?.[currentPosition[1]] === "#") {
    // Change direction if blocked
    changeDir = true;
  }

  return [newPos, changeDir];
};

const checkRight = (
  inputMap: string[][],
  currentPosition: Position
): [Position, boolean] => {
  let newPos: Position = [...currentPosition];
  let changeDir = false;

  if (
    inputMap[currentPosition[0]]?.[currentPosition[1] + 1] === "." ||
    inputMap[currentPosition[0]]?.[currentPosition[1] + 1] === "X"
  ) {
    // Move right
    newPos[1] += 1;
  } else if (inputMap[currentPosition[0]]?.[currentPosition[1] + 1] === "#") {
    // Change direction if blocked
    changeDir = true;
  }

  return [newPos, changeDir];
};

const checkDown = (
  inputMap: string[][],
  currentPosition: Position
): [Position, boolean] => {
  let newPos: Position = [...currentPosition];
  let changeDir = false;

  if (
    inputMap[currentPosition[0] + 1]?.[currentPosition[1]] === "." ||
    inputMap[currentPosition[0] + 1]?.[currentPosition[1]] === "X"
  ) {
    // Move down
    newPos[0] += 1;
  } else if (inputMap[currentPosition[0] + 1]?.[currentPosition[1]] === "#") {
    // Change direction if blocked
    changeDir = true;
  }

  return [newPos, changeDir];
};

const checkLeft = (
  inputMap: string[][],
  currentPosition: Position
): [Position, boolean] => {
  let newPos: Position = [...currentPosition];
  let changeDir = false;

  if (
    inputMap[currentPosition[0]]?.[currentPosition[1] - 1] === "." ||
    inputMap[currentPosition[0]]?.[currentPosition[1] - 1] === "X"
  ) {
    // Move left
    newPos[1] -= 1;
  } else if (inputMap[currentPosition[0]]?.[currentPosition[1] - 1] === "#") {
    // Change direction if blocked
    changeDir = true;
  }

  return [newPos, changeDir];
};
