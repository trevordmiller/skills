# WebAssembly

**[Official documentation](https://webassembly.org/getting-started/developers-guide/)**

## Use in a browser document (HTML)

```html
<script>
const binaryResult = await WebAssembly.instantiateStreaming(fetch('/some-binary.wasm'));
binaryResult.instance.exports.some_exported_function();
</script>
```
