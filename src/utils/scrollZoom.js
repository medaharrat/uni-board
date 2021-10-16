export const ScrollZoom = (container, max_scale, min_scale, setScale) => {
	/* 
	* This function takes care of the Zoom in Zoom out
	* functionality in Uniboard.
	*
	* Credits: https://stackoverflow.com/questions/46647138/zoom-in-on-a-mousewheel-point-using-scale-and-translate
	*
	* Params:
	* - max_scale: The maximum scale (4 = 400% zoom)
	* - min_scale: The minimum scale (0.1 = 10% zoom)
	*
	*/

	var target = container.children().first()
	var size = { w:target.width(),h:target.height() }
	var pos = { x:0, y:0 }
	var zoom_target = { x:0, y:0 }
	var zoom_point = { x:0, y:0 }
	var scale = 1
	var zoom_out = false;
	target.css('transform-origin','0 0')

	target.on("mousewheel DOMMouseScroll", (e) => {
		var offset = container.offset()
		zoom_point.x = e.pageX - offset.left
		zoom_point.y = e.pageY - offset.top

		e.preventDefault();

		var delta = e.delta || e.originalEvent.wheelDelta;
		if (delta !== undefined) {
			zoom_out = delta ? delta < 0 : e.originalEvent.deltaY > 0;
	    }
		else {
			// Firefox
			delta = e.originalEvent.detail;
		}
        // Cap the delta to [-1,1] for cross browser consistency
	    delta = Math.max(-1,Math.min(1,delta)) 

	    // Determine the point on where the slide is zoomed in
	    zoom_target.x = (zoom_point.x - pos.x)/scale
	    zoom_target.y = (zoom_point.y - pos.y)/scale

		if(zoom_out) {
			// Apply zoom
			scale -= 0.1
			scale = Math.max(min_scale, scale)
			console.log(scale)
			// Calculate x and y based on zoom
			pos.x = -zoom_target.x * scale + zoom_point.x
			pos.y = -zoom_target.y * scale + zoom_point.y
		} else {
			// Apply zoom
			scale += 0.1
			scale = Math.min(max_scale,scale)

			// Calculate x and y based on zoom
			pos.x = -zoom_target.x * scale + zoom_point.x
			pos.y = -zoom_target.y * scale + zoom_point.y
		}

	    // Make sure the slide stays in its container area when zooming out
		if(pos.x > 0)
	        pos.x = 0
	    if(pos.x+size.w*scale < size.w)
	    	pos.x = -size.w*(scale-1)
	    if(pos.y > 0)
	        pos.y = 0
	     if(pos.y+size.h*scale < size.h)
	    	pos.y = -size.h*(scale-1)

	    update()
	})

	const update = () => {
		target.css('transform','translate('+(pos.x)+'px,'+(pos.y)+'px) scale('+scale+','+scale+')')
		setScale(Math.round(scale*100));
	}
}

export default ScrollZoom;