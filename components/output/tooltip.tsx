interface TooltipProp {
  datatip?: string;
  tooltip?: string;
}

export const Tooltip: React.FC<TooltipProp> = ({ datatip, tooltip }): JSX.Element => {
  return (
    <div className="tooltip" data-tip={datatip}>
      <button className="btn">{tooltip}</button>
    </div>
  );
};
