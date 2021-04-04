import OpenModalButton from "./OpenModalButton";
import { action } from "@storybook/addon-actions";
import AppContext from "../../contexts/AppContext";

const value = {
  state: {
    auth: {},
    edit_task: {},
    modal: false,
    tasks: [],
  },
  dispatch: action("dispatch"),
};

export default {
  title: "OpenModalButton",
  component: OpenModalButton,
  decorators: [
    (story: any) => (
      <AppContext.Provider value={value}>{story()}</AppContext.Provider>
    ),
  ],
};

const Template = () => <OpenModalButton />;

export const Default = Template.bind({});
