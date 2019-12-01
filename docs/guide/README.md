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
    item-label="text" 
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
      selectedItems: null,
      items: [
        { id: 1, text: "Say Hello" },
        { id: 2, text: "to" },
        { id: 3, text: "Vue GridMultiselect" },
        { id: 4, text: "Documentation" }
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