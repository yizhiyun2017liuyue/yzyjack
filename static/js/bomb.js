function bomb(obj){
	var current_dom_obj = obj.jq;
	(genClips = function() {
		var amount = 5;
		var width = current_dom_obj.width() / amount;
		var height = current_dom_obj.height() / amount;
		var totalSquares = Math.pow(amount, 2);
		var html = current_dom_obj.find('.content').html();
		var y = 0;
		
		for(var z = 0; z <= (amount*width); z = z+width) { 
			$('<div class="clipped" style="clip: rect('+y+'px, '+(z+width)+'px, '+(y+height)+'px, '+z+'px)">'+html+'</div>').appendTo(current_dom_obj);
			if(z === (amount*width)-width) {
				y = y + height;
				z = -width;
			}
			if(y === (amount*height)) {
				z = 9999999;
			}
		}
		
	})();

	function rand(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	if(obj.flag === false) {
		obj.flag = true;
		current_dom_obj.find('.content').css({'display' : 'none'});	
		current_dom_obj.find('div:not(.content)').each(function() {
			var v = rand(120, 90),angle = rand(80, 89), theta = (angle * Math.PI) / 180, g = -9.8;	
			var self = $(this);
			var t = 0,z, r, nx, ny,totalt =  15;
			var negate = [1, -1, 0],direction = negate[ Math.floor(Math.random() * negate.length) ];
			var randDeg = rand(-5, 10), randScale = rand(0.9, 1.1),randDeg2 = rand(30, 5);
	
			$(this).css({
				'transform' : 'scale('+randScale+') skew('+randDeg+'deg) rotateZ('+randDeg2+'deg)'
			});
			 
			z = setInterval(function() { 	
				var ux = ( Math.cos(theta) * v ) * direction;
				var uy = ( Math.sin(theta) * v ) - ( (-g) * t);
				nx = (ux * t);
				ny = (uy * t) + (0.5 * (g) * Math.pow(t, 2));
				$(self).css({'bottom' : (ny)+'px', 'left' : (nx)+'px'});
				t = t + 0.10;
				if(t > totalt) {
					current_dom_obj.css({'top' : '-1000px', 'transition' : 'none'});
					$(self).css({'left' : '0', 'bottom' : '0', 'opacity' : '1', 'transition' : 'none', 'transform' : 'none'});	
					clearInterval(z);
				}	
			}, 10);
		});
	}
}