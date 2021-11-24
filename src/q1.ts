
enum MathEnum {
    ADD = "ADD",
    SUBTRACT = "SUBTRACT",
    MULTIPLY = "MULTIPLY",
    DIVIDE = "DIVIDE"
}

const questionOne = (operand1: string, operand2: string, operator: MathEnum) => {
    const mathOperand1 = +operand1;
    const mathOperand2 = +operand2;

    switch(operator){
        case MathEnum.ADD:
            console.log(mathOperand1 + mathOperand2);
            return mathOperand1 + mathOperand2;
        case MathEnum.DIVIDE:
            console.log(mathOperand1 / mathOperand2);
            return mathOperand1 / mathOperand2;
        case MathEnum.SUBTRACT:
            console.log(mathOperand1 - mathOperand2);
            return mathOperand1 - mathOperand2;
        case MathEnum.MULTIPLY:
            console.log(mathOperand1 * mathOperand2);
            return mathOperand1 * mathOperand2;
        default:
            return ""
    };
};

questionOne("3", "4", MathEnum.MULTIPLY);
// questionOne("3", "4", MathEnum.ADD);