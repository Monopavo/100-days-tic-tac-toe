import gameboardStyles from "../Styles/gameboardStyles.module.css";

const Gameboard: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
    return <div className={gameboardStyles.gameboard}>{children}</div>;
};

export default Gameboard;