import Lists from "./Lists";
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
  title: "Lists",
  component: Lists,
  decorators: [
    (story: any) => (
      <AppContext.Provider value={value}>{story()}</AppContext.Provider>
    ),
  ],
};

const Template = (args: any) => <Lists {...args} />;

export const Default: any = Template.bind({});
Default.args = {
  history: {
    push: action("push!"),
  },
};
