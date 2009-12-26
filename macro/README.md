jQuery.macro
---

*`jQuery.macro` aims to lower the barrier to extending jQuery's API -- to rid your global namespace of misplaced functions -- to spare you the superfluous function notation when creating a plugin that only calls a bunch of jQuery methods.*

More info: http://james.padolsey.com/javascript/macros-in-jquery/

`jQuery.macro` allows you to record a set of jQuery method calls, and it will create a regular jQuery plugin that will play back the macro. E.g.

    jQuery.macro('foo').css('color','red').addClass('foo');
    
    // Use the macro:
    jQuery('.someElements').foo(); // Sets color to red and adds the class, "foo"

---

`jQuery.macro` is not a replacement for jQuery plugins; it's simply a neat way of recording multiple simple behaviours. Nothing complicated... just a list of commands.

Calling `jQuery.macro` will give you a macro object, which you can think of as a blank disc that will record anything you do. The object itself can be referenced and recorded to a later time -- doing so will affect the behaviour of the corresponding plugin. For example:

    var myMacro = jQuery.macro('myMacro');
    
    myMacro.css('color','red');
    
    jQuery('div').myMacro(); // Applies a color of red to all DIVS
    
    myMacro.addClass('whoa');
    
    jQuery('div').myMacro(); // Does the same as before PLUS adds a class of whoa!

---

The methods available through `jQuery.macro()` reflect the initial `jQuery.prototype`. If you need to register a new plugin to be usable within macros all you need to do is the following:

    jQuery.fn.somePlugin = function() {/* some plugin you've downloaded */};
    
    jQuery.macro.register('somePlugin'); // Now it can be used within jQuery.macro()
    
---
    
You can access and manipulate all recorded methods in any macro via the `recorded` property:

    var myMacro = jQuery.macro('myMacro');
    
    myMacro.recorded; // => []
    myMacro.css('color','red');
    myMacro.recorded; // [{name:'css', args:['color','red']}]
    myMacro.addClass('wow');
    myMacro.recorded; // [{name:'css', args:['color','red']}, {name:'addClass', args:['wow']}]
    
Have fun! And remember, this isn't a replacement for jQuery plugins!!!