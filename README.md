# Dropdown Module
This dropdown module is a barebones package meant as an exercise in creating an npm package.

## Installation
Download this repository and run the following commands in a command prompt with the path to this folder where you saved the repository:
```
npm run install
npm run build
npm link
```

Navigate to the desired project in the command prompt and run the following command:
```
npm link @land/dropdown
```

## Usage
```javascript
import dropdown from "@land/dropdown";

const body = document.querySelector("body");
const dd = dropdown("Title", [
    {
        name: "Item 1",
        callbackFn: () => console.log("Item 1")
    },
    {
        name: "Item 2",
        callbackFn: () => console.log("Item 2")
    },
    {
        name: "Item 3",
        callbackFn: () => console.log("Item 3")
    },
]);
body.appendChild(dd);
```

The dropdown function takes in two arguments and returns an HTML element that can be used to append on something in the DOM:
* `String name`: Title of the dropdown button
* `Array<Object> items`: Array of objects containing information about each dropdown item. Each object should contain the following properties:
    * `String name`: Title of the dropdown item
    * `Function callbackFn`: Callback function that gets called when the dropdown item gets clicked

## Styling
Minimal styling was added to the dropdown element but the following classes were defined to style it to your liking:
* `.dropdown`: Container class for the entire dropdown element
* `.dropdown-btn`: Button class for the dropdown button element
* `.dropdown-content`: Div class for the dropdown list element
    * Each item in the dropdown list is a div with no class attached to it. However you can style each list item by doing `.dropdown-content > div { ... }` in your css file.
