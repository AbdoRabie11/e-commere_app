import React, {useState} from "react";
import { validate } from "./validate";

export function useInput(initialInput, rules) {
  const [input, changeInput] = useState({
    value: initialInput | '',
    isValid: false,
  });

  const updateInput = inputVal => {
    changeInput({
      value: inputVal,
      isValid: validate(inputVal, rules),
      touched: true,
    });
  };

  return [input, updateInput]
}