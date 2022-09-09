import { Button } from "@mui/material";

function Example(props) {
  return (
    <Button {...props}>Click me!</Button>
  );
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Example,
};

const Template = (args) => <Example {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: "submit",
  variant: "contained",
};
