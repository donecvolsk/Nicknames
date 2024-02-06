import { Validator } from "./Validator ";

const userName = "alex_FS19-netology";

const nameValidator = new Validator(userName);
const resultOfCheck = nameValidator.validateUsername();

console.log(resultOfCheck);

