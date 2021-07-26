import operate from "../operate";

describe("Operate logic", () => {
  it("should add", () => {
    const add = operate("1", "1", "+");
    expect(add).toBe("2");
  });

  it("should subtract", () => {
    const add = operate("1", "1", "-");
    expect(add).toBe("0");
  });

  it("should divide", () => {
    const add = operate("1", "1", "÷");
    expect(add).toBe(1);
  });

  it("should multiple", () => {
    const add = operate("1", "1", "X");
    expect(add).toBe("1");
  });

  it("should return remainder", () => {
    const add = operate("1", "1", "%");
    expect(add).toBe("0");
  });
});
