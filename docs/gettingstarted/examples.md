# Examples

## Minimum Configuration

Vue GridMultiselect requires a minimum of three properties to be set in order for it to function properly. These properties are:

- __item-key__ (`String`) - Used internally by the Vue framework to correctly handle list updates. This key must be unique, and it's passed to the `:key` directive
- __item-label__ (`String`) - Value to be displayed as text within the closable menu on the right
- __items__ (`Array`) - A list of objects to bound the component to

#### HTML

```html
<GridMultiSelect :items="items" item-key="id" item-label="name" v-model="selectedItems" />
```

#### JS

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

#### Live Sample

<MinConfiguration />

## Custom Heading

By default, heading is set to `Grid Multiselect` and this can be configured by setting the `title` property

- __title__ (`String`) - Sets the component heading title

#### HTML

```html
<GridMultiSelect :items="items" item-key="id" item-label="name" v-model="selectedItem" title="Cities" />
```

#### JS

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
#### Live Sample

<CustomHeading />

## Searching

Searching is enabled by default, and it doesn't require any property to be set

- __searchable__ (`Boolean`) - Property responsible for controlling whether the search is enabled or not

The internal search is based on the `item-label` property, meaning that the search term will be compared only to this value

## Labeling and No Data Messages

### Items (the options list)

### Selected Items (the selected options list)

## Slots
