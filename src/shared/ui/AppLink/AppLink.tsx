
import cls from './AppLink.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import type {LinkProps} from 'react-router-dom';
import {Link} from 'react-router-dom';
import type {FC} from 'react';
import React from 'react';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
    RED = 'red'

}

type AppLinkProps = {
	children?: React.ReactNode;
	className?: string;
	theme?: AppLinkTheme;
} & LinkProps;

export const AppLink: FC<AppLinkProps> = props => {
    const {to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps} = props;
    return (
        <Link to={to}
            className={classNames(cls.navbar, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

