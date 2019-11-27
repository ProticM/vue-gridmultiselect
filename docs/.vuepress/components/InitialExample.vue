<template>
  <GridMultiSelect :items="items" item-key="id" item-label="name" v-model="selectedItems" />
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
      selectedItems: [
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
  margin-top: 0.7rem;
}
</style>