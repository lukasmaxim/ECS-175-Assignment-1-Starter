'use strict'

import Input from "./input.js"
import Shader from "./shader.js"
import AppState from "./appstate.js"

class App
{

    constructor( )
    {

        console.log( "Initializing App" )

        // canvas & gl
        this.canvas = document.getElementById( "canvas" )
        this.canvas.addEventListener( "contextmenu", event => event.preventDefault( ) );
        this.gl = this.initGl( )

        // shaders
        console.log( "Loading Shaders" )
        this.shader = new Shader( this.gl, "../shaders/vertex.glsl", "../shaders/fragment.glsl" )

        // objects
        // TODO create a structure to store your objects (points, triangles, etc.)

        // resize handling
        this.resizeToDisplay( )
        window.onresize = this.resizeToDisplay.bind( this )

        // app state
        this.app_state = new AppState( this )

    }

    /** 
     * Resizes canvas to pixel-size-corrected display size
     */
    resizeToDisplay( )
    {

        // TODO handle window resizes so that your objects scale accordingly

    }

    /**
     * Adds objects to internal data structure
     * @param { Drawable } object The object to add to your data structure
     */
    addObject( object )
    {

        // TODO implement

    }

    /**
     * Clears scene and canvas
     */
    clearCanvas( )
    {

        // TODO implement

        console.log( "Cleared scene and canvas." )

    }

    /**
     * Initializes webgl2 with settings
     * @returns { WebGL2RenderingContext | null }
     */
    initGl( )
    {

        // TODO implement

        let gl

        return gl

    }

    /**
     * Starts render loop
     */
    start( )
    {

        requestAnimationFrame( ( ) =>
        {

            this.update( )

        } )

    }

    /**
     * Called every frame, triggers input and app state update and renders a frame
     */
    update( )
    {

        this.app_state.update( )
        Input.update( )
        this.render( )
        requestAnimationFrame( ( ) =>
        {

            this.update( )

        } )

    }

    /**
     * Main render loop
     */
    render( )
    {

        // clear the screen
        this.gl.viewport( 0, 0, this.gl.canvas.width, this.gl.canvas.height )
        this.gl.clear( this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT )

        // activate the shader
        this.shader.use( )

        // TODO draw your objects here

    }
}

export default App
