<template>
  <section class="gridmultiselect" @click="toggleMenu">
    <header class="gridmultiselect__header">
      <span class="gridmultiselect__title">{{title}}</span>
      <transition name="gridmultiselect__slide">
        <button
          class="gridmultiselect__burger"
          v-show="!menuVisible"
          @click.stop.prevent="menuVisible = true"
        >
          <span class="gridmultiselect__burgerline">&nbsp;</span>
          <span class="gridmultiselect__burgerline">&nbsp;</span>
          <span class="gridmultiselect__burgerline">&nbsp;</span>
        </button>
      </transition>
    </header>
    <ul class="gridmultiselect__selecteditems">
      <li
        class="gridmultiselect__selecteditem--empty"
        v-if="selectedItems.length === 0"
      >{{selectedItemsEmptyMessage}}</li>
      <li
        v-else
        v-for="(selectedItem, index) in selectedItems"
        :key="selectedItem[itemKey]"
        class="gridmultiselect__selecteditem"
        @click="selectItem(selectedItem)"
      >
        <span class="gridmultiselect__selecteditemtext">
          <slot
            name="selectedItem"
            :selectedItem="selectedItem"
          >{{getItemLabel(selectedItem, true)}}</slot>
        </span>
        <span
          class="gridmultiselect__removebutton gridmultiselect__removebutton--red gridmultiselect__removebutton--font-small"
          @click.stop.prevent="removeItem(index)"
        >X</span>
      </li>
    </ul>
    <transition name="gridmultiselect__slide">
      <aside ref="menu" v-show="menuVisible" class="gridmultiselect__items-wrap">
        <ul class="gridmultiselect__items">
          <li class="gridmultiselect__searchfield-wrap" v-if="searchable">
            <input
              class="gridmultiselect__searchfield gridmultiselect__searchfield--font-small"
              placeholder="Search..."
              v-model="searchTerm"
            />
          </li>
          <li
            class="gridmultiselect__item--empty"
            v-if="internalItems.length === 0"
          >{{itemsEmptyMessage}}</li>
          <li
            class="gridmultiselect__item"
            v-else
            v-for="item in internalItems"
            :key="item[itemKey]"
          >
            <span class="gridmultiselect__itemcb-wrap">
              <input
                type="checkbox"
                class="gridmultiselect__itemcb"
                :id="'item-cb' + item[itemKey]"
                :value="item"
                v-model="selectedItems"
              />
            </span>
            <span class="gridmultiselect__itemtext">
              <slot name="item" :item="item">
                <label
                  class="gridmultiselect__itemlabel gridmultiselect__itemlabel--font-small"
                  :for="'item-cb' + item[itemKey]"
                >{{getItemLabel(item)}}</label>
              </slot>
            </span>
          </li>
        </ul>
      </aside>
    </transition>
  </section>
</template>
<script>
import { isEmpty } from "./utils/utils";
export default {
  name: "vue-gridmultiselect",
  data() {
    return {
      menuVisible: false,
      searchTerm: null
    };
  },
  props: {
    title: {
      type: String,
      default: "Grid Multiselect"
    },
    itemLabel: {
      type: String,
      required: true
    },
    itemKey: {
      type: String,
      required: true
    },
    selectedItemLabel: {
      type: String
    },
    items: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    },
    searchable: {
      type: Boolean,
      default: true
    },
    itemsEmptyMessage: {
      type: String,
      default: "No Data"
    },
    selectedItemsEmptyMessage: {
      type: String,
      default: "No Data"
    }
  },
  computed: {
    internalSelectedItemLabel() {
      return this.selectedItemLabel || this.itemLabel;
    },
    internalItems() {
      const copy = this.items.map(item => ({ ...item }));

      return isEmpty(this.searchTerm)
        ? copy
        : copy.filter(item => {
            let isOk = false;
            this.itemLabel.split("|").forEach(label => {
              isOk =
                isOk ||
                item[label.trim()]
                  .toLowerCase()
                  .indexOf(this.searchTerm.trim().toLowerCase()) > -1;
            });
            return isOk;
          });
    },
    selectedItems: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      }
    }
  },
  methods: {
    toggleMenu(ev) {
      const menu = this.$refs["menu"];
      if (ev.target !== menu && !menu.contains(ev.target)) {
        this.menuVisible = false;
      }
    },
    removeItem(index) {
      const removedItem = this.selectedItems.splice(index, 1);
      this.$emit("item-removed", removedItem);
    },
    getItemLabel(item, isSelectedItem) {
      return (isSelectedItem ? this.internalSelectedItemLabel : this.itemLabel)
        .split("|")
        .map(label => item[label.trim()])
        .join(" ")
        .trim();
    },
    selectItem(selectedItem) {
      if (this.menuVisible) return;
      this.$emit("item-selected", selectedItem);
    }
  }
};
</script>
<style>
.gridmultiselect {
  font-family: inherit;
  display: block;
  border: 1px solid var(--vue-gridmultiselect-border-color, #e6eceb);
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  color: var(--vue-gridmultiselect-color, #005f89);
  font-size: 16px;
  text-align: left;
  position: relative;
}
.gridmultiselect__header {
  background-color: var(
    --vue-gridmultiselect-header-title-background-color,
    #0093b7
  );
  color: var(--vue-gridmultiselect-title-header-color, #fff);
  padding: var(--vue-gridmultiselect-header-padding, 0.5rem);
  display: flex;
  justify-content: space-between;
}

.gridmultiselect__burger {
  outline: none;
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  outline: none;
}
.gridmultiselect__burger:focus {
  outline: none;
  border: none;
}
.gridmultiselect__burgerline {
  background-color: #fff;
  height: 2px;
  width: 20px;
  display: block;
  margin-top: 3px;
}

.gridmultiselect__selecteditems,
.gridmultiselect__items {
  list-style: none;
  margin: 0;
  padding: 0;
}
.gridmultiselect__selecteditems {
  padding: 0.5rem;
}
.gridmultiselect__items-wrap {
  max-width: 50%;
  min-width: 20%;
  padding: 0.2rem;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  background-color: rgba(255, 255, 255);
  box-shadow: -5px 0px 5px -3px;
  border-left: 1px solid var(--vue-gridmultiselect-border-color, #e6eceb);
  overflow-y: auto;
  z-index: 1;
}
.gridmultiselect__searchfield-wrap {
  padding-top: 0.2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--vue-gridmultiselect-border-color, #e6eceb);
}
.gridmultiselect__searchfield {
  width: 100%;
  display: block;
  outline: none;
  border: 1px solid var(--vue-gridmultiselect-border-color, #e6eceb);
  border-radius: 4px;
  padding: 0.2rem;
}

.gridmultiselect__selecteditem {
  border: 1px solid var(--vue-gridmultiselect-border-color, #e6eceb);
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.gridmultiselect__selecteditemtext {
  padding: 0.5rem;
}
.gridmultiselect__removebutton {
  padding: 0 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
.gridmultiselect__removebutton:hover {
  transform: scale(1.2, 1.2);
}
.gridmultiselect__item {
  padding: 0.2rem 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid var(--vue-gridmultiselect-border-color, #e6eceb);
}

.gridmultiselect__itemcb-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.gridmultiselect__itemcb {
  cursor: pointer;
}

.gridmultiselect__itemtext {
  padding-left: 0.2rem;
  cursor: pointer;
  display: flex;
  flex-grow: 1;
}
.gridmultiselect__itemlabel {
  margin: 0;
  cursor: pointer;
  flex-grow: 1;
}
.gridmultiselect__itemlabel--font-small,
.gridmultiselect__removebutton--font-small,
.gridmultiselect__searchfield--font-small {
  font-size: 12px;
}
.gridmultiselect__selecteditem--empty,
.gridmultiselect__item--empty {
  text-align: center;
  padding: 0.5rem;
  opacity: 0.6;
}

.gridmultiselect__slide-enter-active,
.gridmultiselect__slide-leave-active {
  transition: all 0.3s ease;
}
.gridmultiselect__slide-enter,
.gridmultiselect__slide-leave-to {
  transform: translateX(15px);
  opacity: 0;
}
.gridmultiselect__removebutton--red {
  color: #ff1a00;
}
</style>