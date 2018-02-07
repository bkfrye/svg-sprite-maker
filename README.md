# SVG Sprite Maker with Gulp
This will quickly allow you to add a directory of SVG's to convert them into an SVG sprite. All SVG files are converted to `<symbols>` and combined in one file.

## Installation
1. Add SVG files to SVG directory
2. Run `yarn` to install
3. Run `gulp` or `gulp svg` to create Sprite

## Usage
Include the SVG sprite at the top of the `<body>`. To call a sprite, [use the SVG `<use>` element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use).

**SVG 1**
```
<svg>
	<use xlink:href="#svg-INSERT-ID">
</svg>
```
*must use xlink:href attribute to work*


**SVG 2**
```
<svg>
	<use href="#svg-INSERT-ID">
</svg>
```


### Notes
* SVG filenames are used when assigning IDs to each `<symbol>` within the sprite. For example, the filename **play.svg** will be converted to **svg-play.svg**
* All SVGs are stripped of inline styling for easy control with CSS
