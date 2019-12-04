<p align="center">
  <a href="https://github.com/ProticM/vue-gridmultiselect">
    <img src="https://raw.githubusercontent.com/ProticM/vue-gridmultiselect/master/cover-img.jpg" />
  </a>
  <h1 align="center">
    Vue GridMultiselect
   <br>
  <a href="https://www.npmjs.com/package/vue-gridmultiselect">
    <img src="https://img.shields.io/badge/License-MIT-brightgreen.svg" alt="license-mit" />
    </a>
    <a href="https://www.npmjs.com/package/vue-gridmultiselect">
    <img src="https://img.shields.io/npm/v/vue-gridmultiselect.svg?style=flat" alt="version" />
    </a>
    </h1>
</p>
<p align="center">
Simple multi-select component with items displayed in a table like UI
</p>

## Table of Contents

- :hammer: [Installation](#installation)
- :loudspeaker: [Introduction](#introduction)
- :loudspeaker: [Basic Usage](#basic-usage)
- :book: [Getting Started and Documentation](#getting-started-and-documentation)
- :thumbsup: [Contribution](#contribution)

## Installation

Run the following npm command:
```bash
npm install vue-gridmultiselect --save
```
Or, place the following tags on your page:
```html
<script src="https://cdn.jsdelivr.net/npm/vue-gridmultiselect"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/vue-gridmultiselect/dist/vue-gridmultiselect.css">
```

## Introduction

A simple multi-select component for Vue framework with items displayed in a table like UI. An alternative to dropdown based select components.

#### Features and Characteristics

- No dependencies
- Searching
- Grouping
- Disabling Items
- Row Details
- Easily configurable
- Custom slots
- V-model suppport
- Vuex support

## Basic Usage

#### via NPM

```html
<template>
  <GridMultiSelect 
    :items="items" 
    item-key="id" 
    item-label="name" 
    v-model="selectedItems" 
  />
</template>

<script>
import GridMultiSelect from 'vue-gridmultiselect';
import 'vue-gridmultiselect/dist/vue-gridmultiselect.css';

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
</script>
```
#### via CDN

```html
Vue.component('vue-gridmultiselect', VueGridMultiselect);
```

## Getting Started and Documentation

Detailed documentation and demos can be found [here](https://proticm.github.io/vue-gridmultiselect/).

#### Custom Heading

```html
<GridMultiSelect 
  :items="items" 
  item-key="id" 
  item-label="name" 
  v-model="selectedItem" 
  title="Cities"
/>
```

#### Custom Labels

```html
<GridMultiSelect 
  :items="items" 
  item-key="id" 
  :item-label="['name', 'state|name']"
  v-model="selectedItems" 
  title="Cities" 
/>
```

#### Grouping

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
#### Slots

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
Detailed documentation and demos can be found [here](https://proticm.github.io/vue-gridmultiselect/).

## Contribution

```bash
// install the packages
npm install

// build the component into dist
npm run build

// run tests
npm run test

// serve at localhost:8080
npm run docs:dev

// build the documentation into dist
npm run docs:build
```

> Contributing guide is in progress

## License

[MIT](https://github.com/ProticM/vue-gridmultiselect/blob/master/LICENSE)
