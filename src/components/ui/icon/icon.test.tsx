import { expect, test } from "vitest";
import { render } from "vitest-browser-react";

import { ChevronsUpDownIcon, CircleIcon, SearchIcon } from "./icon";

const Icons = [
  { name: "ChevronsUpDownIcon", Icon: ChevronsUpDownIcon },
  { name: "CircleIcon", Icon: CircleIcon },
  { name: "SearchIcon", Icon: SearchIcon },
];

Icons.forEach(({ name, Icon }) => {
  test(name, () => {
    const icon = render(<Icon />);

    // Snapshots are not the best solution, it woould be much better to set up Storybook + Chromatic
    expect(icon).toMatchSnapshot();
  });
});

test("Icon size", () => {
  const icon = render(<CircleIcon size={16} />);

  // Snapshots are not the best solution, it woould be much better to set up Storybook + Chromatic
  expect(icon).toMatchSnapshot();
});
