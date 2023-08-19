## Angular

There are a few issues with the approach:

`yarn create playwright --ct` does not contain an angular equivalent, so I had to choose any other one, e.g. react.

When running Playwright, it fails as it does not understand the @decorator syntax from Angular:

```js
SyntaxError /xyz/angular/src/stories/button.component.ts: Decorators must be placed *after* the 'export' keyword. Remove the 'decoratorsBeforeExport: false' option to use the '@decorator export class {}' syntax. (17:0)
  15 |   styleUrls: ['./button.css'],
  16 | })
> 17 | export default class ButtonComponent {
     | ^
  18 |   /**
  19 |    * Is this the principal call to action on the page?
  20 |    */

   at src/stories/Button.spec.ts:17
```