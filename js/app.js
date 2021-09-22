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
        // TODO: create a structure to store your objects (points, triangles, etc.)

        // resize handling
        this.resizeToDisplay( )
        window.onresize = this.resizeToDisplay.bind( this )

        // app state
        this.app_state = new AppState( this )

    }

    /** 
     * Resizes camera and canvas to pixel size corrected display size
     */
    resizeToDisplay( )
    {
        // TODO: handle window resizes so that your objects scale accordingly
    }

    addObject( object )
    {
        // TODO: add a new drawable object to your collection of objects
    }

    clearCanvas( )
    {
        // TODO: clear the scene and canvas

        console.log( "Cleared the canvas." )
    }

    /**
     * Initializes WebGL and sets settings
     * @returns {null|*}
     */
    initGl( )
    {
        // TODO: initialize webgl2 here
        let gl

        return gl
    }

    start( )
    {
        requestAnimationFrame( ( ) =>
        {
            this.update( )
        } )
    }

    update( )
    {
        this.app_state.update( )
        //this.render( )
        Input.update( )
        requestAnimationFrame( ( ) =>
        {
            this.update( )
        } )
    }

    render( )
    {
        // clear the screen
        this.gl.viewport( 0, 0, this.gl.canvas.width, this.gl.canvas.height )
        this.gl.clear( this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT )

        // activate the shader
        this.shader.use( )

        // TODO: draw your objects here
    }
}

export default App
