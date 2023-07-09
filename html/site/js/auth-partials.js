Handlebars.registerPartial("auth-container", Handlebars.template({
    compiler: [8, ">= 4.3.0"],
    main: function (l, n, e, a, o) {
       var r, t = l.lookupProperty || function (l, n) {
          if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
       };
       return (null != (r = l.invokePartial(t(a, "login-blade"), n, {
          name: "login-blade",
          hash: {
             form_name: "login-form",
             action: "/learner-entry",
             id: "login",
             login: !0
          },
          data: o,
          helpers: e,
          partials: a,
          decorators: l.decorators
       })) ? r : "") + (null != (r = l.invokePartial(t(a, "login-blade"), n, {
          name: "login-blade",
          hash: {
             form_name: "register-form",
             form_id: "signup-form",
             action: "/register",
             id: "signup",
             signup: !0
          },
          data: o,
          helpers: e,
          partials: a,
          decorators: l.decorators
       })) ? r : "") + (null != (r = l.invokePartial(t(a, "login-blade"), n, {
          name: "login-blade",
          hash: {
             form_name: "login-form",
             action: "/publisher-login",
             id: "publishing_login",
             login_as_publisher: !0
          },
          data: o,
          helpers: e,
          partials: a,
          decorators: l.decorators
       })) ? r : "")
    },
    usePartial: !0,
    useData: !0
 })), Handlebars.registerPartial("login-blade", Handlebars.template({
    1: function (l, n, e, a, o) {
       return " active "
    },
    3: function (l, n, e, a, o) {
       return ' <div class="close-modal"><span class="icon-cross2"></span></div> '
    },
    5: function (l, n, e, a, o) {
       var r, t = l.lookupProperty || function (l, n) {
          if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
       };
       return ' <div class="login-inner-left"> ' + (null != (r = l.invokePartial(t(a, "social-login"), n, {
          name: "social-login",
          hash: {
             route_name: null != (r = null != n ? t(n, "routes") : n) ? t(r, "route_name") : r,
             current_url: null != (r = null != n ? t(n, "routes") : n) ? t(r, "current_url") : r
          },
          data: o,
          helpers: e,
          partials: a,
          decorators: l.decorators
       })) ? r : "") + ' <ul id="login-buttons" class="tab-navbar"> ' + (null != (r = t(e, "if").call(null != n ? n : l.nullContext || {}, null != n ? t(n, "signup") : n, {
          name: "if",
          hash: {},
          fn: l.program(6, o, 0),
          inverse: l.program(8, o, 0),
          data: o,
          loc: {
             start: {
                line: 1,
                column: 861
             },
             end: {
                line: 1,
                column: 1161
             }
          }
       })) ? r : "") + ' </ul> <div class="or-line"> <span>or</span> </div> </div> \x3c!-- END .login-inner-left --\x3e '
    },
    6: function (l, n, e, a, o) {
       var r, t = l.lambda,
          i = l.escapeExpression,
          l = l.lookupProperty || function (l, n) {
             if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
          };
       return ' <li class="signup-account switch-tab"> ' + i(t(null != (r = null != n ? l(n, "lang") : n) ? l(r, "dont_have_account") : r, n)) + ' <a href="' + i(t(null != (r = null != n ? l(n, "routes") : n) ? l(r, "register_url") : r, n)) + '">' + i(t(null != (r = null != n ? l(n, "lang") : n) ? l(r, "signup") : r, n)) + "</a> </li> "
    },
    8: function (l, n, e, a, o) {
       var r, t = l.lambda,
          i = l.escapeExpression,
          l = l.lookupProperty || function (l, n) {
             if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
          };
       return ' <li class="signup-account login-account switch-tab"> ' + i(t(null != (r = null != n ? l(n, "lang") : n) ? l(r, "have_account") : r, n)) + ' <a href="' + i(t(null != (r = null != n ? l(n, "routes") : n) ? l(r, "login_url") : r, n)) + '">' + i(t(null != (r = null != n ? l(n, "lang") : n) ? l(r, "login") : r, n)) + "</a> </li> "
    },
    10: function (l, n, e, a, o) {
       return ' <div class="login-inner-right"> '
    },
    12: function (l, n, e, a, o) {
       return "email-signup slide-on-social"
    },
    14: function (l, n, e, a, o) {
       return "<p>This is the name that will appear on your Certification</p>"
    },
    16: function (l, n, e, a, o) {
       var r = l.lookupProperty || function (l, n) {
          if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
       };
       return " " + (null != (r = l.invokePartial(r(a, "signup-form"), n, {
          name: "signup-form",
          data: o,
          helpers: e,
          partials: a,
          decorators: l.decorators
       })) ? r : "") + " "
    },
    18: function (l, n, e, a, o) {
       var r = l.lookupProperty || function (l, n) {
          if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
       };
       return " " + (null != (r = l.invokePartial(r(a, "login-form"), n, {
          name: "login-form",
          data: o,
          helpers: e,
          partials: a,
          decorators: l.decorators
       })) ? r : "") + " "
    },
    20: function (l, n, e, a, o) {
       return ' <input type="hidden" name="route_name" value="site.courses.resume" /> '
    },
    22: function (l, n, e, a, o) {
       var r = l.lookupProperty || function (l, n) {
          if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
       };
       return ' <input type="hidden" name="route_name" value="' + l.escapeExpression(l.lambda(null != (l = null != n ? r(n, "routes") : n) ? r(l, "route_name") : l, n)) + '" /> '
    },
    24: function (l, n, e, a, o) {
       var r, t = l.lambda,
          i = l.escapeExpression,
          l = l.lookupProperty || function (l, n) {
             if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
          };
       return ' <ul id="login-buttons" class="tab-navbar"> <li class="publishing-login-signup"> ' + i(t(null != (r = null != n ? l(n, "lang") : n) ? l(r, "dont_have_publishing_account") : r, n)) + ' <a href="' + i(t(null != (r = null != n ? l(n, "routes") : n) ? l(r, "self_publish_url") : r, n)) + '">' + i(t(null != (r = null != n ? l(n, "lang") : n) ? l(r, "signup") : r, n)) + "</a> </li> </ul> "
    },
    26: function (l, n, e, a, o) {
       var r, t = l.lambda,
          l = l.lookupProperty || function (l, n) {
             if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
          };
       return ' \x3c!-- Only displayed when a social option is selected --\x3e <div class="form-group social-signup" style="display: none"> <form method="POST" action="index.html" accept-charset="UTF-8" id="social-form" name="social-form"> <p class="terms-conditions"> <input id="signup_tc_social" name="signup_tc_social" type="checkbox"> <label for="signup_tc_social" class="form-checkbox tc-check">' + (null != (r = t(null != (r = null != n ? l(n, "lang") : n) ? l(r, "accept") : r, n)) ? r : "") + '</label> <input name="signup_emails_social" type="hidden" value="1"> <input class="submit-login signup-button" type="submit" value="' + (null != (r = t(null != (r = null != n ? l(n, "lang") : n) ? l(r, "signup") : r, n)) ? r : "") + '"> </p> </form> </div> \x3c!-- END social-signup --\x3e \x3c!-- END .form-group --\x3e '
    },
    28: function (l, n, e, a, o) {
       return " </div> "
    },
    30: function (l, n, e, a, o) {
       var r, t = l.lambda,
          i = l.escapeExpression,
          l = l.lookupProperty || function (l, n) {
             if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
          };
       return ' <div class="back-home-outer"> <a href="' + i(t(null != (r = null != n ? l(n, "routes") : n) ? l(r, "home_url") : r, n)) + '"> <div class="back-home-inner"> <span class="icon-chevrons-left"></span> ' + i(t(null != (r = null != n ? l(n, "lang") : n) ? l(r, "login_gohome") : r, n)) + " </div> </a> </div> "
    },
    compiler: [8, ">= 4.3.0"],
    main: function (l, n, e, a, o) {
       var r, t, i = null != n ? n : l.nullContext || {},
          u = l.hooks.helperMissing,
          s = "function",
          c = l.escapeExpression,
          p = l.lambda,
          m = l.lookupProperty || function (l, n) {
             if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
          };
       return '<li id="' + c(typeof (t = null != (t = m(e, "id") || (null != n ? m(n, "id") : n)) ? t : u) == s ? t.call(i, {
          name: "id",
          hash: {},
          data: o,
          loc: {
             start: {
                line: 1,
                column: 8
             },
             end: {
                line: 1,
                column: 16
             }
          }
       }) : t) + '" class="tab ' + (null != (r = m(e, "if").call(i, null != n ? m(n, "login") : n, {
          name: "if",
          hash: {},
          fn: l.program(1, o, 0),
          inverse: l.noop,
          data: o,
          loc: {
             start: {
                line: 1,
                column: 29
             },
             end: {
                line: 1,
                column: 57
             }
          }
       })) ? r : "") + '"> ' + (null != (r = m(e, "if").call(i, null != n ? m(n, "idle_modal") : n, {
          name: "if",
          hash: {},
          fn: l.program(3, o, 0),
          inverse: l.noop,
          data: o,
          loc: {
             start: {
                line: 1,
                column: 60
             },
             end: {
                line: 1,
                column: 151
             }
          }
       })) ? r : "") + " " + (null != (r = l.invokePartial(m(a, "login-left"), n, {
          name: "login-left",
          data: o,
          helpers: e,
          partials: a,
          decorators: l.decorators
       })) ? r : "") + ' <div class="login-right"> <div class="tabs"> <div class="' + (null != (r = m(e, "if").call(i, null != n ? m(n, "signup") : n, {
          name: "if",
          hash: {},
          fn: l.program(1, o, 0),
          inverse: l.noop,
          data: o,
          loc: {
             start: {
                line: 1,
                column: 226
             },
             end: {
                line: 1,
                column: 255
             }
          }
       })) ? r : "") + ' register-tab switch-tab"><a href="' + c(p(null != (r = null != n ? m(n, "routes") : n) ? m(r, "register_url") : r, n)) + '">' + c(p(null != (r = null != n ? m(n, "lang") : n) ? m(r, "signup") : r, n)) + '</a></div> <div class="' + (null != (r = m(e, "if").call(i, null != n ? m(n, "login") : n, {
          name: "if",
          hash: {},
          fn: l.program(1, o, 0),
          inverse: l.noop,
          data: o,
          loc: {
             start: {
                line: 1,
                column: 357
             },
             end: {
                line: 1,
                column: 385
             }
          }
       })) ? r : "") + 'login-tab login-account switch-tab"><a href="' + c(p(null != (r = null != n ? m(n, "routes") : n) ? m(r, "login_url") : r, n)) + '">' + c(p(null != (r = null != n ? m(n, "lang") : n) ? m(r, "login") : r, n)) + '</a></div> <div class="' + (null != (r = m(e, "if").call(i, null != n ? m(n, "login_as_publisher") : n, {
          name: "if",
          hash: {},
          fn: l.program(1, o, 0),
          inverse: l.noop,
          data: o,
          loc: {
             start: {
                line: 1,
                column: 493
             },
             end: {
                line: 1,
                column: 534
             }
          }
       })) ? r : "") + ' login-as-publisher switch-tab"><a href="' + c(p(null != (r = null != n ? m(n, "routes") : n) ? m(r, "publisher_url") : r, n)) + '">' + c(p(null != (r = null != n ? m(n, "lang") : n) ? m(r, "login_as_publisher") : r, n)) + '</a></div> </div> <div class="login-inner"> ' + (null != (r = m(e, "unless").call(i, null != n ? m(n, "login_as_publisher") : n, {
          name: "unless",
          hash: {},
          fn: l.program(5, o, 0),
          inverse: l.noop,
          data: o,
          loc: {
             start: {
                line: 1,
                column: 676
             },
             end: {
                line: 1,
                column: 1262
             }
          }
       })) ? r : "") + " " + (null != (r = m(e, "unless").call(i, null != n ? m(n, "login_as_publisher") : n, {
          name: "unless",
          hash: {},
          fn: l.program(10, o, 0),
          inverse: l.noop,
          data: o,
          loc: {
             start: {
                line: 1,
                column: 1263
             },
             end: {
                line: 1,
                column: 1337
             }
          }
       })) ? r : "") + ' <div class="form-group ' + (null != (r = m(e, "if").call(i, null != n ? m(n, "signup") : n, {
          name: "if",
          hash: {},
          fn: l.program(12, o, 0),
          inverse: l.noop,
          data: o,
          loc: {
             start: {
                line: 1,
                column: 1361
             },
             end: {
                line: 1,
                column: 1410
             }
          }
       })) ? r : "") + '"> ' + (null != (r = m(e, "if").call(i, null != n ? m(n, "signup") : n, {
          name: "if",
          hash: {},
          fn: l.program(14, o, 0),
          inverse: l.noop,
          data: o,
          loc: {
             start: {
                line: 1,
                column: 1413
             },
             end: {
                line: 1,
                column: 1496
             }
          }
       })) ? r : "") + ' <form method="POST" action="' + c(typeof (t = null != (t = m(e, "action") || (null != n ? m(n, "action") : n)) ? t : u) == s ? t.call(i, {
          name: "action",
          hash: {},
          data: o,
          loc: {
             start: {
                line: 1,
                column: 1525
             },
             end: {
                line: 1,
                column: 1537
             }
          }
       }) : t) + '" accept-charset="UTF-8" data-signup-form="" id="' + c(typeof (t = null != (t = m(e, "form_id") || (null != n ? m(n, "form_id") : n)) ? t : u) == s ? t.call(i, {
          name: "form_id",
          hash: {},
          data: o,
          loc: {
             start: {
                line: 1,
                column: 1586
             },
             end: {
                line: 1,
                column: 1599
             }
          }
       }) : t) + '" name="' + c(typeof (t = null != (t = m(e, "form_name") || (null != n ? m(n, "form_name") : n)) ? t : u) == s ? t.call(i, {
          name: "form_name",
          hash: {},
          data: o,
          loc: {
             start: {
                line: 1,
                column: 1607
             },
             end: {
                line: 1,
                column: 1622
             }
          }
       }) : t) + '"> ' + (null != (r = m(e, "if").call(i, null != n ? m(n, "signup") : n, {
          name: "if",
          hash: {},
          fn: l.program(16, o, 0),
          inverse: l.program(18, o, 0),
          data: o,
          loc: {
             start: {
                line: 1,
                column: 1625
             },
             end: {
                line: 1,
                column: 1691
             }
          }
       })) ? r : "") + ' <input type="hidden" name="current" value="' + c(p(null != (r = null != n ? m(n, "routes") : n) ? m(r, "current_url") : r, n)) + '" /> ' + (null != (r = m(e, "if").call(i, null != n ? m(n, "modules") : n, {
          name: "if",
          hash: {},
          fn: l.program(20, o, 0),
          inverse: l.program(22, o, 0),
          data: o,
          loc: {
             start: {
                line: 1,
                column: 1764
             },
             end: {
                line: 1,
                column: 1940
             }
          }
       })) ? r : "") + " </form> " + (null != (r = m(e, "if").call(i, null != n ? m(n, "login_as_publisher") : n, {
          name: "if",
          hash: {},
          fn: l.program(24, o, 0),
          inverse: l.noop,
          data: o,
          loc: {
             start: {
                line: 1,
                column: 1949
             },
             end: {
                line: 1,
                column: 2177
             }
          }
       })) ? r : "") + " </div> \x3c!-- END .slide-on-social --\x3e " + (null != (r = m(e, "if").call(i, null != n ? m(n, "signup") : n, {
          name: "if",
          hash: {},
          fn: l.program(26, o, 0),
          inverse: l.noop,
          data: o,
          loc: {
             start: {
                line: 1,
                column: 2215
             },
             end: {
                line: 1,
                column: 2851
             }
          }
       })) ? r : "") + " " + (null != (r = m(e, "unless").call(i, null != n ? m(n, "login_as_publisher") : n, {
          name: "unless",
          hash: {},
          fn: l.program(28, o, 0),
          inverse: l.noop,
          data: o,
          loc: {
             start: {
                line: 1,
                column: 2852
             },
             end: {
                line: 1,
                column: 2901
             }
          }
       })) ? r : "") + " \x3c!-- END .login-inner-right --\x3e </div> \x3c!-- END .login-inner --\x3e " + (null != (r = m(e, "if").call(i, null != n ? m(n, "topic") : n, {
          name: "if",
          hash: {},
          fn: l.program(30, o, 0),
          inverse: l.noop,
          data: o,
          loc: {
             start: {
                line: 1,
                column: 2967
             },
             end: {
                line: 1,
                column: 3165
             }
          }
       })) ? r : "") + " </div>\n</li>"
    },
    usePartial: !0,
    useData: !0
 })), Handlebars.registerPartial("login-form", Handlebars.template({
    1: function (l, n, e, a, o) {
       return " has-error "
    },
    compiler: [8, ">= 4.3.0"],
    main: function (l, n, e, a, o) {
       var r, t = null != n ? n : l.nullContext || {},
          i = l.escapeExpression,
          u = l.lambda,
          s = l.lookupProperty || function (l, n) {
             if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
          };
       return '<input name="_token" type="hidden" value="' + i("function" == typeof (r = null != (r = s(e, "token") || (null != n ? s(n, "token") : n)) ? r : l.hooks.helperMissing) ? r.call(t, {
          name: "token",
          hash: {},
          data: o,
          loc: {
             start: {
                line: 1,
                column: 42
             },
             end: {
                line: 1,
                column: 53
             }
          }
       }) : r) + '"> <div class="input-field ' + (null != (r = s(e, "if").call(t, null != (r = null != n ? s(n, "errors") : n) ? s(r, "email") : r, {
          name: "if",
          hash: {},
          fn: l.program(1, o, 0),
          inverse: l.noop,
          data: o,
          loc: {
             start: {
                line: 1,
                column: 80
             },
             end: {
                line: 1,
                column: 119
             }
          }
       })) ? r : "") + '"> <input class="form-control" placeholder="Email" required="" name="email" type="email">\n</div> <div class="input-field ' + (null != (r = s(e, "if").call(t, null != (r = null != n ? s(n, "errors") : n) ? s(r, "password") : r, {
          name: "if",
          hash: {},
          fn: l.program(1, o, 0),
          inverse: l.noop,
          data: o,
          loc: {
             start: {
                line: 2,
                column: 31
             },
             end: {
                line: 2,
                column: 73
             }
          }
       })) ? r : "") + '"> <input class="form-control" placeholder="' + i(u(null != (r = null != n ? s(n, "lang") : n) ? s(r, "password") : r, n)) + '" required="" autocomplete="off" name="password" type="password" value=""> <div class="icon-visible password-toggle"></div>\n</div> <p class="half-width check"> <input id="remember" checked="checked" name="remember" type="checkbox" value="1"> <label for="remember" class="form-checkbox">' + i(u(null != (r = null != n ? s(n, "lang") : n) ? s(r, "remember") : r, n)) + '</label>\n</p> <ul class="half-width"> <li data-name="forgotpassword" data-url="' + i(u(null != (r = null != n ? s(n, "routes") : n) ? s(r, "login_url") : r, n)) + '" class="form-link tab-title"> <a href="' + i(u(null != (r = null != n ? s(n, "routes") : n) ? s(r, "login_url") : r, n)) + '#forgotpassword">' + i(u(null != (r = null != n ? s(n, "lang") : n) ? s(r, "forgot_password") : r, n)) + '</a> </li>\n</ul> <div class="login-form__submit"> <input class="submit-login" type="submit" value="' + i(u(null != (r = null != n ? s(n, "lang") : n) ? s(r, "login") : r, n)) + '">\n</div>'
    },
    useData: !0
 })), Handlebars.registerPartial("login-left", Handlebars.template({
    1: function (l, n, e, a, o) {
       var r, t = null != n ? n : l.nullContext || {},
          i = l.lookupProperty || function (l, n) {
             if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
          };
       return " \x3c!-- If the modal is being called from app.blade --\x3e " + (null != (r = i(e, "if").call(t, null != n ? i(n, "signup") : n, {
          name: "if",
          hash: {},
          fn: l.program(2, o, 0),
          inverse: l.program(4, o, 0),
          data: o,
          loc: {
             start: {
                line: 1,
                column: 93
             },
             end: {
                line: 1,
                column: 301
             }
          }
       })) ? r : "") + " " + (null != (r = i(e, "if").call(t, null != n ? i(n, "topic") : n, {
          name: "if",
          hash: {},
          fn: l.program(9, o, 0),
          inverse: l.noop,
          data: o,
          loc: {
             start: {
                line: 1,
                column: 302
             },
             end: {
                line: 1,
                column: 382
             }
          }
       })) ? r : "") + " "
    },
    2: function (l, n, e, a, o) {
       var r = l.lookupProperty || function (l, n) {
          if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
       };
       return " <h1>" + l.escapeExpression(l.lambda(null != (l = null != n ? r(n, "lang") : n) ? r(l, "join_us") : l, n)) + "</h1> "
    },
    4: function (l, n, e, a, o) {
       var r = l.lookupProperty || function (l, n) {
          if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
       };
       return " " + (null != (e = r(e, "if").call(null != n ? n : l.nullContext || {}, null != n ? r(n, "topic") : n, {
          name: "if",
          hash: {},
          fn: l.program(5, o, 0),
          inverse: l.program(7, o, 0),
          data: o,
          loc: {
             start: {
                line: 1,
                column: 146
             },
             end: {
                line: 1,
                column: 293
             }
          }
       })) ? e : "") + " "
    },
    5: function (l, n, e, a, o) {
       var r = l.lookupProperty || function (l, n) {
          if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
       };
       return ' <span class="login-title">' + l.escapeExpression(l.lambda(null != (l = null != n ? r(n, "lang") : n) ? r(l, "register_to_continue") : l, n)) + "</span> "
    },
    7: function (l, n, e, a, o) {
       var r = l.lookupProperty || function (l, n) {
          if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
       };
       return ' <span class="login-title">' + l.escapeExpression(l.lambda(null != (l = null != n ? r(n, "lang") : n) ? r(l, "join_us") : l, n)) + "</span> "
    },
    9: function (l, n, e, a, o) {
       var r = l.lookupProperty || function (l, n) {
          if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
       };
       return ' <p class="login_info_p first">' + l.escapeExpression(l.lambda(null != (l = null != n ? r(n, "lang") : n) ? r(l, "register_hint") : l, n)) + "</p> "
    },
    11: function (l, n, e, a, o) {
       var r, t = null != n ? n : l.nullContext || {},
          i = l.lookupProperty || function (l, n) {
             if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
          };
       return " \x3c!-- If the modal is being called from app.blade --\x3e " + (null != (r = i(e, "if").call(t, null != n ? i(n, "signup") : n, {
          name: "if",
          hash: {},
          fn: l.program(12, o, 0),
          inverse: l.program(14, o, 0),
          data: o,
          loc: {
             start: {
                line: 1,
                column: 445
             },
             end: {
                line: 1,
                column: 660
             }
          }
       })) ? r : "") + " \x3c!-- If its currently on player page --\x3e " + (null != (r = i(e, "if").call(t, null != n ? i(n, "topic") : n, {
          name: "if",
          hash: {},
          fn: l.program(19, o, 0),
          inverse: l.program(21, o, 0),
          data: o,
          loc: {
             start: {
                line: 1,
                column: 702
             },
             end: {
                line: 1,
                column: 900
             }
          }
       })) ? r : "") + " "
    },
    12: function (l, n, e, a, o) {
       var r = l.lookupProperty || function (l, n) {
          if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
       };
       return " <h1>" + l.escapeExpression(l.lambda(null != (l = null != n ? r(n, "lang") : n) ? r(l, "welcome_back") : l, n)) + "</h1> "
    },
    14: function (l, n, e, a, o) {
       var r = l.lookupProperty || function (l, n) {
          if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
       };
       return " " + (null != (e = r(e, "if").call(null != n ? n : l.nullContext || {}, null != n ? r(n, "topic") : n, {
          name: "if",
          hash: {},
          fn: l.program(15, o, 0),
          inverse: l.program(17, o, 0),
          data: o,
          loc: {
             start: {
                line: 1,
                column: 503
             },
             end: {
                line: 1,
                column: 652
             }
          }
       })) ? e : "") + " "
    },
    15: function (l, n, e, a, o) {
       var r = l.lookupProperty || function (l, n) {
          if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
       };
       return ' <span class="login-title">' + l.escapeExpression(l.lambda(null != (l = null != n ? r(n, "lang") : n) ? r(l, "login_to_continue") : l, n)) + "</span> "
    },
    17: function (l, n, e, a, o) {
       var r = l.lookupProperty || function (l, n) {
          if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
       };
       return ' <span class="login-title">' + l.escapeExpression(l.lambda(null != (l = null != n ? r(n, "lang") : n) ? r(l, "please_login") : l, n)) + "</span> "
    },
    19: function (l, n, e, a, o) {
       var r = l.lookupProperty || function (l, n) {
          if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
       };
       return ' <p class="login_info_p first">' + l.escapeExpression(l.lambda(null != (l = null != n ? r(n, "lang") : n) ? r(l, "login_hint") : l, n)) + "</p> "
    },
    21: function (l, n, e, a, o) {
       var r, t = l.lambda,
          i = l.escapeExpression,
          l = l.lookupProperty || function (l, n) {
             if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
          };
       return ' <p><a title="' + i(t(null != (r = null != n ? l(n, "lang") : n) ? l(r, "checkout_1") : r, n)) + '" href="' + i(t(null != (r = null != n ? l(n, "routes") : n) ? l(r, "courses_url") : r, n)) + '" class="green">' + i(t(null != (r = null != n ? l(n, "lang") : n) ? l(r, "checkout_1") : r, n)) + "</a></p> "
    },
    compiler: [8, ">= 4.3.0"],
    main: function (l, n, e, a, o) {
       var r = l.lookupProperty || function (l, n) {
          if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
       };
       return '<div class="login-left"> ' + (null != (e = r(e, "if").call(null != n ? n : l.nullContext || {}, null != n ? r(n, "signup") : n, {
          name: "if",
          hash: {},
          fn: l.program(1, o, 0),
          inverse: l.program(11, o, 0),
          data: o,
          loc: {
             start: {
                line: 1,
                column: 25
             },
             end: {
                line: 1,
                column: 908
             }
          }
       })) ? e : "") + "\n</div>"
    },
    useData: !0
 })), Handlebars.registerPartial("signup-form", Handlebars.template({
    1: function (l, n, e, a, o) {
       return " has-error "
    },
    3: function (l, n, e, a, o) {
       var r = l.lookupProperty || function (l, n) {
          if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
       };
       return ' <input id="signup_emails" name="signup_emails" type="checkbox"> <label for="signup_emails" class="form-checkbox email-check"> ' + (null != (l = l.lambda(null != (l = null != n ? r(n, "lang") : n) ? r(l, "accept_emails") : l, n)) ? l : "") + " </label> "
    },
    5: function (l, n, e, a, o) {
       return ' <input name="signup_emails" type="hidden" value="1"> '
    },
    compiler: [8, ">= 4.3.0"],
    main: function (l, n, e, a, o) {
       var r, t = null != n ? n : l.nullContext || {},
          i = l.escapeExpression,
          u = l.lambda,
          s = l.lookupProperty || function (l, n) {
             if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
          };
       return '<input name="_token" type="hidden" value="' + i("function" == typeof (r = null != (r = s(e, "token") || (null != n ? s(n, "token") : n)) ? r : l.hooks.helperMissing) ? r.call(t, {
          name: "token",
          hash: {},
          data: o,
          loc: {
             start: {
                line: 1,
                column: 42
             },
             end: {
                line: 1,
                column: 53
             }
          }
       }) : r) + '"> <div class="input-field name name-float first-name"> <input class="form-control ' + (null != (r = s(e, "if").call(t, null != (r = null != n ? s(n, "errors") : n) ? s(r, "firstname") : r, {
          name: "if",
          hash: {},
          fn: l.program(1, o, 0),
          inverse: l.noop,
          data: o,
          loc: {
             start: {
                line: 1,
                column: 136
             },
             end: {
                line: 1,
                column: 179
             }
          }
       })) ? r : "") + '" id="firstName" placeholder="' + i(u(null != (r = null != n ? s(n, "lang") : n) ? s(r, "firstname") : r, n)) + '" autocomplete="off" minlength="2" required="" name="firstname" type="text">\n</div>\n<div class="input-field name-float last-name"> <input class="form-control ' + (null != (r = s(e, "if").call(t, null != (r = null != n ? s(n, "errors") : n) ? s(r, "lastname") : r, {
          name: "if",
          hash: {},
          fn: l.program(1, o, 0),
          inverse: l.noop,
          data: o,
          loc: {
             start: {
                line: 3,
                column: 74
             },
             end: {
                line: 3,
                column: 116
             }
          }
       })) ? r : "") + '" id="lastName" placeholder="' + i(u(null != (r = null != n ? s(n, "lang") : n) ? s(r, "lastname") : r, n)) + '" autocomplete="off" minlength="2" required="" name="lastname" type="text">\n</div> <div class="clearfix"></div>\n<div class="input-field-email "> <input class="form-control" id="emailNew" placeholder="' + i(u(null != (r = null != n ? s(n, "lang") : n) ? s(r, "email") : r, n)) + '" autocomplete="off" required="" name="signup_email" type="email">\n</div> <div class="input-field"> <input class="form-control" id="signup_password" placeholder="' + i(u(null != (r = null != n ? s(n, "lang") : n) ? s(r, "password") : r, n)) + '" autocomplete="off" minlength="6" required="" name="signup_password" type="password" value=""> <div class="icon-visible password-toggle"></div>\n</div> <div class="hide-on-social"> <p class="terms-conditions"> <input id="signup_tc" name="signup_tc" type="checkbox"> <label for="signup_tc" class="form-checkbox tc-check"> ' + (null != (r = u(null != (r = null != n ? s(n, "lang") : n) ? s(r, "accept") : r, n)) ? r : "") + " </label> " + (null != (r = s(e, "if").call(t, null != n ? s(n, "enable_marketing_checkbox") : n, {
          name: "if",
          hash: {},
          fn: l.program(3, o, 0),
          inverse: l.program(5, o, 0),
          data: o,
          loc: {
             start: {
                line: 7,
                column: 205
             },
             end: {
                line: 7,
                column: 470
             }
          }
       })) ? r : "") + ' </p> <div class="login-form__submit"> <input class="submit-login signup-button" type="submit" value="' + i(u(null != (r = null != n ? s(n, "lang") : n) ? s(r, "signup") : r, n)) + '"> </div>\n</div>'
    },
    useData: !0
 })), Handlebars.registerPartial("social-login", Handlebars.template({
    compiler: [8, ">= 4.3.0"],
    main: function (l, n, e, a, o) {
       var r, t = null != n ? n : l.nullContext || {},
          i = l.hooks.helperMissing,
          u = "function",
          s = l.escapeExpression,
          l = l.lookupProperty || function (l, n) {
             if (Object.prototype.hasOwnProperty.call(l, n)) return l[n]
          };
       return '<div class="social-login">\n<div class="social-login__link"> <a href="/auth/facebook?redirect_url=' + s(typeof (r = null != (r = l(e, "current_url") || (null != n ? l(n, "current_url") : n)) ? r : i) == u ? r.call(t, {
          name: "current_url",
          hash: {},
          data: o,
          loc: {
             start: {
                line: 2,
                column: 70
             },
             end: {
                line: 2,
                column: 87
             }
          }
       }) : r) + "&previous_url=" + s(typeof (r = null != (r = l(e, "previous_url") || (null != n ? l(n, "previous_url") : n)) ? r : i) == u ? r.call(t, {
          name: "previous_url",
          hash: {},
          data: o,
          loc: {
             start: {
                line: 2,
                column: 101
             },
             end: {
                line: 2,
                column: 119
             }
          }
       }) : r) + "&route_name=" + s(typeof (r = null != (r = l(e, "route_name") || (null != n ? l(n, "route_name") : n)) ? r : i) == u ? r.call(t, {
          name: "route_name",
          hash: {},
          data: o,
          loc: {
             start: {
                line: 2,
                column: 131
             },
             end: {
                line: 2,
                column: 147
             }
          }
       }) : r) + '" rel="nofollow" title="Register/Log In with Facebook"> <div> <img width="23px" height="23px" alt="Facebook" class="lazyload" data-src="https://cdn01.alison-static.net/public/html/site/img/header/facebook-square.svg" /> </div> Continue with Facebook </a>\n</div>\n<div class="social-login__link"> \x3c!--This is a google custom button which operates separately to the general socialite logins--\x3e <a class="google-login" href="/auth/google?redirect_url=' + s(typeof (r = null != (r = l(e, "current_url") || (null != n ? l(n, "current_url") : n)) ? r : i) == u ? r.call(t, {
          name: "current_url",
          hash: {},
          data: o,
          loc: {
             start: {
                line: 4,
                column: 185
             },
             end: {
                line: 4,
                column: 202
             }
          }
       }) : r) + "&route_name=" + s(typeof (r = null != (r = l(e, "route_name") || (null != n ? l(n, "route_name") : n)) ? r : i) == u ? r.call(t, {
          name: "route_name",
          hash: {},
          data: o,
          loc: {
             start: {
                line: 4,
                column: 214
             },
             end: {
                line: 4,
                column: 230
             }
          }
       }) : r) + '" rel="nofollow" title="Register/Log In with Google"> <div> <img width="23px" height="23px" alt="Google" class="lazyload" data-src="https://cdn01.alison-static.net/public/html/site/img/header/google-square.svg" /> </div> Continue with Google </a> <div id="google-custom" style="display:none;"></div>\n</div>\n<div class="social-login__link"> <a href="/auth/live?redirect_url=' + s(typeof (r = null != (r = l(e, "current_url") || (null != n ? l(n, "current_url") : n)) ? r : i) == u ? r.call(t, {
          name: "current_url",
          hash: {},
          data: o,
          loc: {
             start: {
                line: 6,
                column: 66
             },
             end: {
                line: 6,
                column: 83
             }
          }
       }) : r) + "&previous_url=" + s(typeof (r = null != (r = l(e, "previous_url") || (null != n ? l(n, "previous_url") : n)) ? r : i) == u ? r.call(t, {
          name: "previous_url",
          hash: {},
          data: o,
          loc: {
             start: {
                line: 6,
                column: 97
             },
             end: {
                line: 6,
                column: 115
             }
          }
       }) : r) + "&route_name=" + s(typeof (r = null != (r = l(e, "route_name") || (null != n ? l(n, "route_name") : n)) ? r : i) == u ? r.call(t, {
          name: "route_name",
          hash: {},
          data: o,
          loc: {
             start: {
                line: 6,
                column: 127
             },
             end: {
                line: 6,
                column: 143
             }
          }
       }) : r) + '" rel="nofollow" title="Register/Log In with Microsoft"> <div> <img width="23px" height="23px" alt="Microsoft" class="lazyload" data-src="https://cdn01.alison-static.net/public/html/site/img/header/microsoft-square.svg" /> </div> Continue with Microsoft </a>\n</div>\n<div class="social-login__link"> <a href="/auth/linkedin?redirect_url=' + s(typeof (r = null != (r = l(e, "current_url") || (null != n ? l(n, "current_url") : n)) ? r : i) == u ? r.call(t, {
          name: "current_url",
          hash: {},
          data: o,
          loc: {
             start: {
                line: 8,
                column: 70
             },
             end: {
                line: 8,
                column: 87
             }
          }
       }) : r) + "&previous_url=" + s(typeof (r = null != (r = l(e, "previous_url") || (null != n ? l(n, "previous_url") : n)) ? r : i) == u ? r.call(t, {
          name: "previous_url",
          hash: {},
          data: o,
          loc: {
             start: {
                line: 8,
                column: 101
             },
             end: {
                line: 8,
                column: 119
             }
          }
       }) : r) + "&route_name=" + s(typeof (r = null != (r = l(e, "route_name") || (null != n ? l(n, "route_name") : n)) ? r : i) == u ? r.call(t, {
          name: "route_name",
          hash: {},
          data: o,
          loc: {
             start: {
                line: 8,
                column: 131
             },
             end: {
                line: 8,
                column: 147
             }
          }
       }) : r) + '" rel="nofollow" title="Register/Log In with LinkedIn"> <div> <img alt="LinkedIn" width="23px" height="23px" class="lazyload" data-src="https://cdn01.alison-static.net/public/html/site/img/header/linkedin-square.svg" /> </div> Continue with Linkedin </a>\n</div>\n</div>\n'
    },
    useData: !0
 }));