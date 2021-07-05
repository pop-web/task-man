import AddTaskFrom from "./AddTaskForm";
import { action } from "@storybook/addon-actions";
import AppContext from "../../contexts/AppContext";

const value = {
  state: {
    auth: {},
    edit_task: {},
    modal: true,
    tasks: [],
  },
  dispatch: action("dispatch"),
};

// export default {
//   title: "AddTaskFrom",
//   component: AddTaskFrom,
//   decorators: [
//     (story: any) => (
//       <AppContext.Provider value={value}>{story()}</AppContext.Provider>
//     ),
//   ],
// };

// const Template = () => <AddTaskFrom />;

// export const Default = Template.bind({});
