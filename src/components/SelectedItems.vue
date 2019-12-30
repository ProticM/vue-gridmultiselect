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
        <slot name="selected-item" :data="selectedItem">
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
              :data="selectedItem"
            >{{getItemLabel(selectedItem, "itemDetails")}}</slot>
          </div>
        </transition>
      </div>
      <div
        class="gridmultiselect__removebutton gridmultiselect__removebutton--font-small"
        @click.stop.prevent="removeItem(index)"
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
    },
    viewName: {
      type: String
    },
    menuVisible: {
      type: Boolean
    },
    isSplitViewEnabled: {
      type: Boolean
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
      this.$parent.$emit("item-selected", selectedItem);
    },
    removeItem(index) {
      const removedItem = this.selectedItems.splice(index, 1).pop();
      if (this.isSplitViewEnabled) {
        this.$emit("item-removed", removedItem, this.viewName);
      } else {
        this.$parent.$emit("item-removed", removedItem);
      }
    }
  }
};
</script>
<style>
.gridmultiselect__selecteditems {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: inherit;
  min-height: inherit;
}
.gridmultiselect__selecteditem--empty {
  text-align: center;
  padding: 0.5rem;
  opacity: 0.6;
}
.gridmultiselect__selecteditemitemsfooter {
  padding: 0.5rem;
  margin-top: auto;
}

.gridmultiselect__selecteditem {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.gridmultiselect__selecteditem:not(:last-child) {
  border-bottom: 1px solid #e6eceb;
}

.gridmultiselect__selecteditem:nth-child(odd) {
  background-color: #f9f9f9;
}

.gridmultiselect__selecteditemtext {
  padding: 0.5rem;
  overflow: hidden;
  word-break: break-word;
  white-space: normal;
  flex-grow: 1;
}
.gridmultiselect__selecteditemtext--collapsed::before,
.gridmultiselect__selecteditemtext--expanded::before {
  display: inline-block;
  color: #b8bcbc;
  padding-top: 2px;
  border-style: solid;
  border-width: 5px 5px 0;
  border-color: #b8bcbc transparent transparent;
  content: "";
  border-radius: 2px;
  transition: transform 0.3s ease;
  margin-right: 5px;
}

.gridmultiselect__selecteditemtext--expanded::before {
  transform: rotate(180deg);
  margin-bottom: 2px;
}
.gridmultiselect__selecteditemgroupbadge {
  font-size: 10px;
  font-style: italic;
}
.gridmultiselect__selecteditemdetails {
  padding-top: 0.5rem;
  cursor: auto;
  width: 100%;
}
.gridmultiselect__selecteditem--font-small {
  font-size: 13px;
}
.gridmultiselect__selecteditemtext--cursor-pointer {
  cursor: pointer;
}
</style>