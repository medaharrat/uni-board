export const ScrollDrag = (container) => {
    /* 
	* This function takes care of Drag scroll
	* functionality in Uniboard.
	*
	* Credits: https://htmldom.dev/drag-to-scroll/
	*
	* Params:
	* - container: DOM element
	*
	*/

    var pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = (e) => {
        pos = {
            // The current scroll
            left: container.scrollLeft(),
            top: container.scrollTop(),
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        container.on("mousemove", mouseMoveHandler);
        container.on("mouseup", mouseUpHandler);
    }

    const mouseMoveHandler = (e) => {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;
        // Scroll the element
        container.scrollTop(pos.top - dy);
        container.scrollLeft(pos.left - dx);

        // Change the cursor and prevent user from selecting the text
        container.css('cursor','grabbing')
        container.css('user-select','none')
    };

    const mouseUpHandler = () => {
        container.off("mousemove");
        container.off("mouseup");
    
        container.css('cursor','grab')
    };

    container.on("mousedown", mouseDownHandler);
}

export default ScrollDrag;