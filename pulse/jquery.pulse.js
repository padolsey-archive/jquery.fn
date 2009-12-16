/**
 * Pulse plugin for jQuery 
 * ---
 * @author James Padolsey (http://james.padolsey.com)
 * @version 0.1
 * @updated 16-DEC-09
 * ---
 * Note: In order to animate color properties, you need
 * the color plugin from here: http://plugins.jquery.com/project/color
 * ---
 * @info http://james.padolsey.com/javascript/simple-pulse-plugin-for-jquery/
 */

jQuery.fn.pulse = function( prop, speed, times, easing, callback ) {
    
    if ( isNaN(times) ) {
        callback = easing;
        easing = times;
        times = 1;
    }
    
    var optall = jQuery.speed(speed, easing, callback),
        queue = optall.queue !== false,
        largest = 0;
        
    for (var p in prop) {
        largest = Math.max(prop[p].length, largest);
    }
    
    optall.times = optall.times || times;
    
    return this[queue?'queue':'each'](function(){
        
        var counts = {},
            opt = jQuery.extend({}, optall),
            self = jQuery(this);
            
        pulse();
        
        function pulse() {
            
            var propsSingle = {},
                doAnimate = false;
            
            for (var p in prop) {
                
                // Make sure counter is setup for current prop
                counts[p] = counts[p] || {runs:0,cur:-1};
                
                // Set "cur" to reflect new position in pulse array
                if ( counts[p].cur < prop[p].length - 1 ) {
                    ++counts[p].cur;
                } else {
                    // Reset to beginning of pulse array
                    counts[p].cur = 0;
                    ++counts[p].runs;
                }
                
                if ( prop[p].length === largest ) {
                    doAnimate = opt.times > counts[p].runs;
                }
                
                propsSingle[p] = prop[p][counts[p].cur];
                
            }
            
            opt.complete = pulse;
            opt.queue = false;
            
            if (doAnimate) {
                self.animate(propsSingle, opt);
            } else {
                optall.complete.call(self[0]);
            }
            
        }
            
    });
    
};