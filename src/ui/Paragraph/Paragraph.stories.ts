import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from './Paragraph';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'mewa/Paragraph',
  component: Paragraph,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    children: 'Paragraph',
    className: 'text-blue-600 bg-gray-200 p-4 rounded',
  },
};