
const ruleValidatorMaper = {
  isPhone: validatePhone,
  isConfirmation: validateConfiramtionCode
}

function validateConfiramtionCode(entered) {
  if(entered.length !== 6) {
    return false
  }
  return Array.from(entered).every(char => char >= 0 && char <= 9);
}

function validatePhone(entered) {
  if (entered.length !== 11) {
    return false;
  }
  return Array.from(entered).every(char => char >= 0 && char <= 9);
}



export function validate(userInput, rules) {

  let isValid = true

  for (let rule of rules) {
    isValid = isValid && ruleValidatorMaper[rule.key](userInput)
  }
  return isValid
}