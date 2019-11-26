# Getting Started

## Intallation

### via NPM

```js
npm install vue-gridmultiselect --save
```

## Basic Usage

```html
<GridMultiSelect :items="items" item-key="id" item-label="name" v-model="selectedItem" />
```

```js
export default {
  name: "example",
  components: { GridMultiSelect },
  data() {
    return {
      selectedItem: [],
      items: [
        { id: 1, name: "Say Hello" },
        { id: 2, name: "to" },
        { id: 3, name: "Vue GridMultiselect" }
      ]
    };
  }
};
```

# Examples

## Minimum Configuration

## Custom Heading

## Labeling

### Items Label (the options list)

### Selected Items Label (the selected options list)

## No Data Message


