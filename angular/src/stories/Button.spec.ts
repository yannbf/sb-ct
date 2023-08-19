import { test, expect } from '@storybook/playwright-ct';
import * as ButtonStories from './Button.stories';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
  const component = await mount(ButtonStories.Primary);
  await expect(component).toContainText('Button');
});