# HTML

## Create a document

```html
<!DOCTYPE html>

<html lang="some-language">
  <head>
    ...
  </head>

  <body>
    ...
  </body>
</html>
```

Example:

```html
<!DOCTYPE html>

<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Some title</title>
    <meta name="description" content="Some description" />
    <meta name="author" content="Some author" />
  </head>

  <body>
    <header>
      <h1>Some heading</h1>
      <nav>
        <a href="/">Some page</a>
        <a href="/another/">Another page</a>
      </nav>
    </header>

    <main>
      <h2>Some heading</h2>
      <p>Some paragraph</p>
    </main>
  </body>
</html>
```

## Create a section that holds the primary content

```html
<main>...</main>
```

## Create a section that holds content indirectly related to the primary content

```html
<aside>...</aside>
```

## Create a section that holds navigation links

```html
<nav>...</nav>
```

## Create a section that holds introductory content

```html
<header>...</header>
```

## Create a section that holds meta data content related to the section it is in

```html
<footer>...</footer>
```

## Create a section that holds a self-contained composition for things like syndication

```html
<article>...</article>
```

## Create a generic section that doesn't have a more specific semantic element

```html
<section>...</section>
```

## Create headings

```html
<h1>Some label</h1>
<h2>Some label</h2>
<h3>Some label</h3>
<h4>Some label</h4>
<h5>Some label</h5>
<h6>Some label</h6>
```

## Create a paragraph

```html
<p>Some content</p>
```

## Create a list of items

```html
<ul>
  <li>Some label</li>
  <li>Some label</li>
</ul>
```

## Create a list of items that are in order

```html
<ol>
  <li>Some label</li>
  <li>Some label</li>
</ol>
```

## Create a link

```html
<a href="some-path" [download]>Some label</a>
```

- Email path: `mailto:{some-email}?subject={some-subject}&body={some-body}`.
- Call path: `tel:{some-phone}`.
- SMS path: `sms:{some-phone}?body={some-body}`.

## Create clickable actions

```html
<button>Some label</button>
```

## Create interactive controls for submitting information

```html
<form>
  ...
</form>
```

```html
  <label for="some-id">Some label</label>
  <input
    id="some-id"
    type="number/tel/url/email/date/password/file/color/radio/checkbox/range/text"
    required
    pattern="some-search-pattern"
    ...
  />
```

```html
  <label for="some-id">Some label</label>
  <textarea id="some-id" />
```

```html
  <select>
    <option>Some label</option>
    <option>Some label</option>
  </select>
```

```html
  <label for="some-id">Some label</label>
  <input list="list-id" id="some-id" />
  <datalist id="list-id">
    <option>Some label</option>
    <option>Some label</option>
  </datalist>
```

```html
  <label for="some-id">Some label</label>
  <progress id="some-id" max="100" value="70">Some label</progress>
```

```html
  <label for="some-id">Some label</label>
  <meter id="some-id" min="0" max="100" low="25" high="50" optimum="75" value="90"></meter>
```

```html
  <button type="submit">Some label</button>
```

## Create an accordion

```html
<details>
  <summary>Some label</summary>
  ...
</details>
```

## Create a modal

```html
<dialog open>...</dialog>
```

## Create an embedded image

```html
<img
  srcset="some-path some-size, another-path another-size"
  sizes="some-size, (min-width: some-breakpoint) another-size"
  src="some-path"
  alt="Some description"
  loading="lazy"
/>
```

## Create an embedded audio player

```html
<audio src="some-path" ...>Some description</audio>
```

## Create an embedded video player

```html
<video src="some-path" ...>Some description</video>
```

## Create an embedded web page

```html
<iframe src="some-path"></iframe>
```

## Create an embedded web page with lazy loading

```html
<iframe src="some-path" loading="lazy"></iframe>
```

## Create an embedded PDF

```html
<object type="application/pdf" data="some-path"></object>
```

## Create programmatic graphics

```html
<canvas>Some description </canvas>
```

## Create columns and rows of tabular data

```html
<table>
  <thead>
    <tr>
      <th>Some header</th>
      <th>Some header</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Some data</td>
      <td>Some data</td>
    </tr>
  </tbody>
</table>
```

## Create text with additional importance

```html
<strong>Some text</strong>
```

## Create text representing a specific time

```html
<time datetime="some-machine-readable-format">Some label</time>
```

## Create a quote

```html
<blockquote>Some quote</blockquote>
```

## Create self-contained content

```html
<figure>
  Some quote
  <figcaption>Some description</figcaption>
</figure>
```

## Create a forced line-break

```html
<br />
```

## Create text that contains programming code

```html
<code>some-code</code>
```

## Create text that retains the formatting used in the source

```html
<pre>some-text</pre>
```

## Create side comments

```html
<small>some-text</small>
```
