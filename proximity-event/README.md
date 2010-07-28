Proximity event for jQuery
---

---

Inspired, in part, by this plugin: [jquery.onProximityFade.js](http://github.com/linowski/onProximityFade/blob/master/jquery.onProximityFade-1.0.0.js)

---

This special event allows you to detect the cursor's proximity to any given element and respond as you wish. It has been implemnted as an event which mleans that you can bind to it as you would with native DOM events such as `click` and `mouseover`.

It's easier just to show you:

    jQuery('#elem').bind('proximity', {max: 300}, function(event, proximity, distance){
    
        // This will be fired whenever the cursor resides within
        // 300 pixels of #elem
        
        // Arguments:
        // event: Regular event object
        // proximity: a number between 0 and 1 (the closer to zero the further from the element the cursor is)
        // distance: the cursor's distance from the element in pixels
        
    });
    
**[See the demo](http://qd9.co.uk/projects/jQuery-Plugins/proximity-event/demo.html)!**

The second argument to `bind` is the data object and is used by the proximity event to determine your preferences. Available options include (defaults are shown):

    {
        max: 100,           // This determines how close the cursor has to be to the element
                            // in order for the event to fire (measured in pixels)
                            // It also determines the proximity argument passed to your
                            // handler - i.e. if it's 0.99 then we can assume that the
                            // cursor is pretty close to the max)
                  
        min: 0,             // This acts like invisible padding around the element. If the
                            // cursor lies within this distance then the proximity will be
                            // treated as 1.00 (as if the element was being hovered over)
                    
        throttle: 0,        // You can set this to any number (milliseconds) to determine
                            // the maximum frequency of event handler calls. If you set it
                            // to, for example, 100, then the handler will only be called
                            // (at most) every 100 milliseconds. By default your handler
                            // will be called whenever the document's mousemove event is
                            // fired (assuming the cursor lies within the min/max bounds)
                        
        fireOutOfBounds: 1  // This can be set to a number or a boolean.
                            // As a number it will determine how many times the event will
                            // be fired once the cursor is moving about outside of the
                            // min/max bounds. It's set to one so that you're guarenteed to
                            // encounter 0.00 and 1.00 proximities. If set to false then
                            // there is no guarentee that you will know when the cursor
                            // is moving about outside of bounds. If set to true then the
                            // event will be fired on every one of the document's
                            // mousemove events. Note that this doesn't effect the proximity
                            // argument passed to your handler. If the cursor is moving around
                            // outside of the max bound then it will be 0.00
        
    }
    
Typically you won't need to override any of these other than the `max` bound. Note that these values can be mutated after an event has been bound, via `event.data` (the `event` is passed to your handler).

