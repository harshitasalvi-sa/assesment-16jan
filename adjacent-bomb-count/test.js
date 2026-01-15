const countAdjacentBombs = require("./solution");

function arraysEqual(arr1, arr2) {
  // Add null/undefined checks
  if (!arr1 || !arr2) return false;
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (!arr1[i] || !arr2[i]) return false;
    if (arr1[i].length !== arr2[i].length) return false;
    for (let j = 0; j < arr1[i].length; j++) {
      if (arr1[i][j] !== arr2[i][j]) return false;
    }
  }
  return true;
}

function runTest(testNum, grid, expected) {
  const gridCopy = grid.map((row) => [...row]);

  let result;
  try {
    result = countAdjacentBombs(gridCopy);
  } catch (error) {
    console.log(`Test ${testNum}: ✗ FAIL (Error: ${error.message})`);
    return false;
  }

  // Check if result is undefined or null
  if (!result) {
    console.log(`Test ${testNum}: ✗ FAIL (Function returned ${result})`);
    console.log("  Hint: Make sure your function returns a grid!");
    return false;
  }

  const passed = arraysEqual(result, expected);

  console.log(`Test ${testNum}: ${passed ? "✓ PASS" : "✗ FAIL"}`);
  if (!passed) {
    console.log("  Input:");
    grid.forEach((row) => console.log("   ", row));
    console.log("  Expected:");
    expected.forEach((row) => console.log("   ", row));
    console.log("  Got:");
    if (result) {
      result.forEach((row) => console.log("   ", row));
    } else {
      console.log("    undefined or null");
    }
  }
  return passed;
}

console.log("Running Adjacent Bomb Count Tests (3x3 Grid)...\n");

let passed = 0;
let total = 0;

// Test 1: Basic example
total++;
if (
  runTest(
    1,
    [
      ["X", ".", "."],
      [".", ".", "X"],
      [".", ".", "."],
    ],
    [
      ["X", 2, 1],
      [1, 2, "X"],
      [0, 1, 1],
    ]
  )
)
  passed++;

// Test 2: All bombs
total++;
if (
  runTest(
    2,
    [
      ["X", "X", "X"],
      ["X", "X", "X"],
      ["X", "X", "X"],
    ],
    [
      ["X", "X", "X"],
      ["X", "X", "X"],
      ["X", "X", "X"],
    ]
  )
)
  passed++;

// Test 3: No bombs
total++;
if (
  runTest(
    3,
    [
      [".", ".", "."],
      [".", ".", "."],
      [".", ".", "."],
    ],
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]
  )
)
  passed++;

// Test 4: Center bomb only
total++;
if (
  runTest(
    4,
    [
      [".", ".", "."],
      [".", "X", "."],
      [".", ".", "."],
    ],
    [
      [1, 1, 1],
      [1, "X", 1],
      [1, 1, 1],
    ]
  )
)
  passed++;

// Test 5: Corner bombs
total++;
if (
  runTest(
    5,
    [
      ["X", ".", "X"],
      [".", ".", "."],
      ["X", ".", "X"],
    ],
    [
      ["X", 2, "X"],
      [2, 4, 2],
      ["X", 2, "X"],
    ]
  )
)
  passed++;

// Test 6: Diagonal bombs
total++;
if (
  runTest(
    6,
    [
      ["X", ".", "."],
      [".", "X", "."],
      [".", ".", "X"],
    ],
    [
      ["X", 2, 1],
      [2, "X", 2],
      [1, 2, "X"],
    ]
  )
)
  passed++;

// Test 7: Top row bombs
total++;
if (
  runTest(
    7,
    [
      ["X", "X", "X"],
      [".", ".", "."],
      [".", ".", "."],
    ],
    [
      ["X", "X", "X"],
      [2, 3, 2],
      [0, 0, 0],
    ]
  )
)
  passed++;

// Test 8: Single bomb top-left
total++;
if (
  runTest(
    8,
    [
      ["X", ".", "."],
      [".", ".", "."],
      [".", ".", "."],
    ],
    [
      ["X", 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ]
  )
)
  passed++;

// Test 9: Checkerboard pattern
total++;
if (
  runTest(
    9,
    [
      ["X", ".", "X"],
      [".", "X", "."],
      ["X", ".", "X"],
    ],
    [
      ["X", 3, "X"],
      [3, "X", 3],
      ["X", 3, "X"],
    ]
  )
)
  passed++;

// Test 10: Edge bombs (plus pattern)
total++;
if (
  runTest(
    10,
    [
      [".", "X", "."],
      ["X", ".", "X"],
      [".", "X", "."],
    ],
    [
      [2, "X", 2],
      ["X", 4, "X"],
      [2, "X", 2],
    ]
  )
)
  passed++;

console.log(`\n${"=".repeat(40)}`);
console.log(`Results: ${passed}/${total} tests passed`);
console.log(`${"=".repeat(40)}`);

if (passed === total) {
  console.log("🎉 All tests passed! Great job!");
} else {
  console.log(`⚠️  ${total - passed} test(s) failed. Keep debugging!`);
}

process.exit(passed === total ? 0 : 1);
