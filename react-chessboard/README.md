# React Chessboard Challenge 🎯

## 📋 Problem Description

Create an **interactive 8x8 chessboard** using React with performance optimizations.

### Requirements

#### 1. Layout

- Render an 8x8 grid (64 cells total)
- Alternate colors between white (`#f0d9b5`) and grey (`#b58863`)
- First cell at position (0,0) should be white

#### 2. Interaction

- Clicking a cell highlights it in red (`#ff6b6b`)
- Clicking another cell moves the highlight to the new cell
- Only **one cell** can be highlighted at a time

#### 3. Performance Optimization ⚡ (REQUIRED)

- Use `React.memo()` to prevent unnecessary re-renders
- Use `useMemo()` to memoize board generation
- Use `useCallback()` to memoize event handlers
- Implement **event delegation** (single click handler on parent)

**Event Delegation Requirements:**
- Parent container must handle ALL click events
- Individual cells should NOT have onClick handlers
- Use event bubbling to capture clicks from child elements  
- Parse clicked element using `data-row` and `data-col` attributes
- Only ONE click handler should exist (on the parent)

#### 4. Component Structure

```
Chessboard (Parent)
  └── Cell (Child, memoized)
      Props: row, col, isHighlighted, onClick
      Element: <button> or element with role="button"
```

**IMPORTANT**: Each cell MUST be implemented as a `<button>` element or any element with `role="button"` to ensure proper accessibility and test compatibility.

---

## 🎯 What You Need to Do

1. **Implement** the `Chessboard` component in `src/components/Chessboard.js`
2. **Test** your solution: `npm test`
3. **Ensure all 11 tests pass** ✅
4. **Verify performance** optimizations are used
5. **Run the app**: `npm start` and test manually

### Success Criteria:

- [ ] All 11 tests pass (`npm test`)
- [ ] Chessboard renders correctly (8x8 grid)
- [ ] Colors alternate properly
- [ ] Click interaction works (single highlight)
- [ ] Performance optimizations implemented:
  - [ ] React.memo() used
  - [ ] useMemo() used
  - [ ] useCallback() used
  - [ ] Event delegation implemented
- [ ] Code is clean and well-structured
- [ ] App runs without errors (`npm start`)

---

## 🚀 Development & Testing

**Run the development server:**

```bash
npm start
```

Opens at `http://localhost:3000`

4. **Run tests:**

```bash
npm test
```

Expected output (before implementation):

```
FAIL  src/components/Chessboard.test.js
  ✕ Test 1: Renders 64 cells
  ✕ Test 2: First cell has white background
  ...
  ✕ Test 10: Chessboard has correct CSS class

Tests: 10 failed, 10 total
```

After implementation:

```
PASS  src/components/Chessboard.test.js
  ✓ Test 1: Renders 64 cells (25ms)
  ✓ Test 2: First cell has white background (12ms)
  ...
  ✓ Test 11: Performance optimizations applied (8ms)

Tests: 11 passed, 11 total
```

---

## 📁 Project Structure

```
react-chessboard-challenge/
├── public/
├── src/
│   ├── components/
│   │   ├── Chessboard.js       ⭐ Implement your solution here
│   │   ├── Chessboard.test.js  ✅ Test cases (DO NOT MODIFY)
│   │   └── Chessboard.css      ✅ Styles provided
│   ├── App.js                   ✅ Pre-configured
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

---

## 🧪 Test Cases

Your solution will be tested against **11 test cases**:

1. ✅ Renders 64 cells (8x8 grid)
2. ✅ First cell (0,0) has white background
3. ✅ Cells alternate colors correctly
4. ✅ Clicking a cell highlights it
5. ✅ Only one cell highlighted at a time
6. ✅ Clicking same cell keeps it highlighted
7. ✅ All cells are clickable
8. ✅ Uses event delegation
9. ✅ Cells display correct positions
10. ✅ Chessboard has correct CSS class
11. ✅ Performance optimizations applied

---

## 💡 Hints

<details>
<summary>Click to view hints</summary>

### Hint 1: Board Generation

```javascript
// Generate 8x8 array of cells
const cells = useMemo(() => {
  const board = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      board.push({ row, col });
    }
  }
  return board;
}, []);
```

### Hint 2: Color Calculation

```javascript
// Determine if cell should be white or grey
const isWhite = (row + col) % 2 === 0;
```

### Hint 3: Event Delegation

```javascript
// Handle clicks on parent, not individual cells
const handleBoardClick = useCallback((event) => {
  const row = parseInt(event.target.dataset.row);
  const col = parseInt(event.target.dataset.col);
  // Update highlighted cell
}, []);

<div className="chessboard" onClick={handleBoardClick}>
  {/* cells */}
</div>;
```

### Hint 4: Memoized Cell Component

```javascript
const Cell = React.memo(({ row, col, isHighlighted }) => {
  // Cell rendering logic
});
```

</details>

---

## 📝 Notes for Submission

This is one of 2 problems in this challenge. After completing both problems, you'll submit them together in a single Pull Request.

**For your PR description, include:**
- Your implementation approach
- Performance optimizations used
- Any challenges you faced
- Screenshots (optional)

**See the main repository README for complete submission instructions.**

---

## ⏱️ Time Expectation

- **Expected Time:** 30-45 minutes
- **Difficulty Level:** Medium (⭐⭐⭐)

---

## 🔍 Evaluation Criteria

Your solution will be evaluated on:

1. ✅ **Correctness** (40%) - All 11 tests pass
2. ⚡ **Performance** (30%) - Proper use of memo/useMemo/useCallback
3. 🎨 **Code Quality** (20%) - Clean, readable code
4. 🏗️ **Architecture** (10%) - Good component structure

---

## 🎓 Learning Goals

This challenge tests your understanding of:

- React component structure
- State management with `useState`
- Event handling and event delegation
- Performance optimization techniques:
  - `React.memo()` - Prevent re-renders
  - `useMemo()` - Memoize expensive calculations
  - `useCallback()` - Memoize function references
- CSS Grid layout
- Testing React components

---

## 📜 Rules

- ❌ **DO NOT modify** `Chessboard.test.js`
- ❌ **DO NOT modify** `Chessboard.css` (unless styling bugs)
- ❌ **DO NOT modify** `package.json`
- ✅ **ONLY modify** `Chessboard.js`
- ✅ All tests must pass
- ✅ All performance optimizations must be implemented

---

## ❓ Troubleshooting

### Tests failing?

```bash
# Clear cache and run tests
npm test -- --clearCache
npm test
```

### Port 3000 already in use?

```bash
# Kill process on port 3000
npx kill-port 3000
npm start
```

### Dependencies issue?

```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Resources

- [React Documentation](https://react.dev/)
- [React.memo()](https://react.dev/reference/react/memo)
- [useMemo Hook](https://react.dev/reference/react/useMemo)
- [useCallback Hook](https://react.dev/reference/react/useCallback)
- [Event Delegation](https://javascript.info/event-delegation)

---

## 🏆 Bonus Challenges (Optional)

After completing the basic requirements, try these:

1. Add coordinates (A-H, 1-8) on the sides

---

Good luck! 🚀
