'use strict'

/**
 * @Class
 * Vertical line extension for Line. Calls super and then adds object-specific properties
 */
class VLine extends Line {

    constructor(gl, programInfo, center, color) {
        super(gl, programInfo, center, color, false);
    }

}