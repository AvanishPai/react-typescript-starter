import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Message, { Props } from './index';

export default {
  title: 'Message',
  component: Message,
} as Meta;

const Template: Story<Props> = (args) => <Message {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  text: 'hello world!',
};
