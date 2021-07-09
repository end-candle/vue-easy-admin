!(function (e) {
    let t;
    let n;
    let o;
    let i;
    let l;
    let a;
    let c =
        '<svg><symbol id="icon-fuwenbenbianjiqi_gongshi" viewBox="0 0 1024 1024"><path d="M643.015111 128c9.557333 0 18.773333 3.811556 25.486222 10.581333l0.398223 0.398223 88.974222 91.989333a36.010667 36.010667 0 0 1-51.313778 50.460444l-0.455111-0.398222-78.392889-81.009778H167.025778l196.835555 293.432889a36.010667 36.010667 0 0 1 0.227556 39.822222l-0.284445 0.455112-196.892444 290.247111h460.8l78.392889-81.009778a36.010667 36.010667 0 0 1 50.517333-1.251556l0.398222 0.398223c14.165333 13.653333 14.677333 36.181333 1.251556 50.460444l-0.398222 0.455111-88.974222 91.989333a36.010667 36.010667 0 0 1-25.372445 10.979556H98.986667a36.010667 36.010667 0 0 1-30.264889-55.466667l0.512-0.739555 221.297778-326.428445-220.899556-329.329777a36.010667 36.010667 0 0 1 29.013333-56.035556h544.369778z m306.460445 262.542222c13.880889 13.937778 14.051556 36.408889 0.398222 50.517334L878.876444 512l70.542223 70.542222a36.010667 36.010667 0 0 1-50.460445 51.313778l-0.398222-0.398222-70.542222-70.599111-70.542222 70.599111a36.010667 36.010667 0 0 1-51.370667-50.517334L777.102222 512l-70.542222-70.542222a36.010667 36.010667 0 0 1 50.460444-51.313778l70.940445 70.940444 70.542222-70.542222a36.010667 36.010667 0 0 1 50.972445 0z"  ></path></symbol></svg>';
    var d = (d = document.getElementsByTagName('script'))[d.length - 1].getAttribute(
        'data-injectcss'
    );
    if (d && !e.__iconfont__svg__cssinject__) {
        e.__iconfont__svg__cssinject__ = !0;
        try {
            document.write(
                '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
            );
        } catch (e) {
            console && console.log(e);
        }
    }
    function s() {
        l || ((l = !0), o());
    }
    (t = function () {
        let e;
        let t;
        let n;
        ((n = document.createElement('div')).innerHTML = c),
            (c = null),
            (t = n.getElementsByTagName('svg')[0]) &&
                (t.setAttribute('aria-hidden', 'true'),
                (t.style.position = 'absolute'),
                (t.style.width = 0),
                (t.style.height = 0),
                (t.style.overflow = 'hidden'),
                (e = t),
                (n = document.body).firstChild
                    ? (t = n.firstChild).parentNode.insertBefore(e, t)
                    : n.appendChild(e));
    }),
        document.addEventListener
            ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
                ? setTimeout(t, 0)
                : ((n = function () {
                      document.removeEventListener('DOMContentLoaded', n, !1), t();
                  }),
                  document.addEventListener('DOMContentLoaded', n, !1))
            : document.attachEvent &&
              ((o = t),
              (i = e.document),
              (l = !1),
              (a = function () {
                  try {
                      i.documentElement.doScroll('left');
                  } catch (e) {
                      return void setTimeout(a, 50);
                  }
                  s();
              })(),
              (i.onreadystatechange = function () {
                  i.readyState == 'complete' && ((i.onreadystatechange = null), s());
              }));
})(window);
