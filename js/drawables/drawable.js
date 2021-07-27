'use strict'

/**
 * @Class
 * Base class for all drawable objects. Contains the properties center, programInfo and uniforms. Overwrites toJSON to simplify serialization.
 */
class Drawable {

    constructor(gl, programInfo, center, color) {

        this.center = center;
        this.programInfo = programInfo;
        this.uniforms = {
            u_color: color,
        }
        this.toJSON = function() {
            return {
                programInfo: this.programInfo,
                primitiveType: this.primitiveType,
                bufferInfo: this.bufferInfo,
                uniforms: this.uniforms,
            }
        }

    }

}