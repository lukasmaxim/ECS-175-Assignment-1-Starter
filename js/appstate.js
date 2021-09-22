import
{
    Point,
    Triangle,
    Square,
    HLine,
    VLine
}
from "./drawables.js"
import Input from "./input.js"
import {hex2rgb} from "./utils.js"

class AppState
{
    constructor( app )
    {
        this.app = app

        // get list of UI indicators
        this.ui_categories = {
            "object_to_draw":
            {
                "point": document.getElementById( "pointToDraw" ),
                "triangle": document.getElementById( "triangleToDraw" ),
                "square": document.getElementById( "squareToDraw" ),
                "hLine": document.getElementById( "hLineToDraw" ),
                "vLine": document.getElementById( "vLineToDraw" ),
            },
            "color_mode":
            {
                "blue": document.getElementById( "blueColorMode" ),
                "gold": document.getElementById( "goldColorMode" )
            },
            "draw_mode":
            {
                "filled": document.getElementById( "filledDrawMode" ),
                "outline": document.getElementById( "outlineDrawMode" )
            }
        }

        // Update UI with default values
        this.updateUI( "object_to_draw", "pointDrawMode" )
        this.updateUI( "color_mode", "blueColorMode" )
        this.updateUI( "draw_mode", "filledDrawMode" )
    }

    update( )
    {
        // TODO: check user input using the Input module and create appropriate handlers to manipulate the canvas
    }

    updateUI( category, name, value = null )
    {
        for ( let key in this.ui_categories[ category ] )
        {
            this.updateUIElement( this.ui_categories[ category ][ key ], key == name, value )
        }
    }

    updateUIElement( el, state, value )
    {
        el.classList.remove( state ? "inactive" : "active" )
        el.classList.add( state ? "active" : "inactive" )

        if ( state && value != null )
            el.innerHTML = value
    }

}

export default AppState
