(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


var template = "<section>\n  <div class=\"wrapper\">\n    <h1 class=\"heading\">McEvoy Collection</h1>\n  </div>\n</section>\n\n<section>\n  <div class=\"wrapper\">\n    <h2 class=\"heading\">Details</h2>\n    \n    <div>\n      <div>Inventory No.</div>\n      <div>NM12.127</div>\n    </div>\n\n    <!-- DETAILS LIST -->\n    <div>\n      <ul>\n        <li><span>Artist</span>Diane Arbus</li>\n        <li><span>Title</span>James Brown Backstage at the Apollo Theater, N.Y.C.</li>\n        <li><span>Date</span>1966; printed later</li>\n        <li><span>Edition</span>21/75</li>\n        <li><span>Medium</span>Gelatin silver print</li>\n        <li><span>Dimensions</span>20 x 16 inches</li>\n        <li><span>Signature</span>Stamped “A Diane Arbus photograph,” signed, titled, dated, numbered</li>\n        <li><span>Frame Support</span>25x24x2inches</li>\n        <li><span>MediaType</span>B/WPhotograph</li>\n        <li><span>Description</span>James Brown in suit (printed later by Neil Selkirk)</li>\n        <li><span>Provenance</span>Robert Miller Gallery, NY</li>\n        <li><span>Exhibitions</span></li>\n        <li><span>References</span>Illus: Magazine Work, p. 74; Revelations, p. 178</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<section>\n  <div class=\"wrapper\">\n    <h2 class=\"heading\">Invoice Infomation</h2>\n\n    <!-- INVOICE INFO -->\n    <div>\n      <ul>\n        <li><span>Invoice No.</span>12723P</li>\n        <li><span>Seller</span>Robert Miller Gallery Invoice No.12723P</li>\n        <li><span>Purchase Price</span>$6,375</li>\n        <li><span>Retail Price</span>$7,500</li>\n        <li><span>Insured Value</span>$7,500</li>\n        <li><span>Date</span>1 November 2012</li>\n        <li><span>Value Date</span>29 November 2012</li>\n        <li><span>Tax Paid</span>0</li>\n        <li><span>Tax Rate</span>0</li>\n        <li><span>State</span>New York</li>\n        <li><span>Provenance</span>Robert Miller Gallery, NY</li>\n        <li><span>Exhibitions</span></li>\n        <li><span>References</span>Illus: Magazine Work, p. 74; Revelations, p. 178</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n"

form			= document.querySelector('#input')
artist		= document.querySelector('[name=artist]')
workTitle	= document.querySelector('[name=workTitle]')
year			= document.querySelector('[name=year]')
origin		= document.querySelector('[name=origin]')
image			= document.querySelector('[name=image]')

var arr 	= [artist, workTitle, year, origin, image]

form.addEventListener('submit', function (e) {
	e.preventDefault()
	var check = arr.filter(function (el) {
		return !el.value.length
	})
	if (check.length) {
		check.forEach(function (el) {
			el.style.border = '2px solid red'
			console.log(el.getBoundingClientRect())
		})
	}
	console.log(check)
})
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92MC4xMi43L2xpYi9ub2RlX21vZHVsZXMvd2F0Y2hpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImVudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcblxudmFyIHRlbXBsYXRlID0gXCI8c2VjdGlvbj5cXG4gIDxkaXYgY2xhc3M9XFxcIndyYXBwZXJcXFwiPlxcbiAgICA8aDEgY2xhc3M9XFxcImhlYWRpbmdcXFwiPk1jRXZveSBDb2xsZWN0aW9uPC9oMT5cXG4gIDwvZGl2Plxcbjwvc2VjdGlvbj5cXG5cXG48c2VjdGlvbj5cXG4gIDxkaXYgY2xhc3M9XFxcIndyYXBwZXJcXFwiPlxcbiAgICA8aDIgY2xhc3M9XFxcImhlYWRpbmdcXFwiPkRldGFpbHM8L2gyPlxcbiAgICBcXG4gICAgPGRpdj5cXG4gICAgICA8ZGl2PkludmVudG9yeSBOby48L2Rpdj5cXG4gICAgICA8ZGl2Pk5NMTIuMTI3PC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbiAgICA8IS0tIERFVEFJTFMgTElTVCAtLT5cXG4gICAgPGRpdj5cXG4gICAgICA8dWw+XFxuICAgICAgICA8bGk+PHNwYW4+QXJ0aXN0PC9zcGFuPkRpYW5lIEFyYnVzPC9saT5cXG4gICAgICAgIDxsaT48c3Bhbj5UaXRsZTwvc3Bhbj5KYW1lcyBCcm93biBCYWNrc3RhZ2UgYXQgdGhlIEFwb2xsbyBUaGVhdGVyLCBOLlkuQy48L2xpPlxcbiAgICAgICAgPGxpPjxzcGFuPkRhdGU8L3NwYW4+MTk2NjsgcHJpbnRlZCBsYXRlcjwvbGk+XFxuICAgICAgICA8bGk+PHNwYW4+RWRpdGlvbjwvc3Bhbj4yMS83NTwvbGk+XFxuICAgICAgICA8bGk+PHNwYW4+TWVkaXVtPC9zcGFuPkdlbGF0aW4gc2lsdmVyIHByaW50PC9saT5cXG4gICAgICAgIDxsaT48c3Bhbj5EaW1lbnNpb25zPC9zcGFuPjIwIHggMTYgaW5jaGVzPC9saT5cXG4gICAgICAgIDxsaT48c3Bhbj5TaWduYXR1cmU8L3NwYW4+U3RhbXBlZCDigJxBIERpYW5lIEFyYnVzIHBob3RvZ3JhcGgs4oCdIHNpZ25lZCwgdGl0bGVkLCBkYXRlZCwgbnVtYmVyZWQ8L2xpPlxcbiAgICAgICAgPGxpPjxzcGFuPkZyYW1lIFN1cHBvcnQ8L3NwYW4+MjV4MjR4MmluY2hlczwvbGk+XFxuICAgICAgICA8bGk+PHNwYW4+TWVkaWFUeXBlPC9zcGFuPkIvV1Bob3RvZ3JhcGg8L2xpPlxcbiAgICAgICAgPGxpPjxzcGFuPkRlc2NyaXB0aW9uPC9zcGFuPkphbWVzIEJyb3duIGluIHN1aXQgKHByaW50ZWQgbGF0ZXIgYnkgTmVpbCBTZWxraXJrKTwvbGk+XFxuICAgICAgICA8bGk+PHNwYW4+UHJvdmVuYW5jZTwvc3Bhbj5Sb2JlcnQgTWlsbGVyIEdhbGxlcnksIE5ZPC9saT5cXG4gICAgICAgIDxsaT48c3Bhbj5FeGhpYml0aW9uczwvc3Bhbj48L2xpPlxcbiAgICAgICAgPGxpPjxzcGFuPlJlZmVyZW5jZXM8L3NwYW4+SWxsdXM6IE1hZ2F6aW5lIFdvcmssIHAuIDc0OyBSZXZlbGF0aW9ucywgcC4gMTc4PC9saT5cXG4gICAgICA8L3VsPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2Plxcbjwvc2VjdGlvbj5cXG5cXG48c2VjdGlvbj5cXG4gIDxkaXYgY2xhc3M9XFxcIndyYXBwZXJcXFwiPlxcbiAgICA8aDIgY2xhc3M9XFxcImhlYWRpbmdcXFwiPkludm9pY2UgSW5mb21hdGlvbjwvaDI+XFxuXFxuICAgIDwhLS0gSU5WT0lDRSBJTkZPIC0tPlxcbiAgICA8ZGl2PlxcbiAgICAgIDx1bD5cXG4gICAgICAgIDxsaT48c3Bhbj5JbnZvaWNlIE5vLjwvc3Bhbj4xMjcyM1A8L2xpPlxcbiAgICAgICAgPGxpPjxzcGFuPlNlbGxlcjwvc3Bhbj5Sb2JlcnQgTWlsbGVyIEdhbGxlcnkgSW52b2ljZSBOby4xMjcyM1A8L2xpPlxcbiAgICAgICAgPGxpPjxzcGFuPlB1cmNoYXNlIFByaWNlPC9zcGFuPiQ2LDM3NTwvbGk+XFxuICAgICAgICA8bGk+PHNwYW4+UmV0YWlsIFByaWNlPC9zcGFuPiQ3LDUwMDwvbGk+XFxuICAgICAgICA8bGk+PHNwYW4+SW5zdXJlZCBWYWx1ZTwvc3Bhbj4kNyw1MDA8L2xpPlxcbiAgICAgICAgPGxpPjxzcGFuPkRhdGU8L3NwYW4+MSBOb3ZlbWJlciAyMDEyPC9saT5cXG4gICAgICAgIDxsaT48c3Bhbj5WYWx1ZSBEYXRlPC9zcGFuPjI5IE5vdmVtYmVyIDIwMTI8L2xpPlxcbiAgICAgICAgPGxpPjxzcGFuPlRheCBQYWlkPC9zcGFuPjA8L2xpPlxcbiAgICAgICAgPGxpPjxzcGFuPlRheCBSYXRlPC9zcGFuPjA8L2xpPlxcbiAgICAgICAgPGxpPjxzcGFuPlN0YXRlPC9zcGFuPk5ldyBZb3JrPC9saT5cXG4gICAgICAgIDxsaT48c3Bhbj5Qcm92ZW5hbmNlPC9zcGFuPlJvYmVydCBNaWxsZXIgR2FsbGVyeSwgTlk8L2xpPlxcbiAgICAgICAgPGxpPjxzcGFuPkV4aGliaXRpb25zPC9zcGFuPjwvbGk+XFxuICAgICAgICA8bGk+PHNwYW4+UmVmZXJlbmNlczwvc3Bhbj5JbGx1czogTWFnYXppbmUgV29yaywgcC4gNzQ7IFJldmVsYXRpb25zLCBwLiAxNzg8L2xpPlxcbiAgICAgIDwvdWw+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9zZWN0aW9uPlxcblxcblwiXG5cbmZvcm1cdFx0XHQ9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dCcpXG5hcnRpc3RcdFx0PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1hcnRpc3RdJylcbndvcmtUaXRsZVx0PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT13b3JrVGl0bGVdJylcbnllYXJcdFx0XHQ9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPXllYXJdJylcbm9yaWdpblx0XHQ9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPW9yaWdpbl0nKVxuaW1hZ2VcdFx0XHQ9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWltYWdlXScpXG5cbnZhciBhcnIgXHQ9IFthcnRpc3QsIHdvcmtUaXRsZSwgeWVhciwgb3JpZ2luLCBpbWFnZV1cblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KClcblx0dmFyIGNoZWNrID0gYXJyLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcblx0XHRyZXR1cm4gIWVsLnZhbHVlLmxlbmd0aFxuXHR9KVxuXHRpZiAoY2hlY2subGVuZ3RoKSB7XG5cdFx0Y2hlY2suZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcblx0XHRcdGVsLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgcmVkJ1xuXHRcdFx0Y29uc29sZS5sb2coZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpXG5cdFx0fSlcblx0fVxuXHRjb25zb2xlLmxvZyhjaGVjaylcbn0pIl19
