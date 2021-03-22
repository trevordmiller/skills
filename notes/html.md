# HTML

## Create a document

```html
<!DOCTYPE html>

<html lang="some-language">
  <head>
    <!-- Head elements --> 
  </head>

  <body>
    <!-- Body elements --> 
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

## Create a link to a URL

```html
<a href="some-url">Some label</a>
```

## Create clickable actions

```html
<button>Some label</button>
```

## Create interactive controls for submitting information

```html
<form>
  <label for="some-id">Some label</label>
  <input
    id="some-id"
    type="number/tel/url/email/password/file/color/radio/checkbox/range/text"
    ...
  />

  <label for="some-id">Some label</label>
  <textarea id="some-id" />

  <select>
    <option>Some label</option>
    <option>Some label</option>
  </select>

  <datalist>
    <option>Some label</option>
    <option>Some label</option>
  </datalist>

  <button type="submit">Some label</button>
</form>
```

The form elements can use client-side validation with validation attributes on form elements like `required`, `type`, `minlength`, `maxlength`, `min`, `max`, `pattern` (search pattern).

## Create a date picker

```html
<input type="date" ... />
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

## Create a progress indicator

```html
<label for="some-id">Some label</label>
<progress id="some-id" max="100" value="70">Some label</progress>
```

## Create an embedded image

```html
<img src="some-path" alt="Some fallback description" />
```

## Create an embedded image with lazy loading

```html
<img src="some-path" alt="Some fallback description" loading="lazy" />
```

## Create an embedded image with versions for different devices or screen sizes

```html
<picture>
  <source srcset="some-path" media="some-condition" />
  <source srcset="some-path" media="some-condition" />
  <img src="some-path" alt="Some fallback description" />
</picture>
```

## Create an embedded audio player

```html
<audio src="some-path" ...>Some fallback description</audio>
```

## Create an embedded video player

```html
<video src="some-path" ...>Some fallback description</video>
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
<canvas>Some fallback description </canvas>
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
