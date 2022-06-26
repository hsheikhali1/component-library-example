import { render } from "@testing-library/react";
import Icon from "./Icon";

describe("<Icon />", () => {
  test("Does the icon render as a svg", () => {
    const { getByTestId } = render(<Icon name="action" />);
    const action = getByTestId("action");

    expect(action).toBeInTheDocument();
  });

  test("Does the icon render with the appropriate width", () => {
    const { getByTestId } = render(<Icon name="action" width={25} />);
    const action = getByTestId("action");

    expect(action.firstChild).toHaveAttribute("width", "25");
  });

  test("Does the icon render with the appropriate height", () => {
    const { getByTestId } = render(<Icon name="action" height={25} />);
    const action = getByTestId("action");

    expect(action.firstChild).toHaveAttribute("height", "25");
  });

  test("Does the icon color change when iconColor prop is passed", () => {
    const { getByTestId } = render(
      <Icon name="action" iconColor="text-peel-orange" />,
    );
    const action = getByTestId("action");

    expect(action).toHaveClass("text-peel-orange");
  });

  describe("<Icon name=\"checkmark\" />", () => {
    test("Does the checkmark background color change when iconBgColor prop is passed", () => {
      const { getByTestId } = render(
        <Icon name="checkmark" iconBgColor="fill-peel-orange" />,
      );
      const checkmark = getByTestId("checkmark");

      expect(checkmark.firstChild?.firstChild).toHaveClass("fill-peel-orange");
    });
  });
});
