# API

## Props

The component behavior can be changed by managing the properties listed below.

### itemKey

Used internally by the Vue framework to correctly handle list updates. This key must be unique, and it's passed to the `:key` directive. It contains the item property name, which will uniquely identify it.

```js
itemKey: {
  type: String,
  required: true
}
```

### itemLabel

Value to be displayed as text for each item in the list/s. Holds the property name/s of the item object containing the desired value.

```js
itemLabel: {
  value: [String, Array],
  required: true
}
```

### items

A component data source. Each item in the collection should be an object.

```js
items: {
  type: Array,
  default: () => []
}
```

### itemDetails

Value to be displayed as details text for each item in the selected items list. Holds the item property name/s having the desired label value.

```js
itemDetails: {
  type: String
}
```

### title

The component heading title displayed above the selected items list.

```js
title: {
  type: String,
  default: "Grid Multiselect"
}
```

### value

Contains the currently selected value. You can listen for changes using `@input` event if so desired. Usually required in combination with `Vuex`. In other cases `v-model` directive will be enough.

```js
value: {
  type: Array,
  default: () => []
}
```

### searchable

Property responsible for controlling the search option. Based on its value, searching will be enabled/disabled.

```js
searchable: {
  type: Boolean,
  default: true
}
```

### groupBy

Holds the item property name to group the data source by. The selected items list is not grouped.

```js
groupBy: {
  type: String
}
```

### menuPosition

Sets the components menu position. It can be `dock` or `float`.

```js
menuPosition: {
  type: String,
  default: "dock"
}
```

### tabIndex

Sets the tabindex of the component.

```js
tabIndex: {
  type: Number,
  default: 0
}
```

### emptyMessage

Holds the text to be displayed when nothing is selected.

```js
emptyMessage: {
  type: String,
  default: "No Data"
}
```

## Slots

### `item`

Use it to customize the item appearance in the sidebar list.

Scope

- __item__ (`Object`) - Current item in the datasource

```html
<template v-slot:item="{item}">
	<!-- // use the item here -->
</template>
```

### `selected-item`

Use it to customize the selected item appearance.

Scope

- __selectedItem__ (`Object`) - A selected item

```html
<template v-slot:selected-item="{selectedItem}">
	<!-- // use the selected item here -->
</template>
```

### `selected-item-details`

Use it to customize the selected item row details.

Scope

- __selectedItem__ (`Object`) - A selected item

```html
<template v-slot:selected-item-details="{selectedItem}">
	<!-- // use the selected item here -->
</template>
```

### `items-footer`

Use it to add a section at the bottom of the sidebar list.

```html
<template v-slot:items-footer>
	<!-- // your html -->
</template>
```

### `selected-items-footer`

Use it to add a section at the bottom of the selected items list.

```html
<template v-slot:selected-items-footer>
	<!-- // your html -->
</template>
```
