import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';


import {AppLink, AppLinkTheme} from 'shared/ui/AppLink/AppLink';
import {BrowserRouter} from 'react-router-dom';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';


export default {
    title: 'Example/AppLink',
    component: AppLink,
    args: {
        to: '/',
        children: 'Text',
    }
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) =><BrowserRouter> <AppLink {...args} /></BrowserRouter>;

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {

    theme: AppLinkTheme.PRIMARY
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];




export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    theme: AppLinkTheme.SECONDARY

};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const RedDark = Template.bind({});
RedDark.args = {
    theme: AppLinkTheme.RED

};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];




