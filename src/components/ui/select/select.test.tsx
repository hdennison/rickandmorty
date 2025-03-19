import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Select } from "./select";

test("Button with icon", () => {
  const select = render(
    <Select>
      <Select.Option>Option 1</Select.Option>
      <Select.Option selected>Option 2</Select.Option>
    </Select>,
  );

  // Snapshots are not the best solution, it woould be much better to set up Storybook + Chromatic
  expect(select).toMatchSnapshot();
});
