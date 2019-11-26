<template>
  <GridMultiSelect :items="items" item-key="test" item-label="name" v-model="value" />
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
          test: 1,
          name: "Hello World"
        }
      ]
    };
  }
};
</script>