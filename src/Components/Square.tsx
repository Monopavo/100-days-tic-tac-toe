import React, { useState } from "react";
import squareStyles from "../Styles/squareStyles.module.css";

interface SquareProps {
    className: string;
    id: number;
    playerTurn: boolean;
    setPlayerTurn: React.Dispatch<React.SetStateAction<boolean>>;
    updateMarkCounter: (square: string) => void;
}

const Square: React.FC<SquareProps> = ({ className, id, playerTurn, setPlayerTurn, updateMarkCounter}) => {
    const [mark, setMark] = useState<string>("");

    const handleClick = () => {
        if (playerTurn && mark === "") {
            setMark("X");
            setPlayerTurn(false);
            updateMarkCounter(`${id}`);
            setTimeout(computerTurn, 500);
        }
    };

    const computerTurn = () => {
        let computerSelection: string;
        let selectedSquare: HTMLButtonElement | null;

        do {
            computerSelection = `${Math.floor(Math.random() * 9) + 1}`;
            selectedSquare = document.getElementById(computerSelection) as HTMLButtonElement;
        } while (selectedSquare && selectedSquare.innerHTML !== "");

        if (selectedSquare) {
            selectedSquare.innerHTML = "O";
            selectedSquare.disabled = true;
            updateMarkCounter(computerSelection);
            setPlayerTurn(true);
        }
    };

    return (
        <button
            id={`${id}`}
            className={`${squareStyles.square} ${squareStyles.text} ${className}`}
            onClick={handleClick}
        >
        {mark}
        </button>
    );
};

export default Square;