import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Container } from "./container";

test("Renders as wrapper", () => {
  const container = render(<Container id="container">Foo</Container>);

  // Snapshots are not the best solution, it woould be much better to set up Storybook + Chromatic
  expect(container).toMatchSnapshot();
});

test("Renders asChild", () => {
  const container = render(
    <Container id="container" asChild>
      <article>Bar</article>
    </Container>,
  );

  // Snapshots are not the best solution, it woould be much better to set up Storybook + Chromatic
  expect(container).toMatchSnapshot();
});
