$(document).ready(function () {
    !function (D) {
        "use strict";
        D(function () {
            var e = document.getElementById("price-range-filter");
            if (e) {
                noUiSlider.create(e, {
                    start: [20, 80],
                    connect: !0,
                    range: {
                        min: 0,
                        max: 100
                    },
                    format: wNumb({
                        decimals: 0
                    })
                });
                var t = document.getElementById("price-range-min"),
                    n = document.getElementById("price-range-max");
                e.noUiSlider.on("update", function (e, a) {
                    a ? n.innerHTML = "$" + e[a] : t.innerHTML = "$" + e[a]
                })
            }
            D(".gallery-wrapper, #gallery-wrapper").length && D(".gallery-wrapper, #gallery-wrapper").magnificPopup({
                type: "image",
                delegate: "a.zoom",
                gallery: {
                    enabled: !0
                }
            }), D(".popup-youtube").length && D(".popup-youtube").magnificPopup({
                disableOn: 700,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            }), D(".loadmore").on("click", "a", function (e) {
                e.preventDefault();
                var a = D(this),
                    t = a.parents(".courses-list-wrapper").find(".courses-list").find(".courses-item.hidden").slice(0, 2);
                return t.length ? (t.animate({
                    opacity: 0
                }), t.promise().done(function () {
                    t.removeClass("hidden"), t.show().animate({
                        opacity: 1
                    }, 1e3)
                })) : a.text("No more item to display"), !1
            }), D("#quantity-holder,#quantity-holder2").on("click", ".quantity-plus", function () {
                var e = D(this).parents(".quantity-holder").find("input.quantity-input"),
                    a = parseInt(e.val(), 10);
                D.isNumeric(a) && 0 < a && (a += 1), e.val(a)
            }).on("click", ".quantity-minus", function () {
                var e = D(this).parents(".quantity-holder").find("input.quantity-input"),
                    a = parseInt(e.val(), 10);
                D.isNumeric(a) && 2 <= a ? (a -= 1, e.val(a)) : e.val(1)
            }), D(document).on("click", "#search-button", function (e) {
                return e.preventDefault(), D(this).prev(".search-form").animate({
                    width: ["toggle", "swing"],
                    height: ["toggle", "swing"],
                    opacity: "toggle"
                }, 500, "linear"), !1
            })
        }), D("nav#dropdown").meanmenu({
            siteLogo: "<a href='index.html' class='logo-mobile-menu'><img src='../img/mobile-logo.png' /></a>"
        }), (new WOW).init(), D.scrollUp({
            scrollText: '<i class="fa fa-arrow-up"></i>',
            easingType: "linear",
            scrollSpeed: 900,
            animation: "fade"
        }), D(window).on("load", function () {
            D("#preloader").fadeOut("slow", function () {
                D(this).remove()
            });
            var e = D("#inner-isotope");
            if (0 < e.length) {
                var a = e.find(".isotop-classes-tab a.current").attr("data-filter");
                console.log(a);
                var t = e.find(".featuredContainer").isotope({
                    filter: a,
                    animationOptions: {
                        duration: 750,
                        easing: "linear",
                        queue: !1
                    }
                });
                e.find(".isotop-classes-tab").on("click", "a", function () {
                    var e = D(this);
                    e.parent(".isotop-classes-tab").find("a").removeClass("current"), e.addClass("current");
                    var a = e.attr("data-filter");
                    return t.isotope({
                        filter: a,
                        animationOptions: {
                            duration: 750,
                            easing: "linear",
                            queue: !1
                        }
                    }), !1
                })
            }
        });
        var e = D(".about-counter");
        e.length && e.counterUp({
            delay: 50,
            time: 5e3
        }), D("#checkout-form select.select2").length && D("#checkout-form select.select2").select2({
            theme: "classic",
            dropdownAutoWidth: !0,
            width: "100%"
        });
        var a = D("#ri-grid");
        a.length && a.gridrotator({
            rows: 3,
            columns: 14,
            animType: "random",
            animSpeed: 1e3,
            interval: 600,
            step: 1,
            w1024: {
                rows: 3,
                columns: 8
            },
            w768: {
                rows: 3,
                columns: 6
            },
            w480: {
                rows: 3,
                columns: 4
            },
            w320: {
                rows: 3,
                columns: 4
            },
            w240: {
                rows: 3,
                columns: 4
            }
        });
        var n = D("#contact-form");
        n.length && n.validator().on("submit", function (e) {
            var a = D(this),
                t = n.find(".form-response");
            if (!e.isDefaultPrevented()) return D.ajax({
                url: "vendor/php/form-process.php",
                type: "POST",
                data: n.serialize(),
                beforeSend: function () {
                    t.html("<div class='alert alert-info'><p>Loading ...</p></div>")
                },
                success: function (e) {
                    "success" === e ? (a[0].reset(), t.html("<div class='alert alert-success'><p><i class='fa fa-check' aria-hidden='true'></i>Message has been sent successfully.</p></div>")) : t.html("<div class='alert alert-danger'><p>" + e + "</p></div>")
                }
            }), !1;
            t.html("<div class='alert alert-danger'><p>Please select all required field.</p></div>")
        });
        var i = D("#question-form");
        i.length && i.validator().on("submit", function (e) {
            var a = D(this),
                t = i.find(".form-response");
            if (!e.isDefaultPrevented()) return D.ajax({
                url: "vendor/php/question-form-process.php",
                type: "POST",
                data: i.serialize(),
                beforeSend: function () {
                    t.html("<div class='alert alert-info'><p>Loading ...</p></div>")
                },
                success: function (e) {
                    "success" === e ? (a[0].reset(), t.html("<div class='alert alert-success'><p>Successfully Send.</p></div>")) : t.html("<div class='alert alert-danger'><p>" + e + "</p></div>")
                }
            }), !1;
            t.html("<div class='alert alert-danger'><p>Please select all required field.</p></div>")
        }), D("#countdown").countdown("2018/01/01", function (e) {
            D(this).html(e.strftime("<div class='countdown-section'><h3>%D</h3> <p>Day%!D</p> </div><div class='countdown-section'><h3>%H</h3> <p>Hour%!H</p> </div><div class='countdown-section'><h3>%M</h3> <p>Minute%!M</p> </div><div class='countdown-section'><h3>%S</h3> <p>Second%!S</p> </div>"))
        }), D(window).on("load resize", function () {
            var e = D(window).height();
            D("a.logo-mobile-menu").outerHeight(), e -= 50, D(".mean-nav > ul").css("height", e + "px")
        }), D(window).on("scroll", function () {
            var e = D("#sticker"),
                a = D(".wrapper"),
                t = (e.outerHeight(), D(window).scrollTop()),
                n = D(window).width(),
                i = e.parent("#header1"),
                o = e.parent("#header2"),
                s = e.parent("#header3"),
                r = (s.find(".header-top-area").outerHeight(), e.prev(".header-top-area"));
            if (767 < n) {
                a.css("padding-top", "");
                var l, d = 0;
                i.length ? l = d = i.find(".main-menu-area").outerHeight() : o.length ? (d = o.find(".main-menu-area").outerHeight(), l = r.outerHeight()) : s.length && t <= (l = r.outerHeight()) && s.css("top", "-" + t + "px"), l <= t ? (o.length && (e.addClass("stick"), r.css("margin-bottom", d + "px")), s.length && (e.addClass("stick"), s.css("top", "-" + l + "px"))) : (e.removeClass("stick"), o.length && r.css("margin-bottom", 0))
            }
        }), D("#review-form").on("click", ".rate-wrapper .rate .rate-item", function () {
            var e = D(this),
                a = e.parent(".rate");
            a.addClass("selected"), a.find(".rate-item").removeClass("active"), e.addClass("active")
        });
        var t = D("#faq-accordian");
        t.on("show.bs.collapse", function (e) {
            t.find(".panel-heading").removeClass("active"), D(e.target).parents(".panel").find(".panel-heading").addClass("active"), t.find(".panel-collapse.collapse").slideUp("slow", function () {
                D(this).removeClass("in").css("display", "")
            })
        });
        var o = D("#accordion");
        o.find(".panel-collapse").each(function () {
            D(this).hasClass("in") && D(this).parents(".panel").find(".panel-heading").addClass("active")
        }), o.on("show.bs.collapse", function (e) {
            D(e.target).parents(".panel").find(".panel-heading").addClass("active")
        }).on("hide.bs.collapse", function (e) {
            D(e.target).parents(".panel").find(".panel-heading").removeClass("active")
        }), D("#login-button").on("click", function (e) {
            e.preventDefault();
            var a = D(this),
                t = a.next("#login-form");
            a.hasClass("open") ? (t.slideUp("slow"), a.removeClass("open")) : (t.slideDown("slow"), a.addClass("open"))
        }), D("#login-form").on("click", ".form-cancel", function (e) {
            e.preventDefault();
            var a = D(this).parents("#login-form"),
                t = a.prev("#login-button");
            a.slideUp("slow"), t.removeClass("open")
        }), D("#googleMap").length && google.maps.event.addDomListener(window, "load", function () {
            var e = {
                zoom: 15,
                scrollwheel: !1,
                center: new google.maps.LatLng(-37.81618, 144.95692)
            },
                a = new google.maps.Map(document.getElementById("googleMap"), e);
            new google.maps.Marker({
                position: a.getCenter(),
                animation: google.maps.Animation.BOUNCE,
                icon: "img/map-marker.png",
                map: a
            })
            
        })
    }(jQuery);
});

