<template>
  <ul class="gridmultiselect__selecteditems">
    <li
      class="gridmultiselect__selecteditem--empty"
      v-if="selectedItems.length === 0"
    >{{selectedItemsEmptyMessage}}</li>
    <li
      v-else
      v-for="(selectedItem, index) in selectedItems"
      :key="selectedItem[itemKey]"
      class="gridmultiselect__selecteditem gridmultiselect__selecteditem--font-small"
      @click="selectItem(selectedItem)"
    >
      <div
        class="gridmultiselect__selecteditemtext"
        :class="[{'gridmultiselect__selecteditemtext--cursor-pointer': isRowDetailEnabled}, getRowDetailsIndicatorClass(selectedItem)]"
        @click="isRowDetailEnabled ? toggleDetails(selectedItem) : null"
      >
        <slot name="selected-item" :selectedItem="selectedItem">
          {{getItemLabel(selectedItem, "selectedItemLabel")}}
          <span
            v-if="isGroupingEnabled"
            class="gridmultiselect__selecteditemgroupbadge"
          >({{selectedItem[groupBy]}})</span>
        </slot>
        <transition name="gridmultiselect__slidedown">
          <div
            class="gridmultiselect__selecteditemdetails"
            v-if="isRowDetailEnabled"
            v-show="rowDetails.includes(selectedItem[itemKey])"
          >
            <slot
              name="selected-item-details"
              :selectedItem="selectedItem"
            >{{getItemLabel(selectedItem, "itemDetails")}}</slot>
          </div>
        </transition>
      </div>
      <div
        class="gridmultiselect__removebutton gridmultiselect__removebutton--font-small"
        @click="removeItem(index)"
      >x</div>
    </li>
    <li class="gridmultiselect__selecteditemitemsfooter" v-if="hasSlot('selected-items-footer')">
      <slot name="selected-items-footer"></slot>
    </li>
  </ul>
</template>
<script>
import { isEmpty, ensureValue } from "../utils";
import mixins from "../mixins";

export default {
  name: "selecteditems",
  mixins: [mixins],
  data() {
    return {
      rowDetails: []
    };
  },
  props: {
    selectedItems: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    selectedItemLabel() {
      const isItemLabelArray = Array.isArray(this.itemLabel);
      const hasSelectedItemLabelDefined =
        isItemLabelArray && this.itemLabel.length > 1;
      return hasSelectedItemLabelDefined
        ? this.itemLabel[1]
        : ensureValue(this.itemLabel);
    },
    selectedItemsEmptyMessage() {
      return ensureValue(this.emptyMessage.split("|"), 1);
    },
    isRowDetailEnabled() {
      return !isEmpty(this.itemDetails);
    },
    isGroupingEnabled() {
      return !isEmpty(this.groupBy);
    }
  },
  methods: {
    toggleDetails(item) {
      const isOpened = this.rowDetails.includes(item[this.itemKey]);

      if (!isOpened) {
        this.rowDetails.push(item[this.itemKey]);
        return;
      }

      const index = this.rowDetails.indexOf(item[this.itemKey]);
      this.rowDetails.splice(index, 1);
    },
    getRowDetailsIndicatorClass(item) {
      return this.isRowDetailEnabled
        ? `gridmultiselect__selecteditemtext--${
            this.rowDetails.includes(item[this.itemKey])
              ? "expanded"
              : "collapsed"
          }`
        : null;
    },
    selectItem(selectedItem) {
      if (this.menuVisible) return;
      this.$emit("item-selected", selectedItem);
    }
  }
};
</script>