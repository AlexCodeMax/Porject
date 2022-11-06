import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';


import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';


import MainPage from './MainPage';

export default {
    title: 'Pages/MainPage',
    component: MainPage,
} as ComponentMeta<typeof MainPage>;




const Template: ComponentStory<typeof MainPage> = (args) =><MainPage  />;

export const Normal = Template.bind({});
Normal.args = {};


export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
