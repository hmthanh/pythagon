/* JS */
gapi.loaded_0(function (_) {
    var window = this;
    var fa, ya, Ia, Ja, Ka;
    _.ea = function (a) {
        return function () {
            return _.ca[a].apply(this, arguments);
        };
    };
    _._DumpException = function (a) {
        throw a;
    };
    _.ca = [];
    fa = function (a) {
        var b = 0;
        return function () {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            };
        };
    };
    _.ta = function (a) {
        var b =
            "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: fa(a)
        };
    };
    _.wa =
        "function" == typeof Object.create ?
        Object.create :
        function (a) {
            var b = function () {};
            b.prototype = a;
            return new b();
        };
    if ("function" == typeof Object.setPrototypeOf) ya = Object.setPrototypeOf;
    else {
        var za;
        a: {
            var Aa = {
                    a: !0
                },
                Ga = {};
            try {
                Ga.__proto__ = Aa;
                za = Ga.a;
                break a;
            } catch (a) {}
            za = !1;
        }
        ya = za ?
            function (a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                return a;
            } :
            null;
    }
    _.Ha = ya;
    Ia =
        "function" == typeof Object.defineProperties ?
        Object.defineProperty :
        function (a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value);
        };
    Ja =
        "undefined" != typeof window && window === this ?
        this :
        "undefined" != typeof global && null != global ?
        global :
        this;
    Ka = function (a, b) {
        if (b) {
            var c = Ja;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e];
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d &&
                null != b &&
                Ia(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                });
        }
    };
    Ka("Array.prototype.find", function (a) {
        return a ?
            a :
            function (b, c) {
                a: {
                    var d = this;
                    d instanceof String && (d = String(d));
                    for (var e = d.length, f = 0; f < e; f++) {
                        var g = d[f];
                        if (b.call(c, g, f, d)) {
                            b = g;
                            break a;
                        }
                    }
                    b = void 0;
                }
                return b;
            };
    });
    var La = function (a, b, c) {
        if (null == a)
            throw new TypeError(
                "The 'this' value for String.prototype." +
                c +
                " must not be null or undefined"
            );
        if (b instanceof RegExp)
            throw new TypeError(
                "First argument to String.prototype." +
                c +
                " must not be a regular expression"
            );
        return a + "";
    };
    Ka("String.prototype.startsWith", function (a) {
        return a ?
            a :
            function (b, c) {
                var d = La(this, b, "startsWith"),
                    e = d.length,
                    f = b.length;
                c = Math.max(0, Math.min(c | 0, d.length));
                for (var g = 0; g < f && c < e;)
                    if (d[c++] != b[g++]) return !1;
                return g >= f;
            };
    });
    Ka("String.prototype.repeat", function (a) {
        return a ?
            a :
            function (b) {
                var c = La(this, null, "repeat");
                if (0 > b || 1342177279 < b)
                    throw new RangeError("Invalid count value");
                b |= 0;
                for (var d = ""; b;)
                    if ((b & 1 && (d += c), (b >>>= 1))) c += c;
                return d;
            };
    });
    var Ma = function () {
            Ma = function () {};
            Ja.Symbol || (Ja.Symbol = Na);
        },
        Oa = function (a, b) {
            this.$N = a;
            Ia(this, "description", {
                configurable: !0,
                writable: !0,
                value: b
            });
        };
    Oa.prototype.toString = function () {
        return this.$N;
    };
    var Na = (function () {
            function a(c) {
                if (this instanceof a)
                    throw new TypeError("Symbol is not a constructor");
                return new Oa("jscomp_symbol_" + (c || "") + "_" + b++, c);
            }
            var b = 0;
            return a;
        })(),
        Qa = function () {
            Ma();
            var a = Ja.Symbol.iterator;
            a || (a = Ja.Symbol.iterator = Ja.Symbol("Symbol.iterator"));
            "function" != typeof Array.prototype[a] &&
                Ia(Array.prototype, a, {
                    configurable: !0,
                    writable: !0,
                    value: function () {
                        return Pa(fa(this));
                    }
                });
            Qa = function () {};
        },
        Pa = function (a) {
            Qa();
            a = {
                next: a
            };
            a[Ja.Symbol.iterator] = function () {
                return this;
            };
            return a;
        },
        Sa = function (a, b) {
            Qa();
            a instanceof String && (a += "");
            var c = 0,
                d = {
                    next: function () {
                        if (c < a.length) {
                            var e = c++;
                            return {
                                value: b(e, a[e]),
                                done: !1
                            };
                        }
                        d.next = function () {
                            return {
                                done: !0,
                                value: void 0
                            };
                        };
                        return d.next();
                    }
                };
            d[Symbol.iterator] = function () {
                return d;
            };
            return d;
        };
    Ka("Array.prototype.keys", function (a) {
        return a ?
            a :
            function () {
                return Sa(this, function (b) {
                    return b;
                });
            };
    });
    Ka("Array.prototype.values", function (a) {
        return a ?
            a :
            function () {
                return Sa(this, function (b, c) {
                    return c;
                });
            };
    });
    Ka("Object.is", function (a) {
        return a ?
            a :
            function (b, c) {
                return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
            };
    });
    Ka("Array.prototype.includes", function (a) {
        return a ?
            a :
            function (b, c) {
                var d = this;
                d instanceof String && (d = String(d));
                var e = d.length;
                c = c || 0;
                for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                    var f = d[c];
                    if (f === b || Object.is(f, b)) return !0;
                }
                return !1;
            };
    });
    Ka("String.prototype.includes", function (a) {
        return a ?
            a :
            function (b, c) {
                return -1 !== La(this, b, "includes").indexOf(b, c || 0);
            };
    });
    var Ta = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    };
    Ka("WeakMap", function (a) {
        function b() {}

        function c(l) {
            var m = typeof l;
            return ("object" === m && null !== l) || "function" === m;
        }

        function d(l) {
            if (!Ta(l, f)) {
                var m = new b();
                Ia(l, f, {
                    value: m
                });
            }
        }

        function e(l) {
            var m = Object[l];
            m &&
                (Object[l] = function (n) {
                    if (n instanceof b) return n;
                    d(n);
                    return m(n);
                });
        }
        if (
            (function () {
                if (!a || !Object.seal) return !1;
                try {
                    var l = Object.seal({}),
                        m = Object.seal({}),
                        n = new a([
                            [l, 2],
                            [m, 3]
                        ]);
                    if (2 != n.get(l) || 3 != n.get(m)) return !1;
                    n["delete"](l);
                    n.set(m, 4);
                    return !n.has(l) && 4 == n.get(m);
                } catch (p) {
                    return !1;
                }
            })()
        )
            return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0,
            k = function (l) {
                this.ya = (g += Math.random() + 1).toString();
                if (l) {
                    l = _.ta(l);
                    for (var m; !(m = l.next()).done;)
                        (m = m.value), this.set(m[0], m[1]);
                }
            };
        k.prototype.set = function (l, m) {
            if (!c(l)) throw Error("a");
            d(l);
            if (!Ta(l, f)) throw Error("b`" + l);
            l[f][this.ya] = m;
            return this;
        };
        k.prototype.get = function (l) {
            return c(l) && Ta(l, f) ? l[f][this.ya] : void 0;
        };
        k.prototype.has = function (l) {
            return c(l) && Ta(l, f) && Ta(l[f], this.ya);
        };
        k.prototype["delete"] = function (l) {
            return c(l) && Ta(l, f) && Ta(l[f], this.ya) ? delete l[f][this.ya] : !1;
        };
        return k;
    });
    Ka("Map", function (a) {
        if (
            (function () {
                if (
                    !a ||
                    "function" != typeof a ||
                    !a.prototype.entries ||
                    "function" != typeof Object.seal
                )
                    return !1;
                try {
                    var k = Object.seal({
                            x: 4
                        }),
                        l = new a(_.ta([
                            [k, "s"]
                        ]));
                    if (
                        "s" != l.get(k) ||
                        1 != l.size ||
                        l.get({
                            x: 4
                        }) ||
                        l.set({
                            x: 4
                        }, "t") != l ||
                        2 != l.size
                    )
                        return !1;
                    var m = l.entries(),
                        n = m.next();
                    if (n.done || n.value[0] != k || "s" != n.value[1]) return !1;
                    n = m.next();
                    return n.done ||
                        4 != n.value[0].x ||
                        "t" != n.value[1] ||
                        !m.next().done ?
                        !1 :
                        !0;
                } catch (p) {
                    return !1;
                }
            })()
        )
            return a;
        Qa();
        var b = new WeakMap(),
            c = function (k) {
                this.nf = {};
                this.Te = f();
                this.size = 0;
                if (k) {
                    k = _.ta(k);
                    for (var l; !(l = k.next()).done;)
                        (l = l.value), this.set(l[0], l[1]);
                }
            };
        c.prototype.set = function (k, l) {
            k = 0 === k ? 0 : k;
            var m = d(this, k);
            m.list || (m.list = this.nf[m.id] = []);
            m.ne ?
                (m.ne.value = l) :
                ((m.ne = {
                        next: this.Te,
                        ej: this.Te.ej,
                        head: this.Te,
                        key: k,
                        value: l
                    }),
                    m.list.push(m.ne),
                    (this.Te.ej.next = m.ne),
                    (this.Te.ej = m.ne),
                    this.size++);
            return this;
        };
        c.prototype["delete"] = function (k) {
            k = d(this, k);
            return k.ne && k.list ?
                (k.list.splice(k.index, 1),
                    k.list.length || delete this.nf[k.id],
                    (k.ne.ej.next = k.ne.next),
                    (k.ne.next.ej = k.ne.ej),
                    (k.ne.head = null),
                    this.size--,
                    !0) :
                !1;
        };
        c.prototype.clear = function () {
            this.nf = {};
            this.Te = this.Te.ej = f();
            this.size = 0;
        };
        c.prototype.has = function (k) {
            return !!d(this, k).ne;
        };
        c.prototype.get = function (k) {
            return (k = d(this, k).ne) && k.value;
        };
        c.prototype.entries = function () {
            return e(this, function (k) {
                return [k.key, k.value];
            });
        };
        c.prototype.keys = function () {
            return e(this, function (k) {
                return k.key;
            });
        };
        c.prototype.values = function () {
            return e(this, function (k) {
                return k.value;
            });
        };
        c.prototype.forEach = function (k, l) {
            for (var m = this.entries(), n; !(n = m.next()).done;)
                (n = n.value), k.call(l, n[1], n[0], this);
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function (k, l) {
                var m = l && typeof l;
                "object" == m || "function" == m ?
                    b.has(l) ?
                    (m = b.get(l)) :
                    ((m = "" + ++g), b.set(l, m)) :
                    (m = "p_" + l);
                var n = k.nf[m];
                if (n && Ta(k.nf, m))
                    for (k = 0; k < n.length; k++) {
                        var p = n[k];
                        if ((l !== l && p.key !== p.key) || l === p.key)
                            return {
                                id: m,
                                list: n,
                                index: k,
                                ne: p
                            };
                    }
                return {
                    id: m,
                    list: n,
                    index: -1,
                    ne: void 0
                };
            },
            e = function (k, l) {
                var m = k.Te;
                return Pa(function () {
                    if (m) {
                        for (; m.head != k.Te;) m = m.ej;
                        for (; m.next != m.head;)
                            return (m = m.next), {
                                done: !1,
                                value: l(m)
                            };
                        m = null;
                    }
                    return {
                        done: !0,
                        value: void 0
                    };
                });
            },
            f = function () {
                var k = {};
                return (k.ej = k.next = k.head = k);
            },
            g = 0;
        return c;
    });
    Ka("Set", function (a) {
        if (
            (function () {
                if (
                    !a ||
                    "function" != typeof a ||
                    !a.prototype.entries ||
                    "function" != typeof Object.seal
                )
                    return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(_.ta([c]));
                    if (
                        !d.has(c) ||
                        1 != d.size ||
                        d.add(c) != d ||
                        1 != d.size ||
                        d.add({
                            x: 4
                        }) != d ||
                        2 != d.size
                    )
                        return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done ||
                        f.value[0] == c ||
                        4 != f.value[0].x ||
                        f.value[1] != f.value[0] ?
                        !1 :
                        e.next().done;
                } catch (g) {
                    return !1;
                }
            })()
        )
            return a;
        Qa();
        var b = function (c) {
            this.V = new Map();
            if (c) {
                c = _.ta(c);
                for (var d; !(d = c.next()).done;) this.add(d.value);
            }
            this.size = this.V.size;
        };
        b.prototype.add = function (c) {
            c = 0 === c ? 0 : c;
            this.V.set(c, c);
            this.size = this.V.size;
            return this;
        };
        b.prototype["delete"] = function (c) {
            c = this.V["delete"](c);
            this.size = this.V.size;
            return c;
        };
        b.prototype.clear = function () {
            this.V.clear();
            this.size = 0;
        };
        b.prototype.has = function (c) {
            return this.V.has(c);
        };
        b.prototype.entries = function () {
            return this.V.entries();
        };
        b.prototype.values = function () {
            return this.V.values();
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function (c, d) {
            var e = this;
            this.V.forEach(function (f) {
                return c.call(d, f, f, e);
            });
        };
        return b;
    });
    Ka("Array.from", function (a) {
        return a ?
            a :
            function (b, c, d) {
                c =
                    null != c ?
                    c :
                    function (k) {
                        return k;
                    };
                var e = [],
                    f =
                    "undefined" != typeof Symbol &&
                    Symbol.iterator &&
                    b[Symbol.iterator];
                if ("function" == typeof f) {
                    b = f.call(b);
                    for (var g = 0; !(f = b.next()).done;)
                        e.push(c.call(d, f.value, g++));
                } else
                    for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
                return e;
            };
    });
    Ka("Promise", function (a) {
        function b() {
            this.Oe = null;
        }

        function c(g) {
            return g instanceof e ?
                g :
                new e(function (k) {
                    k(g);
                });
        }
        if (a) return a;
        b.prototype.vG = function (g) {
            if (null == this.Oe) {
                this.Oe = [];
                var k = this;
                this.wG(function () {
                    k.PS();
                });
            }
            this.Oe.push(g);
        };
        var d = Ja.setTimeout;
        b.prototype.wG = function (g) {
            d(g, 0);
        };
        b.prototype.PS = function () {
            for (; this.Oe && this.Oe.length;) {
                var g = this.Oe;
                this.Oe = [];
                for (var k = 0; k < g.length; ++k) {
                    var l = g[k];
                    g[k] = null;
                    try {
                        l();
                    } catch (m) {
                        this.vR(m);
                    }
                }
            }
            this.Oe = null;
        };
        b.prototype.vR = function (g) {
            this.wG(function () {
                throw g;
            });
        };
        var e = function (g) {
            this.Ba = 0;
            this.Ff = void 0;
            this.Un = [];
            var k = this.$y();
            try {
                g(k.resolve, k.reject);
            } catch (l) {
                k.reject(l);
            }
        };
        e.prototype.$y = function () {
            function g(m) {
                return function (n) {
                    l || ((l = !0), m.call(k, n));
                };
            }
            var k = this,
                l = !1;
            return {
                resolve: g(this.OZ),
                reject: g(this.hj)
            };
        };
        e.prototype.OZ = function (g) {
            if (g === this)
                this.hj(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.s0(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var k = null != g;
                        break a;
                    case "function":
                        k = !0;
                        break a;
                    default:
                        k = !1;
                }
                k ? this.NZ(g) : this.$H(g);
            }
        };
        e.prototype.NZ = function (g) {
            var k = void 0;
            try {
                k = g.then;
            } catch (l) {
                this.hj(l);
                return;
            }
            "function" == typeof k ? this.t0(k, g) : this.$H(g);
        };
        e.prototype.hj = function (g) {
            this.WM(2, g);
        };
        e.prototype.$H = function (g) {
            this.WM(1, g);
        };
        e.prototype.WM = function (g, k) {
            if (0 != this.Ba) throw Error("c`" + g + "`" + k + "`" + this.Ba);
            this.Ba = g;
            this.Ff = k;
            this.RS();
        };
        e.prototype.RS = function () {
            if (null != this.Un) {
                for (var g = 0; g < this.Un.length; ++g) f.vG(this.Un[g]);
                this.Un = null;
            }
        };
        var f = new b();
        e.prototype.s0 = function (g) {
            var k = this.$y();
            g.wt(k.resolve, k.reject);
        };
        e.prototype.t0 = function (g, k) {
            var l = this.$y();
            try {
                g.call(k, l.resolve, l.reject);
            } catch (m) {
                l.reject(m);
            }
        };
        e.prototype.then = function (g, k) {
            function l(t, r) {
                return "function" == typeof t ?
                    function (u) {
                        try {
                            m(t(u));
                        } catch (v) {
                            n(v);
                        }
                    } :
                    r;
            }
            var m,
                n,
                p = new e(function (t, r) {
                    m = t;
                    n = r;
                });
            this.wt(l(g, m), l(k, n));
            return p;
        };
        e.prototype["catch"] = function (g) {
            return this.then(void 0, g);
        };
        e.prototype.wt = function (g, k) {
            function l() {
                switch (m.Ba) {
                    case 1:
                        g(m.Ff);
                        break;
                    case 2:
                        k(m.Ff);
                        break;
                    default:
                        throw Error("d`" + m.Ba);
                }
            }
            var m = this;
            null == this.Un ? f.vG(l) : this.Un.push(l);
        };
        e.resolve = c;
        e.reject = function (g) {
            return new e(function (k, l) {
                l(g);
            });
        };
        e.race = function (g) {
            return new e(function (k, l) {
                for (var m = _.ta(g), n = m.next(); !n.done; n = m.next())
                    c(n.value).wt(k, l);
            });
        };
        e.all = function (g) {
            var k = _.ta(g),
                l = k.next();
            return l.done ?
                c([]) :
                new e(function (m, n) {
                    function p(u) {
                        return function (v) {
                            t[u] = v;
                            r--;
                            0 == r && m(t);
                        };
                    }
                    var t = [],
                        r = 0;
                    do
                        t.push(void 0),
                        r++,
                        c(l.value).wt(p(t.length - 1), n),
                        (l = k.next());
                    while (!l.done);
                });
        };
        return e;
    });
    _.Ua = _.Ua || {};
    _.q = this || self;
    _.Va = function (a) {
        return void 0 !== a;
    };
    _.Ya = function (a) {
        return "string" == typeof a;
    };
    _.$a = function (a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if (
                    "[object Array]" == c ||
                    ("number" == typeof a.length &&
                        "undefined" != typeof a.splice &&
                        "undefined" != typeof a.propertyIsEnumerable &&
                        !a.propertyIsEnumerable("splice"))
                )
                    return "array";
                if (
                    "[object Function]" == c ||
                    ("undefined" != typeof a.call &&
                        "undefined" != typeof a.propertyIsEnumerable &&
                        !a.propertyIsEnumerable("call"))
                )
                    return "function";
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b;
    };
    _.ab = function (a) {
        return "array" == _.$a(a);
    };
    _.db = "closure_uid_" + ((1e9 * Math.random()) >>> 0);
    _.gb =
        Date.now ||
        function () {
            return +new Date();
        };
    _.z = function (a, b) {
        a = a.split(".");
        var c = _.q;
        a[0] in c ||
            "undefined" == typeof c.execScript ||
            c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());)
            !a.length && _.Va(b) ?
            (c[d] = b) :
            (c = c[d] && c[d] !== Object.prototype[d] ? c[d] : (c[d] = {}));
    };
    _.F = function (a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.H = b.prototype;
        a.prototype = new c();
        a.prototype.constructor = a;
        a.vp = function (d, e, f) {
            for (
                var g = Array(arguments.length - 2), k = 2; k < arguments.length; k++
            )
                g[k - 2] = arguments[k];
            return b.prototype[e].apply(d, g);
        };
    };
    gadgets = window.gadgets || {};
    osapi = window.osapi = window.osapi || {};
    window.___jsl = window.___jsl || {};
    (window.___jsl.cd = window.___jsl.cd || []).push({
        gwidget: {
            parsetags: "explicit"
        },
        appsapi: {
            plus_one_service: "/plus/v1"
        },
        csi: {
            rate: 0.01
        },
        poshare: {
            hangoutContactPickerServer: "https://plus.google.com"
        },
        gappsutil: {
            required_scopes: [
                "https://www.googleapis.com/auth/plus.me",
                "https://www.googleapis.com/auth/plus.people.recommended"
            ],
            display_on_page_ready: !1
        },
        appsutil: {
            required_scopes: [
                "https://www.googleapis.com/auth/plus.me",
                "https://www.googleapis.com/auth/plus.people.recommended"
            ],
            display_on_page_ready: !1
        },
        "oauth-flow": {
            authUrl: "https://accounts.google.com/o/oauth2/auth",
            proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
            redirectUri: "postmessage"
        },
        iframes: {
            sharebox: {
                params: {
                    json: "&"
                },
                url: ":socialhost:/:session_prefix:_/sharebox/dialog"
            },
            plus: {
                url: ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"
            },
            ":socialhost:": "https://apis.google.com",
            ":im_socialhost:": "https://plus.googleapis.com",
            domains_suggest: {
                url: "https://domains.google.com/suggest/flow"
            },
            card: {
                params: {
                    s: "#",
                    userid: "&"
                },
                url: ":socialhost:/:session_prefix:_/hovercard/internalcard"
            },
            ":signuphost:": "https://plus.google.com",
            ":gplus_url:": "https://plus.google.com",
            plusone: {
                url: ":socialhost:/:session_prefix:_/+1/fastbutton?usegapi=1"
            },
            plus_share: {
                url: ":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&usegapi=1"
            },
            plus_circle: {
                url: ":socialhost:/:session_prefix:_/widget/plus/circle?usegapi=1"
            },
            plus_followers: {
                url: ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"
            },
            configurator: {
                url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"
            },
            appcirclepicker: {
                url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
            },
            page: {
                url: ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"
            },
            person: {
                url: ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"
            },
            community: {
                url: ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"
            },
            follow: {
                url: ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"
            },
            commentcount: {
                url: ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"
            },
            comments: {
                url: ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1"
            },
            youtube: {
                url: ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1"
            },
            reportabuse: {
                url: ":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi=1"
            },
            additnow: {
                url: ":socialhost:/additnow/additnow.html"
            },
            appfinder: {
                url: "https://gsuite.google.com/:session_prefix:marketplace/appfinder?usegapi=1"
            },
            ":source:": "1p"
        },
        poclient: {
            update_session: "google.updateSessionCallback"
        },
        "googleapis.config": {
            rpc: "/rpc",
            root: "https://content.googleapis.com",
            "root-1p": "https://clients6.google.com",
            useGapiForXd3: !0,
            xd3: "/static/proxy.html",
            auth: {
                useInterimAuth: !1
            }
        },
        report: {
            apis: [
                "iframes\\..*",
                "gadgets\\..*",
                "gapi\\.appcirclepicker\\..*",
                "gapi\\.client\\..*"
            ],
            rate: 1e-4
        },
        client: {
            perApiBatch: !0
        }
    });

    var pb, qb;
    _.jb = function (a) {
        return "number" == typeof a;
    };
    _.kb = function () {};
    _.mb = function (a) {
        var b = _.$a(a);
        return "array" == b || ("object" == b && "number" == typeof a.length);
    };
    _.nb = function (a) {
        var b = typeof a;
        return ("object" == b && null != a) || "function" == b;
    };
    _.ob = function (a) {
        return "function" == _.$a(a);
    };
    pb = function (a, b, c) {
        return a.call.apply(a.bind, arguments);
    };
    qb = function (a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function () {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e);
            };
        }
        return function () {
            return a.apply(b, arguments);
        };
    };
    _.H = function (a, b, c) {
        _.H =
            Function.prototype.bind &&
            -1 != Function.prototype.bind.toString().indexOf("native code") ?
            pb :
            qb;
        return _.H.apply(null, arguments);
    };
    _.rb = function (a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, _.rb);
        else {
            var b = Error().stack;
            b && (this.stack = b);
        }
        a && (this.message = String(a));
    };
    _.F(_.rb, Error);
    _.rb.prototype.name = "CustomError";
    var sb = function (a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++)
            c += a[e] + (e < b.length ? b[e] : "%s");
        _.rb.call(this, c + a[d]);
    };
    _.F(sb, _.rb);
    sb.prototype.name = "AssertionError";
    _.tb = Array.prototype.indexOf ?
        function (a, b) {
            return Array.prototype.indexOf.call(a, b, void 0);
        } :
        function (a, b) {
            if (_.Ya(a)) return _.Ya(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1;
        };
    _.ub = Array.prototype.lastIndexOf ?
        function (a, b) {
            return Array.prototype.lastIndexOf.call(a, b, a.length - 1);
        } :
        function (a, b) {
            var c = a.length - 1;
            0 > c && (c = Math.max(0, a.length + c));
            if (_.Ya(a)) return _.Ya(b) && 1 == b.length ? a.lastIndexOf(b, c) : -1;
            for (; 0 <= c; c--)
                if (c in a && a[c] === b) return c;
            return -1;
        };
    _.vb = Array.prototype.forEach ?
        function (a, b, c) {
            Array.prototype.forEach.call(a, b, c);
        } :
        function (a, b, c) {
            for (var d = a.length, e = _.Ya(a) ? a.split("") : a, f = 0; f < d; f++)
                f in e && b.call(c, e[f], f, a);
        };
    _.wb = Array.prototype.filter ?
        function (a, b) {
            return Array.prototype.filter.call(a, b, void 0);
        } :
        function (a, b) {
            for (
                var c = a.length, d = [], e = 0, f = _.Ya(a) ? a.split("") : a, g = 0; g < c; g++
            )
                if (g in f) {
                    var k = f[g];
                    b.call(void 0, k, g, a) && (d[e++] = k);
                }
            return d;
        };
    _.xb = Array.prototype.map ?
        function (a, b) {
            return Array.prototype.map.call(a, b, void 0);
        } :
        function (a, b) {
            for (
                var c = a.length, d = Array(c), e = _.Ya(a) ? a.split("") : a, f = 0; f < c; f++
            )
                f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d;
        };
    _.yb = Array.prototype.some ?
        function (a, b, c) {
            return Array.prototype.some.call(a, b, c);
        } :
        function (a, b, c) {
            for (var d = a.length, e = _.Ya(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return !0;
            return !1;
        };
    _.Ab = Array.prototype.every ?
        function (a, b, c) {
            return Array.prototype.every.call(a, b, c);
        } :
        function (a, b, c) {
            for (var d = a.length, e = _.Ya(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && !b.call(c, e[f], f, a)) return !1;
            return !0;
        };
    _.Bb = function (a, b) {
        return 0 <= (0, _.tb)(a, b);
    };
    var Db, Eb, Fb, Gb, Hb, Ib, Jb, Lb;
    _.Cb = String.prototype.trim ?
        function (a) {
            return a.trim();
        } :
        function (a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
        };
    _.Kb = function (a, b) {
        if (b)
            a = a
            .replace(Db, "&amp;")
            .replace(Eb, "&lt;")
            .replace(Fb, "&gt;")
            .replace(Gb, "&quot;")
            .replace(Hb, "&#39;")
            .replace(Ib, "&#0;");
        else {
            if (!Jb.test(a)) return a; -
            1 != a.indexOf("&") && (a = a.replace(Db, "&amp;")); -
            1 != a.indexOf("<") && (a = a.replace(Eb, "&lt;")); -
            1 != a.indexOf(">") && (a = a.replace(Fb, "&gt;")); -
            1 != a.indexOf('"') && (a = a.replace(Gb, "&quot;")); -
            1 != a.indexOf("'") && (a = a.replace(Hb, "&#39;")); -
            1 != a.indexOf("\x00") && (a = a.replace(Ib, "&#0;"));
        }
        return a;
    };
    Db = /&/g;
    Eb = /</g;
    Fb = />/g;
    Gb = /"/g;
    Hb = /'/g;
    Ib = /\x00/g;
    Jb = /[\x00&<>"']/;
    _.Mb = function (a, b) {
        var c = 0;
        a = (0, _.Cb)(String(a)).split(".");
        b = (0, _.Cb)(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c =
                    Lb(
                        0 == f[1].length ? 0 : parseInt(f[1], 10),
                        0 == g[1].length ? 0 : parseInt(g[1], 10)
                    ) ||
                    Lb(0 == f[2].length, 0 == g[2].length) ||
                    Lb(f[2], g[2]);
                f = f[3];
                g = g[3];
            } while (0 == c);
        }
        return c;
    };
    Lb = function (a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    };
    a: {
        var Ob = _.q.navigator;
        if (Ob) {
            var Pb = Ob.userAgent;
            if (Pb) {
                _.Nb = Pb;
                break a;
            }
        }
        _.Nb = "";
    }
    _.Qb = function (a) {
        return -1 != _.Nb.indexOf(a);
    };
    var Sb;
    _.Rb = function (a, b, c) {
        for (var d in a) b.call(c, a[d], d, a);
    };
    Sb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
        " "
    );
    _.Tb = function (a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Sb.length; f++)
                (c = Sb[f]),
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
        }
    };
    _.Ub = function () {
        return _.Qb("Opera");
    };
    _.Vb = function () {
        return _.Qb("Trident") || _.Qb("MSIE");
    };
    _.Wb = function (a) {
        var b = !1,
            c;
        return function () {
            b || ((c = a()), (b = !0));
            return c;
        };
    };
    var Yb, Xb;
    _.Zb = function (a, b) {
        this.kE = (a === Xb && b) || "";
        this.HQ = Yb;
    };
    _.Zb.prototype.Yg = !0;
    _.Zb.prototype.yf = function () {
        return this.kE;
    };
    _.Zb.prototype.toString = function () {
        return "Const{" + this.kE + "}";
    };
    _.$b = function (a) {
        return a instanceof _.Zb && a.constructor === _.Zb && a.HQ === Yb ?
            a.kE :
            "type_error:Const";
    };
    _.bc = function (a) {
        return new _.Zb(Xb, a);
    };
    Yb = {};
    Xb = {};
    _.cc = _.bc("");
    var dc = function () {
        this.wL = "";
    };
    dc.prototype.Yg = !0;
    dc.prototype.yf = function () {
        return this.wL.toString();
    };
    dc.prototype.Zg = function (a) {
        this.wL = a;
        return this;
    };
    new dc().Zg("");
    var ec;
    _.fc = function () {
        this.QC = "";
        this.RQ = ec;
    };
    _.fc.prototype.Yg = !0;
    _.fc.prototype.yf = function () {
        return this.QC.toString();
    };
    _.fc.prototype.tB = !0;
    _.fc.prototype.Sg = _.ea(2);
    _.hc = function (a) {
        return _.gc(a).toString();
    };
    _.gc = function (a) {
        if (a instanceof _.fc && a.constructor === _.fc && a.RQ === ec) return a.QC;
        _.$a(a);
        return "type_error:TrustedResourceUrl";
    };
    _.kc = function (a) {
        return _.ic(_.$b(a));
    };
    ec = {};
    _.ic = function (a) {
        var b = new _.fc();
        b.QC = a;
        return b;
    };
    var oc, lc, pc;
    _.mc = function () {
        this.PC = "";
        this.qQ = lc;
    };
    _.mc.prototype.Yg = !0;
    _.mc.prototype.yf = function () {
        return this.PC.toString();
    };
    _.mc.prototype.tB = !0;
    _.mc.prototype.Sg = _.ea(1);
    _.nc = function (a) {
        if (a instanceof _.mc && a.constructor === _.mc && a.qQ === lc) return a.PC;
        _.$a(a);
        return "type_error:SafeUrl";
    };
    oc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    _.qc = function (a) {
        if (a instanceof _.mc) return a;
        a = "object" == typeof a && a.Yg ? a.yf() : String(a);
        oc.test(a) || (a = "about:invalid#zClosurez");
        return pc(a);
    };
    _.rc = function (a) {
        if (a instanceof _.mc) return a;
        a = "object" == typeof a && a.Yg ? a.yf() : String(a);
        oc.test(a) || (a = "about:invalid#zClosurez");
        return pc(a);
    };
    lc = {};
    pc = function (a) {
        var b = new _.mc();
        b.PC = a;
        return b;
    };
    pc("about:blank");
    var wc, xc, Dc, Bc, Ac, zc, Cc, Ec;
    _.uc = function () {
        this.OC = "";
        this.pQ = tc;
    };
    _.uc.prototype.Yg = !0;
    var tc = {};
    _.uc.prototype.yf = function () {
        return this.OC;
    };
    _.vc = function (a) {
        if (a instanceof _.uc && a.constructor === _.uc && a.pQ === tc) return a.OC;
        _.$a(a);
        return "type_error:SafeStyle";
    };
    _.uc.prototype.Zg = function (a) {
        this.OC = a;
        return this;
    };
    wc = new _.uc().Zg("");
    _.yc = function (a) {
        var b = "",
            c;
        for (c in a) {
            if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("i`" + c);
            var d = a[c];
            null != d &&
                ((d = _.ab(d) ? (0, _.xb)(d, xc).join(" ") : xc(d)),
                    (b += c + ":" + d + ";"));
        }
        return b ? new _.uc().Zg(b) : wc;
    };
    xc = function (a) {
        if (a instanceof _.mc)
            return (
                'url("' +
                _.nc(a)
                .toString()
                .replace(/</g, "%3c")
                .replace(/[\\"]/g, "\\$&") +
                '")'
            );
        if (a instanceof _.Zb) a = _.$b(a);
        else {
            a = String(a);
            var b = a
                .replace(zc, "$1")
                .replace(zc, "$1")
                .replace(Ac, "url");
            if (Bc.test(b)) {
                if ((b = !Cc.test(a))) {
                    for (var c = (b = !0), d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? (b = !b) : '"' == e && b && (c = !c);
                    }
                    b = b && c && Dc(a);
                }
                a = b ? Ec(a) : "zClosurez";
            } else a = "zClosurez";
        }
        if (/[{;}]/.test(a))
            throw new sb("Value does not allow [{;}], got: %s.", [a]);
        return a;
    };
    Dc = function (a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0;
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1;
            } else if (!b && !c.test(e)) return !1;
        }
        return b;
    };
    Bc = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/;
    Ac = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;
    zc = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g;
    Cc = /\/\*/;
    Ec = function (a) {
        return a.replace(Ac, function (b, c, d, e) {
            var f = "";
            d = d.replace(/^(['"])(.*)\1$/, function (g, k, l) {
                f = k;
                return l;
            });
            b = _.qc(d).yf();
            return c + f + b + f + e;
        });
    };
    _.Gc = function () {
        this.NC = "";
        this.oQ = _.Fc;
    };
    _.Gc.prototype.Yg = !0;
    _.Fc = {};
    _.Ic = function (a) {
        a = _.$b(a);
        return 0 === a.length ? Hc : new _.Gc().Zg(a);
    };
    _.Gc.prototype.yf = function () {
        return this.NC;
    };
    _.Gc.prototype.Zg = function (a) {
        this.NC = a;
        return this;
    };
    var Hc = new _.Gc().Zg("");
    var Jc;
    _.Kc = function () {
        this.MC = "";
        this.nQ = Jc;
        this.wH = null;
    };
    _.Kc.prototype.tB = !0;
    _.Kc.prototype.Sg = _.ea(0);
    _.Kc.prototype.Yg = !0;
    _.Kc.prototype.yf = function () {
        return this.MC.toString();
    };
    _.Lc = function (a) {
        if (a instanceof _.Kc && a.constructor === _.Kc && a.nQ === Jc) return a.MC;
        _.$a(a);
        return "type_error:SafeHtml";
    };
    Jc = {};
    _.Mc = function (a, b) {
        return new _.Kc().Zg(a, b);
    };
    _.Kc.prototype.Zg = function (a, b) {
        this.MC = a;
        this.wH = b;
        return this;
    };
    _.Mc("<!DOCTYPE html>", 0);
    _.Nc = _.Mc("", 0);
    _.Oc = _.Mc("<br>", 0);
    _.Pc = _.Wb(function () {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = _.Lc(_.Nc);
        return !b.parentElement;
    });
    _.Qc = function (a, b) {
        b = b instanceof _.mc ? b : _.rc(b);
        a.href = _.nc(b);
    };
    _.Rc = function (a) {
        return (a = _.Kb(a, void 0));
    };
    _.Sc = String.prototype.repeat ?
        function (a, b) {
            return a.repeat(b);
        } :
        function (a, b) {
            return Array(b + 1).join(a);
        };
    _.Tc = (2147483648 * Math.random()) | 0;
    _.Uc = function () {
        return _.Qb("iPhone") && !_.Qb("iPod") && !_.Qb("iPad");
    };
    _.Vc = function () {
        return _.Uc() || _.Qb("iPad") || _.Qb("iPod");
    };
    var Wc = function (a) {
            Wc[" "](a);
            return a;
        },
        $c;
    Wc[" "] = _.kb;
    _.Yc = function (a, b) {
        try {
            return Wc(a[b]), !0;
        } catch (c) {}
        return !1;
    };
    $c = function (a, b) {
        var c = Zc;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : (c[a] = b(a));
    };
    var pd, qd, Zc, zd;
    _.ad = _.Ub();
    _.bd = _.Vb();
    _.cd = _.Qb("Edge");
    _.dd = _.cd || _.bd;
    _.ed =
        _.Qb("Gecko") &&
        !(-1 != _.Nb.toLowerCase().indexOf("webkit") && !_.Qb("Edge")) &&
        !(_.Qb("Trident") || _.Qb("MSIE")) &&
        !_.Qb("Edge");
    _.fd = -1 != _.Nb.toLowerCase().indexOf("webkit") && !_.Qb("Edge");
    _.gd = _.fd && _.Qb("Mobile");
    _.hd = _.Qb("Macintosh");
    _.id = _.Qb("Windows");
    _.jd = _.Qb("Linux") || _.Qb("CrOS");
    _.kd = _.Qb("Android");
    _.ld = _.Uc();
    _.md = _.Qb("iPad");
    _.nd = _.Qb("iPod");
    _.od = _.Vc();
    pd = function () {
        var a = _.q.document;
        return a ? a.documentMode : void 0;
    };
    a: {
        var rd = "",
            sd = (function () {
                var a = _.Nb;
                if (_.ed) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (_.cd) return /Edge\/([\d\.]+)/.exec(a);
                if (_.bd) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (_.fd) return /WebKit\/(\S+)/.exec(a);
                if (_.ad) return /(?:Version)[ \/]?(\S+)/.exec(a);
            })();
        sd && (rd = sd ? sd[1] : "");
        if (_.bd) {
            var td = pd();
            if (null != td && td > parseFloat(rd)) {
                qd = String(td);
                break a;
            }
        }
        qd = rd;
    }
    _.ud = qd;
    Zc = {};
    _.vd = function (a) {
        return $c(a, function () {
            return 0 <= _.Mb(_.ud, a);
        });
    };
    _.xd = function (a) {
        return Number(_.wd) >= a;
    };
    zd = _.q.document && _.bd ? pd() : void 0;
    _.wd = zd;

    var Bd, Dd, Jd, Kd;
    _.Ad = function (a, b) {
        return (_.ca[a] = b);
    };
    _.fc.prototype.Sg = _.Ad(2, function () {
        return 1;
    });
    _.mc.prototype.Sg = _.Ad(1, function () {
        return 1;
    });
    _.Kc.prototype.Sg = _.Ad(0, function () {
        return this.wH;
    });
    Bd = 0;
    _.Cd = function (a) {
        return a[_.db] || (a[_.db] = ++Bd);
    };
    _.Ed = function (a) {
        return Array.prototype.concat.apply([], arguments);
    };
    _.Fd = function (a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c;
        }
        return [];
    };
    _.Gd = function (a, b) {
        return 0 == a.lastIndexOf(b, 0);
    };
    _.Hd = function (a) {
        if (a instanceof _.Kc) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.tB && (c = a.Sg());
        return _.Mc(_.Kb(b && a.Yg ? a.yf() : String(a)), c);
    };
    _.Id = function (a) {
        return String(a).replace(/\-([a-z])/g, function (b, c) {
            return c.toUpperCase();
        });
    };
    Jd = !_.bd || _.xd(9);
    Kd = (!_.ed && !_.bd) || (_.bd && _.xd(9)) || (_.ed && _.vd("1.9.1"));
    _.Ld = _.bd && !_.vd("9");
    _.Md = _.bd || _.ad || _.fd;
    _.Nd = _.bd && !_.xd(9);
    var Td, Wd, $d;
    _.Qd = function (a) {
        return a ? new _.Od(_.Pd(a)) : Dd || (Dd = new _.Od());
    };
    _.Rd = function (a, b) {
        return _.Ya(b) ? a.getElementById(b) : b;
    };
    _.Sd = function (a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c))
            return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, g;
                    (g = a[f]); f++)
                    b == g.nodeName && (d[e++] = g);
                d.length = e;
                return d;
            }
            return a;
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0;
                (g = a[f]); f++)
                (b = g.className),
                "function" == typeof b.split &&
                _.Bb(b.split(/\s+/), c) &&
                (d[e++] = g);
            d.length = e;
            return d;
        }
        return a;
    };
    _.Ud = function (a, b) {
        _.Rb(b, function (c, d) {
            c && "object" == typeof c && c.Yg && (c = c.yf());
            "style" == d
                ?
                (a.style.cssText = c) :
                "class" == d ?
                (a.className = c) :
                "for" == d ?
                (a.htmlFor = c) :
                Td.hasOwnProperty(d) ?
                a.setAttribute(Td[d], c) :
                _.Gd(d, "aria-") || _.Gd(d, "data-") ?
                a.setAttribute(d, c) :
                (a[d] = c);
        });
    };
    Td = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    _.Vd = function (a) {
        return a ? a.parentWindow || a.defaultView : window;
    };
    _.Zd = function (a, b) {
        var c = String(b[0]),
            d = b[1];
        if (!Jd && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', _.Rc(d.name), '"');
            if (d.type) {
                c.push(' type="', _.Rc(d.type), '"');
                var e = {};
                _.Tb(e, d);
                delete e.type;
                d = e;
            }
            c.push(">");
            c = c.join("");
        }
        c = a.createElement(c);
        d &&
            (_.Ya(d) ?
                (c.className = d) :
                _.ab(d) ?
                (c.className = d.join(" ")) :
                _.Ud(c, d));
        2 < b.length && Wd(a, c, b, 2);
        return c;
    };
    Wd = function (a, b, c, d) {
        function e(g) {
            g && b.appendChild(_.Ya(g) ? a.createTextNode(g) : g);
        }
        for (; d < c.length; d++) {
            var f = c[d];
            !_.mb(f) || (_.nb(f) && 0 < f.nodeType) ?
                e(f) :
                (0, _.vb)($d(f) ? _.Fd(f) : f, e);
        }
    };
    _.ae = function (a) {
        return document.createElement(String(a));
    };
    _.be = function (a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1;
        }
        return !0;
    };
    _.ce = function (a, b) {
        Wd(_.Pd(a), a, arguments, 1);
    };
    _.de = function (a) {
        for (var b;
            (b = a.firstChild);) a.removeChild(b);
    };
    _.ee = function (a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b);
    };
    _.fe = function (a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null;
    };
    _.ge = function (a) {
        var b,
            c = a.parentNode;
        if (c && 11 != c.nodeType) {
            if (a.removeNode) return a.removeNode(!1);
            for (;
                (b = a.firstChild);) c.insertBefore(b, a);
            return _.fe(a);
        }
    };
    _.he = function (a) {
        return Kd && void 0 != a.children ?
            a.children :
            (0, _.wb)(a.childNodes, function (b) {
                return 1 == b.nodeType;
            });
    };
    _.ie = function (a) {
        return _.nb(a) && 1 == a.nodeType;
    };
    _.je = function (a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a;
    };
    _.Pd = function (a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document;
    };
    _.ke = function (a, b) {
        if ("textContent" in a) a.textContent = b;
        else if (3 == a.nodeType) a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
            a.firstChild.data = String(b);
        } else _.de(a), a.appendChild(_.Pd(a).createTextNode(String(b)));
    };
    $d = function (a) {
        if (a && "number" == typeof a.length) {
            if (_.nb(a))
                return "function" == typeof a.item || "string" == typeof a.item;
            if (_.ob(a)) return "function" == typeof a.item;
        }
        return !1;
    };
    _.Od = function (a) {
        this.Ra = a || _.q.document || document;
    };
    _.h = _.Od.prototype;
    _.h.Da = _.Qd;
    _.h.HD = _.ea(3);
    _.h.mb = function () {
        return this.Ra;
    };
    _.h.S = function (a) {
        return _.Rd(this.Ra, a);
    };
    _.h.getElementsByTagName = function (a, b) {
        return (b || this.Ra).getElementsByTagName(String(a));
    };
    _.h.ka = function (a, b, c) {
        return _.Zd(this.Ra, arguments);
    };
    _.h.createElement = function (a) {
        return this.Ra.createElement(String(a));
    };
    _.h.createTextNode = function (a) {
        return this.Ra.createTextNode(String(a));
    };
    _.h.tb = function () {
        var a = this.Ra;
        return a.parentWindow || a.defaultView;
    };
    _.h.appendChild = function (a, b) {
        a.appendChild(b);
    };
    _.h.append = _.ce;
    _.h.canHaveChildren = _.be;
    _.h.Hd = _.de;
    _.h.RJ = _.ee;
    _.h.removeNode = _.fe;
    _.h.dT = _.ge;
    _.h.hA = _.he;
    _.h.isElement = _.ie;
    _.h.contains = _.je;
    _.h.Nh = _.ea(4);
    /*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
    _.me = window;
    _.ne = document;
    _.oe = _.me.location;
    _.pe = /\[native code\]/;
    _.qe = function (a, b, c) {
        return (a[b] = a[b] || c);
    };
    _.re = function () {
        var a;
        if ((a = Object.create) && _.pe.test(a)) a = a(null);
        else {
            a = {};
            for (var b in a) a[b] = void 0;
        }
        return a;
    };
    _.se = function (a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    };
    _.te = function (a, b) {
        a = a || {};
        for (var c in a) _.se(a, c) && (b[c] = a[c]);
    };
    _.ue = _.qe(_.me, "gapi", {});
    _.ve = function (a, b, c) {
        var d = new RegExp("([#].*&|[#])" + b + "=([^&#]*)", "g");
        b = new RegExp("([?#].*&|[?#])" + b + "=([^&#]*)", "g");
        if ((a = a && (d.exec(a) || b.exec(a))))
            try {
                c = decodeURIComponent(a[2]);
            } catch (e) {}
        return c;
    };
    _.we = new RegExp(
        /^/.source +
        /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source +
        /(\/\/[^\/?#]*)?/.source +
        /([^?#]*)?/.source +
        /(\?([^#]*))?/.source +
        /(#((#|[^#])*))?/.source +
        /$/.source
    );
    _.xe = new RegExp(
        /(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source +
        /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source,
        "g"
    );
    _.ye = new RegExp(
        /\/?\??#?/.source +
        "(" +
        /[\/?#]/i.source +
        "|" +
        /[\uD800-\uDBFF]/i.source +
        "|" +
        /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source +
        "|" +
        /%[0-9a-f]?/i.source +
        ")$",
        "i"
    );
    _.Ae = function (a, b, c) {
        _.ze(a, b, c, "add", "at");
    };
    _.ze = function (a, b, c, d, e) {
        if (a[d + "EventListener"]) a[d + "EventListener"](b, c, !1);
        else if (a[e + "tachEvent"]) a[e + "tachEvent"]("on" + b, c);
    };
    _.Be = _.qe(_.me, "___jsl", _.re());
    _.qe(_.Be, "I", 0);
    _.qe(_.Be, "hel", 10);
    var Ce, De, Ee, Fe, Ge, He, Ie;
    Ce = function (a) {
        var b = (window.___jsl = window.___jsl || {});
        b[a] = b[a] || [];
        return b[a];
    };
    De = function (a) {
        var b = (window.___jsl = window.___jsl || {});
        b.cfg = (!a && b.cfg) || {};
        return b.cfg;
    };
    Ee = function (a) {
        return "object" === typeof a && /\[native code\]/.test(a.push);
    };
    Fe = function (a, b, c) {
        if (b && "object" === typeof b)
            for (var d in b)
                !Object.prototype.hasOwnProperty.call(b, d) ||
                (c && "___goc" === d && "undefined" === typeof b[d]) ||
                (a[d] &&
                    b[d] &&
                    "object" === typeof a[d] &&
                    "object" === typeof b[d] &&
                    !Ee(a[d]) &&
                    !Ee(b[d]) ?
                    Fe(a[d], b[d]) :
                    b[d] && "object" === typeof b[d] ?
                    ((a[d] = Ee(b[d]) ? [] : {}), Fe(a[d], b[d])) :
                    (a[d] = b[d]));
    };
    Ge = function (a) {
        if (a && !/^\s+$/.test(a)) {
            for (; 0 == a.charCodeAt(a.length - 1);)
                a = a.substring(0, a.length - 1);
            try {
                var b = window.JSON.parse(a);
            } catch (c) {}
            if ("object" === typeof b) return b;
            try {
                b = new Function("return (" + a + "\n)")();
            } catch (c) {}
            if ("object" === typeof b) return b;
            try {
                b = new Function("return ({" + a + "\n})")();
            } catch (c) {}
            return "object" === typeof b ? b : {};
        }
    };
    He = function (a, b) {
        var c = {
            ___goc: void 0
        };
        a.length &&
            a[a.length - 1] &&
            Object.hasOwnProperty.call(a[a.length - 1], "___goc") &&
            "undefined" === typeof a[a.length - 1].___goc &&
            (c = a.pop());
        Fe(c, b);
        a.push(c);
    };
    Ie = function (a) {
        De(!0);
        var b = window.___gcfg,
            c = Ce("cu"),
            d = window.___gu;
        b && b !== d && (He(c, b), (window.___gu = b));
        b = Ce("cu");
        var e = document.scripts || document.getElementsByTagName("script") || [];
        d = [];
        var f = [];
        f.push.apply(f, Ce("us"));
        for (var g = 0; g < e.length; ++g)
            for (var k = e[g], l = 0; l < f.length; ++l)
                k.src && 0 == k.src.indexOf(f[l]) && d.push(k);
        0 == d.length &&
            0 < e.length &&
            e[e.length - 1].src &&
            d.push(e[e.length - 1]);
        for (e = 0; e < d.length; ++e)
            d[e].getAttribute("gapi_processed") ||
            (d[e].setAttribute("gapi_processed", !0),
                (f = d[e]) ?
                ((g = f.nodeType),
                    (f =
                        3 == g || 4 == g ?
                        f.nodeValue :
                        f.textContent || f.innerText || f.innerHTML || "")) :
                (f = void 0),
                (f = Ge(f)) && b.push(f));
        a && He(c, a);
        d = Ce("cd");
        a = 0;
        for (b = d.length; a < b; ++a) Fe(De(), d[a], !0);
        d = Ce("ci");
        a = 0;
        for (b = d.length; a < b; ++a) Fe(De(), d[a], !0);
        a = 0;
        for (b = c.length; a < b; ++a) Fe(De(), c[a], !0);
    };
    _.Q = function (a, b) {
        var c = De();
        if (!a) return c;
        a = a.split("/");
        for (var d = 0, e = a.length; c && "object" === typeof c && d < e; ++d)
            c = c[a[d]];
        return d === a.length && void 0 !== c ? c : b;
    };
    _.Je = function (a, b) {
        var c;
        if ("string" === typeof a) {
            var d = (c = {});
            a = a.split("/");
            for (var e = 0, f = a.length; e < f - 1; ++e) {
                var g = {};
                d = d[a[e]] = g;
            }
            d[a[e]] = b;
        } else c = a;
        Ie(c);
    };
    var Ke = function () {
        var a = window.__GOOGLEAPIS;
        a &&
            (a.googleapis &&
                !a["googleapis.config"] &&
                (a["googleapis.config"] = a.googleapis),
                _.qe(_.Be, "ci", []).push(a),
                (window.__GOOGLEAPIS = void 0));
    };
    Ke && Ke();
    Ie();
    _.z("gapi.config.get", _.Q);
    _.z("gapi.config.update", _.Je);
    _.Le = function (a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (_.mb(d)) {
                var e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (var g = 0; g < f; g++) a[e + g] = d[g];
            } else a.push(d);
        }
    };
    _.Me = function (a) {
        for (var b = {}, c = 0, d = 0; d < a.length;) {
            var e = a[d++];
            var f = e;
            f = _.nb(f) ? "o" + _.Cd(f) : (typeof f).charAt(0) + f;
            Object.prototype.hasOwnProperty.call(b, f) || ((b[f] = !0), (a[c++] = e));
        }
        a.length = c;
    };
    _.Ne = function (a) {
        return /^[\s\xa0]*$/.test(a);
    };
    _.Oe = function (a, b) {
        var c = b || document;
        if (c.getElementsByClassName) a = c.getElementsByClassName(a)[0];
        else {
            c = document;
            var d = b || c;
            a =
                d.querySelectorAll && d.querySelector && a ?
                d.querySelector(a ? "." + a : "") :
                _.Sd(c, "*", a, b)[0] || null;
        }
        return a || null;
    };

    var Ye,
        Ze,
        $e,
        af,
        bf,
        cf,
        df,
        ef,
        ff,
        gf,
        hf,
        jf,
        kf,
        lf,
        mf,
        nf, of ,
        pf,
        qf,
        rf,
        sf,
        tf,
        uf,
        vf,
        wf,
        xf,
        yf,
        zf,
        Cf,
        Df,
        Ef,
        Hf,
        If;
    $e = void 0;
    af = function (a) {
        try {
            return _.q.JSON.parse.call(_.q.JSON, a);
        } catch (b) {
            return !1;
        }
    };
    bf = function (a) {
        return Object.prototype.toString.call(a);
    };
    cf = bf(0);
    df = bf(new Date(0));
    ef = bf(!0);
    ff = bf("");
    gf = bf({});
    hf = bf([]);
    jf = function (a, b) {
        if (b)
            for (var c = 0, d = b.length; c < d; ++c)
                if (a === b[c])
                    throw new TypeError("Converting circular structure to JSON");
        d = typeof a;
        if ("undefined" !== d) {
            c = Array.prototype.slice.call(b || [], 0);
            c[c.length] = a;
            b = [];
            var e = bf(a);
            if (
                null != a &&
                "function" === typeof a.toJSON &&
                (Object.prototype.hasOwnProperty.call(a, "toJSON") ||
                    ((e !== hf ||
                            (a.constructor !== Array && a.constructor !== Object)) &&
                        (e !== gf ||
                            (a.constructor !== Array && a.constructor !== Object)) &&
                        e !== ff &&
                        e !== cf &&
                        e !== ef &&
                        e !== df))
            )
                return jf(a.toJSON.call(a), c);
            if (null == a) b[b.length] = "null";
            else if (e === cf)
                (a = Number(a)),
                isNaN(a) || isNaN(a - a) ?
                (a = "null") :
                -0 === a && 0 > 1 / a && (a = "-0"),
                (b[b.length] = String(a));
            else if (e === ef) b[b.length] = String(!!Number(a));
            else {
                if (e === df) return jf(a.toISOString.call(a), c);
                if (e === hf && bf(a.length) === cf) {
                    b[b.length] = "[";
                    var f = 0;
                    for (d = Number(a.length) >> 0; f < d; ++f)
                        f && (b[b.length] = ","), (b[b.length] = jf(a[f], c) || "null");
                    b[b.length] = "]";
                } else if (e == ff && bf(a.length) === cf) {
                    b[b.length] = '"';
                    f = 0;
                    for (c = Number(a.length) >> 0; f < c; ++f)
                        (d = String.prototype.charAt.call(a, f)),
                        (e = String.prototype.charCodeAt.call(a, f)),
                        (b[b.length] =
                            "\b" === d ?
                            "\\b" :
                            "\f" === d ?
                            "\\f" :
                            "\n" === d ?
                            "\\n" :
                            "\r" === d ?
                            "\\r" :
                            "\t" === d ?
                            "\\t" :
                            "\\" === d || '"' === d ?
                            "\\" + d :
                            31 >= e ?
                            "\\u" + (e + 65536).toString(16).substr(1) :
                            32 <= e && 65535 >= e ?
                            d :
                            "\ufffd");
                    b[b.length] = '"';
                } else if ("object" === d) {
                    b[b.length] = "{";
                    d = 0;
                    for (f in a)
                        Object.prototype.hasOwnProperty.call(a, f) &&
                        ((e = jf(a[f], c)),
                            void 0 !== e &&
                            (d++ && (b[b.length] = ","),
                                (b[b.length] = jf(f)),
                                (b[b.length] = ":"),
                                (b[b.length] = e)));
                    b[b.length] = "}";
                } else return;
            }
            return b.join("");
        }
    };
    kf = /[\0-\x07\x0b\x0e-\x1f]/;
    lf = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*[\0-\x1f]/;
    mf = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\[^\\\/"bfnrtu]/;
    nf = /^([^"]*"([^\\"]|\\.)*")*[^"]*"([^"\\]|\\.)*\\u([0-9a-fA-F]{0,3}[^0-9a-fA-F])/; of = /"([^\0-\x1f\\"]|\\[\\\/"bfnrt]|\\u[0-9a-fA-F]{4})*"/g;
    pf = /-?(0|[1-9][0-9]*)(\.[0-9]+)?([eE][-+]?[0-9]+)?/g;
    qf = /[ \t\n\r]+/g;
    rf = /[^"]:/;
    sf = /""/g;
    tf = /true|false|null/g;
    uf = /00/;
    vf = /[\{]([^0\}]|0[^:])/;
    wf = /(^|\[)[,:]|[,:](\]|\}|[,:]|$)/;
    xf = /[^\[,:][\[\{]/;
    yf = /^(\{|\}|\[|\]|,|:|0)+/;
    zf = /\u2028/g;
    Cf = /\u2029/g;
    Df = function (a) {
        a = String(a);
        if (kf.test(a) || lf.test(a) || mf.test(a) || nf.test(a)) return !1;
        var b = a.replace( of , '""');
        b = b.replace(pf, "0");
        b = b.replace(qf, "");
        if (rf.test(b)) return !1;
        b = b.replace(sf, "0");
        b = b.replace(tf, "0");
        if (
            uf.test(b) ||
            vf.test(b) ||
            wf.test(b) ||
            xf.test(b) ||
            !b ||
            (b = b.replace(yf, ""))
        )
            return !1;
        a = a.replace(zf, "\\u2028").replace(Cf, "\\u2029");
        b = void 0;
        try {
            b = $e ?
                [af(a)] :
                eval(
                    "(function (var_args) {\n  return Array.prototype.slice.call(arguments, 0);\n})(\n" +
                    a +
                    "\n)"
                );
        } catch (c) {
            return !1;
        }
        return b && 1 === b.length ? b[0] : !1;
    };
    Ef = function () {
        var a = ((_.q.document || {}).scripts || []).length;
        if ((void 0 === Ye || void 0 === $e || Ze !== a) && -1 !== Ze) {
            Ye = $e = !1;
            Ze = -1;
            try {
                try {
                    $e = !!_.q.JSON &&
                        '{"a":[3,true,"1970-01-01T00:00:00.000Z"]}' ===
                        _.q.JSON.stringify.call(_.q.JSON, {
                            a: [3, !0, new Date(0)],
                            c: function () {}
                        }) &&
                        !0 === af("true") &&
                        3 === af('[{"a":3}]')[0].a;
                } catch (b) {}
                Ye =
                    $e && !af("[00]") && !af('"\u0007"') && !af('"\\0"') && !af('"\\v"');
            } finally {
                Ze = a;
            }
        }
    };
    _.Ff = function (a) {
        if (-1 === Ze) return !1;
        Ef();
        return (Ye ? af : Df)(a);
    };
    _.Gf = function (a) {
        if (-1 !== Ze)
            return Ef(), $e ? _.q.JSON.stringify.call(_.q.JSON, a) : jf(a);
    };
    Hf = !Date.prototype.toISOString ||
        "function" !== typeof Date.prototype.toISOString ||
        "1970-01-01T00:00:00.000Z" !== new Date(0).toISOString();
    If = function () {
        var a = Date.prototype.getUTCFullYear.call(this);
        return [
            0 > a ?
            "-" + String(1e6 - a).substr(1) :
            9999 >= a ?
            String(1e4 + a).substr(1) :
            "+" + String(1e6 + a).substr(1),
            "-",
            String(101 + Date.prototype.getUTCMonth.call(this)).substr(1),
            "-",
            String(100 + Date.prototype.getUTCDate.call(this)).substr(1),
            "T",
            String(100 + Date.prototype.getUTCHours.call(this)).substr(1),
            ":",
            String(100 + Date.prototype.getUTCMinutes.call(this)).substr(1),
            ":",
            String(100 + Date.prototype.getUTCSeconds.call(this)).substr(1),
            ".",
            String(1e3 + Date.prototype.getUTCMilliseconds.call(this)).substr(1),
            "Z"
        ].join("");
    };
    Date.prototype.toISOString = Hf ? If : Date.prototype.toISOString;

    _.z("gadgets.json.stringify", _.Gf);
    _.z("gadgets.json.parse", _.Ff);
    _.rg = (window.gapi && window.gapi.util) || {};
    _.tg = function (a) {
        if (!a) return "";
        a = a.split("#")[0].split("?")[0];
        a = a.toLowerCase();
        0 == a.indexOf("//") && (a = window.location.protocol + a);
        /^[\w\-]*:\/\//.test(a) || (a = window.location.href);
        var b = a.substring(a.indexOf("://") + 3),
            c = b.indexOf("/"); -
        1 != c && (b = b.substring(0, c));
        a = a.substring(0, a.indexOf("://"));
        if (
            "http" !== a &&
            "https" !== a &&
            "chrome-extension" !== a &&
            "file" !== a &&
            "android-app" !== a &&
            "chrome-search" !== a &&
            "app" !== a
        )
            throw Error("z`" + a);
        c = "";
        var d = b.indexOf(":");
        if (-1 != d) {
            var e = b.substring(d + 1);
            b = b.substring(0, d);
            if (("http" === a && "80" !== e) || ("https" === a && "443" !== e))
                c = ":" + e;
        }
        return a + "://" + b + c;
    };

    _.rg.getOrigin = function (a) {
        return _.tg(a);
    };
    var Re;
    Re = window.console;
    _.Se = function (a) {
        Re && Re.log && Re.log(a);
    };
    _.Te = function (a) {
        Re && (Re.error ? Re.error(a) : Re.log && Re.log(a));
    };
    _.Ve = function (a) {
        Re && (Re.warn ? Re.warn(a) : Re.log && Re.log(a));
    };
    _.We = function () {};
    _.Pe = _.Pe || {};
    _.Pe = _.Pe || {};
    (function () {
        var a = null;
        _.Pe.getUrlParameters = function (b) {
            var c = "undefined" === typeof b;
            if (null !== a && c) return a;
            var d = {};
            b = b || window.location.href;
            var e = b.indexOf("?"),
                f = b.indexOf("#");
            b = (-1 === f ?
                b.substr(e + 1) :
                [b.substr(e + 1, f - e - 1), "&", b.substr(f + 1)].join("")
            ).split("&");
            e = window.decodeURIComponent ? decodeURIComponent : unescape;
            f = 0;
            for (var g = b.length; f < g; ++f) {
                var k = b[f].indexOf("=");
                if (-1 !== k) {
                    var l = b[f].substring(0, k);
                    k = b[f].substring(k + 1);
                    k = k.replace(/\+/g, " ");
                    try {
                        d[l] = e(k);
                    } catch (m) {}
                }
            }
            c && (a = d);
            return d;
        };
        _.Pe.getUrlParameters();
    })();
    _.z("gadgets.util.getUrlParameters", _.Pe.getUrlParameters);
    _.ve(_.me.location.href, "rpctoken") && _.Ae(_.ne, "unload", function () {});
    var Ai = function () {
            this.Cs = {
                FL: ti ? "../" + ti : null,
                wS: ui,
                NI: vi,
                Qaa: wi,
                Du: xi,
                vba: yi
            };
            this.Le = _.me;
            this.rL = this.sS;
            this.hT = /MSIE\s*[0-8](\D|$)/.test(window.navigator.userAgent);
            if (this.Cs.FL) {
                this.Le = this.Cs.NI(this.Le, this.Cs.FL);
                var a = this.Le.document,
                    b = a.createElement("script");
                b.setAttribute("type", "text/javascript");
                b.text =
                    "window.doPostMsg=function(w,s,o) {window.setTimeout(function(){w.postMessage(s,o);},0);};";
                a.body.appendChild(b);
                this.rL = this.Le.doPostMsg;
            }
            this.aE = {};
            this.xE = {};
            a = (0, _.H)(this.ZA, this);
            _.Ae(this.Le, "message", a);
            _.qe(_.Be, "RPMQ", []).push(a);
            this.Le != this.Le.parent &&
                zi(this, this.Le.parent, '{"h":"' + escape(this.Le.name) + '"}', "*");
        },
        Bi = function (a) {
            var b = null;
            0 === a.indexOf('{"h":"') &&
                a.indexOf('"}') === a.length - 2 &&
                (b = unescape(a.substring(6, a.length - 2)));
            return b;
        },
        Ci = function (a) {
            if (!/^\s*{/.test(a)) return !1;
            a = _.Ff(a);
            return null !== a && "object" === typeof a && !!a.g;
        };
    Ai.prototype.ZA = function (a) {
        var b = String(a.data);
        (0, _.We)(
            "gapi.rpc.receive(" +
            wi +
            "): " +
            (!b || 512 >= b.length ?
                b :
                b.substr(0, 512) + "... (" + b.length + " bytes)")
        );
        var c = 0 !== b.indexOf("!_");
        c || (b = b.substring(2));
        var d = Ci(b);
        if (!c && !d) {
            if (!d && (c = Bi(b))) {
                if (this.aE[c]) this.aE[c]();
                else this.xE[c] = 1;
                return;
            }
            var e = a.origin,
                f = this.Cs.wS;
            this.hT ?
                _.me.setTimeout(function () {
                    f(b, e);
                }, 0) :
                f(b, e);
        }
    };
    Ai.prototype.yc = function (a, b) {
        ".." === a || this.xE[a] ? (b(), delete this.xE[a]) : (this.aE[a] = b);
    };
    var zi = function (a, b, c, d) {
        var e = Ci(c) ? "" : "!_";
        (0, _.We)(
            "gapi.rpc.send(" +
            wi +
            "): " +
            (!c || 512 >= c.length ?
                c :
                c.substr(0, 512) + "... (" + c.length + " bytes)")
        );
        a.rL(b, e + c, d);
    };
    Ai.prototype.sS = function (a, b, c) {
        a.postMessage(b, c);
    };
    Ai.prototype.send = function (a, b, c) {
        (a = this.Cs.NI(this.Le, a)) && !a.closed && zi(this, a, b, c);
    };
    var Di,
        Ei,
        Fi,
        Gi,
        Hi,
        Ii,
        Ji,
        Ki,
        ti,
        wi,
        Li,
        Mi,
        Ni,
        Oi,
        vi,
        xi,
        Pi,
        Qi,
        Wi,
        Xi,
        Zi,
        yi,
        ej,
        dj,
        Ri,
        Si,
        fj,
        ui,
        gj,
        hj;
    Di = 0;
    Ei = [];
    Fi = {};
    Gi = {};
    Hi = _.Pe.getUrlParameters;
    Ii = Hi();
    Ji = Ii.rpctoken;
    Ki = Ii.parent || _.ne.referrer;
    ti = Ii.rly;
    wi = ti || ((_.me !== _.me.top || _.me.opener) && _.me.name) || "..";
    Li = null;
    Mi = {};
    Ni = function () {};
    Oi = {
        send: Ni,
        yc: Ni
    };
    vi = function (a, b) {
        "/" == b.charAt(0) && ((b = b.substring(1)), (a = _.me.top));
        for (b = b.split("/"); b.length;) {
            var c = b.shift();
            "{" == c.charAt(0) &&
                "}" == c.charAt(c.length - 1) &&
                (c = c.substring(1, c.length - 1));
            if (".." === c) a = a == a.parent ? a.opener : a.parent;
            else if (".." !== c && a.frames[c]) {
                if (((a = a.frames[c]), !("postMessage" in a))) throw "Not a window";
            } else return null;
        }
        return a;
    };
    xi = function (a) {
        return (a = Fi[a]) && a.Jk;
    };
    Pi = function (a) {
        if (a.f in {}) return !1;
        var b = a.t,
            c = Fi[a.r];
        a = a.origin;
        return (
            c && (c.Jk === b || (!c.Jk && !b)) && (a === c.origin || "*" === c.origin)
        );
    };
    Qi = function (a) {
        var b = a.id.split("/"),
            c = b[b.length - 1],
            d = a.origin;
        return function (e) {
            var f = e.origin;
            return e.f == c && (d == f || "*" == d);
        };
    };
    _.Ui = function (a, b, c) {
        a = Ri(a);
        Gi[a.name] = {
            Pg: b,
            fr: a.fr,
            Ko: c || Pi
        };
        Si();
    };
    _.Vi = function (a) {
        delete Gi[Ri(a).name];
    };
    Wi = {};
    Xi = function (a, b) {
        (a = Wi["_" + a]) && a[1](this) && a[0].call(this, b);
    };
    Zi = function (a) {
        var b = a.c;
        if (!b) return Ni;
        var c = a.r,
            d = a.g ? "legacy__" : "";
        return function () {
            var e = [].slice.call(arguments, 0);
            e.unshift(c, d + "__cb", null, b);
            _.Yi.apply(null, e);
        };
    };
    yi = function (a) {
        Li = a;
    };
    ej = function (a) {
        Mi[a] ||
            (Mi[a] = _.me.setTimeout(function () {
                Mi[a] = !1;
                dj(a);
            }, 0));
    };
    dj = function (a) {
        var b = Fi[a];
        if (b && b.ready) {
            var c = b.SC;
            for (b.SC = []; c.length;) Oi.send(a, _.Gf(c.shift()), b.origin);
        }
    };
    Ri = function (a) {
        return 0 === a.indexOf("legacy__") ?
            {
                name: a.substring(8),
                fr: !0
            } :
            {
                name: a,
                fr: !1
            };
    };
    Si = function () {
        for (
            var a = _.Q("rpc/residenceSec") || 60,
                b = new Date().getTime() / 1e3,
                c = 0,
                d;
            (d = Ei[c]);
            ++c
        ) {
            var e = d.rpc;
            if (!e || (0 < a && b - d.timestamp > a)) Ei.splice(c, 1), --c;
            else {
                var f = e.s,
                    g = Gi[f] || Gi["*"];
                if (g)
                    if (
                        (Ei.splice(c, 1),
                            --c,
                            (e.origin = d.origin),
                            (d = Zi(e)),
                            (e.callback = d),
                            g.Ko(e))
                    ) {
                        if ("__cb" !== f && !!g.fr != !!e.g) break;
                        e = g.Pg.apply(e, e.a);
                        void 0 !== e && d(e);
                    } else(0, _.We)("gapi.rpc.rejected(" + wi + "): " + f);
            }
        }
    };
    fj = function (a, b, c) {
        Ei.push({
            rpc: a,
            origin: b,
            timestamp: new Date().getTime() / 1e3
        });
        c || Si();
    };
    ui = function (a, b) {
        a = _.Ff(a);
        fj(a, b, !1);
    };
    gj = function (a) {
        for (; a.length;) fj(a.shift(), this.origin, !0);
        Si();
    };
    hj = function (a) {
        var b = !1;
        a = a.split("|");
        var c = a[0];
        0 <= c.indexOf("/") && (b = !0);
        return {
            id: c,
            origin: a[1] || "*",
            EB: b
        };
    };
    _.ij = function (a, b, c, d) {
        var e = hj(a);
        d && (_.me.frames[e.id] = _.me.frames[e.id] || d);
        a = e.id;
        if (!Fi.hasOwnProperty(a)) {
            c = c || null;
            d = e.origin;
            if (".." === a)(d = _.rg.getOrigin(Ki)), (c = c || Ji);
            else if (!e.EB) {
                var f = _.ne.getElementById(a);
                f && ((f = f.src), (d = _.rg.getOrigin(f)), (c = c || Hi(f).rpctoken));
            }
            ("*" === e.origin && d) || (d = e.origin);
            Fi[a] = {
                Jk: c,
                SC: [],
                origin: d,
                ZZ: b,
                AL: function () {
                    var g = a;
                    Fi[g].ready = 1;
                    dj(g);
                }
            };
            Oi.yc(a, Fi[a].AL);
        }
        return Fi[a].AL;
    };
    _.Yi = function (a, b, c, d) {
        a = a || "..";
        _.ij(a);
        a = a.split("|", 1)[0];
        var e = b,
            f = [].slice.call(arguments, 3),
            g = c,
            k = wi,
            l = Ji,
            m = Fi[a],
            n = k,
            p = hj(a);
        if (m && ".." !== a) {
            if (p.EB) {
                if (!(l = Fi[a].ZZ)) {
                    l = Li ? Li.substring(1).split("/") : [wi];
                    n = l.length - 1;
                    for (var t = _.me.parent; t !== _.me.top;) {
                        var r = t.parent;
                        if (!n--) {
                            for (var u = null, v = r.frames.length, w = 0; w < v; ++w)
                                r.frames[w] == t && (u = w);
                            l.unshift("{" + u + "}");
                        }
                        t = r;
                    }
                    l = "/" + l.join("/");
                }
                n = l;
            } else n = k = "..";
            l = m.Jk;
        }
        g && p ?
            ((m = Pi), p.EB && (m = Qi(p)), (Wi["_" + ++Di] = [g, m]), (g = Di)) :
            (g = null);
        f = {
            s: e,
            f: k,
            r: n,
            t: l,
            c: g,
            a: f
        };
        e = Ri(e);
        f.s = e.name;
        f.g = e.fr;
        Fi[a].SC.push(f);
        ej(a);
    };
    if (
        "function" === typeof _.me.postMessage ||
        "object" === typeof _.me.postMessage
    )
        (Oi = new Ai()),
        _.Ui("__cb", Xi, function () {
            return !0;
        }),
        _.Ui("_processBatch", gj, function () {
            return !0;
        }),
        _.ij("..");

    _.jj = function (a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function () {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d);
        };
    };
    _.kj = function (a, b) {
        a: {
            for (var c = a.length, d = _.Ya(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a;
                }
            b = -1;
        }
        return 0 > b ? null : _.Ya(a) ? a.charAt(b) : a[b];
    };
    _.lj = [];
    _.mj = [];
    _.nj = !1;
    _.oj = function (a) {
        _.lj[_.lj.length] = a;
        if (_.nj)
            for (var b = 0; b < _.mj.length; b++) a((0, _.H)(_.mj[b].wrap, _.mj[b]));
    };

    var pj, qj, rj, zj;
    pj = null;
    qj = /^[\w+/_-]+[=]{0,2}$/;
    rj = function (a) {
        return (a = a.querySelector && a.querySelector("script[nonce]")) &&
            (a = a.nonce || a.getAttribute("nonce")) &&
            qj.test(a) ?
            a :
            "";
    };
    _.sj = function (a) {
        if (a && a != _.q) return rj(a.document);
        null === pj && (pj = rj(_.q.document));
        return pj;
    };
    _.tj = function (a, b) {
        for (var c in a)
            if (!(c in b) || a[c] !== b[c]) return !1;
        for (var d in b)
            if (!(d in a)) return !1;
        return !0;
    };
    _.uj = function (a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b;
    };
    _.vj = function (a) {
        return a;
    };
    _.wj = function (a, b) {
        a.src = _.hc(b);
    };
    _.xj = function (a, b) {
        a.src = _.gc(b);
        (b = _.sj()) && a.setAttribute("nonce", b);
    };
    _.yj = function (a) {
        var b = window.location;
        a = a instanceof _.mc ? a : _.rc(a);
        b.href = _.nc(a);
    };
    zj = function (a, b) {
        this.nS = a;
        this.LZ = b;
        this.Lv = 0;
        this.Te = null;
    };
    zj.prototype.get = function () {
        if (0 < this.Lv) {
            this.Lv--;
            var a = this.Te;
            this.Te = a.next;
            a.next = null;
        } else a = this.nS();
        return a;
    };
    zj.prototype.put = function (a) {
        this.LZ(a);
        100 > this.Lv && (this.Lv++, (a.next = this.Te), (this.Te = a));
    };
    var Aj, Cj, Dj, Bj;
    Aj = function (a) {
        _.q.setTimeout(function () {
            throw a;
        }, 0);
    };
    _.Ej = function (a) {
        a = Bj(a);
        !_.ob(_.q.setImmediate) ||
            (_.q.Window &&
                _.q.Window.prototype &&
                !_.Qb("Edge") &&
                _.q.Window.prototype.setImmediate == _.q.setImmediate) ?
            (Cj || (Cj = Dj()), Cj(a)) :
            _.q.setImmediate(a);
    };
    Dj = function () {
        var a = _.q.MessageChannel;
        "undefined" === typeof a &&
            "undefined" !== typeof window &&
            window.postMessage &&
            window.addEventListener &&
            !_.Qb("Presto") &&
            (a = function () {
                var e = document.createElement("IFRAME");
                e.style.display = "none";
                _.wj(e, _.kc(_.cc));
                document.documentElement.appendChild(e);
                var f = e.contentWindow;
                e = f.document;
                e.open();
                e.write(_.Lc(_.Nc));
                e.close();
                var g = "callImmediate" + Math.random(),
                    k =
                    "file:" == f.location.protocol ?
                    "*" :
                    f.location.protocol + "//" + f.location.host;
                e = (0, _.H)(function (l) {
                    if (("*" == k || l.origin == k) && l.data == g)
                        this.port1.onmessage();
                }, this);
                f.addEventListener("message", e, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function () {
                        f.postMessage(g, k);
                    }
                };
            });
        if ("undefined" !== typeof a && !_.Vb()) {
            var b = new a(),
                c = {},
                d = c;
            b.port1.onmessage = function () {
                if (_.Va(c.next)) {
                    c = c.next;
                    var e = c.cb;
                    c.cb = null;
                    e();
                }
            };
            return function (e) {
                d.next = {
                    cb: e
                };
                d = d.next;
                b.port2.postMessage(0);
            };
        }
        return "undefined" !== typeof document &&
            "onreadystatechange" in document.createElement("SCRIPT") ?
            function (e) {
                var f = document.createElement("SCRIPT");
                f.onreadystatechange = function () {
                    f.onreadystatechange = null;
                    f.parentNode.removeChild(f);
                    f = null;
                    e();
                    e = null;
                };
                document.documentElement.appendChild(f);
            } :
            function (e) {
                _.q.setTimeout(e, 0);
            };
    };
    Bj = _.vj;
    _.oj(function (a) {
        Bj = a;
    });
    var Fj = function () {
            this.nx = this.No = null;
        },
        Hj = new zj(
            function () {
                return new Gj();
            },
            function (a) {
                a.reset();
            }
        );
    Fj.prototype.add = function (a, b) {
        var c = Hj.get();
        c.set(a, b);
        this.nx ? (this.nx.next = c) : (this.No = c);
        this.nx = c;
    };
    Fj.prototype.remove = function () {
        var a = null;
        this.No &&
            ((a = this.No),
                (this.No = this.No.next),
                this.No || (this.nx = null),
                (a.next = null));
        return a;
    };
    var Gj = function () {
        this.next = this.scope = this.Pg = null;
    };
    Gj.prototype.set = function (a, b) {
        this.Pg = a;
        this.scope = b;
        this.next = null;
    };
    Gj.prototype.reset = function () {
        this.next = this.scope = this.Pg = null;
    };
    var Ij, Jj, Kj, Lj, Nj;
    _.Mj = function (a, b) {
        Ij || Jj();
        Kj || (Ij(), (Kj = !0));
        Lj.add(a, b);
    };
    Jj = function () {
        if (_.q.Promise && _.q.Promise.resolve) {
            var a = _.q.Promise.resolve(void 0);
            Ij = function () {
                a.then(Nj);
            };
        } else
            Ij = function () {
                _.Ej(Nj);
            };
    };
    Kj = !1;
    Lj = new Fj();
    Nj = function () {
        for (var a;
            (a = Lj.remove());) {
            try {
                a.Pg.call(a.scope);
            } catch (b) {
                Aj(b);
            }
            Hj.put(a);
        }
        Kj = !1;
    };
    _.Oj = function (a) {
        a.prototype.$goog_Thenable = !0;
    };
    _.Pj = function (a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable;
        } catch (b) {
            return !1;
        }
    };
    var Rj, Sj, dk, bk;
    _.Qj = function (a, b) {
        this.Ba = 0;
        this.Ff = void 0;
        this.Vm = this.Pj = this.Ya = null;
        this.Fu = this.Nz = !1;
        if (a != _.kb)
            try {
                var c = this;
                a.call(
                    b,
                    function (d) {
                        c.jh(2, d);
                    },
                    function (d) {
                        c.jh(3, d);
                    }
                );
            } catch (d) {
                this.jh(3, d);
            }
    };
    Rj = function () {
        this.next = this.context = this.Tn = this.wr = this.Yk = null;
        this.lp = !1;
    };
    Rj.prototype.reset = function () {
        this.context = this.Tn = this.wr = this.Yk = null;
        this.lp = !1;
    };
    Sj = new zj(
        function () {
            return new Rj();
        },
        function (a) {
            a.reset();
        }
    );
    _.Tj = function (a, b, c) {
        var d = Sj.get();
        d.wr = a;
        d.Tn = b;
        d.context = c;
        return d;
    };
    _.Uj = function (a) {
        if (a instanceof _.Qj) return a;
        var b = new _.Qj(_.kb);
        b.jh(2, a);
        return b;
    };
    _.Vj = function (a) {
        return new _.Qj(function (b, c) {
            c(a);
        });
    };
    _.Xj = function (a, b, c) {
        Wj(a, b, c, null) || _.Mj(_.jj(b, a));
    };
    _.Yj = function (a) {
        return new _.Qj(function (b, c) {
            var d = a.length,
                e = [];
            if (d)
                for (
                    var f = function (m, n) {
                            d--;
                            e[m] = n;
                            0 == d && b(e);
                        },
                        g = function (m) {
                            c(m);
                        },
                        k = 0,
                        l; k < a.length; k++
                )
                    (l = a[k]), _.Xj(l, _.jj(f, k), g);
            else b(e);
        });
    };
    _.ak = function () {
        var a,
            b,
            c = new _.Qj(function (d, e) {
                a = d;
                b = e;
            });
        return new Zj(c, a, b);
    };
    _.Qj.prototype.then = function (a, b, c) {
        return bk(this, _.ob(a) ? a : null, _.ob(b) ? b : null, c);
    };
    _.Oj(_.Qj);
    _.Qj.prototype.Xw = function (a, b) {
        return bk(this, null, a, b);
    };
    _.Qj.prototype.cancel = function (a) {
        0 == this.Ba &&
            _.Mj(function () {
                var b = new ck(a);
                dk(this, b);
            }, this);
    };
    dk = function (a, b) {
        if (0 == a.Ba)
            if (a.Ya) {
                var c = a.Ya;
                if (c.Pj) {
                    for (
                        var d = 0, e = null, f = null, g = c.Pj; g && (g.lp || (d++, g.Yk == a && (e = g), !(e && 1 < d))); g = g.next
                    )
                        e || (f = g);
                    e &&
                        (0 == c.Ba && 1 == d ?
                            dk(c, b) :
                            (f ?
                                ((d = f),
                                    d.next == c.Vm && (c.Vm = d),
                                    (d.next = d.next.next)) :
                                ek(c),
                                fk(c, e, 3, b)));
                }
                a.Ya = null;
            } else a.jh(3, b);
    };
    _.hk = function (a, b) {
        a.Pj || (2 != a.Ba && 3 != a.Ba) || gk(a);
        a.Vm ? (a.Vm.next = b) : (a.Pj = b);
        a.Vm = b;
    };
    bk = function (a, b, c, d) {
        var e = _.Tj(null, null, null);
        e.Yk = new _.Qj(function (f, g) {
            e.wr = b ?
                function (k) {
                    try {
                        var l = b.call(d, k);
                        f(l);
                    } catch (m) {
                        g(m);
                    }
                } :
                f;
            e.Tn = c ?
                function (k) {
                    try {
                        var l = c.call(d, k);
                        !_.Va(l) && k instanceof ck ? g(k) : f(l);
                    } catch (m) {
                        g(m);
                    }
                } :
                g;
        });
        e.Yk.Ya = a;
        _.hk(a, e);
        return e.Yk;
    };
    _.Qj.prototype.d1 = function (a) {
        this.Ba = 0;
        this.jh(2, a);
    };
    _.Qj.prototype.e1 = function (a) {
        this.Ba = 0;
        this.jh(3, a);
    };
    _.Qj.prototype.jh = function (a, b) {
        0 == this.Ba &&
            (this === b &&
                ((a = 3), (b = new TypeError("Promise cannot resolve to itself"))),
                (this.Ba = 1),
                Wj(b, this.d1, this.e1, this) ||
                ((this.Ff = b),
                    (this.Ba = a),
                    (this.Ya = null),
                    gk(this),
                    3 != a || b instanceof ck || ik(this, b)));
    };
    var Wj = function (a, b, c, d) {
            if (a instanceof _.Qj) return _.hk(a, _.Tj(b || _.kb, c || null, d)), !0;
            if (_.Pj(a)) return a.then(b, c, d), !0;
            if (_.nb(a))
                try {
                    var e = a.then;
                    if (_.ob(e)) return jk(a, e, b, c, d), !0;
                } catch (f) {
                    return c.call(d, f), !0;
                }
            return !1;
        },
        jk = function (a, b, c, d, e) {
            var f = !1,
                g = function (l) {
                    f || ((f = !0), c.call(e, l));
                },
                k = function (l) {
                    f || ((f = !0), d.call(e, l));
                };
            try {
                b.call(a, g, k);
            } catch (l) {
                k(l);
            }
        },
        gk = function (a) {
            a.Nz || ((a.Nz = !0), _.Mj(a.QS, a));
        },
        ek = function (a) {
            var b = null;
            a.Pj && ((b = a.Pj), (a.Pj = b.next), (b.next = null));
            a.Pj || (a.Vm = null);
            return b;
        };
    _.Qj.prototype.QS = function () {
        for (var a;
            (a = ek(this));) fk(this, a, this.Ba, this.Ff);
        this.Nz = !1;
    };
    var fk = function (a, b, c, d) {
            if (3 == c && b.Tn && !b.lp)
                for (; a && a.Fu; a = a.Ya) a.Fu = !1;
            if (b.Yk)(b.Yk.Ya = null), kk(b, c, d);
            else
                try {
                    b.lp ? b.wr.call(b.context) : kk(b, c, d);
                } catch (e) {
                    lk.call(null, e);
                }
            Sj.put(b);
        },
        kk = function (a, b, c) {
            2 == b ? a.wr.call(a.context, c) : a.Tn && a.Tn.call(a.context, c);
        },
        ik = function (a, b) {
            a.Fu = !0;
            _.Mj(function () {
                a.Fu && lk.call(null, b);
            });
        },
        lk = Aj,
        ck = function (a) {
            _.rb.call(this, a);
        };
    _.F(ck, _.rb);
    ck.prototype.name = "cancel";
    var Zj = function (a, b, c) {
        this.promise = a;
        this.resolve = b;
        this.reject = c;
    };

    _.mk = function (a) {
        return new _.Qj(a);
    };
    _.nk = _.nk || {};
    _.nk.getViewportDimensions = function () {
        var a = 0,
            b = 0;
        self.innerHeight ?
            ((a = self.innerWidth), (b = self.innerHeight)) :
            document.documentElement && document.documentElement.clientHeight ?
            ((a = document.documentElement.clientWidth),
                (b = document.documentElement.clientHeight)) :
            document.body &&
            ((a = document.body.clientWidth), (b = document.body.clientHeight));
        return {
            width: a,
            height: b
        };
    };

    _.nk = _.nk || {};
    (function () {
        function a(b, c) {
            window
                .getComputedStyle(b, "")
                .getPropertyValue(c)
                .match(/^([0-9]+)/);
            return parseInt(RegExp.$1, 10);
        }
        _.nk.getHeight = function () {
            var b = _.nk.getViewportDimensions().height,
                c = document.body,
                d = document.documentElement;
            if ("CSS1Compat" === document.compatMode && d.scrollHeight)
                return d.scrollHeight !== b ? d.scrollHeight : d.offsetHeight;
            if (0 <= navigator.userAgent.indexOf("AppleWebKit")) {
                b = 0;
                for (c = [document.body]; 0 < c.length;) {
                    var e = c.shift();
                    d = e.childNodes;
                    if ("undefined" !== typeof e.style) {
                        var f = e.style.overflowY;
                        f ||
                            (f = (f = document.defaultView.getComputedStyle(e, null)) ?
                                f.overflowY :
                                null);
                        if (
                            "visible" != f &&
                            "inherit" != f &&
                            ((f = e.style.height),
                                f ||
                                (f = (f = document.defaultView.getComputedStyle(e, null)) ?
                                    f.height :
                                    ""),
                                0 < f.length && "auto" != f)
                        )
                            continue;
                    }
                    for (e = 0; e < d.length; e++) {
                        f = d[e];
                        if (
                            "undefined" !== typeof f.offsetTop &&
                            "undefined" !== typeof f.offsetHeight
                        ) {
                            var g = f.offsetTop + f.offsetHeight + a(f, "margin-bottom");
                            b = Math.max(b, g);
                        }
                        c.push(f);
                    }
                }
                return (
                    b +
                    a(document.body, "border-bottom") +
                    a(document.body, "margin-bottom") +
                    a(document.body, "padding-bottom")
                );
            }
            if (c && d)
                return (
                    (e = d.scrollHeight),
                    (f = d.offsetHeight),
                    d.clientHeight !== f && ((e = c.scrollHeight), (f = c.offsetHeight)),
                    e > b ? (e > f ? e : f) : e < f ? e : f
                );
        };
    })();

    var Eh;
    Eh = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/u\/(\d)\//;
    _.Fh = function (a) {
        var b = _.Q("googleapis.config/sessionIndex");
        "string" === typeof b && 254 < b.length && (b = null);
        null == b && (b = window.__X_GOOG_AUTHUSER);
        "string" === typeof b && 254 < b.length && (b = null);
        if (null == b) {
            var c = window.google;
            c && (b = c.authuser);
        }
        "string" === typeof b && 254 < b.length && (b = null);
        null == b &&
            ((a = a || window.location.href),
                (b = _.ve(a, "authuser") || null),
                null == b && (b = (b = a.match(Eh)) ? b[1] : null));
        if (null == b) return null;
        b = String(b);
        254 < b.length && (b = null);
        return b;
    };

    var Ih = function () {
        this.Nj = -1;
    };
    _.Jh = function () {
        this.Nj = 64;
        this.Bc = [];
        this.Cy = [];
        this.ZQ = [];
        this.Yv = [];
        this.Yv[0] = 128;
        for (var a = 1; a < this.Nj; ++a) this.Yv[a] = 0;
        this.Zw = this.Dn = 0;
        this.reset();
    };
    _.F(_.Jh, Ih);
    _.Jh.prototype.reset = function () {
        this.Bc[0] = 1732584193;
        this.Bc[1] = 4023233417;
        this.Bc[2] = 2562383102;
        this.Bc[3] = 271733878;
        this.Bc[4] = 3285377520;
        this.Zw = this.Dn = 0;
    };
    var Kh = function (a, b, c) {
        c || (c = 0);
        var d = a.ZQ;
        if (_.Ya(b))
            for (var e = 0; 16 > e; e++)
                (d[e] =
                    (b.charCodeAt(c) << 24) |
                    (b.charCodeAt(c + 1) << 16) |
                    (b.charCodeAt(c + 2) << 8) |
                    b.charCodeAt(c + 3)),
                (c += 4);
        else
            for (e = 0; 16 > e; e++)
                (d[e] = (b[c] << 24) | (b[c + 1] << 16) | (b[c + 2] << 8) | b[c + 3]),
                (c += 4);
        for (e = 16; 80 > e; e++) {
            var f = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
            d[e] = ((f << 1) | (f >>> 31)) & 4294967295;
        }
        b = a.Bc[0];
        c = a.Bc[1];
        var g = a.Bc[2],
            k = a.Bc[3],
            l = a.Bc[4];
        for (e = 0; 80 > e; e++) {
            if (40 > e)
                if (20 > e) {
                    f = k ^ (c & (g ^ k));
                    var m = 1518500249;
                } else(f = c ^ g ^ k), (m = 1859775393);
            else
                60 > e ?
                ((f = (c & g) | (k & (c | g))), (m = 2400959708)) :
                ((f = c ^ g ^ k), (m = 3395469782));
            f = (((b << 5) | (b >>> 27)) + f + l + m + d[e]) & 4294967295;
            l = k;
            k = g;
            g = ((c << 30) | (c >>> 2)) & 4294967295;
            c = b;
            b = f;
        }
        a.Bc[0] = (a.Bc[0] + b) & 4294967295;
        a.Bc[1] = (a.Bc[1] + c) & 4294967295;
        a.Bc[2] = (a.Bc[2] + g) & 4294967295;
        a.Bc[3] = (a.Bc[3] + k) & 4294967295;
        a.Bc[4] = (a.Bc[4] + l) & 4294967295;
    };
    _.Jh.prototype.update = function (a, b) {
        if (null != a) {
            _.Va(b) || (b = a.length);
            for (var c = b - this.Nj, d = 0, e = this.Cy, f = this.Dn; d < b;) {
                if (0 == f)
                    for (; d <= c;) Kh(this, a, d), (d += this.Nj);
                if (_.Ya(a))
                    for (; d < b;) {
                        if (((e[f] = a.charCodeAt(d)), ++f, ++d, f == this.Nj)) {
                            Kh(this, e);
                            f = 0;
                            break;
                        }
                    }
                else
                    for (; d < b;)
                        if (((e[f] = a[d]), ++f, ++d, f == this.Nj)) {
                            Kh(this, e);
                            f = 0;
                            break;
                        }
            }
            this.Dn = f;
            this.Zw += b;
        }
    };
    _.Jh.prototype.digest = function () {
        var a = [],
            b = 8 * this.Zw;
        56 > this.Dn ?
            this.update(this.Yv, 56 - this.Dn) :
            this.update(this.Yv, this.Nj - (this.Dn - 56));
        for (var c = this.Nj - 1; 56 <= c; c--)(this.Cy[c] = b & 255), (b /= 256);
        Kh(this, this.Cy);
        for (c = b = 0; 5 > c; c++)
            for (var d = 24; 0 <= d; d -= 8)(a[b] = (this.Bc[c] >> d) & 255), ++b;
        return a;
    };

    _.Lh = function () {
        this.$D = new _.Jh();
    };
    _.h = _.Lh.prototype;
    _.h.reset = function () {
        this.$D.reset();
    };
    _.h.EN = function (a) {
        this.$D.update(a);
    };
    _.h.vH = function () {
        return this.$D.digest();
    };
    _.h.AE = function (a) {
        a = unescape(encodeURIComponent(a));
        for (var b = [], c = 0, d = a.length; c < d; ++c) b.push(a.charCodeAt(c));
        this.EN(b);
    };
    _.h.Mg = function () {
        for (var a = this.vH(), b = "", c = 0; c < a.length; c++)
            b +=
            "0123456789ABCDEF".charAt(Math.floor(a[c] / 16)) +
            "0123456789ABCDEF".charAt(a[c] % 16);
        return b;
    };

    var pk, ok, vk, wk, qk, tk, rk, xk, sk;
    _.uk = function () {
        if (ok) {
            var a = new _.me.Uint32Array(1);
            pk.getRandomValues(a);
            a = Number("0." + a[0]);
        } else
            (a = qk),
            (a += parseInt(rk.substr(0, 20), 16)),
            (rk = sk(rk)),
            (a /= tk + Math.pow(16, 20));
        return a;
    };
    pk = _.me.crypto;
    ok = !1;
    vk = 0;
    wk = 0;
    qk = 1;
    tk = 0;
    rk = "";
    xk = function (a) {
        a = a || _.me.event;
        var b = (a.screenX + a.clientX) << 16;
        b += a.screenY + a.clientY;
        b *= new Date().getTime() % 1e6;
        qk = (qk * b) % tk;
        0 < vk && ++wk == vk && _.ze(_.me, "mousemove", xk, "remove", "de");
    };
    sk = function (a) {
        var b = new _.Lh();
        b.AE(a);
        return b.Mg();
    };
    ok = !!pk && "function" == typeof pk.getRandomValues;
    ok ||
        ((tk = 1e6 * (screen.width * screen.width + screen.height)),
            (rk = sk(
                _.ne.cookie +
                "|" +
                _.ne.location +
                "|" +
                new Date().getTime() +
                "|" +
                Math.random()
            )),
            (vk = _.Q("random/maxObserveMousemove") || 0),
            0 != vk && _.Ae(_.me, "mousemove", xk));

    var yk,
        Ck,
        Dk,
        Ek,
        Fk,
        Gk,
        Hk,
        Ik,
        Jk,
        Kk,
        Lk,
        Mk,
        Nk,
        Rk,
        Tk,
        Vk,
        Wk,
        Xk,
        Yk,
        Zk;
    _.zk = function (a) {
        return !!a && "object" === typeof a && _.pe.test(a.push);
    };
    _.Ak = function (a) {
        for (var b = 0; b < this.length; b++)
            if (this[b] === a) return b;
        return -1;
    };
    _.Bk = function (a, b) {
        if (!a) throw Error(b || "");
    };
    Ck = /&/g;
    Dk = /</g;
    Ek = />/g;
    Fk = /"/g;
    Gk = /'/g;
    Hk = function (a) {
        return String(a)
            .replace(Ck, "&amp;")
            .replace(Dk, "&lt;")
            .replace(Ek, "&gt;")
            .replace(Fk, "&quot;")
            .replace(Gk, "&#39;");
    };
    Ik = /[\ud800-\udbff][\udc00-\udfff]|[^!-~]/g;
    Jk = /%([a-f]|[0-9a-fA-F][a-f])/g;
    Kk = /^(https?|ftp|file|chrome-extension):$/i;
    Lk = function (a) {
        a = String(a);
        a = a
            .replace(Ik, function (e) {
                try {
                    return encodeURIComponent(e);
                } catch (f) {
                    return encodeURIComponent(e.replace(/^[^%]+$/g, "\ufffd"));
                }
            })
            .replace(_.xe, function (e) {
                return e.replace(/%/g, "%25");
            })
            .replace(Jk, function (e) {
                return e.toUpperCase();
            });
        a = a.match(_.we) || [];
        var b = _.re(),
            c = function (e) {
                return e
                    .replace(/\\/g, "%5C")
                    .replace(/\^/g, "%5E")
                    .replace(/`/g, "%60")
                    .replace(/\{/g, "%7B")
                    .replace(/\|/g, "%7C")
                    .replace(/\}/g, "%7D");
            },
            d = !!(a[1] || "").match(Kk);
        b.vp = c((a[1] || "") + (a[2] || "") + (a[3] || (a[2] && d ? "/" : "")));
        d = function (e) {
            return c(e.replace(/\?/g, "%3F").replace(/#/g, "%23"));
        };
        b.query = a[5] ? [d(a[5])] : [];
        b.Dh = a[7] ? [d(a[7])] : [];
        return b;
    };
    Mk = function (a) {
        return (
            a.vp +
            (0 < a.query.length ? "?" + a.query.join("&") : "") +
            (0 < a.Dh.length ? "#" + a.Dh.join("&") : "")
        );
    };
    Nk = function (a, b) {
        var c = [];
        if (a)
            for (var d in a)
                if (_.se(a, d) && null != a[d]) {
                    var e = b ? b(a[d]) : a[d];
                    c.push(encodeURIComponent(d) + "=" + encodeURIComponent(e));
                }
        return c;
    };
    _.Ok = function (a, b, c, d) {
        a = Lk(a);
        a.query.push.apply(a.query, Nk(b, d));
        a.Dh.push.apply(a.Dh, Nk(c, d));
        return Mk(a);
    };
    _.Pk = function (a, b) {
        var c = Lk(b);
        b = c.vp;
        c.query.length && (b += "?" + c.query.join(""));
        c.Dh.length && (b += "#" + c.Dh.join(""));
        var d = "";
        2e3 < b.length &&
            ((c = b),
                (b = b.substr(0, 2e3)),
                (b = b.replace(_.ye, "")),
                (d = c.substr(b.length)));
        var e = a.createElement("div");
        a = a.createElement("a");
        c = Lk(b);
        b = c.vp;
        c.query.length && (b += "?" + c.query.join(""));
        c.Dh.length && (b += "#" + c.Dh.join(""));
        a.href = b;
        e.appendChild(a);
        e.innerHTML = e.innerHTML;
        b = String(e.firstChild.href);
        e.parentNode && e.parentNode.removeChild(e);
        c = Lk(b + d);
        b = c.vp;
        c.query.length && (b += "?" + c.query.join(""));
        c.Dh.length && (b += "#" + c.Dh.join(""));
        return b;
    };
    _.Qk = /^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;
    Rk = function (a) {
        for (; a.firstChild;) a.removeChild(a.firstChild);
    };
    _.Sk = function (a, b) {
        var c = _.qe(_.Be, "watt", _.re());
        _.qe(c, a, b);
    };
    Tk = /^https?:\/\/(?:\w|[\-\.])+\.google\.(?:\w|[\-:\.])+(?:\/[^\?#]*)?\/b\/(\d{10,21})\//;
    Vk = function (a) {
        var b = _.Q("googleapis.config/sessionDelegate");
        "string" === typeof b && 21 < b.length && (b = null);
        null == b &&
            (b = (a = (a || window.location.href).match(Tk)) ? a[1] : null);
        if (null == b) return null;
        b = String(b);
        21 < b.length && (b = null);
        return b;
    };
    Wk = function () {
        var a = _.Be.onl;
        if (!a) {
            a = _.re();
            _.Be.onl = a;
            var b = _.re();
            a.e = function (c) {
                var d = b[c];
                d && (delete b[c], d());
            };
            a.a = function (c, d) {
                b[c] = d;
            };
            a.r = function (c) {
                delete b[c];
            };
        }
        return a;
    };
    Xk = function (a, b) {
        b = b.onload;
        return "function" === typeof b ? (Wk().a(a, b), b) : null;
    };
    Yk = function (a) {
        _.Bk(/^\w+$/.test(a), "Unsupported id - " + a);
        Wk();
        return 'onload="window.___jsl.onl.e(&#34;' + a + '&#34;)"';
    };
    Zk = function (a) {
        Wk().r(a);
    };
    var al, bl, fl;
    _.$k = {
        allowtransparency: "true",
        frameborder: "0",
        hspace: "0",
        marginheight: "0",
        marginwidth: "0",
        scrolling: "no",
        style: "",
        tabindex: "0",
        vspace: "0",
        width: "100%"
    };
    al = {
        allowtransparency: !0,
        onload: !0
    };
    bl = 0;
    _.cl = function (a, b) {
        var c = 0;
        do var d = b.id || ["I", bl++, "_", new Date().getTime()].join("");
        while (a.getElementById(d) && 5 > ++c);
        _.Bk(5 > c, "Error creating iframe id");
        return d;
    };
    _.dl = function (a, b) {
        return a ? b + "/" + a : "";
    };
    _.el = function (a, b, c, d) {
        var e = {},
            f = {};
        a.documentMode && 9 > a.documentMode && (e.hostiemode = a.documentMode);
        _.te(d.queryParams || {}, e);
        _.te(d.fragmentParams || {}, f);
        var g = d.pfname;
        var k = _.re();
        _.Q("iframes/dropLegacyIdParam") || (k.id = c);
        k._gfid = c;
        k.parent = a.location.protocol + "//" + a.location.host;
        c = _.ve(a.location.href, "parent");
        g = g || "";
        !g &&
            c &&
            ((g =
                    _.ve(a.location.href, "_gfid", "") || _.ve(a.location.href, "id", "")),
                (g = _.dl(g, _.ve(a.location.href, "pfname", ""))));
        g ||
            ((c = _.Ff(_.ve(a.location.href, "jcp", ""))) &&
                "object" == typeof c &&
                (g = _.dl(c.id, c.pfname)));
        k.pfname = g;
        d.connectWithJsonParam && ((g = {}), (g.jcp = _.Gf(k)), (k = g));
        g = _.ve(b, "rpctoken") || e.rpctoken || f.rpctoken;
        g ||
            ((g = d.rpctoken || String(Math.round(1e8 * _.uk()))), (k.rpctoken = g));
        d.rpctoken = g;
        _.te(k, d.connectWithQueryParams ? e : f);
        k = a.location.href;
        a = _.re();
        (g = _.ve(k, "_bsh", _.Be.bsh)) && (a._bsh = g);
        (k = _.Be.dpo ? _.Be.h : _.ve(k, "jsh", _.Be.h)) && (a.jsh = k);
        d.hintInFragment ? _.te(a, f) : _.te(a, e);
        return _.Ok(b, e, f, d.paramsSerializer);
    };
    fl = function (a) {
        _.Bk(!a || _.Qk.test(a), "Illegal url for new iframe - " + a);
    };
    _.gl = function (a, b, c, d, e) {
        fl(c.src);
        var f,
            g = Xk(d, c),
            k = g ? Yk(d) : "";
        try {
            document.all &&
                (f = a.createElement(
                    '<iframe frameborder="' +
                    Hk(String(c.frameborder)) +
                    '" scrolling="' +
                    Hk(String(c.scrolling)) +
                    '" ' +
                    k +
                    ' name="' +
                    Hk(String(c.name)) +
                    '"/>'
                ));
        } catch (m) {} finally {
            f ||
                ((f = a.createElement("iframe")),
                    g &&
                    ((f.onload = function () {
                            f.onload = null;
                            g.call(this);
                        }),
                        Zk(d)));
        }
        f.setAttribute("ng-non-bindable", "");
        for (var l in c)
            (a = c[l]),
            "style" === l && "object" === typeof a ?
            _.te(a, f.style) :
            al[l] || f.setAttribute(l, String(a));
        (l = (e && e.beforeNode) || null) || (e && e.dontclear) || Rk(b);
        b.insertBefore(f, l);
        f = l ? l.previousSibling : b.lastChild;
        c.allowtransparency && (f.allowTransparency = !0);
        return f;
    };
    var hl, kl;
    hl = /^:[\w]+$/;
    _.il = /:([a-zA-Z_]+):/g;
    _.jl = function () {
        var a = _.Fh() || "0",
            b = Vk();
        var c = _.Fh(void 0) || a;
        var d = Vk(void 0),
            e = "";
        c && (e += "u/" + encodeURIComponent(String(c)) + "/");
        d && (e += "b/" + encodeURIComponent(String(d)) + "/");
        c = e || null;
        (e = (d = !1 === _.Q("isLoggedIn")) ? "_/im/" : "") && (c = "");
        var f = _.Q("iframes/:socialhost:"),
            g = _.Q("iframes/:im_socialhost:");
        return (yk = {
            socialhost: f,
            ctx_socialhost: d ? g : f,
            session_index: a,
            session_delegate: b,
            session_prefix: c,
            im_prefix: e
        });
    };
    kl = function (a, b) {
        return _.jl()[b] || "";
    };
    _.ll = function (a) {
        return _.Pk(_.ne, a.replace(_.il, kl));
    };
    _.ml = function (a) {
        var b = a;
        hl.test(a) &&
            ((b = _.Q("iframes/" + b.substring(1) + "/url")),
                _.Bk(!!b, "Unknown iframe url config for - " + a));
        return _.ll(b);
    };
    _.nl = function (a, b, c) {
        var d = c || {};
        c = d.attributes || {};
        _.Bk(
            !(d.allowPost || d.forcePost) || !c.onload,
            "onload is not supported by post iframe (allowPost or forcePost)"
        );
        a = _.ml(a);
        c = b.ownerDocument || _.ne;
        var e = _.cl(c, d);
        a = _.el(c, a, e, d);
        var f = _.re();
        _.te(_.$k, f);
        _.te(d.attributes, f);
        f.name = f.id = e;
        f.src = a;
        d.eurl = a;
        var g = d || {},
            k = !!g.allowPost;
        if (g.forcePost || (k && 2e3 < a.length)) {
            g = Lk(a);
            f.src = "";
            d.dropDataPostorigin || (f["data-postorigin"] = a);
            a = _.gl(c, b, f, e);
            if (-1 != navigator.userAgent.indexOf("WebKit")) {
                var l = a.contentWindow.document;
                l.open();
                f = l.createElement("div");
                k = {};
                var m = e + "_inner";
                k.name = m;
                k.src = "";
                k.style = "display:none";
                _.gl(c, f, k, m, d);
            }
            f = (d = g.query[0]) ? d.split("&") : [];
            d = [];
            for (k = 0; k < f.length; k++)
                (m = f[k].split("=", 2)),
                d.push([decodeURIComponent(m[0]), decodeURIComponent(m[1])]);
            g.query = [];
            f = Mk(g);
            _.Bk(_.Qk.test(f), "Invalid URL: " + f);
            g = c.createElement("form");
            g.action = f;
            g.method = "POST";
            g.target = e;
            g.style.display = "none";
            for (e = 0; e < d.length; e++)
                (f = c.createElement("input")),
                (f.type = "hidden"),
                (f.name = d[e][0]),
                (f.value = d[e][1]),
                g.appendChild(f);
            b.appendChild(g);
            g.submit();
            g.parentNode.removeChild(g);
            l && l.close();
            b = a;
        } else b = _.gl(c, b, f, e, d);
        return b;
    };

    _.ol = function (a) {
        this.R = a;
    };
    _.h = _.ol.prototype;
    _.h.value = function () {
        return this.R;
    };
    _.h.tj = function (a) {
        this.R.width = a;
        return this;
    };
    _.h.od = function () {
        return this.R.width;
    };
    _.h.Yh = function (a) {
        this.R.height = a;
        return this;
    };
    _.h.getHeight = function () {
        return this.R.height;
    };
    _.h.Yc = function (a) {
        this.R.style = a;
        return this;
    };
    _.h.Hl = _.ea(7);
    var pl = function (a) {
        this.R = a;
    };
    pl.prototype.xo = function (a) {
        this.R.anchor = a;
        return this;
    };
    pl.prototype.vf = function () {
        return this.R.anchor;
    };
    pl.prototype.wD = function (a) {
        this.R.anchorPosition = a;
        return this;
    };
    _.ql = function (a) {
        a.R.show = !0;
        return a;
    };
    pl.prototype.Yh = function (a) {
        this.R.height = a;
        return this;
    };
    pl.prototype.getHeight = function () {
        return this.R.height;
    };
    pl.prototype.tj = function (a) {
        this.R.width = a;
        return this;
    };
    pl.prototype.od = function () {
        return this.R.width;
    };
    _.rl = function (a) {
        this.R = a || {};
    };
    _.rl.prototype.value = function () {
        return this.R;
    };
    _.rl.prototype.setUrl = function (a) {
        this.R.url = a;
        return this;
    };
    _.rl.prototype.getUrl = function () {
        return this.R.url;
    };
    _.sl = function (a, b) {
        a.R.where = b;
        return a;
    };
    _.h = _.rl.prototype;
    _.h.Yc = function (a) {
        this.R.style = a;
        return this;
    };
    _.h.Hl = _.ea(6);
    _.h.He = function (a) {
        this.R.id = a;
        return this;
    };
    _.h.getId = function () {
        return this.R.id;
    };
    _.h.Ek = _.ea(8);
    _.tl = function (a, b) {
        a.R.queryParams = b;
        return a;
    };
    _.ul = function (a, b) {
        a.R.relayOpen = b;
        return a;
    };
    _.vl = function (a, b) {
        a.R.messageHandlers = b;
        return a;
    };
    _.wl = function (a, b) {
        a.R.messageHandlersFilter = b;
        return a;
    };
    _.rl.prototype.yo = _.ea(9);
    _.rl.prototype.getContext = function () {
        return this.R.context;
    };
    _.rl.prototype.Kc = function () {
        return this.R.openerIframe;
    };
    _.xl = function (a) {
        return new pl(a.R);
    };
    _.rl.prototype.xl = function () {
        this.R.attributes = this.R.attributes || {};
        return new _.ol(this.R.attributes);
    };
    _.yl = function (a) {
        a.R.connectWithQueryParams = !0;
        return a;
    };

    var zl, Dl, El, Fl, Kl, Jl;
    _.ol.prototype.Hl = _.Ad(7, function () {
        return this.R.style;
    });
    _.rl.prototype.Hl = _.Ad(6, function () {
        return this.R.style;
    });
    zl = function (a, b) {
        a.R.onload = b;
    };
    _.Al = function (a) {
        a.R.closeClickDetection = !0;
    };
    _.Bl = function (a) {
        return a.R.rpctoken;
    };
    _.Cl = function (a) {
        a.R.waitForOnload = !0;
        return a;
    };
    Dl = function (a) {
        return (a = a.R.timeout) ? a : null;
    };
    _.Hl = function (a, b, c) {
        if (a) {
            _.Bk(_.zk(a), "arrayForEach was called with a non array value");
            for (var d = 0; d < a.length; d++) b.call(c, a[d], d);
        }
    };
    _.Il = function (a, b, c) {
        if (a)
            if (_.zk(a)) _.Hl(a, b, c);
            else {
                _.Bk(
                    "object" === typeof a,
                    "objectForEach was called with a non object value"
                );
                c = c || a;
                for (var d in a) _.se(a, d) && void 0 !== a[d] && b.call(c, a[d], d);
            }
    };
    Kl = function (a) {
        this.resolve = this.reject = null;
        this.promise = _.mk(
            (0, _.H)(function (b, c) {
                this.resolve = b;
                this.reject = c;
            }, this)
        );
        a && (this.promise = Jl(this.promise, a));
    };
    Jl = function (a, b) {
        return a.then(function (c) {
            try {
                b(c);
            } catch (d) {}
            return c;
        });
    };
    _.Ll = function (a) {
        this.R = a || {};
    };
    _.F(_.Ll, _.rl);
    _.Ml = function (a, b) {
        a.R.frameName = b;
        return a;
    };
    _.Ll.prototype.yd = function () {
        return this.R.frameName;
    };
    _.Nl = function (a, b) {
        a.R.rpcAddr = b;
        return a;
    };
    _.Ll.prototype.Fl = function () {
        return this.R.rpcAddr;
    };
    _.Ol = function (a, b) {
        a.R.retAddr = b;
        return a;
    };
    _.Pl = function (a) {
        return a.R.retAddr;
    };
    _.Ll.prototype.Zh = function (a) {
        this.R.origin = a;
        return this;
    };
    _.Ll.prototype.getOrigin = function () {
        return this.R.origin;
    };
    _.Ll.prototype.rj = function (a) {
        this.R.setRpcReady = a;
        return this;
    };
    _.Ql = function (a) {
        return a.R.setRpcReady;
    };
    _.Ll.prototype.Ao = function (a) {
        this.R.context = a;
    };
    var Rl = function (a, b) {
        a.R._rpcReadyFn = b;
    };
    _.Ll.prototype.Fa = function () {
        return this.R.iframeEl;
    };
    var Sl, Xl, Wl;
    Sl = /^[\w\.\-]*$/;
    _.Tl = function (a) {
        return a.Mc === a.getContext().Mc;
    };
    _.Ul = function () {
        return !0;
    };
    _.Vl = function (a) {
        for (var b = _.re(), c = 0; c < a.length; c++) b[a[c]] = !0;
        return function (d) {
            return !!b[d.Mc];
        };
    };
    Xl = function (a, b, c) {
        return function (d) {
            if (!b.Eb) {
                _.Bk(
                    this.origin === b.Mc,
                    "Wrong origin " + this.origin + " != " + b.Mc
                );
                var e = this.callback;
                d = Wl(a, d, b);
                !c && 0 < d.length && _.Yj(d).then(e);
            }
        };
    };
    Wl = function (a, b, c) {
        a = El[a];
        if (!a) return [];
        for (var d = [], e = 0; e < a.length; e++) d.push(_.Uj(a[e].call(c, b, c)));
        return d;
    };
    _.Yl = function (a, b, c) {
        _.Bk("_default" != a, "Cannot update default api");
        Fl[a] = {
            map: b,
            filter: c
        };
    };
    _.Zl = function (a, b, c) {
        _.Bk("_default" != a, "Cannot update default api");
        _.qe(Fl, a, {
            map: {},
            filter: _.Tl
        }).map[b] = c;
    };
    _.$l = function (a, b) {
        _.qe(Fl, "_default", {
            map: {},
            filter: _.Ul
        }).map[a] = b;
        _.Il(_.Gl.Pe, function (c) {
            c.register(a, b, _.Ul);
        });
    };
    _.am = function () {
        return _.Gl;
    };
    _.cm = function (a) {
        a = a || {};
        this.Eb = !1;
        this.lL = _.re();
        this.Pe = _.re();
        this.Le = a._window || _.me;
        this.Pc = this.Le.location.href;
        this.mL = (this.BC = bm(this.Pc, "parent")) ? bm(this.Pc, "pfname") : "";
        this.ya = this.BC ? bm(this.Pc, "_gfid") || bm(this.Pc, "id") : "";
        this.uf = _.dl(this.ya, this.mL);
        this.Mc = _.rg.getOrigin(this.Pc);
        if (this.ya) {
            var b = new _.Ll();
            _.Nl(b, a._parentRpcAddr || "..");
            _.Ol(b, a._parentRetAddr || this.ya);
            b.Zh(_.rg.getOrigin(this.BC || this.Pc));
            _.Ml(b, this.mL);
            this.Ya = this.Lj(b.value());
        } else this.Ya = null;
    };
    _.h = _.cm.prototype;
    _.h.In = _.ea(11);
    _.h.Ca = function () {
        if (!this.Eb) {
            for (var a = 0; a < this.Pe.length; a++) this.Pe[a].Ca();
            this.Eb = !0;
        }
    };
    _.h.yd = function () {
        return this.uf;
    };
    _.h.tb = function () {
        return this.Le;
    };
    _.h.mb = function () {
        return this.Le.document;
    };
    _.h.Fw = _.ea(12);
    _.h.pA = function (a) {
        return this.lL[a];
    };
    _.h.Lj = function (a) {
        _.Bk(!this.Eb, "Cannot attach iframe in disposed context");
        a = new _.Ll(a);
        a.Fl() || _.Nl(a, a.getId());
        _.Pl(a) || _.Ol(a, "..");
        a.getOrigin() || a.Zh(_.rg.getOrigin(a.getUrl()));
        a.yd() || _.Ml(a, _.dl(a.getId(), this.uf));
        var b = a.yd();
        if (this.Pe[b]) return this.Pe[b];
        var c = a.Fl(),
            d = c;
        a.getOrigin() && (d = c + "|" + a.getOrigin());
        var e = _.Pl(a),
            f = _.Bl(a);
        f ||
            ((f =
                    ((f = a.Fa()) && (f.getAttribute("data-postorigin") || f.src)) ||
                    a.getUrl()),
                (f = _.ve(f, "rpctoken")));
        Rl(a, _.ij(d, e, f, a.R._popupWindow));
        d = ((window.gadgets || {}).rpc || {}).setAuthToken;
        f && d && d(c, f);
        var g = new _.dm(this, c, b, a),
            k = a.R.messageHandlersFilter;
        _.Il(a.R.messageHandlers, function (l, m) {
            g.register(m, l, k);
        });
        _.Ql(a) && g.rj();
        _.em(g, "_g_rpcReady");
        return g;
    };
    _.h.gD = function (a) {
        _.Ml(a, null);
        var b = a.getId();
        !b ||
            (Sl.test(b) && !this.tb().document.getElementById(b)) ||
            (_.Se("Ignoring requested iframe ID - " + b), a.He(null));
    };
    var bm = function (a, b) {
        var c = _.ve(a, b);
        c || (c = _.Ff(_.ve(a, "jcp", ""))[b]);
        return c || "";
    };
    _.cm.prototype.Sh = function (a) {
        _.Bk(!this.Eb, "Cannot open iframe in disposed context");
        var b = new _.Ll(a);
        fm(this, b);
        var c = b.yd();
        if (c && this.Pe[c]) return this.Pe[c];
        this.gD(b);
        c = b.getUrl();
        _.Bk(c, "No url for new iframe");
        var d = b.R.queryParams || {};
        d.usegapi = "1";
        _.tl(b, d);
        d = this.hJ && this.hJ(c, b);
        d ||
            ((d = b.R.where),
                _.Bk(!!d, "No location for new iframe"),
                (c = _.nl(c, d, a)),
                (b.R.iframeEl = c),
                (d = c.getAttribute("id")));
        _.Nl(b, d).He(d);
        b.Zh(_.rg.getOrigin(b.R.eurl || ""));
        this.qK && this.qK(b, b.Fa());
        c = this.Lj(a);
        c.RD && c.RD(c, a);
        (a = b.R.onCreate) && a(c);
        b.R.disableRelayOpen || c.mp("_open");
        return c;
    };
    var gm = function (a, b, c) {
            var d = b.R.canvasUrl;
            if (!d) return c;
            _.Bk(
                !b.R.allowPost && !b.R.forcePost,
                "Post is not supported when using canvas url"
            );
            var e = b.getUrl();
            _.Bk(
                e && _.rg.getOrigin(e) === a.Mc && _.rg.getOrigin(d) === a.Mc,
                "Wrong origin for canvas or hidden url " + d
            );
            b.setUrl(d);
            _.Cl(b);
            b.R.canvasUrl = null;
            return function (f) {
                var g = f.tb(),
                    k = g.location.hash;
                k = _.ml(e) + (/#/.test(e) ? k.replace(/^#/, "&") : k);
                g.location.replace(k);
                c && c(f);
            };
        },
        im = function (a, b, c) {
            var d = b.R.relayOpen;
            if (d) {
                var e = a.Ya;
                d instanceof _.dm ?
                    ((e = d), _.ul(b, 0)) :
                    0 < Number(d) && _.ul(b, Number(d) - 1);
                if (e) {
                    _.Bk(!!e.eL, "Relaying iframe open is disabled");
                    if ((d = b.Hl()))
                        if ((d = _.hm[d])) b.Ao(a), d(b.value()), b.Ao(null);
                    b.R.openerIframe = null;
                    c.resolve(e.eL(b));
                    return !0;
                }
            }
            return !1;
        },
        mm = function (a, b, c) {
            var d = b.Hl();
            if (d)
                if (
                    (_.Bk(!!_.jm, "Defer style is disabled, when requesting style " + d),
                        _.km[d])
                )
                    fm(a, b);
                else
                    return (
                        lm(d, function () {
                            _.Bk(!!_.km[d], "Fail to load style - " + d);
                            c.resolve(a.open(b.value()));
                        }),
                        !0
                    );
            return !1;
        };
    _.cm.prototype.open = function (a, b) {
        _.Bk(!this.Eb, "Cannot open iframe in disposed context");
        var c = new _.Ll(a);
        b = gm(this, c, b);
        var d = new Kl(b);
        (b = c.getUrl()) && c.setUrl(_.ml(b));
        if (im(this, c, d) || mm(this, c, d) || im(this, c, d)) return d.promise;
        if (null != Dl(c)) {
            var e = setTimeout(function () {
                    g.Fa().src = "about:blank";
                    d.reject({
                        timeout: "Exceeded time limit of :" + Dl(c) + "milliseconds"
                    });
                }, Dl(c)),
                f = d.resolve;
            d.resolve = function (k) {
                clearTimeout(e);
                f(k);
            };
        }
        c.R.waitForOnload &&
            zl(c.xl(), function () {
                d.resolve(g);
            });
        var g = this.Sh(a);
        c.R.waitForOnload || d.resolve(g);
        return d.promise;
    };
    _.cm.prototype.yI = _.ea(13);
    _.dm = function (a, b, c, d) {
        this.Eb = !1;
        this.Nd = a;
        this.jj = b;
        this.uf = c;
        this.wa = d;
        this.no = _.Pl(this.wa);
        this.Mc = this.wa.getOrigin();
        this.OW = this.wa.Fa();
        this.fN = this.wa.R.where;
        this.$n = [];
        this.mp("_default");
        a = this.wa.R.apis || [];
        for (b = 0; b < a.length; b++) this.mp(a[b]);
        this.Nd.Pe[c] = this;
    };
    _.h = _.dm.prototype;
    _.h.In = _.ea(10);
    _.h.Ca = function () {
        if (!this.Eb) {
            for (var a = 0; a < this.$n.length; a++) this.unregister(this.$n[a]);
            delete _.Gl.Pe[this.yd()];
            this.Eb = !0;
        }
    };
    _.h.getContext = function () {
        return this.Nd;
    };
    _.h.Fl = function () {
        return this.jj;
    };
    _.h.yd = function () {
        return this.uf;
    };
    _.h.Fa = function () {
        return this.OW;
    };
    _.h.Xa = function () {
        return this.fN;
    };
    _.h.df = function (a) {
        this.fN = a;
    };
    _.h.rj = function () {
        (0, this.wa.R._rpcReadyFn)();
    };
    _.h.FM = function (a, b) {
        this.wa.value()[a] = b;
    };
    _.h.AA = function (a) {
        return this.wa.value()[a];
    };
    _.h.Ob = function () {
        return this.wa.value();
    };
    _.h.getId = function () {
        return this.wa.getId();
    };
    _.h.getOrigin = function () {
        return this.Mc;
    };
    _.h.register = function (a, b, c) {
        _.Bk(!this.Eb, "Cannot register handler on disposed iframe " + a);
        _.Bk((c || _.Tl)(this), "Rejecting untrusted message " + a);
        c = this.uf + ":" + this.Nd.uf + ":" + a;
        1 == _.qe(El, c, []).push(b) &&
            (this.$n.push(a), _.Ui(c, Xl(c, this, "_g_wasClosed" === a)));
    };
    _.h.unregister = function (a, b) {
        var c = this.uf + ":" + this.Nd.uf + ":" + a,
            d = El[c];
        d &&
            (b ?
                ((b = _.Ak.call(d, b)), 0 <= b && d.splice(b, 1)) :
                d.splice(0, d.length),
                0 == d.length &&
                ((b = _.Ak.call(this.$n, a)), 0 <= b && this.$n.splice(b, 1), _.Vi(c)));
    };
    _.h.DU = function () {
        return this.$n;
    };
    _.h.mp = function (a) {
        this.ny = this.ny || [];
        if (!(0 <= _.Ak.call(this.ny, a))) {
            this.ny.push(a);
            a = Fl[a] || {
                map: {}
            };
            for (var b in a.map)
                _.se(a.map, b) && this.register(b, a.map[b], a.filter);
        }
    };
    _.h.send = function (a, b, c, d) {
        _.Bk(!this.Eb, "Cannot send message to disposed iframe - " + a);
        _.Bk((d || _.Tl)(this), "Wrong target for message " + a);
        c = new Kl(c);
        _.Yi(this.jj, this.Nd.uf + ":" + this.uf + ":" + a, c.resolve, b);
        return c.promise;
    };
    _.em = function (a, b, c, d) {
        return a.send(b, c, d, _.Ul);
    };
    _.dm.prototype.XY = function (a) {
        return a;
    };
    _.dm.prototype.ping = function (a, b) {
        return _.em(this, "_g_ping", b, a);
    };
    El = _.re();
    Fl = _.re();
    _.Gl = new _.cm();
    _.$l("_g_rpcReady", _.dm.prototype.rj);
    _.$l("_g_discover", _.dm.prototype.DU);
    _.$l("_g_ping", _.dm.prototype.XY);
    var lm, fm;
    _.km = _.re();
    _.hm = _.re();
    _.jm = function (a) {
        return _.km[a];
    };
    lm = function (a, b) {
        _.ue.load("gapi.iframes.style." + a, b);
    };
    fm = function (a, b) {
        var c = b.Hl();
        if (c) {
            b.Yc(null);
            var d = _.km[c];
            _.Bk(d, "No such style: " + c);
            b.Ao(a);
            d(b.value());
            b.Ao(null);
        }
    };
    var nm, om;
    nm = {
        height: !0,
        width: !0
    };
    om = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i;
    _.pm = function (a) {
        "number" === typeof a && (a = String(a) + "px");
        return a;
    };
    _.dm.prototype.tb = function () {
        if (!_.Tl(this)) return null;
        var a = this.wa.R._popupWindow;
        if (a) return a;
        var b = this.jj.split("/");
        a = this.getContext().tb();
        for (var c = 0; c < b.length && a; c++) {
            var d = b[c];
            a = ".." === d ? (a == a.parent ? a.opener : a.parent) : a.frames[d];
        }
        return a;
    };
    var qm = function (a, b) {
        var c = a.Ya,
            d = !0;
        b.filter && (d = b.filter.call(b.Af, b.params));
        return _.Uj(d).then(function (e) {
            return e && c ?
                (b.kL && b.kL.call(a, b.params),
                    (e = b.sender ? b.sender(b.params) : _.em(c, b.message, b.params)),
                    b.B1 ?
                    e.then(function () {
                        return !0;
                    }) :
                    !0) :
                !1;
        });
    };
    _.cm.prototype.Ny = function (a, b, c) {
        a = qm(this, {
            sender: function (d) {
                var e = _.Gl.Ya;
                _.Il(_.Gl.Pe, function (f) {
                    f !== e && _.em(f, "_g_wasClosed", d);
                });
                return _.em(e, "_g_closeMe", d);
            },
            message: "_g_closeMe",
            params: a,
            Af: c,
            filter: this.pA("onCloseSelfFilter")
        });
        b = new Kl(b);
        b.resolve(a);
        return b.promise;
    };
    _.cm.prototype.eD = function (a, b, c) {
        a = a || {};
        b = new Kl(b);
        b.resolve(
            qm(this, {
                message: "_g_restyleMe",
                params: a,
                Af: c,
                filter: this.pA("onRestyleSelfFilter"),
                B1: !0,
                kL: this.DN
            })
        );
        return b.promise;
    };
    _.cm.prototype.DN = function (a) {
        "auto" === a.height && (a.height = _.nk.getHeight());
    };
    _.rm = function (a) {
        var b = {};
        if (a)
            for (var c in a)
                _.se(a, c) && _.se(nm, c) && om.test(a[c]) && (b[c] = a[c]);
        return b;
    };
    _.h = _.dm.prototype;
    _.h.close = function (a, b) {
        return _.em(this, "_g_close", a, b);
    };
    _.h.Mr = function (a, b) {
        return _.em(this, "_g_restyle", a, b);
    };
    _.h.ko = function (a, b) {
        return _.em(this, "_g_restyleDone", a, b);
    };
    _.h.$R = function (a) {
        return this.getContext().Ny(a, void 0, this);
    };
    _.h.VZ = function (a) {
        if (a && "object" === typeof a)
            return this.getContext().eD(a, void 0, this);
    };
    _.h.WZ = function (a) {
        var b = this.wa.R.onRestyle;
        b && b.call(this, a, this);
        a = a && "object" === typeof a ? _.rm(a) : {};
        (b = this.Fa()) &&
        a &&
            "object" === typeof a &&
            (_.se(a, "height") && (a.height = _.pm(a.height)),
                _.se(a, "width") && (a.width = _.pm(a.width)),
                _.te(a, b.style));
    };
    _.h.aS = function (a) {
        var b = this.wa.R.onClose;
        b && b.call(this, a, this);
        (this.$G && this.$G()) ||
        ((b = this.Fa()) && b.parentNode && b.parentNode.removeChild(b));
        if ((b = this.wa.R.controller)) {
            var c = {};
            c.frameName = this.yd();
            _.em(b, "_g_disposeControl", c);
        }
        Wl(this.uf + ":" + this.Nd.uf + ":_g_wasClosed", a, this);
    };
    _.cm.prototype.nM = _.ea(14);
    _.cm.prototype.JM = _.ea(15);
    _.dm.prototype.EL = _.ea(16);
    _.dm.prototype.wk = function (a, b) {
        this.register("_g_wasClosed", a, b);
    };
    _.dm.prototype.E1 = function () {
        delete this.getContext().Pe[this.yd()];
        this.getContext()
            .tb()
            .setTimeout(
                (0, _.H)(function () {
                    this.Ca();
                }, this),
                0
            );
    };
    _.$l("_g_close", _.dm.prototype.$R);
    _.$l("_g_closeMe", _.dm.prototype.aS);
    _.$l("_g_restyle", _.dm.prototype.VZ);
    _.$l("_g_restyleMe", _.dm.prototype.WZ);
    _.$l("_g_wasClosed", _.dm.prototype.E1);

    var wm, zm, Am, Bm;
    _.rl.prototype.yo = _.Ad(9, function (a) {
        this.R.apis = a;
        return this;
    });
    _.rl.prototype.Ek = _.Ad(8, function (a) {
        this.R.rpctoken = a;
        return this;
    });
    _.sm = function (a, b) {
        a.R.onClose = b;
    };
    _.tm = function (a) {
        this.R = a || {};
    };
    _.tm.prototype.value = function () {
        return this.R;
    };
    _.tm.prototype.getIframe = function () {
        return this.R.iframe;
    };
    _.um = function (a, b) {
        a.R.role = b;
        return a;
    };
    _.tm.prototype.rj = function (a) {
        this.R.setRpcReady = a;
        return this;
    };
    _.tm.prototype.Ek = function (a) {
        this.R.rpctoken = a;
        return this;
    };
    _.vm = function (a) {
        a.R.selfConnect = !0;
        return a;
    };
    wm = function (a) {
        this.R = a || {};
    };
    wm.prototype.value = function () {
        return this.R;
    };
    var xm = function (a) {
        var b = new wm();
        b.R.role = a;
        return b;
    };
    wm.prototype.EI = function () {
        return this.R.role;
    };
    wm.prototype.Xb = function (a) {
        this.R.handler = a;
        return this;
    };
    wm.prototype.rb = function () {
        return this.R.handler;
    };
    var ym = function (a, b) {
        a.R.filter = b;
        return a;
    };
    wm.prototype.yo = function (a) {
        this.R.apis = a;
        return this;
    };
    zm = function (a) {
        a.R.runOnce = !0;
        return a;
    };
    Am = /^https?:\/\/[^\/%\\?#\s]+$/i;
    Bm = {
        longdesc: !0,
        name: !0,
        src: !0,
        frameborder: !0,
        marginwidth: !0,
        marginheight: !0,
        scrolling: !0,
        align: !0,
        height: !0,
        width: !0,
        id: !0,
        class: !0,
        title: !0,
        tabindex: !0,
        hspace: !0,
        vspace: !0,
        allowtransparency: !0
    };
    _.Cm = function (a, b, c) {
        var d = a.jj,
            e = b.no;
        _.Ol(_.Nl(c, a.no + "/" + b.jj), e + "/" + d);
        _.Ml(c, b.yd()).Zh(b.Mc);
    };
    _.cm.prototype.Py = _.ea(17);
    _.h = _.dm.prototype;
    _.h.dS = function (a) {
        var b = new _.Ll(a);
        a = new _.tm(b.value());
        if (a.R.selfConnect) var c = this;
        else
            (_.Bk(
                    Am.test(b.getOrigin()),
                    "Illegal origin for connected iframe - " + b.getOrigin()
                ),
                (c = this.Nd.Pe[b.yd()]),
                c) ?
            _.Ql(b) && (c.rj(), _.em(c, "_g_rpcReady")) :
            ((b = _.Ml(
                    _.Ol(_.Nl(new _.Ll().Ek(_.Bl(b)), b.Fl()), _.Pl(b)).Zh(
                        b.getOrigin()
                    ),
                    b.yd()
                ).rj(_.Ql(b))),
                (c = this.Nd.Lj(b.value())));
        b = this.Nd;
        var d = a.R.role;
        a = a.R.data;
        Dm(b);
        d = d || "";
        _.qe(b.Ry, d, []).push({
            Af: c.yd(),
            data: a
        });
        Em(c, a, b.kC[d]);
    };
    _.h.RD = function (a, b) {
        new _.Ll(b).R._relayedDepth ||
            ((b = {}), _.vm(_.um(new _.tm(b), "_opener")), _.em(a, "_g_connect", b));
    };
    _.h.eL = function (a) {
        var b = this,
            c = a.R.messageHandlers,
            d = a.R.messageHandlersFilter,
            e = a.R.onClose;
        _.sm(_.wl(_.vl(a, null), null), null);
        _.ak();
        return _.em(this, "_g_open", a.value()).then(function (f) {
            var g = new _.Ll(f[0]),
                k = g.yd();
            f = new _.Ll();
            var l = b.no,
                m = _.Pl(g);
            _.Ol(_.Nl(f, b.jj + "/" + g.Fl()), m + "/" + l);
            _.Ml(f, k);
            f.Zh(g.getOrigin());
            f.yo(g.R.apis);
            f.Ek(_.Bl(a));
            _.vl(f, c);
            _.wl(f, d);
            _.sm(f, e);
            (g = b.Nd.Pe[k]) || (g = b.Nd.Lj(f.value()));
            return g;
        });
    };
    _.h.gD = function (a) {
        var b = a.getUrl();
        _.Bk(!b || _.Qk.test(b), "Illegal url for new iframe - " + b);
        var c = a.xl().value();
        b = {};
        for (var d in c) _.se(c, d) && _.se(Bm, d) && (b[d] = c[d]);
        _.se(c, "style") &&
            ((d = c.style), "object" === typeof d && (b.style = _.rm(d)));
        a.value().attributes = b;
    };
    _.h.JY = function (a) {
        a = new _.Ll(a);
        this.gD(a);
        var b = a.R._relayedDepth || 0;
        a.R._relayedDepth = b + 1;
        a.R.openerIframe = this;
        _.ak();
        var c = _.Bl(a);
        a.Ek(null);
        return this.Nd.open(a.value()).then(
            (0, _.H)(function (d) {
                var e = new _.Ll(d.Ob()).R.apis,
                    f = new _.Ll();
                _.Cm(d, this, f);
                0 == b && _.um(new _.tm(f.value()), "_opener");
                f.rj(!0);
                f.Ek(c);
                _.em(d, "_g_connect", f.value());
                f = new _.Ll();
                _.Ml(_.Ol(_.Nl(f.yo(e), d.Fl()), d.no), d.yd()).Zh(d.getOrigin());
                return f.value();
            }, this)
        );
    };
    var Dm = function (a) {
        a.Ry || ((a.Ry = _.re()), (a.kC = _.re()));
    };
    _.cm.prototype.hy = function (a, b, c, d) {
        Dm(this);
        "object" === typeof a
            ?
            ((b = new wm(a)), (c = b.EI() || "")) :
            ((b = ym(
                    xm(a)
                    .Xb(b)
                    .yo(c),
                    d
                )),
                (c = a));
        d = this.Ry[c] || [];
        a = !1;
        for (var e = 0; e < d.length && !a; e++)
            Em(this.Pe[d[e].Af], d[e].data, [b]), (a = b.R.runOnce);
        c = _.qe(this.kC, c, []);
        a || b.R.dontWait || c.push(b);
    };
    _.cm.prototype.HL = _.ea(18);
    var Em = function (a, b, c) {
        c = c || [];
        for (var d = 0; d < c.length; d++) {
            var e = c[d];
            if (e && a) {
                var f = e.R.filter || _.Tl;
                if (a && f(a)) {
                    f = e.R.apis || [];
                    for (var g = 0; g < f.length; g++) a.mp(f[g]);
                    e.rb() && e.rb()(a, b);
                    e.R.runOnce && (c.splice(d, 1), --d);
                }
            }
        }
    };
    _.cm.prototype.Ij = function (a, b, c) {
        this.hy(
            zm(
                ym(
                    xm("_opener")
                    .Xb(a)
                    .yo(b),
                    c
                )
            ).value()
        );
    };
    _.dm.prototype.UZ = function (a) {
        this.getContext().Ij(
            function (b) {
                b.send("_g_wasRestyled", a, void 0, _.Ul);
            },
            null,
            _.Ul
        );
    };
    var Fm = _.Gl.Ya;
    Fm && Fm.register("_g_restyleDone", _.dm.prototype.UZ, _.Ul);
    _.$l("_g_connect", _.dm.prototype.dS);
    var Gm = {};
    Gm._g_open = _.dm.prototype.JY;
    _.Yl("_open", Gm, _.Ul);

    _.z("gapi.iframes.create", _.nl);
    _.dm.prototype.EL = _.Ad(16, function (a, b) {
        this.register("_g_wasRestyled", a, b);
    });
    _.h = _.cm.prototype;
    _.h.JM = _.Ad(15, function (a) {
        this.Fw("onRestyleSelfFilter", a);
    });
    _.h.nM = _.Ad(14, function (a) {
        this.Fw("onCloseSelfFilter", a);
    });
    _.h.yI = _.Ad(13, function () {
        return this.Ya;
    });
    _.h.Fw = _.Ad(12, function (a, b) {
        this.lL[a] = b;
    });
    _.h.In = _.Ad(11, function () {
        return this.Eb;
    });
    _.dm.prototype.In = _.Ad(10, function () {
        return this.Eb;
    });
    _.z("gapi.iframes.registerStyle", function (a, b) {
        _.km[a] = b;
    });
    _.z("gapi.iframes.registerBeforeOpenStyle", function (a, b) {
        _.hm[a] = b;
    });
    _.z("gapi.iframes.getStyle", _.jm);
    _.z("gapi.iframes.getBeforeOpenStyle", function (a) {
        return _.hm[a];
    });
    _.z("gapi.iframes.registerIframesApi", _.Yl);
    _.z("gapi.iframes.registerIframesApiHandler", _.Zl);
    _.z("gapi.iframes.getContext", _.am);
    _.z("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER", _.Tl);
    _.z("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER", _.Ul);
    _.z("gapi.iframes.makeWhiteListIframesFilter", _.Vl);
    _.z("gapi.iframes.Context", _.cm);
    _.z("gapi.iframes.Context.prototype.isDisposed", _.cm.prototype.In);
    _.z("gapi.iframes.Context.prototype.getWindow", _.cm.prototype.tb);
    _.z("gapi.iframes.Context.prototype.getFrameName", _.cm.prototype.yd);
    _.z("gapi.iframes.Context.prototype.getGlobalParam", _.cm.prototype.pA);
    _.z("gapi.iframes.Context.prototype.setGlobalParam", _.cm.prototype.Fw);
    _.z("gapi.iframes.Context.prototype.open", _.cm.prototype.open);
    _.z("gapi.iframes.Context.prototype.openChild", _.cm.prototype.Sh);
    _.z("gapi.iframes.Context.prototype.getParentIframe", _.cm.prototype.yI);
    _.z("gapi.iframes.Context.prototype.closeSelf", _.cm.prototype.Ny);
    _.z("gapi.iframes.Context.prototype.restyleSelf", _.cm.prototype.eD);
    _.z("gapi.iframes.Context.prototype.setCloseSelfFilter", _.cm.prototype.nM);
    _.z("gapi.iframes.Context.prototype.setRestyleSelfFilter", _.cm.prototype.JM);
    _.z("gapi.iframes.Iframe", _.dm);
    _.z("gapi.iframes.Iframe.prototype.isDisposed", _.dm.prototype.In);
    _.z("gapi.iframes.Iframe.prototype.getContext", _.dm.prototype.getContext);
    _.z("gapi.iframes.Iframe.prototype.getFrameName", _.dm.prototype.yd);
    _.z("gapi.iframes.Iframe.prototype.getId", _.dm.prototype.getId);
    _.z("gapi.iframes.Iframe.prototype.register", _.dm.prototype.register);
    _.z("gapi.iframes.Iframe.prototype.unregister", _.dm.prototype.unregister);
    _.z("gapi.iframes.Iframe.prototype.send", _.dm.prototype.send);
    _.z("gapi.iframes.Iframe.prototype.applyIframesApi", _.dm.prototype.mp);
    _.z("gapi.iframes.Iframe.prototype.getIframeEl", _.dm.prototype.Fa);
    _.z("gapi.iframes.Iframe.prototype.getSiteEl", _.dm.prototype.Xa);
    _.z("gapi.iframes.Iframe.prototype.setSiteEl", _.dm.prototype.df);
    _.z("gapi.iframes.Iframe.prototype.getWindow", _.dm.prototype.tb);
    _.z("gapi.iframes.Iframe.prototype.getOrigin", _.dm.prototype.getOrigin);
    _.z("gapi.iframes.Iframe.prototype.close", _.dm.prototype.close);
    _.z("gapi.iframes.Iframe.prototype.restyle", _.dm.prototype.Mr);
    _.z("gapi.iframes.Iframe.prototype.restyleDone", _.dm.prototype.ko);
    _.z("gapi.iframes.Iframe.prototype.registerWasRestyled", _.dm.prototype.EL);
    _.z("gapi.iframes.Iframe.prototype.registerWasClosed", _.dm.prototype.wk);
    _.z("gapi.iframes.Iframe.prototype.getParam", _.dm.prototype.AA);
    _.z("gapi.iframes.Iframe.prototype.setParam", _.dm.prototype.FM);
    _.z("gapi.iframes.Iframe.prototype.ping", _.dm.prototype.ping);

    var KN = function (a, b) {
        a.R.data = b;
        return a;
    };
    _.cm.prototype.HL = _.Ad(18, function (a, b) {
        a = _.qe(this.kC, a, []);
        if (b)
            for (var c = 0, d = !1; !d && c < a.length; c++)
                a[c].ye === b && ((d = !0), a.splice(c, 1));
        else a.splice(0, a.length);
    });
    _.cm.prototype.Py = _.Ad(17, function (a, b) {
        a = new _.tm(a);
        var c = new _.tm(b),
            d = _.Ql(a);
        b = a.getIframe();
        var e = c.getIframe();
        if (e) {
            var f = _.Bl(a),
                g = new _.Ll();
            _.Cm(b, e, g);
            KN(_.um(new _.tm(g.value()).Ek(f), a.R.role), a.R.data).rj(d);
            var k = new _.Ll();
            _.Cm(e, b, k);
            KN(_.um(new _.tm(k.value()).Ek(f), c.R.role), c.R.data).rj(!0);
            _.em(b, "_g_connect", g.value(), function () {
                d || _.em(e, "_g_connect", k.value());
            });
            d && _.em(e, "_g_connect", k.value());
        } else(c = {}), KN(_.um(_.vm(new _.tm(c)), a.R.role), a.R.data), _.em(b, "_g_connect", c);
    });
    _.z("gapi.iframes.Context.prototype.addOnConnectHandler", _.cm.prototype.hy);
    _.z(
        "gapi.iframes.Context.prototype.removeOnConnectHandler",
        _.cm.prototype.HL
    );
    _.z("gapi.iframes.Context.prototype.addOnOpenerHandler", _.cm.prototype.Ij);
    _.z("gapi.iframes.Context.prototype.connectIframes", _.cm.prototype.Py);

    _.ug = (window.googleapis && window.googleapis.server) || {};
    (function () {
        function a(e, f) {
            if (!(e < c) && d)
                if (2 === e && d.warn) d.warn(f);
                else if (3 === e && d.error)
                try {
                    d.error(f);
                } catch (g) {}
            else d.log && d.log(f);
        }
        var b = function (e) {
            a(1, e);
        };
        _.hb = function (e) {
            a(2, e);
        };
        _.ib = function (e) {
            a(3, e);
        };
        _.Qe = function () {};
        b.INFO = 1;
        b.WARNING = 2;
        b.NONE = 4;
        var c = 1,
            d = window.console ?
            window.console :
            window.opera ?
            window.opera.postError :
            void 0;
        return b;
    })();

    _.Pe = _.Pe || {};
    _.Pe.attachBrowserEvent = function (a, b, c, d) {
        "undefined" != typeof a.addEventListener ?
            a.addEventListener(b, c, d) :
            "undefined" != typeof a.attachEvent ?
            a.attachEvent("on" + b, c) :
            _.hb("cannot attachBrowserEvent: " + b);
    };
    _.Pe.tZ = function (a) {
        var b = window;
        b.removeEventListener ?
            b.removeEventListener("mousemove", a, !1) :
            b.detachEvent ?
            b.detachEvent("onmousemove", a) :
            _.hb("cannot removeBrowserEvent: mousemove");
    };

    _.vg = function () {
        function a() {
            e[0] = 1732584193;
            e[1] = 4023233417;
            e[2] = 2562383102;
            e[3] = 271733878;
            e[4] = 3285377520;
            n = m = 0;
        }

        function b(p) {
            for (var t = g, r = 0; 64 > r; r += 4)
                t[r / 4] = (p[r] << 24) | (p[r + 1] << 16) | (p[r + 2] << 8) | p[r + 3];
            for (r = 16; 80 > r; r++)
                (p = t[r - 3] ^ t[r - 8] ^ t[r - 14] ^ t[r - 16]),
                (t[r] = ((p << 1) | (p >>> 31)) & 4294967295);
            p = e[0];
            var u = e[1],
                v = e[2],
                w = e[3],
                C = e[4];
            for (r = 0; 80 > r; r++) {
                if (40 > r)
                    if (20 > r) {
                        var D = w ^ (u & (v ^ w));
                        var B = 1518500249;
                    } else(D = u ^ v ^ w), (B = 1859775393);
                else
                    60 > r ?
                    ((D = (u & v) | (w & (u | v))), (B = 2400959708)) :
                    ((D = u ^ v ^ w), (B = 3395469782));
                D =
                    ((((p << 5) | (p >>> 27)) & 4294967295) + D + C + B + t[r]) &
                    4294967295;
                C = w;
                w = v;
                v = ((u << 30) | (u >>> 2)) & 4294967295;
                u = p;
                p = D;
            }
            e[0] = (e[0] + p) & 4294967295;
            e[1] = (e[1] + u) & 4294967295;
            e[2] = (e[2] + v) & 4294967295;
            e[3] = (e[3] + w) & 4294967295;
            e[4] = (e[4] + C) & 4294967295;
        }

        function c(p, t) {
            if ("string" === typeof p) {
                p = unescape(encodeURIComponent(p));
                for (var r = [], u = 0, v = p.length; u < v; ++u)
                    r.push(p.charCodeAt(u));
                p = r;
            }
            t || (t = p.length);
            r = 0;
            if (0 == m)
                for (; r + 64 < t;) b(p.slice(r, r + 64)), (r += 64), (n += 64);
            for (; r < t;)
                if (((f[m++] = p[r++]), n++, 64 == m))
                    for (m = 0, b(f); r + 64 < t;)
                        b(p.slice(r, r + 64)), (r += 64), (n += 64);
        }

        function d() {
            var p = [],
                t = 8 * n;
            56 > m ? c(k, 56 - m) : c(k, 64 - (m - 56));
            for (var r = 63; 56 <= r; r--)(f[r] = t & 255), (t >>>= 8);
            b(f);
            for (r = t = 0; 5 > r; r++)
                for (var u = 24; 0 <= u; u -= 8) p[t++] = (e[r] >> u) & 255;
            return p;
        }
        for (var e = [], f = [], g = [], k = [128], l = 1; 64 > l; ++l) k[l] = 0;
        var m, n;
        a();
        return {
            reset: a,
            update: c,
            digest: d,
            Mg: function () {
                for (var p = d(), t = "", r = 0; r < p.length; r++)
                    t +=
                    "0123456789ABCDEF".charAt(Math.floor(p[r] / 16)) +
                    "0123456789ABCDEF".charAt(p[r] % 16);
                return t;
            }
        };
    };
    _.wg = (function () {
        function a(m) {
            var n = _.vg();
            n.update(m);
            return n.Mg();
        }
        var b = window.crypto;
        if (b && "function" == typeof b.getRandomValues)
            return function () {
                var m = new window.Uint32Array(1);
                b.getRandomValues(m);
                return Number("0." + m[0]);
            };
        var c = _.Q("random/maxObserveMousemove");
        null == c && (c = -1);
        var d = 0,
            e = Math.random(),
            f = 1,
            g = 1e6 * (screen.width * screen.width + screen.height),
            k = function (m) {
                m = m || window.event;
                var n = (m.screenX + m.clientX) << 16;
                n += m.screenY + m.clientY;
                n *= new Date().getTime() % 1e6;
                f = (f * n) % g;
                0 < c && ++d == c && _.Pe.tZ(k);
            };
        0 != c && _.Pe.attachBrowserEvent(window, "mousemove", k, !1);
        var l = a(
            document.cookie +
            "|" +
            document.location +
            "|" +
            new Date().getTime() +
            "|" +
            e
        );
        return function () {
            var m = f;
            m += parseInt(l.substr(0, 20), 16);
            l = a(l);
            return m / (g + Math.pow(16, 20));
        };
    })();
    _.z("shindig.random", _.wg);
    _.Pe = _.Pe || {};
    (function () {
        var a = [];
        _.Pe.registerOnLoadHandler = function (b) {
            a.push(b);
        };
        _.Pe.mba = function () {
            for (var b = 0, c = a.length; b < c; ++b) a[b]();
        };
    })();
    _.Xe = (function () {
        var a =
            window.gadgets && window.gadgets.config && window.gadgets.config.get;
        a && _.Je(a());
        return {
            register: function (b, c, d) {
                d && d(_.Q());
            },
            get: function (b) {
                return _.Q(b);
            },
            update: function (b, c) {
                if (c) throw "Config replacement is not supported";
                _.Je(b);
            },
            init: function () {}
        };
    })();
    _.z("gadgets.config.register", _.Xe.register);
    _.z("gadgets.config.get", _.Xe.get);
    _.z("gadgets.config.init", _.Xe.init);
    _.z("gadgets.config.update", _.Xe.update);
    var Lf;
    _.Jf = function () {
        var a = _.ne.readyState;
        return (
            "complete" === a ||
            ("interactive" === a && -1 == navigator.userAgent.indexOf("MSIE"))
        );
    };
    _.Kf = function (a) {
        if (_.Jf()) a();
        else {
            var b = !1,
                c = function () {
                    if (!b) return (b = !0), a.apply(this, arguments);
                };
            _.me.addEventListener ?
                (_.me.addEventListener("load", c, !1),
                    _.me.addEventListener("DOMContentLoaded", c, !1)) :
                _.me.attachEvent &&
                (_.me.attachEvent("onreadystatechange", function () {
                        _.Jf() && c.apply(this, arguments);
                    }),
                    _.me.attachEvent("onload", c));
        }
    };
    Lf = Lf || {};
    Lf.SL = null;
    Lf.IK = null;
    Lf.Uu = null;
    Lf.frameElement = null;
    Lf = Lf || {};
    Lf.SE ||
        (Lf.SE = (function () {
            function a(f, g, k) {
                "undefined" != typeof window.addEventListener ?
                    window.addEventListener(f, g, k) :
                    "undefined" != typeof window.attachEvent &&
                    window.attachEvent("on" + f, g);
                "message" === f &&
                    ((window.___jsl = window.___jsl || {}),
                        (f = window.___jsl),
                        (f.RPMQ = f.RPMQ || []),
                        f.RPMQ.push(g));
            }

            function b(f) {
                var g = _.Ff(f.data);
                if (g && g.f) {
                    (0, _.Qe)("gadgets.rpc.receive(" + window.name + "): " + f.data);
                    var k = _.Mf.getTargetOrigin(g.f);
                    e &&
                        ("undefined" !== typeof f.origin ?
                            f.origin !== k :
                            f.domain !== /^.+:\/\/([^:]+).*/.exec(k)[1]) ?
                        _.ib(
                            "Invalid rpc message origin. " + k + " vs " + (f.origin || "")
                        ) :
                        c(g, f.origin);
                }
            }
            var c,
                d,
                e = !0;
            return {
                hI: function () {
                    return "wpm";
                },
                vX: function () {
                    return !0;
                },
                init: function (f, g) {
                    _.Xe.register("rpc", null, function (k) {
                        "true" === String(((k && k.rpc) || {}).disableForceSecure) &&
                            (e = !1);
                    });
                    c = f;
                    d = g;
                    a("message", b, !1);
                    d("..", !0);
                    return !0;
                },
                yc: function (f) {
                    d(f, !0);
                    return !0;
                },
                call: function (f, g, k) {
                    var l = _.Mf.getTargetOrigin(f),
                        m = _.Mf.$F(f);
                    l
                        ?
                        window.setTimeout(function () {
                            var n = _.Gf(k);
                            (0, _.Qe)("gadgets.rpc.send(" + window.name + "): " + n);
                            m.postMessage(n, l);
                        }, 0) :
                        ".." != f &&
                        _.ib(
                            "No relay set (used as window.postMessage targetOrigin), cannot send cross-domain message"
                        );
                    return !0;
                }
            };
        })());
    if (window.gadgets && window.gadgets.rpc)
        ("undefined" != typeof _.Mf && _.Mf) ||
        ((_.Mf = window.gadgets.rpc),
            (_.Mf.config = _.Mf.config),
            (_.Mf.register = _.Mf.register),
            (_.Mf.unregister = _.Mf.unregister),
            (_.Mf.registerDefault = _.Mf.registerDefault),
            (_.Mf.unregisterDefault = _.Mf.unregisterDefault),
            (_.Mf.forceParentVerifiable = _.Mf.forceParentVerifiable),
            (_.Mf.call = _.Mf.call),
            (_.Mf.getRelayUrl = _.Mf.getRelayUrl),
            (_.Mf.setRelayUrl = _.Mf.setRelayUrl),
            (_.Mf.setAuthToken = _.Mf.setAuthToken),
            (_.Mf.setupReceiver = _.Mf.setupReceiver),
            (_.Mf.getAuthToken = _.Mf.getAuthToken),
            (_.Mf.removeReceiver = _.Mf.removeReceiver),
            (_.Mf.getRelayChannel = _.Mf.getRelayChannel),
            (_.Mf.receive = _.Mf.receive),
            (_.Mf.CL = _.Mf.receiveSameDomain),
            (_.Mf.getOrigin = _.Mf.getOrigin),
            (_.Mf.getTargetOrigin = _.Mf.getTargetOrigin),
            (_.Mf.$F = _.Mf._getTargetWin),
            (_.Mf.fR = _.Mf._parseSiblingId));
    else {
        _.Mf = (function () {
            function a(y, P) {
                if (!L[y]) {
                    var Y = va;
                    P || (Y = ba);
                    L[y] = Y;
                    P = I[y] || [];
                    for (var Z = 0; Z < P.length; ++Z) {
                        var ka = P[Z];
                        ka.t = D[y];
                        Y.call(y, ka.f, ka);
                    }
                    I[y] = [];
                }
            }

            function b() {
                function y() {
                    ra = !0;
                }
                la ||
                    ("undefined" != typeof window.addEventListener ?
                        window.addEventListener("unload", y, !1) :
                        "undefined" != typeof window.attachEvent &&
                        window.attachEvent("onunload", y),
                        (la = !0));
            }

            function c(y, P, Y, Z, ka) {
                (D[P] && D[P] === Y) ||
                (_.ib("Invalid gadgets.rpc token. " + D[P] + " vs " + Y), na(P, 2));
                ka.onunload = function () {
                    J[P] && !ra && (na(P, 1), _.Mf.removeReceiver(P));
                };
                b();
                Z = _.Ff(decodeURIComponent(Z));
            }

            function d(y, P) {
                if (
                    y &&
                    "string" === typeof y.s &&
                    "string" === typeof y.f &&
                    y.a instanceof Array
                )
                    if (
                        (D[y.f] &&
                            D[y.f] !== y.t &&
                            (_.ib("Invalid gadgets.rpc token. " + D[y.f] + " vs " + y.t),
                                na(y.f, 2)),
                            "__ack" === y.s)
                    )
                        window.setTimeout(function () {
                            a(y.f, !0);
                        }, 0);
                    else {
                        y.c &&
                            (y.callback = function (ma) {
                                _.Mf.call(y.f, (y.g ? "legacy__" : "") + "__cb", null, y.c, ma);
                            });
                        if (P) {
                            var Y = e(P);
                            y.origin = P;
                            var Z = y.r;
                            try {
                                var ka = e(Z);
                            } catch (ma) {}
                            (Z && ka == Y) || (Z = P);
                            y.referer = Z;
                        }
                        P = (v[y.s] || v[""]).apply(y, y.a);
                        y.c &&
                            "undefined" !== typeof P &&
                            _.Mf.call(y.f, "__cb", null, y.c, P);
                    }
            }

            function e(y) {
                if (!y) return "";
                y = y.split("#")[0].split("?")[0];
                y = y.toLowerCase();
                0 == y.indexOf("//") && (y = window.location.protocol + y); -
                1 == y.indexOf("://") && (y = window.location.protocol + "//" + y);
                var P = y.substring(y.indexOf("://") + 3),
                    Y = P.indexOf("/"); -
                1 != Y && (P = P.substring(0, Y));
                y = y.substring(0, y.indexOf("://"));
                if (
                    "http" !== y &&
                    "https" !== y &&
                    "chrome-extension" !== y &&
                    "file" !== y &&
                    "android-app" !== y &&
                    "chrome-search" !== y
                )
                    throw Error("s");
                Y = "";
                var Z = P.indexOf(":");
                if (-1 != Z) {
                    var ka = P.substring(Z + 1);
                    P = P.substring(0, Z);
                    if (("http" === y && "80" !== ka) || ("https" === y && "443" !== ka))
                        Y = ":" + ka;
                }
                return y + "://" + P + Y;
            }

            function f(y) {
                if ("/" == y.charAt(0)) {
                    var P = y.indexOf("|");
                    return {
                        id: 0 < P ? y.substring(1, P) : y.substring(1),
                        origin: 0 < P ? y.substring(P + 1) : null
                    };
                }
                return null;
            }

            function g(y) {
                if ("undefined" === typeof y || ".." === y) return window.parent;
                var P = f(y);
                if (P) return window.top.frames[P.id];
                y = String(y);
                return (P = window.frames[y]) ?
                    P :
                    (P = document.getElementById(y)) && P.contentWindow ?
                    P.contentWindow :
                    null;
            }

            function k(y, P) {
                if (!0 !== J[y]) {
                    "undefined" === typeof J[y] && (J[y] = 0);
                    var Y = g(y);
                    (".." !== y && null == Y) || !0 !== va.yc(y, P) ?
                        !0 !== J[y] && 10 > J[y]++
                        ?
                        window.setTimeout(function () {
                            k(y, P);
                        }, 500) :
                        ((L[y] = ba), (J[y] = !0)) :
                        (J[y] = !0);
                }
            }

            function l(y) {
                (y = w[y]) &&
                "/" === y.substring(0, 1) &&
                    (y =
                        "/" === y.substring(1, 2) ?
                        document.location.protocol + y :
                        document.location.protocol + "//" + document.location.host + y);
                return y;
            }

            function m(y, P, Y) {
                P &&
                    !/http(s)?:\/\/.+/.test(P) &&
                    (0 == P.indexOf("//") ?
                        (P = window.location.protocol + P) :
                        "/" == P.charAt(0) ?
                        (P = window.location.protocol + "//" + window.location.host + P) :
                        -1 == P.indexOf("://") &&
                        (P = window.location.protocol + "//" + P));
                w[y] = P;
                "undefined" !== typeof Y && (C[y] = !!Y);
            }

            function n(y, P) {
                P = P || "";
                D[y] = String(P);
                k(y, P);
            }

            function p(y) {
                y = (y.passReferrer || "").split(":", 2);
                G = y[0] || "none";
                W = y[1] || "origin";
            }

            function t(y) {
                "true" === String(y.useLegacyProtocol) &&
                    ((va = Lf.Uu || ba), va.init(d, a));
            }

            function r(y, P) {
                function Y(Z) {
                    Z = (Z && Z.rpc) || {};
                    p(Z);
                    var ka = Z.parentRelayUrl || "";
                    ka = e(V.parent || P) + ka;
                    m("..", ka, "true" === String(Z.useLegacyProtocol));
                    t(Z);
                    n("..", y);
                }!V.parent && P ? Y({}) : _.Xe.register("rpc", null, Y);
            }

            function u(y, P, Y) {
                if (".." === y) r(Y || V.rpctoken || V.ifpctok || "", P);
                else
                    a: {
                        var Z = null;
                        if ("/" != y.charAt(0)) {
                            if (!_.Pe) break a;
                            Z = document.getElementById(y);
                            if (!Z) throw Error("t`" + y);
                        }
                        Z = Z && Z.src;
                        P = P || _.Mf.getOrigin(Z);
                        m(y, P);
                        P = _.Pe.getUrlParameters(Z);
                        n(y, Y || P.rpctoken);
                    }
            }
            var v = {},
                w = {},
                C = {},
                D = {},
                B = 0,
                E = {},
                J = {},
                V = {},
                L = {},
                I = {},
                G = null,
                W = null,
                oa = window.top !== window.self,
                ua = window.name,
                na = function () {},
                Za = window.console,
                Da =
                (Za &&
                    Za.log &&
                    function (y) {
                        Za.log(y);
                    }) ||
                function () {},
                ba = (function () {
                    function y(P) {
                        return function () {
                            Da(P + ": call ignored");
                        };
                    }
                    return {
                        hI: function () {
                            return "noop";
                        },
                        vX: function () {
                            return !0;
                        },
                        init: y("init"),
                        yc: y("setup"),
                        call: y("call")
                    };
                })();
            _.Pe && (V = _.Pe.getUrlParameters());
            var ra = !1,
                la = !1,
                va = (function () {
                    if ("rmr" == V.rpctx) return Lf.SL;
                    var y =
                        "function" === typeof window.postMessage ?
                        Lf.SE :
                        "object" === typeof window.postMessage ?
                        Lf.SE :
                        window.ActiveXObject ?
                        Lf.IK ?
                        Lf.IK :
                        Lf.Uu :
                        0 < navigator.userAgent.indexOf("WebKit") ?
                        Lf.SL :
                        "Gecko" === navigator.product ?
                        Lf.frameElement :
                        Lf.Uu;
                    y || (y = ba);
                    return y;
                })();
            v[""] = function () {
                Da("Unknown RPC service: " + this.s);
            };
            v.__cb = function (y, P) {
                var Y = E[y];
                Y && (delete E[y], Y.call(this, P));
            };
            return {
                config: function (y) {
                    "function" === typeof y.YL && (na = y.YL);
                },
                register: function (y, P) {
                    if ("__cb" === y || "__ack" === y) throw Error("u");
                    if ("" === y) throw Error("v");
                    v[y] = P;
                },
                unregister: function (y) {
                    if ("__cb" === y || "__ack" === y) throw Error("w");
                    if ("" === y) throw Error("x");
                    delete v[y];
                },
                registerDefault: function (y) {
                    v[""] = y;
                },
                unregisterDefault: function () {
                    delete v[""];
                },
                forceParentVerifiable: function () {},
                call: function (y, P, Y, Z) {
                    y = y || "..";
                    var ka = "..";
                    ".." === y
                        ?
                        (ka = ua) :
                        "/" == y.charAt(0) &&
                        ((ka = _.Mf.getOrigin(window.location.href)),
                            (ka = "/" + ua + (ka ? "|" + ka : "")));
                    ++B;
                    Y && (E[B] = Y);
                    var ma = {
                        s: P,
                        f: ka,
                        c: Y ? B : 0,
                        a: Array.prototype.slice.call(arguments, 3),
                        t: D[y],
                        l: !!C[y]
                    };
                    a: if (
                        "bidir" === G ||
                        ("c2p" === G && ".." === y) ||
                        ("p2c" === G && ".." !== y)
                    ) {
                        var x = window.location.href;
                        var K = "?";
                        if ("query" === W) K = "#";
                        else if ("hash" === W) break a;
                        K = x.lastIndexOf(K);
                        K = -1 === K ? x.length : K;
                        x = x.substring(0, K);
                    } else x = null;
                    x && (ma.r = x);
                    if (".." === y || null != f(y) || document.getElementById(y))
                        (x = L[y]) || null === f(y) || (x = va),
                        0 === P.indexOf("legacy__") &&
                        ((x = va), (ma.s = P.substring(8)), (ma.c = ma.c ? ma.c : B)),
                        (ma.g = !0),
                        (ma.r = ka),
                        x ?
                        (C[y] && (x = Lf.Uu),
                            !1 === x.call(y, ka, ma) && ((L[y] = ba), va.call(y, ka, ma))) :
                        I[y] ?
                        I[y].push(ma) :
                        (I[y] = [ma]);
                },
                getRelayUrl: l,
                setRelayUrl: m,
                setAuthToken: n,
                setupReceiver: u,
                getAuthToken: function (y) {
                    return D[y];
                },
                removeReceiver: function (y) {
                    delete w[y];
                    delete C[y];
                    delete D[y];
                    delete J[y];
                    delete L[y];
                },
                getRelayChannel: function () {
                    return va.hI();
                },
                receive: function (y, P) {
                    4 < y.length ? va.k$(y, d) : c.apply(null, y.concat(P));
                },
                CL: function (y) {
                    y.a = Array.prototype.slice.call(y.a);
                    window.setTimeout(function () {
                        d(y);
                    }, 0);
                },
                getOrigin: e,
                getTargetOrigin: function (y) {
                    var P = null,
                        Y = l(y);
                    Y
                        ?
                        (P = Y) :
                        (Y = f(y)) ?
                        (P = Y.origin) :
                        ".." == y ?
                        (P = V.parent) :
                        (y = document.getElementById(y)) &&
                        "iframe" === y.tagName.toLowerCase() &&
                        (P = y.src);
                    return e(P);
                },
                init: function () {
                    !1 === va.init(d, a) && (va = ba);
                    oa
                        ?
                        u("..") :
                        _.Xe.register("rpc", null, function (y) {
                            y = y.rpc || {};
                            p(y);
                            t(y);
                        });
                },
                $F: g,
                fR: f,
                ACK: "__ack",
                Q7: ua || "..",
                d8: 0,
                c8: 1,
                b8: 2
            };
        })();
        _.Mf.init();
    }
    _.Mf.config({
        YL: function (a) {
            throw Error("y`" + a);
        }
    });
    _.Qe = _.We;
    _.z("gadgets.rpc.config", _.Mf.config);
    _.z("gadgets.rpc.register", _.Mf.register);
    _.z("gadgets.rpc.unregister", _.Mf.unregister);
    _.z("gadgets.rpc.registerDefault", _.Mf.registerDefault);
    _.z("gadgets.rpc.unregisterDefault", _.Mf.unregisterDefault);
    _.z("gadgets.rpc.forceParentVerifiable", _.Mf.forceParentVerifiable);
    _.z("gadgets.rpc.call", _.Mf.call);
    _.z("gadgets.rpc.getRelayUrl", _.Mf.getRelayUrl);
    _.z("gadgets.rpc.setRelayUrl", _.Mf.setRelayUrl);
    _.z("gadgets.rpc.setAuthToken", _.Mf.setAuthToken);
    _.z("gadgets.rpc.setupReceiver", _.Mf.setupReceiver);
    _.z("gadgets.rpc.getAuthToken", _.Mf.getAuthToken);
    _.z("gadgets.rpc.removeReceiver", _.Mf.removeReceiver);
    _.z("gadgets.rpc.getRelayChannel", _.Mf.getRelayChannel);
    _.z("gadgets.rpc.receive", _.Mf.receive);
    _.z("gadgets.rpc.receiveSameDomain", _.Mf.CL);
    _.z("gadgets.rpc.getOrigin", _.Mf.getOrigin);
    _.z("gadgets.rpc.getTargetOrigin", _.Mf.getTargetOrigin);

    var xg = function (a) {
            return {
                execute: function (b) {
                    var c = {
                            method: a.httpMethod || "GET",
                            root: a.root,
                            path: a.url,
                            params: a.urlParams,
                            headers: a.headers,
                            body: a.body
                        },
                        d = window.gapi,
                        e = function () {
                            var f = d.config.get("client/apiKey"),
                                g = d.config.get("client/version");
                            try {
                                var k = d.config.get("googleapis.config/developerKey"),
                                    l = d.config.get("client/apiKey", k);
                                d.config.update("client/apiKey", l);
                                d.config.update("client/version", "1.0.0-alpha");
                                var m = d.client;
                                m.request.call(m, c).then(b, b);
                            } finally {
                                d.config.update("client/apiKey", f),
                                    d.config.update("client/version", g);
                            }
                        };
                    d.client ? e() : d.load.call(d, "client", e);
                }
            };
        },
        yg = function (a, b) {
            return function (c) {
                var d = {};
                c = c.body;
                var e = _.Ff(c),
                    f = {};
                if (e && e.length)
                    for (var g = 0, k = e.length; g < k; ++g) {
                        var l = e[g];
                        f[l.id] = l;
                    }
                g = 0;
                for (k = b.length; g < k; ++g)
                    (l = b[g].id), (d[l] = e && e.length ? f[l] : e);
                a(d, c);
            };
        },
        zg = function (a) {
            a.transport = {
                name: "googleapis",
                execute: function (b, c) {
                    for (var d = [], e = 0, f = b.length; e < f; ++e) {
                        var g = b[e],
                            k = g.method,
                            l = String(k).split(".")[0];
                        l =
                            _.Q("googleapis.config/versions/" + k) ||
                            _.Q("googleapis.config/versions/" + l) ||
                            "v1";
                        d.push({
                            jsonrpc: "2.0",
                            id: g.id,
                            method: k,
                            apiVersion: String(l),
                            params: g.params
                        });
                    }
                    b = xg({
                        httpMethod: "POST",
                        root: a.transport.root,
                        url: "/rpc?pp=0",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: d
                    });
                    b.execute.call(b, yg(c, d));
                },
                root: void 0
            };
        },
        Ag = function (a) {
            var b = this.method,
                c = this.transport;
            c.execute.call(c, [{
                method: b,
                id: b,
                params: this.rpc
            }], function (d) {
                d = d[b];
                d.error || (d = d.data || d.result);
                a(d);
            });
        },
        Cg = function () {
            for (
                var a = Bg,
                    b = a.split("."),
                    c = function (k) {
                        k = k || {};
                        k.groupId = k.groupId || "@self";
                        k.userId = k.userId || "@viewer";
                        k = {
                            method: a,
                            rpc: k || {}
                        };
                        zg(k);
                        k.execute = Ag;
                        return k;
                    },
                    d = _.q,
                    e = 0,
                    f = b.length; e < f;
                ++e
            ) {
                var g = d[b[e]] || {};
                e + 1 == f && (g = c);
                d = d[b[e]] = g;
            }
            if (1 < b.length && "googleapis" != b[0])
                for (
                    b[0] = "googleapis",
                    "delete" == b[b.length - 1] && (b[b.length - 1] = "remove"),
                    d = _.q,
                    e = 0,
                    f = b.length; e < f;
                    ++e
                )
                    (g = d[b[e]] || {}), e + 1 == f && (g = c), (d = d[b[e]] = g);
        },
        Bg;
    for (Bg in _.Q("googleapis.config/methods")) Cg();
    _.z("googleapis.newHttpRequest", function (a) {
        return xg(a);
    });
    _.z("googleapis.setUrlParameter", function (a, b) {
        if ("trace" !== a) throw Error("A");
        _.Je("client/trace", b);
    });
    _.Hm = _.qe(_.Be, "rw", _.re());
    var Im = function (a, b) {
        (a = _.Hm[a]) && a.state < b && (a.state = b);
    };
    var Jm = function (a) {
        a = (a = _.Hm[a]) ? a.oid : void 0;
        if (a) {
            var b = _.ne.getElementById(a);
            b && b.parentNode.removeChild(b);
            delete _.Hm[a];
            Jm(a);
        }
    };
    _.Km = function (a) {
        a = a.container;
        "string" === typeof a && (a = document.getElementById(a));
        return a;
    };
    _.Lm = function (a) {
        var b = a.clientWidth;
        return (
            "position:absolute;top:-10000px;width:" +
            (b ? b + "px" : a.style.width || "300px") +
            ";margin:0px;border-style:none;"
        );
    };
    _.Mm = function (a, b) {
        var c = {},
            d = a.Ob(),
            e = b && b.width,
            f = b && b.height,
            g = b && b.verticalAlign;
        g && (c.verticalAlign = g);
        e || (e = d.width || a.width);
        f || (f = d.height || a.height);
        d.width = c.width = e;
        d.height = c.height = f;
        d = a.Fa();
        e = a.getId();
        Im(e, 2);
        a: {
                e = a.Xa();
                c = c || {};
                if (_.Be.oa) {
                    var k = d.id;
                    if (k) {
                        f = (f = _.Hm[k]) ? f.state : void 0;
                        if (1 === f || 4 === f) break a;
                        Jm(k);
                    }
                }
                (f = e.nextSibling) &&
                f.getAttribute &&
                f.getAttribute("data-gapistub") &&
                (e.parentNode.removeChild(f), (e.style.cssText = ""));
                f = c.width;
                g = c.height;
                var l = e.style;
                l.textIndent = "0";
                l.margin = "0";
                l.padding = "0";
                l.background = "transparent";
                l.borderStyle = "none";
                l.cssFloat = "none";
                l.styleFloat = "none";
                l.lineHeight = "normal";
                l.fontSize = "1px";
                l.verticalAlign = "baseline";
                e = e.style;
                e.display = "inline-block";
                d = d.style;
                d.position = "static";
                d.left = "0";
                d.top = "0";
                d.visibility = "visible";
                f && (e.width = d.width = f + "px");
                g && (e.height = d.height = g + "px");
                c.verticalAlign && (e.verticalAlign = c.verticalAlign);
                k && Im(k, 3);
            }
            (k = b ? b.title : null) && a.Fa().setAttribute("title", k);
        (b = b ? b.ariaLabel : null) && a.Fa().setAttribute("aria-label", b);
    };
    _.Nm = function (a) {
        var b = a.Xa();
        b && b.removeChild(a.Fa());
    };
    _.Om = function (a) {
        a.where = _.Km(a);
        var b = (a.messageHandlers = a.messageHandlers || {}),
            c = function (e) {
                _.Mm(this, e);
            };
        b._ready = c;
        b._renderstart = c;
        var d = a.onClose;
        a.onClose = function (e) {
            d && d.call(this, e);
            _.Nm(this);
        };
        a.onCreate = function (e) {
            e = e.Fa();
            e.style.cssText = _.Lm(e);
        };
    };

    var sg = (_.rg = _.rg || {});
    window.___jsl = window.___jsl || {};
    sg.xy = {
        W$: function () {
            return window.___jsl.bsh;
        },
        rI: function () {
            return window.___jsl.h;
        },
        yD: function (a) {
            window.___jsl.bsh = a;
        },
        T_: function (a) {
            window.___jsl.h = a;
        }
    };
    _.Pe = _.Pe || {};
    _.Pe.makeClosure = function (a, b, c) {
        for (var d = [], e = 2, f = arguments.length; e < f; ++e)
            d.push(arguments[e]);
        return function () {
            for (var g = d.slice(), k = 0, l = arguments.length; k < l; ++k)
                g.push(arguments[k]);
            return b.apply(a, g);
        };
    };
    _.Pe.kr = function (a) {
        var b,
            c,
            d = {};
        for (b = 0;
            (c = a[b]); ++b) d[c] = c;
        return d;
    };

    _.Pe = _.Pe || {};
    (function () {
        function a(c, d) {
            return String.fromCharCode(d);
        }
        var b = {
            0: !1,
            10: !0,
            13: !0,
            34: !0,
            39: !0,
            60: !0,
            62: !0,
            92: !0,
            8232: !0,
            8233: !0,
            65282: !0,
            65287: !0,
            65308: !0,
            65310: !0,
            65340: !0
        };
        _.Pe.escape = function (c, d) {
            if (c) {
                if ("string" === typeof c) return _.Pe.escapeString(c);
                if ("Array" === typeof c) {
                    var e = 0;
                    for (d = c.length; e < d; ++e) c[e] = _.Pe.escape(c[e]);
                } else if ("object" === typeof c && d) {
                    d = {};
                    for (e in c)
                        c.hasOwnProperty(e) &&
                        (d[_.Pe.escapeString(e)] = _.Pe.escape(c[e], !0));
                    return d;
                }
            }
            return c;
        };
        _.Pe.escapeString = function (c) {
            if (!c) return c;
            for (var d = [], e, f, g = 0, k = c.length; g < k; ++g)
                (e = c.charCodeAt(g)),
                (f = b[e]),
                !0 === f ? d.push("&#", e, ";") : !1 !== f && d.push(c.charAt(g));
            return d.join("");
        };
        _.Pe.unescapeString = function (c) {
            return c ? c.replace(/&#([0-9]+);/g, a) : c;
        };
    })();

    _.R = {};
    _.Qm = {};
    window.iframer = _.Qm;
    _.R.util = _.R.util || {};
    _.R.util.NR = function (a) {
        try {
            return !!a.document;
        } catch (b) {}
        return !1;
    };
    _.R.util.KI = function (a) {
        var b = a.parent;
        return a != b && _.R.util.NR(b) ? _.R.util.KI(b) : a;
    };
    _.R.util.oaa = function (a) {
        var b = a.userAgent || "";
        a = a.product || "";
        return (
            0 != b.indexOf("Opera") &&
            -1 == b.indexOf("WebKit") &&
            "Gecko" == a &&
            0 < b.indexOf("rv:1.")
        );
    };

    var rp, sp, tp, vp, wp, xp, Cp, Dp, Ep, Fp, Hp, Ip, Jp, Lp, Mp, Op;
    rp = function () {
        _.R.DJ++;
        return ["I", _.R.DJ, "_", new Date().getTime()].join("");
    };
    sp = function (a) {
        return a instanceof Array ? a.join(",") : a instanceof Object ? _.Gf(a) : a;
    };
    tp = function () {};
    vp = function (a) {
        a && a.match(up) && _.Je("googleapis.config/gcv", a);
    };
    wp = function (a) {
        _.rg.xy.T_(a);
    };
    xp = function (a) {
        _.rg.xy.yD(a);
    };
    _.yp = function (a, b) {
        b = b || {};
        for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
        return b;
    };
    _.Ap = function (a, b, c, d, e) {
        var f = [],
            g;
        for (g in a)
            if (a.hasOwnProperty(g)) {
                var k = b,
                    l = c,
                    m = a[g],
                    n = d,
                    p = zp(g);
                p[k] = p[k] || {};
                n = _.Pe.makeClosure(n, m);
                m._iframe_wrapped_rpc_ && (n._iframe_wrapped_rpc_ = !0);
                p[k][l] = n;
                f.push(g);
            }
        if (e)
            for (g in _.R.vn) _.R.vn.hasOwnProperty(g) && f.push(g);
        return f.join(",");
    };
    Cp = function (a, b, c) {
        var d = {};
        if (a && a._methods) {
            a = a._methods.split(",");
            for (var e = 0; e < a.length; e++) {
                var f = a[e];
                d[f] = Bp(f, b, c);
            }
        }
        return d;
    };
    Dp = function (a) {
        if (a && a.disableMultiLevelParentRelay) a = !1;
        else {
            var b;
            if ((b = _.Qm && _.Qm._open && "inline" != a.style && !0 !== a.inline))
                (a = a.container),
                (b = !(
                    a &&
                    (("string" == typeof a && document.getElementById(a)) ||
                        document == (a.ownerDocument || a.document))
                ));
            a = b;
        }
        return a;
    };
    Ep = function (a, b) {
        var c = {};
        b = b.params || {};
        for (var d in a)
            "#" == d.charAt(0) && (c[d.substring(1)] = a[d]),
            0 == d.indexOf("fr-") && (c[d.substring(3)] = a[d]),
            "#" == b[d] && (c[d] = a[d]);
        for (var e in c) delete a["fr-" + e], delete a["#" + e], delete a[e];
        return c;
    };
    Fp = function (a) {
        if (":" == a.charAt(0)) {
            var b = _.Q("iframes/" + a.substring(1));
            a = {};
            _.te(b, a);
            (b = a.url) && (a.url = _.ll(b));
            a.params || (a.params = {});
            return a;
        }
        return {
            url: _.ll(a)
        };
    };
    Hp = function (a) {
        function b() {}
        b.prototype = Gp.prototype;
        a.prototype = new b();
    };
    Ip = function (a) {
        return _.R.rs[a];
    };
    Jp = function (a, b) {
        _.R.rs[a] = b;
    };
    Lp = function (a) {
        a = a || {};
        "auto" === a.height && (a.height = _.nk.getHeight());
        var b = window && Kp && Kp.Ka();
        b
            ?
            b.OL(a.width || 0, a.height || 0) :
            _.Qm && _.Qm._resizeMe && _.Qm._resizeMe(a);
    };
    Mp = function (a) {
        vp(a);
    };
    _.Np = function () {
        return (
            _.me.location.origin || _.me.location.protocol + "//" + _.me.location.host
        );
    };
    Op = function (a) {
        var b = _.ve(a.location.href, "urlindex");
        if ((b = _.qe(_.Be, "fUrl", [])[b])) {
            var c = a.location.hash;
            b += /#/.test(b) ? c.replace(/^#/, "&") : c;
            a.location.replace(b);
        }
    };
    if (window.ToolbarApi)
        (Kp = window.ToolbarApi),
        (Kp.Ka = window.ToolbarApi.getInstance),
        (Kp.prototype = window.ToolbarApi.prototype),
        (_.h = Kp.prototype),
        (_.h.openWindow = Kp.prototype.openWindow),
        (_.h.aH = Kp.prototype.closeWindow),
        (_.h.DM = Kp.prototype.setOnCloseHandler),
        (_.h.NG = Kp.prototype.canClosePopup),
        (_.h.OL = Kp.prototype.resizeWindow);
    else {
        var Kp = function () {},
            Pp = null;
        Kp.Ka = function () {
            !Pp &&
                window.external &&
                window.external.GTB_IsToolbar &&
                (Pp = new Kp());
            return Pp;
        };
        _.h = Kp.prototype;
        _.h.openWindow = function (a) {
            return window.external.GTB_OpenPopup && window.external.GTB_OpenPopup(a);
        };
        _.h.aH = function (a) {
            window.external.GTB_ClosePopupWindow &&
                window.external.GTB_ClosePopupWindow(a);
        };
        _.h.DM = function (a, b) {
            window.external.GTB_SetOnCloseHandler &&
                window.external.GTB_SetOnCloseHandler(a, b);
        };
        _.h.NG = function (a) {
            return (
                window.external.GTB_CanClosePopup &&
                window.external.GTB_CanClosePopup(a)
            );
        };
        _.h.OL = function (a, b) {
            return (
                window.external.GTB_ResizeWindow &&
                window.external.GTB_ResizeWindow(a, b)
            );
        };
        window.ToolbarApi = Kp;
        window.ToolbarApi.getInstance = Kp.Ka;
    }
    var Qp = function () {
            _.Mf.register("_noop_echo", function () {
                this.callback(_.R.xU(_.R.jk[this.f]));
            });
        },
        Rp = function () {
            window.setTimeout(function () {
                _.Mf.call("..", "_noop_echo", _.R.SY);
            }, 0);
        },
        Bp = function (a, b, c) {
            var d = function (e) {
                var f = Array.prototype.slice.call(arguments, 0),
                    g = f[f.length - 1];
                if ("function" === typeof g) {
                    var k = g;
                    f.pop();
                }
                f.unshift(b, a, k, c);
                _.Mf.call.apply(_.Mf, f);
            };
            d._iframe_wrapped_rpc_ = !0;
            return d;
        },
        zp = function (a) {
            _.R.lw[a] ||
                ((_.R.lw[a] = {}),
                    _.Mf.register(a, function (b, c) {
                        var d = this.f;
                        if (!("string" != typeof b || b in {} || d in {})) {
                            var e = this.callback,
                                f = _.R.lw[a][d],
                                g;
                            f && Object.hasOwnProperty.call(f, b) ?
                                (g = f[b]) :
                                Object.hasOwnProperty.call(_.R.vn, a) && (g = _.R.vn[a]);
                            if (g)
                                return (
                                    (d = Array.prototype.slice.call(arguments, 1)),
                                    g._iframe_wrapped_rpc_ && e && d.push(e),
                                    g.apply({}, d)
                                );
                        }
                        _.ib(
                            [
                                'Unregistered call in window "',
                                window.name,
                                '" for method "',
                                a,
                                '", via proxyId "',
                                b,
                                '" from frame "',
                                d,
                                '".'
                            ].join("")
                        );
                        return null;
                    }));
            return _.R.lw[a];
        };
    _.R.KR = function (a, b, c) {
        var d = Array.prototype.slice.call(arguments);
        _.R.zI(function (e) {
            e.sameOrigin &&
                (d.unshift(
                        "/" +
                        e.claimedOpenerId +
                        "|" +
                        window.location.protocol +
                        "//" +
                        window.location.host
                    ),
                    _.Mf.call.apply(_.Mf, d));
        });
    };
    _.R.pZ = function (a, b) {
        _.Mf.register(a, b);
    };
    var up = /^[-_.0-9A-Za-z]+$/,
        Sp = {
            open: "open",
            onready: "ready",
            close: "close",
            onresize: "resize",
            onOpen: "open",
            onReady: "ready",
            onClose: "close",
            onResize: "resize",
            onRenderStart: "renderstart"
        },
        Tp = {
            onBeforeParentOpen: "beforeparentopen"
        },
        Up = {
            onOpen: function (a) {
                var b = a.Ob();
                a.Df(b.container || b.element);
                return a;
            },
            onClose: function (a) {
                a.remove();
            }
        };
    _.R.xl = function (a) {
        var b = _.re();
        _.te(_.$k, b);
        _.te(a, b);
        return b;
    };
    var Gp = function (a, b, c, d, e, f, g, k) {
        this.config = Fp(a);
        this.openParams = this.Ar = b || {};
        this.params = c || {};
        this.methods = d;
        this.Tw = !1;
        Vp(this, b.style);
        this.zp = {};
        Wp(this, function () {
            var l;
            (l = this.Ar.style) && _.R.rs[l] ?
                (l = _.R.rs[l]) :
                l ?
                (_.hb(
                        [
                            'Missing handler for style "',
                            l,
                            '". Continuing with default handler.'
                        ].join("")
                    ),
                    (l = null)) :
                (l = Up);
            if (l) {
                if ("function" === typeof l) var m = l(this);
                else {
                    var n = {};
                    for (m in l) {
                        var p = l[m];
                        n[m] = "function" === typeof p ? _.Pe.makeClosure(l, p, this) : p;
                    }
                    m = n;
                }
                for (var t in e)
                    (l = m[t]),
                    "function" === typeof l && Xp(this, e[t], _.Pe.makeClosure(m, l));
            }
            f && Xp(this, "close", f);
        });
        this.Zi = this.ac = g;
        this.vC = (k || []).slice();
        g && this.vC.unshift(g.getId());
    };
    Gp.prototype.Ob = function () {
        return this.Ar;
    };
    Gp.prototype.getParams = function () {
        return this.params;
    };
    Gp.prototype.yu = function () {
        return this.methods;
    };
    Gp.prototype.Kc = function () {
        return this.Zi;
    };
    var Vp = function (a, b) {
            a.Tw ||
                ((b = b && !_.R.rs[b] && _.R.fz[b]) ?
                    ((a.ez = []),
                        b(function () {
                            a.Tw = !0;
                            for (var c = 0, d = a.ez.length; c < d; ++c) a.ez[c].call(a);
                        })) :
                    (a.Tw = !0));
        },
        Wp = function (a, b) {
            a.Tw ? b.call(a) : a.ez.push(b);
        };
    Gp.prototype.Qc = function (a, b) {
        Wp(this, function () {
            Xp(this, a, b);
        });
    };
    var Xp = function (a, b, c) {
        a.zp[b] = a.zp[b] || [];
        a.zp[b].push(c);
    };
    Gp.prototype.jm = function (a, b) {
        Wp(this, function () {
            var c = this.zp[a];
            if (c)
                for (var d = 0, e = c.length; d < e; ++d)
                    if (c[d] === b) {
                        c.splice(d, 1);
                        break;
                    }
        });
    };
    Gp.prototype.Ug = function (a, b) {
        var c = this.zp[a];
        if (c)
            for (
                var d = Array.prototype.slice.call(arguments, 1), e = 0, f = c.length; e < f;
                ++e
            )
                try {
                    var g = c[e].apply({}, d);
                } catch (k) {
                    _.ib(
                        [
                            'Exception when calling callback "',
                            a,
                            '" with exception "',
                            k.name,
                            ": ",
                            k.message,
                            '".'
                        ].join("")
                    );
                }
        return g;
    };
    var Yp = function (a) {
            return "number" == typeof a ?
                {
                    value: a,
                    Zz: a + "px"
                } :
                "100%" == a ?
                {
                    value: 100,
                    Zz: "100%",
                    $J: !0
                } :
                null;
        },
        Zp = function (a, b, c, d, e, f, g) {
            Gp.call(this, a, b, c, d, Sp, e, f, g);
            this.id = b.id || rp();
            this.Or =
                (b.rpctoken && String(b.rpctoken)) || Math.round(1e9 * (0, _.wg)());
            this.AW = Ep(this.params, this.config);
            this.Qz = {};
            Wp(this, function () {
                this.Ug("open");
                _.yp(this.Qz, this);
            });
        };
    Hp(Zp);
    _.h = Zp.prototype;
    _.h.Df = function (a, b) {
        if (!this.config.url) return _.ib("Cannot open iframe, empty URL."), this;
        var c = this.id;
        _.R.jk[c] = this;
        var d = _.yp(this.methods);
        d._ready = this.Tv;
        d._close = this.close;
        d._open = this.Uv;
        d._resizeMe = this.fo;
        d._renderstart = this.ZK;
        var e = this.AW;
        this.Or && (e.rpctoken = this.Or);
        e._methods = _.Ap(d, c, "", this, !0);
        this.el = a = "string" === typeof a ? document.getElementById(a) : a;
        d = {};
        d.id = c;
        if (b) {
            d.attributes = b;
            var f = b.style;
            if ("string" === typeof f) {
                if (f) {
                    var g = [];
                    f = f.split(";");
                    for (var k = 0, l = f.length; k < l; ++k) {
                        var m = f[k];
                        if (0 != m.length || k + 1 != l)
                            (m = m.split(":")),
                            2 == m.length &&
                            m[0].match(/^[ a-zA-Z_-]+$/) &&
                            m[1].match(/^[ +.%0-9a-zA-Z_-]+$/) ?
                            g.push(m.join(":")) :
                            _.ib(['Iframe style "', f[k], '" not allowed.'].join(""));
                    }
                    g = g.join(";");
                } else g = "";
                b.style = g;
            }
        }
        this.Ob().allowPost && (d.allowPost = !0);
        this.Ob().forcePost && (d.forcePost = !0);
        d.queryParams = this.params;
        d.fragmentParams = e;
        d.paramsSerializer = sp;
        this.Xg = _.nl(this.config.url, a, d);
        a = this.Xg.getAttribute("data-postorigin") || this.Xg.src;
        _.R.jk[c] = this;
        _.Mf.setAuthToken(this.id, this.Or);
        _.Mf.setRelayUrl(this.id, a);
        return this;
    };
    _.h.ue = function (a, b) {
        this.Qz[a] = b;
    };
    _.h.getId = function () {
        return this.id;
    };
    _.h.Fa = function () {
        return this.Xg;
    };
    _.h.Xa = function () {
        return this.el;
    };
    _.h.df = function (a) {
        this.el = a;
    };
    _.h.Tv = function (a) {
        var b = Cp(a, this.id, "");
        this.Zi &&
            "function" == typeof this.methods._ready &&
            ((a._methods = _.Ap(b, this.Zi.getId(), this.id, this, !1)),
                this.methods._ready(a));
        _.yp(a, this);
        _.yp(b, this);
        this.Ug("ready", a);
    };
    _.h.ZK = function (a) {
        this.Ug("renderstart", a);
    };
    _.h.close = function (a) {
        a = this.Ug("close", a);
        delete _.R.jk[this.id];
        return a;
    };
    _.h.remove = function () {
        var a = document.getElementById(this.id);
        a && a.parentNode && a.parentNode.removeChild(a);
    };
    _.h.Uv = function (a) {
        var b = Cp(a.params, this.id, a.proxyId);
        delete a.params._methods;
        "_parent" == a.openParams.anchor && (a.openParams.anchor = this.el);
        if (Dp(a.openParams))
            new $p(
                a.url,
                a.openParams,
                a.params,
                b,
                b._onclose,
                this,
                a.openedByProxyChain
            );
        else {
            var c = new Zp(
                    a.url,
                    a.openParams,
                    a.params,
                    b,
                    b._onclose,
                    this,
                    a.openedByProxyChain
                ),
                d = this;
            Wp(c, function () {
                var e = {
                        childId: c.getId()
                    },
                    f = c.Qz;
                f._toclose = c.close;
                e._methods = _.Ap(f, d.id, c.id, c, !1);
                b._onopen(e);
            });
        }
    };
    _.h.fo = function (a) {
        if (void 0 === this.Ug("resize", a) && this.Xg) {
            var b = Yp(a.width);
            null != b && (this.Xg.style.width = b.Zz);
            a = Yp(a.height);
            null != a && (this.Xg.style.height = a.Zz);
            this.Xg.parentElement &&
                ((null != b && b.$J) || (null != a && a.$J)) &&
                (this.Xg.parentElement.style.display = "block");
        }
    };
    var $p = function (a, b, c, d, e, f, g) {
        Gp.call(this, a, b, c, d, Tp, e, f, g);
        this.url = a;
        this.Am = null;
        this.RC = rp();
        Wp(this, function () {
            this.Ug("beforeparentopen");
            var k = _.yp(this.methods);
            k._onopen = this.IY;
            k._ready = this.Tv;
            k._onclose = this.GY;
            this.params._methods = _.Ap(k, "..", this.RC, this, !0);
            k = {};
            for (m in this.params) k[m] = sp(this.params[m]);
            var l = this.config.url;
            if (this.Ar.hideUrlFromParent) {
                var m = window.name;
                var n = l;
                l = _.Ok(this.config.url, this.params, {}, sp);
                var p = k;
                k = {};
                k._methods = p._methods;
                k["#opener"] = p["#opener"];
                k["#urlindex"] = p["#urlindex"];
                k["#opener"] && void 0 != p["#urlindex"] ?
                    ((k["#opener"] = m + "," + k["#opener"]), (m = n)) :
                    ((n = _.qe(_.Be, "fUrl", [])),
                        (p = n.length),
                        (n[p] = l),
                        (_.Be.rUrl = Op),
                        (k["#opener"] = m),
                        (k["#urlindex"] = p),
                        (m = _.rg.getOrigin(_.me.location.href)),
                        (l =
                            _.Q("iframes/relay_url_" + encodeURIComponent(m)) ||
                            "/_/gapi/sibling/1/frame.html"),
                        (m += l));
                l = m;
            }
            _.Qm._open({
                url: l,
                openParams: this.Ar,
                params: k,
                proxyId: this.RC,
                openedByProxyChain: this.vC
            });
        });
    };
    Hp($p);
    $p.prototype.NU = function () {
        return this.Am;
    };
    $p.prototype.IY = function (a) {
        this.Am = a.childId;
        var b = Cp(a, "..", this.Am);
        _.yp(b, this);
        this.close = b._toclose;
        _.R.jk[this.Am] = this;
        this.Zi &&
            this.methods._onopen &&
            ((a._methods = _.Ap(b, this.Zi.getId(), this.Am, this, !1)),
                this.methods._onopen(a));
    };
    $p.prototype.Tv = function (a) {
        var b = String(this.Am),
            c = Cp(a, "..", b);
        _.yp(a, this);
        _.yp(c, this);
        this.Ug("ready", a);
        this.Zi &&
            this.methods._ready &&
            ((a._methods = _.Ap(c, this.Zi.getId(), b, this, !1)),
                this.methods._ready(a));
    };
    $p.prototype.GY = function (a) {
        if (this.Zi && this.methods._onclose) this.methods._onclose(a);
        else return (a = this.Ug("close", a)), delete _.R.jk[this.Am], a;
    };
    var aq = function (a, b, c, d, e, f, g) {
        Gp.call(this, a, b, c, d, Tp, f, g);
        this.id = b.id || rp();
        this.b1 = e;
        d._close = this.close;
        this.onClosed = this.TK;
        this.WN = 0;
        Wp(this, function () {
            this.Ug("beforeparentopen");
            var k = _.yp(this.methods);
            this.params._methods = _.Ap(k, "..", this.RC, this, !0);
            k = {};
            k.queryParams = this.params;
            a = _.el(_.ne, this.config.url, this.id, k);
            var l = e.openWindow(a);
            this.canAutoClose = function (m) {
                m(e.NG(l));
            };
            e.DM(l, this);
            this.WN = l;
        });
    };
    Hp(aq);
    aq.prototype.close = function (a) {
        a = this.Ug("close", a);
        this.b1.aH(this.WN);
        return a;
    };
    aq.prototype.TK = function () {
        this.Ug("close");
    };
    (function () {
        _.R.jk = {};
        _.R.rs = {};
        _.R.fz = {};
        _.R.DJ = 0;
        _.R.lw = {};
        _.R.vn = {};
        _.R.$v = null;
        _.R.Zv = [];
        _.R.SY = function (c) {
            var d = !1;
            try {
                if (null != c) {
                    var e = window.parent.frames[c.id];
                    d = e.iframer.id == c.id && e.iframes.openedId_(_.Qm.id);
                }
            } catch (f) {}
            try {
                _.R.$v = {
                    origin: this.origin,
                    referer: this.referer,
                    claimedOpenerId: c && c.id,
                    claimedOpenerProxyChain: (c && c.proxyChain) || [],
                    sameOrigin: d
                };
                for (c = 0; c < _.R.Zv.length; ++c) _.R.Zv[c](_.R.$v);
                _.R.Zv = [];
            } catch (f) {}
        };
        _.R.xU = function (c) {
            var d = c && c.Zi,
                e = null;
            d && ((e = {}), (e.id = d.getId()), (e.proxyChain = c.vC));
            return e;
        };
        Qp();
        if (window.parent != window) {
            var a = _.Pe.getUrlParameters();
            a.gcv && vp(a.gcv);
            var b = a.jsh;
            b && wp(b);
            _.yp(Cp(a, "..", ""), _.Qm);
            _.yp(a, _.Qm);
            Rp();
        }
        _.R.rb = Ip;
        _.R.Xb = Jp;
        _.R.S_ = Mp;
        _.R.resize = Lp;
        _.R.KT = function (c) {
            return _.R.fz[c];
        };
        _.R.DD = function (c, d) {
            _.R.fz[c] = d;
        };
        _.R.NL = Lp;
        _.R.r0 = Mp;
        _.R.Ou = {};
        _.R.Ou.get = Ip;
        _.R.Ou.set = Jp;
        _.R.lR = function (c, d) {
            zp(c);
            _.R.vn[c] = d || window[c];
        };
        _.R.K$ = function (c) {
            delete _.R.vn[c];
        };
        _.R.open = function (c, d, e, f, g, k) {
            3 == arguments.length ?
                (f = {}) :
                4 == arguments.length &&
                "function" === typeof f &&
                ((g = f), (f = {}));
            var l = "bubble" === d.style && Kp ? Kp.Ka() : null;
            return l ?
                new aq(c, d, e, f, l, g, k) :
                Dp(d) ?
                new $p(c, d, e, f, g, k) :
                new Zp(c, d, e, f, g, k);
        };
        _.R.close = function (c, d) {
            _.Qm && _.Qm._close && _.Qm._close(c, d);
        };
        _.R.ready = function (c, d, e) {
            2 == arguments.length && "function" === typeof d && ((e = d), (d = {}));
            var f = c || {};
            "height" in f || (f.height = _.nk.getHeight());
            f._methods = _.Ap(d || {}, "..", "", _.Qm, !0);
            _.Qm && _.Qm._ready && _.Qm._ready(f, e);
        };
        _.R.zI = function (c) {
            _.R.$v ? c(_.R.$v) : _.R.Zv.push(c);
        };
        _.R.MY = function (c) {
            return !!_.R.jk[c];
        };
        _.R.VT = function () {
            return [
                "https://ssl.gstatic.com/gb/js/",
                _.Q("googleapis.config/gcv")
            ].join("");
        };
        _.R.xL = function (c) {
            var d = {
                mouseover: 1,
                mouseout: 1
            };
            if (_.Qm._event)
                for (var e = 0; e < c.length; e++) {
                    var f = c[e];
                    f in d &&
                        _.Pe.attachBrowserEvent(
                            document,
                            f,
                            function (g) {
                                _.Qm._event({
                                    event: g.type,
                                    timestamp: new Date().getTime()
                                });
                            },
                            !0
                        );
                }
        };
        _.R.b0 = wp;
        _.R.yD = xp;
        _.R.Laa = tp;
        _.R.GJ = _.Qm;
    })();
    _.z("iframes.allow", _.R.lR);
    _.z("iframes.callSiblingOpener", _.R.KR);
    _.z("iframes.registerForOpenedSibling", _.R.pZ);
    _.z("iframes.close", _.R.close);
    _.z("iframes.getGoogleConnectJsUri", _.R.VT);
    _.z("iframes.getHandler", _.R.rb);
    _.z("iframes.getDeferredHandler", _.R.KT);
    _.z("iframes.getParentInfo", _.R.zI);
    _.z("iframes.iframer", _.R.GJ);
    _.z("iframes.open", _.R.open);
    _.z("iframes.openedId_", _.R.MY);
    _.z("iframes.propagate", _.R.xL);
    _.z("iframes.ready", _.R.ready);
    _.z("iframes.resize", _.R.resize);
    _.z("iframes.setGoogleConnectJsVersion", _.R.S_);
    _.z("iframes.setBootstrapHint", _.R.yD);
    _.z("iframes.setJsHint", _.R.b0);
    _.z("iframes.setHandler", _.R.Xb);
    _.z("iframes.setDeferredHandler", _.R.DD);
    _.z("IframeBase", Gp);
    _.z("IframeBase.prototype.addCallback", Gp.prototype.Qc);
    _.z("IframeBase.prototype.getMethods", Gp.prototype.yu);
    _.z("IframeBase.prototype.getOpenerIframe", Gp.prototype.Kc);
    _.z("IframeBase.prototype.getOpenParams", Gp.prototype.Ob);
    _.z("IframeBase.prototype.getParams", Gp.prototype.getParams);
    _.z("IframeBase.prototype.removeCallback", Gp.prototype.jm);
    _.z("Iframe", Zp);
    _.z("Iframe.prototype.close", Zp.prototype.close);
    _.z("Iframe.prototype.exposeMethod", Zp.prototype.ue);
    _.z("Iframe.prototype.getId", Zp.prototype.getId);
    _.z("Iframe.prototype.getIframeEl", Zp.prototype.Fa);
    _.z("Iframe.prototype.getSiteEl", Zp.prototype.Xa);
    _.z("Iframe.prototype.openInto", Zp.prototype.Df);
    _.z("Iframe.prototype.remove", Zp.prototype.remove);
    _.z("Iframe.prototype.setSiteEl", Zp.prototype.df);
    _.z("Iframe.prototype.addCallback", Zp.prototype.Qc);
    _.z("Iframe.prototype.getMethods", Zp.prototype.yu);
    _.z("Iframe.prototype.getOpenerIframe", Zp.prototype.Kc);
    _.z("Iframe.prototype.getOpenParams", Zp.prototype.Ob);
    _.z("Iframe.prototype.getParams", Zp.prototype.getParams);
    _.z("Iframe.prototype.removeCallback", Zp.prototype.jm);
    _.z("IframeProxy", $p);
    _.z("IframeProxy.prototype.getTargetIframeId", $p.prototype.NU);
    _.z("IframeProxy.prototype.addCallback", $p.prototype.Qc);
    _.z("IframeProxy.prototype.getMethods", $p.prototype.yu);
    _.z("IframeProxy.prototype.getOpenerIframe", $p.prototype.Kc);
    _.z("IframeProxy.prototype.getOpenParams", $p.prototype.Ob);
    _.z("IframeProxy.prototype.getParams", $p.prototype.getParams);
    _.z("IframeProxy.prototype.removeCallback", $p.prototype.jm);
    _.z("IframeWindow", aq);
    _.z("IframeWindow.prototype.close", aq.prototype.close);
    _.z("IframeWindow.prototype.onClosed", aq.prototype.TK);
    _.z("iframes.util.getTopMostAccessibleWindow", _.R.util.KI);
    _.z("iframes.handlers.get", _.R.Ou.get);
    _.z("iframes.handlers.set", _.R.Ou.set);
    _.z("iframes.resizeMe", _.R.NL);
    _.z("iframes.setVersionOverride", _.R.r0);
    Gp.prototype.send = function (a, b, c) {
        _.R.aM(this, a, b, c);
    };
    _.Qm.send = function (a, b, c) {
        _.R.aM(_.Qm, a, b, c);
    };
    Gp.prototype.register = function (a, b) {
        var c = this;
        c.Qc(a, function (d) {
            b.call(c, d);
        });
    };
    _.R.aM = function (a, b, c, d) {
        var e = [];
        void 0 !== c && e.push(c);
        d &&
            e.push(function (f) {
                d.call(this, [f]);
            });
        a[b] && a[b].apply(a, e);
    };
    _.R.So = function () {
        return !0;
    };
    _.z("iframes.CROSS_ORIGIN_IFRAMES_FILTER", _.R.So);
    _.z("IframeBase.prototype.send", Gp.prototype.send);
    _.z("IframeBase.prototype.register", Gp.prototype.register);
    _.z("Iframe.prototype.send", Zp.prototype.send);
    _.z("Iframe.prototype.register", Zp.prototype.register);
    _.z("IframeProxy.prototype.send", $p.prototype.send);
    _.z("IframeProxy.prototype.register", $p.prototype.register);
    _.z("IframeWindow.prototype.send", aq.prototype.send);
    _.z("IframeWindow.prototype.register", aq.prototype.register);
    _.z("iframes.iframer.send", _.R.GJ.send);

    var et = _.R.Xb,
        ft = {
            open: function (a) {
                var b = _.Km(a.Ob());
                return a.Df(b, {
                    style: _.Lm(b)
                });
            },
            attach: function (a, b) {
                var c = _.Km(a.Ob()),
                    d = b.id,
                    e = b.getAttribute("data-postorigin") || b.src,
                    f = /#(?:.*&)?rpctoken=(\d+)/.exec(e);
                f = f && f[1];
                a.id = d;
                a.Or = f;
                a.el = c;
                a.Xg = b;
                _.R.jk[d] = a;
                b = _.yp(a.methods);
                b._ready = a.Tv;
                b._close = a.close;
                b._open = a.Uv;
                b._resizeMe = a.fo;
                b._renderstart = a.ZK;
                _.Ap(b, d, "", a, !0);
                _.Mf.setAuthToken(a.id, a.Or);
                _.Mf.setRelayUrl(a.id, e);
                c = _.R.xl({
                    style: _.Lm(c)
                });
                for (var g in c)
                    Object.prototype.hasOwnProperty.call(c, g) &&
                    ("style" == g ?
                        (a.Xg.style.cssText = c[g]) :
                        a.Xg.setAttribute(g, c[g]));
            }
        };
    ft.onready = _.Mm;
    ft.onRenderStart = _.Mm;
    ft.close = _.Nm;
    et("inline", ft);

    _.qg = (window.gapi || {}).load;
    _.Pm = _.re();
    _.Rm = function (a) {
        var b = window;
        a = (a || b.location.href).match(/.*(\?|#|&)usegapi=([^&#]+)/) || [];
        return "1" === decodeURIComponent(a[a.length - 1] || "");
    };
    var Sm, Tm, Um, Vm, Wm, Xm, an, bn;
    Sm = function (a) {
        if (_.pe.test(Object.keys)) return Object.keys(a);
        var b = [],
            c;
        for (c in a) _.se(a, c) && b.push(c);
        return b;
    };
    Tm = function (a, b) {
        if (!_.Jf())
            try {
                a();
            } catch (c) {}
        _.Kf(b);
    };
    Um = {
        button: !0,
        div: !0,
        span: !0
    };
    Vm = function (a) {
        var b = _.qe(_.Be, "sws", []);
        return 0 <= _.Ak.call(b, a);
    };
    Wm = function (a) {
        return _.qe(_.Be, "watt", _.re())[a];
    };
    Xm = function (a) {
        return function (b, c) {
            return a ? _.jl()[c] || a[c] || "" : _.jl()[c] || "";
        };
    };
    _.Ym = {
        callback: 1,
        clientid: 1,
        cookiepolicy: 1,
        openidrealm: -1,
        includegrantedscopes: -1,
        requestvisibleactions: 1,
        scope: 1
    };
    _.Zm = !1;
    _.$m = function () {
        if (!_.Zm) {
            for (
                var a = document.getElementsByTagName("meta"), b = 0; b < a.length;
                ++b
            ) {
                var c = a[b].name.toLowerCase();
                if (_.Gd(c, "google-signin-")) {
                    c = c.substring(14);
                    var d = a[b].content;
                    _.Ym[c] && d && (_.Pm[c] = d);
                }
            }
            if (window.self !== window.top) {
                a = document.location.toString();
                for (var e in _.Ym)
                    0 < _.Ym[e] && (b = _.ve(a, e, "")) && (_.Pm[e] = b);
            }
            _.Zm = !0;
        }
        e = _.re();
        _.te(_.Pm, e);
        return e;
    };
    an = function (a) {
        var b;
        a.match(/^https?%3A/i) && (b = decodeURIComponent(a));
        return _.Pk(document, b ? b : a);
    };
    bn = function (a) {
        a = a || "canonical";
        for (
            var b = document.getElementsByTagName("link"), c = 0, d = b.length; c < d; c++
        ) {
            var e = b[c],
                f = e.getAttribute("rel");
            if (
                f &&
                f.toLowerCase() == a &&
                (e = e.getAttribute("href")) &&
                (e = an(e)) &&
                null != e.match(/^https?:\/\/[\w\-_\.]+/i)
            )
                return e;
        }
        return window.location.href;
    };
    _.cn = function () {
        return (
            window.location.origin ||
            window.location.protocol + "//" + window.location.host
        );
    };
    _.dn = function (a, b, c, d) {
        return (a = "string" == typeof a ? a : void 0) ? an(a) : bn(d);
    };
    _.en = function (a, b, c) {
        null == a &&
            c &&
            ((a = c.db), null == a && (a = c.gwidget && c.gwidget.db));
        return a || void 0;
    };
    _.fn = function (a, b, c) {
        null == a &&
            c &&
            ((a = c.ecp), null == a && (a = c.gwidget && c.gwidget.ecp));
        return a || void 0;
    };
    _.gn = function (a, b, c) {
        return _.dn(a, b, c, b.action ? void 0 : "publisher");
    };
    var hn, jn, kn, ln, mn, nn, pn, on;
    hn = {
        se: "0"
    };
    jn = {
        post: !0
    };
    kn = {
        style: "position:absolute;top:-10000px;width:450px;margin:0px;border-style:none"
    };
    ln = "onPlusOne _ready _close _open _resizeMe _renderstart oncircled drefresh erefresh".split(
        " "
    );
    mn = _.qe(_.Be, "WI", _.re());
    nn = ["style", "data-gapiscan"];
    pn = function (a) {
        for (
            var b = _.re(),
                c = 0 != a.nodeName.toLowerCase().indexOf("g:"),
                d = 0,
                e = a.attributes.length; d < e; d++
        ) {
            var f = a.attributes[d],
                g = f.name,
                k = f.value;
            0 <= _.Ak.call(nn, g) ||
                (c && 0 != g.indexOf("data-")) ||
                "null" === k ||
                ("specified" in f && !f.specified) ||
                (c && (g = g.substr(5)), (b[g.toLowerCase()] = k));
        }
        a = a.style;
        (c = on(a && a.height)) && (b.height = String(c));
        (a = on(a && a.width)) && (b.width = String(a));
        return b;
    };
    _.tn = function (a, b, c, d, e, f) {
        if (c.rd) var g = b;
        else
            (g = document.createElement("div")),
            b.setAttribute("data-gapistub", !0),
            (g.style.cssText = "position:absolute;width:450px;left:-10000px;"),
            b.parentNode.insertBefore(g, b);
        f.siteElement = g;
        g.id || (g.id = _.qn(a));
        b = _.re();
        b[">type"] = a;
        _.te(c, b);
        a = _.nl(d, g, e);
        f.iframeNode = a;
        f.id = a.getAttribute("id");
    };
    _.qn = function (a) {
        _.qe(mn, a, 0);
        return "___" + a + "_" + mn[a]++;
    };
    on = function (a) {
        var b = void 0;
        "number" === typeof a
            ?
            (b = a) :
            "string" === typeof a && (b = parseInt(a, 10));
        return b;
    };
    var un = function () {},
        xn = function (a) {
            var b = a.Ym,
                c = function (l) {
                    c.H.constructor.call(this, l);
                    var m = this.yh.length;
                    this.Lg = [];
                    for (var n = 0; n < m; ++n)
                        this.yh[n].G$ || (this.Lg[n] = new this.yh[n](l));
                };
            _.F(c, b);
            for (var d = []; a && a !== Object;) {
                if ((b = a.Ym)) {
                    b.yh && (_.Le(d, b.yh), _.Me(d));
                    var e = b.prototype,
                        f;
                    for (f in e)
                        if (e.hasOwnProperty(f) && _.ob(e[f]) && e[f] !== b) {
                            var g = !!e[f].r$,
                                k = vn(f, e, d, g);
                            (g = wn(f, e, k, g)) && (c.prototype[f] = g);
                        }
                }
                a =
                    a === Object ?
                    Object :
                    Object.getPrototypeOf ?
                    Object.getPrototypeOf(a.prototype).constructor || Object :
                    (a.H && a.H.constructor) || Object;
            }
            c.prototype.yh = d;
            return c;
        },
        vn = function (a, b, c, d) {
            for (
                var e = [], f = 0; f < c.length && (c[f].prototype[a] === b[a] || (e.push(f), !d));
                ++f
            );
            return e;
        },
        wn = function (a, b, c, d) {
            return c.length ?
                d ?
                function (e) {
                    var f = this.Lg[c[0]];
                    return f ?
                        f[a].apply(this.Lg[c[0]], arguments) :
                        this.yh[c[0]].prototype[a].apply(this, arguments);
                } :
                b[a].MR ?
                function (e) {
                    a: {
                        var f = Array.prototype.slice.call(arguments, 0);
                        for (var g = 0; g < c.length; ++g) {
                            var k = this.Lg[c[g]];
                            if (
                                (k = k ?
                                    k[a].apply(k, f) :
                                    this.yh[c[g]].prototype[a].apply(this, f))
                            ) {
                                f = k;
                                break a;
                            }
                        }
                        f = !1;
                    }
                    return f;
                } :
                b[a].LR ?
                function (e) {
                    a: {
                        var f = Array.prototype.slice.call(arguments, 0);
                        for (var g = 0; g < c.length; ++g) {
                            var k = this.Lg[c[g]];
                            k = k ?
                                k[a].apply(k, f) :
                                this.yh[c[g]].prototype[a].apply(this, f);
                            if (null != k) {
                                f = k;
                                break a;
                            }
                        }
                        f = void 0;
                    }
                    return f;
                } :
                b[a].JK ?
                function (e) {
                    for (
                        var f = Array.prototype.slice.call(arguments, 0), g = 0; g < c.length;
                        ++g
                    ) {
                        var k = this.Lg[c[g]];
                        k
                            ?
                            k[a].apply(k, f) :
                            this.yh[c[g]].prototype[a].apply(this, f);
                    }
                } :
                function (e) {
                    for (
                        var f = Array.prototype.slice.call(arguments, 0), g = [], k = 0; k < c.length;
                        ++k
                    ) {
                        var l = this.Lg[c[k]];
                        g.push(
                            l ?
                            l[a].apply(l, f) :
                            this.yh[c[k]].prototype[a].apply(this, f)
                        );
                    }
                    return g;
                } :
                d || b[a].MR || b[a].LR || b[a].JK ?
                null :
                yn;
        },
        yn = function () {
            return [];
        };
    un.prototype.Vz = function (a) {
        if (this.Lg)
            for (var b = 0; b < this.Lg.length; ++b)
                if (this.Lg[b] instanceof a) return this.Lg[b];
        return null;
    };
    var zn = function (a) {
        return this.Va.Vz(a);
    };
    var An,
        Cn,
        Dn,
        En,
        Fn = /(?:^|\s)g-((\S)*)(?:$|\s)/,
        Gn = {
            plusone: !0,
            autocomplete: !0,
            profile: !0,
            signin: !0,
            signin2: !0
        };
    An = _.qe(_.Be, "SW", _.re());
    Cn = _.qe(_.Be, "SA", _.re());
    Dn = _.qe(_.Be, "SM", _.re());
    En = _.qe(_.Be, "FW", []);
    var Hn = function (a, b) {
            return ("string" === typeof a ? document.getElementById(a) : a) || b;
        },
        Ln = function (a, b) {
            var c;
            In.ps0 = new Date().getTime();
            Jn("ps0");
            a = Hn(a, _.ne);
            var d = _.ne.documentMode;
            if (a.querySelectorAll && (!d || 8 < d)) {
                d = b ?
                    [b] :
                    Sm(An)
                    .concat(Sm(Cn))
                    .concat(Sm(Dn));
                for (var e = [], f = 0; f < d.length; f++) {
                    var g = d[f];
                    e.push(".g-" + g, "g\\:" + g);
                }
                d = a.querySelectorAll(e.join(","));
            } else d = a.getElementsByTagName("*");
            a = _.re();
            for (e = 0; e < d.length; e++) {
                f = d[e];
                var k = f;
                g = b;
                var l = k.nodeName.toLowerCase(),
                    m = void 0;
                if (k.getAttribute("data-gapiscan")) g = null;
                else {
                    var n = l.indexOf("g:");
                    0 == n ?
                        (m = l.substr(2)) :
                        (n =
                            (n = String(k.className || k.getAttribute("class"))) &&
                            Fn.exec(n)) && (m = n[1]);
                    g = !m || !(An[m] || Cn[m] || Dn[m]) || (g && m !== g) ? null : m;
                }
                g &&
                    (Gn[g] ||
                        0 == f.nodeName.toLowerCase().indexOf("g:") ||
                        0 != Sm(pn(f)).length) &&
                    (f.setAttribute("data-gapiscan", !0), _.qe(a, g, []).push(f));
            }
            for (p in a) En.push(p);
            In.ps1 = new Date().getTime();
            Jn("ps1");
            if ((b = En.join(":")))
                try {
                    _.ue.load(b, void 0);
                } catch (t) {
                    _.Se(t);
                    return;
                }
            e = [];
            for (c in a) {
                d = a[c];
                var p = 0;
                for (b = d.length; p < b; p++)(f = d[p]), Kn(c, f, pn(f), e, b);
            }
        };
    var Mn = function (a, b) {
            var c = Wm(a);
            b && c ?
                (c(b), (c = b.iframeNode) && c.setAttribute("data-gapiattached", !0)) :
                _.ue.load(a, function () {
                    var d = Wm(a),
                        e = b && b.iframeNode,
                        f = b && b.userParams;
                    e && d ?
                        (d(b), e.setAttribute("data-gapiattached", !0)) :
                        ((d = _.ue[a].go),
                            "signin2" == a ? d(e, f) : d(e && e.parentNode, f));
                });
        },
        Kn = function (a, b, c, d, e, f, g) {
            switch (Nn(b, a, f)) {
                case 0:
                    a = Dn[a] ? a + "_annotation" : a;
                    d = {};
                    d.iframeNode = b;
                    d.userParams = c;
                    Mn(a, d);
                    break;
                case 1:
                    if (b.parentNode) {
                        for (var k in c) {
                            if ((f = _.se(c, k)))
                                (f = c[k]),
                                (f = !!f &&
                                    "object" === typeof f &&
                                    (!f.toString ||
                                        f.toString === Object.prototype.toString ||
                                        f.toString === Array.prototype.toString));
                            if (f)
                                try {
                                    c[k] = _.Gf(c[k]);
                                } catch (w) {
                                    delete c[k];
                                }
                        }
                        k = !0;
                        c.dontclear && (k = !1);
                        delete c.dontclear;
                        var l;
                        f = {};
                        var m = (l = a);
                        "plus" == a &&
                            c.action &&
                            ((l = a + "_" + c.action), (m = a + "/" + c.action));
                        (l = _.Q("iframes/" + l + "/url")) ||
                        (l =
                            ":im_socialhost:/:session_prefix::im_prefix:_/widget/render/" +
                            m +
                            "?usegapi=1");
                        for (n in hn) f[n] = n + "/" + (c[n] || hn[n]) + "/";
                        var n = _.Pk(_.ne, l.replace(_.il, Xm(f)));
                        m = "iframes/" + a + "/params/";
                        f = {};
                        _.te(c, f);
                        (l = _.Q("lang") || _.Q("gwidget/lang")) && (f.hl = l);
                        jn[a] || (f.origin = _.cn());
                        f.exp = _.Q(m + "exp");
                        if ((m = _.Q(m + "location")))
                            for (l = 0; l < m.length; l++) {
                                var p = m[l];
                                f[p] = _.me.location[p];
                            }
                        switch (a) {
                            case "plus":
                            case "follow":
                                f.url = _.gn(f.href, c, null);
                                delete f.href;
                                break;
                            case "plusone":
                                m = (m = c.href) ? an(m) : bn();
                                f.url = m;
                                f.db = _.en(c.db, void 0, _.Q());
                                f.ecp = _.fn(c.ecp, void 0, _.Q());
                                delete f.href;
                                break;
                            case "signin":
                                f.url = bn();
                        }
                        _.Be.ILI && (f.iloader = "1");
                        delete f["data-onload"];
                        delete f.rd;
                        for (var t in hn) f[t] && delete f[t];
                        f.gsrc = _.Q("iframes/:source:");
                        t = _.Q("inline/css");
                        "undefined" !== typeof t && 0 < e && t >= e && (f.ic = "1");
                        t = /^#|^fr-/;
                        e = {};
                        for (var r in f)
                            _.se(f, r) &&
                            t.test(r) &&
                            ((e[r.replace(t, "")] = f[r]), delete f[r]);
                        r = "q" == _.Q("iframes/" + a + "/params/si") ? f : e;
                        t = _.$m();
                        for (var u in t)
                            !_.se(t, u) || _.se(f, u) || _.se(e, u) || (r[u] = t[u]);
                        u = [].concat(ln);
                        r = _.Q("iframes/" + a + "/methods");
                        _.zk(r) && (u = u.concat(r));
                        for (v in c)
                            _.se(c, v) &&
                            /^on/.test(v) &&
                            ("plus" != a || "onconnect" != v) &&
                            (u.push(v), delete f[v]);
                        delete f.callback;
                        e._methods = u.join(",");
                        var v = _.Ok(n, f, e);
                        u = g || {};
                        u.allowPost = 1;
                        u.attributes = kn;
                        u.dontclear = !k;
                        g = {};
                        g.userParams = c;
                        g.url = v;
                        g.type = a;
                        _.tn(a, b, c, v, u, g);
                        b = g.id;
                        c = _.re();
                        c.id = b;
                        c.userParams = g.userParams;
                        c.url = g.url;
                        c.type = g.type;
                        c.state = 1;
                        _.Hm[b] = c;
                        b = g;
                    } else b = null;
                    b && ((c = b.id) && d.push(c), Mn(a, b));
            }
        },
        Nn = function (a, b, c) {
            if (a && 1 === a.nodeType && b) {
                if (c) return 1;
                if (Dn[b]) {
                    if (Um[a.nodeName.toLowerCase()])
                        return (a = a.innerHTML) && a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") ?
                            0 :
                            1;
                } else {
                    if (Cn[b]) return 0;
                    if (An[b]) return 1;
                }
            }
            return null;
        };
    _.qe(_.ue, "platform", {}).go = function (a, b) {
        Ln(a, b);
    };
    var On = _.qe(_.Be, "perf", _.re()),
        In = _.qe(On, "g", _.re()),
        Pn = _.qe(On, "i", _.re()),
        Qn,
        Rn,
        Sn,
        Jn,
        Un,
        Vn,
        Wn;
    _.qe(On, "r", []);
    Qn = _.re();
    Rn = _.re();
    Sn = function (a, b, c, d) {
        Qn[c] = Qn[c] || !!d;
        _.qe(Rn, c, []);
        Rn[c].push([a, b]);
    };
    Jn = function (a, b, c) {
        var d = On.r;
        "function" === typeof d ? d(a, b, c) : d.push([a, b, c]);
    };
    Un = function (a, b, c, d) {
        if ("_p" == b) throw Error("G");
        _.Tn(a, b, c, d);
    };
    _.Tn = function (a, b, c, d) {
        Vn(b, c)[a] = d || new Date().getTime();
        Jn(a, b, c);
    };
    Vn = function (a, b) {
        a = _.qe(Pn, a, _.re());
        return _.qe(a, b, _.re());
    };
    Wn = function (a, b, c) {
        var d = null;
        b && c && (d = Vn(b, c)[a]);
        return d || In[a];
    };
    (function () {
        function a(g) {
            this.t = {};
            this.tick = function (k, l, m) {
                this.t[k] = [void 0 != m ? m : new Date().getTime(), l];
                if (void 0 == m)
                    try {
                        window.console.timeStamp("CSI/" + k);
                    } catch (n) {}
            };
            this.tick("start", null, g);
        }
        var b;
        if (window.performance)
            var c = (b = window.performance.timing) && b.responseStart;
        var d = 0 < c ? new a(c) : new a();
        window.__gapi_jstiming__ = {
            Timer: a,
            load: d
        };
        if (b) {
            var e = b.navigationStart;
            0 < e && c >= e && (window.__gapi_jstiming__.srt = c - e);
        }
        if (b) {
            var f = window.__gapi_jstiming__.load;
            0 < e &&
                c >= e &&
                (f.tick("_wtsrt", void 0, e),
                    f.tick("wtsrt_", "_wtsrt", c),
                    f.tick("tbsd_", "wtsrt_"));
        }
        try {
            (b = null),
            window.chrome &&
                window.chrome.csi &&
                ((b = Math.floor(window.chrome.csi().pageT)),
                    f &&
                    0 < e &&
                    (f.tick("_tbnd", void 0, window.chrome.csi().startE),
                        f.tick("tbnd_", "_tbnd", e))),
                null == b && window.gtbExternal && (b = window.gtbExternal.pageT()),
                null == b &&
                window.external &&
                ((b = window.external.pageT),
                    f &&
                    0 < e &&
                    (f.tick("_tbnd", void 0, window.external.startE),
                        f.tick("tbnd_", "_tbnd", e))),
                b && (window.__gapi_jstiming__.pt = b);
        } catch (g) {}
    })();
    if (window.__gapi_jstiming__) {
        window.__gapi_jstiming__.CG = {};
        window.__gapi_jstiming__.DZ = 1;
        var Xn = function (a, b, c) {
            var d = a.t[b],
                e = a.t.start;
            if (d && (e || c))
                return (d = a.t[b][0]), (e = void 0 != c ? c : e[0]), Math.round(d - e);
        };
        window.__gapi_jstiming__.getTick = Xn;
        window.__gapi_jstiming__.getLabels = function (a) {
            var b = [],
                c;
            for (c in a.t) b.push(c);
            return b;
        };
        var Yn = function (a, b, c) {
                var d = "";
                window.__gapi_jstiming__.srt &&
                    (d += "&srt=" + window.__gapi_jstiming__.srt);
                window.__gapi_jstiming__.pt &&
                    (d += "&tbsrt=" + window.__gapi_jstiming__.pt);
                try {
                    window.external && window.external.tran ?
                        (d += "&tran=" + window.external.tran) :
                        window.gtbExternal && window.gtbExternal.tran ?
                        (d += "&tran=" + window.gtbExternal.tran()) :
                        window.chrome &&
                        window.chrome.csi &&
                        (d += "&tran=" + window.chrome.csi().tran);
                } catch (p) {}
                var e = window.chrome;
                if (e && (e = e.loadTimes)) {
                    e().wasFetchedViaSpdy && (d += "&p=s");
                    if (e().wasNpnNegotiated) {
                        d += "&npn=1";
                        var f = e().npnNegotiatedProtocol;
                        f && (d += "&npnv=" + (encodeURIComponent || escape)(f));
                    }
                    e().wasAlternateProtocolAvailable && (d += "&apa=1");
                }
                var g = a.t,
                    k = g.start;
                e = [];
                f = [];
                for (var l in g)
                    if ("start" != l && 0 != l.indexOf("_")) {
                        var m = g[l][1];
                        m
                            ?
                            g[m] && f.push(l + "." + Xn(a, l, g[m][0])) :
                            k && e.push(l + "." + Xn(a, l));
                    }
                if (b)
                    for (var n in b) d += "&" + n + "=" + b[n];
                (b = c) ||
                (b =
                    "https:" == document.location.protocol ?
                    "https://csi.gstatic.com/csi" :
                    "http://csi.gstatic.com/csi");
                return [
                    b,
                    "?v=3",
                    "&s=" + (window.__gapi_jstiming__.sn || "") + "&action=",
                    a.name,
                    f.length ? "&it=" + f.join(",") : "",
                    d,
                    "&rt=",
                    e.join(",")
                ].join("");
            },
            Zn = function (a, b, c) {
                a = Yn(a, b, c);
                if (!a) return "";
                b = new Image();
                var d = window.__gapi_jstiming__.DZ++;
                window.__gapi_jstiming__.CG[d] = b;
                b.onload = b.onerror = function () {
                    window.__gapi_jstiming__ && delete window.__gapi_jstiming__.CG[d];
                };
                b.src = a;
                b = null;
                return a;
            };
        window.__gapi_jstiming__.report = function (a, b, c) {
            var d = document.visibilityState,
                e = "visibilitychange";
            d ||
                ((d = document.webkitVisibilityState), (e = "webkitvisibilitychange"));
            if ("prerender" == d) {
                var f = !1,
                    g = function () {
                        if (!f) {
                            b ? (b.prerender = "1") : (b = {
                                prerender: "1"
                            });
                            if (
                                "prerender" ==
                                (document.visibilityState || document.webkitVisibilityState)
                            )
                                var k = !1;
                            else Zn(a, b, c), (k = !0);
                            k && ((f = !0), document.removeEventListener(e, g, !1));
                        }
                    };
                document.addEventListener(e, g, !1);
                return "";
            }
            return Zn(a, b, c);
        };
    }
    var $n = {
            g: "gapi_global",
            m: "gapi_module",
            w: "gwidget"
        },
        ao = function (a, b) {
            this.type = a ? ("_p" == a ? "m" : "w") : "g";
            this.name = a;
            this.Fo = b;
        };
    ao.prototype.key = function () {
        switch (this.type) {
            case "g":
                return this.type;
            case "m":
                return this.type + "." + this.Fo;
            case "w":
                return this.type + "." + this.name + this.Fo;
        }
    };
    var bo = new ao(),
        co = navigator.userAgent.match(/iPhone|iPad|Android|PalmWebOS|Maemo|Bada/),
        eo = _.qe(On, "_c", _.re()),
        fo = Math.random() < (_.Q("csi/rate") || 0),
        ho = function (a, b, c) {
            for (
                var d = new ao(b, c),
                    e = _.qe(eo, d.key(), _.re()),
                    f = Rn[a] || [],
                    g = 0; g < f.length;
                ++g
            ) {
                var k = f[g],
                    l = k[0],
                    m = a,
                    n = b,
                    p = c;
                k = Wn(k[1], n, p);
                m = Wn(m, n, p);
                e[l] = k && m ? m - k : null;
            }
            Qn[a] && fo && (go(bo), go(d));
        },
        io = function (a, b) {
            b = b || [];
            for (var c = [], d = 0; d < b.length; d++) c.push(a + b[d]);
            return c;
        },
        go = function (a) {
            var b = _.me.__gapi_jstiming__;
            b.sn = $n[a.type];
            var c = new b.Timer(0);
            a: {
                switch (a.type) {
                    case "g":
                        var d = "global";
                        break a;
                    case "m":
                        d = a.Fo;
                        break a;
                    case "w":
                        d = a.name;
                        break a;
                }
                d = void 0;
            }
            c.name = d;
            d = !1;
            var e = a.key(),
                f = eo[e];
            c.tick("_start", null, 0);
            for (var g in f) c.tick(g, "_start", f[g]), (d = !0);
            eo[e] = _.re();
            d &&
                ((g = []),
                    g.push("l" + (_.Q("isPlusUser") ? "1" : "0")),
                    (d = "m" + (co ? "1" : "0")),
                    g.push(d),
                    "m" == a.type ?
                    g.push("p" + a.Fo) :
                    "w" == a.type &&
                    ((e = "n" + a.Fo), g.push(e), "0" == a.Fo && g.push(d + e)),
                    g.push("u" + (_.Q("isLoggedIn") ? "1" : "0")),
                    (a = io("", g)),
                    (a = io("abc_", a).join(",")),
                    b.report(c, {
                        e: a
                    }));
        };
    Sn("blt", "bs0", "bs1");
    Sn("psi", "ps0", "ps1");
    Sn("rpcqi", "rqe", "rqd");
    Sn("bsprt", "bsrt0", "bsrt1");
    Sn("bsrqt", "bsrt1", "bsrt2");
    Sn("bsrst", "bsrt2", "bsrt3");
    Sn("mli", "ml0", "ml1");
    Sn("mei", "me0", "me1", !0);
    Sn("wcdi", "wrs", "wcdi");
    Sn("wci", "wrs", "wdc");
    Sn("wdi", "wrs", "wrdi");
    Sn("wdt", "bs0", "wrdt");
    Sn("wri", "wrs", "wrri", !0);
    Sn("wrt", "bs0", "wrrt");
    Sn("wji", "wje0", "wje1", !0);
    Sn("wjli", "wjl0", "wjl1");
    Sn("whi", "wh0", "wh1", !0);
    Sn("wai", "waaf0", "waaf1", !0);
    Sn("wadi", "wrs", "waaf1", !0);
    Sn("wadt", "bs0", "waaf1", !0);
    Sn("wprt", "wrt0", "wrt1");
    Sn("wrqt", "wrt1", "wrt2");
    Sn("wrst", "wrt2", "wrt3", !0);
    Sn("fbprt", "fsrt0", "fsrt1");
    Sn("fbrqt", "fsrt1", "fsrt2");
    Sn("fbrst", "fsrt2", "fsrt3", !0);
    Sn("fdns", "fdns0", "fdns1");
    Sn("fcon", "fcon0", "fcon1");
    Sn("freq", "freq0", "freq1");
    Sn("frsp", "frsp0", "frsp1");
    Sn("fttfb", "fttfb0", "fttfb1");
    Sn("ftot", "ftot0", "ftot1", !0);
    var jo = On.r;
    if ("function" !== typeof jo) {
        for (var ko;
            (ko = jo.shift());) ho.apply(null, ko);
        On.r = ho;
    }
    var lo = ["div"],
        mo = "onload",
        no = !0,
        oo = !0,
        po = function (a) {
            return a;
        },
        qo = null,
        ro = function (a) {
            var b = _.Q(a);
            return "undefined" !== typeof b ? b : _.Q("gwidget/" + a);
        },
        No,
        Oo,
        Po,
        Qo,
        Go,
        Io,
        Ro,
        Ho,
        So,
        To,
        Uo,
        Vo;
    qo = _.Q();
    _.Q("gwidget");
    var so = ro("parsetags");
    mo = "explicit" === so || "onload" === so ? so : mo;
    var to = ro("google_analytics");
    "undefined" !== typeof to && (no = !!to);
    var uo = ro("data_layer");
    "undefined" !== typeof uo && (oo = !!uo);
    var vo = function () {
            var a = this && this.getId();
            a && (_.Be.drw = a);
        },
        wo = function () {
            _.Be.drw = null;
        },
        xo = function (a) {
            return function (b) {
                var c = a;
                "number" === typeof b
                    ?
                    (c = b) :
                    "string" === typeof b &&
                    ((c = b.indexOf("px")),
                        -1 != c && (b = b.substring(0, c)),
                        (c = parseInt(b, 10)));
                return c;
            };
        },
        yo = function (a) {
            "string" === typeof a && (a = window[a]);
            return "function" === typeof a ? a : null;
        },
        zo = function () {
            return ro("lang") || "en-US";
        },
        Ao = function (a) {
            if (!_.R.rb("attach")) {
                var b = {},
                    c = _.R.rb("inline"),
                    d;
                for (d in c) c.hasOwnProperty(d) && (b[d] = c[d]);
                b.open = function (e) {
                    var f = e.Ob().renderData.id;
                    f = document.getElementById(f);
                    if (!f) throw Error("H");
                    return c.attach(e, f);
                };
                _.R.Xb("attach", b);
            }
            a.style = "attach";
        },
        Bo = (function () {
            var a = {};
            a.width = [xo(450)];
            a.height = [xo(24)];
            a.onready = [yo];
            a.lang = [zo, "hl"];
            a.iloader = [
                function () {
                    return _.Be.ILI;
                },
                "iloader"
            ];
            return a;
        })(),
        Eo = function (a) {
            var b = {};
            b.Ke = a[0];
            b.Mo = -1;
            b.Mba = "___" + b.Ke + "_";
            b.G1 = "g:" + b.Ke;
            b.Aaa = "g-" + b.Ke;
            b.IL = [];
            b.config = {};
            b.xt = [];
            b.IN = {};
            b.$w = {};
            var c = function (e) {
                    for (var f in e)
                        if (_.se(e, f)) {
                            b.config[f] = [yo];
                            b.xt.push(f);
                            var g = e[f],
                                k = null,
                                l = null,
                                m = null;
                            "function" === typeof g
                                ?
                                (k = g) :
                                g &&
                                "object" === typeof g &&
                                ((k = g.naa), (l = g.bx), (m = g.HE));
                            m && (b.xt.push(m), (b.config[m] = [yo]), (b.IN[f] = m));
                            k && (b.config[f] = [k]);
                            l && (b.$w[f] = l);
                        }
                },
                d = function (e) {
                    for (var f = {}, g = 0; g < e.length; ++g) f[e[g].toLowerCase()] = 1;
                    f[b.G1] = 1;
                    b.OX = f;
                };
            a[1] && (b.parameters = a[1]);
            (function (e) {
                b.config = e;
                for (var f in Bo)
                    Bo.hasOwnProperty(f) &&
                    !b.config.hasOwnProperty(f) &&
                    (b.config[f] = Bo[f]);
            })(a[2] || {});
            a[3] && c(a[3]);
            a[4] && d(a[4]);
            a[5] && (b.xk = a[5]);
            b.Dba = !0 === a[6];
            b.eZ = a[7];
            b.n1 = a[8];
            b.OX || d(lo);
            b.qC = function (e) {
                b.Mo++;
                Un("wrs", b.Ke, String(b.Mo));
                var f = [],
                    g = e.element,
                    k = e.config,
                    l = ":" + b.Ke;
                ":plus" == l && e.vk && e.vk.action && (l += "_" + e.vk.action);
                var m = Co(b, k),
                    n = {};
                _.te(_.$m(), n);
                for (var p in e.vk) null != e.vk[p] && (n[p] = e.vk[p]);
                p = {
                    container: g.id,
                    renderData: e.yZ,
                    style: "inline",
                    height: k.height,
                    width: k.width
                };
                Ao(p);
                b.xk && ((f[2] = p), (f[3] = n), (f[4] = m), b.xk("i", f));
                l = _.R.open(l, p, n, m);
                Do(b, l, k, g, e.oS);
                f[5] = l;
                b.xk && b.xk("e", f);
            };
            return b;
        },
        Co = function (a, b) {
            for (var c = {}, d = a.xt.length - 1; 0 <= d; --d) {
                var e = a.xt[d],
                    f = b[a.IN[e] || e] || b[e],
                    g = b[e];
                g &&
                    f !== g &&
                    (f = (function (l, m) {
                        return function (n) {
                            m.apply(this, arguments);
                            l.apply(this, arguments);
                        };
                    })(f, g));
                f && (c[e] = f);
            }
            for (var k in a.$w)
                a.$w.hasOwnProperty(k) && (c[k] = Fo(c[k] || function () {}, a.$w[k]));
            c.drefresh = vo;
            c.erefresh = wo;
            return c;
        },
        Fo = function (a, b) {
            return function (c) {
                var d = b(c);
                if (d) {
                    var e = c.href || null;
                    if (no) {
                        if (window._gat)
                            try {
                                var f = window._gat._getTrackerByName("~0");
                                f && "UA-XXXXX-X" != f._getAccount() ?
                                    f._trackSocial("Google", d, e) :
                                    window._gaq &&
                                    window._gaq.push(["_trackSocial", "Google", d, e]);
                            } catch (k) {}
                        if (window.ga && window.ga.getAll)
                            try {
                                var g = window.ga.getAll();
                                for (f = 0; f < g.length; f++)
                                    g[f].send("social", "Google", d, e);
                            } catch (k) {}
                    }
                    if (oo && window.dataLayer)
                        try {
                            window.dataLayer.push({
                                event: "social",
                                socialNetwork: "Google",
                                socialAction: d,
                                socialTarget: e
                            });
                        } catch (k) {}
                }
                a.call(this, c);
            };
        },
        Do = function (a, b, c, d, e) {
            Go(b, c);
            Ho(b, d);
            Io(a, b, e);
            Jo(a.Ke, a.Mo.toString(), b);
            new Ko().Va.Tk(a, b, c, d, e);
        },
        Ko = function () {
            if (!this.Va) {
                for (var a = this.constructor; a && !a.Ym;) a = a.H && a.H.constructor;
                a.Ym.rH || (a.Ym.rH = xn(a));
                this.Va = new a.Ym.rH(this);
                this.Vz || (this.Vz = zn);
            }
        },
        Lo = function () {},
        Mo = Ko;
    Lo.H || _.F(Lo, un);
    Mo.Ym = Lo;
    Lo.prototype.Tk = (function (a) {
        a = a ? a : function () {};
        a.JK = !0;
        return a;
    })();
    No = function (a) {
        return _.dm && "undefined" != typeof _.dm && a instanceof _.dm;
    };
    Oo = function (a) {
        return No(a) ? "_renderstart" : "renderstart";
    };
    Po = function (a) {
        return No(a) ? "_ready" : "ready";
    };
    Qo = function () {
        return !0;
    };
    Go = function (a, b) {
        if (b.onready) {
            var c = !1,
                d = function () {
                    c || ((c = !0), b.onready.call(null));
                };
            a.register(Po(a), d, Qo);
            a.register(Oo(a), d, Qo);
        }
    };
    Io = function (a, b, c) {
        var d = a.Ke,
            e = String(a.Mo),
            f = !1,
            g = function () {
                f || ((f = !0), c && Un("wrdt", d, e), Un("wrdi", d, e));
            };
        b.register(Oo(b), g, Qo);
        var k = !1;
        a = function () {
            k || ((k = !0), g(), c && Un("wrrt", d, e), Un("wrri", d, e));
        };
        b.register(Po(b), a, Qo);
        No(b) ?
            b.register("widget-interactive-" + b.id, a, Qo) :
            _.Mf.register("widget-interactive-" + b.id, a);
        _.Mf.register("widget-csi-tick-" + b.id, function (l, m, n) {
            "wdc" === l
                ?
                Un("wdc", d, e, n) :
                "wje0" === l ?
                Un("wje0", d, e, n) :
                "wje1" === l ?
                Un("wje1", d, e, n) :
                "wh0" == l ?
                _.Tn("wh0", d, e, n) :
                "wh1" == l ?
                _.Tn("wh1", d, e, n) :
                "wcdi" == l && _.Tn("wcdi", d, e, n);
        });
    };
    Ro = function (a) {
        return "number" == typeof a ? a + "px" : "100%" == a ? a : null;
    };
    Ho = function (a, b) {
        var c = function (d) {
            d = d || a;
            var e = Ro(d.width);
            e && b.style.width != e && (b.style.width = e);
            (d = Ro(d.height)) && b.style.height != d && (b.style.height = d);
        };
        No(a) ?
            a.FM("onRestyle", c) :
            (a.register("ready", c, Qo),
                a.register("renderstart", c, Qo),
                a.register("resize", c, Qo));
    };
    So = function (a, b) {
        for (var c in Bo)
            if (Bo.hasOwnProperty(c)) {
                var d = Bo[c][1];
                d && !b.hasOwnProperty(d) && (b[d] = a[d]);
            }
        return b;
    };
    To = function (a, b) {
        var c = {},
            d;
        for (d in a)
            a.hasOwnProperty(d) &&
            (c[a[d][1] || d] = ((a[d] && a[d][0]) || po)(
                b[d.toLowerCase()],
                b,
                qo
            ));
        return c;
    };
    Uo = function (a) {
        if ((a = a.eZ))
            for (var b = 0; b < a.length; b++) new Image().src = a[b];
    };
    Vo = function (a, b) {
        var c = b.userParams,
            d = b.siteElement;
        d || (d = (d = b.iframeNode) && d.parentNode);
        if (d && 1 === d.nodeType) {
            var e = To(a.config, c);
            a.IL.push({
                element: d,
                config: e,
                vk: So(e, To(a.parameters, c)),
                hba: 3,
                oS: !!c["data-onload"],
                yZ: b
            });
        }
        b = a.IL;
        for (a = a.qC; 0 < b.length;) a(b.shift());
    };
    _.Wo = function (a) {
        var b = Eo(a);
        Uo(b);
        _.Sk(b.Ke, function (d) {
            Vo(b, d);
        });
        An[b.Ke] = !0;
        var c = {
            va: function (d, e, f) {
                var g = e || {};
                g.type = b.Ke;
                e = g.type;
                delete g.type;
                var k = Hn(d);
                if (k) {
                    d = {};
                    for (var l in g) _.se(g, l) && (d[l.toLowerCase()] = g[l]);
                    d.rd = 1;
                    (l = !!d.ri) && delete d.ri;
                    Kn(e, k, d, [], 0, l, f);
                } else
                    _.Se(
                        "string" === "gapi." + e + ".render: missing element " + typeof d ?
                        d :
                        ""
                    );
            },
            go: function (d) {
                Ln(d, b.Ke);
            },
            iba: function () {
                var d = _.qe(_.Be, "WI", _.re()),
                    e;
                for (e in d) delete d[e];
            }
        };
        a = function () {
            "onload" === mo && c.go();
        };
        Vm(b.Ke) || Tm(a, a);
        _.z("gapi." + b.Ke + ".go", c.go);
        _.z("gapi." + b.Ke + ".render", c.va);
        return c;
    };
    var Xo = Vo,
        Yo = function (a, b) {
            a.Mo++;
            Un("wrs", a.Ke, String(a.Mo));
            var c = b.userParams,
                d = To(a.config, c),
                e = [],
                f = b.iframeNode,
                g = b.siteElement,
                k = Co(a, d),
                l = To(a.parameters, c);
            _.te(_.$m(), l);
            l = So(d, l);
            c = !!c["data-onload"];
            var m = _.Gl,
                n = _.re();
            n.renderData = b;
            n.height = d.height;
            n.width = d.width;
            n.id = b.id;
            n.url = b.url;
            n.iframeEl = f;
            n.where = n.container = g;
            n.apis = ["_open"];
            n.messageHandlers = k;
            n.messageHandlersFilter = _.Ul;
            _.Om(n);
            f = l;
            a.xk && ((e[2] = n), (e[3] = f), (e[4] = k), a.xk("i", e));
            k = m.Lj(n);
            k.id = b.id;
            k.RD(k, n);
            Do(a, k, d, g, c);
            e[5] = k;
            a.xk && a.xk("e", e);
        };
    Vo = function (a, b) {
        var c = b.url;
        a.n1 || _.Rm(c) ?
            _.am ?
            Yo(a, b) :
            (0, _.qg)("gapi.iframes.impl", function () {
                Yo(a, b);
            }) :
            _.R.open ?
            Xo(a, b) :
            (0, _.qg)("iframes", function () {
                Xo(a, b);
            });
    };
    var Zo = function () {
            var a = window;
            return !!a.performance && !!a.performance.getEntries;
        },
        Jo = function (a, b, c) {
            if (Zo()) {
                var d = (function () {
                        var f = !1;
                        return function () {
                            if (f) return !0;
                            f = !0;
                            return !1;
                        };
                    })(),
                    e = function () {
                        d() ||
                            window.setTimeout(function () {
                                var f = c.Fa().src;
                                var g = f.indexOf("#"); -
                                1 != g && (f = f.substring(0, g));
                                f = window.performance.getEntriesByName(f);
                                1 > f.length ?
                                    (f = null) :
                                    ((f = f[0]), (f = 0 == f.responseStart ? null : f));
                                if (f) {
                                    g = Math.round(f.requestStart);
                                    var k = Math.round(f.responseStart),
                                        l = Math.round(f.responseEnd);
                                    Un("wrt0", a, b, Math.round(f.startTime));
                                    Un("wrt1", a, b, g);
                                    Un("wrt2", a, b, k);
                                    Un("wrt3", a, b, l);
                                }
                            }, 1e3);
                    };
                c.register(Oo(c), e, Qo);
                c.register(Po(c), e, Qo);
            }
        };
    _.z("gapi.widget.make", _.Wo);
    var $o, ap, bp, dp;
    $o = ["left", "right"];
    ap = "inline bubble none only pp vertical-bubble".split(" ");
    bp = function (a, b) {
        if ("string" == typeof a) {
            a = a.toLowerCase();
            var c;
            for (c = 0; c < b.length; c++)
                if (b[c] == a) return a;
        }
    };
    _.cp = function (a) {
        return bp(a, ap);
    };
    dp = function (a) {
        return bp(a, $o);
    };
    _.ep = function (a) {
        a.source = [null, "source"];
        a.expandTo = [null, "expandTo"];
        a.align = [dp];
        a.annotation = [_.cp];
        a.origin = [_.cn];
    };

    _.R.DD("bubble", function (a) {
        (0, _.qg)("iframes-styles-bubble", a);
    });
    _.R.DD("slide-menu", function (a) {
        (0, _.qg)("iframes-styles-slide-menu", a);
    });
    _.z("gapi.plusone.render", _.vZ);
    _.z("gapi.plusone.go", _.wZ);
    var xZ = {
            tall: {
                true: {
                    width: 50,
                    height: 60
                },
                false: {
                    width: 50,
                    height: 24
                }
            },
            small: {
                false: {
                    width: 24,
                    height: 15
                },
                true: {
                    width: 70,
                    height: 15
                }
            },
            medium: {
                false: {
                    width: 32,
                    height: 20
                },
                true: {
                    width: 90,
                    height: 20
                }
            },
            standard: {
                false: {
                    width: 38,
                    height: 24
                },
                true: {
                    width: 106,
                    height: 24
                }
            }
        },
        yZ = {
            width: 180,
            height: 35
        },
        zZ = function (a) {
            return "string" == typeof a ?
                "" != a && "0" != a && "false" != a.toLowerCase() :
                !!a;
        },
        AZ = function (a) {
            var b = parseInt(a, 10);
            if (b == a) return String(b);
        },
        BZ = function (a) {
            if (zZ(a)) return "true";
        },
        CZ = function (a) {
            return "string" == typeof a && xZ[a.toLowerCase()] ?
                a.toLowerCase() :
                "standard";
        },
        DZ = function (a, b) {
            return "tall" == CZ(b) ? "true" : null == a || zZ(a) ? "true" : "false";
        },
        EZ = function (a, b) {
            return xZ[CZ(a)][DZ(b, a)];
        },
        FZ = function (a, b, c) {
            a = _.cp(a);
            b = CZ(b);
            if ("" != a) {
                if ("inline" == a || "only" == a)
                    return (
                        (a = 450),
                        c.width && (a = 120 < c.width ? c.width : 120), {
                            width: a,
                            height: xZ[b]["false"].height
                        }
                    );
                if ("bubble" != a) {
                    if ("none" == a) return xZ[b]["false"];
                    if ("pp" == a) return yZ;
                }
            }
            return xZ[b]["true"];
        },
        GZ = {
            href: [_.dn, "url"],
            width: [AZ],
            size: [CZ],
            resize: [BZ],
            autosize: [BZ],
            count: [
                function (a, b) {
                    return DZ(b.count, b.size);
                }
            ],
            db: [_.en],
            ecp: [_.fn],
            textcolor: [
                function (a) {
                    if ("string" == typeof a && a.match(/^[0-9A-F]{6}$/i)) return a;
                }
            ],
            drm: [BZ],
            recommendations: [],
            fu: [],
            ad: [BZ],
            cr: [AZ],
            ag: [AZ],
            "fr-ai": [],
            "fr-sigh": []
        };
    (function () {
        var a = {
                0: "plusone"
            },
            b = _.Q("iframes/plusone/preloadUrl");
        b && (a[7] = b);
        _.ep(GZ);
        a[1] = GZ;
        a[2] = {
            width: [
                function (c, d) {
                    return d.annotation ?
                        FZ(d.annotation, d.size, d).width :
                        EZ(d.size, d.count).width;
                }
            ],
            height: [
                function (c, d) {
                    return d.annotation ?
                        FZ(d.annotation, d.size, d).height :
                        EZ(d.size, d.count).height;
                }
            ]
        };
        a[3] = {
            onPlusOne: {
                bx: function (c) {
                    return "on" == c.state ? "+1" : null;
                },
                HE: "callback"
            },
            onstartinteraction: !0,
            onendinteraction: !0,
            onpopup: !0
        };
        a[4] = ["div", "button"];
        a = _.Wo(a);
        _.wZ = a.go;
        _.vZ = a.va;
    })();
});
// Google Inc.
