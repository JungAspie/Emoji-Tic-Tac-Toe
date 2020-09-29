import React, {useState} from 'react';
import './App.css';

function app() {
	return (
	 <div> 
	  <Board> </Board>
	 </div>
	);
	}

export default app;

function Square(props){
	return (
	 <button onClick={props.onClick}>{props.value}</button>
	);
}

function Board(){
	const [boardSquares, setBoardSquares] = useState(Array(9).fill(null));
	
	const [spamIsNext, setSpamIsNext] = useState(true);
	
	const handleClick = index => {
	 const squares = [...boardSquares];
	 if (CaculateWinner(boardSquares) || squares[index]) return;
	 squares[index] = spamIsNext ? "😆" : "😮";
	 
	 setBoardSquares(squares);
	 setSpamIsNext(! spamIsNext);
	};
	
	const renderSquare = (index) => {
	 return <Square value={boardSquares[index]} onClick={() => handleClick(index)}></Square>
	}
	
	let status;
	const winner = CaculateWinner(boardSquares)
status = winner ? ["Winner is: ", winner,] : ["Next player: ", spamIsNext ? "😆" : "😮"];
	
	return( 
	 <div> 
	  <h2>Emoji Tic Tac Toe</h2>
	  <div className="status">{status}</div>
	  <div className="board-row"><tr><td>{renderSquare(0)}</td><td>{renderSquare(1)}</td><td>{renderSquare(2)}</td></tr></div>
	  <div className="board-row"><tr><td>{renderSquare(3)}</td><td>{renderSquare(4)}</td><td>{renderSquare(5)}</td></tr></div>
	  <div className="board-row"><tr><td>{renderSquare(6)}</td><td>{renderSquare(7)}</td><td>{renderSquare(8)}</td></tr></div>
     </div>
	)
}

function CaculateWinner(squares) {
	const winningLines = [
	 [0, 1, 2],
	 [3, 4, 5],
	 [6, 7, 8],
	 [0, 3, 6],
	 [1, 4, 7],
	 [2, 5, 8],
	 [0, 4, 8],
	 [6, 4, 2]
	];
	
	for(let i = 0; i < winningLines.length; i++){
	 const [a, b, c] = winningLines[i]
	if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c]){
	 return squares[a];
	}
	}
	return null;
}