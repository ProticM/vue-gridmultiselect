<template>
  <GridMultiSelect
    class="green"
    :items="items"
    item-key="id"
    :item-label="['name', 'state|name']"
    v-model="selectedItems"
    title="Cities"
    menu-position="float"
    item-details="details"
  />
</template>
<script>
import GridMultiSelect from "../../../src/components/GridMultiSelect";
export default {
  name: "example-styled",
  components: {
    GridMultiSelect
  },
  data() {
    return {
      selectedItems: [
        {
          id: 1,
          name: "San Francisco",
          state: "USA",
          details: "San Francisco is home to a little bit of everything."
        },
        {
          id: 2,
          name: "Las Vegas",
          state: "USA",
          details:
            "Las Vegas officially the City of Las Vegas and often known simply as Vegas, is the 28th-most populated city in the United States."
        }
      ],
      items: [
        {
          id: 1,
          name: "San Francisco",
          state: "USA",
          details: "San Francisco is home to a little bit of everything."
        },
        {
          id: 2,
          name: "Las Vegas",
          state: "USA",
          details:
            "Las Vegas officially the City of Las Vegas and often known simply as Vegas, is the 28th-most populated city in the United States."
        },
        {
          id: 3,
          name: "Washington",
          state: "USA",
          details:
            "Washington officially the State of Washington, is a state in the Pacific Northwest region of the United States."
        },
        {
          id: 4,
          name: "Munich",
          state: "Germany",
          details:
            "Munich, Bavaria’s capital, is home to centuries-old buildings and numerous museums."
        },
        {
          id: 5,
          name: "Berlin",
          state: "Germany",
          details:
            "Berlin is the capital and largest city of Germany by both area and population."
        },
        {
          id: 6,
          name: "Rome",
          state: "Italy",
          details:
            "Rome is the capital city and a special comune of Italy. Rome also serves as the capital of the Lazio region."
        }
      ]
    };
  }
};
</script>
<style>
.green.gridmultiselect {
  border: 1px solid #a0c334;
  color: #5d5d5d;
}
.green.gridmultiselect:focus {
  border: 1px solid #a0c334;
}
.green .gridmultiselect__header {
  background-color: #a0c334;
}
.green .gridmultiselect__item--selected {
  background-color: #f4eda9;
  color: #726a14;
}
.green .gridmultiselect__selecteditem:nth-child(odd) {
  background-color: #f5f9ea;
}
</style>