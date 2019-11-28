# Examples

## Minimum Configuration

Vue GridMultiselect requires a minimum of three properties to be set in order for it to function properly. These properties are:

- __item-key__ (`String`) - Used internally by the Vue framework to correctly handle list updates. This key must be unique, and it's passed to the `:key` directive
- __item-label__ (`String`) - Value to be displayed as text within the closable menu on the right. Holds the property name of the item object containing the desired value
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
export default {
  name: "example",
  components: { GridMultiSelect },
  data() {
    return {
	  selectedItems: [],
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

By default, heading is set to `Grid Multiselect`, and this can be configured by setting the `title` property

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
export default {
  name: "example",
  components: { GridMultiSelect },
  data() {
    return {
	  selectedItems: [],
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

By default, searching is enabled, and it doesn't require any property to be set

- __searchable__ (`Boolean`) - Property responsible for controlling the search option

The internal search is based on the `item-label` property, meaning that the search term will be compared only to this value

## Labeling and No Data Messages

Each label is customizable, both in items and the selected items list by using the following properties:

- __item-label__ (`String`) - Value to be displayed as text within the closable menu on the right. Holds the property name of the item object containing the desired value
- __selected-item-label__ (`String`) - Value to be displayed as text within the selected items on the left. Holds the property name of the item object containing the desired value. If not provided, __item-label__ is used instead

Each of these can hold the property names combination, for example `name|state` combination

HTML

```html
<GridMultiSelect 
	:items="items" 
	item-key="id" 
	item-label="name" 
	selected-item-label="state|name" 
	v-model="selectedItems" 
	title="Cities" 
/>
```

JS

```js
export default {
  name: "example",
  components: { GridMultiSelect },
  data() {
    return {
	  selectedItems: [],
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

Each _No Data_ message can be customized the same way by using the properties below

- __items-empty-message__ (`String`) - Holds the text to be displayed when nothing is selected. Defaults to `No Data`
- __selected-items-empty-message__ (`String`) - Holds the text to be displayed when items collection is empty. Defaults to `No Data`

HTML

```html
<GridMultiSelect 
	:items="items" 
	item-key="id" 
	item-label="name" 
	selected-item-label="state|name"
	items-empty-message="No Items"
	selected-items-empty-message="No Selection"
	v-model="selectedItems" 
	title="Cities" 
/>
```

JS

```js
export default {
  name: "example",
  components: { GridMultiSelect },
  data() {
    return {
	  selectedItems: [],
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

In the current version, the selected items are stored as a flat array

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

<SelectedItemSlot />

## Events

## Vuex
