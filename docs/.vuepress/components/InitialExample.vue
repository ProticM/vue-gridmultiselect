<template>
  <GridMultiSelect
    :items="items"
    item-key="id"
    item-label="name"
    v-model="selectedItems"
    title="Cities"
    split-by="locationState"
    group-by="state"
    item-details="details"
    menu-position="float"
  />
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
          name: "San Francisco",
          state: "USA",
          details: "San Francisco is home to a little bit of everything.",
          locationState: "Visited"
        },
        {
          id: 5,
          name: "Berlin",
          state: "Germany",
          details:
            "Berlin is the capital and largest city of Germany by both area and population.",
          locationState: "Not Visited"
        }
      ],
      items: [
        {
          id: 1,
          name: "San Francisco",
          state: "USA",
          details: "San Francisco is home to a little bit of everything.",
          locationState: "Visited"
        },
        {
          id: 2,
          name: "Las Vegas",
          state: "USA",
          details:
            "Las Vegas officially the City of Las Vegas and often known simply as Vegas, is the 28th-most populated city in the United States.",
          locationState: "Visited"
        },
        {
          id: 3,
          name: "Washington",
          state: "USA",
          details:
            "Washington officially the State of Washington, is a state in the Pacific Northwest region of the United States.",
          locationState: "Not Visited"
        },
        {
          id: 4,
          name: "Munich",
          state: "Germany",
          details:
            "Munich, Bavaria’s capital, is home to centuries-old buildings and numerous museums.",
          locationState: "Visited"
        },
        {
          id: 5,
          name: "Berlin",
          state: "Germany",
          details:
            "Berlin is the capital and largest city of Germany by both area and population.",
          locationState: "Not Visited"
        },
        {
          id: 6,
          name: "Rome",
          state: "Italy",
          details:
            "Rome is the capital city and a special comune of Italy. Rome also serves as the capital of the Lazio region.",
          locationState: "Not Visited"
        }
      ]
    };
  },
  methods: {
    clear() {
      this.view;
    }
  }
};
</script>
<style scoped>
.gridmultiselect {
  margin-top: 0.7rem;
  min-height: 150px;
}
</style>