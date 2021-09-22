'use strict'

/**
 * Loads a given URL. This is used to load the shaders from file, rather than using HTML tags.
 * @param {string} url The relative url to the file to be loaded.
 * @returns {string|null}
 */
function loadExternalFile( url )
{
    let req = new XMLHttpRequest( );
    req.open( "GET", url, false );
    req.send( null );
    return ( req.status == 200 ) ? req.responseText : null;
}

/**
 * Converts a hex color string to a normalized rgba array.
 * @param {string} hex The hex color as a string.
 * @param {number} alpha The alpha value
 * @returns {Array.<number>}
 */
function hex2rgb( hex )
{
    let rgb = hex.match( /\w\w/g )
        .map( x => parseInt( x, 16 ) / 255 );
    return [rgb[0], rgb[1], rgb[2]]
}

/**
 * Returns the mouse coordinates relative to a clicking target, in our case the canvas.
 * @param event The mouse click event.
 * @param target The DOM element that is our target area.
 * @returns {{x: number, y: number}}
 */
function getRelativeMousePosition( event, target )
{
    // if the mouse is not over the canvas, return invalid values
    if (target.id != 'canvas') {
        return {
            x: -Infinity,
            y: +Infinity,
        }
    }

    target = target || event.target;
    let rect = target.getBoundingClientRect( );

    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
    }

}

export
{
    loadExternalFile,
    hex2rgb,
    getRelativeMousePosition
}
