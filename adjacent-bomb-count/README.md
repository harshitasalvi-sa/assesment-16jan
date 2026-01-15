# Adjacent Bomb Count - Interview Problem

## 📋 Problem Description

Given a **3x3 grid** with bombs ('X') and empty cells ('.'), replace each empty cell with the count of adjacent bombs (including diagonals). Bombs remain as 'X'.

### Example

**Input:**

```
X . .
. . X
. . .
```

**Output:**

```
X 2 1
1 2 X
0 1 1
```

### Constraints

- Grid size is always **3x3**
- Adjacent cells include all **8 directions** (up, down, left, right, and 4 diagonals)
- Bomb cells ('X') remain unchanged

---

## 🎯 What You Need to Do

1. **Implement** the `countAdjacentBombs` function in `solution.js`
2. **Test** your solution locally using `npm test`
3. **Ensure all 10 tests pass** ✅

### Success Criteria:

- [ ] All 10 test cases pass
- [ ] Code is clean and well-commented
- [ ] Function handles all edge cases
- [ ] Algorithm is efficient

---

## 🧪 Testing Your Solution

**Run tests:**

```bash
npm test
```

Initially, you should see:

```
Running Adjacent Bomb Count Tests (3x3 Grid)...

Test 1: ✗ FAIL (Function returned undefined)
Test 2: ✗ FAIL (Function returned undefined)
...
Results: 0/10 tests passed
```

**After implementing your solution:**

```bash
npm test
```

Expected output when done:

```
Running Adjacent Bomb Count Tests (3x3 Grid)...

Test 1: ✓ PASS
Test 2: ✓ PASS
...
Test 10: ✓ PASS

========================================
Results: 10/10 tests passed
========================================
🎉 All tests passed! Great job!
```

---

## 📁 Project Structure

```
adjacent-bomb-count/
├── package.json       (Project configuration)
├── solution.js        (⭐ Implement your solution here)
├── test.js            (Test cases - DO NOT MODIFY)
└── README.md          (This file)
```

---

## 🧪 Test Cases

Your solution will be tested against **10 test cases**:

1. Basic example with mixed bombs
2. All cells are bombs
3. No bombs (all empty)
4. Center bomb only
5. Corner bombs
6. Diagonal bombs
7. Top row bombs
8. Single bomb in top-left
9. Checkerboard pattern
10. Edge bombs (plus pattern)

---

## 📝 Notes for Submission

This problem is part of a 2-problem challenge. After completing both problems, you'll submit them together in a single Pull Request.

**For your PR description, include:**
- Your algorithm approach
- Time and space complexity
- Any challenges you faced

**See the main repository README for complete submission instructions.**

---

## ⏱️ Time Expectation

- **Expected Time:** 20-30 minutes
- **Difficulty Level:** Easy-Medium

---

## 🔍 Evaluation Criteria

Your solution will be evaluated on:

1. ✅ **Correctness** - All tests must pass
2. 🎨 **Code Quality** - Clean, readable code
3. 💭 **Logic** - Efficient algorithm
4. 🐛 **Edge Cases** - Proper boundary handling
5. 📝 **Documentation** - Clear comments (if needed)

---

## ❓ Questions?

If you encounter any issues:

1. Check that Node.js is installed: `node --version`
2. Ensure all dependencies are installed: `npm install`
3. Read error messages carefully
4. Test with simple cases first

---

## 📜 Rules

- ❌ **DO NOT modify** `test.js`
- ❌ **DO NOT modify** `package.json`
- ✅ **ONLY modify** `solution.js`
- ✅ All tests must pass before submitting PR

---

Good luck! 🚀
