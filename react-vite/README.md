## React Vite

When running `yarn test-ct`, I have the following issues:

1 - It seems like it does not undertand css:

```js
SyntaxError: /xyz/react/src/stories/button.css: Unexpected token (1:0)

> 1 | .storybook-button {
    | ^
  2 |   font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  3 |   font-weight: 700;
  4 |   border: 0;


   at src/stories/Button.spec.ts:1

> 1 | import { test, expect } from '@storybook/playwright-ct';
  2 | import * as ButtonStories from './Button.stories';
  3 |
  4 | test.use({ viewport: { width: 500, height: 500 } });
```

2 - when commenting out the css import in the Button component, there is a followup error:

```js
Error: toContainText can be only used with Locator object

      6 | test('should work', async ({ mount }) => {
      7 |   const component = await mount(ButtonStories.Primary);
    > 8 |   await expect(component).toContainText('Button');
        |                           ^
      9 | });
```