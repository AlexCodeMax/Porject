import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';


import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';



import {NotFoundPage} from './NotFoundPage';

export default {
    title: 'Pages/MainPage',
    component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>;




const Template: ComponentStory<typeof NotFoundPage> = (args) =><NotFoundPage  />;

export const Normal = Template.bind({});
Normal.args = {};


export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
