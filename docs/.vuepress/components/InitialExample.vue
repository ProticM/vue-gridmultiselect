<template>
  <GridMultiSelect :items="items" item-key="id" item-label="name" v-model="selectedItem" />
</template>
<script>
import GridMultiSelect from "../../../src/GridMultiSelect";
export default {
  name: "example-initial",
  components: {
    GridMultiSelect
  },
  data() {
    return {
      selectedItem: [
        {
          id: 1,
          name: "Welcome"
        }
      ],
      items: [
        {
          id: 1,
          name: "Welcome"
        },
        {
          id: 2,
          name: "to"
        },
        {
          id: 3,
          name: "Vue Gridmultiselect"
        },
        {
          id: 4,
          name: "Documentation"
        }
      ]
    };
  }
};
</script>
<style scoped>
.gridmultiselect {
  min-height: 200px;
}
</style>