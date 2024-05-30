(function (a, b, c) {
    'use strict';
  
    if (typeof module != "undefined" && module.exports) {
      module.exports = c();
    } else if (b.exports) {
      b.exports = c();
    } else {
      b.Fingerprint2 = c();
    }
  })(0, this, function () {
    'use strict';
  
    if (Array.isArray === undefined) {
      Array.isArray = function (a) {
        return Object.prototype.toString.call(a) === "[object Array]";
      };
    }
    function a(a, b) {
      a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
      b = [b[0] >>> 16, b[0] & 65535, b[1] >>> 16, b[1] & 65535];
      var c = [0, 0, 0, 0];
      c[3] += a[3] + b[3];
      c[2] += c[3] >>> 16;
      c[3] &= 65535;
      c[2] += a[2] + b[2];
      c[1] += c[2] >>> 16;
      c[2] &= 65535;
      c[1] += a[1] + b[1];
      c[0] += c[1] >>> 16;
      c[1] &= 65535;
      c[0] += a[0] + b[0];
      c[0] &= 65535;
      return [c[0] << 16 | c[1], c[2] << 16 | c[3]];
    }
    function b(a, b) {
      a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
      b = [b[0] >>> 16, b[0] & 65535, b[1] >>> 16, b[1] & 65535];
      var c = [0, 0, 0, 0];
      c[3] += a[3] * b[3];
      c[2] += c[3] >>> 16;
      c[3] &= 65535;
      c[2] += a[2] * b[3];
      c[1] += c[2] >>> 16;
      c[2] &= 65535;
      c[2] += a[3] * b[2];
      c[1] += c[2] >>> 16;
      c[2] &= 65535;
      c[1] += a[1] * b[3];
      c[0] += c[1] >>> 16;
      c[1] &= 65535;
      c[1] += a[2] * b[2];
      c[0] += c[1] >>> 16;
      c[1] &= 65535;
      c[1] += a[3] * b[1];
      c[0] += c[1] >>> 16;
      c[1] &= 65535;
      c[0] += a[0] * b[3] + a[1] * b[2] + a[2] * b[1] + a[3] * b[0];
      c[0] &= 65535;
      return [c[0] << 16 | c[1], c[2] << 16 | c[3]];
    }
    function c(a, b) {
      if ((b %= 64) === 32) {
        return [a[1], a[0]];
      } else if (b < 32) {
        return [a[0] << b | a[1] >>> 32 - b, a[1] << b | a[0] >>> 32 - b];
      } else {
        b -= 32;
        return [a[1] << b | a[0] >>> 32 - b, a[0] << b | a[1] >>> 32 - b];
      }
    }
    function d(a, b) {
      if ((b %= 64) === 0) {
        return a;
      } else if (b < 32) {
        return [a[0] << b | a[1] >>> 32 - b, a[1] << b];
      } else {
        return [a[1] << b - 32, 0];
      }
    }
    function e(a, b) {
      return [a[0] ^ b[0], a[1] ^ b[1]];
    }
    function f(a) {
      a = e(a, [0, a[0] >>> 1]);
      a = b(a, [4283543511, 3981806797]);
      a = e(a, [0, a[0] >>> 1]);
      a = b(a, [3301882366, 444984403]);
      return a = e(a, [0, a[0] >>> 1]);
    }
    function g(g, h) {
      h = h || 0;
      var i = (g = g || "").length % 16;
      for (var j = g.length - i, k = [0, h], l = [0, h], m = [0, 0], n = [0, 0], o = [2277735313, 289559509], p = [1291169091, 658871167], q = 0; q < j; q += 16) {
        m = [g.charCodeAt(q + 4) & 255 | (g.charCodeAt(q + 5) & 255) << 8 | (g.charCodeAt(q + 6) & 255) << 16 | (g.charCodeAt(q + 7) & 255) << 24, g.charCodeAt(q) & 255 | (g.charCodeAt(q + 1) & 255) << 8 | (g.charCodeAt(q + 2) & 255) << 16 | (g.charCodeAt(q + 3) & 255) << 24];
        n = [g.charCodeAt(q + 12) & 255 | (g.charCodeAt(q + 13) & 255) << 8 | (g.charCodeAt(q + 14) & 255) << 16 | (g.charCodeAt(q + 15) & 255) << 24, g.charCodeAt(q + 8) & 255 | (g.charCodeAt(q + 9) & 255) << 8 | (g.charCodeAt(q + 10) & 255) << 16 | (g.charCodeAt(q + 11) & 255) << 24];
        m = b(m, o);
        m = c(m, 31);
        m = b(m, p);
        k = e(k, m);
        k = c(k, 27);
        k = a(k, l);
        k = a(b(k, [0, 5]), [0, 1390208809]);
        n = b(n, p);
        n = c(n, 33);
        n = b(n, o);
        l = e(l, n);
        l = c(l, 31);
        l = a(l, k);
        l = a(b(l, [0, 5]), [0, 944331445]);
      }
      m = [0, 0];
      n = [0, 0];
      switch (i) {
        case 15:
          n = e(n, d([0, g.charCodeAt(q + 14)], 48));
        case 14:
          n = e(n, d([0, g.charCodeAt(q + 13)], 40));
        case 13:
          n = e(n, d([0, g.charCodeAt(q + 12)], 32));
        case 12:
          n = e(n, d([0, g.charCodeAt(q + 11)], 24));
        case 11:
          n = e(n, d([0, g.charCodeAt(q + 10)], 16));
        case 10:
          n = e(n, d([0, g.charCodeAt(q + 9)], 8));
        case 9:
          n = e(n, [0, g.charCodeAt(q + 8)]);
          n = b(n, p);
          n = c(n, 33);
          n = b(n, o);
          l = e(l, n);
        case 8:
          m = e(m, d([0, g.charCodeAt(q + 7)], 56));
        case 7:
          m = e(m, d([0, g.charCodeAt(q + 6)], 48));
        case 6:
          m = e(m, d([0, g.charCodeAt(q + 5)], 40));
        case 5:
          m = e(m, d([0, g.charCodeAt(q + 4)], 32));
        case 4:
          m = e(m, d([0, g.charCodeAt(q + 3)], 24));
        case 3:
          m = e(m, d([0, g.charCodeAt(q + 2)], 16));
        case 2:
          m = e(m, d([0, g.charCodeAt(q + 1)], 8));
        case 1:
          m = e(m, [0, g.charCodeAt(q)]);
          m = b(m, o);
          m = c(m, 31);
          m = b(m, p);
          k = e(k, m);
      }
      k = e(k, [0, g.length]);
      l = e(l, [0, g.length]);
      k = a(k, l);
      l = a(l, k);
      k = f(k);
      l = f(l);
      k = a(k, l);
      l = a(l, k);
      return ("00000000" + (k[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (k[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (l[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (l[1] >>> 0).toString(16)).slice(-8);
    }
    var h = {
      preprocessor: null,
      audio: {
        timeout: 1000,
        excludeIOS11: true
      },
      fonts: {
        swfContainerId: "fingerprintjs2",
        swfPath: "flash/compiled/FontList.swf",
        userDefinedFonts: [],
        extendedJsFonts: false
      },
      screen: {
        detectScreenOrientation: true
      },
      plugins: {
        sortPluginsFor: [/palemoon/i],
        excludeIE: false
      },
      extraComponents: [],
      excludes: {
        enumerateDevices: true,
        pixelRatio: true,
        doNotTrack: true,
        fontsFlash: true,
        adBlock: true
      },
      NOT_AVAILABLE: "not available",
      ERROR: "error",
      EXCLUDED: "excluded"
    };
    function i(a, b) {
      if (Array.prototype.forEach && a.forEach === Array.prototype.forEach) {
        a.forEach(b);
      } else if (a.length === +a.length) {
        for (var c = 0, d = a.length; c < d; c++) {
          b(a[c], c, a);
        }
      } else {
        for (var e in a) {
          if (a.hasOwnProperty(e)) {
            b(a[e], e, a);
          }
        }
      }
    }
    function j(a, b) {
      var c = [];
      if (a == null) {
        return c;
      } else if (Array.prototype.map && a.map === Array.prototype.map) {
        return a.map(b);
      } else {
        i(a, function (a, d, e) {
          c.push(b(a, d, e));
        });
        return c;
      }
    }
    function k() {
      return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices;
    }
    function l(a) {
      var b = [window.screen.width, window.screen.height];
      if (a.screen.detectScreenOrientation) {
        b.sort().reverse();
      }
      return b;
    }
    function m(a) {
      if (window.screen.availWidth && window.screen.availHeight) {
        var b = [window.screen.availHeight, window.screen.availWidth];
        if (a.screen.detectScreenOrientation) {
          b.sort().reverse();
        }
        return b;
      }
      return a.NOT_AVAILABLE;
    }
    function n(a) {
      if (navigator.plugins == null) {
        return a.NOT_AVAILABLE;
      }
      var b = [];
      for (var c = 0, d = navigator.plugins.length; c < d; c++) {
        if (navigator.plugins[c]) {
          b.push(navigator.plugins[c]);
        }
      }
      if (p(a)) {
        b = b.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          } else if (a.name < b.name) {
            return -1;
          } else {
            return 0;
          }
        });
      }
      return j(b, function (a) {
        var b = j(a, function (a) {
          return [a.type, a.suffixes];
        });
        return [a.name, a.description, b];
      });
    }
    function o(a) {
      var b = [];
      if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window) {
        b = j(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], function (b) {
          try {
            new window.ActiveXObject(b);
            return b;
          } catch (b) {
            return a.ERROR;
          }
        });
      } else {
        b.push(a.NOT_AVAILABLE);
      }
      if (navigator.plugins) {
        b = b.concat(n(a));
      }
      return b;
    }
    function p(a) {
      var b = false;
      for (var c = 0, d = a.plugins.sortPluginsFor.length; c < d; c++) {
        var e = a.plugins.sortPluginsFor[c];
        if (navigator.userAgent.match(e)) {
          b = true;
          break;
        }
      }
      return b;
    }
    function q(a) {
      try {
        return !!window.sessionStorage;
      } catch (b) {
        return a.ERROR;
      }
    }
    function r(a) {
      try {
        return !!window.localStorage;
      } catch (b) {
        return a.ERROR;
      }
    }
    function s(a) {
      if (J()) {
        return a.EXCLUDED;
      }
      try {
        return !!window.indexedDB;
      } catch (b) {
        return a.ERROR;
      }
    }
    function t(a) {
      if (navigator.hardwareConcurrency) {
        return navigator.hardwareConcurrency;
      } else {
        return a.NOT_AVAILABLE;
      }
    }
    function u(a) {
      return navigator.cpuClass || a.NOT_AVAILABLE;
    }
    function v(a) {
      if (navigator.platform) {
        return navigator.platform;
      } else {
        return a.NOT_AVAILABLE;
      }
    }
    function w(a) {
      if (navigator.doNotTrack) {
        return navigator.doNotTrack;
      } else if (navigator.msDoNotTrack) {
        return navigator.msDoNotTrack;
      } else if (window.doNotTrack) {
        return window.doNotTrack;
      } else {
        return a.NOT_AVAILABLE;
      }
    }
    function x() {
      var a;
      var b = 0;
      if (navigator.maxTouchPoints !== undefined) {
        b = navigator.maxTouchPoints;
      } else if (navigator.msMaxTouchPoints !== undefined) {
        b = navigator.msMaxTouchPoints;
      }
      try {
        document.createEvent("TouchEvent");
        a = true;
      } catch (b) {
        a = false;
      }
      return [b, a, "ontouchstart" in window];
    }
    function y(a) {
      var b = [];
      var c = document.createElement("canvas");
      c.width = 2000;
      c.height = 200;
      c.style.display = "inline";
      var d = c.getContext("2d");
      d.rect(0, 0, 10, 10);
      d.rect(2, 2, 6, 6);
      b.push("canvas winding:" + (d.isPointInPath(5, 5, "evenodd") === false ? "yes" : "no"));
      d.textBaseline = "alphabetic";
      d.fillStyle = "#f60";
      d.fillRect(125, 1, 62, 20);
      d.fillStyle = "#069";
      if (a.dontUseFakeFontInCanvas) {
        d.font = "11pt Arial";
      } else {
        d.font = "11pt no-real-font-123";
      }
      d.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15);
      d.fillStyle = "rgba(102, 204, 0, 0.2)";
      d.font = "18pt Arial";
      d.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45);
      d.globalCompositeOperation = "multiply";
      d.fillStyle = "rgb(255,0,255)";
      d.beginPath();
      d.arc(50, 50, 50, 0, Math.PI * 2, true);
      d.closePath();
      d.fill();
      d.fillStyle = "rgb(0,255,255)";
      d.beginPath();
      d.arc(100, 50, 50, 0, Math.PI * 2, true);
      d.closePath();
      d.fill();
      d.fillStyle = "rgb(255,255,0)";
      d.beginPath();
      d.arc(75, 100, 50, 0, Math.PI * 2, true);
      d.closePath();
      d.fill();
      d.fillStyle = "rgb(255,0,255)";
      d.arc(75, 75, 75, 0, Math.PI * 2, true);
      d.arc(75, 75, 25, 0, Math.PI * 2, true);
      d.fill("evenodd");
      if (c.toDataURL) {
        b.push("canvas fp:" + c.toDataURL());
      }
      return b;
    }
    function z() {
      var a;
      function b(b) {
        a.clearColor(0, 0, 0, 1);
        a.enable(a.DEPTH_TEST);
        a.depthFunc(a.LEQUAL);
        a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT);
        return "[" + b[0] + ", " + b[1] + "]";
      }
      if (!(a = N())) {
        return null;
      }
      var c = [];
      var d = a.createBuffer();
      a.bindBuffer(a.ARRAY_BUFFER, d);
      var e = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0]);
      a.bufferData(a.ARRAY_BUFFER, e, a.STATIC_DRAW);
      d.itemSize = 3;
      d.numItems = 3;
      var f = a.createProgram();
      var g = a.createShader(a.VERTEX_SHADER);
      a.shaderSource(g, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
      a.compileShader(g);
      var h = a.createShader(a.FRAGMENT_SHADER);
      a.shaderSource(h, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
      a.compileShader(h);
      a.attachShader(f, g);
      a.attachShader(f, h);
      a.linkProgram(f);
      a.useProgram(f);
      f.vertexPosAttrib = a.getAttribLocation(f, "attrVertex");
      f.offsetUniform = a.getUniformLocation(f, "uniformOffset");
      a.enableVertexAttribArray(f.vertexPosArray);
      a.vertexAttribPointer(f.vertexPosAttrib, d.itemSize, a.FLOAT, false, 0, 0);
      a.uniform2f(f.offsetUniform, 1, 1);
      a.drawArrays(a.TRIANGLE_STRIP, 0, d.numItems);
      try {
        c.push(a.canvas.toDataURL());
      } catch (a) {}
      c.push("extensions:" + (a.getSupportedExtensions() || []).join(";"));
      c.push("webgl aliased line width range:" + b(a.getParameter(a.ALIASED_LINE_WIDTH_RANGE)));
      c.push("webgl aliased point size range:" + b(a.getParameter(a.ALIASED_POINT_SIZE_RANGE)));
      c.push("webgl alpha bits:" + a.getParameter(a.ALPHA_BITS));
      c.push("webgl antialiasing:" + (a.getContextAttributes().antialias ? "yes" : "no"));
      c.push("webgl blue bits:" + a.getParameter(a.BLUE_BITS));
      c.push("webgl depth bits:" + a.getParameter(a.DEPTH_BITS));
      c.push("webgl green bits:" + a.getParameter(a.GREEN_BITS));
      c.push("webgl max anisotropy:" + function (a) {
        var b = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic");
        if (b) {
          var c = a.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
          if (c === 0) {
            c = 2;
          }
          return c;
        }
        return null;
      }(a));
      c.push("webgl max combined texture image units:" + a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
      c.push("webgl max cube map texture size:" + a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE));
      c.push("webgl max fragment uniform vectors:" + a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS));
      c.push("webgl max render buffer size:" + a.getParameter(a.MAX_RENDERBUFFER_SIZE));
      c.push("webgl max texture image units:" + a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS));
      c.push("webgl max texture size:" + a.getParameter(a.MAX_TEXTURE_SIZE));
      c.push("webgl max varying vectors:" + a.getParameter(a.MAX_VARYING_VECTORS));
      c.push("webgl max vertex attribs:" + a.getParameter(a.MAX_VERTEX_ATTRIBS));
      c.push("webgl max vertex texture image units:" + a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
      c.push("webgl max vertex uniform vectors:" + a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS));
      c.push("webgl max viewport dims:" + b(a.getParameter(a.MAX_VIEWPORT_DIMS)));
      c.push("webgl red bits:" + a.getParameter(a.RED_BITS));
      c.push("webgl renderer:" + a.getParameter(a.RENDERER));
      c.push("webgl shading language version:" + a.getParameter(a.SHADING_LANGUAGE_VERSION));
      c.push("webgl stencil bits:" + a.getParameter(a.STENCIL_BITS));
      c.push("webgl vendor:" + a.getParameter(a.VENDOR));
      c.push("webgl version:" + a.getParameter(a.VERSION));
      try {
        var j = a.getExtension("WEBGL_debug_renderer_info");
        if (j) {
          c.push("webgl unmasked vendor:" + a.getParameter(j.UNMASKED_VENDOR_WEBGL));
          c.push("webgl unmasked renderer:" + a.getParameter(j.UNMASKED_RENDERER_WEBGL));
        }
      } catch (a) {}
      if (a.getShaderPrecisionFormat) {
        i(["FLOAT", "INT"], function (b) {
          i(["VERTEX", "FRAGMENT"], function (d) {
            i(["HIGH", "MEDIUM", "LOW"], function (e) {
              i(["precision", "rangeMin", "rangeMax"], function (f) {
                var g = a.getShaderPrecisionFormat(a[d + "_SHADER"], a[e + "_" + b])[f];
                if (f !== "precision") {
                  f = "precision " + f;
                }
                var h = ["webgl ", d.toLowerCase(), " shader ", e.toLowerCase(), " ", b.toLowerCase(), " ", f, ":", g].join("");
                c.push(h);
              });
            });
          });
        });
        O(a);
        return c;
      } else {
        O(a);
        return c;
      }
    }
    function A() {
      try {
        var a = N();
        var b = a.getExtension("WEBGL_debug_renderer_info");
        var c = a.getParameter(b.UNMASKED_VENDOR_WEBGL) + "~" + a.getParameter(b.UNMASKED_RENDERER_WEBGL);
        O(a);
        return c;
      } catch (a) {
        return null;
      }
    }
    function B() {
      var a = document.createElement("div");
      a.innerHTML = "&nbsp;";
      a.className = "adsbox";
      var b = false;
      try {
        document.body.appendChild(a);
        b = document.getElementsByClassName("adsbox")[0].offsetHeight === 0;
        document.body.removeChild(a);
      } catch (a) {
        b = false;
      }
      return b;
    }
    function C() {
      if (navigator.languages !== undefined) {
        try {
          if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) {
            return true;
          }
        } catch (a) {
          return true;
        }
      }
      return false;
    }
    function D() {
      return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight;
    }
    function E() {
      var a;
      var b = navigator.userAgent.toLowerCase();
      var c = navigator.oscpu;
      var d = navigator.platform.toLowerCase();
      a = b.indexOf("windows phone") >= 0 ? "Windows Phone" : b.indexOf("windows") >= 0 || b.indexOf("win16") >= 0 || b.indexOf("win32") >= 0 || b.indexOf("win64") >= 0 || b.indexOf("win95") >= 0 || b.indexOf("win98") >= 0 || b.indexOf("winnt") >= 0 || b.indexOf("wow64") >= 0 ? "Windows" : b.indexOf("android") >= 0 ? "Android" : b.indexOf("linux") >= 0 || b.indexOf("cros") >= 0 || b.indexOf("x11") >= 0 ? "Linux" : b.indexOf("iphone") >= 0 || b.indexOf("ipad") >= 0 || b.indexOf("ipod") >= 0 || b.indexOf("crios") >= 0 || b.indexOf("fxios") >= 0 ? "iOS" : b.indexOf("macintosh") >= 0 || b.indexOf("mac_powerpc)") >= 0 ? "Mac" : "Other";
      if (("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && a !== "Windows" && a !== "Windows Phone" && a !== "Android" && a !== "iOS" && a !== "Other" && b.indexOf("cros") === -1) {
        return true;
      }
      if (c !== undefined) {
        if ((c = c.toLowerCase()).indexOf("win") >= 0 && a !== "Windows" && a !== "Windows Phone") {
          return true;
        }
        if (c.indexOf("linux") >= 0 && a !== "Linux" && a !== "Android") {
          return true;
        }
        if (c.indexOf("mac") >= 0 && a !== "Mac" && a !== "iOS") {
          return true;
        }
        if ((c.indexOf("win") === -1 && c.indexOf("linux") === -1 && c.indexOf("mac") === -1) != (a === "Other")) {
          return true;
        }
      }
      return d.indexOf("win") >= 0 && a !== "Windows" && a !== "Windows Phone" || (d.indexOf("linux") >= 0 || d.indexOf("android") >= 0 || d.indexOf("pike") >= 0) && a !== "Linux" && a !== "Android" || (d.indexOf("mac") >= 0 || d.indexOf("ipad") >= 0 || d.indexOf("ipod") >= 0 || d.indexOf("iphone") >= 0) && a !== "Mac" && a !== "iOS" || (d.indexOf("arm") < 0 || a !== "Windows Phone") && (d.indexOf("pike") < 0 || b.indexOf("opera mini") < 0) && ((d.indexOf("win") < 0 && d.indexOf("linux") < 0 && d.indexOf("mac") < 0 && d.indexOf("iphone") < 0 && d.indexOf("ipad") < 0 && d.indexOf("ipod") < 0) !== (a === "Other") || navigator.plugins === undefined && a !== "Windows" && a !== "Windows Phone");
    }
    function F() {
      var a;
      var b = navigator.userAgent.toLowerCase();
      var c = navigator.productSub;
      if (b.indexOf("edge/") >= 0 || b.indexOf("iemobile/") >= 0) {
        return false;
      }
      if (b.indexOf("opera mini") >= 0) {
        return false;
      }
      if (((a = b.indexOf("firefox/") >= 0 ? "Firefox" : b.indexOf("opera/") >= 0 || b.indexOf(" opr/") >= 0 ? "Opera" : b.indexOf("chrome/") >= 0 ? "Chrome" : b.indexOf("safari/") >= 0 ? b.indexOf("android 1.") >= 0 || b.indexOf("android 2.") >= 0 || b.indexOf("android 3.") >= 0 || b.indexOf("android 4.") >= 0 ? "AOSP" : "Safari" : b.indexOf("trident/") >= 0 ? "Internet Explorer" : "Other") === "Chrome" || a === "Safari" || a === "Opera") && c !== "20030107") {
        return true;
      }
      var d;
      var e = eval.toString().length;
      if (e === 37 && a !== "Safari" && a !== "Firefox" && a !== "Other") {
        return true;
      }
      if (e === 39 && a !== "Internet Explorer" && a !== "Other") {
        return true;
      }
      if (e === 33 && a !== "Chrome" && a !== "AOSP" && a !== "Opera" && a !== "Other") {
        return true;
      }
      try {
        throw "a";
      } catch (a) {
        try {
          a.toSource();
          d = true;
        } catch (a) {
          d = false;
        }
      }
      return d && a !== "Firefox" && a !== "Other";
    }
    function G() {
      var a = document.createElement("canvas");
      return !!a.getContext && !!a.getContext("2d");
    }
    function H() {
      if (!G()) {
        return false;
      }
      var a = N();
      var b = !!window.WebGLRenderingContext && !!a;
      O(a);
      return b;
    }
    function I() {
      return navigator.appName === "Microsoft Internet Explorer" || navigator.appName === "Netscape" && !!/Trident/.test(navigator.userAgent);
    }
    function J() {
      return ("msWriteProfilerMark" in window) + ("msLaunchUri" in navigator) + ("msSaveBlob" in navigator) >= 2;
    }
    function K() {
      return window.swfobject !== undefined;
    }
    function L() {
      return window.swfobject.hasFlashPlayerVersion("9.0.0");
    }
    function M(a, b) {
      window.___fp_swf_loaded = function (b) {
        a(b);
      };
      var c = b.fonts.swfContainerId;
      (function (a) {
        var b = document.createElement("div");
        b.setAttribute("id", a.fonts.swfContainerId);
        document.body.appendChild(b);
      })();
      var d = {
        onReady: "___fp_swf_loaded"
      };
      window.swfobject.embedSWF(b.fonts.swfPath, c, "1", "1", "9.0.0", false, d, {
        allowScriptAccess: "always",
        menu: "false"
      }, {});
    }
    function N() {
      var a = document.createElement("canvas");
      var b = null;
      try {
        b = a.getContext("webgl") || a.getContext("experimental-webgl");
      } catch (a) {}
      b ||= null;
      return b;
    }
    function O(a) {
      var b = a.getExtension("WEBGL_lose_context");
      if (b != null) {
        b.loseContext();
      }
    }
    var P = [{
      key: "userAgent",
      getData: function (a) {
        a(navigator.userAgent);
      }
    }, {
      key: "webdriver",
      getData: function (a, b) {
        a(navigator.webdriver == null ? b.NOT_AVAILABLE : navigator.webdriver);
      }
    }, {
      key: "language",
      getData: function (a, b) {
        a(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || b.NOT_AVAILABLE);
      }
    }, {
      key: "colorDepth",
      getData: function (a, b) {
        a(window.screen.colorDepth || b.NOT_AVAILABLE);
      }
    }, {
      key: "deviceMemory",
      getData: function (a, b) {
        a(navigator.deviceMemory || b.NOT_AVAILABLE);
      }
    }, {
      key: "pixelRatio",
      getData: function (a, b) {
        a(window.devicePixelRatio || b.NOT_AVAILABLE);
      }
    }, {
      key: "hardwareConcurrency",
      getData: function (a, b) {
        a(t(b));
      }
    }, {
      key: "screenResolution",
      getData: function (a, b) {
        a(l(b));
      }
    }, {
      key: "availableScreenResolution",
      getData: function (a, b) {
        a(m(b));
      }
    }, {
      key: "timezoneOffset",
      getData: function (a) {
        a(new Date().getTimezoneOffset());
      }
    }, {
      key: "timezone",
      getData: function (a, b) {
        if (window.Intl && window.Intl.DateTimeFormat) {
          a(new window.Intl.DateTimeFormat().resolvedOptions().timeZone || b.NOT_AVAILABLE);
        } else {
          a(b.NOT_AVAILABLE);
        }
      }
    }, {
      key: "sessionStorage",
      getData: function (a, b) {
        a(q(b));
      }
    }, {
      key: "localStorage",
      getData: function (a, b) {
        a(r(b));
      }
    }, {
      key: "indexedDb",
      getData: function (a, b) {
        a(s(b));
      }
    }, {
      key: "addBehavior",
      getData: function (a) {
        a(!!window.HTMLElement.prototype.addBehavior);
      }
    }, {
      key: "openDatabase",
      getData: function (a) {
        a(!!window.openDatabase);
      }
    }, {
      key: "cpuClass",
      getData: function (a, b) {
        a(u(b));
      }
    }, {
      key: "platform",
      getData: function (a, b) {
        a(v(b));
      }
    }, {
      key: "doNotTrack",
      getData: function (a, b) {
        a(w(b));
      }
    }, {
      key: "plugins",
      getData: function (a, b) {
        if (I()) {
          if (b.plugins.excludeIE) {
            a(b.EXCLUDED);
          } else {
            a(o(b));
          }
        } else {
          a(n(b));
        }
      }
    }, {
      key: "canvas",
      getData: function (a, b) {
        if (G()) {
          a(y(b));
        } else {
          a(b.NOT_AVAILABLE);
        }
      }
    }, {
      key: "webgl",
      getData: function (a, b) {
        if (H()) {
          a(z());
        } else {
          a(b.NOT_AVAILABLE);
        }
      }
    }, {
      key: "webglVendorAndRenderer",
      getData: function (a) {
        if (H()) {
          a(A());
        } else {
          a();
        }
      }
    }, {
      key: "adBlock",
      getData: function (a) {
        a(B());
      }
    }, {
      key: "hasLiedLanguages",
      getData: function (a) {
        a(C());
      }
    }, {
      key: "hasLiedResolution",
      getData: function (a) {
        a(D());
      }
    }, {
      key: "hasLiedOs",
      getData: function (a) {
        a(E());
      }
    }, {
      key: "hasLiedBrowser",
      getData: function (a) {
        a(F());
      }
    }, {
      key: "touchSupport",
      getData: function (a) {
        a(x());
      }
    }, {
      key: "fonts",
      getData: function (a, b) {
        var c = ["monospace", "sans-serif", "serif"];
        var d = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
        if (b.fonts.extendedJsFonts) {
          d = d.concat(["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"]);
        }
        d = (d = d.concat(b.fonts.userDefinedFonts)).filter(function (a, b) {
          return d.indexOf(a) === b;
        });
        var e = document.getElementsByTagName("body")[0];
        var f = document.createElement("div");
        var g = document.createElement("div");
        var h = {};
        var i = {};
        function j() {
          var a = document.createElement("span");
          a.style.position = "absolute";
          a.style.left = "-9999px";
          a.style.fontSize = "72px";
          a.style.fontStyle = "normal";
          a.style.fontWeight = "normal";
          a.style.letterSpacing = "normal";
          a.style.lineBreak = "auto";
          a.style.lineHeight = "normal";
          a.style.textTransform = "none";
          a.style.textAlign = "left";
          a.style.textDecoration = "none";
          a.style.textShadow = "none";
          a.style.whiteSpace = "normal";
          a.style.wordBreak = "normal";
          a.style.wordSpacing = "normal";
          a.innerHTML = "mmmmmmmmmmlli";
          return a;
        }
        function k(a, b) {
          var c = j();
          c.style.fontFamily = "'" + a + "'," + b;
          return c;
        }
        function l(a) {
          var b = false;
          for (var d = 0; d < c.length; d++) {
            if (b = a[d].offsetWidth !== h[c[d]] || a[d].offsetHeight !== i[c[d]]) {
              return b;
            }
          }
          return b;
        }
        var m = function () {
          var a = [];
          for (var b = 0, d = c.length; b < d; b++) {
            var e = j();
            e.style.fontFamily = c[b];
            f.appendChild(e);
            a.push(e);
          }
          return a;
        }();
        e.appendChild(f);
        for (var n = 0, o = c.length; n < o; n++) {
          h[c[n]] = m[n].offsetWidth;
          i[c[n]] = m[n].offsetHeight;
        }
        var p = function () {
          var a = {};
          for (var b = 0, e = d.length; b < e; b++) {
            var f = [];
            for (var h = 0, i = c.length; h < i; h++) {
              var j = k(d[b], c[h]);
              g.appendChild(j);
              f.push(j);
            }
            a[d[b]] = f;
          }
          return a;
        }();
        e.appendChild(g);
        var q = [];
        for (var r = 0, s = d.length; r < s; r++) {
          if (l(p[d[r]])) {
            q.push(d[r]);
          }
        }
        e.removeChild(g);
        e.removeChild(f);
        a(q);
      },
      pauseBefore: true
    }, {
      key: "fontsFlash",
      getData: function (a, b) {
        if (K()) {
          if (L()) {
            if (b.fonts.swfPath) {
              M(function (b) {
                a(b);
              }, b);
              return;
            } else {
              return a("missing options.fonts.swfPath");
            }
          } else {
            return a("flash not installed");
          }
        } else {
          return a("swf object not loaded");
        }
      },
      pauseBefore: true
    }, {
      key: "audio",
      getData: function (a, b) {
        var c = b.audio;
        if (c.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) {
          return a(b.EXCLUDED);
        }
        var d = window.OfflineAudioContext || window.webkitOfflineAudioContext;
        if (d == null) {
          return a(b.NOT_AVAILABLE);
        }
        var e = new d(1, 44100, 44100);
        var f = e.createOscillator();
        f.type = "triangle";
        f.frequency.setValueAtTime(10000, e.currentTime);
        var g = e.createDynamicsCompressor();
        i([["threshold", -50], ["knee", 40], ["ratio", 12], ["reduction", -20], ["attack", 0], ["release", 0.25]], function (a) {
          if (g[a[0]] !== undefined && typeof g[a[0]].setValueAtTime == "function") {
            g[a[0]].setValueAtTime(a[1], e.currentTime);
          }
        });
        f.connect(g);
        g.connect(e.destination);
        f.start(0);
        e.startRendering();
        var h = setTimeout(function () {
          console.warn("Audio fingerprint timed out. Please report bug at https://github.com/fingerprintjs/fingerprintjs with your user agent: \"" + navigator.userAgent + "\".");
          e.oncomplete = function () {};
          e = null;
          return a("audioTimeout");
        }, c.timeout);
        e.oncomplete = function (b) {
          var c;
          try {
            clearTimeout(h);
            c = b.renderedBuffer.getChannelData(0).slice(4500, 5000).reduce(function (a, b) {
              return a + Math.abs(b);
            }, 0).toString();
            f.disconnect();
            g.disconnect();
          } catch (b) {
            a(b);
            return;
          }
          a(c);
        };
      }
    }, {
      key: "enumerateDevices",
      getData: function (a, b) {
        if (!k()) {
          return a(b.NOT_AVAILABLE);
        }
        navigator.mediaDevices.enumerateDevices().then(function (b) {
          a(b.map(function (a) {
            return "id=" + a.deviceId + ";gid=" + a.groupId + ";" + a.kind + ";" + a.label;
          }));
        }).catch(function (b) {
          a(b);
        });
      }
    }];
    function Q(a) {
      throw new Error("'new Fingerprint()' is deprecated, see https://github.com/fingerprintjs/fingerprintjs#upgrade-guide-from-182-to-200");
    }
    Q.get = function (a, b) {
      if (b) {
        a ||= {};
      } else {
        b = a;
        a = {};
      }
      (function (a, b) {
        if (b == null) {
          return a;
        }
        var c;
        var d;
        for (d in b) {
          if ((c = b[d]) != null && !Object.prototype.hasOwnProperty.call(a, d)) {
            a[d] = c;
          }
        }
      })(a, h);
      a.components = a.extraComponents.concat(P);
      var c = {
        data: [],
        addPreprocessedComponent: function (b, d) {
          if (typeof a.preprocessor == "function") {
            d = a.preprocessor(b, d);
          }
          c.data.push({
            key: b,
            value: d
          });
        }
      };
      var d = -1;
      function e(f) {
        if ((d += 1) >= a.components.length) {
          b(c.data);
        } else {
          var g = a.components[d];
          if (a.excludes[g.key]) {
            e(false);
          } else {
            if (!f && g.pauseBefore) {
              d -= 1;
              setTimeout(function () {
                e(true);
              }, 1);
              return;
            }
            try {
              g.getData(function (a) {
                c.addPreprocessedComponent(g.key, a);
                e(false);
              }, a);
            } catch (a) {
              c.addPreprocessedComponent(g.key, String(a));
              e(false);
            }
          }
        }
      }
      e(false);
    };
    Q.getPromise = function (a) {
      return new Promise(function (b, c) {
        Q.get(a, b);
      });
    };
    Q.getV18 = function (a, b) {
      if (b == null) {
        b = a;
        a = {};
      }
      return Q.get(a, function (c) {
        var d = [];
        for (var e = 0; e < c.length; e++) {
          var f = c[e];
          if (f.value === (a.NOT_AVAILABLE || "not available")) {
            d.push({
              key: f.key,
              value: "unknown"
            });
          } else if (f.key === "plugins") {
            d.push({
              key: "plugins",
              value: j(f.value, function (a) {
                var b = j(a[2], function (a) {
                  if (a.join) {
                    return a.join("~");
                  } else {
                    return a;
                  }
                }).join(",");
                return [a[0], a[1], b].join("::");
              })
            });
          } else if (["canvas", "webgl"].indexOf(f.key) !== -1 && Array.isArray(f.value)) {
            d.push({
              key: f.key,
              value: f.value.join("~")
            });
          } else if (["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(f.key) !== -1) {
            if (!f.value) {
              continue;
            }
            d.push({
              key: f.key,
              value: 1
            });
          } else if (f.value) {
            d.push(f.value.join ? {
              key: f.key,
              value: f.value.join(";")
            } : f);
          } else {
            d.push({
              key: f.key,
              value: f.value
            });
          }
        }
        var h = g(j(d, function (a) {
          return a.value;
        }).join("~~~"), 31);
        b(h, d);
      });
    };
    Q.x64hash128 = g;
    Q.VERSION = "2.1.4";
    return Q;
  });
  (function (a, b) {
    var c = "model";
    var d = "name";
    var e = "type";
    var f = "vendor";
    var g = "version";
    var h = "mobile";
    var i = "tablet";
    var j = "smarttv";
    var k = {
      extend: function (a, b) {
        var c = {};
        for (var d in a) {
          if (b[d] && b[d].length % 2 == 0) {
            c[d] = b[d].concat(a[d]);
          } else {
            c[d] = a[d];
          }
        }
        return c;
      },
      has: function (a, b) {
        return typeof a == "string" && b.toLowerCase().indexOf(a.toLowerCase()) !== -1;
      },
      lowerize: function (a) {
        return a.toLowerCase();
      },
      major: function (a) {
        if (typeof a == "string") {
          return a.replace(/[^\d\.]/g, "").split(".")[0];
        } else {
          return undefined;
        }
      },
      trim: function (a) {
        return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
      }
    };
    var l = {
      rgx: function (a, b) {
        var c;
        var d;
        var e;
        var f;
        for (var g, h, i = 0; i < b.length && !g;) {
          var j = b[i];
          var k = b[i + 1];
          for (c = d = 0; c < j.length && !g;) {
            if (g = j[c++].exec(a)) {
              for (e = 0; e < k.length; e++) {
                h = g[++d];
                if (typeof (f = k[e]) == "object" && f.length > 0) {
                  if (f.length == 2) {
                    if (typeof f[1] == "function") {
                      this[f[0]] = f[1].call(this, h);
                    } else {
                      this[f[0]] = f[1];
                    }
                  } else if (f.length == 3) {
                    if (typeof f[1] != "function" || f[1].exec && f[1].test) {
                      this[f[0]] = h ? h.replace(f[1], f[2]) : undefined;
                    } else {
                      this[f[0]] = h ? f[1].call(this, h, f[2]) : undefined;
                    }
                  } else if (f.length == 4) {
                    this[f[0]] = h ? f[3].call(this, h.replace(f[1], f[2])) : undefined;
                  }
                } else {
                  this[f] = h || undefined;
                }
              }
            }
          }
          i += 2;
        }
      },
      str: function (a, b) {
        for (var c in b) {
          if (typeof b[c] == "object" && b[c].length > 0) {
            for (var d = 0; d < b[c].length; d++) {
              if (k.has(b[c][d], a)) {
                if (c === "?") {
                  return undefined;
                } else {
                  return c;
                }
              }
            }
          } else if (k.has(b[c], a)) {
            if (c === "?") {
              return undefined;
            } else {
              return c;
            }
          }
        }
        return a;
      }
    };
    var m = {
      browser: {
        oldsafari: {
          version: {
            "1.0": "/8",
            1.2: "/1",
            1.3: "/3",
            "2.0": "/412",
            "2.0.2": "/416",
            "2.0.3": "/417",
            "2.0.4": "/419",
            "?": "/"
          }
        }
      },
      device: {
        amazon: {
          model: {
            "Fire Phone": ["SD", "KF"]
          }
        },
        sprint: {
          model: {
            "Evo Shift 4G": "7373KT"
          },
          vendor: {
            HTC: "APA",
            Sprint: "Sprint"
          }
        }
      },
      os: {
        windows: {
          version: {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2000: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
          }
        }
      }
    };
    var n = {
      browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6}).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [d, g], [/(opios)[\/\s]+([\w\.]+)/i], [[d, "Opera Mini"], g], [/\s(opr)\/([\w\.]+)/i], [[d, "Opera"], g], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(bidubrowser|baidubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i], [d, g], [/(konqueror)\/([\w\.]+)/i], [[d, "Konqueror"], g], [/(trident).+rv[:\s]([\w\.]{1,9}).+like\sgecko/i], [[d, "IE"], g], [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i], [[d, "Edge"], g], [/(yabrowser)\/([\w\.]+)/i], [[d, "Yandex"], g], [/(Avast)\/([\w\.]+)/i], [[d, "Avast Secure Browser"], g], [/(AVG)\/([\w\.]+)/i], [[d, "AVG Secure Browser"], g], [/(puffin)\/([\w\.]+)/i], [[d, "Puffin"], g], [/(focus)\/([\w\.]+)/i], [[d, "Firefox Focus"], g], [/(opt)\/([\w\.]+)/i], [[d, "Opera Touch"], g], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[d, "UCBrowser"], g], [/(comodo_dragon)\/([\w\.]+)/i], [[d, /_/g, " "], g], [/(windowswechat qbcore)\/([\w\.]+)/i], [[d, "WeChat(Win) Desktop"], g], [/(micromessenger)\/([\w\.]+)/i], [[d, "WeChat"], g], [/(brave)\/([\w\.]+)/i], [[d, "Brave"], g], [/(whale)\/([\w\.]+)/i], [[d, "Whale"], g], [/(qqbrowserlite)\/([\w\.]+)/i], [d, g], [/(QQ)\/([\d\.]+)/i], [d, g], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [d, g], [/(baiduboxapp)[\/\s]?([\w\.]+)/i], [d, g], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [d, g], [/(MetaSr)[\/\s]?([\w\.]+)/i], [d], [/(LBBROWSER)/i], [d], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [g, [d, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [g, [d, "Facebook"]], [/FBAN\/FBIOS|FB_IAB\/FB4A/i], [[d, "Facebook"]], [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i], [d, g], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [g, [d, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[d, /(.+)/, "$1 WebView"], g], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[d, /(.+(?:g|us))(.+)/, "$1 $2"], g], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [g, [d, "Android Browser"]], [/(sailfishbrowser)\/([\w\.]+)/i], [[d, "Sailfish Browser"], g], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [d, g], [/(dolfin)\/([\w\.]+)/i], [[d, "Dolphin"], g], [/(qihu|qhbrowser|qihoobrowser|360browser)/i], [[d, "360 Browser"]], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[d, "Chrome"], g], [/(coast)\/([\w\.]+)/i], [[d, "Opera Coast"], g], [/fxios\/([\w\.-]+)/i], [g, [d, "Firefox"]], [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i], [g, [d, "Mobile Safari"]], [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i], [g, d], [/webkit.+?(gsa)\/([\w\.]+)\s.*(mobile\s?safari|safari)(\/[\w\.]+)/i], [[d, "GSA"], g], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [d, [g, l.str, m.browser.oldsafari.version]], [/(webkit|khtml)\/([\w\.]+)/i], [d, g], [/(navigator|netscape)\/([\w\.-]+)/i], [[d, "Netscape"], g], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i, /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [d, g]],
      cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [["architecture", "amd64"]], [/(ia32(?=;))/i], [["architecture", k.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [["architecture", "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [["architecture", "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [["architecture", /ower/, "", k.lowerize]], [/(sun4\w)[;\)]/i], [["architecture", "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [["architecture", k.lowerize]]],
      device: [[/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i], [c, f, [e, i]], [/applecoremedia\/[\w\.]+ \((ipad)/], [c, [f, "Apple"], [e, i]], [/(apple\s{0,1}tv)/i], [[c, "Apple TV"], [f, "Apple"], [e, j]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [f, c, [e, i]], [/(kf[A-z]+)(\sbuild\/|\)).+silk\//i], [c, [f, "Amazon"], [e, i]], [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i], [[c, l.str, m.device.amazon.model], [f, "Amazon"], [e, h]], [/android.+aft([bms])\sbuild/i], [c, [f, "Amazon"], [e, j]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [c, f, [e, h]], [/\((ip[honed|\s\w*]+);/i], [c, [f, "Apple"], [e, h]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [f, c, [e, h]], [/\(bb10;\s(\w+)/i], [c, [f, "BlackBerry"], [e, h]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i], [c, [f, "Asus"], [e, i]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[f, "Sony"], [c, "Xperia Tablet"], [e, i]], [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [c, [f, "Sony"], [e, h]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [f, c, [e, "console"]], [/android.+;\s(shield)\sbuild/i], [c, [f, "Nvidia"], [e, "console"]], [/(playstation\s[34portablevi]+)/i], [c, [f, "Sony"], [e, "console"]], [/(sprint\s(\w+))/i], [[f, l.str, m.device.sprint.vendor], [c, l.str, m.device.sprint.model], [e, h]], [/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [f, [c, /_/g, " "], [e, h]], [/(nexus\s9)/i], [c, [f, "HTC"], [e, i]], [/d\/huawei([\w\s-]+)[;\)]/i, /android.+\s(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?)/i], [c, [f, "Huawei"], [e, h]], [/android.+(bah2?-a?[lw]\d{2})/i], [c, [f, "Huawei"], [e, i]], [/(microsoft);\s(lumia[\s\w]+)/i], [f, c, [e, h]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [c, [f, "Microsoft"], [e, "console"]], [/(kin\.[onetw]{3})/i], [[c, /\./g, " "], [f, "Microsoft"], [e, h]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [c, [f, "Motorola"], [e, h]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [c, [f, "Motorola"], [e, i]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[f, k.trim], [c, k.trim], [e, j]], [/hbbtv.+maple;(\d+)/i], [[c, /^/, "SmartTV"], [f, "Samsung"], [e, j]], [/\(dtv[\);].+(aquos)/i], [c, [f, "Sharp"], [e, j]], [/android.+((sch-i[89]0\d|shw-m380s|SM-P605|SM-P610|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[f, "Samsung"], c, [e, i]], [/smart-tv.+(samsung)/i], [f, [e, j], c], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[f, "Samsung"], c, [e, h]], [/sie-(\w*)/i], [c, [f, "Siemens"], [e, h]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [[f, "Nokia"], c, [e, h]], [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i], [c, [f, "Acer"], [e, i]], [/android.+([vl]k\-?\d{3})\s+build/i], [c, [f, "LG"], [e, i]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[f, "LG"], c, [e, i]], [/linux;\snetcast.+smarttv/i, /lg\snetcast\.tv-201\d/i], [[f, "LG"], c, [e, j]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], [c, [f, "LG"], [e, h]], [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i], [f, c, [e, i]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [c, [f, "Lenovo"], [e, i]], [/(lenovo)[_\s-]?([\w-]+)/i], [f, c, [e, h]], [/linux;.+((jolla));/i], [f, c, [e, h]], [/((pebble))app\/[\d\.]+\s/i], [f, c, [e, "wearable"]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [f, c, [e, h]], [/crkey/i], [[c, "Chromecast"], [f, "Google"], [e, j]], [/android.+;\s(glass)\s\d/i], [c, [f, "Google"], [e, "wearable"]], [/android.+;\s(pixel c)[\s)]/i], [c, [f, "Google"], [e, i]], [/android.+;\s(pixel( [2-9]a?)?( xl)?)[\s)]/i], [c, [f, "Google"], [e, h]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i, /android.+(redmi[\s\-_]?(?:note|k)?(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i, /android.+(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i], [[c, /_/g, " "], [f, "Xiaomi"], [e, h]], [/android.+(mi[\s\-_]?(?:pad)(?:[\s_]?[\w\s]+))(?:\sbuild|\))/i], [[c, /_/g, " "], [f, "Xiaomi"], [e, i]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [c, [f, "Meizu"], [e, h]], [/(mz)-([\w-]{2,})/i], [[f, "Meizu"], c, [e, h]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})[\s)]/i], [c, [f, "OnePlus"], [e, h]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [c, [f, "RCA"], [e, i]], [/android.+[;\/\s](Venue[\d\s]{2,7})\s+build/i], [c, [f, "Dell"], [e, i]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [c, [f, "Verizon"], [e, i]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[f, "Barnes & Noble"], c, [e, i]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [c, [f, "NuVision"], [e, i]], [/android.+;\s(k88)\sbuild/i], [c, [f, "ZTE"], [e, i]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [c, [f, "Swiss"], [e, h]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [c, [f, "Swiss"], [e, i]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [c, [f, "Zeki"], [e, i]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [[f, "Dragon Touch"], c, [e, i]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], [c, [f, "Insignia"], [e, i]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], [c, [f, "NextBook"], [e, i]], [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[f, "Voice"], c, [e, h]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [[f, "LvTel"], c, [e, h]], [/android.+;\s(PH-1)\s/i], [c, [f, "Essential"], [e, h]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [c, [f, "Envizen"], [e, i]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], [f, c, [e, i]], [/android.+[;\/]\s*(Trio[\s\w\-\.]+)\s+build/i], [c, [f, "MachSpeed"], [e, i]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [f, c, [e, i]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [c, [f, "Rotor"], [e, i]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], [f, c, [e, i]], [/android .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i], [c, [e, h]], [/android .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i], [c, [e, i]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[e, k.lowerize], f, c], [/[\s\/\(](smart-?tv)[;\)]/i], [[e, j]], [/(android[\w\.\s\-]{0,9});.+build/i], [c, [f, "Generic"]]],
      engine: [[/windows.+\sedge\/([\w\.]+)/i], [g, [d, "EdgeHTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [g, [d, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [d, g], [/rv\:([\w\.]{1,9}).+(gecko)/i], [g, d]],
      os: [[/microsoft\s(windows)\s(vista|xp)/i], [d, g], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [d, [g, l.str, m.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[d, "Windows"], [g, l.str, m.os.windows.version]], [/\((bb)(10);/i], [[d, "BlackBerry"], g], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i], [d, g], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [[d, "Symbian"], g], [/\((series40);/i], [d], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[d, "Firefox OS"], g], [/crkey\/([\d\.]+)/i], [g, [d, "Chromecast"]], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], [d, g], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[d, "Chromium OS"], g], [/(sunos)\s?([\w\.\d]*)/i], [[d, "Solaris"], g], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], [d, g], [/(haiku)\s(\w+)/i], [d, g], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[g, /_/g, "."], [d, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [[d, "Mac OS"], [g, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i], [d, g]]
    };
    function o(b, c) {
      if (typeof b == "object") {
        c = b;
        b = undefined;
      }
      if (!(this instanceof o)) {
        return new o(b, c).getResult();
      }
      var d = b || (a && a.navigator && a.navigator.userAgent ? a.navigator.userAgent : "");
      var e = c ? k.extend(n, c) : n;
      this.getBrowser = function () {
        var a = {
          name: undefined,
          version: undefined
        };
        l.rgx.call(a, d, e.browser);
        a.major = k.major(a.version);
        return a;
      };
      this.getCPU = function () {
        var a = {
          architecture: undefined
        };
        l.rgx.call(a, d, e.cpu);
        return a;
      };
      this.getDevice = function () {
        var a = {
          vendor: undefined,
          model: undefined,
          type: undefined
        };
        l.rgx.call(a, d, e.device);
        return a;
      };
      this.getEngine = function () {
        var a = {
          name: undefined,
          version: undefined
        };
        l.rgx.call(a, d, e.engine);
        return a;
      };
      this.getOS = function () {
        var a = {
          name: undefined,
          version: undefined
        };
        l.rgx.call(a, d, e.os);
        return a;
      };
      this.getResult = function () {
        return {
          ua: this.getUA(),
          browser: this.getBrowser(),
          engine: this.getEngine(),
          os: this.getOS(),
          device: this.getDevice(),
          cpu: this.getCPU()
        };
      };
      this.getUA = function () {
        return d;
      };
      this.setUA = function (a) {
        d = a;
        return this;
      };
      return this;
    }
    o.VERSION = "0.7.23";
    o.BROWSER = {
      NAME: d,
      MAJOR: "major",
      VERSION: g
    };
    o.CPU = {
      ARCHITECTURE: "architecture"
    };
    o.DEVICE = {
      MODEL: c,
      VENDOR: f,
      TYPE: e,
      CONSOLE: "console",
      MOBILE: h,
      SMARTTV: j,
      TABLET: i,
      WEARABLE: "wearable",
      EMBEDDED: "embedded"
    };
    o.ENGINE = {
      NAME: d,
      VERSION: g
    };
    o.OS = {
      NAME: d,
      VERSION: g
    };
    if (typeof exports != "undefined") {
      if (typeof module != "undefined" && module.exports) {
        exports = module.exports = o;
      }
      exports.UAParser = o;
    } else if (a) {
      a.UAParser = o;
    }
    var p = a && (a.jQuery || a.Zepto);
    if (p && !p.ua) {
      var q = new o();
      p.ua = q.getResult();
      p.ua.get = function () {
        return q.getUA();
      };
      p.ua.set = function (a) {
        q.setUA(a);
        var b = q.getResult();
        for (var c in b) {
          p.ua[c] = b[c];
        }
      };
    }
  })(typeof window == "object" ? window : this);
  (function () {
    var a = {
      excludes: {
        userAgent: false,
        enumerateDevices: false,
        fontsFlash: true
      },
      preprocessor: function (a, b) {
        if (a == "userAgent") {
          var c = UAParser(b);
          return c.os.name + "_" + c.os.version + "_" + c.engine.name + "_" + c.browser.name + "_" + c.device.type;
        }
        if (a == "enumerateDevices" && typeof b == "object") {
          return (Array.isArray(b) ? b : Object.keys(b)).map(function (a) {
            return a.replace(/g?id=[^;]+;/g, "");
          });
        } else {
          return b;
        }
      },
      extraComponents: [{
        key: "_geo",
        getData: function (a, b) {
          a("geolocation" in navigator);
        }
      }, {
        key: "_sensor",
        getData: function (a, b) {
          a({
            gyroscope: "Gyroscope" in window,
            accelerometer: "Accelerometer" in window,
            magnetometer: "Magnetometer" in window,
            absorient: "AbsoluteOrientationSensor" in window,
            relorient: "RelativeOrientationSensor" in window
          });
        }
      }]
    };
    Fingerprint2.get(a, function (a) {
      try {
        var b = {};
        for (var c = 0; c < a.length; c++) {
          b[a[c].key] = a[c].value;
        }
        var d = function (a) {
          var b = {};
          if (document.getElementById(a)) {
            for (var c = document.getElementById(a).getAttribute("src").split("?").pop().split("&"), d = 0; d < c.length; d++) {
              var e = c[d].split("=");
              b[e[0]] = e[1];
            }
          }
          return b;
        }("ddg_script_f");
        b.context = d.context !== undefined ? d.context : "normal";
        var e = new XMLHttpRequest();
        if (d.context && d.context === "free_splash") {
          e.onreadystatechange = function () {
            if (e.readyState === 4) {
              setTimeout(function () {
                document.location.reload(true);
              }, 2000);
            }
          };
        }
        e.open("POST", "/.well-known/ddos-guard/mark/");
        e.send(JSON.stringify(b));
      } catch (a) {}
    });
  })();
