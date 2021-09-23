'use strict'

import Shader from "./shader.js"

/**
 * Base class for all drawable objects
 */
class Drawable
{

    constructor( vertices, color, primitive_type, point_size )
    {

        this.vertices = vertices
        this.vertices_buffer = null

        this.color = color

        this.primitive_type = primitive_type

        this.point_size = point_size

    }

    /**
     * Creates buffer for vertex data
     * @param { WebGL2RenderingContext } gl The webgl2 rendering context
     */
    createBuffer( gl )
    {

        // TODO create a vertex buffer and save it to this.vertices_buffer

        // TODO fill the vertex buffer with your vertex data

    }

    /**
     * Render loop for an individual drawable
     * @param { WebGL2RenderingContext } gl The webgl2 rendering context
     * @param { Shader } shader The shader to use for rendering
     * @param { Array<Number> } resolution The current size of the canvas
     */
    render( gl, shader, resolution )
    {

        if ( this.vertices_buffer == null )
            this.createBuffer( gl )

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

    // TODO implement

}

/**
 * Triangle extension for drawable; calls super and then adds child specific properties
 */
class Triangle extends Drawable
{

    // TODO implement

}

/**
 * Square extension for Drawable; calls super and then adds child specific properties
 */
class Square extends Drawable
{

    // TODO implement

}

/**
 * Line extension for Drawable; calls super and then adds child specific properties
 */
class Line extends Drawable
{

    // TODO implement

}

/**
 * Horizontal line extension for Line; calls super and then adds child specific properties
 */
class HLine extends Line
{

    // TODO implement

}

/**
 * Vertical line extension for Line; calls super and then adds child specific properties
 */
class VLine extends Line
{

    // TODO implement

}

export
{

    Point,
    Triangle,
    Square,
    HLine,
    VLine

}
