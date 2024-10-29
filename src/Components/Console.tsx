import consoleStyles from "../Styles/consoleStyles.module.css";

interface ConsoleProps {
    value: string;
}

const Console: React.FC<ConsoleProps> = ({value}) => {
    return <div className={consoleStyles.container}>{value}</div>;
};

export default Console;