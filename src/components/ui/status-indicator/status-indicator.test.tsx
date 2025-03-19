import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { StatusIndicator } from "./status-indicator";

const allStatus = ["Alive", "Dead", "unknown"] as const;

describe("variants", () => {
  allStatus.forEach((status) => {
    test(`Status: ${status}`, () => {
      const indicator = render(<StatusIndicator status={status} />);

      // Snapshots are not the best solution, it woould be much better to set up Storybook + Chromatic
      expect(indicator).toMatchSnapshot();
    });
  });
});
