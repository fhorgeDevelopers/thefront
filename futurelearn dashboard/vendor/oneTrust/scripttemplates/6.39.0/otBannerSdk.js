/** 
 * onetrust-banner-sdk
 * v6.39.0
 * by OneTrust LLC
 * Copyright 2022 
 */
!function() {
    "use strict";
    var o = function(e, t) {
        return (o = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var o in t)
                t.hasOwnProperty(o) && (e[o] = t[o])
        }
        )(e, t)
    };
    var k, e, r = function() {
        return (r = Object.assign || function(e) {
            for (var t, o = 1, n = arguments.length; o < n; o++)
                for (var r in t = arguments[o])
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }
        ).apply(this, arguments)
    };
    function d(i, s, a, l) {
        return new (a = a || Promise)(function(e, t) {
            function o(e) {
                try {
                    r(l.next(e))
                } catch (e) {
                    t(e)
                }
            }
            function n(e) {
                try {
                    r(l.throw(e))
                } catch (e) {
                    t(e)
                }
            }
            function r(t) {
                t.done ? e(t.value) : new a(function(e) {
                    e(t.value)
                }
                ).then(o, n)
            }
            r((l = l.apply(i, s || [])).next())
        }
        )
    }
    function g(o, n) {
        var r, i, s, e, a = {
            label: 0,
            sent: function() {
                if (1 & s[0])
                    throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        };
        return e = {
            next: t(0),
            throw: t(1),
            return: t(2)
        },
        "function" == typeof Symbol && (e[Symbol.iterator] = function() {
            return this
        }
        ),
        e;
        function t(t) {
            return function(e) {
                return function(t) {
                    if (r)
                        throw new TypeError("Generator is already executing.");
                    for (; a; )
                        try {
                            if (r = 1,
                            i && (s = 2 & t[0] ? i.return : t[0] ? i.throw || ((s = i.return) && s.call(i),
                            0) : i.next) && !(s = s.call(i, t[1])).done)
                                return s;
                            switch (i = 0,
                            s && (t = [2 & t[0], s.value]),
                            t[0]) {
                            case 0:
                            case 1:
                                s = t;
                                break;
                            case 4:
                                return a.label++,
                                {
                                    value: t[1],
                                    done: !1
                                };
                            case 5:
                                a.label++,
                                i = t[1],
                                t = [0];
                                continue;
                            case 7:
                                t = a.ops.pop(),
                                a.trys.pop();
                                continue;
                            default:
                                if (!(s = 0 < (s = a.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                                    a.label = t[1];
                                    break
                                }
                                if (6 === t[0] && a.label < s[1]) {
                                    a.label = s[1],
                                    s = t;
                                    break
                                }
                                if (s && a.label < s[2]) {
                                    a.label = s[2],
                                    a.ops.push(t);
                                    break
                                }
                                s[2] && a.ops.pop(),
                                a.trys.pop();
                                continue
                            }
                            t = n.call(o, a)
                        } catch (e) {
                            t = [6, e],
                            i = 0
                        } finally {
                            r = s = 0
                        }
                    if (5 & t[0])
                        throw t[1];
                    return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                    }
                }([t, e])
            }
        }
    }
    function C() {
        for (var e = 0, t = 0, o = arguments.length; t < o; t++)
            e += arguments[t].length;
        var n = Array(e)
          , r = 0;
        for (t = 0; t < o; t++)
            for (var i = arguments[t], s = 0, a = i.length; s < a; s++,
            r++)
                n[r] = i[s];
        return n
    }
    (e = k = k || {})[e.ACTIVE = 0] = "ACTIVE",
    e[e.ALWAYS_ACTIVE = 1] = "ALWAYS_ACTIVE",
    e[e.EXPIRED = 2] = "EXPIRED",
    e[e.NO_CONSENT = 3] = "NO_CONSENT",
    e[e.OPT_OUT = 4] = "OPT_OUT",
    e[e.PENDING = 5] = "PENDING",
    e[e.WITHDRAWN = 6] = "WITHDRAWN";
    var t = setTimeout;
    function l(e) {
        return Boolean(e && void 0 !== e.length)
    }
    function n() {}
    function i(e) {
        if (!(this instanceof i))
            throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e)
            throw new TypeError("not a function");
        this._state = 0,
        this._handled = !1,
        this._value = void 0,
        this._deferreds = [],
        h(e, this)
    }
    function s(o, n) {
        for (; 3 === o._state; )
            o = o._value;
        0 !== o._state ? (o._handled = !0,
        i._immediateFn(function() {
            var e = 1 === o._state ? n.onFulfilled : n.onRejected;
            if (null !== e) {
                var t;
                try {
                    t = e(o._value)
                } catch (e) {
                    return void c(n.promise, e)
                }
                a(n.promise, t)
            } else
                (1 === o._state ? a : c)(n.promise, o._value)
        })) : o._deferreds.push(n)
    }
    function a(t, e) {
        try {
            if (e === t)
                throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var o = e.then;
                if (e instanceof i)
                    return t._state = 3,
                    t._value = e,
                    void u(t);
                if ("function" == typeof o)
                    return void h((n = o,
                    r = e,
                    function() {
                        n.apply(r, arguments)
                    }
                    ), t)
            }
            t._state = 1,
            t._value = e,
            u(t)
        } catch (e) {
            c(t, e)
        }
        var n, r
    }
    function c(e, t) {
        e._state = 2,
        e._value = t,
        u(e)
    }
    function u(e) {
        2 === e._state && 0 === e._deferreds.length && i._immediateFn(function() {
            e._handled || i._unhandledRejectionFn(e._value)
        });
        for (var t = 0, o = e._deferreds.length; t < o; t++)
            s(e, e._deferreds[t]);
        e._deferreds = null
    }
    function p(e, t, o) {
        this.onFulfilled = "function" == typeof e ? e : null,
        this.onRejected = "function" == typeof t ? t : null,
        this.promise = o
    }
    function h(e, t) {
        var o = !1;
        try {
            e(function(e) {
                o || (o = !0,
                a(t, e))
            }, function(e) {
                o || (o = !0,
                c(t, e))
            })
        } catch (e) {
            if (o)
                return;
            o = !0,
            c(t, e)
        }
    }
    function y() {}
    i.prototype.catch = function(e) {
        return this.then(null, e)
    }
    ,
    i.prototype.then = function(e, t) {
        var o = new this.constructor(n);
        return s(this, new p(e,t,o)),
        o
    }
    ,
    i.prototype.finally = function(t) {
        var o = this.constructor;
        return this.then(function(e) {
            return o.resolve(t()).then(function() {
                return e
            })
        }, function(e) {
            return o.resolve(t()).then(function() {
                return o.reject(e)
            })
        })
    }
    ,
    i.all = function(t) {
        return new i(function(n, r) {
            if (!l(t))
                return r(new TypeError("Promise.all accepts an array"));
            var i = Array.prototype.slice.call(t);
            if (0 === i.length)
                return n([]);
            var s = i.length;
            function a(t, e) {
                try {
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var o = e.then;
                        if ("function" == typeof o)
                            return void o.call(e, function(e) {
                                a(t, e)
                            }, r)
                    }
                    i[t] = e,
                    0 == --s && n(i)
                } catch (e) {
                    r(e)
                }
            }
            for (var e = 0; e < i.length; e++)
                a(e, i[e])
        }
        )
    }
    ,
    i.resolve = function(t) {
        return t && "object" == typeof t && t.constructor === i ? t : new i(function(e) {
            e(t)
        }
        )
    }
    ,
    i.reject = function(o) {
        return new i(function(e, t) {
            t(o)
        }
        )
    }
    ,
    i.race = function(r) {
        return new i(function(e, t) {
            if (!l(r))
                return t(new TypeError("Promise.race accepts an array"));
            for (var o = 0, n = r.length; o < n; o++)
                i.resolve(r[o]).then(e, t)
        }
        )
    }
    ,
    i._immediateFn = "function" == typeof setImmediate ? function(e) {
        setImmediate(e)
    }
    : function(e) {
        t(e, 0)
    }
    ,
    i._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
    }
    ;
    var f, v, m, b, P, S, A, T, I, L, w, _, V, B, E, x, G, O, W, N, D, H, F, R, q, M, U, j, z, K, J, Y, X, Q, $, Z, ee, te, oe, ne, re, ie, se, ae, le, ce, de, ue, pe, he, ge, Ce, ye, fe, ve, ke, me, be, Pe, Se, Ae, Te, Ie, Le = new (y.prototype.initPolyfill = function() {
        this.initArrayIncludesPolyfill(),
        this.initObjectAssignPolyfill(),
        this.initArrayFillPolyfill(),
        this.initClosestPolyfill(),
        this.initIncludesPolyfill(),
        this.initEndsWithPoly(),
        this.initCustomEventPolyfill(),
        this.promisesPolyfil()
    }
    ,
    y.prototype.initArrayIncludesPolyfill = function() {
        Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function(e) {
                for (var t = [], o = 1; o < arguments.length; o++)
                    t[o - 1] = arguments[o];
                if (null == this)
                    throw new TypeError("Array.prototype.includes called on null or undefined");
                var n = Object(this)
                  , r = parseInt(n.length, 10) || 0;
                if (0 === r)
                    return !1;
                var i, s, a = t[1] || 0;
                for (0 <= a ? i = a : (i = r + a) < 0 && (i = 0); i < r; ) {
                    if (e === (s = n[i]) || e != e && s != s)
                        return !0;
                    i++
                }
                return !1
            },
            writable: !0,
            configurable: !0
        })
    }
    ,
    y.prototype.initEndsWithPoly = function() {
        String.prototype.endsWith || Object.defineProperty(String.prototype, "endsWith", {
            value: function(e, t) {
                return (void 0 === t || t > this.length) && (t = this.length),
                this.substring(t - e.length, t) === e
            },
            writable: !0,
            configurable: !0
        })
    }
    ,
    y.prototype.initClosestPolyfill = function() {
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
        Element.prototype.closest || Object.defineProperty(Element.prototype, "closest", {
            value: function(e) {
                var t = this;
                do {
                    if (t.matches(e))
                        return t;
                    t = t.parentElement || t.parentNode
                } while (null !== t && 1 === t.nodeType);
                return null
            },
            writable: !0,
            configurable: !0
        })
    }
    ,
    y.prototype.initIncludesPolyfill = function() {
        String.prototype.includes || Object.defineProperty(String.prototype, "includes", {
            value: function(e, t) {
                return "number" != typeof t && (t = 0),
                !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
            },
            writable: !0,
            configurable: !0
        })
    }
    ,
    y.prototype.initObjectAssignPolyfill = function() {
        "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function(e, t) {
                if (null == e)
                    throw new TypeError("Cannot convert undefined or null to object");
                for (var o = Object(e), n = 1; n < arguments.length; n++) {
                    var r = arguments[n];
                    if (null != r)
                        for (var i in r)
                            Object.prototype.hasOwnProperty.call(r, i) && (o[i] = r[i])
                }
                return o
            },
            writable: !0,
            configurable: !0
        })
    }
    ,
    y.prototype.initArrayFillPolyfill = function() {
        Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
            value: function(e) {
                if (null == this)
                    throw new TypeError("this is null or not defined");
                for (var t = Object(this), o = t.length >>> 0, n = arguments[1] >> 0, r = n < 0 ? Math.max(o + n, 0) : Math.min(n, o), i = arguments[2], s = void 0 === i ? o : i >> 0, a = s < 0 ? Math.max(o + s, 0) : Math.min(s, o); r < a; )
                    t[r] = e,
                    r++;
                return t
            }
        })
    }
    ,
    y.prototype.initCustomEventPolyfill = function() {
        if ("function" == typeof window.CustomEvent)
            return !1;
        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var o = document.createEvent("CustomEvent");
            return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
            o
        }
        e.prototype = window.Event.prototype,
        window.CustomEvent = e
    }
    ,
    y.prototype.insertViewPortTag = function() {
        var e = document.querySelector('meta[name="viewport"]')
          , t = document.createElement("meta");
        t.name = "viewport",
        t.content = "width=device-width, initial-scale=1",
        e || document.head.appendChild(t)
    }
    ,
    y.prototype.promisesPolyfil = function() {
        "undefined" == typeof Promise && (window.Promise = i)
    }
    ,
    y);
    (v = f = f || {})[v.Unknown = 0] = "Unknown",
    v[v.BannerCloseButton = 1] = "BannerCloseButton",
    v[v.ConfirmChoiceButton = 2] = "ConfirmChoiceButton",
    v[v.AcceptAll = 3] = "AcceptAll",
    v[v.RejectAll = 4] = "RejectAll",
    v[v.BannerSaveSettings = 5] = "BannerSaveSettings",
    v[v.ContinueWithoutAcceptingButton = 6] = "ContinueWithoutAcceptingButton",
    (b = m = m || {})[b.Banner = 1] = "Banner",
    b[b.PC = 2] = "PC",
    b[b.API = 3] = "API",
    (S = P = P || {}).AcceptAll = "AcceptAll",
    S.RejectAll = "RejectAll",
    S.UpdateConsent = "UpdateConsent",
    (T = A = A || {})[T.Purpose = 1] = "Purpose",
    T[T.SpecialFeature = 2] = "SpecialFeature",
    (L = I = I || {}).Legal = "legal",
    L.UserFriendly = "user_friendly",
    (_ = w = w || {}).Top = "top",
    _.Bottom = "bottom",
    (B = V = V || {})[B.Banner = 0] = "Banner",
    B[B.PrefCenterHome = 1] = "PrefCenterHome",
    B[B.VendorList = 2] = "VendorList",
    B[B.CookieList = 3] = "CookieList",
    (x = E = E || {})[x.RightArrow = 39] = "RightArrow",
    x[x.LeftArrow = 37] = "LeftArrow",
    (O = G = G || {}).AfterTitle = "AfterTitle",
    O.AfterDescription = "AfterDescription",
    O.AfterDPD = "AfterDPD",
    (N = W = W || {}).PlusMinus = "Plusminus",
    N.Caret = "Caret",
    N.NoAccordion = "NoAccordion",
    (H = D = D || {}).Consent = "Consent",
    H.LI = "LI",
    H.AddtlConsent = "AddtlConsent",
    (R = F = F || {}).Iab1Pub = "eupubconsent",
    R.Iab2Pub = "eupubconsent-v2",
    R.Iab1Eu = "euconsent",
    R.Iab2Eu = "euconsent-v2",
    (M = q = q || {})[M.Disabled = 0] = "Disabled",
    M[M.Consent = 1] = "Consent",
    M[M.LegInt = 2] = "LegInt",
    (j = U = U || {})[j["Banner - Allow All"] = 1] = "Banner - Allow All",
    j[j["Banner - Reject All"] = 2] = "Banner - Reject All",
    j[j["Banner - Close"] = 3] = "Banner - Close",
    j[j["Preference Center - Allow All"] = 4] = "Preference Center - Allow All",
    j[j["Preference Center - Reject All"] = 5] = "Preference Center - Reject All",
    j[j["Preference Center - Confirm"] = 6] = "Preference Center - Confirm",
    (K = z = z || {}).Active = "1",
    K.InActive = "0",
    (Y = J = J || {}).Host = "Host",
    Y.GenVendor = "GenVen",
    (Q = X = X || {})[Q.Host = 1] = "Host",
    Q[Q.GenVen = 2] = "GenVen",
    Q[Q.HostAndGenVen = 3] = "HostAndGenVen",
    (Z = $ = $ || {})[Z.minDays = 1] = "minDays",
    Z[Z.maxDays = 30] = "maxDays",
    Z[Z.maxYear = 31536e3] = "maxYear",
    Z[Z.maxSecToDays = 86400] = "maxSecToDays",
    (te = ee = ee || {})[te.RTL = 0] = "RTL",
    te[te.LTR = 1] = "LTR",
    (ne = oe = oe || {})[ne.GoogleVendor = 1] = "GoogleVendor",
    ne[ne.GeneralVendor = 2] = "GeneralVendor",
    (ie = re = re || {})[ie.Days = 1] = "Days",
    ie[ie.Weeks = 7] = "Weeks",
    ie[ie.Months = 30] = "Months",
    ie[ie.Years = 365] = "Years",
    (ae = se = se || {}).Checkbox = "Checkbox",
    ae.Toggle = "Toggle",
    (ce = le = le || {}).SlideIn = "Slide_In",
    ce.FadeIn = "Fade_In",
    ce.RemoveAnimation = "Remove_Animation",
    (ue = de = de || {}).Link = "Link",
    ue.Icon = "Icon",
    (he = pe = pe || {}).consent = "consent",
    he.set = "set",
    (Ce = ge = ge || {}).update = "update",
    Ce.default = "default",
    Ce.ads_data_redaction = "ads_data_redaction",
    (fe = ye = ye || {}).analytics_storage = "analytics_storage",
    fe.ad_storage = "ad_storage",
    fe.functionality_storage = "functionality_storage",
    fe.personalization_storage = "personalization_storage",
    fe.security_storage = "security_storage",
    fe.region = "region",
    fe.wait_for_update = "wait_for_update",
    (ke = ve = ve || {}).granted = "granted",
    ke.denied = "denied",
    (be = me = me || {})[be.HostList = 0] = "HostList",
    be[be.IabVendors = 1] = "IabVendors",
    be[be.VendorServices = 2] = "VendorServices",
    (Se = Pe = Pe || {}).OBJECT_TO_LI = "ObjectToLI",
    Se.LI_ACTIVE_IF_LEGAL_BASIS = "LIActiveIfLegalBasis",
    (Te = Ae = Ae || {}).cookies = "cookies",
    Te.vendors = "vendors";
    var _e = "AwaitingReconsent"
      , Ve = "consentId"
      , Be = "geolocation"
      , we = "interactionCount"
      , Ee = "isIABGlobal"
      , xe = "NotLandingPage"
      , Ge = "isGpcEnabled"
      , Oe = {
        ADDITIONAL_CONSENT_STRING: "OTAdditionalConsentString",
        ALERT_BOX_CLOSED: "OptanonAlertBoxClosed",
        OPTANON_CONSENT: "OptanonConsent",
        EU_PUB_CONSENT: "eupubconsent-v2",
        EU_CONSENT: "euconsent-v2",
        SELECTED_VARIANT: "OTVariant",
        OT_PREVIEW: "otpreview"
    }
      , Ne = "CONFIRMED"
      , De = "OPT_OUT"
      , He = "NO_CHOICE"
      , Fe = "NOTGIVEN"
      , Re = "NO_OPT_OUT"
      , qe = "always active"
      , Me = "active"
      , Ue = "inactive landingpage"
      , je = "inactive"
      , ze = "dnt"
      , Ke = "LOCAL"
      , We = "TEST"
      , Je = "LOCAL_TEST"
      , Ye = "data-language"
      , Xe = "otCookieSettingsButton.json"
      , Qe = "otCookieSettingsButtonRtl.json"
      , $e = "otCenterRounded"
      , Ze = "otFlat"
      , et = "otFloatingRoundedCorner"
      , tt = "otFloatingFlat"
      , ot = "otFloatingRoundedIcon"
      , nt = "otFloatingRounded"
      , rt = "otChoicesBanner"
      , it = "otNoBanner"
      , st = "otPcCenter"
      , at = "otPcList"
      , lt = "otPcPanel"
      , ct = "otPcPopup"
      , dt = "otPcTab"
      , ut = "hidebanner"
      , pt = ((Ie = {})[re.Days] = "PCenterVendorListLifespanDay",
    Ie[re.Weeks] = "LfSpnWk",
    Ie[re.Months] = "PCenterVendorListLifespanMonth",
    Ie[re.Years] = "LfSpnYr",
    Ie)
      , ht = "DNAC"
      , gt = "Category"
      , Ct = "Host"
      , yt = "General Vendor"
      , ft = "VendorService"
      , vt = "BRANCH"
      , kt = "COOKIE"
      , mt = "IAB2_FEATURE"
      , bt = "IAB2_PURPOSE"
      , Pt = "IAB2_SPL_FEATURE"
      , St = "IAB2_SPL_PURPOSE"
      , At = "IAB2_STACK"
      , Tt = ["IAB2_PURPOSE", "IAB2_STACK", "IAB2_FEATURE", "IAB2_SPL_PURPOSE", "IAB2_SPL_FEATURE"]
      , It = ["COOKIE", "BRANCH", "IAB2_STACK"]
      , Lt = ["IAB2_PURPOSE", "IAB2_SPL_FEATURE"]
      , _t = ["IAB2_FEATURE", "IAB2_SPL_PURPOSE"]
      , Vt = ["IAB2_PURPOSE", "IAB2_SPL_PURPOSE", "IAB2_FEATURE", "IAB2_SPL_FEATURE"]
      , Bt = new function() {}
    ;
    function wt(e, t, o) {
        void 0 === o && (o = !1);
        function n(e) {
            if (!e)
                return null;
            var t = e.trim();
            return ";" !== t.charAt(t.length - 1) && (t += ";"),
            t.trim()
        }
        var i = n(e.getAttribute("style"))
          , s = n(t)
          , r = "";
        r = o && i ? function() {
            for (var e = i.split(";").concat(s.split(";")).filter(function(e) {
                return 0 !== e.length
            }), t = "", o = "", n = e.length - 1; 0 <= n; n--) {
                var r = e[n].substring(0, e[n].indexOf(":")).trim();
                t.indexOf(r) < 0 && (t += r,
                o += e[n] + ";")
            }
            return o
        }() : s,
        e.setAttribute("style", r)
    }
    function Et() {}
    var xt, Gt = new (Et.prototype.convertKeyValueLowerCase = function(e) {
        for (var t in e)
            e[t.toLowerCase()] ? e[t.toLowerCase()] = e[t].toLowerCase() : (e[t] && (e[t.toLowerCase()] = e[t].toLowerCase()),
            delete e[t]);
        return e
    }
    ,
    Et.prototype.arrToStr = function(e) {
        return e.toString()
    }
    ,
    Et.prototype.strToArr = function(e) {
        return e ? e.split(",") : []
    }
    ,
    Et.prototype.strToMap = function(e) {
        if (!e)
            return new Map;
        for (var t = new Map, o = 0, n = this.strToArr(e); o < n.length; o++) {
            var r = n[o].split(":");
            t.set(r[0], "1" === r[1])
        }
        return t
    }
    ,
    Et.prototype.empty = function(e) {
        var t = document.getElementById(e);
        if (t)
            for (; t.hasChildNodes(); )
                t.removeChild(t.lastChild)
    }
    ,
    Et.prototype.show = function(e) {
        var t = document.getElementById(e);
        t && wt(t, "display: block;", !0)
    }
    ,
    Et.prototype.remove = function(e) {
        var t = document.getElementById(e);
        t && t.parentNode && t.parentNode.removeChild(t)
    }
    ,
    Et.prototype.appendTo = function(e, t) {
        var o, n = document.getElementById(e);
        n && ((o = document.createElement("div")).innerHTML = t,
        n.appendChild(o))
    }
    ,
    Et.prototype.contains = function(e, t) {
        var o;
        for (o = 0; o < e.length; o += 1)
            if (e[o].toString().toLowerCase() === t.toString().toLowerCase())
                return !0;
        return !1
    }
    ,
    Et.prototype.indexOf = function(e, t) {
        var o;
        for (o = 0; o < e.length; o += 1)
            if (e[o] === t)
                return o;
        return -1
    }
    ,
    Et.prototype.endsWith = function(e, t) {
        return -1 !== e.indexOf(t, e.length - t.length)
    }
    ,
    Et.prototype.generateUUID = function() {
        var o = (new Date).getTime();
        return "undefined" != typeof performance && "function" == typeof performance.now && (o += performance.now()),
        "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
            var t = (o + 16 * Math.random()) % 16 | 0;
            return o = Math.floor(o / 16),
            ("x" === e ? t : 3 & t | 8).toString(16)
        })
    }
    ,
    Et.prototype.getActiveIdArray = function(e) {
        return e.filter(function(e) {
            return "true" === e.split(":")[1]
        }).map(function(e) {
            return parseInt(e.split(":")[0])
        })
    }
    ,
    Et.prototype.distinctArray = function(e) {
        var t = new Array;
        return e.forEach(function(e) {
            t.indexOf(e) < 0 && t.push(e)
        }),
        t
    }
    ,
    Et.prototype.findIndex = function(e, t) {
        for (var o = -1, n = 0; n < e.length; n++)
            if (void 0 !== e[n] && t(e[n], n)) {
                o = n;
                break
            }
        return o
    }
    ,
    Et.prototype.getURL = function(e) {
        var t = document.createElement("a");
        return t.href = e,
        t
    }
    ,
    Et.prototype.removeURLPrefixes = function(e) {
        return e.toLowerCase().replace(/(^\w+:|^)\/\//, "").replace("www.", "")
    }
    ,
    Et.prototype.removeChild = function(e) {
        if (e)
            if (e instanceof NodeList || e instanceof Array)
                for (var t = 0; t < e.length; t++)
                    e[t].parentElement.removeChild(e[t]);
            else
                e.parentElement.removeChild(e)
    }
    ,
    Et.prototype.getRelativeURL = function(e, t, o) {
        if (void 0 === o && (o = !1),
        t) {
            var n = "./" + e.replace(/^(http|https):\/\//, "").split("/").slice(1).join("/").replace(".json", "");
            return o ? n : n + ".js"
        }
        return e
    }
    ,
    Et.prototype.setCheckedAttribute = function(e, t, o) {
        e && (t = document.querySelector(e)),
        t && (t.setAttribute("aria-checked", o.toString()),
        o ? t.setAttribute("checked", "") : t.removeAttribute("checked"),
        t.checked = o)
    }
    ,
    Et.prototype.setDisabledAttribute = function(e, t, o) {
        e && (t = document.querySelector(e)),
        t && (o ? t.setAttribute("disabled", o.toString()) : t.removeAttribute("disabled"))
    }
    ,
    Et.prototype.setHtmlAttributes = function(e, t) {
        for (var o in t)
            e.setAttribute(o, t[o]),
            e[o] = t[o]
    }
    ,
    Et.prototype.calculateCookieLifespan = function(e) {
        if (e < 0)
            return Rt.LifespanTypeText;
        var t = Math.floor(e / $.maxSecToDays);
        if (t < $.minDays)
            return "< 1 " + Rt.PCenterVendorListLifespanDay;
        if (t < $.maxDays)
            return t + " " + Rt.PCenterVendorListLifespanDays;
        var o = Math.floor(t / $.maxDays);
        return 1 === o ? o + " " + Rt.PCenterVendorListLifespanMonth : o + " " + Rt.PCenterVendorListLifespanMonths
    }
    ,
    Et.prototype.insertElement = function(e, t, o) {
        e && t && e.insertAdjacentElement(o, t)
    }
    ,
    Et.prototype.customQuerySelector = function(t) {
        return function(e) {
            return t.querySelector(e)
        }
    }
    ,
    Et.prototype.customQuerySelectorAll = function(t) {
        return function(e) {
            return t.querySelectorAll(e)
        }
    }
    ,
    Et), Ot = (Nt.prototype.removeAlertBox = function() {
        null !== this.getCookie(Oe.ALERT_BOX_CLOSED) && this.setCookie(Oe.ALERT_BOX_CLOSED, "", 0, !0)
    }
    ,
    Nt.prototype.removeIab1 = function() {
        null !== this.getCookie(F.Iab1Pub) && this.setCookie(F.Iab1Pub, "", 0, !0)
    }
    ,
    Nt.prototype.removeIab2 = function() {
        null !== this.getCookie(F.Iab2Pub) && this.setCookie(F.Iab2Pub, "", 0, !0)
    }
    ,
    Nt.prototype.removeAddtlStr = function() {
        null !== this.getCookie(Oe.ADDITIONAL_CONSENT_STRING) && this.setCookie(Oe.ADDITIONAL_CONSENT_STRING, "", 0, !0)
    }
    ,
    Nt.prototype.removeVariant = function() {
        null !== this.getCookie(Oe.SELECTED_VARIANT) && this.setCookie(Oe.SELECTED_VARIANT, "", 0, !0)
    }
    ,
    Nt.prototype.removeOptanon = function() {
        null !== this.getCookie(Oe.OPTANON_CONSENT) && this.setCookie(Oe.OPTANON_CONSENT, "", 0, !0)
    }
    ,
    Nt.prototype.removePreview = function() {
        null !== this.getCookie(Oe.OT_PREVIEW) && this.setCookie(Oe.OT_PREVIEW, "", 0, !0)
    }
    ,
    Nt.prototype.writeCookieParam = function(e, t, o, n) {
        var r, i, s, a, l = {}, c = this.getCookie(e);
        if (c)
            for (i = c.split("&"),
            r = 0; r < i.length; r += 1)
                s = i[r].split("="),
                l[decodeURIComponent(s[0])] = s[0] === t && n ? decodeURIComponent(s[1]) : decodeURIComponent(s[1]).replace(/\+/g, " ");
        l[t] = o;
        var d = Bt.moduleInitializer.TenantFeatures;
        d && d.CookieV2CookieDateTimeInISO ? l.datestamp = (new Date).toISOString() : l.datestamp = (new Date).toString(),
        l.version = Mt.otSDKVersion,
        a = this.param(l),
        this.setCookie(e, a, Rt.ReconsentFrequencyDays)
    }
    ,
    Nt.prototype.readCookieParam = function(e, t, o) {
        var n, r, i, s, a = this.getCookie(e);
        if (a) {
            for (r = {},
            i = a.split("&"),
            n = 0; n < i.length; n += 1)
                s = i[n].split("="),
                r[decodeURIComponent(s[0])] = o ? decodeURIComponent(s[1]) : decodeURIComponent(s[1]).replace(/\+/g, " ");
            return t && r[t] ? r[t] : t && !r[t] ? "" : r
        }
        return ""
    }
    ,
    Nt.prototype.getCookie = function(e) {
        if (Bt && Bt.moduleInitializer && Bt.moduleInitializer.MobileSDK) {
            var t = this.getCookieDataObj(e);
            if (t)
                return t.value
        }
        if (Mt.isAMP && (Mt.ampData = JSON.parse(localStorage.getItem(Mt.dataDomainId)) || {},
        Mt.ampData))
            return Mt.ampData[e] || null;
        var o, n, r = e + "=", i = document.cookie.split(";");
        for (o = 0; o < i.length; o += 1) {
            for (n = i[o]; " " === n.charAt(0); )
                n = n.substring(1, n.length);
            if (0 === n.indexOf(r))
                return n.substring(r.length, n.length)
        }
        return null
    }
    ,
    Nt.prototype.setAmpStorage = function() {
        window.localStorage.setItem(Mt.dataDomainId, JSON.stringify(Mt.ampData))
    }
    ,
    Nt.prototype.removeAmpStorage = function() {
        window.localStorage.removeItem(Mt.dataDomainId)
    }
    ,
    Nt.prototype.handleAmp = function(e, t) {
        "" !== t ? Mt.ampData[e] = t : delete Mt.ampData[e],
        0 === Object.keys(Mt.ampData).length ? this.removeAmpStorage() : this.setAmpStorage()
    }
    ,
    Nt.prototype.setCookie = function(e, t, o, n, r) {
        if (void 0 === n && (n = !1),
        void 0 === r && (r = new Date),
        Mt.isAMP)
            this.handleAmp(e, t);
        else {
            var i = void 0;
            i = o ? (r.setTime(r.getTime() + 24 * o * 60 * 60 * 1e3),
            "; expires=" + r.toUTCString()) : n ? "; expires=" + new Date(0).toUTCString() : "";
            var s = Bt.moduleInitializer
              , a = s && s.Domain ? s.Domain.split("/") : []
              , l = "";
            a.length <= 1 ? a[1] = "" : l = a.slice(1).join("/");
            var c = "Samesite=Lax";
            s.CookieSameSiteNoneEnabled && (c = "Samesite=None; Secure");
            var d = s.ScriptType === We || s.ScriptType === Je;
            if (Mt.isPreview || !d && !s.MobileSDK)
                u = t + i + "; path=/" + l + "; domain=." + a[0] + "; " + c,
                document.cookie = e + "=" + u;
            else {
                var u = t + i + "; path=/; " + c;
                s.MobileSDK ? this.setCookieDataObj({
                    name: e,
                    value: t,
                    expires: i,
                    date: r,
                    domainAndPath: a
                }) : document.cookie = e + "=" + u
            }
        }
    }
    ,
    Nt.prototype.setCookieDataObj = function(t) {
        if (t) {
            Mt.otCookieData || (window.OneTrust && window.OneTrust.otCookieData ? Mt.otCookieData = window.OneTrust.otCookieData : Mt.otCookieData = []);
            var e = Gt.findIndex(Mt.otCookieData, function(e) {
                return e.name === t.name
            });
            -1 < e ? Mt.otCookieData[e] = t : Mt.otCookieData.push(t)
        }
    }
    ,
    Nt.prototype.getCookieDataObj = function(t) {
        Mt.otCookieData && 0 !== Mt.otCookieData.length || (window.OneTrust && window.OneTrust.otCookieData ? Mt.otCookieData = window.OneTrust.otCookieData : Mt.otCookieData = []);
        var e = Gt.findIndex(Mt.otCookieData, function(e) {
            return e.name === t
        });
        if (0 <= e) {
            var o = Mt.otCookieData[e];
            if (o.date)
                return new Date(o.date) < new Date ? (Mt.otCookieData.splice(e, 1),
                null) : o
        }
        return null
    }
    ,
    Nt.prototype.param = function(e) {
        var t, o = "";
        for (t in e)
            e.hasOwnProperty(t) && ("" !== o && (o += "&"),
            o += t + "=" + encodeURIComponent(e[t]).replace(/%20/g, "+"));
        return o
    }
    ,
    Nt);
    function Nt() {}
    var Dt = (Ht.prototype.setRegionRule = function(e) {
        this.rule = e
    }
    ,
    Ht.prototype.getRegionRule = function() {
        return this.rule
    }
    ,
    Ht.prototype.getRegionRuleType = function() {
        return this.multiVariantTestingEnabled && this.selectedVariant ? this.selectedVariant.TemplateType : this.conditionalLogicEnabled && !this.allConditionsFailed ? this.Condition.TemplateType : this.rule.Type
    }
    ,
    Ht.prototype.canUseGoogleVendors = function(e) {
        return !!e && (this.conditionalLogicEnabled && !this.allConditionsFailed ? this.Condition.UseGoogleVendors : this.rule.UseGoogleVendors)
    }
    ,
    Ht.prototype.initVariables = function() {
        this.consentableGrps = [],
        this.consentableIabGrps = [],
        this.iabGrps = [],
        this.iabGrpIdMap = {},
        this.domainGrps = {},
        this.iabGroups = {
            purposes: {},
            legIntPurposes: {},
            specialPurposes: {},
            features: {},
            specialFeatures: {}
        }
    }
    ,
    Ht.prototype.init = function(e) {
        this.getGPCSignal(),
        this.initVariables();
        var t = e.DomainData;
        this.setPublicDomainData(JSON.parse(JSON.stringify(t))),
        this.domainDataMapper(t),
        this.commonDataMapper(e.CommonData),
        Rt.NtfyConfig = e.NtfyConfig || {},
        this.setBannerName(),
        this.setPcName(),
        this.populateGPCSignal(),
        Rt.GoogleConsent.GCEnable && this.initGCM()
    }
    ,
    Ht.prototype.getGPCSignal = function() {
        this.gpcEnabled = !0 === navigator.globalPrivacyControl
    }
    ,
    Ht.prototype.isValidConsentNoticeGroup = function(e, t) {
        if (!e.ShowInPopup)
            return !1;
        var o = e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length || e.VendorServices && e.VendorServices.length
          , n = !1
          , r = !1
          , i = !1;
        if (e && !e.Parent) {
            e.SubGroups.length && (n = e.SubGroups.some(function(e) {
                return e.GroupName && e.ShowInPopup && e.FirstPartyCookies.length
            }),
            r = e.SubGroups.some(function(e) {
                return e.GroupName && e.ShowInPopup && (e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length)
            }),
            !t || e.FirstPartyCookies.length && e.Hosts.length || (i = !e.SubGroups.some(function(e) {
                return -1 === Tt.indexOf(e.Type)
            })));
            var s = e.SubGroups.some(function(e) {
                return -1 < Tt.indexOf(e.Type)
            });
            (-1 < Tt.indexOf(e.Type) || s) && (e.ShowVendorList = !0),
            (e.Hosts.length || r || n) && (e.ShowHostList = !0)
        }
        return o || -1 < Tt.indexOf(e.Type) || n || r || i
    }
    ,
    Ht.prototype.extractGroupIdForIabGroup = function(e) {
        return -1 < e.indexOf("ISPV2_") ? e = e.replace("ISPV2_", "") : -1 < e.indexOf("IABV2_") ? e = e.replace("IABV2_", "") : -1 < e.indexOf("IFEV2_") ? e = e.replace("IFEV2_", "") : -1 < e.indexOf("ISFV2_") && (e = e.replace("ISFV2_", "")),
        e
    }
    ,
    Ht.prototype.populateGroups = function(e, r) {
        var i = this
          , s = {}
          , a = [];
        e.forEach(function(e) {
            var t = e.CustomGroupId;
            if (void 0 !== e.HasConsentOptOut && e.IsIabPurpose || (e.HasConsentOptOut = !0),
            !(!r.IsIabEnabled && -1 < Tt.indexOf(e.Type) || "IAB2" === i.iabType && (e.Type === bt || e.Type === At) && !e.HasConsentOptOut && !e.HasLegIntOptOut || e.Type === Pt && !e.HasConsentOptOut) && (t !== Ft.purposeOneGrpId || e.ShowInPopup || (i.purposeOneTreatment = !0),
            i.grpContainLegalOptOut = e.HasLegIntOptOut || i.grpContainLegalOptOut,
            e.SubGroups = [],
            e.Parent ? a.push(e) : s[t] = e,
            "IAB2" === i.iabType && -1 < Tt.indexOf(e.Type))) {
                var o = i.extractGroupIdForIabGroup(t);
                i.iabGrpIdMap[t] = o,
                e.IabGrpId = o;
                var n = {
                    description: e.GroupDescription,
                    descriptionLegal: e.DescriptionLegal,
                    id: Number(o),
                    name: e.GroupName
                };
                switch (e.Type) {
                case bt:
                    i.iabGroups.purposes[o] = n;
                    break;
                case St:
                    i.iabGroups.specialPurposes[o] = n;
                    break;
                case mt:
                    i.iabGroups.features[o] = n;
                    break;
                case Pt:
                    i.iabGroups.specialFeatures[o] = n
                }
            }
        }),
        a.forEach(function(e) {
            s[e.Parent] && e.ShowInPopup && (e.FirstPartyCookies.length || e.Hosts.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length || -1 < Tt.indexOf(e.Type)) && s[e.Parent].SubGroups.push(e)
        });
        var t = [];
        return Object.keys(s).forEach(function(e) {
            i.isValidConsentNoticeGroup(s[e], r.IsIabEnabled) && (s[e].SubGroups.sort(function(e, t) {
                return e.Order - t.Order
            }),
            t.push(s[e]))
        }),
        this.initGrpVar(t),
        t.sort(function(e, t) {
            return e.Order - t.Order
        })
    }
    ,
    Ht.prototype.initGrpVar = function(e) {
        var o = this
          , n = !0
          , r = !0;
        e.forEach(function(e) {
            C([e], e.SubGroups).forEach(function(e) {
                var t;
                e.Type !== kt && e.Type !== bt && e.Type !== Pt || (o.domainGrps[e.PurposeId.toLowerCase()] = e.CustomGroupId),
                -1 < It.indexOf(e.Type) && o.consentableGrps.push(e),
                -1 < Lt.indexOf(e.Type) && o.consentableIabGrps.push(e),
                -1 === It.indexOf(e.Type) && o.iabGrps.push(e),
                o.gpcEnabled && e.IsGpcEnabled && (e.Status = je),
                (t = o.DNTEnabled && e.IsDntEnabled ? ze : e.Status.toLowerCase()) !== Me && t !== Ue && t !== ze || (n = !1),
                t !== Ue && t !== qe && (r = !1),
                o.gpcForAGrpEnabled || (o.gpcForAGrpEnabled = e.IsGpcEnabled)
            })
        }),
        this.isOptInMode = n,
        this.isSoftOptInMode = r
    }
    ,
    Ht.prototype.domainDataMapper = function(e) {
        var t = {
            AriaClosePreferences: e.AriaClosePreferences,
            AriaOpenPreferences: e.AriaOpenPreferences,
            AriaPrivacy: e.AriaPrivacy,
            CenterRounded: e.CenterRounded,
            Flat: e.Flat,
            FloatingFlat: e.FloatingFlat,
            FloatingRounded: e.FloatingRounded,
            FloatingRoundedCorner: e.FloatingRoundedCorner,
            FloatingRoundedIcon: e.FloatingRoundedIcon,
            VendorLevelOptOut: e.IsIabEnabled,
            AboutCookiesText: e.AboutCookiesText,
            AboutLink: e.AboutLink,
            AboutText: e.AboutText,
            ActiveText: e.ActiveText,
            AddLinksToCookiepedia: e.AddLinksToCookiepedia,
            AdvancedAnalyticsCategory: e.AdvancedAnalyticsCategory || "",
            AlertAllowCookiesText: e.AlertAllowCookiesText,
            AlertCloseText: e.AlertCloseText,
            AlertLayout: e.AlertLayout,
            AlertMoreInfoText: e.AlertMoreInfoText,
            AlertNoticeText: e.AlertNoticeText,
            AllowAllText: e.PreferenceCenterConfirmText,
            AlwaysActiveText: e.AlwaysActiveText,
            BannerAdditionalDescPlacement: e.BannerAdditionalDescPlacement,
            BannerAdditionalDescription: e.BannerAdditionalDescription,
            BannerCloseButtonText: e.BannerCloseButtonText,
            BannerDPDDescription: e.BannerDPDDescription || [],
            BannerDPDDescriptionFormat: e.BannerDPDDescriptionFormat || "",
            BannerDPDTitle: e.BannerDPDTitle || "",
            BannerFeatureDescription: e.BannerFeatureDescription,
            BannerFeatureTitle: e.BannerFeatureTitle,
            BannerIABPartnersLink: e.BannerIABPartnersLink,
            BannerInformationDescription: e.BannerInformationDescription,
            BannerInformationTitle: e.BannerInformationTitle,
            BannerNonIABVendorListText: e.BannerNonIABVendorListText,
            BannerPosition: e.BannerPosition,
            BannerPurposeDescription: e.BannerPurposeDescription,
            BannerPurposeTitle: e.BannerPurposeTitle,
            BannerRejectAllButtonText: e.BannerRejectAllButtonText,
            BannerRelativeFontSizesToggle: e.BannerRelativeFontSizesToggle,
            BannerSettingsButtonDisplayLink: e.BannerSettingsButtonDisplayLink,
            BannerShowRejectAllButton: e.BannerShowRejectAllButton,
            BannerTitle: e.BannerTitle,
            BCloseButtonType: e.BCloseButtonType,
            BContinueText: e.BContinueText,
            BCookiePolicyLinkScreenReader: e.BCookiePolicyLinkScreenReader,
            BnrLogoAria: e.BnrLogoAria,
            BImprintLinkScreenReader: e.BImprintLinkScreenReader,
            BInitialFocus: e.BInitialFocus,
            BInitialFocusLinkAndButton: e.BInitialFocusLinkAndButton,
            BRejectConsentType: e.BRejectConsentType,
            BSaveBtnTxt: e.BSaveBtnText,
            BShowImprintLink: e.BShowImprintLink,
            BShowPolicyLink: e.BShowPolicyLink,
            BShowSaveBtn: e.BShowSaveBtn,
            CategoriesText: e.CategoriesText || "Categories",
            cctId: e.cctId,
            ChoicesBanner: e.ChoicesBanner,
            CloseShouldAcceptAllCookies: e.CloseShouldAcceptAllCookies,
            CloseText: e.CloseText,
            ConfirmText: e.ConfirmText,
            ConsentModel: {
                Name: e.ConsentModel
            },
            CookieListDescription: e.CookieListDescription,
            CookieListTitle: e.CookieListTitle,
            CookieSettingButtonText: e.CookieSettingButtonText,
            CookiesText: e.CookiesText || "Cookies",
            CookiesUsedText: e.CookiesUsedText,
            CustomJs: e.CustomJs,
            firstPartyTxt: e.CookieFirstPartyText,
            FooterDescriptionText: e.FooterDescriptionText,
            ForceConsent: e.ForceConsent,
            GeneralVendors: e.GeneralVendors,
            GeneralVendorsEnabled: e.PCenterUseGeneralVendorsToggle,
            GenVenOptOut: e.PCenterAllowVendorOptout,
            GlobalRestrictionEnabled: e.GlobalRestrictionEnabled,
            GlobalRestrictions: e.GlobalRestrictions,
            GoogleConsent: {
                GCAdStorage: e.GCAdStorage,
                GCAnalyticsStorage: e.GCAnalyticsStorage,
                GCEnable: e.GCEnable,
                GCFunctionalityStorage: e.GCFunctionalityStorage,
                GCPersonalizationStorage: e.GCPersonalizationStorage,
                GCRedactEnable: e.GCRedactEnable,
                GCSecurityStorage: e.GCSecurityStorage,
                GCWaitTime: e.GCWaitTime
            },
            GroupGenVenListLabel: e.PCenterGeneralVendorThirdPartyCookiesText,
            Groups: this.populateGroups(e.Groups, e),
            HideToolbarCookieList: e.HideToolbarCookieList,
            IabType: e.IabType,
            InactiveText: e.InactiveText,
            IsConsentLoggingEnabled: e.IsConsentLoggingEnabled,
            IsIabEnabled: e.IsIabEnabled,
            IsIabThirdPartyCookieEnabled: e.IsIabThirdPartyCookieEnabled,
            IsLifespanEnabled: e.IsLifespanEnabled,
            Language: e.Language,
            LastReconsentDate: e.LastReconsentDate,
            LfSpanSecs: e.PCLifeSpanSecs,
            LfSpnWk: e.PCLifeSpanWk,
            LfSpnWks: e.PCLifeSpanWks,
            LfSpnYr: e.PCLifeSpanYr,
            LfSpnYrs: e.PCLifeSpanYrs,
            LifespanDurationText: e.LifespanDurationText,
            LifespanText: e.LifespanText || "Lifespan",
            LifespanTypeText: e.LifespanTypeText || "Session",
            MainInfoText: e.MainInfoText,
            MainText: e.MainText,
            ManagePreferenceText: e.PreferenceCenterManagePreferencesText,
            NewVendorsInactiveEnabled: e.NewVendorsInactiveEnabled,
            NewWinTxt: e.PreferenceCenterMoreInfoScreenReader,
            NextPageAcceptAllCookies: e.NextPageAcceptAllCookies,
            NextPageCloseBanner: e.NextPageCloseBanner,
            NoBanner: e.NoBanner,
            OnClickAcceptAllCookies: e.OnClickAcceptAllCookies,
            OnClickCloseBanner: e.OnClickCloseBanner,
            OverriddenVendors: e.OverriddenVendors,
            OverridenGoogleVendors: e.OverridenGoogleVendors,
            PCAccordionStyle: W.Caret,
            PCActiveText: e.PCActiveText,
            PCCloseButtonType: e.PCCloseButtonType,
            PCContinueText: e.PCContinueText,
            PCCookiePolicyLinkScreenReader: e.PCCookiePolicyLinkScreenReader,
            PCCookiePolicyText: e.PCCookiePolicyText,
            PCenterAllowAllConsentText: e.PCenterAllowAllConsentText,
            PCenterApplyFiltersText: e.PCenterApplyFiltersText,
            PCenterBackText: e.PCenterBackText,
            PCenterCancelFiltersText: e.PCenterCancelFiltersText,
            PCenterClearFiltersText: e.PCenterClearFiltersText,
            PCenterConsentText: e.PCenterConsentText || "Consent",
            PCenterCookieListFilterAria: e.PCenterCookieListFilterAria || "Filter",
            PCenterCookieListSearch: e.PCenterCookieListSearch || "Search",
            PCenterCookieSearchAriaLabel: e.PCenterCookieSearchAriaLabel || "Cookie list search",
            PCenterCookiesListText: e.PCenterCookiesListText,
            PCenterEnableAccordion: e.PCenterEnableAccordion,
            PCenterFilterAppliedAria: e.PCenterFilterAppliedAria || "Applied",
            PCenterFilterClearedAria: e.PCenterFilterClearedAria || "Filters Cleared",
            PCenterFilterText: e.PCenterFilterText,
            PCenterGeneralVendorsText: e.PCenterGeneralVendorsText,
            PCenterLegIntColumnHeader: e.PCenterLegIntColumnHeader || "Legitimate Interest",
            PCenterLegitInterestText: e.PCenterLegitInterestText || "Legitimate Interest",
            PCenterRejectAllButtonText: e.PCenterRejectAllButtonText,
            PCenterSelectAllVendorsText: e.PCenterSelectAllVendorsText,
            PCenterShowRejectAllButton: e.PCenterShowRejectAllButton,
            PCenterUserIdDescriptionText: e.PCenterUserIdDescriptionText,
            PCenterUserIdNotYetConsentedText: e.PCenterUserIdNotYetConsentedText,
            PCenterUserIdTimestampTitleText: e.PCenterUserIdTimestampTitleText,
            PCenterUserIdTitleText: e.PCenterUserIdTitleText,
            PCenterVendorListDescText: e.PCenterVendorListDescText,
            PCenterVendorListDisclosure: e.PCenterVendorListDisclosure,
            PCenterVendorListFilterAria: e.PCenterVendorListFilterAria || "Filter",
            PCenterVendorListLifespan: e.PCenterVendorListLifespan,
            PCenterVendorListLifespanDay: e.PCenterVendorListLifespanDay,
            PCenterVendorListLifespanDays: e.PCenterVendorListLifespanDays,
            PCenterVendorListLifespanMonth: e.PCenterVendorListLifespanMonth,
            PCenterVendorListLifespanMonths: e.PCenterVendorListLifespanMonths,
            PCenterVendorListNonCookieUsage: e.PCenterVendorListNonCookieUsage,
            PCenterVendorListSearch: e.PCenterVendorListSearch || "Search",
            PCenterVendorListStorageDomain: e.PCenterVendorListStorageDomain,
            PCenterVendorListStorageIdentifier: e.PCenterVendorListStorageIdentifier,
            PCenterVendorListStoragePurposes: e.PCenterVendorListStoragePurposes,
            PCenterVendorListStorageType: e.PCenterVendorListStorageType,
            PCenterVendorSearchAriaLabel: e.PCenterVendorSearchAriaLabel || "Vendor list search",
            PCenterVendorsListText: e.PCenterVendorsListText,
            PCenterViewPrivacyPolicyText: e.PCenterViewPrivacyPolicyText,
            PCFirstPartyCookieListText: e.PCFirstPartyCookieListText || "First Party Cookies",
            PCGoogleVendorsText: e.PCGoogleVendorsText,
            PCGrpDescLinkPosition: e.PCGrpDescLinkPosition,
            PCGrpDescType: e.PCGrpDescType,
            PCGVenPolicyTxt: e.PCGeneralVendorsPolicyText,
            PCIABVendorsText: e.PCIABVendorsText,
            PCInactiveText: e.PCInactiveText,
            PCLogoAria: e.PCLogoScreenReader,
            PCOpensCookiesDetailsAlert: e.PCOpensCookiesDetailsAlert,
            PCenterVendorListScreenReader: e.PCenterVendorListScreenReader,
            PCOpensVendorDetailsAlert: e.PCOpensVendorDetailsAlert,
            PCShowConsentLabels: !(!e.Tab || !e.PCTemplateUpgrade) && e.PCShowConsentLabels,
            PCShowPersistentCookiesHoverButton: e.PCShowPersistentCookiesHoverButton || !1,
            PCenterDynamicRenderingEnable: e.PCenterDynamicRenderingEnable,
            PCTemplateUpgrade: e.PCTemplateUpgrade,
            PCVendorFullLegalText: e.PCVendorFullLegalText,
            PCViewCookiesText: e.PCViewCookiesText,
            PCLayout: {
                Center: e.Center,
                List: e.List,
                Panel: e.Panel,
                Popup: e.Popup,
                Tab: e.Tab
            },
            PCenterVendorListLinkText: e.PCenterVendorListLinkText,
            PCenterVendorListLinkAriaLabel: e.PCenterVendorListLinkAriaLabel,
            PreferenceCenterPosition: e.PreferenceCenterPosition,
            Publisher: e.publisher,
            PublisherCC: e.PublisherCC,
            ReconsentFrequencyDays: e.ReconsentFrequencyDays,
            ScrollAcceptAllCookies: e.ScrollAcceptAllCookies,
            ScrollCloseBanner: e.ScrollCloseBanner,
            ShowAlertNotice: e.ShowAlertNotice,
            showBannerCloseButton: e.showBannerCloseButton,
            ShowPreferenceCenterCloseButton: e.ShowPreferenceCenterCloseButton,
            ThirdPartyCookieListText: e.ThirdPartyCookieListText,
            thirdPartyTxt: e.CookieThirdPartyText,
            UseGoogleVendors: this.canUseGoogleVendors(e.PCTemplateUpgrade),
            VendorConsentModel: e.VendorConsentModel,
            VendorListText: e.VendorListText,
            Vendors: e.Vendors,
            PCCategoryStyle: e.PCCategoryStyle,
            PCShowAlwaysActiveToggle: e.PCShowAlwaysActiveToggle,
            VendorServiceConfig: {
                PCVSOptOut: e.PCVSOptOut,
                PCVSEnable: e.PCVSEnable,
                PCVSExpandCategory: e.PCVSExpandCategory,
                PCVSExpandGroup: e.PCVSExpandGroup,
                PCVSCategoryView: e.PCVSCategoryView,
                PCVSNameText: e.PCVSNameText,
                PCVSAllowAllText: e.PCVSAllowAllText,
                PCVSListTitle: e.PCVSListTitle,
                PCVSParentCompanyText: e.PCVSParentCompanyText,
                PCVSAddressText: e.PCVSAddressText,
                PCVSDefaultCategoryText: e.PCVSDefaultCategoryText,
                PCVSDefaultDescriptionText: e.PCVSDefaultDescriptionText,
                PCVSDPOEmailText: e.PCVSDPOEmailText,
                PCVSDPOLinkText: e.PCVSDPOLinkText,
                PCVSPrivacyPolicyLinkText: e.PCVSPrivacyPolicyLinkText,
                PCVSCookiePolicyLinkText: e.PCVSCookiePolicyLinkText,
                PCVSOptOutLinkText: e.PCVSOptOutLinkText,
                PCVSLegalBasisText: e.PCVSLegalBasisText
            },
            PCenterImprintLinkScreenReader: e.PCenterImprintLinkScreenReader,
            PCenterImprintLinkText: e.PCenterImprintLinkText,
            PCenterImprintLinkUrl: e.PCenterImprintLinkUrl
        };
        e.PCTemplateUpgrade && (e.Center || e.Panel) && e.PCAccordionStyle === W.PlusMinus && (t.PCAccordionStyle = e.PCAccordionStyle),
        t.PCenterEnableAccordion = e.PCAccordionStyle !== W.NoAccordion,
        this.legIntSettings = e.LegIntSettings || {},
        void 0 === this.legIntSettings.PAllowLI && (this.legIntSettings.PAllowLI = !0),
        Bt.moduleInitializer.MobileSDK || (this.pagePushedDown = e.BannerPushesDownPage),
        Rt = r(r({}, Rt), t)
    }
    ,
    Ht.prototype.commonDataMapper = function(e) {
        var t = {
            iabThirdPartyConsentUrl: e.IabThirdPartyCookieUrl,
            optanonHideAcceptButton: e.OptanonHideAcceptButton,
            optanonHideCookieSettingButton: e.OptanonHideCookieSettingButton,
            optanonStyle: e.OptanonStyle,
            optanonStaticContentLocation: e.OptanonStaticContentLocation,
            bannerCustomCSS: e.BannerCustomCSS.replace(/\\n/g, ""),
            pcCustomCSS: e.PCCustomCSS.replace(/\\n/g, ""),
            textColor: e.TextColor,
            buttonColor: e.ButtonColor,
            buttonTextColor: e.ButtonTextColor,
            bannerMPButtonColor: e.BannerMPButtonColor,
            bannerMPButtonTextColor: e.BannerMPButtonTextColor,
            backgroundColor: e.BackgroundColor,
            bannerAccordionBackgroundColor: e.BannerAccordionBackgroundColor,
            BContinueColor: e.BContinueColor,
            PCContinueColor: e.PCContinueColor,
            pcTextColor: e.PcTextColor,
            pcButtonColor: e.PcButtonColor,
            pcButtonTextColor: e.PcButtonTextColor,
            pcAccordionBackgroundColor: e.PcAccordionBackgroundColor,
            pcLinksTextColor: e.PcLinksTextColor,
            bannerLinksTextColor: e.BannerLinksTextColor,
            pcEnableToggles: e.PcEnableToggles,
            pcBackgroundColor: e.PcBackgroundColor,
            pcMenuColor: e.PcMenuColor,
            pcMenuHighLightColor: e.PcMenuHighLightColor,
            legacyBannerLayout: e.LegacyBannerLayout,
            optanonLogo: e.OptanonLogo,
            oneTrustFtrLogo: e.OneTrustFooterLogo,
            optanonCookieDomain: e.OptanonCookieDomain,
            cookiePersistentLogo: e.CookiePersistentLogo,
            optanonGroupIdPerformanceCookies: e.OptanonGroupIdPerformanceCookies,
            optanonGroupIdFunctionalityCookies: e.OptanonGroupIdFunctionalityCookies,
            optanonGroupIdTargetingCookies: e.OptanonGroupIdTargetingCookies,
            optanonGroupIdSocialCookies: e.OptanonGroupIdSocialCookies,
            optanonShowSubGroupCookies: e.ShowSubGroupCookies,
            useRTL: e.UseRTL,
            showBannerCookieSettings: e.ShowBannerCookieSettings,
            showBannerAcceptButton: e.ShowBannerAcceptButton,
            showCookieList: e.ShowCookieList,
            allowHostOptOut: e.AllowHostOptOut,
            CookiesV2NewCookiePolicy: e.CookiesV2NewCookiePolicy,
            cookieListTitleColor: e.CookieListTitleColor,
            cookieListGroupNameColor: e.CookieListGroupNameColor,
            cookieListTableHeaderColor: e.CookieListTableHeaderColor,
            CookieListTableHeaderBackgroundColor: e.CookieListTableHeaderBackgroundColor,
            cookieListPrimaryColor: e.CookieListPrimaryColor,
            cookieListCustomCss: e.CookieListCustomCss,
            pcShowCookieHost: e.PCShowCookieHost,
            pcShowCookieDuration: e.PCShowCookieDuration,
            pcShowCookieType: e.PCShowCookieType,
            pcShowCookieCategory: e.PCShowCookieCategory,
            pcShowCookieDescription: e.PCShowCookieDescription,
            ConsentIntegration: e.ConsentIntegration,
            ConsentPurposesText: e.BConsentPurposesText || "Consent Purposes",
            FeaturesText: e.BFeaturesText || "Features",
            LegitimateInterestPurposesText: e.BLegitimateInterestPurposesText || "Legitimate Interest Purposes",
            ConsentText: e.BConsentText || "Consent",
            LegitInterestText: e.BLegitInterestText || "Legit. Interest",
            pcDialogClose: e.PCDialogClose || "dialog closed",
            pCFooterLogoUrl: e.PCFooterLogoUrl,
            SpecialFeaturesText: e.BSpecialFeaturesText || "Special Features",
            SpecialPurposesText: e.BSpecialPurposesText || "Special Purposes",
            pcCListName: e.PCCListName || "Name",
            pcCListHost: e.PCCListHost || "Host",
            pcCListDuration: e.PCCListDuration || "Duration",
            pcCListType: e.PCCListType || "Type",
            pcCListCategory: e.PCCListCategory || "Category",
            pcCListDescription: e.PCCListDescription || "Description",
            IabLegalTextUrl: e.IabLegalTextUrl,
            pcLegIntButtonColor: e.PcLegIntButtonColor,
            pcLegIntButtonTextColor: e.PcLegIntButtonTextColor,
            PCenterExpandToViewText: e.PCenterExpandToViewText,
            BCategoryContainerColor: e.BCategoryContainerColor,
            BCategoryStyleColor: e.BCategoryStyleColor,
            BLineBreakColor: e.BLineBreakColor,
            BSaveBtnColor: e.BSaveBtnColor,
            BCategoryStyle: e.BCategoryStyle,
            BAnimation: e.BAnimation,
            BFocusBorderColor: e.BFocusBorderColor,
            PCFocusBorderColor: e.PCFocusBorderColor,
            BnrLogo: e.BnrLogo
        };
        Rt = r(r({}, Rt), t),
        this.pubDomainData.CookiesV2NewCookiePolicy = e.CookiesV2NewCookiePolicy
    }
    ,
    Ht.prototype.setPublicDomainData = function(r) {
        this.pubDomainData = {
            AboutCookiesText: r.AboutCookiesText,
            AboutLink: r.AboutLink,
            AboutText: r.AboutText,
            ActiveText: r.ActiveText,
            AddLinksToCookiepedia: r.AddLinksToCookiepedia,
            AlertAllowCookiesText: r.AlertAllowCookiesText,
            AlertCloseText: r.AlertCloseText,
            AlertLayout: r.AlertLayout,
            AlertMoreInfoText: r.AlertMoreInfoText,
            AlertNoticeText: r.AlertNoticeText,
            AllowAllText: r.PreferenceCenterConfirmText,
            AlwaysActiveText: r.AlwaysActiveText,
            BAnimation: r.BAnimation,
            BannerCloseButtonText: r.BannerCloseButtonText,
            BannerDPDDescription: r.BannerDPDDescription || [],
            BannerDPDDescriptionFormat: r.BannerDPDDescriptionFormat || "",
            BannerDPDTitle: r.BannerDPDTitle || "",
            BannerFeatureDescription: r.BannerFeatureDescription,
            BannerFeatureTitle: r.BannerFeatureTitle,
            BannerIABPartnersLink: r.BannerIABPartnersLink,
            BannerInformationDescription: r.BannerInformationDescription,
            BannerInformationTitle: r.BannerInformationTitle,
            BannerPosition: r.BannerPosition,
            BannerPurposeDescription: r.BannerPurposeDescription,
            BannerPurposeTitle: r.BannerPurposeTitle,
            BannerRejectAllButtonText: r.BannerRejectAllButtonText,
            BannerRelativeFontSizesToggle: r.BannerRelativeFontSizesToggle,
            BannerSettingsButtonDisplayLink: r.BannerSettingsButtonDisplayLink,
            BannerShowRejectAllButton: r.BannerShowRejectAllButton,
            BannerTitle: r.BannerTitle,
            BCategoryContainerColor: r.BCategoryContainerColor,
            BCategoryStyle: r.BCategoryStyle,
            BCategoryStyleColor: r.BCategoryStyleColor,
            BCloseButtonType: r.BCloseButtonType,
            BContinueText: r.BContinueText,
            BInitialFocus: r.BInitialFocus,
            BInitialFocusLinkAndButton: r.BInitialFocusLinkAndButton,
            BLineBreakColor: r.BLineBreakColor,
            BRejectConsentType: r.BRejectConsentType,
            BSaveBtnColor: r.BSaveBtnColor,
            BSaveBtnTxt: r.BSaveBtnText,
            BShowSaveBtn: r.BShowSaveBtn,
            CategoriesText: r.CategoriesText,
            cctId: r.cctId,
            ChoicesBanner: r.ChoicesBanner,
            CloseShouldAcceptAllCookies: r.CloseShouldAcceptAllCookies,
            CloseText: r.CloseText,
            ConfirmText: r.ConfirmText,
            ConsentIntegrationData: null,
            ConsentModel: {
                Name: r.ConsentModel
            },
            CookieListDescription: r.CookieListDescription,
            CookieListTitle: r.CookieListTitle,
            CookieSettingButtonText: r.CookieSettingButtonText,
            CookiesText: r.CookiesText,
            CookiesUsedText: r.CookiesUsedText,
            CustomJs: r.CustomJs,
            Domain: Bt.moduleInitializer.Domain,
            FooterDescriptionText: r.FooterDescriptionText,
            ForceConsent: r.ForceConsent,
            GeneralVendors: r.GeneralVendors,
            GoogleConsent: {
                GCAdStorage: r.GCAdStorage,
                GCAnalyticsStorage: r.GCAnalyticsStorage,
                GCEnable: r.GCEnable,
                GCFunctionalityStorage: r.GCFunctionalityStorage,
                GCPersonalizationStorage: r.GCPersonalizationStorage,
                GCRedactEnable: r.GCRedactEnable,
                GCSecurityStorage: r.GCSecurityStorage,
                GCWaitTime: r.GCWaitTime
            },
            Groups: null,
            HideToolbarCookieList: r.HideToolbarCookieList,
            IabType: r.IabType,
            InactiveText: r.InactiveText,
            IsBannerLoaded: !1,
            IsConsentLoggingEnabled: r.IsConsentLoggingEnabled,
            IsIABEnabled: r.IsIabEnabled,
            IsIabThirdPartyCookieEnabled: r.IsIabThirdPartyCookieEnabled,
            IsLifespanEnabled: r.IsLifespanEnabled,
            Language: r.Language,
            LastReconsentDate: r.LastReconsentDate,
            LifespanDurationText: r.LifespanDurationText,
            LifespanText: r.LifespanText,
            LifespanTypeText: r.LifespanTypeText,
            MainInfoText: r.MainInfoText,
            MainText: r.MainText,
            ManagePreferenceText: r.PreferenceCenterManagePreferencesText,
            NextPageAcceptAllCookies: r.NextPageAcceptAllCookies,
            NextPageCloseBanner: r.NextPageCloseBanner,
            NoBanner: r.NoBanner,
            OnClickAcceptAllCookies: r.OnClickAcceptAllCookies,
            OnClickCloseBanner: r.OnClickCloseBanner,
            OverridenGoogleVendors: r.OverridenGoogleVendors,
            PCAccordionStyle: W.Caret,
            PCCloseButtonType: r.PCCloseButtonType,
            PCContinueText: r.PCContinueText,
            PCenterAllowAllConsentText: r.PCenterAllowAllConsentText,
            PCenterApplyFiltersText: r.PCenterApplyFiltersText,
            PCenterBackText: r.PCenterBackText,
            PCenterCancelFiltersText: r.PCenterCancelFiltersText,
            PCenterClearFiltersText: r.PCenterClearFiltersText,
            PCenterCookieSearchAriaLabel: r.PCenterCookieSearchAriaLabel || "Cookie list search",
            PCenterCookiesListText: r.PCenterCookiesListText,
            PCenterEnableAccordion: r.PCenterEnableAccordion,
            PCenterExpandToViewText: r.PCenterExpandToViewText,
            PCenterFilterAppliedAria: r.PCenterFilterAppliedAria || "Applied",
            PCenterFilterClearedAria: r.PCenterFilterClearedAria || "Filters Cleared",
            PCenterFilterText: r.PCenterFilterText,
            PCenterRejectAllButtonText: r.PCenterRejectAllButtonText,
            PCenterSelectAllVendorsText: r.PCenterSelectAllVendorsText,
            PCenterShowRejectAllButton: r.PCenterShowRejectAllButton,
            PCenterUserIdDescriptionText: r.PCenterUserIdDescriptionText,
            PCenterUserIdNotYetConsentedText: r.PCenterUserIdNotYetConsentedText,
            PCenterUserIdTimestampTitleText: r.PCenterUserIdTimestampTitleText,
            PCenterUserIdTitleText: r.PCenterUserIdTitleText,
            PCenterVendorListDescText: r.PCenterVendorListDescText,
            PCenterVendorSearchAriaLabel: r.PCenterVendorSearchAriaLabel || "Vendor list search",
            PCenterVendorsListText: r.PCenterVendorsListText,
            PCenterViewPrivacyPolicyText: r.PCenterViewPrivacyPolicyText,
            PCFirstPartyCookieListText: r.PCFirstPartyCookieListText,
            PCGoogleVendorsText: r.PCGoogleVendorsText,
            PCGrpDescLinkPosition: r.PCGrpDescLinkPosition,
            PCGrpDescType: r.PCGrpDescType,
            PCIABVendorsText: r.PCIABVendorsText,
            PCLogoAria: r.PCLogoScreenReader,
            PCOpensCookiesDetailsAlert: r.PCOpensCookiesDetailsAlert,
            PCenterVendorListScreenReader: r.PCenterVendorListScreenReader,
            PCOpensVendorDetailsAlert: r.PCOpensVendorDetailsAlert,
            PCShowPersistentCookiesHoverButton: r.PCShowPersistentCookiesHoverButton,
            PCenterDynamicRenderingEnable: r.PCenterDynamicRenderingEnable,
            PCTemplateUpgrade: r.PCTemplateUpgrade,
            PCVendorFullLegalText: r.PCVendorFullLegalText,
            PCViewCookiesText: r.PCViewCookiesText,
            PCLayout: {
                Center: r.Center,
                List: r.List,
                Panel: r.Panel,
                Popup: r.Popup,
                Tab: r.Tab
            },
            PCenterVendorListLinkText: r.PCenterVendorListLinkText,
            PCenterVendorListLinkAriaLabel: r.PCenterVendorListLinkAriaLabel,
            PCenterImprintLinkScreenReader: r.PCenterImprintLinkScreenReader,
            PCenterImprintLinkText: r.PCenterImprintLinkText,
            PCenterImprintLinkUrl: r.PCenterImprintLinkUrl,
            PreferenceCenterPosition: r.PreferenceCenterPosition,
            ScrollAcceptAllCookies: r.ScrollAcceptAllCookies,
            ScrollCloseBanner: r.ScrollCloseBanner,
            ShowAlertNotice: r.ShowAlertNotice,
            showBannerCloseButton: r.showBannerCloseButton,
            ShowPreferenceCenterCloseButton: r.ShowPreferenceCenterCloseButton,
            ThirdPartyCookieListText: r.ThirdPartyCookieListText,
            UseGoogleVendors: this.canUseGoogleVendors(r.PCTemplateUpgrade),
            VendorConsentModel: r.VendorConsentModel,
            VendorLevelOptOut: r.IsIabEnabled,
            VendorListText: r.VendorListText,
            CookiesV2NewCookiePolicy: !1
        },
        r.PCTemplateUpgrade && (r.Center || r.Panel) && r.PCAccordionStyle !== W.NoAccordion && (this.pubDomainData.PCAccordionStyle = r.PCAccordionStyle),
        this.pubDomainData.PCenterEnableAccordion = r.PCAccordionStyle !== W.NoAccordion;
        var i = [];
        r.Groups.forEach(function(e) {
            var t, o;
            if (r.IsIabEnabled || !e.IsIabPurpose) {
                e.Cookies = JSON.parse(JSON.stringify(e.FirstPartyCookies));
                var n = null === (o = e.Hosts) || void 0 === o ? void 0 : o.reduce(function(e, t) {
                    return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
                }, []);
                (t = e.Cookies).push.apply(t, n),
                i.push(e)
            }
        }),
        this.pubDomainData.Groups = i
    }
    ,
    Ht.prototype.setBannerScriptElement = function(e) {
        this.bannerScriptElement = e,
        this.setDomainElementAttributes()
    }
    ,
    Ht.prototype.setGCMcallback = function() {
        window.otEventListeners && window.otEventListeners.length && window.otEventListeners.forEach(function(e) {
            e && "consent.changed" === e.event && (Ft.gcmUpdateCallback = e.listener)
        })
    }
    ,
    Ht.prototype.setDomainElementAttributes = function() {
        this.bannerScriptElement && (this.bannerScriptElement.hasAttribute("data-document-language") && this.setUseDocumentLanguage("true" === this.bannerScriptElement.getAttribute("data-document-language")),
        this.bannerScriptElement.hasAttribute("data-ignore-ga") && (this.ignoreGoogleAnlyticsCall = "true" === this.bannerScriptElement.getAttribute("data-ignore-ga")),
        this.bannerScriptElement.hasAttribute("data-ignore-html") && (this.ignoreInjectingHtmlCss = "true" === this.bannerScriptElement.getAttribute("data-ignore-html")))
    }
    ,
    Ht.prototype.setUseDocumentLanguage = function(e) {
        this.useDocumentLanguage = e
    }
    ,
    Ht.prototype.setPcName = function() {
        var e = Rt.PCLayout;
        e.Center ? this.pcName = st : e.Panel ? this.pcName = lt : e.Popup ? this.pcName = ct : e.List ? this.pcName = at : e.Tab && (this.pcName = dt)
    }
    ,
    Ht.prototype.setBannerName = function() {
        Rt.Flat ? this.bannerName = Ze : Rt.FloatingRoundedCorner ? this.bannerName = et : Rt.FloatingFlat ? this.bannerName = tt : Rt.FloatingRounded ? this.bannerName = nt : Rt.FloatingRoundedIcon ? this.bannerName = ot : Rt.CenterRounded ? this.bannerName = $e : Rt.ChoicesBanner ? this.bannerName = rt : Rt.NoBanner && (this.bannerName = it)
    }
    ,
    Ht.prototype.populateGPCSignal = function() {
        var e = xt.readCookieParam(Oe.OPTANON_CONSENT, Ge)
          , t = this.gpcForAGrpEnabled && this.gpcEnabled ? "1" : "0";
        this.gpcValueChanged = e ? e != t : this.gpcForAGrpEnabled,
        this.gpcForAGrpEnabled && xt.writeCookieParam(Oe.OPTANON_CONSENT, Ge, t)
    }
    ,
    Ht.prototype.initGCM = function() {
        var o = [];
        Object.keys(this.rule.States).forEach(function(t) {
            Ft.rule.States[t].forEach(function(e) {
                o.push((t + "-" + e).toUpperCase())
            })
        });
        var e = Ft.rule.Countries.map(function(e) {
            return e.toUpperCase()
        });
        Ft.gcmCountries = e.concat(o)
    }
    ,
    Ht);
    function Ht() {
        var t = this;
        this.DNTEnabled = "yes" === navigator.doNotTrack || "1" === navigator.doNotTrack,
        this.gpcEnabled = !1,
        this.gpcForAGrpEnabled = !1,
        this.pagePushedDown = !1,
        this.iabGroups = {
            purposes: {},
            legIntPurposes: {},
            specialPurposes: {},
            features: {},
            specialFeatures: {}
        },
        this.iabType = null,
        this.grpContainLegalOptOut = !1,
        this.purposeOneTreatment = !1,
        this.ignoreInjectingHtmlCss = !1,
        this.ignoreGoogleAnlyticsCall = !1,
        this.mobileOnlineURL = [],
        this.iabGrpIdMap = {},
        this.iabGrps = [],
        this.consentableGrps = [],
        this.consentableIabGrps = [],
        this.domainGrps = {},
        this.thirdPartyiFrameLoaded = !1,
        this.thirdPartyiFrameResolve = null,
        this.thirdPartyiFramePromise = new Promise(function(e) {
            t.thirdPartyiFrameResolve = e
        }
        ),
        this.isOptInMode = !1,
        this.isSoftOptInMode = !1,
        this.gpcValueChanged = !1,
        this.conditionalLogicEnabled = !1,
        this.allConditionsFailed = !1,
        this.canUseConditionalLogic = !1,
        this.gtmUpdatedinStub = !1,
        this.gcmDevIdSet = !1,
        this.purposeOneGrpId = "IABV2_1"
    }
    var Ft, Rt = {};
    function qt() {
        this.otSDKVersion = "6.39.0",
        this.isAMP = !1,
        this.ampData = {},
        this.otCookieData = window.OneTrust && window.OneTrust.otCookieData || [],
        this.syncRequired = !1,
        this.isIabSynced = !1,
        this.isGacSynced = !1,
        this.grpsSynced = [],
        this.syncedValidGrp = !1,
        this.groupsConsent = [],
        this.initialGroupsConsent = [],
        this.hostsConsent = [],
        this.initialHostConsent = [],
        this.genVendorsConsent = {},
        this.vsConsent = new Map,
        this.initialGenVendorsConsent = {},
        this.vendors = {
            list: [],
            searchParam: "",
            vendorTemplate: null,
            selectedVendors: [],
            selectedPurpose: [],
            selectedLegInt: [],
            selectedLegIntVendors: [],
            selectedSpecialFeatures: []
        },
        this.initialVendors = {
            list: [],
            searchParam: "",
            vendorTemplate: null,
            selectedVendors: [],
            selectedPurpose: [],
            selectedLegInt: [],
            selectedLegIntVendors: [],
            selectedSpecialFeatures: []
        },
        this.oneTrustIABConsent = {
            purpose: [],
            legimateInterest: [],
            features: [],
            specialFeatures: [],
            specialPurposes: [],
            vendors: [],
            legIntVendors: [],
            vendorList: null,
            IABCookieValue: ""
        },
        this.initialOneTrustIABConsent = {
            purpose: [],
            legimateInterest: [],
            features: [],
            specialFeatures: [],
            specialPurposes: [],
            vendors: [],
            legIntVendors: [],
            vendorList: null,
            IABCookieValue: ""
        },
        this.addtlVendors = {
            vendorConsent: [],
            vendorSelected: {}
        },
        this.initialAddtlVendors = {
            vendorConsent: [],
            vendorSelected: {}
        },
        this.addtlConsentVersion = "1~",
        this.initialAddtlVendorsList = {},
        this.isAddtlConsent = !1,
        this.currentGlobalFilteredList = [],
        this.filterByIABCategories = [],
        this.filterByCategories = [],
        this.hosts = {
            hostTemplate: null,
            hostCookieTemplate: null
        },
        this.generalVendors = {
            gvTemplate: null,
            gvCookieTemplate: null
        },
        this.oneTrustAlwaysActiveHosts = [],
        this.alwaysActiveGenVendors = [],
        this.softOptInGenVendors = [],
        this.optInGenVendors = [],
        this.optanonHostList = [],
        this.srcExecGrps = [],
        this.htmlExecGrps = [],
        this.srcExecGrpsTemp = [],
        this.htmlExecGrpsTemp = [],
        this.isPCVisible = !1,
        this.dataGroupState = [],
        this.userLocation = {
            country: "",
            state: ""
        },
        this.vendorsSetting = {},
        this.dsParams = {},
        this.isV2Stub = !1,
        this.fireOnetrustGrp = !1,
        this.showVendorService = !1,
        this.showGeneralVendors = !1,
        this.genVenOptOutEnabled = !1,
        this.vsIsActiveAndOptOut = !1,
        this.bAsset = {},
        this.pcAsset = {},
        this.csBtnAsset = {},
        this.cStyles = {},
        this.vendorDomInit = !1,
        this.genVendorDomInit = !1,
        this.syncNtfyContent = {},
        this.ntfyRequired = !1,
        this.skipAddingHTML = !1,
        this.bnrAnimationInProg = !1,
        this.isPreview = !1,
        this.geoFromUrl = "",
        this.hideBanner = !1,
        this.setAttributePolyfillIsActive = !1,
        this.storageBaseURL = "",
        this.isKeyboardUser = !1,
        this.customerBodyCSS = {},
        this.customerHtmlCSS = {},
        this.scriptBodyCSS = {},
        this.scriptHtmlCSS = {}
    }
    var Mt = new (qt.prototype.getVendorsInDomain = function() {
        var e;
        if (!Mt._vendorsInDomain) {
            var t = new Map
              , o = null != (e = Rt.Groups) ? e : [];
            Mt.setVendorServicesMap(o, t),
            Mt._vendorsInDomain = t
        }
        return Mt._vendorsInDomain
    }
    ,
    qt.prototype.setVendorServicesMap = function(e, t) {
        for (var o, n = 0, r = e; n < r.length; n++) {
            var i = r[n];
            i.SubGroups && 0 < i.SubGroups.length && Mt.setVendorServicesMap(i.SubGroups, t);
            for (var s = 0, a = null != (o = i.VendorServices) ? o : []; s < a.length; s++) {
                var l = a[s]
                  , c = Object.assign({}, i);
                delete c.VendorServices,
                l.groupRef = c,
                t.set(l.CustomVendorServiceId, l)
            }
        }
    }
    ,
    qt.prototype.clearVendorsInDomain = function() {
        Mt._vendorsInDomain = null
    }
    ,
    qt)
      , Ut = (jt.insertAfter = function(e, t) {
        t.parentNode.insertBefore(e, t.nextSibling)
    }
    ,
    jt.insertBefore = function(e, t) {
        t.parentNode.insertBefore(e, t)
    }
    ,
    jt.inArray = function(e, t) {
        return t.indexOf(e)
    }
    ,
    jt.ajax = function(e) {
        var t, o, n, r, i, s, a = null, l = new XMLHttpRequest;
        t = e.type,
        o = e.url,
        e.dataType,
        n = e.contentType,
        r = e.data,
        i = e.success,
        a = e.error,
        s = e.sync,
        l.open(t, o, !s),
        l.setRequestHeader("Content-Type", n),
        l.onload = function() {
            if (200 <= this.status && this.status < 400) {
                var e = JSON.parse(this.responseText);
                i(e)
            } else
                a({
                    message: "Error Loading Data",
                    statusCode: this.status
                })
        }
        ,
        l.onerror = function(e) {
            a(e)
        }
        ,
        "post" === t.toLowerCase() || "put" === t.toLowerCase() ? l.send(r) : l.send()
    }
    ,
    jt.prevNextHelper = function(o, e, n) {
        var r = [];
        function i(e, t, o) {
            t[e] && o ? o.includes(".") ? (t[e].classList[0] || t[e].classList.value && t[e].classList.value.includes(o.split(".")[1])) && r.push(t[e]) : o.includes("#") ? t[e].id === o.split("#")[1] && r.push(t[e]) : t[e].tagName === document.createElement(o.trim()).tagName && r.push(t[e]) : t[e] && r.push(t[e])
        }
        return "string" == typeof e ? Array.prototype.forEach.call(document.querySelectorAll(e), function(e, t) {
            i(o, e, n)
        }) : i(o, e, n),
        r
    }
    ,
    jt.browser = function() {
        var e, t, o;
        return navigator.sayswho = (t = navigator.userAgent,
        o = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [],
        /trident/i.test(o[1]) ? "IE " + ((e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || "") : "Chrome" === o[1] && null != (e = t.match(/\b(OPR|Edge)\/(\d+)/)) ? e.slice(1).join(" ").replace("OPR", "Opera") : (o = o[2] ? [o[1], o[2]] : [navigator.appName, navigator.appVersion, "-?"],
        null != (e = t.match(/version\/(\d+)/i)) && o.splice(1, 1, e[1]),
        o.join(" "))),
        {
            version: parseInt(navigator.sayswho.split(" ")[1]),
            type: navigator.sayswho.split(" ")[0],
            userAgent: navigator.userAgent
        }
    }
    ,
    jt.isNodeList = function(e) {
        var t = Object.prototype.toString.call(e);
        return "[object NodeList]" === t || "[object Array]" === t
    }
    ,
    jt.prototype.fadeOut = function(e) {
        var t = this;
        if (void 0 === e && (e = 60),
        1 <= this.el.length)
            for (var o = 0; o < this.el.length; o++) {
                var n = "\n                    visibility: hidden;\n                    opacity: 0;\n                    transition: visibility 0s " + e + "ms, opacity " + e + "ms linear;\n                ";
                wt(this.el[o], n, !0)
            }
        var r = setInterval(function() {
            if (1 <= t.el.length)
                for (var e = 0; e < t.el.length; e++)
                    t.el[e].style.opacity <= 0 && (wt(t.el[e], "display: none;", !0),
                    clearInterval(r),
                    "optanon-popup-bg" === t.el[e].id && t.el[e].removeAttribute("style"))
        }, e);
        return this
    }
    ,
    jt.prototype.hide = function() {
        if (1 <= this.el.length)
            for (var e = 0; e < this.el.length; e++)
                wt(this.el[e], "display: none;", !0);
        else
            jt.isNodeList(this.el) || wt(this.el, "display: none;", !0);
        return this
    }
    ,
    jt.prototype.show = function(e) {
        if (void 0 === e && (e = "block"),
        1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++)
                wt(this.el[t], "display: " + e + ";", !0);
        else
            jt.isNodeList(this.el) || wt(this.el, "display: " + e + ";", !0);
        return this
    }
    ,
    jt.prototype.remove = function() {
        if (1 <= this.el.length)
            for (var e = 0; e < this.el.length; e++)
                this.el[e].parentNode.removeChild(this.el[e]);
        else
            this.el.parentNode.removeChild(this.el);
        return this
    }
    ,
    jt.prototype.css = function(e) {
        if (e)
            if (1 <= this.el.length) {
                if (!e.includes(":"))
                    return this.el[0].style[e];
                for (var t = 0; t < this.el.length; t++)
                    wt(this.el[t], e)
            } else {
                if (!e.includes(":"))
                    return this.el.style[e];
                wt(this.el, e)
            }
        return this
    }
    ,
    jt.prototype.removeClass = function(e) {
        if (1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++)
                this.el[t].classList ? this.el[t].classList.remove(e) : this.el[t].className = this.el[t].className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)","gi"), " ");
        else
            this.el.classList ? this.el.classList.remove(e) : this.el.className = this.el.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)","gi"), " ");
        return this
    }
    ,
    jt.prototype.addClass = function(e) {
        if (1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++)
                this.el[t].classList ? this.el[t].classList.add(e) : this.el[t].className += " " + e;
        else
            this.el.classList ? this.el.classList.add(e) : this.el.className += " " + e;
        return this
    }
    ,
    jt.prototype.on = function(r, i, s) {
        var e = this;
        if ("string" != typeof i)
            if (this.el && "HTML" === this.el.nodeName && "load" === r || "resize" === r || "scroll" === r)
                switch (r) {
                case "load":
                    window.onload = i;
                    break;
                case "resize":
                    window.onresize = i;
                    break;
                case "scroll":
                    window.onscroll = i
                }
            else if (this.el && 1 <= this.el.length)
                for (var t = 0; t < this.el.length; t++)
                    this.el[t].addEventListener(r, i);
            else
                this.el && this.el instanceof Element && this.el.addEventListener(r, i);
        else if (this.el && "HTML" === this.el.nodeName && "load" === r || "resize" === r || "scroll" === r)
            switch (r) {
            case "load":
                window.onload = s;
                break;
            case "resize":
                window.onresize = s;
                break;
            case "scroll":
                window.onscroll = s
            }
        else {
            var a = function(o) {
                var n = o.target;
                e.el.eventExecuted = !0,
                Array.prototype.forEach.call(document.querySelectorAll(i), function(e, t) {
                    Wt["" + r + i] && delete Wt["" + r + i],
                    e.addEventListener(r, s),
                    e === n && s && s.call(e, o)
                }),
                e.el && e.el[0] ? e.el[0].removeEventListener(r, a) : e.el && e.el instanceof Element && e.el.removeEventListener(r, a)
            };
            if (this.el && 1 <= this.el.length)
                for (t = 0; t < this.el.length; t++)
                    this.el[t].eventExecuted = !1,
                    this.el[t].eventExecuted || this.el[t].addEventListener(r, a);
            else
                this.el && (this.el.eventExecuted = !1,
                !this.el.eventExecuted && this.el instanceof Element && (Wt["" + r + i] || (Wt["" + r + i] = !0,
                this.el.addEventListener(r, a))))
        }
        return this
    }
    ,
    jt.prototype.off = function(e, t) {
        if (1 <= this.el.length)
            for (var o = 0; o < this.el.length; o++)
                this.el[o].removeEventListener(e, t);
        else
            this.el.removeEventListener(e, t);
        return this
    }
    ,
    jt.prototype.one = function(t, o) {
        var n = this;
        if (1 <= this.el.length)
            for (var e = 0; e < this.el.length; e++)
                this.el[e].addEventListener(t, function(e) {
                    e.stopPropagation(),
                    e.currentTarget.dataset.triggered || (o(),
                    e.currentTarget.dataset.triggered = !0)
                });
        else {
            var r = function(e) {
                e.stopPropagation(),
                o(),
                n.off(t, r)
            };
            this.el.addEventListener(t, r)
        }
        return this
    }
    ,
    jt.prototype.trigger = function(e) {
        var t = new CustomEvent(e,{
            customEvent: "yes"
        });
        return this.el.dispatchEvent(t),
        this
    }
    ,
    jt.prototype.focus = function() {
        return 1 <= this.el.length ? this.el[0].focus() : this.el.focus(),
        this
    }
    ,
    jt.prototype.attr = function(e, t) {
        return this.el && 1 <= this.el.length ? t ? ("class" === e ? this.addClass(t) : this.el[0].setAttribute(e, t),
        this) : this.el[0].getAttribute(e) : t && this.el ? ("class" === e ? this.addClass(t) : this.el.setAttribute(e, t),
        this) : this.el && this.el.getAttribute(e)
    }
    ,
    jt.prototype.html = function(e) {
        if (null == e)
            return 1 <= this.el.length ? this.el[0].innerHTML : this.el.innerHTML;
        if (1 <= this.el.length)
            for (var t = 0; t < this.el.length; t++)
                this.el[t].innerHTML = e;
        else
            this.el.innerHTML = e;
        return this
    }
    ,
    jt.prototype.append = function(o) {
        if ("string" != typeof o || o.includes("<") || o.includes(">"))
            if (Array.isArray(o)) {
                var n = this;
                Array.prototype.forEach.call(o, function(e, t) {
                    document.querySelector(n.selector).appendChild(new jt(e,"ce").el)
                })
            } else if ("string" == typeof o || Array.isArray(o))
                if ("string" == typeof this.selector)
                    document.querySelector(this.selector).appendChild(new jt(o,"ce").el);
                else if (this.useEl) {
                    var r = document.createDocumentFragment()
                      , i = !(!o.includes("<th") && !o.includes("<td"));
                    if (i) {
                        var e = o.split(" ")[0].split("<")[1];
                        r.appendChild(document.createElement(e)),
                        r.firstChild.innerHTML = o
                    }
                    Array.prototype.forEach.call(this.el, function(e, t) {
                        i ? e.appendChild(r.firstChild) : e.appendChild(new jt(o,"ce").el)
                    })
                } else
                    this.selector.appendChild(new jt(o,"ce").el);
            else if ("string" == typeof this.selector)
                document.querySelector(this.selector).appendChild(o);
            else if (1 <= o.length)
                for (var t = 0; t < o.length; t++)
                    this.selector.appendChild(o[t]);
            else
                this.selector.appendChild(o);
        else
            this.el.insertAdjacentText("beforeend", o);
        return this
    }
    ,
    jt.prototype.text = function(o) {
        if (this.el) {
            if (1 <= this.el.length) {
                if (!o)
                    return this.el[0].textContent;
                Array.prototype.forEach.call(this.el, function(e, t) {
                    e.textContent = o
                })
            } else {
                if (!o)
                    return this.el.textContent;
                this.el.textContent = o
            }
            return this
        }
    }
    ,
    jt.prototype.data = function(o, n) {
        if (this.el.length < 1)
            return this;
        if (!(1 <= this.el.length))
            return r(this.el, n);
        function r(e, t) {
            if (!t)
                return JSON.parse(e.getAttribute("data-" + o));
            "object" == typeof t ? e.setAttribute("data-" + o, JSON.stringify(t)) : e.setAttribute("data-" + o, t)
        }
        return Array.prototype.forEach.call(this.el, function(e, t) {
            r(e, n)
        }),
        this
    }
    ,
    jt.prototype.height = function(e) {
        this.el.length && (this.el = this.el[0]);
        for (var t = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-top").split("px")[0]), o = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("padding-bottom").split("px")[0]), n = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-top").split("px")[0]), r = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-bottom").split("px")[0]), i = parseInt(window.getComputedStyle(this.el, null).getPropertyValue("height").split("px")[0]), s = [t, o, n, r], a = 0, l = 0; l < s.length; l++)
            0 < s[l] && (a += s[l]);
        if (!e)
            return this.selector === document ? i : this.el.clientHeight - a;
        var c = e.toString().split(parseInt(e))[1] ? e.toString().split(parseInt(e))[1] : "px"
          , d = "number" == typeof e ? e : parseInt(e.toString().split(c)[0]);
        return (c && "px" === c || "%" === c || "em" === c || "rem" === c) && (0 < d ? wt(this.el, "height: " + (a + d + c) + ";", !0) : "auto" === e && wt(this.el, "height: " + e + ";", !0)),
        this
    }
    ,
    jt.prototype.each = function(e) {
        var t = !1;
        return void 0 === this.el.length && (this.el = [this.el],
        t = !0),
        Array.prototype.forEach.call(this.el, e),
        t && (this.el = this.el[0]),
        this
    }
    ,
    jt.prototype.is = function(e) {
        return this.el.length ? (this.el[0].matches || this.el[0].matchesSelector || this.el[0].msMatchesSelector || this.el[0].mozMatchesSelector || this.el[0].webkitMatchesSelector || this.el[0].oMatchesSelector).call(this.el[0], e) : (this.el.matches || this.el.matchesSelector || this.el.msMatchesSelector || this.el.mozMatchesSelector || this.el.webkitMatchesSelector || this.el.oMatchesSelector).call(this.el, e)
    }
    ,
    jt.prototype.filter = function(e) {
        return this.el = Array.prototype.filter.call(document.querySelectorAll(this.selector), e),
        this
    }
    ,
    jt.prototype.animate = function(s, a) {
        var l, c = this;
        for (var e in this.el = document.querySelector(this.selector),
        s)
            l = e,
            function() {
                var e = parseInt(s[l])
                  , t = s[l].split(parseInt(s[l]))[1] ? s[l].split(parseInt(s[l]))[1] : "px"
                  , o = "\n                      @keyframes slide-" + ("top" === l ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + ("top" === l ? c.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + (e + t) + ";\n                          }\n                      }\n                      @-webkit-keyframes slide-" + ("top" === l ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + ("top" === l ? c.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + (e + t) + ";\n                          }\n                      }\n                      @-moz-keyframes slide-" + ("top" === l ? "up" : "down") + "-custom {\n                          0% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + ("top" === l ? c.el.getBoundingClientRect().top : window.innerHeight) + "px !important;\n                          }\n                          100% {\n                              " + ("top" === l ? "top" : "bottom") + ": " + (e + t) + ";\n                          }\n                      }\n                      "
                  , n = document.head.querySelector("#onetrust-style");
                if (n ? n.innerHTML += o : ((i = document.createElement("style")).id = "onetrust-legacy-style",
                i.type = "text/css",
                i.innerHTML = o,
                document.head.appendChild(i)),
                jt.browser().type = jt.browser().version <= 8) {
                    var r = "top" === l ? "-webkit-animation: slide-up-custom " : "-webkit-animation: slide-down-custom " + a + "ms ease-out forwards;";
                    wt(c.el, r)
                } else {
                    var i = "\n                        animation-name: " + ("top" === l ? "slide-up-custom" : "slide-down-custom") + ";\n                        animation-duration: " + a + "ms;\n                        animation-fill-mode: forwards;\n                        animation-timing-function: ease-out;\n                    ";
                    wt(c.el, i, !0)
                }
            }();
        return this
    }
    ,
    jt.prototype.scrollTop = function() {
        return this.el.scrollTop
    }
    ,
    jt);
    function jt(e, t) {
        switch (void 0 === t && (t = ""),
        this.selector = e,
        this.useEl = !1,
        t) {
        case "ce":
            var o = jt.browser().type.toLowerCase()
              , n = jt.browser().version;
            if (n < 10 && "safari" === o || "chrome" === o && n <= 44 || n <= 40 && "firefox" === o) {
                var r = document.implementation.createHTMLDocument();
                r.body.innerHTML = e,
                this.el = r.body.children[0]
            } else {
                var i = document.createRange().createContextualFragment(e);
                this.el = i.firstChild
            }
            this.length = 1;
            break;
        case "":
            this.el = e === document || e === window ? document.documentElement : "string" != typeof e ? e : document.querySelectorAll(e),
            this.length = e === document || e === window || "string" != typeof e ? 1 : this.el.length;
            break;
        default:
            this.length = 0
        }
    }
    function zt(e, t) {
        return void 0 === t && (t = ""),
        new Ut(e,t)
    }
    var Kt, Wt = {}, Jt = (Yt.prototype.addLogoUrls = function() {
        Kt.checkMobileOfflineRequest(Kt.getBannerVersionUrl()) || (Ft.mobileOnlineURL.push(Kt.updateCorrectUrl(Rt.optanonLogo)),
        Ft.mobileOnlineURL.push(Kt.updateCorrectUrl(Rt.oneTrustFtrLogo)))
    }
    ,
    Yt.prototype.getCookieLabel = function(e, t, o) {
        if (void 0 === o && (o = !0),
        !e)
            return "";
        var n = e.Name;
        return t && (n = '\n                <a  class="cookie-label"\n                    href="' + (o ? "http://cookiepedia.co.uk/cookies/" : "http://cookiepedia.co.uk/host/") + e.Name + '"\n                    rel="noopener"\n                    target="_blank"\n                >\n                    ' + e.Name + '&nbsp;<span class="ot-scrn-rdr">' + Rt.NewWinTxt + "</span>\n                </a>\n            "),
        n
    }
    ,
    Yt.prototype.getBannerSDKAssestsUrl = function() {
        return this.getBannerVersionUrl() + "/assets"
    }
    ,
    Yt.prototype.getBannerVersionUrl = function() {
        var e = Ft.bannerScriptElement.getAttribute("src");
        return "" + (-1 !== e.indexOf("/consent/") ? e.split("consent/")[0] + "scripttemplates/" : e.split("otSDKStub")[0]) + Bt.moduleInitializer.Version
    }
    ,
    Yt.prototype.checkMobileOfflineRequest = function(e) {
        return Bt.moduleInitializer.MobileSDK && new RegExp("^file://","i").test(e)
    }
    ,
    Yt.prototype.updateCorrectIABUrl = function(e) {
        var t = Bt.moduleInitializer.ScriptType;
        if (t === Ke || t === Je) {
            var o = Gt.getURL(e)
              , n = Ft.bannerScriptElement
              , r = n && n.getAttribute("src") ? Gt.getURL(n.getAttribute("src")) : null;
            r && o && r.hostname !== o.hostname && (e = (e = (r = "" + Ft.bannerDataParentURL) + o.pathname.split("/").pop().replace(/(^\/?)/, "/")).replace(o.hostname, r.hostname))
        }
        return e
    }
    ,
    Yt.prototype.updateCorrectUrl = function(e, t) {
        void 0 === t && (t = !1);
        var o = Gt.getURL(e)
          , n = Ft.bannerScriptElement
          , r = n && n.getAttribute("src") ? Gt.getURL(n.getAttribute("src")) : null;
        if (r && o && r.hostname !== o.hostname) {
            var i = Bt.moduleInitializer.ScriptType;
            if (i === Ke || i === Je) {
                if (t)
                    return e;
                e = (r = Ft.bannerDataParentURL + "/" + Ft.getRegionRule().Id) + o.pathname.replace(/(^\/?)/, "/")
            } else
                e = e.replace(o.hostname, r.hostname)
        }
        return e
    }
    ,
    Yt.prototype.isBundleOrStackActive = function(n, r) {
        void 0 === r && (r = null);
        var i = Mt.oneTrustIABConsent
          , s = !0;
        r = r || Mt.groupsConsent;
        for (var a = 0, e = function() {
            var t = n.SubGroups[a];
            if (t.Type === kt)
                (-1 < (e = Gt.findIndex(r, function(e) {
                    return e.split(":")[0] === t.CustomGroupId
                })) && "0" === r[e].split(":")[1] || !r.length) && (s = !1);
            else {
                var e, o = t.Type === Pt ? i.specialFeatures : i.purpose;
                (-1 < (e = Gt.findIndex(o, function(e) {
                    return e.split(":")[0] === t.IabGrpId
                })) && "false" === o[e].split(":")[1] || !o.length) && (s = !1)
            }
            a++
        }; e(),
        s && a < n.SubGroups.length; )
            ;
        return s
    }
    ,
    Yt.prototype.otFetchOfflineFile = function(r) {
        return d(this, void 0, void 0, function() {
            var t, o, n;
            return g(this, function(e) {
                switch (e.label) {
                case 0:
                    return r = r.replace(".json", ".js"),
                    t = r.split("/"),
                    o = t[t.length - 1],
                    n = o.split(".js")[0],
                    [4, new Promise(function(e) {
                        function t() {
                            e(window[n])
                        }
                        Kt.jsonp(r, t, t)
                    }
                    )];
                case 1:
                    return [2, e.sent()]
                }
            })
        })
    }
    ,
    Yt.prototype.jsonp = function(e, t, o) {
        Kt.checkMobileOfflineRequest(e) || Ft.mobileOnlineURL.push(e);
        var n = document.createElement("script")
          , r = document.getElementsByTagName("head")[0];
        function i() {
            t()
        }
        n.onreadystatechange = function() {
            "loaded" !== this.readyState && "complete" !== this.readyState || i()
        }
        ,
        n.onload = i,
        n.onerror = function() {
            o()
        }
        ,
        n.type = "text/javascript",
        n.async = !0,
        n.src = e,
        Mt.crossOrigin && n.setAttribute("crossorigin", Mt.crossOrigin),
        r.appendChild(n)
    }
    ,
    Yt.prototype.isCookiePolicyPage = function(e) {
        var t = !1
          , o = Gt.removeURLPrefixes(window.location.href)
          , n = zt("<div></div>", "ce").el;
        zt(n).html(e);
        for (var r = n.querySelectorAll("a"), i = 0; i < r.length; i++)
            if (Gt.removeURLPrefixes(r[i].href) === o) {
                t = !0;
                break
            }
        return t
    }
    ,
    Yt.prototype.isBannerVisible = function() {
        var e = !1
          , t = document.getElementById("onetrust-banner-sdk");
        return t && t.getAttribute("style") && (e = -1 !== t.getAttribute("style").indexOf("display: none") || -1 !== t.getAttribute("style").indexOf("display:none")),
        e
    }
    ,
    Yt.prototype.hideBanner = function() {
        var e = this;
        Mt.bnrAnimationInProg ? setTimeout(function() {
            return e.hideBanner()
        }, 100) : zt("#onetrust-banner-sdk").fadeOut(400)
    }
    ,
    Yt.prototype.resetFocusToBody = function() {
        document.activeElement && document.activeElement.blur()
    }
    ,
    Yt.prototype.getDuration = function(e) {
        var t = e.Length
          , o = e.DurationType
          , n = "";
        if (!t || 0 === parseInt(t))
            return Rt.LfSpanSecs;
        var r = parseInt(t);
        if (o) {
            var i = 1 < (r = this.round_to_precision(r / o, .5)) ? pt[o] + "s" : pt[o];
            Rt.LifespanDurationText && 1 === o && (i = "LifespanDurationText"),
            n = r + " " + Rt[i]
        } else
            n = this.getDurationText(r);
        return n
    }
    ,
    Yt.prototype.isDateCurrent = function(e) {
        var t = e.split("/")
          , o = parseInt(t[1])
          , n = parseInt(t[0])
          , r = parseInt(t[2])
          , i = new Date
          , s = i.getDate()
          , a = i.getFullYear()
          , l = i.getMonth() + 1;
        return a < r || r === a && l < n || r === a && n === l && s <= o
    }
    ,
    Yt.prototype.insertFooterLogo = function(e) {
        var t = zt(e).el;
        if (t.length && Rt.oneTrustFtrLogo) {
            var o = Kt.updateCorrectUrl(Rt.oneTrustFtrLogo);
            Kt.checkMobileOfflineRequest(Kt.getBannerVersionUrl()) && (o = Gt.getRelativeURL(o, !0, !0));
            for (var n = 0; n < t.length; n++) {
                var r = t[n].querySelector("img")
                  , i = "Powered by OneTrust " + Rt.NewWinTxt;
                zt(t[n]).attr("href", Rt.pCFooterLogoUrl),
                r.setAttribute("src", o),
                r.setAttribute("title", i),
                zt(t[n]).attr("aria-label", i)
            }
        }
    }
    ,
    Yt.prototype.getUTCFormattedDate = function(e) {
        var t = new Date(e);
        return t.getUTCFullYear() + "-" + (t.getUTCMonth() + 1).toString().padStart(2, "0") + "-" + t.getUTCDate().toString().toString().padStart(2, "0") + " " + t.getUTCHours() + ":" + t.getUTCMinutes().toString().toString().padStart(2, "0") + ":" + t.getUTCSeconds().toString().toString().padStart(2, "0")
    }
    ,
    Yt.prototype.getDurationText = function(e) {
        return 365 <= e ? (e /= 365,
        (e = this.round_to_precision(e, .5)) + " " + (1 < e ? Rt.LfSpnYrs : Rt.LfSpnYr)) : Rt.LifespanDurationText ? e + " " + Rt.LifespanDurationText : e + " " + (1 < e ? Rt.PCenterVendorListLifespanDays : Rt.PCenterVendorListLifespanDay)
    }
    ,
    Yt.prototype.round_to_precision = function(e, t) {
        var o = +e + (void 0 === t ? .5 : t / 2);
        return o - o % (void 0 === t ? 1 : +t)
    }
    ,
    Yt.prototype.isOptOutEnabled = function() {
        return Rt.PCTemplateUpgrade ? Mt.genVenOptOutEnabled : Rt.allowHostOptOut
    }
    ,
    Yt.prototype.findUserType = function(e) {
        Mt.isKeyboardUser = !(!e || 0 !== e.detail)
    }
    ,
    Yt.prototype.getCSSPropsFromString = function(e) {
        if (e) {
            var t = e.length
              , n = {};
            return e.endsWith(";") && (e = e.substring(0, t - 1)),
            e.trim().split(";").forEach(function(e) {
                var t = e.trim().toString().split(":")
                  , o = JSON.parse('{ "' + t[0].trim() + '" : "' + t[1].trim() + '" }');
                n = Object.assign(n, o)
            }),
            n
        }
        return {}
    }
    ,
    Yt);
    function Yt() {}
    var Xt, Qt = {
        P_Content: "#ot-pc-content",
        P_Logo: ".ot-pc-logo",
        P_Title: "#ot-pc-title",
        P_Policy_Txt: "#ot-pc-desc",
        P_Vendor_Title_Elm: "#ot-lst-title",
        P_Vendor_Title: "#ot-lst-title h3",
        P_Manage_Cookies_Txt: "#ot-category-title",
        P_Label_Txt: ".ot-label-txt",
        P_Category_Header: ".ot-cat-header",
        P_Category_Grp: ".ot-cat-grp",
        P_Category_Item: ".ot-cat-item",
        P_Vendor_List: "#ot-pc-lst",
        P_Vendor_Content: "#ot-lst-cnt",
        P_Vendor_Container: "#ot-ven-lst",
        P_Ven_Bx: "ot-ven-box",
        P_Ven_Name: ".ot-ven-name",
        P_Ven_Link: ".ot-ven-link",
        P_Ven_Ctgl: "ot-ven-ctgl",
        P_Ven_Ltgl: "ot-ven-litgl",
        P_Ven_Ltgl_Only: "ot-ven-litgl-only",
        P_Ven_Opts: ".ot-ven-opts",
        P_Triangle: "#ot-anchor",
        P_Fltr_Modal: "#ot-fltr-modal",
        P_Fltr_Options: ".ot-fltr-opts",
        P_Fltr_Option: ".ot-fltr-opt",
        P_Select_Cntr: "#ot-sel-blk",
        P_Host_Cntr: "#ot-host-lst",
        P_Host_Hdr: ".ot-host-hdr",
        P_Host_Desc: ".ot-host-desc",
        P_Li_Hdr: ".ot-pli-hdr",
        P_Li_Title: ".ot-li-title",
        P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
        P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
        P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
        P_Host_Title: ".ot-host-name",
        P_Leg_Select_All: ".ot-sel-all-hdr",
        P_Leg_Header: ".ot-li-hdr",
        P_Acc_Header: ".ot-acc-hdr",
        P_Cnsnt_Header: ".ot-consent-hdr",
        P_Tgl_Cntr: ".ot-tgl-cntr",
        P_CBx_Cntr: ".ot-chkbox",
        P_Sel_All_Host_El: "ot-selall-hostcntr",
        P_Sel_All_Vendor_Consent_El: "ot-selall-vencntr",
        P_Sel_All_Vendor_Leg_El: "ot-selall-licntr",
        P_c_Name: "ot-c-name",
        P_c_Host: "ot-c-host",
        P_c_Duration: "ot-c-duration",
        P_c_Type: "ot-c-type",
        P_c_Category: "ot-c-category",
        P_c_Desc: "ot-c-description",
        P_Host_View_Cookies: ".ot-host-expand",
        P_Host_Opt: ".ot-host-opt",
        P_Host_Info: ".ot-host-info",
        P_Arrw_Cntr: ".ot-arw-cntr",
        P_Acc_Txt: ".ot-acc-txt",
        P_Vendor_CheckBx: "ot-ven-chkbox",
        P_Vendor_LegCheckBx: "ot-ven-leg-chkbox",
        P_Host_UI: "ot-hosts-ui",
        P_Host_Cnt: "ot-host-cnt",
        P_Host_Bx: "ot-host-box",
        P_Ven_Dets: ".ot-ven-dets",
        P_Ven_Disc: ".ot-ven-disc",
        P_Gven_List: "#ot-gn-venlst",
        P_Close_Btn: ".ot-close-icon",
        P_Ven_Lst_Cntr: ".ot-vlst-cntr",
        P_Host_Lst_cntr: ".ot-hlst-cntr",
        P_Sub_Grp_Cntr: ".ot-subgrp-cntr",
        P_Subgrp_Desc: ".ot-subgrp-desc",
        P_Subgp_ul: ".ot-subgrps",
        P_Subgrp_li: ".ot-subgrp",
        P_Subgrp_Tgl_Cntr: ".ot-subgrp-tgl",
        P_Grp_Container: ".ot-grps-cntr",
        P_Privacy_Txt: "#ot-pvcy-txt",
        P_Privacy_Hdr: "#ot-pvcy-hdr",
        P_Active_Menu: "ot-active-menu",
        P_Desc_Container: ".ot-desc-cntr",
        P_Tab_Grp_Hdr: "ot-grp-hdr1",
        P_Search_Cntr: "#ot-search-cntr",
        P_Clr_Fltr_Txt: "#clear-filters-handler",
        P_Acc_Grp_Desc: ".ot-acc-grpdesc",
        P_Acc_Container: ".ot-acc-grpcntr",
        P_Line_Through: "line-through",
        P_Vendor_Search_Input: "#vendor-search-handler"
    }, $t = {
        P_Grp_Container: ".groups-container",
        P_Content: "#ot-content",
        P_Category_Header: ".category-header",
        P_Desc_Container: ".description-container",
        P_Label_Txt: ".label-text",
        P_Acc_Grp_Desc: ".ot-accordion-group-pc-container",
        P_Leg_Int_Hdr: ".leg-int-header",
        P_Not_Always_Active: "p:not(.ot-always-active)",
        P_Category_Grp: ".category-group",
        P_Category_Item: ".category-item",
        P_Sub_Grp_Cntr: ".cookie-subgroups-container",
        P_Acc_Container: ".ot-accordion-pc-container",
        P_Close_Btn: ".pc-close-button",
        P_Logo: ".pc-logo",
        P_Title: "#pc-title",
        P_Privacy_Txt: "#privacy-text",
        P_Privacy_Hdr: "#pc-privacy-header",
        P_Policy_Txt: "#pc-policy-text",
        P_Manage_Cookies_Txt: "#manage-cookies-text",
        P_Vendor_Title: "#vendors-list-title",
        P_Vendor_Title_Elm: "#vendors-list-title",
        P_Vendor_List: "#vendors-list",
        P_Vendor_Content: "#vendor-list-content",
        P_Vendor_Container: "#vendors-list-container",
        P_Ven_Bx: "vendor-box",
        P_Ven_Name: ".vendor-title",
        P_Ven_Link: ".vendor-privacy-notice",
        P_Ven_Ctgl: "ot-vendor-consent-tgl",
        P_Ven_Ltgl: "ot-leg-int-tgl",
        P_Ven_Ltgl_Only: "ot-leg-int-tgl-only",
        P_Ven_Opts: ".vendor-options",
        P_Triangle: "#ot-triangle",
        P_Fltr_Modal: "#ot-filter-modal",
        P_Fltr_Options: ".ot-group-options",
        P_Fltr_Option: ".ot-group-option",
        P_Select_Cntr: "#select-all-container",
        P_Host_Cntr: "#hosts-list-container",
        P_Host_Hdr: ".host-info",
        P_Host_Desc: ".host-description",
        P_Host_Opt: ".host-option-group",
        P_Host_Info: ".vendor-host",
        P_Ven_Dets: ".vendor-purpose-groups",
        P_Ven_Disc: ".ot-ven-disc",
        P_Gven_List: "#ot-gn-venlst",
        P_Arrw_Cntr: ".ot-arrow-container",
        P_Li_Hdr: ".leg-int-header",
        P_Li_Title: ".leg-int-title",
        P_Acc_Txt: ".accordion-text",
        P_Tgl_Cntr: ".ot-toggle-group",
        P_CBx_Cntr: ".ot-chkbox-container",
        P_Host_Title: ".host-title",
        P_Leg_Select_All: ".leg-int-sel-all-hdr",
        P_Leg_Header: ".leg-int-hdr",
        P_Cnsnt_Header: ".consent-hdr",
        P_Acc_Header: ".accordion-header",
        P_Sel_All_Vendor_Consent_Handler: "#select-all-vendor-leg-handler",
        P_Sel_All_Vendor_Leg_Handler: "#select-all-vendor-groups-handler",
        P_Sel_All_Host_Handler: "#select-all-hosts-groups-handler",
        P_Sel_All_Host_El: "select-all-hosts-input-container",
        P_Sel_All_Vendor_Consent_El: "select-all-vendors-input-container",
        P_Sel_All_Vendor_Leg_El: "select-all-vendors-leg-input-container",
        P_c_Name: "cookie-name-container",
        P_c_Host: "cookie-host-container",
        P_c_Duration: "cookie-duration-container",
        P_c_Type: "cookie-type-container",
        P_c_Category: "cookie-category-container",
        P_c_Desc: "cookie-description-container",
        P_Host_View_Cookies: ".host-view-cookies",
        P_Vendor_CheckBx: "vendor-chkbox",
        P_Vendor_LegCheckBx: "vendor-leg-chkbox",
        P_Host_UI: "hosts-list",
        P_Host_Cnt: "host-list-content",
        P_Host_Bx: "host-box",
        P_Ven_Lst_Cntr: ".category-vendors-list-container",
        P_Host_Lst_cntr: ".category-host-list-container",
        P_Subgrp_Desc: ".cookie-subgroups-description-legal",
        P_Subgp_ul: ".cookie-subgroups",
        P_Subgrp_li: ".cookie-subgroup",
        P_Subgrp_Tgl_Cntr: ".cookie-subgroup-toggle",
        P_Active_Menu: "active-group",
        P_Tab_Grp_Hdr: "group-toggle",
        P_Search_Cntr: "#search-container",
        P_Clr_Fltr_Txt: "#clear-filters-handler p",
        P_Vendor_Search_Input: "#vendor-search-handler"
    };
    function Zt() {}
    var eo, to = new (Zt.prototype.initializeBannerVariables = function(e) {
        var t, o = e.DomainData;
        Ft.iabType = o.IabType,
        t = o.PCTemplateUpgrade,
        Xt = t ? Qt : $t,
        Ft.init(e),
        Mt.showGeneralVendors = Rt.GeneralVendorsEnabled && Rt.PCTemplateUpgrade,
        Mt.showVendorService = Bt.fp.CookieV2VendorServiceScript && Rt.VendorServiceConfig.PCVSEnable && "IAB2" !== Rt.IabType && Rt.PCTemplateUpgrade,
        Mt.vsIsActiveAndOptOut = Mt.showVendorService && Rt.VendorServiceConfig.PCVSOptOut,
        Mt.genVenOptOutEnabled = Mt.showGeneralVendors && Rt.GenVenOptOut,
        Kt.addLogoUrls(),
        this.setGeolocationInCookies(),
        this.setOrUpdate3rdPartyIABConsentFlag()
    }
    ,
    Zt.prototype.initializeVendorInOverriddenVendors = function(e, t) {
        Rt.OverriddenVendors[e] = {
            disabledCP: [],
            disabledLIP: [],
            active: t,
            legInt: !1,
            consent: !1
        }
    }
    ,
    Zt.prototype.applyGlobalRestrictionsonNewVendor = function(e, t, o, n) {
        var r = Rt.GlobalRestrictions
          , i = Rt.OverriddenVendors;
        switch (i[t] || this.initializeVendorInOverriddenVendors(t, !0),
        i[t].disabledCP || (i[t].disabledCP = []),
        i[t].disabledLIP || (i[t].disabledLIP = []),
        r[o]) {
        case q.Disabled:
            n ? i[t].disabledCP.push(o) : i[t].disabledLIP.push(o),
            Rt.Publisher.restrictions[o][t] = q.Disabled;
            break;
        case q.Consent:
            n ? (i[t].consent = !0,
            Rt.Publisher.restrictions[o][t] = q.Consent) : (i[t].disabledLIP.push(o),
            this.checkFlexiblePurpose(e, t, o, !1));
            break;
        case q.LegInt:
            n ? (i[t].disabledCP.push(o),
            this.checkFlexiblePurpose(e, t, o, !0)) : (i[t].legInt = !0,
            Rt.Publisher.restrictions[o][t] = q.LegInt);
            break;
        case void 0:
            n ? i[t].consent = !0 : i[t].legInt = !0
        }
    }
    ,
    Zt.prototype.checkFlexiblePurpose = function(e, t, o, n) {
        e.flexiblePurposes.includes(o) ? (n ? Rt.OverriddenVendors[t].legInt = !0 : Rt.OverriddenVendors[t].consent = !0,
        Rt.Publisher.restrictions[o][t] = n ? q.LegInt : q.Consent) : Rt.Publisher.restrictions[o][t] = q.Disabled
    }
    ,
    Zt.prototype.removeInActiveVendorsForTcf = function(i) {
        var s = this
          , a = Mt.iabData.vendorListVersion
          , e = Rt.Publisher
          , l = Rt.GlobalRestrictionEnabled
          , c = !(0 === Object.keys(e).length || e && 0 === Object.keys(e.restrictions).length);
        Object.keys(i.vendors).forEach(function(t) {
            var o = i.vendors[t];
            o.iab2GVLVersion > a && (Rt.NewVendorsInactiveEnabled ? s.initializeVendorInOverriddenVendors(t, !1) : l && (o.purposes.forEach(function(e) {
                s.applyGlobalRestrictionsonNewVendor(o, t, e, !0)
            }),
            o.legIntPurposes.forEach(function(e) {
                s.applyGlobalRestrictionsonNewVendor(o, t, e, !1)
            })));
            var e = !1;
            Rt.IsIabThirdPartyCookieEnabled || (Ft.legIntSettings.PAllowLI ? Rt.OverriddenVendors[t] && !Rt.OverriddenVendors[t].active && (e = !0) : -1 < Rt.Vendors.indexOf(Number(t)) && (e = !0));
            var n = !o.purposes.length && !o.flexiblePurposes.length;
            Rt.OverriddenVendors[t] && !Rt.OverriddenVendors[t].consent && (n = !0);
            var r = !0;
            Ft.legIntSettings.PAllowLI && (!o.legIntPurposes.length || Rt.OverriddenVendors[t] && !Rt.OverriddenVendors[t].legInt || (r = !1)),
            !n || !r || o.specialPurposes.length || o.features.length || o.specialFeatures.length || (e = !0),
            !l && c && o.iab2GVLVersion > a && (e = !0),
            e && delete i.vendors[t]
        })
    }
    ,
    Zt.prototype.setPublisherRestrictions = function() {
        var e = Rt.Publisher;
        if (e && e.restrictions) {
            var s = this.iabStringSDK()
              , t = e.restrictions
              , a = Mt.iabData
              , l = Mt.oneTrustIABConsent.vendorList.vendors;
            Object.keys(t).forEach(function(n) {
                var r, i = t[n], e = Ft.iabGroups.purposes[n];
                e && (r = {
                    description: e.description,
                    purposeId: e.id,
                    purposeName: e.name
                }),
                Object.keys(i).forEach(function(e) {
                    if (Mt.vendorsSetting[e]) {
                        var t = Mt.vendorsSetting[e].arrIndex;
                        1 === i[e] && -1 === l[e].purposes.indexOf(Number(n)) ? a.vendors[t].purposes.push(r) : 2 === i[e] && -1 === l[e].legIntPurposes.indexOf(Number(n)) && a.vendors[t].legIntPurposes.push(r);
                        var o = s.purposeRestriction(Number(n), i[e]);
                        Mt.tcModel.publisherRestrictions.add(Number(e), o)
                    }
                })
            })
        }
    }
    ,
    Zt.prototype.populateVendorListTCF = function() {
        return d(this, void 0, void 0, function() {
            var t, o, n, r, i, s, a, l, c;
            return g(this, function(e) {
                switch (e.label) {
                case 0:
                    return t = this.iabStringSDK(),
                    o = Mt.iabData,
                    n = Kt.updateCorrectIABUrl(o.globalVendorListUrl),
                    r = !this.isIABCrossConsentEnabled(),
                    Kt.checkMobileOfflineRequest(Kt.getBannerVersionUrl()) ? [3, 1] : (Ft.mobileOnlineURL.push(n),
                    i = t.gvl(n, Mt.gvlObj),
                    [3, 3]);
                case 1:
                    return a = (s = t).gvl,
                    l = [null],
                    [4, Kt.otFetchOfflineFile(Gt.getRelativeURL(n, !0))];
                case 2:
                    i = a.apply(s, l.concat([e.sent()])),
                    e.label = 3;
                case 3:
                    return this.removeInActiveVendorsForTcf(i),
                    Mt.oneTrustIABConsent.vendorList = i,
                    this.assignIABDataWithGlobalVendorList(i),
                    c = Mt,
                    [4, t.tcModel(i)];
                case 4:
                    c.tcModel = e.sent(),
                    r && this.setPublisherRestrictions(),
                    Mt.tcModel.cmpId = parseInt(o.cmpId),
                    Mt.tcModel.cmpVersion = parseInt(o.cmpVersion);
                    try {
                        Mt.tcModel.consentLanguage = Mt.consentLanguage
                    } catch (e) {
                        Mt.tcModel.consentLanguage = "EN"
                    }
                    return Mt.tcModel.consentScreen = parseInt(o.consentScreen),
                    Mt.tcModel.isServiceSpecific = r,
                    Mt.tcModel.purposeOneTreatment = Ft.purposeOneTreatment,
                    Rt.PublisherCC ? Mt.tcModel.publisherCountryCode = Rt.PublisherCC : Mt.userLocation.country && (Mt.tcModel.publisherCountryCode = Mt.userLocation.country),
                    Mt.cmpApi = t.cmpApi(Mt.tcModel.cmpId, Mt.tcModel.cmpVersion, r, Rt.UseGoogleVendors ? {
                        getTCData: this.addtlConsentString,
                        getInAppTCData: this.addtlConsentString
                    } : void 0),
                    null !== this.alertBoxCloseDate() && !this.needReconsent() || this.resetTCModel(),
                    [2]
                }
            })
        })
    }
    ,
    Zt.prototype.resetTCModel = function() {
        var e = this.iabStringSDK()
          , t = Mt.tcModel.clone();
        if (t.unsetAll(),
        Ft.legIntSettings.PAllowLI) {
            var o = Ft.consentableIabGrps.filter(function(e) {
                return e.HasLegIntOptOut && e.Type === bt
            }).map(function(e) {
                return parseInt(Ft.iabGrpIdMap[e.CustomGroupId])
            })
              , n = Object.keys(Mt.vendorsSetting).filter(function(e) {
                return Mt.vendorsSetting[e].legInt
            }).map(function(e) {
                return parseInt(e)
            });
            t.purposeLegitimateInterests.set(o),
            t.vendorLegitimateInterests.set(n),
            t.isServiceSpecific && t.publisherLegitimateInterests.set(o)
        }
        Mt.cmpApi.update(e.tcString().encode(t), !0)
    }
    ,
    Zt.prototype.addtlConsentString = function(e, t, o) {
        t && t.tcString && (t.addtlConsent = "" + Mt.addtlConsentVersion + (Mt.isAddtlConsent ? Mt.addtlVendors.vendorConsent.join(".") : "")),
        "function" == typeof e ? e(t, o) : console.error("__tcfapi received invalid parameters.")
    }
    ,
    Zt.prototype.setIabData = function() {
        Mt.iabData = Bt.moduleInitializer.IabV2Data,
        Mt.iabData.consentLanguage = Mt.consentLanguage
    }
    ,
    Zt.prototype.assignIABDataWithGlobalVendorList = function(r) {
        var i = Rt.OverriddenVendors;
        Mt.iabData.vendorListVersion = r.vendorListVersion,
        Mt.iabData.vendors = [],
        Object.keys(r.vendors).forEach(function(n) {
            Mt.vendorsSetting[n] = {
                consent: !0,
                legInt: !0,
                arrIndex: 0,
                specialPurposesOnly: !1
            };
            var e = {}
              , t = r.vendors[n];
            e.vendorId = n,
            e.vendorName = t.name,
            e.policyUrl = t.policyUrl,
            e.cookieMaxAge = Gt.calculateCookieLifespan(t.cookieMaxAgeSeconds),
            e.usesNonCookieAccess = t.usesNonCookieAccess,
            e.deviceStorageDisclosureUrl = t.deviceStorageDisclosureUrl || null;
            var o = !t.legIntPurposes.length && !t.purposes.length && t.specialPurposes.length;
            Ft.legIntSettings.PAllowLI && ((!i[n] || i[n].legInt) && (i[n] || t.legIntPurposes.length) || o) || (Mt.vendorsSetting[n].legInt = !1),
            Ft.legIntSettings.PAllowLI && o && (Mt.vendorsSetting[n].specialPurposesOnly = !0),
            i[n] && !i[n].consent || !i[n] && !t.purposes.length && !t.flexiblePurposes.length ? Mt.vendorsSetting[n].consent = !1 : t.purposes.length || t.flexiblePurposes.length || (Mt.vendorsSetting[n].consent = !1),
            e.features = t.features.map(function(e) {
                var t, o = Ft.iabGroups.features[e];
                return o && (t = {
                    description: o.description,
                    featureId: o.id,
                    featureName: o.name
                }),
                t
            }),
            e.specialFeatures = r.vendors[n].specialFeatures.reduce(function(e, t) {
                var o = Ft.iabGroups.specialFeatures[t];
                return o && e.push({
                    description: o.description,
                    featureId: o.id,
                    featureName: o.name
                }),
                e
            }, []),
            e.purposes = r.vendors[n].purposes.reduce(function(e, t) {
                var o = Ft.iabGroups.purposes[t];
                return !o || i[n] && i[n].disabledCP && -1 !== i[n].disabledCP.indexOf(t) || e.push({
                    description: o.description,
                    purposeId: o.id,
                    purposeName: o.name
                }),
                e
            }, []),
            e.legIntPurposes = r.vendors[n].legIntPurposes.reduce(function(e, t) {
                var o = Ft.iabGroups.purposes[t];
                return !o || i[n] && i[n].disabledLIP && -1 !== i[n].disabledLIP.indexOf(t) || e.push({
                    description: o.description,
                    purposeId: o.id,
                    purposeName: o.name
                }),
                e
            }, []),
            e.specialPurposes = t.specialPurposes.map(function(e) {
                var t, o = Ft.iabGroups.specialPurposes[e];
                return o && (t = {
                    description: o.description,
                    purposeId: o.id,
                    purposeName: o.name
                }),
                t
            }),
            Mt.iabData.vendors.push(e),
            Mt.vendorsSetting[n].arrIndex = Mt.iabData.vendors.length - 1
        })
    }
    ,
    Zt.prototype.populateIABCookies = function() {
        return d(this, void 0, void 0, function() {
            return g(this, function(e) {
                switch (e.label) {
                case 0:
                    if (!this.isIABCrossConsentEnabled())
                        return [3, 5];
                    e.label = 1;
                case 1:
                    return e.trys.push([1, 3, , 4]),
                    [4, this.setIAB3rdPartyCookie(Oe.EU_CONSENT, "", 0, !0)];
                case 2:
                    return e.sent(),
                    [3, 4];
                case 3:
                    return e.sent(),
                    this.setIABCookieData(),
                    this.updateCrossConsentCookie(!1),
                    [3, 4];
                case 4:
                    return [3, 6];
                case 5:
                    to.needReconsent() || this.setIABCookieData(),
                    e.label = 6;
                case 6:
                    return [2]
                }
            })
        })
    }
    ,
    Zt.prototype.setIAB3rdPartyCookie = function(e, t, o, n) {
        var r = Rt.iabThirdPartyConsentUrl;
        try {
            if (r && document.body)
                return this.updateThirdPartyConsent(r, e, t, o, n);
            throw new ReferenceError
        } catch (e) {
            throw e
        }
    }
    ,
    Zt.prototype.setIABCookieData = function() {
        Mt.oneTrustIABConsent.IABCookieValue = xt.getCookie(Oe.EU_PUB_CONSENT)
    }
    ,
    Zt.prototype.updateThirdPartyConsent = function(n, r, i, s, a) {
        return d(this, void 0, void 0, function() {
            var t, o;
            return g(this, function(e) {
                return t = window.location.protocol + "//" + n + "/?name=" + r + "&value=" + i + "&expire=" + s + "&isFirstRequest=" + a,
                document.getElementById("onetrustIabCookie") ? (document.getElementById("onetrustIabCookie").contentWindow.location.replace(t),
                [2]) : (wt(o = document.createElement("iframe"), "display: none;", !0),
                o.id = "onetrustIabCookie",
                o.setAttribute("title", "OneTrust IAB Cookie"),
                o.src = t,
                document.body.appendChild(o),
                [2, new Promise(function(e) {
                    o.onload = function() {
                        Ft.thirdPartyiFrameResolve(),
                        Ft.thirdPartyiFrameLoaded = !0,
                        e()
                    }
                    ,
                    o.onerror = function() {
                        throw Ft.thirdPartyiFrameResolve(),
                        Ft.thirdPartyiFrameLoaded = !0,
                        e(),
                        new URIError
                    }
                }
                )])
            })
        })
    }
    ,
    Zt.prototype.setIABVendor = function(n, r) {
        if (void 0 === n && (n = !0),
        void 0 === r && (r = !1),
        Mt.iabData.vendors.forEach(function(e) {
            var t = e.vendorId;
            if (Ft.legIntSettings.PAllowLI) {
                var o = void 0;
                o = r ? n : !!Mt.vendorsSetting[t].consent && n,
                Mt.oneTrustIABConsent.vendors.push(t.toString() + ":" + o),
                Mt.oneTrustIABConsent.legIntVendors.push(t.toString() + ":" + Mt.vendorsSetting[t].legInt)
            } else
                Mt.oneTrustIABConsent.legIntVendors = [],
                Mt.oneTrustIABConsent.vendors.push(t.toString() + ":" + n)
        }),
        Rt.UseGoogleVendors) {
            var t = Mt.addtlVendors;
            Object.keys(Mt.addtlVendorsList).forEach(function(e) {
                n && (t.vendorSelected["" + e.toString()] = !0,
                t.vendorConsent.push("" + e.toString()))
            })
        }
    }
    ,
    Zt.prototype.setOrUpdate3rdPartyIABConsentFlag = function() {
        var e = this.getIABCrossConsentflagData();
        Rt.IsIabEnabled ? e && !this.needReconsent() || this.updateCrossConsentCookie(Rt.IsIabThirdPartyCookieEnabled) : e && !this.reconsentRequired() && "true" !== e || this.updateCrossConsentCookie(!1)
    }
    ,
    Zt.prototype.isIABCrossConsentEnabled = function() {
        return "true" === this.getIABCrossConsentflagData()
    }
    ,
    Zt.prototype.getIABCrossConsentflagData = function() {
        return xt.readCookieParam(Oe.OPTANON_CONSENT, Ee)
    }
    ,
    Zt.prototype.setGeolocationInCookies = function() {
        var e = xt.readCookieParam(Oe.OPTANON_CONSENT, Be);
        if (Mt.userLocation && !e && this.isAlertBoxClosedAndValid()) {
            var t = Mt.userLocation.country + ";" + Mt.userLocation.state;
            this.setUpdateGeolocationCookiesData(t)
        } else
            this.reconsentRequired() && e && this.setUpdateGeolocationCookiesData("")
    }
    ,
    Zt.prototype.iabStringSDK = function() {
        var e = Bt.moduleInitializer.otIABModuleData;
        if (Rt.IsIabEnabled && e)
            return {
                gvl: e.tcfSdkRef.gvl,
                tcModel: e.tcfSdkRef.tcModel,
                tcString: e.tcfSdkRef.tcString,
                cmpApi: e.tcfSdkRef.cmpApi,
                purposeRestriction: e.tcfSdkRef.purposeRestriction
            }
    }
    ,
    Zt.prototype.setUpdateGeolocationCookiesData = function(e) {
        xt.writeCookieParam(Oe.OPTANON_CONSENT, Be, e)
    }
    ,
    Zt.prototype.reconsentRequired = function() {
        return (Bt.moduleInitializer.MobileSDK || this.awaitingReconsent()) && this.needReconsent()
    }
    ,
    Zt.prototype.awaitingReconsent = function() {
        return "true" === xt.readCookieParam(Oe.OPTANON_CONSENT, _e)
    }
    ,
    Zt.prototype.needReconsent = function() {
        var e = this.alertBoxCloseDate()
          , t = Rt.LastReconsentDate;
        return e && t && new Date(t) > new Date(e)
    }
    ,
    Zt.prototype.updateCrossConsentCookie = function(e) {
        xt.writeCookieParam(Oe.OPTANON_CONSENT, Ee, e)
    }
    ,
    Zt.prototype.alertBoxCloseDate = function() {
        return xt.getCookie(Oe.ALERT_BOX_CLOSED)
    }
    ,
    Zt.prototype.isAlertBoxClosedAndValid = function() {
        return null !== this.alertBoxCloseDate() && !this.reconsentRequired()
    }
    ,
    Zt.prototype.generateLegIntButtonElements = function(e, t, o) {
        void 0 === o && (o = !1);
        var n = e ? "display:none;" : "";
        return '<div class="ot-leg-btn-container" data-group-id="' + t + '" data-el-id="' + t + '-leg-out" is-vendor="' + o + '">\n                    <button class="ot-obj-leg-btn-handler ' + (e ? "ot-leg-int-enabled ot-inactive-leg-btn" : "ot-active-leg-btn") + '">\n                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">\n                            <path fill="' + Rt.pcButtonTextColor + '" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/>\n                        </svg>\n                        <span>' + (e ? Ft.legIntSettings.PObjectLegIntText : Ft.legIntSettings.PObjectionAppliedText) + '\n                        </span>\n                    </button>\n                    <button\n                        class="ot-remove-objection-handler"\n                            data-style="color:' + Rt.pcButtonColor + "; " + n + '"\n                    >\n                        ' + Ft.legIntSettings.PRemoveObjectionText + "\n                    </button>\n                </div>"
    }
    ,
    Zt.prototype.syncAlertBoxCookie = function(e) {
        var t = Rt.ReconsentFrequencyDays;
        xt.setCookie(Oe.ALERT_BOX_CLOSED, e, t, !1, new Date(e))
    }
    ,
    Zt.prototype.syncCookieExpiry = function() {
        if (Mt.syncRequired) {
            var e = Rt.ReconsentFrequencyDays
              , t = xt.getCookie(Oe.ALERT_BOX_CLOSED)
              , o = xt.getCookie(Oe.OPTANON_CONSENT);
            xt.setCookie(Oe.OPTANON_CONSENT, o, e, !1, new Date(t)),
            to.needReconsent() && xt.removeAlertBox();
            var n = xt.getCookie(Oe.EU_PUB_CONSENT);
            n && (to.isIABCrossConsentEnabled() ? xt.removeIab2() : xt.setCookie(Oe.EU_PUB_CONSENT, n, e, !1, new Date(t)));
            var r = xt.getCookie(Oe.ADDITIONAL_CONSENT_STRING);
            r && xt.setCookie(Oe.ADDITIONAL_CONSENT_STRING, r, e, !1, new Date(t))
        }
    }
    ,
    Zt.prototype.syncOtPreviewCookie = function() {
        var e = xt.getCookie(Oe.OT_PREVIEW);
        e && xt.setCookie(Oe.OT_PREVIEW, e, 1, !1)
    }
    ,
    Zt.prototype.dispatchConsentEvent = function() {
        window.dispatchEvent(new CustomEvent("OTConsentApplied",{
            OTConsentApplied: "yes"
        }))
    }
    ,
    Zt), oo = function() {};
    var no, ro = (io.prototype.isAlwaysActiveGroup = function(e) {
        if (this.getGrpStatus(e)) {
            var t = this.getGrpStatus(e).toLowerCase();
            return e.Parent && t !== qe && (t = this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase()),
            t === qe
        }
        return !0
    }
    ,
    io.prototype.getGrpStatus = function(e) {
        return e && e.Status ? Ft.DNTEnabled && e.IsDntEnabled ? ze : e.Status : ""
    }
    ,
    io.prototype.getParentGroup = function(t) {
        if (t) {
            var e = Rt.Groups.filter(function(e) {
                return e.OptanonGroupId === t
            });
            return 0 < e.length ? e[0] : null
        }
        return null
    }
    ,
    io.prototype.checkIfGroupHasConsent = function(t) {
        var e = Mt.groupsConsent
          , o = Gt.findIndex(e, function(e) {
            return e.split(":")[0] === t.CustomGroupId
        });
        return -1 < o && "1" === e[o].split(":")[1]
    }
    ,
    io.prototype.checkIsActiveByDefault = function(e) {
        if (this.getGrpStatus(e)) {
            var t = this.getGrpStatus(e).toLowerCase();
            return e.Parent && t !== qe && (t = this.getGrpStatus(this.getParentGroup(e.Parent)).toLowerCase()),
            t === qe || t === Ue || t === Me || t === ze && !Ft.DNTEnabled
        }
        return !0
    }
    ,
    io.prototype.getGroupById = function(e) {
        for (var t = null, o = 0, n = Rt.Groups; o < n.length; o++) {
            for (var r = n[o], i = 0, s = C(r.SubGroups, [r]); i < s.length; i++) {
                var a = s[i];
                if (a.CustomGroupId === e) {
                    t = a;
                    break
                }
            }
            if (t)
                break
        }
        return t
    }
    ,
    io.prototype.isSoftOptInGrp = function(e) {
        if (e) {
            var t = e && !e.Parent ? e : no.getParentGroup(e.Parent);
            return "inactive landingpage" === no.getGrpStatus(t).toLowerCase()
        }
        return !1
    }
    ,
    io.prototype.isOptInGrp = function(e) {
        return !!e && "inactive" === no.getGrpStatus(e).toLowerCase()
    }
    ,
    io.prototype.getParentByGrp = function(e) {
        return e.Parent ? this.getGroupById(e.Parent) : null
    }
    ,
    io.prototype.getVSById = function(e) {
        return Mt.getVendorsInDomain().get(e)
    }
    ,
    io.prototype.getGrpByVendorId = function(e) {
        var t = null;
        return Mt.getVendorsInDomain().has(e) && (t = Mt.getVendorsInDomain().get(e).groupRef),
        t
    }
    ,
    io);
    function io() {}
    var so, ao = (lo.prototype.ensureConsentId = function(e, t) {
        var o, n = !1, r = xt.readCookieParam(Oe.OPTANON_CONSENT, Ve, !0);
        if (o = !e && t ? (n = !0,
        1) : 0,
        r) {
            var i = parseInt(xt.readCookieParam(Oe.OPTANON_CONSENT, we), 10);
            isNaN(i) || (o = t ? ++i : i,
            n = !1)
        } else
            r = Gt.generateUUID(),
            xt.writeCookieParam(Oe.OPTANON_CONSENT, Ve, r);
        return xt.writeCookieParam(Oe.OPTANON_CONSENT, we, o),
        {
            id: r,
            count: o,
            addDfltInt: n
        }
    }
    ,
    lo.prototype.isAnonymousConsent = function() {
        var e = !0
          , t = Mt.dsParams;
        return t && t.hasOwnProperty("isAnonymous") && (e = t.isAnonymous),
        e
    }
    ,
    lo.prototype.isAuthUsr = function(e) {
        Mt.consentPreferences ? xt.writeCookieParam(Oe.OPTANON_CONSENT, "iType", "") : xt.writeCookieParam(Oe.OPTANON_CONSENT, "iType", "" + U[e])
    }
    ,
    lo.prototype.createConsentTxn = function(e, t, o, n) {
        void 0 === t && (t = ""),
        void 0 === o && (o = !1),
        void 0 === n && (n = !0);
        var r = this.ensureConsentId(e, n)
          , i = Rt.ConsentIntegration
          , s = window.navigator.userAgent
          , a = /OneTrustBot/.test(s);
        if (i.ConsentApi && i.RequestInformation && r.id && !a) {
            var l = Bt.moduleInitializer;
            so.noOptOutToogle = l.TenantFeatures.CookieV2NoOptOut;
            var c = Mt.bannerCloseSource;
            so.isCloseByIconOrLink = c === f.BannerCloseButton || c === f.ContinueWithoutAcceptingButton;
            var d = {
                requestInformation: i.RequestInformation,
                identifier: r.id,
                customPayload: {
                    Interaction: r.count,
                    AddDefaultInteraction: r.addDfltInt
                },
                isAnonymous: this.isAnonymousConsent(),
                test: l.ScriptType === We || l.ScriptType === Je,
                purposes: this.getConsetPurposes(e),
                dsDataElements: {}
            };
            Mt.isV2Stub && (d.syncGroup = Mt.syncGrpId,
            "IAB2" !== Ft.iabType || to.isIABCrossConsentEnabled() || (d.tcStringV2 = xt.getCookie(Oe.EU_PUB_CONSENT)),
            Rt.UseGoogleVendors && (d.gacString = xt.getCookie(Oe.ADDITIONAL_CONSENT_STRING)));
            var u = no.getGroupById(Rt.AdvancedAnalyticsCategory);
            if (u && this.canSendAdvancedAnalytics(d.purposes, u) && (d.dsDataElements = {
                InteractionType: t,
                Country: Mt && Mt.userLocation ? Mt.userLocation.country : "",
                UserAgent: s
            }),
            !l.MobileSDK && n && d.purposes.length) {
                var p = JSON.stringify(d);
                e && navigator.sendBeacon ? (navigator.sendBeacon(i.ConsentApi, p),
                to.dispatchConsentEvent()) : !o && Ft.apiSource !== P.UpdateConsent && Mt.consentInteractionType === t || (Mt.isV2Stub && t && this.isAuthUsr(t),
                Ut.ajax({
                    url: i.ConsentApi,
                    type: "post",
                    dataType: "json",
                    contentType: "application/json",
                    data: JSON.stringify(d),
                    sync: e,
                    success: function() {
                        to.dispatchConsentEvent()
                    },
                    error: function() {
                        to.dispatchConsentEvent()
                    }
                }))
            }
            Ft.pubDomainData.ConsentIntegrationData = {
                consentApi: i.ConsentApi,
                consentPayload: d
            }
        }
        Mt.consentInteractionType = t
    }
    ,
    lo.prototype.getGrpDetails = function(e, i) {
        var s = [];
        return e.forEach(function(e) {
            var t = e.split(":")
              , o = t[0]
              , n = "true" === t[1] ? "1" : "0"
              , r = so.getOptanonIdForIabGroup(o, i);
            s.push(r + ":" + n)
        }),
        s
    }
    ,
    lo.prototype.getOptanonIdForIabGroup = function(e, t) {
        var o;
        return t === A.Purpose ? o = "IABV2_" + e : t === A.SpecialFeature && (o = "ISFV2_" + e),
        o
    }
    ,
    lo.prototype.getConsetPurposes = function(r) {
        var e, t, i = this, s = [], o = [], n = Mt.oneTrustIABConsent;
        return e = n && n.purpose ? this.getGrpDetails(n.purpose, A.Purpose) : [],
        t = n && n.specialFeatures ? this.getGrpDetails(n.specialFeatures, A.SpecialFeature) : [],
        o = C(n.specialPurposes, n.features),
        C(Mt.groupsConsent, e, t).forEach(function(e) {
            var t = e.split(":")
              , o = no.getGroupById(t[0]);
            if (o && o.PurposeId) {
                var n = i.getTransactionType(o, t, r);
                s.push({
                    Id: o.PurposeId,
                    TransactionType: n.txnType
                }),
                i.setVSConsentByGroup(o, n).forEach(function(e) {
                    return s.push(e)
                })
            }
        }),
        o.forEach(function(e) {
            e.purposeId && s.push({
                Id: e.purposeId,
                TransactionType: He
            })
        }),
        Mt.bannerCloseSource = f.Unknown,
        s
    }
    ,
    lo.prototype.setVSConsentByGroup = function(e, o) {
        var n = [];
        return Mt.showVendorService && e.VendorServices && e.VendorServices.forEach(function(e) {
            var t;
            t = o.useOwn ? Mt.vsConsent.get(e.CustomVendorServiceId) ? Ne : De : o.txnType,
            n.push({
                Id: e.PurposeId,
                TransactionType: t
            })
        }),
        n
    }
    ,
    lo.prototype.getTransactionType = function(e, t, o) {
        var n = {
            txnType: He,
            useOwn: !1
        };
        return e.Status === qe ? n.txnType = He : e.Status === je && so.isCloseByIconOrLink || o ? n.txnType = Fe : e.Status === Me && so.isCloseByIconOrLink ? n.txnType = so.noOptOutToogle ? Re : Ne : (n.useOwn = !0,
        n.txnType = this.getTxnType(t[1])),
        n
    }
    ,
    lo.prototype.getTxnType = function(e) {
        return "0" === e ? De : Ne
    }
    ,
    lo.prototype.isPurposeConsentedTo = function(e, t) {
        var o = [Ne, He];
        return e.some(function(e) {
            return e.Id === t.PurposeId && -1 !== o.indexOf(e.TransactionType)
        })
    }
    ,
    lo.prototype.canSendAdvancedAnalytics = function(t, e) {
        var o = this;
        return "BRANCH" === e.Type || "IAB2_STACK" === e.Type ? e.SubGroups.length && e.SubGroups.every(function(e) {
            return o.isPurposeConsentedTo(t, e)
        }) : this.isPurposeConsentedTo(t, e)
    }
    ,
    lo);
    function lo() {}
    var co, uo = (po.prototype.isIabCookieValid = function() {
        var e = null;
        switch (Ft.iabType) {
        case "IAB2":
            e = xt.getCookie("eupubconsent-v2")
        }
        return null !== e
    }
    ,
    po.prototype.iabTypeIsChanged = function() {
        this.isIabCookieValid() || (xt.removeAlertBox(),
        xt.removeIab1())
    }
    ,
    po.prototype.initializeIABModule = function() {
        return d(this, void 0, void 0, function() {
            return g(this, function(e) {
                switch (e.label) {
                case 0:
                    return Rt.IsIabEnabled ? (Bt.moduleInitializer.otIABModuleData = window.otIabModule,
                    to.setIabData(),
                    [4, to.populateVendorListTCF()]) : [3, 2];
                case 1:
                    return e.sent(),
                    to.isIABCrossConsentEnabled() || this.iabTypeIsChanged(),
                    to.populateIABCookies(),
                    Rt.UseGoogleVendors && this.removeInActiveAddtlVendors(),
                    [3, 3];
                case 2:
                    xt.removeIab1(),
                    e.label = 3;
                case 3:
                    return [2]
                }
            })
        })
    }
    ,
    po.prototype.removeInActiveAddtlVendors = function() {
        var e = Rt.OverridenGoogleVendors;
        for (var t in Mt.addtlVendorsList)
            e && e[t] && !e[t].active && delete Mt.addtlVendorsList[t]
    }
    ,
    po.prototype.getIABConsentData = function() {
        var e = Mt.oneTrustIABConsent
          , t = to.iabStringSDK().tcString();
        Mt.tcModel.unsetAllPurposeConsents(),
        Mt.tcModel.unsetAllVendorConsents(),
        Mt.tcModel.unsetAllVendorLegitimateInterests(),
        Mt.tcModel.unsetAllSpecialFeatureOptins(),
        Mt.tcModel.unsetAllPurposeLegitimateInterests(),
        Mt.tcModel.publisherConsents.empty(),
        Mt.tcModel.publisherLegitimateInterests.empty(),
        Mt.tcModel.purposeConsents.set(Gt.getActiveIdArray(e.purpose)),
        Mt.tcModel.publisherConsents.set(Gt.getActiveIdArray(e.purpose));
        var o = Ft.legIntSettings.PAllowLI ? Gt.getActiveIdArray(e.legimateInterest) : [];
        Mt.tcModel.purposeLegitimateInterests.set(o),
        Mt.tcModel.publisherLegitimateInterests.set(o),
        Mt.tcModel.vendorConsents.set(Gt.getActiveIdArray(Gt.distinctArray(e.vendors))),
        Ft.legIntSettings.PAllowLI && !o.length && (e.legIntVendors = []),
        Mt.tcModel.vendorLegitimateInterests.set(Gt.getActiveIdArray(Gt.distinctArray(e.legIntVendors))),
        Mt.tcModel.specialFeatureOptins.set(Gt.getActiveIdArray(e.specialFeatures));
        var n = new Date
          , r = new Date(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate(),0,0,0);
        Mt.tcModel.lastUpdated = r,
        Mt.tcModel.created = r;
        var i = t.encode(Mt.tcModel);
        return Mt.cmpApi.update(i, !1),
        i
    }
    ,
    po.prototype.decodeTCString = function(e) {
        return to.iabStringSDK().tcString().decode(e)
    }
    ,
    po.prototype.getVendorConsentsRequestV2 = function(e) {
        var o;
        return window.__tcfapi("getInAppTCData", 2, function(e, t) {
            o = [e, t]
        }),
        e.apply(this, o)
    }
    ,
    po.prototype.getPingRequestForTcf = function(e) {
        var t;
        return window.__tcfapi("ping", 2, function(e) {
            t = [e]
        }),
        e.apply(this, t)
    }
    ,
    po.prototype.populateVendorAndPurposeFromCookieData = function() {
        var r = Mt.oneTrustIABConsent
          , e = co.decodeTCString(r.IABCookieValue)
          , i = {}
          , s = {};
        Ft.iabGrps.forEach(function(e) {
            e.Type === bt ? i[Ft.iabGrpIdMap[e.CustomGroupId]] = e : e.Type === Pt && (s[Ft.iabGrpIdMap[e.CustomGroupId]] = e)
        });
        var a = [];
        e.vendorConsents.forEach(function(e, t) {
            var o = e;
            Mt.vendorsSetting[t] && Mt.vendorsSetting[t].consent || !e || (a.push(t),
            o = !1),
            r.vendors.push(t + ":" + o)
        }),
        e.vendorConsents.unset(a),
        a = [],
        e.vendorLegitimateInterests.forEach(function(e, t) {
            var o = e;
            Mt.vendorsSetting[t] && Mt.vendorsSetting[t].legInt || !e || (a.push(t),
            o = !1),
            r.legIntVendors.push(t + ":" + o)
        }),
        e.vendorLegitimateInterests.unset(a),
        a = [],
        e.purposeConsents.forEach(function(e, o) {
            var t = e;
            i[o] && i[o].HasConsentOptOut || !e || (a.push(o),
            t = !1);
            var n = Gt.findIndex(r.purpose, function(e, t) {
                return e.split(":")[0] === o.toString()
            });
            -1 === n ? r.purpose.push(o + ":" + t) : r.purpose[n] = o + ":" + t
        }),
        e.purposeConsents.unset(a),
        e.publisherConsents.unset(a),
        a = [],
        e.specialFeatureOptins.forEach(function(e, o) {
            var t = e;
            s[o] && s[o].HasConsentOptOut || !e || (a.push(o),
            t = !1);
            var n = Gt.findIndex(r.specialFeatures, function(e, t) {
                return e.split(":")[0] === o.toString()
            });
            -1 === n ? r.specialFeatures.push(o + ":" + t) : r.specialFeatures[n] = o + ":" + t
        }),
        e.specialFeatureOptins.unset(a),
        a = [],
        e.purposeLegitimateInterests.forEach(function(e, o) {
            var t = e;
            i[o] && i[o].HasLegIntOptOut && Ft.legIntSettings.PAllowLI || !e || (a.push(o),
            t = !1);
            var n = Gt.findIndex(r.legimateInterest, function(e, t) {
                return e.split(":")[0] === o.toString()
            });
            -1 === n ? r.legimateInterest.push(o + ":" + t) : r.legimateInterest[n] = o + ":" + t
        }),
        e.purposeLegitimateInterests.unset(a),
        e.publisherLegitimateInterests.unset(a),
        this.syncBundleAndStack(),
        e.gvl = Mt.tcModel.gvl,
        e.isServiceSpecific = !to.isIABCrossConsentEnabled(),
        Mt.tcModel = e;
        var t = to.iabStringSDK().tcString().encode(e);
        to.isAlertBoxClosedAndValid() ? (r.IABCookieValue !== t && (r.IABCookieValue = t,
        to.isIABCrossConsentEnabled() ? to.setIAB3rdPartyCookie(Oe.EU_CONSENT, r.IABCookieValue, Rt.ReconsentFrequencyDays, !1) : xt.setCookie(Oe.EU_PUB_CONSENT, r.IABCookieValue, Rt.ReconsentFrequencyDays)),
        Mt.cmpApi.update(t, !1)) : to.resetTCModel()
    }
    ,
    po.prototype.syncBundleAndStack = function() {
        var e = xt.readCookieParam(Oe.OPTANON_CONSENT, "groups");
        Mt.groupsConsent = Gt.strToArr(e),
        Rt.Groups.forEach(function(t) {
            if (t.Type === vt || t.Type === At) {
                var e = Kt.isBundleOrStackActive(t)
                  , o = Gt.findIndex(Mt.groupsConsent, function(e) {
                    return e.split(":")[0] === t.CustomGroupId
                })
                  , n = t.CustomGroupId + ":" + Number(e);
                -1 < o ? Mt.groupsConsent[o] = n : Mt.groupsConsent.push(n)
            }
        }),
        xt.writeCookieParam(Oe.OPTANON_CONSENT, "groups", Mt.groupsConsent.join(","))
    }
    ,
    po.prototype.populateGoogleConsent = function() {
        if (Rt.UseGoogleVendors) {
            var e = xt.getCookie(Oe.ADDITIONAL_CONSENT_STRING);
            e && (Mt.isAddtlConsent = !0,
            Mt.addtlVendors.vendorConsent = e.replace(Mt.addtlConsentVersion, "").split("."))
        }
    }
    ,
    po.prototype.isInitIABCookieData = function(e) {
        return "init" === e || to.needReconsent()
    }
    ,
    po.prototype.updateFromGlobalConsent = function(e) {
        var t = Mt.oneTrustIABConsent;
        t.IABCookieValue = e,
        t.purpose = t.purpose || [],
        t.specialFeatures = t.specialFeatures || [],
        t.legIntVendors = [],
        t.legimateInterest = t.legimateInterest || [],
        t.vendors = [],
        co.populateVendorAndPurposeFromCookieData(),
        xt.setCookie(Oe.EU_PUB_CONSENT, "", -1)
    }
    ,
    po);
    function po() {}
    var ho, go = "groups", Co = "hosts", yo = "genVendors", fo = "vs", vo = (ko.prototype.writeHstParam = function(e, t) {
        void 0 === t && (t = null),
        xt.writeCookieParam(e, "hosts", Gt.arrToStr(t || Mt.hostsConsent))
    }
    ,
    ko.prototype.writeGenVenCookieParam = function(e) {
        var t = Rt.GeneralVendors
          , o = Mt.genVendorsConsent
          , n = "";
        t.forEach(function(e) {
            n += e.VendorCustomId + ":" + (o[e.VendorCustomId] ? "1" : "0") + ","
        }),
        xt.writeCookieParam(e, "genVendors", n)
    }
    ,
    ko.prototype.writeVSConsentCookieParam = function(e) {
        var o = "";
        Mt.vsConsent.forEach(function(e, t) {
            return o += t + ":" + (e ? "1" : "0") + ","
        }),
        o = o.slice(0, -1),
        xt.writeCookieParam(e, fo, o)
    }
    ,
    ko.prototype.updateGroupsInCookie = function(e, t) {
        void 0 === t && (t = null),
        xt.writeCookieParam(e, "groups", Gt.arrToStr(t || Mt.groupsConsent))
    }
    ,
    ko.prototype.writeGrpParam = function(e, t) {
        void 0 === t && (t = null),
        this.updateGroupsInCookie(e, t),
        Rt.IsIabEnabled && to.isAlertBoxClosedAndValid() && this.insertOrUpdateIabCookies()
    }
    ,
    ko.prototype.insertOrUpdateIabCookies = function() {
        var e = Mt.oneTrustIABConsent;
        if (e.purpose && e.vendors) {
            Mt.isAddtlConsent = Rt.UseGoogleVendors,
            e.IABCookieValue = co.getIABConsentData();
            var t = Rt.ReconsentFrequencyDays;
            to.isIABCrossConsentEnabled() ? to.setIAB3rdPartyCookie(Oe.EU_CONSENT, e.IABCookieValue, t, !1) : (xt.setCookie(Oe.EU_PUB_CONSENT, e.IABCookieValue, t),
            Rt.UseGoogleVendors && xt.setCookie(Oe.ADDITIONAL_CONSENT_STRING, "" + Mt.addtlConsentVersion + Mt.addtlVendors.vendorConsent.join("."), t))
        }
    }
    ,
    ko);
    function ko() {}
    var mo, bo = (Po.prototype.initGenVendorConsent = function() {
        var n = this;
        if (Rt.GenVenOptOut) {
            var e = Ft.consentableGrps
              , t = xt.readCookieParam(Oe.OPTANON_CONSENT, "genVendors");
            t ? (Mt.genVendorsConsent = {},
            t.split(",").forEach(function(e) {
                if (e) {
                    var t = e.split(":");
                    "1" === t[1] && (Mt.genVendorsConsent[t[0]] = !0)
                }
            })) : (Mt.genVendorsConsent = {},
            e.forEach(function(e) {
                var o = Mt.syncRequired ? no.checkIfGroupHasConsent(e) : no.checkIsActiveByDefault(e);
                e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function(e) {
                    var t = n.isGenVenPartOfAlwaysActiveGroup(e);
                    Mt.genVendorsConsent[e] = t || o
                })
            }))
        } else
            Mt.genVendorsConsent = {},
            ho.writeGenVenCookieParam(Oe.OPTANON_CONSENT)
    }
    ,
    Po.prototype.populateGenVendorLists = function() {
        Ft.consentableGrps.forEach(function(e) {
            e.GeneralVendorsIds && (no.isAlwaysActiveGroup(e) ? e.GeneralVendorsIds.forEach(function(e) {
                Mt.alwaysActiveGenVendors.push(e)
            }) : no.isOptInGrp(e) ? e.GeneralVendorsIds.forEach(function(e) {
                Mt.optInGenVendors.push(e)
            }) : no.isSoftOptInGrp(e) && e.GeneralVendorsIds.forEach(function(e) {
                Mt.optInGenVendors.includes(e) || Mt.softOptInGenVendors.push(e)
            }))
        })
    }
    ,
    Po.prototype.updateGenVendorStatus = function(e, t) {
        Mt.genVendorsConsent[e] = t || this.isGenVenPartOfAlwaysActiveGroup(e)
    }
    ,
    Po.prototype.isGenVenPartOfAlwaysActiveGroup = function(e) {
        return Mt.alwaysActiveGenVendors.includes(e)
    }
    ,
    Po);
    function Po() {}
    var So, Ao = (To.prototype.synchroniseCookieGroupData = function(e) {
        var t = xt.readCookieParam(Oe.OPTANON_CONSENT, "groups")
          , a = Gt.strToArr(t)
          , l = Gt.strToArr(t.replace(/:0|:1/g, ""))
          , c = to.needReconsent()
          , d = !to.isAlertBoxClosedAndValid()
          , u = !1
          , p = !1;
        e.forEach(function(e) {
            var t = e.CustomGroupId
              , o = e.Type === vt || e.Type === At;
            if (-1 === Gt.indexOf(l, t)) {
                if (o && Rt.IsIabEnabled)
                    return;
                var n;
                n = e.Type === vt ? Kt.isBundleOrStackActive(e, a) : (u = !0,
                no.checkIsActiveByDefault(e)),
                p = !0,
                a.push(t + (n ? ":1" : ":0"))
            } else {
                if (Ft.gpcEnabled && e.IsGpcEnabled && (d || c))
                    -1 < (i = a.indexOf(t + ":1")) && (p = !0,
                    a[i] = t + ":0");
                else if (Ft.gpcValueChanged && d) {
                    var r = no.checkIsActiveByDefault(e);
                    -1 < (i = a.indexOf(t + ":" + (r ? "0" : "1"))) && (p = !0,
                    a[i] = t + (r ? ":1" : ":0"))
                }
                if (c && "false" === to.getIABCrossConsentflagData() && o) {
                    var i, s = Kt.isBundleOrStackActive(e, a);
                    -1 < (i = a.indexOf(t + ":" + (s ? "0" : "1"))) && (p = !0,
                    a[i] = t + (s ? ":1" : ":0"))
                }
            }
        });
        for (var o = a.length, n = function() {
            var t = a[o].replace(/:0|:1/g, "");
            Rt.Groups.some(function(e) {
                return (!c || e.Type !== At) && (e.CustomGroupId === t || e.SubGroups.some(function(e) {
                    return e.CustomGroupId === t
                }))
            }) || (p = !0,
            a.splice(o, 1))
        }; o--; )
            n();
        p && (Mt.fireOnetrustGrp = !0,
        ho.updateGroupsInCookie(Oe.OPTANON_CONSENT, a),
        Mt.syncRequired && u && xt.removeAlertBox())
    }
    ,
    To.prototype.groupHasConsent = function(t) {
        var e = Gt.strToArr(xt.readCookieParam(Oe.OPTANON_CONSENT, "groups"))
          , o = Gt.findIndex(e, function(e) {
            return e.split(":")[0] === t.CustomGroupId
        });
        return -1 < o && "1" === e[o].split(":")[1]
    }
    ,
    To.prototype.synchroniseCookieHostData = function() {
        var n = this
          , e = xt.readCookieParam(Oe.OPTANON_CONSENT, "hosts")
          , r = Gt.strToArr(e)
          , i = Gt.strToArr(e.replace(/:0|:1/g, ""))
          , s = !1;
        Rt.Groups.forEach(function(e) {
            C(e.SubGroups, [e]).forEach(function(o) {
                o.Hosts.length && o.Hosts.forEach(function(e) {
                    if (-1 === Gt.indexOf(i, e.HostId)) {
                        s = !0;
                        var t = Mt.syncRequired ? n.groupHasConsent(o) : no.checkIsActiveByDefault(o);
                        r.push(e.HostId + (t ? ":1" : ":0"))
                    }
                })
            })
        });
        for (var o = r.length, t = function() {
            var t = r[o].replace(/:0|:1/g, "");
            Rt.Groups.some(function(e) {
                return C(e.SubGroups, [e]).some(function(e) {
                    return e.Hosts.some(function(e) {
                        return e.HostId === t
                    })
                })
            }) || (s = !0,
            r.splice(o, 1))
        }; o--; )
            t();
        s && (Mt.fireOnetrustGrp = !0,
        ho.writeHstParam(Oe.OPTANON_CONSENT, r))
    }
    ,
    To.prototype.toggleGroupHosts = function(e, t) {
        var o = this;
        e.Hosts.forEach(function(e) {
            o.updateHostStatus(e, t)
        })
    }
    ,
    To.prototype.toggleGroupGenVendors = function(e, t) {
        e.GeneralVendorsIds.forEach(function(e) {
            mo.updateGenVendorStatus(e, t)
        })
    }
    ,
    To.prototype.updateHostStatus = function(t, e) {
        var o = Gt.findIndex(Mt.hostsConsent, function(e) {
            return !t.isActive && t.HostId === e.replace(/:0|:1/g, "")
        });
        if (-1 < o) {
            var n = e || this.isHostPartOfAlwaysActiveGroup(t.HostId);
            Mt.hostsConsent[o] = t.HostId + ":" + (n ? "1" : "0")
        }
    }
    ,
    To.prototype.isHostPartOfAlwaysActiveGroup = function(e) {
        return Mt.oneTrustAlwaysActiveHosts.includes(e)
    }
    ,
    To);
    function To() {}
    var Io, Lo = function() {
        this.assets = function() {
            return {
                name: "otCookiePolicy",
                html: '<div class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <h5 class="cookies-used-header">Cookies Used</h5>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description"><span\n                            class="ot-mobile-border"></span>These\n                        cookies are used to make sure\n                        visitor page requests are routed to the same server in all browsing sessions.</td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n    <section class="subgroup">\n        <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n        <p class="ot-sdk-cookie-policy-group-desc">description</p>\n        <h6 class="cookies-used-header">Cookies Used</h6>\n        <ul class="cookies-list">\n            <li>Cookie 1</li>\n        </ul>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="table-header host">Host</th>\n                    <th scope="col" class="table-header host-description">Host Description</th>\n                    <th scope="col" class="table-header cookies">Cookies</th>\n                    <th scope="col" class="table-header life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>ARRAffinity</li>\n                        </ul>\n                    </td>\n                    <td class="life-span-td" data-label="Life Span"><span class="ot-mobile-border"></span>\n                        <ul>\n                            <li>100 days</li>\n                        </ul>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>\n\x3c!-- New Cookies policy Link--\x3e\n<div id="ot-sdk-cookie-policy-v2" class="ot-sdk-cookie-policy ot-sdk-container">\n    <h3 id="cookie-policy-title" class="ot-sdk-cookie-policy-title">Cookie Tracking Table</h3>\n    <div id="cookie-policy-description"></div>\n    <section>\n        <h4 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h4>\n        <p class="ot-sdk-cookie-policy-group-desc">group description</p>\n        <section class="ot-sdk-subgroup">\n            <ul>\n                <li>\n                    <h5 class="ot-sdk-cookie-policy-group">Strictly Necessary Cookies</h5>\n                    <p class="ot-sdk-cookie-policy-group-desc">description</p>\n                </li>\n            </ul>\n        </section>\n        <table>\n            <caption class="ot-scrn-rdr">caption</caption>\n            <thead>\n                <tr>\n                    <th scope="col" class="ot-table-header ot-host">Host</th>\n                    <th scope="col" class="ot-table-header ot-host-description">Host Description</th>\n                    <th scope="col" class="ot-table-header ot-cookies">Cookies</th>\n                    <th scope="col" class="ot-table-header ot-cookies-type">Type</th>\n                    <th scope="col" class="ot-table-header ot-life-span">Life Span</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td class="ot-host-td" data-label="Host"><span class="ot-mobile-border"></span><a\n                            href="https://cookiepedia.co.uk/host/.app.onetrust.com?_ga=2.157675898.1572084395.1556120090-1266459230.1555593548&_ga=2.157675898.1572084395.1556120090-1266459230.1555593548">Azure</a>\n                    </td>\n                    <td class="ot-host-description-td" data-label="Host Description">\n                        <span class="ot-mobile-border"></span>\n                        cookies are used to make sureng sessions.\n                    </td>\n                    <td class="ot-cookies-td" data-label="Cookies">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-td-content">ARRAffinity</span>\n                    </td>\n                    <td class="ot-cookies-type" data-label="Type">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-cookies-type-td-content">1st Party</span>\n                    </td>\n                    <td class="ot-life-span-td" data-label="Life Span">\n                        <span class="ot-mobile-border"></span>\n                        <span class="ot-life-span-td-content">100 days</span>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </section>\n</div>',
                css: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-left:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-right:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:left}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;left:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-left:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;left:6px;width:40%;padding-right:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;left:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-right:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;left:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-right:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}",
                cssRTL: ".ot-sdk-cookie-policy{font-family:inherit;font-size:16px}.ot-sdk-cookie-policy.otRelFont{font-size:1rem}.ot-sdk-cookie-policy h3,.ot-sdk-cookie-policy h4,.ot-sdk-cookie-policy h6,.ot-sdk-cookie-policy p,.ot-sdk-cookie-policy li,.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy th,.ot-sdk-cookie-policy #cookie-policy-description,.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}.ot-sdk-cookie-policy h4{font-size:1.2em}.ot-sdk-cookie-policy h6{font-size:1em;margin-top:2em}.ot-sdk-cookie-policy th{min-width:75px}.ot-sdk-cookie-policy a,.ot-sdk-cookie-policy a:hover{background:#fff}.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}.ot-sdk-cookie-policy .ot-mobile-border{display:none}.ot-sdk-cookie-policy section{margin-bottom:2em}.ot-sdk-cookie-policy table{border-collapse:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy{font-family:inherit;font-size:1rem}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h3,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h4,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy h6,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy p,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-title{color:dimgray}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup{margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy #cookie-policy-description,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group-desc,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-table-header,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td{font-size:.9em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td span,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td a{font-size:inherit}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-group{font-size:1em;margin-bottom:.6em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-cookie-policy-title{margin-bottom:1.2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy>section{margin-bottom:1em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th{min-width:75px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy a:hover{background:#fff}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead{background-color:#f6f6f4;font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-mobile-border{display:none}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy section{margin-bottom:2em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li{list-style:disc;margin-right:1.5em}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy .ot-sdk-subgroup ul li h4{display:inline-block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{border-collapse:inherit;margin:auto;border:1px solid #d7d7d7;border-radius:5px;border-spacing:initial;width:100%;overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border-bottom:1px solid #d7d7d7;border-left:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr th:last-child,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr td:last-child{border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:25%}.ot-sdk-cookie-policy[dir=rtl]{text-align:right}#ot-sdk-cookie-policy h3{font-size:1.5em}@media only screen and (max-width: 530px){.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) table,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tbody,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) th,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td,.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{display:block}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) thead tr{position:absolute;top:-9999px;right:-9999px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr{margin:0 0 1em 0}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd),.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) tr:nth-child(odd) a{background:#f6f6f4}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td{border:none;border-bottom:1px solid #eee;position:relative;padding-right:50%}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{position:absolute;height:100%;right:6px;width:40%;padding-left:10px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) .ot-mobile-border{display:inline-block;background-color:#e4e4e4;position:absolute;height:100%;top:0;right:45%;width:2px}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) td:before{content:attr(data-label);font-weight:bold}.ot-sdk-cookie-policy:not(#ot-sdk-cookie-policy-v2) li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table{overflow:hidden}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table td{border:none;border-bottom:1px solid #d7d7d7}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tbody,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy th,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{display:block}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-host,#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table .ot-cookies-type{width:auto}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy tr{margin:0 0 1em 0}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{height:100%;width:40%;padding-left:10px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy td:before{content:attr(data-label);font-weight:bold}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy li{word-break:break-word;word-wrap:break-word}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy thead tr{position:absolute;top:-9999px;right:-9999px;z-index:-9999}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td{border-bottom:1px solid #d7d7d7;border-left:0px}#ot-sdk-cookie-policy-v2.ot-sdk-cookie-policy table tr:last-child td:last-child{border-bottom:0px}}"
            }
        }
    }, _o = (Vo.prototype.isLandingPage = function() {
        var e = xt.readCookieParam(Oe.OPTANON_CONSENT, "landingPath");
        return !e || e === location.href
    }
    ,
    Vo.prototype.setLandingPathParam = function(e) {
        xt.writeCookieParam(Oe.OPTANON_CONSENT, "landingPath", e)
    }
    ,
    Vo);
    function Vo() {}
    var Bo, wo = (Eo.prototype.loadBanner = function() {
        Bt.moduleInitializer.ScriptDynamicLoadEnabled ? "complete" === document.readyState ? zt(window).trigger("otloadbanner") : window.addEventListener("load", function(e) {
            zt(window).trigger("otloadbanner")
        }) : "loading" !== document.readyState ? zt(window).trigger("otloadbanner") : window.addEventListener("DOMContentLoaded", function(e) {
            zt(window).trigger("otloadbanner")
        }),
        Ft.pubDomainData.IsBannerLoaded = !0
    }
    ,
    Eo.prototype.OnConsentChanged = function(e) {
        var t = e.toString();
        Bo.consentChangedEventMap[t] || (Bo.consentChangedEventMap[t] = !0,
        window.addEventListener("consent.onetrust", e))
    }
    ,
    Eo.prototype.triggerGoogleAnalyticsEvent = function(e, t, o, n) {
        var r = !1;
        if (Bt.moduleInitializer.GATrackToggle && ("AS" === Bt.moduleInitializer.GATrackAssignedCategory || "" === Bt.moduleInitializer.GATrackAssignedCategory || window.OnetrustActiveGroups.includes("," + Bt.moduleInitializer.GATrackAssignedCategory + ",")) && (r = !0),
        !Ft.ignoreGoogleAnlyticsCall && r) {
            void 0 !== window._gaq && window._gaq.push(["_trackEvent", e, t, o, n]),
            "function" == typeof window.ga && window.ga("send", "event", e, t, o, n);
            var i = window[Ft.otDataLayer.name];
            !Ft.otDataLayer.ignore && void 0 !== i && i && i.constructor === Array && i.push({
                event: "trackOptanonEvent",
                optanonCategory: e,
                optanonAction: t,
                optanonLabel: o,
                optanonValue: n
            })
        }
    }
    ,
    Eo.prototype.setAlertBoxClosed = function(e) {
        var t = (new Date).toISOString();
        e ? xt.setCookie(Oe.ALERT_BOX_CLOSED, t, Rt.ReconsentFrequencyDays) : xt.setCookie(Oe.ALERT_BOX_CLOSED, t, 0);
        var o = zt(".onetrust-pc-dark-filter").el[0];
        o && "none" !== getComputedStyle(o).getPropertyValue("display") && zt(".onetrust-pc-dark-filter").fadeOut(400)
    }
    ,
    Eo.prototype.updateConsentFromCookie = function(t) {
        return d(this, void 0, void 0, function() {
            return g(this, function(e) {
                return t ? (co.isInitIABCookieData(t) || co.updateFromGlobalConsent(t),
                "init" === t && (xt.removeIab1(),
                to.isAlertBoxClosedAndValid() && to.resetTCModel(),
                xt.removeAlertBox())) : (to.resetTCModel(),
                to.updateCrossConsentCookie(!1),
                to.setIABCookieData()),
                Bo.assetPromise.then(function() {
                    Bo.loadBanner()
                }),
                [2]
            })
        })
    }
    ,
    Eo);
    function Eo() {
        var t = this;
        this.consentChangedEventMap = {},
        this.assetResolve = null,
        this.assetPromise = new Promise(function(e) {
            t.assetResolve = e
        }
        )
    }
    var xo, Go = "opt-out", Oo = "OneTrust Cookie Consent", No = "Banner Auto Close", Do = "Banner Close Button", Ho = "Banner - Continue without Accepting", Fo = "Banner - Confirm", Ro = "Preferences Close Button", qo = "Preference Center Opened From Banner", Mo = "Preference Center Opened From Button", Uo = "Preference Center Opened From Function", jo = "Preferences Save Settings", zo = "Vendors List Opened From Function", Ko = "Floating Cookie Settings Open Button", Wo = "Floating Cookie Settings Close Button", Jo = "Preferences Toggle On", Yo = "Preferences Toggle Off", Xo = "General Vendor Toggle On", Qo = "General Vendor Toggle Off", $o = "Host Toggle On", Zo = "Host Toggle Off", en = "Preferences Legitimate Interest Objection", tn = "Preferences Legitimate Interest Remove Objection", on = "IAB Vendor Toggle ON", nn = "IAB Vendor Toggle Off", rn = "IAB Vendor Legitimate Interest Objection", sn = "IAB Vendor Legitimate Interest Remove Objection", an = "Vendor Service Toggle On", ln = "Vendor Service Toggle Off", cn = (dn.prototype.getDataLanguageCulture = function() {
        var e = Ft.bannerScriptElement;
        return e && e.getAttribute(Ye) ? this.checkAndTansformLangCodeWithUnderdscore(e.getAttribute(Ye).toLowerCase()) : this.detectDocumentOrBrowserLanguage().toLowerCase()
    }
    ,
    dn.prototype.checkAndTansformLangCodeWithUnderdscore = function(e) {
        return e.replace(/\_/, "-")
    }
    ,
    dn.prototype.detectDocumentOrBrowserLanguage = function() {
        var e = "";
        if (Ft.langSwitcherPldr) {
            var t = Gt.convertKeyValueLowerCase(Ft.langSwitcherPldr)
              , o = this.getUserLanguage().toLowerCase();
            if (!(e = t[o] || t[o + "-" + o] || (t.default === o ? t.default : null)))
                if (2 === o.length)
                    for (var n = 0; n < Object.keys(t).length; n += 1) {
                        var r = Object.keys(t)[n];
                        if (r.substr(0, 2) === o) {
                            e = t[r];
                            break
                        }
                    }
                else
                    2 < o.length && (e = t[o.substr(0, 2)]);
            e = e || t.default
        }
        return e
    }
    ,
    dn.prototype.getUserLanguage = function() {
        return Ft.useDocumentLanguage ? this.checkAndTansformLangCodeWithUnderdscore(document.documentElement.lang) : navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language || navigator.userLanguage
    }
    ,
    dn.prototype.isValidLanguage = function(e, t) {
        var o = Gt.convertKeyValueLowerCase(Ft.langSwitcherPldr);
        return !(!o || !o[t] && !o[t + "-" + t] && o.default !== t)
    }
    ,
    dn.prototype.getLangJsonUrl = function(e) {
        void 0 === e && (e = null);
        var t, o = Ft.getRegionRule();
        if (e) {
            if (e = e.toLowerCase(),
            !this.isValidLanguage(o, e))
                return null
        } else
            e = this.getDataLanguageCulture();
        return Mt.lang = e,
        Mt.consentLanguage = e.substr(0, 2),
        t = Ft.canUseConditionalLogic ? Ft.bannerDataParentURL + "/" + o.Id + "/" + Ft.Condition.Id + "/" + e : Ft.bannerDataParentURL + "/" + o.Id + "/" + e,
        Ft.multiVariantTestingEnabled && (t = Ft.bannerDataParentURL + "/" + o.Id + "/variants/" + Ft.selectedVariant.Id + "/" + e),
        t
    }
    ,
    dn.prototype.populateLangSwitcherPlhdr = function() {
        var e = Ft.getRegionRule();
        if (e) {
            var t = e.Variants;
            if (Ft.multiVariantTestingEnabled && t) {
                var o = xt.getCookie(Oe.SELECTED_VARIANT)
                  , n = void 0;
                o && (n = t[Gt.findIndex(t, function(e) {
                    return e.Id === o
                })]),
                o && n || (n = t[Math.floor(Math.random() * t.length)]),
                Ft.langSwitcherPldr = n.LanguageSwitcherPlaceholder,
                Ft.selectedVariant = n
            } else
                Ft.canUseConditionalLogic ? Ft.langSwitcherPldr = Ft.Condition.LanguageSwitcherPlaceholder : Ft.langSwitcherPldr = e.LanguageSwitcherPlaceholder
        }
    }
    ,
    dn);
    function dn() {}
    var un, pn = (hn.prototype.getLangJson = function(e) {
        if (void 0 === e && (e = null),
        Ft.previewMode) {
            var t = JSON.parse(window.sessionStorage.getItem("otPreviewData"));
            return Promise.resolve(t.langJson)
        }
        var o = xo.getLangJsonUrl(e);
        return o ? un.otFetch(o + ".json") : Promise.resolve(null)
    }
    ,
    hn.prototype.getPersistentCookieSvg = function() {
        var e = Rt.cookiePersistentLogo;
        return e ? un.otFetch(e, !0) : Promise.resolve(null)
    }
    ,
    hn.prototype.fetchGvlObj = function() {
        return this.otFetch(Bt.moduleInitializer.IabV2Data.globalVendorListUrl)
    }
    ,
    hn.prototype.fetchGoogleVendors = function() {
        var e = Kt.updateCorrectIABUrl(Bt.moduleInitializer.GoogleData.googleVendorListUrl);
        return Kt.checkMobileOfflineRequest(Kt.getBannerVersionUrl()) ? Kt.otFetchOfflineFile(Gt.getRelativeURL(e, !0)) : (Ft.mobileOnlineURL.push(e),
        this.otFetch(e))
    }
    ,
    hn.prototype.getStorageDisclosure = function(t) {
        return d(this, void 0, void 0, function() {
            return g(this, function(e) {
                return [2, this.otFetch(t)]
            })
        })
    }
    ,
    hn.prototype.loadCMP = function() {
        var o = this;
        return new Promise(function(e) {
            var t = o.checkIfRequiresPollyfill() ? "otTCF-ie" : "otTCF";
            Kt.jsonp(Kt.getBannerVersionUrl() + "/" + t + ".js", e, e)
        }
        )
    }
    ,
    hn.prototype.getCSBtnContent = function() {
        return d(this, void 0, void 0, function() {
            var t, o, n, r;
            return g(this, function(e) {
                switch (e.label) {
                case 0:
                    return t = Rt.useRTL ? ee.RTL : ee.LTR,
                    Mt.csBtnAsset[t] ? [3, 2] : (o = Kt.getBannerSDKAssestsUrl() + "/" + (Rt.useRTL ? Qe : Xe),
                    n = Mt.csBtnAsset,
                    r = t,
                    [4, this.otFetch(o)]);
                case 1:
                    n[r] = e.sent(),
                    e.label = 2;
                case 2:
                    return [2, Mt.csBtnAsset[t]]
                }
            })
        })
    }
    ,
    hn.prototype.getPcContent = function(s) {
        return void 0 === s && (s = !1),
        d(this, void 0, void 0, function() {
            var t, o, n, r, i;
            return g(this, function(e) {
                switch (e.label) {
                case 0:
                    return t = Rt.useRTL ? ee.RTL : ee.LTR,
                    Mt.pcAsset[t] && !s ? [3, 2] : (o = Kt.getBannerSDKAssestsUrl(),
                    Rt.PCTemplateUpgrade && (o += "/v2"),
                    n = o + "/" + Ft.pcName + (Rt.useRTL ? "Rtl" : "") + ".json",
                    r = Mt.pcAsset,
                    i = t,
                    [4, this.otFetch(n)]);
                case 1:
                    r[i] = e.sent(),
                    e.label = 2;
                case 2:
                    return [2, Mt.pcAsset[t]]
                }
            })
        })
    }
    ,
    hn.prototype.getBannerContent = function(l, c) {
        return void 0 === l && (l = !1),
        void 0 === c && (c = null),
        d(this, void 0, void 0, function() {
            var t, o, n, r, i, s, a;
            return g(this, function(e) {
                switch (e.label) {
                case 0:
                    if (t = Rt.useRTL ? ee.RTL : ee.LTR,
                    o = c || xo.getDataLanguageCulture(),
                    Mt.bAsset[t] && !l)
                        return [3, 2];
                    if (n = Ft.getRegionRule(),
                    r = void 0,
                    Bt.fp.CookieV2SSR) {
                        if (Ft.previewMode)
                            return i = JSON.parse(window.sessionStorage.getItem("otPreviewData")),
                            [2, Promise.resolve(i.bLayout)];
                        r = Ft.bannerDataParentURL + "/" + n.Id,
                        Ft.canUseConditionalLogic && (r += "/" + Ft.Condition.Id),
                        r += "/bLayout-" + o + ".json"
                    } else
                        r = Kt.getBannerSDKAssestsUrl() + "/" + Ft.bannerName + (Rt.useRTL ? "Rtl" : "") + ".json";
                    return s = Mt.bAsset,
                    a = t,
                    [4, this.otFetch(r)];
                case 1:
                    s[a] = e.sent(),
                    e.label = 2;
                case 2:
                    return [2, Mt.bAsset[t]]
                }
            })
        })
    }
    ,
    hn.prototype.getCommonStyles = function(i) {
        return void 0 === i && (i = !1),
        d(this, void 0, void 0, function() {
            var t, o, n, r;
            return g(this, function(e) {
                switch (e.label) {
                case 0:
                    return t = Rt.useRTL ? ee.RTL : ee.LTR,
                    Mt.cStyles[t] && !i ? [3, 2] : (o = Kt.getBannerSDKAssestsUrl() + "/otCommonStyles" + (Rt.useRTL ? "Rtl" : "") + ".css",
                    n = Mt.cStyles,
                    r = t,
                    [4, this.otFetch(o, !0)]);
                case 1:
                    n[r] = e.sent(),
                    e.label = 2;
                case 2:
                    return [2, Mt.cStyles[t]]
                }
            })
        })
    }
    ,
    hn.prototype.getSyncNtfyContent = function() {
        return d(this, void 0, void 0, function() {
            var t, o, n, r;
            return g(this, function(e) {
                switch (e.label) {
                case 0:
                    return t = Rt.useRTL ? ee.RTL : ee.LTR,
                    Mt.syncNtfyContent[t] ? [3, 2] : (o = Kt.getBannerSDKAssestsUrl() + "/otSyncNotification" + (Rt.useRTL ? "Rtl" : "") + ".json",
                    n = Mt.syncNtfyContent,
                    r = t,
                    [4, this.otFetch(o)]);
                case 1:
                    n[r] = e.sent(),
                    e.label = 2;
                case 2:
                    return [2, Mt.syncNtfyContent[t]]
                }
            })
        })
    }
    ,
    hn.prototype.getConsentProfile = function(e, t) {
        var o = this
          , n = {
            Identifier: e,
            TenantId: Mt.tenantId,
            Authorization: t
        };
        return new Promise(function(e) {
            o.getJSON(Mt.consentApi, n, e, e)
        }
        )
    }
    ,
    hn.prototype.checkIfRequiresPollyfill = function() {
        var e = window.navigator.userAgent;
        return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/") || "undefined" == typeof Set
    }
    ,
    hn.prototype.otFetch = function(r, i) {
        return void 0 === i && (i = !1),
        d(this, void 0, void 0, function() {
            var t, o, n = this;
            return g(this, function(e) {
                switch (e.label) {
                case 0:
                    return Kt.checkMobileOfflineRequest(r) ? [4, Kt.otFetchOfflineFile(r)] : [3, 2];
                case 1:
                    return [2, e.sent()];
                case 2:
                    return e.trys.push([2, 9, , 10]),
                    Ft.mobileOnlineURL.push(r),
                    "undefined" != typeof fetch ? [3, 3] : [2, new Promise(function(e) {
                        n.getJSON(r, null, e, e, i)
                    }
                    )];
                case 3:
                    return [4, fetch(r)];
                case 4:
                    return t = e.sent(),
                    i ? [4, t.text()] : [3, 6];
                case 5:
                    return [2, e.sent()];
                case 6:
                    return [4, t.json()];
                case 7:
                    return [2, e.sent()];
                case 8:
                    return [3, 10];
                case 9:
                    return o = e.sent(),
                    console.log("Error in fetch URL : " + r + " Exception :" + o),
                    [3, 10];
                case 10:
                    return [2]
                }
            })
        })
    }
    ,
    hn.prototype.getJSON = function(e, t, o, n, r) {
        void 0 === t && (t = null),
        void 0 === r && (r = !1);
        var i = new XMLHttpRequest;
        if (i.open("GET", e, !0),
        t)
            for (var s in t)
                i.setRequestHeader(s, t[s]);
        i.onload = function() {
            if (200 <= this.status && this.status < 400 && this.responseText) {
                var e = void 0;
                e = r ? this.responseText : JSON.parse(this.responseText),
                o(e)
            } else
                n({
                    message: "Error Loading Data",
                    statusCode: this.status
                })
        }
        ,
        i.onerror = function(e) {
            n(e)
        }
        ,
        i.send()
    }
    ,
    hn);
    function hn() {}
    var gn, Cn = (yn.prototype.initializeFeaturesAndSpecialPurposes = function() {
        Mt.oneTrustIABConsent.features = [],
        Mt.oneTrustIABConsent.specialPurposes = [],
        Rt.Groups.forEach(function(e) {
            if ("IAB2_FEATURE" === e.Type || "IAB2_SPL_PURPOSE" === e.Type) {
                var t = {};
                t.groupId = e.OptanonGroupId,
                t.purposeId = e.PurposeId,
                t.value = !0,
                "IAB2_FEATURE" === e.Type ? Mt.oneTrustIABConsent.features.push(t) : Mt.oneTrustIABConsent.specialPurposes.push(t)
            }
        })
    }
    ,
    yn.prototype.initGrpsAndHosts = function() {
        this.initializeGroupData(Ft.consentableGrps),
        Rt.showCookieList && Kt.isOptOutEnabled() ? this.initializeHostData(Ft.consentableGrps) : (Mt.hostsConsent = [],
        ho.writeHstParam(Oe.OPTANON_CONSENT))
    }
    ,
    yn.prototype.ensureHtmlGroupDataInitialised = function() {
        if (this.initGrpsAndHosts(),
        Mt.showGeneralVendors && (mo.populateGenVendorLists(),
        mo.initGenVendorConsent()),
        Rt.IsIabEnabled && (this.initializeIABData(),
        this.initializeFeaturesAndSpecialPurposes()),
        Mt.vsIsActiveAndOptOut && this.initializeVendorsService(),
        to.setOrUpdate3rdPartyIABConsentFlag(),
        to.setGeolocationInCookies(),
        Rt.IsConsentLoggingEnabled) {
            var e = window.OneTrust.dataSubjectParams || {}
              , t = xt.readCookieParam(Oe.OPTANON_CONSENT, "iType")
              , o = ""
              , n = !1;
            t && Mt.isV2Stub && e.id && e.token && (n = !0,
            o = U[t]),
            so.createConsentTxn(!1, o, !1, n)
        }
    }
    ,
    yn.prototype.initializeVendorsService = function() {
        var n = to.isAlertBoxClosedAndValid()
          , e = xt.readCookieParam(Oe.OPTANON_CONSENT, fo)
          , r = Gt.strToMap(e);
        Mt.getVendorsInDomain().forEach(function(e, t) {
            if (!r.has(t)) {
                var o = !n && no.checkIsActiveByDefault(e.groupRef);
                r.set(t, o)
            }
        }),
        Mt.vsConsent = r
    }
    ,
    yn.prototype.initializeGroupData = function(e) {
        var t = xt.readCookieParam(Oe.OPTANON_CONSENT, go);
        t ? (So.synchroniseCookieGroupData(e),
        t = xt.readCookieParam(Oe.OPTANON_CONSENT, go),
        Mt.groupsConsent = Gt.strToArr(t)) : (Mt.groupsConsent = [],
        e.forEach(function(e) {
            Mt.groupsConsent.push(e.CustomGroupId + (no.checkIsActiveByDefault(e) && e.HasConsentOptOut ? ":1" : ":0"))
        }),
        Rt.IsConsentLoggingEnabled && window.addEventListener("beforeunload", this.consentDefaulCall))
    }
    ,
    yn.prototype.initializeHostData = function(e) {
        var t = xt.readCookieParam(Oe.OPTANON_CONSENT, "hosts");
        if (t)
            So.synchroniseCookieHostData(),
            t = xt.readCookieParam(Oe.OPTANON_CONSENT, "hosts"),
            Mt.hostsConsent = Gt.strToArr(t),
            e.forEach(function(e) {
                no.isAlwaysActiveGroup(e) && e.Hosts.length && e.Hosts.forEach(function(e) {
                    Mt.oneTrustAlwaysActiveHosts.push(e.HostId)
                })
            });
        else {
            Mt.hostsConsent = [];
            var r = {};
            e.forEach(function(e) {
                var o = no.isAlwaysActiveGroup(e)
                  , n = Mt.syncRequired ? So.groupHasConsent(e) : no.checkIsActiveByDefault(e);
                e.Hosts.length && e.Hosts.forEach(function(e) {
                    if (r[e.HostId])
                        So.updateHostStatus(e, n);
                    else {
                        r[e.HostId] = !0,
                        o && Mt.oneTrustAlwaysActiveHosts.push(e.HostId);
                        var t = So.isHostPartOfAlwaysActiveGroup(e.HostId);
                        Mt.hostsConsent.push(e.HostId + (t || n ? ":1" : ":0"))
                    }
                })
            })
        }
    }
    ,
    yn.prototype.consentDefaulCall = function() {
        var e = parseInt(xt.readCookieParam(Oe.OPTANON_CONSENT, we), 10);
        !isNaN(e) && 0 !== e || (Bo.triggerGoogleAnalyticsEvent(Oo, "Click", "No interaction"),
        Rt.IsConsentLoggingEnabled && so.createConsentTxn(!0),
        window.removeEventListener("beforeunload", gn.consentDefaulCall))
    }
    ,
    yn.prototype.fetchAssets = function(h) {
        return void 0 === h && (h = null),
        d(this, void 0, void 0, function() {
            var t, o, n, r, i, s, a, l, c, d, u, p;
            return g(this, function(e) {
                switch (e.label) {
                case 0:
                    return s = Bt.moduleInitializer,
                    a = to.isAlertBoxClosedAndValid(),
                    l = !!h,
                    c = gn.isFetchBanner(s.IsSuppressBanner, a),
                    d = gn.cookieSettingBtnPresent(),
                    i = "IAB2" === Rt.IabType ? Rt.PCShowPersistentCookiesHoverButton && (!Rt.PCenterDynamicRenderingEnable || Rt.PCenterDynamicRenderingEnable && !d) : Rt.PCShowPersistentCookiesHoverButton,
                    u = "true" === Mt.urlParams.get(ut),
                    Mt.hideBanner = u,
                    [4, Promise.all([!c || Rt.NoBanner || u ? Promise.resolve(null) : un.getBannerContent(l, h), !s.IsSuppressPC || Mt.isPCVisible ? un.getPcContent() : Promise.resolve(null), i ? un.getCSBtnContent() : Promise.resolve(null), un.getCommonStyles()])];
                case 1:
                    return p = e.sent(),
                    t = p[0],
                    o = p[1],
                    n = p[2],
                    r = p[3],
                    gn.fetchContent(t, o, n, r),
                    gn.setCookieListGroupData(),
                    [2]
                }
            })
        })
    }
    ,
    yn.prototype.fetchContent = function(e, t, o, n) {
        if (e) {
            var r = e.html;
            Bt.fp.CookieV2SSR || (r = atob(e.html)),
            this.bannerGroup = {
                name: e.name,
                html: r,
                css: e.css
            }
        }
        t && (this.preferenceCenterGroup = {
            name: t.name,
            html: atob(t.html),
            css: t.css
        },
        Bt.isV2Template = Rt.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(t.name)),
        o && (this.csBtnGroup = {
            name: "CookieSettingsButton",
            html: atob(o.html),
            css: o.css
        }),
        n && (this.commonStyles = n)
    }
    ,
    yn.prototype.cookieSettingBtnPresent = function() {
        return zt("#ot-sdk-btn").length || zt(".ot-sdk-show-settings").length || zt(".optanon-show-settings").length
    }
    ,
    yn.prototype.isFetchBanner = function(e, t) {
        return !e || Rt.ShowAlertNotice && !t && e && !zt("#onetrust-banner-sdk").length
    }
    ,
    yn.prototype.setCookieListGroupData = function() {
        if (!Bt.fp.CookieV2TrackingTechnologies) {
            var e = (new Lo).assets();
            gn.cookieListGroup = {
                name: e.name,
                html: e.html,
                css: Rt.useRTL ? e.cssRTL : e.css
            }
        }
    }
    ,
    yn.prototype.initializeIabPurposeConsentOnReload = function() {
        var t = this;
        Ft.consentableIabGrps.forEach(function(e) {
            t.setIABConsent(e, !1),
            e.IsLegIntToggle = !0,
            t.setIABConsent(e, !1)
        })
    }
    ,
    yn.prototype.initializeIABData = function(o, n, r) {
        var i = this;
        void 0 === o && (o = !1),
        void 0 === n && (n = !1),
        void 0 === r && (r = !1);
        var e = Mt.oneTrustIABConsent;
        e.purpose = [],
        e.vendors = [],
        e.legIntVendors = [],
        e.specialFeatures = [],
        e.legimateInterest = [];
        var t = Mt.addtlVendors
          , s = Rt.VendorConsentModel === Go;
        if (t.vendorConsent = [],
        !e.IABCookieValue || o || n || to.reconsentRequired()) {
            Ft.consentableIabGrps.forEach(function(e) {
                if (n && !r)
                    i.setIABConsent(e, no.isAlwaysActiveGroup(e));
                else if (r)
                    e.HasConsentOptOut && i.setIABConsent(e, !1);
                else {
                    var t = o && e.HasConsentOptOut;
                    i.setIABConsent(e, t),
                    "IAB2_PURPOSE" === e.Type && (e.IsLegIntToggle = !0,
                    i.setIABConsent(e, e.HasLegIntOptOut))
                }
            }),
            Rt.IsIabEnabled && r && (Mt.oneTrustIABConsent.legimateInterest = Mt.vendors.selectedLegInt.slice());
            var a = o || !n && s;
            r && (a = s),
            to.setIABVendor(a, r),
            !to.reconsentRequired() || o || n || to.resetTCModel()
        } else
            this.initializeIabPurposeConsentOnReload(),
            co.populateGoogleConsent(),
            co.populateVendorAndPurposeFromCookieData()
    }
    ,
    yn.prototype.canSoftOptInInsertForGroup = function(e) {
        var t = no.getGroupById(e);
        if (t) {
            var o = t && !t.Parent ? t : no.getParentGroup(t.Parent);
            return "inactive landingpage" !== no.getGrpStatus(o).toLowerCase() || !Io.isLandingPage()
        }
    }
    ,
    yn.prototype.setIABConsent = function(e, t) {
        e.Type === Pt ? this.setIabSpeciFeatureConsent(e, t) : e.IsLegIntToggle ? (this.setIabLegIntConsent(e, t),
        e.IsLegIntToggle = !1) : this.setIabPurposeConsent(e, t)
    }
    ,
    yn.prototype.setIabPurposeConsent = function(o, n) {
        var r = !1;
        Mt.oneTrustIABConsent.purpose = Mt.oneTrustIABConsent.purpose.map(function(e) {
            var t = e.split(":")[0];
            return t === o.IabGrpId && (e = t + ":" + n,
            r = !0),
            e
        }),
        r || Mt.oneTrustIABConsent.purpose.push(o.IabGrpId + ":" + n)
    }
    ,
    yn.prototype.setIabLegIntConsent = function(o, n) {
        var r = !1;
        Mt.oneTrustIABConsent.legimateInterest = Mt.oneTrustIABConsent.legimateInterest.map(function(e) {
            var t = e.split(":")[0];
            return t === o.IabGrpId && (e = t + ":" + n,
            r = !0),
            e
        }),
        r || Mt.oneTrustIABConsent.legimateInterest.push(o.IabGrpId + ":" + n)
    }
    ,
    yn.prototype.setIabSpeciFeatureConsent = function(o, n) {
        var r = !1;
        Mt.oneTrustIABConsent.specialFeatures = Mt.oneTrustIABConsent.specialFeatures.map(function(e) {
            var t = e.split(":")[0];
            return t === o.IabGrpId && (e = t + ":" + n,
            r = !0),
            e
        }),
        r || Mt.oneTrustIABConsent.specialFeatures.push(o.IabGrpId + ":" + n)
    }
    ,
    yn);
    function yn() {}
    var fn, vn = (kn.prototype.getAllowAllButton = function() {
        return zt("#onetrust-pc-sdk #accept-recommended-btn-handler")
    }
    ,
    kn.prototype.getSelectedVendors = function() {
        return zt("#onetrust-pc-sdk " + Xt.P_Tgl_Cntr + " .ot-checkbox input:checked")
    }
    ,
    kn);
    function kn() {}
    var mn, bn = (Pn.prototype.setBannerFocus = function() {
        var e = Array.prototype.slice.call(zt("#onetrust-banner-sdk .onetrust-vendors-list-handler").el)
          , t = Array.prototype.slice.call(zt('#onetrust-banner-sdk #onetrust-policy-text [href],#onetrust-banner-sdk #onetrust-policy-text button,#onetrust-banner-sdk #onetrust-policy-text [tabindex]:not([tabindex="-1"])').el)
          , o = Array.prototype.slice.call(zt("#onetrust-banner-sdk .ot-bnr-save-handler").el)
          , n = Array.prototype.slice.call(zt("#onetrust-banner-sdk #onetrust-pc-btn-handler").el)
          , r = Array.prototype.concat.call(Array.prototype.slice.call(zt("#onetrust-banner-sdk .category-switch-handler:not([disabled])").el), Array.prototype.slice.call(zt("#onetrust-banner-sdk .ot-cat-lst button").el), e)
          , i = Array.prototype.concat.call(t, r)
          , s = Array.prototype.slice.call(zt("#onetrust-banner-sdk .onetrust-close-btn-handler").el);
        Ft.bannerName === tt && (i = Array.prototype.concat.call(e, t));
        var a = Array.prototype.slice.call(zt("#onetrust-banner-sdk #onetrust-accept-btn-handler").el)
          , l = Array.prototype.slice.call(zt("#onetrust-banner-sdk #onetrust-reject-all-handler").el)
          , c = Array.prototype.concat.call(o, a, l, n);
        (Ft.bannerName !== Ze || Rt.IsIabEnabled) && Ft.bannerName !== $e && Ft.bannerName !== nt || (c = Array.prototype.concat.call(n, l, a));
        var d = Array.prototype.slice.call(zt("#onetrust-banner-sdk .ot-gv-list-handler").el);
        Ft.bannerName === rt ? (i = Array.prototype.concat.call(d, i),
        c = Array.prototype.slice.call(zt("#onetrust-banner-sdk #onetrust-button-group button").el)) : i = Array.prototype.concat.call(i, d),
        this.bannerEl = Array.prototype.concat.call(Array.prototype.slice.call(zt("#onetrust-banner-sdk #onetrust-cookie-btn").el), i, Array.prototype.slice.call(zt("#onetrust-banner-sdk .banner-option-input").el), c, Array.prototype.slice.call(zt("#onetrust-banner-sdk .ot-bnr-footer-logo a").el), s),
        this.banner = zt("#onetrust-banner-sdk").el[0],
        (Rt.BInitialFocus || Rt.BInitialFocusLinkAndButton || Rt.ForceConsent) && (Rt.BInitialFocus ? this.banner.focus() : this.bannerEl[0].focus())
    }
    ,
    Pn.prototype.handleBannerFocus = function(e, t) {
        var o = e.target
          , n = mn.bannerEl
          , r = n.indexOf(o)
          , i = n.length - 1
          , s = null;
        if (this.handleBannerFocusBodyReset(t, r, i))
            Kt.resetFocusToBody();
        else if (this.banner === o)
            s = this.handleInitialBannerFocus(t, n, i, s);
        else
            for (; !s; ) {
                var a = void 0;
                0 !== (a = t ? r <= 0 ? n[i] : n[r - 1] : r === i ? n[0] : n[r + 1]).clientHeight || 0 !== a.offsetHeight ? s = a : t ? r-- : r++
            }
        s && (e.preventDefault(),
        s.focus())
    }
    ,
    Pn.prototype.handleBannerFocusBodyReset = function(e, t, o) {
        return !(Rt.ForceConsent || !Rt.BInitialFocus && !Rt.BInitialFocusLinkAndButton || !(e && 0 === t || !e && t === o))
    }
    ,
    Pn.prototype.handleInitialBannerFocus = function(e, t, o, n) {
        return e && Rt.ForceConsent ? n = t[o] : e || (n = t[0]),
        n
    }
    ,
    Pn.prototype.setPCFocus = function(e) {
        if (e && !(e.length <= 0)) {
            for (var t = 0; t < e.length; t++)
                e[t].setAttribute("tabindex", "0");
            this.setFirstAndLast(e);
            var o = Rt.ShowPreferenceCenterCloseButton
              , n = o ? this.getElementForFocus(e, Rt.PCLayout.Popup ? 2 : 1, !0) : null
              , r = {
                preventScroll: !0
            };
            this.firstItem ? o ? n.focus(r) : this.firstItem.focus(r) : e[0].focus(),
            this.firstItem && zt(this.firstItem).on("keydown", mn.firstItemHandler),
            this.lastItem && zt(this.lastItem).on("keydown", mn.lastItemHandler)
        }
    }
    ,
    Pn.prototype.setFirstAndLast = function(e) {
        this.firstItem = this.getElementForFocus(e, 0, !0),
        this.lastItem = this.firstItem ? this.getElementForFocus(e, e.length - 1, !1) : null
    }
    ,
    Pn.prototype.setLastItem = function() {
        var e = this.getPCElements()
          , t = this.getElementForFocus(e, e.length - 1, !1);
        t !== this.lastItem && (zt(this.lastItem).off("keydown", mn.lastItemHandler),
        this.lastItem = t,
        zt(t).on("keydown", mn.lastItemHandler))
    }
    ,
    Pn.prototype.getPCElements = function() {
        var e = "#onetrust-pc-sdk #close-pc-btn-handler,\n            #onetrust-pc-sdk .back-btn-handler,\n            #onetrust-pc-sdk ." + Xt.P_Active_Menu + ',\n            #onetrust-pc-sdk input,\n            #onetrust-pc-sdk a,\n            #onetrust-pc-sdk [tabindex="0"] button,\n            #onetrust-pc-sdk .save-preference-btn-handler,\n            #onetrust-pc-sdk .ot-pc-refuse-all-handler,\n            #onetrust-pc-sdk #accept-recommended-btn-handler';
        return Mt.pcLayer === V.CookieList ? e += " ,#onetrust-pc-sdk " + Xt.P_Content + " .powered-by-logo" : e += ",#onetrust-pc-sdk #vendor-list-save-btn .powered-by-logo",
        Array.prototype.slice.call(zt(e).el)
    }
    ,
    Pn.prototype.getActiveTab = function() {
        return document.querySelector('#onetrust-pc-sdk .category-menu-switch-handler[tabindex="0"]')
    }
    ,
    Pn.prototype.getElementForFocus = function(e, t, o) {
        for (var n = e[t]; o ? n && null === n.offsetParent && t < e.length - 1 : n && null === n.offsetParent && 0 < t; )
            n = e[t],
            o ? ++t : --t;
        return n
    }
    ,
    Pn.prototype.firstItemHandler = function(e) {
        var t = document.getElementById("onetrust-banner-sdk");
        if (9 === e.keyCode && e.shiftKey && mn.firstItem !== t)
            e.preventDefault(),
            mn.lastItem.focus();
        else {
            var o = "close-pc-btn-handler" === e.target.id && ("13" === e.keyCode || "32" === e.keyCode || "Enter" === e.code || "Space" === e.code);
            if (Rt.PCLayout.Tab && Mt.pcLayer === V.PrefCenterHome && !o) {
                var n = mn.getActiveTab();
                n && (e.preventDefault(),
                n.focus())
            }
        }
    }
    ,
    Pn.prototype.lastItemHandler = function(e) {
        if (9 === e.keyCode && !e.shiftKey) {
            e.preventDefault();
            var t = Mt.pcLayer === V.VendorList || Mt.pcLayer === V.CookieList;
            Rt.PCLayout.Tab && Mt.isPCVisible && !Rt.ShowPreferenceCenterCloseButton && !t ? mn.getActiveTab().focus() : mn.firstItem.focus()
        }
    }
    ,
    Pn);
    function Pn() {
        this.bannerEl = []
    }
    var Sn, An = (Tn.prototype.getAllGroupElements = function() {
        return document.querySelectorAll("div#onetrust-pc-sdk " + Xt.P_Category_Grp + " " + Xt.P_Category_Item + ":not(.ot-vnd-item)")
    }
    ,
    Tn.prototype.toggleGrpElements = function(e, t, o, n) {
        void 0 === n && (n = !1),
        Ft.pcName === dt && Rt.PCTemplateUpgrade && (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")));
        for (var r = e.querySelectorAll('input[class*="category-switch-handler"]'), i = 0; i < r.length; i++) {
            var s = r[i].getAttribute("id").includes("leg-out");
            n && (!n || s) || (Gt.setCheckedAttribute(null, r[i], o),
            r[i] && Rt.PCShowConsentLabels && (r[i].parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? Rt.PCActiveText : Rt.PCInactiveText))
        }
        Ft.legIntSettings.PAllowLI && Ft.legIntSettings.PShowLegIntBtn && t.Type === bt && t.HasLegIntOptOut && !n && Sn.updateLegIntBtnElement(e.querySelector(".ot-leg-btn-container"), o)
    }
    ,
    Tn.prototype.toogleAllSubGrpElements = function(e, t) {
        if (e.ShowSubgroup) {
            var o = e.CustomGroupId
              , n = this.getGroupElementByOptanonGroupId(o.toString());
            Sn.toogleSubGroupElement(n, t, e.IsLegIntToggle)
        } else
            this.updateHiddenSubGroupData(e, t)
    }
    ,
    Tn.prototype.toogleSubGroupElement = function(e, t, o, n) {
        void 0 === o && (o = !1),
        void 0 === n && (n = !1),
        Ft.pcName === dt && Rt.PCTemplateUpgrade && (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")));
        for (var r = e.querySelectorAll("li" + Xt.P_Subgrp_li), i = 0; i < r.length; i++) {
            var s = no.getGroupById(r[i].getAttribute("data-optanongroupid"))
              , a = s.OptanonGroupId
              , l = no.getParentGroup(s.Parent);
            Ft.legIntSettings.PAllowLI && Ft.legIntSettings.PShowLegIntBtn && o && s.Type === bt && s.HasLegIntOptOut && l.ShowSubgroupToggle && Sn.updateLegIntBtnElement(r[i], t);
            var c = o ? "[id='ot-sub-group-id-" + a + "-leg-out']" : "[id='ot-sub-group-id-" + a + "']"
              , d = r[i].querySelector('input[class*="cookie-subgroup-handler"]' + c);
            Gt.setCheckedAttribute(null, d, t),
            d && Rt.PCShowConsentLabels && (d.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = t ? Rt.PCActiveText : Rt.PCInactiveText),
            n || (s.IsLegIntToggle = o,
            Sn.toggleGrpStatus(s, t),
            s.IsLegIntToggle = !1,
            So.toggleGroupHosts(s, t),
            Mt.genVenOptOutEnabled && So.toggleGroupGenVendors(s, t))
        }
    }
    ,
    Tn.prototype.toggleGrpStatus = function(e, t) {
        var o = e.IsLegIntToggle && e.Type === bt ? t ? tn : en : t ? Jo : Yo;
        Bo.triggerGoogleAnalyticsEvent(Oo, o, e.GroupName + ": " + e.OptanonGroupId),
        t ? this.updateEnabledGroupData(e) : this.updateDisabledGroupData(e)
    }
    ,
    Tn.prototype.setInputID = function(e, t, o, n, r) {
        zt(e).attr("id", t),
        zt(e).attr("name", t),
        zt(e).data("optanonGroupId", o),
        Gt.setCheckedAttribute(null, e, n),
        zt(e).attr("aria-labelledby", r)
    }
    ,
    Tn.prototype.updateEnabledGroupData = function(e) {
        if (-1 < Lt.indexOf(e.Type))
            this.updateIabGroupData(e, !0);
        else {
            var t = Sn.getGroupVariable()
              , o = Gt.indexOf(t, e.CustomGroupId + ":0");
            -1 !== o && (t[o] = e.CustomGroupId + ":1")
        }
    }
    ,
    Tn.prototype.updateDisabledGroupData = function(e) {
        if (-1 < Lt.indexOf(e.Type))
            this.updateIabGroupData(e, !1);
        else if (e.Status !== qe) {
            var t = Sn.getGroupVariable()
              , o = Gt.indexOf(t, e.CustomGroupId + ":1");
            -1 !== o && (t[o] = e.CustomGroupId + ":0")
        }
    }
    ,
    Tn.prototype.updateIabGroupData = function(e, t) {
        if (e.Type === Pt)
            this.updateIabSpecialFeatureData(e.IabGrpId, t);
        else {
            var o = e.IsLegIntToggle ? Mt.vendors.selectedLegInt : Mt.vendors.selectedPurpose;
            this.updateIabPurposeData(e.IabGrpId, t, o)
        }
    }
    ,
    Tn.prototype.isAllSubgroupsDisabled = function(e) {
        return !e.SubGroups.some(function(e) {
            return Sn.isGroupActive(e)
        })
    }
    ,
    Tn.prototype.isAllSubgroupsEnabled = function(e) {
        return !e.SubGroups.some(function(e) {
            return Sn.IsGroupInActive(e)
        })
    }
    ,
    Tn.prototype.toggleGroupHtmlElement = function(e, t, o) {
        if (Ft.legIntSettings.PAllowLI && Ft.legIntSettings.PShowLegIntBtn && e.Type === bt && e.HasLegIntOptOut) {
            var n = document.querySelector("[data-el-id=" + t + "]");
            n && this.updateLegIntBtnElement(n, o)
        }
        var r = zt("#ot-group-id-" + t).el[0];
        Gt.setCheckedAttribute(null, r, o),
        r && Rt.PCShowConsentLabels && (r.parentElement.querySelector(".ot-label-status").innerHTML = o ? Rt.PCActiveText : Rt.PCInactiveText)
    }
    ,
    Tn.prototype.updateLegIntBtnElement = function(e, t) {
        var o = Ft.legIntSettings
          , n = e.querySelector(".ot-obj-leg-btn-handler")
          , r = e.querySelector(".ot-remove-objection-handler");
        t ? (n.classList.add("ot-inactive-leg-btn"),
        n.classList.add("ot-leg-int-enabled"),
        n.classList.remove("ot-active-leg-btn")) : (n.classList.add("ot-active-leg-btn"),
        n.classList.remove("ot-inactive-leg-btn"),
        n.classList.remove("ot-leg-int-enabled")),
        n.querySelector("span").innerText = t ? o.PObjectLegIntText : o.PObjectionAppliedText,
        wt(r, "display: " + (t ? "none" : "inline-block") + ";", !0)
    }
    ,
    Tn.prototype.isGroupActive = function(e) {
        return -1 < Lt.indexOf(e.Type) ? -1 !== this.isIabPurposeActive(e) : -1 !== Ut.inArray(e.CustomGroupId + ":1", Sn.getGroupVariable())
    }
    ,
    Tn.prototype.safeFormattedGroupDescription = function(e) {
        return e && e.GroupDescription ? e.GroupDescription.replace(/\r\n/g, "<br>") : ""
    }
    ,
    Tn.prototype.canInsertForGroup = function(e, t) {
        void 0 === t && (t = !1);
        var o, n = null != e && void 0 !== e, r = xt.readCookieParam(Oe.OPTANON_CONSENT, "groups"), i = Mt.groupsConsent.join(","), s = xt.readCookieParam(Oe.OPTANON_CONSENT, "hosts"), a = Mt.hostsConsent.join(",");
        if (t)
            return !0;
        r === i && s === a || gn.ensureHtmlGroupDataInitialised();
        var l = [];
        if (Mt.showGeneralVendors)
            for (var c = 0, d = Object.entries(Mt.genVendorsConsent); c < d.length; c++) {
                var u = d[c]
                  , p = u[0]
                  , h = u[1];
                l.push(p + ":" + (h ? "1" : "0"))
            }
        Mt.showVendorService && Mt.vsConsent.forEach(function(e, t) {
            l.push(t + ":" + (e ? "1" : "0"))
        });
        var g = Mt.groupsConsent.concat(Mt.hostsConsent).concat(l);
        o = Gt.contains(g, e + ":1");
        var C = this.doesHostExist(e)
          , y = this.doesGroupExist(e)
          , f = !1;
        Mt.showGeneralVendors ? f = this.doesGenVendorExist(e) : Mt.showVendorService && (f = this.doesVendorServiceExist(e));
        var v = !(!C && !f) || o && gn.canSoftOptInInsertForGroup(e);
        return !(!n || !(o && v || !y && !C && !f))
    }
    ,
    Tn.prototype.setAllowAllButton = function() {
        var t = 0
          , e = Rt.Groups.some(function(e) {
            if (-1 === _t.indexOf(e.Type))
                return Sn.IsGroupInActive(e) && t++,
                e.SubGroups.some(function(e) {
                    return Sn.IsGroupInActive(e)
                }) && t++,
                1 <= t
        })
          , o = fn.getAllowAllButton();
        return e ? o.show("inline-block") : o.hide(),
        mn.lastItem && mn.setLastItem(),
        e
    }
    ,
    Tn.prototype.getGroupVariable = function() {
        return Mt.groupsConsent
    }
    ,
    Tn.prototype.IsGroupInActive = function(e) {
        return -1 < Lt.indexOf(e.Type) ? -1 === this.isIabPurposeActive(e) : !(-1 < _t.indexOf(e.Type)) && -1 === Ut.inArray(e.CustomGroupId + ":1", Sn.getGroupVariable())
    }
    ,
    Tn.prototype.updateIabPurposeData = function(t, e, o) {
        var n = Gt.findIndex(o, function(e) {
            return e.split(":")[0] === t
        });
        o[n = -1 === n ? Number(t) : n] = t + ":" + e
    }
    ,
    Tn.prototype.updateIabSpecialFeatureData = function(t, e) {
        var o = Gt.findIndex(Mt.vendors.selectedSpecialFeatures, function(e) {
            return e.split(":")[0] === t
        });
        o = -1 === o ? Number(t) : o,
        Mt.vendors.selectedSpecialFeatures[o] = t + ":" + e
    }
    ,
    Tn.prototype.getGroupElementByOptanonGroupId = function(e) {
        return document.querySelector("#onetrust-pc-sdk " + Xt.P_Category_Grp + " " + Xt.P_Category_Item + '[data-optanongroupid=\n            "' + e + '"]')
    }
    ,
    Tn.prototype.updateHiddenSubGroupData = function(e, t) {
        e.SubGroups.forEach(function(e) {
            Sn.toggleGrpStatus(e, t),
            So.toggleGroupHosts(e, t),
            Mt.genVenOptOutEnabled && So.toggleGroupGenVendors(e, t)
        })
    }
    ,
    Tn.prototype.isIabPurposeActive = function(e) {
        var t;
        return t = e.Type === Pt ? Mt.vendors.selectedSpecialFeatures : e.IsLegIntToggle ? Mt.vendors.selectedLegInt : Mt.vendors.selectedPurpose,
        Ut.inArray(e.IabGrpId + ":true", t)
    }
    ,
    Tn.prototype.doesGroupExist = function(e) {
        return !!no.getGroupById(e)
    }
    ,
    Tn.prototype.doesHostExist = function(e) {
        var t = Mt.hostsConsent;
        return -1 !== t.indexOf(e + ":0") || -1 !== t.indexOf(e + ":1")
    }
    ,
    Tn.prototype.doesGenVendorExist = function(t) {
        return !!Rt.GeneralVendors && !!Rt.GeneralVendors.find(function(e) {
            return e.VendorCustomId === t
        })
    }
    ,
    Tn.prototype.doesVendorServiceExist = function(e) {
        return Mt.getVendorsInDomain().has(e)
    }
    ,
    Tn);
    function Tn() {}
    var In, Ln = (_n.prototype.updateFilterSelection = function(e) {
        var t, o;
        void 0 === e && (e = !1),
        o = e ? (t = Mt.filterByCategories,
        "data-optanongroupid") : (t = Mt.filterByIABCategories,
        "data-purposeid");
        for (var n = zt("#onetrust-pc-sdk .category-filter-handler").el, r = 0; r < n.length; r++) {
            var i = n[r].getAttribute(o)
              , s = -1 < t.indexOf(i);
            Gt.setCheckedAttribute(null, n[r], s)
        }
    }
    ,
    _n.prototype.cancelHostFilter = function() {
        for (var e = zt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-optanongroupid")
              , n = 0 <= Mt.filterByCategories.indexOf(o);
            Gt.setCheckedAttribute(null, e[t], n)
        }
    }
    ,
    _n.prototype.updateHostFilterList = function() {
        for (var e = zt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-optanongroupid");
            if (e[t].checked && Mt.filterByCategories.indexOf(o) < 0)
                Mt.filterByCategories.push(o);
            else if (!e[t].checked && -1 < Mt.filterByCategories.indexOf(o)) {
                var n = Mt.filterByCategories;
                Mt.filterByCategories.splice(n.indexOf(o), 1)
            }
        }
        return Mt.filterByCategories
    }
    ,
    _n.prototype.InitializeHostList = function() {
        Mt.hosts.hostTemplate = zt(Xt.P_Vendor_List + " " + Xt.P_Host_Cntr + " li").el[0].cloneNode(!0),
        Mt.hosts.hostCookieTemplate = zt(Xt.P_Vendor_List + " " + Xt.P_Host_Cntr + " " + Xt.P_Host_Opt + " li").el[0].cloneNode(!0)
    }
    ,
    _n.prototype.getCookiesForGroup = function(t) {
        var o = []
          , n = [];
        return t.FirstPartyCookies.length && t.FirstPartyCookies.forEach(function(e) {
            n.push(r(r({}, e), {
                groupName: t.GroupName
            }))
        }),
        t.Hosts.length && t.Hosts.forEach(function(e) {
            o.push(r(r({}, e), {
                isActive: "always active" === no.getGrpStatus(t).toLowerCase(),
                groupName: t.GroupName,
                Type: J.Host
            }))
        }),
        {
            firstPartyCookiesList: n,
            thirdPartyCookiesList: o
        }
    }
    ,
    _n.prototype.reactivateSrcTag = function(e) {
        var t = ["src"];
        e.setAttribute(t[0], e.getAttribute("data-" + t[0])),
        e.removeAttribute("data-src")
    }
    ,
    _n.prototype.reactivateScriptTag = function(e) {
        var t = e.parentNode
          , o = document.createElement(e.tagName);
        o.innerHTML = e.innerHTML;
        var n = e.attributes;
        if (0 < n.length)
            for (var r = 0; r < n.length; r++)
                "type" !== n[r].name ? o.setAttribute(n[r].name, n[r].value, !0) : o.setAttribute("type", "text/javascript", !0);
        t.appendChild(o),
        t.removeChild(e)
    }
    ,
    _n.prototype.reactivateTag = function(e, t) {
        var o, n = 0 <= e.className.indexOf("ot-vscat"), r = 0 <= e.className.indexOf("optanon-category");
        n && r ? o = this.getGroupElements(e.className, Mt.showVendorService) : n ? Mt.showVendorService ? o = this.getGroupElements(e.className, !0) : this.unBlockTag(t, e) : r && (Mt.showVendorService ? this.unBlockTag(t, e) : o = this.getGroupElements(e.className, !1));
        var i = !0;
        if (o && 0 < o.length) {
            for (var s = 0; s < o.length; s++)
                if (!Sn.canInsertForGroup(o[s].trim())) {
                    i = !1;
                    break
                }
            i && this.unBlockTag(t, e)
        }
    }
    ,
    _n.prototype.unBlockTag = function(e, t) {
        e ? this.reactivateSrcTag(t) : this.reactivateScriptTag(t)
    }
    ,
    _n.prototype.getGroupElements = function(e, t) {
        return t ? e.match(/ot-vscat(-[a-zA-Z0-9,]+)+($|\s)/)[0].split(/ot-vscat-/i)[1].split("-") : e.match(/optanon-category(-[a-zA-Z0-9,]+)+($|\s)/)[0].split(/optanon-category-/i)[1].split("-")
    }
    ,
    _n.prototype.substitutePlainTextScriptTags = function() {
        var t = this
          , e = [].slice.call(document.querySelectorAll('script[class*="optanon-category"]'))
          , o = [].slice.call(document.querySelectorAll('*[class*="optanon-category"]'));
        e = Array.from(new Set(e.concat([].slice.call(document.querySelectorAll('script[class*="ot-vscat"]') || [])))),
        o = Array.from(new Set(o.concat([].slice.call(document.querySelectorAll('*[class*="ot-vscat"]') || [])))),
        Array.prototype.forEach.call(o, function(e) {
            "SCRIPT" !== e.tagName && e.hasAttribute("data-src") && t.reactivateTag(e, !0)
        }),
        Array.prototype.forEach.call(e, function(e) {
            e.hasAttribute("type") && "text/plain" === e.getAttribute("type") && t.reactivateTag(e, !1)
        })
    }
    ,
    _n);
    function _n() {}
    var Vn, Bn = (wn.prototype.getSearchQuery = function(e) {
        var t = this
          , o = e.trim().split(/\s+/g);
        return new RegExp(o.map(function(e) {
            return t.escapeRegExp(e)
        }).join("|") + "(.+)?","gi")
    }
    ,
    wn.prototype.escapeRegExp = function(e) {
        return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    ,
    wn.prototype.setGlobalFilteredList = function(e) {
        return Mt.currentGlobalFilteredList = e
    }
    ,
    wn.prototype.filterList = function(t, e, n) {
        var o = n && n.length;
        if ("" === t && !o)
            return this.setGlobalFilteredList(e);
        if (o) {
            var r = zt("#onetrust-pc-sdk " + Xt.P_Fltr_Options + " input").el.length
              , i = []
              , s = !1;
            r !== n.length ? e.forEach(function(o) {
                s = !0,
                o.vendorName && n.forEach(function(e) {
                    var t = parseInt(Ft.iabGrpIdMap[e]);
                    -1 < e.indexOf("IFEV2_") ? (o.features || []).forEach(function(e) {
                        e.featureId === t && i.push(o)
                    }) : -1 < e.indexOf("ISFV2_") ? o.specialFeatures.forEach(function(e) {
                        e.featureId === t && i.push(o)
                    }) : -1 < e.indexOf("ISPV2_") ? (o.specialPurposes || []).forEach(function(e) {
                        e.purposeId === t && i.push(o)
                    }) : (o.purposes.forEach(function(e) {
                        e.purposeId === t && i.push(o)
                    }),
                    o.legIntPurposes.forEach(function(e) {
                        e.purposeId === t && i.push(o)
                    }))
                })
            }) : i = e,
            s && (i = i.filter(function(e, t, o) {
                return o.indexOf(e) === t
            })),
            this.setGlobalFilteredList(i)
        }
        return "" === t ? Mt.currentGlobalFilteredList : Mt.currentGlobalFilteredList.filter(function(e) {
            if (e.vendorName)
                return e.vendorName.toLowerCase().includes(t.toLowerCase())
        })
    }
    ,
    wn.prototype.loadVendorList = function(e, t) {
        void 0 === e && (e = "");
        var o = Mt.vendors;
        Mt.currentGlobalFilteredList = o.list,
        e ? (o.searchParam = e,
        Mt.filterByIABCategories = [],
        In.updateFilterSelection(!1)) : o.searchParam !== e ? o.searchParam = "" : t = Mt.filterByIABCategories;
        var n = this.filterList(o.searchParam, o.list, t);
        zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content).el[0].scrollTop = 0,
        this.initVendorsData(e, n)
    }
    ,
    wn.prototype.searchVendors = function(e, t, o, n) {
        if (n) {
            var r = this.getSearchQuery(n)
              , i = 0;
            for (var s in t)
                if (s) {
                    var a = o === oe.GoogleVendor ? s : t[s].VendorCustomId
                      , l = zt("" + e.vendorAccBtn + a).el[0].parentElement;
                    r.lastIndex = 0,
                    r.test(t[s][e.name]) ? (wt(l, this._displayNull, !0),
                    i++) : wt(l, "display: none;", !0)
                }
            0 === i ? (zt(e.accId).hide(),
            o === oe.GoogleVendor ? this.hasGoogleVendors = !1 : this.hasGenVendors = !1) : (o === oe.GoogleVendor ? this.hasGoogleVendors = !0 : this.hasGenVendors = !0,
            zt(e.accId).show()),
            this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, n)
        } else
            for (var c = zt(" " + e.venListId + ' li[style^="display: none"]').el, d = 0; d < c.length; d++)
                wt(c[d], this._displayNull, !0);
        var u = zt("#onetrust-pc-sdk " + e.selectAllEvntHndlr).el[0];
        document.querySelector(e.venListId + ' li:not([style^="display: none"]) ' + e.ctgl + " > input[checked]") ? Gt.setCheckedAttribute("", u, !0) : Gt.setCheckedAttribute("", u, !1),
        document.querySelector(e.venListId + ' li:not([style^="display: none"]) ' + e.ctgl + " > input:not([checked])") ? u.parentElement.classList.add("line-through") : u.parentElement.classList.remove("line-through")
    }
    ,
    wn.prototype.initGoogleVendors = function() {
        this.populateAddtlVendors(Mt.addtlVendorsList),
        this.venAdtlSelAllTglEvent()
    }
    ,
    wn.prototype.initGenVendors = function() {
        this.populateGeneralVendors(),
        Rt.GenVenOptOut && Rt.GeneralVendors && Rt.GeneralVendors.length && this.genVenSelectAllTglEvent()
    }
    ,
    wn.prototype.resetAddtlVendors = function() {
        Vn.searchVendors(Vn.googleSearchSelectors, Mt.addtlVendorsList, oe.GoogleVendor),
        this.showConsentHeader()
    }
    ,
    wn.prototype.venAdtlSelAllTglEvent = function() {
        Vn.selectAllEventHandler({
            vendorsList: '#ot-addtl-venlst li:not([style^="display: none"]) .ot-ven-adtlctgl input',
            selAllCntr: "#onetrust-pc-sdk #ot-selall-adtlvencntr",
            selAllChkbox: "#onetrust-pc-sdk #ot-selall-adtlven-handler"
        })
    }
    ,
    wn.prototype.genVenSelectAllTglEvent = function() {
        var e = {
            vendorsList: Xt.P_Gven_List + ' li:not([style^="display: none"]) .ot-ven-gvctgl input',
            selAllCntr: "#onetrust-pc-sdk #ot-selall-gnvencntr",
            selAllChkbox: "#onetrust-pc-sdk #ot-selall-gnven-handler"
        };
        Vn.selectAllEventHandler(e)
    }
    ,
    wn.prototype.selectAllEventHandler = function(e) {
        for (var t = zt(e.vendorsList).el, o = zt(e.selAllCntr).el[0], n = zt(e.selAllChkbox).el[0], r = !0, i = 0; i < t.length; i++) {
            if (!t[i].checked) {
                r = !1;
                break
            }
            r = !0
        }
        o && (r ? o.classList.remove("line-through") : o.classList.add("line-through")),
        n.checked = !0;
        for (var s = 0; s < t.length && !t[s].checked; s++)
            s !== t.length - 1 || t[s].checked || (n.checked = !1);
        Gt.setCheckedAttribute("", n, n.checked)
    }
    ,
    wn.prototype.vendorLegIntToggleEvent = function() {
        for (var e = zt(Xt.P_Vendor_Container + ' li:not([style^="display: none"]) .' + Xt.P_Ven_Ltgl + " input").el, t = zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Vendor_Leg_El).el[0], o = zt("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0], n = !0, r = 0; r < e.length; r++) {
            if (!e[r].checked) {
                n = !1;
                break
            }
            n = !0
        }
        n ? t.classList.remove("line-through") : t.classList.add("line-through"),
        o.checked = !0;
        for (var i = 0; i < e.length && !e[i].checked; i++)
            i !== e.length - 1 || e[i].checked || (o.checked = !1);
        Gt.setCheckedAttribute("", o, o.checked)
    }
    ,
    wn.prototype.vendorsListEvent = function() {
        for (var e = zt(Xt.P_Vendor_Container + ' li:not([style^="display: none"]) .' + Xt.P_Ven_Ctgl + " input").el, t = zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Vendor_Consent_El).el[0], o = zt("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0], n = !0, r = 0; r < e.length; r++) {
            if (!e[r].checked) {
                n = !1;
                break
            }
            n = !0
        }
        n ? t.classList.remove("line-through") : t.classList.add("line-through"),
        o.checked = !0;
        for (var i = 0; i < e.length && !e[i].checked; i++)
            i !== e.length - 1 || e[i].checked || (o.checked = !1);
        Gt.setCheckedAttribute("", o, o.checked)
    }
    ,
    wn.prototype.showEmptyResults = function(e, t, o) {
        void 0 === o && (o = !1);
        var n = zt("#onetrust-pc-sdk #no-results");
        e ? this.setNoResultsContent(t, o) : (zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content).removeClass("no-results"),
        n.length && n.remove())
    }
    ,
    wn.prototype.playSearchStatus = function(e) {
        var t = e ? document.querySelectorAll(Xt.P_Host_Cntr + " > li") : document.querySelectorAll(Xt.P_Vendor_Container + ' li:not([style$="none;"]),' + Xt.P_Gven_List + ' li:not([style$="none;"])')
          , o = t.length
          , n = zt('#onetrust-pc-sdk [role="status"]');
        o ? n.text(t.length + " " + (e ? "host" : "vendor") + (1 < o ? "s" : "") + " returned.") : n.el[0].textContent = ""
    }
    ,
    wn.prototype.setNoResultsContent = function(e, t) {
        void 0 === t && (t = !1);
        var o = zt("#onetrust-pc-sdk #no-results").el[0];
        if (!o) {
            var n = document.createElement("div")
              , r = document.createElement("p")
              , i = document.createTextNode(" did not match any " + (t ? "hosts." : "vendors."))
              , s = document.createElement("span");
            return n.id = "no-results",
            s.id = "user-text",
            s.innerText = e,
            r.appendChild(s),
            r.appendChild(i),
            n.appendChild(r),
            zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content).addClass("no-results"),
            zt("#vendor-search-handler").el[0].setAttribute("aria-describedby", n.id),
            zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content).append(n)
        }
        o.querySelector("span").innerText = e
    }
    ,
    wn.prototype.searchHostList = function(e) {
        var t = Mt.currentGlobalFilteredList;
        e && (t = this.searchList(e, t)),
        this.initHostData(e, t)
    }
    ,
    wn.prototype.searchList = function(e, t) {
        var o = this.getSearchQuery(e);
        return t.filter(function(e) {
            return o.lastIndex = 0,
            o.test(e.DisplayName || e.HostName)
        })
    }
    ,
    wn.prototype.setListSearchValues = function(e) {
        var t = Rt.PCenterVendorSearchAriaLabel
          , o = Rt.PCenterVendorListSearch
          , n = Rt.PCenterVendorsListText;
        e === Ae.cookies && (t = Rt.PCenterCookieSearchAriaLabel,
        o = Rt.PCenterCookieListSearch,
        n = Rt.PCenterCookiesListText),
        document.querySelector("#onetrust-pc-sdk " + Xt.P_Vendor_Title).innerText = n;
        var r = zt("#onetrust-pc-sdk " + Xt.P_Vendor_Search_Input);
        r.el[0].placeholder = o,
        r.attr("aria-label", t)
    }
    ,
    wn.prototype.initHostData = function(e, t) {
        Mt.optanonHostList = t;
        var o = !1;
        this.setBackBtnTxt(),
        zt(Xt.P_Vendor_List + " #select-all-text-container p").html(Rt.PCenterAllowAllConsentText),
        zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content + " ul" + Xt.P_Host_Cntr).html(""),
        this.showEmptyResults(t && 0 === t.length, e, !0),
        this.setHostListSearchValues(),
        zt("#filter-btn-handler").el[0].setAttribute(this.ARIA_LABEL_ATTRIBUTE, Rt.PCenterCookieListFilterAria),
        zt("#filter-btn-handler title").html(Rt.PCenterCookieListFilterAria),
        Bt.isV2Template && zt("#ot-sel-blk span:first-child").html(Rt.PCenterAllowAllConsentText || Rt.ConsentText);
        for (var n = 0; n < t.length; n++) {
            var r = Mt.hosts.hostTemplate.cloneNode(!0)
              , i = t[n].DisplayName || t[n].HostName;
            this.createHostAccordions(i, r, n),
            o = this.createHostCheckboxes(i, t, n, r, o),
            i = this.populateHostDataIntoDOMElements(r, t, i, n)
        }
        var s = 1 === t.length && t[0].HostName === Rt.PCFirstPartyCookieListText;
        if (Kt.isOptOutEnabled() && !s) {
            Gt.setDisabledAttribute("#onetrust-pc-sdk #select-all-hosts-groups-handler", null, !o);
            for (var a = zt("#onetrust-pc-sdk " + Xt.P_Host_Cntr + " .ot-host-tgl input").el, l = 0; l < a.length; l++)
                a[l].addEventListener("click", this.hostsListEvent);
            zt("#onetrust-pc-sdk " + Xt.P_Select_Cntr).removeClass("ot-hide"),
            this.hostsListEvent()
        } else
            zt("#onetrust-pc-sdk " + Xt.P_Select_Cntr).addClass("ot-hide")
    }
    ,
    wn.prototype.setHostListSearchValues = function() {
        var e = Ft.pcName;
        Rt.GeneralVendorsEnabled && (Bt.isV2Template || e !== dt) && this.setListSearchValues(Ae.vendors),
        Rt.GeneralVendorsEnabled || !Bt.isV2Template && e === dt || this.setListSearchValues(Ae.cookies)
    }
    ,
    wn.prototype.createHostAccordions = function(e, t, o) {
        var n = t.querySelector("." + Xt.P_Host_Bx);
        n && Gt.setHtmlAttributes(n, {
            id: "host-" + o,
            name: "host-" + o,
            "aria-label": e + " " + Rt.PCViewCookiesText,
            "aria-controls": "ot-host-acc-txt-" + o
        });
        var r = t.querySelector(Xt.P_Acc_Txt);
        r && Gt.setHtmlAttributes(r, {
            id: "ot-host-acc-txt-" + o,
            role: "region",
            "aria-labelledby": n.id
        })
    }
    ,
    wn.prototype.createHostCheckboxes = function(e, t, o, n, r) {
        var i = Kt.isOptOutEnabled()
          , s = Bt.isV2Template
          , a = Ft.pcName;
        if (!i || t[o].isFirstParty) {
            var l = n.querySelector(".ot-host-tgl");
            l && l.parentElement.removeChild(l)
        } else {
            var c = void 0;
            s ? ((c = eo.chkboxEl.cloneNode(!0)).classList.add("ot-host-tgl"),
            c.querySelector("input").classList.add("host-checkbox-handler"),
            a === dt ? n.querySelector(Xt.P_Host_Hdr).insertAdjacentElement("beforebegin", c) : n.querySelector(Xt.P_Tgl_Cntr).insertAdjacentElement("beforeend", c)) : c = n.querySelector(".ot-host-tgl"),
            Gt.setHtmlAttributes(c.querySelector("input"), {
                id: "ot-host-chkbox-" + o,
                "aria-label": e,
                hostId: t[o].HostId,
                ckType: t[o].Type
            }),
            c.querySelector("label").setAttribute("for", "ot-host-chkbox-" + o),
            (t[o].Type === J.GenVendor ? Mt.genVendorsConsent[t[o].HostId] : -1 !== Mt.hostsConsent.indexOf(t[o].HostId + ":1")) ? (Gt.setCheckedAttribute(null, c.querySelector("input"), !0),
            t[o].isActive ? Gt.setDisabledAttribute(null, c.querySelector("input"), !0) : r = r || !0) : (r = !0,
            Gt.setCheckedAttribute(null, c.querySelector("input"), !1)),
            c.querySelector(Xt.P_Label_Txt).innerText = e
        }
        return r
    }
    ,
    wn.prototype.populateHostDataIntoDOMElements = function(o, n, e, r) {
        var i = this
          , t = Bt.isV2Template
          , s = Ft.pcName;
        if (Rt.PCAccordionStyle === W.PlusMinus)
            o.querySelector(Xt.P_Acc_Header).insertAdjacentElement("afterbegin", eo.plusMinusEl.cloneNode(!0));
        else if (t) {
            var a = eo.arrowEl.cloneNode(!0);
            s === dt ? o.querySelector(Xt.P_Host_View_Cookies).insertAdjacentElement("afterend", a) : o.querySelector(Xt.P_Tgl_Cntr).insertAdjacentElement("beforeend", a)
        }
        Rt.AddLinksToCookiepedia && !n[r].isFirstParty && (e = '\n                            <a  class="cookie-label"\n                                href="http://cookiepedia.co.uk/host/' + n[r].HostName + '"\n                                rel="noopener"\n                                target="_blank"\n                            >\n                                ' + e + '&nbsp;<span class="ot-scrn-rdr">' + Rt.NewWinTxt + "</span>\n                            </a>\n                        "),
        o.querySelector(Xt.P_Host_Title).innerHTML = e,
        o.querySelector(Xt.P_Host_Desc).innerHTML = n[r].Description,
        n[r].PrivacyPolicy && Rt.pcShowCookieHost && o.querySelector(Xt.P_Host_Desc).insertAdjacentHTML("afterend", '<a href="' + n[r].PrivacyPolicy + '" rel="noopener" target="_blank">' + (t ? Rt.PCGVenPolicyTxt : Rt.PCCookiePolicyText) + '&nbsp;<span class="ot-scrn-rdr">' + Rt.NewWinTxt + "</span></a>");
        var l = o.querySelector(Xt.P_Host_View_Cookies);
        if (Mt.showGeneralVendors && !n[r].Cookies.length ? (Gt.removeChild(l),
        zt(o).addClass("ot-hide-acc")) : Rt.PCViewCookiesText && (l.innerHTML = Rt.PCViewCookiesText),
        !n[r].Description || !Rt.pcShowCookieHost) {
            var c = o.querySelector(Xt.P_Host_Desc);
            c.parentElement.removeChild(c)
        }
        return zt(o.querySelector(Xt.P_Host_Opt)).html(""),
        n[r].Cookies.forEach(function(e) {
            var t = i.getCookieElement(e, n[r]);
            zt(o.querySelector(Xt.P_Host_Opt)).append(t)
        }),
        zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content + " ul" + Xt.P_Host_Cntr).append(o),
        e
    }
    ,
    wn.prototype.hostsListEvent = function() {
        for (var e = zt("#onetrust-pc-sdk " + Xt.P_Host_Cntr + " .ot-host-tgl input").el, t = zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Host_El).el[0], o = zt("#onetrust-pc-sdk #select-all-hosts-groups-handler").el[0], n = zt("#onetrust-pc-sdk " + Xt.P_Cnsnt_Header).el[0], r = !0, i = 0; i < e.length; i++) {
            if (!e[i].checked) {
                r = !1;
                break
            }
            r = !0
        }
        r ? t.classList.remove("line-through") : t.classList.add("line-through"),
        o.checked = !0;
        for (var s = 0; s < e.length && !e[s].checked; s++)
            s !== e.length - 1 || e[s].checked || (o.checked = !1);
        Gt.setCheckedAttribute("", o, o.checked),
        o && n && o.setAttribute(this.ARIA_LABEL_ATTRIBUTE, n.textContent + " " + Rt.PCenterSelectAllVendorsText)
    }
    ,
    wn.prototype.loadHostList = function(e, o) {
        void 0 === e && (e = "");
        var n = []
          , r = []
          , t = [];
        if (Mt.cookieListType !== X.GenVen && (Rt.Groups.forEach(function(e) {
            C(e.SubGroups, [e]).forEach(function(e) {
                if (o.length) {
                    if (-1 !== o.indexOf(e.CustomGroupId)) {
                        var t = In.getCookiesForGroup(e);
                        r = C(r, t.firstPartyCookiesList),
                        n = C(n, t.thirdPartyCookiesList)
                    }
                } else
                    t = In.getCookiesForGroup(e),
                    r = C(r, t.firstPartyCookiesList),
                    n = C(n, t.thirdPartyCookiesList)
            })
        }),
        r.length && n.unshift({
            HostName: Rt.PCFirstPartyCookieListText,
            DisplayName: Rt.PCFirstPartyCookieListText,
            HostId: "first-party-cookies-group",
            isFirstParty: !0,
            Cookies: r,
            Description: ""
        })),
        Mt.showGeneralVendors) {
            var i = this.getFilteredGenVendorsList(o)
              , s = this.mapGenVendorListToHostFormat(i);
            t = C(n, s)
        } else
            t = n;
        Mt.currentGlobalFilteredList = t,
        this.initHostData(e, t)
    }
    ,
    wn.prototype.mapGenVendorListToHostFormat = function(e) {
        return e.map(function(e) {
            return {
                Cookies: e.Cookies,
                DisplayName: e.Name,
                HostName: e.Name,
                HostId: e.VendorCustomId,
                Description: e.Description,
                Type: J.GenVendor,
                PrivacyPolicy: e.PrivacyPolicyUrl,
                isActive: -1 < Mt.alwaysActiveGenVendors.indexOf(e.VendorCustomId)
            }
        })
    }
    ,
    wn.prototype.mapGenVendorToHostFormat = function(e) {
        return {
            Cookies: e.Cookies,
            DisplayName: e.Name,
            HostName: e.Name,
            HostId: e.VendorCustomId,
            Description: e.Description,
            Type: J.GenVendor
        }
    }
    ,
    wn.prototype.getFilteredGenVendorsList = function(t) {
        var o = []
          , e = [];
        if (t.length) {
            Rt.Groups.forEach(function(e) {
                C(e.SubGroups, [e]).forEach(function(e) {
                    -1 !== t.indexOf(e.CustomGroupId) && e.GeneralVendorsIds && e.GeneralVendorsIds.forEach(function(e) {
                        o.push(e)
                    })
                })
            });
            var n = Rt.GeneralVendors;
            return o.length && (e = n.filter(function(e) {
                if (-1 < o.indexOf(e.VendorCustomId))
                    return e
            })),
            e
        }
        return Rt.GeneralVendors
    }
    ,
    wn.prototype.initVendorsData = function(e, t) {
        var o = this
          , n = t
          , r = Mt.vendors.list;
        if (this.setBackBtnTxt(),
        zt(Xt.P_Vendor_List + " #select-all-text-container p").html(Rt.PCenterAllowAllConsentText),
        Bt.isV2Template && (zt("#ot-sel-blk span:first-child").html(Rt.PCenterAllowAllConsentText || Rt.ConsentText),
        zt("#ot-sel-blk span:last-child").html(Rt.LegitInterestText),
        zt("#onetrust-pc-sdk " + Xt.P_Cnsnt_Header).html(Rt.PCenterAllowAllConsentText),
        Ft.legIntSettings.PAllowLI && !Ft.legIntSettings.PShowLegIntBtn && zt("#onetrust-pc-sdk .ot-sel-all-hdr .ot-li-hdr").html(Rt.PCenterLegitInterestText),
        Ft.legIntSettings.PAllowLI && !Ft.legIntSettings.PShowLegIntBtn || wt(zt("#ot-sel-blk span:first-child").el[0], "max-width: 100%;", !0)),
        zt("#onetrust-pc-sdk #filter-btn-handler").el[0].setAttribute(this.ARIA_LABEL_ATTRIBUTE, Rt.PCenterVendorListFilterAria),
        zt("#onetrust-pc-sdk #filter-btn-handler title").html(Rt.PCenterVendorListFilterAria),
        this.hasIabVendors = 0 < n.length,
        this.showEmptyResults(!this.hasGoogleVendors && !this.hasIabVendors && !this.hasGenVendors, e, !1),
        0 === n.length ? zt("#ot-lst-cnt .ot-acc-cntr").hide() : zt("#ot-lst-cnt .ot-acc-cntr").show(),
        zt("#onetrust-pc-sdk " + Xt.P_Vendor_Container + " ." + Xt.P_Ven_Bx).length !== r.length && this.attachVendorsToDOM(),
        n.length !== r.length)
            r.forEach(function(e) {
                var t = zt(Xt.P_Vendor_Container + " #IAB" + e.vendorId).el[0].parentElement;
                -1 === n.indexOf(e) ? wt(t, "display: none;", !0) : wt(t, o._displayNull, !0)
            });
        else
            for (var i = zt(Xt.P_Vendor_Container + ' li[style^="display: none"]').el, s = 0; s < i.length; s++)
                wt(i[s], this._displayNull, !0);
        !Bt.isV2Template && Ft.pcName === dt || this.setListSearchValues(Ae.vendors);
        var a = document.querySelector("#vdr-lst-dsc");
        if (!a && Rt.PCenterVendorListDescText)
            if ((a = document.createElement("p")).id = "vdr-lst-dsc",
            zt(a).html(Rt.PCenterVendorListDescText),
            Ft.pcName !== dt && Ft.pcName !== at) {
                var l = document.querySelector("#onetrust-pc-sdk " + Xt.P_Vendor_Title_Elm);
                l && l.insertAdjacentElement("afterend", a)
            } else {
                var c = document.querySelector(Xt.P_Vendor_Content + " .ot-sdk-row");
                c && c.insertAdjacentElement("beforebegin", a)
            }
        zt("#onetrust-pc-sdk " + Xt.P_Select_Cntr).removeClass("ot-hide"),
        this.vendorsListEvent(),
        Ft.legIntSettings.PAllowLI && this.vendorLegIntToggleEvent()
    }
    ,
    wn.prototype.updateVendorsDOMToggleStatus = function(e, t) {
        void 0 === t && (t = !1);
        for (var o = zt(Xt.P_Vendor_Container + " " + Xt.P_Tgl_Cntr).el, n = Rt.VendorConsentModel === Go, r = 0; r < o.length; r++) {
            var i = o[r].querySelector("." + Xt.P_Ven_Ctgl + " input")
              , s = o[r].querySelector("." + Xt.P_Ven_Ltgl + " input");
            t ? (i && Gt.setCheckedAttribute("", i, n),
            s && Gt.setCheckedAttribute("", s, !0)) : (i && Gt.setCheckedAttribute("", i, e),
            s && Gt.setCheckedAttribute("", s, e))
        }
        var a = zt("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0];
        if (a) {
            a.parentElement.classList.remove("line-through");
            var l = !!t || e;
            Gt.setCheckedAttribute("", a, l)
        }
        var c = zt("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0];
        c && (c.parentElement.classList.remove("line-through"),
        l = t ? n : e,
        Gt.setCheckedAttribute("", c, l)),
        Rt.UseGoogleVendors && (t ? this.updateGoogleCheckbox(n) : this.updateGoogleCheckbox(e)),
        Mt.showGeneralVendors && Rt.GenVenOptOut && this.updateGenVenCheckbox(e)
    }
    ,
    wn.prototype.updateGenVenCheckbox = function(e) {
        for (var t = zt(Xt.P_Gven_List + " .ot-ven-gvctgl input").el, o = 0; o < t.length; o++)
            Gt.setCheckedAttribute("", t[o], e);
        var n = zt("#onetrust-pc-sdk #ot-selall-gnven-handler").el[0];
        n && (n.parentElement.classList.remove("line-through"),
        Gt.setCheckedAttribute("", n, e))
    }
    ,
    wn.prototype.updateGoogleCheckbox = function(e) {
        for (var t = zt("#ot-addtl-venlst .ot-tgl-cntr input").el, o = 0; o < t.length; o++)
            Gt.setCheckedAttribute("", t[o], e);
        var n = zt("#onetrust-pc-sdk #ot-selall-adtlven-handler").el[0];
        n && (n.parentElement.classList.remove("line-through"),
        Gt.setCheckedAttribute("", n, e))
    }
    ,
    wn.prototype.updateVendorDisclosure = function(e, t) {
        var o = zt(Xt.P_Vendor_Container + " #IAB" + e).el[0].parentElement;
        if (t && t.disclosures) {
            var r = o.querySelector(Xt.P_Ven_Dets)
              , i = o.querySelector(Xt.P_Ven_Disc).cloneNode(!0)
              , n = i.cloneNode(!0);
            n.innerHTML = "<p><b>" + Rt.PCenterVendorListDisclosure + ": </b></p>",
            r.insertAdjacentElement("beforeend", n),
            t.disclosures.forEach(function(e) {
                var t = i.cloneNode(!0)
                  , o = "<p>" + Rt.PCenterVendorListStorageIdentifier + " </p> <p>" + (e.name || e.identifier) + " </p>";
                if (e.type && (o += "<p>" + Rt.PCenterVendorListStorageType + " </p> <p>" + e.type + " </p>"),
                e.maxAgeSeconds) {
                    var n = Gt.calculateCookieLifespan(e.maxAgeSeconds);
                    o += "<p>" + Rt.PCenterVendorListLifespan + " </p> <p>" + n + " </p>"
                }
                e.domain && (o += "<p>" + Rt.PCenterVendorListStorageDomain + " </p> <p>" + e.domain + " </p>"),
                e.purposes && (o += "<p>" + Rt.PCenterVendorListStoragePurposes + " </p> <p>" + e.purposes + " </p>"),
                t.innerHTML = o,
                r.insertAdjacentElement("beforeend", t)
            })
        }
    }
    ,
    wn.prototype.addDescriptionElement = function(e, t) {
        var o = document.createElement("p");
        o.innerHTML = t || "",
        e.parentNode.insertBefore(o, e)
    }
    ,
    wn.prototype.attachVendorsToDOM = function() {
        var R, q, M = Mt.vendors.list, U = Rt.IabType, j = Ft.pcName, z = Mt.vendors.vendorTemplate.cloneNode(!0);
        Mt.discVendors = {},
        Bt.isV2Template && (R = z.querySelector(".ot-ven-pur").cloneNode(!0),
        q = z.querySelector(Xt.P_Ven_Disc).cloneNode(!0),
        zt(z.querySelector(".ot-ven-dets")).html(""));
        for (var e = function(e) {
            var t = z.cloneNode(!0)
              , o = M[e].vendorId
              , n = M[e].vendorName
              , r = t.querySelector("." + Xt.P_Ven_Bx)
              , i = Mt.vendorsSetting[o]
              , s = t.querySelector(Xt.P_Ven_Link);
            Gt.setHtmlAttributes(r, {
                id: "IAB" + o,
                name: "IAB" + o,
                "aria-controls": "IAB-ACC-TXT" + o,
                "aria-label": n
            }),
            r.nextElementSibling.setAttribute("for", "IAB" + o),
            t.querySelector(Xt.P_Ven_Name).innerText = n,
            Gt.setHtmlAttributes(s, {
                href: M[e].policyUrl,
                rel: "noopener",
                target: "_blank"
            }),
            s.innerHTML = Rt.PCenterViewPrivacyPolicyText + "&nbsp;<span class='ot-scrn-rdr'>" + n + " " + Rt.NewWinTxt + "</span>";
            var a = Bt.isV2Template ? eo.chkboxEl.cloneNode(!0) : t.querySelector(".ot-checkbox")
              , l = a.cloneNode(!0)
              , c = a.cloneNode(!0)
              , d = t.querySelector(Xt.P_Tgl_Cntr);
            Bt.isV2Template || a.parentElement.removeChild(a);
            var u = t.querySelector(Xt.P_Arrw_Cntr);
            if (i.consent) {
                c.classList.add(Xt.P_Ven_Ctgl);
                var p = -1 !== Ut.inArray(o + ":true", Mt.vendors.selectedVendors)
                  , h = c.querySelector("input");
                if (Bt.isV2Template) {
                    h.classList.add("vendor-checkbox-handler");
                    var g = c.querySelector(".ot-label-status");
                    Rt.PCShowConsentLabels ? g.innerHTML = p ? Rt.PCActiveText : Rt.PCInactiveText : Gt.removeChild(g)
                }
                Gt.setCheckedAttribute("", h, p),
                Gt.setHtmlAttributes(h, {
                    id: Xt.P_Vendor_CheckBx + "-" + e,
                    vendorid: o,
                    "aria-label": n
                }),
                c.querySelector("label").setAttribute("for", Xt.P_Vendor_CheckBx + "-" + e),
                c.querySelector(Xt.P_Label_Txt).textContent = n,
                j === dt ? Rt.PCTemplateUpgrade ? d.insertAdjacentElement("beforeend", c) : zt(d).append(c) : d.insertBefore(c, u)
            }
            if (i.legInt && !i.specialPurposesOnly) {
                var C = -1 !== Ut.inArray(o + ":true", Mt.vendors.selectedLegIntVendors);
                if (Ft.legIntSettings.PShowLegIntBtn) {
                    var y = to.generateLegIntButtonElements(C, o, !0);
                    t.querySelector(Xt.P_Acc_Txt).insertAdjacentHTML("beforeend", y);
                    var f = t.querySelector(".ot-remove-objection-handler");
                    f && wt(f, f.getAttribute("data-style"))
                } else
                    h = l.querySelector("input"),
                    Bt.isV2Template && (h.classList.add("vendor-checkbox-handler"),
                    g = l.querySelector(".ot-label-status"),
                    Rt.PCShowConsentLabels ? g.innerHTML = C ? Rt.PCActiveText : Rt.PCInactiveText : Gt.removeChild(g)),
                    l.classList.add(Xt.P_Ven_Ltgl),
                    h.classList.remove("vendor-checkbox-handler"),
                    h.classList.add("vendor-leg-checkbox-handler"),
                    Gt.setCheckedAttribute("", h, C),
                    Gt.setHtmlAttributes(h, {
                        id: Xt.P_Vendor_LegCheckBx + "-" + e,
                        "leg-vendorid": o,
                        "aria-label": n
                    }),
                    l.querySelector("label").setAttribute("for", Xt.P_Vendor_LegCheckBx + "-" + e),
                    l.querySelector(Xt.P_Label_Txt).textContent = n,
                    t.querySelector("." + Xt.P_Ven_Ctgl) && (u = t.querySelector("." + Xt.P_Ven_Ctgl)),
                    j !== dt || d.children.length ? d.insertBefore(l, u) : zt(d).append(l),
                    i.consent || j !== dt || l.classList.add(Xt.P_Ven_Ltgl_Only)
            }
            Bt.isV2Template && (d.insertAdjacentElement("beforeend", eo.arrowEl.cloneNode(!0)),
            Rt.PCAccordionStyle !== W.Caret && t.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", eo.plusMinusEl.cloneNode(!0)));
            var v = t.querySelector(Xt.P_Acc_Txt);
            if (v && Gt.setHtmlAttributes(v, {
                id: "IAB-ACC-TXT" + o,
                "aria-labelledby": "IAB-ACC-TXT" + o,
                role: "region"
            }),
            M[e].deviceStorageDisclosureUrl && (Gt.setHtmlAttributes(r, {
                "disc-vid": o
            }),
            Mt.discVendors[o] = {
                isFetched: !1,
                disclosureUrl: M[e].deviceStorageDisclosureUrl
            }),
            Bt.isV2Template)
                K.populateVendorDetailsHtml(t, R, M[e], q);
            else {
                var k = t.querySelector(".vendor-option-purpose")
                  , m = t.querySelector(".vendor-consent-group")
                  , b = t.querySelector(".legitimate-interest")
                  , P = t.querySelector(".legitimate-interest-group")
                  , S = t.querySelector(".spl-purpose")
                  , A = t.querySelector(".spl-purpose-grp")
                  , T = t.querySelector(".vendor-feature")
                  , I = t.querySelector(".vendor-feature-group")
                  , L = t.querySelector(".vendor-spl-feature")
                  , _ = t.querySelector(".vendor-spl-feature-grp")
                  , V = m.cloneNode(!0)
                  , B = P.cloneNode(!0)
                  , w = A.cloneNode(!0)
                  , E = I.cloneNode(!0)
                  , x = _.cloneNode(!0);
                q = t.querySelector(Xt.P_Ven_Disc);
                var G = t.querySelector(Xt.P_Ven_Dets)
                  , O = q.cloneNode(!0);
                q.parentElement.removeChild(q),
                K.attachVendorDisclosure(O, M[e]),
                G.insertAdjacentElement("afterbegin", O),
                m.parentElement.removeChild(m),
                i.consent && (zt(k.querySelector("p")).text(Rt.ConsentPurposesText),
                M[e].purposes.forEach(function(e) {
                    zt(V.querySelector(".consent-category")).text(e.purposeName);
                    var t = V.querySelector(".consent-status");
                    t && V.removeChild(t),
                    b.insertAdjacentHTML("beforebegin", V.outerHTML)
                })),
                i.consent || k.parentElement.removeChild(k);
                var N = B.querySelector(".vendor-opt-out-handler");
                "IAB2" === Rt.IabType && N.parentElement.removeChild(N),
                P.parentElement.removeChild(P),
                i.legInt && (zt(b.querySelector("p")).text(Rt.LegitimateInterestPurposesText),
                Ft.legIntSettings.PAllowLI && "IAB2" === Rt.IabType && M[e].legIntPurposes.forEach(function(e) {
                    zt(B.querySelector(".consent-category")).text(e.purposeName),
                    b.insertAdjacentHTML("afterend", B.outerHTML)
                })),
                i.legInt || b.parentElement.removeChild(b),
                A.parentElement.removeChild(A),
                "IAB2" === U && M[e].specialPurposes.forEach(function(e) {
                    zt(w.querySelector(".consent-category")).text(e.purposeName),
                    S.insertAdjacentHTML("afterend", w.outerHTML)
                }),
                0 === M[e].specialPurposes.length ? S.parentElement.removeChild(S) : zt(S.querySelector("p")).text(Rt.SpecialPurposesText),
                I.parentElement.removeChild(I),
                zt(T.querySelector("p")).text(Rt.FeaturesText),
                M[e].features.forEach(function(e) {
                    zt(E.querySelector(".consent-category")).text(e.featureName),
                    T.insertAdjacentHTML("afterend", E.outerHTML)
                }),
                0 === M[e].features.length && T.parentElement.removeChild(T),
                L.parentElement.removeChild(_),
                "IAB2" === U && M[e].specialFeatures.forEach(function(e) {
                    zt(x.querySelector(".consent-category")).text(e.featureName),
                    L.insertAdjacentHTML("afterend", x.outerHTML)
                }),
                0 === M[e].specialFeatures.length ? L.parentElement.removeChild(L) : zt(L.querySelector("p")).text(Rt.SpecialFeaturesText);
                var D = r.parentElement.querySelector(".vendor-purposes p");
                D.parentElement.removeChild(D)
            }
            zt("#onetrust-pc-sdk " + Xt.P_Vendor_Container).append(t);
            var H = zt("#onetrust-pc-sdk " + Xt.P_Sel_All_Vendor_Consent_Handler).el[0];
            H && H.setAttribute(K.ARIA_LABEL_ATTRIBUTE, Rt.PCenterSelectAllVendorsText + " " + Rt.LegitInterestText);
            var F = zt("#onetrust-pc-sdk " + Xt.P_Sel_All_Vendor_Leg_Handler).el[0];
            F && F.setAttribute(K.ARIA_LABEL_ATTRIBUTE, Rt.PCenterSelectAllVendorsText + " " + Rt.ConsentText)
        }, K = this, t = 0; t < M.length; t++)
            e(t)
    }
    ,
    wn.prototype.populateVendorDetailsHtml = function(e, t, o, n) {
        var r = e.querySelector(".ot-ven-dets")
          , i = Mt.vendorsSetting[o.vendorId]
          , s = n.cloneNode(!0);
        if (this.attachVendorDisclosure(s, o),
        r.insertAdjacentElement("beforeEnd", s),
        i.consent) {
            var a = t.cloneNode(!0)
              , l = "<h4>" + Rt.ConsentPurposesText + "</h4>";
            l += "<ul>",
            o.purposes.forEach(function(e) {
                l += "<li><p>" + e.purposeName + "</p></li>"
            }),
            l += "</ul>",
            a.innerHTML = l,
            r.insertAdjacentElement("beforeEnd", a)
        }
        if (i.legInt && o.legIntPurposes.length) {
            var c = t.cloneNode(!0)
              , d = "<h4>" + Rt.LegitimateInterestPurposesText + "</h4>";
            d += "<ul>",
            o.legIntPurposes.forEach(function(e) {
                d += "<li><p>" + e.purposeName + "</p></li>"
            }),
            d += "</ul>",
            c.innerHTML = d,
            r.insertAdjacentElement("beforeEnd", c)
        }
        if ("IAB2" === Ft.iabType && o.specialPurposes.length) {
            var u = t.cloneNode(!0)
              , p = "<h4>" + Rt.SpecialPurposesText + "</h4>";
            p += "<ul>",
            o.specialPurposes.forEach(function(e) {
                p += "<li><p>" + e.purposeName + "</p></li>"
            }),
            p += "</ul>",
            u.innerHTML = p,
            r.insertAdjacentElement("beforeEnd", u)
        }
        if (o.features.length) {
            var h = t.cloneNode(!0)
              , g = "<h4>" + Rt.FeaturesText + "</h4>";
            g += "<ul>",
            o.features.forEach(function(e) {
                g += "<li><p>" + e.featureName + "</p></li>"
            }),
            g += "</ul>",
            h.innerHTML = g,
            r.insertAdjacentElement("beforeEnd", h)
        }
        if ("IAB2" === Ft.iabType && o.specialFeatures.length) {
            var C = t.cloneNode(!0)
              , y = "<h4>" + Rt.SpecialFeaturesText + "</h4>";
            y += "<ul>",
            o.specialFeatures.forEach(function(e) {
                y += "<li><p>" + e.featureName + "</p></li>"
            }),
            y += "</ul>",
            C.innerHTML = y,
            r.insertAdjacentElement("beforeEnd", C)
        }
    }
    ,
    wn.prototype.InitializeVendorList = function() {
        if (Mt.vendors.list = Mt.iabData ? Mt.iabData.vendors : null,
        Mt.vendors.vendorTemplate = zt(Xt.P_Vendor_Container + " li").el[0].cloneNode(!0),
        zt("#onetrust-pc-sdk " + Xt.P_Vendor_Container).html(""),
        !Bt.isV2Template && Ft.pcName === dt) {
            var e, t = Mt.vendors.vendorTemplate.querySelectorAll(Xt.P_Acc_Header);
            Ft.legIntSettings.PAllowLI && "IAB2" === Ft.iabType ? (e = t[0]).parentElement.removeChild(e) : (e = t[1]).parentElement.removeChild(e)
        }
    }
    ,
    wn.prototype.cancelVendorFilter = function() {
        for (var e = zt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-purposeid")
              , n = 0 <= Mt.filterByIABCategories.indexOf(o);
            Gt.setCheckedAttribute(null, e[t], n)
        }
    }
    ,
    wn.prototype.attachVendorDisclosure = function(e, t) {
        var o = "<h4>" + Rt.PCenterVendorListLifespan + " :</h4><span> " + t.cookieMaxAge + "</span>";
        t.usesNonCookieAccess && (o += "<p>" + Rt.PCenterVendorListNonCookieUsage + "</p>"),
        e.innerHTML = o
    }
    ,
    wn.prototype.updateVendorFilterList = function() {
        for (var e = zt("#onetrust-pc-sdk .category-filter-handler").el, t = 0; t < e.length; t++) {
            var o = e[t].getAttribute("data-purposeid");
            if (e[t].checked && Mt.filterByIABCategories.indexOf(o) < 0)
                Mt.filterByIABCategories.push(o);
            else if (!e[t].checked && -1 < Mt.filterByIABCategories.indexOf(o)) {
                var n = Mt.filterByIABCategories;
                Mt.filterByIABCategories.splice(n.indexOf(o), 1)
            }
        }
        return Mt.filterByIABCategories
    }
    ,
    wn.prototype.saveVendorStatus = function() {
        var e = Mt.vendors
          , t = Mt.oneTrustIABConsent;
        t.purpose = e.selectedPurpose.slice(),
        t.legimateInterest = e.selectedLegInt.slice(),
        t.vendors = e.selectedVendors.slice(),
        t.legIntVendors = e.selectedLegIntVendors.slice(),
        t.specialFeatures = e.selectedSpecialFeatures.slice();
        var o = Mt.addtlVendors;
        o.vendorConsent = Object.keys(o.vendorSelected)
    }
    ,
    wn.prototype.updateIabVariableReference = function() {
        var e = Mt.oneTrustIABConsent
          , t = Mt.vendors;
        t.selectedPurpose = e.purpose.slice(),
        t.selectedLegInt = e.legimateInterest.slice(),
        t.selectedVendors = e.vendors.slice(),
        t.selectedLegIntVendors = e.legIntVendors.slice(),
        t.selectedSpecialFeatures = e.specialFeatures.slice();
        var o = Mt.addtlVendors;
        o.vendorSelected = {},
        o.vendorConsent.forEach(function(e) {
            o.vendorSelected[e] = !0
        })
    }
    ,
    wn.prototype.allowAllhandler = function() {
        gn.initializeIABData(!0, !1)
    }
    ,
    wn.prototype.rejectAllHandler = function(e) {
        void 0 === e && (e = !1),
        gn.initializeIABData(!1, !0, e)
    }
    ,
    wn.prototype.populateAddtlVendors = function(e) {
        var t = Rt.PCAccordionStyle === W.Caret ? eo.arrowEl.cloneNode(!0) : eo.plusMinusEl.cloneNode(!0)
          , o = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox")
          , n = o.cloneNode(!0);
        Gt.removeChild(n.querySelector("#ot-selall-hostcntr")),
        Gt.removeChild(o.querySelector("#ot-selall-vencntr")),
        Gt.removeChild(o.querySelector("#ot-selall-licntr"));
        var r = eo.accordionEl.cloneNode(!0);
        r.classList.add("ot-iab-acc"),
        r.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", t.cloneNode(!0)),
        r.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + Rt.PCIABVendorsText + "</div>"),
        r.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", n),
        r.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", zt("#ot-ven-lst").el[0]),
        zt("#ot-lst-cnt .ot-sdk-column").append(r),
        r.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, Rt.PCIABVendorsText),
        this.iabAccInit = !0;
        var i = n.cloneNode(!0);
        Gt.removeChild(i.querySelector("#ot-selall-licntr")),
        i.querySelector(".ot-chkbox").id = "ot-selall-adtlvencntr",
        i.querySelector("input").id = "ot-selall-adtlven-handler",
        i.querySelector("label").setAttribute("for", "ot-selall-adtlven-handler");
        var s = eo.accordionEl.cloneNode(!0);
        s.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", t.cloneNode(!0)),
        s.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + Rt.PCGoogleVendorsText + "</div>"),
        s.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", i),
        s.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "<ul id='ot-addtl-venlst'></ul>"),
        s.classList.add("ot-adtlv-acc"),
        s.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, Rt.PCGoogleVendorsText);
        var a = Mt.vendors.vendorTemplate.cloneNode(!0);
        for (var l in a.querySelector("button").classList.remove("ot-ven-box"),
        a.querySelector("button").classList.add("ot-addtl-venbox"),
        Gt.removeChild(a.querySelector(".ot-acc-txt")),
        e)
            if (e[l]) {
                var c = a.cloneNode(!0)
                  , d = e[l].name;
                c.querySelector(Xt.P_Ven_Name).innerText = d;
                var u = c.querySelector("button");
                Gt.setHtmlAttributes(u, {
                    id: "Adtl-IAB" + l
                }),
                Gt.setHtmlAttributes(c.querySelector(Xt.P_Ven_Link), {
                    href: e[l].policyUrl,
                    rel: "noopener",
                    target: "_blank"
                }),
                c.querySelector(Xt.P_Ven_Link).innerHTML = Rt.PCenterViewPrivacyPolicyText + "&nbsp;<span class='ot-scrn-rdr'>" + d + " " + Rt.NewWinTxt + "</span>";
                var p = eo.chkboxEl.cloneNode(!0);
                p.classList.remove("ot-ven-ctgl"),
                p.classList.add("ot-ven-adtlctgl");
                var h = Boolean(Mt.addtlVendors.vendorSelected[l])
                  , g = p.querySelector("input");
                g.classList.add("ot-addtlven-chkbox-handler");
                var C = p.querySelector(".ot-label-status");
                Rt.PCShowConsentLabels ? C.innerHTML = h ? Rt.PCActiveText : Rt.PCInactiveText : Gt.removeChild(C),
                Gt.setCheckedAttribute("", g, h),
                Gt.setHtmlAttributes(g, {
                    id: "ot-addtlven-chkbox-" + l,
                    "addtl-vid": l,
                    "aria-label": d
                }),
                p.querySelector("label").setAttribute("for", "ot-addtlven-chkbox-" + l),
                p.querySelector(Xt.P_Label_Txt).textContent = d;
                var y = c.querySelector(Xt.P_Tgl_Cntr);
                zt(y).append(p),
                y.insertAdjacentElement("beforeend", eo.arrowEl.cloneNode(!0)),
                Rt.PCAccordionStyle !== W.Caret && c.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", eo.plusMinusEl.cloneNode(!0)),
                zt(s.querySelector("#ot-addtl-venlst")).append(c)
            }
        zt("#ot-lst-cnt .ot-sdk-column").append(s),
        zt("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr > input", function(e) {
            Gt.setCheckedAttribute(null, e.target, e.target.checked)
        }),
        this.showConsentHeader()
    }
    ,
    wn.prototype.populateGeneralVendors = function() {
        var p = this
          , e = Rt.GeneralVendors
          , t = document.querySelector(".ot-gv-acc")
          , h = !!t;
        if (!e.length)
            return this.hasGenVendors = !1,
            void (t && zt(t).hide());
        this.hasGenVendors = !0,
        t && zt(t).show();
        var o = Rt.PCAccordionStyle === W.Caret ? eo.arrowEl.cloneNode(!0) : eo.plusMinusEl.cloneNode(!0);
        this.iabAccInit || this.addIabAccordion();
        var n = document.createElement("div");
        n.setAttribute("class", "ot-sel-all-chkbox");
        var r = eo.chkboxEl.cloneNode(!0);
        r.id = "ot-selall-gnvencntr",
        r.querySelector("input").id = "ot-selall-gnven-handler",
        r.querySelector("label").setAttribute("for", "ot-selall-gnven-handler"),
        zt(n).append(r);
        var g = eo.accordionEl.cloneNode(!0);
        g.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", o.cloneNode(!0)),
        g.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + Rt.PCenterGeneralVendorsText + "</div>"),
        Rt.GenVenOptOut && g.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", n),
        g.querySelector(".ot-acc-txt").insertAdjacentHTML("beforeEnd", "<ul id='ot-gn-venlst'></ul>"),
        g.classList.add("ot-gv-acc"),
        g.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, Rt.PCenterGeneralVendorsText);
        var C = Mt.vendors.vendorTemplate.cloneNode(!0);
        C.querySelector("button").classList.remove("ot-ven-box"),
        C.querySelector("button").classList.add("ot-gv-venbox"),
        zt(C.querySelector(".ot-acc-txt")).html('<ul class="ot-host-opt"></ul>'),
        h && zt("" + Xt.P_Gven_List).html("");
        var y = !0;
        e.forEach(function(e) {
            var o = p.mapGenVendorToHostFormat(e)
              , n = C.cloneNode(!0)
              , t = e.VendorCustomId
              , r = e.Name
              , i = n.querySelector(Xt.P_Ven_Link);
            n.querySelector(Xt.P_Ven_Name).innerText = r;
            var s = n.querySelector("button");
            if (Gt.setHtmlAttributes(s, {
                id: "Gn-" + t
            }),
            e.PrivacyPolicyUrl ? (Gt.setHtmlAttributes(i, {
                href: e.PrivacyPolicyUrl,
                rel: "noopener",
                target: "_blank"
            }),
            i.innerHTML = Rt.PCGVenPolicyTxt + "&nbsp;<span class='ot-scrn-rdr'>" + r + " " + Rt.NewWinTxt + "</span>") : i.classList.add("ot-hide"),
            p.addDescriptionElement(i, e.Description),
            Rt.GenVenOptOut) {
                var a = eo.chkboxEl.cloneNode(!0);
                a.classList.remove("ot-ven-ctgl"),
                a.classList.add("ot-ven-gvctgl");
                var l = Boolean(Mt.genVendorsConsent[t])
                  , c = a.querySelector("input");
                c.classList.add("ot-gnven-chkbox-handler");
                var d = a.querySelector(".ot-label-status");
                Rt.PCShowConsentLabels ? d.innerHTML = l ? Rt.PCActiveText : Rt.PCInactiveText : Gt.removeChild(d),
                Gt.setCheckedAttribute("", c, l),
                Gt.setHtmlAttributes(c, {
                    id: "ot-gnven-chkbox-" + t,
                    "gn-vid": t,
                    "aria-label": r
                }),
                mo.isGenVenPartOfAlwaysActiveGroup(t) ? Gt.setDisabledAttribute(null, c, !0) : y = !1,
                a.querySelector("label").setAttribute("for", "ot-gnven-chkbox-" + t),
                a.querySelector(Xt.P_Label_Txt).textContent = r;
                var u = n.querySelector(Xt.P_Tgl_Cntr);
                zt(u).append(a),
                u.insertAdjacentElement("beforeend", eo.arrowEl.cloneNode(!0))
            }
            Rt.PCAccordionStyle !== W.Caret && n.querySelector(".ot-ven-hdr").insertAdjacentElement("beforebegin", eo.plusMinusEl.cloneNode(!0)),
            e.Cookies.length || zt(n).addClass("ot-hide-acc"),
            e.Cookies.forEach(function(e) {
                var t = p.getCookieElement(e, o);
                zt(n.querySelector(".ot-host-opt")).append(t)
            }),
            h ? zt("" + Xt.P_Gven_List).append(n) : zt(g.querySelector("" + Xt.P_Gven_List)).append(n)
        }),
        h || zt("#ot-lst-cnt .ot-sdk-column").append(g),
        zt("#onetrust-pc-sdk").on("click", "#ot-pc-lst .ot-acc-cntr > input", function(e) {
            Gt.setCheckedAttribute(null, e.target, e.target.checked)
        }),
        this.showConsentHeader(),
        y && Gt.setDisabledAttribute("#ot-selall-gnven-handler", null, !0)
    }
    ,
    wn.prototype.addIabAccordion = function() {
        var e = Rt.PCAccordionStyle === W.Caret ? eo.arrowEl.cloneNode(!0) : eo.plusMinusEl.cloneNode(!0)
          , t = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox")
          , o = t.cloneNode(!0);
        Gt.removeChild(o.querySelector("#ot-selall-hostcntr")),
        Gt.removeChild(t.querySelector("#ot-selall-vencntr")),
        Gt.removeChild(t.querySelector("#ot-selall-licntr"));
        var n = eo.accordionEl.cloneNode(!0);
        n.classList.add("ot-iab-acc"),
        n.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", e.cloneNode(!0)),
        n.querySelector(".ot-acc-hdr").insertAdjacentHTML("beforeEnd", "<div class='ot-vensec-title'>" + Rt.PCIABVendorsText + "</div>"),
        n.querySelector(".ot-acc-hdr").insertAdjacentElement("beforeEnd", o),
        n.querySelector(".ot-acc-txt").insertAdjacentElement("beforeEnd", zt("#ot-ven-lst").el[0]),
        zt("#ot-lst-cnt .ot-sdk-column").append(n),
        n.querySelector("button").setAttribute(this.ARIA_LABEL_ATTRIBUTE, Rt.PCIABVendorsText),
        this.iabAccInit = !0
    }
    ,
    wn.prototype.showConsentHeader = function() {
        var e = Ft.legIntSettings;
        zt("#onetrust-pc-sdk .ot-sel-all-hdr").show(),
        e.PAllowLI && !e.PShowLegIntBtn || zt("#onetrust-pc-sdk .ot-li-hdr").hide()
    }
    ,
    wn.prototype.setBackBtnTxt = function() {
        Bt.isV2Template ? (zt(Xt.P_Vendor_List + " .back-btn-handler").attr(this.ARIA_LABEL_ATTRIBUTE, Rt.PCenterBackText),
        zt(Xt.P_Vendor_List + " .back-btn-handler title").html(Rt.PCenterBackText)) : zt(Xt.P_Vendor_List + " .back-btn-handler .pc-back-button-text").html(Rt.PCenterBackText)
    }
    ,
    wn.prototype.getCookieElement = function(e, t) {
        var o = Mt.hosts.hostCookieTemplate.cloneNode(!0)
          , n = o.querySelector("div").cloneNode(!0);
        n.classList.remove("cookie-name-container"),
        zt(o).html("");
        var r = e.Name;
        Rt.AddLinksToCookiepedia && t.isFirstParty && (r = Kt.getCookieLabel(e, Rt.AddLinksToCookiepedia));
        var i = n.cloneNode(!0);
        if (i.classList.add(Xt.P_c_Name),
        i.querySelector("div:nth-child(1)").innerHTML = Rt.pcCListName,
        i.querySelector("div:nth-child(2)").innerHTML = r,
        zt(o).append(i),
        Rt.pcShowCookieHost) {
            var s = n.cloneNode(!0);
            s.classList.add(Xt.P_c_Host),
            s.querySelector("div:nth-child(1)").innerHTML = Rt.pcCListHost,
            s.querySelector("div:nth-child(2)").innerHTML = e.Host,
            zt(o).append(s)
        }
        if (Rt.pcShowCookieDuration) {
            var a = n.cloneNode(!0);
            a.classList.add(Xt.P_c_Duration),
            a.querySelector("div:nth-child(1)").innerHTML = Rt.pcCListDuration,
            a.querySelector("div:nth-child(2)").innerHTML = e.IsSession ? Rt.LifespanTypeText : Kt.getDuration(e),
            zt(o).append(a)
        }
        if (Rt.pcShowCookieType) {
            var l = t.Type === J.GenVendor ? !e.isThirdParty : t.isFirstParty
              , c = n.cloneNode(!0);
            c.classList.add(Xt.P_c_Type),
            c.querySelector("div:nth-child(1)").innerHTML = Rt.pcCListType,
            c.querySelector("div:nth-child(2)").innerHTML = l ? Rt.firstPartyTxt : Rt.thirdPartyTxt,
            zt(o).append(c)
        }
        if (Rt.pcShowCookieCategory) {
            var d = void 0;
            if (d = t.Type === J.GenVendor ? e.category : t.isFirstParty ? e.groupName : t.groupName) {
                var u = n.cloneNode(!0);
                u.classList.add(Xt.P_c_Category),
                u.querySelector("div:nth-child(1)").innerHTML = Rt.pcCListCategory,
                u.querySelector("div:nth-child(2)").innerHTML = d,
                zt(o).append(u)
            }
        }
        if (Rt.pcShowCookieDescription && e.description) {
            var p = n.cloneNode(!0);
            p.classList.add(Xt.P_c_Desc),
            p.querySelector("div:nth-child(1)").innerHTML = Rt.pcCListDescription,
            p.querySelector("div:nth-child(2)").innerHTML = e.description,
            zt(o).append(p)
        }
        return o
    }
    ,
    wn);
    function wn() {
        this.hasIabVendors = !1,
        this.hasGoogleVendors = !1,
        this.hasGenVendors = !1,
        this.iabAccInit = !1,
        this._displayNull = "display: '';",
        this.ARIA_LABEL_ATTRIBUTE = "aria-label",
        this.googleSearchSelectors = {
            vendorAccBtn: "#ot-addtl-venlst #Adtl-IAB",
            name: "name",
            accId: ".ot-adtlv-acc",
            selectAllEvntHndlr: "#ot-selall-adtlven-handler",
            venListId: "#ot-addtl-venlst",
            ctgl: ".ot-ven-adtlctgl"
        },
        this.genVendorSearchSelectors = {
            vendorAccBtn: "#ot-gn-venlst #Gn-",
            name: "Name",
            accId: ".ot-gv-acc",
            selectAllEvntHndlr: "#ot-selall-gnven-handler",
            venListId: "#ot-gn-venlst",
            ctgl: ".ot-ven-gvctgl"
        }
    }
    function En() {
        return Rt.PCCategoryStyle === se.Toggle ? eo.toggleEl.cloneNode(!0) : eo.chkboxEl.cloneNode(!0)
    }
    var xn, Gn = (On.prototype.setHtmlTemplate = function(e) {
        xn.setInternalData(),
        xn.rootHtml = e,
        xn.cloneHtmlElements()
    }
    ,
    On.prototype.getVendorListEle = function(e) {
        var t = document.createDocumentFragment()
          , r = document.createElement("div");
        r.classList.add("ot-vs-list");
        var i = Rt.VendorServiceConfig.PCVSExpandGroup;
        return e.forEach(function(e, t) {
            var o = "ot-vs-lst-id-" + t
              , n = xn.createVendor(e.groupRef, e, i, o);
            r.appendChild(n)
        }),
        t.appendChild(r),
        t
    }
    ,
    On.prototype.insertVendorServiceHtml = function(e, t) {
        if (!xn.checkIfIsInvalid(e, t)) {
            var o = document.createDocumentFragment();
            if (xn.setVendorContainer(o, e),
            xn.setVendorList(o, e),
            e.SubGroups && 0 < e.SubGroups.length) {
                o.querySelector(this.MAIN_CONT_ELE).classList.add("ot-vnd-subgrp-cnt");
                var n = t.children[1];
                Ft.pcName === dt && (n = t.children[2]),
                t.insertBefore(o, n)
            } else
                t.appendChild(o)
        }
    }
    ,
    On.prototype.toggleVendorService = function(e, t, o, n) {
        var r = no.getGroupById(e)
          , i = no.getVSById(t);
        n = n || xn.getVendorInputElement(i.CustomVendorServiceId),
        xn.setVendorServiceState(n, i, o),
        o ? xn.changeGroupState(r, o, xn.isToggle) : xn.checkGroupChildrenState(r) || xn.changeGroupState(r, !1, xn.isToggle)
    }
    ,
    On.prototype.setVendorStateByGroup = function(e, t) {
        var o = e.VendorServices;
        if (Mt.showVendorService && o)
            for (var n = 0, r = o; n < r.length; n++) {
                var i = r[n]
                  , s = xn.getVendorInputElement(i.CustomVendorServiceId);
                xn.setVendorServiceState(s, i, t)
            }
    }
    ,
    On.prototype.resetVendorUIState = function(e) {
        e.forEach(function(e, t) {
            var o = xn.getVendorInputElement(t);
            xn.changeVendorServiceUIState(o, e)
        })
    }
    ,
    On.prototype.setVendorServiceState = function(e, t, o) {
        xn.changeVendorServiceState(t, o),
        xn.changeVendorServiceUIState(e, o);
        var n = o ? an : ln;
        Bo.triggerGoogleAnalyticsEvent(Oo, n, t.ServiceName + ": " + t.CustomVendorServiceId)
    }
    ,
    On.prototype.removeVSUITemplate = function(e) {
        var t = e.querySelector(this.MAIN_CONT_ELE);
        t && e.removeChild(t)
    }
    ,
    On.prototype.consentAll = function(o) {
        Mt.getVendorsInDomain().forEach(function(e) {
            var t = o;
            o || (t = no.isAlwaysActiveGroup(e.groupRef)),
            xn.toggleVendorService(e.groupRef.CustomGroupId, e.CustomVendorServiceId, t || o)
        })
    }
    ,
    On.prototype.cloneHtmlElements = function() {
        var e = xn.rootHtml.querySelector(this.MAIN_CONT_ELE);
        if (e) {
            var t = e.querySelector(".ot-vnd-serv-hdr-cntr")
              , o = e.querySelector(".ot-vnd-lst-cont")
              , n = o.querySelector(".ot-vnd-item")
              , r = n.querySelector(".ot-vnd-info");
            xn.vendorLabelContainerClone = t.cloneNode(!0),
            e.removeChild(t),
            xn.vendorInfoClone = r.cloneNode(!0),
            n.querySelector(".ot-vnd-info-cntr").removeChild(r),
            xn.vendorItemClone = n.cloneNode(!0),
            o.removeChild(n),
            xn.vendorListContainerClone = o.cloneNode(!0),
            e.removeChild(o),
            xn.vendorServMainContainerClone = e.cloneNode(!0),
            xn.rootHtml.removeChild(e)
        }
    }
    ,
    On.prototype.setInternalData = function() {
        xn.isToggle = Rt.PCCategoryStyle === se.Toggle;
        var e = Rt.VendorServiceConfig;
        xn.stringTranslation = new Map,
        xn.stringTranslation.set("ServiceName", e.PCVSNameText || "ServiceName"),
        xn.stringTranslation.set("ParentCompany", e.PCVSParentCompanyText || "ParentCompany"),
        xn.stringTranslation.set("Address", e.PCVSAddressText || "Address"),
        xn.stringTranslation.set("DefaultCategoryName", e.PCVSDefaultCategoryText || "DefaultCategoryName"),
        xn.stringTranslation.set("Description", e.PCVSDefaultDescriptionText || "Description"),
        xn.stringTranslation.set("DPOEmail", e.PCVSDPOEmailText || "DPOEmail"),
        xn.stringTranslation.set("DPOLink", e.PCVSDPOLinkText || "DPOLink"),
        xn.stringTranslation.set("PrivacyPolicyLink", e.PCVSPrivacyPolicyLinkText || "PrivacyPolicyLink"),
        xn.stringTranslation.set("CookiePolicyLink", e.PCVSCookiePolicyLinkText || "CookiePolicyLink"),
        xn.stringTranslation.set("OptOutLink", e.PCVSOptOutLinkText || "OptOutLink"),
        xn.stringTranslation.set("LegalBasis", e.PCVSLegalBasisText || "LegalBasis")
    }
    ,
    On.prototype.setVendorContainer = function(e, t) {
        var o = xn.vendorServMainContainerClone.cloneNode(!0);
        o.setAttribute("data-group-id", t.CustomGroupId);
        var n = xn.vendorLabelContainerClone.cloneNode(!0);
        n.querySelector(".ot-vnd-serv-hdr").innerHTML = Rt.VendorServiceConfig.PCVSListTitle,
        o.appendChild(n),
        e.appendChild(o)
    }
    ,
    On.prototype.setVendorList = function(e, t) {
        for (var o = 0, n = xn.getVSFromGroupAndSubgroups(t), r = n.length, i = e.querySelector(this.MAIN_CONT_ELE), s = xn.vendorListContainerClone.cloneNode(), a = Rt.VendorServiceConfig.PCVSExpandCategory; o < r; o++) {
            var l = xn.createVendor(t, n[o], a);
            s.appendChild(l)
        }
        i.appendChild(s)
    }
    ,
    On.prototype.getVSFromGroupAndSubgroups = function(e, t) {
        var o, n, r;
        void 0 === t && (t = !1);
        var i = null != (o = e.VendorServices) ? o : [];
        if (t)
            for (var s = 0, a = null != (n = e.SubGroups) ? n : []; s < a.length; s++) {
                var l = null != (r = a[s].VendorServices) ? r : [];
                i.push.apply(i, l)
            }
        return i
    }
    ,
    On.prototype.createVendor = function(e, t, o, n) {
        var r = xn.vendorItemClone.cloneNode(!0);
        r.setAttribute("data-vnd-id", t.CustomVendorServiceId),
        xn.setExpandVendorList(r, o),
        xn.setVendorHeader(e, t, r, n);
        var i = r.querySelector(".ot-vnd-info-cntr");
        return xn.setVendorInfo(i, t),
        r
    }
    ,
    On.prototype.setExpandVendorList = function(e, t) {
        e.querySelector("button").setAttribute("aria-expanded", "" + t)
    }
    ,
    On.prototype.setVendorHeader = function(e, t, o, n) {
        var r = Rt.PCShowAlwaysActiveToggle
          , i = "always active" === no.getGrpStatus(e).toLowerCase()
          , s = o.querySelector(".ot-acc-hdr");
        i && s.classList.add("ot-always-active-group");
        var a = null;
        i && Rt.PCCategoryStyle === se.Toggle || (a = xn.setHeaderInputStyle(e, t, i, n));
        var l = xn.setHeaderText(t, s)
          , c = xn.setHeaderAccordionIcon();
        s.appendChild(l);
        var d = xn.getPositionForElement(Rt.PCAccordionStyle, xn.isToggle)
          , u = d.positionIcon
          , p = d.positionInput;
        if (a && s.insertAdjacentElement(p, a),
        i && r) {
            var h = xn.getAlwaysActiveElement();
            s.insertAdjacentElement("beforeend", h)
        }
        s.insertAdjacentElement(u, c)
    }
    ,
    On.prototype.getPositionForElement = function(e, t) {
        var o = "beforeend"
          , n = "beforeend";
        return t && e === W.PlusMinus && (o = "afterbegin"),
        t || (n = "afterbegin"),
        {
            positionIcon: o,
            positionInput: n
        }
    }
    ,
    On.prototype.setHeaderAccordionIcon = function() {
        return Rt.PCAccordionStyle === W.Caret ? eo.arrowEl.cloneNode(!0) : eo.plusMinusEl.cloneNode(!0)
    }
    ,
    On.prototype.setHeaderText = function(e, t) {
        var o = t.querySelector(".ot-cat-header")
          , n = o.cloneNode();
        return t.removeChild(o),
        n.innerText = e.ServiceName,
        n
    }
    ,
    On.prototype.setHeaderInputStyle = function(e, t, o, n) {
        if (!Rt.VendorServiceConfig.PCVSOptOut)
            return null;
        var r = no.checkIsActiveByDefault(e)
          , i = !1
          , s = Mt.vsConsent;
        i = s.has(t.CustomVendorServiceId) ? s.get(t.CustomVendorServiceId) : r;
        var a = En();
        a.querySelector("input").classList.add("category-switch-handler");
        var l = a.querySelector("input")
          , c = t.CustomVendorServiceId
          , d = null != n ? n : "ot-vendor-id-" + c
          , u = "ot-vendor-header-id-" + c;
        zt(l).attr("id", d),
        zt(l).attr("name", d),
        zt(l).attr("aria-labelledby", u),
        zt(l).data("ot-vs-id", c),
        zt(l).data("optanongroupid", t.groupRef.CustomGroupId),
        l.disabled = o,
        Gt.setCheckedAttribute(null, l, i);
        var p = xn.isToggle ? d : u;
        return zt(a.querySelector("label")).attr("for", p),
        zt(a.querySelector(".ot-label-txt")).html(t.ServiceName),
        a
    }
    ,
    On.prototype.getAlwaysActiveElement = function() {
        var e = document.createElement("div");
        return e.classList.add("ot-always-active"),
        e.innerText = Rt.AlwaysActiveText,
        e
    }
    ,
    On.prototype.setVendorInfo = function(e, t) {
        var o, n = ["DPOLink", "PrivacyPolicyLink", "CookiePolicyLink", "OptOutLink"];
        for (o in t)
            if (!xn.skipVendorInfoKey(o, t)) {
                var r = t[o]
                  , i = xn.vendorInfoClone.cloneNode(!0);
                i.dataset.vndInfoKey = o + "-" + t.CustomVendorServiceId;
                var s = i.querySelector(".ot-vnd-lbl")
                  , a = i.querySelector(".ot-vnd-cnt");
                if (s.innerHTML = xn.getLocalizedString(o),
                n.includes(o)) {
                    a.remove();
                    var l = document.createElement("a");
                    zt(l).attr("href", r),
                    zt(l).attr("target", "_blank"),
                    zt(l).attr("rel", "noopener"),
                    zt(l).attr("aria-label", r + " " + Rt.NewWinTxt),
                    l.classList.add("ot-vnd-cnt"),
                    l.innerText = r,
                    s.insertAdjacentElement("afterend", l)
                } else
                    a.innerHTML = r;
                e.appendChild(i)
            }
    }
    ,
    On.prototype.skipVendorInfoKey = function(e, t) {
        return "VendorServiceId" === e || "DefaultCategoryId" === e || "ServiceName" === e || "groupRef" === e || "CustomVendorServiceId" === e || "PurposeId" === e || !t[e]
    }
    ,
    On.prototype.getLocalizedString = function(e) {
        return xn.stringTranslation.has(e) ? xn.stringTranslation.get(e) : "DEFAULT"
    }
    ,
    On.prototype.checkGroupChildrenState = function(e) {
        for (var t, o, n = 0, r = null != (t = e.SubGroups) ? t : []; n < r.length; n++) {
            var i = r[n];
            if (xn.checkGroupChildrenState(i))
                return !0
        }
        for (var s = 0, a = null != (o = e.VendorServices) ? o : []; s < a.length; s++) {
            var l = a[s];
            if (Mt.vsConsent.get(l.CustomVendorServiceId))
                return !0
        }
        return !1
    }
    ,
    On.prototype.changeVendorServiceState = function(e, t) {
        Mt.vsConsent.set(e.CustomVendorServiceId, t)
    }
    ,
    On.prototype.changeVendorServiceUIState = function(e, t) {
        e && (Gt.setCheckedAttribute(null, e, t),
        xn.isToggle && e.parentElement.querySelector(".ot-switch-nob").setAttribute("aria-checked", "" + t))
    }
    ,
    On.prototype.changeGroupState = function(e, t, o) {
        var n = no.getParentByGrp(e);
        if (Sn.toggleGrpStatus(e, t),
        xn.updateGroupUIState(e.CustomGroupId, t, o, null !== n),
        n) {
            var r = xn.checkGroupChildrenState(n);
            xn.changeGroupState(n, r, o)
        }
    }
    ,
    On.prototype.updateGroupUIState = function(e, t, o, n) {
        void 0 === n && (n = !1);
        var r = n ? "#ot-sub-group-id-" : "#ot-group-id-"
          , i = document.querySelector(r + e);
        i && (Gt.setCheckedAttribute(null, i, t),
        o && i.parentElement.querySelector(".ot-switch-nob").setAttribute("aria-checked", "" + t))
    }
    ,
    On.prototype.getVendorInputElement = function(e) {
        return document.getElementById("ot-vendor-id-" + e)
    }
    ,
    On.prototype.checkIfIsInvalid = function(e, t) {
        return !e || !e.VendorServices || !t || e.VendorServices.length <= 0
    }
    ,
    On);
    function On() {
        this.MAIN_CONT_ELE = ".ot-vnd-serv"
    }
    var Nn, Dn = "#onetrust-banner-sdk", Hn = ".banner_logo", Fn = "#onetrust-pc-sdk", Rn = (qn.prototype.insertPcHtml = function() {
        Nn.jsonAddAboutCookies(Rt);
        var t = document.createDocumentFragment();
        if (gn.preferenceCenterGroup) {
            var e = document.createElement("div");
            zt(e).html(gn.preferenceCenterGroup.html);
            var o = e.querySelector("#onetrust-pc-sdk");
            Nn.addClassesPerConfig(o),
            zt(t).append(o);
            var n = function(e) {
                return t.querySelector(e)
            }
              , r = function(e) {
                return t.querySelectorAll(e)
            };
            Nn.manageCloseButtons(o, r),
            Rt.Language && Rt.Language.Culture && zt(n("#onetrust-pc-sdk")).attr("lang", Rt.Language.Culture),
            Nn.addLogos(n, r),
            zt(n(Xt.P_Title)).html(Rt.MainText),
            Rt.PCCloseButtonType === de.Link && Rt.PCTemplateUpgrade && Ft.pcName === dt && zt(n(Xt.P_Title)).addClass("ot-pc-title-shrink"),
            zt(n(Fn)).attr(this._ariaLabel, Rt.MainText),
            Ft.pcName === dt && (zt(n(Xt.P_Privacy_Txt)).html(Rt.AboutCookiesText),
            zt(n(Xt.P_Privacy_Hdr)).html(Rt.AboutCookiesText)),
            zt(n(Xt.P_Policy_Txt)).html(Rt.MainInfoText),
            Nn.configureLinkFields(n),
            Nn.configureSubjectDataFields(n),
            Nn.configureButtons(n, r),
            Nn.setManagePreferenceText(n),
            Nn.initializePreferenceCenterGroups(n, t),
            Nn.removeListsWhenAppropriate(n)
        }
        var i = document.createElement("iframe");
        i.setAttribute("class", "ot-text-resize"),
        i.setAttribute("title", "onetrust-text-resize"),
        wt(i, "position: absolute; top: -50000px; width: 100em;"),
        i.setAttribute(this._ariaHidden, "true"),
        zt(t.querySelector("#onetrust-pc-sdk")).append(i);
        var s = document.getElementById("onetrust-consent-sdk");
        zt(s).append(t),
        Ft.ignoreInjectingHtmlCss || zt(document.body).append(s),
        (Rt.showCookieList || Mt.showGeneralVendors) && In.InitializeHostList()
    }
    ,
    qn.prototype.addClassesPerConfig = function(e) {
        /Chrome|Safari/i.test(navigator.userAgent) && /Google Inc|Apple Computer/i.test(navigator.vendor) || zt(e).addClass("ot-sdk-not-webkit"),
        Rt.useRTL && zt(e).attr("dir", "rtl"),
        Ft.legIntSettings.PAllowLI && "IAB2" === Ft.iabType && (zt(e).addClass("ot-leg-opt-out"),
        Ft.legIntSettings.PShowLegIntBtn && zt(e).addClass("ot-leg-btn")),
        Rt.BannerRelativeFontSizesToggle && zt(e).addClass("otRelFont"),
        Rt.PCShowConsentLabels && zt(e).addClass("ot-tgl-with-label"),
        (Rt.UseGoogleVendors || Mt.showGeneralVendors) && zt(e).addClass("ot-addtl-vendors"),
        "right" === Rt.PreferenceCenterPosition && zt(e).addClass(Rt.useRTL ? "right-rtl" : "right")
    }
    ,
    qn.prototype.manageCloseButtons = function(e, t) {
        var o = zt(t(Xt.P_Close_Btn)).el;
        if (Rt.ShowPreferenceCenterCloseButton) {
            Rt.CloseText || (Rt.CloseText = "Close Preference Center");
            for (var n = 0, r = o; n < r.length; n++) {
                var i = r[n];
                Rt.PCCloseButtonType === de.Link && Rt.PCTemplateUpgrade ? (zt(i).html(Rt.PCContinueText),
                zt(e).addClass("ot-close-btn-link"),
                zt(i).el.removeAttribute(this._ariaLabel)) : zt(i).el.setAttribute(this._ariaLabel, Rt.CloseText)
            }
        } else
            for (var s = 0; s < o.length; s++)
                zt(o[s].parentElement).el.removeChild(o[s])
    }
    ,
    qn.prototype.addLogos = function(e, t) {
        var o = e(Xt.P_Logo);
        if (o && Rt.optanonLogo) {
            var n = Kt.updateCorrectUrl(Rt.optanonLogo);
            Kt.checkMobileOfflineRequest(Kt.getBannerVersionUrl()) && (n = Gt.getRelativeURL(n, !0, !0));
            var r = document.createElement("img");
            r.setAttribute("alt", Rt.PCLogoAria),
            r.setAttribute("src", n),
            o.append(r),
            Rt.PCLogoAria && zt(o).attr(this._ariaLabel, Rt.PCLogoAria)
        }
        Kt.insertFooterLogo(t(".ot-pc-footer-logo a"))
    }
    ,
    qn.prototype.configureLinkFields = function(e) {
        if (Rt.AboutText && zt(e(Xt.P_Policy_Txt)).html(zt(e(Xt.P_Policy_Txt)).html() + '\n            <br/><a href="' + Rt.AboutLink + '" class="privacy-notice-link" rel="noopener" target="_blank"\n                    aria-label="' + Rt.PCCookiePolicyLinkScreenReader + '">' + Rt.AboutText + "</a>"),
        Rt.PCenterImprintLinkText) {
            Rt.AboutText || e(Xt.P_Policy_Txt).insertAdjacentHTML("beforeend", "<br/>");
            var t = document.createElement("a");
            t.classList.add("ot-link-btn", "ot-imprint-handler"),
            t.textContent = Rt.PCenterImprintLinkText,
            t.setAttribute(this._ariaLabel, Rt.PCenterImprintLinkScreenReader),
            t.setAttribute("href", Rt.PCenterImprintLinkUrl),
            e(Xt.P_Policy_Txt).appendChild(t)
        }
        if (Rt.PCenterVendorListLinkText) {
            var o = !Rt.IsIabEnabled && Mt.showGeneralVendors ? "ot-gv-list-handler" : "onetrust-vendors-list-handler";
            e(Xt.P_Policy_Txt).insertAdjacentHTML("beforeend", '<button class="ot-link-btn ' + o + '" aria-label="' + Rt.PCenterVendorListLinkAriaLabel + '">\n            ' + Rt.PCenterVendorListLinkText + "\n            </button>")
        }
    }
    ,
    qn.prototype.configureSubjectDataFields = function(e) {
        if (Rt.PCTemplateUpgrade && Rt.PCenterUserIdTitleText && Rt.IsConsentLoggingEnabled) {
            var t = xt.readCookieParam(Oe.OPTANON_CONSENT, Ve);
            if (e(Xt.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-title"><span>' + Rt.PCenterUserIdTitleText + ": </span> " + t + "</div>"),
            Rt.PCenterUserIdDescriptionText && e(Xt.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-desc">' + Rt.PCenterUserIdDescriptionText + "</div>"),
            Rt.PCenterUserIdTimestampTitleText) {
                var o = xt.getCookie(Oe.ALERT_BOX_CLOSED)
                  , n = o && Kt.getUTCFormattedDate(o)
                  , r = n || Rt.PCenterUserIdNotYetConsentedText;
                e(Xt.P_Policy_Txt).insertAdjacentHTML("beforeend", '<div class="ot-userid-timestamp"><span>' + Rt.PCenterUserIdTimestampTitleText + ": </span> " + r + "</div>")
            }
        }
    }
    ,
    qn.prototype.setManagePreferenceText = function(e) {
        var t = e(Xt.P_Manage_Cookies_Txt)
          , o = zt(t);
        t && (o.html(Rt.ManagePreferenceText),
        Rt.ManagePreferenceText || o.attr(this._ariaHidden, !0))
    }
    ,
    qn.prototype.configureButtons = function(e, t) {
        Rt.ConfirmText.trim() ? zt(e("#accept-recommended-btn-handler")).html(Rt.ConfirmText) : e("#accept-recommended-btn-handler").parentElement.removeChild(e("#accept-recommended-btn-handler"));
        for (var o = t(".save-preference-btn-handler"), n = 0; n < o.length; n++)
            zt(o[n]).html(Rt.AllowAllText);
        var r = t(".ot-pc-refuse-all-handler");
        if (Rt.PCenterShowRejectAllButton && Rt.PCenterRejectAllButtonText.trim())
            for (n = 0; n < r.length; n++)
                zt(r[n]).html(Rt.PCenterRejectAllButtonText);
        else
            Gt.removeChild(r)
    }
    ,
    qn.prototype.removeListsWhenAppropriate = function(e) {
        if (!Rt.IsIabEnabled) {
            var t = e(Xt.P_Vendor_Container);
            t && t.parentElement.removeChild(t)
        }
        if (!Rt.showCookieList && !Mt.showGeneralVendors) {
            var o = e(Xt.P_Host_Cntr);
            o && o.parentElement.removeChild(o)
        }
    }
    ,
    qn.prototype.setParentGroupName = function(e, t, o, n) {
        var r = e.querySelector(".category-header,.ot-cat-header,.category-menu-switch-handler>h3");
        zt(r).html(t),
        zt(r).attr("id", o),
        Ft.pcName === dt && (e.querySelector(Xt.P_Category_Header).innerHTML = t,
        e.querySelector("" + Xt.P_Desc_Container).setAttribute("id", n),
        e.querySelector(".category-menu-switch-handler").setAttribute("aria-controls", n))
    }
    ,
    qn.prototype.setLegIntButton = function(e, t, o, n) {
        void 0 === o && (o = !1);
        var r = !0;
        -1 < Mt.vendors.selectedLegInt.indexOf(t.IabGrpId + ":false") && (r = !1);
        var i = to.generateLegIntButtonElements(r, t.OptanonGroupId);
        o ? n.insertAdjacentHTML("afterend", i) : e.insertAdjacentHTML("beforeend", i);
        var s = e.querySelector(".ot-remove-objection-handler");
        s && wt(s, s.getAttribute("data-style"))
    }
    ,
    qn.prototype.setParentGroupDescription = function(e, t, o, n, r) {
        var i = Sn.safeFormattedGroupDescription(t)
          , s = e.querySelector("p:not(.ot-always-active)")
          , a = e.querySelector(Xt.P_Acc_Grp_Desc)
          , l = s || a;
        return -1 < Vt.indexOf(t.Type) && o.PCGrpDescType === I.Legal ? i = t.DescriptionLegal : l.classList.add("ot-category-desc"),
        Ft.legIntSettings.PAllowLI && !Ft.legIntSettings.PShowLegIntBtn && (t.SubGroups.some(function(e) {
            return e.HasLegIntOptOut
        }) || t.HasLegIntOptOut ? l.parentElement.classList.add("ot-leg-border-color") : Gt.removeChild(e.querySelector(Xt.P_Li_Hdr))),
        Ft.pcName !== dt && l.setAttribute("id", n),
        zt(l).html(i),
        t.Type === At && Gt.removeChild(l),
        l
    }
    ,
    qn.prototype.cloneOtHtmlEls = function(e) {
        var t = /otPcPanel|otPcCenter/;
        eo.toggleEl = zt(e(".ot-tgl")).el.cloneNode(!0),
        eo.arrowEl = zt(e("#onetrust-pc-sdk > " + Xt.P_Arrw_Cntr)).el.cloneNode(!0),
        eo.subGrpEl = zt(e(Xt.P_Sub_Grp_Cntr)).el.cloneNode(!0),
        eo.vListEl = zt(e(Xt.P_Ven_Lst_Cntr)).el.cloneNode(!0),
        eo.cListEl = zt(e(Xt.P_Host_Lst_cntr)).el.cloneNode(!0),
        eo.chkboxEl = zt(e(Xt.P_CBx_Cntr)).el.cloneNode(!0),
        eo.accordionEl = zt(e(".ot-acc-cntr")).el.cloneNode(!0),
        t.test(Ft.pcName) && (eo.plusMinusEl = zt(e(".ot-plus-minus")).el.cloneNode(!0)),
        Gt.removeChild(e(".ot-tgl")),
        Gt.removeChild(e("#onetrust-pc-sdk > " + Xt.P_Arrw_Cntr)),
        Gt.removeChild(e(Xt.P_Sub_Grp_Cntr)),
        Gt.removeChild(e(Xt.P_Ven_Lst_Cntr)),
        Gt.removeChild(e(Xt.P_Host_Lst_cntr)),
        Gt.removeChild(e(Xt.P_CBx_Cntr)),
        Gt.removeChild(e(".ot-acc-cntr")),
        t.test(Ft.pcName) && Gt.removeChild(e(".ot-plus-minus"))
    }
    ,
    qn.prototype.insertSelectAllEls = function(e) {
        var t = e(Xt.P_Select_Cntr + " .ot-sel-all-chkbox")
          , o = En();
        o.id = Xt.P_Sel_All_Host_El,
        o.querySelector("input").id = "select-all-hosts-groups-handler",
        o.querySelector("label").setAttribute("for", "select-all-hosts-groups-handler"),
        zt(t).append(o);
        var n = En();
        n.id = Xt.P_Sel_All_Vendor_Consent_El,
        n.querySelector("input").id = "select-all-vendor-groups-handler",
        n.querySelector("label").setAttribute("for", "select-all-vendor-groups-handler"),
        zt(t).append(n);
        var r = En();
        r.id = Xt.P_Sel_All_Vendor_Leg_El,
        r.querySelector("input").id = "select-all-vendor-leg-handler",
        r.querySelector("label").setAttribute("for", "select-all-vendor-leg-handler"),
        zt(t).append(r)
    }
    ,
    qn.prototype.initializePreferenceCenterGroups = function(e, t) {
        var o = Ft.pcName;
        if (Bt.isV2Template) {
            Nn.cloneOtHtmlEls(e);
            var n = eo.chkboxEl.cloneNode(!0);
            n.querySelector("input").classList.add("category-filter-handler"),
            zt(e(Xt.P_Fltr_Modal + " " + Xt.P_Fltr_Option)).append(n),
            Nn.insertSelectAllEls(e)
        }
        var r = zt(e("#onetrust-pc-sdk " + Xt.P_Category_Grp));
        o === st || o === lt || o === at ? Rt.PCenterEnableAccordion ? Gt.removeChild(r.el.querySelector(Xt.P_Category_Item + ":not(.ot-accordion-layout)")) : Gt.removeChild(r.el.querySelector(Xt.P_Category_Item + ".ot-accordion-layout")) : o === dt && (Rt.PCenterEnableAccordion = !1);
        var i, s = e("#onetrust-pc-sdk " + Xt.P_Category_Item), a = Bt.isV2Template ? eo.subGrpEl.cloneNode(!0) : zt(e(Xt.P_Sub_Grp_Cntr)), l = Bt.isV2Template ? "" : zt(e(Xt.P_Acc_Container + " " + Xt.P_Sub_Grp_Cntr));
        Rt.PCTemplateUpgrade && /otPcTab/.test(o) && (i = e(".ot-abt-tab").cloneNode(!0),
        Gt.removeChild(e(".ot-abt-tab"))),
        r.el.removeChild(s),
        Bt.isV2Template ? Rt.PCAccordionStyle === W.Caret && (zt(e("#onetrust-pc-sdk " + Xt.P_Vendor_List)).addClass("ot-enbl-chr"),
        Rt.PCenterEnableAccordion && zt(e("#onetrust-pc-sdk " + Xt.P_Content)).addClass("ot-enbl-chr")) : zt(s.querySelector(Xt.P_Sub_Grp_Cntr)).remove();
        var c = Rt.Groups.filter(function(e) {
            return e.Order
        })
          , d = 0 === r.el.children.length
          , u = e(Xt.P_Li_Hdr) || s.querySelector(Xt.P_Li_Hdr);
        Ft.legIntSettings.PAllowLI && Ft.grpContainLegalOptOut && "IAB2" === Rt.IabType && !Ft.legIntSettings.PShowLegIntBtn ? (u.querySelector("span:first-child").innerText = Rt.ConsentText,
        u.querySelector("span:last-child").innerText = Rt.LegitInterestText,
        Bt.isV2Template && (u.querySelector("span:first-child").innerText = Rt.PCenterConsentText,
        u.querySelector("span:last-child").innerText = Rt.PCenterLegIntColumnHeader),
        Rt.PCenterEnableAccordion && u ? u.classList.add("ot-leg-border-color") : "otPcList" === o && s.insertAdjacentElement("afterbegin", u)) : (Gt.removeChild(e("#onetrust-pc-sdk " + Xt.P_Li_Hdr)),
        Gt.removeChild(s.querySelector(Xt.P_Li_Hdr)));
        var p = e(".ot-tab-desc");
        Rt.PCTemplateUpgrade && (Mt.showVendorService ? xn.setHtmlTemplate(e("#onetrust-pc-sdk")) : xn.removeVSUITemplate(e("#onetrust-pc-sdk")));
        for (var h = 0; h < c.length; h++) {
            var g = c[h]
              , C = g.GroupName
              , y = g.CustomGroupId
              , f = s.cloneNode(!0)
              , v = "ot-group-id-" + y
              , k = "ot-header-id-" + y
              , m = "ot-desc-id-" + y;
            (f = zt(f).el).setAttribute("data-optanongroupid", y);
            var b = f.querySelector("input,button");
            b && (b.setAttribute("aria-controls", m),
            b.setAttribute("aria-labelledby", k)),
            Nn.setParentGroupName(f, C, k, m),
            o === ct && (g.ShowVendorList && "IAB2" === Rt.IabType ? (Gt.removeChild(f.querySelector("p:not(.ot-always-active)")),
            Gt.removeChild(f.querySelector(Xt.P_Acc_Txt + ":not(" + Xt.P_Acc_Container + ")")),
            g.SubGroups.length || Bt.isV2Template || Gt.removeChild(f.querySelector(Xt.P_Sub_Grp_Cntr))) : Gt.removeChild(f.querySelector(Xt.P_Acc_Container)));
            var P = Nn.setParentGroupDescription(f, g, Rt, m, v);
            Bt.isV2Template ? Nn.setToggle(f, P, g, v, k) : Nn.setToggleProps(f, P, g, v, k);
            var S = !!e("#onetrust-pc-sdk " + Xt.P_Category_Grp).querySelector(Xt.P_Category_Item)
              , A = r.el.querySelectorAll(Xt.P_Category_Item + ":not(.ot-vnd-item)");
            if (A = A[A.length - 1],
            d ? r.append(f) : S ? Ut.insertAfter(f, A) : Ut.insertAfter(f, r.el.querySelector(Xt.P_Li_Hdr) || r.el.querySelector("h3")),
            0 < g.SubGroups.length && g.ShowSubgroup) {
                var T = o === ct && g.ShowVendorList && "IAB2" === Rt.IabType && !Rt.PCTemplateUpgrade;
                Nn.setSubGrps(g, T ? l : a, f, Rt)
            }
            var I = Rt.PCGrpDescLinkPosition === w.Top;
            g.Type === At && I && (P = f.querySelector(Xt.P_Sub_Grp_Cntr));
            var L = I ? P : null;
            if (Nn.setVendorListBtn(f, e, t, g, L, Rt),
            Nn.setHostListBtn(f, e, t, g),
            Mt.showVendorService && Rt.VendorServiceConfig.PCVSCategoryView) {
                var _ = Xt.P_Acc_Txt;
                o === dt && (_ = Xt.P_Desc_Container);
                var V = f.querySelector(_);
                xn.insertVendorServiceHtml(g, V)
            }
            Mt.dataGroupState.push(g)
        }
        if ("otPcTab" === o)
            if (i && e("#onetrust-pc-sdk " + Xt.P_Category_Grp).insertAdjacentElement("afterbegin", i),
            p && 640 < window.innerWidth && zt(p).append(t.querySelectorAll("#onetrust-pc-sdk " + Xt.P_Desc_Container)),
            Rt.IsIabEnabled)
                e(Xt.P_Desc_Container + " .category-vendors-list-handler").innerHTML = Rt.VendorListText + "&#x200E;";
            else {
                var B = e(Xt.P_Desc_Container + " .category-vendors-list-handler");
                B && B.parentElement.removeChild(B)
            }
    }
    ,
    qn.prototype.jsonAddAboutCookies = function(e) {
        var t = {};
        return t.GroupName = e.AboutCookiesText,
        t.GroupDescription = e.MainInfoText,
        t.ShowInPopup = !0,
        t.Order = 0,
        t.IsAboutGroup = !0,
        t
    }
    ,
    qn.prototype.setVendorListBtn = function(e, t, o, n, r, i) {
        var s = Ft.pcName;
        if (n.ShowVendorList) {
            var a = void 0
              , l = void 0;
            if (Bt.isV2Template ? a = (l = eo.vListEl.cloneNode(!0)).querySelector(".category-vendors-list-handler") : l = (a = e.querySelector(".category-vendors-list-handler")).parentElement,
            a.innerHTML = i.VendorListText + "&#x200E;",
            a.setAttribute(this._ariaLabel, Rt.PCOpensVendorDetailsAlert),
            a.setAttribute("data-parent-id", n.CustomGroupId),
            i.PCGrpDescType === I.UserFriendly && a.insertAdjacentHTML("afterend", "<a href='" + Rt.IabLegalTextUrl + "?lang=" + Mt.consentLanguage + "' rel=\"noopener\" target='_blank'>&nbsp;|&nbsp;" + i.PCVendorFullLegalText + '&nbsp;<span class="ot-scrn-rdr">' + Rt.NewWinTxt + "</span></a>"),
            Bt.isV2Template) {
                var c = e;
                s === dt ? c = e.querySelector("" + Xt.P_Desc_Container) : i.PCenterEnableAccordion && (c = e.querySelector(Xt.P_Acc_Txt)),
                c.insertAdjacentElement("beforeend", l)
            }
            r && r.insertAdjacentElement("beforebegin", l)
        } else if (!Bt.isV2Template) {
            if (s !== lt && s !== st || i.PCenterEnableAccordion) {
                if (s === ct || s === lt || s === st && i.PCenterEnableAccordion) {
                    var d = t("#vendor-list-container")
                      , u = e.querySelector(Xt.P_Acc_Txt);
                    d && o.querySelector("" + Xt.P_Content).removeChild(d),
                    Bt.isV2Template || zt(u).el.removeChild(u.querySelector(Xt.P_Ven_Lst_Cntr))
                }
            } else
                Gt.removeChild(e.querySelector(Xt.P_Ven_Lst_Cntr));
            if (s === dt || s === at) {
                var p = e.querySelector(Xt.P_Ven_Lst_Cntr);
                p && p.parentElement.removeChild(p)
            }
        }
    }
    ,
    qn.prototype.setHostListBtn = function(e, t, o, n) {
        var r = Ft.pcName
          , i = !1;
        Rt.showCookieList && (i = -1 < Gt.findIndex(C(n.SubGroups, [n]), function(e) {
            return -1 === Tt.indexOf(e.Type) && e.FirstPartyCookies.length
        }));
        var s = Mt.showGeneralVendors && n.GeneralVendorsIds && n.GeneralVendorsIds.length;
        if (!Mt.showVendorService && (Rt.showCookieList || Mt.showGeneralVendors) && (n.ShowHostList || i || s)) {
            var a = void 0;
            if (Bt.isV2Template) {
                var l = eo.cListEl.cloneNode(!0);
                a = l.querySelector(".category-host-list-handler");
                var c = e;
                r === dt ? c = e.querySelector("" + Xt.P_Desc_Container) : Rt.PCenterEnableAccordion && (c = e.querySelector(Xt.P_Acc_Txt)),
                c.insertAdjacentElement("beforeend", l)
            } else
                a = e.querySelector(".category-host-list-handler");
            if (a) {
                var d = Mt.showGeneralVendors ? Rt.GroupGenVenListLabel : Rt.ThirdPartyCookieListText
                  , u = Mt.showGeneralVendors ? Rt.PCenterVendorListScreenReader : Rt.PCOpensCookiesDetailsAlert;
                a.innerHTML = d + "&#x200E;",
                a.setAttribute(this._ariaLabel, u),
                a.setAttribute("data-parent-id", n.CustomGroupId)
            }
        } else if (r === ct) {
            var p = t("#vendor-list-container")
              , h = e.querySelector(Xt.P_Acc_Txt);
            p && o.querySelector("" + Xt.P_Content).removeChild(p),
            h.querySelector(Xt.P_Host_Lst_cntr) && zt(h).el.removeChild(h.querySelector(Xt.P_Host_Lst_cntr))
        } else {
            var g = e.querySelector(Xt.P_Host_Lst_cntr);
            g && g.parentElement.removeChild(g)
        }
    }
    ,
    qn.prototype.setSubGrps = function(L, _, V, B) {
        var w = this
          , E = Ft.pcName
          , x = B.PCGrpDescType === I.Legal
          , G = C(Lt, It)
          , O = E === ct && L.ShowVendorList && "IAB2" === B.IabType;
        if (O && !Rt.PCTemplateUpgrade) {
            var e = V.querySelector(Xt.P_Sub_Grp_Cntr);
            e.parentElement.removeChild(e)
        }
        L.SubGroups.forEach(function(e) {
            var t;
            "IAB2" !== Ft.iabType || e.Type !== bt || e.HasConsentOptOut || (t = !0);
            var o, n, r = Bt.isV2Template ? _.cloneNode(!0) : _.el.cloneNode(!0), i = r.querySelector(Xt.P_Subgp_ul), s = r.querySelector(Xt.P_Subgrp_li).cloneNode(!0), a = e.CustomGroupId, l = "ot-sub-group-id-" + a, c = no.getGrpStatus(e).toLowerCase(), d = no.getGrpStatus(L).toLowerCase(), u = s.querySelector(".cookie-subgroup>h4, .cookie-subgroup>h5, .cookie-subgroup>h6, .ot-subgrp>h4, .ot-subgrp>h5, .ot-subgrp>h6"), p = s.querySelector(Xt.P_Tgl_Cntr);
            if (s.setAttribute("data-optanongroupid", a),
            Bt.isV2Template ? ((n = Nn.getInputEle()).querySelector("input").setAttribute("data-optanongroupid", a),
            n.querySelector("input").classList.add("cookie-subgroup-handler"),
            o = n.cloneNode(!0),
            p.insertAdjacentElement("beforeend", o)) : (o = s.querySelector(".ot-toggle")).querySelector("input").setAttribute("data-optanongroupid", a),
            zt(r.querySelector(Xt.P_Subgp_ul)).html(""),
            zt(u).html(e.GroupName),
            Mt.showVendorService) {
                var h = document.createElement("div");
                h.classList.add("ot-acc-hdr"),
                u.classList.add("ot-cat-header"),
                h.appendChild(u);
                var g = "afterbegin";
                Rt.PCCategoryStyle === se.Toggle && (g = "beforeend"),
                h.insertAdjacentElement(g, o),
                s.removeChild(s.querySelector(Xt.P_Subgrp_Tgl_Cntr)),
                s.insertAdjacentElement("afterbegin", h)
            }
            o.querySelector("input").setAttribute("id", l),
            o.querySelector("input").setAttribute(w._ariaLabel, e.GroupName),
            o.querySelector("label").setAttribute("for", l);
            var C = zt(s.querySelector(Xt.P_Subgrp_Desc));
            if (O) {
                var y = e.DescriptionLegal && x ? e.DescriptionLegal : e.GroupDescription;
                C.html(y)
            } else {
                y = Sn.safeFormattedGroupDescription(e);
                var f = !1;
                -1 < Vt.indexOf(e.Type) && x && (f = !0,
                y = e.DescriptionLegal),
                B.PCenterEnableAccordion && f || (C = zt(s.querySelector("p"))),
                L.ShowSubGroupDescription ? C.html(y) : C.html("")
            }
            if (L.ShowSubgroupToggle && -1 < G.indexOf(e.Type)) {
                var v = Sn.isGroupActive(e);
                v && (s.querySelector("input").setAttribute("checked", ""),
                "always active" === d && -1 === Vt.indexOf(e.Type) && (s.querySelector("input").disabled = !0,
                s.querySelector("input").setAttribute("disabled", !0)));
                var k = p.querySelector(".ot-label-status");
                if (Rt.PCShowConsentLabels ? k.innerHTML = v ? Rt.PCActiveText : Rt.PCInactiveText : Gt.removeChild(k),
                Ft.legIntSettings.PAllowLI && e.Type === bt && e.HasLegIntOptOut)
                    if (Ft.legIntSettings.PShowLegIntBtn)
                        Nn.setLegIntButton(s, e);
                    else {
                        var m = p.cloneNode(!0);
                        p.insertAdjacentElement("afterend", m);
                        var b = m.querySelector(".ot-label-status")
                          , P = m.querySelector("input");
                        P.setAttribute("id", l + "-leg-out"),
                        m.querySelector("label").setAttribute("for", l + "-leg-out"),
                        e.IsLegIntToggle = !0;
                        var S = Sn.isGroupActive(e);
                        Rt.PCShowConsentLabels ? b.innerHTML = S ? Rt.PCActiveText : Rt.PCInactiveText : Gt.removeChild(b),
                        Gt.setCheckedAttribute(null, P, S),
                        e.IsLegIntToggle = !1
                    }
            } else
                "always active" === c && (L.ShowSubgroupToggle || -1 === _t.indexOf(e.Type)) || (t = !0);
            if (t && (o.classList.add("ot-hide-tgl"),
            o.querySelector("input").setAttribute(w._ariaHidden, !0)),
            "always active" !== c || t || (o && o.parentElement.removeChild(o),
            s.querySelector(Xt.P_Tgl_Cntr).classList.add("ot-always-active-subgroup"),
            Nn.setAlwaysActive(s, !0)),
            "COOKIE" === e.Type && -1 !== e.Parent.indexOf("STACK") && wt(r, "display: none;"),
            zt(i).append(s),
            Bt.isV2Template) {
                var A = V;
                "otPcTab" === E ? A = V.querySelector("" + Xt.P_Desc_Container) : B.PCenterEnableAccordion && (A = V.querySelector(Xt.P_Acc_Txt)),
                A.insertAdjacentElement("beforeend", r)
            } else {
                var T = V.querySelector(Xt.P_Category_Item + " " + Xt.P_Ven_Lst_Cntr);
                T && T.insertAdjacentElement("beforebegin", r)
            }
            if (Mt.showVendorService && Rt.VendorServiceConfig.PCVSCategoryView) {
                var I = i;
                xn.insertVendorServiceHtml(e, I)
            }
        })
    }
    ,
    qn.prototype.getInputEleForCategory = function(e) {
        return Mt.showVendorService && Rt.PCCategoryStyle === se.Checkbox && e.classList.add("ot-checkbox-consent"),
        Nn.getInputEle()
    }
    ,
    qn.prototype.getInputEle = function() {
        return Mt.showVendorService ? En() : eo.toggleEl.cloneNode(!0)
    }
    ,
    qn.prototype.setToggle = function(e, t, o, n, r) {
        var i = Nn.getInputEleForCategory(e);
        i.querySelector("input").classList.add("category-switch-handler");
        var s = i.querySelector("input")
          , a = e.querySelector(Xt.P_Category_Header)
          , l = Sn.isGroupActive(o)
          , c = "always active" === no.getGrpStatus(o).toLowerCase()
          , d = o.OptanonGroupId.toString()
          , u = !0;
        if ("IAB2" !== Ft.iabType || o.Type !== bt && o.Type !== At || o.HasConsentOptOut || (u = !1),
        zt(i.querySelector("label")).attr("for", n),
        zt(i.querySelector(".ot-label-txt")).html(o.GroupName),
        Ft.legIntSettings.PAllowLI && o.Type === bt && o.HasLegIntOptOut)
            if (Ft.legIntSettings.PShowLegIntBtn)
                Nn.setLegIntButton(e, o, !0, t);
            else {
                var p = i.cloneNode(!0);
                o.IsLegIntToggle = !0;
                var h = Sn.isGroupActive(o)
                  , g = p.querySelector(".ot-label-status");
                Rt.PCShowConsentLabels ? g.innerHTML = h ? Rt.PCActiveText : Rt.PCInactiveText : Gt.removeChild(g),
                o.IsLegIntToggle = !1,
                Sn.setInputID(p.querySelector("input"), n + "-leg-out", d, h, r),
                zt(p.querySelector("label")).attr("for", n + "-leg-out"),
                a.insertAdjacentElement("afterend", p)
            }
        var C = i.querySelector(".ot-label-status");
        Rt.PCShowConsentLabels ? C.innerHTML = l ? Rt.PCActiveText : Rt.PCInactiveText : Gt.removeChild(C);
        var y = Rt.PCCategoryStyle === se.Toggle;
        this.hideToggleContainer(c, u, y, i),
        u && this.setAlwaysActiveOrToggleInput(o, e, i, s, n, r)
    }
    ,
    qn.prototype.hideToggleContainer = function(e, t, o, n) {
        !e && t || !o || (n.classList.add("ot-hide-tgl"),
        n.querySelector("input").setAttribute(this._ariaHidden, "true"))
    }
    ,
    qn.prototype.setAlwaysActiveOrToggleInput = function(e, t, o, n, r, i) {
        var s = "always active" === no.getGrpStatus(e).toLowerCase()
          , a = Rt.PCCategoryStyle === se.Toggle
          , l = e.OptanonGroupId.toString()
          , c = Sn.isGroupActive(e)
          , d = t.querySelector(Xt.P_Category_Header);
        Mt.showVendorService ? (s && Rt.PCShowAlwaysActiveToggle && (Nn.setAlwaysActive(t),
        o.querySelector("input").setAttribute("disabled", "true")),
        s && a || Nn.insertAccordionInputHeader(d, o),
        Sn.setInputID(n, r, l, c, i),
        Nn.insertAccordionPointer(t, d)) : (Nn.insertAccordionPointer(t, d),
        s ? Rt.PCShowAlwaysActiveToggle && Nn.setAlwaysActive(t) : (Nn.insertAccordionInputHeader(d, o),
        Sn.setInputID(n, r, l, c, i)))
    }
    ,
    qn.prototype.insertAccordionInputHeader = function(e, t) {
        var o = Nn.getPositionForInputEle();
        e.insertAdjacentElement(o, t)
    }
    ,
    qn.prototype.getPositionForInputEle = function() {
        var e = "beforebegin";
        return Mt.showVendorService ? Rt.PCCategoryStyle === se.Toggle && (e = "afterend") : e = "afterend",
        e
    }
    ,
    qn.prototype.insertAccordionPointer = function(e, t) {
        if (e.classList.add("ot-vs-config"),
        Rt.PCenterEnableAccordion)
            if (Mt.showVendorService) {
                var o = e.querySelector(Xt.P_Acc_Header)
                  , n = void 0
                  , r = void 0;
                n = Rt.PCAccordionStyle === W.Caret ? (r = "beforeend",
                eo.arrowEl.cloneNode(!0)) : (r = Rt.PCCategoryStyle === se.Checkbox ? "beforeend" : "afterbegin",
                eo.plusMinusEl.cloneNode(!0)),
                o.insertAdjacentElement(r, n)
            } else
                Rt.PCAccordionStyle === W.Caret ? t.insertAdjacentElement("afterend", eo.arrowEl.cloneNode(!0)) : t.insertAdjacentElement("beforebegin", eo.plusMinusEl.cloneNode(!0))
    }
    ,
    qn.prototype.setToggleProps = function(e, t, o, n, r) {
        var i = e.querySelectorAll("input:not(.cookie-subgroup-handler)")
          , s = e.querySelectorAll("label")
          , a = Sn.isGroupActive(o)
          , l = o.CustomGroupId
          , c = e.querySelector(".label-text");
        c && zt(c).html(o.GroupName);
        for (var d = 0; d < i.length; d++)
            if (s[d] && zt(s[d]).attr("for", n),
            2 <= i.length && 0 === d)
                zt(i[d]).attr("id", n + "-toggle");
            else {
                var u = !0;
                if ("IAB2" !== Ft.iabType || o.Type !== bt && o.Type !== At || o.HasConsentOptOut || (u = !1),
                Ft.legIntSettings.PAllowLI && o.Type === bt && o.HasLegIntOptOut)
                    if (Ft.legIntSettings.PShowLegIntBtn)
                        Nn.setLegIntButton(e, o, !0, t);
                    else {
                        var p = e.querySelector(Xt.P_Tgl_Cntr + ":not(" + Xt.P_Subgrp_Tgl_Cntr + ")") || e.querySelector(".ot-toggle")
                          , h = p.cloneNode(!0);
                        p.insertAdjacentElement("afterend", h);
                        var g = h.querySelector("input");
                        o.IsLegIntToggle = !0;
                        var C = Sn.isGroupActive(o);
                        o.IsLegIntToggle = !1,
                        Sn.setInputID(g, n + "-leg-out", l, C, r),
                        zt(h.querySelector("label")).attr("for", n + "-leg-out"),
                        Gt.removeChild(h.querySelector(Xt.P_Arrw_Cntr))
                    }
                var y = "always active" === no.getGrpStatus(o).toLowerCase();
                if (y || !u) {
                    var f = i[d].closest(".ot-toggle");
                    f && (f.classList.add("ot-hide-tgl"),
                    f.querySelector("input").setAttribute(this._ariaHidden, !0))
                }
                u && (y && Nn.setAlwaysActive(e),
                Sn.setInputID(i[d], n, l, a, r))
            }
    }
    ,
    qn.prototype.setAlwaysActive = function(e, t) {
        void 0 === t && (t = !1);
        var o = Ft.pcName;
        if (o === ct || o === dt || t)
            e.querySelector(Xt.P_Tgl_Cntr).insertAdjacentElement("afterbegin", zt("<div class='ot-always-active'>" + Rt.AlwaysActiveText + "</div>", "ce").el);
        else {
            var n = e.querySelector(Xt.P_Category_Header);
            !Bt.isV2Template && Rt.PCenterEnableAccordion && (n = e.querySelector(Xt.P_Arrw_Cntr)),
            zt(n).el.insertAdjacentElement("afterend", zt("<div class='ot-always-active'>" + Rt.AlwaysActiveText + "</div>", "ce").el)
        }
        if (Rt.PCenterEnableAccordion) {
            var r = e.querySelector(Xt.P_Acc_Header);
            r && r.classList.add("ot-always-active-group")
        } else {
            var i = e.querySelector("" + Xt.P_Desc_Container);
            i && i.classList.add("ot-always-active-group"),
            e.classList.add("ot-always-active-group")
        }
    }
    ,
    qn);
    function qn() {
        this._ariaHidden = "aria-hidden",
        this._ariaLabel = "aria-label"
    }
    var Mn, Un = (jn.prototype.updateGtmMacros = function(e) {
        void 0 === e && (e = !0);
        var n = [];
        Mt.groupsConsent.forEach(function(e) {
            var t = e.replace(":1", "")
              , o = no.getGrpStatus(no.getGroupById(t)).toLowerCase() === qe;
            Gt.endsWith(e, ":1") && (gn.canSoftOptInInsertForGroup(t) || o) && n.push(t)
        }),
        Mt.hostsConsent.forEach(function(e) {
            Gt.endsWith(e, ":1") && n.push(e.replace(":1", ""))
        }),
        Mt.showGeneralVendors && Rt.GenVenOptOut && Rt.GeneralVendors.forEach(function(e) {
            Mt.genVendorsConsent[e.VendorCustomId] && (Mt.softOptInGenVendors.includes(e.VendorCustomId) && Io.isLandingPage() || n.push(e.VendorCustomId))
        }),
        Mt.vsIsActiveAndOptOut && Mt.getVendorsInDomain().forEach(function(e) {
            Mt.vsConsent.get(e.CustomVendorServiceId) && n.push(e.CustomVendorServiceId)
        });
        var t = "," + Gt.arrToStr(n) + ",";
        Rt.GoogleConsent.GCEnable && this.updateGCMTags(n),
        window.OnetrustActiveGroups = t,
        window.OptanonActiveGroups = t,
        Ft.gcmUpdateCallback && Ft.gcmUpdateCallback(),
        Ft.otDataLayer.ignore || void 0 === this._window[Ft.otDataLayer.name] || this._window[Ft.otDataLayer.name].constructor !== Array ? !Ft.otDataLayer.ignore && Ft.otDataLayer.name && (this._window[Ft.otDataLayer.name] = [{
            event: "OneTrustLoaded",
            OnetrustActiveGroups: t
        }, {
            event: "OptanonLoaded",
            OptanonActiveGroups: t
        }]) : (this._window[Ft.otDataLayer.name].push({
            event: "OneTrustLoaded",
            OnetrustActiveGroups: t
        }),
        this._window[Ft.otDataLayer.name].push({
            event: "OptanonLoaded",
            OptanonActiveGroups: t
        })),
        this.dispatchEvents(e, n, t)
    }
    ,
    jn.prototype.dispatchEvents = function(e, t, o) {
        var n, r;
        !e && Ft.gtmUpdatedinStub || (n = new CustomEvent("consent.onetrust",{
            detail: t
        }));
        var i = xt.readCookieParam(Oe.OPTANON_CONSENT, "groups")
          , s = Mt.fireOnetrustGrp || !i || e || !Ft.gtmUpdatedinStub;
        s && (Mt.fireOnetrustGrp = !1,
        !Ft.otDataLayer.ignore && this._window[Ft.otDataLayer.name] && this._window[Ft.otDataLayer.name].constructor === Array && this._window[Ft.otDataLayer.name].push({
            event: "OneTrustGroupsUpdated",
            OnetrustActiveGroups: o
        }),
        r = new CustomEvent("OneTrustGroupsUpdated",{
            detail: t
        })),
        setTimeout(function() {
            n && s && window.dispatchEvent(n),
            r && window.dispatchEvent(r)
        })
    }
    ,
    jn.prototype.updateGCMTags = function(e) {
        var t = {};
        if (this.canUpdateGCMCategories()) {
            if (Rt.GoogleConsent.GCAdStorage !== ht) {
                var o = e.includes(Rt.GoogleConsent.GCAdStorage) ? ve.granted : ve.denied;
                t[ye.ad_storage] = o
            }
            if (Rt.GoogleConsent.GCAnalyticsStorage !== ht) {
                var n = e.includes(Rt.GoogleConsent.GCAnalyticsStorage) ? ve.granted : ve.denied;
                t[ye.analytics_storage] = n
            }
            if (Rt.GoogleConsent.GCFunctionalityStorage !== ht) {
                var r = e.includes(Rt.GoogleConsent.GCFunctionalityStorage) ? ve.granted : ve.denied;
                t[ye.functionality_storage] = r
            }
            if (Rt.GoogleConsent.GCPersonalizationStorage !== ht) {
                var i = e.includes(Rt.GoogleConsent.GCPersonalizationStorage) ? ve.granted : ve.denied;
                t[ye.personalization_storage] = i
            }
            if (Rt.GoogleConsent.GCSecurityStorage !== ht) {
                var s = e.includes(Rt.GoogleConsent.GCSecurityStorage) ? ve.granted : ve.denied;
                t[ye.security_storage] = s
            }
        }
        var a = xt.getCookie(Oe.ALERT_BOX_CLOSED)
          , l = Ft.getRegionRule().Global;
        if ("function" != typeof window.gtag) {
            var c = this._window;
            window.gtag = function(e, t, o) {
                Ft.otDataLayer.ignore || (c[Ft.otDataLayer.name] ? c[Ft.otDataLayer.name].push(arguments) : c[Ft.otDataLayer.name] = [arguments])
            }
        }
        "function" == typeof window.gtag && (Ft.gcmDevIdSet || (window.gtag(pe.set, "developer_id.dYWJhMj", !0),
        Ft.gcmDevIdSet = !0),
        a && (l || (t[ye.region] = Ft.gcmCountries),
        0 !== Object.keys(t).length && window.gtag(pe.consent, ge.update, t)))
    }
    ,
    jn.prototype.canUpdateGCMCategories = function() {
        return Rt.GoogleConsent.GCAdStorage !== ht || Rt.GoogleConsent.GCAnalyticsStorage !== ht || Rt.GoogleConsent.GCFunctionalityStorage !== ht || Rt.GoogleConsent.GCPersonalizationStorage !== ht || Rt.GoogleConsent.GCSecurityStorage !== ht
    }
    ,
    jn);
    function jn() {
        this._window = window
    }
    var zn, Kn = "Banner", Wn = "Preference Center", Jn = "API", Yn = "Close", Xn = "Allow All", Qn = "Reject All", $n = "Confirm", Zn = "Confirm", er = "Continue without Accepting", tr = (or.prototype.showConsentNotice = function() {
        switch (!Rt.NoBanner || Rt.ForceConsent ? zt(".onetrust-pc-dark-filter").removeClass("ot-hide") : zt(".onetrust-pc-dark-filter").addClass("ot-hide"),
        zt("#onetrust-pc-sdk").removeClass("ot-hide"),
        Ft.pcName) {
        case lt:
            zt("#onetrust-pc-sdk").el[0].classList.contains("ot-animated") || zt("#onetrust-pc-sdk").addClass("ot-animated");
            var e = Rt.PreferenceCenterPosition
              , t = Rt.useRTL
              , o = t ? "right" : "left"
              , n = t ? "left" : "right";
            zt("#onetrust-pc-sdk").el[0].classList.contains("ot-slide-out-" + ("right" === e ? n : o)) && zt("#onetrust-pc-sdk").removeClass("ot-slide-out-" + ("right" === e ? n : o)),
            zt("#onetrust-pc-sdk").addClass("ot-slide-in-" + ("right" === e ? n : o))
        }
        Sn.setAllowAllButton(),
        mn.setPCFocus(mn.getPCElements()),
        Rt.NoBanner && Rt.ScrollCloseBanner || this.pcHasScroll()
    }
    ,
    or.prototype.hideConsentNoticeV2 = function() {
        if (this.restoreCSS(),
        0 !== zt(this.ONETRUST_PC_SDK).length) {
            if (Bt.isV2Template && this.closePCText(),
            Rt.ForceConsent && !Kt.isCookiePolicyPage(Rt.AlertNoticeText) && !to.isAlertBoxClosedAndValid() && Rt.ShowAlertNotice ? zt("" + this.ONETRUST_PC_DARK_FILTER).css("z-index: 2147483645;").show() : zt("" + this.ONETRUST_PC_DARK_FILTER).fadeOut(Rt.PCLayout.Panel ? 500 : 400),
            Rt.PCLayout.Panel) {
                var e = Rt.PreferenceCenterPosition
                  , t = Rt.useRTL
                  , o = t ? "right" : "left"
                  , n = t ? "left" : "right";
                zt("" + this.ONETRUST_PC_SDK).removeClass("ot-slide-in-" + ("right" === e ? n : o)),
                zt("" + this.ONETRUST_PC_SDK).addClass("ot-slide-out-" + ("right" === e ? n : o))
            }
            zt("" + this.ONETRUST_PC_SDK).fadeOut(Rt.PCLayout.Panel ? 500 : 400),
            Mt.isPCVisible = !1,
            Mt.pcLayer = V.Banner,
            this.setFocus()
        } else
            this.setFocusOnPage()
    }
    ,
    or.prototype.setFocus = function() {
        if (Mt.pcSource || to.isAlertBoxClosedAndValid())
            Mt.pcSource ? (Mt.pcSource.focus(),
            Mt.pcSource = null) : Rt.BInitialFocus ? Kt.resetFocusToBody() : this.setFocusOnPage();
        else {
            var e = zt("#onetrust-banner-sdk #onetrust-pc-btn-handler").el[0];
            e && e.focus()
        }
    }
    ,
    or.prototype.restoreCSS = function() {
        if (!Rt.NoBanner || !Rt.ScrollCloseBanner) {
            var e = zt("body").el[0].style.cssText
              , t = zt("html").el[0].style.cssText;
            if (this.updateCustomerCSS(Kt.getCSSPropsFromString(e), Mt.scriptBodyCSS, !0),
            this.updateCustomerCSS(Kt.getCSSPropsFromString(t), Mt.scriptHtmlCSS),
            0 !== Object.keys(Mt.scriptBodyCSS).length) {
                var o = zt("body").el[0]
                  , n = this.getUniqueStyles(e, !0).join("");
                o.removeAttribute("style"),
                n && wt(o, n, !1)
            }
            if (0 !== Object.keys(Mt.scriptHtmlCSS).length) {
                var r = zt("html").el[0]
                  , i = this.getUniqueStyles(t).join("");
                r.removeAttribute("style"),
                i && wt(r, i, !1)
            }
        }
    }
    ,
    or.prototype.getUniqueStyles = function(e, n) {
        if (void 0 === n && (n = !1),
        e) {
            var t = Kt.getCSSPropsFromString(e)
              , r = []
              , i = n ? Mt.customerBodyCSS : Mt.customerHtmlCSS;
            return Object.entries(t).forEach(function(e) {
                var t = e[0]
                  , o = e[1];
                switch (t) {
                case "overflow":
                    i.overflow && r.push(t + ":" + i.overflow + ";");
                    break;
                case "position":
                    n ? i.position && r.push(t + ":" + i.position + ";") : r.push(t + ":" + o + ";");
                    break;
                case "top":
                    n ? i.top && r.push(t + ":" + i.top + ";") : r.push(t + ":" + o + ";");
                    break;
                default:
                    r.push(t + ":" + o + ";")
                }
            }),
            r
        }
        return []
    }
    ,
    or.prototype.setFocusOnPage = function() {
        var e = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
        Mt.isKeyboardUser && e.length && e[0].focus()
    }
    ,
    or.prototype.closePCText = function() {
        var e = document.querySelector("#onetrust-pc-sdk span[aria-live]")
          , t = Rt.AboutCookiesText;
        e.innerText = t + " " + Rt.pcDialogClose
    }
    ,
    or.prototype.pcHasScroll = function() {
        var e = zt(Xt.P_Grp_Container).el[0] || zt("#onetrust-pc-sdk " + Xt.P_Content).el[0];
        if (e.scrollHeight > e.clientHeight && (this.bodyStyleChanged = !0,
        zt("body").length)) {
            Mt.customerBodyCSS.overflow = zt("body").el[0].style.overflow,
            Mt.customerHtmlCSS.overflow = zt("html").el[0].style.overflow;
            var t = Kt.getCSSPropsFromString(zt("body").el[0].style.cssText);
            this.updateCustomerCSS(t, Mt.scriptBodyCSS, !0),
            wt(zt("html").el[0], "overflow: hidden;", !0),
            wt(zt("body").el[0], "overflow: hidden;", !0),
            Mt.scriptBodyCSS.overflow = "hidden",
            Mt.scriptHtmlCSS.overflow = "hidden"
        }
    }
    ,
    or.prototype.updateCustomerCSS = function(e, t, n) {
        void 0 === n && (n = !1),
        Object.keys(e).length && Object.keys(t).length && JSON.stringify(e) !== JSON.stringify(t) && Object.entries(e).forEach(function(e) {
            var t = e[0]
              , o = e[1];
            switch (t) {
            case "position":
                n && o !== Mt.scriptBodyCSS.position && (Mt.customerBodyCSS.position = o);
                break;
            case "top":
                n && o !== Mt.scriptBodyCSS.top && (Mt.customerBodyCSS.top = o);
                break;
            case "overflow":
                n ? o !== Mt.scriptBodyCSS.overflow && (Mt.customerBodyCSS.overflow = o) : o !== Mt.scriptHtmlCSS.overflow && (Mt.scriptHtmlCSS.overflow = o)
            }
        })
    }
    ,
    or.prototype.checkIfPcSdkContainerExist = function() {
        return !zt("#onetrust-pc-sdk").length
    }
    ,
    or);
    function or() {
        this.ONETRUST_PC_SDK = "#onetrust-pc-sdk",
        this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter",
        this.bodyStyleChanged = !1
    }
    var nr, rr = (ir.prototype.init = function() {
        this.insertHtml(),
        this.insertCss(),
        this.showNty(),
        this.initHandler()
    }
    ,
    ir.prototype.getContent = function() {
        return d(this, void 0, void 0, function() {
            return g(this, function(e) {
                return [2, un.getSyncNtfyContent().then(function(e) {
                    Mt.syncNtfyGrp = {
                        name: e.name,
                        html: atob(e.html),
                        css: e.css
                    }
                })]
            })
        })
    }
    ,
    ir.prototype.insertHtml = function() {
        function e(e) {
            return t.querySelector(e)
        }
        this.removeHtml();
        var t = document.createDocumentFragment()
          , o = document.createElement("div");
        zt(o).html(Mt.syncNtfyGrp.html);
        var n = o.querySelector(this.El);
        Rt.BannerRelativeFontSizesToggle && zt(n).addClass("otRelFont"),
        Rt.useRTL && zt(n).attr("dir", "rtl"),
        zt(t).append(n);
        var r = Rt.NtfyConfig;
        this.initHtml("Sync", r.Sync, e, t.querySelector(this.El)),
        r.ShowCS ? zt(e(".ot-pc-handler")).html(r.CSTxt) : (zt(n).addClass("ot-hide-csbtn"),
        e(".ot-sync-btncntr").parentElement.removeChild(e(".ot-sync-btncntr")));
        var i = document.createElement("div");
        zt(i).append(t),
        zt("#onetrust-consent-sdk").append(i.firstChild)
    }
    ,
    ir.prototype.initHandler = function() {
        zt(this.El + " .ot-sync-close-handler").on("click", function() {
            return nr.close()
        })
    }
    ,
    ir.prototype.showNty = function() {
        var e = zt(this.El);
        e.css("bottom: -300px;"),
        e.animate({
            bottom: "1em;"
        }, 1e3),
        setTimeout(function() {
            e.css("bottom: 1rem;")
        }, 1e3),
        e.focus()
    }
    ,
    ir.prototype.changeState = function() {
        setTimeout(function() {
            nr.refreshState()
        }, 1500)
    }
    ,
    ir.prototype.refreshState = function() {
        function e(e) {
            return t.querySelector(e)
        }
        var t = zt(this.El).el[0];
        t.classList.add("ot-nty-complete"),
        t.classList.remove("ot-nty-sync");
        var o = Rt.NtfyConfig;
        this.initHtml("Complete", o.Complete, e, t),
        o.ShowCS && ("LINK" === o.CSType && zt(e(".ot-pc-handler")).addClass("ot-pc-link"),
        zt(".ot-sync-btncntr").show("inline-block"),
        this.alignContent(),
        zt(window).on("resize", function() {
            return nr.resizeEvent
        })),
        setTimeout(function() {
            nr.close()
        }, 1e3 * Rt.NtfyConfig.NtfyDuration)
    }
    ,
    ir.prototype.insertCss = function() {
        var e = document.getElementById("onetrust-style");
        e.innerHTML += Mt.syncNtfyGrp.css,
        e.innerHTML += this.addCustomStyles()
    }
    ,
    ir.prototype.addCustomStyles = function() {
        var e = Rt.NtfyConfig
          , t = e.Sync
          , o = e.Complete
          , n = e.CSButton
          , r = e.CSLink;
        return "\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync {\n            background-color: " + t.BgColor + ";\n            border: 1px solid " + t.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-refresh>g {\n            fill: " + t.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync #ot-sync-title {\n            text-align: " + t.TitleAlign + ";\n            color: " + t.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-sync .ot-sync-desc  {\n            text-align: " + t.DescAlign + ";\n            color: " + t.DescColor + "; \n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete {\n            background-color: " + o.BgColor + ";\n            border: 1px solid " + o.BdrColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-sync-check>g {\n            fill: " + o.IconBgColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete #ot-sync-title {\n            text-align: " + o.TitleAlign + ";\n            color: " + o.TitleColor + ";\n        }\n        #onetrust-consent-sdk #ot-sync-ntfy.ot-nty-complete .ot-sync-desc  {\n            text-align: " + o.DescAlign + ";\n            color: " + o.DescColor + "; \n        }\n        " + ("BUTTON" === e.CSType ? "\n        #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler {\n            background-color: " + n.BgColor + ";\n            border: 1px solid " + n.BdrColor + ";\n            color: " + n.Color + ";\n            text-align: " + n.Align + ";\n        }" : " #onetrust-consent-sdk #ot-sync-ntfy .ot-pc-handler.ot-pc-link {\n            color: " + r.Color + ";\n            text-align: " + r.Align + ";\n        }") + "\n        "
    }
    ,
    ir.prototype.initHtml = function(e, t, o, n) {
        var r = "Sync" === e ? ".ot-sync-refresh" : ".ot-sync-check"
          , i = "Complete" === e ? ".ot-sync-refresh" : ".ot-sync-check";
        t.ShowIcon ? (zt(o(r)).show(),
        zt(o(i)).hide(),
        zt(o(".ot-sync-icon")).show("inline-block"),
        n.classList.remove("ot-hide-icon")) : (zt(o(".ot-sync-icon")).hide(),
        n.classList.add("ot-hide-icon")),
        t.Title ? zt(o("#ot-sync-title")).html(t.Title) : zt(o("#ot-sync-title")).hide(),
        t.Desc ? zt(o(".ot-sync-desc")).html(t.Desc) : zt(o(".ot-sync-desc")).hide(),
        t.ShowClose ? (zt(o(".ot-sync-close-handler")).show("inline-block"),
        zt(o(".ot-close-icon")).attr("aria-label", t.CloseAria),
        n.classList.remove("ot-hide-close")) : (zt(o(".ot-sync-close-handler")).hide(),
        n.classList.add("ot-hide-close"))
    }
    ,
    ir.prototype.close = function() {
        this.hideSyncNtfy(),
        Kt.resetFocusToBody()
    }
    ,
    ir.prototype.hideSyncNtfy = function() {
        Rt.NtfyConfig.ShowCS && window.removeEventListener("resize", nr.resizeEvent),
        zt("#ot-sync-ntfy").fadeOut(400)
    }
    ,
    ir.prototype.removeHtml = function() {
        var e = zt(this.El).el;
        e && Gt.removeChild(e)
    }
    ,
    ir.prototype.alignContent = function() {
        zt(".ot-sync-btncntr").el[0].clientHeight > zt(".ot-sync-titlecntr").el[0].clientHeight && (zt(".ot-sync-titlecntr").addClass("ot-pos-abs"),
        zt(".ot-sync-btncntr").addClass("ot-pos-rel"))
    }
    ,
    ir.prototype.resizeEvent = function() {
        window.innerWidth <= 896 && nr.alignContent()
    }
    ,
    ir);
    function ir() {
        this.El = "#ot-sync-ntfy"
    }
    var sr, ar = (lr.prototype.toggleVendorConsent = function(e, t) {
        void 0 === e && (e = []),
        void 0 === t && (t = null),
        e.length || (e = Mt.oneTrustIABConsent.vendors),
        e.forEach(function(e) {
            var t = e.split(":")
              , o = t[0]
              , n = t[1]
              , r = zt(Xt.P_Vendor_Container + " ." + Xt.P_Ven_Ctgl + ' [vendorid="' + o + '"]').el[0];
            r && Gt.setCheckedAttribute("", r, "true" === n)
        });
        var o = zt("#onetrust-pc-sdk #select-all-vendor-groups-handler").el[0];
        if (o) {
            var n = Gt.getActiveIdArray(Gt.distinctArray(e));
            null === t && (t = n.length === e.length),
            t || 0 === n.length ? o.parentElement.classList.remove(Qt.P_Line_Through) : o.parentElement.classList.add(Qt.P_Line_Through),
            Gt.setCheckedAttribute("", o, t)
        }
    }
    ,
    lr.prototype.toggleVendorLi = function(e, t) {
        void 0 === e && (e = []),
        void 0 === t && (t = null),
        e.length || (e = Mt.oneTrustIABConsent.legIntVendors),
        e.forEach(function(e) {
            var t = e.split(":")
              , o = t[0]
              , n = t[1]
              , r = zt(Xt.P_Vendor_Container + " ." + Xt.P_Ven_Ltgl + ' [leg-vendorid="' + o + '"]').el[0];
            r && Gt.setCheckedAttribute("", r, "true" === n)
        });
        var o = zt("#onetrust-pc-sdk #select-all-vendor-leg-handler").el[0];
        if (o) {
            var n = Gt.getActiveIdArray(Gt.distinctArray(e));
            null === t && (t = n.length === e.length),
            t || 0 === n.length ? o.parentElement.classList.remove(Qt.P_Line_Through) : o.parentElement.classList.add(Qt.P_Line_Through),
            Gt.setCheckedAttribute("", o, t)
        }
    }
    ,
    lr.prototype.updateVendorLegBtns = function(e) {
        void 0 === e && (e = []),
        e.length || (e = Mt.oneTrustIABConsent.legIntVendors),
        e.forEach(function(e) {
            var t = e.split(":")
              , o = t[0]
              , n = t[1]
              , r = zt(Xt.P_Vendor_Container + ' .ot-leg-btn-container[data-group-id="' + o + '"]').el[0];
            r && Sn.updateLegIntBtnElement(r, "true" === n)
        })
    }
    ,
    lr);
    function lr() {}
    var cr, dr = (ur.prototype.setFilterList = function(t) {
        var o = this
          , n = zt("#onetrust-pc-sdk " + Xt.P_Fltr_Modal + " " + Xt.P_Fltr_Option).el[0].cloneNode(!0);
        zt("#onetrust-pc-sdk " + Xt.P_Fltr_Modal + " " + Xt.P_Fltr_Options).html(""),
        (Bt.isV2Template || Rt.PCLayout.Popup) && zt("#onetrust-pc-sdk #filter-cancel-handler").html(Rt.PCenterCancelFiltersText || "Cancel"),
        !Bt.isV2Template && Rt.PCLayout.Popup || (zt("#onetrust-pc-sdk " + Xt.P_Clr_Fltr_Txt).html(Rt.PCenterClearFiltersText),
        zt("#filter-btn-handler").el[0].setAttribute("aria-label", Rt.PCenterFilterText)),
        zt("#onetrust-pc-sdk #filter-apply-handler").html(Rt.PCenterApplyFiltersText),
        t ? Ft.consentableGrps.forEach(function(e) {
            (Mt.cookieListType === X.GenVen || Mt.cookieListType === X.HostAndGenVen ? e.Hosts.length || e.FirstPartyCookies.length || e.GeneralVendorsIds && e.GeneralVendorsIds.length : e.Hosts.length || e.FirstPartyCookies.length) && o.filterGroupOptionSetter(n, e, t)
        }) : Ft.iabGrps.forEach(function(e) {
            o.filterGroupOptionSetter(n, e, t)
        })
    }
    ,
    ur.prototype.setFilterListByGroup = function(e, t) {
        var o = this;
        if (!e || e.length <= 0)
            zt("#onetrust-pc-sdk " + Xt.P_Fltr_Modal + " " + Xt.P_Fltr_Options).html("");
        else {
            var n = zt("#onetrust-pc-sdk " + Xt.P_Fltr_Modal + " " + Xt.P_Fltr_Option).el[0].cloneNode(!0);
            zt("#onetrust-pc-sdk " + Xt.P_Fltr_Modal + " " + Xt.P_Fltr_Options).html(""),
            (Bt.isV2Template || Rt.PCLayout.Popup) && zt("#onetrust-pc-sdk #filter-cancel-handler").html(Rt.PCenterCancelFiltersText || "Cancel"),
            !Bt.isV2Template && Rt.PCLayout.Popup || (zt("#onetrust-pc-sdk " + Xt.P_Clr_Fltr_Txt).html(Rt.PCenterClearFiltersText),
            zt("#filter-btn-handler").el[0].setAttribute("aria-label", Rt.PCenterFilterText)),
            zt("#onetrust-pc-sdk #filter-apply-handler").html(Rt.PCenterApplyFiltersText),
            e.forEach(function(e) {
                o.filterGroupOptionSetter(n, e, t)
            })
        }
    }
    ,
    ur.prototype.filterGroupOptionSetter = function(e, t, o) {
        var n = t.CustomGroupId
          , r = n + "-filter"
          , i = e.cloneNode(!0);
        zt(Xt.P_Fltr_Modal + " " + Xt.P_Fltr_Options).append(i),
        zt(i.querySelector("input")).attr("id", r),
        zt(i.querySelector("label")).attr("for", r),
        Bt.isV2Template ? zt(i.querySelector(Xt.P_Label_Txt)).html(t.GroupName) : zt(i.querySelector("label span")).html(t.GroupName),
        zt(i.querySelector("input")).attr(o ? "data-optanongroupid" : "data-purposeid", n)
    }
    ,
    ur);
    function ur() {
        this.bodyScrollProp = "",
        this.htmlScrollProp = "",
        this.ONETRUST_PC_SDK = "#onetrust-pc-sdk",
        this.ONETRUST_PC_DARK_FILTER = ".onetrust-pc-dark-filter"
    }
    var pr, hr = (gr.prototype.initialiseCssReferences = function() {
        var e, t = "";
        document.getElementById("onetrust-style") ? e = document.getElementById("onetrust-style") : ((e = document.createElement("style")).id = "onetrust-style",
        Bt.moduleInitializer.CookieV2CSPEnabled && Mt.nonce && e.setAttribute("nonce", Mt.nonce)),
        gn.commonStyles && (t += gn.commonStyles),
        gn.bannerGroup && (t += gn.bannerGroup.css,
        Bt.fp.CookieV2SSR || (t += this.addCustomBannerCSS()),
        Rt.bannerCustomCSS && (t += Rt.bannerCustomCSS)),
        gn.preferenceCenterGroup && (t += gn.preferenceCenterGroup.css,
        t += this.addCustomPreferenceCenterCSS()),
        gn.cookieListGroup && !Bt.fp.CookieV2TrackingTechnologies && (t += gn.cookieListGroup.css,
        t += this.addCustomCookieListCSS()),
        Rt.cookiePersistentLogo && !Rt.cookiePersistentLogo.includes("ot_guard_logo.svg") && (t += ".ot-floating-button__front{background-image:url('" + Rt.cookiePersistentLogo + "')}"),
        this.processedCSS = t,
        Ft.ignoreInjectingHtmlCss || (e.textContent = t,
        zt(document.head).append(e))
    }
    ,
    gr);
    function gr() {
        this.processedCSS = "",
        this.addCustomBannerCSS = function() {
            var e = Rt.backgroundColor
              , t = Rt.buttonColor
              , o = Rt.textColor
              , n = Rt.buttonTextColor
              , r = Rt.bannerMPButtonColor
              , i = Rt.bannerMPButtonTextColor
              , s = Rt.bannerAccordionBackgroundColor
              , a = Rt.BSaveBtnColor
              , l = Rt.BCategoryContainerColor
              , c = Rt.BLineBreakColor
              , d = Rt.BCategoryStyleColor
              , u = Rt.bannerLinksTextColor
              , p = Rt.BFocusBorderColor
              , h = "\n        " + (Ft.bannerName === tt ? e ? "#onetrust-consent-sdk #onetrust-banner-sdk .ot-sdk-container {\n                    background-color: " + e + ";}" : "" : e ? "#onetrust-consent-sdk #onetrust-banner-sdk {background-color: " + e + ";}" : "") + "\n            " + (o ? "#onetrust-consent-sdk #onetrust-policy-title,\n                    #onetrust-consent-sdk #onetrust-policy-text,\n                    #onetrust-consent-sdk .ot-b-addl-desc,\n                    #onetrust-consent-sdk .ot-dpd-desc,\n                    #onetrust-consent-sdk .ot-dpd-title,\n                    #onetrust-consent-sdk #onetrust-policy-text *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk .ot-dpd-desc *:not(.onetrust-vendors-list-handler),\n                    #onetrust-consent-sdk #onetrust-banner-sdk #banner-options *,\n                    #onetrust-banner-sdk .ot-cat-header {\n                        color: " + o + ";\n                    }" : "") + "\n            " + (s ? "#onetrust-consent-sdk #onetrust-banner-sdk .banner-option-details {\n                    background-color: " + s + ";}" : "") + "\n            " + (u ? " #onetrust-consent-sdk #onetrust-banner-sdk a[href],\n                    #onetrust-consent-sdk #onetrust-banner-sdk a[href] font,\n                    #onetrust-consent-sdk #onetrust-banner-sdk .ot-link-btn\n                        {\n                            color: " + u + ";\n                        }" : "");
            if ((t || n) && (h += "#onetrust-consent-sdk #onetrust-accept-btn-handler,\n                         #onetrust-banner-sdk #onetrust-reject-all-handler {\n                            " + (t ? "background-color: " + t + ";border-color: " + t + ";" : "") + "\n                " + (n ? "color: " + n + ";" : "") + "\n            }"),
            p && (h += "\n            #onetrust-consent-sdk #onetrust-banner-sdk *:focus,\n            #onetrust-consent-sdk #onetrust-banner-sdk:focus {\n               outline-color: " + p + ";\n               outline-width: 1px;\n            }"),
            (i || r) && (h += "\n            #onetrust-consent-sdk #onetrust-pc-btn-handler,\n            #onetrust-consent-sdk #onetrust-pc-btn-handler.cookie-setting-link {\n                " + (i ? "color: " + i + "; border-color: " + i + ";" : "") + "\n                background-color:\n                " + (r && !Rt.BannerSettingsButtonDisplayLink ? r : e) + ";\n            }"),
            Ft.bannerName === rt) {
                var g = void 0
                  , C = void 0
                  , y = void 0
                  , f = void 0
                  , v = void 0;
                a && (g = "color: " + n + ";border-color: " + n + ";background-color: " + a + ";"),
                l && (C = "background-color: " + l + ";"),
                c && (y = "border-color: " + c + ";"),
                d && (f = "background-color: " + d + ";",
                v = "border-color: " + d + ";"),
                p && (h += "\n                #onetrust-consent-sdk #onetrust-banner-sdk .ot-tgl input:focus+.ot-switch .ot-switch-nob,\n                #onetrust-consent-sdk #onetrust-banner-sdk .ot-chkbox input:focus + label::before {\n                    outline-color: " + p + ";\n                    outline-width: 1px;\n                }"),
                h += "#onetrust-banner-sdk .ot-bnr-save-handler {" + g + "}#onetrust-banner-sdk .ot-cat-lst {" + C + "}#onetrust-banner-sdk .ot-cat-bdr {" + y + "}#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob:before,#onetrust-banner-sdk .ot-chkbox input:checked~label::before {" + f + "}#onetrust-banner-sdk .ot-chkbox label::before,#onetrust-banner-sdk .ot-tgl input:checked+.ot-switch .ot-switch-nob {" + v + "}#onetrust-banner-sdk #onetrust-pc-btn-handler.cookie-setting-link {background: inherit}"
            }
            return Rt.BCloseButtonType === de.Link && (h += "#onetrust-banner-sdk.ot-close-btn-link .banner-close-button {color: " + Rt.BContinueColor + "}"),
            h
        }
        ,
        this.addCustomPreferenceCenterCSS = function() {
            var e = Rt.pcBackgroundColor
              , t = Rt.pcButtonColor
              , o = Rt.pcTextColor
              , n = Rt.pcButtonTextColor
              , r = Rt.pcLinksTextColor
              , i = Rt.PCenterEnableAccordion
              , s = Rt.pcAccordionBackgroundColor
              , a = Rt.pcMenuColor
              , l = Rt.pcMenuHighLightColor
              , c = Rt.pcLegIntButtonColor
              , d = Rt.pcLegIntButtonTextColor
              , u = Rt.PCFocusBorderColor
              , p = "\n            " + (e ? (Ft.pcName === at ? "#onetrust-consent-sdk #onetrust-pc-sdk .group-parent-container,\n                        #onetrust-consent-sdk #onetrust-pc-sdk .manage-pc-container,\n                        #onetrust-pc-sdk " + Xt.P_Vendor_List : "#onetrust-consent-sdk #onetrust-pc-sdk") + ",\n                #onetrust-consent-sdk " + Xt.P_Search_Cntr + ",\n                " + (i && Ft.pcName === at ? "#onetrust-consent-sdk #onetrust-pc-sdk .ot-accordion-layout" + Xt.P_Category_Item : "#onetrust-consent-sdk #onetrust-pc-sdk .ot-switch.ot-toggle") + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Tab_Grp_Hdr + " .checkbox,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Title + ":after\n                " + (Bt.isV2Template ? ",#onetrust-consent-sdk #onetrust-pc-sdk #ot-sel-blk,\n                        #onetrust-consent-sdk #onetrust-pc-sdk #ot-fltr-cnt,\n                        #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Triangle : "") + " {\n                    background-color: " + e + ";\n                }\n               " : "") + "\n            " + (o ? "#onetrust-consent-sdk #onetrust-pc-sdk h3,\n                #onetrust-consent-sdk #onetrust-pc-sdk h4,\n                #onetrust-consent-sdk #onetrust-pc-sdk h5,\n                #onetrust-consent-sdk #onetrust-pc-sdk h6,\n                #onetrust-consent-sdk #onetrust-pc-sdk p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Vendor_Container + " " + Xt.P_Ven_Opts + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Policy_Txt + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Li_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Leg_Select_All + " span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Host_Cntr + " " + Xt.P_Host_Info + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Fltr_Modal + " #modal-header,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-checkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Vendor_List + " " + Xt.P_Select_Cntr + " p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Vendor_List + " " + Xt.P_Vendor_Title + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Vendor_List + " .back-btn-handler p,\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Vendor_List + " " + Xt.P_Ven_Name + ",\n                #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Vendor_List + " " + Xt.P_Vendor_Container + " .consent-category,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-label-status,\n                #onetrust-consent-sdk #onetrust-pc-sdk .ot-chkbox label span,\n                #onetrust-consent-sdk #onetrust-pc-sdk #clear-filters-handler\n                {\n                    color: " + o + ";\n                }" : "") + "\n            " + (r ? " #onetrust-consent-sdk #onetrust-pc-sdk .privacy-notice-link,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler + a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .category-host-list-handler,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Ven_Link + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Host_Cntr + " " + Xt.P_Host_Title + " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Host_Cntr + " " + Xt.P_Acc_Header + " " + Xt.P_Host_View_Cookies + ",\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Host_Cntr + " " + Xt.P_Host_Info + " a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Content + " " + Xt.P_Policy_Txt + " .ot-link-btn,\n                    #onetrust-consent-sdk #onetrust-pc-sdk .ot-vnd-serv .ot-vnd-item .ot-vnd-info a,\n                    #onetrust-consent-sdk #onetrust-pc-sdk #ot-lst-cnt .ot-vnd-info a\n                    {\n                        color: " + r + ";\n                    }" : "") + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .category-vendors-list-handler:hover { text-decoration: underline;}\n            " + (i && s ? "#onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Acc_Container + Xt.P_Acc_Txt + ",\n            #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Acc_Txt + " " + Xt.P_Subgrp_Tgl_Cntr + " .ot-switch.ot-toggle\n             {\n                background-color: " + s + ";\n            }" : "") + "\n            " + (s ? " #onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Host_Cntr + " " + Xt.P_Host_Info + ",\n                    " + (Bt.isV2Template ? "#onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Acc_Txt + " .ot-ven-dets" : "#onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Acc_Txt + " " + Xt.P_Ven_Opts) + "\n                            {\n                                background-color: " + s + ";\n                            }" : "") + "\n        ";
            return (t || n) && (p += "#onetrust-consent-sdk #onetrust-pc-sdk\n            button:not(#clear-filters-handler):not(.ot-close-icon):not(#filter-btn-handler):not(.ot-remove-objection-handler):not(.ot-obj-leg-btn-handler):not([aria-expanded]):not(.ot-link-btn),\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-active-leg-btn {\n                " + (t ? "background-color: " + t + ";border-color: " + t + ";" : "") + "\n                " + (n ? "color: " + n + ";" : "") + "\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk ." + Xt.P_Active_Menu + " {\n                " + (t ? "border-color: " + t + ";" : "") + "\n            }\n            " + (Ft.pcName === at ? "#onetrust-consent-sdk #onetrust-pc-sdk " + Xt.P_Category_Item + ",\n            #onetrust-consent-sdk #onetrust-pc-sdk.ot-leg-opt-out " + Xt.P_Li_Hdr + "{\n                border-color: " + t + ";\n            }" : "") + "\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-remove-objection-handler{\n                background-color: transparent;\n                border: 1px solid transparent;\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-leg-btn-container .ot-inactive-leg-btn {\n                " + (c ? "background-color: " + c + ";" : "") + "\n                " + (d ? "color: " + d + "; border-color: " + d + ";" : "") + "\n            }\n            "),
            u && (p += '\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-tgl input:focus + .ot-switch, .ot-switch .ot-switch-nob, .ot-switch .ot-switch-nob:before,\n            #onetrust-pc-sdk .ot-checkbox input[type="checkbox"]:focus + label::before,\n            #onetrust-pc-sdk .ot-chkbox input[type="checkbox"]:focus + label::before {\n                outline-color: ' + u + ";\n                outline-width: 1px;\n            }\n            #onetrust-pc-sdk .ot-host-item > button:focus, #onetrust-pc-sdk .ot-ven-item > button:focus {\n                border: 1px solid " + u + ";\n            }\n            #onetrust-consent-sdk #onetrust-pc-sdk *:focus,\n            #onetrust-consent-sdk #onetrust-pc-sdk .ot-vlst-cntr > a:focus {\n               outline: 1px solid " + u + ";\n            }"),
            Rt.PCCloseButtonType === de.Link && (p += "#onetrust-pc-sdk.ot-close-btn-link .ot-close-icon {color: " + Rt.PCContinueColor + "}"),
            Ft.pcName === dt && (a && (p += "#onetrust-consent-sdk #onetrust-pc-sdk .category-menu-switch-handler {\n                    background-color: " + a + "\n                }"),
            l && (p += "#onetrust-consent-sdk #onetrust-pc-sdk ." + Xt.P_Active_Menu + " {\n                    background-color: " + l + "\n                }")),
            !Rt.PCTemplateUpgrade && u && (p += '\n            #onetrust-pc-sdk input[type="checkbox"]:focus + .accordion-header,\n            #onetrust-pc-sdk .category-item .ot-switch.ot-toggle input:focus + .ot-switch-label,\n            #onetrust-pc-sdk .checkbox input:focus + label::after {\n                outline-color: ' + u + ";\n                outline-width: 1px;\n            }"),
            Rt.pcCustomCSS && (p += Rt.pcCustomCSS),
            p
        }
        ,
        this.addCustomCookieListCSS = function() {
            var e = Rt.CookiesV2NewCookiePolicy ? "-v2.ot-sdk-cookie-policy" : ""
              , t = "\n                " + (Rt.cookieListPrimaryColor ? "\n                    #ot-sdk-cookie-policy" + e + " h5,\n                    #ot-sdk-cookie-policy" + e + " h6,\n                    #ot-sdk-cookie-policy" + e + " li,\n                    #ot-sdk-cookie-policy" + e + " p,\n                    #ot-sdk-cookie-policy" + e + " a,\n                    #ot-sdk-cookie-policy" + e + " span,\n                    #ot-sdk-cookie-policy" + e + " td,\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-description {\n                        color: " + Rt.cookieListPrimaryColor + ";\n                    }" : "") + "\n                    " + (Rt.cookieListTableHeaderColor ? "#ot-sdk-cookie-policy" + e + " th {\n                        color: " + Rt.cookieListTableHeaderColor + ";\n                    }" : "") + "\n                    " + (Rt.cookieListGroupNameColor ? "#ot-sdk-cookie-policy" + e + " .ot-sdk-cookie-policy-group {\n                        color: " + Rt.cookieListGroupNameColor + ";\n                    }" : "") + "\n                    " + (Rt.cookieListTitleColor ? "\n                    #ot-sdk-cookie-policy" + e + " #cookie-policy-title {\n                            color: " + Rt.cookieListTitleColor + ";\n                        }\n                    " : "") + "\n            " + (e && Rt.CookieListTableHeaderBackgroundColor ? "\n                    #ot-sdk-cookie-policy" + e + " table th {\n                            background-color: " + Rt.CookieListTableHeaderBackgroundColor + ";\n                        }\n                    " : "") + "\n            ";
            return Rt.cookieListCustomCss && (t += Rt.cookieListCustomCss),
            t
        }
    }
    var Cr, yr = (fr.prototype.BannerPushDownHandler = function() {
        this.checkIsBrowserIE11OrBelow() || (Cr.pushPageDown(Dn),
        zt(window).on("resize", function() {
            "none" !== zt(Dn).css("display") && Cr.pushPageDown(Dn)
        }))
    }
    ,
    fr.prototype.checkIsBrowserIE11OrBelow = function() {
        var e = window.navigator.userAgent;
        return 0 < e.indexOf("MSIE ") || 0 < e.indexOf("Trident/")
    }
    ,
    fr.prototype.pushPageDown = function(e) {
        var t = zt(e).height() + "px";
        zt(e).show().css("\n            bottom: auto;\n            position: absolute;\n            top: -" + t + ";\n        "),
        Mt.customerBodyCSS.position = zt("body").el[0].style.position,
        Mt.customerBodyCSS.top = zt("body").el[0].style.top,
        wt(zt("body").el[0], "position: relative;", !0),
        wt(zt("body").el[0], "top: " + t + ";", !0),
        Mt.scriptBodyCSS.position = "relative",
        Mt.scriptBodyCSS.top = t
    }
    ,
    fr);
    function fr() {}
    var vr, kr = (mr.prototype.showBanner = function() {
        var e = Ft.bannerName
          , t = zt(this.El);
        Mt.skipAddingHTML && "none" === getComputedStyle(t.el[0]).getPropertyValue("display") && e !== et && e !== Ze && e !== nt ? t.css("display: block;") : Rt.BAnimation === le.SlideIn ? this.slideInAnimation(t, e) : Rt.BAnimation === le.FadeIn && t.addClass("ot-fade-in")
    }
    ,
    mr.prototype.insertAlertHtml = function() {
        function e(e) {
            return r.querySelector(e)
        }
        function t(e) {
            return r.querySelectorAll(e)
        }
        var o = this
          , n = Rt.BannerPurposeTitle || Rt.BannerPurposeDescription || Rt.BannerFeatureTitle || Rt.BannerFeatureDescription || Rt.BannerInformationTitle || Rt.BannerInformationDescription
          , r = document.createDocumentFragment()
          , i = Ft.bannerName
          , s = document.createElement("div");
        zt(s).html(gn.bannerGroup.html);
        var a = s.querySelector("#onetrust-banner-sdk");
        if (this.setAriaModalForBanner(a),
        Bt.fp.CookieV2SSR)
            zt(r).append(a),
            this._rejectBtn = e("#onetrust-reject-all-handler"),
            this._acceptBtn = e("#onetrust-accept-btn-handler");
        else {
            var l = [{
                type: "purpose",
                titleKey: "BannerPurposeTitle",
                descriptionKey: "BannerPurposeDescription",
                identifier: "purpose-option"
            }, {
                type: "feature",
                titleKey: "BannerFeatureTitle",
                descriptionKey: "BannerFeatureDescription",
                identifier: "feature-option"
            }, {
                type: "information",
                titleKey: "BannerInformationTitle",
                descriptionKey: "BannerInformationDescription",
                identifier: "information-option"
            }];
            if (gn.bannerGroup) {
                Rt.BannerRelativeFontSizesToggle && zt(a).addClass("otRelFont"),
                (Rt.BInitialFocus || Rt.BInitialFocusLinkAndButton) && a.setAttribute("tabindex", "0"),
                Rt.useRTL && zt(a).attr("dir", "rtl"),
                "IAB2" === Ft.iabType && Rt.BannerDPDDescription.length && zt(a).addClass("ot-iab-2");
                var c = Rt.BannerPosition;
                if (c && ("bottom-left" === c ? zt(a).addClass("ot-bottom-left") : "bottom-right" === c ? zt(a).addClass("ot-bottom-right") : zt(a).addClass(c)),
                zt(r).append(a),
                Rt.BannerTitle ? (zt(e("#onetrust-policy-title")).html(Rt.BannerTitle),
                zt(e('[role="alertdialog"]')).attr("aria-label", Rt.BannerTitle)) : (Gt.removeChild(e("#onetrust-policy-title")),
                zt(e("#onetrust-banner-sdk")).addClass("ot-wo-title"),
                zt(e('[role="alertdialog"]')).attr("aria-label", Rt.AriaPrivacy)),
                !Rt.IsIabEnabled && Mt.showGeneralVendors && Rt.BannerNonIABVendorListText) {
                    var d = document.createElement("div");
                    d.setAttribute("id", "ot-gv-link-ctnr"),
                    zt(d).html('<button class="ot-link-btn ot-gv-list-handler">' + Rt.BannerNonIABVendorListText + "</button>"),
                    zt(e("#onetrust-policy")).el.appendChild(d)
                }
                zt(e("#onetrust-policy-text")).html(Rt.AlertNoticeText),
                Rt.BShowPolicyLink && Rt.BShowImprintLink && zt(e("#onetrust-policy-text a")).length ? (zt(e("#onetrust-policy-text a:first-child")).attr("aria-label", Rt.BCookiePolicyLinkScreenReader),
                zt(e("#onetrust-policy-text a:last-child")).attr("aria-label", Rt.BImprintLinkScreenReader)) : Rt.BShowPolicyLink && zt(e("#onetrust-policy-text a")).length ? zt(e("#onetrust-policy-text a")).attr("aria-label", Rt.BCookiePolicyLinkScreenReader) : Rt.BShowImprintLink && zt(e("#onetrust-policy-text a")).length && zt(e("#onetrust-policy-text a")).attr("aria-label", Rt.BImprintLinkScreenReader),
                "IAB2" === Rt.IabType && Rt.BannerDPDDescription.length && i !== rt ? (zt(e(".ot-dpd-container .ot-dpd-title")).html(Rt.BannerDPDTitle),
                zt(e(".ot-dpd-container .ot-dpd-desc")).html(Rt.BannerDPDDescription.join(",&nbsp;"))) : Gt.removeChild(e(".ot-dpd-container"));
                var u = zt(e("#onetrust-group-container"));
                "IAB2" === Ft.iabType && Rt.BannerAdditionalDescription.trim() && this.setAdditionalDesc(e);
                var p = "IAB2" === Rt.IabType && Rt.BannerDPDDescription.length ? i !== rt ? zt(e(".ot-dpd-container .ot-dpd-desc")) : u : zt(e("#onetrust-policy-text"));
                Rt.IsIabEnabled && Rt.BannerIABPartnersLink && p.append('<button class="ot-link-btn onetrust-vendors-list-handler">\n                ' + Rt.BannerIABPartnersLink + "\n                </button>"),
                Rt.showBannerAcceptButton ? (this._acceptBtn = e("#onetrust-accept-btn-handler"),
                zt(this._acceptBtn).html(Rt.AlertAllowCookiesText),
                i !== nt || Rt.showBannerCookieSettings || Rt.BannerShowRejectAllButton || zt(this._acceptBtn.parentElement).addClass("accept-btn-only")) : Gt.removeChild(e("#onetrust-accept-btn-handler")),
                Rt.BannerShowRejectAllButton && Rt.BannerRejectAllButtonText.trim() ? (this._rejectBtn = e("#onetrust-reject-all-handler"),
                zt(this._rejectBtn).html(Rt.BannerRejectAllButtonText),
                e("#onetrust-button-group-parent").classList.add("has-reject-all-button")) : (Gt.removeChild(e("#onetrust-reject-all-handler")),
                Gt.removeChild(e("#onetrust-reject-btn-container")));
                var h = zt(e("#onetrust-pc-btn-handler"));
                Rt.showBannerCookieSettings ? (h.html(Rt.AlertMoreInfoText),
                Rt.BannerSettingsButtonDisplayLink && h.addClass("cookie-setting-link"),
                i !== nt || Rt.showBannerAcceptButton || h.addClass("cookie-settings-btn-only")) : Gt.removeChild(h.el);
                var g = !Rt.showBannerAcceptButton && !Rt.showBannerCookieSettings && !Rt.BannerShowRejectAllButton;
                g && e("#onetrust-button-group-parent").parentElement.removeChild(e("#onetrust-button-group-parent"));
                var C = Rt.showBannerCloseButton
                  , y = zt(t(".banner-close-button")).el
                  , f = e("#onetrust-button-group")
                  , v = Rt.BCloseButtonType === de.Link;
                if (C)
                    for (k = 0; k < y.length; k++)
                        v ? (zt(y[k]).html(Rt.BContinueText),
                        zt(a).addClass("ot-close-btn-link"),
                        zt(y[k]).addClass("ot-close-link"),
                        zt(y[k]).removeClass("onetrust-close-btn-ui"),
                        zt(y[k]).removeClass("ot-close-icon"),
                        i !== tt && i !== ot || (f.insertAdjacentElement("afterbegin", e(".onetrust-close-btn-handler").parentElement),
                        zt(y[k]).attr("tabindex", "1"))) : zt(y[k]).el.setAttribute("aria-label", Rt.BannerCloseButtonText || "Close Cookie Banner");
                else {
                    for (var k = 0; k < y.length; k++)
                        zt(y[k].parentElement).el.removeChild(y[k]);
                    i !== Ze && i !== ot || Gt.removeChild(e("#onetrust-close-btn-container-mobile"))
                }
                if (i === Ze && ("IAB2" === Ft.iabType && (u.removeClass("ot-sdk-eight"),
                Rt.showBannerAcceptButton && f.insertAdjacentElement("afterbegin", this._acceptBtn),
                Rt.showBannerCookieSettings && f.insertAdjacentElement("beforeend", e("#onetrust-pc-btn-handler"))),
                C && !g && "IAB2" === Ft.iabType ? u.addClass("ot-sdk-nine") : C && g ? u.addClass("ot-sdk-eleven") : !C && g ? u.addClass("ot-sdk-twelve") : C || g || "IAB2" !== Ft.iabType || (u.addClass("ot-sdk-ten"),
                zt(e("#onetrust-button-group-parent")).addClass("ot-sdk-two"),
                zt(e("#onetrust-button-group-parent")).removeClass("ot-sdk-three"))),
                C && i === tt && "IAB2" === Ft.iabType && !v) {
                    var m = e(".banner-close-btn-container");
                    m.parentElement.removeChild(m),
                    zt(a).el.insertAdjacentElement("beforeEnd", m),
                    zt(e("#onetrust-banner-sdk .ot-sdk-container")).addClass("ot-top-cntr")
                }
                var b = zt(e("#banner-options")).el;
                n ? (i === ot ? this.setFloatingRoundedIconBannerCmpOptions(e, l) : (this.setCmpBannerOptions(e, l),
                i === rt && u.el.insertAdjacentElement("beforeend", b)),
                zt(window).on("resize", function() {
                    window.innerWidth <= 896 && o.setBannerOptionContent()
                })) : (Ft.bannerName === tt && (b = zt(e(".banner-options-card")).el),
                Gt.removeChild(b)),
                this.setBannerLogo(a, e)
            }
        }
        Ft.bannerName === rt && Bt.moduleInitializer.IsSuppressPC && (Mt.dataGroupState = Rt.Groups.filter(function(e) {
            return e.Order
        })),
        Ft.bannerName === rt && (this._fourBtns = Rt.BannerShowRejectAllButton && Rt.showBannerAcceptButton && Rt.showBannerCookieSettings && Rt.BShowSaveBtn,
        this._saveBtn = e(".ot-bnr-save-handler"),
        this._settingsBtn = e("#onetrust-pc-btn-handler"),
        this._btnsCntr = e(".banner-actions-container"),
        Rt.BShowSaveBtn ? zt(this._saveBtn).html(Rt.BSaveBtnTxt) : (Gt.removeChild(this._saveBtn),
        this._saveBtn = null),
        Kt.insertFooterLogo(t(".ot-bnr-footer-logo a")),
        this._descriptCntr = e(".ot-cat-lst"),
        this.setBannerBtn(),
        window.addEventListener("resize", function() {
            o.setBannerBtn()
        }),
        this._fourBtns && zt(e("#onetrust-banner-sdk")).addClass("has-reject-all-button"),
        this.insertGrps(e));
        var P = document.createElement("div");
        zt(P).append(r),
        Ft.ignoreInjectingHtmlCss || (zt("#onetrust-consent-sdk").append(P.firstChild),
        n && this.setBannerOptionContent()),
        this.setBnrBtnGrpAlignment()
    }
    ,
    mr.prototype.setAriaModalForBanner = function(e) {
        Rt.ForceConsent && e.setAttribute("aria-modal", "true")
    }
    ,
    mr.prototype.setBnrBtnGrpAlignment = function() {
        var e = zt("#onetrust-group-container").el
          , t = zt("#onetrust-button-group-parent").el;
        (e.length && e[0].clientHeight) < (t.length && t[0].clientHeight) ? zt("#onetrust-banner-sdk").removeClass("vertical-align-content") : zt("#onetrust-banner-sdk").addClass("vertical-align-content");
        var o = document.querySelector("#onetrust-button-group-parent button:first-of-type")
          , n = document.querySelector("#onetrust-button-group-parent button:last-of-type");
        n && o && 1 < Math.abs(n.offsetTop - o.offsetTop) && zt("#onetrust-banner-sdk").addClass("ot-buttons-fw")
    }
    ,
    mr.prototype.slideInAnimation = function(e, t) {
        t === Ze ? "bottom" === Rt.BannerPosition ? (e.css("bottom: -99px;"),
        e.animate({
            bottom: "0px"
        }, 1e3),
        Mt.bnrAnimationInProg = !0,
        setTimeout(function() {
            e.css("bottom: 0px;"),
            Mt.bnrAnimationInProg = !1
        }, 1e3)) : (e.css("top: -99px; bottom: auto;"),
        Ft.pagePushedDown && !Cr.checkIsBrowserIE11OrBelow() ? Cr.BannerPushDownHandler() : (e.animate({
            top: "0"
        }, 1e3),
        Mt.bnrAnimationInProg = !0,
        setTimeout(function() {
            e.css("top: 0px; bottom: auto;"),
            Mt.bnrAnimationInProg = !1
        }, 1e3))) : t !== et && t !== nt || (e.css("bottom: -300px;"),
        e.animate({
            bottom: "1em"
        }, 2e3),
        Mt.bnrAnimationInProg = !0,
        setTimeout(function() {
            e.css("bottom: 1rem;"),
            Mt.bnrAnimationInProg = !1
        }, 2e3))
    }
    ,
    mr.prototype.setBannerBtn = function() {
        window.innerWidth <= 600 ? (Gt.insertElement(this._btnsCntr, this._settingsBtn, "afterbegin"),
        Gt.insertElement(this._btnsCntr, this._saveBtn, "afterbegin"),
        Gt.insertElement(this._btnsCntr, this._acceptBtn, "afterbegin"),
        Gt.insertElement(this._btnsCntr, this._rejectBtn, "afterbegin")) : this._fourBtns ? (this._descriptCntr.insertAdjacentElement("beforeend", this._settingsBtn),
        this._acceptBtn.insertAdjacentElement("beforebegin", this._rejectBtn),
        this._btnsCntr.insertAdjacentElement("beforebegin", this._saveBtn)) : (Gt.insertElement(this._btnsCntr, this._settingsBtn, "beforebegin"),
        Gt.insertElement(this._btnsCntr, this._saveBtn, this._settingsBtn ? "afterbegin" : "beforebegin"),
        Gt.insertElement(this._btnsCntr, this._rejectBtn, "beforeend"),
        Gt.insertElement(this._btnsCntr, this._acceptBtn, "beforeend"))
    }
    ,
    mr.prototype.setCmpBannerOptions = function(i, e) {
        var s = zt(i("#banner-options .banner-option")).el.cloneNode(!0);
        zt(i("#banner-options")).html("");
        var a = 1;
        e.forEach(function(e) {
            var t = s.cloneNode(!0)
              , o = Rt[e.titleKey]
              , n = Rt[e.descriptionKey];
            if (o || n) {
                t.querySelector(".banner-option-header :first-child").innerHTML = o;
                var r = t.querySelector(".banner-option-details");
                n ? (r.setAttribute("id", "option-details-" + a++),
                r.innerHTML = n) : r.parentElement.removeChild(r),
                zt(i("#banner-options")).el.appendChild(t)
            }
        })
    }
    ,
    mr.prototype.setFloatingRoundedIconBannerCmpOptions = function(r, e) {
        var i = zt(r("#banner-options button")).el.cloneNode(!0)
          , n = zt(r(".banner-option-details")).el.cloneNode(!0);
        zt(r("#banner-options")).html(""),
        e.forEach(function(e) {
            var t = i.cloneNode(!0)
              , o = Rt[e.titleKey]
              , n = Rt[e.descriptionKey];
            (o || n) && (t.setAttribute("id", e.identifier),
            t.querySelector(".banner-option-header :first-child").innerHTML = o,
            zt(r("#banner-options")).el.appendChild(t))
        }),
        e.forEach(function(e) {
            var t = Rt[e.descriptionKey];
            if (t) {
                var o = n.cloneNode(!0);
                o.innerHTML = t,
                o.classList.add(e.identifier),
                zt(r("#banner-options")).el.appendChild(o)
            }
        })
    }
    ,
    mr.prototype.setBannerOptionContent = function() {
        Ft.bannerName !== Ze && Ft.bannerName !== ot || setTimeout(function() {
            if (window.innerWidth < 769) {
                var e = zt("#banner-options").el[0];
                zt("#onetrust-group-container").el[0].appendChild(e)
            } else
                e = zt("#banner-options").el[0],
                Ft.bannerName === ot ? zt(".banner-content").el[0].appendChild(e) : zt("#onetrust-banner-sdk .ot-sdk-container").el[0].appendChild(e)
        })
    }
    ,
    mr.prototype.setAdditionalDesc = function(e) {
        var t = Rt.BannerAdditionalDescPlacement
          , o = document.createElement("span");
        o.classList.add("ot-b-addl-desc"),
        o.innerHTML = Rt.BannerAdditionalDescription;
        var n = e("#onetrust-policy-text");
        if (t === G.AfterTitle)
            n.insertAdjacentElement("beforeBegin", o);
        else if (t === G.AfterDescription)
            n.insertAdjacentElement("afterEnd", o);
        else if (t === G.AfterDPD) {
            var r = e(".ot-dpd-container .ot-dpd-desc");
            Rt.ChoicesBanner && (r = e("#onetrust-group-container")),
            r.insertAdjacentElement("beforeEnd", o)
        }
    }
    ,
    mr.prototype.insertGrps = function(e) {
        var p = e(".ot-cat-item").cloneNode(!0);
        Gt.removeChild(e(".ot-cat-item")),
        Rt.BCategoryStyle === se.Checkbox ? Gt.removeChild(p.querySelector(".ot-tgl")) : (Gt.removeChild(p.querySelector(".ot-chkbox")),
        zt(p).addClass("ot-cat-bdr"));
        var h = e(".ot-cat-lst ul");
        Rt.Groups.forEach(function(e) {
            var t = p.cloneNode(!0)
              , o = t.querySelector(".ot-tgl,.ot-chkbox")
              , n = e.GroupName
              , r = e.CustomGroupId
              , i = "ot-bnr-grp-id-" + r
              , s = "ot-bnr-hdr-id-" + r
              , a = -1 !== _t.indexOf(e.Type)
              , l = no.getGrpStatus(e).toLowerCase() === qe || a
              , c = Sn.isGroupActive(e) || a;
            zt(o.querySelector("label")).attr("for", i),
            zt(o.querySelector(".ot-label-txt")).html(e.GroupName);
            var d = o.querySelector("input");
            l && (Rt.BCategoryStyle === se.Toggle ? (Gt.removeChild(o),
            t.insertAdjacentElement("beforeend", zt("<div class='ot-always-active'>" + Rt.AlwaysActiveText + "</div>", "ce").el)) : zt(d).attr("disabled", !0)),
            d.classList.add("category-switch-handler"),
            Sn.setInputID(d, i, r, c, s);
            var u = t.querySelector("h4");
            zt(u).html(n),
            zt(u).attr("id", s),
            zt(h).append(t)
        })
    }
    ,
    mr.prototype.setBannerLogo = function(e, t) {
        if (Bt.fp.CookieV2BannerLogo && Rt.BnrLogo) {
            var o = t(Hn)
              , n = "afterend";
            Ft.bannerName === ot && (o = t("#onetrust-cookie-btn"),
            n = "beforeend"),
            zt(e).addClass("ot-bnr-w-logo"),
            zt(o).el.innerHTML = "",
            o.insertAdjacentHTML(n, "<img class='ot-bnr-logo' src='" + Rt.BnrLogo + "'\n            title='" + Rt.BnrLogoAria + "'\n            alt='" + Rt.BnrLogoAria + "'/>")
        }
    }
    ,
    mr);
    function mr() {
        this.El = "#onetrust-banner-sdk",
        this._saveBtn = null,
        this._settingsBtn = null,
        this._acceptBtn = null,
        this._rejectBtn = null,
        this._descriptCntr = null,
        this._btnsCntr = null,
        this._fourBtns = !1
    }
    var br, Pr = (Sr.prototype.setHeaderConfig = function() {
        br.setHeader(),
        br.setSearchInput(),
        br.setHeaderUIConsent();
        var e = br.getGroupsForFilter();
        cr.setFilterListByGroup(e, !1)
    }
    ,
    Sr.prototype.filterVendorByString = function(e) {
        br.searchQuery = e,
        br.filterVendorByGroupOrQuery()
    }
    ,
    Sr.prototype.filterVendorByGroup = function(e) {
        br.filterGroups = e,
        br.filterVendorByGroupOrQuery()
    }
    ,
    Sr.prototype.showVSList = function() {
        br.removeListeners(),
        br.showEmptyResults(!1, ""),
        br.clearUIElementsInMain(),
        br.addVSList(Mt.getVendorsInDomain())
    }
    ,
    Sr.prototype.showEmptyResults = function(e, t) {
        if (e)
            this.setNoResultsContent(t);
        else {
            zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content).removeClass("no-results");
            var o = zt("#onetrust-pc-sdk #no-results");
            o.length && o.remove()
        }
    }
    ,
    Sr.prototype.setNoResultsContent = function(e) {
        var t = zt("#onetrust-pc-sdk #no-results").el[0];
        if (!t) {
            var o = document.createElement("div")
              , n = document.createElement("p")
              , r = document.createTextNode(" did not match any vendors.")
              , i = document.createElement("span");
            return o.id = "no-results",
            i.id = "user-text",
            i.innerText = e,
            n.appendChild(i),
            n.appendChild(r),
            o.appendChild(n),
            zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content).addClass("no-results"),
            zt("#vendor-search-handler").el[0].setAttribute("aria-describedby", o.id),
            zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content).append(o)
        }
        t.querySelector("span").innerText = e
    }
    ,
    Sr.prototype.getGroupsFilter = function() {
        for (var e = [], t = 0, o = zt("#onetrust-pc-sdk .category-filter-handler").el; t < o.length; t++) {
            var n = o[t]
              , r = n.getAttribute("data-purposeid");
            n.checked && e.push(r)
        }
        return e
    }
    ,
    Sr.prototype.cancelFilter = function() {
        for (var e = 0, t = zt("#onetrust-pc-sdk .category-filter-handler").el; e < t.length; e++) {
            var o = t[e]
              , n = o.getAttribute("data-optanongroupid")
              , r = 0 <= Mt.filterByCategories.indexOf(n);
            Gt.setCheckedAttribute(null, o, r)
        }
        var i = br.getGroupsFilter();
        br.filterVendorByGroup(i)
    }
    ,
    Sr.prototype.clearFilter = function() {
        br.searchQuery = "",
        br.filterGroups = []
    }
    ,
    Sr.prototype.toggleVendors = function(r) {
        Mt.getVendorsInDomain().forEach(function(e, t) {
            if (!no.isAlwaysActiveGroup(e.groupRef)) {
                var o = document.getElementById("ot-vendor-id-" + t)
                  , n = document.getElementById("ot-vs-lst-id-" + t);
                xn.toggleVendorService(e.groupRef.CustomGroupId, t, r, o),
                xn.toggleVendorService(e.groupRef.CustomGroupId, t, r, n)
            }
        })
    }
    ,
    Sr.prototype.hideVendorList = function() {
        br.removeListeners(),
        br.clearUIElementsInMain()
    }
    ,
    Sr.prototype.addListeners = function() {
        zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content + " .ot-vs-list .category-switch-handler").on("click", br.toggleVendorHandler),
        zt("#onetrust-pc-sdk").on("click", ".ot-vs-list", Ar.onCategoryItemToggle.bind(this))
    }
    ,
    Sr.prototype.removeListeners = function() {
        document.querySelectorAll("#onetrust-pc-sdk .ot-vs-list .category-switch-handler").forEach(function(e) {
            return e.removeEventListener("click", Ar.toggleGroupORVendorHandler)
        });
        var e = document.querySelector("#onetrust-pc-sdk .ot-vs-list");
        null != e && e.removeEventListener("click", Ar.onCategoryItemToggle)
    }
    ,
    Sr.prototype.toggleVendorHandler = function(e) {
        Ar.toggleVendorFromListHandler(e),
        br.checkAllowAllCheckedValue()
    }
    ,
    Sr.prototype.filterVendorByGroupOrQuery = function() {
        var o = new Map;
        Mt.getVendorsInDomain().forEach(function(e, t) {
            br.checkVendorConditions(e) && o.set(t, e)
        }),
        br.showEmptyResults(o.size <= 0, br.searchQuery),
        br.removeListeners(),
        br.clearUIElementsInMain(),
        br.addVSList(o)
    }
    ,
    Sr.prototype.checkVendorConditions = function(e) {
        return !("" !== br.searchQuery && e.ServiceName.toLowerCase().indexOf(br.searchQuery.toLowerCase()) < 0 || 0 < br.filterGroups.length && br.filterGroups.indexOf(e.groupRef.CustomGroupId) < 0)
    }
    ,
    Sr.prototype.addVSList = function(e) {
        var t = zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content + " .ot-sdk-column")
          , o = xn.getVendorListEle(e);
        t.append(o),
        br.addListeners()
    }
    ,
    Sr.prototype.getGroupsForFilter = function() {
        var t = new Map;
        return Mt.getVendorsInDomain().forEach(function(e) {
            t.has(e.groupRef.CustomGroupId) || t.set(e.groupRef.CustomGroupId, e.groupRef)
        }),
        Array.from(t.values())
    }
    ,
    Sr.prototype.clearUIElementsInMain = function() {
        zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content + " ul" + Xt.P_Host_Cntr).html(""),
        zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content + " ul" + Xt.P_Host_Cntr).hide(),
        zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content + " ul" + Xt.P_Vendor_Container).html(""),
        zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content + " ul" + Xt.P_Vendor_Container).hide();
        var e = zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content + " .ot-vs-list");
        e && e.length && e.remove()
    }
    ,
    Sr.prototype.setHeader = function() {
        var e = Rt.VendorServiceConfig.PCVSListTitle
          , t = document.querySelector("#onetrust-pc-sdk " + Xt.P_Vendor_Title);
        t && (t.innerText = e)
    }
    ,
    Sr.prototype.setSearchInput = function() {
        var e = Rt.PCenterCookieListSearch
          , t = Rt.PCenterCookieSearchAriaLabel
          , o = zt("#onetrust-pc-sdk " + Xt.P_Vendor_Search_Input);
        o.el[0].placeholder = e,
        o.attr("aria-label", t)
    }
    ,
    Sr.prototype.setHeaderUIConsent = function() {
        var e;
        if (zt("#onetrust-pc-sdk " + Xt.P_Select_Cntr).addClass("ot-vnd-list-cnt"),
        zt("#onetrust-pc-sdk " + Xt.P_Select_Cntr + " .ot-sel-all").addClass("ot-vs-selc-all"),
        Rt.PCCategoryStyle === se.Toggle && (zt("#onetrust-pc-sdk " + Xt.P_Select_Cntr + " .ot-sel-all").addClass("ot-toggle-conf"),
        Rt.PCAccordionStyle === W.Caret && zt("#onetrust-pc-sdk " + Xt.P_Select_Cntr + " .ot-sel-all").addClass("ot-caret-conf")),
        zt("#onetrust-pc-sdk " + Xt.P_Leg_Select_All).hide(),
        zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Host_El).hide(),
        zt("#onetrust-pc-sdk " + Xt.P_Host_Cntr).hide(),
        zt(Xt.P_Vendor_List + " #select-all-text-container").hide(),
        zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Vendor_Leg_El).hide(),
        zt("#onetrust-pc-sdk " + Xt.P_Vendor_Container).show(),
        zt("#onetrust-pc-sdk " + Xt.P_Select_Cntr).show(),
        zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Vendor_Consent_El).show("inline-block"),
        zt("#onetrust-pc-sdk " + Xt.P_Vendor_List).removeClass(Xt.P_Host_UI),
        zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content).removeClass(Xt.P_Host_Cnt),
        !document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox .sel-all-hdr")) {
            var t = document.createElement("h4");
            t.className = "sel-all-hdr",
            t.textContent = (null === (e = Rt.VendorServiceConfig) || void 0 === e ? void 0 : e.PCVSAllowAllText) || "PCVSAllowAllText";
            var o = document.querySelector("#onetrust-pc-sdk .ot-sel-all-chkbox")
              , n = Rt.PCCategoryStyle === se.Checkbox ? "beforeend" : "afterbegin";
            o.insertAdjacentElement(n, t)
        }
        br.checkAllowAllCheckedValue()
    }
    ,
    Sr.prototype.checkAllowAllCheckedValue = function() {
        var t = !0;
        Mt.vsConsent.forEach(function(e) {
            e || (t = !1)
        });
        var e = document.getElementById("#select-all-vendor-groups-handler");
        Gt.setCheckedAttribute(null, e, t)
    }
    ,
    Sr);
    function Sr() {
        this.searchQuery = "",
        this.filterGroups = []
    }
    var Ar, Tr = (Ir.prototype.initCookieSettingHandlers = function() {
        zt(document).on("click", ".optanon-show-settings, .optanon-toggle-display, .ot-sdk-show-settings, .ot-pc-handler", this.cookiesSettingsBoundListener)
    }
    ,
    Ir.prototype.initFlgtCkStgBtnEventHandlers = function() {
        zt(".ot-floating-button__open").on("click", Ar.floatingCookieSettingOpenBtnClicked),
        zt(".ot-floating-button__close").on("click", Ar.floatingCookieSettingCloseBtnClicked)
    }
    ,
    Ir.prototype.floatingCookieSettingOpenBtnClicked = function(e) {
        zt(Ar.fltgBtnSltr).addClass("ot-pc-open"),
        Rt.cookiePersistentLogo.includes("ot_guard_logo.svg") && zt(Ar.fltgBtnFSltr).attr("aria-hidden", "true"),
        zt(Ar.fltgBtnBSltr).attr("aria-hidden", ""),
        zt(Ar.fltgBtnFrontBtn).el[0].setAttribute("aria-label", ""),
        zt(Ar.fltgBtnFrontBtn).el[0].setAttribute("aria-hidden", !0),
        zt(Ar.fltgBtnBackBtn).el[0].setAttribute("aria-label", Rt.AriaClosePreferences),
        zt(Ar.fltgBtnBackBtn).el[0].setAttribute("aria-hidden", !1),
        Bo.triggerGoogleAnalyticsEvent(Oo, Ko),
        Ar.showCookieSettingsHandler(e)
    }
    ,
    Ir.prototype.floatingCookieSettingCloseBtnClicked = function(e) {
        zt(Ar.fltgBtnFrontBtn).el[0].setAttribute("aria-label", Rt.AriaOpenPreferences),
        zt(Ar.fltgBtnFrontBtn).el[0].setAttribute("aria-hidden", !1),
        zt(Ar.fltgBtnBackBtn).el[0].setAttribute("aria-label", ""),
        zt(Ar.fltgBtnBackBtn).el[0].setAttribute("aria-hidden", !0),
        e && (Bo.triggerGoogleAnalyticsEvent(Oo, Wo),
        Ar.hideCookieSettingsHandler(e))
    }
    ,
    Ir.prototype.initialiseLegIntBtnHandlers = function() {
        zt(document).on("click", ".ot-obj-leg-btn-handler", Ar.onLegIntButtonClick),
        zt(document).on("click", ".ot-remove-objection-handler", Ar.onLegIntButtonClick)
    }
    ,
    Ir.prototype.initialiseAddtlVenHandler = function() {
        zt("#onetrust-pc-sdk #ot-addtl-venlst").on("click", Ar.selectVendorsGroupHandler),
        zt("#onetrust-pc-sdk #ot-selall-adtlven-handler").on("click", Ar.selAllAdtlVenHandler)
    }
    ,
    Ir.prototype.initializeGenVenHandlers = function() {
        zt("#onetrust-pc-sdk #ot-gn-venlst .ot-gnven-chkbox-handler").on("click", Ar.genVendorToggled),
        zt("#onetrust-pc-sdk #ot-gn-venlst .ot-gv-venbox").on("click", Ar.genVendorDetails),
        zt("#onetrust-pc-sdk #ot-selall-gnven-handler").on("click", Ar.selectAllGenVenHandler)
    }
    ,
    Ir.prototype.initialiseConsentNoticeHandlers = function() {
        var e = this
          , t = 37
          , o = 39;
        if (Ft.pcName === dt && Ar.categoryMenuSwitchHandler(),
        zt("#onetrust-pc-sdk .onetrust-close-btn-handler").on("click", Ar.bannerCloseButtonHandler),
        zt("#onetrust-pc-sdk #accept-recommended-btn-handler").on("click", Lr.allowAllEventHandler.bind(this, !0)),
        zt("#onetrust-pc-sdk .ot-pc-refuse-all-handler").on("click", Lr.rejectAllEventHandler.bind(this, !0)),
        zt("#onetrust-pc-sdk #close-pc-btn-handler").on("click", Ar.hideCookieSettingsHandler),
        zt(document).on("keydown", function(e) {
            var t = document.getElementById(Ar.pcSDKSelector)
              , o = "none" !== window.getComputedStyle(t).display;
            if (27 === e.keyCode && t && o) {
                var n = zt("#onetrust-pc-sdk " + Xt.P_Fltr_Modal).el[0];
                "block" === n.style.display || "0px" < n.style.width ? (Ar.closeFilter(),
                zt("#onetrust-pc-sdk #filter-btn-handler").focus()) : Rt.NoBanner && !Rt.ShowPreferenceCenterCloseButton || Ar.hideCookieSettingsHandler(),
                Ar.confirmPC()
            }
            (o && 32 === e.keyCode || "Space" === e.code || 13 === e.keyCode || "Enter" === e.code) && Kt.findUserType(e)
        }),
        zt("#onetrust-pc-sdk #vendor-close-pc-btn-handler").on("click", Ar.hideCookieSettingsHandler),
        zt("#onetrust-pc-sdk .category-switch-handler").on("click", Ar.toggleGroupORVendorHandler),
        zt("#onetrust-pc-sdk .cookie-subgroup-handler").on("click", Ar.toggleSubCategory),
        zt("#onetrust-pc-sdk .category-menu-switch-handler").on("keydown", function(e) {
            Ft.pcName === dt && (e.keyCode !== t && e.keyCode !== o || (Rt.PCTemplateUpgrade ? Ar.changeSelectedTabV2(e) : Ar.changeSelectedTab(e)))
        }),
        zt("#onetrust-pc-sdk").on("click", Xt.P_Category_Item + " > input:first-child," + Xt.P_Category_Item + " > button:first-child", Ar.onCategoryItemToggle.bind(this)),
        (Rt.showCookieList || Mt.showGeneralVendors) && (zt("#onetrust-pc-sdk .category-host-list-handler").on("click", function(e) {
            Mt.showGeneralVendors && Rt.showCookieList ? Mt.cookieListType = X.HostAndGenVen : Mt.showGeneralVendors ? Mt.cookieListType = X.GenVen : Mt.cookieListType = X.Host,
            Ar.pcLinkSource = e.target,
            Ar.loadCookieList(e.target)
        }),
        Kt.isOptOutEnabled() ? (zt("#onetrust-pc-sdk #select-all-hosts-groups-handler").on("click", Ar.selectAllHostsGroupsHandler),
        zt("#onetrust-pc-sdk " + Xt.P_Host_Cntr).on("click", Ar.selectHostsGroupHandler)) : zt("#onetrust-pc-sdk " + Xt.P_Host_Cntr).on("click", Ar.toggleAccordionStatus)),
        Rt.IsIabEnabled && (zt("#onetrust-pc-sdk .category-vendors-list-handler").on("click", function(e) {
            Ar.pcLinkSource = e.target,
            Ar.showVendorsList(e.target)
        }),
        zt("#onetrust-pc-sdk " + Xt.P_Vendor_Container).on("click", Ar.selectVendorsGroupHandler),
        Rt.UseGoogleVendors || Ar.bindSelAllHandlers(),
        Ar.initialiseLegIntBtnHandlers()),
        Rt.IsIabEnabled || Rt.showCookieList || Mt.showGeneralVendors || Mt.showVendorService) {
            zt(document).on("click", ".back-btn-handler", Ar.backBtnHandler),
            zt("#onetrust-pc-sdk #vendor-search-handler").on("keyup", function(e) {
                var t = e.target.value.trim();
                Mt.showVendorService ? br.filterVendorByString(t) : Ar.isCookieList ? Vn.searchHostList(t) : (Vn.loadVendorList(t, []),
                Rt.UseGoogleVendors && Vn.searchVendors(Vn.googleSearchSelectors, Mt.addtlVendorsList, oe.GoogleVendor, t),
                Mt.showGeneralVendors && Rt.GeneralVendors.length && Vn.searchVendors(Vn.genVendorSearchSelectors, Rt.GeneralVendors, oe.GeneralVendor, t)),
                Vn.playSearchStatus(Ar.isCookieList)
            }),
            zt("#onetrust-pc-sdk #filter-btn-handler").on("click", Ar.toggleVendorFiltersHandler),
            zt("#onetrust-pc-sdk #filter-apply-handler").on("click", Ar.applyFilterHandler),
            zt("#onetrust-pc-sdk " + Xt.P_Fltr_Modal).on("click", Ar.tglFltrOptionHandler),
            !Bt.isV2Template && Ft.pcName !== ct || zt("#onetrust-pc-sdk #filter-cancel-handler").on("click", Ar.cancelFilterHandler),
            !Bt.isV2Template && Ft.pcName === ct || zt("#onetrust-pc-sdk #clear-filters-handler").on("click", Ar.clearFiltersHandler),
            Bt.isV2Template ? zt("#onetrust-pc-sdk #filter-cancel-handler").on("keydown", function(e) {
                9 !== e.keyCode && "tab" !== e.code || e.shiftKey || (e.preventDefault(),
                zt("#onetrust-pc-sdk #clear-filters-handler").el[0].focus())
            }) : zt("#onetrust-pc-sdk #filter-apply-handler").on("keydown", function(e) {
                9 !== e.keyCode && "tab" !== e.code || e.shiftKey || (e.preventDefault(),
                zt("#onetrust-pc-sdk .category-filter-handler").el[0].focus())
            });
            var n = zt("#onetrust-pc-sdk .category-filter-handler").el;
            zt(n[0]).on("keydown", function(e) {
                9 !== e.keyCode && "tab" !== e.code || !e.shiftKey || (e.preventDefault(),
                zt("#onetrust-pc-sdk #filter-apply-handler").el[0].focus())
            })
        }
        Rt.NoBanner && (Rt.OnClickCloseBanner && document.body.addEventListener("click", Lr.bodyClickEvent),
        Rt.ScrollCloseBanner && window.addEventListener("scroll", Lr.scrollCloseBanner)),
        zt("#onetrust-pc-sdk .ot-gv-list-handler").on("click", function(t) {
            return d(e, void 0, void 0, function() {
                return g(this, function(e) {
                    return Mt.cookieListType = X.GenVen,
                    Ar.loadCookieList(t.target),
                    [2]
                })
            })
        }),
        Mt.showVendorService && (Ar.bindSelAllHandlers(),
        zt("#onetrust-pc-sdk .onetrust-vendors-list-handler").on("click", function() {
            return Ar.showVendorsList(null, !0)
        }))
    }
    ,
    Ir.prototype.bindSelAllHandlers = function() {
        zt("#onetrust-pc-sdk #select-all-vendor-leg-handler").on("click", Ar.selectAllVendorsLegIntHandler),
        zt("#onetrust-pc-sdk #select-all-vendor-groups-handler").on("click", Ar.SelectAllVendorConsentHandler)
    }
    ,
    Ir.prototype.hideCookieSettingsHandler = function(e) {
        return void 0 === e && (e = window.event),
        Bo.triggerGoogleAnalyticsEvent(Oo, Ro),
        zn.hideConsentNoticeV2(),
        Ar.getResizeElement().removeEventListener("resize", Ar.setCenterLayoutFooterHeight),
        window.removeEventListener("resize", Ar.setCenterLayoutFooterHeight),
        !Bt.isV2Template && Ft.pcName !== ct || Ar.closeFilter(!1),
        Ft.pcName === at && zt("#onetrust-pc-sdk " + Xt.P_Content).removeClass("ot-hide"),
        Lr.hideVendorsList(),
        gn.csBtnGroup && (zt(Ar.fltgBtnSltr).removeClass("ot-pc-open"),
        Ar.floatingCookieSettingCloseBtnClicked(null)),
        Ar.confirmPC(e),
        Lr.resetConsent(),
        !1
    }
    ,
    Ir.prototype.selectAllHostsGroupsHandler = function(e) {
        var t = e.target.checked
          , o = zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Host_El).el[0]
          , n = o.classList.contains("line-through")
          , r = zt("#onetrust-pc-sdk .host-checkbox-handler").el;
        Gt.setCheckedAttribute("#select-all-hosts-groups-handler", null, t);
        for (var i = 0; i < r.length; i++)
            r[i].getAttribute("disabled") || Gt.setCheckedAttribute(null, r[i], t);
        Mt.optanonHostList.forEach(function(e) {
            So.updateHostStatus(e, t)
        }),
        r.forEach(function(e) {
            mo.updateGenVendorStatus(e.getAttribute("hostId"), t)
        }),
        n && o.classList.remove("line-through")
    }
    ,
    Ir.prototype.selectHostsGroupHandler = function(e) {
        Ar.toggleAccordionStatus(e);
        var t = e.target.getAttribute("hostId")
          , o = e.target.getAttribute("ckType")
          , n = e.target.checked;
        if (null !== t) {
            if (o === J.GenVendor) {
                var r = Rt.GeneralVendors.find(function(e) {
                    return e.VendorCustomId === t
                }).Name;
                Bo.triggerGoogleAnalyticsEvent(Oo, n ? Xo : Qo, r + ": VEN_" + t),
                mo.updateGenVendorStatus(t, n)
            } else {
                var i = Gt.findIndex(Mt.optanonHostList, function(e) {
                    return e.HostId === t
                })
                  , s = Mt.optanonHostList[i];
                Ar.toggleHostStatus(s, n)
            }
            Gt.setCheckedAttribute(null, e.target, n)
        }
    }
    ,
    Ir.prototype.onCategoryItemToggle = function(e) {
        e.stopPropagation();
        var t = e.target;
        "BUTTON" !== t.tagName && "INPUT" !== t.tagName || (Ft.pcName === at && this.setPcListContainerHeight(),
        Ar.toggleAccordionStatus(e))
    }
    ,
    Ir.prototype.toggleAccordionStatus = function(e) {
        var t = e.target;
        if (t && t.getAttribute("aria-expanded")) {
            var o = "true" === t.getAttribute("aria-expanded") ? "false" : "true";
            t.setAttribute("aria-expanded", o)
        }
    }
    ,
    Ir.prototype.toggleHostStatus = function(e, t) {
        Bo.triggerGoogleAnalyticsEvent(Oo, t ? $o : Zo, e.HostName + ": H_" + e.HostId),
        So.updateHostStatus(e, t)
    }
    ,
    Ir.prototype.toggleBannerOptions = function(e) {
        zt(".banner-option-input").each(function(e) {
            zt(e).el.setAttribute("aria-expanded", !1)
        }),
        Ar.toggleAccordionStatus(e)
    }
    ,
    Ir.prototype.bannerCloseButtonHandler = function(e) {
        if (zt(document).off("keydown", Ar.shiftBannerFocus),
        e && e.target && e.target.className) {
            var t = e.target.className;
            if (-1 < t.indexOf("save-preference-btn-handler"))
                Mt.bannerCloseSource = f.ConfirmChoiceButton,
                Bo.triggerGoogleAnalyticsEvent(Oo, jo);
            else if (-1 < t.indexOf("banner-close-button")) {
                Mt.bannerCloseSource = f.BannerCloseButton;
                var o = Do;
                -1 < t.indexOf("ot-close-link") && (o = Ho,
                Mt.bannerCloseSource = f.ContinueWithoutAcceptingButton),
                Bo.triggerGoogleAnalyticsEvent(Oo, o)
            } else
                -1 < t.indexOf("ot-bnr-save-handler") && (Mt.bannerCloseSource = f.BannerSaveSettings,
                Bo.triggerGoogleAnalyticsEvent(Oo, Fo))
        }
        return Lr.hideVendorsList(),
        Lr.bannerCloseButtonHandler()
    }
    ,
    Ir.prototype.onLegIntButtonClick = function(e) {
        if (e) {
            var t = e.currentTarget
              , o = "true" === t.parentElement.getAttribute("is-vendor")
              , n = t.parentElement.getAttribute("data-group-id")
              , r = !t.classList.contains("ot-leg-int-enabled");
            if (o)
                Ar.onVendorToggle(n, D.LI);
            else {
                var i = no.getGroupById(n);
                i.Parent ? Ar.updateSubGroupToggles(i, r, !0) : Ar.updateGroupToggles(i, r, !0)
            }
            Sn.updateLegIntBtnElement(t.parentElement, r)
        }
    }
    ,
    Ir.prototype.updateGroupToggles = function(t, o, e) {
        So.toggleGroupHosts(t, o),
        Mt.genVenOptOutEnabled && So.toggleGroupGenVendors(t, o),
        t.IsLegIntToggle = e,
        Sn.toggleGrpStatus(t, o),
        t.SubGroups && t.SubGroups.length && (Ft.bannerName === rt && Bt.moduleInitializer.IsSuppressPC && t.SubGroups.length ? t.SubGroups.forEach(function(e) {
            e.IsLegIntToggle = t.IsLegIntToggle,
            Sn.toggleGrpStatus(e, o),
            e.IsLegIntToggle = !1,
            So.toggleGroupHosts(e, o),
            Mt.genVenOptOutEnabled && So.toggleGroupGenVendors(e, o),
            xn.setVendorStateByGroup(e, o)
        }) : Sn.toogleAllSubGrpElements(t, o),
        t.SubGroups.forEach(function(e) {
            return xn.setVendorStateByGroup(e, o)
        })),
        xn.setVendorStateByGroup(t, o),
        this.allowAllVisible(Sn.setAllowAllButton()),
        t.IsLegIntToggle = !1
    }
    ,
    Ir.prototype.updateSubGroupToggles = function(e, t, o) {
        So.toggleGroupHosts(e, t),
        Mt.genVenOptOutEnabled && So.toggleGroupGenVendors(e, t);
        var n = no.getGroupById(e.Parent);
        e.IsLegIntToggle = o,
        n.IsLegIntToggle = e.IsLegIntToggle;
        var r = Sn.isGroupActive(n);
        t ? (Sn.toggleGrpStatus(e, !0),
        Sn.isAllSubgroupsEnabled(n) && !r && (Sn.toggleGrpStatus(n, !0),
        So.toggleGroupHosts(n, t),
        Mt.genVenOptOutEnabled && So.toggleGroupGenVendors(n, t),
        Sn.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !0))) : (Sn.toggleGrpStatus(e, !1),
        Sn.isAllSubgroupsDisabled(n) && r ? (Sn.toggleGrpStatus(n, !1),
        So.toggleGroupHosts(n, t),
        Mt.genVenOptOutEnabled && So.toggleGroupGenVendors(n, t),
        Sn.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), t)) : (Sn.toggleGrpStatus(n, !1),
        So.toggleGroupHosts(n, !1),
        Mt.genVenOptOutEnabled && So.toggleGroupGenVendors(n, t),
        Sn.toggleGroupHtmlElement(e, e.Parent + (e.IsLegIntToggle ? "-leg-out" : ""), !1))),
        this.allowAllVisible(Sn.setAllowAllButton()),
        e.IsLegIntToggle = !1,
        n.IsLegIntToggle = e.IsLegIntToggle
    }
    ,
    Ir.prototype.hideCategoryContainer = function(e) {
        void 0 === e && (e = !1);
        var t = Ft.pcName;
        this.isCookieList = e,
        Rt.PCTemplateUpgrade ? zt("#onetrust-pc-sdk " + Xt.P_Content).addClass("ot-hide") : zt("#onetrust-pc-sdk .ot-main-content").hide(),
        zt("#onetrust-pc-sdk " + Xt.P_Vendor_List).removeClass("ot-hide"),
        t !== ct && t !== at && zt("#onetrust-pc-sdk #close-pc-btn-handler.main").hide(),
        t === at && wt(zt("#onetrust-pc-sdk").el[0], 'height: "";', !0),
        Mt.showVendorService ? br.setHeaderConfig() : (e ? Ar.setCookieListTemplate() : Ar.setVendorListTemplate(),
        cr.setFilterList(e))
    }
    ,
    Ir.prototype.setCookieListTemplate = function() {
        var e = Bt.isV2Template;
        zt(Xt.P_Vendor_List + " #select-all-text-container").show("inline-block"),
        zt("#onetrust-pc-sdk " + Xt.P_Host_Cntr).show(),
        Kt.isOptOutEnabled() ? zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Host_El).show("inline-block") : zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Host_El).hide(),
        zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Vendor_Leg_El).hide(),
        zt("#onetrust-pc-sdk " + Xt.P_Leg_Header).hide(),
        e || zt("#onetrust-pc-sdk " + Xt.P_Leg_Select_All).hide(),
        zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Vendor_Consent_El).hide(),
        zt("#onetrust-pc-sdk  " + Xt.P_Vendor_Container).hide(),
        (Rt.UseGoogleVendors || Mt.showGeneralVendors) && zt("#onetrust-pc-sdk .ot-acc-cntr").hide(),
        zt("#onetrust-pc-sdk " + Xt.P_Vendor_List).addClass(Xt.P_Host_UI),
        zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content).addClass(Xt.P_Host_Cnt)
    }
    ,
    Ir.prototype.setVendorListTemplate = function() {
        zt("#onetrust-pc-sdk " + Xt.P_Vendor_Container).show(),
        zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Vendor_Consent_El).show("inline-block"),
        Rt.UseGoogleVendors && zt("#onetrust-pc-sdk .ot-acc-cntr").show(),
        Ft.legIntSettings.PAllowLI && "IAB2" === Ft.iabType ? (zt("#onetrust-pc-sdk " + Xt.P_Select_Cntr).show(Bt.isV2Template ? void 0 : "inline-block"),
        zt("#onetrust-pc-sdk " + Xt.P_Leg_Select_All).show("inline-block"),
        zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Vendor_Leg_El).show("inline-block"),
        zt(Xt.P_Vendor_List + " #select-all-text-container").hide(),
        Ft.legIntSettings.PShowLegIntBtn ? (zt("#onetrust-pc-sdk " + Xt.P_Leg_Header).hide(),
        zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Vendor_Leg_El).hide()) : zt("#onetrust-pc-sdk " + Xt.P_Leg_Header).show()) : (zt("#onetrust-pc-sdk " + Xt.P_Select_Cntr).show(),
        zt(Xt.P_Vendor_List + " #select-all-text-container").show("inline-block"),
        zt("#onetrust-pc-sdk " + Xt.P_Leg_Select_All).hide(),
        zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Vendor_Leg_El).hide()),
        zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Host_El).hide(),
        zt("#onetrust-pc-sdk " + Xt.P_Host_Cntr).hide(),
        zt("#onetrust-pc-sdk " + Xt.P_Vendor_List).removeClass(Xt.P_Host_UI),
        zt("#onetrust-pc-sdk " + Xt.P_Vendor_Content).removeClass(Xt.P_Host_Cnt)
    }
    ,
    Ir.prototype.showAllVendors = function(t) {
        return d(this, void 0, void 0, function() {
            return g(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, Ar.fetchAndSetupPC()];
                case 1:
                    return e.sent(),
                    Ar.showVendorsList(null, !0),
                    Mt.isPCVisible ? [3, 3] : [4, Ar.showCookieSettingsHandler(t)];
                case 2:
                    e.sent(),
                    e.label = 3;
                case 3:
                    return [2]
                }
            })
        })
    }
    ,
    Ir.prototype.fetchAndSetupPC = function() {
        return d(this, void 0, void 0, function() {
            var t, o;
            return g(this, function(e) {
                switch (e.label) {
                case 0:
                    return Bt.moduleInitializer.IsSuppressPC && 0 === zt("#onetrust-pc-sdk").length ? [4, un.getPcContent()] : [3, 2];
                case 1:
                    t = e.sent(),
                    gn.preferenceCenterGroup = {
                        name: t.name,
                        html: atob(t.html),
                        css: t.css
                    },
                    Bt.isV2Template = Rt.PCTemplateUpgrade && /otPcPanel|otPcCenter|otPcTab/.test(t.name),
                    (o = document.getElementById("onetrust-style")).innerHTML += gn.preferenceCenterGroup.css,
                    o.innerHTML += pr.addCustomPreferenceCenterCSS(),
                    Nn.insertPcHtml(),
                    Ar.initialiseConsentNoticeHandlers(),
                    Rt.IsIabEnabled && Vn.InitializeVendorList(),
                    e.label = 2;
                case 2:
                    return [2]
                }
            })
        })
    }
    ,
    Ir.prototype.setVendorContent = function() {
        zt("#onetrust-pc-sdk #filter-count").text(Mt.filterByIABCategories.length.toString()),
        Vn.loadVendorList("", Mt.filterByIABCategories),
        Rt.UseGoogleVendors && (Mt.vendorDomInit ? Vn.resetAddtlVendors() : (Vn.initGoogleVendors(),
        zt("#onetrust-pc-sdk").on("click", ".ot-acc-cntr > button", Ar.toggleAccordionStatus.bind(this)))),
        Mt.vendorDomInit || (Mt.vendorDomInit = !0,
        Ar.initialiseLegIntBtnHandlers(),
        Rt.UseGoogleVendors && (Ar.initialiseAddtlVenHandler(),
        Ar.bindSelAllHandlers())),
        Mt.showGeneralVendors && !Mt.genVendorDomInit && (Mt.genVendorDomInit = !0,
        Vn.initGenVendors(),
        Ar.initializeGenVenHandlers(),
        Rt.UseGoogleVendors || (Ar.bindSelAllHandlers(),
        zt("#onetrust-pc-sdk").on("click", ".ot-acc-cntr > button", Ar.toggleAccordionStatus.bind(this))))
    }
    ,
    Ir.prototype.showVendorsList = function(e, t) {
        if (void 0 === t && (t = !1),
        Ar.hideCategoryContainer(!1),
        Mt.showVendorService)
            br.showVSList();
        else {
            if (!t) {
                var o = e.getAttribute("data-parent-id");
                if (o) {
                    var n = no.getGroupById(o);
                    if (n) {
                        var r = C(n.SubGroups, [n]).reduce(function(e, t) {
                            return -1 < Tt.indexOf(t.Type) && e.push(t.CustomGroupId),
                            e
                        }, []);
                        Mt.filterByIABCategories = C(Mt.filterByIABCategories, r)
                    }
                }
            }
            Ar.setVendorContent(),
            In.updateFilterSelection(!1)
        }
        return Mt.pcLayer = V.VendorList,
        e && mn.setPCFocus(mn.getPCElements()),
        this.setSearchInputFocus(),
        !1
    }
    ,
    Ir.prototype.loadCookieList = function(e) {
        Mt.filterByCategories = [],
        Ar.hideCategoryContainer(!0);
        var t = e && e.getAttribute("data-parent-id");
        if (t) {
            var o = no.getGroupById(t);
            Mt.filterByCategories.push(t),
            o.SubGroups.length && o.SubGroups.forEach(function(e) {
                if (-1 === Tt.indexOf(e.Type)) {
                    var t = e.CustomGroupId;
                    Mt.filterByCategories.indexOf(t) < 0 && Mt.filterByCategories.push(t)
                }
            })
        }
        return Vn.loadHostList("", Mt.filterByCategories),
        zt("#onetrust-pc-sdk #filter-count").text(Mt.filterByCategories.length.toString()),
        In.updateFilterSelection(!0),
        Mt.pcLayer = V.CookieList,
        mn.setPCFocus(mn.getPCElements()),
        this.setSearchInputFocus(),
        !1
    }
    ,
    Ir.prototype.selectAllVendorsLegIntHandler = function(e) {
        var t = zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Vendor_Leg_El).el[0]
          , o = t.classList.contains("line-through")
          , n = zt(Xt.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-leg-checkbox-handler').el
          , r = e.target.checked
          , i = {};
        Mt.vendors.selectedLegIntVendors.map(function(e, t) {
            i[e.split(":")[0]] = t
        });
        for (var s = 0; s < n.length; s++) {
            Gt.setCheckedAttribute(null, n[s], r),
            Rt.PCShowConsentLabels && (n[s].parentElement.querySelector(".ot-label-status").innerHTML = r ? Rt.PCActiveText : Rt.PCInactiveText);
            var a = n[s].getAttribute("leg-vendorid")
              , l = i[a];
            void 0 === l && (l = a),
            Mt.vendors.selectedLegIntVendors[l] = a + ":" + r
        }
        o && t.classList.remove("line-through"),
        Gt.setCheckedAttribute(null, e.target, r)
    }
    ,
    Ir.prototype.selAllAdtlVenHandler = function(e) {
        for (var t = zt("#onetrust-pc-sdk #ot-selall-adtlvencntr").el[0], o = t.classList.contains("line-through"), n = zt("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el, r = e.target.checked, i = 0; i < n.length; i++)
            Gt.setCheckedAttribute(null, n[i], r),
            Rt.PCShowConsentLabels && (n[i].parentElement.querySelector(".ot-label-status").innerHTML = r ? Rt.PCActiveText : Rt.PCInactiveText);
        r ? Rt.UseGoogleVendors && Object.keys(Mt.addtlVendorsList).forEach(function(e) {
            Mt.addtlVendors.vendorSelected[e] = !0
        }) : Mt.addtlVendors.vendorSelected = {},
        o && t.classList.remove("line-through")
    }
    ,
    Ir.prototype.selectAllGenVenHandler = function(e) {
        var t = e.target.checked;
        Ar.selectAllHandler({
            selAllEl: "#onetrust-pc-sdk #ot-selall-gnvencntr",
            vendorBoxes: "#onetrust-pc-sdk .ot-gnven-chkbox-handler"
        }, "genven", t)
    }
    ,
    Ir.prototype.selectAllHandler = function(e, t, o) {
        for (var n = zt(e.selAllEl).el[0], r = n.classList.contains("line-through"), i = zt(e.vendorBoxes).el, s = 0; s < i.length; s++)
            "genven" === t && !o && Mt.alwaysActiveGenVendors.includes(i[s].getAttribute("gn-vid")) ? (Gt.setDisabledAttribute(null, i[s], !0),
            Gt.setCheckedAttribute(null, i[s], !0)) : Gt.setCheckedAttribute(null, i[s], o),
            Rt.PCShowConsentLabels && (i[s].parentElement.querySelector(".ot-label-status").innerHTML = o ? Rt.PCActiveText : Rt.PCInactiveText);
        o ? "googleven" === t && Rt.UseGoogleVendors ? Object.keys(Mt.addtlVendorsList).forEach(function(e) {
            Mt.addtlVendors.vendorSelected[e] = !0
        }) : "genven" === t && Mt.showGeneralVendors && Rt.GeneralVendors.forEach(function(e) {
            Mt.genVendorsConsent[e.VendorCustomId] = !0
        }) : "googleven" === t ? Mt.addtlVendors.vendorSelected = {} : (Mt.genVendorsConsent = {},
        Mt.alwaysActiveGenVendors.forEach(function(e) {
            Mt.genVendorsConsent[e] = !0
        })),
        r && n.classList.remove("line-through")
    }
    ,
    Ir.prototype.SelectAllVendorConsentHandler = function(e) {
        var t = e.target.checked;
        if (Mt.showVendorService)
            br.toggleVendors(t);
        else {
            var o = zt("#onetrust-pc-sdk #" + Xt.P_Sel_All_Vendor_Consent_El).el[0]
              , n = o.classList.contains("line-through")
              , r = zt(Xt.P_Vendor_Container + ' li:not([style="display: none;"]) .vendor-checkbox-handler').el
              , i = {};
            Mt.vendors.selectedVendors.map(function(e, t) {
                i[e.split(":")[0]] = t
            });
            for (var s = 0; s < r.length; s++) {
                Gt.setCheckedAttribute(null, r[s], t),
                Rt.PCShowConsentLabels && (r[s].parentElement.querySelector(".ot-label-status").innerHTML = t ? Rt.PCActiveText : Rt.PCInactiveText);
                var a = r[s].getAttribute("vendorid")
                  , l = i[a];
                void 0 === l && (l = a),
                Mt.vendors.selectedVendors[l] = a + ":" + t
            }
            n && o.classList.remove("line-through")
        }
        Gt.setCheckedAttribute(null, e.target, t)
    }
    ,
    Ir.prototype.onVendorToggle = function(n, e) {
        var t = Mt.vendors
          , o = Mt.addtlVendors
          , r = e === D.LI ? t.selectedLegIntVendors : e === D.AddtlConsent ? [] : t.selectedVendors
          , i = !1
          , s = Number(n);
        r.some(function(e, t) {
            var o = e.split(":");
            if (o[0] === n)
                return s = t,
                i = "true" === o[1],
                !0
        }),
        e === D.LI ? (Bo.triggerGoogleAnalyticsEvent(Oo, i ? rn : sn, t.list.find(function(e) {
            return e.vendorId === n
        }).vendorName + ": IABV2_" + n),
        t.selectedLegIntVendors[s] = n + ":" + !i,
        Ft.legIntSettings.PShowLegIntBtn || Vn.vendorLegIntToggleEvent()) : e === D.AddtlConsent ? (o.vendorSelected[n] ? delete o.vendorSelected[n] : o.vendorSelected[n] = !0,
        Vn.venAdtlSelAllTglEvent()) : (Bo.triggerGoogleAnalyticsEvent(Oo, i ? nn : on, t.list.find(function(e) {
            return e.vendorId === n
        }).vendorName + ": IABV2_" + n),
        t.selectedVendors[s] = n + ":" + !i,
        Vn.vendorsListEvent())
    }
    ,
    Ir.prototype.onVendorDisclosure = function(n) {
        return d(this, void 0, void 0, function() {
            var t, o;
            return g(this, function(e) {
                switch (e.label) {
                case 0:
                    return (t = Mt.discVendors)[n].isFetched ? [3, 2] : (t[n].isFetched = !0,
                    [4, un.getStorageDisclosure(t[n].disclosureUrl)]);
                case 1:
                    o = e.sent(),
                    Vn.updateVendorDisclosure(n, o),
                    e.label = 2;
                case 2:
                    return [2]
                }
            })
        })
    }
    ,
    Ir.prototype.tglFltrOptionHandler = function(e) {
        e && e.target.classList.contains("category-filter-handler") && Gt.setCheckedAttribute(null, e.target, e.target.checked)
    }
    ,
    Ir.prototype.selectVendorsGroupHandler = function(e) {
        Ar.toggleAccordionStatus(e);
        var t = e.target.getAttribute("leg-vendorid")
          , o = e.target.getAttribute("vendorid")
          , n = e.target.getAttribute("addtl-vid")
          , r = e.target.getAttribute("disc-vid");
        t ? Ar.onVendorToggle(t, D.LI) : o ? Ar.onVendorToggle(o, D.Consent) : n && Ar.onVendorToggle(n, D.AddtlConsent),
        r && Ar.onVendorDisclosure(r),
        (t || o || n) && (Gt.setCheckedAttribute(null, e.target, e.target.checked),
        Rt.PCShowConsentLabels && (e.target.parentElement.querySelector(".ot-label-status").innerHTML = e.target.checked ? Rt.PCActiveText : Rt.PCInactiveText))
    }
    ,
    Ir.prototype.toggleVendorFiltersHandler = function() {
        var e = !1
          , t = zt("#onetrust-pc-sdk " + Xt.P_Fltr_Modal).el[0];
        switch (Ft.pcName) {
        case lt:
        case st:
        case at:
        case dt:
            if (e = "block" === t.style.display)
                Ar.closeFilter();
            else {
                var o = zt("#onetrust-pc-sdk " + Xt.P_Triangle).el[0];
                zt(o).attr("style", "display: block;"),
                zt(t).attr("style", "display: block;");
                var n = Array.prototype.slice.call(t.querySelectorAll("[href], input, button"));
                mn.setPCFocus(n)
            }
            break;
        case ct:
            896 < window.innerWidth || 896 < window.screen.height ? wt(t, "width: 400px;", !0) : wt(t, "height: 100%; width: 100%;"),
            t.querySelector(".ot-checkbox input").focus();
            break;
        default:
            return
        }
        Bt.isV2Template && !e && (zt("#onetrust-pc-sdk").addClass("ot-shw-fltr"),
        zt("#onetrust-pc-sdk .ot-fltr-scrlcnt").el[0].scrollTop = 0)
    }
    ,
    Ir.prototype.clearFiltersHandler = function() {
        Ar.setAriaLabelforButtonInFilter(Rt.PCenterFilterClearedAria);
        for (var e = zt("#onetrust-pc-sdk " + Xt.P_Fltr_Modal + " input").el, t = 0; t < e.length; t++)
            Gt.setCheckedAttribute(null, e[t], !1);
        Ar.isCookieList ? Mt.filterByCategories = [] : Mt.filterByIABCategories = []
    }
    ,
    Ir.prototype.cancelFilterHandler = function() {
        Mt.showVendorService ? br.cancelFilter() : Ar.isCookieList ? In.cancelHostFilter() : Vn.cancelVendorFilter(),
        Ar.closeFilter(),
        zt("#onetrust-pc-sdk #filter-btn-handler").focus()
    }
    ,
    Ir.prototype.applyFilterHandler = function() {
        var e;
        Ar.setAriaLabelforButtonInFilter(Rt.PCenterFilterAppliedAria),
        Mt.showVendorService ? (e = br.getGroupsFilter(),
        br.filterVendorByGroup(e)) : Ar.isCookieList ? (e = In.updateHostFilterList(),
        Vn.loadHostList("", e)) : (e = Vn.updateVendorFilterList(),
        Vn.loadVendorList("", e)),
        zt("#onetrust-pc-sdk #filter-count").text(String(e.length)),
        Ar.closeFilter(),
        zt("#onetrust-pc-sdk #filter-btn-handler").focus()
    }
    ,
    Ir.prototype.setAriaLabelforButtonInFilter = function(e) {
        var t = Rt.ChoicesBanner ? document.querySelector("#onetrust-banner-sdk span[aria-live]") : document.querySelector("#onetrust-pc-sdk span[aria-live]");
        t || ((t = document.createElement("span")).classList.add("ot-scrn-rdr"),
        t.setAttribute("aria-atomic", "true"),
        (Rt.ChoicesBanner ? document.getElementById(Ar.bannerSelector) : document.getElementById(Ar.pcSDKSelector)).appendChild(t)),
        t.setAttribute("aria-atomic", "true"),
        t.setAttribute("aria-relevant", "additions"),
        t.setAttribute("aria-live", "assertive"),
        t.setAttribute("aria-label", e),
        Ar.timeCallback && clearTimeout(Ar.timeCallback),
        Ar.timeCallback = setTimeout(function() {
            Ar.timeCallback = null,
            t.setAttribute("aria-label", "")
        }, 900)
    }
    ,
    Ir.prototype.setPcListContainerHeight = function() {
        zt("#onetrust-pc-sdk " + Xt.P_Content).el[0].classList.contains("ot-hide") ? wt(zt("#onetrust-pc-sdk").el[0], 'height: "";', !0) : setTimeout(function() {
            var e = window.innerHeight;
            768 <= window.innerWidth && 600 <= window.innerHeight && (e = .8 * window.innerHeight),
            !zt("#onetrust-pc-sdk " + Xt.P_Content).el[0].scrollHeight || zt("#onetrust-pc-sdk " + Xt.P_Content).el[0].scrollHeight >= e ? wt(zt("#onetrust-pc-sdk").el[0], "height: " + e + "px;", !0) : wt(zt("#onetrust-pc-sdk").el[0], "height: auto;", !0)
        })
    }
    ,
    Ir.prototype.changeSelectedTab = function(e) {
        var t, o = zt("#onetrust-pc-sdk .category-menu-switch-handler"), n = 0, r = zt(o.el[0]);
        o.each(function(e, t) {
            zt(e).el.classList.contains(Xt.P_Active_Menu) && (n = t,
            zt(e).el.classList.remove(Xt.P_Active_Menu),
            r = zt(e))
        }),
        e.keyCode === E.RightArrow ? t = n + 1 >= o.el.length ? zt(o.el[0]) : zt(o.el[n + 1]) : e.keyCode === E.LeftArrow && (t = zt(n - 1 < 0 ? o.el[o.el.length - 1] : o.el[n - 1])),
        this.tabMenuToggle(t, r)
    }
    ,
    Ir.prototype.changeSelectedTabV2 = function(e) {
        var t, o = e.target.parentElement;
        e.keyCode === E.RightArrow ? t = o.nextElementSibling || o.parentElement.firstChild : e.keyCode === E.LeftArrow && (t = o.previousElementSibling || o.parentElement.lastChild);
        var n = t.querySelector(".category-menu-switch-handler");
        n.focus(),
        this.groupTabClick(n)
    }
    ,
    Ir.prototype.categoryMenuSwitchHandler = function() {
        for (var t = this, e = zt("#onetrust-pc-sdk .category-menu-switch-handler").el, o = 0; o < e.length; o++)
            e[o].addEventListener("click", this.groupTabClick),
            e[o].addEventListener("keydown", function(e) {
                if (32 === e.keyCode || "space" === e.code)
                    return t.groupTabClick(e.currentTarget),
                    e.preventDefault(),
                    !1
            })
    }
    ,
    Ir.prototype.groupTabClick = function(e) {
        var t = zt("#onetrust-pc-sdk " + Xt.P_Grp_Container).el[0]
          , o = t.querySelector("." + Xt.P_Active_Menu)
          , n = e.currentTarget || e
          , r = n.getAttribute("aria-controls");
        o.setAttribute("tabindex", -1),
        o.setAttribute("aria-selected", !1),
        o.classList.remove(Xt.P_Active_Menu),
        t.querySelector(Xt.P_Desc_Container + ":not(.ot-hide)").classList.add("ot-hide"),
        t.querySelector("#" + r).classList.remove("ot-hide"),
        n.setAttribute("tabindex", 0),
        n.setAttribute("aria-selected", !0),
        n.classList.add(Xt.P_Active_Menu)
    }
    ,
    Ir.prototype.tabMenuToggle = function(e, t) {
        e.el.setAttribute("tabindex", 0),
        e.el.setAttribute("aria-selected", !0),
        t.el.setAttribute("tabindex", -1),
        t.el.setAttribute("aria-selected", !1),
        e.focus(),
        t.el.parentElement.parentElement.querySelector("" + Xt.P_Desc_Container).classList.add("ot-hide"),
        e.el.parentElement.parentElement.querySelector("" + Xt.P_Desc_Container).classList.remove("ot-hide"),
        e.el.classList.add(Xt.P_Active_Menu)
    }
    ,
    Ir.prototype.closeFilter = function(e) {
        if (void 0 === e && (e = !0),
        !zn.checkIfPcSdkContainerExist()) {
            var t = zt("#onetrust-pc-sdk " + Xt.P_Fltr_Modal).el[0]
              , o = zt("#onetrust-pc-sdk " + Xt.P_Triangle).el[0];
            Ft.pcName === ct ? 896 < window.innerWidth || 896 < window.screen.height ? wt(t, "width: 0;", !0) : wt(t, "height: 0;") : wt(t, "display: none;"),
            o && zt(o).attr("style", "display: none;"),
            Bt.isV2Template && zt("#onetrust-pc-sdk").removeClass("ot-shw-fltr"),
            e && mn.setFirstAndLast(mn.getPCElements())
        }
    }
    ,
    Ir.prototype.setBackButtonFocus = function() {
        zt("#onetrust-pc-sdk .back-btn-handler").el[0].focus()
    }
    ,
    Ir.prototype.setSearchInputFocus = function() {
        zt("#onetrust-pc-sdk #vendor-search-handler").el[0].focus()
    }
    ,
    Ir.prototype.setCenterLayoutFooterHeight = function() {
        var e = Ar.pc;
        if (Ar.setMainContentHeight(),
        Ft.pcName === dt && e) {
            var t = e.querySelectorAll("" + Xt.P_Desc_Container)
              , o = e.querySelectorAll("li .category-menu-switch-handler");
            if (!e.querySelector(".category-menu-switch-handler + " + Xt.P_Desc_Container) && window.innerWidth < 640)
                for (var n = 0; n < t.length; n++)
                    o[n].insertAdjacentElement("afterend", t[n]);
            else
                e.querySelector(".category-menu-switch-handler + " + Xt.P_Desc_Container) && 640 < window.innerWidth && zt(e.querySelector(".ot-tab-desc")).append(t)
        }
    }
    ,
    Ir.prototype.setMainContentHeight = function() {
        var e = this.pc
          , t = e.querySelector(".ot-pc-footer")
          , o = e.querySelector(".ot-pc-header")
          , n = e.querySelectorAll(".ot-pc-footer button")
          , r = n[n.length - 1]
          , i = Rt.PCLayout;
        if (e.classList.remove("ot-ftr-stacked"),
        n[0] && r && 1 < Math.abs(n[0].offsetTop - r.offsetTop) && e.classList.add("ot-ftr-stacked"),
        !Rt.PCTemplateUpgrade && !i.Center) {
            var s = e.clientHeight - t.clientHeight - o.clientHeight - 3;
            if (Rt.PCTemplateUpgrade && !i.Tab && Rt.PCenterVendorListDescText) {
                var a = zt("#vdr-lst-dsc").el;
                s = s - (a.length && a[0].clientHeight) - 10
            }
            wt(e.querySelector("" + Xt.P_Vendor_List), "height: " + s + "px;", !0)
        }
        var l = e.querySelector("" + Xt.P_Content);
        if (Rt.PCTemplateUpgrade && i.Center) {
            var c = 600 < window.innerWidth && 475 < window.innerHeight;
            if (!this.pcBodyHeight && c && (this.pcBodyHeight = l.scrollHeight),
            c) {
                var d = this.pcBodyHeight + t.clientHeight + o.clientHeight + 20;
                d > .8 * window.innerHeight || 0 === this.pcBodyHeight ? wt(e, "height: " + .8 * window.innerHeight + "px;", !0) : wt(e, "height: " + d + "px;", !0)
            } else
                wt(e, "height: 100%;", !0)
        } else
            wt(e.querySelector("" + Xt.P_Content), "height: " + (e.clientHeight - t.clientHeight - o.clientHeight - 3) + "px;", !0)
    }
    ,
    Ir.prototype.allowAllVisible = function(e) {
        e !== this.allowVisible && Rt.PCLayout.Tab && Rt.PCTemplateUpgrade && (this.pc && this.setMainContentHeight(),
        this.allowVisible = e)
    }
    ,
    Ir.prototype.restorePc = function() {
        Mt.pcLayer === V.CookieList ? (Ar.hideCategoryContainer(!0),
        Vn.loadHostList("", Mt.filterByCategories),
        zt("#onetrust-pc-sdk #filter-count").text(Mt.filterByCategories.length.toString())) : Mt.pcLayer === V.VendorList && (Ar.hideCategoryContainer(!1),
        Ar.setVendorContent()),
        Mt.isPCVisible = !1,
        Ar.toggleInfoDisplay(),
        Mt.pcLayer !== V.VendorList && Mt.pcLayer !== V.CookieList || (In.updateFilterSelection(Mt.pcLayer === V.CookieList),
        Ar.setBackButtonFocus(),
        mn.setPCFocus(mn.getPCElements()))
    }
    ,
    Ir.prototype.toggleInfoDisplay = function() {
        return d(this, void 0, void 0, function() {
            var t, o;
            return g(this, function(e) {
                switch (e.label) {
                case 0:
                    return gn.csBtnGroup && (zt(Ar.fltgBtnSltr).addClass("ot-pc-open"),
                    Ar.otGuardLogoPromise.then(function() {
                        Rt.cookiePersistentLogo.includes("ot_guard_logo.svg") && zt(Ar.fltgBtnFSltr).attr("aria-hidden", "true")
                    }),
                    zt(Ar.fltgBtnBSltr).attr("aria-hidden", "")),
                    [4, Ar.fetchAndSetupPC()];
                case 1:
                    return e.sent(),
                    Ft.pcName === at && this.setPcListContainerHeight(),
                    void 0 !== Mt.pcLayer && Mt.pcLayer !== V.Banner || (Mt.pcLayer = V.PrefCenterHome),
                    t = zt("#onetrust-pc-sdk").el[0],
                    zt(".onetrust-pc-dark-filter").el[0].removeAttribute("style"),
                    t.removeAttribute("style"),
                    Mt.isPCVisible || (zn.showConsentNotice(),
                    Mt.isPCVisible = !0,
                    Rt.PCTemplateUpgrade && (this.pc = t,
                    o = t.querySelector("#accept-recommended-btn-handler"),
                    this.allowVisible = o && 0 < o.clientHeight,
                    this.setCenterLayoutFooterHeight(),
                    Ar.getResizeElement().addEventListener("resize", Ar.setCenterLayoutFooterHeight),
                    window.addEventListener("resize", Ar.setCenterLayoutFooterHeight))),
                    window.dispatchEvent(new CustomEvent("OneTrustPCLoaded",{
                        OneTrustPCLoaded: "yes"
                    })),
                    Ar.captureInitialConsent(),
                    [2]
                }
            })
        })
    }
    ,
    Ir.prototype.close = function(e) {
        Rt.BCloseButtonType === de.Link ? Mt.bannerCloseSource = f.ContinueWithoutAcceptingButton : Mt.bannerCloseSource = f.BannerCloseButton,
        Lr.bannerCloseButtonHandler(e),
        Ar.getResizeElement().removeEventListener("resize", Ar.setCenterLayoutFooterHeight),
        window.removeEventListener("resize", Ar.setCenterLayoutFooterHeight)
    }
    ,
    Ir.prototype.closePreferenceCenter = function(e) {
        e && e.preventDefault(),
        window.location.href = "http://otsdk//consentChanged"
    }
    ,
    Ir.prototype.initializeAlartHtmlAndHandler = function() {
        Mt.skipAddingHTML = 0 < zt("#onetrust-banner-sdk").length,
        Mt.skipAddingHTML || vr.insertAlertHtml(),
        this.initialiseAlertHandlers()
    }
    ,
    Ir.prototype.initialiseAlertHandlers = function() {
        var e = this;
        vr.showBanner(),
        Rt.ForceConsent && !Kt.isCookiePolicyPage(Rt.AlertNoticeText) && zt(".onetrust-pc-dark-filter").removeClass("ot-hide").css("z-index:2147483645;"),
        Rt.OnClickCloseBanner && document.body.addEventListener("click", Lr.bodyClickEvent),
        Rt.ScrollCloseBanner && (window.addEventListener("scroll", Lr.scrollCloseBanner),
        zt(document).on("click", ".onetrust-close-btn-handler", Lr.rmScrollAndClickBodyEvents),
        zt(document).on("click", "#onetrust-accept-btn-handler", Lr.rmScrollAndClickBodyEvents),
        zt(document).on("click", "#accept-recommended-btn-handler", Lr.rmScrollAndClickBodyEvents)),
        (Rt.IsIabEnabled || Rt.UseGoogleVendors || Mt.showGeneralVendors) && !Mt.showVendorService && zt(document).on("click", ".onetrust-vendors-list-handler", Ar.showAllVendors),
        Rt.FloatingRoundedIcon && zt("#onetrust-banner-sdk #onetrust-cookie-btn").on("click", function(e) {
            Mt.pcSource = e.currentTarget,
            Ar.showCookieSettingsHandler(e)
        }),
        zt("#onetrust-banner-sdk .onetrust-close-btn-handler, #onetrust-banner-sdk .ot-bnr-save-handler").on("click", Ar.bannerCloseButtonHandler),
        zt("#onetrust-banner-sdk #onetrust-pc-btn-handler").on("click", Ar.showCookieSettingsHandler),
        zt("#onetrust-banner-sdk #onetrust-accept-btn-handler").on("click", Lr.allowAllEventHandler.bind(this, !1)),
        zt("#onetrust-banner-sdk #onetrust-reject-all-handler").on("click", Lr.rejectAllEventHandler.bind(this, !1)),
        zt("#onetrust-banner-sdk .banner-option-input").on("click", Ft.bannerName === ot ? Ar.toggleBannerOptions : Ar.toggleAccordionStatus),
        zt("#onetrust-banner-sdk .ot-gv-list-handler").on("click", function(t) {
            return d(e, void 0, void 0, function() {
                return g(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return Mt.cookieListType = X.GenVen,
                        [4, Ar.fetchAndSetupPC()];
                    case 1:
                        return e.sent(),
                        Ar.loadCookieList(t.target),
                        Ar.showCookieSettingsHandler(t),
                        [2]
                    }
                })
            })
        }),
        zt("#onetrust-banner-sdk .category-switch-handler").on("click", Ar.toggleBannerCategory);
        var t = document.getElementById("onetrust-banner-sdk");
        Rt.ForceConsent && t && "none" !== window.getComputedStyle(t).display && zt(document).on("keydown", Ar.shiftBannerFocus),
        zt("#onetrust-banner-sdk").on("keydown", function(e) {
            32 !== e.keyCode && "Space" !== e.code && 13 !== e.keyCode && "Enter" !== e.code || Kt.findUserType(e)
        })
    }
    ,
    Ir.prototype.getResizeElement = function() {
        var e = document.querySelector("#onetrust-pc-sdk .ot-text-resize");
        return e ? e.contentWindow || e : document
    }
    ,
    Ir.prototype.insertCookieSettingText = function(e) {
        var t, o;
        void 0 === e && (e = !1);
        for (var n = Rt.CookieSettingButtonText, r = zt(".ot-sdk-show-settings").el, i = zt(".optanon-toggle-display").el, s = 0; s < r.length; s++)
            zt(r[s]).text(n),
            zt(i[s]).text(n);
        e ? (null !== (t = document.querySelector(".ot-sdk-show-settings")) && void 0 !== t && t.addEventListener("click", this.cookiesSettingsBoundListener),
        null !== (o = document.querySelector(".optanon-toggle-display")) && void 0 !== o && o.addEventListener("click", this.cookiesSettingsBoundListener)) : Ar.initCookieSettingHandlers()
    }
    ,
    Ir.prototype.genVendorToggled = function(e) {
        var t = e.target.getAttribute("gn-vid");
        mo.updateGenVendorStatus(t, e.target.checked);
        var o = Rt.GeneralVendors.find(function(e) {
            return e.VendorCustomId === t
        }).Name;
        Bo.triggerGoogleAnalyticsEvent(Oo, e.target.checked ? Xo : Qo, o + ": VEN_" + t),
        Vn.genVenSelectAllTglEvent()
    }
    ,
    Ir.prototype.genVendorDetails = function(e) {
        Ar.toggleAccordionStatus(e)
    }
    ,
    Ir.prototype.confirmPC = function(e) {
        var t = to.isAlertBoxClosedAndValid();
        Rt.NoBanner && Rt.ShowPreferenceCenterCloseButton && !t && Lr.bannerCloseButtonHandler();
        var o = Kt.isBannerVisible();
        !Bt.moduleInitializer.MobileSDK || !t && o || Ar.closePreferenceCenter(e)
    }
    ,
    Ir.prototype.captureInitialConsent = function() {
        Mt.initialGroupsConsent = JSON.parse(JSON.stringify(Mt.groupsConsent)),
        Mt.initialHostConsent = JSON.parse(JSON.stringify(Mt.hostsConsent)),
        Mt.showGeneralVendors && (Mt.initialGenVendorsConsent = JSON.parse(JSON.stringify(Mt.genVendorsConsent))),
        Rt.IsIabEnabled && (Mt.initialOneTrustIABConsent = JSON.parse(JSON.stringify(Mt.oneTrustIABConsent)),
        Mt.initialVendors = JSON.parse(JSON.stringify(Mt.vendors)),
        Mt.initialVendors.vendorTemplate = Mt.vendors.vendorTemplate),
        Rt.UseGoogleVendors && (Mt.initialAddtlVendorsList = JSON.parse(JSON.stringify(Mt.addtlVendorsList)),
        Mt.initialAddtlVendors = JSON.parse(JSON.stringify(Mt.addtlVendors))),
        Mt.vsIsActiveAndOptOut && (Mt.initialVendorsServiceConsent = new Map(Mt.vsConsent))
    }
    ,
    Ir);
    function Ir() {
        var t = this;
        this.allowVisible = !1,
        this.fltgBtnBackBtn = ".ot-floating-button__back button",
        this.fltgBtnBSltr = ".ot-floating-button__back svg",
        this.fltgBtnFrontBtn = ".ot-floating-button__front button",
        this.fltgBtnFSltr = ".ot-floating-button__front svg",
        this.fltgBtnSltr = "#ot-sdk-btn-floating",
        this.isCookieList = !1,
        this.pc = null,
        this.pcLinkSource = null,
        this.pcSDKSelector = "onetrust-pc-sdk",
        this.bannerSelector = "onetrust-banner-sdk",
        this.otGuardLogoResolve = null,
        this.otGuardLogoPromise = new Promise(function(e) {
            t.otGuardLogoResolve = e
        }
        ),
        this.showCookieSettingsHandler = function(s) {
            return d(t, void 0, void 0, function() {
                var t, o, n, r, i;
                return g(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return (t = document.getElementById(Ar.pcSDKSelector),
                        t && "none" !== window.getComputedStyle(t).getPropertyValue("display")) ? [2] : (s && s.stopPropagation(),
                        s && s.target && (o = s.target.className,
                        n = "onetrust-pc-btn-handler" === s.target.id,
                        r = "ot-sdk-show-settings" === o,
                        (n || r) && (i = n ? qo : Mo,
                        Bo.triggerGoogleAnalyticsEvent(Oo, i)),
                        Mt.pcSource = s.target),
                        [4, Ar.toggleInfoDisplay()]);
                    case 1:
                        return e.sent(),
                        [2, !1]
                    }
                })
            })
        }
        ,
        this.cookiesSettingsBoundListener = this.showCookieSettingsHandler.bind(this),
        this.backBtnHandler = function() {
            return Mt.showVendorService && br.hideVendorList(),
            Lr.hideVendorsList(),
            Ft.pcName === at && (zt("#onetrust-pc-sdk " + Xt.P_Content).removeClass("ot-hide"),
            zt("#onetrust-pc-sdk").el[0].removeAttribute("style"),
            t.setPcListContainerHeight()),
            zt("#onetrust-pc-sdk #filter-count").text("0"),
            zt("#onetrust-pc-sdk #vendor-search-handler").length && (zt("#onetrust-pc-sdk #vendor-search-handler").el[0].value = ""),
            Mt.currentGlobalFilteredList = [],
            Mt.filterByCategories = [],
            Mt.filterByIABCategories = [],
            Mt.vendors.searchParam = "",
            Ar.closeFilter(),
            Mt.pcLayer = V.PrefCenterHome,
            t.pcLinkSource ? (t.pcLinkSource.focus(),
            t.pcLinkSource = null) : mn.setPCFocus(mn.getPCElements()),
            !1
        }
        ,
        this.bannerCloseBoundListener = this.bannerCloseButtonHandler.bind(this),
        this.toggleGroupORVendorHandler = function(e) {
            var t = e.currentTarget
              , o = t.dataset.otVsId;
            o ? Ar.toggleVendorServiceHandler.bind(this)(e) : (o = t.dataset.optanongroupid) && Ar.toggleV2Category.bind(this)()
        }
        ,
        this.toggleVendorFromListHandler = function(e) {
            var t = e.currentTarget
              , o = t.checked
              , n = t.dataset.otVsId
              , r = t.dataset.optanongroupid
              , i = document.getElementById("ot-vendor-id-" + n);
            xn.toggleVendorService(r, n, o, i)
        }
        ,
        this.toggleVendorServiceHandler = function(e) {
            var t = e.currentTarget
              , o = t.checked
              , n = t.dataset.otVsId
              , r = t.dataset.optanongroupid;
            xn.toggleVendorService(r, n, o, t);
            var i = no.getVSById(n);
            Ar.setAriaLabelforButtonInFilter(i.ServiceName)
        }
        ,
        this.toggleV2Category = function(e, t, o, n) {
            if (!t) {
                var r = this.getAttribute("data-optanongroupid")
                  , i = "function" == typeof this.getAttribute
                  , s = Gt.findIndex(Mt.dataGroupState, function(e) {
                    return i && e.CustomGroupId === r
                });
                t = Mt.dataGroupState[s]
            }
            var a;
            if (void 0 === o && (o = zt(this).is(":checked")),
            Rt.ChoicesBanner && Gt.setCheckedAttribute("#ot-bnr-grp-id-" + t.CustomGroupId, null, o),
            n)
                document.querySelector("#ot-group-id-" + n) && (Gt.setCheckedAttribute("#ot-group-id-" + n, null, o),
                a = document.querySelector("#ot-group-id-" + n));
            else {
                a = this,
                Gt.setCheckedAttribute(null, this, o);
                var l = a.parentElement.querySelector(".ot-switch-nob");
                Bt.fp.CookieV2VendorServiceScript ? Rt.PCCategoryStyle === se.Toggle && l && l.setAttribute("aria-checked", o) : Rt.PCTemplateUpgrade && l && l.setAttribute("aria-checked", o)
            }
            Rt.PCShowConsentLabels && (a.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? Rt.PCActiveText : Rt.PCInactiveText);
            var c = this instanceof HTMLElement && -1 !== this.getAttribute("id").indexOf("-leg-out");
            Ar.setAriaLabelforButtonInFilter(t.GroupName),
            Ar.updateGroupToggles(t, o, c)
        }
        ,
        this.toggleBannerCategory = function() {
            var t = this
              , e = Gt.findIndex(Mt.dataGroupState, function(e) {
                return "function" == typeof t.getAttribute && e.CustomGroupId === t.getAttribute("data-optanongroupid")
            })
              , o = Mt.dataGroupState[e]
              , n = zt(t).is(":checked");
            Ar.toggleV2Category(null, o, n, o.CustomGroupId)
        }
        ,
        this.shiftBannerFocus = function(e) {
            var t = document.getElementById(Ar.pcSDKSelector)
              , o = "none" !== window.getComputedStyle(t).display;
            "Tab" !== e.code || o || mn.handleBannerFocus(e, e.shiftKey)
        }
        ,
        this.toggleSubCategory = function(e, t, o, n) {
            t = t || this.getAttribute("data-optanongroupid");
            var r, i = no.getGroupById(t);
            void 0 === o && (o = zt(this).is(":checked")),
            n ? (Gt.setCheckedAttribute("#ot-sub-group-id-" + n, null, o),
            r = document.querySelector("#ot-sub-group-id-" + n)) : (r = this,
            Gt.setCheckedAttribute(null, this, o)),
            Rt.PCShowConsentLabels && (r.parentElement.parentElement.querySelector(".ot-label-status").innerHTML = o ? Rt.PCActiveText : Rt.PCInactiveText);
            var s = this instanceof HTMLElement && -1 !== this.getAttribute("id").indexOf("-leg-out");
            Ar.setAriaLabelforButtonInFilter(i.GroupName),
            Ar.updateSubGroupToggles(i, o, s),
            xn.setVendorStateByGroup(i, o)
        }
    }
    var Lr, _r = (Vr.prototype.updateDataSubjectTimestamp = function() {
        var e = to.alertBoxCloseDate()
          , t = e && Kt.getUTCFormattedDate(e);
        zt(".ot-userid-timestamp").html(Rt.PCenterUserIdTimestampTitleText + ": " + t)
    }
    ,
    Vr.prototype.closeBanner = function(e) {
        this.closeOptanonAlertBox(),
        e ? this.allowAll(!1) : this.close(!1)
    }
    ,
    Vr.prototype.allowAll = function(e, t) {
        void 0 === t && (t = !1),
        Bt.moduleInitializer.MobileSDK ? window.OneTrust.AllowAll() : this.AllowAllV2(e, t)
    }
    ,
    Vr.prototype.bannerActionsHandler = function(t, n, e) {
        var r = this;
        void 0 === e && (e = !1),
        Io.setLandingPathParam(xe),
        Mt.groupsConsent = [],
        Mt.hostsConsent = [],
        Mt.genVendorsConsent = {};
        var i = {};
        Rt.Groups.forEach(function(e) {
            if (e.IsAboutGroup)
                return !1;
            C(e.SubGroups, [e]).forEach(function(e) {
                var o = r.getGroupStatus(t, n, e);
                r.setGroupConsent(o, e),
                e.Hosts.length && Kt.isOptOutEnabled() && e.Hosts.forEach(function(e) {
                    if (i[e.HostId])
                        So.updateHostStatus(e, o);
                    else {
                        i[e.HostId] = !0;
                        var t = So.isHostPartOfAlwaysActiveGroup(e.HostId) || o;
                        Mt.hostsConsent.push(e.HostId + ":" + (t ? "1" : "0"))
                    }
                }),
                Mt.genVenOptOutEnabled && e.GeneralVendorsIds && e.GeneralVendorsIds.length && e.GeneralVendorsIds.forEach(function(e) {
                    mo.updateGenVendorStatus(e, o)
                })
            })
        }),
        Rt.IsIabEnabled && (t ? this.iab.allowAllhandler() : this.iab.rejectAllHandler(e)),
        zn.hideConsentNoticeV2(),
        ho.writeGrpParam(Oe.OPTANON_CONSENT),
        ho.writeHstParam(Oe.OPTANON_CONSENT),
        Mt.genVenOptOutEnabled && ho.writeGenVenCookieParam(Oe.OPTANON_CONSENT),
        Mt.vsIsActiveAndOptOut && ho.writeVSConsentCookieParam(Oe.OPTANON_CONSENT),
        In.substitutePlainTextScriptTags(),
        Mn.updateGtmMacros(),
        this.executeOptanonWrapper()
    }
    ,
    Vr.prototype.getGroupStatus = function(e, t, o) {
        return !!e || !!t && no.isAlwaysActiveGroup(o)
    }
    ,
    Vr.prototype.setGroupConsent = function(e, t) {
        -1 < It.indexOf(t.Type) && Mt.groupsConsent.push(t.CustomGroupId + ":" + (e && t.HasConsentOptOut ? "1" : "0"))
    }
    ,
    Vr.prototype.nextPageCloseBanner = function() {
        Io.isLandingPage() || to.isAlertBoxClosedAndValid() || this.closeBanner(Rt.NextPageAcceptAllCookies)
    }
    ,
    Vr.prototype.rmScrollAndClickBodyEvents = function() {
        Rt.ScrollCloseBanner && window.removeEventListener("scroll", this.scrollCloseBanner),
        Rt.OnClickCloseBanner && document.body.removeEventListener("click", this.bodyClickEvent)
    }
    ,
    Vr.prototype.onClickCloseBanner = function(e) {
        to.isAlertBoxClosedAndValid() || (Bo.triggerGoogleAnalyticsEvent(Oo, No),
        this.closeBanner(Rt.OnClickAcceptAllCookies),
        e.stopPropagation()),
        Lr.rmScrollAndClickBodyEvents()
    }
    ,
    Vr.prototype.scrollCloseBanner = function() {
        var e = zt(document).height() - zt(window).height();
        0 === e && (e = zt(window).height());
        var t = 100 * zt(window).scrollTop() / e;
        t <= 0 && (t = 100 * (document.scrollingElement && document.scrollingElement.scrollTop || document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop) / (document.scrollingElement && document.scrollingElement.scrollHeight || document.documentElement && document.documentElement.scrollHeight || document.body && document.body.scrollHeight)),
        25 < t && !to.isAlertBoxClosedAndValid() && (!Mt.isPCVisible || Rt.NoBanner) ? (Bo.triggerGoogleAnalyticsEvent(Oo, No),
        Lr.closeBanner(Rt.ScrollAcceptAllCookies),
        Lr.rmScrollAndClickBodyEvents()) : to.isAlertBoxClosedAndValid() && Lr.rmScrollAndClickBodyEvents()
    }
    ,
    Vr.prototype.AllowAllV2 = function(e, t) {
        void 0 === t && (t = !1);
        for (var o = this.groupsClass.getAllGroupElements(), n = 0; n < o.length; n++) {
            var r = no.getGroupById(o[n].getAttribute("data-optanongroupid"));
            this.groupsClass.toggleGrpElements(o[n], r, !0),
            this.groupsClass.toogleSubGroupElement(o[n], !0, !1, !0),
            this.groupsClass.toogleSubGroupElement(o[n], !0, !0, !0)
        }
        Mt.showVendorService && xn.consentAll(!0),
        this.bannerActionsHandler(!0, !1),
        this.consentTransactions(e, !0, t),
        Rt.IsIabEnabled && (this.iab.updateIabVariableReference(),
        this.iab.updateVendorsDOMToggleStatus(!0),
        this.updateVendorLegBtns(!0))
    }
    ,
    Vr.prototype.rejectAll = function(e, t) {
        void 0 === t && (t = !1);
        var o, n, r = t ? U[5] : U[2], i = this.groupsClass.getAllGroupElements();
        n = Bt.fp.CookieV2RejectAll ? (o = this.initializeObjectToLIRejectAll(t),
        this.initializeAllowLIRejectAll(t)) : !(o = !0);
        for (var s = 0; s < i.length; s++) {
            var a = no.getGroupById(i[s].getAttribute("data-optanongroupid"));
            "always active" !== no.getGrpStatus(a).toLowerCase() && (Sn.toggleGrpElements(i[s], a, !1, n),
            this.groupsClass.toogleSubGroupElement(i[s], !1, !1, !0),
            (!Rt.IsIabEnabled || Rt.IsIabEnabled && o) && this.groupsClass.toogleSubGroupElement(i[s], !1, !0, !0))
        }
        Mt.showVendorService && xn.consentAll(!1),
        this.bannerActionsHandler(!1, !0, n),
        r !== Mt.consentInteractionType && this.consentTransactions(e, !1, t),
        Rt.IsIabEnabled && (this.iab.updateIabVariableReference(),
        this.iab.updateVendorsDOMToggleStatus(!1, n),
        n || this.updateVendorLegBtns(!1))
    }
    ,
    Vr.prototype.initializeObjectToLIRejectAll = function(e) {
        return !e && Rt.BannerShowRejectAllButton && Rt.BRejectConsentType === Pe.OBJECT_TO_LI || e && Rt.PCenterShowRejectAllButton && Rt.BRejectConsentType === Pe.OBJECT_TO_LI
    }
    ,
    Vr.prototype.initializeAllowLIRejectAll = function(e) {
        return Rt.IsIabEnabled && (!e && Rt.BannerShowRejectAllButton && Rt.BRejectConsentType === Pe.LI_ACTIVE_IF_LEGAL_BASIS || e && Rt.PCenterShowRejectAllButton && Rt.BRejectConsentType === Pe.LI_ACTIVE_IF_LEGAL_BASIS)
    }
    ,
    Vr.prototype.executeCustomScript = function() {
        Rt.CustomJs && new Function(Rt.CustomJs)()
    }
    ,
    Vr.prototype.updateConsentData = function(e) {
        Io.setLandingPathParam(xe),
        Rt.IsIabEnabled && !e && this.iab.saveVendorStatus(),
        ho.writeGrpParam(Oe.OPTANON_CONSENT),
        ho.writeHstParam(Oe.OPTANON_CONSENT),
        Mt.showGeneralVendors && Rt.GenVenOptOut && ho.writeGenVenCookieParam(Oe.OPTANON_CONSENT),
        Mt.vsIsActiveAndOptOut && ho.writeVSConsentCookieParam(Oe.OPTANON_CONSENT),
        In.substitutePlainTextScriptTags(),
        Mn.updateGtmMacros()
    }
    ,
    Vr.prototype.close = function(e, t) {
        if (void 0 === t && (t = m.Banner),
        zn.hideConsentNoticeV2(),
        this.updateConsentData(e),
        Rt.IsConsentLoggingEnabled) {
            var o = t === m.PC ? $n : t === m.Banner ? Yn : Ft.apiSource
              , n = t === m.PC ? Wn : t === m.Banner ? Kn : Jn;
            Mt.bannerCloseSource === f.ContinueWithoutAcceptingButton && (o = er),
            Mt.bannerCloseSource === f.BannerSaveSettings && (o = Zn),
            so.createConsentTxn(!1, n + " - " + o, t === m.PC)
        } else
            to.dispatchConsentEvent();
        this.executeOptanonWrapper()
    }
    ,
    Vr.prototype.executeOptanonWrapper = function() {
        try {
            if (this.executeCustomScript(),
            "function" == typeof window.OptanonWrapper && "undefined" !== window.OptanonWrapper) {
                window.OptanonWrapper();
                for (var e = 0, t = Mt.srcExecGrpsTemp; e < t.length; e++) {
                    var o = t[e];
                    -1 === Mt.srcExecGrps.indexOf(o) && Mt.srcExecGrps.push(o)
                }
                Mt.srcExecGrpsTemp = [];
                for (var n = 0, r = Mt.htmlExecGrpsTemp; n < r.length; n++)
                    o = r[n],
                    -1 === Mt.htmlExecGrps.indexOf(o) && Mt.htmlExecGrps.push(o);
                Mt.htmlExecGrpsTemp = []
            }
        } catch (e) {
            console.warn("Error in Optanon wrapper, please review your code. " + e)
        }
    }
    ,
    Vr.prototype.updateVendorLegBtns = function(e) {
        if (Ft.legIntSettings.PAllowLI && Ft.legIntSettings.PShowLegIntBtn)
            for (var t = zt(Xt.P_Vendor_Container + " .ot-leg-btn-container").el, o = 0; o < t.length; o++)
                this.groupsClass.updateLegIntBtnElement(t[o], e)
    }
    ,
    Vr.prototype.showFltgCkStgButton = function() {
        var e = zt("#ot-sdk-btn-floating");
        e.removeClass("ot-hide"),
        e.removeClass("ot-pc-open"),
        Rt.cookiePersistentLogo.includes("ot_guard_logo.svg") && zt(".ot-floating-button__front svg").attr("aria-hidden", ""),
        zt(".ot-floating-button__back svg").attr("aria-hidden", "true")
    }
    ,
    Vr.prototype.consentTransactions = function(e, t, o) {
        void 0 === o && (o = !1),
        so && !e && Rt.IsConsentLoggingEnabled ? so.createConsentTxn(!1, (o ? Wn : Kn) + " - " + (t ? Xn : Qn), o) : to.dispatchConsentEvent()
    }
    ,
    Vr.prototype.hideVendorsList = function() {
        zn.checkIfPcSdkContainerExist() || (Rt.PCTemplateUpgrade ? zt("#onetrust-pc-sdk " + Xt.P_Content).removeClass("ot-hide") : zt("#onetrust-pc-sdk .ot-main-content").show(),
        zt("#onetrust-pc-sdk #close-pc-btn-handler.main").show(),
        zt("#onetrust-pc-sdk " + Xt.P_Vendor_List).addClass("ot-hide"))
    }
    ,
    Vr.prototype.resetConsent = function() {
        var e = this;
        Mt.groupsConsent = JSON.parse(JSON.stringify(Mt.initialGroupsConsent)),
        Mt.hostsConsent = JSON.parse(JSON.stringify(Mt.initialHostConsent)),
        Mt.showGeneralVendors && (Mt.genVendorsConsent = JSON.parse(JSON.stringify(Mt.initialGenVendorsConsent))),
        Mt.vsIsActiveAndOptOut && (Mt.vsConsent = new Map(Mt.initialVendorsServiceConsent)),
        Rt.IsIabEnabled && (Mt.oneTrustIABConsent = JSON.parse(JSON.stringify(Mt.initialOneTrustIABConsent)),
        Mt.vendors = JSON.parse(JSON.stringify(Mt.initialVendors)),
        Mt.vendors.vendorTemplate = Mt.initialVendors.vendorTemplate),
        Rt.UseGoogleVendors && (Mt.addtlVendors = JSON.parse(JSON.stringify(Mt.initialAddtlVendors)),
        Mt.addtlVendorsList = JSON.parse(JSON.stringify(Mt.initialAddtlVendorsList))),
        this.updateConsentData(!1),
        setTimeout(function() {
            e.resetConsentUI()
        }, 400)
    }
    ,
    Vr.prototype.resetConsentUI = function() {
        Sn.getAllGroupElements().forEach(function(e) {
            var t = e.getAttribute("data-optanongroupid")
              , o = no.getGroupById(t)
              , n = Lr.isGroupActive(o, t);
            Ft.pcName === dt && Rt.PCTemplateUpgrade && (e = document.querySelector("#ot-desc-id-" + e.getAttribute("data-optanongroupid")));
            var r = e.querySelector(".ot-label-status");
            if (Rt.PCShowConsentLabels && r && (r.innerHTML = n ? Rt.PCActiveText : Rt.PCInactiveText),
            o.Type === vt || o.Type === At) {
                var i = Kt.isBundleOrStackActive(o, Mt.initialGroupsConsent)
                  , s = e.querySelector('input[class*="category-switch-handler"]');
                Gt.setCheckedAttribute(null, s, i);
                for (var a = e.querySelectorAll("li" + Xt.P_Subgrp_li), l = 0; l < a.length; l++) {
                    var c = no.getGroupById(a[l].getAttribute("data-optanongroupid"))
                      , d = c.OptanonGroupId
                      , u = Lr.isGroupActive(c, d)
                      , p = a[l].querySelector('input[class*="cookie-subgroup-handler"]')
                      , h = a[l].querySelector(".ot-label-status");
                    Rt.PCShowConsentLabels && h && (r.innerHTML = u ? Rt.PCActiveText : Rt.PCInactiveText),
                    Gt.setCheckedAttribute(null, p, u),
                    Lr.resetLegIntButton(c, a[l])
                }
            } else
                s = e.querySelector('input[class*="category-switch-handler"]'),
                Gt.setCheckedAttribute(null, s, n),
                Lr.resetLegIntButton(o, e)
        }),
        Rt.IsIabEnabled && sr.toggleVendorConsent();
        var e = zt("#onetrust-pc-sdk .ot-gnven-chkbox-handler").el;
        if (Mt.showGeneralVendors && e && e.length) {
            for (var t = 0, o = e; t < o.length; t++) {
                var n = (l = o[t]).getAttribute("gn-vid")
                  , r = Boolean(Mt.genVendorsConsent[n]);
                Gt.setCheckedAttribute("", l, r),
                mo.updateGenVendorStatus(n, r)
            }
            Vn.genVenSelectAllTglEvent()
        }
        var i = zt("#onetrust-pc-sdk .ot-addtlven-chkbox-handler").el;
        if (Rt.UseGoogleVendors && i && i.length)
            for (var s = 0, a = i; s < a.length; s++) {
                var l;
                n = (l = a[s]).getAttribute("addtl-vid"),
                Mt.addtlVendorsList[n] && (r = Boolean(Mt.addtlVendors.vendorSelected[n]),
                Gt.setCheckedAttribute("", l, r))
            }
        Mt.vsIsActiveAndOptOut && xn.resetVendorUIState(Mt.vsConsent)
    }
    ,
    Vr.prototype.isGroupActive = function(e, t) {
        var o;
        if (e.IabGrpId) {
            var n = void 0;
            n = e.Type === Pt ? Mt.initialVendors.selectedSpecialFeatures : e.IsLegIntToggle ? Mt.initialVendors.selectedLegInt : Mt.initialVendors.selectedPurpose,
            o = -1 !== Ut.inArray(e.IabGrpId + ":true", n)
        } else
            o = -1 !== Ut.inArray(t + ":1", Mt.initialGroupsConsent);
        return o
    }
    ,
    Vr.prototype.resetLegIntButton = function(e, t) {
        if (Ft.legIntSettings.PAllowLI && e.Type === bt && e.HasLegIntOptOut && Ft.legIntSettings.PShowLegIntBtn) {
            var o = !0;
            -1 < Mt.vendors.selectedLegInt.indexOf(e.IabGrpId + ":false") && (o = !1),
            Sn.updateLegIntBtnElement(t, o)
        }
    }
    ,
    Vr.prototype.handleTogglesOnSingularConsentUpdate = function(e, t, o) {
        if (this.closeOptanonAlertBox(),
        e === gt)
            for (var n = no.getGroupById(t), r = this.groupsClass.getAllGroupElements(), i = 0; i < r.length; i++) {
                var s = no.getGroupById(r[i].getAttribute("data-optanongroupid"));
                if (s.OptanonGroupId === n.OptanonGroupId && !s.Parent) {
                    Ar.toggleV2Category(null, s, o, s.CustomGroupId);
                    break
                }
                var a = s.SubGroups.find(function(e) {
                    return e.OptanonGroupId === n.OptanonGroupId
                });
                a && Ar.toggleSubCategory(null, a.CustomGroupId, o, a.CustomGroupId)
            }
        else if (e === ft) {
            var l = no.getGrpByVendorId(t);
            l && xn.toggleVendorService(l.CustomGroupId, t, o)
        }
        this.close(!1, m.API)
    }
    ,
    Vr);
    function Vr() {
        var o = this;
        this.iab = Vn,
        this.groupsClass = Sn,
        this.closeOptanonAlertBox = function() {
            if (Kt.hideBanner(),
            Rt.NtfyConfig.ShowNtfy && nr.hideSyncNtfy(),
            Ft.isOptInMode || !Ft.isOptInMode && !to.isAlertBoxClosedAndValid())
                Bo.setAlertBoxClosed(!0),
                Rt.PCTemplateUpgrade && Rt.PCenterUserIdTitleText && Rt.IsConsentLoggingEnabled && o.updateDataSubjectTimestamp();
            else if (to.isAlertBoxClosedAndValid()) {
                var e = zt(".onetrust-pc-dark-filter").el[0];
                e && "none" !== getComputedStyle(e).getPropertyValue("display") && zt(".onetrust-pc-dark-filter").fadeOut(400)
            }
            gn.csBtnGroup && o.showFltgCkStgButton()
        }
        ,
        this.bodyClickEvent = function(e) {
            var t = e.target;
            t.closest("#onetrust-banner-sdk") || t.closest("#onetrust-pc-sdk") || t.closest(".onetrust-pc-dark-filter") || t.closest(".ot-sdk-show-settings") || t.closest(".optanon-show-settings") || t.closest(".optanon-toggle-display") || Lr.onClickCloseBanner(e)
        }
        ,
        this.bannerCloseButtonHandler = function(e) {
            if (void 0 === e && (e = !1),
            Lr.closeOptanonAlertBox(),
            Bt.moduleInitializer.MobileSDK)
                window.OneTrust.Close();
            else {
                var t = Mt.bannerCloseSource === f.ConfirmChoiceButton ? m.PC : m.Banner;
                Lr.close(e, t)
            }
            return !1
        }
        ,
        this.allowAllEventHandler = function(e) {
            void 0 === e && (e = !1),
            zt(document).off("keydown", Ar.shiftBannerFocus);
            var t = e ? "Preferences Allow All" : "Banner Accept Cookies";
            Bo.triggerGoogleAnalyticsEvent(Oo, t),
            o.allowAllEvent(!1, e),
            o.hideVendorsList()
        }
        ,
        this.allowAllEvent = function(e, t) {
            void 0 === e && (e = !1),
            void 0 === t && (t = !1),
            o.closeOptanonAlertBox(),
            Lr.allowAll(e, t)
        }
        ,
        this.rejectAllEventHandler = function(e) {
            void 0 === e && (e = !1),
            zt(document).off("keydown", Ar.shiftBannerFocus);
            var t = e ? "Preferences Reject All" : "Banner Reject All";
            Bo.triggerGoogleAnalyticsEvent(Oo, t),
            Bt.moduleInitializer.MobileSDK ? window.OneTrust.RejectAll() : (o.rejectAllEvent(!1, e),
            o.hideVendorsList())
        }
        ,
        this.rejectAllEvent = function(e, t) {
            void 0 === e && (e = !1),
            void 0 === t && (t = !1),
            o.closeOptanonAlertBox(),
            to.isIABCrossConsentEnabled() ? Ft.thirdPartyiFrameLoaded ? o.rejectAll(e, t) : Ft.thirdPartyiFramePromise.then(function() {
                o.rejectAll(e, t)
            }) : o.rejectAll(e, t)
        }
    }
    var Br, wr = (Er.prototype.insertCookiePolicyHtml = function() {
        if (zt(this.ONETRUST_COOKIE_POLICY).length) {
            var e, t = document.createDocumentFragment();
            if (gn.cookieListGroup) {
                var o = Rt.CookiesV2NewCookiePolicy ? ".ot-sdk-cookie-policy" : "#ot-sdk-cookie-policy-v2"
                  , n = document.createElement("div");
                zt(n).html(gn.cookieListGroup.html),
                n.removeChild(n.querySelector(o)),
                e = n.querySelector(".ot-sdk-cookie-policy"),
                Rt.useRTL && zt(e).attr("dir", "rtl")
            }
            e.querySelector("#cookie-policy-title").innerHTML = Rt.CookieListTitle || "",
            e.querySelector("#cookie-policy-description").innerHTML = Rt.CookieListDescription || "";
            var r = e.querySelector("section")
              , i = e.querySelector("section tbody tr")
              , s = null
              , a = null;
            Rt.CookiesV2NewCookiePolicy || (s = e.querySelector("section.subgroup"),
            a = e.querySelector("section.subgroup tbody tr"),
            zt(e).el.removeChild(e.querySelector("section.subgroup"))),
            zt(e).el.removeChild(e.querySelector("section")),
            !zt(this.COOKIE_POLICY_SELECTOR).length && zt(this.OPTANON_POLICY_SELECTOR).length ? zt(this.OPTANON_POLICY_SELECTOR).append('<div id="ot-sdk-cookie-policy"></div>') : (zt(this.COOKIE_POLICY_SELECTOR).html(""),
            zt(this.OPTANON_POLICY_SELECTOR).html(""));
            for (var l = 0, c = Rt.Groups; l < c.length; l++) {
                var d = c[l]
                  , u = {
                    json: Rt,
                    group: d,
                    sectionTemplate: r,
                    tableRowTemplate: i,
                    cookieList: e,
                    fragment: t
                };
                if (Rt.CookiesV2NewCookiePolicy)
                    this.insertGroupHTMLV2(u);
                else if (this.insertGroupHTML(u),
                d.ShowSubgroup)
                    for (var p = 0, h = d.SubGroups; p < h.length; p++) {
                        var g = h[p]
                          , C = {
                            json: Rt,
                            group: g,
                            sectionTemplate: s,
                            tableRowTemplate: a,
                            cookieList: e,
                            fragment: t
                        };
                        this.insertGroupHTML(C)
                    }
            }
        }
    }
    ,
    Er.prototype.insertGroupHTMLV2 = function(e) {
        function t(e) {
            return c.querySelector(e)
        }
        var o = this
          , n = e.json
          , r = e.group
          , i = e.sectionTemplate
          , s = e.tableRowTemplate
          , a = e.cookieList
          , l = e.fragment
          , c = i.cloneNode(!0)
          , d = r.SubGroups;
        zt(t("tbody")).html("");
        var u = r.Hosts.slice()
          , p = r.FirstPartyCookies.slice()
          , h = u.length || p.length ? r.GroupName : "";
        if (r.ShowSubgroup && d.length) {
            var g = c.querySelector("section.ot-sdk-subgroup ul li");
            d.forEach(function(e) {
                var t = g.cloneNode(!0);
                u = u.concat(e.Hosts),
                p = p.concat(e.FirstPartyCookies),
                (e.Hosts.length || e.FirstPartyCookies.length) && (h += "," + e.GroupName),
                zt(t.querySelector(".ot-sdk-cookie-policy-group")).html(e.GroupName),
                zt(t.querySelector(".ot-sdk-cookie-policy-group-desc")).html(o.groupsClass.safeFormattedGroupDescription(e)),
                zt(g.parentElement).append(t)
            }),
            c.querySelector("section.ot-sdk-subgroup ul").removeChild(g)
        } else
            c.removeChild(c.querySelector("section.ot-sdk-subgroup"));
        n.IsLifespanEnabled ? zt(t("th.ot-life-span")).el.innerHTML = n.LifespanText : zt(t("thead tr")).el.removeChild(zt(t("th.ot-life-span")).el),
        zt(t("th.ot-cookies")).el.innerHTML = n.CookiesText,
        zt(t("th.ot-host")).el.innerHTML = n.CategoriesText,
        zt(t("th.ot-cookies-type")).el.innerHTML = n.CookiesUsedText;
        var C = this.transformFirstPartyCookies(p, u, r)
          , y = !1;
        C.some(function(e) {
            return e.Description
        }) ? y = !0 : zt(t("thead tr")).el.removeChild(zt(t("th.ot-host-description")).el),
        zt(t(".ot-sdk-cookie-policy-group")).html(r.GroupName),
        zt(t(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(r)),
        this.insertHostHtmlV2({
            json: n,
            hosts: C,
            tableRowTemplate: s,
            showHostDescription: y,
            st: t
        }),
        0 === C.length ? c.removeChild(c.querySelector("table")) : zt(t("caption")).el.innerHTML = h,
        zt(a).append(c),
        zt(l).append(a),
        zt(this.COOKIE_POLICY_SELECTOR).append(l)
    }
    ,
    Er.prototype.insertHostHtmlV2 = function(e) {
        for (var d, u = e.json, t = e.hosts, p = e.tableRowTemplate, h = e.showHostDescription, g = e.st, C = "data-label", y = ".ot-host-td", o = function(e) {
            function t(e) {
                return o.querySelector(e)
            }
            var o = p.cloneNode(!0);
            zt(t(".ot-cookies-td span")).text(""),
            zt(t(".ot-life-span-td span")).text(""),
            zt(t(".ot-cookies-type span")).text(""),
            zt(t(".ot-cookies-td .ot-cookies-td-content")).html(""),
            zt(t(y)).html(""),
            zt(t(".ot-host-description-td")).html('<span class="ot-mobile-border"></span><p>' + e.Description + "</p> ");
            for (var n = [], r = [], i = 0, s = e.Cookies; i < s.length; i++) {
                var a = s[i];
                (d = a).IsSession ? n.push(u.LifespanTypeText) : n.push(Kt.getDuration(d));
                var l = d.Name;
                e.Type && (l = '\n                    <a href="https://cookiepedia.co.uk/cookies/' + d.Name + '" \n                        rel="noopener" target="_blank" aria-label="' + d.Name + " " + Rt.NewWinTxt + '">\n                        ' + d.Name + "\n                    </a>"),
                r.push(l)
            }
            zt(t(y)).append('<span class="ot-mobile-border"></span>'),
            t(y).setAttribute(C, u.CategoriesText),
            t(".ot-cookies-td").setAttribute(C, u.CookiesText),
            t(".ot-cookies-type").setAttribute(C, u.CookiesUsedText),
            t(".ot-life-span-td").setAttribute(C, u.LifespanText);
            var c = e.DisplayName || e.HostName;
            zt(t(y)).append(e.Type ? c : '<a href="https://cookiepedia.co.uk/host/' + d.Host + '" rel="noopener" target="_blank" \n                        aria-label="' + c + " " + Rt.NewWinTxt + '">\n                        ' + c + "\n                        </a>"),
            t(".ot-cookies-td .ot-cookies-td-content").insertAdjacentHTML("beforeend", r.join(", ")),
            t(".ot-life-span-td .ot-life-span-td-content").innerText = n.join(", "),
            t(".ot-cookies-type .ot-cookies-type-td-content").innerText = e.Type ? Rt.firstPartyTxt : Rt.thirdPartyTxt,
            u.IsLifespanEnabled || o.removeChild(t("td.ot-life-span-td")),
            h || o.removeChild(t("td.ot-host-description-td")),
            zt(g("tbody")).append(o)
        }, n = 0, r = t; n < r.length; n++)
            o(r[n])
    }
    ,
    Er.prototype.insertGroupHTML = function(e) {
        function t(e) {
            return c.querySelector(e)
        }
        var o, n = e.json, r = e.group, i = e.sectionTemplate, s = e.tableRowTemplate, a = e.cookieList, l = e.fragment, c = i.cloneNode(!0);
        zt(t("caption")).el.innerHTML = r.GroupName,
        zt(t("tbody")).html(""),
        zt(t("thead tr")),
        n.IsLifespanEnabled ? zt(t("th.life-span")).el.innerHTML = n.LifespanText : zt(t("thead tr")).el.removeChild(zt(t("th.life-span")).el),
        zt(t("th.cookies")).el.innerHTML = n.CookiesText,
        zt(t("th.host")).el.innerHTML = n.CategoriesText;
        var d = !1;
        if (r.Hosts.some(function(e) {
            return e.description
        }) ? d = !0 : zt(t("thead tr")).el.removeChild(zt(t("th.host-description")).el),
        zt(t(".ot-sdk-cookie-policy-group")).html(r.GroupName),
        zt(t(".ot-sdk-cookie-policy-group-desc")).html(this.groupsClass.safeFormattedGroupDescription(r)),
        0 < r.FirstPartyCookies.length) {
            zt(t(".cookies-used-header")).html(n.CookiesUsedText),
            zt(t(".cookies-list")).html("");
            for (var u = 0; u < r.FirstPartyCookies.length; u++)
                o = r.FirstPartyCookies[u],
                zt(t(".cookies-list")).append("<li> " + Kt.getCookieLabel(o, n.AddLinksToCookiepedia) + " <li>")
        } else
            c.removeChild(t(".cookies-used-header")),
            c.removeChild(t(".cookies-list"));
        this.insertHostHtmlV1({
            json: n,
            hosts: r.Hosts,
            tableRowTemplate: s,
            showHostDescription: d,
            st: t
        }),
        zt(a).append(c),
        zt(l).append(a),
        zt(this.COOKIE_POLICY_SELECTOR).append(l)
    }
    ,
    Er.prototype.insertHostHtmlV1 = function(e) {
        for (var d = e.json, t = e.hosts, u = e.tableRowTemplate, p = e.showHostDescription, h = e.st, o = function(e) {
            function t(e) {
                return o.querySelector(e)
            }
            var o = u.cloneNode(!0);
            zt(t(".cookies-td ul")).html(""),
            zt(t(".life-span-td ul")).html(""),
            zt(t(".host-td")).html(""),
            zt(t(".host-description-td")).html('<span class="ot-mobile-border"></span><p>' + e.Description + "</p> ");
            for (var n = 0, r = 0, i = e.Cookies; r < i.length; r++) {
                var s = i[r]
                  , a = "";
                a = s.IsSession ? d.LifespanTypeText : 0 === s.Length ? "<1 " + d.LifespanDurationText || d.PCenterVendorListLifespanDays : s.Length + " " + d.LifespanDurationText || d.PCenterVendorListLifespanDays;
                var l = d.IsLifespanEnabled ? "&nbsp;(" + a + ")" : "";
                if (zt(t(".cookies-td ul")).append("<li> " + s.Name + " " + l + " </li>"),
                d.IsLifespanEnabled) {
                    var c = s.Length ? s.Length + " days" : "N/A";
                    zt(t(".life-span-td ul")).append("<li>" + c + "</li>")
                }
                0 === n && (zt(t(".host-td")).append('<span class="ot-mobile-border"></span>'),
                zt(t(".host-td")).append('<a href="https://cookiepedia.co.uk/host/' + s.Host + '" rel="noopener" target="_blank"\n                        aria-label="' + (e.DisplayName || e.HostName) + " " + Rt.NewWinTxt + '">' + (e.DisplayName || e.HostName) + "</a>")),
                n++
            }
            p || o.removeChild(t("td.host-description-td")),
            zt(h("tbody")).append(o)
        }, n = 0, r = t; n < r.length; n++)
            o(r[n]);
        0 === t.length && zt(h("table")).el.removeChild(zt(h("thead")).el)
    }
    ,
    Er.prototype.transformFirstPartyCookies = function(e, t, o) {
        var n = this
          , r = t.slice();
        e.forEach(function(e) {
            n.populateHostGroup(e, r, Rt.firstPartyTxt)
        });
        var i = o.GeneralVendorsIds;
        this.populateGenVendor(i, o, r);
        var s = o.SubGroups;
        return s.length && s.forEach(function(e) {
            var t = e.GeneralVendorsIds;
            n.populateGenVendor(t, e, r)
        }),
        r
    }
    ,
    Er.prototype.populateGenVendor = function(e, o, n) {
        var r = this;
        e.length && e.forEach(function(t) {
            var e = Rt.GeneralVendors.find(function(e) {
                return e.VendorCustomId === t
            });
            e.Cookies.length && e.Cookies.forEach(function(e) {
                if (e.category === o.GroupName) {
                    var t = e.isThirdParty ? "" : Rt.firstPartyTxt;
                    r.populateHostGroup(e, n, t)
                }
            })
        })
    }
    ,
    Er.prototype.populateHostGroup = function(t, e, o) {
        e.some(function(e) {
            if (e.HostName === t.Host && e.Type === o)
                return e.Cookies.push(t),
                !0
        }) || e.unshift({
            HostName: t.Host,
            DisplayName: t.Host,
            HostId: "",
            Description: "",
            Type: o,
            Cookies: [t]
        })
    }
    ,
    Er);
    function Er() {
        this.groupsClass = Sn,
        this.COOKIE_POLICY_SELECTOR = "#ot-sdk-cookie-policy",
        this.OPTANON_POLICY_SELECTOR = "#optanon-cookie-policy",
        this.ONETRUST_COOKIE_POLICY = "#ot-sdk-cookie-policy, #optanon-cookie-policy"
    }
    var xr, Gr = (Or.prototype.initBanner = function() {
        this.canImpliedConsentLandingPage(),
        Bt.moduleInitializer.CookieSPAEnabled ? zt(window).on("otloadbanner", this.windowLoadBanner.bind(this)) : zt(window).one("otloadbanner", this.windowLoadBanner.bind(this))
    }
    ,
    Or.prototype.insertCSBtnHtmlAndCss = function(e) {
        document.getElementById("onetrust-style").innerHTML += gn.csBtnGroup.css;
        var t = document.createElement("div");
        zt(t).html(gn.csBtnGroup.html);
        var o = t.querySelector("#ot-sdk-btn-floating");
        e && o && zt(o).removeClass("ot-hide"),
        zt("#onetrust-consent-sdk").append(o),
        Rt.cookiePersistentLogo && (Rt.cookiePersistentLogo.includes("ot_guard_logo.svg") ? this.applyPersistentSvgOnDOM() : zt(".ot-floating-button__front, .ot-floating-button__back").addClass("custom-persistent-icon"))
    }
    ,
    Or.prototype.applyPersistentSvgOnDOM = function() {
        return d(this, void 0, void 0, function() {
            var t;
            return g(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, un.getPersistentCookieSvg()];
                case 1:
                    return t = e.sent(),
                    zt(this.FLOATING_COOKIE_FRONT_BTN).html(t),
                    Ar.otGuardLogoResolve(!0),
                    [2]
                }
            })
        })
    }
    ,
    Or.prototype.canImpliedConsentLandingPage = function() {
        this.isImpliedConsent() && !Io.isLandingPage() && "true" === xt.readCookieParam(Oe.OPTANON_CONSENT, _e) && this.checkForRefreshCloseImplied()
    }
    ,
    Or.prototype.isImpliedConsent = function() {
        return Rt.ConsentModel && "implied consent" === Rt.ConsentModel.Name.toLowerCase()
    }
    ,
    Or.prototype.checkForRefreshCloseImplied = function() {
        Lr.closeOptanonAlertBox(),
        Lr.close(!0)
    }
    ,
    Or.prototype.hideCustomHtml = function() {
        var e = document.getElementById("onetrust-banner-sdk");
        e && wt(e, "display: none;")
    }
    ,
    Or.prototype.windowLoadBanner = function() {
        return d(this, void 0, void 0, function() {
            var t, o, n, r, i, s, a, l, c, d;
            return g(this, function(e) {
                switch (e.label) {
                case 0:
                    return this.core.substitutePlainTextScriptTags(),
                    t = Bt.moduleInitializer,
                    zt("#onetrust-consent-sdk").length ? n = document.getElementById("onetrust-consent-sdk") : (n = document.createElement("div"),
                    zt(n).attr("id", "onetrust-consent-sdk"),
                    zt(document.body).append(n)),
                    zt(".onetrust-pc-dark-filter").length || (o = document.createElement("div"),
                    zt(o).attr("class", "onetrust-pc-dark-filter"),
                    zt(o).attr("class", "ot-hide"),
                    zt(o).attr("class", "ot-fade-in"),
                    n.firstChild ? n.insertBefore(o, n.firstChild) : zt(n).append(o)),
                    Rt.IsIabEnabled && this.iab.updateIabVariableReference(),
                    r = to.isAlertBoxClosedAndValid(),
                    i = Rt.ShowAlertNotice && !r && !Rt.NoBanner && !Mt.hideBanner,
                    s = Rt.ShowAlertNotice && !r && Rt.NoBanner,
                    Mt.ntfyRequired ? (this.hideCustomHtml(),
                    nr.init(),
                    nr.changeState()) : i ? Ar.initializeAlartHtmlAndHandler() : this.hideCustomHtml(),
                    t.IsSuppressPC || (Nn.insertPcHtml(),
                    Ar.initialiseConsentNoticeHandlers(),
                    Rt.IsIabEnabled && this.iab.InitializeVendorList()),
                    t.RemoteActionsEnabled && ((a = document.getElementById("hbbtv")) && a.remove(),
                    (l = document.createElement("script")).id = "hbbtv",
                    l.src = Mt.storageBaseURL + "/scripttemplates/" + Bt.moduleInitializer.Version + "/hbbtv.js",
                    l.type = "text/javascript",
                    zt(document.body).append(l)),
                    this.insertCSBtn(!i),
                    s ? [4, Ar.toggleInfoDisplay()] : [3, 2];
                case 1:
                    e.sent(),
                    e.label = 2;
                case 2:
                    return Ar.insertCookieSettingText(),
                    c = zt(this.FLOATING_COOKIE_BTN),
                    d = zt(this.FLOATING_COOKIE_FRONT_BTN),
                    c.length && (c.attr("title", Rt.CookieSettingButtonText),
                    d.el[0].setAttribute("aria-label", Rt.AriaOpenPreferences)),
                    xr.insertTrackigTechOrCookiePolicy(),
                    Lr.executeOptanonWrapper(),
                    xt.readCookieParam(Oe.OPTANON_CONSENT, go) || ho.writeGrpParam(Oe.OPTANON_CONSENT),
                    xt.readCookieParam(Oe.OPTANON_CONSENT, Co) || ho.writeHstParam(Oe.OPTANON_CONSENT),
                    Mt.showGeneralVendors && !xt.readCookieParam(Oe.OPTANON_CONSENT, yo) && ho.writeGenVenCookieParam(Oe.OPTANON_CONSENT),
                    Mt.vsIsActiveAndOptOut && !xt.readCookieParam(Oe.OPTANON_CONSENT, fo) && ho.writeVSConsentCookieParam(Oe.OPTANON_CONSENT),
                    i && mn.setBannerFocus(),
                    [2]
                }
            })
        })
    }
    ,
    Or.prototype.insertCSBtn = function(e) {
        gn.csBtnGroup && (this.insertCSBtnHtmlAndCss(e),
        Ar.initFlgtCkStgBtnEventHandlers())
    }
    ,
    Or.prototype.insertTrackingTechnologies = function() {
        if (zt("#ot-sdk-cookie-policy, #optanon-cookie-policy").length)
            if (window.OnetrustCookiePolicy && window.OnetrustCookiePolicy.InsertCookiePolicyHtml)
                window.OnetrustCookiePolicy.InsertCookiePolicyHtml(Kt, Rt, zt);
            else {
                var e = document.createElement("script");
                e.id = "cookie-policy-script",
                e.onload = function() {
                    return window.OnetrustCookiePolicy.InsertCookiePolicyHtml(Kt, Rt, zt)
                }
                ,
                e.type = "text/javascript",
                e.src = Mt.storageBaseURL + "/scripttemplates/" + Bt.moduleInitializer.Version + "/trackingTechnologies.js",
                document.head.appendChild(e)
            }
    }
    ,
    Or.prototype.insertTrackigTechOrCookiePolicy = function() {
        Bt.fp.CookieV2TrackingTechnologies ? xr.insertTrackingTechnologies() : Br.insertCookiePolicyHtml()
    }
    ,
    Or);
    function Or() {
        this.iab = Vn,
        this.core = In,
        this.FLOATING_COOKIE_BTN = "#ot-sdk-btn-floating",
        this.FLOATING_COOKIE_FRONT_BTN = "#ot-sdk-btn-floating .ot-floating-button__front .ot-floating-button__open"
    }
    var Nr, Dr = (Hr.prototype.initialiseLandingPath = function() {
        var e = to.needReconsent();
        if (Io.isLandingPage())
            Io.setLandingPathParam(location.href);
        else {
            if (e && !to.awaitingReconsent())
                return Io.setLandingPathParam(location.href),
                void xt.writeCookieParam(Oe.OPTANON_CONSENT, _e, !0);
            e || xt.writeCookieParam(Oe.OPTANON_CONSENT, _e, !1),
            Io.setLandingPathParam(xe),
            Ft.isSoftOptInMode && !Bt.moduleInitializer.MobileSDK && Bo.setAlertBoxClosed(!0),
            Rt.NextPageCloseBanner && Rt.ShowAlertNotice && Lr.nextPageCloseBanner()
        }
    }
    ,
    Hr);
    function Hr() {}
    var Fr, Rr = (qr.prototype.IsAlertBoxClosedAndValid = function() {
        return to.isAlertBoxClosedAndValid()
    }
    ,
    qr.prototype.LoadBanner = function() {
        Bo.loadBanner()
    }
    ,
    qr.prototype.Init = function(e) {
        void 0 === e && (e = !1),
        Le.insertViewPortTag(),
        gn.ensureHtmlGroupDataInitialised(),
        Mn.updateGtmMacros(!1),
        Nr.initialiseLandingPath(),
        e || pr.initialiseCssReferences()
    }
    ,
    qr.prototype.FetchAndDownloadPC = function() {
        Ar.fetchAndSetupPC()
    }
    ,
    qr.prototype.ToggleInfoDisplay = function() {
        Bo.triggerGoogleAnalyticsEvent(Oo, Uo),
        Ar.toggleInfoDisplay()
    }
    ,
    qr.prototype.Close = function(e) {
        Ar.close(e)
    }
    ,
    qr.prototype.AllowAll = function(e) {
        Lr.allowAllEvent(e)
    }
    ,
    qr.prototype.RejectAll = function(e) {
        Lr.rejectAllEvent(e)
    }
    ,
    qr.prototype.setDataSubjectIdV2 = function(e, t) {
        void 0 === t && (t = !1),
        e && e.trim() && (e = e.replace(/ /g, ""),
        xt.writeCookieParam(Oe.OPTANON_CONSENT, Ve, e, !0),
        Mt.dsParams.isAnonymous = t)
    }
    ,
    qr.prototype.getDataSubjectId = function() {
        return xt.readCookieParam(Oe.OPTANON_CONSENT, Ve, !0)
    }
    ,
    qr.prototype.synchroniseCookieWithPayload = function(i) {
        var e = xt.readCookieParam(Oe.OPTANON_CONSENT, "groups")
          , t = Gt.strToArr(e)
          , s = [];
        t.forEach(function(e) {
            var t = e.split(":")
              , o = no.getGroupById(t[0])
              , n = Gt.findIndex(i, function(e) {
                return e.Id === o.PurposeId
            })
              , r = i[n];
            r ? r.TransactionType === Ne ? (s.push(t[0] + ":1"),
            o.Parent ? Ar.toggleSubCategory(null, o.CustomGroupId, !0, o.CustomGroupId) : Ar.toggleV2Category(null, o, !0, o.CustomGroupId)) : (s.push(t[0] + ":0"),
            o.Parent ? Ar.toggleSubCategory(null, o.CustomGroupId, !1, o.CustomGroupId) : Ar.toggleV2Category(null, o, !1, o.CustomGroupId)) : s.push(t[0] + ":" + t[1])
        }),
        ho.writeGrpParam(Oe.OPTANON_CONSENT, s)
    }
    ,
    qr.prototype.getGeolocationData = function() {
        return Mt.userLocation
    }
    ,
    qr.prototype.TriggerGoogleAnalyticsEvent = function(e, t, o, n) {
        Bo.triggerGoogleAnalyticsEvent(e, t, o, n)
    }
    ,
    qr.prototype.ReconsentGroups = function() {
        var r = !1
          , e = xt.readCookieParam(Oe.OPTANON_CONSENT, "groups")
          , i = Gt.strToArr(e)
          , s = Gt.strToArr(e.replace(/:0|:1/g, ""))
          , a = !1
          , t = xt.readCookieParam(Oe.OPTANON_CONSENT, "hosts")
          , l = Gt.strToArr(t)
          , c = Gt.strToArr(t.replace(/:0|:1/g, ""))
          , d = ["inactive", "inactive landingpage", "do not track"];
        e && (Rt.Groups.forEach(function(e) {
            C(e.SubGroups, [e]).forEach(function(e) {
                var t = e.CustomGroupId
                  , o = Gt.indexOf(s, t);
                if (-1 !== o) {
                    var n = no.getGrpStatus(e).toLowerCase();
                    -1 < d.indexOf(n) && (r = !0,
                    i[o] = t + ("inactive landingpage" === n ? ":1" : ":0"))
                }
            })
        }),
        r && ho.writeGrpParam(Oe.OPTANON_CONSENT, i)),
        t && (Rt.Groups.forEach(function(e) {
            C(e.SubGroups, [e]).forEach(function(n) {
                n.Hosts.forEach(function(e) {
                    var t = Gt.indexOf(c, e.HostId);
                    if (-1 !== t) {
                        var o = no.getGrpStatus(n).toLowerCase();
                        -1 < d.indexOf(o) && (a = !0,
                        l[t] = e.HostId + ("inactive landingpage" === o ? ":1" : ":0"))
                    }
                })
            })
        }),
        a && ho.writeHstParam(Oe.OPTANON_CONSENT, l))
    }
    ,
    qr.prototype.SetAlertBoxClosed = function(e) {
        Bo.setAlertBoxClosed(e)
    }
    ,
    qr.prototype.GetDomainData = function() {
        return Ft.pubDomainData
    }
    ,
    qr.prototype.setGeoLocation = function(e, t) {
        void 0 === t && (t = ""),
        Mt.userLocation = {
            country: e,
            state: t
        }
    }
    ,
    qr.prototype.changeLang = function(t) {
        if (t !== Mt.lang) {
            var o = Bt.moduleInitializer;
            un.getLangJson(t).then(function(e) {
                e ? (Ft.init(e),
                gn.fetchAssets(t).then(function() {
                    var e = document.getElementById("onetrust-style");
                    e && (e.textContent = ""),
                    pr.initialiseCssReferences(),
                    o.IsSuppressPC && !Mt.isPCVisible || (Gt.removeChild(zt("#onetrust-pc-sdk").el),
                    Mt.vendorDomInit = !1,
                    Mt.genVendorDomInit = !1,
                    Nn.insertPcHtml(),
                    Ar.initialiseConsentNoticeHandlers(),
                    Rt.IsIabEnabled && Vn.InitializeVendorList(),
                    Mt.isPCVisible && Ar.restorePc());
                    var t = !0;
                    to.isAlertBoxClosedAndValid() || o.IsSuppressBanner && (!o.IsSuppressBanner || Mt.skipAddingHTML) || Rt.NoBanner || (Gt.removeChild(zt("#onetrust-banner-sdk").el),
                    Ar.initializeAlartHtmlAndHandler(),
                    t = !1),
                    Fr.initCookiePolicyAndSettings(),
                    Gt.removeChild(zt("#ot-sdk-btn-floating").el),
                    xr.insertCSBtn(t),
                    Fr.processedHtml = null
                })) : console.error("Language:" + t + " doesn't exist for the geo rule")
            })
        }
    }
    ,
    qr.prototype.initCookiePolicyAndSettings = function(e) {
        var t, o;
        void 0 === e && (e = !1),
        e && (null !== (t = document.querySelector(".ot-sdk-show-settings")) && void 0 !== t && t.removeEventListener("click", Ar.cookiesSettingsBoundListener),
        null !== (o = document.querySelector(".optanon-toggle-display")) && void 0 !== o && o.removeEventListener("click", Ar.cookiesSettingsBoundListener)),
        Bt.fp.CookieV2TrackingTechnologies ? xr.insertTrackingTechnologies() : Br.insertCookiePolicyHtml(),
        Ar.insertCookieSettingText(e)
    }
    ,
    qr.prototype.showVendorsList = function() {
        Mt.pcLayer !== V.VendorList && (Ar.showAllVendors(),
        Bo.triggerGoogleAnalyticsEvent(Oo, zo))
    }
    ,
    qr.prototype.getTestLogData = function() {
        var e = Rt.Groups
          , t = Ft.pubDomainData
          , o = Bt.moduleInitializer.Version;
        console.info("%cWelcome to OneTrust Log", "padding: 8px; background-color: #43c233; color: white; font-style: italic; border: 1px solid black; font-size: 1.5em;"),
        console.info("Script is for: %c" + (t.Domain ? t.Domain : Rt.optanonCookieDomain), "padding: 4px 6px; font-style: italic; border: 2px solid #43c233; font-size: 12px;"),
        console.info("Script Version Published: " + o),
        console.info("The consent model is: " + t.ConsentModel.Name);
        var n = null !== to.alertBoxCloseDate();
        console.info("Consent has " + (n ? "" : "not ") + "been given " + (n ? "👍" : "🛑"));
        var r = [];
        e.forEach(function(e) {
            var t = "";
            t = e.Status && "always active" === e.Status.toLowerCase() ? "Always Active" : Sn.isGroupActive(e) ? "Active" : "Inactive",
            r.push({
                CustomGroupId: e.CustomGroupId,
                GroupName: e.GroupName,
                Status: t
            })
        }),
        console.groupCollapsed("Current Category Status"),
        console.table(r),
        console.groupEnd();
        var i = [];
        t.GeneralVendors.forEach(function(e) {
            i.push({
                CustomGroupId: e.VendorCustomId,
                Name: e.Name,
                Status: Fr.isCategoryActive(e.VendorCustomId) ? "active" : "inactive"
            })
        }),
        console.groupCollapsed("General Vendor Ids"),
        console.table(i),
        console.groupEnd();
        var s = Ft.getRegionRule()
          , a = Mt.userLocation
          , l = Bt.moduleInitializer.GeoRuleGroupName;
        Ft.conditionalLogicEnabled ? console.groupCollapsed("Geolocation, Template & Condition") : console.groupCollapsed("Geolocation and Template"),
        Mt.userLocation.country && console.info("The Geolocation is " + a.country.toUpperCase()),
        console.info("The Geolocation rule is " + s.Name),
        console.info("The GeolocationRuleGroup is " + l),
        Ft.canUseConditionalLogic ? (console.info("The Condition name is " + Ft.Condition.Name),
        console.info("The TemplateName is " + Ft.Condition.TemplateName)) : console.info("The TemplateName is " + s.TemplateName),
        console.groupEnd();
        var c = e.filter(function(e) {
            return Sn.isGroupActive(e) && "COOKIE" === e.Type
        });
        console.groupCollapsed("The cookies expected to be active if blocking has been implemented are"),
        c.forEach(function(e) {
            console.groupCollapsed(e.GroupName);
            var t = Fr.getAllFormatCookiesForAGroup(e);
            console.table(t, ["Name", "Host", "description"]),
            console.groupEnd()
        }),
        console.groupEnd()
    }
    ,
    qr.prototype.isCategoryActive = function(e) {
        return -1 !== window.OptanonActiveGroups.indexOf(e)
    }
    ,
    qr.prototype.getAllFormatCookiesForAGroup = function(e) {
        var t, o = [];
        return e.FirstPartyCookies.forEach(function(e) {
            return o.push({
                Name: e.Name,
                Host: e.Host,
                Description: e.description
            })
        }),
        (null === (t = e.Hosts) || void 0 === t ? void 0 : t.reduce(function(e, t) {
            return e.concat(JSON.parse(JSON.stringify(t.Cookies)))
        }, [])).forEach(function(e) {
            return o.push({
                Name: e.Name,
                Host: e.Host,
                Description: e.description
            })
        }),
        o
    }
    ,
    qr.prototype.updateSingularConsent = function(e, t) {
        Ft.apiSource = P.UpdateConsent;
        var o = t.split(":")[0]
          , n = t.split(":")[1]
          , r = Boolean(Number(n));
        e === gt ? "always active" === no.getGrpStatus(no.getGroupById(o)) || (Fr.updateConsentArray(Mt.groupsConsent, o, n),
        Lr.handleTogglesOnSingularConsentUpdate(e, o, r)) : e === Ct ? (Fr.updateConsentArray(Mt.hostsConsent, o, n),
        Lr.handleTogglesOnSingularConsentUpdate(e)) : e === yt ? (Mt.genVendorsConsent[o] = r,
        Lr.handleTogglesOnSingularConsentUpdate(e)) : e === ft && Lr.handleTogglesOnSingularConsentUpdate(e, o, r)
    }
    ,
    qr.prototype.vendorServiceEnabled = function() {
        return Mt.showVendorService
    }
    ,
    qr.prototype.updateGCM = function(e) {
        e || console.error("No callback passed to the UpdateGCM"),
        Ft.gcmUpdateCallback = e
    }
    ,
    qr.prototype.updateConsentArray = function(e, t, o) {
        var n = e.findIndex(function(e) {
            return e.includes(t + ":0") || e.includes(t + ":1")
        });
        -1 < n ? e[n] = t + ":" + o : e.push(t + ":" + o)
    }
    ,
    qr);
    function qr() {
        this.processedHtml = "",
        this.useGeoLocationService = !0,
        this.IsAlertBoxClosed = this.IsAlertBoxClosedAndValid,
        this.InitializeBanner = function() {
            return xr.initBanner()
        }
        ,
        this.getHTML = function() {
            return document.getElementById("onetrust-banner-sdk") || (Nn.insertPcHtml(),
            vr.insertAlertHtml()),
            Fr.processedHtml || (Fr.processedHtml = document.querySelector("#onetrust-consent-sdk").outerHTML),
            Fr.processedHtml
        }
        ,
        this.getCSS = function() {
            return pr.processedCSS
        }
        ,
        this.setConsentProfile = function(e) {
            if (e.customPayload) {
                var t = e.customPayload;
                t.Interaction && xt.writeCookieParam(Oe.OPTANON_CONSENT, we, t.Interaction)
            }
            Fr.setDataSubjectIdV2(e.identifier, e.isAnonymous),
            Fr.synchroniseCookieWithPayload(e.purposes),
            Lr.executeOptanonWrapper()
        }
        ,
        this.InsertScript = function(e, t, o, n, r, i) {
            var s, a = null != n && void 0 !== n, l = a && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
            if (Sn.canInsertForGroup(r, l) && !Gt.contains(Mt.srcExecGrps, r)) {
                Mt.srcExecGrpsTemp.push(r),
                a && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && Gt.empty(t);
                var c = document.createElement("script");
                switch (null != o && void 0 !== o && (s = !1,
                c.onload = c.onreadystatechange = function() {
                    s || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (s = !0,
                    o())
                }
                ),
                c.type = "text/javascript",
                c.src = e,
                i && (c.async = i),
                t) {
                case "head":
                    document.getElementsByTagName("head")[0].appendChild(c);
                    break;
                case "body":
                    document.getElementsByTagName("body")[0].appendChild(c);
                    break;
                default:
                    var d = document.getElementById(t);
                    d && (d.appendChild(c),
                    a && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && Gt.show(t))
                }
                if (a && void 0 !== n.makeElementsVisible)
                    for (var u = 0, p = n.makeElementsVisible; u < p.length; u++) {
                        var h = p[u];
                        Gt.show(h)
                    }
                if (a && void 0 !== n.deleteElements)
                    for (var g = 0, C = n.deleteElements; g < C.length; g++) {
                        h = C[g];
                        Gt.remove(h)
                    }
            }
        }
        ,
        this.InsertHtml = function(e, t, o, n, r) {
            var i = null != n && void 0 !== n
              , s = i && void 0 !== n.ignoreGroupCheck && !0 === n.ignoreGroupCheck;
            if (Sn.canInsertForGroup(r, s) && !Gt.contains(Mt.htmlExecGrps, r)) {
                if (Mt.htmlExecGrpsTemp.push(r),
                i && void 0 !== n.deleteSelectorContent && !0 === n.deleteSelectorContent && Gt.empty(t),
                Gt.appendTo(t, e),
                i && void 0 !== n.makeSelectorVisible && !0 === n.makeSelectorVisible && Gt.show(t),
                i && void 0 !== n.makeElementsVisible)
                    for (var a = 0, l = n.makeElementsVisible; a < l.length; a++) {
                        var c = l[a];
                        Gt.show(c)
                    }
                if (i && void 0 !== n.deleteElements)
                    for (var d = 0, u = n.deleteElements; d < u.length; d++) {
                        c = u[d];
                        Gt.remove(c)
                    }
                null != o && void 0 !== o && o()
            }
        }
        ,
        this.BlockGoogleAnalytics = function(e, t) {
            window["ga-disable-" + e] = !Sn.canInsertForGroup(t)
        }
    }
    var Mr, Ur, jr, zr, Kr = (o(Ur = Jr, jr = Mr = Rr),
    Ur.prototype = null === jr ? Object.create(jr) : (Wr.prototype = jr.prototype,
    new Wr),
    Jr.prototype.Close = function(e) {
        Lr.closeBanner(!1),
        window.location.href = "http://otsdk//consentChanged"
    }
    ,
    Jr.prototype.RejectAll = function(e) {
        Lr.rejectAllEvent(),
        window.location.href = "http://otsdk//consentChanged"
    }
    ,
    Jr.prototype.AllowAll = function(e) {
        Lr.AllowAllV2(e),
        window.location.href = "http://otsdk//consentChanged"
    }
    ,
    Jr.prototype.ToggleInfoDisplay = function() {
        Ar.toggleInfoDisplay()
    }
    ,
    Jr);
    function Wr() {
        this.constructor = Ur
    }
    function Jr() {
        var e = null !== Mr && Mr.apply(this, arguments) || this;
        return e.mobileOnlineURL = Ft.mobileOnlineURL,
        e
    }
    var Yr, Xr = (Qr.prototype.syncConsentProfile = function(e, t, o) {
        void 0 === o && (o = !1),
        e ? (Mt.dsParams.id = e.trim(),
        Fr.setDataSubjectIdV2(e)) : e = Mt.dsParams.id,
        o && (Mt.dsParams.isAnonymous = o),
        t = t || Mt.dsParams.token,
        e && t && un.getConsentProfile(e, t).then(function(e) {
            return Yr.consentProfileCallback(e)
        })
    }
    ,
    Qr.prototype.getConsentValue = function(e) {
        var t = null;
        switch (e) {
        case k[k.ACTIVE]:
        case k[k.ALWAYS_ACTIVE]:
            t = z.Active;
            break;
        case k[k.EXPIRED]:
        case k[k.OPT_OUT]:
        case k[k.PENDING]:
        case k[k.WITHDRAWN]:
            t = z.InActive
        }
        return t
    }
    ,
    Qr.prototype.isCookieGroup = function(e) {
        return !/IABV2|ISPV2|IFEV2|ISFV2/.test(e)
    }
    ,
    Qr.prototype.syncPreferences = function(e, t) {
        void 0 === t && (t = !1);
        var o = xt.getCookie(Oe.ALERT_BOX_CLOSED)
          , n = o
          , r = !1
          , i = !0
          , s = !1
          , a = Gt.strToArr(xt.readCookieParam(Oe.OPTANON_CONSENT, "groups"));
        if (e && e.preferences.length)
            for (var l = 0, c = e.preferences; l < c.length; l++) {
                var d = c[l]
                  , u = d.status === k[k.NO_CONSENT]
                  , p = Ft.domainGrps[d.id];
                if (p)
                    if (-1 < Mt.grpsSynced.indexOf(p) && (Mt.syncedValidGrp = !0),
                    u && a.length) {
                        for (var h = -1, g = 0; g < a.length; g++)
                            if (a[g].split(":")[0] === p) {
                                h = g;
                                break
                            }
                        -1 < h && (a.splice(h, 1),
                        Mt.grpsSynced.push(p))
                    } else if (!u && (!o || new Date(d.lastInteractionDate) > new Date(n))) {
                        var C = this.getConsentValue(d.status);
                        if (s = !0,
                        o = d.lastInteractionDate,
                        !t && this.isCookieGroup(p)) {
                            var y = p + ":" + C
                              , f = -1;
                            for (g = 0; g < a.length; g++) {
                                var v = a[g].split(":");
                                if (v[0] === p) {
                                    v[1] !== C && (a[g] = y,
                                    r = !0),
                                    f = g;
                                    break
                                }
                            }
                            -1 === f && (a.push(y),
                            r = !0)
                        }
                    }
            }
        else
            i = !1;
        return {
            alertBoxCookieVal: o,
            groupsConsent: a,
            profileFound: i,
            syncRequired: r,
            syncOnlyDate: s = s && !r
        }
    }
    ,
    Qr.prototype.hideBannerAndPc = function() {
        var e = Kt.isBannerVisible();
        e && Kt.hideBanner(),
        (e || Mt.isPCVisible) && zn.hideConsentNoticeV2()
    }
    ,
    Qr.prototype.setOptanonConsentCookie = function(e, t) {
        if (e.syncRequired) {
            xt.writeCookieParam(Oe.OPTANON_CONSENT, "groups", e.groupsConsent.toString());
            var o = xt.getCookie(Oe.OPTANON_CONSENT);
            xt.setCookie(Oe.OPTANON_CONSENT, o, t, !1, new Date(e.alertBoxCookieVal))
        }
    }
    ,
    Qr.prototype.setIabCookie = function(e, t, o) {
        o.syncGroups && o.syncGroups[Mt.syncGrpId] && o.syncGroups[Mt.syncGrpId].tcStringV2 ? xt.getCookie(Oe.EU_PUB_CONSENT) !== o.syncGroups[Mt.syncGrpId].tcStringV2 && (e.syncRequired = !0,
        xt.setCookie(Oe.EU_PUB_CONSENT, o.syncGroups[Mt.syncGrpId].tcStringV2, t, !1, new Date(e.alertBoxCookieVal))) : e.profileFound = !1
    }
    ,
    Qr.prototype.setAddtlVendorsCookie = function(e, t) {
        Rt.UseGoogleVendors && (xt.getCookie(Oe.ADDITIONAL_CONSENT_STRING) || xt.setCookie(Oe.ADDITIONAL_CONSENT_STRING, Mt.addtlConsentVersion, t, !1, new Date(e.alertBoxCookieVal)))
    }
    ,
    Qr.prototype.createTrans = function() {
        var e = xt.readCookieParam(Oe.OPTANON_CONSENT, "iType");
        so.createConsentTxn(!1, U[e], !1, !0)
    }
    ,
    Qr.prototype.updateGrpsDom = function() {
        for (var e = function(e) {
            var t = e.getAttribute("data-optanongroupid")
              , o = no.getGroupById(t)
              , n = !0
              , r = Gt.findIndex(Mt.groupsConsent, function(e) {
                return e.split(":")[0] === t
            });
            -1 < r && Mt.groupsConsent[r].split(":")[1] === z.InActive && (n = !1),
            Sn.toggleGrpElements(e, o, n),
            Sn.toogleSubGroupElement(e, n, !1, !0),
            Sn.toogleSubGroupElement(e, n, !0, !0)
        }, t = 0, o = Sn.getAllGroupElements(); t < o.length; t++)
            e(o[t])
    }
    ,
    Qr.prototype.updateVendorsDom = function() {
        Rt.IsIabEnabled && (Vn.updateIabVariableReference(),
        sr.toggleVendorConsent(),
        Ft.legIntSettings.PAllowLI && (Ft.legIntSettings.PShowLegIntBtn ? sr.updateVendorLegBtns() : sr.toggleVendorLi()))
    }
    ,
    Qr.prototype.consentProfileCallback = function(r) {
        return d(this, void 0, void 0, function() {
            var t, o, n;
            return g(this, function(e) {
                switch (e.label) {
                case 0:
                    return t = this.syncPreferences(r),
                    o = Rt.ReconsentFrequencyDays,
                    n = to.isIABCrossConsentEnabled(),
                    this.setOptanonConsentCookie(t, o),
                    Rt.IsIabEnabled && !n && this.setIabCookie(t, o, r),
                    t.syncOnlyDate && (to.syncAlertBoxCookie(t.alertBoxCookieVal),
                    to.syncCookieExpiry()),
                    t.syncRequired && t.profileFound ? (Mt.syncRequired = t.syncRequired,
                    to.syncAlertBoxCookie(t.alertBoxCookieVal),
                    this.setAddtlVendorsCookie(t, o),
                    this.hideBannerAndPc(),
                    gn.initGrpsAndHosts(),
                    !n && Rt.NtfyConfig.ShowNtfy && to.isAlertBoxClosedAndValid() ? [4, nr.getContent()] : [3, 2]) : [3, 3];
                case 1:
                    e.sent(),
                    nr.init(),
                    nr.changeState(),
                    e.label = 2;
                case 2:
                    return Rt.IsIabEnabled && (to.setIABCookieData(),
                    co.populateVendorAndPurposeFromCookieData()),
                    this.updateGrpsDom(),
                    this.updateVendorsDom(),
                    Io.setLandingPathParam(xe),
                    In.substitutePlainTextScriptTags(),
                    Mn.updateGtmMacros(!0),
                    Lr.executeOptanonWrapper(),
                    [3, 4];
                case 3:
                    !t.profileFound && t.alertBoxCookieVal && this.createTrans(),
                    e.label = 4;
                case 4:
                    return [2]
                }
            })
        })
    }
    ,
    Qr);
    function Qr() {}
    var $r, Zr = (ei.prototype.removeCookies = function() {
        xt.removePreview(),
        xt.removeOptanon(),
        xt.removeAlertBox(),
        xt.removeIab2(),
        xt.removeAddtlStr(),
        xt.removeVariant(),
        Mt.isPreview && $r.setPreviewCookie(),
        Mt.urlParams.get("otreset") && Mt.urlParams.set("otreset", "false");
        var e = window.location.pathname + "?" + Mt.urlParams.toString() + window.location.hash;
        $r.replaceHistory(e)
    }
    ,
    ei.prototype.setPreviewCookie = function() {
        var e = new Date;
        e.setTime(e.getTime() + 864e5);
        var t = Mt.geoFromUrl ? "&geo=" + Mt.geoFromUrl : ""
          , o = "expiry=" + e.toISOString() + t;
        xt.setCookie(Oe.OT_PREVIEW, o, 1, !1)
    }
    ,
    ei.prototype.bindStopPreviewEvent = function() {
        (window.attachEvent || window.addEventListener)("message", function(e) {
            return $r.onMessage(e)
        })
    }
    ,
    ei.prototype.replaceHistory = function(e) {
        history.pushState({}, "", e),
        location.reload()
    }
    ,
    ei.prototype.onMessage = function(e) {
        "string" == typeof e.data && e.data === $r.CLEAR_COOKIES && ($r.removeCookies(),
        e.source && e.source.postMessage && e.source.postMessage($r.CLEARED_COOKIES, e.origin))
    }
    ,
    ei);
    function ei() {
        this.CLEAR_COOKIES = "CLEAR_OT_COOKIES",
        this.CLEARED_COOKIES = "CLEARED_OT_COOKIES"
    }
    function ti(e) {
        if (e) {
            var t = window.atob(e);
            return Function('"use strict"; return ' + t)()
        }
    }
    Le.initPolyfill(),
    xt = new Ot,
    Kt = new Jt,
    Ft = new Dt,
    xo = new cn,
    $r = new Zr,
    function() {
        var e, t = window.otStubData;
        if (t) {
            Bt.moduleInitializer = t.domainData,
            Bt.fp = Bt.moduleInitializer.TenantFeatures,
            Mt.isAMP = t.isAmp,
            Mt.dataDomainId = t.domainId,
            Mt.isPreview = t.isPreview,
            Mt.urlParams = t.urlParams,
            Mt.isV2Stub = t.isV2Stub || !1,
            Ft.gtmUpdatedinStub = t.gtmUpdated,
            t.isReset ? $r.removeCookies() : t.isPreview && $r.setPreviewCookie(),
            Ft.setBannerScriptElement(t.stubElement),
            Ft.setRegionRule(t.regionRule),
            Bt.fp.CookieV2TargetedTemplates && (Ft.conditionalLogicEnabled = !(null === (e = Ft.getRegionRule().Conditions) || void 0 === e || !e.length),
            Ft.conditionalLogicEnabled && (function() {
                for (var e = Ft.getRegionRule(), t = 0; t < e.Conditions.length; t++)
                    try {
                        if (ti(e.Conditions[t].Expression))
                            return Ft.Condition = e.Conditions[t]
                    } catch (e) {
                        console.warn(e);
                        continue
                    }
                Ft.allConditionsFailed = !0
            }(),
            Ft.canUseConditionalLogic = !Ft.allConditionsFailed)),
            Mt.userLocation = t.userLocation,
            Mt.crossOrigin = t.crossOrigin,
            Ft.bannerDataParentURL = t.bannerBaseDataURL,
            Ft.mobileOnlineURL = C(Ft.mobileOnlineURL, t.mobileOnlineURL);
            var o = Ft.getRegionRule();
            Ft.multiVariantTestingEnabled = Bt.moduleInitializer.MultiVariantTestingEnabled && 0 < o.Variants.length && Kt.isDateCurrent(o.TestEndTime),
            Ft.otDataLayer = t.otDataLayer,
            Mt.grpsSynced = t.grpsSynced || [],
            Mt.isIabSynced = t.isIabSynced,
            Mt.isGacSynced = t.isGacSynced,
            Mt.syncRequired = t.isIabSynced || t.isGacSynced || t.grpsSynced && 0 < t.grpsSynced.length,
            Mt.consentPreferences = t.preferences,
            Mt.syncGrpId = t.syncGrpId,
            Mt.consentApi = t.consentApi,
            Mt.tenantId = t.tenantId,
            Mt.geoFromUrl = t.geoFromUrl,
            Mt.nonce = t.nonce,
            Mt.setAttributePolyfillIsActive = t.setAttributePolyfillIsActive,
            Mt.storageBaseURL = t.storageBaseURL,
            Ft.previewMode = t.previewMode,
            xo.populateLangSwitcherPlhdr(),
            window.otStubData = {
                userLocation: Mt.userLocation
            },
            window.OneTrustStub = null
        }
    }(),
    function() {
        d(this, void 0, void 0, function() {
            var t, o, n, r, i, s;
            return g(this, function(e) {
                switch (e.label) {
                case 0:
                    return no = new ro,
                    Sn = new An,
                    fn = new vn,
                    Vn = new Bn,
                    In = new Ln,
                    Lr = new _r,
                    Ar = new Tr,
                    Nn = new Rn,
                    vr = new kr,
                    xr = new Gr,
                    Bt.fp.CookieV2TrackingTechnologies || (Br = new wr),
                    pr = new hr,
                    mo = new bo,
                    gn = new Cn,
                    Mn = new Un,
                    Nr = new Dr,
                    Bo = new wo,
                    eo = new oo,
                    Yr = new Xr,
                    sr = new ar,
                    un = new pn,
                    mn = new bn,
                    zn = new tr,
                    xn = new Gn,
                    br = new Pr,
                    Bt.moduleInitializer.MobileSDK ? zr = new Kr : Fr = new Rr,
                    co = new uo,
                    Ft.setGCMcallback(),
                    t = Ft.getRegionRule(),
                    o = Ft.canUseConditionalLogic ? Ft.Condition.UseGoogleVendors : t.UseGoogleVendors,
                    "IAB2" !== Ft.getRegionRuleType() ? [3, 2] : [4, Promise.all([un.getLangJson(), un.fetchGvlObj(), o ? un.fetchGoogleVendors() : Promise.resolve(null), un.loadCMP()])];
                case 1:
                    return s = e.sent(),
                    n = s[0],
                    r = s[1],
                    i = s[2],
                    Mt.gvlObj = r,
                    Mt.addtlVendorsList = i ? i.vendors : null,
                    [3, 4];
                case 2:
                    return [4, un.getLangJson()];
                case 3:
                    n = e.sent(),
                    e.label = 4;
                case 4:
                    return function(r) {
                        d(this, void 0, void 0, function() {
                            var t, o, n;
                            return g(this, function(e) {
                                switch (e.label) {
                                case 0:
                                    return window.OneTrust = window.Optanon = Object.assign({}, window.OneTrust, function(e) {
                                        var t, o = Bt.moduleInitializer.MobileSDK;
                                        t = o ? zr : Fr;
                                        var n = {
                                            AllowAll: t.AllowAll,
                                            BlockGoogleAnalytics: t.BlockGoogleAnalytics,
                                            Close: t.Close,
                                            getCSS: t.getCSS,
                                            GetDomainData: t.GetDomainData,
                                            getGeolocationData: t.getGeolocationData,
                                            getHTML: t.getHTML,
                                            Init: t.Init,
                                            InitializeBanner: t.InitializeBanner,
                                            initializeCookiePolicyHtml: t.initCookiePolicyAndSettings,
                                            InsertHtml: t.InsertHtml,
                                            InsertScript: t.InsertScript,
                                            IsAlertBoxClosed: t.IsAlertBoxClosed,
                                            IsAlertBoxClosedAndValid: t.IsAlertBoxClosedAndValid,
                                            LoadBanner: t.LoadBanner,
                                            OnConsentChanged: Bo.OnConsentChanged,
                                            ReconsentGroups: t.ReconsentGroups,
                                            RejectAll: t.RejectAll,
                                            SetAlertBoxClosed: t.SetAlertBoxClosed,
                                            setGeoLocation: t.setGeoLocation,
                                            ToggleInfoDisplay: t.ToggleInfoDisplay,
                                            TriggerGoogleAnalyticsEvent: t.TriggerGoogleAnalyticsEvent,
                                            useGeoLocationService: t.useGeoLocationService,
                                            FetchAndDownloadPC: t.FetchAndDownloadPC,
                                            changeLanguage: t.changeLang,
                                            testLog: t.getTestLogData,
                                            UpdateConsent: t.updateSingularConsent,
                                            IsVendorServiceEnabled: t.vendorServiceEnabled,
                                            UpdateGCM: t.updateGCM
                                        };
                                        e.IsConsentLoggingEnabled && (n.getDataSubjectId = t.getDataSubjectId,
                                        n.setConsentProfile = t.setConsentProfile,
                                        n.setDataSubjectId = t.setDataSubjectIdV2,
                                        Mt.isV2Stub && (n.syncConsentProfile = Yr.syncConsentProfile));
                                        o && (n.mobileOnlineURL = t.mobileOnlineURL,
                                        n.otCookieData = Mt.otCookieData);
                                        e.IsIabEnabled && (n.updateConsentFromCookies = Bo.updateConsentFromCookie,
                                        n.getPingRequest = co.getPingRequestForTcf,
                                        n.getVendorConsentsRequestV2 = co.getVendorConsentsRequestV2,
                                        n.showVendorsList = t.showVendorsList);
                                        return n
                                    }(r.DomainData)),
                                    to.initializeBannerVariables(r),
                                    ho = new vo,
                                    So = new Ao,
                                    so = new ao,
                                    Cr = new yr,
                                    Io = new _o,
                                    cr = new dr,
                                    nr = new rr,
                                    function() {
                                        var o = window.OTExternalConsent;
                                        if (o && o.consentedDate && (o.groups || o.tcString || o.addtlString)) {
                                            var n = []
                                              , e = o.groups.split(",");
                                            e.forEach(function(e) {
                                                var t = e.split(":");
                                                n.push({
                                                    lastInteractionDate: o.consentedDate,
                                                    status: "1" === t[1] ? k[k.ACTIVE] : k[k.OPT_OUT],
                                                    id: t[0]
                                                }),
                                                Mt.grpsSynced.push(t[0])
                                            }),
                                            Mt.consentPreferences = {
                                                preferences: n,
                                                syncGroups: null
                                            },
                                            Mt.syncRequired = !0,
                                            ho.updateGroupsInCookie(Oe.OPTANON_CONSENT, e),
                                            xt.setCookie(Oe.ALERT_BOX_CLOSED, o.consentedDate, 365),
                                            o.tcString && (Mt.isIabSynced = !0,
                                            xt.setCookie(Oe.EU_PUB_CONSENT, o.tcString, 365)),
                                            o.addtlString && (Mt.isGacSynced = !0,
                                            xt.setCookie(Oe.ADDITIONAL_CONSENT_STRING, "" + o.addtlString, 365))
                                        }
                                    }(),
                                    Mt.isPreview && (to.syncOtPreviewCookie(),
                                    $r.bindStopPreviewEvent()),
                                    t = Yr.syncPreferences(Mt.consentPreferences, !0),
                                    (Mt.syncRequired || t.syncRequired) && to.syncAlertBoxCookie(t.alertBoxCookieVal),
                                    to.syncCookieExpiry(),
                                    o = window.OneTrust.dataSubjectParams || {},
                                    (Mt.dsParams = o).id && Fr.setDataSubjectIdV2(o.id, o.isAnonymous),
                                    Ft.multiVariantTestingEnabled && Ft.selectedVariant && xt.setCookie(Oe.SELECTED_VARIANT, Ft.selectedVariant.Id, Rt.ReconsentFrequencyDays),
                                    [4, co.initializeIABModule()];
                                case 1:
                                    return e.sent(),
                                    window.OneTrust.Init(!0),
                                    [4, gn.fetchAssets()];
                                case 2:
                                    return (e.sent(),
                                    xr.initBanner(),
                                    Bo.assetResolve(!0),
                                    pr.initialiseCssReferences(),
                                    n = to.isIABCrossConsentEnabled(),
                                    (Mt.syncedValidGrp || Mt.isIabSynced || Mt.isGacSynced) && !n && Rt.NtfyConfig.ShowNtfy && to.isAlertBoxClosedAndValid()) ? (Mt.ntfyRequired = !0,
                                    [4, nr.getContent()]) : [3, 4];
                                case 3:
                                    e.sent(),
                                    e.label = 4;
                                case 4:
                                    return n || window.OneTrust.LoadBanner(),
                                    [2]
                                }
                            })
                        })
                    }(n),
                    [2]
                }
            })
        })
    }()
}();
