# Examples

## Minimum Configuration

Vue GridMultiselect requires a minimum of three properties to be set in order for it to function properly. These properties are:

- __item-key__ (`String`) - Used internally by the Vue framework to correctly handle list updates. This key must be unique, and it's passed to the `:key` directive
- __item-label__ (`String` or `Array`) - Value to be displayed as text within the for each item in the list/s. Holds the property name/s of the item object containing the desired value
- __items__ (`Array`) - A list of objects to bound the component to

HTML

```html
<GridMultiSelect 
  :items="items" 
  item-key="id" 
  item-label="name" 
  v-model="selectedItems" 
/>
```

JS

```js
import GridMultiSelect from 'vue-gridmultiselect';

export default {
  name: "example",
  components: { GridMultiSelect },
  data() {
    return {
	  selectedItems: null,
      items: [
        { id: 1, name: "San Francisco" },
        { id: 2, name: "Las Vegas" },
        { id: 3, name: "Washington" },
        { id: 4, name: "Munich" },
        { id: 5, name: "Berlin" },
        { id: 6, name: "Rome" }
      ]
    };
  }
};
```

Live Sample

<MinConfiguration />

## Custom Heading

By default, heading is set to `Grid Multiselect`, and this can be configured by setting the `title` property.

- __title__ (`String`) - Sets the component heading title

HTML

```html
<GridMultiSelect 
  :items="items" 
  item-key="id" 
  item-label="name" 
  v-model="selectedItem" 
  title="Cities" 
/>
```

JS

```js
import GridMultiSelect from 'vue-gridmultiselect';

export default {
  name: "example",
  components: { GridMultiSelect },
  data() {
    return {
	  selectedItems: null,
      items: [
        { id: 1, name: "San Francisco" },
        { id: 2, name: "Las Vegas" },
        { id: 3, name: "Washington" },
        { id: 4, name: "Munich" },
        { id: 5, name: "Berlin" },
        { id: 6, name: "Rome" }
      ]
    };
  }
};
```
Live Sample

<CustomHeading />

## Searching

By default, searching is enabled, and it doesn't require any property to be set.

- __searchable__ (`Boolean`) - Property responsible for controlling the search option

The internal search is based on the `item-label` property, meaning that the search term will be compared only to this value.

## Labeling and No Data Messages

### Labeling

Each label is customizable, both in items and the selected items list by using the following property:

- __item-label__ (`String` or `Array`) - Value to be displayed as text for each item in the list/s. Holds the property name/s of the item object containing the desired value

Pass an array of property names to handle both lists. The first element in the array is the item property name holding the items list label. The second element is the same but for the selected items list label. 

If `String` or `Array` with one element is passed, the same label is used for both lists.

Each of these can hold the property names combination, for example `name|state` combination.

HTML

```html
<GridMultiSelect 
  :items="items" 
  item-key="id" 
  :item-label="['name', 'state|name']" 
  v-model="selectedItems" 
  title="Cities" 
/>
```

JS

```js
import GridMultiSelect from 'vue-gridmultiselect';

export default {
  name: "example",
  components: { GridMultiSelect },
  data() {
    return {
	  selectedItems: null,
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
```

Live Sample

<Labeling />

### No Data Messages

Each _No Data_ message can be customized by using the property:

- __empty-message__ (`String`) - Holds the text to be displayed when nothing is selected. Defaults to `No Data`

Use delimiter `|` to handle both lists. The value before `|` is used for the items list and the value after is used for the selected items list.

HTML

```html
<GridMultiSelect 
  :items="items" 
  item-key="id" 
  :item-label="['name', 'state|name']" 
  empty-message="No Items|No Selection"
  v-model="selectedItems" 
  title="Cities" 
/>
```

JS

```js
import GridMultiSelect from 'vue-gridmultiselect';

export default {
  name: "example",
  components: { GridMultiSelect },
  data() {
    return {
	  selectedItems: null,
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
```

Live Sample

<NoDataMessage />

## Grouping

The items list can contain groups. To enable grouping you need to provide one additional prop which holds the item property with the desired group label value. The items collection is grouped by this value.

- __group-by__ - Holds the item property name having the desired group label value

In the current version, the selected items are stored as a flat array.

HTML

```html
<GridMultiSelect 
  :items="items" 
  item-key="id" 
  item-label="name" 
  group-by="state"
  v-model="selectedItems" 
  title="Cities" 
/>
```

JS

```js
import GridMultiSelect from 'vue-gridmultiselect';

export default {
  name: "example",
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
```

Live Sample

<Grouping />

## Disabled Items

To disable an item, add a property called `$isDisabled`. This is a reserved property and it should be a type of `boolean`.

HTML

```html
<GridMultiSelect
  :items="items"
  item-key="id"
  item-label="name"
  group-by="state"
  v-model="selectedItems"
  title="Cities"
/>
```

JS

```js
import GridMultiSelect from 'vue-gridmultiselect';

export default {
  name: "example",
  components: { GridMultiSelect },
  data() {
    return {
      selectedItems: [
        { id: 1, name: "San Francisco", state: "USA" },
        { id: 5, name: "Berlin", state: "Germany" }
      ],
      items: [
        { id: 1, name: "San Francisco", state: "USA" },
        { id: 2, name: "Las Vegas", state: "USA", $isDisabled: true },
        { id: 3, name: "Washington", state: "USA" },
        { id: 4, name: "Munich", state: "Germany" },
        { id: 5, name: "Berlin", state: "Germany" },
        { id: 6, name: "Rome", state: "Italy" }
      ]
    };
  }
};
```

<DisabledItems />

## Slots

Further customization is possible with following slots:

- __item__ - Custom template for the item
- __selectedItem__ - Custom template for the selected item
- __itemsFooter__ - The additional section below the items section
- __selectedItemsFooter__ - The additional section below the selected items section

HTML

```html
<GridMultiSelect
  :items="items"
  item-key="id"
  item-label="name"
  group-by="state"
  v-model="selectedItems"
  title="Cities">
    <template v-slot:selectedItem="{selectedItem}">
        The city {{selectedItem.name}} is located in {{selectedItem.state}}
    </template>
</GridMultiSelect>
```

JS

```js
import GridMultiSelect from 'vue-gridmultiselect';

export default {
  name: "example",
  components: { GridMultiSelect },
  data() {
    return {
      selectedItems: null,
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
```

Live Sample

<SelectedItemSlot />

HTML

```html
<GridMultiSelect
  :items="items"
  item-key="id"
  item-label="name"
  group-by="state"
  v-model="selectedItems"
  title="Cities"
>
  <template v-slot:selectedItemsFooter>
    <div class="buttons">
  <button @click="save">Save</button>
  <button @click="deselect">Cancel</button>
    </div>
  </template>
</GridMultiSelect>
```

JS

```js
import GridMultiSelect from 'vue-gridmultiselect';

export default {
  name: "example",
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
```

CSS 

```css
<style scoped>
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
```

Live Sample

<SelectedItemsFooterSlot />

## Events

- __Input__ - Listen to `@input`
- __Item Removed__ - Listen to `@item-removed`
- __Item Selected__ - Listen to `@item-selected`

## Vuex

By default, Vuex is supported. To make it work, replace `v-model` directive with `:value` binding and `@input` event. Simple as that.

HTML

```html
<GridMultiSelect 
	:items="items" 
	item-key="id" 
	item-label="name" 
	group-by="state"
	:value="selectedItems"
	@input="updateSelectedItems"
	title="Cities" 
/>
```

JS

```js
import GridMultiSelect from 'vue-gridmultiselect';
import Vue from "vue";
import Vuex from "vuex";
import { mapActions, mapState } from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
	selectedItems: null,
	items: [
		{ id: 1, name: "San Francisco", state: "USA" },
		{ id: 2, name: "Las Vegas", state: "USA" },
		{ id: 3, name: "Washington", state: "USA" },
		{ id: 4, name: "Munich", state: "Germany" },
		{ id: 5, name: "Berlin", state: "Germany" },
		{ id: 6, name: "Rome", state: "Italy" }
	]
  },
  mutations: {
    updateSelectedItems(state, value) {
      state.selectedItems = value;
    }
  },
  actions: {
    updateSelectedItems({ commit }, value) {
      commit("updateSelectedItems", value);
    }
  }
});

export default {
  name: "example",
  store,
  components: { GridMultiSelect },
  computed: mapState(["selectedItems", "items"]),
  methods: mapActions(["updateSelectedItems"])
};
```