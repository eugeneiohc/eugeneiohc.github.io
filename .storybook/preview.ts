import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '../src/components/ThemeProvider';

addDecorator((storyFn: Function) => <ThemeProvider>{storyFn()}</ThemeProvider>);
