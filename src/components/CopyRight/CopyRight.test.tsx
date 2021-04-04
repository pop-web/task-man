import renderer from "react-test-renderer";
import CopyRight from "../CopyRight";

it("Page snapshot testing", () => {
  const component = renderer.create(<CopyRight />);
  expect(component).toMatchSnapshot();
});
