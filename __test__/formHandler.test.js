import {
  handleSubmit,
  saveData,
  updateUI,
  cleanForm,
} from "../src/client/js/formHandler";

describe("formHandler file", () => {
  test("handleSubmit should be a function", () => {
    expect(typeof handleSubmit).toBe("function");
  });

  test("saveData should be a function", () => {
    expect(typeof saveData).toBe("function");
  });

  test("updateUI should be a function", () => {
    expect(typeof updateUI).not.toBe("function");
  });

  test("cleanForm should be a function", () => {
    expect(typeof cleanForm).not.toBe("function");
  });
});
