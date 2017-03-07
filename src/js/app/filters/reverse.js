(function(mainModule){

	mainModule.filter('reverse', function(){
		return function(text){
			console.log(text);
			text = text || '';
			var out = '';

			for(var i = 0; i < text.length; i++){
				out = text.charAt(i) + out;
			}

			return out; 
		}
	});
})(window.angular.module("mainModule"));