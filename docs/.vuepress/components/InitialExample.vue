<template>
  <GridMultiSelect :items="items" item-key="id" item-label="text" v-model="selectedItems" />
</template>
<script>
import GridMultiSelect from "../../../src/components/GridMultiSelect";
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
          text: "Welcome"
        },
        {
          id: 2,
          text: "to"
        },
        {
          id: 3,
          text: "Vue Gridmultiselect"
        }
      ],
      items: [
        {
          id: 1,
          text: "Welcome"
        },
        {
          id: 2,
          text: "to"
        },
        {
          id: 3,
          text: "Vue Gridmultiselect"
        },
        {
          id: 4,
          text: "Documentation"
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