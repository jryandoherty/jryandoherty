var rfx;



rfx = {

    /**
     * populate visible zipcode and email fields (part of question set)
     * with value from hidden reg zip code field (will have value if 'rfuid' or 'rfemail' URL parameters are present)
     */
    popVisible: function () {
        var zip = $('.zipcodeReg').val(),
            email = $('.emailReg').val();

        $('.zipcodeQs').val( zip );
        $('.emailQs').val( email );

    },

    /**
     * populate hidden zipcode input (part of question set)
     * with value from reg zip code field
     */
    popHidden: function () {
        var zip = $('.zipcodeQs').val(),
            email = $('.emailQs').val();

        $('.zipcodeReg').val( zip );
        $('.emailReg').val( email );

    },



    /**
     * Set up form validation
     */
    validate: function () {
        var that = this;
        this.validatorDefaults();

        $('#rfxForm').validate({
            errorElement: "div",
            errorPlacement: function ( error, element ) {
    
                // if element is text input next to 'other' check or radio
                if ( element.hasClass( 'other-input' ) ) {
                    element.parent().append( error );
                } else {
                    error.insertBefore( element );
                }

            },
            submitHandler: function ( form ) {
                that.popHidden();

                form.submit();
            }
        });

        // make text inputs next to "other" radio and checkboxes required if, and only if
        // the "other" radio or checkbox is checked
        if ( $('#rfxForm').find( '.other-input' ).length ) {
            $('#rfxForm').find( '.other-input' ).each(function( i, ele ){
                $( ele ).removeClass( 'required' ).rules( 'add', {
                    required: function ( ele ) {
                        // return $( ele ).parents( 'li' ).children( 'input' ).is( ':checked' );
                        return $( ele ).prevAll('input')[0].checked;
                    }
                });
            });
        }

    },

    validatorDefaults: function () {

        $.validator.addMethod(
            'zipcode',
            function ( value, element ) {
                value = $.trim( value );
                return this.optional(element) || /^\d{5}(-\d{4})?$/.test(value);
            },
            'Please use a valid 5 digit US zip code.'
        );
        $.validator.addMethod('validzipcode', $.validator.methods.zipcode, 'Please use a valid 5 digit US zip code.');

		$.validator.addMethod(
			"phoneUS",
			function ( value, element ) {
				value = value.replace(/\s+/g, "");
				return this.optional(element) || value.match(/^(1[\-| \.]?)?(?:\([2-9]\d{2}\)?\s?|[2-9]\d{2}(?:\-\._ )?)[\-\.\s/\\_]?[2-9]\d{2}[\-\s\._\\/]?\d{4}(?:[\sa-zA-Z#]+.*)*$/);
			},
			"Please use the following format: 555-555-1212"
		);
        $.validator.addMethod('validphone', $.validator.methods.phoneUS, 'Please use the following format: 555-555-1212');

        $.validator.addMethod('validnumber', $.validator.methods.number, 'Please enter a valid number.');
        $.validator.addMethod('validemail', $.validator.methods.email, 'Please enter a valid email address.');
        $.validator.addMethod('validurl', $.validator.methods.url, 'Please enter a valid URL.');


        $.validator.setDefaults({
            onkeyup: false,
            rules: {
                "phone": {
                    phoneUS: true
                }
            }
        });


    },

    /**
     * Kick off page load functionality
     */
    init: function () {

        this.popVisible();
        this.validate();
        $('.ie7 .container').wrap('<div />');
    }

};

rfx.init();	
