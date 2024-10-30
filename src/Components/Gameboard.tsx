import React, { useState } from "react";
import gameboardStyles from "../Styles/gameboardStyles.module.css";
import gridStyles from "../Styles/gridStyles.module.css";
import popupStyles from "../Styles/popupStyles.module.css";
import Square from "./Square";
import Popup from "./Popup";

const Gameboard: React.FC = () => {
    const [playerTurn, setPlayerTurn] = useState<boolean>(true);
    const [playerMarks, setPlayerMarks] = useState<string[]>([]);
    const [computerMarks, setComputerMarks] = useState<string[]>([]);
    const [message, setMessage] = useState<string>(""); 
    const [popupVisible, setPopupVisible] = useState<boolean>(false);

    const winningLines: string[][] = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["3", "6", "9"],
        ["1", "5", "9"],
        ["3", "5", "7"]
    ];

    const updateMarkCounter = (square: number) => {
        if (playerTurn) {
            const newPlayerMarks = [...playerMarks, square.toString()];
            setPlayerMarks(newPlayerMarks);
            checkWin(newPlayerMarks, "You Win!");
        } else {
            const newComputerMarks = [...computerMarks, square.toString()];
            setComputerMarks(newComputerMarks);
            checkWin(newComputerMarks, "You Lose!");
        }
    };
    
        const checkWin = (marks: string[], message: string) => {
            for (const line of winningLines) {
                if (line.every(id => marks.includes(id))) {
                    setMessage(message);
                    setPopupVisible(true);
                    break;
                    
            }
        }
    };
      
    return (
        <div className={gameboardStyles.gameboard}>
            <Square className={gridStyles.row1Left} id={1} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} updateMarkCounter={() => updateMarkCounter(1)} />
            <Square className={gridStyles.row1Mid} id={2} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} updateMarkCounter={() => updateMarkCounter(2)} />
            <Square className={gridStyles.row1Right} id={3} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} updateMarkCounter={() => updateMarkCounter(3)} />
            <Square className={gridStyles.row2Left} id={4} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} updateMarkCounter={() => updateMarkCounter(4)} />
            <Square className={gridStyles.row2Mid} id={5} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} updateMarkCounter={() => updateMarkCounter(5)} />
            <Square className={gridStyles.row2Right} id={6} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} updateMarkCounter={() => updateMarkCounter(6)} />
            <Square className={gridStyles.row3Left} id={7} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} updateMarkCounter={() => updateMarkCounter(7)} />
            <Square className={gridStyles.row3Mid} id={8} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} updateMarkCounter={() => updateMarkCounter(8)} />
            <Square className={gridStyles.row3Right} id={9} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} updateMarkCounter={() => updateMarkCounter(9)} />
            <Popup className={popupStyles.container} hidden={!popupVisible} message={message} />
        </div>
    );      
};

export default Gameboard;