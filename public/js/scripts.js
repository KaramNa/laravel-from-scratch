(() => { var Ie = !1,
        Le = !1,
        Y = [];

    function yt(e) { Ir(e) }

    function Ir(e) { Y.includes(e) || Y.push(e), Lr() }

    function Lr() {!Le && !Ie && (Ie = !0, queueMicrotask($r)) }

    function $r() { Ie = !1, Le = !0; for (let e = 0; e < Y.length; e++) Y[e]();
        Y.length = 0, Le = !1 } var v, M, z, $e, Fe = !0;

    function xt(e) { Fe = !1, e(), Fe = !0 }

    function bt(e) { v = e.reactive, z = e.release, M = t => e.effect(t, { scheduler: r => { Fe ? yt(r) : r() } }), $e = e.raw }

    function je(e) { M = e }

    function vt(e) { let t = () => {}; return [n => { let i = M(n);
            e._x_effects || (e._x_effects = new Set, e._x_runEffects = () => { e._x_effects.forEach(o => o()) }), e._x_effects.add(i), t = () => { i !== void 0 && (e._x_effects.delete(i), z(i)) } }, () => { t() }] } var wt = [],
        Et = [],
        St = [];

    function At(e) { St.push(e) }

    function Ot(e) { Et.push(e) }

    function Tt(e) { wt.push(e) }

    function Rt(e, t, r) { e._x_attributeCleanups || (e._x_attributeCleanups = {}), e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []), e._x_attributeCleanups[t].push(r) }

    function Ke(e, t) {!e._x_attributeCleanups || Object.entries(e._x_attributeCleanups).forEach(([r, n]) => {
            (t === void 0 || t.includes(r)) && n.forEach(i => i()), delete e._x_attributeCleanups[r] }) } var ze = new MutationObserver(Ct),
        Ve = !1;

    function He() { ze.observe(document, { subtree: !0, childList: !0, attributes: !0, attributeOldValue: !0 }), Ve = !0 }

    function Fr() { ze.disconnect(), Ve = !1 } var J = [],
        Be = !1;

    function Kr() { J = J.concat(ze.takeRecords()), J.length && !Be && (Be = !0, queueMicrotask(() => { jr(), Be = !1 })) }

    function jr() { Ct(J), J.length = 0 }

    function m(e) { if (!Ve) return e();
        Kr(), Fr(); let t = e(); return He(), t }

    function Ct(e) { let t = [],
            r = [],
            n = new Map,
            i = new Map; for (let o = 0; o < e.length; o++)
            if (!e[o].target._x_ignoreMutationObserver && (e[o].type === "childList" && (e[o].addedNodes.forEach(s => s.nodeType === 1 && t.push(s)), e[o].removedNodes.forEach(s => s.nodeType === 1 && r.push(s))), e[o].type === "attributes")) { let s = e[o].target,
                    a = e[o].attributeName,
                    c = e[o].oldValue,
                    l = () => { n.has(s) || n.set(s, []), n.get(s).push({ name: a, value: s.getAttribute(a) }) },
                    u = () => { i.has(s) || i.set(s, []), i.get(s).push(a) };
                s.hasAttribute(a) && c === null ? l() : s.hasAttribute(a) ? (u(), l()) : u() }
        i.forEach((o, s) => { Ke(s, o) }), n.forEach((o, s) => { wt.forEach(a => a(s, o)) }); for (let o of t) r.includes(o) || St.forEach(s => s(o)); for (let o of r) t.includes(o) || Et.forEach(s => s(o));
        t = null, r = null, n = null, i = null }

    function V(e, t, r) { return e._x_dataStack = [t, ...Z(r || e)], () => { e._x_dataStack = e._x_dataStack.filter(n => n !== t) } }

    function qe(e, t) { let r = e._x_dataStack[0];
        Object.entries(t).forEach(([n, i]) => { r[n] = i }) }

    function Z(e) { return e._x_dataStack ? e._x_dataStack : typeof ShadowRoot == "function" && e instanceof ShadowRoot ? Z(e.host) : e.parentNode ? Z(e.parentNode) : [] }

    function Ue(e) { return new Proxy({}, { ownKeys: () => Array.from(new Set(e.flatMap(t => Object.keys(t)))), has: (t, r) => e.some(n => n.hasOwnProperty(r)), get: (t, r) => (e.find(n => n.hasOwnProperty(r)) || {})[r], set: (t, r, n) => { let i = e.find(o => o.hasOwnProperty(r)); return i ? i[r] = n : e[e.length - 1][r] = n, !0 } }) }

    function Mt(e) { let t = n => typeof n == "object" && !Array.isArray(n) && n !== null,
            r = (n, i = "") => { Object.entries(n).forEach(([o, s]) => { let a = i === "" ? o : `${i}.${o}`;
                    typeof s == "object" && s !== null && s._x_interceptor ? n[o] = s.initialize(e, a, o) : t(s) && s !== n && !(s instanceof Element) && r(s, a) }) }; return r(e) }

    function de(e, t = () => {}) { let r = { initialValue: void 0, _x_interceptor: !0, initialize(n, i, o) { return e(this.initialValue, () => zr(n, i), s => We(n, i, s), i, o) } }; return t(r), n => { if (typeof n == "object" && n !== null && n._x_interceptor) { let i = r.initialize.bind(r);
                r.initialize = (o, s, a) => { let c = n.initialize(o, s, a); return r.initialValue = c, i(o, s, a) } } else r.initialValue = n; return r } }

    function zr(e, t) { return t.split(".").reduce((r, n) => r[n], e) }

    function We(e, t, r) { if (typeof t == "string" && (t = t.split(".")), t.length === 1) e[t[0]] = r;
        else { if (t.length === 0) throw error; return e[t[0]] || (e[t[0]] = {}), We(e[t[0]], t.slice(1), r) } } var Nt = {};

    function x(e, t) { Nt[e] = t }

    function Q(e, t) { return Object.entries(Nt).forEach(([r, n]) => { Object.defineProperty(e, `$${r}`, {get() { return n(t, { Alpine: S, interceptor: de }) }, enumerable: !1 }) }), e }

    function b(e, t, r = {}) { let n; return h(e, t)(i => n = i, r), n }

    function h(...e) { return kt(...e) } var kt = Ge;

    function Dt(e) { kt = e }

    function Ge(e, t) { let r = {};
        Q(r, e); let n = [r, ...Z(e)]; if (typeof t == "function") return Vr(n, t); let i = Hr(n, t); return Br.bind(null, e, t, i) }

    function Vr(e, t) { return (r = () => {}, { scope: n = {}, params: i = [] } = {}) => { let o = t.apply(Ue([n, ...e]), i);
            pe(r, o) } } var Ye = {};

    function qr(e) { if (Ye[e]) return Ye[e]; let t = Object.getPrototypeOf(async function() {}).constructor,
            r = /^[\n\s]*if.*\(.*\)/.test(e) || /^(let|const)/.test(e) ? `(() => { ${e} })()` : e,
            n = new t(["__self", "scope"], `with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`); return Ye[e] = n, n }

    function Hr(e, t) { let r = qr(t); return (n = () => {}, { scope: i = {}, params: o = [] } = {}) => { r.result = void 0, r.finished = !1; let s = Ue([i, ...e]),
                a = r(r, s);
            r.finished ? pe(n, r.result, s, o) : a.then(c => { pe(n, c, s, o) }) } }

    function pe(e, t, r, n) { if (typeof t == "function") { let i = t.apply(r, n);
            i instanceof Promise ? i.then(o => pe(e, o, r, n)) : e(i) } else e(t) }

    function Br(e, t, r, ...n) { try { return r(...n) } catch (i) { throw console.warn(`Alpine Expression Error: ${i.message}

Expression: "${t}"

`, e), i } } var Je = "x-";

    function A(e = "") { return Je + e }

    function Pt(e) { Je = e } var It = {};

    function p(e, t) { It[e] = t }

    function X(e, t, r) { let n = {}; return Array.from(t).map(Lt((o, s) => n[o] = s)).filter($t).map(Wr(n, r)).sort(Gr).map(o => Ur(e, o)) }

    function Ft(e) { return Array.from(e).map(Lt()).filter(t => !$t(t)) } var Ze = !1,
        ee = new Map,
        jt = Symbol();

    function Kt(e) { Ze = !0; let t = Symbol();
        jt = t, ee.set(t, []); let r = () => { for (; ee.get(t).length;) ee.get(t).shift()();
                ee.delete(t) },
            n = () => { Ze = !1, r() };
        e(r), n() }

    function Ur(e, t) { let r = () => {},
            n = It[t.type] || r,
            i = [],
            o = d => i.push(d),
            [s, a] = vt(e);
        i.push(a); let c = { Alpine: S, effect: s, cleanup: o, evaluateLater: h.bind(h, e), evaluate: b.bind(b, e) },
            l = () => i.forEach(d => d());
        Rt(e, t.original, l); let u = () => { e._x_ignore || e._x_ignoreSelf || (n.inline && n.inline(e, t, c), n = n.bind(n, e, t, c), Ze ? ee.get(jt).push(n) : n()) }; return u.runCleanups = l, u } var me = (e, t) => ({ name: r, value: n }) => (r.startsWith(e) && (r = r.replace(e, t)), { name: r, value: n }),
        he = e => e;

    function Lt(e = () => {}) { return ({ name: t, value: r }) => { let { name: n, value: i } = zt.reduce((o, s) => s(o), { name: t, value: r }); return n !== t && e(n, t), { name: n, value: i } } } var zt = [];

    function H(e) { zt.push(e) }

    function $t({ name: e }) { return Vt().test(e) } var Vt = () => new RegExp(`^${Je}([^:^.]+)\\b`);

    function Wr(e, t) { return ({ name: r, value: n }) => { let i = r.match(Vt()),
                o = r.match(/:([a-zA-Z0-9\-:]+)/),
                s = r.match(/\.[^.\]]+(?=[^\]]*$)/g) || [],
                a = t || e[r] || r; return { type: i ? i[1] : null, value: o ? o[1] : null, modifiers: s.map(c => c.replace(".", "")), expression: n, original: a } } } var Qe = "DEFAULT",
        ge = ["ignore", "ref", "data", "bind", "init", "for", "model", "transition", "show", "if", Qe, "element"];

    function Gr(e, t) { let r = ge.indexOf(e.type) === -1 ? Qe : e.type,
            n = ge.indexOf(t.type) === -1 ? Qe : t.type; return ge.indexOf(r) - ge.indexOf(n) }

    function $(e, t, r = {}) { e.dispatchEvent(new CustomEvent(t, { detail: r, bubbles: !0, composed: !0, cancelable: !0 })) } var Xe = [],
        et = !1;

    function B(e) { Xe.push(e), queueMicrotask(() => { et || setTimeout(() => { _e() }) }) }

    function _e() { for (et = !1; Xe.length;) Xe.shift()() }

    function Ht() { et = !0 }

    function k(e, t) { if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) { Array.from(e.children).forEach(i => k(i, t)); return } let r = !1; if (t(e, () => r = !0), r) return; let n = e.firstElementChild; for (; n;) k(n, t, !1), n = n.nextElementSibling }

    function ye(e, ...t) { console.warn(`Alpine Warning: ${e}`, ...t) }

    function Bt() { document.body || ye("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"), $(document, "alpine:init"), $(document, "alpine:initializing"), He(), At(t => T(t, k)), Ot(t => B(() => Jr(t))), Tt((t, r) => { X(t, r).forEach(n => n()) }); let e = t => !O(t.parentElement);
        Array.from(document.querySelectorAll(Yr())).filter(e).forEach(t => { T(t) }), $(document, "alpine:initialized") } var tt = [],
        qt = [];

    function Ut() { return tt.map(e => e()) }

    function Yr() { return tt.concat(qt).map(e => e()) }

    function xe(e) { tt.push(e) }

    function Wt(e) { qt.push(e) }

    function O(e) { if (!!e) { if (Ut().some(t => e.matches(t))) return e; if (!!e.parentElement) return O(e.parentElement) } }

    function Gt(e) { return Ut().some(t => e.matches(t)) }

    function T(e, t = k) { Kt(() => { t(e, (r, n) => { X(r, r.attributes).forEach(i => i()), r._x_ignore && n() }) }) }

    function Jr(e) { k(e, t => Ke(t)) }

    function be(e, t) { var r; return function() { var n = this,
                i = arguments,
                o = function() { r = null, e.apply(n, i) };
            clearTimeout(r), r = setTimeout(o, t) } }

    function ve(e, t) { let r; return function() { let n = this,
                i = arguments;
            r || (e.apply(n, i), r = !0, setTimeout(() => r = !1, t)) } }

    function Yt(e) { e(S) } var q = {},
        Jt = !1;

    function Zt(e, t) { if (Jt || (q = v(q), Jt = !0), t === void 0) return q[e];
        q[e] = t, typeof t == "object" && t !== null && t.hasOwnProperty("init") && typeof t.init == "function" && q[e].init() }

    function Qt() { return q } var rt = !1;

    function U(e) { return (...t) => rt || e(...t) }

    function Xt(e, t) { t._x_dataStack = e._x_dataStack, rt = !0, Qr(() => { Zr(t) }), rt = !1 }

    function Zr(e) { let t = !1;
        T(e, (n, i) => { k(n, (o, s) => { if (t && Gt(o)) return s();
                t = !0, i(o, s) }) }) }

    function Qr(e) { let t = M;
        je((r, n) => { let i = t(r); return z(i), () => {} }), e(), je(t) } var er = {};

    function tr(e, t) { er[e] = t }

    function rr(e, t) { return Object.entries(er).forEach(([r, n]) => { Object.defineProperty(e, r, {get() { return (...i) => n.bind(t)(...i) }, enumerable: !1 }) }), e } var Xr = {get reactive() { return v }, get release() { return z }, get effect() { return M }, get raw() { return $e }, version: "3.3.3", disableEffectScheduling: xt, setReactivityEngine: bt, addRootSelector: xe, mapAttributes: H, evaluateLater: h, setEvaluator: Dt, closestRoot: O, interceptor: de, mutateDom: m, directive: p, throttle: ve, debounce: be, evaluate: b, initTree: T, nextTick: B, prefix: Pt, plugin: Yt, magic: x, store: Zt, start: Bt, clone: Xt, data: tr },
        S = Xr;

    function nt(e, t) { let r = Object.create(null),
            n = e.split(","); for (let i = 0; i < n.length; i++) r[n[i]] = !0; return t ? i => !!r[i.toLowerCase()] : i => !!r[i] } var so = {
            [1]: "TEXT", [2]: "CLASS", [4]: "STYLE", [8]: "PROPS", [16]: "FULL_PROPS", [32]: "HYDRATE_EVENTS", [64]: "STABLE_FRAGMENT", [128]: "KEYED_FRAGMENT", [256]: "UNKEYED_FRAGMENT", [512]: "NEED_PATCH", [1024]: "DYNAMIC_SLOTS", [2048]: "DEV_ROOT_FRAGMENT", [-1]: "HOISTED", [-2]: "BAIL" },
        ao = {
            [1]: "STABLE", [2]: "DYNAMIC", [3]: "FORWARDED" }; var en = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"; var co = nt(en + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"); var nr = Object.freeze({}),
        lo = Object.freeze([]); var it = Object.assign; var tn = Object.prototype.hasOwnProperty,
        te = (e, t) => tn.call(e, t),
        D = Array.isArray,
        W = e => ir(e) === "[object Map]"; var rn = e => typeof e == "string",
        we = e => typeof e == "symbol",
        re = e => e !== null && typeof e == "object"; var nn = Object.prototype.toString,
        ir = e => nn.call(e),
        ot = e => ir(e).slice(8, -1); var Ee = e => rn(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e; var Se = e => { let t = Object.create(null); return r => t[r] || (t[r] = e(r)) },
        on = /-(\w)/g,
        uo = Se(e => e.replace(on, (t, r) => r ? r.toUpperCase() : "")),
        sn = /\B([A-Z])/g,
        fo = Se(e => e.replace(sn, "-$1").toLowerCase()),
        st = Se(e => e.charAt(0).toUpperCase() + e.slice(1)),
        po = Se(e => e ? `on${st(e)}` : ""),
        at = (e, t) => e !== t && (e === e || t === t); var ct = new WeakMap,
        ne = [],
        R, F = Symbol("iterate"),
        lt = Symbol("Map key iterate");

    function an(e) { return e && e._isEffect === !0 }

    function or(e, t = nr) { an(e) && (e = e.raw); let r = cn(e, t); return t.lazy || r(), r }

    function ar(e) { e.active && (sr(e), e.options.onStop && e.options.onStop(), e.active = !1) } var ln = 0;

    function cn(e, t) { let r = function() { if (!r.active) return e(); if (!ne.includes(r)) { sr(r); try { return un(), ne.push(r), R = r, e() } finally { ne.pop(), cr(), R = ne[ne.length - 1] } } }; return r.id = ln++, r.allowRecurse = !!t.allowRecurse, r._isEffect = !0, r.active = !0, r.raw = e, r.deps = [], r.options = t, r }

    function sr(e) { let { deps: t } = e; if (t.length) { for (let r = 0; r < t.length; r++) t[r].delete(e);
            t.length = 0 } } var G = !0,
        ut = [];

    function fn() { ut.push(G), G = !1 }

    function un() { ut.push(G), G = !0 }

    function cr() { let e = ut.pop();
        G = e === void 0 ? !0 : e }

    function w(e, t, r) { if (!G || R === void 0) return; let n = ct.get(e);
        n || ct.set(e, n = new Map); let i = n.get(r);
        i || n.set(r, i = new Set), i.has(R) || (i.add(R), R.deps.push(i), R.options.onTrack && R.options.onTrack({ effect: R, target: e, type: t, key: r })) }

    function P(e, t, r, n, i, o) { let s = ct.get(e); if (!s) return; let a = new Set,
            c = u => { u && u.forEach(d => {
                    (d !== R || d.allowRecurse) && a.add(d) }) }; if (t === "clear") s.forEach(c);
        else if (r === "length" && D(e)) s.forEach((u, d) => {
            (d === "length" || d >= n) && c(u) });
        else switch (r !== void 0 && c(s.get(r)), t) {
            case "add":
                D(e) ? Ee(r) && c(s.get("length")) : (c(s.get(F)), W(e) && c(s.get(lt))); break;
            case "delete":
                D(e) || (c(s.get(F)), W(e) && c(s.get(lt))); break;
            case "set":
                W(e) && c(s.get(F)); break }
        let l = u => { u.options.onTrigger && u.options.onTrigger({ effect: u, target: e, key: r, type: t, newValue: n, oldValue: i, oldTarget: o }), u.options.scheduler ? u.options.scheduler(u) : u() };
        a.forEach(l) } var dn = nt("__proto__,__v_isRef,__isVue"),
        lr = new Set(Object.getOwnPropertyNames(Symbol).map(e => Symbol[e]).filter(we)),
        pn = Ae(),
        mn = Ae(!1, !0),
        hn = Ae(!0),
        gn = Ae(!0, !0),
        Oe = {};
    ["includes", "indexOf", "lastIndexOf"].forEach(e => { let t = Array.prototype[e];
        Oe[e] = function(...r) { let n = g(this); for (let o = 0, s = this.length; o < s; o++) w(n, "get", o + ""); let i = t.apply(n, r); return i === -1 || i === !1 ? t.apply(n, r.map(g)) : i } });
    ["push", "pop", "shift", "unshift", "splice"].forEach(e => { let t = Array.prototype[e];
        Oe[e] = function(...r) { fn(); let n = t.apply(this, r); return cr(), n } });

    function Ae(e = !1, t = !1) { return function(n, i, o) { if (i === "__v_isReactive") return !e; if (i === "__v_isReadonly") return e; if (i === "__v_raw" && o === (e ? t ? yn : fr : t ? _n : ur).get(n)) return n; let s = D(n); if (!e && s && te(Oe, i)) return Reflect.get(Oe, i, o); let a = Reflect.get(n, i, o); return (we(i) ? lr.has(i) : dn(i)) || (e || w(n, "get", i), t) ? a : ft(a) ? !s || !Ee(i) ? a.value : a : re(a) ? e ? dr(a) : Te(a) : a } } var xn = pr(),
        bn = pr(!0);

    function pr(e = !1) { return function(r, n, i, o) { let s = r[n]; if (!e && (i = g(i), s = g(s), !D(r) && ft(s) && !ft(i))) return s.value = i, !0; let a = D(r) && Ee(n) ? Number(n) < r.length : te(r, n),
                c = Reflect.set(r, n, i, o); return r === g(o) && (a ? at(i, s) && P(r, "set", n, i, s) : P(r, "add", n, i)), c } }

    function vn(e, t) { let r = te(e, t),
            n = e[t],
            i = Reflect.deleteProperty(e, t); return i && r && P(e, "delete", t, void 0, n), i }

    function wn(e, t) { let r = Reflect.has(e, t); return (!we(t) || !lr.has(t)) && w(e, "has", t), r }

    function En(e) { return w(e, "iterate", D(e) ? "length" : F), Reflect.ownKeys(e) } var mr = { get: pn, set: xn, deleteProperty: vn, has: wn, ownKeys: En },
        hr = { get: hn, set(e, t) { return console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0 }, deleteProperty(e, t) { return console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0 } },
        xo = it({}, mr, { get: mn, set: bn }),
        bo = it({}, hr, { get: gn }),
        dt = e => re(e) ? Te(e) : e,
        pt = e => re(e) ? dr(e) : e,
        mt = e => e,
        Re = e => Reflect.getPrototypeOf(e);

    function Ce(e, t, r = !1, n = !1) { e = e.__v_raw; let i = g(e),
            o = g(t);
        t !== o && !r && w(i, "get", t), !r && w(i, "get", o); let { has: s } = Re(i), a = n ? mt : r ? pt : dt; if (s.call(i, t)) return a(e.get(t)); if (s.call(i, o)) return a(e.get(o));
        e !== i && e.get(t) }

    function Me(e, t = !1) { let r = this.__v_raw,
            n = g(r),
            i = g(e); return e !== i && !t && w(n, "has", e), !t && w(n, "has", i), e === i ? r.has(e) : r.has(e) || r.has(i) }

    function Ne(e, t = !1) { return e = e.__v_raw, !t && w(g(e), "iterate", F), Reflect.get(e, "size", e) }

    function gr(e) { e = g(e); let t = g(this); return Re(t).has.call(t, e) || (t.add(e), P(t, "add", e, e)), this }

    function yr(e, t) { t = g(t); let r = g(this),
            { has: n, get: i } = Re(r),
            o = n.call(r, e);
        o ? _r(r, n, e) : (e = g(e), o = n.call(r, e)); let s = i.call(r, e); return r.set(e, t), o ? at(t, s) && P(r, "set", e, t, s) : P(r, "add", e, t), this }

    function xr(e) { let t = g(this),
            { has: r, get: n } = Re(t),
            i = r.call(t, e);
        i ? _r(t, r, e) : (e = g(e), i = r.call(t, e)); let o = n ? n.call(t, e) : void 0,
            s = t.delete(e); return i && P(t, "delete", e, void 0, o), s }

    function br() { let e = g(this),
            t = e.size !== 0,
            r = W(e) ? new Map(e) : new Set(e),
            n = e.clear(); return t && P(e, "clear", void 0, void 0, r), n }

    function ke(e, t) { return function(n, i) { let o = this,
                s = o.__v_raw,
                a = g(s),
                c = t ? mt : e ? pt : dt; return !e && w(a, "iterate", F), s.forEach((l, u) => n.call(i, c(l), c(u), o)) } }

    function De(e, t, r) { return function(...n) { let i = this.__v_raw,
                o = g(i),
                s = W(o),
                a = e === "entries" || e === Symbol.iterator && s,
                c = e === "keys" && s,
                l = i[e](...n),
                u = r ? mt : t ? pt : dt; return !t && w(o, "iterate", c ? lt : F), { next() { let { value: d, done: E } = l.next(); return E ? { value: d, done: E } : { value: a ? [u(d[0]), u(d[1])] : u(d), done: E } }, [Symbol.iterator]() { return this } } } }

    function I(e) { return function(...t) {
            { let r = t[0] ? `on key "${t[0]}" ` : "";
                console.warn(`${st(e)} operation ${r}failed: target is readonly.`, g(this)) } return e === "delete" ? !1 : this } } var vr = {get(e) { return Ce(this, e) }, get size() { return Ne(this) }, has: Me, add: gr, set: yr, delete: xr, clear: br, forEach: ke(!1, !1) },
        wr = {get(e) { return Ce(this, e, !1, !0) }, get size() { return Ne(this) }, has: Me, add: gr, set: yr, delete: xr, clear: br, forEach: ke(!1, !0) },
        Er = {get(e) { return Ce(this, e, !0) }, get size() { return Ne(this, !0) }, has(e) { return Me.call(this, e, !0) }, add: I("add"), set: I("set"), delete: I("delete"), clear: I("clear"), forEach: ke(!0, !1) },
        Sr = {get(e) { return Ce(this, e, !0, !0) }, get size() { return Ne(this, !0) }, has(e) { return Me.call(this, e, !0) }, add: I("add"), set: I("set"), delete: I("delete"), clear: I("clear"), forEach: ke(!0, !0) },
        Sn = ["keys", "values", "entries", Symbol.iterator];
    Sn.forEach(e => { vr[e] = De(e, !1, !1), Er[e] = De(e, !0, !1), wr[e] = De(e, !1, !0), Sr[e] = De(e, !0, !0) });

    function Pe(e, t) { let r = t ? e ? Sr : wr : e ? Er : vr; return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(te(r, i) && i in n ? r : n, i, o) } var An = { get: Pe(!1, !1) },
        vo = { get: Pe(!1, !0) },
        On = { get: Pe(!0, !1) },
        wo = { get: Pe(!0, !0) };

    function _r(e, t, r) { let n = g(r); if (n !== r && t.call(e, n)) { let i = ot(e);
            console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`) } } var ur = new WeakMap,
        _n = new WeakMap,
        fr = new WeakMap,
        yn = new WeakMap;

    function Tn(e) { switch (e) {
            case "Object":
            case "Array":
                return 1;
            case "Map":
            case "Set":
            case "WeakMap":
            case "WeakSet":
                return 2;
            default:
                return 0 } }

    function Rn(e) { return e.__v_skip || !Object.isExtensible(e) ? 0 : Tn(ot(e)) }

    function Te(e) { return e && e.__v_isReadonly ? e : Ar(e, !1, mr, An, ur) }

    function dr(e) { return Ar(e, !0, hr, On, fr) }

    function Ar(e, t, r, n, i) { if (!re(e)) return console.warn(`value cannot be made reactive: ${String(e)}`), e; if (e.__v_raw && !(t && e.__v_isReactive)) return e; let o = i.get(e); if (o) return o; let s = Rn(e); if (s === 0) return e; let a = new Proxy(e, s === 2 ? n : r); return i.set(e, a), a }

    function g(e) { return e && g(e.__v_raw) || e }

    function ft(e) { return Boolean(e && e.__v_isRef === !0) }
    x("nextTick", () => B);
    x("dispatch", e => $.bind($, e));
    x("watch", e => (t, r) => { let n = h(e, t),
            i = !0,
            o;
        M(() => n(s => { let a = document.createElement("div");
            a.dataset.throwAway = s, i ? o = s : queueMicrotask(() => { r(s, o), o = s }), i = !1 })) });
    x("store", Qt);
    x("root", e => O(e));
    x("refs", e => O(e)._x_refs || {});
    x("el", e => e);

    function ie(e, t) { return Array.isArray(t) ? Or(e, t.join(" ")) : typeof t == "object" && t !== null ? Cn(e, t) : typeof t == "function" ? ie(e, t()) : Or(e, t) }

    function Or(e, t) { let r = o => o.split(" ").filter(Boolean),
            n = o => o.split(" ").filter(s => !e.classList.contains(s)).filter(Boolean),
            i = o => (e.classList.add(...o), () => { e.classList.remove(...o) }); return t = t === !0 ? t = "" : t || "", i(n(t)) }

    function Cn(e, t) { let r = a => a.split(" ").filter(Boolean),
            n = Object.entries(t).flatMap(([a, c]) => c ? r(a) : !1).filter(Boolean),
            i = Object.entries(t).flatMap(([a, c]) => c ? !1 : r(a)).filter(Boolean),
            o = [],
            s = []; return i.forEach(a => { e.classList.contains(a) && (e.classList.remove(a), s.push(a)) }), n.forEach(a => { e.classList.contains(a) || (e.classList.add(a), o.push(a)) }), () => { s.forEach(a => e.classList.add(a)), o.forEach(a => e.classList.remove(a)) } }

    function oe(e, t) { return typeof t == "object" && t !== null ? Mn(e, t) : Nn(e, t) }

    function Mn(e, t) { let r = {}; return Object.entries(t).forEach(([n, i]) => { r[n] = e.style[n], e.style.setProperty(kn(n), i) }), setTimeout(() => { e.style.length === 0 && e.removeAttribute("style") }), () => { oe(e, r) } }

    function Nn(e, t) { let r = e.getAttribute("style", t); return e.setAttribute("style", t), () => { e.setAttribute("style", r) } }

    function kn(e) { return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase() }

    function se(e, t = () => {}) { let r = !1; return function() { r ? t.apply(this, arguments) : (r = !0, e.apply(this, arguments)) } }
    p("transition", (e, { value: t, modifiers: r, expression: n }, { evaluate: i }) => { typeof n == "function" && (n = i(n)), n ? Dn(e, n, t) : Pn(e, r, t) });

    function Dn(e, t, r) { Tr(e, ie, ""), { enter: i => { e._x_transition.enter.during = i }, "enter-start": i => { e._x_transition.enter.start = i }, "enter-end": i => { e._x_transition.enter.end = i }, leave: i => { e._x_transition.leave.during = i }, "leave-start": i => { e._x_transition.leave.start = i }, "leave-end": i => { e._x_transition.leave.end = i } }[r](t) }

    function Pn(e, t, r) { Tr(e, oe); let n = !t.includes("in") && !t.includes("out") && !r,
            i = n || t.includes("in") || ["enter"].includes(r),
            o = n || t.includes("out") || ["leave"].includes(r);
        t.includes("in") && !n && (t = t.filter((_, y) => y < t.indexOf("out"))), t.includes("out") && !n && (t = t.filter((_, y) => y > t.indexOf("out"))); let s = !t.includes("opacity") && !t.includes("scale"),
            a = s || t.includes("opacity"),
            c = s || t.includes("scale"),
            l = a ? 0 : 1,
            u = c ? ae(t, "scale", 95) / 100 : 1,
            d = ae(t, "delay", 0),
            E = ae(t, "origin", "center"),
            L = "opacity, transform",
            j = ae(t, "duration", 150) / 1e3,
            ue = ae(t, "duration", 75) / 1e3,
            f = "cubic-bezier(0.4, 0.0, 0.2, 1)";
        i && (e._x_transition.enter.during = { transformOrigin: E, transitionDelay: d, transitionProperty: L, transitionDuration: `${j}s`, transitionTimingFunction: f }, e._x_transition.enter.start = { opacity: l, transform: `scale(${u})` }, e._x_transition.enter.end = { opacity: 1, transform: "scale(1)" }), o && (e._x_transition.leave.during = { transformOrigin: E, transitionDelay: d, transitionProperty: L, transitionDuration: `${ue}s`, transitionTimingFunction: f }, e._x_transition.leave.start = { opacity: 1, transform: "scale(1)" }, e._x_transition.leave.end = { opacity: l, transform: `scale(${u})` }) }

    function Tr(e, t, r = {}) { e._x_transition || (e._x_transition = { enter: { during: r, start: r, end: r }, leave: { during: r, start: r, end: r }, in (n = () => {}, i = () => {}) { Rr(e, t, { during: this.enter.during, start: this.enter.start, end: this.enter.end, entering: !0 }, n, i) }, out(n = () => {}, i = () => {}) { Rr(e, t, { during: this.leave.during, start: this.leave.start, end: this.leave.end, entering: !1 }, n, i) } }) }
    window.Element.prototype._x_toggleAndCascadeWithTransitions = function(e, t, r, n) { let i = () => requestAnimationFrame(r); if (t) { e._x_transition ? e._x_transition.in(r) : i(); return }
        e._x_hidePromise = e._x_transition ? new Promise((o, s) => { e._x_transition.out(() => {}, () => o(n)), e._x_transitioning.beforeCancel(() => s({ isFromCancelledTransition: !0 })) }) : Promise.resolve(n), queueMicrotask(() => { let o = Cr(e);
            o ? (o._x_hideChildren || (o._x_hideChildren = []), o._x_hideChildren.push(e)) : queueMicrotask(() => { let s = a => { let c = Promise.all([a._x_hidePromise, ...(a._x_hideChildren || []).map(s)]).then(([l]) => l()); return delete a._x_hidePromise, delete a._x_hideChildren, c };
                s(e).catch(a => { if (!a.isFromCancelledTransition) throw a }) }) }) };

    function Cr(e) { let t = e.parentNode; if (!!t) return t._x_hidePromise ? t : Cr(t) }

    function Rr(e, t, { during: r, start: n, end: i, entering: o } = {}, s = () => {}, a = () => {}) { if (e._x_transitioning && e._x_transitioning.cancel(), Object.keys(r).length === 0 && Object.keys(n).length === 0 && Object.keys(i).length === 0) { s(), a(); return } let c, l, u;
        In(e, { start() { c = t(e, n) }, during() { l = t(e, r) }, before: s, end() { c(), u = t(e, i) }, after: a, cleanup() { l(), u() } }, o) }

    function In(e, t, r) { let n, i, o, s = se(() => { m(() => { n = !0, i || t.before(), o || (t.end(), _e()), t.after(), e.isConnected && t.cleanup(), delete e._x_transitioning }) });
        e._x_transitioning = { beforeCancels: [], beforeCancel(a) { this.beforeCancels.push(a) }, cancel: se(function() { for (; this.beforeCancels.length;) this.beforeCancels.shift()();
                s() }), finish: s, entering: r }, m(() => { t.start(), t.during() }), Ht(), requestAnimationFrame(() => { if (n) return; let a = Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3,
                c = Number(getComputedStyle(e).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
            a === 0 && (a = Number(getComputedStyle(e).animationDuration.replace("s", "")) * 1e3), m(() => { t.before() }), i = !0, requestAnimationFrame(() => { n || (m(() => { t.end() }), _e(), setTimeout(e._x_transitioning.finish, a + c), o = !0) }) }) }

    function ae(e, t, r) { if (e.indexOf(t) === -1) return r; let n = e[e.indexOf(t) + 1]; if (!n || t === "scale" && isNaN(n)) return r; if (t === "duration") { let i = n.match(/([0-9]+)ms/); if (i) return i[1] } return t === "origin" && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [n, e[e.indexOf(t) + 2]].join(" ") : n } var Mr = () => {};
    Mr.inline = (e, { modifiers: t }, { cleanup: r }) => { t.includes("self") ? e._x_ignoreSelf = !0 : e._x_ignore = !0, r(() => { t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore }) };
    p("ignore", Mr);
    p("effect", (e, { expression: t }, { effect: r }) => r(h(e, t)));

    function ce(e, t, r, n = []) { switch (e._x_bindings || (e._x_bindings = v({})), e._x_bindings[t] = r, t = n.includes("camel") ? Kn(t) : t, t) {
            case "value":
                Ln(e, r); break;
            case "style":
                Fn(e, r); break;
            case "class":
                $n(e, r); break;
            default:
                jn(e, t, r); break } }

    function Ln(e, t) { if (e.type === "radio") e.attributes.value === void 0 && (e.value = t), window.fromModel && (e.checked = Nr(e.value, t));
        else if (e.type === "checkbox") Number.isInteger(t) ? e.value = t : !Number.isInteger(t) && !Array.isArray(t) && typeof t != "boolean" && ![null, void 0].includes(t) ? e.value = String(t) : Array.isArray(t) ? e.checked = t.some(r => Nr(r, e.value)) : e.checked = !!t;
        else if (e.tagName === "SELECT") zn(e, t);
        else { if (e.value === t) return;
            e.value = t } }

    function $n(e, t) { e._x_undoAddedClasses && e._x_undoAddedClasses(), e._x_undoAddedClasses = ie(e, t) }

    function Fn(e, t) { e._x_undoAddedStyles && e._x_undoAddedStyles(), e._x_undoAddedStyles = oe(e, t) }

    function jn(e, t, r) {
        [null, void 0, !1].includes(r) && Bn(t) ? e.removeAttribute(t) : (Hn(t) && (r = t), Vn(e, t, r)) }

    function Vn(e, t, r) { e.getAttribute(t) != r && e.setAttribute(t, r) }

    function zn(e, t) { let r = [].concat(t).map(n => n + "");
        Array.from(e.options).forEach(n => { n.selected = r.includes(n.value) }) }

    function Kn(e) { return e.toLowerCase().replace(/-(\w)/g, (t, r) => r.toUpperCase()) }

    function Nr(e, t) { return e == t }

    function Hn(e) { return ["disabled", "checked", "required", "readonly", "hidden", "open", "selected", "autofocus", "itemscope", "multiple", "novalidate", "allowfullscreen", "allowpaymentrequest", "formnovalidate", "autoplay", "controls", "loop", "muted", "playsinline", "default", "ismap", "reversed", "async", "defer", "nomodule"].includes(e) }

    function Bn(e) { return !["aria-pressed", "aria-checked"].includes(e) }

    function le(e, t, r, n) { let i = e,
            o = c => n(c),
            s = {},
            a = (c, l) => u => l(c, u); if (r.includes("dot") && (t = qn(t)), r.includes("camel") && (t = Un(t)), r.includes("passive") && (s.passive = !0), r.includes("window") && (i = window), r.includes("document") && (i = document), r.includes("prevent") && (o = a(o, (c, l) => { l.preventDefault(), c(l) })), r.includes("stop") && (o = a(o, (c, l) => { l.stopPropagation(), c(l) })), r.includes("self") && (o = a(o, (c, l) => { l.target === e && c(l) })), (r.includes("away") || r.includes("outside")) && (i = document, o = a(o, (c, l) => { e.contains(l.target) || e.offsetWidth < 1 && e.offsetHeight < 1 || c(l) })), o = a(o, (c, l) => { Wn(t) && Gn(l, r) || c(l) }), r.includes("debounce")) { let c = r[r.indexOf("debounce") + 1] || "invalid-wait",
                l = ht(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
            o = be(o, l) } if (r.includes("throttle")) { let c = r[r.indexOf("throttle") + 1] || "invalid-wait",
                l = ht(c.split("ms")[0]) ? Number(c.split("ms")[0]) : 250;
            o = ve(o, l) } return r.includes("once") && (o = a(o, (c, l) => { c(l), i.removeEventListener(t, o, s) })), i.addEventListener(t, o, s), () => { i.removeEventListener(t, o, s) } }

    function qn(e) { return e.replace(/-/g, ".") }

    function Un(e) { return e.toLowerCase().replace(/-(\w)/g, (t, r) => r.toUpperCase()) }

    function ht(e) { return !Array.isArray(e) && !isNaN(e) }

    function Yn(e) { return e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase() }

    function Wn(e) { return ["keydown", "keyup"].includes(e) }

    function Gn(e, t) { let r = t.filter(o => !["window", "document", "prevent", "stop", "once"].includes(o)); if (r.includes("debounce")) { let o = r.indexOf("debounce");
            r.splice(o, ht((r[o + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1) } if (r.length === 0 || r.length === 1 && kr(e.key).includes(r[0])) return !1; let i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter(o => r.includes(o)); return r = r.filter(o => !i.includes(o)), !(i.length > 0 && i.filter(s => ((s === "cmd" || s === "super") && (s = "meta"), e[`${s}Key`])).length === i.length && kr(e.key).includes(r[0])) }

    function kr(e) { if (!e) return [];
        e = Yn(e); let t = { ctrl: "control", slash: "/", space: "-", spacebar: "-", cmd: "meta", esc: "escape", up: "arrow-up", down: "arrow-down", left: "arrow-left", right: "arrow-right", period: ".", equal: "=" }; return t[e] = e, Object.keys(t).map(r => { if (t[r] === e) return r }).filter(r => r) }
    p("model", (e, { modifiers: t, expression: r }, { effect: n, cleanup: i }) => { let o = h(e, r),
            s = `${r} = rightSideOfExpression($event, ${r})`,
            a = h(e, s); var c = e.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(e.type) || t.includes("lazy") ? "change" : "input"; let l = Jn(e, t, r),
            u = le(e, c, t, d => { a(() => {}, { scope: { $event: d, rightSideOfExpression: l } }) });
        i(() => u()), e._x_forceModelUpdate = () => { o(d => { d === void 0 && r.match(/\./) && (d = ""), window.fromModel = !0, m(() => ce(e, "value", d)), delete window.fromModel }) }, n(() => { t.includes("unintrusive") && document.activeElement.isSameNode(e) || e._x_forceModelUpdate() }) });

    function Jn(e, t, r) { return e.type === "radio" && m(() => { e.hasAttribute("name") || e.setAttribute("name", r) }), (n, i) => m(() => { if (n instanceof CustomEvent && n.detail !== void 0) return n.detail || n.target.value; if (e.type === "checkbox")
                if (Array.isArray(i)) { let o = t.includes("number") ? gt(n.target.value) : n.target.value; return n.target.checked ? i.concat([o]) : i.filter(s => !Zn(s, o)) } else return n.target.checked;
            else { if (e.tagName.toLowerCase() === "select" && e.multiple) return t.includes("number") ? Array.from(n.target.selectedOptions).map(o => { let s = o.value || o.text; return gt(s) }) : Array.from(n.target.selectedOptions).map(o => o.value || o.text); { let o = n.target.value; return t.includes("number") ? gt(o) : t.includes("trim") ? o.trim() : o } } }) }

    function gt(e) { let t = e ? parseFloat(e) : null; return Qn(t) ? t : e }

    function Zn(e, t) { return e == t }

    function Qn(e) { return !Array.isArray(e) && !isNaN(e) }
    p("cloak", e => queueMicrotask(() => m(() => e.removeAttribute(A("cloak")))));
    Wt(() => `[${A("init")}]`);
    p("init", U((e, { expression: t }) => typeof t == "string" ? !!t.trim() && b(e, t, {}, !1) : b(e, t, {}, !1)));
    p("text", (e, { expression: t }, { effect: r, evaluateLater: n }) => { let i = n(t);
        r(() => { i(o => { m(() => { e.textContent = o }) }) }) });
    p("html", (e, { expression: t }, { effect: r, evaluateLater: n }) => { let i = n(t);
        r(() => { i(o => { e.innerHTML = o }) }) });
    H(me(":", he(A("bind:"))));
    p("bind", (e, { value: t, modifiers: r, expression: n, original: i }, { effect: o }) => { if (!t) return Xn(e, n, i, o); if (t === "key") return ei(e, n); let s = h(e, n);
        o(() => s(a => { a === void 0 && n.match(/\./) && (a = ""), m(() => ce(e, t, a, r)) })) });

    function Xn(e, t, r, n) { let i = h(e, t),
            o = [];
        n(() => { for (; o.length;) o.pop()();
            i(s => { let a = Object.entries(s).map(([c, l]) => ({ name: c, value: l }));
                Ft(a).forEach(({ name: c, value: l }, u) => { a[u] = { name: `x-bind:${c}`, value: `"${l}"` } }), X(e, a, r).map(c => { o.push(c.runCleanups), c() }) }) }) }

    function ei(e, t) { e._x_keyExpression = t }
    xe(() => `[${A("data")}]`);
    p("data", U((e, { expression: t }, { cleanup: r }) => { t = t === "" ? "{}" : t; let n = {};
        Q(n, e); let i = {};
        rr(i, n); let o = b(e, t, { scope: i });
        Q(o, e); let s = v(o);
        Mt(s); let a = V(e, s);
        s.init && b(e, s.init), r(() => { a(), s.destroy && b(e, s.destroy) }) }));
    p("show", (e, { modifiers: t, expression: r }, { effect: n }) => { let i = h(e, r),
            o = () => m(() => { e.style.display = "none", e._x_isShown = !1 }),
            s = () => m(() => { e.style.length === 1 && e.style.display === "none" ? e.removeAttribute("style") : e.style.removeProperty("display"), e._x_isShown = !0 }),
            a = () => setTimeout(s),
            c = se(d => d ? s() : o(), d => { typeof e._x_toggleAndCascadeWithTransitions == "function" ? e._x_toggleAndCascadeWithTransitions(e, d, s, o) : d ? a() : o() }),
            l, u = !0;
        n(() => i(d => {!u && d === l || (t.includes("immediate") && (d ? a() : o()), c(d), l = d, u = !1) })) });
    p("for", (e, { expression: t }, { effect: r, cleanup: n }) => { let i = ri(t),
            o = h(e, i.items),
            s = h(e, e._x_keyExpression || "index");
        e._x_prevKeys = [], e._x_lookup = {}, r(() => ti(e, i, o, s)), n(() => { Object.values(e._x_lookup).forEach(a => a.remove()), delete e._x_prevKeys, delete e._x_lookup }) });

    function ti(e, t, r, n) { let i = s => typeof s == "object" && !Array.isArray(s),
            o = e;
        r(s => { ni(s) && s >= 0 && (s = Array.from(Array(s).keys(), f => f + 1)), s === void 0 && (s = []); let a = e._x_lookup,
                c = e._x_prevKeys,
                l = [],
                u = []; if (i(s)) s = Object.entries(s).map(([f, _]) => { let y = Dr(t, _, f, s);
                n(C => u.push(C), { scope: { index: f, ...y } }), l.push(y) });
            else
                for (let f = 0; f < s.length; f++) { let _ = Dr(t, s[f], f, s);
                    n(y => u.push(y), { scope: { index: f, ..._ } }), l.push(_) }
            let d = [],
                E = [],
                L = [],
                j = []; for (let f = 0; f < c.length; f++) { let _ = c[f];
                u.indexOf(_) === -1 && L.push(_) }
            c = c.filter(f => !L.includes(f)); let ue = "template"; for (let f = 0; f < u.length; f++) { let _ = u[f],
                    y = c.indexOf(_); if (y === -1) c.splice(f, 0, _), d.push([ue, f]);
                else if (y !== f) { let C = c.splice(f, 1)[0],
                        N = c.splice(y - 1, 1)[0];
                    c.splice(f, 0, N), c.splice(y, 0, C), E.push([C, N]) } else j.push(_);
                ue = _ } for (let f = 0; f < L.length; f++) { let _ = L[f];
                a[_].remove(), a[_] = null, delete a[_] } for (let f = 0; f < E.length; f++) { let [_, y] = E[f], C = a[_], N = a[y], K = document.createElement("div");
                m(() => { N.after(K), C.after(N), K.before(C), K.remove() }), qe(N, l[u.indexOf(y)]) } for (let f = 0; f < d.length; f++) { let [_, y] = d[f], C = _ === "template" ? o : a[_], N = l[y], K = u[y], fe = document.importNode(o.content, !0).firstElementChild;
                V(fe, v(N), o), m(() => { C.after(fe), T(fe) }), typeof K == "object" && ye("x-for key cannot be an object, it must be a string or an integer", o), a[K] = fe } for (let f = 0; f < j.length; f++) qe(a[j[f]], l[u.indexOf(j[f])]);
            o._x_prevKeys = u }) }

    function ri(e) { let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
            r = /^\s*\(|\)\s*$/g,
            n = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
            i = e.match(n); if (!i) return; let o = {};
        o.items = i[2].trim(); let s = i[1].replace(r, "").trim(),
            a = s.match(t); return a ? (o.item = s.replace(t, "").trim(), o.index = a[1].trim(), a[2] && (o.collection = a[2].trim())) : o.item = s, o }

    function Dr(e, t, r, n) { let i = {}; return /^\[.*\]$/.test(e.item) && Array.isArray(t) ? e.item.replace("[", "").replace("]", "").split(",").map(s => s.trim()).forEach((s, a) => { i[s] = t[a] }) : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && typeof t == "object" ? e.item.replace("{", "").replace("}", "").split(",").map(s => s.trim()).forEach(s => { i[s] = t[s] }) : i[e.item] = t, e.index && (i[e.index] = r), e.collection && (i[e.collection] = n), i }

    function ni(e) { return !Array.isArray(e) && !isNaN(e) }

    function Pr() {}
    Pr.inline = (e, { expression: t }, { cleanup: r }) => { let n = O(e);
        n._x_refs || (n._x_refs = {}), n._x_refs[t] = e, r(() => delete n._x_refs[t]) };
    p("ref", Pr);
    p("if", (e, { expression: t }, { effect: r, cleanup: n }) => { let i = h(e, t),
            o = () => { if (e._x_currentIfEl) return e._x_currentIfEl; let a = e.content.cloneNode(!0).firstElementChild; return V(a, {}, e), m(() => { e.after(a), T(a) }), e._x_currentIfEl = a, e._x_undoIf = () => { a.remove(), delete e._x_currentIfEl }, a },
            s = () => {!e._x_undoIf || (e._x_undoIf(), delete e._x_undoIf) };
        r(() => i(a => { a ? o() : s() })), n(() => e._x_undoIf && e._x_undoIf()) });
    H(me("@", he(A("on:"))));
    p("on", U((e, { value: t, modifiers: r, expression: n }, { cleanup: i }) => { let o = n ? h(e, n) : () => {},
            s = le(e, t, r, a => { o(() => {}, { scope: { $event: a }, params: [a] }) });
        i(() => s()) }));
    S.setEvaluator(Ge);
    S.setReactivityEngine({ reactive: Te, effect: or, release: ar, raw: g }); var _t = S;
    window.Alpine = _t;
    queueMicrotask(() => { _t.start() }); })();