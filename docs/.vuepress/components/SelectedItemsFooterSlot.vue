<template>
  <GridMultiSelect
    :items="items"
    item-key="id"
    item-label="name"
    group-by="state"
    v-model="selectedItems"
    title="Cities"
  >
    <template v-slot:selected-items-footer>
      <div class="buttons">
        <button @click="save">Save</button>
        <button @click="deselect">Cancel</button>
      </div>
    </template>
  </GridMultiSelect>
</template>
<script>
import GridMultiSelect from "../../../src/GridMultiSelect";
export default {
  name: "example-selecteditemsfooterslot",
  components: { GridMultiSelect },
  data() {
    return {
      selectedItems: [{ id: 1, name: "San Francisco", state: "USA" }],
      items: [
        { id: 1, name: "San Francisco", state: "USA" },
        { id: 2, name: "Las Vegas", state: "USA" },
        { id: 3, name: "Washington", state: "USA" },
        { id: 4, name: "Munich", state: "Germany" },
        { id: 5, name: "Berlin", state: "Germany" },
        { id: 6, name: "Rome", state: "Italy" }
      ]
    };
  },
  methods: {
    save() {
      alert(JSON.stringify(this.selectedItems));
    },
    deselect() {
      this.selectedItems = [];
    }
  }
};
</script>
<style scoped>
.gridmultiselect {
  min-height: 200px;
  margin-top: 0.7rem;
}
.buttons {
  text-align: right;
}
.buttons > button {
  background-color: #32a8c5;
  color: #fff;
  outline: none;
  padding: 0.5rem;
  border: 1px solid #e6eceb;
  border-radius: 4px;
  cursor: pointer;
}
</style>