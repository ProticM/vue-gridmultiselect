<template>
  <GridMultiSelect
    :items="items"
    item-key="id"
    item-label="name"
    v-model="selectedItem"
    title="Cities"
  />
</template>
<script>
import GridMultiSelect from "../../../src/GridMultiSelect";
export default {
  name: "example-customheading",
  components: {
    GridMultiSelect
  },
  data() {
    return {
      selectedItem: [],
      items: [
        {
          id: 1,
          name: "San Francisco"
        },
        {
          id: 2,
          name: "Las Vegas"
        },
        {
          id: 3,
          name: "Washington"
        },
        {
          id: 4,
          name: "Munich"
        },
        {
          id: 5,
          name: "Berlin"
        },
        {
          id: 6,
          name: "Rome"
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