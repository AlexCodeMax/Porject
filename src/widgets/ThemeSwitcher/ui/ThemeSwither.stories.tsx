import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';


import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme, useTheme} from 'app/providers/ThemeProvider';

import {ThemeSwitcher} from 'widgets/ThemeSwitcher';

export default {
    title: 'Example/ThemeSwitcher',
    component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;




const Template: ComponentStory<typeof ThemeSwitcher> = (args) =><ThemeSwitcher {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};
Normal.decorators = [ThemeDecorator(Theme.LIGHT)];




export const Dark = Template.bind({});
Dark.args = {


};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
