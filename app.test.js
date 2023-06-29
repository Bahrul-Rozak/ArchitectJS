import showMenu from "./menu.mjs";
import generateArchitecture from "./architecture.mjs";

jest.mock("./menu.mjs", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("./architecture.mjs", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("main function", () => {
  let consoleLogSpy;
  let consoleErrorSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log");
    consoleErrorSpy = jest.spyOn(console, "error");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should call showMenu and generateArchitecture functions", async () => {
    showMenu.mockResolvedValueOnce("mvc");
    generateArchitecture.mockResolvedValueOnce();

    await import("./app.mjs");

    expect(showMenu).toHaveBeenCalled();
    expect(generateArchitecture).toHaveBeenCalledWith("mvc");
  });

  test("should log success message when project generation is successful", async () => {
    showMenu.mockResolvedValueOnce("mvc");
    generateArchitecture.mockResolvedValueOnce();

    await import("./app.mjs");

    expect(consoleLogSpy).toHaveBeenCalledWith(
      "Project successfully generated!"
    );
  });

  test("should log error message when project generation fails", async () => {
    showMenu.mockResolvedValueOnce("invalid");
    generateArchitecture.mockRejectedValueOnce(
      new Error("Invalid architecture selected")
    );

    await import("./app.mjs");

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Invalid architecture selected"
    );
  });
});
