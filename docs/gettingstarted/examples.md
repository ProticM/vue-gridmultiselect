# Examples

## Minimum Configuration

Vue GridMultiselect requires a minimum of three properties to be set in order for it to function properly. These properties are:

- item-key (`String`) - Used internally by the Vue framework to correctly handle list updates. This key must be unique, and it's passed to the `:key` directive
- item-label (`String`) - Value to be displayed as text within the closable menu on the right
- items (`Array`) of objects - A list of objects to bound the component to

#### HTML

```html
<GridMultiSelect :items="items" item-key="id" item-label="name" v-model="selectedItem" />
```

#### JS

```js
export default {
  name: "example",
  components: { GridMultiSelect },
  data() {
    return {
      selectedItems: [],
      items: [
        { id: 1, name: "Say Hello" },
        { id: 2, name: "to" },
        { id: 3, name: "Vue GridMultiselect" }
      ]
    };
  }
};
```

#### Live Sample

<MinConfiguration />

## Custom Heading

## Labeling

### Items Label (the options list)

### Selected Items Label (the selected options list)

## No Data Message