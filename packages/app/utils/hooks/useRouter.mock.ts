import { fn } from '@vitest/spy';
// import { fn } from '@storybook/test';
import * as actual from './useRouter';

// export const useRouter = fn(actual.useRouter).mockName('useRouter')

export const useRouter = fn(actual.useRouter).mockName('useRouter').mockReturnValue({ 
    back: () => null,
    push: () => null,
    replace: () => null,
    parseNextPath: () => '',
});