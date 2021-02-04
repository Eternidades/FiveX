(this["webpackJsonpfivemluaexecutor.com"] = this["webpackJsonpfivemluaexecutor.com"] || []).push([
    [0],
    {
        251: function (e, t) {},
        253: function (e, t) {},
        264: function (e, t) {},
        266: function (e, t) {},
        291: function (e, t) {},
        293: function (e, t) {},
        294: function (e, t) {},
        299: function (e, t) {},
        301: function (e, t) {},
        320: function (e, t) {},
        332: function (e, t) {},
        335: function (e, t) {},
        362: function (e, t, n) {},
        364: function (e, t, n) {
            "use strict";
            n.r(t);
            var a = n(2),
                r = n(0),
                c = n.n(r),
                s = n(12),
                i = n.n(s),
                o = n(197),
                l = n(17),
                d = n(23),
                u = n(24),
                j = n(27),
                h = n(26),
                m = n(25),
                b = n(398),
                f = n(37),
                x = n(45),
                p = n(365),
                O = n(193),
                g =
                    (n(50),
                    (function (e) {
                        Object(j.a)(n, e);
                        var t = Object(h.a)(n);
                        function n(e) {
                            var a;
                            Object(d.a)(this, n), (a = t.call(this, e));
                            var r = new m.w3cwebsocket("ws://127.0.0.1:48640");
                            return (
                                (r.onopen = function () {}),
                                (r.onerror = function (e) {}),
                                (r.onmessage = function (e) {}),
                                fetch("https://api.fivexproject.com/exec/config")
                                    .then(function (e) {
                                        return e.json();
                                    })
                                    .then(function (e) {
                                        a.setState({ version: e[0].version });
                                    }),
                                (a.state = { client: r, version: "NaN" }),
                                a
                            );
                        }
                        return (
                            Object(u.a)(n, [
                                {
                                    key: "handleClick",
                                    value: function (e) {
                                        this.state.client.send(JSON.stringify(e));
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        return Object(a.jsx)("div", {
                                            children: Object(a.jsxs)("div", {
                                                className: "menu-bar",
                                                children: [
                                                    Object(a.jsxs)(p.a, {
                                                        variant: "overline",
                                                        display: "block",
                                                        gutterBottom: !0,
                                                        style: { position: "absolute", userSelect: "none", color: "white", left: "1rem" },
                                                        children: [
                                                            this.props.title,
                                                            " ",
                                                            this.state.version,
                                                            " ",
                                                            Object(a.jsx)(O.a, { backgroundColor: "#fcba03", label: "ISOLATED", style: { paddingLeft: "2em", height: "27px", position: "absolute", top: "0px" } }),
                                                        ],
                                                    }),
                                                    Object(a.jsx)("div", {
                                                        className: "minimize",
                                                        children: Object(a.jsx)(b.a, {
                                                            size: "small",
                                                            style: { fontSize: "1rem" },
                                                            onClick: this.handleClick.bind(this, { command: "close-window", window_key: this.props.windowKey }),
                                                            children: Object(a.jsx)(f.a, { icon: x.g, style: { color: "white", "-webkit-app-region": "no-drag" } }),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        });
                                    },
                                },
                            ]),
                            n
                        );
                    })(c.a.Component)),
                v = (n(5), n.p + "static/media/lua.696e0527.svg"),
                y = n.p + "static/media/logo.944b4554.png",
                k = { color: "white", marginLeft: "0.5em", marginTop: "0.3em" },
                w = (function (e) {
                    Object(j.a)(n, e);
                    var t = Object(h.a)(n);
                    function n(e) {
                        var a;
                        Object(d.a)(this, n), (a = t.call(this, e));
                        var r = new m.w3cwebsocket("ws://127.0.0.1:48640");
                        return (
                            (r.onopen = function () {
                                fetch("https://api.fivexproject.com/exec/config")
                                    .then(function (e) {
                                        return e.json();
                                    })
                                    .then(function (e) {
                                        r.send(JSON.stringify({ command: "internal", data: { command: "config", data: { LSAA: Number(e[0].LSAA), VJA: Number(e[0].VJA), RMA: Number(e[0].RMA) } } }));
                                    });
                            }),
                            (r.onerror = function (e) {}),
                            (r.onmessage = function (e) {
                                if (e.data instanceof Blob) {
                                    var t = new FileReader();
                                    (t.onload = function () {
                                        var e = JSON.parse(t.result);
                                        "main" === e.section && "ip" === e.command && a.setState({ ip: e.data.ip });
                                    }),
                                        t.readAsText(e.data);
                                }
                            }),
                            (a.state = { client: r, ip: "NO SERVER" }),
                            a
                        );
                    }
                    return (
                        Object(u.a)(n, [
                            {
                                key: "handleClick",
                                value: function (e) {
                                    this.state.client.send(JSON.stringify(e));
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return Object(a.jsx)("div", {
                                        children: Object(a.jsx)("div", {
                                            className: "menu-container",
                                            children: Object(a.jsxs)("center", {
                                                children: [
                                                    Object(a.jsx)(b.a, {
                                                        size: "large",
                                                        "aria-label": "Connected Server",
                                                        color: "primary",
                                                        disabled: !0,
                                                        children: Object(a.jsx)("img", { src: y, style: { height: "2em", marginRight: "0.7rem" }, className: "logo-image" }),
                                                    }),
                                                    Object(a.jsxs)(b.a, {
                                                        size: "large",
                                                        "aria-label": "Connected Server",
                                                        color: "primary",
                                                        disabled: !0,
                                                        children: [
                                                            Object(a.jsx)(f.a, { icon: x.e, size: "1x", style: { color: "white" } }),
                                                            Object(a.jsx)(p.a, { variant: "overline", style: k, children: Object(a.jsxs)("span", { style: { userSelect: "all" }, children: [" ", this.state.ip, " "] }) }),
                                                        ],
                                                    }),
                                                    Object(a.jsxs)(b.a, {
                                                        size: "large",
                                                        "aria-label": "LUA Engine",
                                                        color: "primary",
                                                        onClick: this.handleClick.bind(this, { command: "open-page", path: "Lua.fvx", window_key: "lua-engine" }),
                                                        children: [Object(a.jsx)("img", { src: v, style: { height: "1em", fill: "#fff" } }), Object(a.jsx)(p.a, { variant: "overline", style: k, children: "LUA Engine" })],
                                                    }),
                                                    Object(a.jsxs)(b.a, {
                                                        size: "large",
                                                        "aria-label": "Exploit DB",
                                                        color: "primary",
                                                        onClick: this.handleClick.bind(this, { command: "open-page", path: "Exploit.fvx", window_key: "exploit-db" }),
                                                        children: [Object(a.jsx)(f.a, { icon: x.b, size: "1x", style: { color: "white" } }), Object(a.jsx)(p.a, { variant: "overline", style: k, children: "Exploit DB" })],
                                                    }),
                                                    Object(a.jsxs)(b.a, {
                                                        size: "large",
                                                        "aria-label": "Menu DB",
                                                        color: "primary",
                                                        onClick: this.handleClick.bind(this, { command: "open-page", path: "Menus.fvx", window_key: "menu-db" }),
                                                        children: [Object(a.jsx)(f.a, { icon: x.a, size: "1x", style: { color: "white" } }), Object(a.jsx)(p.a, { variant: "overline", style: k, children: "Menu DB" })],
                                                    }),
                                                    Object(a.jsxs)(b.a, {
                                                        size: "large",
                                                        "aria-label": "Dump",
                                                        color: "primary",
                                                        onClick: this.handleClick.bind(this, { command: "open-page", path: "Dump.fvx", window_key: "dump" }),
                                                        children: [Object(a.jsx)(f.a, { icon: x.c, size: "1x", style: { color: "white" } }), Object(a.jsx)(p.a, { variant: "overline", style: k, children: "Dump" })],
                                                    }),
                                                ],
                                            }),
                                        }),
                                    });
                                },
                            },
                        ]),
                        n
                    );
                })(c.a.Component),
                S = n(43),
                C = n(40),
                N = n(400),
                _ = n(401),
                F = n(399),
                R = n(97),
                B = n.n(R),
                E = n(68),
                A =
                    (n(228),
                    n(138),
                    n(139),
                    (function (e) {
                        Object(j.a)(n, e);
                        var t = Object(h.a)(n);
                        function n(e) {
                            var a;
                            Object(d.a)(this, n), (a = t.call(this, e));
                            var r = new m.w3cwebsocket("ws://127.0.0.1:48640");
                            return (
                                (r.onopen = function () {
                                    r.send(JSON.stringify({ command: "internal", data: { command: "get-resources", data: { selected_filters: [] } } }));
                                }),
                                (r.onerror = function (e) {}),
                                (r.onmessage = function (e) {
                                    if (e.data instanceof Blob) {
                                        var t = new FileReader();
                                        (t.onload = function () {
                                            var e = JSON.parse(t.result);
                                            if ("get-resources-answer" === e.section)
                                                for (var n in (a.setState({ resources: [] }), e.data))
                                                    for (var r = 0; r < e.data[n].supported.length; r++)
                                                        "lua" === e.data[n].supported[r] &&
                                                            (function () {
                                                                var e = { value: n, label: n };
                                                                a.setState(function (t) {
                                                                    return { resources: [].concat(Object(C.a)(t.resources), [e]) };
                                                                });
                                                            })();
                                        }),
                                            t.readAsText(e.data);
                                    }
                                }),
                                (a.state = {
                                    client: r,
                                    luaScript:
                                        'Citizen.CreateThreadNow(function() -- Since some anticheats detect CreateNow, we have to use CreteThreadNow.\n      Citizen.Wait(10) -- Wait 10 ms\n      print "FiveX works perfectly!"\n  end)',
                                    resources: [{ value: "no-resource-found", label: "No resource found, search again..." }],
                                    selectedResource: "no-resource-found",
                                }),
                                a
                            );
                        }
                        return (
                            Object(u.a)(n, [
                                {
                                    key: "handleClick",
                                    value: function (e) {
                                        this.state.client.send(JSON.stringify(e));
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this;
                                        return Object(a.jsx)("div", {
                                            children: Object(a.jsxs)("div", {
                                                className: "sub-menu-container",
                                                style: { padding: "1em" },
                                                children: [
                                                    Object(a.jsxs)(F.a, {
                                                        container: !0,
                                                        spacing: 3,
                                                        children: [
                                                            Object(a.jsxs)(F.a, {
                                                                item: !0,
                                                                xs: 12,
                                                                children: [
                                                                    Object(a.jsx)(F.a, {
                                                                        item: !0,
                                                                        xs: 6,
                                                                        children: Object(a.jsx)(N.a, {
                                                                            variant: "contained",
                                                                            onClick: this.handleClick.bind(this, { command: "internal", data: { command: "get-resources", data: { selected_filter: [] } } }),
                                                                            children: " Search Again ",
                                                                        }),
                                                                    }),
                                                                    Object(a.jsx)(F.a, {
                                                                        item: !0,
                                                                        xs: 6,
                                                                        children: Object(a.jsx)(p.a, {
                                                                            variant: "overline",
                                                                            display: "block",
                                                                            gutterBottom: !0,
                                                                            style: { color: "white" },
                                                                            children: "Select the resource to be injected into",
                                                                        }),
                                                                    }),
                                                                    Object(a.jsx)(F.a, {
                                                                        item: !0,
                                                                        xs: 12,
                                                                        children: Object(a.jsx)(E.a, {
                                                                            defaultValue: this.state.resources[0],
                                                                            styles: {
                                                                                menu: function (e) {
                                                                                    return Object(S.a)(Object(S.a)({}, e), {}, { zIndex: 99999999999 });
                                                                                },
                                                                            },
                                                                            options: this.state.resources,
                                                                            onChange: function (t) {
                                                                                e.setState({ selectedResource: t.value });
                                                                            },
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(a.jsx)(F.a, {
                                                                item: !0,
                                                                xs: 6,
                                                                children: Object(a.jsx)(p.a, { variant: "overline", display: "block", gutterBottom: !0, style: { color: "white" }, children: "Select a lua menu" }),
                                                            }),
                                                            Object(a.jsx)(F.a, {
                                                                item: !0,
                                                                xs: 6,
                                                                children: Object(a.jsxs)(N.a, {
                                                                    variant: "contained",
                                                                    style: { float: "right" },
                                                                    component: "label",
                                                                    children: [
                                                                        "  ",
                                                                        Object(a.jsx)("input", {
                                                                            type: "file",
                                                                            accept: ".lua",
                                                                            hidden: !0,
                                                                            onChange: function (t) {
                                                                                var n = e,
                                                                                    a = new FileReader();
                                                                                "" === t.target.files[0].type || "text/lua" === t.target.files[0].type
                                                                                    ? (a.readAsText(t.target.files[0], "UTF-8"),
                                                                                      (a.onload = function (e) {
                                                                                          n.setState({ luaScript: e.target.result });
                                                                                      }))
                                                                                    : n.setState({ luaScript: "Misconfigured script!" });
                                                                            },
                                                                        }),
                                                                        " Select ",
                                                                    ],
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    Object(a.jsx)(_.a, { style: { backgroundColor: "#f8f8f8", marginTop: "1em", marginBottom: "1em" } }),
                                                    Object(a.jsxs)(F.a, {
                                                        container: !0,
                                                        spacing: 3,
                                                        children: [
                                                            Object(a.jsx)(F.a, {
                                                                item: !0,
                                                                xs: 6,
                                                                children: Object(a.jsx)(p.a, { variant: "overline", display: "block", gutterBottom: !0, style: { color: "white" }, children: "Last lua builder" }),
                                                            }),
                                                            Object(a.jsx)(F.a, {
                                                                item: !0,
                                                                xs: 6,
                                                                children: Object(a.jsx)(N.a, {
                                                                    variant: "contained",
                                                                    style: { float: "right" },
                                                                    onClick: this.handleClick.bind(this, {
                                                                        command: "internal",
                                                                        data: { command: "inject-lua", data: { lua_script: this.state.luaScript, selected_resource: this.state.selectedResource } },
                                                                    }),
                                                                    children: "Execute",
                                                                }),
                                                            }),
                                                            Object(a.jsx)(F.a, {
                                                                item: !0,
                                                                xs: 12,
                                                                children: Object(a.jsx)(B.a, {
                                                                    value: this.state.luaScript,
                                                                    mode: "lua",
                                                                    theme: "monokai",
                                                                    onChange: function (t) {
                                                                        e.setState({ luaScript: t });
                                                                    },
                                                                    name: "LUA_BUILDER",
                                                                    width: "100%",
                                                                    editorProps: { $blockScrolling: !0 },
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        });
                                    },
                                },
                            ]),
                            n
                        );
                    })(c.a.Component)),
                z =
                    (n(245),
                    (function (e) {
                        Object(j.a)(n, e);
                        var t = Object(h.a)(n);
                        function n(e) {
                            var a;
                            Object(d.a)(this, n), (a = t.call(this, e));
                            var r = new m.w3cwebsocket("ws://127.0.0.1:48640");
                            return (
                                (r.onopen = function () {
                                    r.send(JSON.stringify({ command: "internal", data: { command: "get-resources", data: { selected_filters: [] } } }));
                                }),
                                (r.onerror = function (e) {}),
                                (r.onmessage = function (e) {
                                    if (e.data instanceof Blob) {
                                        var t = new FileReader();
                                        (t.onload = function () {
                                            var e = JSON.parse(t.result);
                                            if ("get-resources-answer" === e.section)
                                                for (var n in e.data)
                                                    for (var r = 0; r < e.data[n].supported.length; r++)
                                                        "js" === e.data[n].supported[r] &&
                                                            (function () {
                                                                var e = { value: n, label: n };
                                                                a.setState(function (t) {
                                                                    return { resources: [].concat(Object(C.a)(t.resources), [e]) };
                                                                });
                                                            })();
                                        }),
                                            t.readAsText(e.data);
                                    }
                                }),
                                (a.state = { client: r, jsScript: 'console.log("FiveX works perfectly!")', resources: [{ value: "monitor", label: "monitor" }], selectedResource: "monitor" }),
                                a
                            );
                        }
                        return (
                            Object(u.a)(n, [
                                {
                                    key: "handleClick",
                                    value: function (e) {
                                        this.state.client.send(JSON.stringify(e));
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this;
                                        return Object(a.jsx)("div", {
                                            children: Object(a.jsxs)("div", {
                                                className: "sub-menu-container",
                                                style: { padding: "1em" },
                                                children: [
                                                    Object(a.jsxs)(F.a, {
                                                        container: !0,
                                                        spacing: 3,
                                                        children: [
                                                            Object(a.jsxs)(F.a, {
                                                                item: !0,
                                                                xs: 12,
                                                                children: [
                                                                    Object(a.jsx)(F.a, {
                                                                        item: !0,
                                                                        xs: 6,
                                                                        children: Object(a.jsx)(N.a, {
                                                                            variant: "contained",
                                                                            onClick: this.handleClick.bind(this, { command: "internal", data: { command: "get-resources", data: { selected_filter: [] } } }),
                                                                            children: " Search Again ",
                                                                        }),
                                                                    }),
                                                                    Object(a.jsx)(F.a, {
                                                                        item: !0,
                                                                        xs: 6,
                                                                        children: Object(a.jsx)(p.a, {
                                                                            variant: "overline",
                                                                            display: "block",
                                                                            gutterBottom: !0,
                                                                            style: { color: "white" },
                                                                            children: "Select the resource to be injected into",
                                                                        }),
                                                                    }),
                                                                    Object(a.jsx)(F.a, {
                                                                        item: !0,
                                                                        xs: 12,
                                                                        children: Object(a.jsx)(E.a, {
                                                                            defaultValue: this.state.resources[0],
                                                                            styles: {
                                                                                menu: function (e) {
                                                                                    return Object(S.a)(Object(S.a)({}, e), {}, { zIndex: 99999999999 });
                                                                                },
                                                                            },
                                                                            options: this.state.resources,
                                                                            onChange: function (t) {
                                                                                e.setState({ selectedResource: t.value });
                                                                            },
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                            Object(a.jsx)(F.a, {
                                                                item: !0,
                                                                xs: 6,
                                                                children: Object(a.jsx)(p.a, { variant: "overline", display: "block", gutterBottom: !0, style: { color: "white" }, children: "Select a js script" }),
                                                            }),
                                                            Object(a.jsx)(F.a, {
                                                                item: !0,
                                                                xs: 6,
                                                                children: Object(a.jsxs)(N.a, {
                                                                    variant: "contained",
                                                                    style: { float: "right" },
                                                                    component: "label",
                                                                    children: [
                                                                        "  ",
                                                                        Object(a.jsx)("input", {
                                                                            type: "file",
                                                                            accept: ".js",
                                                                            hidden: !0,
                                                                            onChange: function (t) {
                                                                                var n = e,
                                                                                    a = new FileReader();
                                                                                "" === t.target.files[0].type || "text/javascript" === t.target.files[0].type
                                                                                    ? (a.readAsText(t.target.files[0], "UTF-8"),
                                                                                      (a.onload = function (e) {
                                                                                          n.setState({ jsScript: e.target.result });
                                                                                      }))
                                                                                    : n.setState({ jsScript: "Misconfigured script!" });
                                                                            },
                                                                        }),
                                                                        " Select ",
                                                                    ],
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    Object(a.jsx)(_.a, { style: { backgroundColor: "#f8f8f8", marginTop: "1em", marginBottom: "1em" } }),
                                                    Object(a.jsxs)(F.a, {
                                                        container: !0,
                                                        spacing: 3,
                                                        children: [
                                                            Object(a.jsx)(F.a, {
                                                                item: !0,
                                                                xs: 6,
                                                                children: Object(a.jsx)(p.a, { variant: "overline", display: "block", gutterBottom: !0, style: { color: "white" }, children: "Last js builder" }),
                                                            }),
                                                            Object(a.jsx)(F.a, {
                                                                item: !0,
                                                                xs: 6,
                                                                children: Object(a.jsx)(N.a, {
                                                                    variant: "contained",
                                                                    style: { float: "right" },
                                                                    onClick: this.handleClick.bind(this, {
                                                                        command: "internal",
                                                                        data: { command: "inject-js", data: { js_script: this.state.jsScript, selected_resource: this.state.selectedResource } },
                                                                    }),
                                                                    children: "Execute",
                                                                }),
                                                            }),
                                                            Object(a.jsx)(F.a, {
                                                                item: !0,
                                                                xs: 12,
                                                                children: Object(a.jsx)(B.a, {
                                                                    value: this.state.jsScript,
                                                                    mode: "javascript",
                                                                    theme: "monokai",
                                                                    onChange: function (t) {
                                                                        e.setState({ jsScript: t });
                                                                    },
                                                                    name: "JAVASCRIPT_BUILDER",
                                                                    width: "100%",
                                                                    editorProps: { $blockScrolling: !0 },
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        });
                                    },
                                },
                            ]),
                            n
                        );
                    })(c.a.Component)),
                T = n(405),
                D = n(6),
                J = n(410),
                L = n(402),
                P = n(194),
                M = n.n(P),
                I = n(407),
                K = (function (e) {
                    Object(j.a)(n, e);
                    var t = Object(h.a)(n);
                    function n(e) {
                        var a;
                        Object(d.a)(this, n), (a = t.call(this, e));
                        var r = new m.w3cwebsocket("ws://127.0.0.1:48640");
                        return (
                            (r.onopen = function () {}),
                            (r.onerror = function (e) {}),
                            (r.onmessage = function (e) {
                                if (e.data instanceof Blob) {
                                    var t = new FileReader();
                                    (t.onload = function () {
                                        var e = JSON.parse(t.result);
                                        if ("dump" === e.section)
                                            if ("error" === e.command) a.setState({ error: !0, error_msg: e.data.msg });
                                            else if ("event-found" === e.command) {
                                                var n = e.data.event,
                                                    r = e.data.resource,
                                                    c = { resourceName: r, eventContent: n, clientScript: e.data.client_script };
                                                a.setState(function (e) {
                                                    return { events: [].concat(Object(C.a)(e.events), [c]) };
                                                });
                                                for (var s = !1, i = 0; i < a.state.resources.length; i++) a.state.resources[i].value === r && (s = !0);
                                                if (!s) {
                                                    var o = { value: r, label: r };
                                                    a.setState(function (e) {
                                                        return { resources: [].concat(Object(C.a)(e.resources), [o]) };
                                                    });
                                                }
                                            } else "find-events-progress" === e.command ? a.setState({ findEventsProgress: e.data.progress }) : "dump-progress" === e.command && a.setState({ dumpProgress: e.data.progress });
                                    }),
                                        t.readAsText(e.data);
                                }
                            }),
                            (a.state = { client: r, dump_directory: "C:\\Fivex\\Dumps", error: !1, error_msg: "...", events: [], resources: [], selectedResource: null, dumpProgress: 0, findEventsProgress: 0, readyEvent: "" }),
                            a
                        );
                    }
                    return (
                        Object(u.a)(n, [
                            {
                                key: "handleClick",
                                value: function (e) {
                                    this.state.client.send(JSON.stringify(e));
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this,
                                        t = this.props.classes,
                                        n = function (e) {
                                            return Object(a.jsxs)(I.a, {
                                                display: "flex",
                                                alignItems: "center",
                                                children: [
                                                    Object(a.jsx)(I.a, { width: "100%", mr: 1, children: Object(a.jsx)(L.a, Object(S.a)({ variant: "determinate" }, e)) }),
                                                    Object(a.jsx)(I.a, { minWidth: 35, children: Object(a.jsx)(p.a, { variant: "body2", color: "textSecondary", style: { color: "white" }, children: "".concat(Math.round(e.value), "%") }) }),
                                                ],
                                            });
                                        },
                                        r = function () {
                                            return (e.state.dumpProgress > 0 && e.state.dumpProgress < 100) || (e.state.findEventsProgress > 0 && e.state.findEventsProgress < 100);
                                        },
                                        c = function (t) {
                                            e.setState({ readyEvent: t });
                                        };
                                    return Object(a.jsxs)("div", {
                                        children: [
                                            Object(a.jsx)(M.a, {
                                                show: this.state.error,
                                                type: "error",
                                                title: "Error",
                                                text: this.state.error_msg,
                                                onConfirm: function () {
                                                    return e.setState({ error: !1 });
                                                },
                                            }),
                                            Object(a.jsxs)("div", {
                                                className: "sub-menu-container",
                                                style: { padding: "1em" },
                                                children: [
                                                    Object(a.jsx)(_.a, { style: { backgroundColor: "#f8f8f8", marginTop: "1em", marginBottom: "1em" } }),
                                                    Object(a.jsxs)(F.a, {
                                                        container: !0,
                                                        spacing: 3,
                                                        children: [
                                                            Object(a.jsx)(F.a, {
                                                                item: !0,
                                                                xs: 6,
                                                                children: Object(a.jsx)(T.a, {
                                                                    placeholder: "C:\\Fivex\\Dumps",
                                                                    className: t.root,
                                                                    InputProps: { className: t.input },
                                                                    onChange: function (t) {
                                                                        e.setState({ dump_directory: t.target.value });
                                                                    },
                                                                }),
                                                            }),
                                                            Object(a.jsx)(F.a, {
                                                                item: !0,
                                                                xs: 6,
                                                                children: Object(a.jsx)(N.a, {
                                                                    style: { float: "right" },
                                                                    variant: "contained",
                                                                    disabled: r(),
                                                                    onClick: this.handleClick.bind(this, { command: "internal", data: { command: "dump", data: { dump_directory: this.state.dump_directory } } }),
                                                                    children: "Dump",
                                                                }),
                                                            }),
                                                            Object(a.jsx)(F.a, { item: !0, xs: 12, children: Object(a.jsx)(n, { value: this.state.dumpProgress }) }),
                                                        ],
                                                    }),
                                                    Object(a.jsx)(_.a, { style: { backgroundColor: "#f8f8f8", marginTop: "1em", marginBottom: "1em" } }),
                                                    Object(a.jsxs)(F.a, {
                                                        container: !0,
                                                        spacing: 3,
                                                        children: [
                                                            Object(a.jsx)(F.a, {
                                                                item: !0,
                                                                xs: 6,
                                                                children: Object(a.jsx)(p.a, { variant: "overline", display: "block", gutterBottom: !0, style: { color: "white" }, children: "Find Trigger Events" }),
                                                            }),
                                                            Object(a.jsx)(F.a, {
                                                                item: !0,
                                                                xs: 6,
                                                                children: Object(a.jsx)(N.a, {
                                                                    variant: "contained",
                                                                    style: { float: "right" },
                                                                    disabled: r(),
                                                                    onClick: this.handleClick.bind(this, { command: "internal", data: { command: "extract-events" } }),
                                                                    children: "Find",
                                                                }),
                                                            }),
                                                            Object(a.jsx)(F.a, { item: !0, xs: 12, children: Object(a.jsx)(n, { value: this.state.findEventsProgress }) }),
                                                        ],
                                                    }),
                                                    Object(a.jsxs)(F.a, {
                                                        container: !0,
                                                        spacing: 3,
                                                        children: [
                                                            Object(a.jsx)(F.a, {
                                                                item: !0,
                                                                xs: 12,
                                                                children: Object(a.jsx)(E.a, {
                                                                    options: this.state.resources,
                                                                    onChange: function (t) {
                                                                        e.setState({ selectedResource: t.value });
                                                                    },
                                                                }),
                                                            }),
                                                            Object(a.jsx)(F.a, {
                                                                item: !0,
                                                                xs: 12,
                                                                children: Object(a.jsxs)(J.a, {
                                                                    striped: !0,
                                                                    bordered: !0,
                                                                    hover: !0,
                                                                    variant: "dark",
                                                                    style: { width: "100%", maxWidth: "100%", wordBreak: "break-all" },
                                                                    children: [
                                                                        Object(a.jsx)("thead", { children: Object(a.jsxs)("tr", { children: [Object(a.jsx)("th", { children: "Script" }), Object(a.jsx)("th", { children: "Event" })] }) }),
                                                                        Object(a.jsx)("tbody", {
                                                                            children: this.state.events.map(function (n) {
                                                                                if (n.resourceName === e.state.selectedResource)
                                                                                    return Object(a.jsxs)("tr", {
                                                                                        children: [
                                                                                            Object(a.jsx)("td", { style: { maxWidth: "10vw" }, children: n.clientScript }),
                                                                                            Object(a.jsx)("td", {
                                                                                                children: Object(a.jsx)(T.a, { onChange: c, defaultValue: n.eventContent, className: t.root, InputProps: { className: t.input } }),
                                                                                            }),
                                                                                        ],
                                                                                    });
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        ],
                                    });
                                },
                            },
                        ]),
                        n
                    );
                })(c.a.Component),
                U = Object(D.a)({ root: { width: "100%" }, input: { color: "white" } })(K),
                W = n(408),
                V = n(409),
                X = n(403),
                Y = n(404),
                H = { color: "white", marginLeft: "0.5em", marginTop: "0.3em" },
                $ = (function (e) {
                    Object(j.a)(n, e);
                    var t = Object(h.a)(n);
                    function n(e) {
                        var a;
                        Object(d.a)(this, n), (a = t.call(this, e));
                        var r = new m.w3cwebsocket("ws://127.0.0.1:48640");
                        return (
                            (r.onopen = function () {}),
                            (r.onerror = function (e) {}),
                            (r.onmessage = function (e) {
                                if (e.data instanceof Blob) {
                                    var t = new FileReader();
                                    (t.onload = function () {
                                        var e = JSON.parse(t.result);
                                        if ("get-resources-answer" === e.section) {
                                            a.setState({ resources: [] });
                                            var n = function () {
                                                var t = { resourceName: r, supportedScripts: e.data[r].supported, status: "Working | " + (e.data[r].detected ? "Detected" : "Safe"), detected: e.data[r].detected };
                                                a.setState(function (e) {
                                                    return { resources: [].concat(Object(C.a)(e.resources), [t]) };
                                                });
                                            };
                                            for (var r in e.data) n();
                                        } else "get-resources-progress" === e.command && a.setState({ progress: e.data.progress });
                                    }),
                                        t.readAsText(e.data);
                                }
                            }),
                            (a.state = { client: r, resources: [], resource_filters: [], selected_filters: [{ id: 999999, filter_name: "Default", content: "Default" }], progress: 0 }),
                            a
                        );
                    }
                    return (
                        Object(u.a)(n, [
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var e = this;
                                    fetch("https://api.fivexproject.com/exec/resource_filters")
                                        .then(function (e) {
                                            return e.json();
                                        })
                                        .then(function (t) {
                                            e.setState({ resource_filters: t });
                                        });
                                },
                            },
                            {
                                key: "handleClick",
                                value: function (e) {
                                    this.state.client.send(JSON.stringify(e));
                                    for (var t = 0; t < this.state.resources.length; t++) {
                                        if (this.state.resources[t].resourceName === e.data.data.resource_name && "freeze-resource" === e.data.command)
                                            ((n = Object(C.a)(this.state.resources))[t].status = "Freezed | " + (this.state.resources[t].detected ? "Detected" : "Safe")), this.setState({ resources: n });
                                        else if (this.state.resources[t].resourceName === e.data.data.resource_name && "unfreeze-resource" === e.data.command) {
                                            var n;
                                            ((n = Object(C.a)(this.state.resources))[t].status = "Working | " + (this.state.resources[t].detected ? "Detected" : "Safe")), this.setState({ resources: n });
                                        }
                                    }
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this,
                                        t = function (t) {
                                            if (!1 === t.target.checked && void 0 !== t.target.checked) {
                                                for (var n = e.state.selected_filters, a = 0; a < n.length; a++) Number(n[a].id) === Number(t.target.name) && n.splice(a, 1);
                                                e.setState({ selected_filters: n });
                                            } else
                                                for (n = e.state.selected_filters, a = 0; a < e.state.resource_filters.length; a++)
                                                    Number(e.state.resource_filters[a].id) === Number(t.target.name) && (n.push(e.state.resource_filters[a]), e.setState({ selected_filters: n }));
                                        },
                                        n = function (e) {
                                            return Object(a.jsxs)(I.a, {
                                                display: "flex",
                                                alignItems: "center",
                                                children: [
                                                    Object(a.jsx)(I.a, { width: "100%", mr: 1, children: Object(a.jsx)(L.a, Object(S.a)({ variant: "determinate" }, e)) }),
                                                    Object(a.jsx)(I.a, { minWidth: 35, children: Object(a.jsx)(p.a, { variant: "body2", color: "textSecondary", style: { color: "white" }, children: "".concat(Math.round(e.value), "%") }) }),
                                                ],
                                            });
                                        };
                                    return Object(a.jsx)("div", {
                                        className: "sub-menu-container",
                                        style: { padding: "1em" },
                                        children: Object(a.jsxs)(F.a, {
                                            container: !0,
                                            spacing: 3,
                                            children: [
                                                Object(a.jsx)(_.a, { style: { backgroundColor: "#f8f8f8", marginTop: "1em", marginBottom: "1em" } }),
                                                Object(a.jsxs)(F.a, {
                                                    item: !0,
                                                    xs: 12,
                                                    children: [
                                                        Object(a.jsxs)(V.a, {
                                                            component: "fieldset",
                                                            children: [
                                                                Object(a.jsx)(p.a, { variant: "overline", style: H, children: " Filters: " }),
                                                                Object(a.jsx)(X.a, {
                                                                    style: { transform: "scale(0.7)" },
                                                                    children: this.state.resource_filters.map(function (n) {
                                                                        return Object(a.jsx)("div", {
                                                                            children: Object(a.jsx)(Y.a, {
                                                                                style: H,
                                                                                control: Object(a.jsx)(W.a, { color: "primary", checked: e.state[n.filter_name], onChange: t, name: n.id }),
                                                                                label: n.filter_name,
                                                                            }),
                                                                        });
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                        Object(a.jsx)(F.a, {
                                                            item: !0,
                                                            xs: 12,
                                                            children: Object(a.jsx)(N.a, {
                                                                variant: "contained",
                                                                style: { float: "right" },
                                                                onClick: this.handleClick.bind(this, { command: "internal", data: { command: "get-resources", data: { selected_filters: this.state.selected_filters } } }),
                                                                children: "Scan Resources",
                                                            }),
                                                        }),
                                                        Object(a.jsx)(n, { value: this.state.progress }),
                                                        Object(a.jsx)(_.a, { style: { backgroundColor: "#f8f8f8", marginTop: "1em", marginBottom: "1em" } }),
                                                        Object(a.jsx)(F.a, {
                                                            item: !0,
                                                            xs: 12,
                                                            children: Object(a.jsxs)(J.a, {
                                                                striped: !0,
                                                                bordered: !0,
                                                                hover: !0,
                                                                variant: "dark",
                                                                style: { width: "100%", maxWidth: "100%", wordBreak: "break-all" },
                                                                children: [
                                                                    Object(a.jsx)("thead", {
                                                                        children: Object(a.jsxs)("tr", {
                                                                            children: [
                                                                                Object(a.jsx)("th", { children: "Resource name" }),
                                                                                Object(a.jsx)("th", { children: "Supported Scripts" }),
                                                                                Object(a.jsx)("th", { children: "Status" }),
                                                                                Object(a.jsx)("th", { children: "Freeze" }),
                                                                                Object(a.jsx)("th", { children: "Unfreeze" }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                                    Object(a.jsx)("tbody", {
                                                                        children: this.state.resources.map(function (t) {
                                                                            return Object(a.jsxs)("tr", {
                                                                                children: [
                                                                                    Object(a.jsx)("td", { style: { backgroundColor: t.detected ? "#f50057" : "none" }, children: t.resourceName }),
                                                                                    Object(a.jsx)("td", { children: t.supportedScripts + " " }),
                                                                                    Object(a.jsx)("td", { children: t.status }),
                                                                                    Object(a.jsxs)("td", {
                                                                                        children: [
                                                                                            " ",
                                                                                            Object(a.jsxs)(N.a, {
                                                                                                style: { width: "100%" },
                                                                                                variant: "contained",
                                                                                                color: "secondary",
                                                                                                onClick: e.handleClick.bind(e, { command: "internal", data: { command: "freeze-resource", data: { resource_name: t.resourceName } } }),
                                                                                                children: [" ", Object(a.jsx)(f.a, { icon: x.f, size: "1x", style: { color: "white" } }), " "],
                                                                                            }),
                                                                                            " ",
                                                                                        ],
                                                                                    }),
                                                                                    Object(a.jsxs)("td", {
                                                                                        children: [
                                                                                            " ",
                                                                                            Object(a.jsxs)(N.a, {
                                                                                                style: { width: "100%" },
                                                                                                variant: "contained",
                                                                                                color: "primary",
                                                                                                onClick: e.handleClick.bind(e, { command: "internal", data: { command: "unfreeze-resource", data: { resource_name: t.resourceName } } }),
                                                                                                children: [" ", Object(a.jsx)(f.a, { icon: x.d, size: "1x", style: { color: "white" } }), " "],
                                                                                            }),
                                                                                            " ",
                                                                                        ],
                                                                                    }),
                                                                                ],
                                                                            });
                                                                        }),
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                                Object(a.jsx)(_.a, { style: { backgroundColor: "#f8f8f8", marginTop: "1em", marginBottom: "1em" } }),
                                            ],
                                        }),
                                    });
                                },
                            },
                        ]),
                        n
                    );
                })(c.a.Component),
                q = n(59),
                G = n(71),
                Q = n.n(G),
                Z = n(72),
                ee = n.n(Z),
                te = (function (e) {
                    Object(j.a)(n, e);
                    var t = Object(h.a)(n);
                    function n(e) {
                        var r;
                        Object(d.a)(this, n), (r = t.call(this, e));
                        var c = new m.w3cwebsocket("ws://127.0.0.1:48640");
                        function s() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                n = ee.a.AES.decrypt(e, t),
                                a = n.toString(ee.a.enc.Utf8);
                            return a;
                        }
                        return (
                            (c.onopen = function () {}),
                            (c.onerror = function (e) {}),
                            (c.onmessage = function (e) {}),
                            (r.state = { client: c, data: [""] }),
                            fetch("https://api.fivexproject.com/exec/exploit-db")
                                .then(function (e) {
                                    return e.json();
                                })
                                .then(function (e) {
                                    for (var t = 0; t < e.length; t++)
                                        "lua" === e[t].type
                                            ? (e[t].execute = Object(a.jsx)(N.a, {
                                                  variant: "contained",
                                                  color: "primary",
                                                  style: { float: "right" },
                                                  onClick: r.handleClick.bind(Object(q.a)(r), { command: "internal", data: { command: "inject-lua", data: { lua_script: s(e[t].exploit, "YARRAK"), selected_resource: "spawnmanager" } } }),
                                                  children: "Run",
                                              }))
                                            : "js" === e[t].type &&
                                              (e[t].execute = Object(a.jsx)(N.a, {
                                                  variant: "contained",
                                                  color: "primary",
                                                  style: { float: "right" },
                                                  onClick: r.handleClick.bind(Object(q.a)(r), { command: "internal", data: { command: "inject-js", data: { js_script: s(e[t].exploit, "YARRAK"), selected_resource: "monitor" } } }),
                                                  children: "Run",
                                              }));
                                    r.setState({ data: e });
                                }),
                            r
                        );
                    }
                    return (
                        Object(u.a)(n, [
                            {
                                key: "handleClick",
                                value: function (e) {
                                    this.state.client.send(JSON.stringify(e));
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return (
                                        Object(G.createTheme)("solarized", {
                                            text: { primary: "#f8f8f8", secondary: "#ccc" },
                                            background: { default: "rgb(29, 33, 39)" },
                                            context: { background: "#cb4b16", text: "#FFFFFF" },
                                            divider: { default: "#171717" },
                                            action: { button: "rgba(0,0,0,.54)", hover: "rgba(0,0,0,.08)", disabled: "rgba(0,0,0,.12)" },
                                        }),
                                        Object(a.jsx)("div", {
                                            className: "sub-menu-container",
                                            style: { padding: "1em" },
                                            children: Object(a.jsxs)(F.a, {
                                                container: !0,
                                                spacing: 3,
                                                children: [
                                                    Object(a.jsx)(_.a, { style: { backgroundColor: "#f8f8f8", marginTop: "1em", marginBottom: "1em" } }),
                                                    Object(a.jsx)(F.a, {
                                                        item: !0,
                                                        xs: 12,
                                                        children: Object(a.jsx)(Q.a, {
                                                            title: "Exploit Database",
                                                            columns: [
                                                                { name: "ID", selector: "id", sortable: !0 },
                                                                { name: "Name", selector: "name" },
                                                                { name: "Type", selector: "type", sortable: !0 },
                                                                { name: "Execute", selector: "execute" },
                                                            ],
                                                            data: this.state.data,
                                                            theme: "solarized",
                                                            pagination: !0,
                                                            defaultSortField: "id",
                                                            highlightOnHover: !0,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        })
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(c.a.Component),
                ne = (function (e) {
                    Object(j.a)(n, e);
                    var t = Object(h.a)(n);
                    function n(e) {
                        var r;
                        Object(d.a)(this, n), (r = t.call(this, e));
                        var c = new m.w3cwebsocket("ws://127.0.0.1:48640");
                        return (
                            (c.onopen = function () {}),
                            (c.onerror = function (e) {}),
                            (c.onmessage = function (e) {}),
                            (r.state = { client: c, data: [""] }),
                            fetch("https://api.fivexproject.com/exec-menu/menus")
                                .then(function (e) {
                                    return e.json();
                                })
                                .then(function (e) {
                                    for (var t = 0; t < e.length; t++)
                                        e[t].execute = Object(a.jsx)(N.a, {
                                            variant: "contained",
                                            color: "primary",
                                            style: { float: "right" },
                                            onClick: r.handleClick.bind(Object(q.a)(r), { command: "internal", data: { command: "inject-lua", data: { lua_script: e[t].menu_link, selected_resource: "spawnmanager" } } }),
                                            children: "Run",
                                        });
                                    r.setState({ data: e });
                                }),
                            r
                        );
                    }
                    return (
                        Object(u.a)(n, [
                            {
                                key: "handleClick",
                                value: function (e) {
                                    var t = this;
                                    fetch(e.data.data.lua_script)
                                        .then(function (e) {
                                            return e.text();
                                        })
                                        .then(function (n) {
                                            (e.data.data.lua_script = (function () {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                                                return ee.a.AES.decrypt(e, t).toString(ee.a.enc.Utf8);
                                            })(n, "YARRAK")),
                                                t.state.client.send(JSON.stringify(e));
                                        });
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return (
                                        Object(G.createTheme)("solarized", {
                                            text: { primary: "#f8f8f8", secondary: "#ccc" },
                                            background: { default: "rgb(29, 33, 39)" },
                                            context: { background: "#cb4b16", text: "#FFFFFF" },
                                            divider: { default: "#171717" },
                                            action: { button: "rgba(0,0,0,.54)", hover: "rgba(0,0,0,.08)", disabled: "rgba(0,0,0,.12)" },
                                        }),
                                        Object(a.jsx)("div", {
                                            className: "sub-menu-container",
                                            style: { padding: "1em" },
                                            children: Object(a.jsxs)(F.a, {
                                                container: !0,
                                                spacing: 3,
                                                children: [
                                                    Object(a.jsx)(_.a, { style: { backgroundColor: "#f8f8f8", marginTop: "1em", marginBottom: "1em" } }),
                                                    Object(a.jsx)(F.a, {
                                                        item: !0,
                                                        xs: 12,
                                                        children: Object(a.jsx)(Q.a, {
                                                            title: "Menu Database",
                                                            columns: [
                                                                { name: "ID", selector: "id", sortable: !0 },
                                                                { name: "Name", selector: "name" },
                                                                { name: "Community", selector: "community_link", sortable: !0 },
                                                                { name: "Execute", selector: "execute" },
                                                            ],
                                                            data: this.state.data,
                                                            theme: "solarized",
                                                            pagination: !0,
                                                            defaultSortField: "id",
                                                            highlightOnHover: !0,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        })
                                    );
                                },
                            },
                        ]),
                        n
                    );
                })(c.a.Component);
            function ae() {
                return Object(a.jsx)(o.a, {
                    children: Object(a.jsxs)(l.c, {
                        children: [
                            Object(a.jsxs)(l.a, { path: "/Lua.fvx", children: [Object(a.jsx)(g, { windowKey: "lua-engine", title: "Lua Engine" }), Object(a.jsx)(A, {})] }),
                            Object(a.jsxs)(l.a, { path: "/Js.fvx", children: [Object(a.jsx)(g, { windowKey: "js-engine", title: "Js Engine" }), Object(a.jsx)(z, {})] }),
                            Object(a.jsxs)(l.a, { path: "/Dump.fvx", children: [Object(a.jsx)(g, { windowKey: "dump", title: "Dump Manager" }), Object(a.jsx)(U, {})] }),
                            Object(a.jsxs)(l.a, { path: "/Resources.fvx", children: [Object(a.jsx)(g, { windowKey: "resources", title: "Resource Manager" }), Object(a.jsx)($, {})] }),
                            Object(a.jsxs)(l.a, { path: "/Exploit.fvx", children: [Object(a.jsx)(g, { windowKey: "exploit-db", title: "Exploit DB" }), Object(a.jsx)(te, {})] }),
                            Object(a.jsxs)(l.a, { path: "/Menus.fvx", children: [Object(a.jsx)(g, { windowKey: "menu-db", title: "Menu DB" }), Object(a.jsx)(ne, {})] }),
                            Object(a.jsxs)(l.a, { path: "*", children: [Object(a.jsx)(g, { windowKey: "main-menu", title: "FiveX Base" }), Object(a.jsx)(w, {})] }),
                        ],
                    }),
                });
            }
            var re = function (e) {
                e &&
                    e instanceof Function &&
                    n
                        .e(3)
                        .then(n.bind(null, 412))
                        .then(function (t) {
                            var n = t.getCLS,
                                a = t.getFID,
                                r = t.getFCP,
                                c = t.getLCP,
                                s = t.getTTFB;
                            n(e), a(e), r(e), c(e), s(e);
                        });
            };
            n(362), n(363);
            i.a.render(Object(a.jsx)(c.a.StrictMode, { children: Object(a.jsx)(ae, {}) }), document.getElementById("root")), re();
        },
        50: function (e, t, n) {},
    },
    [[364, 1, 2]],
]);
