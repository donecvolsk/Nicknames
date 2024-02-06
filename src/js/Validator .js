export class Validator {
    constructor(str) {
        this.str = str;        
    }

    validateUsername() {
        /*первый последний символ строки только латинские буквы (регистр не учитывать)
        в строке могут быть цифры, буквы, знак подчёркивания и тире.*/
        const rule1 = /^[a-z][\w-]*[a-z]$/i.test(this.str);

        //не должно содержать подряд более трёх цифр
        const rule2 = /\d{4,}/.test(this.str);
        
        if (rule1 && !rule2){
            return true;
        } else {
            return false;
        }
    }
}