(function ($) {
    $(document).ready(function () {
        $('form').on('submit', function () {
            var form = $(this), submit = {};
            $('input[type!="radio"][type!="submit"],select,textarea,input[type="radio"]:checked', $(this)).each(function () {
                submit[$(this).attr('name')] = $(this).val();
                var parent = $('[name='+$(this).attr('name')+']', form).closest('.form-group');
                $('.help-block', parent).html('').hide();
                parent.removeClass('has-error');
            });

            $.each(submit, function (name, value) {
                if (name == 'inquiry') {
                    value = $('input[name="inquiry"][value="'+value+'"]', form).parent().text();
                }
                $('.contact-'+name, $('#confirmation')).html(value);
            });

            $('#confirmation').modal();

            return false;
        });

        $('#confirmation .btn-confirm').on('click', function() {
            $('#confirmation').modal('hide');
            var form = $('form'), submit = {};
            $('input[type!="radio"][type!="submit"],select,textarea,input[type="radio"]:checked', $(this)).each(function () {
                submit[$(this).attr('name')] = $(this).val();
            });
            $.ajax({
                type: "post",
                url: "contact.php",
                data: submit,
                contentType: "application/x-www-form-urlencoded",
                success: function(res) {
                    $('.help-block,.message', form).html('').hide();
                    if (typeof res.errors == 'undefined' || Object.keys(res.errors).length == 0) {
                        $('.contact-name', $('#thank-you')).text(submit.name);
                        $('#thank-you').model();
                    } else {
                        if (res.errors.message !== undefined) {
                            $(".message", form).html(res.errors.message).show();
                        }

                        $.each(res.errors, function(index, err) {
                            var parent = $('[name='+index+']', form).closest('.form-group');
                            $('.help-block', parent).html(err).show();
                            parent.addClass('has-error');
                        });
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });
        });
    });
})(jQuery);