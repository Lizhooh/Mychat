
(function(Vue, $) {

    var app  = $("#app"),
        user = $("#app .user"),
        list = $("#app .list");


    var headerVue = new Vue({
        el: '#header',
        data: {
            minUser: false,
            minList: false,
        },

        methods: {

            minUserClick: function() {
                if(app.css('display') === 'none') return;
                if(this.minUser = !this.minUser) {
                    user.show(0).stop().animate({
                        'left': 0,
                    }, 240);
                    return;
                }
                user.hide(0).css('left', '-100%');
            },

            minListClick: function() {
                if(app.css('display') === 'none') return;
                if(this.minList = !this.minList) {
                    list.show(0).stop().animate({
                        'right': 0,
                    }, 240);
                    return;
                }
                list.hide(0).css('right', '-100%');
            },
        }
    });


    return headerVue;

})(Vue, jQuery);
