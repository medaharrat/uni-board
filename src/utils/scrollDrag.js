export const ScrollDrag = (container) => {
    
    var target = container.children().first()
    var pos = { top: 0, left: 0, x: 0, y: 0 };
    console.log("hii")
    target.scrollTop = 100;
    target.scrollLeft = 150;

    target.on("mousedown", mouseDownHandler);

    const mouseDownHandler = (e) => {
        pos = {
            // The current scroll
            left: target.scrollLeft,
            top: target.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };

        target.on("mousemove", mouseMoveHandler);
        target.on("mouseup", mouseUpHandler);
    }

    const mouseMoveHandler = (e) => {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        const dy = e.clientY - pos.y;
    
        // Scroll the element
        target.scrollTop = pos.top - dy;
        target.scrollLeft = pos.left - dx;

        // Change the cursor and prevent user from selecting the text
        target.css('cursor','grabbing')
        target.css('user-select','none')
    };

    const mouseUpHandler = () => {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    
        target.css('cursor','grab')
        target.css('user-select','')
    };

}

export default ScrollDrag;