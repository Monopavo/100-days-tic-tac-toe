interface SquareProps {
    value: string;
}

const Square: React.FC<SquareProps> = ({ value }) => {
    return <div>{value}</div>;
};

export default Square;