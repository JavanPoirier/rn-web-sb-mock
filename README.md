1. Visit `packages\app\screens\device\modals\delete.stories.tsx` notice the `useRouter` mock is commented out.

2. Visit `packages\app\utils\hooks\useRouter.mock.ts` notice the export calls `mockReturnValue`

3. Launch SB, view the story without error.

4. Change the import of `fn` from `@vitest/spy` to `@storybook/test`

5. Notice the story with error `Cannot read properties of undefined (reading 'replace')`

This behaviour should not differ in my opinion. To get no error with `@storybook/test` add the `mockReturnValue` call in `packages\app\screens\device\modals\delete.stories.tsx`