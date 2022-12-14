
import cls from './Button.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import type {ButtonHTMLAttributes, FC} from 'react';
import React from 'react';

export const enum ThemeButton {
	CLEAR = 'clear',
    OUTLINE = 'outline'
}


type ButtonProps = {
	children?: React.ReactNode;
	className?: string;
	theme?: ThemeButton;
} & ButtonHTMLAttributes<HTMLButtonElement>;


export const Button: FC<ButtonProps> = props => {
    const {className, children, theme, ...otherProps} = props;

    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

