import squareStyles from "../Styles/squareStyles.module.css";

interface SquareProps {
    value: string;
    className?: string;
}

const Square: React.FC<SquareProps> = ({value, className}) => {
    return <div className={`${squareStyles.square} ${squareStyles.text} ${className}`}>{value}</div>;
};

export default Square;