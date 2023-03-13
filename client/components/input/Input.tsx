import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import strings from "../../utils/constants";

interface IProps {
  type?: string;
  label: string;
  placeholder?: string;
  min?: number;
  max?: number;
  isRequired?: boolean;
  onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  type = "text",
  label,
  placeholder,
  onInputChange,
  min,
  max,
  isRequired = false,
}: IProps) => {
  const [errorType, setErrorType] = useState({
    error: false,
    type: ''
  });

  const handleBlur = (event: any) => {
    if (event.target.validity.patternMismatch) {
      setErrorType({
        type,
        error: true
      });
    } else {
      setErrorType({
        type,
        error: false
      });
    }
  };

  const setPattern = (type:string) => {
    if (type === "email") {
      return ".+@gmail.com";
    } else if (type === "number") {
      return "[-]?[0-9]*[.,]?[0-9]+";
    } else {
      return;
    }
  };

  return (
    <>
      <label htmlFor={label.toLocaleLowerCase()} className="pr-8">
        {label}
      </label>
      <input
        onBlur={handleBlur}
        required={isRequired}
        type={type}
        data-testid="inputField"
        id={label.toLocaleLowerCase()}
        name={label.toLocaleLowerCase()}
        maxLength={100}
        min={min}
        max={max}
        pattern={setPattern(type)}
        className=" grid grid-cols-2 gap-2  place-content-center  w-48 rounded border-2 border-blue outline outline-none"
        onChange={onInputChange}
        placeholder={placeholder}
      />
      {errorType.error && <div data-testid="inputError" className="text-red">{`${strings.inputErrorPattern[type]}`}</div>}
    </>
  );
};

export default Input;
