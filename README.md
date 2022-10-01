# HTML Lecture Notes

This page will automatically be updated to include all the HTML tags that have been taught in the class. To discuss any academic doubt, *or just rant about your day*, you can join **[our Discord server (group)](https://discord.lpucoders.club)**.

If you want to help me keep this page updated, or just talk, please message me on [Instagram](https://instagram.com/ba3a.gamzo) / [Discord](https://discordapp.com/users/585512479241666570).
*<p>-Ba3a</p>*

***

### The Table Of Contents
- [HTML Lecture Notes](#html-lecture-notes)
    - [The Table Of Contents](#the-table-of-contents)
  - [The <!DOCTYPE> Declaration](#the-doctype-declaration)
  - [The Head Element](#the-head-element)
  - [The Title Tag](#the-title-tag)
  - [The HTML `<meta>` Element](#the-html-meta-element)
  - [Setting The Viewport](#setting-the-viewport)
  - [HTML Headings](#html-headings)
  - [HTML Paragraphs](#html-paragraphs)
  - [HTML Formatting Elements](#html-formatting-elements)
  - [The style Attribute](#the-style-attribute)
  - [HTML `<cite>` Tag](#html-cite-tag)
  - [HTML Links](#html-links)
  - [HTML `<span>` Tag](#html-span-tag)
  - [HTML Horizontal Rules](#html-horizontal-rules)
  - [HTML Line Breaks](#html-line-breaks)
  - [The HTML `<pre>` Element](#the-html-pre-element)
  - [HTML Comment Tag](#html-comment-tag)
  - [HTML `<meter>` Tag](#html-meter-tag)


## The <!DOCTYPE> Declaration
The `<!DOCTYPE>` declaration represents the document type, and helps browsers to display web pages correctly.
It must only appear once, at the top of the page (before any HTML tags). The `<!DOCTYPE>` declaration is not case sensitive.

```html
<!DOCTYPE html>
```

## The Head Element
The HTML `<head>` element is a container for the following elements: `<title>`, `<style>`, `<meta>`, `<link>`, `<script>`, and `<base>`.

The `<head>` element is a container for metadata (data about data) and is placed between the `<html>` tag and the `<body>` tag.

HTML metadata is data about the HTML document. Metadata is not displayed.

Metadata typically define the document title, character set, styles, scripts, and other meta information.

## The Title Tag
The `<title>` element defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab.

The `<title`> element is required in HTML documents!

The content of a page title is very important for search engine optimization (SEO)! The page title is used by search engine algorithms to decide the order when listing pages in search results.

The `<title>` element:

1. defines a title in the browser toolbar
2. provides a title for the page when it is added to favorites
3. displays a title for the page in search engine-results

So, try to make the title as accurate and meaningful as possible!

```html
<!DOCTYPE html>
<html>
<head>
  <title>A Meaningful Page Title</title>
</head>
<body>

The content of the document......

</body>
</html>
```


## The HTML `<meta>` Element
The `<meta>` element is typically used to specify the character set, page description, keywords, author of the document, and viewport settings.

The metadata will not be displayed on the page, but is used by browsers (how to display content or reload page), by search engines (keywords), and other web services.

```html
<meta charset="UTF-8">
<meta name="description" content="Free Web tutorials">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="author" content="John Doe">
```

## Setting The Viewport
The viewport is the user's visible area of a web page. It varies with the device - it will be smaller on a mobile phone than on a computer screen.

You should include the following `<meta>` element in all your web pages:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

This gives the browser instructions on how to control the page's dimensions and scaling.

The `width=device-width` part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).

The `initial-scale=1.0` part sets the initial zoom level when the page is first loaded by the browser.

## HTML Headings
HTML headings are defined with the `<h1>` to `<h6>` tags.
`<h1>` defines the most important heading. `<h6>` defines the least important heading.

```html
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
```

## HTML Paragraphs
HTML paragraphs are defined with the `<p>` tag.

```html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
```

## HTML Formatting Elements
Formatting elements were designed to display special types of text:
- `<b>` - Bold text
- `<strong>` - Important text
- `<i>` - Italic text
- `<em>` - Emphasized text
- `<mark>` - Marked text
- `<small>` - Smaller text
- `<del>` - Deleted text
- `<ins>` - Inserted text
- `<sub>` - Subscript text
- `<sup>` - Superscript text

## The style Attribute
The `style` attribute is used to add styles to an element, such as color, font, size, and more.

```html
<p style="color:red;">This is a red paragraph.</p>
```

## HTML `<cite>` Tag
The `<cite>` tag defines the title of a creative work (e.g. a book, a poem, a song, a movie, a painting, a sculpture, etc.).
Note: A person's name is not the title of a work.
The text in the `<cite>` element usually renders in *italic*.

```html
<p><cite>The Scream</cite> by Edward Munch. Painted in 1893.</p>
```

## HTML Links
HTML links are defined with the `<a>` tag.

```html
<a href="https://discord.lpucoders.club">This is a link</a>
```

## HTML `<span>` Tag
A `<span>` element which is used to color a part of a text:

```html
<p>My mother has <span style="color:blue">blue</span> eyes.</p>
```

## HTML Horizontal Rules
The `<hr>` tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.

The `<hr>` element is used to separate content (or define a change) in an HTML page. The `<hr>` tag is an empty tag, which means that it has no end tag.



```html
<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr>
<h2>This is heading 2</h2>
<p>This is some other text.</p>
<hr>
```

## HTML Line Breaks
The HTML `<br>` element defines a line break. Use `<br>` if you want a line break (a new line) without starting a new paragraph.

```html
<p>This is<br>a paragraph<br>with line breaks.</p>
```

## The HTML `<pre>` Element
The HTML `<pre>` element defines preformatted text.

The text inside a `<pre>` element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks.

```html
<pre>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</pre>
```

## HTML Comment Tag
You can add comments to your HTML source by using the following syntax:

```html
<!-- Write your comments here -->
```

Notice that there is an exclamation point (!) in the start tag, but not in the end tag.

Note: Comments are not displayed by the browser, but they can help document your HTML source code.

You can also use comments to hide some part of your code from the browser for debugging reasons.

## HTML `<meter>` Tag
The `<meter>` tag defines a scalar measurement within a known range, or a fractional value. This is also known as a gauge.
Examples: Disk usage, the relevance of a query result, etc.

```html
<label for="disk_c">Disk usage C:</label>
<meter id="disk_c" value="2" min="0" max="10">2 out of 10</meter><br>

<label for="disk_d">Disk usage D:</label>
<meter id="disk_d" value="0.6">60%</meter>
```
