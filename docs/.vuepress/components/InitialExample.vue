<template>
  <GridMultiSelect :items="items" item-key="id" item-label="id" group-by="name" v-model="value" />
</template>
<script>
import GridMultiSelect from "../../../src/GridMultiSelect";
export default {
  name: "initial-example",
  components: {
    GridMultiSelect
  },
  data() {
    return {
      value: [],
      items: [
        {
          g: 1,
          id: 1,
          name: "Hello World"
        },
        {
          g: 2,
          id: 2,
          name: "Hello World"
        },
        {
          g: 2,
          id: 3,
          name: "Hello World"
        }
      ]
    };
  }
};
</script>