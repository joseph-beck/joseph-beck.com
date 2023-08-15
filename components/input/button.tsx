interface ButtonProps {
  text?: string;
}

export const DefaultButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="btn">{text}</button>
  );
}

export const OutlineButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className="btn btn-outline">{text}</button>
  );
}
