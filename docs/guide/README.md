# Getting Started

## Installation

### npm

```js
npm install vue-gridmultiselect --save
```

### cdn

```html
<script src="https://cdn.jsdelivr.net/npm/vue-gridmultiselect"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vue-gridmultiselect/dist/vue-gridmultiselect.css">
```

## Basic Usage

### npm

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

### cdn

```js
Vue.component('vue-gridmultiselect', VueGridMultiselect);
```