
const kangarooJump = (x1: number, x2: number, v1: number, v2: number) => {
    let p = 1;
    if((v1 - v2) !== (x2 - x1)){
        console.log("\n\t NO");
        return "No"
    };
    console.log("\n\t YES");
    return "YES"
};

// kangarooJump(43, 2, 70, 2);
kangarooJump(1, 2, 2, 1);

