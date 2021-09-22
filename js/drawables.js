'use strict'

import Shader from "./shader"

/**
 * Base class for all drawable objects
 */
class Drawable
{

    constructor( vertices, color, primitiveType, pointSize )
    {

        this.vertices = vertices
        this.vertices_buffer = null

        this.color = color

        this.primitiveType = primitiveType

        this.pointSize = pointSize

    }

    /**
     * Creates buffers for vertex data // TODO plural?
     * @param { WebGL2RenderingContext } gl The webgl2 rendering context
     */
    createBuffers( gl )
    {

        // TODO create a vertex buffer and save it to this.vertices_buffer

        // TODO fill the vertex buffer with your vertex data

    }

    /**
     * Render loop for an individual drawable
     * @param { WebGL2RenderingContext } gl The webgl2 rendering context
     * @param { Shader } shader The shader to use for rendering
     * @param { Array<Number> } resolution TODO double check
     */
    render( gl, shader, resolution )
    {
        if ( this.vertices_buffer == null )
            this.createBuffers( gl )

        // TODO bind the vertex buffer to the shader

        // TODO set uniform values 'u_color', 'u_pointSize', and 'u_resolution') in the shader using the shader.setUniform methods 

        // TODO call gl.drawArrays to draw your geometry
    }

}

/**
 * Point extension for drawable; calls super and then adds child specific properties
 */
class Point extends Drawable
{

    // TODO

}

/**
 * Triangle extension for drawable; calls super and then adds child specific properties
 */
class Triangle extends Drawable
{

    // TODO

}

/**
 * Square extension for Drawable; calls super and then adds child specific properties
 */
class Square extends Drawable
{

    // TODO

}

/**
 * Line extension for Drawable; calls super and then adds child specific properties
 */
class Line extends Drawable
{

    // TODO

}

/**
 * Horizontal line extension for Line; calls super and then adds child specific properties
 */
class HLine extends Line
{

    // TODO

}

/**
 * Vertical line extension for Line; calls super and then adds child specific properties
 */
class VLine extends Line
{

    // TODO

}

export
{

    Point,
    Triangle,
    Square,
    HLine,
    VLine

}
