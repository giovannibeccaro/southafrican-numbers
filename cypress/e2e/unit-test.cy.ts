import fixNumber from "../../utils/fixNumber";
import phoneValidation from "../../utils/phoneValidation";
const correctNum = "12345678900";
const incorrectNum = "non sono un numerooo";
const correctableNum = "123abc45678900";
const correctableNumInvalid = "123abc456 789  001"; // 12 digits instead of 11

describe("phone validation", () => {
  it("checks whether the number is valid or not", () => {
    expect(phoneValidation(correctNum)).to.equal(true);
    expect(phoneValidation(incorrectNum)).to.equal(false);
    expect(phoneValidation(correctableNum)).to.equal(false);
  });
});
describe("fix number", () => {
  it("fixes number if possible", () => {
    expect(fixNumber(correctableNum)).to.deep.equal({
      correctNum: "12345678900",
      correction: "abc",
    });
    expect(fixNumber(correctableNumInvalid)).to.equal(null);
    expect(fixNumber("1ab2cd345efg67hi890lmno0")).to.deep.equal({
      correctNum: "12345678900",
      correction: "abcdefghilmno",
    });
    expect(fixNumber("29 1234 28704")).to.deep.equal({
      correctNum: "29123428704",
      correction: "  ",
    });
    expect(fixNumber("12 -aaaa 1213, dsjd909031")).to.equal(null);
  });
});
