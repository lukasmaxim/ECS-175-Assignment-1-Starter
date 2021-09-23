'use strict'

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
import { hex2rgb } from "./utils.js"

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
        this.updateUI( "object_to_draw", "point" )
        this.updateUI( "color_mode", "blue" )
        this.updateUI( "draw_mode", "filled" )
    }

    /**
     * Updates the app state by checking the input module for changes in user input
     */
    update( )
    {

        // TODO check user input using the input module and create appropriate handlers to manipulate the canvas

        // TODO don't forget to update the ui as seen in the constructor to tell the ui what mode you're in

    }

    /**
     * Updates the ui to represent the current interaction
     * @param { String } category The ui category to use; see this.ui_categories for reference
     * @param { String } name The name of the item within the category
     * @param { String | null } value The value to use if the ui element is not a toggle; sets the element to given string 
     */
    updateUI( category, name, value = null )
    {

        for ( let key in this.ui_categories[ category ] )
        {

            this.updateUIElement( this.ui_categories[ category ][ key ], key == name, value )

        }

    }

    /**
     * Updates a single ui element with given state and value
     * @param { Element } el The dom element to update
     * @param { Boolean } state The state (active / inactive) to update it to
     * @param { String | null } value The value to use if the ui element is not a toggle; sets the element to given string 
     */
    updateUIElement( el, state, value )
    {

        el.classList.remove( state ? "inactive" : "active" )
        el.classList.add( state ? "active" : "inactive" )

        if ( state && value != null )
            el.innerHTML = value

    }

}

export default AppState
