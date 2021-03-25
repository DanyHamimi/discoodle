var defaultId = 'Progra';
console.log(defaultId);
(function($) {
    "use strict"; // Start of use strict

    function showGroup(id) {
        defaultId = id;
        if (typeof id == 'undefined') {
            showGroup(defaultId);
            return;
        }

        $('.messages-group').each(function() {
            if ($(this).attr('id') === id) {
                $(this).addClass('show');
            } else {
                $(this).removeClass('show');
            }
        });
    };

    $(document).ready(function() {
        showGroup(defaultId);
    });

    $('.trigger-group').click(function() {
        console.log($(this).attr('data'));
        var id = $(this).attr('data');
        showGroup(id);
    });
})(jQuery); // End of use strict