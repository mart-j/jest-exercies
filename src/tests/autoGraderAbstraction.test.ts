import { autoGraderAbstraction } from "../helpers/autoGraderAbstraction";

describe("autoGraderAbstraction", () => {  it("inside function has been called", () => {
    const winner = jest.fn();
    autoGraderAbstraction(100, winner);
    expect(winner).toBeCalled();
  });})