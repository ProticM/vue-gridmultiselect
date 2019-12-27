<template>
  <div
    class="gridmultiselect"
    :class="{'gridmultiselect--floatingmenu':isMenuFloating}"
    :tabindex="searchable ? -1 : tabIndex"
    @blur="menuVisible = false"
  >
    <div class="gridmultiselect__header">
      <span class="gridmultiselect__title">{{title}}</span>
      <transition name="gridmultiselect__slide">
        <button class="gridmultiselect__burger" v-show="!menuVisible" @click="showMenu">
          <span class="gridmultiselect__burgerline">&nbsp;</span>
          <span class="gridmultiselect__burgerline">&nbsp;</span>
          <span class="gridmultiselect__burgerline">&nbsp;</span>
        </button>
      </transition>
    </div>
    <div v-if="isSplitByEnabled" class="gridmultiselect_splitviewcontainer">
      <div v-for="(view, name) in views" :key="name" class="gridmultiselect_splitview">
        <div class="gridmultiselect_splitviewheader">{{name}}</div>
        <SelectedItems
          v-bind="{itemKey, itemLabel, itemDetails, emptyMessage, selectedItems:view}"
          :viewName="name"
          v-on:item-removed="removeFromView"
        >
          <template v-for="slot in $slots">
            <slot :name="slot"></slot>
          </template>
          <template v-for="(index, name) in $scopedSlots" v-slot:[name]="{data}">
            <slot :name="name" :[kebabToCamelCase(name)]="data"></slot>
          </template>
        </SelectedItems>
      </div>
    </div>
    <SelectedItems v-else v-bind="{itemKey, itemLabel, itemDetails, emptyMessage, selectedItems}">
      <template v-for="slot in $slots">
        <slot :name="slot"></slot>
      </template>
      <template v-for="(index, name) in $scopedSlots" v-slot:[name]="{data}">
        <slot :name="name" :[kebabToCamelCase(name)]="data"></slot>
      </template>
    </SelectedItems>
    <transition name="gridmultiselect__slide">
      <div
        ref="menu"
        v-show="menuVisible"
        class="gridmultiselect__items-wrap"
        :class="{'gridmultiselect__items-floatingwrap':isMenuFloating}"
        @mousedown.prevent
      >
        <ul class="gridmultiselect__items" @mousedown.prevent>
          <li class="gridmultiselect__searchfield-wrap" v-if="searchable">
            <input
              type="text"
              ref="search"
              class="gridmultiselect__searchfield gridmultiselect__searchfield--font-small"
              placeholder="Search..."
              v-model="searchTerm"
              :tabindex="tabIndex"
              @focus.prevent="showMenu"
              @blur.prevent="menuVisible = false"
            />
          </li>
          <li
            class="gridmultiselect__item--empty"
            v-if="internalItems.length === 0"
          >{{itemsEmptyMessage}}</li>
          <li
            class="gridmultiselect__item"
            :class="{ 'gridmultiselect__item--selected': isSelected(item) }"
            v-else
            v-for="item in internalItems"
            :key="item[itemKey]"
          >
            <span v-if="item.$isGroup" class="gridmultiselect__itemgrouptext">{{item.$label}}</span>
            <span v-if="!item.$isGroup && !item.$isDisabled" class="gridmultiselect__itemcb-wrap">
              <input
                type="checkbox"
                class="gridmultiselect__itemcb"
                :id="'item-cb' + item[itemKey] + '_' + guid"
                :value="item"
                v-model="selectedItems"
              />
            </span>
            <span v-if="!item.$isGroup" class="gridmultiselect__itemtext">
              <slot name="item" :item="item">
                <label
                  class="gridmultiselect__itemlabel gridmultiselect__itemlabel--font-small"
                  :class="{'gridmultiselect__itemlabel--disabled': item.$isDisabled}"
                  :for="(item.$isDisabled ? null : 'item-cb' + item[itemKey] + '_' + guid)"
                >{{getItemLabel(item)}}</label>
              </slot>
            </span>
          </li>
          <li class="gridmultiselect__itemsfooter" v-if="hasSlot('items-footer')">
            <slot name="items-footer"></slot>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import {
  isEmpty,
  copyArray,
  flatGroupBy,
  guid,
  ensureValue,
  groupBy
} from "../utils";
import mixins from "../mixins";
import SelectedItems from "./SelectedItems";
export default {
  name: "vue-gridmultiselect",
  mixins: [mixins],
  components: { SelectedItems },
  data() {
    return {
      guid: null,
      menuVisible: false,
      searchTerm: null
    };
  },
  mounted() {
    this.guid = guid();
  },
  props: {
    title: {
      type: String,
      default: "Grid Multiselect"
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
    groupBy: {
      type: String
    },
    menuPosition: {
      type: String,
      default: "dock"
    },
    tabIndex: {
      type: Number,
      default: 0
    },
    splitBy: {
      type: String
    }
  },
  computed: {
    internalItems() {
      const copy = isEmpty(this.groupBy)
        ? copyArray(this.items)
        : flatGroupBy(this.items, this.groupBy);

      return isEmpty(this.searchTerm)
        ? copy
        : copy.filter(item => {
            if (item.$isGroup) return true;

            const label = this.getItemLabel(item);
            return (
              label
                .trim()
                .toLowerCase()
                .indexOf(this.searchTerm.trim().toLowerCase()) > -1
            );
          });
    },
    selectedItems: {
      get() {
        return this.value || [];
      },
      set(newValue) {
        this.$emit("input", newValue);
      }
    },
    itemsEmptyMessage() {
      return ensureValue(this.emptyMessage.split("|"));
    },
    isMenuFloating() {
      return this.menuPosition === "float";
    },
    views() {
      return isEmpty(this.splitBy)
        ? []
        : groupBy(this.selectedItems, this.splitBy);
    },
    isSplitByEnabled() {
      return !isEmpty(this.splitBy);
    }
  },
  methods: {
    showMenu() {
      if (this.menuVisible) return;

      this.menuVisible = true;
      const el = this.searchable ? this.$refs.search : this.$el;

      this.$nextTick(() => {
        el.focus();
      });
    },
    isSelected(item) {
      const itemKey = this.itemKey;
      return this.selectedItems.some(i => i[itemKey] === item[itemKey]);
    },
    kebabToCamelCase(name) {
      return name.replace(/-([a-z])/g, (m, w) => w.toUpperCase());
    },
    removeFromView(view, removedItem) {
      const index = this.selectedItems.findIndex(
        item => item[this.itemKey] === removedItem[this.itemKey]
      );
      this.selectedItems.splice(index, 1);
      this.$emit("item-removed", removedItem);
    }
  }
};
</script>
<style>
.gridmultiselect {
  font-family: inherit;
  display: block;
  border: 1px solid #e6eceb;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  color: #005f89;
  font-size: 16px;
  text-align: left;
  position: relative;
}
.gridmultiselect:focus {
  outline: none;
  border: 1px solid #e6eceb;
}
.gridmultiselect * {
  box-sizing: border-box;
}
.gridmultiselect__header {
  background-color: #0093b7;
  color: #fff;
  padding: 0.5rem;
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
  cursor: pointer;
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
  cursor: pointer;
}
.gridmultiselect_splitviewcontainer {
  display: flex;
  justify-content: space-between;
  height: inherit;
  min-height: inherit;
  padding: 0.5rem;
}
.gridmultiselect_splitview {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  border: 1px solid #e6eceb;
  border-radius: 4px;
}
.gridmultiselect_splitview:not(:last-child) {
  margin-right: 0.5rem;
}
.gridmultiselect_splitviewheader {
  padding: 0.5rem;
  font-size: 13px;
  font-weight: bold;
  border-bottom: 1px solid #e6eceb;
}
.gridmultiselect__selecteditems,
.gridmultiselect__items {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  height: inherit;
  min-height: inherit;
}
.gridmultiselect__selecteditemitemsfooter {
  padding: 0.5rem;
  margin-top: auto;
}
.gridmultiselect__itemsfooter {
  padding: 0.2rem 0.5rem;
  margin-top: auto;
}
.gridmultiselect__items-wrap {
  max-width: 50%;
  min-width: 20%;
  padding: 0.2rem;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  background-color: #fff;
  box-shadow: -5px 0px 5px -3px;
  border-left: 1px solid #e6eceb;
  overflow-y: auto;
  z-index: 1;
}
.gridmultiselect__items-floatingwrap {
  height: auto;
  border: 1px solid rgb(230, 236, 235);
  padding: 0.5rem;
  border-radius: 4px;
  z-index: 2;
  top: 20px;
  right: 20px;
  max-height: 350px;
  box-shadow: 0px 0px 3px 0px;
}
.gridmultiselect__searchfield-wrap {
  padding-top: 0.2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e6eceb;
}
.gridmultiselect__searchfield {
  width: 100%;
  display: block;
  outline: none;
  border: 1px solid #e6eceb;
  border-radius: 4px;
  padding: 0.2rem;
  border: none;
  padding-left: 0.2rem 0.2rem 0.2rem 0.7rem;
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
.gridmultiselect__removebutton {
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: inherit;
}
.gridmultiselect__removebutton:hover {
  background-color: #f3f3f3;
  font-weight: bold;
  box-shadow: -2px 0px 2px -1px;
}
.gridmultiselect__item {
  padding: 0.2rem 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px solid #e6eceb;
}
.gridmultiselect__itemgrouptext {
  background-color: #f9f9f9;
  flex-grow: 1;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  padding-left: 0.2rem;
  font-size: 13px;
}
.gridmultiselect__itemlabel:not(.gridmultiselect__itemlabel--disabled):hover {
  font-weight: bold;
}
.gridmultiselect__itemcb-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.gridmultiselect__itemcb {
  display: none;
}

.gridmultiselect__itemtext {
  padding-left: 0.2rem;
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  word-break: break-word;
  white-space: normal;
}
.gridmultiselect__itemlabel {
  margin: 0;
  cursor: pointer;
  flex-grow: 1;
}

.gridmultiselect__selecteditemdetails {
  padding-top: 0.5rem;
  cursor: auto;
  width: 100%;
}

.gridmultiselect--floatingmenu {
  overflow: visible;
}

.gridmultiselect__itemlabel--font-small,
.gridmultiselect__removebutton--font-small,
.gridmultiselect__searchfield--font-small,
.gridmultiselect__selecteditem--font-small {
  font-size: 13px;
}
.gridmultiselect__selecteditem--empty,
.gridmultiselect__item--empty {
  text-align: center;
  padding: 0.5rem;
  opacity: 0.6;
}
.gridmultiselect__itemlabel--disabled {
  opacity: 0.5;
  font-weight: normal;
  cursor: not-allowed;
}

.gridmultiselect__item--selected {
  color: #856404;
  background-color: #fff3cd;
}
.gridmultiselect__selecteditemtext--cursor-pointer {
  cursor: pointer;
}

.gridmultiselect__slide-enter-active,
.gridmultiselect__slide-leave-active,
.gridmultiselect__slidedown-enter-active,
.gridmultiselect__slidedown-leave-active {
  transition: all 0.3s ease;
}
.gridmultiselect__slide-enter,
.gridmultiselect__slide-leave-to {
  transform: translateX(15px);
  opacity: 0;
}

.gridmultiselect__slidedown-enter,
.gridmultiselect__slidedown-leave-to {
  transform: translateY(-15px);
  opacity: 0;
}
</style>