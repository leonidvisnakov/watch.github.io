// $(document).ready((function(){function e(e){return("00"+e).substr(-2)}$("a[href^='#']").click((function(){var e=$(this).attr("href");return $("html, body").animate({scrollTop:$(e).offset().top+"px"}),!1})),function t(){var s=new Date,i=new Date;i.setHours(23),i.setMinutes(59),i.setSeconds(59),23===s.getHours()&&59===s.getMinutes()&&59===s.getSeconds&&i.setDate(i.getDate()+1);var r=Math.floor((i.getTime()-s.getTime())/1e3),n=Math.floor(r/3600);r-=3600*n;var o=Math.floor(r/60);r-=60*o,$(".timer .hours").text(e(n)),$(".timer .minutes").text(e(o)),$(".timer .seconds").text(e(r)),setTimeout(t,200)}(),$(".reviews_slider").slick({dots:!1,infinite:!0,speed:500,fade:!1,cssEase:"linear"}),$(".reviews").slick({dots:!1,infinite:!0,speed:200,fade:!1,cssEase:"linear"})}));
// $(document).ready(function(){
//     $('.tab-links a').on('click', function(e){
//         e.preventDefault();
//         var currentAttrValue = $(this).attr('href');

//         // Show/Hide Tabs with smooth transition
//         $('.tab-content ' + currentAttrValue).addClass('active').siblings().removeClass('active');

       
//     });
// });
// $(document).ready(function(){
//     $('.tab-links a').on('click', function(e){
//         // Удалить класс active у всех ссылок
//         $('.tab-links a').removeClass('active');
//         // Добавить класс active к нажатой ссылке
//         $(this).addClass('active');
//     });
// });
document.addEventListener("DOMContentLoaded", function() {
    var tabLinks = document.querySelectorAll('.tab-links a');

    tabLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var tabId = this.getAttribute('href').substring(1);
            var tabs = document.querySelectorAll('.tab');

            tabs.forEach(function(tab) {
                tab.classList.remove('active');
            });

            var activeTab = document.getElementById(tabId);
            activeTab.classList.add('active');

            tabLinks.forEach(function(link) {
                link.classList.remove('active');
            });

            this.classList.add('active');
        });
    });
});