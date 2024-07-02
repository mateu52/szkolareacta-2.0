import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'mewa/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    label: "Click me",
    className: "text-blue-600 bg-gray-200 p-4 rounded"
  },
};