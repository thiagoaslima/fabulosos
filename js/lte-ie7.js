/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'fabulosos-symbols\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-pint-to-right' : '&#x52;',
			'icon-pint-to-left' : '&#x4c;',
			'icon-logo-star' : '&#x53;',
			'icon-contato-star' : '&#x43;',
			'icon-clipping-star' : '&#x35;',
			'icon-left-quote' : '&#x51;',
			'icon-right-quote' : '&#x71;',
			'icon-spinner' : '&#x47;',
			'icon-spinner-2' : '&#x67;',
			'icon-right-btn' : '&#x72;',
			'icon-left-btn' : '&#x6c;',
			'icon-guest-plate' : '&#x50;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};