import { Button } from "react-bootstrap";

const ActionButton = ({ variant, size, onClick, btnName }) => {
  return (
    <Button variant={variant} size={size} onClick={onClick}>
      {btnName}
    </Button>
  );
};

export default ActionButton;
