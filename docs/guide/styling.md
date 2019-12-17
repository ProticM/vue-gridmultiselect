# Styling

At the moment, the only way of styling Vue GridMultiselect is by overriding the default classes.

> Somewhere in the future, we plan to implement CSS variables support

## Overriding Default Styles

To style a Vue GridMultiselect component, you need to override a few CSS classes as shown below. Do note that we've added a CSS class `green` to our component. This way we make sure that the styling is applied to that single component instance only. In order to apply the styling to all instances you should ommit the `.green` prefix.

<Styling />

```html
<GridMultiSelect
  class="green"
  ...
/>

<style>
  .green.gridmultiselect {
    border: 1px solid #a0c334;
    color: #5d5d5d;
  }
  .green.gridmultiselect:focus {
    border: 1px solid #a0c334;
  }
  .green .gridmultiselect__header {
    background-color: #a0c334;
  }
  .green .gridmultiselect__item--selected {
    background-color: #f4eda9;
    color: #726a14;
  }
  .green .gridmultiselect__selecteditem:nth-child(odd) {
    background-color: #f5f9ea;
  }
</style>
```