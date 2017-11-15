(function (window) {
	var svgSprite =
		'<svg>' +
		'<symbol id="icon-starton" viewBox="0 0 1152 1024">' +
		'<path d="M576 0l-145.184 389.12L16 389.12l331.84 245.76L223.392 1024 576 798.72 907.84 1024l-103.68-389.12 331.84-245.76L721.184 389.12 576 0z"  >' +
		'</path>' +
		'</symbol>' +
		'</svg>';
	var script = function () {
		var scripts = document.getElementsByTagName("script");
		return scripts[scripts.length - 1]
	}();
	var shouldInjectCss = script.getAttribute("data-injectcss");
	var ready = function (fn) {
		if (document.addEventListener) {
			if (~ ["complete", "loaded", "interactive"].indexOf(document.readyState)) {
				setTimeout(fn, 0)
			} else {
				var loadFn = function () {
					document.removeEventListener("DOMContentLoaded", loadFn, false);
					fn()
				};
				document.addEventListener("DOMContentLoaded", loadFn, false)
			}
		} else if (document.attachEvent) {
			IEContentLoaded(window, fn)
		}
		function IEContentLoaded (w, fn) {
			var d = w.document, done = false, init = function () {
				if (! done) {
					done = true;
					fn()
				}
			};
			var polling = function () {
				try {
					d.documentElement.doScroll("left")
				} catch (e) {
					setTimeout(polling, 50);
					return
				}
				init()
			};
			polling();
			d.onreadystatechange = function () {
				if (d.readyState == "complete") {
					d.onreadystatechange = null;
					init()
				}
			}
		}
	};
	var before = function (el, target) {
		target.parentNode.insertBefore(el, target)
	};
	var prepend = function (el, target) {
		if (target.firstChild) {
			before(el, target.firstChild)
		} else {
			target.appendChild(el)
		}
	};
	
	function appendSvg () {
		var div, svg;
		div = document.createElement("div");
		div.innerHTML = svgSprite;
		svgSprite = null;
		svg = div.getElementsByTagName("svg")[0];
		if (svg) {
			svg.setAttribute("aria-hidden", "true");
			svg.style.position = "absolute";
			svg.style.width = 0;
			svg.style.height = 0;
			svg.style.overflow = "hidden";
			prepend(svg, document.body)
		}
	}
	
	if (shouldInjectCss && ! window.__iconfont__svg__cssinject__) {
		window.__iconfont__svg__cssinject__ = true;
		try {
			document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
		} catch (e) {
			console && console.log(e)
		}
	}
	ready(appendSvg)
})(window)