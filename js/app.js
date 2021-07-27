'use strict'

// TODO replace all globals with function param?

// relative path to both shaders
const vertexFilePath = "shaders/vertex.glsl";
const fragmentFilePath = "shaders/fragment.glsl";

// array of objects to be drawn on each draw call
let objectsToDraw = [];

// whether we're done initializing; used to decide whether to listen to an event yet
let initialized = false;

/**
 * Entry point to the application.
 */
function run() {

    const canvas = document.getElementById('canvas');

    // init webgl
    let gl = initGL(canvas);

    // create the shader program from fragment and vertex source
    let shaderProgram = initShaderProgram(gl);

    // create a container for all info needed to use the shader program
    const programInfo = {
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, 'a_position'),
        },
        uniformLocations: {
            resolutionLocation: gl.getUniformLocation(shaderProgram, 'u_resolution'),
            colorLocation: gl.getUniformLocation(shaderProgram, 'u_color'),
            pointSizeLocation: gl.getUniformLocation(shaderProgram, 'u_pointSize'),
        },
    };

    // add event listeners and resize the canvas
    addEventListeners(gl, programInfo);
    resizeCanvasToDisplaySize(gl.canvas);

    // draw the scene
    drawScene(gl);

    initialized = true;
}

/**
 * Clears the canvas and objectsToDraw array.
 * @param {WebGLRenderingContext} gl The WebGL Rendering Context.
 */
function clearCanvas(gl) {

    // TODO: implement your solution here

    console.log("Cleared the canvas.");

}

/**
 * Initializes WebGL.
 * @param {HTMLElement} canvas The canvas that WebGL hooks in.
 * @returns {null|*}
 */
function initGL(canvas) {

        // TODO implement your solution here

        if (!gl) {
            alert('Could not initialize WebGL.');
            return null;
        }

        return gl;

}

/**
 * Loads a shader from file and compiles it as a shader of given type into a shader program that is returned.
 * @param {WebGLRenderingContext} gl The WebGL Rendering Context.
 * @param {int} type WebGL's internal identifier for the shader type.
 * @returns {WebGLShader|null}
 */
function loadAndCompileShader(gl, type) {

    const filePath = type === gl.VERTEX_SHADER ? vertexFilePath: fragmentFilePath;

    // create either vertex or fragment shader
    let shader = gl.createShader(type);

    // send source to shader object
    gl.shaderSource(shader, getSourceSynch(filePath));

    // compile shader
    gl.compileShader(shader);

    // verify compile status
    let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!success) {
        // if unsuccessful, log error
        alert(`An error occurred compiling the shader: ${gl.getShaderInfoLog(shader)}`)
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

/**
 * Initializes both fragment and vertex shader. Returns the complete program if both shaders were linked successfully.
 * @param {WebGLRenderingContext} gl The WebGL Rendering Context.
 */
function initShaderProgram(gl) {

    // load both shaders
    const vertexShader = loadAndCompileShader(gl, gl.VERTEX_SHADER);
    const fragmentShader = loadAndCompileShader(gl, gl.FRAGMENT_SHADER);

    // create shader program
    let shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    // verify linking status
    let success = gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)
    if (!success) {
        alert(`Unable to initialize the shader program: ${gl.getProgramInfoLog(shaderProgram)}`);
        gl.deleteProgram(shaderProgram);
        return;
    }

    return shaderProgram;

}

/**
 * Main drawing function; This draws every object from the list of objects to draw with the given programInfo.
 * @param {WebGLRenderingContext} gl The WebGL Rendering Context.
 */
function drawScene(gl) {

    // define viewport to tell webgl how to convert from clip space to pixels on the screen
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    // TODO implement your solution here

}

run();
