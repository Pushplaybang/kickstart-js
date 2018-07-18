import multiply from "../src/index";

test("should run, and show tests are being parsed", () => {
  const testsAre = "running";
  expect(testsAre).toBe("running");
});

test("should test function", () => {
  const answer = multiply(2);
  expect(answer).toBe(4);
});
