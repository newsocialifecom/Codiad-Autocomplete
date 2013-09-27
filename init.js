(function(global, $){
	var codiad = global.codiad,
	scripts = document.getElementsByTagName('script'),
	path = scripts[scripts.length-1].src.split('?')[0],
	curpath = path.split('/').slice(0, -1).join('/')+'/';
	$(function() { 
		codiad.autocomplete.init();
	});
	codiad.autocomplete = {
 		init: function() {
			amplify.subscribe("Complete.Init", function() {
 				alert("yeah");
			}); 
		},
	};
})(this, jQuery);