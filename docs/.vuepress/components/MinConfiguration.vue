<template>
  <GridMultiSelect :items="items" item-key="id" item-label="name" v-model="selectedItem" />
</template>
<script>
import GridMultiSelect from "../../../src/GridMultiSelect";
export default {
  name: "example",
  components: {
    GridMultiSelect
  },
  data() {
    return {
      selectedItem: [],
      items: [
        {
          id: 1,
          name: "Mazda"
        },
        {
          id: 2,
          name: "Ford"
        },
        {
          id: 3,
          name: "Renault"
        },
        {
          id: 4,
          name: "Volvo"
        }
      ]
    };
  }
};
</script>
<style scoped>
.gridmultiselect {
  min-height: 100px;
  margin-top: 0.7rem;
}
</style>