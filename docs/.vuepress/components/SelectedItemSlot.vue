<template>
  <GridMultiSelect
    :items="items"
    item-key="id"
    item-label="name"
    group-by="state"
    v-model="selectedItems"
    title="Cities"
  >
    <template
      v-slot:selectedItem="{selectedItem}"
    >The city {{selectedItem.name}} is located in {{selectedItem.state}}</template>
  </GridMultiSelect>
</template>
<script>
import GridMultiSelect from "../../../src/GridMultiSelect";
export default {
  name: "example-selecteditemsslot",
  components: { GridMultiSelect },
  data() {
    return {
      selectedItems: [
        { id: 1, name: "San Francisco", state: "USA" },
        { id: 5, name: "Berlin", state: "Germany" }
      ],
      items: [
        { id: 1, name: "San Francisco", state: "USA" },
        { id: 2, name: "Las Vegas", state: "USA" },
        { id: 3, name: "Washington", state: "USA" },
        { id: 4, name: "Munich", state: "Germany" },
        { id: 5, name: "Berlin", state: "Germany" },
        { id: 6, name: "Rome", state: "Italy" }
      ]
    };
  }
};
</script>
<style scoped>
.gridmultiselect {
  min-height: 200px;
  margin-top: 0.7rem;
}
</style>