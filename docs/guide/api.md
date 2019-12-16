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

## Slots
