import add from "./add";

describe("add", () => {
  test("1 + 1", () => {
    expect(add(1)(1)).toBe(2);
  });

  test("1 + 2", () => {
    expect(add(1)(2)).toBe(3);
  });
});
