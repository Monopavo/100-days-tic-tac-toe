import popupStyles from "../Styles/popupStyles.module.css";

interface PopupProps {
    className: string;
    hidden: boolean;
    message: string;
}

const Popup: React.FC<PopupProps> = ({message, hidden}) => {

  return (
    <div style={{display: hidden ? 'none' : 'block'}} className={popupStyles.container}>
      {message}
    </div>
  );
};

export default Popup;