'use strict'

/**
 * @Class
 * Horizontal line extension for Line. Calls super and then adds object-specific properties
 */
class HLine extends Line {

    constructor(gl, programInfo, center, color) {
        super(gl, programInfo, center, color, true);
    }

}