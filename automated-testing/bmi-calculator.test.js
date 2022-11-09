const myFunctions = require("./bmi-calculator");

test("Check for height computation", () => {
    expect(myFunctions.heightCompute(61)).toBe(3721);
});

test("Check BMI", () => {
    expect(myFunctions.bmiCompute(101, 3721)).toBeGreaterThanOrEqual(19.08);
});

test("Check if normal", () => {
    expect(myFunctions.bmiClassify(19.08)).toContain("Normal");
});