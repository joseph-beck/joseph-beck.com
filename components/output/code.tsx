import React from "react";

export enum LineType {
  success = "bg-success",
  warning = "bg-warning"
}

export enum TextType {
  success = "text-success-content",
  warning = "text-warning-content"
}

interface CodeProp {
  prefix?: string;
  body?: string;
  line_type?: LineType;
  text_type?: TextType;
}

interface CodeProps {
  props?: CodeProp[];
}

export const CodeMockup: React.FC<CodeProp> = ({ body, prefix, line_type, text_type }) => {
  return (
    <div className="mockup-code">
      <pre
        data-prefix={prefix}
        className={`${line_type} ${text_type}`}
      >
        <code>{body}</code>
      </pre>
    </div>
  );
};

export const MutliCodeMockup: React.FC<CodeProps> = ({ props }) => {
  return (
    <div className="mockup-code">
      {props && props.map((prop, index) => (
        <pre
          key={index}
          data-prefix={prop.prefix}
          className={`${prop.line_type} ${prop.text_type}`}
        >
            <code>{prop.body}</code>
        </pre>
      ))}
    </div>
  );
};
