# Getting Started

## Intallation

### via NPM

```js
npm install vue-gridmultiselect --save
```

## Basic Usage

```html
<template>
	<GridMultiSelect 
		:items="items" 
		item-key="id" 
		item-label="name" 
		v-model="selectedItems" 
	/>
</template>

<script>
import GridMultiSelect from 'vue-gridmultiselect';
import 'vue-gridmultiselect/dist/vue-gridmultiselect.css';

export default {
  name: "example",
  components: { GridMultiSelect },
  data() {
    return {
      selectedItems: [],
      items: [
        { id: 1, name: "Say Hello" },
        { id: 2, name: "to" },
        { id: 3, name: "Vue GridMultiselect" },
        { id: 4, name: "Documentation" }
      ]
    };
  }
};
</script>
```

### Live Example

<InitialExample />