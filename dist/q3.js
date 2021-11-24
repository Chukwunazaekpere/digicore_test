"use strict";
const kangarooJump = (x1, x2, v1, v2) => {
    let p = 1;
    if ((v1 - v2) !== (x2 - x1)) {
        console.log("\n\t NO");
        return "No";
    }
    ;
    console.log("\n\t YES");
    return "YES";
};
// kangarooJump(43, 2, 70, 2);
kangarooJump(1, 2, 2, 1);
