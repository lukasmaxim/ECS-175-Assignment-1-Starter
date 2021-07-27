'use strict'

/**
 * @Class
 * Point extension for Drawable. Calls super and then adds object-specific properties
 */
class Point extends Drawable {

    constructor(gl, programInfo, center, color) {

        super(gl, programInfo, center, color);

        this.uniforms.u_pointSize = gl.canvas.height/100;

        this.primitiveType = gl.POINTS;
        this.vertices = new Float32Array([
            this.center.x, this.center.y
        ]);
        this.buffer = createBufferInfoFromArray(gl, this.vertices, gl.ARRAY_BUFFER, gl.STATIC_DRAW);
        this.bufferInfo = {
            numElements : 1,                // single point
            numComponents: 2,               // x, y
            buffer: this.buffer,            // buffer
            type: gl.FLOAT,                 // data is 32 bit floats
            bufferType: gl.ARRAY_BUFFER,    // type of buffer
            normalize: false,               // don't normalize the data
            stride: 0,                      // 0 = move forward size * sizeof(type) each iteration to get the next position
            offset: 0                       // start at the beginning of the buffer
        }

    }

}
