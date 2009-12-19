Pulse
---

The pulse plugin provides a simple way to initiate pulsing on any element. Its API is very similar to jQuery's `animate()` method. 

If you wanted to pulse an element's opacity, it's as simple as:

    jQuery(element).pulse({
        opacity: [1,0] // pulse between 1 and 0
    }, 200, 5);

It will pulse between an opacity of one and zero, a total of five times. Each individual animation (from one value to another) will last 200 milliseconds, as specified in the second parameter.

It also accepts an options object as the second parameter to more clearly outline what you want. E.g.

    jQuery(element).pulse({
        fontSize: ['12px', '16px'],
        opacity: [1,0]
    }, {
        times: 15, // pulse will run 15 times
        duration: 500, // duration of each individual animation
        complete: function() {
            alert('Finished pulsing!');
        }
    });

So, the possible parameter patterns are:
    
    jQuery().pulse( properties );
    jQuery().pulse( properties, duration );
    jQuery().pulse( properties, duration, timesToRun );
    jQuery().pulse( properties, duration, timesToRun, easing );
    jQuery().pulse( properties, duration, timesToRun, easing, callbackFn );
    jQuery().pulse( properties, duration, easing );
    jQuery().pulse( properties, duration, easing, callbackFn );
    jQuery().pulse( properties, options );

More info can be found here: http://james.padolsey.com/javascript/simple-pulse-plugin-for-jquery/