// In utils.test.js

import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("Utils Functions", () => {
  test("getFullYear returns the current year", () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });

  test("getFooterCopy returns correct string for true and false arguments", () => {
    const trueResult = getFooterCopy(true);
    const falseResult = getFooterCopy(false);
    expect(trueResult).toBe("Holberton School");
    expect(falseResult).toBe("Holberton School main dashboard");
  });

  test("getLatestNotification returns the correct string", () => {
    const latestNotification = getLatestNotification();
    // Replace the placeholder with the expected latest notification string
    expect(latestNotification).toBe("Expected latest notification string");
  });
});
