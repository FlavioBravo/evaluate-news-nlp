import { validateUrl, checkForName } from "../src/client/js/nameChecker";

describe("nameChecker file", () => {
  test("validateUrl should be a function", () => {
    expect(typeof validateUrl).toBe("function");
  });

  test("validateUrlt should return a success response", () => {
    expect(validateUrl("https://www.google.com.pe")).toBe(true);
  });

  test("validateUrl should return a failed response", () => {
    expect(validateUrl("www.google")).toBe(false);
  });

  test("checkForName should return a document object", () => {
    const object = {
      mode: "tweet",
      value: "Flavio is a good man!",
    };
    expect(checkForName("Flavio is a good man!")).toMatchObject(object);
  });

  test("checkForName should return a document object", () => {
    const object = {
      mode: "document",
      value: "https://www.google.com.pe",
    };
    expect(checkForName("https://www.google.com.pe")).toMatchObject(object);
  });
});
