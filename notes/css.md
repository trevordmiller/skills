# Cascading Style Sheets

**[Official documentation](https://www.w3.org/Style/CSS/Overview.en.html)**

## Align items in a row vertically

```css
some-selector {
  display: flex;
  align-items: center;
}
```

## Add animation between changes

```css
transition: X.Ys;
```

Example:

```css
a,
a:visited {
  color: LightSeaGreen;
  transition: 0.3s;
}

a:hover,
a:focus {
  opacity: 0.7;
}
```

## Use in a browser document (HTML)

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="/some-style.css" />
```
