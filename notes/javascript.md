# JavaScript

**[Official documentation](https://tc39.es/ecma262/)**

## Create APIs that can be shared across files (modules)

```javascript
export default someThing
export anotherThing
```

## Use APIs that are shared across files (modules)

```javascript
import someThing, { anotherThing } from "some-path";
await import("some-path");
```

## Create functions

```javascript
(someParameter) => ...
```

## Use a default value for function parameters

```javascript
(someParameter = someValue) => ...
```

## Create asynchronous functions that return an unresolved value (promise)

```javascript
async (someParameter) => ...
```

## Use asynchronous functions that return an unresolved value (promise)

```javascript
await someFunction();
```

## Apply a function on every item in an array

```javascript
someArray.map(someItem => // return updated item)
```

## Get items in an array that meet a condition

```javascript
someArray.filter(someItem => // return boolean for the condition)
```

## Check if all items in an array meet a condition

```javascript
someArray.every(someItem => // return boolean for the condition)
```

## Check if at least one item in an array meets a condition

```javascript
someArray.some(someItem => // return boolean for the condition)
```

## Convert an array to a single value

```javascript
someArray.reduce((someAccumulation, someItem)  => // return accumulation, someInitialValue)
```

## Get whether an array contains a value

```javascript
someArray.includes(someValue);
```

## Remove falsy values from an array

```javascript
someArray.filter((someItem) => !!someItem);
```

## Sort an array

```javascript
someArray.sort();
```

## Reverse an array

```javascript
[...someArray].reverse()
```

## Get the unique items in an array

```javascript
[...new Set(someArray)];
```

## Get a portion of an array by index

```javascript
someArray.slice(someStartIndex, someEndIndex);
```

## Combine arrays

```javascript
someArray.concat(anotherArray);
```

## Sort an array of numbers by value

```javascript
someNumbers.sort((a, b) => a - b);
```

## Get the largest number from an array of numbers

```javascript
Math.max(...someNumbers);
```

## Get the smallest number from an array of numbers

```javascript
Math.min(...someNumbers);
```

## Get all the keys from an object

```javascript
Object.keys(someObject);
```

## Divide a string from a separator search pattern

```javascript
someString.split(someSearchPattern);
```

## Combine strings with a separator search pattern

```javascript
someString.join(someSearchPattern);
```

## Replace search patterns in a string

```javascript
someString.replace(someSearchPattern, someReplacement);
```

## Get a character at a specific index in a string

```javascript
someString.charAt(someIndex);
```

## Convert the casing of a string to upper case

```javascript
someString.toUpperCase();
```

## Convert the casing of a string to lower case

```javascript
someString.toLowerCase();
```

## Repeat a string

```javascript
someString.repeat(someAmount);
```

Example:

```javascript
"a".repeat(4)
// "aaaa"
```

## Interpolate values in strings (template literals)

```javascript
`Some string with ${someValue} in it`;
```

## Convert a string into a number

```javascript
Number(someString)
```

Example:

```javascript
Number("123")
// 123
```

## Parse an integer inside a string

```javascript
parseInt(someString, radix)
```

Example:

```javascript
parseInt("123abc", 10)
// 123
```

## Extract data from a collection (destructuring)

```javascript
const { someKey } = someObject;
const [firstKey] = someArray;
```

## Extract data from a collection with remaining items grouped (rest)

```javascript
const { someKey, ...otherKeys } = someObject;
const [firstKey, ...otherKeys] = someArray;
```

## Expand data from a collection (spread)

```javascript
{ someKey: someValue, ...someObject }
[ someValue, ...someArray ]
```

## Create a copy of a collection

```javascript
{...someObject}
[...someArray]
```

## Use globals from the environment

```javascript
[someEnvironment.]someGlobal
```

Examples:

```javascript
// Output values to the console
console.log(someValue);

// Create assertions
console.assert(someExpression, "Some label");

// Send HTTP requests
await fetch(someUrl);

// Use HTTP request options
await fetch(someUrl, {
  method: 'some-http-method',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': Basic some-secret
  }
});

// Use HTTP request responses
const response = await fetch(someUrl);
if (status === some-http-status-code) {
  ...
}

// Get JSON data from a JSON service
const response = await fetch(someUrl);
const json = await response.json();
```

## Use in a browser environment (HTML)

```html
<script type="module" src="/some-script.js"></script>
<noscript>Some script fallback</noscript>
```

## Use in a server environment (Node)

```shell
# View help
node --help

# Run a repl
node

# Run a program
node some-path

# Run a script
npm run some-script

# Create a package
npm init

# Install a dependency
npm install some-package [--save-dev]

# View details about a package
npm view some-package
```
