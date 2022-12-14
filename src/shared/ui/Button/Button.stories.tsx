import React from 'react';
import {ComponentStory, ComponentMeta, addDecorator} from '@storybook/react';

import {Button, ThemeButton} from './Button';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import {Theme} from 'app/providers/ThemeProvider';



export default {
    title: 'Example/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Standart = Template.bind({});
Standart.args = {
    children: 'Btn',
};





export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR
};




export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE
};


export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
