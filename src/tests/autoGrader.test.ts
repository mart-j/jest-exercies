import { autoGrader } from "../helpers/autoGrader";

describe("autoGrader", () => {
  it("returns 'F'", () => {
    const tests = autoGrader(2);
    expect(tests).toBe("F");
  });
  it("returns 'A'", () => {
    const tests = autoGrader(99);
    expect(tests).toBe("A");
  });
  it("returns 'B'", () => {
    const tests = autoGrader(89.99);
    expect(tests).toBe("B");
  });
  it("returns 'Invalid Grade'", () => {
    const tests = autoGrader(-30);
    expect(tests).toBe("Invalid grade");
  });
  it("returns 'D'", () => {
    const tests = autoGrader(60);
    expect(tests).toBe("D");
  });
  it("returns 'C'", () => {
    const tests = autoGrader(75);
    expect(tests).toBe("C");
  });
  it("returns F", () => {
    const tests = autoGrader(0);
    expect(tests).toBe("F");
  });
  it("returns 'Invalid grade'", () => {
    const tests = autoGrader(300);
    expect(tests).toBe("Invalid grade");
  });
  it("returns 'undefined'", () => {
    const tests = autoGrader(100);
    expect(tests).toBe(undefined);
  });
});
