import React from 'react';
import './loader.scss';
import {classNames} from 'shared/lib/classNames/classNames';


interface PageLoaderProps {
    className?: string
}

export const Loader = ({className}:PageLoaderProps) => {
    return (
        <div className={classNames('lds-roller', {}, [className])}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>


    );
};

