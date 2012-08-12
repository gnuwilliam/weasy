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
            if ( that.isFieldFilled() ) {
                return that.setPlaceholder( str );
            }
        });
        
    };
    
    $.fn.isFieldFilled = function() {
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

    $.fn.isTextInput = function() {
        if ( $(this).attr( 'type' ) != 'text' ) {
            if ( $(this).attr( 'class' ) ) {
                console.log( $(this).attr( 'class' ) + ' is not a text input' );
                return false;
            } else if ( $(this).attr(' id' ) ) {
                console.log( $(this).attr( 'id' ) + ' is not a text input' );
                return false;
            }
            console.log( $(this)[0].nodeName + ' is not a text input' );
            return false;
        }
        console.log('yes');
        return true;
    };

    $.fn.removeInputValue = function() {
        if ( $(this).val() ) {
            return $(this).val( '' );
        }
        return false;
    };

})(jQuery);