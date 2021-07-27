'use strict'

/**
 * Resizes a given canvas.
 * @param {HTMLElement} canvas The canvas that WebGL hooks in.
 * @returns {boolean}
 */
function resizeCanvasToDisplaySize(canvas) {

    // TODO implement your solution here

}

/**
 * Loads a given URL. This is used to load the shaders from file, rather than using HTML tags.
 * @param {string} url The relative url to the file to be loaded.
 * @returns {string|null}
 */
function getSourceSynch(url) { // TODO this doesn't work in browsers like safari. Either find a workaround, or do smth else for shader programming. Since syntax is only highlighted, maybe stick with in tag scripts
    let req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);
    return (req.status == 200) ? req.responseText : null;
}

/**
 * Returns the key associated with a value.
 * @param {object} Object
 * @param {value}
 * @returns {string}
 */
function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

/**
 * Converts radians to degrees.
 * @param {number} angle The number in radians to convert.
 * @returns {number}
 */
function toDegrees(angle) {
    return angle * (180 / Math.PI);
}

/**
 * Converts a hex color string to a normalized rgba array.
 * @param {string} hex The hex color as a string.
 * @param {number} alpha The alpha value
 * @returns {Array.<number>}
 */
function hex2rgba(hex, alpha = 1.0) {
    let rgba = hex.match(/\w\w/g).map(x => parseInt(x, 16) / 255);
    rgba.push(alpha);
    return rgba;
}

/**
 * TODO write
 * @param {HTMLElement} canvas The canvas that WebGL hooks in.
 * @param array
 * @param type
 * @param drawType
 * @returns {AudioBuffer | WebGLBuffer}
 */
function createBufferInfoFromArray(gl, array, type, drawType) {
    type = type || gl.ARRAY_BUFFER;
    drawType = drawType || gl.STATIC_DRAW;
    const buffer = gl.createBuffer();
    gl.bindBuffer(type, buffer);
    gl.bufferData(type, array, drawType);
    return buffer;
}

/**
 * Returns the mouse coordinates relative to a clicking target, in our case the canvas.
 * @param event The mouse click event.
 * @param target The DOM element that is our target area.
 * @returns {{x: number, y: number}}
 */
function getRelativeMousePosition(event, target) {

    target = target || event.target;
    let rect = target.getBoundingClientRect();

    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
    }

}

/**
 * Returns the mouse coordinates relative to a clicking target, in our case the canvas. Further removes any margin / border issues.
 * @param event The mouse click event.
 * @param target The DOM element that is our target area.
 * @returns {{x: number, y: number}}
 */
function getNoPaddingNoBorderCanvasRelativeMousePosition(event, target) {

    target = target || event.target;
    let pos = getRelativeMousePosition(event, target);

    pos.x = pos.x * target.width / target.clientWidth;
    pos.y = pos.y * target.height / target.clientHeight;

    return pos;

}