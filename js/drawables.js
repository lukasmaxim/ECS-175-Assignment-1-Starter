/**
 * @Class
 * Base class for all drawable objects.
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

    createBuffers( gl )
    {
        // TODO: create a vertex buffer and save it to this.vertices_buffer
        // TODO: fill the vertex buffer with the vertex data
    }

    render( gl, shader, resolution )
    {
        if ( this.vertices_buffer == null )
            this.createBuffers( gl )

        // TODO: bind the vertex buffer to the shader

        // TODO: set uniform values 'u_color', 'u_pointSize', and 'u_resolution') in the shader using the shader.setUniform methods 

        // TODO: call gl.drawArrays to draw your geometry
    }

}

/**
 * @Class
 * Point extension for Drawable. Calls super and then adds object-specific properties
 */
class Point extends Drawable
{
    //TODO: Implement this
}

/**
 * @Class
 * Triangle extension for Drawable. Calls super and then adds object-specific properties
 */
class Triangle extends Drawable
{
    //TODO: Implement this
}

/**
 * Square extension for Drawable. Calls super and then adds object-specific properties
 */
class Square extends Drawable
{
    //TODO: Implement this
}

/**
 * @Class
 * Line extension for Drawable. Calls super and then adds object-specific properties
 */
class Line extends Drawable
{
    //TODO: Implement this
}

/**
 * @Class
 * Horizontal line extension for Line. Calls super and then adds object-specific properties
 */
class HLine extends Line
{
    //TODO: Implement this
}

/**
 * @Class
 * Vertical line extension for Line. Calls super and then adds object-specific properties
 */
class VLine extends Line
{
    //TODO: Implement this
}

export
{
    Point,
    Triangle,
    Square,
    HLine,
    VLine
}
