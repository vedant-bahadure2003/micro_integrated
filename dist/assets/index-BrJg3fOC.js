function F0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s = Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get ? s : { enumerable: !0, get: () => r[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
function O0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ef = { exports: {} },
  Bs = {},
  Mf = { exports: {} },
  _ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ci = Symbol.for("react.element"),
  z0 = Symbol.for("react.portal"),
  B0 = Symbol.for("react.fragment"),
  U0 = Symbol.for("react.strict_mode"),
  $0 = Symbol.for("react.profiler"),
  W0 = Symbol.for("react.provider"),
  H0 = Symbol.for("react.context"),
  K0 = Symbol.for("react.forward_ref"),
  G0 = Symbol.for("react.suspense"),
  Y0 = Symbol.for("react.memo"),
  Q0 = Symbol.for("react.lazy"),
  Xu = Symbol.iterator;
function X0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Xu && e[Xu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Rf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Af = Object.assign,
  Lf = {};
function rr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Lf),
    (this.updater = n || Rf);
}
rr.prototype.isReactComponent = {};
rr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
rr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Df() {}
Df.prototype = rr.prototype;
function wl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Lf),
    (this.updater = n || Rf);
}
var Sl = (wl.prototype = new Df());
Sl.constructor = wl;
Af(Sl, rr.prototype);
Sl.isPureReactComponent = !0;
var Zu = Array.isArray,
  Vf = Object.prototype.hasOwnProperty,
  kl = { current: null },
  _f = { key: !0, ref: !0, __self: !0, __source: !0 };
function If(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Vf.call(t, r) && !_f.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: ci,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: kl.current,
  };
}
function Z0(e, t) {
  return {
    $$typeof: ci,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function jl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ci;
}
function q0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var qu = /\/+/g;
function fo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? q0("" + e.key)
    : t.toString(36);
}
function Hi(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ci:
          case z0:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + fo(o, 0) : r),
      Zu(i)
        ? ((n = ""),
          e != null && (n = e.replace(qu, "$&/") + "/"),
          Hi(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (jl(i) &&
            (i = Z0(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(qu, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Zu(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + fo(s, a);
      o += Hi(s, t, n, l, i);
    }
  else if (((l = X0(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (l = r + fo(s, a++)), (o += Hi(s, t, n, l, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Ni(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Hi(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function J0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ke = { current: null },
  Ki = { transition: null },
  eg = {
    ReactCurrentDispatcher: ke,
    ReactCurrentBatchConfig: Ki,
    ReactCurrentOwner: kl,
  };
function Ff() {
  throw Error("act(...) is not supported in production builds of React.");
}
_.Children = {
  map: Ni,
  forEach: function (e, t, n) {
    Ni(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Ni(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Ni(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!jl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
_.Component = rr;
_.Fragment = B0;
_.Profiler = $0;
_.PureComponent = wl;
_.StrictMode = U0;
_.Suspense = G0;
_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eg;
_.act = Ff;
_.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Af({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = kl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Vf.call(t, l) &&
        !_f.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: ci, type: e.type, key: i, ref: s, props: r, _owner: o };
};
_.createContext = function (e) {
  return (
    (e = {
      $$typeof: H0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: W0, _context: e }),
    (e.Consumer = e)
  );
};
_.createElement = If;
_.createFactory = function (e) {
  var t = If.bind(null, e);
  return (t.type = e), t;
};
_.createRef = function () {
  return { current: null };
};
_.forwardRef = function (e) {
  return { $$typeof: K0, render: e };
};
_.isValidElement = jl;
_.lazy = function (e) {
  return { $$typeof: Q0, _payload: { _status: -1, _result: e }, _init: J0 };
};
_.memo = function (e, t) {
  return { $$typeof: Y0, type: e, compare: t === void 0 ? null : t };
};
_.startTransition = function (e) {
  var t = Ki.transition;
  Ki.transition = {};
  try {
    e();
  } finally {
    Ki.transition = t;
  }
};
_.unstable_act = Ff;
_.useCallback = function (e, t) {
  return ke.current.useCallback(e, t);
};
_.useContext = function (e) {
  return ke.current.useContext(e);
};
_.useDebugValue = function () {};
_.useDeferredValue = function (e) {
  return ke.current.useDeferredValue(e);
};
_.useEffect = function (e, t) {
  return ke.current.useEffect(e, t);
};
_.useId = function () {
  return ke.current.useId();
};
_.useImperativeHandle = function (e, t, n) {
  return ke.current.useImperativeHandle(e, t, n);
};
_.useInsertionEffect = function (e, t) {
  return ke.current.useInsertionEffect(e, t);
};
_.useLayoutEffect = function (e, t) {
  return ke.current.useLayoutEffect(e, t);
};
_.useMemo = function (e, t) {
  return ke.current.useMemo(e, t);
};
_.useReducer = function (e, t, n) {
  return ke.current.useReducer(e, t, n);
};
_.useRef = function (e) {
  return ke.current.useRef(e);
};
_.useState = function (e) {
  return ke.current.useState(e);
};
_.useSyncExternalStore = function (e, t, n) {
  return ke.current.useSyncExternalStore(e, t, n);
};
_.useTransition = function () {
  return ke.current.useTransition();
};
_.version = "18.3.1";
Mf.exports = _;
var w = Mf.exports;
const Of = O0(w),
  tg = F0({ __proto__: null, default: Of }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ng = w,
  rg = Symbol.for("react.element"),
  ig = Symbol.for("react.fragment"),
  sg = Object.prototype.hasOwnProperty,
  og = ng.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ag = { key: !0, ref: !0, __self: !0, __source: !0 };
function zf(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) sg.call(t, r) && !ag.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: rg,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: og.current,
  };
}
Bs.Fragment = ig;
Bs.jsx = zf;
Bs.jsxs = zf;
Ef.exports = Bs;
var u = Ef.exports,
  ea = {},
  Bf = { exports: {} },
  Ve = {},
  Uf = { exports: {} },
  $f = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, A) {
    var D = E.length;
    E.push(A);
    e: for (; 0 < D; ) {
      var H = (D - 1) >>> 1,
        ae = E[H];
      if (0 < i(ae, A)) (E[H] = A), (E[D] = ae), (D = H);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var A = E[0],
      D = E.pop();
    if (D !== A) {
      E[0] = D;
      e: for (var H = 0, ae = E.length, ki = ae >>> 1; H < ki; ) {
        var Qt = 2 * (H + 1) - 1,
          co = E[Qt],
          Xt = Qt + 1,
          ji = E[Xt];
        if (0 > i(co, D))
          Xt < ae && 0 > i(ji, co)
            ? ((E[H] = ji), (E[Xt] = D), (H = Xt))
            : ((E[H] = co), (E[Qt] = D), (H = Qt));
        else if (Xt < ae && 0 > i(ji, D)) (E[H] = ji), (E[Xt] = D), (H = Xt);
        else break e;
      }
    }
    return A;
  }
  function i(E, A) {
    var D = E.sortIndex - A.sortIndex;
    return D !== 0 ? D : E.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    c = [],
    d = 1,
    f = null,
    h = 3,
    y = !1,
    v = !1,
    x = !1,
    k = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(E) {
    for (var A = n(c); A !== null; ) {
      if (A.callback === null) r(c);
      else if (A.startTime <= E)
        r(c), (A.sortIndex = A.expirationTime), t(l, A);
      else break;
      A = n(c);
    }
  }
  function S(E) {
    if (((x = !1), g(E), !v))
      if (n(l) !== null) (v = !0), Si(j);
      else {
        var A = n(c);
        A !== null && q(S, A.startTime - E);
      }
  }
  function j(E, A) {
    (v = !1), x && ((x = !1), m(N), (N = -1)), (y = !0);
    var D = h;
    try {
      for (
        g(A), f = n(l);
        f !== null && (!(f.expirationTime > A) || (E && !te()));

      ) {
        var H = f.callback;
        if (typeof H == "function") {
          (f.callback = null), (h = f.priorityLevel);
          var ae = H(f.expirationTime <= A);
          (A = e.unstable_now()),
            typeof ae == "function" ? (f.callback = ae) : f === n(l) && r(l),
            g(A);
        } else r(l);
        f = n(l);
      }
      if (f !== null) var ki = !0;
      else {
        var Qt = n(c);
        Qt !== null && q(S, Qt.startTime - A), (ki = !1);
      }
      return ki;
    } finally {
      (f = null), (h = D), (y = !1);
    }
  }
  var C = !1,
    P = null,
    N = -1,
    V = 5,
    R = -1;
  function te() {
    return !(e.unstable_now() - R < V);
  }
  function St() {
    if (P !== null) {
      var E = e.unstable_now();
      R = E;
      var A = !0;
      try {
        A = P(!0, E);
      } finally {
        A ? Yt() : ((C = !1), (P = null));
      }
    } else C = !1;
  }
  var Yt;
  if (typeof p == "function")
    Yt = function () {
      p(St);
    };
  else if (typeof MessageChannel < "u") {
    var cr = new MessageChannel(),
      wi = cr.port2;
    (cr.port1.onmessage = St),
      (Yt = function () {
        wi.postMessage(null);
      });
  } else
    Yt = function () {
      k(St, 0);
    };
  function Si(E) {
    (P = E), C || ((C = !0), Yt());
  }
  function q(E, A) {
    N = k(function () {
      E(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), Si(j));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (E) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = h;
      }
      var D = h;
      h = A;
      try {
        return E();
      } finally {
        h = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, A) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var D = h;
      h = E;
      try {
        return A();
      } finally {
        h = D;
      }
    }),
    (e.unstable_scheduleCallback = function (E, A, D) {
      var H = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? H + D : H))
          : (D = H),
        E)
      ) {
        case 1:
          var ae = -1;
          break;
        case 2:
          ae = 250;
          break;
        case 5:
          ae = 1073741823;
          break;
        case 4:
          ae = 1e4;
          break;
        default:
          ae = 5e3;
      }
      return (
        (ae = D + ae),
        (E = {
          id: d++,
          callback: A,
          priorityLevel: E,
          startTime: D,
          expirationTime: ae,
          sortIndex: -1,
        }),
        D > H
          ? ((E.sortIndex = D),
            t(c, E),
            n(l) === null &&
              E === n(c) &&
              (x ? (m(N), (N = -1)) : (x = !0), q(S, D - H)))
          : ((E.sortIndex = ae), t(l, E), v || y || ((v = !0), Si(j))),
        E
      );
    }),
    (e.unstable_shouldYield = te),
    (e.unstable_wrapCallback = function (E) {
      var A = h;
      return function () {
        var D = h;
        h = A;
        try {
          return E.apply(this, arguments);
        } finally {
          h = D;
        }
      };
    });
})($f);
Uf.exports = $f;
var lg = Uf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ug = w,
  De = lg;
function T(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Wf = new Set(),
  Or = {};
function gn(e, t) {
  Yn(e, t), Yn(e + "Capture", t);
}
function Yn(e, t) {
  for (Or[e] = t, e = 0; e < t.length; e++) Wf.add(t[e]);
}
var pt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ta = Object.prototype.hasOwnProperty,
  cg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ju = {},
  ec = {};
function dg(e) {
  return ta.call(ec, e)
    ? !0
    : ta.call(Ju, e)
    ? !1
    : cg.test(e)
    ? (ec[e] = !0)
    : ((Ju[e] = !0), !1);
}
function fg(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function hg(e, t, n, r) {
  if (t === null || typeof t > "u" || fg(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function je(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    he[e] = new je(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  he[t] = new je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  he[e] = new je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  he[e] = new je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    he[e] = new je(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  he[e] = new je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  he[e] = new je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  he[e] = new je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  he[e] = new je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Nl = /[\-:]([a-z])/g;
function Cl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Nl, Cl);
    he[t] = new je(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Nl, Cl);
    he[t] = new je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Nl, Cl);
  he[t] = new je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  he[e] = new je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
he.xlinkHref = new je(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  he[e] = new je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Tl(e, t, n, r) {
  var i = he.hasOwnProperty(t) ? he[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (hg(t, n, i, r) && (n = null),
    r || i === null
      ? dg(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var wt = ug.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ci = Symbol.for("react.element"),
  Sn = Symbol.for("react.portal"),
  kn = Symbol.for("react.fragment"),
  Pl = Symbol.for("react.strict_mode"),
  na = Symbol.for("react.profiler"),
  Hf = Symbol.for("react.provider"),
  Kf = Symbol.for("react.context"),
  bl = Symbol.for("react.forward_ref"),
  ra = Symbol.for("react.suspense"),
  ia = Symbol.for("react.suspense_list"),
  El = Symbol.for("react.memo"),
  Nt = Symbol.for("react.lazy"),
  Gf = Symbol.for("react.offscreen"),
  tc = Symbol.iterator;
function dr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (tc && e[tc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  ho;
function wr(e) {
  if (ho === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ho = (t && t[1]) || "";
    }
  return (
    `
` +
    ho +
    e
  );
}
var po = !1;
function mo(e, t) {
  if (!e || po) return "";
  po = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (po = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? wr(e) : "";
}
function pg(e) {
  switch (e.tag) {
    case 5:
      return wr(e.type);
    case 16:
      return wr("Lazy");
    case 13:
      return wr("Suspense");
    case 19:
      return wr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = mo(e.type, !1)), e;
    case 11:
      return (e = mo(e.type.render, !1)), e;
    case 1:
      return (e = mo(e.type, !0)), e;
    default:
      return "";
  }
}
function sa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case kn:
      return "Fragment";
    case Sn:
      return "Portal";
    case na:
      return "Profiler";
    case Pl:
      return "StrictMode";
    case ra:
      return "Suspense";
    case ia:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Kf:
        return (e.displayName || "Context") + ".Consumer";
      case Hf:
        return (e._context.displayName || "Context") + ".Provider";
      case bl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case El:
        return (
          (t = e.displayName || null), t !== null ? t : sa(e.type) || "Memo"
        );
      case Nt:
        (t = e._payload), (e = e._init);
        try {
          return sa(e(t));
        } catch {}
    }
  return null;
}
function mg(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return sa(t);
    case 8:
      return t === Pl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function zt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Yf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function gg(e) {
  var t = Yf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ti(e) {
  e._valueTracker || (e._valueTracker = gg(e));
}
function Qf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Yf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function us(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function oa(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function nc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = zt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Xf(e, t) {
  (t = t.checked), t != null && Tl(e, "checked", t, !1);
}
function aa(e, t) {
  Xf(e, t);
  var n = zt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? la(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && la(e, t.type, zt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function rc(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function la(e, t, n) {
  (t !== "number" || us(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Sr = Array.isArray;
function Fn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + zt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function ua(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ic(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (Sr(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: zt(n) };
}
function Zf(e, t) {
  var n = zt(t.value),
    r = zt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function sc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function qf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ca(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? qf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Pi,
  Jf = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Pi = Pi || document.createElement("div"),
          Pi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Pi.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function zr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Cr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  yg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Cr).forEach(function (e) {
  yg.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Cr[t] = Cr[e]);
  });
});
function eh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Cr.hasOwnProperty(e) && Cr[e])
    ? ("" + t).trim()
    : t + "px";
}
function th(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = eh(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var vg = Q(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function da(e, t) {
  if (t) {
    if (vg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function fa(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ha = null;
function Ml(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var pa = null,
  On = null,
  zn = null;
function oc(e) {
  if ((e = hi(e))) {
    if (typeof pa != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = Ks(t)), pa(e.stateNode, e.type, t));
  }
}
function nh(e) {
  On ? (zn ? zn.push(e) : (zn = [e])) : (On = e);
}
function rh() {
  if (On) {
    var e = On,
      t = zn;
    if (((zn = On = null), oc(e), t)) for (e = 0; e < t.length; e++) oc(t[e]);
  }
}
function ih(e, t) {
  return e(t);
}
function sh() {}
var go = !1;
function oh(e, t, n) {
  if (go) return e(t, n);
  go = !0;
  try {
    return ih(e, t, n);
  } finally {
    (go = !1), (On !== null || zn !== null) && (sh(), rh());
  }
}
function Br(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ks(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var ma = !1;
if (pt)
  try {
    var fr = {};
    Object.defineProperty(fr, "passive", {
      get: function () {
        ma = !0;
      },
    }),
      window.addEventListener("test", fr, fr),
      window.removeEventListener("test", fr, fr);
  } catch {
    ma = !1;
  }
function xg(e, t, n, r, i, s, o, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var Tr = !1,
  cs = null,
  ds = !1,
  ga = null,
  wg = {
    onError: function (e) {
      (Tr = !0), (cs = e);
    },
  };
function Sg(e, t, n, r, i, s, o, a, l) {
  (Tr = !1), (cs = null), xg.apply(wg, arguments);
}
function kg(e, t, n, r, i, s, o, a, l) {
  if ((Sg.apply(this, arguments), Tr)) {
    if (Tr) {
      var c = cs;
      (Tr = !1), (cs = null);
    } else throw Error(T(198));
    ds || ((ds = !0), (ga = c));
  }
}
function yn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ah(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ac(e) {
  if (yn(e) !== e) throw Error(T(188));
}
function jg(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = yn(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return ac(i), e;
        if (s === r) return ac(i), t;
        s = s.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function lh(e) {
  return (e = jg(e)), e !== null ? uh(e) : null;
}
function uh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = uh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ch = De.unstable_scheduleCallback,
  lc = De.unstable_cancelCallback,
  Ng = De.unstable_shouldYield,
  Cg = De.unstable_requestPaint,
  ee = De.unstable_now,
  Tg = De.unstable_getCurrentPriorityLevel,
  Rl = De.unstable_ImmediatePriority,
  dh = De.unstable_UserBlockingPriority,
  fs = De.unstable_NormalPriority,
  Pg = De.unstable_LowPriority,
  fh = De.unstable_IdlePriority,
  Us = null,
  it = null;
function bg(e) {
  if (it && typeof it.onCommitFiberRoot == "function")
    try {
      it.onCommitFiberRoot(Us, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var qe = Math.clz32 ? Math.clz32 : Rg,
  Eg = Math.log,
  Mg = Math.LN2;
function Rg(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Eg(e) / Mg) | 0)) | 0;
}
var bi = 64,
  Ei = 4194304;
function kr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function hs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = kr(a)) : ((s &= o), s !== 0 && (r = kr(s)));
  } else (o = n & ~i), o !== 0 ? (r = kr(o)) : s !== 0 && (r = kr(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - qe(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Ag(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Lg(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - qe(s),
      a = 1 << o,
      l = i[o];
    l === -1
      ? (!(a & n) || a & r) && (i[o] = Ag(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function ya(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function hh() {
  var e = bi;
  return (bi <<= 1), !(bi & 4194240) && (bi = 64), e;
}
function yo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function di(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - qe(t)),
    (e[t] = n);
}
function Dg(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - qe(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function Al(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - qe(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var O = 0;
function ph(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var mh,
  Ll,
  gh,
  yh,
  vh,
  va = !1,
  Mi = [],
  Rt = null,
  At = null,
  Lt = null,
  Ur = new Map(),
  $r = new Map(),
  Tt = [],
  Vg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function uc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Rt = null;
      break;
    case "dragenter":
    case "dragleave":
      At = null;
      break;
    case "mouseover":
    case "mouseout":
      Lt = null;
      break;
    case "pointerover":
    case "pointerout":
      Ur.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      $r.delete(t.pointerId);
  }
}
function hr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = hi(t)), t !== null && Ll(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function _g(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Rt = hr(Rt, e, t, n, r, i)), !0;
    case "dragenter":
      return (At = hr(At, e, t, n, r, i)), !0;
    case "mouseover":
      return (Lt = hr(Lt, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return Ur.set(s, hr(Ur.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), $r.set(s, hr($r.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function xh(e) {
  var t = tn(e.target);
  if (t !== null) {
    var n = yn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ah(n)), t !== null)) {
          (e.blockedOn = t),
            vh(e.priority, function () {
              gh(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Gi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ha = r), n.target.dispatchEvent(r), (ha = null);
    } else return (t = hi(n)), t !== null && Ll(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function cc(e, t, n) {
  Gi(e) && n.delete(t);
}
function Ig() {
  (va = !1),
    Rt !== null && Gi(Rt) && (Rt = null),
    At !== null && Gi(At) && (At = null),
    Lt !== null && Gi(Lt) && (Lt = null),
    Ur.forEach(cc),
    $r.forEach(cc);
}
function pr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    va ||
      ((va = !0),
      De.unstable_scheduleCallback(De.unstable_NormalPriority, Ig)));
}
function Wr(e) {
  function t(i) {
    return pr(i, e);
  }
  if (0 < Mi.length) {
    pr(Mi[0], e);
    for (var n = 1; n < Mi.length; n++) {
      var r = Mi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Rt !== null && pr(Rt, e),
      At !== null && pr(At, e),
      Lt !== null && pr(Lt, e),
      Ur.forEach(t),
      $r.forEach(t),
      n = 0;
    n < Tt.length;
    n++
  )
    (r = Tt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Tt.length && ((n = Tt[0]), n.blockedOn === null); )
    xh(n), n.blockedOn === null && Tt.shift();
}
var Bn = wt.ReactCurrentBatchConfig,
  ps = !0;
function Fg(e, t, n, r) {
  var i = O,
    s = Bn.transition;
  Bn.transition = null;
  try {
    (O = 1), Dl(e, t, n, r);
  } finally {
    (O = i), (Bn.transition = s);
  }
}
function Og(e, t, n, r) {
  var i = O,
    s = Bn.transition;
  Bn.transition = null;
  try {
    (O = 4), Dl(e, t, n, r);
  } finally {
    (O = i), (Bn.transition = s);
  }
}
function Dl(e, t, n, r) {
  if (ps) {
    var i = xa(e, t, n, r);
    if (i === null) Po(e, t, r, ms, n), uc(e, r);
    else if (_g(i, e, t, n, r)) r.stopPropagation();
    else if ((uc(e, r), t & 4 && -1 < Vg.indexOf(e))) {
      for (; i !== null; ) {
        var s = hi(i);
        if (
          (s !== null && mh(s),
          (s = xa(e, t, n, r)),
          s === null && Po(e, t, r, ms, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Po(e, t, r, null, n);
  }
}
var ms = null;
function xa(e, t, n, r) {
  if (((ms = null), (e = Ml(r)), (e = tn(e)), e !== null))
    if (((t = yn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ah(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ms = e), null;
}
function wh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Tg()) {
        case Rl:
          return 1;
        case dh:
          return 4;
        case fs:
        case Pg:
          return 16;
        case fh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var bt = null,
  Vl = null,
  Yi = null;
function Sh() {
  if (Yi) return Yi;
  var e,
    t = Vl,
    n = t.length,
    r,
    i = "value" in bt ? bt.value : bt.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Yi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Qi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ri() {
  return !0;
}
function dc() {
  return !1;
}
function _e(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? Ri
        : dc),
      (this.isPropagationStopped = dc),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ri));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ri));
      },
      persist: function () {},
      isPersistent: Ri,
    }),
    t
  );
}
var ir = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  _l = _e(ir),
  fi = Q({}, ir, { view: 0, detail: 0 }),
  zg = _e(fi),
  vo,
  xo,
  mr,
  $s = Q({}, fi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Il,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== mr &&
            (mr && e.type === "mousemove"
              ? ((vo = e.screenX - mr.screenX), (xo = e.screenY - mr.screenY))
              : (xo = vo = 0),
            (mr = e)),
          vo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : xo;
    },
  }),
  fc = _e($s),
  Bg = Q({}, $s, { dataTransfer: 0 }),
  Ug = _e(Bg),
  $g = Q({}, fi, { relatedTarget: 0 }),
  wo = _e($g),
  Wg = Q({}, ir, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Hg = _e(Wg),
  Kg = Q({}, ir, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Gg = _e(Kg),
  Yg = Q({}, ir, { data: 0 }),
  hc = _e(Yg),
  Qg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Xg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Zg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function qg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Zg[e]) ? !!t[e] : !1;
}
function Il() {
  return qg;
}
var Jg = Q({}, fi, {
    key: function (e) {
      if (e.key) {
        var t = Qg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Qi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Xg[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Il,
    charCode: function (e) {
      return e.type === "keypress" ? Qi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Qi(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  ey = _e(Jg),
  ty = Q({}, $s, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  pc = _e(ty),
  ny = Q({}, fi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Il,
  }),
  ry = _e(ny),
  iy = Q({}, ir, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  sy = _e(iy),
  oy = Q({}, $s, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  ay = _e(oy),
  ly = [9, 13, 27, 32],
  Fl = pt && "CompositionEvent" in window,
  Pr = null;
pt && "documentMode" in document && (Pr = document.documentMode);
var uy = pt && "TextEvent" in window && !Pr,
  kh = pt && (!Fl || (Pr && 8 < Pr && 11 >= Pr)),
  mc = " ",
  gc = !1;
function jh(e, t) {
  switch (e) {
    case "keyup":
      return ly.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Nh(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var jn = !1;
function cy(e, t) {
  switch (e) {
    case "compositionend":
      return Nh(t);
    case "keypress":
      return t.which !== 32 ? null : ((gc = !0), mc);
    case "textInput":
      return (e = t.data), e === mc && gc ? null : e;
    default:
      return null;
  }
}
function dy(e, t) {
  if (jn)
    return e === "compositionend" || (!Fl && jh(e, t))
      ? ((e = Sh()), (Yi = Vl = bt = null), (jn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return kh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var fy = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function yc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!fy[e.type] : t === "textarea";
}
function Ch(e, t, n, r) {
  nh(r),
    (t = gs(t, "onChange")),
    0 < t.length &&
      ((n = new _l("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var br = null,
  Hr = null;
function hy(e) {
  _h(e, 0);
}
function Ws(e) {
  var t = Tn(e);
  if (Qf(t)) return e;
}
function py(e, t) {
  if (e === "change") return t;
}
var Th = !1;
if (pt) {
  var So;
  if (pt) {
    var ko = "oninput" in document;
    if (!ko) {
      var vc = document.createElement("div");
      vc.setAttribute("oninput", "return;"),
        (ko = typeof vc.oninput == "function");
    }
    So = ko;
  } else So = !1;
  Th = So && (!document.documentMode || 9 < document.documentMode);
}
function xc() {
  br && (br.detachEvent("onpropertychange", Ph), (Hr = br = null));
}
function Ph(e) {
  if (e.propertyName === "value" && Ws(Hr)) {
    var t = [];
    Ch(t, Hr, e, Ml(e)), oh(hy, t);
  }
}
function my(e, t, n) {
  e === "focusin"
    ? (xc(), (br = t), (Hr = n), br.attachEvent("onpropertychange", Ph))
    : e === "focusout" && xc();
}
function gy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ws(Hr);
}
function yy(e, t) {
  if (e === "click") return Ws(t);
}
function vy(e, t) {
  if (e === "input" || e === "change") return Ws(t);
}
function xy(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var et = typeof Object.is == "function" ? Object.is : xy;
function Kr(e, t) {
  if (et(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ta.call(t, i) || !et(e[i], t[i])) return !1;
  }
  return !0;
}
function wc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Sc(e, t) {
  var n = wc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = wc(n);
  }
}
function bh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? bh(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Eh() {
  for (var e = window, t = us(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = us(e.document);
  }
  return t;
}
function Ol(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function wy(e) {
  var t = Eh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    bh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ol(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Sc(n, s));
        var o = Sc(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Sy = pt && "documentMode" in document && 11 >= document.documentMode,
  Nn = null,
  wa = null,
  Er = null,
  Sa = !1;
function kc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Sa ||
    Nn == null ||
    Nn !== us(r) ||
    ((r = Nn),
    "selectionStart" in r && Ol(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Er && Kr(Er, r)) ||
      ((Er = r),
      (r = gs(wa, "onSelect")),
      0 < r.length &&
        ((t = new _l("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Nn))));
}
function Ai(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Cn = {
    animationend: Ai("Animation", "AnimationEnd"),
    animationiteration: Ai("Animation", "AnimationIteration"),
    animationstart: Ai("Animation", "AnimationStart"),
    transitionend: Ai("Transition", "TransitionEnd"),
  },
  jo = {},
  Mh = {};
pt &&
  ((Mh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Cn.animationend.animation,
    delete Cn.animationiteration.animation,
    delete Cn.animationstart.animation),
  "TransitionEvent" in window || delete Cn.transitionend.transition);
function Hs(e) {
  if (jo[e]) return jo[e];
  if (!Cn[e]) return e;
  var t = Cn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Mh) return (jo[e] = t[n]);
  return e;
}
var Rh = Hs("animationend"),
  Ah = Hs("animationiteration"),
  Lh = Hs("animationstart"),
  Dh = Hs("transitionend"),
  Vh = new Map(),
  jc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Wt(e, t) {
  Vh.set(e, t), gn(t, [e]);
}
for (var No = 0; No < jc.length; No++) {
  var Co = jc[No],
    ky = Co.toLowerCase(),
    jy = Co[0].toUpperCase() + Co.slice(1);
  Wt(ky, "on" + jy);
}
Wt(Rh, "onAnimationEnd");
Wt(Ah, "onAnimationIteration");
Wt(Lh, "onAnimationStart");
Wt("dblclick", "onDoubleClick");
Wt("focusin", "onFocus");
Wt("focusout", "onBlur");
Wt(Dh, "onTransitionEnd");
Yn("onMouseEnter", ["mouseout", "mouseover"]);
Yn("onMouseLeave", ["mouseout", "mouseover"]);
Yn("onPointerEnter", ["pointerout", "pointerover"]);
Yn("onPointerLeave", ["pointerout", "pointerover"]);
gn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
gn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
gn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
gn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
gn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var jr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ny = new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));
function Nc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), kg(r, t, void 0, e), (e.currentTarget = null);
}
function _h(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          Nc(i, a, c), (s = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          Nc(i, a, c), (s = l);
        }
    }
  }
  if (ds) throw ((e = ga), (ds = !1), (ga = null), e);
}
function B(e, t) {
  var n = t[Ta];
  n === void 0 && (n = t[Ta] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ih(t, e, 2, !1), n.add(r));
}
function To(e, t, n) {
  var r = 0;
  t && (r |= 4), Ih(n, e, r, t);
}
var Li = "_reactListening" + Math.random().toString(36).slice(2);
function Gr(e) {
  if (!e[Li]) {
    (e[Li] = !0),
      Wf.forEach(function (n) {
        n !== "selectionchange" && (Ny.has(n) || To(n, !1, e), To(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Li] || ((t[Li] = !0), To("selectionchange", !1, t));
  }
}
function Ih(e, t, n, r) {
  switch (wh(t)) {
    case 1:
      var i = Fg;
      break;
    case 4:
      i = Og;
      break;
    default:
      i = Dl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ma ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Po(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = tn(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  oh(function () {
    var c = s,
      d = Ml(n),
      f = [];
    e: {
      var h = Vh.get(e);
      if (h !== void 0) {
        var y = _l,
          v = e;
        switch (e) {
          case "keypress":
            if (Qi(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = ey;
            break;
          case "focusin":
            (v = "focus"), (y = wo);
            break;
          case "focusout":
            (v = "blur"), (y = wo);
            break;
          case "beforeblur":
          case "afterblur":
            y = wo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = fc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Ug;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = ry;
            break;
          case Rh:
          case Ah:
          case Lh:
            y = Hg;
            break;
          case Dh:
            y = sy;
            break;
          case "scroll":
            y = zg;
            break;
          case "wheel":
            y = ay;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Gg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = pc;
        }
        var x = (t & 4) !== 0,
          k = !x && e === "scroll",
          m = x ? (h !== null ? h + "Capture" : null) : h;
        x = [];
        for (var p = c, g; p !== null; ) {
          g = p;
          var S = g.stateNode;
          if (
            (g.tag === 5 &&
              S !== null &&
              ((g = S),
              m !== null && ((S = Br(p, m)), S != null && x.push(Yr(p, S, g)))),
            k)
          )
            break;
          p = p.return;
        }
        0 < x.length &&
          ((h = new y(h, v, null, n, d)), f.push({ event: h, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          h &&
            n !== ha &&
            (v = n.relatedTarget || n.fromElement) &&
            (tn(v) || v[mt]))
        )
          break e;
        if (
          (y || h) &&
          ((h =
            d.window === d
              ? d
              : (h = d.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = c),
              (v = v ? tn(v) : null),
              v !== null &&
                ((k = yn(v)), v !== k || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = c)),
          y !== v)
        ) {
          if (
            ((x = fc),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = pc),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (k = y == null ? h : Tn(y)),
            (g = v == null ? h : Tn(v)),
            (h = new x(S, p + "leave", y, n, d)),
            (h.target = k),
            (h.relatedTarget = g),
            (S = null),
            tn(d) === c &&
              ((x = new x(m, p + "enter", v, n, d)),
              (x.target = g),
              (x.relatedTarget = k),
              (S = x)),
            (k = S),
            y && v)
          )
            t: {
              for (x = y, m = v, p = 0, g = x; g; g = wn(g)) p++;
              for (g = 0, S = m; S; S = wn(S)) g++;
              for (; 0 < p - g; ) (x = wn(x)), p--;
              for (; 0 < g - p; ) (m = wn(m)), g--;
              for (; p--; ) {
                if (x === m || (m !== null && x === m.alternate)) break t;
                (x = wn(x)), (m = wn(m));
              }
              x = null;
            }
          else x = null;
          y !== null && Cc(f, h, y, x, !1),
            v !== null && k !== null && Cc(f, k, v, x, !0);
        }
      }
      e: {
        if (
          ((h = c ? Tn(c) : window),
          (y = h.nodeName && h.nodeName.toLowerCase()),
          y === "select" || (y === "input" && h.type === "file"))
        )
          var j = py;
        else if (yc(h))
          if (Th) j = vy;
          else {
            j = gy;
            var C = my;
          }
        else
          (y = h.nodeName) &&
            y.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (j = yy);
        if (j && (j = j(e, c))) {
          Ch(f, j, n, d);
          break e;
        }
        C && C(e, h, c),
          e === "focusout" &&
            (C = h._wrapperState) &&
            C.controlled &&
            h.type === "number" &&
            la(h, "number", h.value);
      }
      switch (((C = c ? Tn(c) : window), e)) {
        case "focusin":
          (yc(C) || C.contentEditable === "true") &&
            ((Nn = C), (wa = c), (Er = null));
          break;
        case "focusout":
          Er = wa = Nn = null;
          break;
        case "mousedown":
          Sa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Sa = !1), kc(f, n, d);
          break;
        case "selectionchange":
          if (Sy) break;
        case "keydown":
        case "keyup":
          kc(f, n, d);
      }
      var P;
      if (Fl)
        e: {
          switch (e) {
            case "compositionstart":
              var N = "onCompositionStart";
              break e;
            case "compositionend":
              N = "onCompositionEnd";
              break e;
            case "compositionupdate":
              N = "onCompositionUpdate";
              break e;
          }
          N = void 0;
        }
      else
        jn
          ? jh(e, n) && (N = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N &&
        (kh &&
          n.locale !== "ko" &&
          (jn || N !== "onCompositionStart"
            ? N === "onCompositionEnd" && jn && (P = Sh())
            : ((bt = d),
              (Vl = "value" in bt ? bt.value : bt.textContent),
              (jn = !0))),
        (C = gs(c, N)),
        0 < C.length &&
          ((N = new hc(N, e, null, n, d)),
          f.push({ event: N, listeners: C }),
          P ? (N.data = P) : ((P = Nh(n)), P !== null && (N.data = P)))),
        (P = uy ? cy(e, n) : dy(e, n)) &&
          ((c = gs(c, "onBeforeInput")),
          0 < c.length &&
            ((d = new hc("onBeforeInput", "beforeinput", null, n, d)),
            f.push({ event: d, listeners: c }),
            (d.data = P)));
    }
    _h(f, t);
  });
}
function Yr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function gs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Br(e, n)),
      s != null && r.unshift(Yr(e, s, i)),
      (s = Br(e, t)),
      s != null && r.push(Yr(e, s, i))),
      (e = e.return);
  }
  return r;
}
function wn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Cc(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      i
        ? ((l = Br(n, s)), l != null && o.unshift(Yr(n, l, a)))
        : i || ((l = Br(n, s)), l != null && o.push(Yr(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Cy = /\r\n?/g,
  Ty = /\u0000|\uFFFD/g;
function Tc(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Cy,
      `
`
    )
    .replace(Ty, "");
}
function Di(e, t, n) {
  if (((t = Tc(t)), Tc(e) !== t && n)) throw Error(T(425));
}
function ys() {}
var ka = null,
  ja = null;
function Na(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ca = typeof setTimeout == "function" ? setTimeout : void 0,
  Py = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Pc = typeof Promise == "function" ? Promise : void 0,
  by =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Pc < "u"
      ? function (e) {
          return Pc.resolve(null).then(e).catch(Ey);
        }
      : Ca;
function Ey(e) {
  setTimeout(function () {
    throw e;
  });
}
function bo(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Wr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Wr(t);
}
function Dt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function bc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var sr = Math.random().toString(36).slice(2),
  rt = "__reactFiber$" + sr,
  Qr = "__reactProps$" + sr,
  mt = "__reactContainer$" + sr,
  Ta = "__reactEvents$" + sr,
  My = "__reactListeners$" + sr,
  Ry = "__reactHandles$" + sr;
function tn(e) {
  var t = e[rt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[mt] || n[rt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = bc(e); e !== null; ) {
          if ((n = e[rt])) return n;
          e = bc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function hi(e) {
  return (
    (e = e[rt] || e[mt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Tn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function Ks(e) {
  return e[Qr] || null;
}
var Pa = [],
  Pn = -1;
function Ht(e) {
  return { current: e };
}
function U(e) {
  0 > Pn || ((e.current = Pa[Pn]), (Pa[Pn] = null), Pn--);
}
function z(e, t) {
  Pn++, (Pa[Pn] = e.current), (e.current = t);
}
var Bt = {},
  ve = Ht(Bt),
  Pe = Ht(!1),
  dn = Bt;
function Qn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Bt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function be(e) {
  return (e = e.childContextTypes), e != null;
}
function vs() {
  U(Pe), U(ve);
}
function Ec(e, t, n) {
  if (ve.current !== Bt) throw Error(T(168));
  z(ve, t), z(Pe, n);
}
function Fh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(T(108, mg(e) || "Unknown", i));
  return Q({}, n, r);
}
function xs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Bt),
    (dn = ve.current),
    z(ve, e),
    z(Pe, Pe.current),
    !0
  );
}
function Mc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  n
    ? ((e = Fh(e, t, dn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      U(Pe),
      U(ve),
      z(ve, e))
    : U(Pe),
    z(Pe, n);
}
var ut = null,
  Gs = !1,
  Eo = !1;
function Oh(e) {
  ut === null ? (ut = [e]) : ut.push(e);
}
function Ay(e) {
  (Gs = !0), Oh(e);
}
function Kt() {
  if (!Eo && ut !== null) {
    Eo = !0;
    var e = 0,
      t = O;
    try {
      var n = ut;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ut = null), (Gs = !1);
    } catch (i) {
      throw (ut !== null && (ut = ut.slice(e + 1)), ch(Rl, Kt), i);
    } finally {
      (O = t), (Eo = !1);
    }
  }
  return null;
}
var bn = [],
  En = 0,
  ws = null,
  Ss = 0,
  Oe = [],
  ze = 0,
  fn = null,
  ct = 1,
  dt = "";
function qt(e, t) {
  (bn[En++] = Ss), (bn[En++] = ws), (ws = e), (Ss = t);
}
function zh(e, t, n) {
  (Oe[ze++] = ct), (Oe[ze++] = dt), (Oe[ze++] = fn), (fn = e);
  var r = ct;
  e = dt;
  var i = 32 - qe(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - qe(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (ct = (1 << (32 - qe(t) + i)) | (n << i) | r),
      (dt = s + e);
  } else (ct = (1 << s) | (n << i) | r), (dt = e);
}
function zl(e) {
  e.return !== null && (qt(e, 1), zh(e, 1, 0));
}
function Bl(e) {
  for (; e === ws; )
    (ws = bn[--En]), (bn[En] = null), (Ss = bn[--En]), (bn[En] = null);
  for (; e === fn; )
    (fn = Oe[--ze]),
      (Oe[ze] = null),
      (dt = Oe[--ze]),
      (Oe[ze] = null),
      (ct = Oe[--ze]),
      (Oe[ze] = null);
}
var Le = null,
  Ae = null,
  $ = !1,
  Ze = null;
function Bh(e, t) {
  var n = Be(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Rc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Le = e), (Ae = Dt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Le = e), (Ae = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = fn !== null ? { id: ct, overflow: dt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Be(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Le = e),
            (Ae = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ba(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ea(e) {
  if ($) {
    var t = Ae;
    if (t) {
      var n = t;
      if (!Rc(e, t)) {
        if (ba(e)) throw Error(T(418));
        t = Dt(n.nextSibling);
        var r = Le;
        t && Rc(e, t)
          ? Bh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), ($ = !1), (Le = e));
      }
    } else {
      if (ba(e)) throw Error(T(418));
      (e.flags = (e.flags & -4097) | 2), ($ = !1), (Le = e);
    }
  }
}
function Ac(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Le = e;
}
function Vi(e) {
  if (e !== Le) return !1;
  if (!$) return Ac(e), ($ = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Na(e.type, e.memoizedProps))),
    t && (t = Ae))
  ) {
    if (ba(e)) throw (Uh(), Error(T(418)));
    for (; t; ) Bh(e, t), (t = Dt(t.nextSibling));
  }
  if ((Ac(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ae = Dt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ae = null;
    }
  } else Ae = Le ? Dt(e.stateNode.nextSibling) : null;
  return !0;
}
function Uh() {
  for (var e = Ae; e; ) e = Dt(e.nextSibling);
}
function Xn() {
  (Ae = Le = null), ($ = !1);
}
function Ul(e) {
  Ze === null ? (Ze = [e]) : Ze.push(e);
}
var Ly = wt.ReactCurrentBatchConfig;
function gr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function _i(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Lc(e) {
  var t = e._init;
  return t(e._payload);
}
function $h(e) {
  function t(m, p) {
    if (e) {
      var g = m.deletions;
      g === null ? ((m.deletions = [p]), (m.flags |= 16)) : g.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function i(m, p) {
    return (m = Ft(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function s(m, p, g) {
    return (
      (m.index = g),
      e
        ? ((g = m.alternate),
          g !== null
            ? ((g = g.index), g < p ? ((m.flags |= 2), p) : g)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function o(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, p, g, S) {
    return p === null || p.tag !== 6
      ? ((p = _o(g, m.mode, S)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function l(m, p, g, S) {
    var j = g.type;
    return j === kn
      ? d(m, p, g.props.children, S, g.key)
      : p !== null &&
        (p.elementType === j ||
          (typeof j == "object" &&
            j !== null &&
            j.$$typeof === Nt &&
            Lc(j) === p.type))
      ? ((S = i(p, g.props)), (S.ref = gr(m, p, g)), (S.return = m), S)
      : ((S = ns(g.type, g.key, g.props, null, m.mode, S)),
        (S.ref = gr(m, p, g)),
        (S.return = m),
        S);
  }
  function c(m, p, g, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== g.containerInfo ||
      p.stateNode.implementation !== g.implementation
      ? ((p = Io(g, m.mode, S)), (p.return = m), p)
      : ((p = i(p, g.children || [])), (p.return = m), p);
  }
  function d(m, p, g, S, j) {
    return p === null || p.tag !== 7
      ? ((p = ln(g, m.mode, S, j)), (p.return = m), p)
      : ((p = i(p, g)), (p.return = m), p);
  }
  function f(m, p, g) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = _o("" + p, m.mode, g)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ci:
          return (
            (g = ns(p.type, p.key, p.props, null, m.mode, g)),
            (g.ref = gr(m, null, p)),
            (g.return = m),
            g
          );
        case Sn:
          return (p = Io(p, m.mode, g)), (p.return = m), p;
        case Nt:
          var S = p._init;
          return f(m, S(p._payload), g);
      }
      if (Sr(p) || dr(p))
        return (p = ln(p, m.mode, g, null)), (p.return = m), p;
      _i(m, p);
    }
    return null;
  }
  function h(m, p, g, S) {
    var j = p !== null ? p.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return j !== null ? null : a(m, p, "" + g, S);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Ci:
          return g.key === j ? l(m, p, g, S) : null;
        case Sn:
          return g.key === j ? c(m, p, g, S) : null;
        case Nt:
          return (j = g._init), h(m, p, j(g._payload), S);
      }
      if (Sr(g) || dr(g)) return j !== null ? null : d(m, p, g, S, null);
      _i(m, g);
    }
    return null;
  }
  function y(m, p, g, S, j) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (m = m.get(g) || null), a(p, m, "" + S, j);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Ci:
          return (m = m.get(S.key === null ? g : S.key) || null), l(p, m, S, j);
        case Sn:
          return (m = m.get(S.key === null ? g : S.key) || null), c(p, m, S, j);
        case Nt:
          var C = S._init;
          return y(m, p, g, C(S._payload), j);
      }
      if (Sr(S) || dr(S)) return (m = m.get(g) || null), d(p, m, S, j, null);
      _i(p, S);
    }
    return null;
  }
  function v(m, p, g, S) {
    for (
      var j = null, C = null, P = p, N = (p = 0), V = null;
      P !== null && N < g.length;
      N++
    ) {
      P.index > N ? ((V = P), (P = null)) : (V = P.sibling);
      var R = h(m, P, g[N], S);
      if (R === null) {
        P === null && (P = V);
        break;
      }
      e && P && R.alternate === null && t(m, P),
        (p = s(R, p, N)),
        C === null ? (j = R) : (C.sibling = R),
        (C = R),
        (P = V);
    }
    if (N === g.length) return n(m, P), $ && qt(m, N), j;
    if (P === null) {
      for (; N < g.length; N++)
        (P = f(m, g[N], S)),
          P !== null &&
            ((p = s(P, p, N)), C === null ? (j = P) : (C.sibling = P), (C = P));
      return $ && qt(m, N), j;
    }
    for (P = r(m, P); N < g.length; N++)
      (V = y(P, m, N, g[N], S)),
        V !== null &&
          (e && V.alternate !== null && P.delete(V.key === null ? N : V.key),
          (p = s(V, p, N)),
          C === null ? (j = V) : (C.sibling = V),
          (C = V));
    return (
      e &&
        P.forEach(function (te) {
          return t(m, te);
        }),
      $ && qt(m, N),
      j
    );
  }
  function x(m, p, g, S) {
    var j = dr(g);
    if (typeof j != "function") throw Error(T(150));
    if (((g = j.call(g)), g == null)) throw Error(T(151));
    for (
      var C = (j = null), P = p, N = (p = 0), V = null, R = g.next();
      P !== null && !R.done;
      N++, R = g.next()
    ) {
      P.index > N ? ((V = P), (P = null)) : (V = P.sibling);
      var te = h(m, P, R.value, S);
      if (te === null) {
        P === null && (P = V);
        break;
      }
      e && P && te.alternate === null && t(m, P),
        (p = s(te, p, N)),
        C === null ? (j = te) : (C.sibling = te),
        (C = te),
        (P = V);
    }
    if (R.done) return n(m, P), $ && qt(m, N), j;
    if (P === null) {
      for (; !R.done; N++, R = g.next())
        (R = f(m, R.value, S)),
          R !== null &&
            ((p = s(R, p, N)), C === null ? (j = R) : (C.sibling = R), (C = R));
      return $ && qt(m, N), j;
    }
    for (P = r(m, P); !R.done; N++, R = g.next())
      (R = y(P, m, N, R.value, S)),
        R !== null &&
          (e && R.alternate !== null && P.delete(R.key === null ? N : R.key),
          (p = s(R, p, N)),
          C === null ? (j = R) : (C.sibling = R),
          (C = R));
    return (
      e &&
        P.forEach(function (St) {
          return t(m, St);
        }),
      $ && qt(m, N),
      j
    );
  }
  function k(m, p, g, S) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === kn &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case Ci:
          e: {
            for (var j = g.key, C = p; C !== null; ) {
              if (C.key === j) {
                if (((j = g.type), j === kn)) {
                  if (C.tag === 7) {
                    n(m, C.sibling),
                      (p = i(C, g.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  C.elementType === j ||
                  (typeof j == "object" &&
                    j !== null &&
                    j.$$typeof === Nt &&
                    Lc(j) === C.type)
                ) {
                  n(m, C.sibling),
                    (p = i(C, g.props)),
                    (p.ref = gr(m, C, g)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, C);
                break;
              } else t(m, C);
              C = C.sibling;
            }
            g.type === kn
              ? ((p = ln(g.props.children, m.mode, S, g.key)),
                (p.return = m),
                (m = p))
              : ((S = ns(g.type, g.key, g.props, null, m.mode, S)),
                (S.ref = gr(m, p, g)),
                (S.return = m),
                (m = S));
          }
          return o(m);
        case Sn:
          e: {
            for (C = g.key; p !== null; ) {
              if (p.key === C)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === g.containerInfo &&
                  p.stateNode.implementation === g.implementation
                ) {
                  n(m, p.sibling),
                    (p = i(p, g.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = Io(g, m.mode, S)), (p.return = m), (m = p);
          }
          return o(m);
        case Nt:
          return (C = g._init), k(m, p, C(g._payload), S);
      }
      if (Sr(g)) return v(m, p, g, S);
      if (dr(g)) return x(m, p, g, S);
      _i(m, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, g)), (p.return = m), (m = p))
          : (n(m, p), (p = _o(g, m.mode, S)), (p.return = m), (m = p)),
        o(m))
      : n(m, p);
  }
  return k;
}
var Zn = $h(!0),
  Wh = $h(!1),
  ks = Ht(null),
  js = null,
  Mn = null,
  $l = null;
function Wl() {
  $l = Mn = js = null;
}
function Hl(e) {
  var t = ks.current;
  U(ks), (e._currentValue = t);
}
function Ma(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Un(e, t) {
  (js = e),
    ($l = Mn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ce = !0), (e.firstContext = null));
}
function He(e) {
  var t = e._currentValue;
  if ($l !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Mn === null)) {
      if (js === null) throw Error(T(308));
      (Mn = e), (js.dependencies = { lanes: 0, firstContext: e });
    } else Mn = Mn.next = e;
  return t;
}
var nn = null;
function Kl(e) {
  nn === null ? (nn = [e]) : nn.push(e);
}
function Hh(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Kl(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    gt(e, r)
  );
}
function gt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ct = !1;
function Gl(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Kh(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ht(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Vt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      gt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Kl(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    gt(e, n)
  );
}
function Xi(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Al(e, n);
  }
}
function Dc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ns(e, t, n, r) {
  var i = e.updateQueue;
  Ct = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      c = l.next;
    (l.next = null), o === null ? (s = c) : (o.next = c), (o = l);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== o &&
        (a === null ? (d.firstBaseUpdate = c) : (a.next = c),
        (d.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var f = i.baseState;
    (o = 0), (d = c = l = null), (a = s);
    do {
      var h = a.lane,
        y = a.eventTime;
      if ((r & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: y,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            x = a;
          switch (((h = t), (y = n), x.tag)) {
            case 1:
              if (((v = x.payload), typeof v == "function")) {
                f = v.call(y, f, h);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = x.payload),
                (h = typeof v == "function" ? v.call(y, f, h) : v),
                h == null)
              )
                break e;
              f = Q({}, f, h);
              break e;
            case 2:
              Ct = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [a]) : h.push(a));
      } else
        (y = {
          eventTime: y,
          lane: h,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((c = d = y), (l = f)) : (d = d.next = y),
          (o |= h);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (h = a),
          (a = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = d),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (pn |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function Vc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(T(191, i));
        i.call(r);
      }
    }
}
var pi = {},
  st = Ht(pi),
  Xr = Ht(pi),
  Zr = Ht(pi);
function rn(e) {
  if (e === pi) throw Error(T(174));
  return e;
}
function Yl(e, t) {
  switch ((z(Zr, t), z(Xr, e), z(st, pi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ca(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ca(t, e));
  }
  U(st), z(st, t);
}
function qn() {
  U(st), U(Xr), U(Zr);
}
function Gh(e) {
  rn(Zr.current);
  var t = rn(st.current),
    n = ca(t, e.type);
  t !== n && (z(Xr, e), z(st, n));
}
function Ql(e) {
  Xr.current === e && (U(st), U(Xr));
}
var K = Ht(0);
function Cs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Mo = [];
function Xl() {
  for (var e = 0; e < Mo.length; e++)
    Mo[e]._workInProgressVersionPrimary = null;
  Mo.length = 0;
}
var Zi = wt.ReactCurrentDispatcher,
  Ro = wt.ReactCurrentBatchConfig,
  hn = 0,
  Y = null,
  se = null,
  le = null,
  Ts = !1,
  Mr = !1,
  qr = 0,
  Dy = 0;
function pe() {
  throw Error(T(321));
}
function Zl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!et(e[n], t[n])) return !1;
  return !0;
}
function ql(e, t, n, r, i, s) {
  if (
    ((hn = s),
    (Y = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Zi.current = e === null || e.memoizedState === null ? Fy : Oy),
    (e = n(r, i)),
    Mr)
  ) {
    s = 0;
    do {
      if (((Mr = !1), (qr = 0), 25 <= s)) throw Error(T(301));
      (s += 1),
        (le = se = null),
        (t.updateQueue = null),
        (Zi.current = zy),
        (e = n(r, i));
    } while (Mr);
  }
  if (
    ((Zi.current = Ps),
    (t = se !== null && se.next !== null),
    (hn = 0),
    (le = se = Y = null),
    (Ts = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function Jl() {
  var e = qr !== 0;
  return (qr = 0), e;
}
function nt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return le === null ? (Y.memoizedState = le = e) : (le = le.next = e), le;
}
function Ke() {
  if (se === null) {
    var e = Y.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = le === null ? Y.memoizedState : le.next;
  if (t !== null) (le = t), (se = e);
  else {
    if (e === null) throw Error(T(310));
    (se = e),
      (e = {
        memoizedState: se.memoizedState,
        baseState: se.baseState,
        baseQueue: se.baseQueue,
        queue: se.queue,
        next: null,
      }),
      le === null ? (Y.memoizedState = le = e) : (le = le.next = e);
  }
  return le;
}
function Jr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ao(e) {
  var t = Ke(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = se,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      c = s;
    do {
      var d = c.lane;
      if ((hn & d) === d)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (o = r)) : (l = l.next = f),
          (Y.lanes |= d),
          (pn |= d);
      }
      c = c.next;
    } while (c !== null && c !== s);
    l === null ? (o = r) : (l.next = a),
      et(r, t.memoizedState) || (Ce = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (Y.lanes |= s), (pn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Lo(e) {
  var t = Ke(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    et(s, t.memoizedState) || (Ce = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Yh() {}
function Qh(e, t) {
  var n = Y,
    r = Ke(),
    i = t(),
    s = !et(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Ce = !0)),
    (r = r.queue),
    eu(qh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ei(9, Zh.bind(null, n, r, i, t), void 0, null),
      ue === null)
    )
      throw Error(T(349));
    hn & 30 || Xh(n, t, i);
  }
  return i;
}
function Xh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Zh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Jh(t) && ep(e);
}
function qh(e, t, n) {
  return n(function () {
    Jh(t) && ep(e);
  });
}
function Jh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !et(e, n);
  } catch {
    return !0;
  }
}
function ep(e) {
  var t = gt(e, 1);
  t !== null && Je(t, e, 1, -1);
}
function _c(e) {
  var t = nt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Jr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Iy.bind(null, Y, e)),
    [t.memoizedState, e]
  );
}
function ei(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Y.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Y.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function tp() {
  return Ke().memoizedState;
}
function qi(e, t, n, r) {
  var i = nt();
  (Y.flags |= e),
    (i.memoizedState = ei(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ys(e, t, n, r) {
  var i = Ke();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (se !== null) {
    var o = se.memoizedState;
    if (((s = o.destroy), r !== null && Zl(r, o.deps))) {
      i.memoizedState = ei(t, n, s, r);
      return;
    }
  }
  (Y.flags |= e), (i.memoizedState = ei(1 | t, n, s, r));
}
function Ic(e, t) {
  return qi(8390656, 8, e, t);
}
function eu(e, t) {
  return Ys(2048, 8, e, t);
}
function np(e, t) {
  return Ys(4, 2, e, t);
}
function rp(e, t) {
  return Ys(4, 4, e, t);
}
function ip(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function sp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ys(4, 4, ip.bind(null, t, e), n)
  );
}
function tu() {}
function op(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ap(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function lp(e, t, n) {
  return hn & 21
    ? (et(n, t) || ((n = hh()), (Y.lanes |= n), (pn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ce = !0)), (e.memoizedState = n));
}
function Vy(e, t) {
  var n = O;
  (O = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ro.transition;
  Ro.transition = {};
  try {
    e(!1), t();
  } finally {
    (O = n), (Ro.transition = r);
  }
}
function up() {
  return Ke().memoizedState;
}
function _y(e, t, n) {
  var r = It(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    cp(e))
  )
    dp(t, n);
  else if (((n = Hh(e, t, n, r)), n !== null)) {
    var i = Se();
    Je(n, e, r, i), fp(n, t, r);
  }
}
function Iy(e, t, n) {
  var r = It(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (cp(e)) dp(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), et(a, o))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Kl(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Hh(e, t, i, r)),
      n !== null && ((i = Se()), Je(n, e, r, i), fp(n, t, r));
  }
}
function cp(e) {
  var t = e.alternate;
  return e === Y || (t !== null && t === Y);
}
function dp(e, t) {
  Mr = Ts = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function fp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Al(e, n);
  }
}
var Ps = {
    readContext: He,
    useCallback: pe,
    useContext: pe,
    useEffect: pe,
    useImperativeHandle: pe,
    useInsertionEffect: pe,
    useLayoutEffect: pe,
    useMemo: pe,
    useReducer: pe,
    useRef: pe,
    useState: pe,
    useDebugValue: pe,
    useDeferredValue: pe,
    useTransition: pe,
    useMutableSource: pe,
    useSyncExternalStore: pe,
    useId: pe,
    unstable_isNewReconciler: !1,
  },
  Fy = {
    readContext: He,
    useCallback: function (e, t) {
      return (nt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: He,
    useEffect: Ic,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        qi(4194308, 4, ip.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return qi(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return qi(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = nt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = nt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = _y.bind(null, Y, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = nt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: _c,
    useDebugValue: tu,
    useDeferredValue: function (e) {
      return (nt().memoizedState = e);
    },
    useTransition: function () {
      var e = _c(!1),
        t = e[0];
      return (e = Vy.bind(null, e[1])), (nt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Y,
        i = nt();
      if ($) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), ue === null)) throw Error(T(349));
        hn & 30 || Xh(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Ic(qh.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        ei(9, Zh.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = nt(),
        t = ue.identifierPrefix;
      if ($) {
        var n = dt,
          r = ct;
        (n = (r & ~(1 << (32 - qe(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = qr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Dy++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Oy = {
    readContext: He,
    useCallback: op,
    useContext: He,
    useEffect: eu,
    useImperativeHandle: sp,
    useInsertionEffect: np,
    useLayoutEffect: rp,
    useMemo: ap,
    useReducer: Ao,
    useRef: tp,
    useState: function () {
      return Ao(Jr);
    },
    useDebugValue: tu,
    useDeferredValue: function (e) {
      var t = Ke();
      return lp(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = Ao(Jr)[0],
        t = Ke().memoizedState;
      return [e, t];
    },
    useMutableSource: Yh,
    useSyncExternalStore: Qh,
    useId: up,
    unstable_isNewReconciler: !1,
  },
  zy = {
    readContext: He,
    useCallback: op,
    useContext: He,
    useEffect: eu,
    useImperativeHandle: sp,
    useInsertionEffect: np,
    useLayoutEffect: rp,
    useMemo: ap,
    useReducer: Lo,
    useRef: tp,
    useState: function () {
      return Lo(Jr);
    },
    useDebugValue: tu,
    useDeferredValue: function (e) {
      var t = Ke();
      return se === null ? (t.memoizedState = e) : lp(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = Lo(Jr)[0],
        t = Ke().memoizedState;
      return [e, t];
    },
    useMutableSource: Yh,
    useSyncExternalStore: Qh,
    useId: up,
    unstable_isNewReconciler: !1,
  };
function Qe(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ra(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Qs = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? yn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      i = It(e),
      s = ht(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = Vt(e, s, i)),
      t !== null && (Je(t, e, i, r), Xi(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Se(),
      i = It(e),
      s = ht(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = Vt(e, s, i)),
      t !== null && (Je(t, e, i, r), Xi(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Se(),
      r = It(e),
      i = ht(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Vt(e, i, r)),
      t !== null && (Je(t, e, r, n), Xi(t, e, r));
  },
};
function Fc(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Kr(n, r) || !Kr(i, s)
      : !0
  );
}
function hp(e, t, n) {
  var r = !1,
    i = Bt,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = He(s))
      : ((i = be(t) ? dn : ve.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Qn(e, i) : Bt)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Qs),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Oc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Qs.enqueueReplaceState(t, t.state, null);
}
function Aa(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Gl(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = He(s))
    : ((s = be(t) ? dn : ve.current), (i.context = Qn(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Ra(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Qs.enqueueReplaceState(i, i.state, null),
      Ns(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Jn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += pg(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Do(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function La(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var By = typeof WeakMap == "function" ? WeakMap : Map;
function pp(e, t, n) {
  (n = ht(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Es || ((Es = !0), ($a = r)), La(e, t);
    }),
    n
  );
}
function mp(e, t, n) {
  (n = ht(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        La(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        La(e, t),
          typeof r != "function" &&
            (_t === null ? (_t = new Set([this])) : _t.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function zc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new By();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = tv.bind(null, e, t, n)), t.then(e, e));
}
function Bc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Uc(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ht(-1, 1)), (t.tag = 2), Vt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Uy = wt.ReactCurrentOwner,
  Ce = !1;
function xe(e, t, n, r) {
  t.child = e === null ? Wh(t, null, n, r) : Zn(t, e.child, n, r);
}
function $c(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Un(t, i),
    (r = ql(e, t, n, r, s, i)),
    (n = Jl()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        yt(e, t, i))
      : ($ && n && zl(t), (t.flags |= 1), xe(e, t, r, i), t.child)
  );
}
function Wc(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !uu(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), gp(e, t, s, r, i))
      : ((e = ns(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Kr), n(o, r) && e.ref === t.ref)
    )
      return yt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Ft(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function gp(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Kr(s, r) && e.ref === t.ref)
      if (((Ce = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ce = !0);
      else return (t.lanes = e.lanes), yt(e, t, i);
  }
  return Da(e, t, n, r, i);
}
function yp(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        z(An, Me),
        (Me |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          z(An, Me),
          (Me |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        z(An, Me),
        (Me |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      z(An, Me),
      (Me |= r);
  return xe(e, t, i, n), t.child;
}
function vp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Da(e, t, n, r, i) {
  var s = be(n) ? dn : ve.current;
  return (
    (s = Qn(t, s)),
    Un(t, i),
    (n = ql(e, t, n, r, s, i)),
    (r = Jl()),
    e !== null && !Ce
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        yt(e, t, i))
      : ($ && r && zl(t), (t.flags |= 1), xe(e, t, n, i), t.child)
  );
}
function Hc(e, t, n, r, i) {
  if (be(n)) {
    var s = !0;
    xs(t);
  } else s = !1;
  if ((Un(t, i), t.stateNode === null))
    Ji(e, t), hp(t, n, r), Aa(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = He(c))
      : ((c = be(n) ? dn : ve.current), (c = Qn(t, c)));
    var d = n.getDerivedStateFromProps,
      f =
        typeof d == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== c) && Oc(t, o, r, c)),
      (Ct = !1);
    var h = t.memoizedState;
    (o.state = h),
      Ns(t, r, o, i),
      (l = t.memoizedState),
      a !== r || h !== l || Pe.current || Ct
        ? (typeof d == "function" && (Ra(t, n, d, r), (l = t.memoizedState)),
          (a = Ct || Fc(t, n, a, r, h, l, c))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = c),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Kh(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : Qe(t.type, a)),
      (o.props = c),
      (f = t.pendingProps),
      (h = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = He(l))
        : ((l = be(n) ? dn : ve.current), (l = Qn(t, l)));
    var y = n.getDerivedStateFromProps;
    (d =
      typeof y == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== f || h !== l) && Oc(t, o, r, l)),
      (Ct = !1),
      (h = t.memoizedState),
      (o.state = h),
      Ns(t, r, o, i);
    var v = t.memoizedState;
    a !== f || h !== v || Pe.current || Ct
      ? (typeof y == "function" && (Ra(t, n, y, r), (v = t.memoizedState)),
        (c = Ct || Fc(t, n, c, r, h, v, l) || !1)
          ? (d ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = l),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Va(e, t, n, r, s, i);
}
function Va(e, t, n, r, i, s) {
  vp(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Mc(t, n, !1), yt(e, t, s);
  (r = t.stateNode), (Uy.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Zn(t, e.child, null, s)), (t.child = Zn(t, null, a, s)))
      : xe(e, t, a, s),
    (t.memoizedState = r.state),
    i && Mc(t, n, !0),
    t.child
  );
}
function xp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ec(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ec(e, t.context, !1),
    Yl(e, t.containerInfo);
}
function Kc(e, t, n, r, i) {
  return Xn(), Ul(i), (t.flags |= 256), xe(e, t, n, r), t.child;
}
var _a = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ia(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function wp(e, t, n) {
  var r = t.pendingProps,
    i = K.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    z(K, i & 1),
    e === null)
  )
    return (
      Ea(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = qs(o, r, 0, null)),
              (e = ln(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Ia(n)),
              (t.memoizedState = _a),
              e)
            : nu(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return $y(e, t, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Ft(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = Ft(a, s)) : ((s = ln(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ia(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = _a),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Ft(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function nu(e, t) {
  return (
    (t = qs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ii(e, t, n, r) {
  return (
    r !== null && Ul(r),
    Zn(t, e.child, null, n),
    (e = nu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function $y(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Do(Error(T(422)))), Ii(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = qs({ mode: "visible", children: r.children }, i, 0, null)),
        (s = ln(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Zn(t, e.child, null, o),
        (t.child.memoizedState = Ia(o)),
        (t.memoizedState = _a),
        s);
  if (!(t.mode & 1)) return Ii(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(T(419))), (r = Do(s, r, void 0)), Ii(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), Ce || a)) {
    if (((r = ue), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), gt(e, i), Je(r, e, i, -1));
    }
    return lu(), (r = Do(Error(T(421)))), Ii(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = nv.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Ae = Dt(i.nextSibling)),
      (Le = t),
      ($ = !0),
      (Ze = null),
      e !== null &&
        ((Oe[ze++] = ct),
        (Oe[ze++] = dt),
        (Oe[ze++] = fn),
        (ct = e.id),
        (dt = e.overflow),
        (fn = t)),
      (t = nu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Gc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ma(e.return, t, n);
}
function Vo(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Sp(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((xe(e, t, r.children, n), (r = K.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Gc(e, n, t);
        else if (e.tag === 19) Gc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((z(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Cs(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Vo(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Cs(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Vo(t, !0, n, null, s);
        break;
      case "together":
        Vo(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ji(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function yt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (pn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ft(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ft(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Wy(e, t, n) {
  switch (t.tag) {
    case 3:
      xp(t), Xn();
      break;
    case 5:
      Gh(t);
      break;
    case 1:
      be(t.type) && xs(t);
      break;
    case 4:
      Yl(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      z(ks, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (z(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? wp(e, t, n)
          : (z(K, K.current & 1),
            (e = yt(e, t, n)),
            e !== null ? e.sibling : null);
      z(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Sp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        z(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), yp(e, t, n);
  }
  return yt(e, t, n);
}
var kp, Fa, jp, Np;
kp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Fa = function () {};
jp = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), rn(st.current);
    var s = null;
    switch (n) {
      case "input":
        (i = oa(e, i)), (r = oa(e, r)), (s = []);
        break;
      case "select":
        (i = Q({}, i, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = ua(e, i)), (r = ua(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ys);
    }
    da(n, r);
    var o;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Or.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(c, n)), (n = l);
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(c, l))
            : c === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(c, "" + l)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Or.hasOwnProperty(c)
                ? (l != null && c === "onScroll" && B("scroll", e),
                  s || a === l || (s = []))
                : (s = s || []).push(c, l));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Np = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yr(e, t) {
  if (!$)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Hy(e, t, n) {
  var r = t.pendingProps;
  switch ((Bl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return me(t), null;
    case 1:
      return be(t.type) && vs(), me(t), null;
    case 3:
      return (
        (r = t.stateNode),
        qn(),
        U(Pe),
        U(ve),
        Xl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Vi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ze !== null && (Ka(Ze), (Ze = null)))),
        Fa(e, t),
        me(t),
        null
      );
    case 5:
      Ql(t);
      var i = rn(Zr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        jp(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return me(t), null;
        }
        if (((e = rn(st.current)), Vi(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[rt] = t), (r[Qr] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < jr.length; i++) B(jr[i], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", r), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              nc(r, s), B("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                B("invalid", r);
              break;
            case "textarea":
              ic(r, s), B("invalid", r);
          }
          da(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Di(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      Di(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Or.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  B("scroll", r);
            }
          switch (n) {
            case "input":
              Ti(r), rc(r, s, !0);
              break;
            case "textarea":
              Ti(r), sc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = ys);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = qf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[rt] = t),
            (e[Qr] = r),
            kp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = fa(n, r)), n)) {
              case "dialog":
                B("cancel", e), B("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < jr.length; i++) B(jr[i], e);
                i = r;
                break;
              case "source":
                B("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                B("error", e), B("load", e), (i = r);
                break;
              case "details":
                B("toggle", e), (i = r);
                break;
              case "input":
                nc(e, r), (i = oa(e, r)), B("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Q({}, r, { value: void 0 })),
                  B("invalid", e);
                break;
              case "textarea":
                ic(e, r), (i = ua(e, r)), B("invalid", e);
                break;
              default:
                i = r;
            }
            da(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? th(e, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Jf(e, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && zr(e, l)
                    : typeof l == "number" && zr(e, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Or.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && B("scroll", e)
                      : l != null && Tl(e, s, l, o));
              }
            switch (n) {
              case "input":
                Ti(e), rc(e, r, !1);
                break;
              case "textarea":
                Ti(e), sc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + zt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Fn(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Fn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ys);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return me(t), null;
    case 6:
      if (e && t.stateNode != null) Np(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = rn(Zr.current)), rn(st.current), Vi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[rt] = t),
            (s = r.nodeValue !== n) && ((e = Le), e !== null))
          )
            switch (e.tag) {
              case 3:
                Di(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Di(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[rt] = t),
            (t.stateNode = r);
      }
      return me(t), null;
    case 13:
      if (
        (U(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if ($ && Ae !== null && t.mode & 1 && !(t.flags & 128))
          Uh(), Xn(), (t.flags |= 98560), (s = !1);
        else if (((s = Vi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(T(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(T(317));
            s[rt] = t;
          } else
            Xn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          me(t), (s = !1);
        } else Ze !== null && (Ka(Ze), (Ze = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? oe === 0 && (oe = 3) : lu())),
          t.updateQueue !== null && (t.flags |= 4),
          me(t),
          null);
    case 4:
      return (
        qn(), Fa(e, t), e === null && Gr(t.stateNode.containerInfo), me(t), null
      );
    case 10:
      return Hl(t.type._context), me(t), null;
    case 17:
      return be(t.type) && vs(), me(t), null;
    case 19:
      if ((U(K), (s = t.memoizedState), s === null)) return me(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) yr(s, !1);
        else {
          if (oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Cs(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    yr(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return z(K, (K.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            ee() > er &&
            ((t.flags |= 128), (r = !0), yr(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Cs(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yr(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !$)
            )
              return me(t), null;
          } else
            2 * ee() - s.renderingStartTime > er &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yr(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = ee()),
          (t.sibling = null),
          (n = K.current),
          z(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (me(t), null);
    case 22:
    case 23:
      return (
        au(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Me & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : me(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function Ky(e, t) {
  switch ((Bl(t), t.tag)) {
    case 1:
      return (
        be(t.type) && vs(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        qn(),
        U(Pe),
        U(ve),
        Xl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ql(t), null;
    case 13:
      if ((U(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(T(340));
        Xn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return U(K), null;
    case 4:
      return qn(), null;
    case 10:
      return Hl(t.type._context), null;
    case 22:
    case 23:
      return au(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Fi = !1,
  ge = !1,
  Gy = typeof WeakSet == "function" ? WeakSet : Set,
  M = null;
function Rn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Z(e, t, r);
      }
    else n.current = null;
}
function Oa(e, t, n) {
  try {
    n();
  } catch (r) {
    Z(e, t, r);
  }
}
var Yc = !1;
function Yy(e, t) {
  if (((ka = ps), (e = Eh()), Ol(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            c = 0,
            d = 0,
            f = e,
            h = null;
          t: for (;;) {
            for (
              var y;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                f !== s || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (y = f.firstChild) !== null;

            )
              (h = f), (f = y);
            for (;;) {
              if (f === e) break t;
              if (
                (h === n && ++c === i && (a = o),
                h === s && ++d === r && (l = o),
                (y = f.nextSibling) !== null)
              )
                break;
              (f = h), (h = f.parentNode);
            }
            f = y;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ja = { focusedElem: e, selectionRange: n }, ps = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var x = v.memoizedProps,
                    k = v.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Qe(t.type, x),
                      k
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (S) {
          Z(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (v = Yc), (Yc = !1), v;
}
function Rr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && Oa(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Xs(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function za(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Cp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Cp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[rt], delete t[Qr], delete t[Ta], delete t[My], delete t[Ry])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Tp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Qc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Tp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ba(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ys));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ba(e, t, n), e = e.sibling; e !== null; ) Ba(e, t, n), (e = e.sibling);
}
function Ua(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ua(e, t, n), e = e.sibling; e !== null; ) Ua(e, t, n), (e = e.sibling);
}
var ce = null,
  Xe = !1;
function kt(e, t, n) {
  for (n = n.child; n !== null; ) Pp(e, t, n), (n = n.sibling);
}
function Pp(e, t, n) {
  if (it && typeof it.onCommitFiberUnmount == "function")
    try {
      it.onCommitFiberUnmount(Us, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ge || Rn(n, t);
    case 6:
      var r = ce,
        i = Xe;
      (ce = null),
        kt(e, t, n),
        (ce = r),
        (Xe = i),
        ce !== null &&
          (Xe
            ? ((e = ce),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ce.removeChild(n.stateNode));
      break;
    case 18:
      ce !== null &&
        (Xe
          ? ((e = ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? bo(e.parentNode, n)
              : e.nodeType === 1 && bo(e, n),
            Wr(e))
          : bo(ce, n.stateNode));
      break;
    case 4:
      (r = ce),
        (i = Xe),
        (ce = n.stateNode.containerInfo),
        (Xe = !0),
        kt(e, t, n),
        (ce = r),
        (Xe = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ge &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && Oa(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      kt(e, t, n);
      break;
    case 1:
      if (
        !ge &&
        (Rn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Z(n, t, a);
        }
      kt(e, t, n);
      break;
    case 21:
      kt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ge = (r = ge) || n.memoizedState !== null), kt(e, t, n), (ge = r))
        : kt(e, t, n);
      break;
    default:
      kt(e, t, n);
  }
}
function Xc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Gy()),
      t.forEach(function (r) {
        var i = rv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ge(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ce = a.stateNode), (Xe = !1);
              break e;
            case 3:
              (ce = a.stateNode.containerInfo), (Xe = !0);
              break e;
            case 4:
              (ce = a.stateNode.containerInfo), (Xe = !0);
              break e;
          }
          a = a.return;
        }
        if (ce === null) throw Error(T(160));
        Pp(s, o, i), (ce = null), (Xe = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (c) {
        Z(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) bp(t, e), (t = t.sibling);
}
function bp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ge(t, e), tt(e), r & 4)) {
        try {
          Rr(3, e, e.return), Xs(3, e);
        } catch (x) {
          Z(e, e.return, x);
        }
        try {
          Rr(5, e, e.return);
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      break;
    case 1:
      Ge(t, e), tt(e), r & 512 && n !== null && Rn(n, n.return);
      break;
    case 5:
      if (
        (Ge(t, e),
        tt(e),
        r & 512 && n !== null && Rn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          zr(i, "");
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && Xf(i, s),
              fa(a, o);
            var c = fa(a, s);
            for (o = 0; o < l.length; o += 2) {
              var d = l[o],
                f = l[o + 1];
              d === "style"
                ? th(i, f)
                : d === "dangerouslySetInnerHTML"
                ? Jf(i, f)
                : d === "children"
                ? zr(i, f)
                : Tl(i, d, f, c);
            }
            switch (a) {
              case "input":
                aa(i, s);
                break;
              case "textarea":
                Zf(i, s);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var y = s.value;
                y != null
                  ? Fn(i, !!s.multiple, y, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Fn(i, !!s.multiple, s.defaultValue, !0)
                      : Fn(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Qr] = s;
          } catch (x) {
            Z(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((Ge(t, e), tt(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (x) {
          Z(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (Ge(t, e), tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Wr(t.containerInfo);
        } catch (x) {
          Z(e, e.return, x);
        }
      break;
    case 4:
      Ge(t, e), tt(e);
      break;
    case 13:
      Ge(t, e),
        tt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (su = ee())),
        r & 4 && Xc(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ge = (c = ge) || d), Ge(t, e), (ge = c)) : Ge(t, e),
        tt(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !d && e.mode & 1)
        )
          for (M = e, d = e.child; d !== null; ) {
            for (f = M = d; M !== null; ) {
              switch (((h = M), (y = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Rr(4, h, h.return);
                  break;
                case 1:
                  Rn(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (x) {
                      Z(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Rn(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    qc(f);
                    continue;
                  }
              }
              y !== null ? ((y.return = h), (M = y)) : qc(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = e; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (i = f.stateNode),
                  c
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = eh("display", o)));
              } catch (x) {
                Z(e, e.return, x);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (x) {
                Z(e, e.return, x);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Ge(t, e), tt(e), r & 4 && Xc(e);
      break;
    case 21:
      break;
    default:
      Ge(t, e), tt(e);
  }
}
function tt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Tp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (zr(i, ""), (r.flags &= -33));
          var s = Qc(e);
          Ua(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = Qc(e);
          Ba(e, a, o);
          break;
        default:
          throw Error(T(161));
      }
    } catch (l) {
      Z(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Qy(e, t, n) {
  (M = e), Ep(e);
}
function Ep(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var i = M,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Fi;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || ge;
        a = Fi;
        var c = ge;
        if (((Fi = o), (ge = l) && !c))
          for (M = i; M !== null; )
            (o = M),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Jc(i)
                : l !== null
                ? ((l.return = o), (M = l))
                : Jc(i);
        for (; s !== null; ) (M = s), Ep(s), (s = s.sibling);
        (M = i), (Fi = a), (ge = c);
      }
      Zc(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (M = s)) : Zc(e);
  }
}
function Zc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ge || Xs(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ge)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Qe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && Vc(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Vc(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && Wr(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(T(163));
          }
        ge || (t.flags & 512 && za(t));
      } catch (h) {
        Z(t, t.return, h);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function qc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Jc(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Xs(4, t);
          } catch (l) {
            Z(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Z(t, i, l);
            }
          }
          var s = t.return;
          try {
            za(t);
          } catch (l) {
            Z(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            za(t);
          } catch (l) {
            Z(t, o, l);
          }
      }
    } catch (l) {
      Z(t, t.return, l);
    }
    if (t === e) {
      M = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (M = a);
      break;
    }
    M = t.return;
  }
}
var Xy = Math.ceil,
  bs = wt.ReactCurrentDispatcher,
  ru = wt.ReactCurrentOwner,
  $e = wt.ReactCurrentBatchConfig,
  F = 0,
  ue = null,
  re = null,
  fe = 0,
  Me = 0,
  An = Ht(0),
  oe = 0,
  ti = null,
  pn = 0,
  Zs = 0,
  iu = 0,
  Ar = null,
  Ne = null,
  su = 0,
  er = 1 / 0,
  lt = null,
  Es = !1,
  $a = null,
  _t = null,
  Oi = !1,
  Et = null,
  Ms = 0,
  Lr = 0,
  Wa = null,
  es = -1,
  ts = 0;
function Se() {
  return F & 6 ? ee() : es !== -1 ? es : (es = ee());
}
function It(e) {
  return e.mode & 1
    ? F & 2 && fe !== 0
      ? fe & -fe
      : Ly.transition !== null
      ? (ts === 0 && (ts = hh()), ts)
      : ((e = O),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : wh(e.type))),
        e)
    : 1;
}
function Je(e, t, n, r) {
  if (50 < Lr) throw ((Lr = 0), (Wa = null), Error(T(185)));
  di(e, n, r),
    (!(F & 2) || e !== ue) &&
      (e === ue && (!(F & 2) && (Zs |= n), oe === 4 && Pt(e, fe)),
      Ee(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((er = ee() + 500), Gs && Kt()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  Lg(e, t);
  var r = hs(e, e === ue ? fe : 0);
  if (r === 0)
    n !== null && lc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && lc(n), t === 1))
      e.tag === 0 ? Ay(ed.bind(null, e)) : Oh(ed.bind(null, e)),
        by(function () {
          !(F & 6) && Kt();
        }),
        (n = null);
    else {
      switch (ph(r)) {
        case 1:
          n = Rl;
          break;
        case 4:
          n = dh;
          break;
        case 16:
          n = fs;
          break;
        case 536870912:
          n = fh;
          break;
        default:
          n = fs;
      }
      n = Ip(n, Mp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Mp(e, t) {
  if (((es = -1), (ts = 0), F & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if ($n() && e.callbackNode !== n) return null;
  var r = hs(e, e === ue ? fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Rs(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var s = Ap();
    (ue !== e || fe !== t) && ((lt = null), (er = ee() + 500), an(e, t));
    do
      try {
        Jy();
        break;
      } catch (a) {
        Rp(e, a);
      }
    while (!0);
    Wl(),
      (bs.current = s),
      (F = i),
      re !== null ? (t = 0) : ((ue = null), (fe = 0), (t = oe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ya(e)), i !== 0 && ((r = i), (t = Ha(e, i)))), t === 1)
    )
      throw ((n = ti), an(e, 0), Pt(e, r), Ee(e, ee()), n);
    if (t === 6) Pt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Zy(i) &&
          ((t = Rs(e, r)),
          t === 2 && ((s = ya(e)), s !== 0 && ((r = s), (t = Ha(e, s)))),
          t === 1))
      )
        throw ((n = ti), an(e, 0), Pt(e, r), Ee(e, ee()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          Jt(e, Ne, lt);
          break;
        case 3:
          if (
            (Pt(e, r), (r & 130023424) === r && ((t = su + 500 - ee()), 10 < t))
          ) {
            if (hs(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Se(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Ca(Jt.bind(null, e, Ne, lt), t);
            break;
          }
          Jt(e, Ne, lt);
          break;
        case 4:
          if ((Pt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - qe(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Xy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ca(Jt.bind(null, e, Ne, lt), r);
            break;
          }
          Jt(e, Ne, lt);
          break;
        case 5:
          Jt(e, Ne, lt);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return Ee(e, ee()), e.callbackNode === n ? Mp.bind(null, e) : null;
}
function Ha(e, t) {
  var n = Ar;
  return (
    e.current.memoizedState.isDehydrated && (an(e, t).flags |= 256),
    (e = Rs(e, t)),
    e !== 2 && ((t = Ne), (Ne = n), t !== null && Ka(t)),
    e
  );
}
function Ka(e) {
  Ne === null ? (Ne = e) : Ne.push.apply(Ne, e);
}
function Zy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!et(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Pt(e, t) {
  for (
    t &= ~iu,
      t &= ~Zs,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - qe(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ed(e) {
  if (F & 6) throw Error(T(327));
  $n();
  var t = hs(e, 0);
  if (!(t & 1)) return Ee(e, ee()), null;
  var n = Rs(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ya(e);
    r !== 0 && ((t = r), (n = Ha(e, r)));
  }
  if (n === 1) throw ((n = ti), an(e, 0), Pt(e, t), Ee(e, ee()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Jt(e, Ne, lt),
    Ee(e, ee()),
    null
  );
}
function ou(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((er = ee() + 500), Gs && Kt());
  }
}
function mn(e) {
  Et !== null && Et.tag === 0 && !(F & 6) && $n();
  var t = F;
  F |= 1;
  var n = $e.transition,
    r = O;
  try {
    if ((($e.transition = null), (O = 1), e)) return e();
  } finally {
    (O = r), ($e.transition = n), (F = t), !(F & 6) && Kt();
  }
}
function au() {
  (Me = An.current), U(An);
}
function an(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Py(n)), re !== null))
    for (n = re.return; n !== null; ) {
      var r = n;
      switch ((Bl(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && vs();
          break;
        case 3:
          qn(), U(Pe), U(ve), Xl();
          break;
        case 5:
          Ql(r);
          break;
        case 4:
          qn();
          break;
        case 13:
          U(K);
          break;
        case 19:
          U(K);
          break;
        case 10:
          Hl(r.type._context);
          break;
        case 22:
        case 23:
          au();
      }
      n = n.return;
    }
  if (
    ((ue = e),
    (re = e = Ft(e.current, null)),
    (fe = Me = t),
    (oe = 0),
    (ti = null),
    (iu = Zs = pn = 0),
    (Ne = Ar = null),
    nn !== null)
  ) {
    for (t = 0; t < nn.length; t++)
      if (((n = nn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    nn = null;
  }
  return e;
}
function Rp(e, t) {
  do {
    var n = re;
    try {
      if ((Wl(), (Zi.current = Ps), Ts)) {
        for (var r = Y.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ts = !1;
      }
      if (
        ((hn = 0),
        (le = se = Y = null),
        (Mr = !1),
        (qr = 0),
        (ru.current = null),
        n === null || n.return === null)
      ) {
        (oe = 1), (ti = t), (re = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = fe),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            d = a,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var y = Bc(o);
          if (y !== null) {
            (y.flags &= -257),
              Uc(y, o, a, s, t),
              y.mode & 1 && zc(s, c, t),
              (t = y),
              (l = c);
            var v = t.updateQueue;
            if (v === null) {
              var x = new Set();
              x.add(l), (t.updateQueue = x);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              zc(s, c, t), lu();
              break e;
            }
            l = Error(T(426));
          }
        } else if ($ && a.mode & 1) {
          var k = Bc(o);
          if (k !== null) {
            !(k.flags & 65536) && (k.flags |= 256),
              Uc(k, o, a, s, t),
              Ul(Jn(l, a));
            break e;
          }
        }
        (s = l = Jn(l, a)),
          oe !== 4 && (oe = 2),
          Ar === null ? (Ar = [s]) : Ar.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var m = pp(s, l, t);
              Dc(s, m);
              break e;
            case 1:
              a = l;
              var p = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (_t === null || !_t.has(g))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var S = mp(s, a, t);
                Dc(s, S);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Dp(n);
    } catch (j) {
      (t = j), re === n && n !== null && (re = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ap() {
  var e = bs.current;
  return (bs.current = Ps), e === null ? Ps : e;
}
function lu() {
  (oe === 0 || oe === 3 || oe === 2) && (oe = 4),
    ue === null || (!(pn & 268435455) && !(Zs & 268435455)) || Pt(ue, fe);
}
function Rs(e, t) {
  var n = F;
  F |= 2;
  var r = Ap();
  (ue !== e || fe !== t) && ((lt = null), an(e, t));
  do
    try {
      qy();
      break;
    } catch (i) {
      Rp(e, i);
    }
  while (!0);
  if ((Wl(), (F = n), (bs.current = r), re !== null)) throw Error(T(261));
  return (ue = null), (fe = 0), oe;
}
function qy() {
  for (; re !== null; ) Lp(re);
}
function Jy() {
  for (; re !== null && !Ng(); ) Lp(re);
}
function Lp(e) {
  var t = _p(e.alternate, e, Me);
  (e.memoizedProps = e.pendingProps),
    t === null ? Dp(e) : (re = t),
    (ru.current = null);
}
function Dp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ky(n, t)), n !== null)) {
        (n.flags &= 32767), (re = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (oe = 6), (re = null);
        return;
      }
    } else if (((n = Hy(n, t, Me)), n !== null)) {
      re = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      re = t;
      return;
    }
    re = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function Jt(e, t, n) {
  var r = O,
    i = $e.transition;
  try {
    ($e.transition = null), (O = 1), ev(e, t, n, r);
  } finally {
    ($e.transition = i), (O = r);
  }
  return null;
}
function ev(e, t, n, r) {
  do $n();
  while (Et !== null);
  if (F & 6) throw Error(T(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (Dg(e, s),
    e === ue && ((re = ue = null), (fe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Oi ||
      ((Oi = !0),
      Ip(fs, function () {
        return $n(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = $e.transition), ($e.transition = null);
    var o = O;
    O = 1;
    var a = F;
    (F |= 4),
      (ru.current = null),
      Yy(e, n),
      bp(n, e),
      wy(ja),
      (ps = !!ka),
      (ja = ka = null),
      (e.current = n),
      Qy(n),
      Cg(),
      (F = a),
      (O = o),
      ($e.transition = s);
  } else e.current = n;
  if (
    (Oi && ((Oi = !1), (Et = e), (Ms = i)),
    (s = e.pendingLanes),
    s === 0 && (_t = null),
    bg(n.stateNode),
    Ee(e, ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Es) throw ((Es = !1), (e = $a), ($a = null), e);
  return (
    Ms & 1 && e.tag !== 0 && $n(),
    (s = e.pendingLanes),
    s & 1 ? (e === Wa ? Lr++ : ((Lr = 0), (Wa = e))) : (Lr = 0),
    Kt(),
    null
  );
}
function $n() {
  if (Et !== null) {
    var e = ph(Ms),
      t = $e.transition,
      n = O;
    try {
      if ((($e.transition = null), (O = 16 > e ? 16 : e), Et === null))
        var r = !1;
      else {
        if (((e = Et), (Et = null), (Ms = 0), F & 6)) throw Error(T(331));
        var i = F;
        for (F |= 4, M = e.current; M !== null; ) {
          var s = M,
            o = s.child;
          if (M.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (M = c; M !== null; ) {
                  var d = M;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rr(8, d, s);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (M = f);
                  else
                    for (; M !== null; ) {
                      d = M;
                      var h = d.sibling,
                        y = d.return;
                      if ((Cp(d), d === c)) {
                        M = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = y), (M = h);
                        break;
                      }
                      M = y;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var x = v.child;
                if (x !== null) {
                  v.child = null;
                  do {
                    var k = x.sibling;
                    (x.sibling = null), (x = k);
                  } while (x !== null);
                }
              }
              M = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (M = o);
          else
            e: for (; M !== null; ) {
              if (((s = M), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Rr(9, s, s.return);
                }
              var m = s.sibling;
              if (m !== null) {
                (m.return = s.return), (M = m);
                break e;
              }
              M = s.return;
            }
        }
        var p = e.current;
        for (M = p; M !== null; ) {
          o = M;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null) (g.return = o), (M = g);
          else
            e: for (o = p; M !== null; ) {
              if (((a = M), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xs(9, a);
                  }
                } catch (j) {
                  Z(a, a.return, j);
                }
              if (a === o) {
                M = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (M = S);
                break e;
              }
              M = a.return;
            }
        }
        if (
          ((F = i), Kt(), it && typeof it.onPostCommitFiberRoot == "function")
        )
          try {
            it.onPostCommitFiberRoot(Us, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (O = n), ($e.transition = t);
    }
  }
  return !1;
}
function td(e, t, n) {
  (t = Jn(n, t)),
    (t = pp(e, t, 1)),
    (e = Vt(e, t, 1)),
    (t = Se()),
    e !== null && (di(e, 1, t), Ee(e, t));
}
function Z(e, t, n) {
  if (e.tag === 3) td(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        td(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (_t === null || !_t.has(r)))
        ) {
          (e = Jn(n, e)),
            (e = mp(t, e, 1)),
            (t = Vt(t, e, 1)),
            (e = Se()),
            t !== null && (di(t, 1, e), Ee(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function tv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Se()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ue === e &&
      (fe & n) === n &&
      (oe === 4 || (oe === 3 && (fe & 130023424) === fe && 500 > ee() - su)
        ? an(e, 0)
        : (iu |= n)),
    Ee(e, t);
}
function Vp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ei), (Ei <<= 1), !(Ei & 130023424) && (Ei = 4194304))
      : (t = 1));
  var n = Se();
  (e = gt(e, t)), e !== null && (di(e, t, n), Ee(e, n));
}
function nv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Vp(e, n);
}
function rv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  r !== null && r.delete(t), Vp(e, n);
}
var _p;
_p = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Pe.current) Ce = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ce = !1), Wy(e, t, n);
      Ce = !!(e.flags & 131072);
    }
  else (Ce = !1), $ && t.flags & 1048576 && zh(t, Ss, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ji(e, t), (e = t.pendingProps);
      var i = Qn(t, ve.current);
      Un(t, n), (i = ql(null, t, r, e, i, n));
      var s = Jl();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            be(r) ? ((s = !0), xs(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Gl(t),
            (i.updater = Qs),
            (t.stateNode = i),
            (i._reactInternals = t),
            Aa(t, r, e, n),
            (t = Va(null, t, r, !0, s, n)))
          : ((t.tag = 0), $ && s && zl(t), xe(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ji(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = sv(r)),
          (e = Qe(r, e)),
          i)
        ) {
          case 0:
            t = Da(null, t, r, e, n);
            break e;
          case 1:
            t = Hc(null, t, r, e, n);
            break e;
          case 11:
            t = $c(null, t, r, e, n);
            break e;
          case 14:
            t = Wc(null, t, r, Qe(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        Da(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        Hc(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((xp(t), e === null)) throw Error(T(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Kh(e, t),
          Ns(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = Jn(Error(T(423)), t)), (t = Kc(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Jn(Error(T(424)), t)), (t = Kc(e, t, r, n, i));
            break e;
          } else
            for (
              Ae = Dt(t.stateNode.containerInfo.firstChild),
                Le = t,
                $ = !0,
                Ze = null,
                n = Wh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Xn(), r === i)) {
            t = yt(e, t, n);
            break e;
          }
          xe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Gh(t),
        e === null && Ea(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        Na(r, i) ? (o = null) : s !== null && Na(r, s) && (t.flags |= 32),
        vp(e, t),
        xe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Ea(t), null;
    case 13:
      return wp(e, t, n);
    case 4:
      return (
        Yl(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Zn(t, null, r, n)) : xe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        $c(e, t, r, i, n)
      );
    case 7:
      return xe(e, t, t.pendingProps, n), t.child;
    case 8:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return xe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          z(ks, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (et(s.value, o)) {
            if (s.children === i.children && !Pe.current) {
              t = yt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = ht(-1, n & -n)), (l.tag = 2);
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null
                          ? (l.next = l)
                          : ((l.next = d.next), (d.next = l)),
                          (c.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      Ma(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(T(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  Ma(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        xe(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Un(t, n),
        (i = He(i)),
        (r = r(i)),
        (t.flags |= 1),
        xe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Qe(r, t.pendingProps)),
        (i = Qe(r.type, i)),
        Wc(e, t, r, i, n)
      );
    case 15:
      return gp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Qe(r, i)),
        Ji(e, t),
        (t.tag = 1),
        be(r) ? ((e = !0), xs(t)) : (e = !1),
        Un(t, n),
        hp(t, r, i),
        Aa(t, r, i, n),
        Va(null, t, r, !0, e, n)
      );
    case 19:
      return Sp(e, t, n);
    case 22:
      return yp(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function Ip(e, t) {
  return ch(e, t);
}
function iv(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Be(e, t, n, r) {
  return new iv(e, t, n, r);
}
function uu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function sv(e) {
  if (typeof e == "function") return uu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === bl)) return 11;
    if (e === El) return 14;
  }
  return 2;
}
function Ft(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Be(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ns(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) uu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case kn:
        return ln(n.children, i, s, t);
      case Pl:
        (o = 8), (i |= 8);
        break;
      case na:
        return (
          (e = Be(12, n, t, i | 2)), (e.elementType = na), (e.lanes = s), e
        );
      case ra:
        return (e = Be(13, n, t, i)), (e.elementType = ra), (e.lanes = s), e;
      case ia:
        return (e = Be(19, n, t, i)), (e.elementType = ia), (e.lanes = s), e;
      case Gf:
        return qs(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Hf:
              o = 10;
              break e;
            case Kf:
              o = 9;
              break e;
            case bl:
              o = 11;
              break e;
            case El:
              o = 14;
              break e;
            case Nt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Be(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function ln(e, t, n, r) {
  return (e = Be(7, e, r, t)), (e.lanes = n), e;
}
function qs(e, t, n, r) {
  return (
    (e = Be(22, e, r, t)),
    (e.elementType = Gf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function _o(e, t, n) {
  return (e = Be(6, e, null, t)), (e.lanes = n), e;
}
function Io(e, t, n) {
  return (
    (t = Be(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ov(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = yo(0)),
    (this.expirationTimes = yo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = yo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function cu(e, t, n, r, i, s, o, a, l) {
  return (
    (e = new ov(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Be(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Gl(s),
    e
  );
}
function av(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Sn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Fp(e) {
  if (!e) return Bt;
  e = e._reactInternals;
  e: {
    if (yn(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (be(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (be(n)) return Fh(e, n, t);
  }
  return t;
}
function Op(e, t, n, r, i, s, o, a, l) {
  return (
    (e = cu(n, r, !0, e, i, s, o, a, l)),
    (e.context = Fp(null)),
    (n = e.current),
    (r = Se()),
    (i = It(n)),
    (s = ht(r, i)),
    (s.callback = t ?? null),
    Vt(n, s, i),
    (e.current.lanes = i),
    di(e, i, r),
    Ee(e, r),
    e
  );
}
function Js(e, t, n, r) {
  var i = t.current,
    s = Se(),
    o = It(i);
  return (
    (n = Fp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ht(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Vt(i, t, o)),
    e !== null && (Je(e, i, o, s), Xi(e, i, o)),
    o
  );
}
function As(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function nd(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function du(e, t) {
  nd(e, t), (e = e.alternate) && nd(e, t);
}
function lv() {
  return null;
}
var zp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function fu(e) {
  this._internalRoot = e;
}
eo.prototype.render = fu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  Js(e, t, null, null);
};
eo.prototype.unmount = fu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    mn(function () {
      Js(null, e, null, null);
    }),
      (t[mt] = null);
  }
};
function eo(e) {
  this._internalRoot = e;
}
eo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = yh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Tt.length && t !== 0 && t < Tt[n].priority; n++);
    Tt.splice(n, 0, e), n === 0 && xh(e);
  }
};
function hu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function to(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function rd() {}
function uv(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = As(o);
        s.call(c);
      };
    }
    var o = Op(t, r, e, 0, null, !1, !1, "", rd);
    return (
      (e._reactRootContainer = o),
      (e[mt] = o.current),
      Gr(e.nodeType === 8 ? e.parentNode : e),
      mn(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = As(l);
      a.call(c);
    };
  }
  var l = cu(e, 0, !1, null, null, !1, !1, "", rd);
  return (
    (e._reactRootContainer = l),
    (e[mt] = l.current),
    Gr(e.nodeType === 8 ? e.parentNode : e),
    mn(function () {
      Js(t, l, n, r);
    }),
    l
  );
}
function no(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = As(o);
        a.call(l);
      };
    }
    Js(t, o, e, i);
  } else o = uv(n, t, e, i, r);
  return As(o);
}
mh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = kr(t.pendingLanes);
        n !== 0 &&
          (Al(t, n | 1), Ee(t, ee()), !(F & 6) && ((er = ee() + 500), Kt()));
      }
      break;
    case 13:
      mn(function () {
        var r = gt(e, 1);
        if (r !== null) {
          var i = Se();
          Je(r, e, 1, i);
        }
      }),
        du(e, 1);
  }
};
Ll = function (e) {
  if (e.tag === 13) {
    var t = gt(e, 134217728);
    if (t !== null) {
      var n = Se();
      Je(t, e, 134217728, n);
    }
    du(e, 134217728);
  }
};
gh = function (e) {
  if (e.tag === 13) {
    var t = It(e),
      n = gt(e, t);
    if (n !== null) {
      var r = Se();
      Je(n, e, t, r);
    }
    du(e, t);
  }
};
yh = function () {
  return O;
};
vh = function (e, t) {
  var n = O;
  try {
    return (O = e), t();
  } finally {
    O = n;
  }
};
pa = function (e, t, n) {
  switch (t) {
    case "input":
      if ((aa(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ks(r);
            if (!i) throw Error(T(90));
            Qf(r), aa(r, i);
          }
        }
      }
      break;
    case "textarea":
      Zf(e, n);
      break;
    case "select":
      (t = n.value), t != null && Fn(e, !!n.multiple, t, !1);
  }
};
ih = ou;
sh = mn;
var cv = { usingClientEntryPoint: !1, Events: [hi, Tn, Ks, nh, rh, ou] },
  vr = {
    findFiberByHostInstance: tn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  dv = {
    bundleType: vr.bundleType,
    version: vr.version,
    rendererPackageName: vr.rendererPackageName,
    rendererConfig: vr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: wt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = lh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: vr.findFiberByHostInstance || lv,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zi.isDisabled && zi.supportsFiber)
    try {
      (Us = zi.inject(dv)), (it = zi);
    } catch {}
}
Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cv;
Ve.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!hu(t)) throw Error(T(200));
  return av(e, t, null, n);
};
Ve.createRoot = function (e, t) {
  if (!hu(e)) throw Error(T(299));
  var n = !1,
    r = "",
    i = zp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = cu(e, 1, !1, null, null, n, !1, r, i)),
    (e[mt] = t.current),
    Gr(e.nodeType === 8 ? e.parentNode : e),
    new fu(t)
  );
};
Ve.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return (e = lh(t)), (e = e === null ? null : e.stateNode), e;
};
Ve.flushSync = function (e) {
  return mn(e);
};
Ve.hydrate = function (e, t, n) {
  if (!to(t)) throw Error(T(200));
  return no(null, e, t, !0, n);
};
Ve.hydrateRoot = function (e, t, n) {
  if (!hu(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = zp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Op(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[mt] = t.current),
    Gr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new eo(t);
};
Ve.render = function (e, t, n) {
  if (!to(t)) throw Error(T(200));
  return no(null, e, t, !1, n);
};
Ve.unmountComponentAtNode = function (e) {
  if (!to(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (mn(function () {
        no(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[mt] = null);
        });
      }),
      !0)
    : !1;
};
Ve.unstable_batchedUpdates = ou;
Ve.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!to(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return no(e, t, n, !1, r);
};
Ve.version = "18.3.1-next-f1338f8080-20240426";
function Bp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bp);
    } catch (e) {
      console.error(e);
    }
}
Bp(), (Bf.exports = Ve);
var fv = Bf.exports,
  id = fv;
(ea.createRoot = id.createRoot), (ea.hydrateRoot = id.hydrateRoot);
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ni() {
  return (
    (ni = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ni.apply(this, arguments)
  );
}
var Mt;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Mt || (Mt = {}));
const sd = "popstate";
function hv(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: s, search: o, hash: a } = r.location;
    return Ga(
      "",
      { pathname: s, search: o, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Ls(i);
  }
  return mv(t, n, null, e);
}
function ie(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Up(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function pv() {
  return Math.random().toString(36).substr(2, 8);
}
function od(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Ga(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ni(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? or(t) : t,
      { state: n, key: (t && t.key) || r || pv() }
    )
  );
}
function Ls(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function or(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function mv(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: s = !1 } = r,
    o = i.history,
    a = Mt.Pop,
    l = null,
    c = d();
  c == null && ((c = 0), o.replaceState(ni({}, o.state, { idx: c }), ""));
  function d() {
    return (o.state || { idx: null }).idx;
  }
  function f() {
    a = Mt.Pop;
    let k = d(),
      m = k == null ? null : k - c;
    (c = k), l && l({ action: a, location: x.location, delta: m });
  }
  function h(k, m) {
    a = Mt.Push;
    let p = Ga(x.location, k, m);
    c = d() + 1;
    let g = od(p, c),
      S = x.createHref(p);
    try {
      o.pushState(g, "", S);
    } catch (j) {
      if (j instanceof DOMException && j.name === "DataCloneError") throw j;
      i.location.assign(S);
    }
    s && l && l({ action: a, location: x.location, delta: 1 });
  }
  function y(k, m) {
    a = Mt.Replace;
    let p = Ga(x.location, k, m);
    c = d();
    let g = od(p, c),
      S = x.createHref(p);
    o.replaceState(g, "", S),
      s && l && l({ action: a, location: x.location, delta: 0 });
  }
  function v(k) {
    let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
      p = typeof k == "string" ? k : Ls(k);
    return (
      (p = p.replace(/ $/, "%20")),
      ie(
        m,
        "No window.location.(origin|href) available to create URL for href: " +
          p
      ),
      new URL(p, m)
    );
  }
  let x = {
    get action() {
      return a;
    },
    get location() {
      return e(i, o);
    },
    listen(k) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(sd, f),
        (l = k),
        () => {
          i.removeEventListener(sd, f), (l = null);
        }
      );
    },
    createHref(k) {
      return t(i, k);
    },
    createURL: v,
    encodeLocation(k) {
      let m = v(k);
      return { pathname: m.pathname, search: m.search, hash: m.hash };
    },
    push: h,
    replace: y,
    go(k) {
      return o.go(k);
    },
  };
  return x;
}
var ad;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(ad || (ad = {}));
function gv(e, t, n) {
  return n === void 0 && (n = "/"), yv(e, t, n);
}
function yv(e, t, n, r) {
  let i = typeof t == "string" ? or(t) : t,
    s = pu(i.pathname || "/", n);
  if (s == null) return null;
  let o = $p(e);
  vv(o);
  let a = null;
  for (let l = 0; a == null && l < o.length; ++l) {
    let c = Mv(s);
    a = Pv(o[l], c);
  }
  return a;
}
function $p(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let i = (s, o, a) => {
    let l = {
      relativePath: a === void 0 ? s.path || "" : a,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    l.relativePath.startsWith("/") &&
      (ie(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let c = Ot([r, l.relativePath]),
      d = n.concat(l);
    s.children &&
      s.children.length > 0 &&
      (ie(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + c + '".')
      ),
      $p(s.children, t, d, c)),
      !(s.path == null && !s.index) &&
        t.push({ path: c, score: Cv(c, s.index), routesMeta: d });
  };
  return (
    e.forEach((s, o) => {
      var a;
      if (s.path === "" || !((a = s.path) != null && a.includes("?"))) i(s, o);
      else for (let l of Wp(s.path)) i(s, o, l);
    }),
    t
  );
}
function Wp(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = Wp(r.join("/")),
    a = [];
  return (
    a.push(...o.map((l) => (l === "" ? s : [s, l].join("/")))),
    i && a.push(...o),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function vv(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Tv(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const xv = /^:[\w-]+$/,
  wv = 3,
  Sv = 2,
  kv = 1,
  jv = 10,
  Nv = -2,
  ld = (e) => e === "*";
function Cv(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(ld) && (r += Nv),
    t && (r += Sv),
    n
      .filter((i) => !ld(i))
      .reduce((i, s) => i + (xv.test(s) ? wv : s === "" ? kv : jv), r)
  );
}
function Tv(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Pv(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    s = "/",
    o = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      c = a === r.length - 1,
      d = s === "/" ? t : t.slice(s.length) || "/",
      f = bv(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: c },
        d
      ),
      h = l.route;
    if (!f) return null;
    Object.assign(i, f.params),
      o.push({
        params: i,
        pathname: Ot([s, f.pathname]),
        pathnameBase: Dv(Ot([s, f.pathnameBase])),
        route: h,
      }),
      f.pathnameBase !== "/" && (s = Ot([s, f.pathnameBase]));
  }
  return o;
}
function bv(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Ev(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((c, d, f) => {
      let { paramName: h, isOptional: y } = d;
      if (h === "*") {
        let x = a[f] || "";
        o = s.slice(0, s.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const v = a[f];
      return (
        y && !v ? (c[h] = void 0) : (c[h] = (v || "").replace(/%2F/g, "/")), c
      );
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function Ev(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Up(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (o, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function Mv(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Up(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function pu(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Rv(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? or(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Av(n, t)) : t,
    search: Vv(r),
    hash: _v(i),
  };
}
function Av(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Fo(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Lv(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Hp(e, t) {
  let n = Lv(e);
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Kp(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = or(e))
    : ((i = ni({}, e)),
      ie(
        !i.pathname || !i.pathname.includes("?"),
        Fo("?", "pathname", "search", i)
      ),
      ie(
        !i.pathname || !i.pathname.includes("#"),
        Fo("#", "pathname", "hash", i)
      ),
      ie(!i.search || !i.search.includes("#"), Fo("#", "search", "hash", i)));
  let s = e === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    a;
  if (o == null) a = n;
  else {
    let f = t.length - 1;
    if (!r && o.startsWith("..")) {
      let h = o.split("/");
      for (; h[0] === ".."; ) h.shift(), (f -= 1);
      i.pathname = h.join("/");
    }
    a = f >= 0 ? t[f] : "/";
  }
  let l = Rv(i, a),
    c = o && o !== "/" && o.endsWith("/"),
    d = (s || o === ".") && n.endsWith("/");
  return !l.pathname.endsWith("/") && (c || d) && (l.pathname += "/"), l;
}
const Ot = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Dv = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Vv = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  _v = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function Iv(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Gp = ["post", "put", "patch", "delete"];
new Set(Gp);
const Fv = ["get", ...Gp];
new Set(Fv);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ri() {
  return (
    (ri = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ri.apply(this, arguments)
  );
}
const mu = w.createContext(null),
  Ov = w.createContext(null),
  vn = w.createContext(null),
  ro = w.createContext(null),
  xn = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Yp = w.createContext(null);
function zv(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  mi() || ie(!1);
  let { basename: r, navigator: i } = w.useContext(vn),
    { hash: s, pathname: o, search: a } = Xp(e, { relative: n }),
    l = o;
  return (
    r !== "/" && (l = o === "/" ? r : Ot([r, o])),
    i.createHref({ pathname: l, search: a, hash: s })
  );
}
function mi() {
  return w.useContext(ro) != null;
}
function io() {
  return mi() || ie(!1), w.useContext(ro).location;
}
function Qp(e) {
  w.useContext(vn).static || w.useLayoutEffect(e);
}
function Bv() {
  let { isDataRoute: e } = w.useContext(xn);
  return e ? ex() : Uv();
}
function Uv() {
  mi() || ie(!1);
  let e = w.useContext(mu),
    { basename: t, future: n, navigator: r } = w.useContext(vn),
    { matches: i } = w.useContext(xn),
    { pathname: s } = io(),
    o = JSON.stringify(Hp(i, n.v7_relativeSplatPath)),
    a = w.useRef(!1);
  return (
    Qp(() => {
      a.current = !0;
    }),
    w.useCallback(
      function (c, d) {
        if ((d === void 0 && (d = {}), !a.current)) return;
        if (typeof c == "number") {
          r.go(c);
          return;
        }
        let f = Kp(c, JSON.parse(o), s, d.relative === "path");
        e == null &&
          t !== "/" &&
          (f.pathname = f.pathname === "/" ? t : Ot([t, f.pathname])),
          (d.replace ? r.replace : r.push)(f, d.state, d);
      },
      [t, r, o, s, e]
    )
  );
}
function Xp(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = w.useContext(vn),
    { matches: i } = w.useContext(xn),
    { pathname: s } = io(),
    o = JSON.stringify(Hp(i, r.v7_relativeSplatPath));
  return w.useMemo(() => Kp(e, JSON.parse(o), s, n === "path"), [e, o, s, n]);
}
function $v(e, t) {
  return Wv(e, t);
}
function Wv(e, t, n, r) {
  mi() || ie(!1);
  let { navigator: i } = w.useContext(vn),
    { matches: s } = w.useContext(xn),
    o = s[s.length - 1],
    a = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : "/";
  o && o.route;
  let c = io(),
    d;
  if (t) {
    var f;
    let k = typeof t == "string" ? or(t) : t;
    l === "/" || ((f = k.pathname) != null && f.startsWith(l)) || ie(!1),
      (d = k);
  } else d = c;
  let h = d.pathname || "/",
    y = h;
  if (l !== "/") {
    let k = l.replace(/^\//, "").split("/");
    y = "/" + h.replace(/^\//, "").split("/").slice(k.length).join("/");
  }
  let v = gv(e, { pathname: y }),
    x = Qv(
      v &&
        v.map((k) =>
          Object.assign({}, k, {
            params: Object.assign({}, a, k.params),
            pathname: Ot([
              l,
              i.encodeLocation
                ? i.encodeLocation(k.pathname).pathname
                : k.pathname,
            ]),
            pathnameBase:
              k.pathnameBase === "/"
                ? l
                : Ot([
                    l,
                    i.encodeLocation
                      ? i.encodeLocation(k.pathnameBase).pathname
                      : k.pathnameBase,
                  ]),
          })
        ),
      s,
      n,
      r
    );
  return t && x
    ? w.createElement(
        ro.Provider,
        {
          value: {
            location: ri(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: Mt.Pop,
          },
        },
        x
      )
    : x;
}
function Hv() {
  let e = Jv(),
    t = Iv(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return w.createElement(
    w.Fragment,
    null,
    w.createElement("h2", null, "Unexpected Application Error!"),
    w.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? w.createElement("pre", { style: i }, n) : null,
    null
  );
}
const Kv = w.createElement(Hv, null);
class Gv extends w.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? w.createElement(
          xn.Provider,
          { value: this.props.routeContext },
          w.createElement(Yp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Yv(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = w.useContext(mu);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    w.createElement(xn.Provider, { value: t }, r)
  );
}
function Qv(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var s;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (s = r) != null &&
      s.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let o = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let d = o.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0
    );
    d >= 0 || ie(!1), (o = o.slice(0, Math.min(o.length, d + 1)));
  }
  let l = !1,
    c = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < o.length; d++) {
      let f = o[d];
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = d),
        f.route.id)
      ) {
        let { loaderData: h, errors: y } = n,
          v =
            f.route.loader &&
            h[f.route.id] === void 0 &&
            (!y || y[f.route.id] === void 0);
        if (f.route.lazy || v) {
          (l = !0), c >= 0 ? (o = o.slice(0, c + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((d, f, h) => {
    let y,
      v = !1,
      x = null,
      k = null;
    n &&
      ((y = a && f.route.id ? a[f.route.id] : void 0),
      (x = f.route.errorElement || Kv),
      l &&
        (c < 0 && h === 0
          ? (tx("route-fallback"), (v = !0), (k = null))
          : c === h &&
            ((v = !0), (k = f.route.hydrateFallbackElement || null))));
    let m = t.concat(o.slice(0, h + 1)),
      p = () => {
        let g;
        return (
          y
            ? (g = x)
            : v
            ? (g = k)
            : f.route.Component
            ? (g = w.createElement(f.route.Component, null))
            : f.route.element
            ? (g = f.route.element)
            : (g = d),
          w.createElement(Yv, {
            match: f,
            routeContext: { outlet: d, matches: m, isDataRoute: n != null },
            children: g,
          })
        );
      };
    return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0)
      ? w.createElement(Gv, {
          location: n.location,
          revalidation: n.revalidation,
          component: x,
          error: y,
          children: p(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
        })
      : p();
  }, null);
}
var Zp = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Zp || {}),
  qp = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(qp || {});
function Xv(e) {
  let t = w.useContext(mu);
  return t || ie(!1), t;
}
function Zv(e) {
  let t = w.useContext(Ov);
  return t || ie(!1), t;
}
function qv(e) {
  let t = w.useContext(xn);
  return t || ie(!1), t;
}
function Jp(e) {
  let t = qv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ie(!1), n.route.id;
}
function Jv() {
  var e;
  let t = w.useContext(Yp),
    n = Zv(),
    r = Jp();
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function ex() {
  let { router: e } = Xv(Zp.UseNavigateStable),
    t = Jp(qp.UseNavigateStable),
    n = w.useRef(!1);
  return (
    Qp(() => {
      n.current = !0;
    }),
    w.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(i, ri({ fromRouteId: t }, s)));
      },
      [e, t]
    )
  );
}
const ud = {};
function tx(e, t, n) {
  ud[e] || (ud[e] = !0);
}
function nx(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function rs(e) {
  ie(!1);
}
function rx(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Mt.Pop,
    navigator: s,
    static: o = !1,
    future: a,
  } = e;
  mi() && ie(!1);
  let l = t.replace(/^\/*/, "/"),
    c = w.useMemo(
      () => ({
        basename: l,
        navigator: s,
        static: o,
        future: ri({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, s, o]
    );
  typeof r == "string" && (r = or(r));
  let {
      pathname: d = "/",
      search: f = "",
      hash: h = "",
      state: y = null,
      key: v = "default",
    } = r,
    x = w.useMemo(() => {
      let k = pu(d, l);
      return k == null
        ? null
        : {
            location: { pathname: k, search: f, hash: h, state: y, key: v },
            navigationType: i,
          };
    }, [l, d, f, h, y, v, i]);
  return x == null
    ? null
    : w.createElement(
        vn.Provider,
        { value: c },
        w.createElement(ro.Provider, { children: n, value: x })
      );
}
function ix(e) {
  let { children: t, location: n } = e;
  return $v(Ya(t), n);
}
new Promise(() => {});
function Ya(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    w.Children.forEach(e, (r, i) => {
      if (!w.isValidElement(r)) return;
      let s = [...t, i];
      if (r.type === w.Fragment) {
        n.push.apply(n, Ya(r.props.children, s));
        return;
      }
      r.type !== rs && ie(!1), !r.props.index || !r.props.children || ie(!1);
      let o = {
        id: r.props.id || s.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (o.children = Ya(r.props.children, s)), n.push(o);
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Qa() {
  return (
    (Qa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Qa.apply(this, arguments)
  );
}
function sx(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function ox(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ax(e, t) {
  return e.button === 0 && (!t || t === "_self") && !ox(e);
}
const lx = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  ux = "6";
try {
  window.__reactRouterVersion = ux;
} catch {}
const cx = "startTransition",
  cd = tg[cx];
function dx(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    s = w.useRef();
  s.current == null && (s.current = hv({ window: i, v5Compat: !0 }));
  let o = s.current,
    [a, l] = w.useState({ action: o.action, location: o.location }),
    { v7_startTransition: c } = r || {},
    d = w.useCallback(
      (f) => {
        c && cd ? cd(() => l(f)) : l(f);
      },
      [l, c]
    );
  return (
    w.useLayoutEffect(() => o.listen(d), [o, d]),
    w.useEffect(() => nx(r), [r]),
    w.createElement(rx, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: o,
      future: r,
    })
  );
}
const fx =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  hx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Re = w.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: a,
        target: l,
        to: c,
        preventScrollReset: d,
        viewTransition: f,
      } = t,
      h = sx(t, lx),
      { basename: y } = w.useContext(vn),
      v,
      x = !1;
    if (typeof c == "string" && hx.test(c) && ((v = c), fx))
      try {
        let g = new URL(window.location.href),
          S = c.startsWith("//") ? new URL(g.protocol + c) : new URL(c),
          j = pu(S.pathname, y);
        S.origin === g.origin && j != null
          ? (c = j + S.search + S.hash)
          : (x = !0);
      } catch {}
    let k = zv(c, { relative: i }),
      m = px(c, {
        replace: o,
        state: a,
        target: l,
        preventScrollReset: d,
        relative: i,
        viewTransition: f,
      });
    function p(g) {
      r && r(g), g.defaultPrevented || m(g);
    }
    return w.createElement(
      "a",
      Qa({}, h, { href: v || k, onClick: x || s ? r : p, ref: n, target: l })
    );
  });
var dd;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(dd || (dd = {}));
var fd;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(fd || (fd = {}));
function px(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    l = Bv(),
    c = io(),
    d = Xp(e, { relative: o });
  return w.useCallback(
    (f) => {
      if (ax(f, n)) {
        f.preventDefault();
        let h = r !== void 0 ? r : Ls(c) === Ls(d);
        l(e, {
          replace: h,
          state: i,
          preventScrollReset: s,
          relative: o,
          viewTransition: a,
        });
      }
    },
    [c, l, d, r, i, n, e, s, o, a]
  );
}
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mx = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  gx = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, r) =>
      r ? r.toUpperCase() : n.toLowerCase()
    ),
  hd = (e) => {
    const t = gx(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  em = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim(),
  yx = (e) => {
    for (const t in e)
      if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
  };
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var vx = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xx = w.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: i = "",
      children: s,
      iconNode: o,
      ...a
    },
    l
  ) =>
    w.createElement(
      "svg",
      {
        ref: l,
        ...vx,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: em("lucide", i),
        ...(!s && !yx(a) && { "aria-hidden": "true" }),
        ...a,
      },
      [
        ...o.map(([c, d]) => w.createElement(c, d)),
        ...(Array.isArray(s) ? s : [s]),
      ]
    )
);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const I = (e, t) => {
  const n = w.forwardRef(({ className: r, ...i }, s) =>
    w.createElement(xx, {
      ref: s,
      iconNode: t,
      className: em(`lucide-${mx(hd(e))}`, `lucide-${e}`, r),
      ...i,
    })
  );
  return (n.displayName = hd(e)), n;
};
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wx = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  Wn = I("arrow-right", wx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sx = [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv",
      },
    ],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ],
  pd = I("award", Sx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kx = [
    ["path", { d: "M12 10h.01", key: "1nrarc" }],
    ["path", { d: "M12 14h.01", key: "1etili" }],
    ["path", { d: "M12 6h.01", key: "1vi96p" }],
    ["path", { d: "M16 10h.01", key: "1m94wz" }],
    ["path", { d: "M16 14h.01", key: "1gbofw" }],
    ["path", { d: "M16 6h.01", key: "1x0f13" }],
    ["path", { d: "M8 10h.01", key: "19clt8" }],
    ["path", { d: "M8 14h.01", key: "6423bh" }],
    ["path", { d: "M8 6h.01", key: "1dz90k" }],
    ["path", { d: "M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3", key: "cabbwy" }],
    [
      "rect",
      { x: "4", y: "2", width: "16", height: "20", rx: "2", key: "1uxh74" },
    ],
  ],
  tm = I("building", kx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jx = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  Nx = I("chevron-down", jx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cx = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
  Tx = I("chevron-left", Cx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Px = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  bx = I("chevron-right", Px);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ex = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  Mx = I("circle-check", Ex);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rx = [
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  Ax = I("clock", Rx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lx = [
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M17 20v2", key: "1rnc9c" }],
    ["path", { d: "M17 2v2", key: "11trls" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M2 17h2", key: "7oei6x" }],
    ["path", { d: "M2 7h2", key: "asdhe0" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "M20 17h2", key: "1fpfkl" }],
    ["path", { d: "M20 7h2", key: "1o8tra" }],
    ["path", { d: "M7 20v2", key: "4gnj0m" }],
    ["path", { d: "M7 2v2", key: "1i4yhu" }],
    [
      "rect",
      { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" },
    ],
    [
      "rect",
      { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" },
    ],
  ],
  Xa = I("cpu", Lx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dx = [
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
    ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
    ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
  ],
  Vx = I("database", Dx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _x = [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  nm = I("eye", _x);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ix = [
    [
      "path",
      {
        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
        key: "1jg4f8",
      },
    ],
  ],
  Fx = I("facebook", Ix);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ox = [
    ["path", { d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4", key: "1nerag" }],
    ["path", { d: "M14 13.12c0 2.38 0 6.38-1 8.88", key: "o46ks0" }],
    ["path", { d: "M17.29 21.02c.12-.6.43-2.3.5-3.02", key: "ptglia" }],
    ["path", { d: "M2 12a10 10 0 0 1 18-6", key: "ydlgp0" }],
    ["path", { d: "M2 16h.01", key: "1gqxmh" }],
    ["path", { d: "M21.8 16c.2-2 .131-5.354 0-6", key: "drycrb" }],
    ["path", { d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2", key: "1tidbn" }],
    ["path", { d: "M8.65 22c.21-.66.45-1.32.57-2", key: "13wd9y" }],
    ["path", { d: "M9 6.8a6 6 0 0 1 9 5.2v2", key: "1fr1j5" }],
  ],
  zx = I("fingerprint", Ox);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bx = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    [
      "path",
      { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
    ],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ],
  Za = I("globe", Bx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ux = [
    [
      "path",
      {
        d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
        key: "zw3jo",
      },
    ],
    [
      "path",
      {
        d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
        key: "1wduqc",
      },
    ],
    [
      "path",
      {
        d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
        key: "kqbvx6",
      },
    ],
  ],
  $x = I("layers", Ux);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wx = [
    [
      "path",
      {
        d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
        key: "1gvzjb",
      },
    ],
    ["path", { d: "M9 18h6", key: "x1upvd" }],
    ["path", { d: "M10 22h4", key: "ceow96" }],
  ],
  Hx = I("lightbulb", Wx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kx = [
    [
      "path",
      {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f",
      },
    ],
    ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
    ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
  ],
  Gx = I("linkedin", Kx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yx = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  Hn = I("mail", Yx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qx = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  Ds = I("map-pin", Qx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xx = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  Zx = I("menu", Xx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qx = [
    [
      "path",
      {
        d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
        key: "18887p",
      },
    ],
  ],
  Jx = I("message-square", qx);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const e1 = [
    [
      "path",
      {
        d: "M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z",
        key: "vbtd3f",
      },
    ],
    ["path", { d: "M12 17v4", key: "1riwvh" }],
    ["path", { d: "M8 21h8", key: "1ev6f3" }],
    [
      "rect",
      { x: "2", y: "3", width: "20", height: "14", rx: "2", key: "x3v2xh" },
    ],
  ],
  t1 = I("monitor-play", e1);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const n1 = [
    [
      "rect",
      { x: "16", y: "16", width: "6", height: "6", rx: "1", key: "4q2zg0" },
    ],
    [
      "rect",
      { x: "2", y: "16", width: "6", height: "6", rx: "1", key: "8cvhb9" },
    ],
    [
      "rect",
      { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" },
    ],
    ["path", { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" }],
    ["path", { d: "M12 12V8", key: "2874zd" }],
  ],
  r1 = I("network", n1);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const i1 = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  Kn = I("phone", i1);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const s1 = [
    ["path", { d: "M16.247 7.761a6 6 0 0 1 0 8.478", key: "1fwjs5" }],
    ["path", { d: "M19.075 4.933a10 10 0 0 1 0 14.134", key: "ehdyv1" }],
    ["path", { d: "M4.925 19.067a10 10 0 0 1 0-14.134", key: "1q22gi" }],
    ["path", { d: "M7.753 16.239a6 6 0 0 1 0-8.478", key: "r2q7qm" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ],
  o1 = I("radio", s1);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const a1 = [
    [
      "path",
      {
        d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
        key: "m3kijz",
      },
    ],
    [
      "path",
      {
        d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
        key: "1fmvmk",
      },
    ],
    ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
    ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
  ],
  l1 = I("rocket", a1);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const u1 = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3",
      },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
  ],
  is = I("send", u1);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const c1 = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
  ],
  so = I("shield", c1);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const d1 = [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr",
      },
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
  ],
  f1 = I("sparkles", d1);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const h1 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
    ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ],
  rm = I("target", h1);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const p1 = [
    [
      "path",
      { d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z", key: "17jzev" },
    ],
  ],
  m1 = I("thermometer", p1);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const g1 = [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
  ],
  y1 = I("trending-up", g1);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const v1 = [
    [
      "path",
      {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6",
      },
    ],
  ],
  x1 = I("twitter", v1);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w1 = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  im = I("user", w1);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const S1 = [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ],
  k1 = I("users", S1);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const j1 = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  N1 = I("x", j1);
/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const C1 = [
    [
      "path",
      {
        d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
        key: "1xq2db",
      },
    ],
  ],
  Vs = I("zap", C1),
  gu = w.createContext({});
function yu(e) {
  const t = w.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const vu = typeof window < "u",
  sm = vu ? w.useLayoutEffect : w.useEffect,
  oo = w.createContext(null);
function xu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function wu(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const vt = (e, t, n) => (n > t ? t : n < e ? e : n);
let Su = () => {};
const xt = {},
  om = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function am(e) {
  return typeof e == "object" && e !== null;
}
const lm = (e) => /^0[^.\s]+$/u.test(e);
function ku(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const We = (e) => e,
  T1 = (e, t) => (n) => t(e(n)),
  gi = (...e) => e.reduce(T1),
  ii = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  };
class ju {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return xu(this.subscriptions, t), () => wu(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const o = this.subscriptions[s];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const ot = (e) => e * 1e3,
  Ue = (e) => e / 1e3;
function um(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const cm = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  P1 = 1e-7,
  b1 = 12;
function E1(e, t, n, r, i) {
  let s,
    o,
    a = 0;
  do (o = t + (n - t) / 2), (s = cm(o, r, i) - e), s > 0 ? (n = o) : (t = o);
  while (Math.abs(s) > P1 && ++a < b1);
  return o;
}
function yi(e, t, n, r) {
  if (e === t && n === r) return We;
  const i = (s) => E1(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : cm(i(s), t, r));
}
const dm = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  fm = (e) => (t) => 1 - e(1 - t),
  hm = yi(0.33, 1.53, 0.69, 0.99),
  Nu = fm(hm),
  pm = dm(Nu),
  mm = (e) =>
    (e *= 2) < 1 ? 0.5 * Nu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Cu = (e) => 1 - Math.sin(Math.acos(e)),
  gm = fm(Cu),
  ym = dm(Cu),
  M1 = yi(0.42, 0, 1, 1),
  R1 = yi(0, 0, 0.58, 1),
  vm = yi(0.42, 0, 0.58, 1),
  A1 = (e) => Array.isArray(e) && typeof e[0] != "number",
  xm = (e) => Array.isArray(e) && typeof e[0] == "number",
  L1 = {
    linear: We,
    easeIn: M1,
    easeInOut: vm,
    easeOut: R1,
    circIn: Cu,
    circInOut: ym,
    circOut: gm,
    backIn: Nu,
    backInOut: pm,
    backOut: hm,
    anticipate: mm,
  },
  D1 = (e) => typeof e == "string",
  md = (e) => {
    if (xm(e)) {
      Su(e.length === 4);
      const [t, n, r, i] = e;
      return yi(t, n, r, i);
    } else if (D1(e)) return L1[e];
    return e;
  },
  Bi = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function V1(e, t) {
  let n = new Set(),
    r = new Set(),
    i = !1,
    s = !1;
  const o = new WeakSet();
  let a = { delta: 0, timestamp: 0, isProcessing: !1 };
  function l(d) {
    o.has(d) && (c.schedule(d), e()), d(a);
  }
  const c = {
    schedule: (d, f = !1, h = !1) => {
      const v = h && i ? n : r;
      return f && o.add(d), v.has(d) || v.add(d), d;
    },
    cancel: (d) => {
      r.delete(d), o.delete(d);
    },
    process: (d) => {
      if (((a = d), i)) {
        s = !0;
        return;
      }
      (i = !0),
        ([n, r] = [r, n]),
        n.forEach(l),
        n.clear(),
        (i = !1),
        s && ((s = !1), c.process(d));
    },
  };
  return c;
}
const _1 = 40;
function wm(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = () => (n = !0),
    o = Bi.reduce((g, S) => ((g[S] = V1(s)), g), {}),
    {
      setup: a,
      read: l,
      resolveKeyframes: c,
      preUpdate: d,
      update: f,
      preRender: h,
      render: y,
      postRender: v,
    } = o,
    x = () => {
      const g = xt.useManualTiming ? i.timestamp : performance.now();
      (n = !1),
        xt.useManualTiming ||
          (i.delta = r ? 1e3 / 60 : Math.max(Math.min(g - i.timestamp, _1), 1)),
        (i.timestamp = g),
        (i.isProcessing = !0),
        a.process(i),
        l.process(i),
        c.process(i),
        d.process(i),
        f.process(i),
        h.process(i),
        y.process(i),
        v.process(i),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(x));
    },
    k = () => {
      (n = !0), (r = !0), i.isProcessing || e(x);
    };
  return {
    schedule: Bi.reduce((g, S) => {
      const j = o[S];
      return (g[S] = (C, P = !1, N = !1) => (n || k(), j.schedule(C, P, N))), g;
    }, {}),
    cancel: (g) => {
      for (let S = 0; S < Bi.length; S++) o[Bi[S]].cancel(g);
    },
    state: i,
    steps: o,
  };
}
const {
  schedule: W,
  cancel: Ut,
  state: de,
  steps: Oo,
} = wm(typeof requestAnimationFrame < "u" ? requestAnimationFrame : We, !0);
let ss;
function I1() {
  ss = void 0;
}
const Te = {
    now: () => (
      ss === void 0 &&
        Te.set(
          de.isProcessing || xt.useManualTiming
            ? de.timestamp
            : performance.now()
        ),
      ss
    ),
    set: (e) => {
      (ss = e), queueMicrotask(I1);
    },
  },
  Sm = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Tu = Sm("--"),
  F1 = Sm("var(--"),
  Pu = (e) => (F1(e) ? O1.test(e.split("/*")[0].trim()) : !1),
  O1 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  ar = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  si = { ...ar, transform: (e) => vt(0, 1, e) },
  Ui = { ...ar, default: 1 },
  Dr = (e) => Math.round(e * 1e5) / 1e5,
  bu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function z1(e) {
  return e == null;
}
const B1 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Eu = (e, t) => (n) =>
    !!(
      (typeof n == "string" && B1.test(n) && n.startsWith(e)) ||
      (t && !z1(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  km = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [i, s, o, a] = r.match(bu);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  U1 = (e) => vt(0, 255, e),
  zo = { ...ar, transform: (e) => Math.round(U1(e)) },
  sn = {
    test: Eu("rgb", "red"),
    parse: km("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      zo.transform(e) +
      ", " +
      zo.transform(t) +
      ", " +
      zo.transform(n) +
      ", " +
      Dr(si.transform(r)) +
      ")",
  };
function $1(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const qa = { test: Eu("#"), parse: $1, transform: sn.transform },
  vi = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  jt = vi("deg"),
  at = vi("%"),
  L = vi("px"),
  W1 = vi("vh"),
  H1 = vi("vw"),
  gd = {
    ...at,
    parse: (e) => at.parse(e) / 100,
    transform: (e) => at.transform(e * 100),
  },
  Ln = {
    test: Eu("hsl", "hue"),
    parse: km("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      at.transform(Dr(t)) +
      ", " +
      at.transform(Dr(n)) +
      ", " +
      Dr(si.transform(r)) +
      ")",
  },
  ne = {
    test: (e) => sn.test(e) || qa.test(e) || Ln.test(e),
    parse: (e) =>
      sn.test(e) ? sn.parse(e) : Ln.test(e) ? Ln.parse(e) : qa.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? sn.transform(e)
        : Ln.transform(e),
    getAnimatableNone: (e) => {
      const t = ne.parse(e);
      return (t.alpha = 0), ne.transform(t);
    },
  },
  K1 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function G1(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(bu)) == null ? void 0 : t.length) || 0) +
      (((n = e.match(K1)) == null ? void 0 : n.length) || 0) >
      0
  );
}
const jm = "number",
  Nm = "color",
  Y1 = "var",
  Q1 = "var(",
  yd = "${}",
  X1 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function oi(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [];
  let s = 0;
  const a = t
    .replace(
      X1,
      (l) => (
        ne.test(l)
          ? (r.color.push(s), i.push(Nm), n.push(ne.parse(l)))
          : l.startsWith(Q1)
          ? (r.var.push(s), i.push(Y1), n.push(l))
          : (r.number.push(s), i.push(jm), n.push(parseFloat(l))),
        ++s,
        yd
      )
    )
    .split(yd);
  return { values: n, split: a, indexes: r, types: i };
}
function Cm(e) {
  return oi(e).values;
}
function Tm(e) {
  const { split: t, types: n } = oi(e),
    r = t.length;
  return (i) => {
    let s = "";
    for (let o = 0; o < r; o++)
      if (((s += t[o]), i[o] !== void 0)) {
        const a = n[o];
        a === jm
          ? (s += Dr(i[o]))
          : a === Nm
          ? (s += ne.transform(i[o]))
          : (s += i[o]);
      }
    return s;
  };
}
const Z1 = (e) =>
  typeof e == "number" ? 0 : ne.test(e) ? ne.getAnimatableNone(e) : e;
function q1(e) {
  const t = Cm(e);
  return Tm(e)(t.map(Z1));
}
const $t = {
  test: G1,
  parse: Cm,
  createTransformer: Tm,
  getAnimatableNone: q1,
};
function Bo(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function J1({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    s = 0,
    o = 0;
  if (!t) i = s = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = Bo(l, a, e + 1 / 3)), (s = Bo(l, a, e)), (o = Bo(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function _s(e, t) {
  return (n) => (n > 0 ? t : e);
}
const G = (e, t, n) => e + (t - e) * n,
  Uo = (e, t, n) => {
    const r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  ew = [qa, sn, Ln],
  tw = (e) => ew.find((t) => t.test(e));
function vd(e) {
  const t = tw(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Ln && (n = J1(n)), n;
}
const xd = (e, t) => {
    const n = vd(e),
      r = vd(t);
    if (!n || !r) return _s(e, t);
    const i = { ...n };
    return (s) => (
      (i.red = Uo(n.red, r.red, s)),
      (i.green = Uo(n.green, r.green, s)),
      (i.blue = Uo(n.blue, r.blue, s)),
      (i.alpha = G(n.alpha, r.alpha, s)),
      sn.transform(i)
    );
  },
  Ja = new Set(["none", "hidden"]);
function nw(e, t) {
  return Ja.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function rw(e, t) {
  return (n) => G(e, t, n);
}
function Mu(e) {
  return typeof e == "number"
    ? rw
    : typeof e == "string"
    ? Pu(e)
      ? _s
      : ne.test(e)
      ? xd
      : ow
    : Array.isArray(e)
    ? Pm
    : typeof e == "object"
    ? ne.test(e)
      ? xd
      : iw
    : _s;
}
function Pm(e, t) {
  const n = [...e],
    r = n.length,
    i = e.map((s, o) => Mu(s)(s, t[o]));
  return (s) => {
    for (let o = 0; o < r; o++) n[o] = i[o](s);
    return n;
  };
}
function iw(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Mu(e[i])(e[i], t[i]));
  return (i) => {
    for (const s in r) n[s] = r[s](i);
    return n;
  };
}
function sw(e, t) {
  const n = [],
    r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const s = t.types[i],
      o = e.indexes[s][r[s]],
      a = e.values[o] ?? 0;
    (n[i] = a), r[s]++;
  }
  return n;
}
const ow = (e, t) => {
  const n = $t.createTransformer(t),
    r = oi(e),
    i = oi(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Ja.has(e) && !i.values.length) || (Ja.has(t) && !r.values.length)
      ? nw(e, t)
      : gi(Pm(sw(r, i), i.values), n)
    : _s(e, t);
};
function bm(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? G(e, t, n)
    : Mu(e)(e, t);
}
const aw = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: (n = !0) => W.update(t, n),
      stop: () => Ut(t),
      now: () => (de.isProcessing ? de.timestamp : Te.now()),
    };
  },
  Em = (e, t, n = 10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++)
      r += Math.round(e(s / (i - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  },
  Is = 2e4;
function Ru(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Is; ) (t += n), (r = e.next(t));
  return t >= Is ? 1 / 0 : t;
}
function lw(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }),
    i = Math.min(Ru(r), Is);
  return {
    type: "keyframes",
    ease: (s) => r.next(i * s).value / t,
    duration: Ue(i),
  };
}
const uw = 5;
function Mm(e, t, n) {
  const r = Math.max(t - uw, 0);
  return um(n - e(r), t - r);
}
const X = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  $o = 0.001;
function cw({
  duration: e = X.duration,
  bounce: t = X.bounce,
  velocity: n = X.velocity,
  mass: r = X.mass,
}) {
  let i,
    s,
    o = 1 - t;
  (o = vt(X.minDamping, X.maxDamping, o)),
    (e = vt(X.minDuration, X.maxDuration, Ue(e))),
    o < 1
      ? ((i = (c) => {
          const d = c * o,
            f = d * e,
            h = d - n,
            y = el(c, o),
            v = Math.exp(-f);
          return $o - (h / y) * v;
        }),
        (s = (c) => {
          const f = c * o * e,
            h = f * n + n,
            y = Math.pow(o, 2) * Math.pow(c, 2) * e,
            v = Math.exp(-f),
            x = el(Math.pow(c, 2), o);
          return ((-i(c) + $o > 0 ? -1 : 1) * ((h - y) * v)) / x;
        }))
      : ((i = (c) => {
          const d = Math.exp(-c * e),
            f = (c - n) * e + 1;
          return -$o + d * f;
        }),
        (s = (c) => {
          const d = Math.exp(-c * e),
            f = (n - c) * (e * e);
          return d * f;
        }));
  const a = 5 / e,
    l = fw(i, s, a);
  if (((e = ot(e)), isNaN(l)))
    return { stiffness: X.stiffness, damping: X.damping, duration: e };
  {
    const c = Math.pow(l, 2) * r;
    return { stiffness: c, damping: o * 2 * Math.sqrt(r * c), duration: e };
  }
}
const dw = 12;
function fw(e, t, n) {
  let r = n;
  for (let i = 1; i < dw; i++) r = r - e(r) / t(r);
  return r;
}
function el(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const hw = ["duration", "bounce"],
  pw = ["stiffness", "damping", "mass"];
function wd(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function mw(e) {
  let t = {
    velocity: X.velocity,
    stiffness: X.stiffness,
    damping: X.damping,
    mass: X.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!wd(e, pw) && wd(e, hw))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        i = r * r,
        s = 2 * vt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
      t = { ...t, mass: X.mass, stiffness: i, damping: s };
    } else {
      const n = cw(e);
      (t = { ...t, ...n, mass: X.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function Fs(e = X.visualDuration, t = X.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: i } = n;
  const s = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: s },
    {
      stiffness: l,
      damping: c,
      mass: d,
      duration: f,
      velocity: h,
      isResolvedFromDuration: y,
    } = mw({ ...n, velocity: -Ue(n.velocity || 0) }),
    v = h || 0,
    x = c / (2 * Math.sqrt(l * d)),
    k = o - s,
    m = Ue(Math.sqrt(l / d)),
    p = Math.abs(k) < 5;
  r || (r = p ? X.restSpeed.granular : X.restSpeed.default),
    i || (i = p ? X.restDelta.granular : X.restDelta.default);
  let g;
  if (x < 1) {
    const j = el(m, x);
    g = (C) => {
      const P = Math.exp(-x * m * C);
      return (
        o - P * (((v + x * m * k) / j) * Math.sin(j * C) + k * Math.cos(j * C))
      );
    };
  } else if (x === 1) g = (j) => o - Math.exp(-m * j) * (k + (v + m * k) * j);
  else {
    const j = m * Math.sqrt(x * x - 1);
    g = (C) => {
      const P = Math.exp(-x * m * C),
        N = Math.min(j * C, 300);
      return (
        o - (P * ((v + x * m * k) * Math.sinh(N) + j * k * Math.cosh(N))) / j
      );
    };
  }
  const S = {
    calculatedDuration: (y && f) || null,
    next: (j) => {
      const C = g(j);
      if (y) a.done = j >= f;
      else {
        let P = j === 0 ? v : 0;
        x < 1 && (P = j === 0 ? ot(v) : Mm(g, j, C));
        const N = Math.abs(P) <= r,
          V = Math.abs(o - C) <= i;
        a.done = N && V;
      }
      return (a.value = a.done ? o : C), a;
    },
    toString: () => {
      const j = Math.min(Ru(S), Is),
        C = Em((P) => S.next(j * P).value, j, 30);
      return j + "ms " + C;
    },
    toTransition: () => {},
  };
  return S;
}
Fs.applyToOptions = (e) => {
  const t = lw(e, 100, Fs);
  return (
    (e.ease = t.ease), (e.duration = ot(t.duration)), (e.type = "keyframes"), e
  );
};
function tl({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: d,
}) {
  const f = e[0],
    h = { done: !1, value: f },
    y = (N) => (a !== void 0 && N < a) || (l !== void 0 && N > l),
    v = (N) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - N) < Math.abs(l - N)
        ? a
        : l;
  let x = n * t;
  const k = f + x,
    m = o === void 0 ? k : o(k);
  m !== k && (x = m - f);
  const p = (N) => -x * Math.exp(-N / r),
    g = (N) => m + p(N),
    S = (N) => {
      const V = p(N),
        R = g(N);
      (h.done = Math.abs(V) <= c), (h.value = h.done ? m : R);
    };
  let j, C;
  const P = (N) => {
    y(h.value) &&
      ((j = N),
      (C = Fs({
        keyframes: [h.value, v(h.value)],
        velocity: Mm(g, N, h.value),
        damping: i,
        stiffness: s,
        restDelta: c,
        restSpeed: d,
      })));
  };
  return (
    P(0),
    {
      calculatedDuration: null,
      next: (N) => {
        let V = !1;
        return (
          !C && j === void 0 && ((V = !0), S(N), P(N)),
          j !== void 0 && N >= j ? C.next(N - j) : (!V && S(N), h)
        );
      },
    }
  );
}
function gw(e, t, n) {
  const r = [],
    i = n || xt.mix || bm,
    s = e.length - 1;
  for (let o = 0; o < s; o++) {
    let a = i(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || We : t;
      a = gi(l, a);
    }
    r.push(a);
  }
  return r;
}
function yw(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((Su(s === t.length), s === 1)) return () => t[0];
  if (s === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = gw(t, r, i),
    l = a.length,
    c = (d) => {
      if (o && d < e[0]) return t[0];
      let f = 0;
      if (l > 1) for (; f < e.length - 2 && !(d < e[f + 1]); f++);
      const h = ii(e[f], e[f + 1], d);
      return a[f](h);
    };
  return n ? (d) => c(vt(e[0], e[s - 1], d)) : c;
}
function vw(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = ii(0, t, r);
    e.push(G(n, 1, i));
  }
}
function xw(e) {
  const t = [0];
  return vw(t, e.length - 1), t;
}
function ww(e, t) {
  return e.map((n) => n * t);
}
function Sw(e, t) {
  return e.map(() => t || vm).splice(0, e.length - 1);
}
function Vr({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = A1(r) ? r.map(md) : md(r),
    s = { done: !1, value: t[0] },
    o = ww(n && n.length === t.length ? n : xw(t), e),
    a = yw(o, t, { ease: Array.isArray(i) ? i : Sw(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((s.value = a(l)), (s.done = l >= e), s),
  };
}
const kw = (e) => e !== null;
function Au(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
  const s = e.filter(kw),
    a = i < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : s.length - 1;
  return !a || r === void 0 ? s[a] : r;
}
const jw = { decay: tl, inertia: tl, tween: Vr, keyframes: Vr, spring: Fs };
function Rm(e) {
  typeof e.type == "string" && (e.type = jw[e.type]);
}
class Lu {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const Nw = (e) => e / 100;
class Du extends Lu {
  constructor(t) {
    super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        var r, i;
        const { motionValue: n } = this.options;
        n && n.updatedAt !== Te.now() && this.tick(Te.now()),
          (this.isStopped = !0),
          this.state !== "idle" &&
            (this.teardown(),
            (i = (r = this.options).onStop) == null || i.call(r));
      }),
      (this.options = t),
      this.initAnimation(),
      this.play(),
      t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    Rm(t);
    const {
      type: n = Vr,
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: s,
      velocity: o = 0,
    } = t;
    let { keyframes: a } = t;
    const l = n || Vr;
    l !== Vr &&
      typeof a[0] != "number" &&
      ((this.mixKeyframes = gi(Nw, bm(a[0], a[1]))), (a = [0, 100]));
    const c = l({ ...t, keyframes: a });
    s === "mirror" &&
      (this.mirroredGenerator = l({
        ...t,
        keyframes: [...a].reverse(),
        velocity: -o,
      })),
      c.calculatedDuration === null && (c.calculatedDuration = Ru(c));
    const { calculatedDuration: d } = c;
    (this.calculatedDuration = d),
      (this.resolvedDuration = d + i),
      (this.totalDuration = this.resolvedDuration * (r + 1) - i),
      (this.generator = c);
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = n);
  }
  tick(t, n = !1) {
    const {
      generator: r,
      totalDuration: i,
      mixKeyframes: s,
      mirroredGenerator: o,
      resolvedDuration: a,
      calculatedDuration: l,
    } = this;
    if (this.startTime === null) return r.next(0);
    const {
      delay: c = 0,
      keyframes: d,
      repeat: f,
      repeatType: h,
      repeatDelay: y,
      type: v,
      onUpdate: x,
      finalKeyframe: k,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - i / this.speed, this.startTime)),
      n ? (this.currentTime = t) : this.updateTime(t);
    const m = this.currentTime - c * (this.playbackSpeed >= 0 ? 1 : -1),
      p = this.playbackSpeed >= 0 ? m < 0 : m > i;
    (this.currentTime = Math.max(m, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = i);
    let g = this.currentTime,
      S = r;
    if (f) {
      const N = Math.min(this.currentTime, i) / a;
      let V = Math.floor(N),
        R = N % 1;
      !R && N >= 1 && (R = 1),
        R === 1 && V--,
        (V = Math.min(V, f + 1)),
        !!(V % 2) &&
          (h === "reverse"
            ? ((R = 1 - R), y && (R -= y / a))
            : h === "mirror" && (S = o)),
        (g = vt(0, 1, R) * a);
    }
    const j = p ? { done: !1, value: d[0] } : S.next(g);
    s && (j.value = s(j.value));
    let { done: C } = j;
    !p &&
      l !== null &&
      (C =
        this.playbackSpeed >= 0
          ? this.currentTime >= i
          : this.currentTime <= 0);
    const P =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && C));
    return (
      P && v !== tl && (j.value = Au(d, this.options, k, this.speed)),
      x && x(j.value),
      P && this.finish(),
      j
    );
  }
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return Ue(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + Ue(t);
  }
  get time() {
    return Ue(this.currentTime);
  }
  set time(t) {
    var n;
    (t = ot(t)),
      (this.currentTime = t),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = t)
        : this.driver &&
          (this.startTime = this.driver.now() - t / this.playbackSpeed),
      (n = this.driver) == null || n.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(Te.now());
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = Ue(this.currentTime));
  }
  play() {
    var i, s;
    if (this.isStopped) return;
    const { driver: t = aw, startTime: n } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))),
      (s = (i = this.options).onPlay) == null || s.call(i);
    const r = this.driver.now();
    this.state === "finished"
      ? (this.updateFinished(), (this.startTime = r))
      : this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : this.startTime || (this.startTime = n ?? r),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    (this.state = "paused"),
      this.updateTime(Te.now()),
      (this.holdTime = this.currentTime);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    var t, n;
    this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      (n = (t = this.options).onComplete) == null || n.call(t);
  }
  cancel() {
    var t, n;
    (this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      (n = (t = this.options).onCancel) == null || n.call(t);
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null);
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
  attachTimeline(t) {
    var n;
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      (n = this.driver) == null || n.stop(),
      t.observe(this)
    );
  }
}
function Cw(e) {
  for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const on = (e) => (e * 180) / Math.PI,
  nl = (e) => {
    const t = on(Math.atan2(e[1], e[0]));
    return rl(t);
  },
  Tw = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: nl,
    rotateZ: nl,
    skewX: (e) => on(Math.atan(e[1])),
    skewY: (e) => on(Math.atan(e[2])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
  },
  rl = (e) => ((e = e % 360), e < 0 && (e += 360), e),
  Sd = nl,
  kd = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
  jd = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
  Pw = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: kd,
    scaleY: jd,
    scale: (e) => (kd(e) + jd(e)) / 2,
    rotateX: (e) => rl(on(Math.atan2(e[6], e[5]))),
    rotateY: (e) => rl(on(Math.atan2(-e[2], e[0]))),
    rotateZ: Sd,
    rotate: Sd,
    skewX: (e) => on(Math.atan(e[4])),
    skewY: (e) => on(Math.atan(e[1])),
    skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
  };
function il(e) {
  return e.includes("scale") ? 1 : 0;
}
function sl(e, t) {
  if (!e || e === "none") return il(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, i;
  if (n) (r = Pw), (i = n);
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    (r = Tw), (i = a);
  }
  if (!i) return il(t);
  const s = r[t],
    o = i[1].split(",").map(Ew);
  return typeof s == "function" ? s(o) : o[s];
}
const bw = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return sl(n, t);
};
function Ew(e) {
  return parseFloat(e.trim());
}
const lr = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  ur = new Set(lr),
  Nd = (e) => e === ar || e === L,
  Mw = new Set(["x", "y", "z"]),
  Rw = lr.filter((e) => !Mw.has(e));
function Aw(e) {
  const t = [];
  return (
    Rw.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const un = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: (e, { transform: t }) => sl(t, "x"),
  y: (e, { transform: t }) => sl(t, "y"),
};
un.translateX = un.x;
un.translateY = un.y;
const cn = new Set();
let ol = !1,
  al = !1,
  ll = !1;
function Am() {
  if (al) {
    const e = Array.from(cn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const i = Aw(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const i = n.get(r);
        i &&
          i.forEach(([s, o]) => {
            var a;
            (a = r.getValue(s)) == null || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (al = !1), (ol = !1), cn.forEach((e) => e.complete(ll)), cn.clear();
}
function Lm() {
  cn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (al = !0);
  });
}
function Lw() {
  (ll = !0), Lm(), Am(), (ll = !1);
}
class Vu {
  constructor(t, n, r, i, s, o = !1) {
    (this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = i),
      (this.element = s),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.state = "scheduled"),
      this.isAsync
        ? (cn.add(this), ol || ((ol = !0), W.read(Lm), W.resolveKeyframes(Am)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: i,
    } = this;
    if (t[0] === null) {
      const s = i == null ? void 0 : i.get(),
        o = t[t.length - 1];
      if (s !== void 0) t[0] = s;
      else if (r && n) {
        const a = r.readValue(n, o);
        a != null && (t[0] = a);
      }
      t[0] === void 0 && (t[0] = o), i && s === void 0 && i.set(t[0]);
    }
    Cw(t);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(t = !1) {
    (this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
      cn.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (cn.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Dw = (e) => e.startsWith("--");
function Vw(e, t, n) {
  Dw(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const _w = ku(() => window.ScrollTimeline !== void 0),
  Iw = {};
function Fw(e, t) {
  const n = ku(e);
  return () => Iw[t] ?? n();
}
const Dm = Fw(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Nr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Cd = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Nr([0, 0.65, 0.55, 1]),
    circOut: Nr([0.55, 0, 1, 0.45]),
    backIn: Nr([0.31, 0.01, 0.66, -0.59]),
    backOut: Nr([0.33, 1.53, 0.69, 0.99]),
  };
function Vm(e, t) {
  if (e)
    return typeof e == "function"
      ? Dm()
        ? Em(e, t)
        : "ease-out"
      : xm(e)
      ? Nr(e)
      : Array.isArray(e)
      ? e.map((n) => Vm(n, t) || Cd.easeOut)
      : Cd[e];
}
function Ow(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: s = 0,
    repeatType: o = "loop",
    ease: a = "easeOut",
    times: l,
  } = {},
  c = void 0
) {
  const d = { [t]: n };
  l && (d.offset = l);
  const f = Vm(a, i);
  Array.isArray(f) && (d.easing = f);
  const h = {
    delay: r,
    duration: i,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: s + 1,
    direction: o === "reverse" ? "alternate" : "normal",
  };
  return c && (h.pseudoElement = c), e.animate(d, h);
}
function _m(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function zw({ type: e, ...t }) {
  return _m(e) && Dm()
    ? e.applyToOptions(t)
    : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class Bw extends Lu {
  constructor(t) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !t))
      return;
    const {
      element: n,
      name: r,
      keyframes: i,
      pseudoElement: s,
      allowFlatten: o = !1,
      finalKeyframe: a,
      onComplete: l,
    } = t;
    (this.isPseudoElement = !!s),
      (this.allowFlatten = o),
      (this.options = t),
      Su(typeof t.type != "string");
    const c = zw(t);
    (this.animation = Ow(n, r, i, c, s)),
      c.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !s)) {
          const d = Au(i, this.options, a, this.speed);
          this.updateMotionValue ? this.updateMotionValue(d) : Vw(n, r, d),
            this.animation.cancel();
        }
        l == null || l(), this.notifyFinished();
      });
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" ||
      t === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    var t, n;
    this.isPseudoElement ||
      (n = (t = this.animation).commitStyles) == null ||
      n.call(t);
  }
  get duration() {
    var n, r;
    const t =
      ((r =
        (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) ==
      null
        ? void 0
        : r.call(n).duration) || 0;
    return Ue(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + Ue(t);
  }
  get time() {
    return Ue(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    (this.finishedTime = null), (this.animation.currentTime = ot(t));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t);
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  attachTimeline({ timeline: t, observe: n }) {
    var r;
    return (
      this.allowFlatten &&
        ((r = this.animation.effect) == null ||
          r.updateTiming({ easing: "linear" })),
      (this.animation.onfinish = null),
      t && _w() ? ((this.animation.timeline = t), We) : n(this)
    );
  }
}
const Im = { anticipate: mm, backInOut: pm, circInOut: ym };
function Uw(e) {
  return e in Im;
}
function $w(e) {
  typeof e.ease == "string" && Uw(e.ease) && (e.ease = Im[e.ease]);
}
const Td = 10;
class Ww extends Bw {
  constructor(t) {
    $w(t),
      Rm(t),
      super(t),
      t.startTime && (this.startTime = t.startTime),
      (this.options = t);
  }
  updateMotionValue(t) {
    const {
      motionValue: n,
      onUpdate: r,
      onComplete: i,
      element: s,
      ...o
    } = this.options;
    if (!n) return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new Du({ ...o, autoplay: !1 }),
      l = ot(this.finishedTime ?? this.time);
    n.setWithVelocity(a.sample(l - Td).value, a.sample(l).value, Td), a.stop();
  }
}
const Pd = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          ($t.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function Hw(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Kw(e, t, n, r) {
  const i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const s = e[e.length - 1],
    o = Pd(i, t),
    a = Pd(s, t);
  return !o || !a ? !1 : Hw(e) || ((n === "spring" || _m(n)) && r);
}
function ul(e) {
  (e.duration = 0), (e.type = "keyframes");
}
const Gw = new Set(["opacity", "clipPath", "filter", "transform"]),
  Yw = ku(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Qw(e) {
  var d;
  const {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: s,
    type: o,
  } = e;
  if (
    !(
      ((d = t == null ? void 0 : t.owner) == null
        ? void 0
        : d.current) instanceof HTMLElement
    )
  )
    return !1;
  const { onUpdate: l, transformTemplate: c } = t.owner.getProps();
  return (
    Yw() &&
    n &&
    Gw.has(n) &&
    (n !== "transform" || !c) &&
    !l &&
    !r &&
    i !== "mirror" &&
    s !== 0 &&
    o !== "inertia"
  );
}
const Xw = 40;
class Zw extends Lu {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: i = 0,
    repeatDelay: s = 0,
    repeatType: o = "loop",
    keyframes: a,
    name: l,
    motionValue: c,
    element: d,
    ...f
  }) {
    var v;
    super(),
      (this.stop = () => {
        var x, k;
        this._animation &&
          (this._animation.stop(),
          (x = this.stopTimeline) == null || x.call(this)),
          (k = this.keyframeResolver) == null || k.cancel();
      }),
      (this.createdAt = Te.now());
    const h = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: i,
        repeatDelay: s,
        repeatType: o,
        name: l,
        motionValue: c,
        element: d,
        ...f,
      },
      y = (d == null ? void 0 : d.KeyframeResolver) || Vu;
    (this.keyframeResolver = new y(
      a,
      (x, k, m) => this.onKeyframesResolved(x, k, h, !m),
      l,
      c,
      d
    )),
      (v = this.keyframeResolver) == null || v.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, i) {
    this.keyframeResolver = void 0;
    const {
      name: s,
      type: o,
      velocity: a,
      delay: l,
      isHandoff: c,
      onUpdate: d,
    } = r;
    (this.resolvedAt = Te.now()),
      Kw(t, s, o, a) ||
        ((xt.instantAnimations || !l) && (d == null || d(Au(t, r, n))),
        (t[0] = t[t.length - 1]),
        ul(r),
        (r.repeat = 0));
    const h = {
        startTime: i
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > Xw
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: n,
        ...r,
        keyframes: t,
      },
      y =
        !c && Qw(h)
          ? new Ww({ ...h, element: h.motionValue.owner.current })
          : new Du(h);
    y.finished.then(() => this.notifyFinished()).catch(We),
      this.pendingTimeline &&
        ((this.stopTimeline = y.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = y);
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {});
  }
  get animation() {
    var t;
    return (
      this._animation ||
        ((t = this.keyframeResolver) == null || t.resume(), Lw()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(t))
        : (this.pendingTimeline = t),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    this._animation && this.animation.cancel(),
      (t = this.keyframeResolver) == null || t.cancel();
  }
}
const qw = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function Jw(e) {
  const t = qw.exec(e);
  if (!t) return [,];
  const [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function Fm(e, t, n = 1) {
  const [r, i] = Jw(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const o = s.trim();
    return om(o) ? parseFloat(o) : o;
  }
  return Pu(i) ? Fm(i, t, n + 1) : i;
}
function _u(e, t) {
  return (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
}
const Om = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...lr,
  ]),
  e2 = { test: (e) => e === "auto", parse: (e) => e },
  zm = (e) => (t) => t.test(e),
  Bm = [ar, L, at, jt, H1, W1, e2],
  bd = (e) => Bm.find(zm(e));
function t2(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || lm(e)
    : !0;
}
const n2 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function r2(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(bu) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = n2.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const i2 = /\b([a-z-]*)\(.*?\)/gu,
  cl = {
    ...$t,
    getAnimatableNone: (e) => {
      const t = e.match(i2);
      return t ? t.map(r2).join(" ") : e;
    },
  },
  Ed = { ...ar, transform: Math.round },
  s2 = {
    rotate: jt,
    rotateX: jt,
    rotateY: jt,
    rotateZ: jt,
    scale: Ui,
    scaleX: Ui,
    scaleY: Ui,
    scaleZ: Ui,
    skew: jt,
    skewX: jt,
    skewY: jt,
    distance: L,
    translateX: L,
    translateY: L,
    translateZ: L,
    x: L,
    y: L,
    z: L,
    perspective: L,
    transformPerspective: L,
    opacity: si,
    originX: gd,
    originY: gd,
    originZ: L,
  },
  Iu = {
    borderWidth: L,
    borderTopWidth: L,
    borderRightWidth: L,
    borderBottomWidth: L,
    borderLeftWidth: L,
    borderRadius: L,
    radius: L,
    borderTopLeftRadius: L,
    borderTopRightRadius: L,
    borderBottomRightRadius: L,
    borderBottomLeftRadius: L,
    width: L,
    maxWidth: L,
    height: L,
    maxHeight: L,
    top: L,
    right: L,
    bottom: L,
    left: L,
    padding: L,
    paddingTop: L,
    paddingRight: L,
    paddingBottom: L,
    paddingLeft: L,
    margin: L,
    marginTop: L,
    marginRight: L,
    marginBottom: L,
    marginLeft: L,
    backgroundPositionX: L,
    backgroundPositionY: L,
    ...s2,
    zIndex: Ed,
    fillOpacity: si,
    strokeOpacity: si,
    numOctaves: Ed,
  },
  o2 = {
    ...Iu,
    color: ne,
    backgroundColor: ne,
    outlineColor: ne,
    fill: ne,
    stroke: ne,
    borderColor: ne,
    borderTopColor: ne,
    borderRightColor: ne,
    borderBottomColor: ne,
    borderLeftColor: ne,
    filter: cl,
    WebkitFilter: cl,
  },
  Um = (e) => o2[e];
function $m(e, t) {
  let n = Um(e);
  return (
    n !== cl && (n = $t), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const a2 = new Set(["auto", "none", "0"]);
function l2(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    const s = e[r];
    typeof s == "string" && !a2.has(s) && oi(s).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (const s of t) e[s] = $m(n, i);
}
class u2 extends Vu {
  constructor(t, n, r, i, s) {
    super(t, n, r, i, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == "string" && ((c = c.trim()), Pu(c))) {
        const d = Fm(c, n.current);
        d !== void 0 && (t[l] = d),
          l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if ((this.resolveNoneKeyframes(), !Om.has(r) || t.length !== 2)) return;
    const [i, s] = t,
      o = bd(i),
      a = bd(s);
    if (o !== a)
      if (Nd(o) && Nd(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == "string" && (t[l] = parseFloat(c));
        }
      else un[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let i = 0; i < t.length; i++) (t[i] === null || t2(t[i])) && r.push(i);
    r.length && l2(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = un[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const i = n[n.length - 1];
    i !== void 0 && t.getValue(r, i).jump(i, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current) return;
    const i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    const s = r.length - 1,
      o = r[s];
    (r[s] = un[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
      o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
      (a = this.removedTransforms) != null &&
        a.length &&
        this.removedTransforms.forEach(([l, c]) => {
          t.getValue(l).set(c);
        }),
      this.resolveNoneKeyframes();
  }
}
function Wm(e, t, n) {
  if (e instanceof EventTarget) return [e];
  if (typeof e == "string") {
    const i = document.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
const Hm = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function Km(e) {
  return am(e) && "offsetHeight" in e;
}
const Md = 30,
  c2 = (e) => !isNaN(parseFloat(e));
class d2 {
  constructor(t, n = {}) {
    (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r) => {
        var s;
        const i = Te.now();
        if (
          (this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            ((s = this.events.change) == null || s.notify(this.current),
            this.dependents))
        )
          for (const o of this.dependents) o.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Te.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = c2(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new ju());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            W.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t) {
    this.passiveEffect
      ? this.passiveEffect(t, this.updateAndNotify)
      : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = Te.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Md
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Md);
    return um(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    var t, n;
    (t = this.dependents) == null || t.clear(),
      (n = this.events.destroy) == null || n.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function tr(e, t) {
  return new d2(e, t);
}
const { schedule: Fu } = wm(queueMicrotask, !1),
  Ye = { x: !1, y: !1 };
function Gm() {
  return Ye.x || Ye.y;
}
function f2(e) {
  return e === "x" || e === "y"
    ? Ye[e]
      ? null
      : ((Ye[e] = !0),
        () => {
          Ye[e] = !1;
        })
    : Ye.x || Ye.y
    ? null
    : ((Ye.x = Ye.y = !0),
      () => {
        Ye.x = Ye.y = !1;
      });
}
function Ym(e, t) {
  const n = Wm(e),
    r = new AbortController(),
    i = { passive: !0, ...t, signal: r.signal };
  return [n, i, () => r.abort()];
}
function Rd(e) {
  return !(e.pointerType === "touch" || Gm());
}
function h2(e, t, n = {}) {
  const [r, i, s] = Ym(e, n),
    o = (a) => {
      if (!Rd(a)) return;
      const { target: l } = a,
        c = t(l, a);
      if (typeof c != "function" || !l) return;
      const d = (f) => {
        Rd(f) && (c(f), l.removeEventListener("pointerleave", d));
      };
      l.addEventListener("pointerleave", d, i);
    };
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", o, i);
    }),
    s
  );
}
const Qm = (e, t) => (t ? (e === t ? !0 : Qm(e, t.parentElement)) : !1),
  Ou = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1,
  p2 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function m2(e) {
  return p2.has(e.tagName) || e.tabIndex !== -1;
}
const os = new WeakSet();
function Ad(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Wo(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const g2 = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = Ad(() => {
    if (os.has(n)) return;
    Wo(n, "down");
    const i = Ad(() => {
        Wo(n, "up");
      }),
      s = () => Wo(n, "cancel");
    n.addEventListener("keyup", i, t), n.addEventListener("blur", s, t);
  });
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Ld(e) {
  return Ou(e) && !Gm();
}
function y2(e, t, n = {}) {
  const [r, i, s] = Ym(e, n),
    o = (a) => {
      const l = a.currentTarget;
      if (!Ld(a)) return;
      os.add(l);
      const c = t(l, a),
        d = (y, v) => {
          window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", h),
            os.has(l) && os.delete(l),
            Ld(y) && typeof c == "function" && c(y, { success: v });
        },
        f = (y) => {
          d(
            y,
            l === window ||
              l === document ||
              n.useGlobalTarget ||
              Qm(l, y.target)
          );
        },
        h = (y) => {
          d(y, !1);
        };
      window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", h, i);
    };
  return (
    r.forEach((a) => {
      (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, i),
        Km(a) &&
          (a.addEventListener("focus", (c) => g2(c, i)),
          !m2(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
    }),
    s
  );
}
function Xm(e) {
  return am(e) && "ownerSVGElement" in e;
}
function v2(e) {
  return Xm(e) && e.tagName === "svg";
}
const ye = (e) => !!(e && e.getVelocity),
  x2 = [...Bm, ne, $t],
  w2 = (e) => x2.find(zm(e)),
  zu = w.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
function Dd(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function S2(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((i) => {
      const s = Dd(i, t);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let i = 0; i < r.length; i++) {
          const s = r[i];
          typeof s == "function" ? s() : Dd(e[i], null);
        }
      };
  };
}
function k2(...e) {
  return w.useCallback(S2(...e), e);
}
class j2 extends w.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent,
        i = (Km(r) && r.offsetWidth) || 0,
        s = this.props.sizeRef.current;
      (s.height = n.offsetHeight || 0),
        (s.width = n.offsetWidth || 0),
        (s.top = n.offsetTop),
        (s.left = n.offsetLeft),
        (s.right = i - s.width - s.left);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function N2({ children: e, isPresent: t, anchorX: n, root: r }) {
  const i = w.useId(),
    s = w.useRef(null),
    o = w.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: a } = w.useContext(zu),
    l = k2(s, e == null ? void 0 : e.ref);
  return (
    w.useInsertionEffect(() => {
      const { width: c, height: d, top: f, left: h, right: y } = o.current;
      if (t || !s.current || !c || !d) return;
      const v = n === "left" ? `left: ${h}` : `right: ${y}`;
      s.current.dataset.motionPopId = i;
      const x = document.createElement("style");
      a && (x.nonce = a);
      const k = r ?? document.head;
      return (
        k.appendChild(x),
        x.sheet &&
          x.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${c}px !important;
            height: ${d}px !important;
            ${v}px !important;
            top: ${f}px !important;
          }
        `),
        () => {
          k.contains(x) && k.removeChild(x);
        }
      );
    }, [t]),
    u.jsx(j2, {
      isPresent: t,
      childRef: s,
      sizeRef: o,
      children: w.cloneElement(e, { ref: l }),
    })
  );
}
const C2 = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: o,
  anchorX: a,
  root: l,
}) => {
  const c = yu(T2),
    d = w.useId();
  let f = !0,
    h = w.useMemo(
      () => (
        (f = !1),
        {
          id: d,
          initial: t,
          isPresent: n,
          custom: i,
          onExitComplete: (y) => {
            c.set(y, !0);
            for (const v of c.values()) if (!v) return;
            r && r();
          },
          register: (y) => (c.set(y, !1), () => c.delete(y)),
        }
      ),
      [n, c, r]
    );
  return (
    s && f && (h = { ...h }),
    w.useMemo(() => {
      c.forEach((y, v) => c.set(v, !1));
    }, [n]),
    w.useEffect(() => {
      !n && !c.size && r && r();
    }, [n]),
    o === "popLayout" &&
      (e = u.jsx(N2, { isPresent: n, anchorX: a, root: l, children: e })),
    u.jsx(oo.Provider, { value: h, children: e })
  );
};
function T2() {
  return new Map();
}
function Zm(e = !0) {
  const t = w.useContext(oo);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: i } = t,
    s = w.useId();
  w.useEffect(() => {
    if (e) return i(s);
  }, [e]);
  const o = w.useCallback(() => e && r && r(s), [s, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const $i = (e) => e.key || "";
function Vd(e) {
  const t = [];
  return (
    w.Children.forEach(e, (n) => {
      w.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const dl = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: i = !0,
    mode: s = "sync",
    propagate: o = !1,
    anchorX: a = "left",
    root: l,
  }) => {
    const [c, d] = Zm(o),
      f = w.useMemo(() => Vd(e), [e]),
      h = o && !c ? [] : f.map($i),
      y = w.useRef(!0),
      v = w.useRef(f),
      x = yu(() => new Map()),
      [k, m] = w.useState(f),
      [p, g] = w.useState(f);
    sm(() => {
      (y.current = !1), (v.current = f);
      for (let C = 0; C < p.length; C++) {
        const P = $i(p[C]);
        h.includes(P) ? x.delete(P) : x.get(P) !== !0 && x.set(P, !1);
      }
    }, [p, h.length, h.join("-")]);
    const S = [];
    if (f !== k) {
      let C = [...f];
      for (let P = 0; P < p.length; P++) {
        const N = p[P],
          V = $i(N);
        h.includes(V) || (C.splice(P, 0, N), S.push(N));
      }
      return s === "wait" && S.length && (C = S), g(Vd(C)), m(f), null;
    }
    const { forceRender: j } = w.useContext(gu);
    return u.jsx(u.Fragment, {
      children: p.map((C) => {
        const P = $i(C),
          N = o && !c ? !1 : f === p || h.includes(P),
          V = () => {
            if (x.has(P)) x.set(P, !0);
            else return;
            let R = !0;
            x.forEach((te) => {
              te || (R = !1);
            }),
              R &&
                (j == null || j(),
                g(v.current),
                o && (d == null || d()),
                r && r());
          };
        return u.jsx(
          C2,
          {
            isPresent: N,
            initial: !y.current || n ? void 0 : !1,
            custom: t,
            presenceAffectsLayout: i,
            mode: s,
            root: l,
            onExitComplete: N ? void 0 : V,
            anchorX: a,
            children: C,
          },
          P
        );
      }),
    });
  },
  qm = w.createContext({ strict: !1 }),
  _d = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  nr = {};
for (const e in _d) nr[e] = { isEnabled: (t) => _d[e].some((n) => !!t[n]) };
function P2(e) {
  for (const t in e) nr[t] = { ...nr[t], ...e[t] };
}
const b2 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Os(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    b2.has(e)
  );
}
let Jm = (e) => !Os(e);
function E2(e) {
  typeof e == "function" && (Jm = (t) => (t.startsWith("on") ? !Os(t) : e(t)));
}
try {
  E2(require("@emotion/is-prop-valid").default);
} catch {}
function M2(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Jm(i) ||
        (n === !0 && Os(i)) ||
        (!t && !Os(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
const ao = w.createContext({});
function lo(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function ai(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Bu = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Uu = ["initial", ...Bu];
function uo(e) {
  return lo(e.animate) || Uu.some((t) => ai(e[t]));
}
function e0(e) {
  return !!(uo(e) || e.variants);
}
function R2(e, t) {
  if (uo(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ai(n) ? n : void 0,
      animate: ai(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function A2(e) {
  const { initial: t, animate: n } = R2(e, w.useContext(ao));
  return w.useMemo(() => ({ initial: t, animate: n }), [Id(t), Id(n)]);
}
function Id(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const li = {};
function L2(e) {
  for (const t in e) (li[t] = e[t]), Tu(t) && (li[t].isCSSVariable = !0);
}
function t0(e, { layout: t, layoutId: n }) {
  return (
    ur.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!li[e] || e === "opacity"))
  );
}
const D2 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  V2 = lr.length;
function _2(e, t, n) {
  let r = "",
    i = !0;
  for (let s = 0; s < V2; s++) {
    const o = lr[s],
      a = e[o];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (o.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const c = Hm(a, Iu[o]);
      if (!l) {
        i = !1;
        const d = D2[o] || o;
        r += `${d}(${c}) `;
      }
      n && (t[o] = c);
    }
  }
  return (r = r.trim()), n ? (r = n(t, i ? "" : r)) : i && (r = "none"), r;
}
function $u(e, t, n) {
  const { style: r, vars: i, transformOrigin: s } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const c = t[l];
    if (ur.has(l)) {
      o = !0;
      continue;
    } else if (Tu(l)) {
      i[l] = c;
      continue;
    } else {
      const d = Hm(c, Iu[l]);
      l.startsWith("origin") ? ((a = !0), (s[l] = d)) : (r[l] = d);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = _2(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: c = "50%", originZ: d = 0 } = s;
    r.transformOrigin = `${l} ${c} ${d}`;
  }
}
const Wu = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function n0(e, t, n) {
  for (const r in t) !ye(t[r]) && !t0(r, n) && (e[r] = t[r]);
}
function I2({ transformTemplate: e }, t) {
  return w.useMemo(() => {
    const n = Wu();
    return $u(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function F2(e, t) {
  const n = e.style || {},
    r = {};
  return n0(r, n, e), Object.assign(r, I2(e, t)), r;
}
function O2(e, t) {
  const n = {},
    r = F2(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
const z2 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  B2 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function U2(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? z2 : B2;
  e[s.offset] = L.transform(-r);
  const o = L.transform(t),
    a = L.transform(n);
  e[s.array] = `${o} ${a}`;
}
function r0(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    pathLength: i,
    pathSpacing: s = 1,
    pathOffset: o = 0,
    ...a
  },
  l,
  c,
  d
) {
  if (($u(e, a, c), l)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: h } = e;
  f.transform && ((h.transform = f.transform), delete f.transform),
    (h.transform || f.transformOrigin) &&
      ((h.transformOrigin = f.transformOrigin ?? "50% 50%"),
      delete f.transformOrigin),
    h.transform &&
      ((h.transformBox = (d == null ? void 0 : d.transformBox) ?? "fill-box"),
      delete f.transformBox),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    i !== void 0 && U2(f, i, s, o, !1);
}
const i0 = () => ({ ...Wu(), attrs: {} }),
  s0 = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function $2(e, t, n, r) {
  const i = w.useMemo(() => {
    const s = i0();
    return (
      r0(s, t, s0(r), e.transformTemplate, e.style),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    n0(s, e.style, e), (i.style = { ...s, ...i.style });
  }
  return i;
}
const W2 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Hu(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(W2.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function H2(e, t, n, { latestValues: r }, i, s = !1) {
  const a = (Hu(e) ? $2 : O2)(t, r, i, e),
    l = M2(t, typeof e == "string", s),
    c = e !== w.Fragment ? { ...l, ...a, ref: n } : {},
    { children: d } = t,
    f = w.useMemo(() => (ye(d) ? d.get() : d), [d]);
  return w.createElement(e, { ...c, children: f });
}
function Fd(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function Ku(e, t, n, r) {
  if (typeof t == "function") {
    const [i, s] = Fd(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [i, s] = Fd(r);
    t = t(n !== void 0 ? n : e.custom, i, s);
  }
  return t;
}
function as(e) {
  return ye(e) ? e.get() : e;
}
function K2({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: G2(n, r, i, e), renderState: t() };
}
function G2(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const h in s) i[h] = as(s[h]);
  let { initial: o, animate: a } = e;
  const l = uo(e),
    c = e0(e);
  t &&
    c &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || o === !1;
  const f = d ? a : o;
  if (f && typeof f != "boolean" && !lo(f)) {
    const h = Array.isArray(f) ? f : [f];
    for (let y = 0; y < h.length; y++) {
      const v = Ku(e, h[y]);
      if (v) {
        const { transitionEnd: x, transition: k, ...m } = v;
        for (const p in m) {
          let g = m[p];
          if (Array.isArray(g)) {
            const S = d ? g.length - 1 : 0;
            g = g[S];
          }
          g !== null && (i[p] = g);
        }
        for (const p in x) i[p] = x[p];
      }
    }
  }
  return i;
}
const o0 = (e) => (t, n) => {
  const r = w.useContext(ao),
    i = w.useContext(oo),
    s = () => K2(e, t, r, i);
  return n ? s() : yu(s);
};
function Gu(e, t, n) {
  var s;
  const { style: r } = e,
    i = {};
  for (const o in r)
    (ye(r[o]) ||
      (t.style && ye(t.style[o])) ||
      t0(o, e) ||
      ((s = n == null ? void 0 : n.getValue(o)) == null
        ? void 0
        : s.liveStyle) !== void 0) &&
      (i[o] = r[o]);
  return i;
}
const Y2 = o0({ scrapeMotionValuesFromProps: Gu, createRenderState: Wu });
function a0(e, t, n) {
  const r = Gu(e, t, n);
  for (const i in e)
    if (ye(e[i]) || ye(t[i])) {
      const s =
        lr.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[s] = e[i];
    }
  return r;
}
const Q2 = o0({ scrapeMotionValuesFromProps: a0, createRenderState: i0 }),
  X2 = Symbol.for("motionComponentSymbol");
function Dn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Z2(e, t, n) {
  return w.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Dn(n) && (n.current = r));
    },
    [t]
  );
}
const Yu = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  q2 = "framerAppearId",
  l0 = "data-" + Yu(q2),
  u0 = w.createContext({});
function J2(e, t, n, r, i) {
  var x, k;
  const { visualElement: s } = w.useContext(ao),
    o = w.useContext(qm),
    a = w.useContext(oo),
    l = w.useContext(zu).reducedMotion,
    c = w.useRef(null);
  (r = r || o.renderer),
    !c.current &&
      r &&
      (c.current = r(e, {
        visualState: t,
        parent: s,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  const d = c.current,
    f = w.useContext(u0);
  d &&
    !d.projection &&
    i &&
    (d.type === "html" || d.type === "svg") &&
    eS(c.current, n, i, f);
  const h = w.useRef(!1);
  w.useInsertionEffect(() => {
    d && h.current && d.update(n, a);
  });
  const y = n[l0],
    v = w.useRef(
      !!y &&
        !((x = window.MotionHandoffIsComplete) != null && x.call(window, y)) &&
        ((k = window.MotionHasOptimisedAnimation) == null
          ? void 0
          : k.call(window, y))
    );
  return (
    sm(() => {
      d &&
        ((h.current = !0),
        (window.MotionIsMounted = !0),
        d.updateFeatures(),
        d.scheduleRenderMicrotask(),
        v.current && d.animationState && d.animationState.animateChanges());
    }),
    w.useEffect(() => {
      d &&
        (!v.current && d.animationState && d.animationState.animateChanges(),
        v.current &&
          (queueMicrotask(() => {
            var m;
            (m = window.MotionHandoffMarkAsComplete) == null ||
              m.call(window, y);
          }),
          (v.current = !1)),
        (d.enteringChildren = void 0));
    }),
    d
  );
}
function eS(e, t, n, r) {
  const {
    layoutId: i,
    layout: s,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: c,
    layoutCrossfade: d,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : c0(e.parent)
  )),
    e.projection.setOptions({
      layoutId: i,
      layout: s,
      alwaysMeasureLayout: !!o || (a && Dn(a)),
      visualElement: e,
      animationType: typeof s == "string" ? s : "both",
      initialPromotionConfig: r,
      crossfade: d,
      layoutScroll: l,
      layoutRoot: c,
    });
}
function c0(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : c0(e.parent);
}
function Ho(e, { forwardMotionProps: t = !1 } = {}, n, r) {
  n && P2(n);
  const i = Hu(e) ? Q2 : Y2;
  function s(a, l) {
    let c;
    const d = { ...w.useContext(zu), ...a, layoutId: tS(a) },
      { isStatic: f } = d,
      h = A2(a),
      y = i(a, f);
    if (!f && vu) {
      nS();
      const v = rS(d);
      (c = v.MeasureLayout),
        (h.visualElement = J2(e, y, d, r, v.ProjectionNode));
    }
    return u.jsxs(ao.Provider, {
      value: h,
      children: [
        c && h.visualElement
          ? u.jsx(c, { visualElement: h.visualElement, ...d })
          : null,
        H2(e, a, Z2(y, h.visualElement, l), y, f, t),
      ],
    });
  }
  s.displayName = `motion.${
    typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`
  }`;
  const o = w.forwardRef(s);
  return (o[X2] = e), o;
}
function tS({ layoutId: e }) {
  const t = w.useContext(gu).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function nS(e, t) {
  w.useContext(qm).strict;
}
function rS(e) {
  const { drag: t, layout: n } = nr;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function iS(e, t) {
  if (typeof Proxy > "u") return Ho;
  const n = new Map(),
    r = (s, o) => Ho(s, o, e, t),
    i = (s, o) => r(s, o);
  return new Proxy(i, {
    get: (s, o) =>
      o === "create"
        ? r
        : (n.has(o) || n.set(o, Ho(o, void 0, e, t)), n.get(o)),
  });
}
function d0({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function sS({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function oS(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ko(e) {
  return e === void 0 || e === 1;
}
function fl({ scale: e, scaleX: t, scaleY: n }) {
  return !Ko(e) || !Ko(t) || !Ko(n);
}
function en(e) {
  return (
    fl(e) ||
    f0(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function f0(e) {
  return Od(e.x) || Od(e.y);
}
function Od(e) {
  return e && e !== "0%";
}
function zs(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function zd(e, t, n, r, i) {
  return i !== void 0 && (e = zs(e, i, r)), zs(e, n, r) + t;
}
function hl(e, t = 0, n = 1, r, i) {
  (e.min = zd(e.min, t, n, r, i)), (e.max = zd(e.max, t, n, r, i));
}
function h0(e, { x: t, y: n }) {
  hl(e.x, t.translate, t.scale, t.originPoint),
    hl(e.y, n.translate, n.scale, n.originPoint);
}
const Bd = 0.999999999999,
  Ud = 1.0000000000001;
function aS(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, o;
  for (let a = 0; a < i; a++) {
    (s = n[a]), (o = s.projectionDelta);
    const { visualElement: l } = s.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        _n(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), h0(e, o)),
      r && en(s.latestValues) && _n(e, s.latestValues));
  }
  t.x < Ud && t.x > Bd && (t.x = 1), t.y < Ud && t.y > Bd && (t.y = 1);
}
function Vn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function $d(e, t, n, r, i = 0.5) {
  const s = G(e.min, e.max, i);
  hl(e, t, n, s, r);
}
function _n(e, t) {
  $d(e.x, t.x, t.scaleX, t.scale, t.originX),
    $d(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function p0(e, t) {
  return d0(oS(e.getBoundingClientRect(), t));
}
function lS(e, t, n) {
  const r = p0(e, n),
    { scroll: i } = t;
  return i && (Vn(r.x, i.offset.x), Vn(r.y, i.offset.y)), r;
}
const Wd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  In = () => ({ x: Wd(), y: Wd() }),
  Hd = () => ({ min: 0, max: 0 }),
  J = () => ({ x: Hd(), y: Hd() }),
  pl = { current: null },
  m0 = { current: !1 };
function uS() {
  if (((m0.current = !0), !!vu))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (pl.current = e.matches);
      e.addEventListener("change", t), t();
    } else pl.current = !1;
}
const cS = new WeakMap();
function dS(e, t, n) {
  for (const r in t) {
    const i = t[r],
      s = n[r];
    if (ye(i)) e.addValue(r, i);
    else if (ye(s)) e.addValue(r, tr(i, { owner: e }));
    else if (s !== i)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, tr(o !== void 0 ? o : i, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Kd = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class fS {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      blockInitialAnimation: s,
      visualState: o,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Vu),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const h = Te.now();
        this.renderScheduledAt < h &&
          ((this.renderScheduledAt = h), W.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: c } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.blockInitialAnimation = !!s),
      (this.isControllingVariants = uo(n)),
      (this.isVariantNode = e0(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const h in f) {
      const y = f[h];
      l[h] !== void 0 && ye(y) && y.set(l[h]);
    }
  }
  mount(t) {
    var n;
    (this.current = t),
      cS.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((r, i) => this.bindToMotionValue(i, r)),
      m0.current || uS(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : pl.current),
      (n = this.parent) == null || n.addChild(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    var t;
    this.projection && this.projection.unmount(),
      Ut(this.notifyUpdate),
      Ut(this.render),
      this.valueSubscriptions.forEach((n) => n()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      (t = this.parent) == null || t.removeChild(this);
    for (const n in this.events) this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(), (r.isMounted = !1));
    }
    this.current = null;
  }
  addChild(t) {
    this.children.add(t),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t),
      this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = ur.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const i = n.on("change", (o) => {
      (this.latestValues[t] = o),
        this.props.onUpdate && W.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender();
    });
    let s;
    window.MotionCheckAppearSync &&
      (s = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        i(), s && s(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in nr) {
      const n = nr[t];
      if (!n) continue;
      const { isEnabled: r, Feature: i } = n;
      if (
        (!this.features[t] &&
          i &&
          r(this.props) &&
          (this.features[t] = new i(this)),
        this.features[t])
      ) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), (s.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : J();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Kd.length; r++) {
      const i = Kd[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = "on" + i,
        o = t[s];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = dS(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = tr(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    let r =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : this.getBaseTargetFromProps(this.props, t) ??
          this.readValueFromInstance(this.current, t, this.options);
    return (
      r != null &&
        (typeof r == "string" && (om(r) || lm(r))
          ? (r = parseFloat(r))
          : !w2(r) && $t.test(n) && (r = $m(t, n)),
        this.setBaseTarget(t, ye(r) ? r.get() : r)),
      ye(r) ? r.get() : r
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var s;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const o = Ku(
        this.props,
        n,
        (s = this.presenceContext) == null ? void 0 : s.custom
      );
      o && (r = o[t]);
    }
    if (n && r !== void 0) return r;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !ye(i)
      ? i
      : this.initialValues[t] !== void 0 && r === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new ju()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    Fu.render(this.render);
  }
}
class g0 extends fS {
  constructor() {
    super(...arguments), (this.KeyframeResolver = u2);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ye(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function y0(e, { style: t, vars: n }, r, i) {
  const s = e.style;
  let o;
  for (o in t) s[o] = t[o];
  i == null || i.applyProjectionStyles(s, r);
  for (o in n) s.setProperty(o, n[o]);
}
function hS(e) {
  return window.getComputedStyle(e);
}
class pS extends g0 {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = y0);
  }
  readValueFromInstance(t, n) {
    var r;
    if (ur.has(n))
      return (r = this.projection) != null && r.isProjecting ? il(n) : bw(t, n);
    {
      const i = hS(t),
        s = (Tu(n) ? i.getPropertyValue(n) : i[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return p0(t, n);
  }
  build(t, n, r) {
    $u(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Gu(t, n, r);
  }
}
const v0 = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function mS(e, t, n, r) {
  y0(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(v0.has(i) ? i : Yu(i), t.attrs[i]);
}
class gS extends g0 {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = J);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (ur.has(n)) {
      const r = Um(n);
      return (r && r.default) || 0;
    }
    return (n = v0.has(n) ? n : Yu(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return a0(t, n, r);
  }
  build(t, n, r) {
    r0(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, i) {
    mS(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = s0(t.tagName)), super.mount(t);
  }
}
const yS = (e, t) =>
  Hu(e) ? new gS(t) : new pS(t, { allowProjection: e !== w.Fragment });
function Gn(e, t, n) {
  const r = e.getProps();
  return Ku(r, t, n !== void 0 ? n : r.custom, e);
}
const ml = (e) => Array.isArray(e);
function vS(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, tr(n));
}
function xS(e) {
  return ml(e) ? e[e.length - 1] || 0 : e;
}
function wS(e, t) {
  const n = Gn(e, t);
  let { transitionEnd: r = {}, transition: i = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const o in s) {
    const a = xS(s[o]);
    vS(e, o, a);
  }
}
function SS(e) {
  return !!(ye(e) && e.add);
}
function gl(e, t) {
  const n = e.getValue("willChange");
  if (SS(n)) return n.add(t);
  if (!n && xt.WillChange) {
    const r = new xt.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function x0(e) {
  return e.props[l0];
}
const kS = (e) => e !== null;
function jS(e, { repeat: t, repeatType: n = "loop" }, r) {
  const i = e.filter(kS),
    s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return i[s];
}
const NS = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  CS = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  TS = { type: "keyframes", duration: 0.8 },
  PS = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  bS = (e, { keyframes: t }) =>
    t.length > 2
      ? TS
      : ur.has(e)
      ? e.startsWith("scale")
        ? CS(t[1])
        : NS
      : PS;
function ES({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...d
}) {
  return !!Object.keys(d).length;
}
const Qu =
  (e, t, n, r = {}, i, s) =>
  (o) => {
    const a = _u(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: c = 0 } = r;
    c = c - ot(l);
    const d = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -c,
      onUpdate: (h) => {
        t.set(h), a.onUpdate && a.onUpdate(h);
      },
      onComplete: () => {
        o(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: s ? void 0 : i,
    };
    ES(a) || Object.assign(d, bS(e, d)),
      d.duration && (d.duration = ot(d.duration)),
      d.repeatDelay && (d.repeatDelay = ot(d.repeatDelay)),
      d.from !== void 0 && (d.keyframes[0] = d.from);
    let f = !1;
    if (
      ((d.type === !1 || (d.duration === 0 && !d.repeatDelay)) &&
        (ul(d), d.delay === 0 && (f = !0)),
      (xt.instantAnimations || xt.skipAnimations) &&
        ((f = !0), ul(d), (d.delay = 0)),
      (d.allowFlatten = !a.type && !a.ease),
      f && !s && t.get() !== void 0)
    ) {
      const h = jS(d.keyframes, a);
      if (h !== void 0) {
        W.update(() => {
          d.onUpdate(h), d.onComplete();
        });
        return;
      }
    }
    return a.isSync ? new Du(d) : new Zw(d);
  };
function MS({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function w0(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let { transition: s = e.getDefaultTransition(), transitionEnd: o, ...a } = t;
  r && (s = r);
  const l = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const d in a) {
    const f = e.getValue(d, e.latestValues[d] ?? null),
      h = a[d];
    if (h === void 0 || (c && MS(c, d))) continue;
    const y = { delay: n, ..._u(s || {}, d) },
      v = f.get();
    if (
      v !== void 0 &&
      !f.isAnimating &&
      !Array.isArray(h) &&
      h === v &&
      !y.velocity
    )
      continue;
    let x = !1;
    if (window.MotionHandoffAnimation) {
      const m = x0(e);
      if (m) {
        const p = window.MotionHandoffAnimation(m, d, W);
        p !== null && ((y.startTime = p), (x = !0));
      }
    }
    gl(e, d),
      f.start(
        Qu(d, f, h, e.shouldReduceMotion && Om.has(d) ? { type: !1 } : y, e, x)
      );
    const k = f.animation;
    k && l.push(k);
  }
  return (
    o &&
      Promise.all(l).then(() => {
        W.update(() => {
          o && wS(e, o);
        });
      }),
    l
  );
}
function S0(e, t, n, r = 0, i = 1) {
  const s = Array.from(e)
      .sort((c, d) => c.sortNodePosition(d))
      .indexOf(t),
    o = e.size,
    a = (o - 1) * r;
  return typeof n == "function" ? n(s, o) : i === 1 ? s * r : a - s * r;
}
function yl(e, t, n = {}) {
  var l;
  const r = Gn(
    e,
    t,
    n.type === "exit"
      ? (l = e.presenceContext) == null
        ? void 0
        : l.custom
      : void 0
  );
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = r ? () => Promise.all(w0(e, r, n)) : () => Promise.resolve(),
    o =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            const {
              delayChildren: d = 0,
              staggerChildren: f,
              staggerDirection: h,
            } = i;
            return RS(e, t, c, d, f, h, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [c, d] = a === "beforeChildren" ? [s, o] : [o, s];
    return c().then(() => d());
  } else return Promise.all([s(), o(n.delay)]);
}
function RS(e, t, n = 0, r = 0, i = 0, s = 1, o) {
  const a = [];
  for (const l of e.variantChildren)
    l.notify("AnimationStart", t),
      a.push(
        yl(l, t, {
          ...o,
          delay:
            n +
            (typeof r == "function" ? 0 : r) +
            S0(e.variantChildren, l, r, i, s),
        }).then(() => l.notify("AnimationComplete", t))
      );
  return Promise.all(a);
}
function AS(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => yl(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = yl(e, t, n);
  else {
    const i = typeof t == "function" ? Gn(e, t, n.custom) : t;
    r = Promise.all(w0(e, i, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function k0(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
const LS = Uu.length;
function j0(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? j0(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < LS; n++) {
    const r = Uu[n],
      i = e.props[r];
    (ai(i) || i === !1) && (t[r] = i);
  }
  return t;
}
const DS = [...Bu].reverse(),
  VS = Bu.length;
function _S(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => AS(e, n, r)));
}
function IS(e) {
  let t = _S(e),
    n = Gd(),
    r = !0;
  const i = (l) => (c, d) => {
    var h;
    const f = Gn(
      e,
      d,
      l === "exit"
        ? (h = e.presenceContext) == null
          ? void 0
          : h.custom
        : void 0
    );
    if (f) {
      const { transition: y, transitionEnd: v, ...x } = f;
      c = { ...c, ...x, ...v };
    }
    return c;
  };
  function s(l) {
    t = l(e);
  }
  function o(l) {
    const { props: c } = e,
      d = j0(e.parent) || {},
      f = [],
      h = new Set();
    let y = {},
      v = 1 / 0;
    for (let k = 0; k < VS; k++) {
      const m = DS[k],
        p = n[m],
        g = c[m] !== void 0 ? c[m] : d[m],
        S = ai(g),
        j = m === l ? p.isActive : null;
      j === !1 && (v = k);
      let C = g === d[m] && g !== c[m] && S;
      if (
        (C && r && e.manuallyAnimateOnMount && (C = !1),
        (p.protectedKeys = { ...y }),
        (!p.isActive && j === null) ||
          (!g && !p.prevProp) ||
          lo(g) ||
          typeof g == "boolean")
      )
        continue;
      const P = FS(p.prevProp, g);
      let N = P || (m === l && p.isActive && !C && S) || (k > v && S),
        V = !1;
      const R = Array.isArray(g) ? g : [g];
      let te = R.reduce(i(m), {});
      j === !1 && (te = {});
      const { prevResolvedValues: St = {} } = p,
        Yt = { ...St, ...te },
        cr = (q) => {
          (N = !0),
            h.has(q) && ((V = !0), h.delete(q)),
            (p.needsAnimating[q] = !0);
          const E = e.getValue(q);
          E && (E.liveStyle = !1);
        };
      for (const q in Yt) {
        const E = te[q],
          A = St[q];
        if (y.hasOwnProperty(q)) continue;
        let D = !1;
        ml(E) && ml(A) ? (D = !k0(E, A)) : (D = E !== A),
          D
            ? E != null
              ? cr(q)
              : h.add(q)
            : E !== void 0 && h.has(q)
            ? cr(q)
            : (p.protectedKeys[q] = !0);
      }
      (p.prevProp = g),
        (p.prevResolvedValues = te),
        p.isActive && (y = { ...y, ...te }),
        r && e.blockInitialAnimation && (N = !1);
      const wi = C && P;
      N &&
        (!wi || V) &&
        f.push(
          ...R.map((q) => {
            const E = { type: m };
            if (
              typeof q == "string" &&
              r &&
              !wi &&
              e.manuallyAnimateOnMount &&
              e.parent
            ) {
              const { parent: A } = e,
                D = Gn(A, q);
              if (A.enteringChildren && D) {
                const { delayChildren: H } = D.transition || {};
                E.delay = S0(A.enteringChildren, e, H);
              }
            }
            return { animation: q, options: E };
          })
        );
    }
    if (h.size) {
      const k = {};
      if (typeof c.initial != "boolean") {
        const m = Gn(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
        m && m.transition && (k.transition = m.transition);
      }
      h.forEach((m) => {
        const p = e.getBaseTarget(m),
          g = e.getValue(m);
        g && (g.liveStyle = !0), (k[m] = p ?? null);
      }),
        f.push({ animation: k });
    }
    let x = !!f.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (x = !1),
      (r = !1),
      x ? t(f) : Promise.resolve()
    );
  }
  function a(l, c) {
    var f;
    if (n[l].isActive === c) return Promise.resolve();
    (f = e.variantChildren) == null ||
      f.forEach((h) => {
        var y;
        return (y = h.animationState) == null ? void 0 : y.setActive(l, c);
      }),
      (n[l].isActive = c);
    const d = o(l);
    for (const h in n) n[h].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      n = Gd();
    },
  };
}
function FS(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !k0(t, e) : !1;
}
function Zt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Gd() {
  return {
    animate: Zt(!0),
    whileInView: Zt(),
    whileHover: Zt(),
    whileTap: Zt(),
    whileDrag: Zt(),
    whileFocus: Zt(),
    exit: Zt(),
  };
}
class Gt {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class OS extends Gt {
  constructor(t) {
    super(t), t.animationState || (t.animationState = IS(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    lo(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) == null || t.call(this);
  }
}
let zS = 0;
class BS extends Gt {
  constructor() {
    super(...arguments), (this.id = zS++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const i = this.node.animationState.setActive("exit", !t);
    n &&
      !t &&
      i.then(() => {
        n(this.id);
      });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const US = { animation: { Feature: OS }, exit: { Feature: BS } };
function ui(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function xi(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const $S = (e) => (t) => Ou(t) && e(t, xi(t));
function _r(e, t, n, r) {
  return ui(e, t, $S(n), r);
}
const N0 = 1e-4,
  WS = 1 - N0,
  HS = 1 + N0,
  C0 = 0.01,
  KS = 0 - C0,
  GS = 0 + C0;
function we(e) {
  return e.max - e.min;
}
function YS(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Yd(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = G(t.min, t.max, e.origin)),
    (e.scale = we(n) / we(t)),
    (e.translate = G(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= WS && e.scale <= HS) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= KS && e.translate <= GS) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Ir(e, t, n, r) {
  Yd(e.x, t.x, n.x, r ? r.originX : void 0),
    Yd(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Qd(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + we(t));
}
function QS(e, t, n) {
  Qd(e.x, t.x, n.x), Qd(e.y, t.y, n.y);
}
function Xd(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + we(t));
}
function Fr(e, t, n) {
  Xd(e.x, t.x, n.x), Xd(e.y, t.y, n.y);
}
function Fe(e) {
  return [e("x"), e("y")];
}
const T0 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  Zd = (e, t) => Math.abs(e - t);
function XS(e, t) {
  const n = Zd(e.x, t.x),
    r = Zd(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class P0 {
  constructor(
    t,
    n,
    {
      transformPagePoint: r,
      contextWindow: i = window,
      dragSnapToOrigin: s = !1,
      distanceThreshold: o = 3,
    } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const h = Yo(this.lastMoveEventInfo, this.history),
          y = this.startEvent !== null,
          v = XS(h.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!y && !v) return;
        const { point: x } = h,
          { timestamp: k } = de;
        this.history.push({ ...x, timestamp: k });
        const { onStart: m, onMove: p } = this.handlers;
        y ||
          (m && m(this.lastMoveEvent, h),
          (this.startEvent = this.lastMoveEvent)),
          p && p(this.lastMoveEvent, h);
      }),
      (this.handlePointerMove = (h, y) => {
        (this.lastMoveEvent = h),
          (this.lastMoveEventInfo = Go(y, this.transformPagePoint)),
          W.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (h, y) => {
        this.end();
        const { onEnd: v, onSessionEnd: x, resumeAnimation: k } = this.handlers;
        if (
          (this.dragSnapToOrigin && k && k(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const m = Yo(
          h.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Go(y, this.transformPagePoint),
          this.history
        );
        this.startEvent && v && v(h, m), x && x(h, m);
      }),
      !Ou(t))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.distanceThreshold = o),
      (this.contextWindow = i || window);
    const a = xi(t),
      l = Go(a, this.transformPagePoint),
      { point: c } = l,
      { timestamp: d } = de;
    this.history = [{ ...c, timestamp: d }];
    const { onSessionStart: f } = n;
    f && f(t, Yo(l, this.history)),
      (this.removeListeners = gi(
        _r(this.contextWindow, "pointermove", this.handlePointerMove),
        _r(this.contextWindow, "pointerup", this.handlePointerUp),
        _r(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Ut(this.updatePoint);
  }
}
function Go(e, t) {
  return t ? { point: t(e.point) } : e;
}
function qd(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Yo({ point: e }, t) {
  return {
    point: e,
    delta: qd(e, b0(t)),
    offset: qd(e, ZS(t)),
    velocity: qS(t, 0.1),
  };
}
function ZS(e) {
  return e[0];
}
function b0(e) {
  return e[e.length - 1];
}
function qS(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = b0(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > ot(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = Ue(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function JS(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? G(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? G(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Jd(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function ek(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Jd(e.x, n, i), y: Jd(e.y, t, r) };
}
function ef(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function tk(e, t) {
  return { x: ef(e.x, t.x), y: ef(e.y, t.y) };
}
function nk(e, t) {
  let n = 0.5;
  const r = we(e),
    i = we(t);
  return (
    i > r
      ? (n = ii(t.min, t.max - r, e.min))
      : r > i && (n = ii(e.min, e.max - i, t.min)),
    vt(0, 1, n)
  );
}
function rk(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const vl = 0.35;
function ik(e = vl) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = vl),
    { x: tf(e, "left", "right"), y: tf(e, "top", "bottom") }
  );
}
function tf(e, t, n) {
  return { min: nf(e, t), max: nf(e, n) };
}
function nf(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const sk = new WeakMap();
class ok {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = J()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: i } = this.visualElement;
    if (i && i.isPresent === !1) return;
    const s = (f) => {
        const { dragSnapToOrigin: h } = this.getProps();
        h ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(xi(f).point);
      },
      o = (f, h) => {
        const { drag: y, dragPropagation: v, onDragStart: x } = this.getProps();
        if (
          y &&
          !v &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = f2(y)),
          !this.openDragLock)
        )
          return;
        (this.latestPointerEvent = f),
          (this.latestPanInfo = h),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Fe((m) => {
            let p = this.getAxisMotionValue(m).get() || 0;
            if (at.test(p)) {
              const { projection: g } = this.visualElement;
              if (g && g.layout) {
                const S = g.layout.layoutBox[m];
                S && (p = we(S) * (parseFloat(p) / 100));
              }
            }
            this.originPoint[m] = p;
          }),
          x && W.postRender(() => x(f, h)),
          gl(this.visualElement, "transform");
        const { animationState: k } = this.visualElement;
        k && k.setActive("whileDrag", !0);
      },
      a = (f, h) => {
        (this.latestPointerEvent = f), (this.latestPanInfo = h);
        const {
          dragPropagation: y,
          dragDirectionLock: v,
          onDirectionLock: x,
          onDrag: k,
        } = this.getProps();
        if (!y && !this.openDragLock) return;
        const { offset: m } = h;
        if (v && this.currentDirection === null) {
          (this.currentDirection = ak(m)),
            this.currentDirection !== null && x && x(this.currentDirection);
          return;
        }
        this.updateAxis("x", h.point, m),
          this.updateAxis("y", h.point, m),
          this.visualElement.render(),
          k && k(f, h);
      },
      l = (f, h) => {
        (this.latestPointerEvent = f),
          (this.latestPanInfo = h),
          this.stop(f, h),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null);
      },
      c = () =>
        Fe((f) => {
          var h;
          return (
            this.getAnimationState(f) === "paused" &&
            ((h = this.getAxisMotionValue(f).animation) == null
              ? void 0
              : h.play())
          );
        }),
      { dragSnapToOrigin: d } = this.getProps();
    this.panSession = new P0(
      t,
      {
        onSessionStart: s,
        onStart: o,
        onMove: a,
        onSessionEnd: l,
        resumeAnimation: c,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: d,
        distanceThreshold: r,
        contextWindow: T0(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = t || this.latestPointerEvent,
      i = n || this.latestPanInfo,
      s = this.isDragging;
    if ((this.cancel(), !s || !i || !r)) return;
    const { velocity: o } = i;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && W.postRender(() => a(r, i));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Wi(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = JS(o, this.constraints[t], this.elastic[t])),
      s.set(o);
  }
  resolveConstraints() {
    var s;
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      r =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (s = this.visualElement.projection) == null
          ? void 0
          : s.layout,
      i = this.constraints;
    t && Dn(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = ek(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = ik(n)),
      i !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Fe((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = rk(r.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Dn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = lS(r, i.root, this.visualElement.getTransformPagePoint());
    let o = tk(i.layout.layoutBox, s);
    if (n) {
      const a = n(sS(o));
      (this.hasMutatedConstraints = !!a), a && (o = d0(a));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      c = Fe((d) => {
        if (!Wi(d, n, this.currentDirection)) return;
        let f = (l && l[d]) || {};
        o && (f = { min: 0, max: 0 });
        const h = i ? 200 : 1e6,
          y = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[d] : 0,
            bounceStiffness: h,
            bounceDamping: y,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...f,
          };
        return this.startAxisValueAnimation(d, v);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      gl(this.visualElement, t), r.start(Qu(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Fe((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Fe((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) == null
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) == null
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Fe((n) => {
      const { drag: r } = this.getProps();
      if (!Wi(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: o, max: a } = i.layout.layoutBox[n];
        s.set(t[n] - G(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Dn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Fe((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        i[o] = nk({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Fe((o) => {
        if (!Wi(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: c } = this.constraints[o];
        a.set(G(l, c, i[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    sk.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = _r(t, "pointerdown", (l) => {
        const { drag: c, dragListener: d = !0 } = this.getProps();
        c && d && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Dn(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      W.read(r);
    const o = ui(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (Fe((d) => {
              const f = this.getAxisMotionValue(d);
              f &&
                ((this.originPoint[d] += l[d].translate),
                f.set(f.get() + l[d].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), s(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: o = vl,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function Wi(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function ak(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class lk extends Gt {
  constructor(t) {
    super(t),
      (this.removeGroupControls = We),
      (this.removeListeners = We),
      (this.controls = new ok(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || We);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const rf = (e) => (t, n) => {
  e && W.postRender(() => e(t, n));
};
class uk extends Gt {
  constructor() {
    super(...arguments), (this.removePointerDownListener = We);
  }
  onPointerDown(t) {
    this.session = new P0(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: T0(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: rf(t),
      onStart: rf(n),
      onMove: r,
      onEnd: (s, o) => {
        delete this.session, i && W.postRender(() => i(s, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = _r(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const ls = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function sf(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const xr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (L.test(e)) e = parseFloat(e);
        else return e;
      const n = sf(e, t.target.x),
        r = sf(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  ck = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = $t.parse(e);
      if (i.length > 5) return r;
      const s = $t.createTransformer(e),
        o = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + o] /= a), (i[1 + o] /= l);
      const c = G(a, l, 0.5);
      return (
        typeof i[2 + o] == "number" && (i[2 + o] /= c),
        typeof i[3 + o] == "number" && (i[3 + o] /= c),
        s(i)
      );
    },
  };
let Qo = !1;
class dk extends w.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    L2(fk),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        Qo && s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (ls.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      { projection: o } = r;
    return (
      o &&
        ((o.isPresent = s),
        (Qo = !0),
        i || t.layoutDependency !== n || n === void 0 || t.isPresent !== s
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? o.promote()
            : o.relegate() ||
              W.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      Fu.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    (Qo = !0),
      i &&
        (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function E0(e) {
  const [t, n] = Zm(),
    r = w.useContext(gu);
  return u.jsx(dk, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: w.useContext(u0),
    isPresent: t,
    safeToRemove: n,
  });
}
const fk = {
  borderRadius: {
    ...xr,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: xr,
  borderTopRightRadius: xr,
  borderBottomLeftRadius: xr,
  borderBottomRightRadius: xr,
  boxShadow: ck,
};
function hk(e, t, n) {
  const r = ye(e) ? e : tr(e);
  return r.start(Qu("", r, t, n)), r.animation;
}
const pk = (e, t) => e.depth - t.depth;
class mk {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    xu(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    wu(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(pk),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function gk(e, t) {
  const n = Te.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (Ut(r), e(s - t));
    };
  return W.setup(r, !0), () => Ut(r);
}
const M0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  yk = M0.length,
  of = (e) => (typeof e == "string" ? parseFloat(e) : e),
  af = (e) => typeof e == "number" || L.test(e);
function vk(e, t, n, r, i, s) {
  i
    ? ((e.opacity = G(0, n.opacity ?? 1, xk(r))),
      (e.opacityExit = G(t.opacity ?? 1, 0, wk(r))))
    : s && (e.opacity = G(t.opacity ?? 1, n.opacity ?? 1, r));
  for (let o = 0; o < yk; o++) {
    const a = `border${M0[o]}Radius`;
    let l = lf(t, a),
      c = lf(n, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || af(l) === af(c)
        ? ((e[a] = Math.max(G(of(l), of(c), r), 0)),
          (at.test(c) || at.test(l)) && (e[a] += "%"))
        : (e[a] = c);
  }
  (t.rotate || n.rotate) && (e.rotate = G(t.rotate || 0, n.rotate || 0, r));
}
function lf(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const xk = R0(0, 0.5, gm),
  wk = R0(0.5, 0.95, We);
function R0(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(ii(e, t, r)));
}
function uf(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Ie(e, t) {
  uf(e.x, t.x), uf(e.y, t.y);
}
function cf(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function df(e, t, n, r, i) {
  return (
    (e -= t), (e = zs(e, 1 / n, r)), i !== void 0 && (e = zs(e, 1 / i, r)), e
  );
}
function Sk(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
  if (
    (at.test(t) &&
      ((t = parseFloat(t)), (t = G(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = G(s.min, s.max, r);
  e === s && (a -= t),
    (e.min = df(e.min, t, n, a, i)),
    (e.max = df(e.max, t, n, a, i));
}
function ff(e, t, [n, r, i], s, o) {
  Sk(e, t[n], t[r], t[i], t.scale, s, o);
}
const kk = ["x", "scaleX", "originX"],
  jk = ["y", "scaleY", "originY"];
function hf(e, t, n, r) {
  ff(e.x, t, kk, n ? n.x : void 0, r ? r.x : void 0),
    ff(e.y, t, jk, n ? n.y : void 0, r ? r.y : void 0);
}
function pf(e) {
  return e.translate === 0 && e.scale === 1;
}
function A0(e) {
  return pf(e.x) && pf(e.y);
}
function mf(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Nk(e, t) {
  return mf(e.x, t.x) && mf(e.y, t.y);
}
function gf(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function L0(e, t) {
  return gf(e.x, t.x) && gf(e.y, t.y);
}
function yf(e) {
  return we(e.x) / we(e.y);
}
function vf(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class Ck {
  constructor() {
    this.members = [];
  }
  add(t) {
    xu(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (wu(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Tk(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: c,
      rotate: d,
      rotateX: f,
      rotateY: h,
      skewX: y,
      skewY: v,
    } = n;
    c && (r = `perspective(${c}px) ${r}`),
      d && (r += `rotate(${d}deg) `),
      f && (r += `rotateX(${f}deg) `),
      h && (r += `rotateY(${h}deg) `),
      y && (r += `skewX(${y}deg) `),
      v && (r += `skewY(${v}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Xo = ["", "X", "Y", "Z"],
  Pk = 1e3;
let bk = 0;
function Zo(e, t, n, r) {
  const { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function D0(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = x0(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: i, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", W, !(i || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && D0(r);
}
function V0({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      (this.id = bk++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            this.nodes.forEach(Rk),
            this.nodes.forEach(Vk),
            this.nodes.forEach(_k),
            this.nodes.forEach(Ak);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new mk());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new ju()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o) {
      if (this.instance) return;
      (this.isSVG = Xm(o) && !v2(o)), (this.instance = o);
      const { layoutId: a, layout: l, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d,
          f = 0;
        const h = () => (this.root.updateBlockedByResize = !1);
        W.read(() => {
          f = window.innerWidth;
        }),
          e(o, () => {
            const y = window.innerWidth;
            y !== f &&
              ((f = y),
              (this.root.updateBlockedByResize = !0),
              d && d(),
              (d = gk(h, 250)),
              ls.hasAnimatedSinceResize &&
                ((ls.hasAnimatedSinceResize = !1), this.nodes.forEach(Sf)));
          });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || l) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeLayoutChanged: h,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || Bk,
                { onLayoutAnimationStart: x, onLayoutAnimationComplete: k } =
                  c.getProps(),
                m = !this.targetLayout || !L0(this.targetLayout, y),
                p = !f && h;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                p ||
                (f && (m || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const g = { ..._u(v, "layout"), onPlay: x, onComplete: k };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((g.delay = 0), (g.type = !1)),
                  this.startAnimation(g),
                  this.setAnimationOrigin(d, p);
              } else
                f || Sf(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        Ut(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Ik),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          D0(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const f = this.path[d];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(xf);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(wf);
        return;
      }
      (this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(Dk),
            this.nodes.forEach(Ek),
            this.nodes.forEach(Mk))
          : this.nodes.forEach(wf),
        this.clearAllSnapshots();
      const a = Te.now();
      (de.delta = vt(0, 1e3 / 60, a - de.timestamp)),
        (de.timestamp = a),
        (de.isProcessing = !0),
        Oo.update.process(de),
        Oo.preRender.process(de),
        Oo.render.process(de),
        (de.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), Fu.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Lk), this.sharedNodes.forEach(Fk);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        W.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      W.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !we(this.snapshot.measuredBox.x) &&
          !we(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = J()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a && this.instance)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!i) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !A0(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        d = c !== this.prevTransformTemplateValue;
      o &&
        this.instance &&
        (a || en(this.latestValues) || d) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        Uk(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var c;
      const { visualElement: o } = this.options;
      if (!o) return J();
      const a = o.measureViewportBox();
      if (
        !(
          ((c = this.scroll) == null ? void 0 : c.wasRoot) || this.path.some($k)
        )
      ) {
        const { scroll: d } = this.root;
        d && (Vn(a.x, d.offset.x), Vn(a.y, d.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var l;
      const a = J();
      if ((Ie(a, o), (l = this.scroll) != null && l.wasRoot)) return a;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c],
          { scroll: f, options: h } = d;
        d !== this.root &&
          f &&
          h.layoutScroll &&
          (f.wasRoot && Ie(a, o), Vn(a.x, f.offset.x), Vn(a.y, f.offset.y));
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const l = J();
      Ie(l, o);
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        !a &&
          d.options.layoutScroll &&
          d.scroll &&
          d !== d.root &&
          _n(l, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }),
          en(d.latestValues) && _n(l, d.latestValues);
      }
      return en(this.latestValues) && _n(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = J();
      Ie(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !en(c.latestValues)) continue;
        fl(c.latestValues) && c.updateSnapshot();
        const d = J(),
          f = c.measurePageBox();
        Ie(d, f),
          hf(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, d);
      }
      return en(this.latestValues) && hf(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== de.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var h;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (
        !(
          o ||
          (l && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          ((h = this.parent) != null && h.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = de.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const y = this.getClosestProjectingParent();
          y && y.layout && this.animationProgress !== 1
            ? ((this.relativeParent = y),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = J()),
              (this.relativeTargetOrigin = J()),
              Fr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                y.layout.layoutBox
              ),
              Ie(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (
          !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = J()), (this.targetWithTransforms = J())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              QS(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
            ? (this.resumingFrom
                ? (this.target = this.applyTransform(this.layout.layoutBox))
                : Ie(this.target, this.layout.layoutBox),
              h0(this.target, this.targetDelta))
            : Ie(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget)
        ) {
          this.attemptToResolveRelativeTarget = !1;
          const y = this.getClosestProjectingParent();
          y &&
          !!y.resumingFrom == !!this.resumingFrom &&
          !y.options.layoutScroll &&
          y.target &&
          this.animationProgress !== 1
            ? ((this.relativeParent = y),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = J()),
              (this.relativeTargetOrigin = J()),
              Fr(this.relativeTargetOrigin, this.target, y.target),
              Ie(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          fl(this.parent.latestValues) ||
          f0(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var v;
      const o = this.getLead(),
        a = !!this.resumingFrom || this !== o;
      let l = !0;
      if (
        ((this.isProjectionDirty ||
          ((v = this.parent) != null && v.isProjectionDirty)) &&
          (l = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (l = !1),
        this.resolvedRelativeTargetAt === de.timestamp && (l = !1),
        l)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      Ie(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        h = this.treeScale.y;
      aS(this.layoutCorrected, this.treeScale, this.path, a),
        o.layout &&
          !o.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((o.target = o.layout.layoutBox), (o.targetWithTransforms = J()));
      const { target: y } = o;
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (cf(this.prevProjectionDelta.x, this.projectionDelta.x),
          cf(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Ir(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== h ||
          !vf(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !vf(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (((a = this.options.visualElement) == null || a.scheduleRender(), o)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = In()),
        (this.projectionDelta = In()),
        (this.projectionDeltaWithTransform = In());
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        c = l ? l.latestValues : {},
        d = { ...this.latestValues },
        f = In();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const h = J(),
        y = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        x = y !== v,
        k = this.getStack(),
        m = !k || k.members.length <= 1,
        p = !!(x && !m && this.options.crossfade === !0 && !this.path.some(zk));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (S) => {
        const j = S / 1e3;
        kf(f.x, o.x, j),
          kf(f.y, o.y, j),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Fr(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Ok(this.relativeTarget, this.relativeTargetOrigin, h, j),
            g && Nk(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = J()),
            Ie(g, this.relativeTarget)),
          x &&
            ((this.animationValues = d), vk(d, c, this.latestValues, j, p, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = j);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      var a, l, c;
      this.notifyListeners("animationStart"),
        (a = this.currentAnimation) == null || a.stop(),
        (c = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) ==
          null || c.stop(),
        this.pendingAnimation &&
          (Ut(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = W.update(() => {
          (ls.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = tr(0)),
            (this.currentAnimation = hk(this.motionValue, [0, 1e3], {
              ...o,
              velocity: 0,
              isSync: !0,
              onUpdate: (d) => {
                this.mixTargetDelta(d), o.onUpdate && o.onUpdate(d);
              },
              onStop: () => {},
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Pk),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: c,
        latestValues: d,
      } = o;
      if (!(!a || !l || !c)) {
        if (
          this !== o &&
          this.layout &&
          c &&
          _0(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || J();
          const f = we(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + f);
          const h = we(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + h);
        }
        Ie(a, l),
          _n(a, d),
          Ir(this.projectionDeltaWithTransform, this.layoutCorrected, a, d);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new Ck()),
        this.sharedNodes.get(o).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: o } = this.options;
      return o
        ? ((a = this.getStack()) == null ? void 0 : a.lead) || this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: o } = this.options;
      return o ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const c = {};
      l.z && Zo("z", o, c, this.animationValues);
      for (let d = 0; d < Xo.length; d++)
        Zo(`rotate${Xo[d]}`, o, c, this.animationValues),
          Zo(`skew${Xo[d]}`, o, c, this.animationValues);
      o.render();
      for (const d in c)
        o.setStaticValue(d, c[d]),
          this.animationValues && (this.animationValues[d] = c[d]);
      o.scheduleRender();
    }
    applyProjectionStyles(o, a) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        o.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        (this.needsReset = !1),
          (o.visibility = ""),
          (o.opacity = ""),
          (o.pointerEvents = as(a == null ? void 0 : a.pointerEvents) || ""),
          (o.transform = l ? l(this.latestValues, "") : "none");
        return;
      }
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        this.options.layoutId &&
          ((o.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (o.pointerEvents = as(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !en(this.latestValues) &&
            ((o.transform = l ? l({}, "") : "none"), (this.hasProjected = !1));
        return;
      }
      o.visibility = "";
      const d = c.animationValues || c.latestValues;
      this.applyTransformsToTarget();
      let f = Tk(this.projectionDeltaWithTransform, this.treeScale, d);
      l && (f = l(d, f)), (o.transform = f);
      const { x: h, y } = this.projectionDelta;
      (o.transformOrigin = `${h.origin * 100}% ${y.origin * 100}% 0`),
        c.animationValues
          ? (o.opacity =
              c === this
                ? d.opacity ?? this.latestValues.opacity ?? 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (o.opacity =
              c === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const v in li) {
        if (d[v] === void 0) continue;
        const { correct: x, applyTo: k, isCSSVariable: m } = li[v],
          p = f === "none" ? d[v] : x(d[v], c);
        if (k) {
          const g = k.length;
          for (let S = 0; S < g; S++) o[k[S]] = p;
        } else
          m ? (this.options.visualElement.renderState.vars[v] = p) : (o[v] = p);
      }
      this.options.layoutId &&
        (o.pointerEvents =
          c === this ? as(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) == null ? void 0 : a.stop();
      }),
        this.root.nodes.forEach(xf),
        this.root.sharedNodes.clear();
    }
  };
}
function Ek(e) {
  e.updateLayout();
}
function Mk(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      o = t.source !== e.layout.source;
    s === "size"
      ? Fe((f) => {
          const h = o ? t.measuredBox[f] : t.layoutBox[f],
            y = we(h);
          (h.min = r[f].min), (h.max = h.min + y);
        })
      : _0(s, t.layoutBox, r) &&
        Fe((f) => {
          const h = o ? t.measuredBox[f] : t.layoutBox[f],
            y = we(r[f]);
          (h.max = h.min + y),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + y));
        });
    const a = In();
    Ir(a, r, t.layoutBox);
    const l = In();
    o ? Ir(l, e.applyTransform(i, !0), t.measuredBox) : Ir(l, r, t.layoutBox);
    const c = !A0(a);
    let d = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: h, layout: y } = f;
        if (h && y) {
          const v = J();
          Fr(v, t.layoutBox, h.layoutBox);
          const x = J();
          Fr(x, r, y.layoutBox),
            L0(v, x) || (d = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = x),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: d,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Rk(e) {
  e.parent &&
    (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty ||
      (e.isSharedProjectionDirty = !!(
        e.isProjectionDirty ||
        e.parent.isProjectionDirty ||
        e.parent.isSharedProjectionDirty
      )),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Ak(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Lk(e) {
  e.clearSnapshot();
}
function xf(e) {
  e.clearMeasurements();
}
function wf(e) {
  e.isLayoutDirty = !1;
}
function Dk(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Sf(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function Vk(e) {
  e.resolveTargetDelta();
}
function _k(e) {
  e.calcProjection();
}
function Ik(e) {
  e.resetSkewAndRotation();
}
function Fk(e) {
  e.removeLeadSnapshot();
}
function kf(e, t, n) {
  (e.translate = G(t.translate, 0, n)),
    (e.scale = G(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function jf(e, t, n, r) {
  (e.min = G(t.min, n.min, r)), (e.max = G(t.max, n.max, r));
}
function Ok(e, t, n, r) {
  jf(e.x, t.x, n.x, r), jf(e.y, t.y, n.y, r);
}
function zk(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Bk = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Nf = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Cf = Nf("applewebkit/") && !Nf("chrome/") ? Math.round : We;
function Tf(e) {
  (e.min = Cf(e.min)), (e.max = Cf(e.max));
}
function Uk(e) {
  Tf(e.x), Tf(e.y);
}
function _0(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !YS(yf(t), yf(n), 0.2))
  );
}
function $k(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const Wk = V0({
    attachResizeListener: (e, t) => ui(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  qo = { current: void 0 },
  I0 = V0({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!qo.current) {
        const e = new Wk({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (qo.current = e);
      }
      return qo.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Hk = {
    pan: { Feature: uk },
    drag: { Feature: lk, ProjectionNode: I0, MeasureLayout: E0 },
  };
function Pf(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const i = "onHover" + n,
    s = r[i];
  s && W.postRender(() => s(t, xi(t)));
}
class Kk extends Gt {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = h2(
        t,
        (n, r) => (Pf(this.node, r, "Start"), (i) => Pf(this.node, i, "End"))
      ));
  }
  unmount() {}
}
class Gk extends Gt {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = gi(
      ui(this.node.current, "focus", () => this.onFocus()),
      ui(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
function bf(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const i = "onTap" + (n === "End" ? "" : n),
    s = r[i];
  s && W.postRender(() => s(t, xi(t)));
}
class Yk extends Gt {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = y2(
        t,
        (n, r) => (
          bf(this.node, r, "Start"),
          (i, { success: s }) => bf(this.node, i, s ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const xl = new WeakMap(),
  Jo = new WeakMap(),
  Qk = (e) => {
    const t = xl.get(e.target);
    t && t(e);
  },
  Xk = (e) => {
    e.forEach(Qk);
  };
function Zk({ root: e, ...t }) {
  const n = e || document;
  Jo.has(n) || Jo.set(n, {});
  const r = Jo.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(Xk, { root: e, ...t })), r[i];
}
function qk(e, t, n) {
  const r = Zk(t);
  return (
    xl.set(e, n),
    r.observe(e),
    () => {
      xl.delete(e), r.unobserve(e);
    }
  );
}
const Jk = { some: 0, all: 1 };
class ej extends Gt {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Jk[i],
      },
      a = (l) => {
        const { isIntersecting: c } = l;
        if (
          this.isInView === c ||
          ((this.isInView = c), s && !c && this.hasEnteredView)
        )
          return;
        c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c);
        const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps(),
          h = c ? d : f;
        h && h(l);
      };
    return qk(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(tj(t, n)) && this.startObserver();
  }
  unmount() {}
}
function tj({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const nj = {
    inView: { Feature: ej },
    tap: { Feature: Yk },
    focus: { Feature: Gk },
    hover: { Feature: Kk },
  },
  rj = { layout: { ProjectionNode: I0, MeasureLayout: E0 } },
  ij = { ...US, ...nj, ...Hk, ...rj },
  b = iS(ij, yS),
  sj = { some: 0, all: 1 };
function oj(e, t, { root: n, margin: r, amount: i = "some" } = {}) {
  const s = Wm(e),
    o = new WeakMap(),
    a = (c) => {
      c.forEach((d) => {
        const f = o.get(d.target);
        if (d.isIntersecting !== !!f)
          if (d.isIntersecting) {
            const h = t(d.target, d);
            typeof h == "function" ? o.set(d.target, h) : l.unobserve(d.target);
          } else typeof f == "function" && (f(d), o.delete(d.target));
      });
    },
    l = new IntersectionObserver(a, {
      root: n,
      rootMargin: r,
      threshold: typeof i == "number" ? i : sj[i],
    });
  return s.forEach((c) => l.observe(c)), () => l.disconnect();
}
function ft(
  e,
  { root: t, margin: n, amount: r, once: i = !1, initial: s = !1 } = {}
) {
  const [o, a] = w.useState(s);
  return (
    w.useEffect(() => {
      if (!e.current || (i && o)) return;
      const l = () => (a(!0), i ? void 0 : () => a(!1)),
        c = { root: (t && t.current) || void 0, margin: n, amount: r };
      return oj(e.current, l, c);
    }, [t, e, n, i, r]),
    o
  );
}
const aj = "/portal/homepage/mtss_logo_2.png",
  lj = () => {
    const [e, t] = w.useState(!1),
      [n, r] = w.useState(!1),
      [i, s] = w.useState(null);
    w.useEffect(() => {
      const a = () => {
        t(window.scrollY > 20);
      };
      return (
        window.addEventListener("scroll", a),
        () => window.removeEventListener("scroll", a)
      );
    }, []);
    const o = [
      { name: "Home", href: "/" },
      { name: "Products", href: "#products" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ];
    return u.jsxs(b.nav, {
      initial: { y: -100 },
      animate: { y: 0 },
      transition: { duration: 0.5 },
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        e ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`,
      children: [
        u.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: u.jsxs("div", {
            className: "flex items-center justify-between h-20",
            children: [
              u.jsxs(Re, {
                to: "/",
                className: "flex items-center space-x-3 group",
                children: [
                  u.jsx(b.div, {
                    whileHover: { rotate: 360 },
                    transition: { duration: 0.6 },
                    className:
                      "w-14 h-14   rounded-lg flex items-center justify-center shadow-lg",
                    children: u.jsx("img", {
                      src: aj,
                      alt: "Micro Integrated Logo",
                      width: 60,
                      height: 60,
                    }),
                  }),
                  u.jsxs("div", {
                    className: "flex flex-col",
                    children: [
                      u.jsx("span", {
                        className: `font-bold text-lg leading-tight transition-colors ${
                          e ? "text-gray-900" : "text-white"
                        }`,
                        children: "Micro Integrated",
                      }),
                      u.jsx("span", {
                        className: `text-xs font-medium transition-colors ${
                          e ? "text-blue-600" : "text-blue-300"
                        }`,
                        children: "Semiconductor Systems Pvt Ltd",
                      }),
                    ],
                  }),
                ],
              }),
              u.jsxs("div", {
                className: "hidden lg:flex items-center space-x-8",
                children: [
                  o.map((a) =>
                    u.jsxs(
                      "div",
                      {
                        className: "relative",
                        onMouseEnter: () => a.dropdown && s(a.name),
                        onMouseLeave: () => s(null),
                        children: [
                          u.jsxs(Re, {
                            to: a.href,
                            className: `flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                              e
                                ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                                : "text-white hover:text-blue-300 hover:bg-white/10"
                            }`,
                            children: [
                              u.jsx("span", { children: a.name }),
                              a.dropdown && u.jsx(Nx, { className: "w-4 h-4" }),
                            ],
                          }),
                          a.dropdown &&
                            i === a.name &&
                            u.jsx(b.div, {
                              initial: { opacity: 0, y: 10 },
                              animate: { opacity: 1, y: 0 },
                              exit: { opacity: 0, y: 10 },
                              className:
                                "absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl py-2 border border-gray-100",
                              children: a.dropdown.map((l) =>
                                u.jsx(
                                  Re,
                                  {
                                    to: l.href,
                                    className:
                                      "block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors",
                                    children: l.name,
                                  },
                                  l.name
                                )
                              ),
                            }),
                        ],
                      },
                      a.name
                    )
                  ),
                  u.jsx(b.button, {
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                    className:
                      "px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200",
                    children: "Get Started",
                  }),
                ],
              }),
              u.jsx("button", {
                onClick: () => r(!n),
                className: `lg:hidden p-2 rounded-lg transition-colors ${
                  e
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`,
                children: n
                  ? u.jsx(N1, { className: "w-6 h-6" })
                  : u.jsx(Zx, { className: "w-6 h-6" }),
              }),
            ],
          }),
        }),
        u.jsx(dl, {
          children:
            n &&
            u.jsx(b.div, {
              initial: { opacity: 0, height: 0 },
              animate: { opacity: 1, height: "auto" },
              exit: { opacity: 0, height: 0 },
              className:
                "lg:hidden bg-white border-t border-gray-100 shadow-lg",
              children: u.jsxs("div", {
                className: "px-4 py-6 space-y-3",
                children: [
                  o.map((a) =>
                    u.jsxs(
                      "div",
                      {
                        children: [
                          u.jsx(Re, {
                            to: a.href,
                            onClick: () => r(!1),
                            className:
                              "block px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors",
                            children: a.name,
                          }),
                          a.dropdown &&
                            u.jsx("div", {
                              className: "ml-4 mt-2 space-y-2",
                              children: a.dropdown.map((l) =>
                                u.jsx(
                                  Re,
                                  {
                                    to: l.href,
                                    onClick: () => r(!1),
                                    className:
                                      "block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors",
                                    children: l.name,
                                  },
                                  l.name
                                )
                              ),
                            }),
                        ],
                      },
                      a.name
                    )
                  ),
                  u.jsx("button", {
                    className:
                      "w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium shadow-lg",
                    children: "Get Started",
                  }),
                ],
              }),
            }),
        }),
      ],
    });
  },
  uj = "/portal/homepage/mtss_logo_2.png",
  cj = () => {
    const e = new Date().getFullYear(),
      t = {
        company: [{ name: "About Us", href: "#about" }],
        products: [
          { name: "VOCOxP", href: "#products" },
          { name: "Token System", href: "#products" },
          { name: "SIGNSAFE", href: "#products" },
          { name: "Loco Driver Desk", href: "#products" },
        ],
        support: [
          { name: "Contact", href: "#contact" },
          { name: "Privacy Policy", href: "#privacy" },
          { name: "Terms of Service", href: "#terms" },
        ],
      },
      n = [];
    return u.jsxs("footer", {
      className: "bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300",
      children: [
        u.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            u.jsxs("div", {
              className:
                "py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8",
              children: [
                u.jsxs("div", {
                  className: "lg:col-span-2",
                  children: [
                    u.jsxs("div", {
                      className: "flex items-center space-x-3 mb-4",
                      children: [
                        u.jsx(b.div, {
                          whileHover: { rotate: 360 },
                          transition: { duration: 0.6 },
                          className:
                            "w-14 h-14   rounded-lg flex items-center justify-center shadow-lg",
                          children: u.jsx("img", {
                            src: uj,
                            alt: "Micro Integrated Logo",
                            width: 60,
                            height: 60,
                          }),
                        }),
                        u.jsxs("div", {
                          children: [
                            u.jsx("h3", {
                              className: "text-white font-bold text-lg",
                              children: "Micro Integrated",
                            }),
                            u.jsx("p", {
                              className: "text-cyan-400 text-sm",
                              children: "Semiconductor Systems Pvt Ltd",
                            }),
                          ],
                        }),
                      ],
                    }),
                    u.jsx("p", {
                      className: "text-gray-400 text-sm mb-6 leading-relaxed",
                      children:
                        "Pioneering Semiconductor-based automation and verification systems for the modern world. Innovating the future of embedded intelligence.",
                    }),
                    u.jsxs("div", {
                      className: "space-y-3",
                      children: [
                        u.jsxs("div", {
                          className: "flex items-center space-x-3 text-sm",
                          children: [
                            u.jsx(Hn, { className: "w-4 h-4 text-cyan-400" }),
                            u.jsx("a", {
                              href: "mailto:info@microintegrated.com",
                              className:
                                "hover:text-cyan-400 transition-colors",
                              children: "info@microintegrated.com",
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: "flex items-center space-x-3 text-sm",
                          children: [
                            u.jsx(Kn, { className: "w-4 h-4 text-cyan-400" }),
                            u.jsx("a", {
                              href: "tel:+1234567890",
                              className:
                                "hover:text-cyan-400 transition-colors",
                              children: "+91 7987913708",
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          className: "flex items-start space-x-3 text-sm",
                          children: [
                            u.jsx(Ds, {
                              className: "w-6 h-6 text-cyan-400 mt-0.5",
                            }),
                            u.jsx("span", {
                              children:
                                "Apt No. 4, 1st Floor, Achyut Prasad Apartment 11, Kishor Bhagirath Tapadia Road Behind Anand Veg Restaurant, Bhalekar Chawl Erandwane, Pune, Maharashtra – 411004",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("h4", {
                      className:
                        "text-white font-semibold mb-4 text-sm uppercase tracking-wider",
                      children: "Company",
                    }),
                    u.jsx("ul", {
                      className: "space-y-3",
                      children: t.company.map((r) =>
                        u.jsx(
                          "li",
                          {
                            children: u.jsxs(Re, {
                              to: r.href,
                              className:
                                "text-sm hover:text-cyan-400 transition-colors duration-200 flex items-center group",
                              children: [
                                u.jsx("span", {
                                  className:
                                    "w-0 group-hover:w-2 h-px bg-cyan-400 transition-all duration-200 mr-0 group-hover:mr-2",
                                }),
                                r.name,
                              ],
                            }),
                          },
                          r.name
                        )
                      ),
                    }),
                  ],
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("h4", {
                      className:
                        "text-white font-semibold mb-4 text-sm uppercase tracking-wider",
                      children: "Products",
                    }),
                    u.jsx("ul", {
                      className: "space-y-3",
                      children: t.products.map((r) =>
                        u.jsx(
                          "li",
                          {
                            children: u.jsxs(Re, {
                              to: r.href,
                              className:
                                "text-sm hover:text-cyan-400 transition-colors duration-200 flex items-center group",
                              children: [
                                u.jsx("span", {
                                  className:
                                    "w-0 group-hover:w-2 h-px bg-cyan-400 transition-all duration-200 mr-0 group-hover:mr-2",
                                }),
                                r.name,
                              ],
                            }),
                          },
                          r.name
                        )
                      ),
                    }),
                  ],
                }),
                u.jsxs("div", {
                  children: [
                    u.jsx("h4", {
                      className:
                        "text-white font-semibold mb-4 text-sm uppercase tracking-wider",
                      children: "Support",
                    }),
                    u.jsx("ul", {
                      className: "space-y-3",
                      children: t.support.map((r) =>
                        u.jsx(
                          "li",
                          {
                            children: u.jsxs(Re, {
                              to: r.href,
                              className:
                                "text-sm hover:text-cyan-400 transition-colors duration-200 flex items-center group",
                              children: [
                                u.jsx("span", {
                                  className:
                                    "w-0 group-hover:w-2 h-px bg-cyan-400 transition-all duration-200 mr-0 group-hover:mr-2",
                                }),
                                r.name,
                              ],
                            }),
                          },
                          r.name
                        )
                      ),
                    }),
                  ],
                }),
              ],
            }),
            u.jsx("div", { className: "border-t border-gray-800" }),
            u.jsxs("div", {
              className:
                "py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0",
              children: [
                u.jsxs("p", {
                  className: "text-sm text-gray-400",
                  children: [
                    "© ",
                    e,
                    " Micro Integrated Semiconductor Systems Pvt Ltd. All rights reserved.",
                  ],
                }),
                u.jsx("div", {
                  className: "flex items-center space-x-4",
                  children: n.map((r) =>
                    u.jsx(
                      b.a,
                      {
                        href: r.href,
                        "aria-label": r.label,
                        whileHover: { scale: 1.1, y: -2 },
                        whileTap: { scale: 0.95 },
                        className:
                          "w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 flex items-center justify-center transition-all duration-300 group",
                        children: u.jsx(r.icon, {
                          className:
                            "w-5 h-5 text-gray-400 group-hover:text-white transition-colors",
                        }),
                      },
                      r.label
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
        u.jsx("div", {
          className:
            "h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600",
        }),
      ],
    });
  },
  dj = () => {
    const [e, t] = w.useState(0),
      n = [
        {
          image:
            "/portal/homepage/glasses-lie-laptop-reflecting-light-from-screen-dark.jpg",
          title: "Innovating the Future of Embedded Intelligence",
          subtitle:
            "Pioneering Semiconductor-based automation and verification systems for the modern world",
          highlight: "Innovation",
        },
        {
          image:
            "/portal/homepage/man-using-laptop-night-top-view-web-banner-with-copy-space.jpg",
          title: "Advanced Railway Automation Solutions",
          subtitle:
            "Empowering railways with cutting-edge crew authentication and training systems",
          highlight: "Automation",
        },
        {
          image: "/portal/homepage/woman-enjoying-vr-headset.jpg",
          title: "Digital Verification & Communication",
          subtitle:
            "Next-generation verification platforms for government and industrial applications",
          highlight: "Technology",
        },
      ];
    w.useEffect(() => {
      const s = setInterval(() => {
        t((o) => (o + 1) % n.length);
      }, 5e3);
      return () => clearInterval(s);
    }, [n.length]);
    const r = () => {
        t((s) => (s + 1) % n.length);
      },
      i = () => {
        t((s) => (s - 1 + n.length) % n.length);
      };
    return u.jsxs("section", {
      id: "home",
      className: "relative h-screen w-full overflow-hidden bg-gray-900",
      children: [
        u.jsx(dl, {
          initial: !1,
          children: u.jsxs(
            b.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.7, ease: "easeInOut" },
              className: "absolute inset-0",
              children: [
                u.jsx("img", {
                  src: n[e].image,
                  alt: n[e].title,
                  className: "absolute inset-0 w-full h-full object-cover",
                }),
                u.jsx("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60",
                }),
                u.jsx("div", {
                  className: "absolute inset-0 opacity-10",
                  children: u.jsx("div", {
                    className: "absolute inset-0",
                    style: {
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    },
                  }),
                }),
              ],
            },
            e
          ),
        }),
        u.jsx("div", {
          className: "relative z-10 h-full flex items-center",
          children: u.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full",
            children: u.jsx("div", {
              className: "max-w-3xl",
              children: u.jsx(dl, {
                mode: "wait",
                children: u.jsxs(
                  b.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    transition: { duration: 0.7, ease: "easeInOut" },
                    children: [
                      u.jsxs("div", {
                        className:
                          "inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 mb-6",
                        children: [
                          u.jsx("span", {
                            className:
                              "w-2 h-2 bg-cyan-400 rounded-full animate-pulse",
                          }),
                          u.jsx("span", {
                            className: "text-cyan-300 text-sm font-medium",
                            children: n[e].highlight,
                          }),
                        ],
                      }),
                      u.jsx("h1", {
                        className:
                          "text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight",
                        children: n[e].title,
                      }),
                      u.jsx("p", {
                        className:
                          "text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed",
                        children: n[e].subtitle,
                      }),
                      u.jsxs("div", {
                        className: "flex flex-col sm:flex-row gap-4",
                        children: [
                          u.jsxs(b.button, {
                            whileHover: { scale: 1.05 },
                            whileTap: { scale: 0.95 },
                            className:
                              "group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2",
                            children: [
                              u.jsx("span", { children: "Explore Solutions" }),
                              u.jsx(Wn, {
                                className:
                                  "w-5 h-5 group-hover:translate-x-1 transition-transform",
                              }),
                            ],
                          }),
                          u.jsx(b.button, {
                            whileHover: { scale: 1.05 },
                            whileTap: { scale: 0.95 },
                            className:
                              "px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold border-2 border-white/30 hover:bg-white/20 transition-all duration-300",
                            children: "Contact Us",
                          }),
                        ],
                      }),
                    ],
                  },
                  e
                ),
              }),
            }),
          }),
        }),
        u.jsx("div", {
          className: "absolute bottom-12 left-0 right-0 z-20",
          children: u.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: u.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                u.jsx("div", {
                  className: "flex space-x-3",
                  children: n.map((s, o) =>
                    u.jsx(
                      "button",
                      {
                        onClick: () => t(o),
                        className: "group relative",
                        "aria-label": `Go to slide ${o + 1}`,
                        children: u.jsx("div", {
                          className: `h-1 rounded-full transition-all duration-300 ${
                            o === e
                              ? "w-12 bg-cyan-400"
                              : "w-8 bg-white/40 hover:bg-white/60"
                          }`,
                        }),
                      },
                      o
                    )
                  ),
                }),
                u.jsxs("div", {
                  className: "flex space-x-3",
                  children: [
                    u.jsx(b.button, {
                      whileHover: { scale: 1.1 },
                      whileTap: { scale: 0.9 },
                      onClick: i,
                      className:
                        "w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300",
                      "aria-label": "Previous slide",
                      children: u.jsx(Tx, { className: "w-6 h-6" }),
                    }),
                    u.jsx(b.button, {
                      whileHover: { scale: 1.1 },
                      whileTap: { scale: 0.9 },
                      onClick: r,
                      className:
                        "w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300",
                      "aria-label": "Next slide",
                      children: u.jsx(bx, { className: "w-6 h-6" }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        u.jsx(b.div, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { delay: 1, duration: 1 },
          className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-20",
          children: u.jsxs(b.div, {
            animate: { y: [0, 10, 0] },
            transition: { duration: 2, repeat: 1 / 0 },
            className: "flex flex-col items-center space-y-2 text-white/60",
            children: [
              u.jsx("span", {
                className: "text-xs font-medium uppercase tracking-wider",
                children: "Scroll",
              }),
              u.jsx("div", {
                className:
                  "w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2",
                children: u.jsx(b.div, {
                  animate: { y: [0, 12, 0] },
                  transition: { duration: 2, repeat: 1 / 0 },
                  className: "w-1 h-3 bg-white/60 rounded-full",
                }),
              }),
            ],
          }),
        }),
      ],
    });
  },
  fj = () => {
    const e = w.useRef(null),
      t = ft(e, { once: !0, margin: "-100px" }),
      n = [
        {
          icon: rm,
          title: "Precision Engineering",
          description:
            "Delivering cutting-edge solutions with meticulous attention to detail",
        },
        {
          icon: Vs,
          title: "Innovation First",
          description:
            "Pushing boundaries with revolutionary Semiconductor technology",
        },
        {
          icon: so,
          title: "Reliability",
          description:
            "Building trust through consistent performance and quality",
        },
        {
          icon: nm,
          title: "Vision",
          description: "Shaping the future of embedded intelligence systems",
        },
      ];
    return u.jsxs("section", {
      id: "about",
      ref: e,
      className:
        "py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden",
      children: [
        u.jsx("div", {
          className: "absolute inset-0 opacity-5",
          children: u.jsx("div", {
            className: "absolute inset-0",
            style: {
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230284c7' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            },
          }),
        }),
        u.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
          children: u.jsxs("div", {
            className: "grid lg:grid-cols-2 gap-16 items-center",
            children: [
              u.jsxs(b.div, {
                initial: { opacity: 0, x: -50 },
                animate: t ? { opacity: 1, x: 0 } : {},
                transition: { duration: 0.8 },
                children: [
                  u.jsxs(b.div, {
                    initial: { opacity: 0, y: 20 },
                    animate: t ? { opacity: 1, y: 0 } : {},
                    transition: { delay: 0.2 },
                    className:
                      "inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-6",
                    children: [
                      u.jsx("span", {
                        className: "w-2 h-2 bg-blue-600 rounded-full",
                      }),
                      u.jsx("span", { children: "About Us" }),
                    ],
                  }),
                  u.jsxs(b.h2, {
                    initial: { opacity: 0, y: 20 },
                    animate: t ? { opacity: 1, y: 0 } : {},
                    transition: { delay: 0.3 },
                    className:
                      "text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight",
                    children: [
                      "About Micro Integrated",
                      u.jsx("span", {
                        className:
                          "block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500",
                        children: "Semiconductor Systems Pvt Ltd",
                      }),
                    ],
                  }),
                  u.jsx(b.p, {
                    initial: { opacity: 0, y: 20 },
                    animate: t ? { opacity: 1, y: 0 } : {},
                    transition: { delay: 0.4 },
                    className: "text-lg text-gray-600 mb-6 leading-relaxed",
                    children:
                      "We are a technology-driven company specializing in innovative embedded systems, automation, and verification solutions. Our expertise serves government organizations, railways, and industrial sectors with advanced systems that combine hardware innovation, software intelligence, and user-focused design.",
                  }),
                  u.jsx(b.p, {
                    initial: { opacity: 0, y: 20 },
                    animate: t ? { opacity: 1, y: 0 } : {},
                    transition: { delay: 0.5 },
                    className: "text-lg text-gray-600 mb-8 leading-relaxed",
                    children:
                      "With a commitment to excellence and innovation, we pioneer Semiconductor-based solutions that empower industries and shape the future of intelligent automation.",
                  }),
                  u.jsxs(b.div, {
                    initial: { opacity: 0, y: 20 },
                    animate: t ? { opacity: 1, y: 0 } : {},
                    transition: { delay: 0.6 },
                    className: "grid grid-cols-3 gap-6",
                    children: [
                      u.jsxs("div", {
                        children: [
                          u.jsx("div", {
                            className: "text-3xl font-bold text-blue-600 mb-1",
                            children: "10+",
                          }),
                          u.jsx("div", {
                            className: "text-sm text-gray-600",
                            children: "Years Experience",
                          }),
                        ],
                      }),
                      u.jsxs("div", {
                        children: [
                          u.jsx("div", {
                            className: "text-3xl font-bold text-blue-600 mb-1",
                            children: "100%",
                          }),
                          u.jsx("div", {
                            className: "text-sm text-gray-600",
                            children: "Client Satisfaction",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              u.jsx(b.div, {
                initial: { opacity: 0, x: 50 },
                animate: t ? { opacity: 1, x: 0 } : {},
                transition: { duration: 0.8, delay: 0.2 },
                className: "grid grid-cols-2 gap-6",
                children: n.map((r, i) =>
                  u.jsxs(
                    b.div,
                    {
                      initial: { opacity: 0, y: 30 },
                      animate: t ? { opacity: 1, y: 0 } : {},
                      transition: { delay: 0.4 + i * 0.1 },
                      whileHover: { scale: 1.05, y: -5 },
                      className:
                        "bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group",
                      children: [
                        u.jsx("div", {
                          className:
                            "w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300",
                          children: u.jsx(r.icon, {
                            className: "w-6 h-6 text-white",
                          }),
                        }),
                        u.jsx("h3", {
                          className: "text-lg font-bold text-gray-900 mb-2",
                          children: r.title,
                        }),
                        u.jsx("p", {
                          className: "text-sm text-gray-600 leading-relaxed",
                          children: r.description,
                        }),
                      ],
                    },
                    r.title
                  )
                ),
              }),
            ],
          }),
        }),
      ],
    });
  },
  hj = () => {
    const e = w.useRef(null),
      t = ft(e, { once: !0, margin: "-100px" }),
      n = [
        {
          icon: o1,
          title: "VOCOxP",
          tagline: "Digital Verification & Communication Platform",
          description:
            "Advanced verification system for secure digital communication and data validation in government and industrial applications.",
          color: "from-blue-600 to-cyan-500",
          features: [
            "Secure Communication",
            "Real-time Verification",
            "Multi-platform Support",
          ],
        },
        {
          icon: zx,
          title: "Token Issuing System",
          tagline: "Palm Vein-Based Authentication",
          description:
            "Cutting-edge biometric token management system using palm vein recognition technology for maximum security.",
          color: "from-purple-600 to-pink-500",
          features: [
            "Biometric Security",
            "Token Management",
            "Indicator System",
          ],
        },
        {
          icon: so,
          title: "SIGNSAFE",
          tagline: "Crew Authentication & Analysis",
          description:
            "Railway crew authentication system with integrated breath analysis for enhanced safety and compliance.",
          color: "from-emerald-600 to-teal-500",
          features: [
            "Crew Authentication",
            "Breath Analysis",
            "Safety Compliance",
          ],
        },
        {
          icon: t1,
          title: "Three Phase Loco Driver Desk",
          tagline: "Realistic Training Simulator",
          description:
            "State-of-the-art three-phase locomotive driver training simulator for comprehensive skill development.",
          color: "from-orange-600 to-red-500",
          features: [
            "Realistic Simulation",
            "Training Analytics",
            "Performance Tracking",
          ],
        },
        {
          icon: m1,
          title: "Traction Motor Testing",
          tagline: "Temperature Monitoring System",
          description:
            "Smart temperature recording and analysis system for traction motor performance optimization and maintenance.",
          color: "from-indigo-600 to-blue-500",
          features: [
            "Temperature Recording",
            "Data Analysis",
            "Predictive Maintenance",
          ],
        },
      ];
    return u.jsxs("section", {
      id: "products",
      ref: e,
      className: "py-24 bg-white relative overflow-hidden",
      children: [
        u.jsx("div", {
          className:
            "absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-full blur-3xl opacity-30",
        }),
        u.jsx("div", {
          className:
            "absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-50 rounded-full blur-3xl opacity-30",
        }),
        u.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
          children: [
            u.jsxs("div", {
              className: "text-center mb-16",
              children: [
                u.jsxs(b.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: t ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.6 },
                  className:
                    "inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4",
                  children: [
                    u.jsx("span", {
                      className: "w-2 h-2 bg-blue-600 rounded-full",
                    }),
                    u.jsx("span", { children: "Our Products" }),
                  ],
                }),
                u.jsxs(b.h2, {
                  initial: { opacity: 0, y: 20 },
                  animate: t ? { opacity: 1, y: 0 } : {},
                  transition: { delay: 0.1, duration: 0.6 },
                  className:
                    "text-4xl md:text-5xl font-bold text-gray-900 mb-4",
                  children: [
                    "Innovative Solutions for",
                    u.jsx("span", {
                      className:
                        "block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500",
                      children: "Modern Industries",
                    }),
                  ],
                }),
                u.jsx(b.p, {
                  initial: { opacity: 0, y: 20 },
                  animate: t ? { opacity: 1, y: 0 } : {},
                  transition: { delay: 0.2, duration: 0.6 },
                  className: "text-xl text-gray-600 max-w-3xl mx-auto",
                  children:
                    "Discover our comprehensive suite of Semiconductor-based products designed to empower industries with cutting-edge automation and verification capabilities.",
                }),
              ],
            }),
            u.jsxs("div", {
              className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
              children: [
                n.map((r, i) =>
                  u.jsxs(
                    b.div,
                    {
                      initial: { opacity: 0, y: 50 },
                      animate: t ? { opacity: 1, y: 0 } : {},
                      transition: { delay: 0.1 * i, duration: 0.6 },
                      whileHover: { y: -10 },
                      className:
                        "group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden",
                      children: [
                        u.jsx("div", {
                          className: `absolute inset-0 bg-gradient-to-br ${r.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`,
                        }),
                        u.jsx("div", {
                          className: `w-16 h-16 rounded-xl bg-gradient-to-br ${r.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10`,
                          children: u.jsx(r.icon, {
                            className: "w-8 h-8 text-white",
                          }),
                        }),
                        u.jsxs("div", {
                          className: "relative z-10",
                          children: [
                            u.jsx("h3", {
                              className:
                                "text-2xl font-bold text-gray-900 mb-2",
                              children: r.title,
                            }),
                            u.jsx("p", {
                              className:
                                "text-sm font-semibold text-blue-600 mb-4",
                              children: r.tagline,
                            }),
                            u.jsx("p", {
                              className: "text-gray-600 mb-6 leading-relaxed",
                              children: r.description,
                            }),
                            u.jsx("div", {
                              className: "space-y-2 mb-6",
                              children: r.features.map((s, o) =>
                                u.jsxs(
                                  "div",
                                  {
                                    className:
                                      "flex items-center space-x-2 text-sm text-gray-600",
                                    children: [
                                      u.jsx("div", {
                                        className:
                                          "w-1.5 h-1.5 rounded-full bg-blue-600",
                                      }),
                                      u.jsx("span", { children: s }),
                                    ],
                                  },
                                  o
                                )
                              ),
                            }),
                            u.jsxs(b.button, {
                              whileHover: { scale: 1.05 },
                              whileTap: { scale: 0.95 },
                              className: `flex items-center space-x-2 text-sm font-semibold bg-gradient-to-r ${r.color} text-transparent bg-clip-text group-hover:gap-3 transition-all duration-300`,
                              children: [
                                u.jsx("span", { children: "Read More" }),
                                u.jsx(Wn, {
                                  className:
                                    "w-4 h-4 text-blue-600 group-hover:translate-x-1 transition-transform",
                                }),
                              ],
                            }),
                          ],
                        }),
                        u.jsx("div", {
                          className:
                            "absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                        }),
                      ],
                    },
                    r.title
                  )
                ),
                u.jsxs(b.div, {
                  initial: { opacity: 0, y: 50 },
                  animate: t ? { opacity: 1, y: 0 } : {},
                  transition: { delay: 0.1 * n.length, duration: 0.6 },
                  whileHover: { y: -10 },
                  className:
                    "group relative bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 flex flex-col items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden",
                  children: [
                    u.jsx("div", {
                      className:
                        "absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300",
                    }),
                    u.jsxs("div", {
                      className: "relative z-10 text-center",
                      children: [
                        u.jsx("div", {
                          className:
                            "w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300",
                          children: u.jsx(Wn, { className: "w-8 h-8" }),
                        }),
                        u.jsx("h3", {
                          className: "text-2xl font-bold mb-2",
                          children: "Explore All Products",
                        }),
                        u.jsx("p", {
                          className: "text-blue-100 mb-6",
                          children:
                            "Discover more innovative solutions and services",
                        }),
                        u.jsxs(b.div, {
                          whileHover: { scale: 1.05 },
                          className:
                            "inline-flex items-center space-x-2 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold",
                          children: [
                            u.jsx("span", { children: "View Catalog" }),
                            u.jsx(Wn, { className: "w-5 h-5" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  pj = () => {
    const e = w.useRef(null),
      t = ft(e, { once: !0, margin: "-100px" }),
      n = [
        { icon: Xa, name: "Embedded Systems", delay: 0 },
        { icon: r1, name: "IoT Integration", delay: 0.1 },
        { icon: Vx, name: "Data Analytics", delay: 0.2 },
        { icon: so, name: "Security Protocols", delay: 0.3 },
        { icon: $x, name: "System Architecture", delay: 0.4 },
        { icon: Vs, name: "Performance Optimization", delay: 0.5 },
      ];
    return u.jsxs("section", {
      id: "innovation",
      ref: e,
      className:
        "py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden",
      children: [
        u.jsxs("div", {
          className: "absolute inset-0",
          children: [
            u.jsx("div", {
              className:
                "absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse",
            }),
            u.jsx("div", {
              className:
                "absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse",
              style: { animationDelay: "1s" },
            }),
            u.jsx("div", {
              className: "absolute inset-0 opacity-10",
              children: u.jsx("div", {
                className: "absolute inset-0",
                style: {
                  backgroundImage: `
              linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
                  backgroundSize: "50px 50px",
                },
              }),
            }),
          ],
        }),
        u.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
          children: [
            u.jsxs("div", {
              className: "text-center mb-16",
              children: [
                u.jsxs(b.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: t ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.6 },
                  className:
                    "inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-cyan-300 text-sm font-semibold mb-4",
                  children: [
                    u.jsx(Vs, { className: "w-4 h-4" }),
                    u.jsx("span", { children: "Innovation & Technology" }),
                  ],
                }),
                u.jsxs(b.h2, {
                  initial: { opacity: 0, y: 20 },
                  animate: t ? { opacity: 1, y: 0 } : {},
                  transition: { delay: 0.1, duration: 0.6 },
                  className: "text-4xl md:text-5xl font-bold mb-6",
                  children: [
                    "Empowering Industries Through",
                    u.jsx("span", {
                      className:
                        "block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400",
                      children: "Intelligent Systems",
                    }),
                  ],
                }),
                u.jsx(b.p, {
                  initial: { opacity: 0, y: 20 },
                  animate: t ? { opacity: 1, y: 0 } : {},
                  transition: { delay: 0.2, duration: 0.6 },
                  className:
                    "text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed",
                  children:
                    "Leveraging cutting-edge Semiconductor technology and advanced engineering to deliver solutions that transform industries and drive digital innovation.",
                }),
              ],
            }),
            u.jsx("div", {
              className: "flex items-center justify-center mb-16",
              children: u.jsxs(b.div, {
                initial: { opacity: 0, scale: 0.8 },
                animate: t ? { opacity: 1, scale: 1 } : {},
                transition: { delay: 0.3, duration: 0.8 },
                className: "relative",
                children: [
                  u.jsx(b.div, {
                    animate: { rotate: 360 },
                    transition: { duration: 20, repeat: 1 / 0, ease: "linear" },
                    className:
                      "w-48 h-48 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-2xl shadow-blue-500/50",
                    children: u.jsx("div", {
                      className:
                        "w-40 h-40 rounded-full bg-gray-900 flex items-center justify-center",
                      children: u.jsx(Xa, {
                        className: "w-20 h-20 text-cyan-400",
                      }),
                    }),
                  }),
                  u.jsx(b.div, {
                    animate: { rotate: -360 },
                    transition: { duration: 15, repeat: 1 / 0, ease: "linear" },
                    className:
                      "absolute inset-0 flex items-center justify-center",
                    children: u.jsx("div", {
                      className:
                        "w-64 h-64 rounded-full border-2 border-blue-500/30",
                    }),
                  }),
                  u.jsx(b.div, {
                    animate: { rotate: 360 },
                    transition: { duration: 25, repeat: 1 / 0, ease: "linear" },
                    className:
                      "absolute inset-0 flex items-center justify-center",
                    children: u.jsx("div", {
                      className:
                        "w-80 h-80 rounded-full border border-cyan-500/20",
                    }),
                  }),
                  [0, 60, 120, 180, 240, 300].map((r, i) =>
                    u.jsx(
                      b.div,
                      {
                        initial: { opacity: 0 },
                        animate: t ? { opacity: [0.3, 0.7, 0.3] } : {},
                        transition: {
                          duration: 2,
                          repeat: 1 / 0,
                          delay: i * 0.2,
                        },
                        className:
                          "absolute top-1/2 left-1/2 w-40 h-0.5 bg-gradient-to-r from-blue-500 to-transparent origin-left",
                        style: { transform: `rotate(${r}deg)` },
                      },
                      r
                    )
                  ),
                ],
              }),
            }),
            u.jsx("div", {
              className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6",
              children: n.map((r) =>
                u.jsxs(
                  b.div,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: t ? { opacity: 1, y: 0 } : {},
                    transition: { delay: r.delay, duration: 0.6 },
                    whileHover: { scale: 1.05, y: -5 },
                    className:
                      "group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 text-center",
                    children: [
                      u.jsx("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300",
                      }),
                      u.jsxs("div", {
                        className: "relative z-10",
                        children: [
                          u.jsx("div", {
                            className:
                              "w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300",
                            children: u.jsx(r.icon, {
                              className: "w-6 h-6 text-white",
                            }),
                          }),
                          u.jsx("h3", {
                            className:
                              "text-sm font-semibold text-gray-300 group-hover:text-white transition-colors",
                            children: r.name,
                          }),
                        ],
                      }),
                    ],
                  },
                  r.name
                )
              ),
            }),
            u.jsx(b.div, {
              initial: { opacity: 0, y: 30 },
              animate: t ? { opacity: 1, y: 0 } : {},
              transition: { delay: 0.8, duration: 0.6 },
              className: "mt-20 grid grid-cols-2 md:grid-cols-4 gap-8",
              children: [
                { value: "99.9%", label: "System Uptime" },
                { value: "50ms", label: "Response Time" },
                { value: "256-bit", label: "Encryption" },
                { value: "24/7", label: "Support" },
              ].map((r, i) =>
                u.jsxs(
                  "div",
                  {
                    className: "text-center",
                    children: [
                      u.jsx(b.div, {
                        initial: { scale: 0 },
                        animate: t ? { scale: 1 } : {},
                        transition: { delay: 0.9 + i * 0.1, type: "spring" },
                        className:
                          "text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2",
                        children: r.value,
                      }),
                      u.jsx("div", {
                        className:
                          "text-gray-400 text-sm font-medium uppercase tracking-wider",
                        children: r.label,
                      }),
                    ],
                  },
                  r.label
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  mj = () => {
    const e = w.useRef(null),
      t = ft(e, { once: !0, margin: "-100px" }),
      [n, r] = w.useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      }),
      i = (a) => {
        r({ ...n, [a.target.name]: a.target.value });
      },
      s = (a) => {
        a.preventDefault(), console.log("Form submitted:", n);
      },
      o = [
        {
          icon: Hn,
          title: "Email Us",
          detail: "info@microintegrated.com",
          link: "mailto:info@microintegrated.com",
        },
        {
          icon: Kn,
          title: "Call Us",
          detail: "+91 7987913708",
          link: "tel:+91 7987913708",
        },
        {
          icon: Ds,
          title: "Visit Us",
          detail: "Innovation Park, Tech City, Semiconductor District",
          link: "#",
        },
      ];
    return u.jsxs("section", {
      id: "contact",
      ref: e,
      className:
        "py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden",
      children: [
        u.jsx("div", {
          className:
            "absolute top-1/4 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30",
        }),
        u.jsx("div", {
          className:
            "absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30",
        }),
        u.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
          children: [
            u.jsxs("div", {
              className: "text-center mb-16",
              children: [
                u.jsxs(b.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: t ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.6 },
                  className:
                    "inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold mb-4",
                  children: [
                    u.jsx("span", {
                      className: "w-2 h-2 bg-blue-600 rounded-full",
                    }),
                    u.jsx("span", { children: "Get In Touch" }),
                  ],
                }),
                u.jsxs(b.h2, {
                  initial: { opacity: 0, y: 20 },
                  animate: t ? { opacity: 1, y: 0 } : {},
                  transition: { delay: 0.1, duration: 0.6 },
                  className:
                    "text-4xl md:text-5xl font-bold text-gray-900 mb-4",
                  children: [
                    "Let's Build the Future",
                    u.jsx("span", {
                      className:
                        "block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 pb-2",
                      children: "Together",
                    }),
                  ],
                }),
                u.jsx(b.p, {
                  initial: { opacity: 0, y: 20 },
                  animate: t ? { opacity: 1, y: 0 } : {},
                  transition: { delay: 0.2, duration: 0.6 },
                  className: "text-xl text-gray-600 max-w-3xl mx-auto",
                  children:
                    "Have a question or want to discuss a project? We're here to help you transform your ideas into reality.",
                }),
              ],
            }),
            u.jsxs("div", {
              className: "grid lg:grid-cols-2 gap-12 items-start",
              children: [
                u.jsx(b.div, {
                  initial: { opacity: 0, x: -50 },
                  animate: t ? { opacity: 1, x: 0 } : {},
                  transition: { duration: 0.8 },
                  children: u.jsxs("div", {
                    className: "space-y-8",
                    children: [
                      o.map((a, l) =>
                        u.jsxs(
                          b.a,
                          {
                            href: a.link,
                            initial: { opacity: 0, y: 30 },
                            animate: t ? { opacity: 1, y: 0 } : {},
                            transition: { delay: 0.3 + l * 0.1 },
                            whileHover: { scale: 1.02, x: 10 },
                            className:
                              "flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group",
                            children: [
                              u.jsx("div", {
                                className:
                                  "w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300",
                                children: u.jsx(a.icon, {
                                  className: "w-6 h-6 text-white",
                                }),
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx("h3", {
                                    className:
                                      "text-lg font-bold text-gray-900 mb-1",
                                    children: a.title,
                                  }),
                                  u.jsx("p", {
                                    className: "text-gray-600",
                                    children: a.detail,
                                  }),
                                ],
                              }),
                            ],
                          },
                          a.title
                        )
                      ),
                      u.jsxs(b.div, {
                        initial: { opacity: 0, y: 30 },
                        animate: t ? { opacity: 1, y: 0 } : {},
                        transition: { delay: 0.6 },
                        className:
                          "p-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl text-white",
                        children: [
                          u.jsx("h3", {
                            className: "text-2xl font-bold mb-4",
                            children: "Business Hours",
                          }),
                          u.jsxs("div", {
                            className: "space-y-2 text-blue-100",
                            children: [
                              u.jsx("p", {
                                children: "Monday - Friday: 9:00 AM - 6:00 PM",
                              }),
                              u.jsx("p", {
                                children: "Saturday, Sunday: Closed",
                              }),
                            ],
                          }),
                          u.jsx("div", {
                            className: "mt-6 pt-6 border-t border-white/20",
                            children: u.jsx("p", {
                              className: "text-sm text-blue-100",
                              children:
                                "For urgent inquiries, please call our 24/7 support hotline.",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                u.jsx(b.div, {
                  initial: { opacity: 0, x: 50 },
                  animate: t ? { opacity: 1, x: 0 } : {},
                  transition: { duration: 0.8, delay: 0.2 },
                  children: u.jsx("form", {
                    onSubmit: s,
                    className:
                      "bg-white rounded-2xl shadow-xl p-8 border border-gray-100",
                    children: u.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        u.jsxs("div", {
                          children: [
                            u.jsx("label", {
                              htmlFor: "name",
                              className:
                                "block text-sm font-semibold text-gray-700 mb-2",
                              children: "Full Name *",
                            }),
                            u.jsxs("div", {
                              className: "relative",
                              children: [
                                u.jsx(im, {
                                  className:
                                    "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400",
                                }),
                                u.jsx("input", {
                                  type: "text",
                                  id: "name",
                                  name: "name",
                                  value: n.name,
                                  onChange: i,
                                  required: !0,
                                  className:
                                    "w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none",
                                  placeholder: "John Doe",
                                }),
                              ],
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          children: [
                            u.jsx("label", {
                              htmlFor: "email",
                              className:
                                "block text-sm font-semibold text-gray-700 mb-2",
                              children: "Email Address *",
                            }),
                            u.jsxs("div", {
                              className: "relative",
                              children: [
                                u.jsx(Hn, {
                                  className:
                                    "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400",
                                }),
                                u.jsx("input", {
                                  type: "email",
                                  id: "email",
                                  name: "email",
                                  value: n.email,
                                  onChange: i,
                                  required: !0,
                                  className:
                                    "w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none",
                                  placeholder: "john@example.com",
                                }),
                              ],
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          children: [
                            u.jsx("label", {
                              htmlFor: "company",
                              className:
                                "block text-sm font-semibold text-gray-700 mb-2",
                              children: "Company Name",
                            }),
                            u.jsxs("div", {
                              className: "relative",
                              children: [
                                u.jsx(tm, {
                                  className:
                                    "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400",
                                }),
                                u.jsx("input", {
                                  type: "text",
                                  id: "company",
                                  name: "company",
                                  value: n.company,
                                  onChange: i,
                                  className:
                                    "w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none",
                                  placeholder: "Your Company",
                                }),
                              ],
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          children: [
                            u.jsx("label", {
                              htmlFor: "phone",
                              className:
                                "block text-sm font-semibold text-gray-700 mb-2",
                              children: "Phone Number",
                            }),
                            u.jsxs("div", {
                              className: "relative",
                              children: [
                                u.jsx(Kn, {
                                  className:
                                    "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400",
                                }),
                                u.jsx("input", {
                                  type: "tel",
                                  id: "phone",
                                  name: "phone",
                                  value: n.phone,
                                  onChange: i,
                                  className:
                                    "w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none",
                                  placeholder: "+91 7987913708",
                                }),
                              ],
                            }),
                          ],
                        }),
                        u.jsxs("div", {
                          children: [
                            u.jsx("label", {
                              htmlFor: "message",
                              className:
                                "block text-sm font-semibold text-gray-700 mb-2",
                              children: "Message *",
                            }),
                            u.jsx("textarea", {
                              id: "message",
                              name: "message",
                              value: n.message,
                              onChange: i,
                              required: !0,
                              rows: 5,
                              className:
                                "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none",
                              placeholder: "Tell us about your project...",
                            }),
                          ],
                        }),
                        u.jsxs(b.button, {
                          type: "submit",
                          whileHover: { scale: 1.02 },
                          whileTap: { scale: 0.98 },
                          className:
                            "w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group",
                          children: [
                            u.jsx("span", { children: "Send Message" }),
                            u.jsx(is, {
                              className:
                                "w-5 h-5 group-hover:translate-x-1 transition-transform",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
function gj() {
  return u.jsxs("div", {
    className: "min-h-screen",
    children: [
      u.jsx(dj, {}),
      u.jsx(fj, {}),
      u.jsx(hj, {}),
      u.jsx(pj, {}),
      u.jsx(mj, {}),
    ],
  });
}
const yj = () => {
  const e = w.useRef(null),
    t = ft(e, { once: !0, margin: "-100px" }),
    n = w.useRef(null),
    r = ft(n, { once: !0, margin: "-100px" }),
    i = w.useRef(null),
    s = ft(i, { once: !0, margin: "-100px" }),
    o = w.useRef(null);
  ft(o, { once: !0, margin: "-100px" });
  const a = [
      {
        icon: rm,
        title: "Mission Driven",
        description:
          "Delivering cutting-edge Semiconductor systems that power the future of technology and innovation.",
        color: "from-blue-600 to-cyan-500",
        bgColor: "bg-blue-50",
      },
      {
        icon: Vs,
        title: "Innovation First",
        description:
          "Constantly pushing boundaries with breakthrough technologies and forward-thinking approaches.",
        color: "from-purple-600 to-pink-500",
        bgColor: "bg-purple-50",
      },
      {
        icon: so,
        title: "Quality Assured",
        description:
          "Maintaining the highest standards in every product, ensuring reliability and excellence.",
        color: "from-emerald-600 to-teal-500",
        bgColor: "bg-emerald-50",
      },
      {
        icon: nm,
        title: "Customer Focus",
        description:
          "Building lasting relationships through exceptional service and tailored solutions.",
        color: "from-orange-600 to-red-500",
        bgColor: "bg-orange-50",
      },
    ],
    l = [
      {
        year: "2010",
        title: "Foundation",
        description:
          "Started our journey with a vision to revolutionize Semiconductor technology.",
        icon: l1,
      },
      {
        year: "2015",
        title: "Expansion",
        description:
          "Expanded operations globally, serving clients across 25+ countries.",
        icon: Za,
      },
      {
        year: "2020",
        title: "Innovation",
        description:
          "Launched groundbreaking VOCOxP technology, setting new industry standards.",
        icon: Hx,
      },
      {
        year: "2025",
        title: "Leadership",
        description:
          "Recognized as industry leaders with successful implementations.",
        icon: pd,
      },
    ],
    c = [
      {
        title: "Expert Team",
        description:
          "Industry-leading professionals with decades of combined experience",
        icon: k1,
      },
      {
        title: "Innovation Lab",
        description:
          "State-of-the-art R&D facilities driving next-gen solutions",
        icon: Xa,
      },
      {
        title: "Global Reach",
        description: "Worldwide presence with local support and expertise",
        icon: Za,
      },
    ];
  return u.jsxs("div", {
    className: "min-h-screen bg-gray-50",
    children: [
      u.jsxs("section", {
        ref: e,
        className:
          "relative pt-28 pb-24 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900",
        children: [
          u.jsx("div", {
            className: "absolute inset-0 opacity-10",
            children: u.jsxs("svg", {
              className: "w-full h-full",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                u.jsx("defs", {
                  children: u.jsxs("pattern", {
                    id: "hexagons",
                    width: "100",
                    height: "87",
                    patternUnits: "userSpaceOnUse",
                    children: [
                      u.jsx("path", {
                        d: "M25 0L50 14.43L50 43.3L25 57.74L0 43.3L0 14.43L25 0Z",
                        fill: "none",
                        stroke: "white",
                        strokeWidth: "0.5",
                      }),
                      u.jsx("path", {
                        d: "M75 0L100 14.43L100 43.3L75 57.74L50 43.3L50 14.43L75 0Z",
                        fill: "none",
                        stroke: "white",
                        strokeWidth: "0.5",
                      }),
                      u.jsx("path", {
                        d: "M25 57.74L50 72.17L50 101.04L25 115.48L0 101.04L0 72.17L25 57.74Z",
                        fill: "none",
                        stroke: "white",
                        strokeWidth: "0.5",
                      }),
                    ],
                  }),
                }),
                u.jsx("rect", {
                  width: "100%",
                  height: "100%",
                  fill: "url(#hexagons)",
                }),
              ],
            }),
          }),
          u.jsx(b.div, {
            animate: {
              scale: [1, 1.2, 1],
              opacity: [1.2, 1.4, 1.2],
              x: [0, 80, 0],
              y: [0, -60, 0],
            },
            transition: { duration: 10, repeat: 1 / 0, ease: "easeInOut" },
            className:
              "absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl",
          }),
          u.jsx(b.div, {
            animate: {
              scale: [1, 1.3, 1],
              opacity: [1.2, 1.5, 1.2],
              x: [0, -100, 0],
              y: [0, 60, 0],
            },
            transition: {
              duration: 12,
              repeat: 1 / 0,
              ease: "easeInOut",
              delay: 1,
            },
            className:
              "absolute top-40 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl",
          }),
          u.jsx("div", {
            className: "absolute inset-0 overflow-hidden opacity-20",
            children: [...Array(20)].map((d, f) =>
              u.jsx(
                b.div,
                {
                  style: {
                    position: "absolute",
                    left: `${(f * 73) % 100}%`,
                    top: `${(f * 47) % 100}%`,
                  },
                  animate: { y: [-50, -150], opacity: [2, 2, 2] },
                  transition: {
                    duration: 3 + (f % 3),
                    repeat: 1 / 0,
                    delay: f * 0.3,
                    ease: "linear",
                  },
                  className: "w-1 h-1 bg-cyan-400 rounded-full",
                },
                f
              )
            ),
          }),
          u.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
            children: u.jsxs(b.div, {
              initial: { opacity: 0, y: 30 },
              animate: t ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8 },
              className: "text-center",
              children: [
                u.jsxs(b.div, {
                  initial: { scale: 0 },
                  animate: t ? { scale: 1 } : {},
                  transition: { delay: 0.2, type: "spring", stiffness: 200 },
                  className:
                    "inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-400 text-sm font-semibold mb-6 backdrop-blur-sm",
                  children: [
                    u.jsx(f1, { className: "w-4 h-4" }),
                    u.jsx("span", { children: "About Us" }),
                  ],
                }),
                u.jsxs(b.h1, {
                  initial: { opacity: 0, y: 20 },
                  animate: t ? { opacity: 1, y: 0 } : {},
                  transition: { delay: 0.3, duration: 0.8 },
                  className:
                    "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6",
                  children: [
                    "Innovating the Future of",
                    u.jsx("span", {
                      className:
                        "block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2 pb-2",
                      children: "Semiconductor Technology",
                    }),
                  ],
                }),
                u.jsx(b.p, {
                  initial: { opacity: 0, y: 20 },
                  animate: t ? { opacity: 1, y: 0 } : {},
                  transition: { delay: 0.4, duration: 0.8 },
                  className:
                    "text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8",
                  children:
                    "Since 2010, we've been pioneering breakthrough solutions in Semiconductor technology",
                }),
                u.jsxs(b.div, {
                  initial: { opacity: 0, y: 20 },
                  animate: t ? { opacity: 1, y: 0 } : {},
                  transition: { delay: 0.5, duration: 0.8 },
                  className: "flex flex-wrap justify-center gap-4",
                  children: [
                    u.jsx(Re, {
                      href: "/contact",
                      children: u.jsxs(b.button, {
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        className:
                          "px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2",
                        children: [
                          u.jsx("span", { children: "Get in Touch" }),
                          u.jsx(Wn, { className: "w-5 h-5" }),
                        ],
                      }),
                    }),
                    u.jsx(Re, {
                      href: "/#products",
                      children: u.jsx(b.button, {
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        className:
                          "px-6 py-2 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border-2 border-white/20 hover:bg-white/20 transition-all duration-300",
                        children: "Our Products",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
          u.jsx("div", {
            className: "absolute bottom-0 left-0 right-0",
            children: u.jsx("svg", {
              viewBox: "0 0 1440 120",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "w-full",
              children: u.jsx("path", {
                d: "M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z",
                fill: "#F9FAFB",
              }),
            }),
          }),
        ],
      }),
      u.jsx("section", {
        ref: n,
        className: "py-24 bg-gray-50",
        children: u.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: u.jsxs("div", {
            className: "grid lg:grid-cols-2 gap-16 items-center",
            children: [
              u.jsxs(b.div, {
                initial: { opacity: 0, x: -50 },
                animate: r ? { opacity: 1, x: 0 } : {},
                transition: { duration: 0.8 },
                children: [
                  u.jsx("h2", {
                    className:
                      "text-4xl md:text-5xl font-bold text-gray-900 mb-6",
                    children: "Our Story",
                  }),
                  u.jsxs("div", {
                    className:
                      "space-y-6 text-gray-600 text-lg leading-relaxed",
                    children: [
                      u.jsx("p", {
                        children:
                          "is a company that provides services related to embedded system development and electronic product design. We service our clients with qualitative and well-executed software development, BPO and Engineering services.",
                      }),
                      u.jsx("p", {
                        children:
                          "Company provides on-demand hardware development, on-demand software development, migration and integration services for embedded software, hardware and software selection consulting, testing and quality assurance services.",
                      }),
                      u.jsx("p", {
                        children:
                          "We cover the full software development life cycle from business analysis to quality assurance and deployment. For a client, this means there is one vendor handling the job.",
                      }),
                    ],
                  }),
                  u.jsx("div", {
                    className: "mt-8 grid grid-cols-3 gap-6",
                    children: c.map((d, f) =>
                      u.jsxs(
                        b.div,
                        {
                          initial: { opacity: 0, y: 20 },
                          animate: r ? { opacity: 1, y: 0 } : {},
                          transition: { delay: 0.2 + f * 0.1, duration: 0.6 },
                          className: "text-center",
                          children: [
                            u.jsx("div", {
                              className:
                                "w-16 h-16 mx-auto mb-3 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center",
                              children: u.jsx(d.icon, {
                                className: "w-8 h-8 text-white",
                              }),
                            }),
                            u.jsx("h3", {
                              className:
                                "font-semibold text-gray-900 text-sm mb-1",
                              children: d.title,
                            }),
                            u.jsx("p", {
                              className: "text-xs text-gray-600",
                              children: d.description,
                            }),
                          ],
                        },
                        d.title
                      )
                    ),
                  }),
                ],
              }),
              u.jsx(b.div, {
                initial: { opacity: 0, x: 50 },
                animate: r ? { opacity: 1, x: 0 } : {},
                transition: { duration: 0.8, delay: 0.2 },
                className: "relative",
                children: u.jsxs("div", {
                  className:
                    "relative bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-5 shadow-2xl",
                  children: [
                    u.jsx("div", {
                      className: "w-full h-80 overflow-hidden rounded-2xl",
                      children: u.jsx("img", {
                        src: "https://img.freepik.com/premium-photo/digital-trophy-award-achievement-success-victory_1249710-7003.jpg",
                        alt: "Semiconductor technology innovation",
                        className: "w-full h-full object-cover",
                      }),
                    }),
                    " ",
                    u.jsx(b.div, {
                      animate: { y: [-10, 10, -10] },
                      transition: {
                        duration: 3,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                      },
                      className:
                        "absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl",
                      children: u.jsx(pd, {
                        className: "w-8 h-8 text-yellow-500",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
      u.jsx("section", {
        className: "py-24 bg-white",
        children: u.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            u.jsxs(b.div, {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              viewport: { once: !0 },
              className: "text-center mb-16",
              children: [
                u.jsx("h2", {
                  className:
                    "text-4xl md:text-5xl font-bold text-gray-900 mb-4",
                  children: "Our Journey",
                }),
                u.jsx("p", {
                  className: "text-xl text-gray-600 max-w-2xl mx-auto",
                  children:
                    "Key milestones that shaped our path to becoming industry leaders",
                }),
              ],
            }),
            u.jsxs("div", {
              className: "relative",
              children: [
                u.jsx("div", {
                  className:
                    "hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-cyan-500",
                }),
                u.jsx("div", {
                  className: "space-y-12",
                  children: l.map((d, f) =>
                    u.jsxs(
                      b.div,
                      {
                        initial: { opacity: 0, x: f % 2 === 0 ? -50 : 50 },
                        whileInView: { opacity: 1, x: 0 },
                        transition: { duration: 0.6, delay: f * 0.1 },
                        viewport: { once: !0 },
                        className: `flex items-center ${
                          f % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                        } gap-8`,
                        children: [
                          u.jsx("div", {
                            className: `flex-1 ${
                              f % 2 === 0 ? "lg:text-right" : "lg:text-left"
                            }`,
                            children: u.jsxs("div", {
                              className: `inline-block bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                                f % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                              }`,
                              children: [
                                u.jsx("div", {
                                  className: "flex items-center space-x-3 mb-3",
                                  children: u.jsx("span", {
                                    className:
                                      "text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500",
                                    children: d.year,
                                  }),
                                }),
                                u.jsx("h3", {
                                  className:
                                    "text-2xl font-bold text-gray-900 mb-2",
                                  children: d.title,
                                }),
                                u.jsx("p", {
                                  className: "text-gray-600",
                                  children: d.description,
                                }),
                              ],
                            }),
                          }),
                          u.jsx("div", {
                            className: "relative shrink-0 hidden lg:block",
                            children: u.jsx(b.div, {
                              whileHover: { scale: 1.2, rotate: 360 },
                              transition: { duration: 0.6 },
                              className:
                                "w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-xl z-10 relative",
                              children: u.jsx(d.icon, {
                                className: "w-8 h-8 text-white",
                              }),
                            }),
                          }),
                          u.jsx("div", { className: "flex-1 hidden lg:block" }),
                        ],
                      },
                      d.year
                    )
                  ),
                }),
              ],
            }),
          ],
        }),
      }),
      u.jsx("section", {
        ref: i,
        className: "py-24 bg-gradient-to-b from-gray-50 to-white",
        children: u.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            u.jsxs(b.div, {
              initial: { opacity: 0, y: 30 },
              animate: s ? { opacity: 1, y: 0 } : {},
              transition: { duration: 0.8 },
              className: "text-center mb-16",
              children: [
                u.jsx("h2", {
                  className:
                    "text-4xl md:text-5xl font-bold text-gray-900 mb-4",
                  children: "Our Core Values",
                }),
                u.jsx("p", {
                  className: "text-xl text-gray-600 max-w-2xl mx-auto",
                  children: "The principles that guide everything we do",
                }),
              ],
            }),
            u.jsx("div", {
              className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
              children: a.map((d, f) =>
                u.jsxs(
                  b.div,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: s ? { opacity: 1, y: 0 } : {},
                    transition: { delay: f * 0.1, duration: 0.6 },
                    whileHover: { y: -10 },
                    className:
                      "group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden",
                    children: [
                      u.jsx("div", {
                        className: `absolute inset-0 bg-gradient-to-br ${d.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`,
                      }),
                      u.jsxs("div", {
                        className: "relative z-10",
                        children: [
                          u.jsx("div", {
                            className: `w-16 h-16 rounded-2xl bg-gradient-to-br ${d.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`,
                            children: u.jsx(d.icon, {
                              className: "w-8 h-8 text-white",
                            }),
                          }),
                          u.jsx("h3", {
                            className: "text-xl font-bold text-gray-900 mb-3",
                            children: d.title,
                          }),
                          u.jsx("p", {
                            className: "text-gray-600 leading-relaxed",
                            children: d.description,
                          }),
                        ],
                      }),
                      u.jsx("div", {
                        className: `absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${d.color} opacity-10 group-hover:opacity-20 transition-opacity`,
                      }),
                    ],
                  },
                  d.title
                )
              ),
            }),
          ],
        }),
      }),
      u.jsx("section", {
        className: "py-2 pb-12 bg-white",
        children: u.jsx("div", {
          className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
          children: u.jsxs(b.div, {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: !0 },
            children: [
              u.jsx(y1, { className: "w-16 h-16 mx-auto mb-6 text-blue-600" }),
              u.jsx("h2", {
                className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6",
                children: "Ready to Transform Your Business?",
              }),
              u.jsx("p", {
                className: "text-xl text-gray-600 mb-8 max-w-2xl mx-auto",
                children:
                  "Join hundreds of companies worldwide who trust us for their Semiconductor systems. Let's build the future together.",
              }),
              u.jsxs("div", {
                className: "flex flex-wrap justify-center gap-4",
                children: [
                  u.jsx(Re, {
                    href: "/contact",
                    children: u.jsxs(b.button, {
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      className:
                        "px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2",
                      children: [
                        u.jsx("span", { children: "Contact Us Today" }),
                        u.jsx(Wn, { className: "w-5 h-5" }),
                      ],
                    }),
                  }),
                  u.jsx(Re, {
                    href: "/#products",
                    children: u.jsx(b.button, {
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      className:
                        "px-8 py-4 bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300",
                      children: "Explore Products",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    ],
  });
};
function vj() {
  return u.jsx(yj, {});
}
const xj = () => {
  const e = w.useRef(null),
    t = ft(e, { once: !0, margin: "-100px" }),
    [n, r] = w.useState(!1),
    [i, s] = w.useState({
      name: "",
      email: "",
      company: "",
      phone: "",
      subject: "",
      message: "",
    }),
    o = (f) => {
      s({ ...i, [f.target.name]: f.target.value });
    },
    a = (f) => {
      f.preventDefault(),
        console.log("Form submitted:", i),
        r(!0),
        setTimeout(() => {
          r(!1),
            s({
              name: "",
              email: "",
              company: "",
              phone: "",
              subject: "",
              message: "",
            });
        }, 3e3);
    },
    l = [
      {
        icon: Hn,
        title: "Email Us",
        detail: "info@microintegrated.com",
        subdDetail: "We'll respond within 24 hours",
        link: "mailto:info@microintegrated.com",
        color: "from-blue-600 to-cyan-500",
      },
      {
        icon: Kn,
        title: "Call Us",
        detail: "+91 7987913708",
        subdDetail: "Mon-Fri from 9am to 6pm",
        link: "tel:+917987913708",
        color: "from-purple-600 to-pink-500",
      },
      {
        icon: Ds,
        title: "Visit Us",
        detail: "",
        subdDetail:
          "Apt No. 4, 1st Floor, Achyut Prasad Apartment 11, Kishor Bhagirath Tapadia Road Behind Anand Veg Restaurant, Bhalekar Chawl Erandwane, Pune, Maharashtra – 411004",
        link: "#",
        color: "from-emerald-600 to-teal-500",
      },
    ],
    c = [
      { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
      { day: "Saturday, Sunday", hours: "Closed" },
    ],
    d = [
      { icon: Gx, href: "#", label: "LinkedIn", color: "hover:text-blue-600" },
      { icon: x1, href: "#", label: "Twitter", color: "hover:text-cyan-500" },
      { icon: Fx, href: "#", label: "Facebook", color: "hover:text-blue-700" },
    ];
  return u.jsxs("div", {
    className: "min-h-screen bg-gray-50",
    children: [
      u.jsxs("section", {
        className:
          "relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900",
        children: [
          u.jsx("div", {
            className: "absolute inset-0 overflow-hidden opacity-10",
            children: u.jsxs("svg", {
              className: "absolute w-full h-full",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                u.jsx("defs", {
                  children: u.jsx("pattern", {
                    id: "grid",
                    width: "40",
                    height: "40",
                    patternUnits: "userSpaceOnUse",
                    children: u.jsx("path", {
                      d: "M 40 0 L 0 0 0 40",
                      fill: "none",
                      stroke: "white",
                      strokeWidth: "0.5",
                    }),
                  }),
                }),
                u.jsx("rect", {
                  width: "100%",
                  height: "100%",
                  fill: "url(#grid)",
                }),
              ],
            }),
          }),
          u.jsxs("div", {
            className: "absolute inset-0 overflow-hidden",
            children: [
              u.jsx(b.div, {
                animate: {
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                },
                transition: { duration: 8, repeat: 1 / 0, ease: "easeInOut" },
                className:
                  "absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl",
              }),
              u.jsx(b.div, {
                animate: {
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                  x: [0, -80, 0],
                  y: [0, 80, 0],
                },
                transition: {
                  duration: 10,
                  repeat: 1 / 0,
                  ease: "easeInOut",
                  delay: 1,
                },
                className:
                  "absolute top-40 right-10 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl",
              }),
              u.jsx(b.div, {
                animate: {
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                  x: [0, 50, 0],
                  y: [0, -80, 0],
                },
                transition: {
                  duration: 12,
                  repeat: 1 / 0,
                  ease: "easeInOut",
                  delay: 2,
                },
                className:
                  "absolute bottom-20 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl",
              }),
            ],
          }),
          u.jsx("div", {
            className: "absolute inset-0 opacity-5",
            children: u.jsxs("svg", {
              className: "w-full h-full",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                u.jsx("defs", {
                  children: u.jsxs("pattern", {
                    id: "circuit",
                    width: "100",
                    height: "100",
                    patternUnits: "userSpaceOnUse",
                    children: [
                      u.jsx("circle", {
                        cx: "50",
                        cy: "50",
                        r: "2",
                        fill: "white",
                      }),
                      u.jsx("line", {
                        x1: "50",
                        y1: "0",
                        x2: "50",
                        y2: "50",
                        stroke: "white",
                        strokeWidth: "1",
                      }),
                      u.jsx("line", {
                        x1: "50",
                        y1: "50",
                        x2: "100",
                        y2: "50",
                        stroke: "white",
                        strokeWidth: "1",
                      }),
                      u.jsx("line", {
                        x1: "50",
                        y1: "50",
                        x2: "0",
                        y2: "50",
                        stroke: "white",
                        strokeWidth: "1",
                      }),
                      u.jsx("circle", {
                        cx: "0",
                        cy: "50",
                        r: "2",
                        fill: "white",
                      }),
                      u.jsx("circle", {
                        cx: "100",
                        cy: "50",
                        r: "2",
                        fill: "white",
                      }),
                      u.jsx("circle", {
                        cx: "50",
                        cy: "0",
                        r: "2",
                        fill: "white",
                      }),
                    ],
                  }),
                }),
                u.jsx("rect", {
                  width: "100%",
                  height: "100%",
                  fill: "url(#circuit)",
                }),
              ],
            }),
          }),
          u.jsx("div", {
            className: "absolute inset-0 overflow-hidden opacity-20",
            children: [...Array(20)].map((f, h) =>
              u.jsx(
                b.div,
                {
                  style: {
                    position: "absolute",
                    left: `${(h * 73) % 100}%`,
                    top: `${(h * 47) % 100}%`,
                  },
                  animate: { y: [-50, -150], opacity: [2, 2, 2] },
                  transition: {
                    duration: 3 + (h % 3),
                    repeat: 1 / 0,
                    delay: h * 0.3,
                    ease: "linear",
                  },
                  className: "w-1 h-1 bg-cyan-400 rounded-full",
                },
                h
              )
            ),
          }),
          u.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
            children: u.jsxs(b.div, {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              className: "text-center",
              children: [
                u.jsxs(b.div, {
                  initial: { scale: 0 },
                  animate: { scale: 1 },
                  transition: { delay: 0.2, type: "spring", stiffness: 200 },
                  className:
                    "inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-cyan-400 text-sm font-semibold mb-6 backdrop-blur-sm",
                  children: [
                    u.jsx(Jx, { className: "w-4 h-4" }),
                    u.jsx("span", { children: "Get In Touch" }),
                  ],
                }),
                u.jsxs(b.h1, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.3, duration: 0.8 },
                  className:
                    "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6",
                  children: [
                    "Let's Build Something",
                    u.jsx("span", {
                      className:
                        "block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-2 pb-2",
                      children: "Amazing Together",
                    }),
                  ],
                }),
                u.jsx(b.p, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.4, duration: 0.8 },
                  className:
                    "text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed",
                  children:
                    "Have a question about our products or services? We're here to help you innovate and transform your ideas into reality.",
                }),
              ],
            }),
          }),
          u.jsx("div", {
            className: "absolute bottom-0 left-0 right-0",
            children: u.jsx("svg", {
              viewBox: "0 0 1440 120",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className: "w-full",
              children: u.jsx("path", {
                d: "M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z",
                fill: "#F9FAFB",
              }),
            }),
          }),
        ],
      }),
      u.jsx("section", {
        ref: e,
        className: "py-16 bg-gray-50",
        children: u.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: u.jsx("div", {
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: l.map((f, h) =>
              u.jsxs(
                b.a,
                {
                  href: f.link,
                  initial: { opacity: 0, y: 30 },
                  animate: t ? { opacity: 1, y: 0 } : {},
                  transition: { delay: h * 0.1, duration: 0.6 },
                  whileHover: { y: -8, scale: 1.02 },
                  className:
                    "group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden",
                  children: [
                    u.jsx("div", {
                      className: `absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`,
                    }),
                    u.jsxs("div", {
                      className: "relative z-10",
                      children: [
                        u.jsx("div", {
                          className: `w-14 h-14 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`,
                          children: u.jsx(f.icon, {
                            className: "w-7 h-7 text-white",
                          }),
                        }),
                        u.jsx("h3", {
                          className: "text-lg font-bold text-gray-900 mb-2",
                          children: f.title,
                        }),
                        u.jsx("p", {
                          className: "text-gray-900 font-medium mb-1",
                          children: f.detail,
                        }),
                        u.jsx("p", {
                          className: "text-sm text-gray-500",
                          children: f.subdDetail,
                        }),
                      ],
                    }),
                    u.jsx(b.div, {
                      initial: { x: -10, opacity: 0 },
                      whileHover: { x: 0, opacity: 1 },
                      className: "absolute bottom-6 right-6 text-blue-600",
                      children: u.jsx(is, { className: "w-5 h-5" }),
                    }),
                  ],
                },
                f.title
              )
            ),
          }),
        }),
      }),
      u.jsx("section", {
        className: "py-16 bg-gray-50",
        children: u.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: u.jsxs("div", {
            className: "grid lg:grid-cols-2 gap-12",
            children: [
              u.jsx(b.div, {
                initial: { opacity: 0, x: -50 },
                animate: t ? { opacity: 1, x: 0 } : {},
                transition: { duration: 0.8 },
                children: u.jsxs("div", {
                  className:
                    "bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100",
                  children: [
                    u.jsx("h2", {
                      className: "text-3xl font-bold text-gray-900 mb-2",
                      children: "Send us a message",
                    }),
                    u.jsx("p", {
                      className: "text-gray-600 mb-8",
                      children:
                        "Fill out the form below and we'll get back to you shortly.",
                    }),
                    n
                      ? u.jsxs(b.div, {
                          initial: { scale: 0 },
                          animate: { scale: 1 },
                          className:
                            "flex flex-col items-center justify-center py-12",
                          children: [
                            u.jsx(b.div, {
                              initial: { scale: 0 },
                              animate: { scale: 1 },
                              transition: { delay: 0.2, type: "spring" },
                              className:
                                "w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4",
                              children: u.jsx(Mx, {
                                className: "w-10 h-10 text-white",
                              }),
                            }),
                            u.jsx("h3", {
                              className:
                                "text-2xl font-bold text-gray-900 mb-2",
                              children: "Message Sent!",
                            }),
                            u.jsx("p", {
                              className: "text-gray-600 text-center",
                              children:
                                "Thank you for contacting us. We'll respond within 24 hours.",
                            }),
                          ],
                        })
                      : u.jsxs("form", {
                          onSubmit: a,
                          className: "space-y-6",
                          children: [
                            u.jsxs("div", {
                              className: "grid md:grid-cols-2 gap-6",
                              children: [
                                u.jsxs("div", {
                                  children: [
                                    u.jsx("label", {
                                      htmlFor: "name",
                                      className:
                                        "block text-sm font-semibold text-gray-700 mb-2",
                                      children: "Full Name *",
                                    }),
                                    u.jsxs("div", {
                                      className: "relative",
                                      children: [
                                        u.jsx(im, {
                                          className:
                                            "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400",
                                        }),
                                        u.jsx("input", {
                                          type: "text",
                                          id: "name",
                                          name: "name",
                                          value: i.name,
                                          onChange: o,
                                          required: !0,
                                          className:
                                            "w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none hover:border-gray-300",
                                          placeholder: "John Doe",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                u.jsxs("div", {
                                  children: [
                                    u.jsx("label", {
                                      htmlFor: "email",
                                      className:
                                        "block text-sm font-semibold text-gray-700 mb-2",
                                      children: "Email Address *",
                                    }),
                                    u.jsxs("div", {
                                      className: "relative",
                                      children: [
                                        u.jsx(Hn, {
                                          className:
                                            "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400",
                                        }),
                                        u.jsx("input", {
                                          type: "email",
                                          id: "email",
                                          name: "email",
                                          value: i.email,
                                          onChange: o,
                                          required: !0,
                                          className:
                                            "w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none hover:border-gray-300",
                                          placeholder: "john@example.com",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              className: "grid md:grid-cols-2 gap-6",
                              children: [
                                u.jsxs("div", {
                                  children: [
                                    u.jsx("label", {
                                      htmlFor: "company",
                                      className:
                                        "block text-sm font-semibold text-gray-700 mb-2",
                                      children: "Company Name",
                                    }),
                                    u.jsxs("div", {
                                      className: "relative",
                                      children: [
                                        u.jsx(tm, {
                                          className:
                                            "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400",
                                        }),
                                        u.jsx("input", {
                                          type: "text",
                                          id: "company",
                                          name: "company",
                                          value: i.company,
                                          onChange: o,
                                          className:
                                            "w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none hover:border-gray-300",
                                          placeholder: "Your Company",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                u.jsxs("div", {
                                  children: [
                                    u.jsx("label", {
                                      htmlFor: "phone",
                                      className:
                                        "block text-sm font-semibold text-gray-700 mb-2",
                                      children: "Phone Number",
                                    }),
                                    u.jsxs("div", {
                                      className: "relative",
                                      children: [
                                        u.jsx(Kn, {
                                          className:
                                            "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400",
                                        }),
                                        u.jsx("input", {
                                          type: "tel",
                                          id: "phone",
                                          name: "phone",
                                          value: i.phone,
                                          onChange: o,
                                          className:
                                            "w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none hover:border-gray-300",
                                          placeholder: "+91 7987913708",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("label", {
                                  htmlFor: "subject",
                                  className:
                                    "block text-sm font-semibold text-gray-700 mb-2",
                                  children: "Subject *",
                                }),
                                u.jsx("input", {
                                  type: "text",
                                  id: "subject",
                                  name: "subject",
                                  value: i.subject,
                                  onChange: o,
                                  required: !0,
                                  className:
                                    "w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none hover:border-gray-300",
                                  placeholder: "How can we help you?",
                                }),
                              ],
                            }),
                            u.jsxs("div", {
                              children: [
                                u.jsx("label", {
                                  htmlFor: "message",
                                  className:
                                    "block text-sm font-semibold text-gray-700 mb-2",
                                  children: "Message *",
                                }),
                                u.jsx("textarea", {
                                  id: "message",
                                  name: "message",
                                  value: i.message,
                                  onChange: o,
                                  required: !0,
                                  rows: 6,
                                  className:
                                    "w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none hover:border-gray-300",
                                  placeholder:
                                    "Tell us more about your project or inquiry...",
                                }),
                              ],
                            }),
                            u.jsxs(b.button, {
                              type: "submit",
                              whileHover: { scale: 1.02 },
                              whileTap: { scale: 0.98 },
                              className:
                                "w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group",
                              children: [
                                u.jsx("span", { children: "Send Message" }),
                                u.jsx(is, {
                                  className:
                                    "w-5 h-5 group-hover:translate-x-1 transition-transform",
                                }),
                              ],
                            }),
                          ],
                        }),
                  ],
                }),
              }),
              u.jsxs(b.div, {
                initial: { opacity: 0, x: 50 },
                animate: t ? { opacity: 1, x: 0 } : {},
                transition: { duration: 0.8, delay: 0.2 },
                className: "space-y-8",
                children: [
                  u.jsxs("div", {
                    className:
                      "bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 text-white shadow-2xl",
                    children: [
                      u.jsxs("div", {
                        className: "flex items-center space-x-3 mb-6",
                        children: [
                          u.jsx("div", {
                            className:
                              "w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center",
                            children: u.jsx(Ax, { className: "w-6 h-6" }),
                          }),
                          u.jsx("h3", {
                            className: "text-2xl font-bold",
                            children: "Office Hours",
                          }),
                        ],
                      }),
                      u.jsx("div", {
                        className: "space-y-4",
                        children: c.map((f, h) =>
                          u.jsxs(
                            b.div,
                            {
                              initial: { opacity: 0, x: -20 },
                              animate: t ? { opacity: 1, x: 0 } : {},
                              transition: { delay: 0.4 + h * 0.1 },
                              className:
                                "flex justify-between items-center py-3 border-b border-white/20 last:border-0",
                              children: [
                                u.jsx("span", {
                                  className: "font-medium",
                                  children: f.day,
                                }),
                                u.jsx("span", {
                                  className: "text-blue-100",
                                  children: f.hours,
                                }),
                              ],
                            },
                            f.day
                          )
                        ),
                      }),
                      u.jsx("div", {
                        className: "mt-6 pt-6 border-t border-white/20",
                        children: u.jsx("p", {
                          className: "text-sm text-blue-100",
                          children:
                            "For urgent inquiries, please call our 24/7 support hotline or use our emergency contact form.",
                        }),
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className:
                      "bg-white rounded-3xl p-8 shadow-xl border border-gray-100",
                    children: [
                      u.jsx("h3", {
                        className: "text-2xl font-bold text-gray-900 mb-6",
                        children: "Quick Information",
                      }),
                      u.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          u.jsxs("div", {
                            className: "flex items-start space-x-3",
                            children: [
                              u.jsx("div", {
                                className:
                                  "w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0",
                                children: u.jsx(Hn, {
                                  className: "w-5 h-5 text-blue-600",
                                }),
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx("p", {
                                    className:
                                      "text-sm font-semibold text-gray-900",
                                    children: "Email Response Time",
                                  }),
                                  u.jsx("p", {
                                    className: "text-sm text-gray-600",
                                    children:
                                      "Within 24 hours on business days",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            className: "flex items-start space-x-3",
                            children: [
                              u.jsx("div", {
                                className:
                                  "w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center shrink-0",
                                children: u.jsx(Kn, {
                                  className: "w-5 h-5 text-purple-600",
                                }),
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx("p", {
                                    className:
                                      "text-sm font-semibold text-gray-900",
                                    children: "Phone Support",
                                  }),
                                  u.jsx("p", {
                                    className: "text-sm text-gray-600",
                                    children: "Available Mon-Fri, 9 AM - 6 PM",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          u.jsxs("div", {
                            className: "flex items-start space-x-3",
                            children: [
                              u.jsx("div", {
                                className:
                                  "w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0",
                                children: u.jsx(Za, {
                                  className: "w-5 h-5 text-emerald-600",
                                }),
                              }),
                              u.jsxs("div", {
                                children: [
                                  u.jsx("p", {
                                    className:
                                      "text-sm font-semibold text-gray-900",
                                    children: "Support Portal",
                                  }),
                                  u.jsx("p", {
                                    className: "text-sm text-gray-600",
                                    children:
                                      "24/7 technical documentation access",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  u.jsxs("div", {
                    className:
                      "bg-white rounded-3xl p-8 shadow-xl border border-gray-100",
                    children: [
                      u.jsx("h3", {
                        className: "text-2xl font-bold text-gray-900 mb-6",
                        children: "Connect With Us",
                      }),
                      u.jsx("div", {
                        className: "flex space-x-4",
                        children: d.map((f) =>
                          u.jsx(
                            b.a,
                            {
                              href: f.href,
                              whileHover: { scale: 1.1, y: -2 },
                              whileTap: { scale: 0.95 },
                              className: `w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 ${f.color} transition-all duration-300`,
                              "aria-label": f.label,
                              children: u.jsx(f.icon, { className: "w-5 h-5" }),
                            },
                            f.label
                          )
                        ),
                      }),
                      u.jsx("p", {
                        className: "text-sm text-gray-600 mt-6",
                        children:
                          "Follow us on social media for the latest updates, news, and insights from our team.",
                      }),
                    ],
                  }),
                  u.jsx(Re, {
                    href: "/",
                    children: u.jsx(b.div, {
                      whileHover: { scale: 1.02 },
                      whileTap: { scale: 0.98 },
                      className:
                        "bg-gray-900 rounded-3xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group",
                      children: u.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          u.jsxs("div", {
                            children: [
                              u.jsx("p", {
                                className: "text-sm text-gray-400 mb-1",
                                children: "Want to explore more?",
                              }),
                              u.jsx("p", {
                                className: "text-lg font-bold",
                                children: "Back to Homepage",
                              }),
                            ],
                          }),
                          u.jsx(b.div, {
                            className:
                              "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors",
                            whileHover: { x: 5 },
                            children: u.jsx(is, { className: "w-5 h-5" }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      u.jsx("section", {
        className: "py-16 bg-gray-50",
        children: u.jsx("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: u.jsxs(b.div, {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: !0 },
            className:
              "bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-12 text-center shadow-xl",
            children: [
              u.jsx(Ds, { className: "w-16 h-16 text-blue-600 mx-auto mb-4" }),
              u.jsx("h3", {
                className: "text-3xl font-bold text-gray-900 mb-4",
                children: "Visit Our Office",
              }),
              u.jsx("p", {
                className: "text-lg text-gray-600 mb-6 max-w-2xl mx-auto",
                children:
                  "We'd love to meet you in person! Our office is located in the heart of Innovation Park, easily accessible by public transportation.",
              }),
              u.jsx("p", {
                className: "text-gray-900 font-semibold",
                children:
                  "Innovation Park, Tech City, Semiconductor District, Floor 5",
              }),
            ],
          }),
        }),
      }),
    ],
  });
};
function wj() {
  return u.jsx(xj, {});
}
function Sj() {
  return u.jsxs("div", {
    className: "font-inter antialiased",
    children: [
      u.jsx(lj, {}),
      u.jsx("main", {
        children: u.jsxs(ix, {
          children: [
            u.jsx(rs, { path: "/", element: u.jsx(gj, {}) }),
            u.jsx(rs, { path: "/about", element: u.jsx(vj, {}) }),
            u.jsx(rs, { path: "/contact", element: u.jsx(wj, {}) }),
          ],
        }),
      }),
      u.jsx(cj, {}),
    ],
  });
}
ea.createRoot(document.getElementById("root")).render(
  u.jsx(Of.StrictMode, {
    children: u.jsx(dx, { basename: "/portal/", children: u.jsx(Sj, {}) }),
  })
);
//# sourceMappingURL=index-BrJg3fOC.js.map
