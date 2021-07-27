'use strict'

/**
 * Adds the necessary event listeners for key, mouse and resize events.
 * @param {WebGLRenderingContext} gl The WebGL Rendering Context.
 * @param {Object} programInfo Our internal object holding all program info, including the program and the locations of uniforms or attributes.
 */
function addEventListeners(gl, programInfo) {

    // add event listener on keyup to switch modes (object to draw, color, clear)
    window.addEventListener('keyup', (event) => {

        if(!initialized)
        {
            return;
        }

        const keyName = event.key.toLowerCase();

        // TODO implement your solution here

    }, false);

    // add event listener on mousedown for creating new drawables at coordinates of mousedown
    window.addEventListener('mousedown', e => {

        if(!initialized)
        {
            return;
        }

        // TODO implement your solution here



        // redraw
        drawScene(gl);

    });

    // add event listener on resize, so we resize the canvas accordingly and redraw
    window.addEventListener('resize', e => {

        // resizes the canvas
        resizeCanvasToDisplaySize(gl.canvas);

        // redraw
        drawScene(gl);
    })
}
