import {Theme, ThemeProvider} from 'app/providers/ThemeProvider';
import {Story} from '@storybook/react';


export const ThemeDecorator = (theme:  Theme) => (StoryComponent:Story) => {

    return <div className={`app ${theme}`}>
        <ThemeProvider >
            <StoryComponent />
        </ThemeProvider>
        
    </div>;
};