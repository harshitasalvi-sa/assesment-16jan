import React from 'react'

const Cell = ({row, col, isHighlighted, onclick}) => {
    let classes = "cell";
    classes += (row+col)%2 === 0 ? " white" : " grey";
    // console.log(isHighlighted);
    if(isHighlighted){
        classes += " highlighted";
    }
    
  return (
    <button 
        className={classes}
        onClick={onclick}>
    </button>
  )
}

export default Cell