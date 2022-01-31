import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StatusContainer } from '../components/Status/StatusContainer';

export default {
  title: 'Example/Header',
  component: StatusContainer,
} as ComponentMeta<typeof StatusContainer>;

const Template: ComponentStory<typeof StatusContainer> = (args) => <StatusContainer {...args} />;

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {},
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};
