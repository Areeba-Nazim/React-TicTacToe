import React, { useState } from 'react'
import Box from './Components/box'

function App() {
  const[squares, setSquares] = useState(Array(9).fill(null))
  const[xIsNext, setXIsNext] = useState(true)

  function handleClick (i) {
    if(squares[i] || calculateWinner(squares)){
      return
    }
    const nextSquare = squares.slice()
    xIsNext ? nextSquare[i] = "X" : nextSquare[i] = "O"
    setSquares(nextSquare)
    setXIsNext(!xIsNext)
  }

  function calculateWinner(square) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const[a, b, c] = lines[i]
      if(square[a] && square[a] === square[b] && square[c])
      return square[a];
    }
  }

  const winner = calculateWinner(squares)
  let status;
  if (winner) {
    status = "Winner :" + " " + winner
  } else{
    status = "Next player : " + (xIsNext ? "X" : "O")
  }
  
  return (
    <div className='w-full h-screen bg-slate-400 flex justify-center items-center flex-col'>
      <h1 className='text-5xl text-right mb-4 font-medium leading-none tracking-tight'>{status}</h1>
        <div className='p-2 bg-slate-500 rounded-md '>
          <div className='flex gap-1'>
           < Box value={squares[0]} onBoxClick={()=> handleClick(0)}/>
           < Box value={squares[1]} onBoxClick={()=> handleClick(1)}/>
           < Box value={squares[2]} onBoxClick={()=> handleClick(2)}/>
          </div>
          <div className='flex gap-1'>
           < Box value={squares[3]} onBoxClick={()=> handleClick(3)}/>
           < Box value={squares[4]} onBoxClick={()=> handleClick(4)}/>
           < Box value={squares[5]} onBoxClick={()=> handleClick(5)}/>
          </div>
          <div className='flex gap-1'>
           < Box value={squares[6]} onBoxClick={()=> handleClick(6)}/>
           < Box value={squares[7]} onBoxClick={()=> handleClick(7)}/>
           < Box value={squares[8]} onBoxClick={()=> handleClick(8)}/>
          </div>
        </div>
    </div>
  )
}

export default App