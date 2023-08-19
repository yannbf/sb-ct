## Preact Webpack

When running `yarn test-ct`, I have the following issues:


1 - `yarn create playwright --ct` does not contain a preact equivalent, so I had to choose any other one, e.g. react.

1 - It fails with the css import:

```js
SyntaxError: Unexpected token '.'
   at src/stories/Button.jsx:2

  1 | import PropTypes from 'prop-types';
> 2 | import './button.css';
    | ^
  3 |
  4 | /**
  5 |  * Primary UI component for user interaction
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