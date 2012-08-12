(function($) {

    $.fn.placeholder = function( str ) {
        var that = this;
        var placeholder = str;
        
        that.isTextInput( $(this) );
        that.removeInputValue( $(this) );
        that.setPlaceholder( str );
        
        $( this ).focus(function() {
            if ( $(this).val() == placeholder ) {
                return that.removeInputValue( $(this) );
            }
            return false;
        });
        
        $( this ).blur(function() {
            if ( that.isFieldFilled( $(this) ) ) {
                return that.setPlaceholder( str );
            }
        });
        
    };
    
    $.fn.isFieldFilled = function( el ) {
        if ( !$(this).val() ) {
            return true;
        }
        return false;
    };
    
    $.fn.setPlaceholder = function( str ) {
        if ( !str ) {
            console.log(' Please pass a string as a parameter ');
            return false;
        } else if ( typeof(str) != 'string' ) {
            console.log(' Please pass a string as a parameter ');
            return false;
        }
        $( this ).val( str );
        return false;
    };

    $.fn.isTextInput = function( el ) {
        if ( el.attr( 'type' ) != 'text' ) {
            if ( el.attr( 'class' ) ) {
                console.log( el.attr( 'class' ) + ' is not a text input' );
                return false;
            } else if ( el.attr(' id' ) ) {
                console.log( el.attr( 'id' ) + ' is not a text input' );
                return false;
            }
            console.log( el[0].nodeName + ' is not a text input' );
            return false;
        }
    };

    $.fn.removeInputValue = function( el ) {
        if ( el.val() ) {
            return $(this).val( '' );
        }
        return false;
    };

})(jQuery);