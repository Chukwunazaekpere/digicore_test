"use strict";
var MathEnum;
(function (MathEnum) {
    MathEnum["ADD"] = "ADD";
    MathEnum["SUBTRACT"] = "SUBTRACT";
    MathEnum["MULTIPLY"] = "MULTIPLY";
    MathEnum["DIVIDE"] = "DIVIDE";
})(MathEnum || (MathEnum = {}));
const questionOne = (operand1, operand2, operator) => {
    const mathOperand1 = +operand1;
    const mathOperand2 = +operand2;
    switch (operator) {
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
            return "";
    }
    ;
};
questionOne("3", "4", MathEnum.MULTIPLY);
// questionOne("3", "4", MathEnum.ADD);
