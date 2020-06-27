import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-test',
  styleUrl: 'my-test.scss',
  shadow: true,
})
export class MyComponent {
  componentWillLoad() {
    console.log('my-test will load');
  }

  render() {
    console.log('my-test render');
    return <div class="transform-test" />;
  }
}
