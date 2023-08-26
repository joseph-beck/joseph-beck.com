import React from "react";

interface InputProps {
  label?: string;
  name?: string;
  placeholder?: string;
};

interface MultiProps {
  options?: { value: string; label: string }[];
  pick?: string;
  go?: string;
};

export const LeftLabelInput: React.FC<InputProps> = ({ label, name, placeholder }): JSX.Element => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <label className="input-group">
        <span>{name}</span>
        <input type="text" placeholder={placeholder} className="input input-bordered" />
      </label>
    </div>
  );
};

export const TopLabelInput: React.FC<InputProps> = ({ label, name, placeholder }): JSX.Element => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <label className="input-group input-group-vertical">
        <span>{name}</span>
        <input type="text" placeholder={placeholder} className="input input-bordered" />
      </label>
    </div>
  );
};

export const SmallInputBox: React.FC<InputProps> = ({ placeholder }): JSX.Element => {
  return (
    <textarea placeholder={placeholder} className="textarea textarea-bordered textarea-sm w-full max-w-xs" ></textarea>
  );
}

export const MediumInputBox: React.FC<InputProps> = ({ placeholder }): JSX.Element => {
  return (
    <textarea placeholder={placeholder} className="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
  );
}

export const LargeInputBox: React.FC<InputProps> = ({ placeholder }): JSX.Element => {
  return (
    <textarea placeholder={placeholder} className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
  );
}

export const GroupSelectInput: React.FC<MultiProps> = ({ options, pick, go }): JSX.Element => {
  return (
    <div className="form-control">
      <div className="input-group">
        <select className="select select-bordered">
          <option disabled selected>{pick}</option>
          {options && options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
        <button className="btn">{go}</button>
      </div>
    </div>
  );
};
