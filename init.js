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
            filepath = codiad.active.getPath().split(".");
            switch(filepath[filepath.length -1]) {
                case "php":
                    var functions = [
                        codiad.Complete.pluginParser("str_replace"),
                        codiad.Complete.pluginParser("preg_replace")
                    ];
                break;
                case "js":
                    var functions = [
                        codiad.Complete.pluginParser("switch"),
                        codiad.Complete.pluginParser("alert")
                    ];
                break;
                case "css":
                    var functions = [
                        codiad.Complete.pluginParser("border"),
                        codiad.Complete.pluginParser("color")
                    ];
                break;
                case "html":
                    var functions = [
                        codiad.Complete.pluginParser("canvas"),
                        codiad.Complete.pluginParser("video")
                    ];
                break;
                default:
                    var functions = [
                        codiad.Complete.pluginParser("")
                    ];
                break;
            }
            if(codiad.Complete.pluginInit(functions)) {
                
            }
		},
	};
})(this, jQuery);