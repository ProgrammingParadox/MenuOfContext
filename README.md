# MenuOfContext
A custom context menu library written in vanilla javascript.

## How to use
Either download `main.js` or use jsdelivr, then type
```javascript
contextMenus.addMenu({
	name: "example",

	options: [
		{
			name: "Option 1",
			funct: function(){}
		},
		{
			name: "Option 2",
			funct: function(){}
		}
	],

	style: {
		backgroundColor: "#000",
		backgroundPadding: "1px",
		backgroundBorderRadius: "0px",
	}
});
```

### The config options 
`name`:
This is the name of your context menu. It's going to be used later.

`options`:
This is an array full of options formatted like so:
```javascript
{
	name: "Option name",
	funct: function(){
		// what do do when clicked
	}
}
```

`style`:
How the context menu should be formatted. The possible options are:
```javascript
{
	width: "150px",                // the width of the context menu

	backgroundColor: "#BBB",       // the color behind the buttons
	backgroundPadding: "3px",      // the background's padding
	backgroundBorderRadius: "3px", // the background's border radius

	buttonColor: "#EEE",           // the button's background's color
	buttonTextColor: "#000",       // the button's text color
	buttonBorder: "none",          // the button's CSS border property
	buttonOutline: "none",         // the button's outline (when selected)
	buttonTextAlign: "left",       // the button's text align
	buttonPadding: "5px",          // the button's padding
	buttonHoverColor: "#DDD",      // the button's color when the mouse is over it
},
```

### multiple context menus
To have multiple context menus, define as many as needed, then set the active menu by it's name:
```javascript
contextMenus.setMenu("Your menu's name");
```
You can use this to make different context menus for different parts of your site.

It will automatically select the one you first defined, as long as you haven't set the menu to anything else.
