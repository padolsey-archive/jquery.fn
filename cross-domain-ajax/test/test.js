

asyncTest('GET', 1, function(){
    
    jQuery.get('http://google.com', function(res){
        ok(
            !!(res && res.responseText),
            'GET Request to Google.com succeeded!'
        );
        start();
    });
    
});

asyncTest('Implicit GET', 1, function(){

    jQuery.ajax({
        url: 'http://yahoo.com',
        success: function(res){
            start();
            ok(
                !!(res && res.responseText),
                'Implicit GET Request to Google.com succeeded!'
            );
        }
    });
});
