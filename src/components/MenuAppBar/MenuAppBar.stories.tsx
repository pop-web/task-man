import MenuAppBar from "./MenuAppBar";
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
  title: "MenuAppBar",
  component: MenuAppBar,
  decorators: [
    (story: any) => (
      <AppContext.Provider value={value}>{story()}</AppContext.Provider>
    ),
  ],
};

const Template = (args: any) => <MenuAppBar {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  props: {
    history: {
      push: action("push!"),
    },
  },
};
