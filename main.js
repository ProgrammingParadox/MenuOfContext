var contextMenus = (function(){
	if(!document.addEventListener){
		alert("y u use ie");

		throw "Browser does not support document.addEventListener";
	}

	var menus = {};
	var activeMenuName = "";

	var addMenu = function(config){
		// we're going to allow easy 
		// customization to the context menu,
		// so let's start by setting some 
		// default values if none were given.

		// (this isn't real CSS)
		var style = Object.assign(
			{
				width: "150px",

				backgroundColor: "#BBB",
				backgroundPadding: "3px",
				backgroundBorderRadius: "3px",

				buttonColor: "#EEE",
				buttonTextColor: "#000",
				buttonBorder: "none",
				buttonOutline: "none",
				buttonTextAlign: "left",
				buttonPadding: "5px",
				buttonHoverColor: "#DDD",
			},
			config.style
		);

		// create the div
		var menu = document.createElement("div");

		// give the div some style
		menu.style.width = 
			style.width;

		menu.style.backgroundColor = 
			style.backgroundColor;
		menu.style.padding = 
			style.backgroundPadding;
		menu.style.borderRadius = 
			style.backgroundBorderRadius;

		// now we need to add the buttons, which
		// are formatted like so:

		// {
		//     name: "option name",
		//     funct: function(){
		//            
		//     }
		// }

		var options = config.options;
		for(var i = 0; i<options.length; i++){
			var option = document.createElement("button");

			option.innerHTML = options[i].name;
			option.addEventListener(
				"click", 
				options[i].funct
			);

			//{
			option.style.display = 
				"block";
			option.style.width = 
				style.width;

			option.style.backgroundColor = 
				style.buttonColor;
			option.style.color = 
				style.buttonTextColor;
			option.style.border =
				style.buttonBorder;
			option.style.outline = 
				style.buttonOutline;
			option.style.textAlign = 
				style.buttonTextAlign;
			option.style.padding = 
				style.buttonPadding;
			//}\\ styles

			// this simulates ":hover"
			option.addEventListener(
				"mouseover", 
				function(event){
					event.target.style.backgroundColor = 
						style.buttonHoverColor;
				}
			);
			option.addEventListener(
				"mouseleave", 
				function(event){
					event.target.style.backgroundColor = 
						style.buttonColor;
				}
			);

			menu.append(option);
		}

		// give the div some finishing touches
		menu.style.display = "none";
		menu.style.position = "fixed";
		menu.style.zIndex = "99999999";

		// add the div to the list of menus
		menus[config.name] = menu;
		if(activeMenuName === ""){
			activeMenuName = config.name;
		}

		// add the div to the body
		document.body.append(menu);
	};

	var onOpen = function(event){
		menus[activeMenuName].style.display = "block";

		menus[activeMenuName].style.top = 
			event.clientY + "px";
		menus[activeMenuName].style.left = 
			event.clientX + "px";
	};
	var onClose = function(event){
		menus[activeMenuName].style.display = "none";
	};

	var setActiveMenu = function(name){
		if(!menus.name){
			throw "A context menu with that name doesn't exist!";
		}

		activeMenuName = name;
	}

	return {
		addMenu: addMenu,
		setMenu: setActiveMenu,

		__onOpen__: onOpen,
		__onClose__: onClose
	};
})();

document.addEventListener('contextmenu', function(e) {
	contextMenus.__onOpen__(e);

	e.preventDefault();
}, false);
document.addEventListener('click', function(e) {
	contextMenus.__onClose__(e);
}, false);
