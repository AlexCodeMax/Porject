import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';
import {Navbar} from 'widgets/NavBar';
import {BrowserRouter} from 'react-router-dom';


export default {
    title: 'widget/Navbar',
    component: Navbar,
} as ComponentMeta<typeof Navbar>;


const Template: ComponentStory<typeof Navbar> = (args) => <BrowserRouter><Navbar {...args} /></BrowserRouter>;

export const Light = Template.bind({});
Light.args = {

};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

