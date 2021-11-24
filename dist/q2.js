"use strict";
const tennisScore = (tomsScore, jacksScore) => {
    if (tomsScore.length !== jacksScore.length) {
        return "Invalid score sequence: either Tom or Jack's score is incomplete.";
    }
    ;
    let jacksTotalPoint = 0;
    let tomsTotalPoint = 0;
    tomsScore.forEach((score, index) => {
        if (score > jacksScore[index]) {
            jacksTotalPoint += 1;
        }
        else if (jacksScore[index] > score) {
            tomsTotalPoint += 1;
        }
    });
    const result = [tomsTotalPoint, jacksTotalPoint];
    console.log("\n\t Result: ", result);
    return result;
};
tennisScore([1, 4, 7, 2, 4], [3, 4, 2, 4, 4]);
