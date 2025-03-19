import { Button } from "@/components/ui/button/button";
import { describe, expect, test } from "vitest";
import { render } from "vitest-browser-react";

const variants = ["default", "primary", "secondary"] as const;

describe("variants", () => {
  variants.forEach((variant) => {
    test(`${variant} variant`, () => {
      const props = variant === "default" ? {} : { variant };

      const { getByText } = render(<Button {...props}>Click me!</Button>);

      const button = getByText("Click me!").element();
      // Snapshots are not the best solution, it woould be much better to set up Storybook + Chromatic
      expect(button).toMatchSnapshot();
    });
  });
});

test("Button with icon", () => {
  const { getByText } = render(
    <Button>
      <Button.Icon icon="search" />
      Click me!
    </Button>,
  );
  const button = getByText("Click me!").element();
  // Snapshots are not the best solution, it woould be much better to set up Storybook + Chromatic
  expect(button).toMatchSnapshot();
});
