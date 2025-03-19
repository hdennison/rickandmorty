import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Panel } from "./panel";

test("Renders as wrapper", () => {
  const panel = render(<Panel id="panel">Foo</Panel>);

  // Snapshots are not the best solution, it woould be much better to set up Storybook + Chromatic
  expect(panel).toMatchSnapshot();
});

test("Renders asChild", () => {
  const panel = render(
    <Panel id="Panel" asChild>
      <article>Bar</article>
    </Panel>,
  );

  // Snapshots are not the best solution, it woould be much better to set up Storybook + Chromatic
  expect(panel).toMatchSnapshot();
});
