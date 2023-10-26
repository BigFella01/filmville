// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9scb0":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "f0d6d5e885e3cad1";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1aybq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _helpersMjs = require("./helpers.mjs");
var _modelMjs = require("./model.mjs");
var _resultsViewMjs = require("./views/resultsView.mjs");
var _resultsViewMjsDefault = parcelHelpers.interopDefault(_resultsViewMjs);
var _searchViewMjs = require("./views/searchView.mjs");
var _searchViewMjsDefault = parcelHelpers.interopDefault(_searchViewMjs);
var _searchViewMobileMjs = require("./views/searchViewMobile.mjs");
var _searchViewMobileMjsDefault = parcelHelpers.interopDefault(_searchViewMobileMjs);
var _carouselViewMjs = require("./views/carouselView.mjs");
var _carouselViewMjsDefault = parcelHelpers.interopDefault(_carouselViewMjs);
var _previewViewMjs = require("./views/previewView.mjs");
var _previewViewMjsDefault = parcelHelpers.interopDefault(_previewViewMjs);
var _moreDetailsViewMjs = require("./views/moreDetailsView.mjs");
var _moreDetailsViewMjsDefault = parcelHelpers.interopDefault(_moreDetailsViewMjs);
var _watchlistViewMjs = require("./views/watchlistView.mjs");
var _watchlistViewMjsDefault = parcelHelpers.interopDefault(_watchlistViewMjs);
if (module.hot) module.hot.accept();
const controlSearchResults = async function() {
    try {
        const query = (0, _searchViewMjsDefault.default).getQuery();
        if (!query) return;
        (0, _resultsViewMjsDefault.default).renderSpinner();
        const data = await _modelMjs.getSearchResults(query);
        const searchData = JSON.parse(localStorage.getItem("searchData")) || [];
        searchData.push(data);
        localStorage.setItem("searchData", JSON.stringify(searchData));
        history.pushState(null, null, `/${query.replaceAll(" ", "")}/results`);
        (0, _resultsViewMjsDefault.default).render(data);
        (0, _moreDetailsViewMjsDefault.default).addHandlerMoreDetails(data, true);
        (0, _moreDetailsViewMjsDefault.default).addHandlerChangeWatchlist(data, controlWatchlist);
        (0, _watchlistViewMjsDefault.default).render(JSON.parse(localStorage.getItem("watchlist")));
    } catch (err) {
        console.error(err);
    }
};
function controlWatchlist(data, action) {
    _modelMjs.changeWatchlist(data, action);
    (0, _resultsViewMjsDefault.default).update(JSON.parse(localStorage.getItem("searchData")).find((data)=>{
        return data[0] === window.location.href.slice(22, -8);
    }));
    (0, _watchlistViewMjsDefault.default).render(JSON.parse(localStorage.getItem("watchlist")));
}
const init = function() {
    (0, _searchViewMjsDefault.default).addHandlerSearch(controlSearchResults);
    (0, _searchViewMjsDefault.default).addHandlerMobileSlideDown();
    (0, _searchViewMjsDefault.default).addHandlerHideMobileSlideDown();
    (0, _resultsViewMjsDefault.default).addHandlerHover();
    (0, _resultsViewMjsDefault.default).addHandlerHoverRemove();
    (0, _resultsViewMjsDefault.default).addHandlerWatchStream();
    (0, _carouselViewMjsDefault.default).toggleSlide();
    (0, _carouselViewMjsDefault.default).addLazyLoad();
    (0, _watchlistViewMjsDefault.default).addHandlerSeeWatchlist();
    (0, _watchlistViewMjsDefault.default).render(JSON.parse(localStorage.getItem("watchlist")));
    console.log(history, history.length);
};
init();
window.addEventListener("popstate", function(e) {
    console.log(e);
    if (window.location.href === "http://localhost:1234/") window.location.reload();
    else if (window.location.href.endsWith("results")) {
        // the correct data will be synced with the query in the URL. 
        const data = JSON.parse(localStorage.getItem("searchData"));
        const syncedData = data.find((data)=>{
            return data[0] === window.location.href.slice(22, -8);
        });
        (0, _resultsViewMjsDefault.default).render(syncedData);
        if (window.history.length < 4) (0, _moreDetailsViewMjsDefault.default).addHandlerMoreDetails(syncedData, true);
        else (0, _moreDetailsViewMjsDefault.default).addHandlerMoreDetails(syncedData);
        (0, _moreDetailsViewMjsDefault.default).addHandlerChangeWatchlist(syncedData, controlWatchlist);
        (0, _watchlistViewMjsDefault.default).render(JSON.parse(localStorage.getItem("watchlist")));
    } else if (window.location.href.endsWith("details")) {
        const data = JSON.parse(localStorage.getItem("searchData"));
        const syncedData = data.find((data)=>{
            return data[0] === window.location.href.slice(22, -8);
        });
        (0, _moreDetailsViewMjsDefault.default).addHandlerMoreDetails(syncedData);
        (0, _moreDetailsViewMjsDefault.default).render(syncedData);
        (0, _moreDetailsViewMjsDefault.default).addHandlerChangeWatchlist(syncedData, controlWatchlist);
        (0, _watchlistViewMjsDefault.default).render(JSON.parse(localStorage.getItem("watchlist")));
    }
    console.log(history, history.length);
}) // thenounproject.com for svgs
 // everytime the user searches for something, that query and 
 // the search data that goes along with it will be saved to
 // localStorage. 
 // function runs once, 
;

},{"./helpers.mjs":"dqAto","./model.mjs":"8mWbN","./views/resultsView.mjs":"9w6Bl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./views/searchView.mjs":"aZJ95","./views/searchViewMobile.mjs":"4vOtk","./views/carouselView.mjs":"1mhF7","./views/previewView.mjs":"6bhlX","./views/moreDetailsView.mjs":"hjY50","./views/watchlistView.mjs":"eec1k"}],"dqAto":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
parcelHelpers.export(exports, "wait", ()=>wait);
const getJSON = async function(url, options) {
    try {
        const res = await fetch(url, options);
        if (!res.ok) throw new Error("Something went wrong.");
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
    }
};
const wait = function(seconds) {
    return new Promise((resolve)=>{
        setTimeout(resolve, seconds * 1000);
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8mWbN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getSearchResults", ()=>getSearchResults);
parcelHelpers.export(exports, "changeWatchlist", ()=>changeWatchlist);
var _helpersMjs = require("./helpers.mjs");
const state = {
    searchResults: [],
    watchlist: []
};
const getSearchResults = async function(query) {
    try {
        const initData = await (0, _helpersMjs.getJSON)(`https://streaming-availability.p.rapidapi.com/v2/search/title?title=${query}&country=us&show_type=all&output_language=en`, {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "0566b4f25amshc42c315cb197a5ep1c5429jsne8987db3c6fb",
                "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com"
            }
        });
        state.searchResults.push(initData.result);
        return [
            query.replaceAll(" ", ""),
            initData.result
        ];
    } catch (err) {
        console.error(err);
    }
};
const changeWatchlist = function(data, action) {
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || state.watchlist;
    console.log(data, action);
    // if action is add and data is not there, push to array
    if (action === "add" && !watchlist.some((bookmark)=>JSON.stringify(bookmark) === JSON.stringify(data))) watchlist.push(data);
    else if (action === "add" && watchlist.some((bookmark)=>JSON.stringify(bookmark) === JSON.stringify(data))) console.log("duplicate");
    else if (action === "remove" && watchlist.some((bookmark)=>JSON.stringify(bookmark) === JSON.stringify(data))) watchlist = watchlist.filter((bookmark)=>JSON.stringify(bookmark) !== JSON.stringify(data));
    watchlist = watchlist.filter((bookmarks)=>bookmarks !== null);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
};

},{"./helpers.mjs":"dqAto","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9w6Bl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewMjs = require("./View.mjs");
var _viewMjsDefault = parcelHelpers.interopDefault(_viewMjs);
var _searchViewMjs = require("./searchView.mjs");
var _searchViewMjsDefault = parcelHelpers.interopDefault(_searchViewMjs);
var _previewViewMjs = require("./previewView.mjs");
var _previewViewMjsDefault = parcelHelpers.interopDefault(_previewViewMjs);
var _moreDetailsViewMjs = require("./moreDetailsView.mjs");
var _moreDetailsViewMjsDefault = parcelHelpers.interopDefault(_moreDetailsViewMjs);
class ResultsView extends (0, _viewMjsDefault.default) {
    _parentElement = document.querySelector(".results-content");
    _generateMarkup() {
        Array.from(document.querySelector(".main-content").children).forEach((section)=>{
            return section.classList.add("hidden");
        });
        this._parentElement.classList.remove("hidden");
        const resultPreviews = this._data[1].map((entry)=>(0, _previewViewMjsDefault.default).render(entry, false)).join("");
        return resultPreviews;
    }
    addHandlerHover() {
        this._parentElement.addEventListener("mouseover", function(e) {
            const result = e.target.closest(".result");
            if (!result) return;
            result.children[0].style.opacity = "0.2";
            result.children[1].classList.remove("hidden");
            result.children[1].style.left = `${result.offsetWidth / 2 - result.children[1].offsetWidth / 2}px`;
            result.children[1].style.top = `${result.offsetHeight / 2 - result.children[1].offsetHeight / 2}px`;
        });
    }
    addHandlerHoverRemove() {
        this._parentElement.addEventListener("mouseout", function(e) {
            const result = e.target.closest(".result");
            if (!result) return;
            result.children[0].style.opacity = "1";
            result.children[1].classList.add("hidden");
        });
    }
    addHandlerWatchStream() {
        this._parentElement.addEventListener("click", function(e) {
            const iconLink = e.target.closest(".icon-link");
            if (!iconLink) return;
            window.open(iconLink, "_blank");
        });
    }
}
exports.default = new ResultsView(); // THE ENTIRE POINT OF THE RENDER FUNCTION IS TO BUILD THE CONTENT WITH
 // THE DATA IS RECEIVED. WHEN CALLING THE RENDER FUNCTION, IT IS DEFAULT
 // TO PUT THE CONTENT INTO THE DOM. HOWEVER, THE RENDER FUNCTION CAN BE 
 // CALLED TO SIMPLY GENERATE THE MARKUP. 

},{"./View.mjs":"1xEUf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./searchView.mjs":"aZJ95","./previewView.mjs":"6bhlX","./moreDetailsView.mjs":"hjY50"}],"1xEUf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    _data;
    render(data, render = true) {
        this._data = data;
        const markup = this._generateMarkup();
        if (!render) return markup;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
        if (!this._parentElement === document.querySelector(".watchlist-preview__container")) window.scrollTo(0, 0);
    }
    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll("*"));
        const curElements = Array.from(this._parentElement.querySelectorAll("*"));
        newElements.forEach((newEl, i)=>{
            // For each element in the new DOM, compare that element
            // to the corresponding element in the current DOM (or previous DOM). 
            // Also, check to see if the curEl and newEl are different. If so, 
            // mutate the text and attributes. 
            const curEl = curElements[i];
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== "") curEl.textContent = newEl.textContent;
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((attr)=>{
                curEl.setAttribute(attr.name, attr.value);
            });
        });
    }
    _clear() {
        this._parentElement.innerHTML = "";
        document.querySelector(".spinner-container").classList.add("hidden");
    // if (document.querySelector('.intro-content').children.length > 0) {
    //   document.querySelector('.intro-content').innerHTML = '';
    // }
    }
    renderSpinner() {
        this._clear();
        document.querySelector(".spinner-container").classList.remove("hidden");
    }
    renderErrorMessage() {}
    renderMessage() {}
} // MODEL BEHAVIOR: 
 // The main View class will have the render method, as well as the update method.
 // The render method will call the respective view's _generateMarkup method. Create
 // a resultsView class as well as a previewView class. The resultsView's parent element
 // should be the container that holds the results. The previewView class has no parent
 // element. It only has a _generateMarkup class that returns one preview. 
 // NOTE: create functions for anything that is repeated. This aligns with the DRY principle. 
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aZJ95":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewMjs = require("./View.mjs");
var _viewMjsDefault = parcelHelpers.interopDefault(_viewMjs);
class SearchView extends (0, _viewMjsDefault.default) {
    _parentElement = window.innerWidth >= 570 ? document.querySelector(".search-form") : document.querySelector(".search-form__slidedown");
    getQuery() {
        const query = this._parentElement.querySelector("#search-input").value;
        this._clearInput();
        return query;
    }
    _clearInput() {
        this._parentElement.querySelector("#search-input").value = "";
        this._parentElement.querySelector("#search-input").blur();
    }
    addHandlerMobileSlideDown() {
        document.querySelector(".nav-right__alt .search-btn").addEventListener("click", function(e) {
            document.querySelector(".search-form__slidedown").style.transform = "translateY(0%)";
        });
    }
    addHandlerHideMobileSlideDown() {
        window.addEventListener("resize", function() {
            if (document.querySelector(".search-form__slidedown").style.transform = this.innerWidth >= 570) document.querySelector(".search-form__slidedown").style.transform = "translateY(-100%)";
        });
    }
    addHandlerSearch(controller) {
        this._parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            document.querySelector(".search-form__slidedown").style.transform = "translateY(-100%)";
            controller();
        });
    }
}
exports.default = new SearchView();

},{"./View.mjs":"1xEUf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6bhlX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewMjs = require("./View.mjs");
var _viewMjsDefault = parcelHelpers.interopDefault(_viewMjs);
var _iconsSvg = require("../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _modelMjs = require("../model.mjs");
class PreviewView extends (0, _viewMjsDefault.default) {
    _generateMarkup() {
        let streamingOptions;
        if (this._data.streamingInfo.us !== undefined) streamingOptions = Object.keys(this._data.streamingInfo.us);
        else return;
        return ` 
            <div class="result">
              <div class="result-preview">
                <img src="${Object.keys(this._data.posterURLs).length > 0 ? Object.values(this._data.posterURLs)[Object.values(this._data.posterURLs).length - 1] : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/640px-No-Image-Placeholder.svg.png"}" alt="" class="result-poster">
                <h3 class="result-title">${this._data.title}</h3>
              </div>
              <div class="result-overlay hidden">
                <p class="overlay-title">Streaming options</p>
                <div class="icon-container">
                ${streamingOptions.map((option)=>{
            if (option === "peacock") return `<a href="${this._data.streamingInfo.us[option][0].link}" class="icon-link" target="_blank">
                                <img src="https://play-lh.googleusercontent.com/tmGaBmInLjXVZIb4lWe5-LXINRP2RiY77Vg_hOLu-rxXBsY9vKC78A_A3Pkyx9vNBE8" class="streaming-icon">
                              </a>
                    `;
            else if (option === "zee5") return `<a href="${this._data.streamingInfo.us[option][0].link}" class="icon-link" target="_blank">
                                <img src="https://yt3.googleusercontent.com/ytc/AOPolaR82w4X7mCcQwtdjPKKgJEFNWRRg5hQRbWIVTbj2Q=s900-c-k-c0x00ffffff-no-rj" class="streaming-icon">
                              </a>`;
            else if (option === "curiosity") return `<a href="${this._data.streamingInfo.us[option][0].link}" class="icon-link" target="_blank">
                                <img src="https://yt3.googleusercontent.com/PnT6wqumsF5IXnWOq2stn6GTPccVAgvEY2aSaxTCIy8EYl1krhQqKAK41vCqeysDR8an1mP4=s900-c-k-c0x00ffffff-no-rj" class="streaming-icon">
                              </a>`;
            else return `<a href="${this._data.streamingInfo.us[option][0].link}" class="icon-link" target="_blank">
                                 <svg class="streaming-icon ${option}">
                                    <use href="${0, _iconsSvgDefault.default}#${option}"></use>
                                 </svg>
                               </a>`;
        }).join("")}
                </div>
                <div class="overlay-options__container">
                   <button class="modify-watchlist-btn" data-id="${this._data.imdbId}" data-action="add">Add to watchlist</button>
                   <button class="modify-watchlist-btn" data-id="${this._data.imdbId}" data-action="remove">Remove from watchlist</button>
                   <a href="#" class="more-info" data-id="${this._data.imdbId}">More info...</a>
                </div>
              </div>
          </div>`;
    }
}
exports.default = new PreviewView();

},{"./View.mjs":"1xEUf","../../img/icons.svg":"d2APK","../model.mjs":"8mWbN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d2APK":[function(require,module,exports) {
module.exports = require("ce336669ab8bfd13").getBundleURL("kFYQz") + "icons.c78699a6.svg" + "?" + Date.now();

},{"ce336669ab8bfd13":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"hjY50":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewMjs = require("./View.mjs");
var _viewMjsDefault = parcelHelpers.interopDefault(_viewMjs);
var _iconsSvg = require("../../img/icons.svg");
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
var _starSvg = require("../../img/star.svg");
var _starSvgDefault = parcelHelpers.interopDefault(_starSvg);
var _utils = require("@testing-library/user-event/dist/utils");
class ResultDetailsView extends (0, _viewMjsDefault.default) {
    _parentElement = document.querySelector(".result-details");
    addHandlerChangeWatchlist(data, controller) {
        this._parentElement.previousElementSibling.addEventListener("click", function(e) {
            e.preventDefault();
            const bookmarkBtn = e.target.closest(".modify-watchlist-btn");
            if (!bookmarkBtn) return;
            console.log(bookmarkBtn);
            const action = bookmarkBtn.dataset.action;
            const matchedInfo = data[1].find((result)=>{
                return result.imdbId === bookmarkBtn.dataset.id;
            });
            console.log(matchedInfo, action);
            controller(matchedInfo, action);
        });
    }
    addHandlerMoreDetails(data, pushState = false) {
        this._parentElement.previousElementSibling.addEventListener("click", function(e) {
            e.preventDefault();
            const moreInfoBtn = e.target.closest(".more-info");
            if (!moreInfoBtn) return;
            console.log(moreInfoBtn);
            Array.from(document.querySelector(".main-content").children).forEach((section)=>{
                return section.classList.add("hidden");
            });
            document.querySelector(".result-details").classList.remove("hidden");
            const matchedContent = data[1].find((result)=>{
                return result.imdbId === moreInfoBtn.dataset.id;
            });
            console.log(matchedContent);
            const buildTrailer = function(link) {
                const trailer = document.createElement("iframe");
                trailer.classList.add("trailer");
                trailer.src = link;
                trailer.title = "Youtube video player";
                trailer.frameborder = "0";
                trailer.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
                trailer.setAttribute("allowFullScreen", "");
                return trailer;
            };
            // We build an iframe so only one history entry is added. 
            const trailer = buildTrailer(matchedContent.youtubeTrailerVideoLink.replace("watch?v=", "embed/"));
            let streamingOptions;
            if (matchedContent.streamingInfo.us !== undefined) streamingOptions = Object.keys(matchedContent.streamingInfo.us);
            else return;
            const markup = `<div class="result-details-container" data-sync="${matchedContent.imdbId}">
               <h3 class="details-title title">${matchedContent.title}</h3>
               <div class="details-title-info">
                   <p class="title-year">${matchedContent.year ? matchedContent.year : matchedContent.firstAirYear}</p>
                   <span class="middot">&middot;</span>
                   <p class="title-rating">PG-13</p>
                   <span class="middot">&middot;</span>
                   <p class="title-length">${matchedContent.runtime ? `${matchedContent.runtime} min` : `${matchedContent.seasons.length} seasons`}</p>
               </div>
               <img src="${matchedContent.backdropURLs.original}" alt="" class="detail-preview"> 
               <div class="further-details">
                   <div class="sub-photo__info">
                       <div class="genres">
                           ${matchedContent.genres.map((genre)=>{
                return `
                               <p class="genre">${genre.name}</p>
                               `;
            }).join("")}
                       </div>
                       <div class="imdb-rating__container">
                           <p class="rating-label">imd<span class="lowercase">b</span> rating</p>
                           <div class="rating">
                               <img src="${(0, _starSvgDefault.default)}" alt="" class="rating-star">
                               <p class="rating-text"><span class="emphasized">${matchedContent.imdbRating}</span>/100</p>
                           </div>
                       </div>
                   </div>
                   <p class="summary">
                       ${matchedContent.overview}
                   </p>
                   <div class="director-writer-stars">
                       <div class="director-info__container">
                           <p class="director">Director(s)</p>
                           ${matchedContent.directors ? matchedContent.directors.map((director)=>{
                return `<span class="director-writer-stars__span">${director}</span>`;
            }).join(`<span class="divider">&#8901;</span>`) : '<span class="director-writer-stars__span">Unknown</span>'}
                       </div>
                       <div class="stars-info__container">
                           <p class="stars">Stars</p>
                           ${matchedContent.cast.slice(0, 3).map((star)=>{
                return `
                               <span class="director-writer-stars__span">${star}</span>
                               `;
            }).join(`<span class="divider">&#8901;</span>`)}
                       </div>
                   </div>
                   <div class="trailer__section">
                       <h4 class="trailer__header">Trailer</h4>
                   </div>
                   <div class="streaming-options__section">
                       <p class="streaming-options__header">Streaming Options</p>
                       <div class="icon-container">
                          ${streamingOptions.map((option)=>{
                if (option === "peacock") return `
                               <a href="${matchedContent.streamingInfo.us[option][0].link}" class="icon-link" target="_blank">
                                 <img src="https://play-lh.googleusercontent.com/tmGaBmInLjXVZIb4lWe5-LXINRP2RiY77Vg_hOLu-rxXBsY9vKC78A_A3Pkyx9vNBE8" class="streaming-icon">
                               </a>`;
                else if (option === "zee5") return `
                               <a href="${matchedContent.streamingInfo.us[option][0].link}" class="icon-link" target="_blank">
                                 <img src="https://yt3.googleusercontent.com/ytc/AOPolaR82w4X7mCcQwtdjPKKgJEFNWRRg5hQRbWIVTbj2Q=s900-c-k-c0x00ffffff-no-rj" class="streaming-icon">
                               </a>`;
                else if (option === "curiosity") return `
                               <a href="${matchedContent.streamingInfo.us[option][0].link}" class="icon-link" target="_blank">
                                 <img src="https://yt3.googleusercontent.com/PnT6wqumsF5IXnWOq2stn6GTPccVAgvEY2aSaxTCIy8EYl1krhQqKAK41vCqeysDR8an1mP4=s900-c-k-c0x00ffffff-no-rj" class="streaming-icon">
                               </a>`;
                else return `
                               <a href="${matchedContent.streamingInfo.us[option][0].link}" class="icon-link" target="_blank">
                                   <svg class="streaming-icon ${option}">
                                      <use href="${0, _iconsSvgDefault.default}#${option}"></use>
                                   </svg>
                               </a>`;
            }).join("")}
                       </div>
                   </div>
               </div>
           </div>`;
            if (document.querySelector(".result-details").children) document.querySelector(".result-details").innerHTML = "";
            document.querySelector(".result-details").insertAdjacentHTML("afterbegin", markup);
            document.querySelector(".trailer__section").insertBefore(trailer, document.querySelector(".trailer__header").nextElementSibling);
            localStorage.setItem("detailsSync", moreInfoBtn.dataset.id);
            if (pushState) history.pushState(null, null, `details`);
            if (localStorage.getItem("detailsSync") !== null) history.forward();
            window.scrollTo(0, 0);
        });
    }
    _generateMarkup() {
        Array.from(document.querySelector(".main-content").children).forEach((section)=>{
            return section.classList.add("hidden");
        });
        this._parentElement.classList.remove("hidden");
        const matchedContent = this._data[1].find((result)=>{
            return result.imdbId === localStorage.getItem("detailsSync");
        });
        console.log(matchedContent);
        let streamingOptions;
        if (matchedContent.streamingInfo.us !== undefined) streamingOptions = Object.keys(matchedContent.streamingInfo.us);
        else return;
        const markup = `<div class="result-details-container" data-sync="${matchedContent.imdbId}">
           <h3 class="details-title title">${matchedContent.title}</h3>
           <div class="details-title-info">
               <p class="title-year">${matchedContent.year ? matchedContent.year : matchedContent.firstAirYear}</p>
               <span class="middot">&middot;</span>
               <p class="title-rating">PG-13</p>
               <span class="middot">&middot;</span>
               <p class="title-length">${matchedContent.runtime ? `${matchedContent.runtime} min` : `${matchedContent.seasons.length} seasons`}</p>
           </div>
           <img src="${matchedContent.backdropURLs.original}" alt="" class="detail-preview"> 
           <div class="further-details">
               <div class="sub-photo__info">
                   <div class="genres">
                       ${matchedContent.genres.map((genre)=>{
            return `
                           <p class="genre">${genre.name}</p>
                           `;
        }).join("")}
                   </div>
                   <div class="imdb-rating__container">
                       <p class="rating-label">imd<span class="lowercase">b</span> rating</p>
                       <div class="rating">
                           <img src="${(0, _starSvgDefault.default)}" alt="" class="rating-star">
                           <p class="rating-text"><span class="emphasized">${matchedContent.imdbRating}</span>/100</p>
                       </div>
                   </div>
               </div>
               <p class="summary">
                   ${matchedContent.overview}
               </p>
               <div class="director-writer-stars">
                   <div class="director-info__container">
                       <p class="director">Director(s)</p>
                       ${matchedContent.directors ? matchedContent.directors.map((director)=>{
            return `<span class="director-writer-stars__span">${director}</span>`;
        }).join(`<span class="divider">&#8901;</span>`) : matchedContent.creators.map((creator)=>{
            return `<span class="director-writer-stars__span">${creator}</span>`;
        }).join(`<span class="divider">&#8901;</span>`)}
                   </div>
                   <div class="stars-info__container">
                       <p class="stars">Stars</p>
                       ${matchedContent.cast.slice(0, 3).map((star)=>{
            return `
                           <span class="director-writer-stars__span">${star}</span>
                           `;
        }).join(`<span class="divider">&#8901;</span>`)}
                   </div>
               </div>
               <div class="trailer__section">
                   <h4 class="trailer__header">Trailer</h4>
                   <iframe class="trailer" src="${matchedContent.youtubeTrailerVideoLink.replace("watch?v=", "embed/")}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
               </div>
               <div class="streaming-options__section">
                   <p class="streaming-options__header">Streaming Options</p>
                   <div class="icon-container">
                      ${streamingOptions.map((option)=>{
            if (option === "peacock") return `
                           <a href="${matchedContent.streamingInfo.us[option][0].link}" target="_blank">
                             <img src="https://play-lh.googleusercontent.com/tmGaBmInLjXVZIb4lWe5-LXINRP2RiY77Vg_hOLu-rxXBsY9vKC78A_A3Pkyx9vNBE8" class="streaming-icon">
                           </a>`;
            else if (option === "zee5") return `
                           <a href="${matchedContent.streamingInfo.us[option][0].link}" target="_blank">
                             <img src="https://yt3.googleusercontent.com/ytc/AOPolaR82w4X7mCcQwtdjPKKgJEFNWRRg5hQRbWIVTbj2Q=s900-c-k-c0x00ffffff-no-rj" class="streaming-icon">
                           </a>`;
            else if (option === "curiosity") return `
                           <a href="${matchedContent.streamingInfo.us[option][0].link}" target="_blank">
                             <img src="https://yt3.googleusercontent.com/PnT6wqumsF5IXnWOq2stn6GTPccVAgvEY2aSaxTCIy8EYl1krhQqKAK41vCqeysDR8an1mP4=s900-c-k-c0x00ffffff-no-rj" class="streaming-icon">
                           </a>`;
            else return `
                           <a href="${matchedContent.streamingInfo.us[option][0].link}" target="_blank">
                               <svg class="streaming-icon ${option}">
                                  <use href="${0, _iconsSvgDefault.default}#${option}"></use>
                               </svg>
                           </a>`;
        }).join("")}
                   </div>
               </div>
           </div>
       </div>`;
        return markup;
    }
}
exports.default = new ResultDetailsView();

},{"./View.mjs":"1xEUf","../../img/icons.svg":"d2APK","../../img/star.svg":"iT3HU","@testing-library/user-event/dist/utils":"lfWQ3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iT3HU":[function(require,module,exports) {
module.exports = require("b275c7359e7ac149").getBundleURL("kFYQz") + "star.378456f3.svg" + "?" + Date.now();

},{"b275c7359e7ac149":"lgJ39"}],"lfWQ3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _getMouseEventOptions = require("b1f09747ba00279c");
Object.keys(_getMouseEventOptions).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _getMouseEventOptions[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _getMouseEventOptions[key];
        }
    });
});
var _isClickableInput = require("c6bd2845c40eced1");
Object.keys(_isClickableInput).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _isClickableInput[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _isClickableInput[key];
        }
    });
});
var _buildTimeValue = require("15377c3c99cd5053");
Object.keys(_buildTimeValue).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _buildTimeValue[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _buildTimeValue[key];
        }
    });
});
var _calculateNewValue = require("2c4dc3a9954bd970");
Object.keys(_calculateNewValue).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _calculateNewValue[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _calculateNewValue[key];
        }
    });
});
var _cursorPosition = require("23b2a80fd1ecfc86");
Object.keys(_cursorPosition).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _cursorPosition[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _cursorPosition[key];
        }
    });
});
var _getValue = require("39c9bdb6bff5cfdd");
Object.keys(_getValue).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _getValue[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _getValue[key];
        }
    });
});
var _hasUnreliableEmptyValue = require("5b748a2a89189ed8");
Object.keys(_hasUnreliableEmptyValue).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _hasUnreliableEmptyValue[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _hasUnreliableEmptyValue[key];
        }
    });
});
var _isContentEditable = require("dac63e5a75499b0d");
Object.keys(_isContentEditable).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _isContentEditable[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _isContentEditable[key];
        }
    });
});
var _isEditable = require("82e020382213189b");
Object.keys(_isEditable).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _isEditable[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _isEditable[key];
        }
    });
});
var _isValidDateValue = require("4d84cc0c040ec156");
Object.keys(_isValidDateValue).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _isValidDateValue[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _isValidDateValue[key];
        }
    });
});
var _isValidInputTimeValue = require("36112e12517c6ab9");
Object.keys(_isValidInputTimeValue).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _isValidInputTimeValue[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _isValidInputTimeValue[key];
        }
    });
});
var _maxLength = require("34d66bb423084fa9");
Object.keys(_maxLength).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _maxLength[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _maxLength[key];
        }
    });
});
var _selectionRange = require("d13927697b796e23");
Object.keys(_selectionRange).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _selectionRange[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _selectionRange[key];
        }
    });
});
var _getActiveElement = require("fa10684f6bb6f6ff");
Object.keys(_getActiveElement).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _getActiveElement[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _getActiveElement[key];
        }
    });
});
var _isFocusable = require("99cfd2ec07d83b76");
Object.keys(_isFocusable).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _isFocusable[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _isFocusable[key];
        }
    });
});
var _selector = require("3792fea0fa5ee4a0");
Object.keys(_selector).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _selector[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _selector[key];
        }
    });
});
var _eventWrapper = require("f9b7b3cc036df902");
Object.keys(_eventWrapper).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _eventWrapper[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _eventWrapper[key];
        }
    });
});
var _isElementType = require("dfcb01e02a741e84");
Object.keys(_isElementType).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _isElementType[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _isElementType[key];
        }
    });
});
var _isLabelWithInternallyDisabledControl = require("916dfa7478b0e2e0");
Object.keys(_isLabelWithInternallyDisabledControl).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _isLabelWithInternallyDisabledControl[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _isLabelWithInternallyDisabledControl[key];
        }
    });
});
var _isVisible = require("c2b70fcb295ebd5");
Object.keys(_isVisible).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _isVisible[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _isVisible[key];
        }
    });
});
var _isDisabled = require("5c2a30066afd6282");
Object.keys(_isDisabled).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _isDisabled[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _isDisabled[key];
        }
    });
});
var _isDocument = require("af7bd0ca1cbbbbea");
Object.keys(_isDocument).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _isDocument[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _isDocument[key];
        }
    });
});
var _wait = require("755fb13b82d33d28");
Object.keys(_wait).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _wait[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _wait[key];
        }
    });
});
var _hasPointerEvents = require("df5167023651ea34");
Object.keys(_hasPointerEvents).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _hasPointerEvents[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _hasPointerEvents[key];
        }
    });
});
var _hasFormSubmit = require("989ff560597c1b78");
Object.keys(_hasFormSubmit).forEach(function(key) {
    if (key === "default" || key === "__esModule") return;
    if (key in exports && exports[key] === _hasFormSubmit[key]) return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
            return _hasFormSubmit[key];
        }
    });
});

},{"b1f09747ba00279c":"hnrvf","c6bd2845c40eced1":"g9sfz","15377c3c99cd5053":"kVG6N","2c4dc3a9954bd970":"aZEGG","23b2a80fd1ecfc86":"85iCJ","39c9bdb6bff5cfdd":"7r1k4","5b748a2a89189ed8":"3S8Kc","dac63e5a75499b0d":"ajv8X","82e020382213189b":"3ScKH","4d84cc0c040ec156":"4MBSK","36112e12517c6ab9":"kxJa3","34d66bb423084fa9":"8sZHm","d13927697b796e23":"7brTU","fa10684f6bb6f6ff":"5WKGm","99cfd2ec07d83b76":"9Z5rV","3792fea0fa5ee4a0":"j3g99","f9b7b3cc036df902":"4A1jm","dfcb01e02a741e84":"jxtrE","916dfa7478b0e2e0":"4fnr7","c2b70fcb295ebd5":"kPbXd","5c2a30066afd6282":"6ULMn","af7bd0ca1cbbbbea":"axsk6","755fb13b82d33d28":"bjyWd","df5167023651ea34":"7L0no","989ff560597c1b78":"62rfK"}],"hnrvf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getMouseEventOptions = getMouseEventOptions;
function isMousePressEvent(event) {
    return event === "mousedown" || event === "mouseup" || event === "click" || event === "dblclick";
} // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons
const BUTTONS_NAMES = {
    none: 0,
    primary: 1,
    secondary: 2,
    auxiliary: 4
}; // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
const BUTTON_NAMES = {
    primary: 0,
    auxiliary: 1,
    secondary: 2
};
function translateButtonNumber(value, from) {
    var _Object$entries$find;
    const [mapIn, mapOut] = from === "button" ? [
        BUTTON_NAMES,
        BUTTONS_NAMES
    ] : [
        BUTTONS_NAMES,
        BUTTON_NAMES
    ];
    const name = (_Object$entries$find = Object.entries(mapIn).find(([, i])=>i === value)) == null ? void 0 : _Object$entries$find[0]; // istanbul ignore next
    return name && Object.prototype.hasOwnProperty.call(mapOut, name) ? mapOut[name] : 0;
}
function convertMouseButtons(event, init, property) {
    if (!isMousePressEvent(event)) return 0;
    if (typeof init[property] === "number") return init[property];
    else if (property === "button" && typeof init.buttons === "number") return translateButtonNumber(init.buttons, "buttons");
    else if (property === "buttons" && typeof init.button === "number") return translateButtonNumber(init.button, "button");
    return property != "button" && isMousePressEvent(event) ? 1 : 0;
}
function getMouseEventOptions(event, init, clickCount = 0) {
    var _init;
    init = (_init = init) != null ? _init : {};
    return {
        ...init,
        // https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail
        detail: event === "mousedown" || event === "mouseup" || event === "click" ? 1 + clickCount : clickCount,
        buttons: convertMouseButtons(event, init, "buttons"),
        button: convertMouseButtons(event, init, "button")
    };
}

},{}],"g9sfz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isClickableInput = isClickableInput;
var _isElementType = require("2ba6c7a155cd1bc7");
const CLICKABLE_INPUT_TYPES = [
    "button",
    "color",
    "file",
    "image",
    "reset",
    "submit",
    "checkbox",
    "radio"
];
function isClickableInput(element) {
    return (0, _isElementType.isElementType)(element, "button") || (0, _isElementType.isElementType)(element, "input") && CLICKABLE_INPUT_TYPES.includes(element.type);
}

},{"2ba6c7a155cd1bc7":"jxtrE"}],"jxtrE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isElementType = isElementType;
function isElementType(element, tag, props) {
    if (element.namespaceURI && element.namespaceURI !== "http://www.w3.org/1999/xhtml") return false;
    tag = Array.isArray(tag) ? tag : [
        tag
    ]; // tagName is uppercase in HTMLDocument and lowercase in XMLDocument
    if (!tag.includes(element.tagName.toLowerCase())) return false;
    if (props) return Object.entries(props).every(([k, v])=>element[k] === v);
    return true;
}

},{}],"kVG6N":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buildTimeValue = buildTimeValue;
function buildTimeValue(value) {
    const onlyDigitsValue = value.replace(/\D/g, "");
    if (onlyDigitsValue.length < 2) return value;
    const firstDigit = parseInt(onlyDigitsValue[0], 10);
    const secondDigit = parseInt(onlyDigitsValue[1], 10);
    if (firstDigit >= 3 || firstDigit === 2 && secondDigit >= 4) {
        let index;
        if (firstDigit >= 3) index = 1;
        else index = 2;
        return build(onlyDigitsValue, index);
    }
    if (value.length === 2) return value;
    return build(onlyDigitsValue, 2);
}
function build(onlyDigitsValue, index) {
    const hours = onlyDigitsValue.slice(0, index);
    const validHours = Math.min(parseInt(hours, 10), 23);
    const minuteCharacters = onlyDigitsValue.slice(index);
    const parsedMinutes = parseInt(minuteCharacters, 10);
    const validMinutes = Math.min(parsedMinutes, 59);
    return `${validHours.toString().padStart(2, "0")}:${validMinutes.toString().padStart(2, "0")}`;
}

},{}],"aZEGG":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculateNewValue = calculateNewValue;
var _selectionRange = require("c7807b8b313d8e11");
var _getValue2 = require("7b7dbd4868700754");
var _isValidDateValue = require("7846148ef3a320af");
var _isValidInputTimeValue = require("84b1fef7565a5070");
function calculateNewValue(newEntry, element, value = (()=>{
    var _getValue;
    return (_getValue = (0, _getValue2.getValue)(element)) != null ? _getValue : /* istanbul ignore next */ "";
})(), selectionRange = (0, _selectionRange.getSelectionRange)(element), deleteContent) {
    const selectionStart = selectionRange.selectionStart === null ? value.length : selectionRange.selectionStart;
    const selectionEnd = selectionRange.selectionEnd === null ? value.length : selectionRange.selectionEnd;
    const prologEnd = Math.max(0, selectionStart === selectionEnd && deleteContent === "backward" ? selectionStart - 1 : selectionStart);
    const prolog = value.substring(0, prologEnd);
    const epilogStart = Math.min(value.length, selectionStart === selectionEnd && deleteContent === "forward" ? selectionEnd + 1 : selectionEnd);
    const epilog = value.substring(epilogStart, value.length);
    let newValue = `${prolog}${newEntry}${epilog}`;
    const newSelectionStart = prologEnd + newEntry.length;
    if (element.type === "date" && !(0, _isValidDateValue.isValidDateValue)(element, newValue)) newValue = value;
    if (element.type === "time" && !(0, _isValidInputTimeValue.isValidInputTimeValue)(element, newValue)) {
        if ((0, _isValidInputTimeValue.isValidInputTimeValue)(element, newEntry)) newValue = newEntry;
        else newValue = value;
    }
    return {
        newValue,
        newSelectionStart
    };
}

},{"c7807b8b313d8e11":"7brTU","7b7dbd4868700754":"7r1k4","7846148ef3a320af":"4MBSK","84b1fef7565a5070":"kxJa3"}],"7brTU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSelectionRange = getSelectionRange;
exports.hasSelectionSupport = hasSelectionSupport;
exports.setSelectionRange = setSelectionRange;
var _isElementType = require("177c9c9a52a0cb56");
// https://github.com/jsdom/jsdom/blob/c2fb8ff94917a4d45e2398543f5dd2a8fed0bdab/lib/jsdom/living/nodes/HTMLInputElement-impl.js#L45
var selectionSupportType;
(function(selectionSupportType) {
    selectionSupportType["text"] = "text";
    selectionSupportType["search"] = "search";
    selectionSupportType["url"] = "url";
    selectionSupportType["tel"] = "tel";
    selectionSupportType["password"] = "password";
})(selectionSupportType || (selectionSupportType = {}));
const InputSelection = Symbol("inputSelection");
function hasSelectionSupport(element) {
    return (0, _isElementType.isElementType)(element, "textarea") || (0, _isElementType.isElementType)(element, "input") && Boolean(selectionSupportType[element.type]);
}
function getSelectionRange(element) {
    if (hasSelectionSupport(element)) return {
        selectionStart: element.selectionStart,
        selectionEnd: element.selectionEnd
    };
    if ((0, _isElementType.isElementType)(element, "input")) {
        var _InputSelection;
        return (_InputSelection = element[InputSelection]) != null ? _InputSelection : {
            selectionStart: null,
            selectionEnd: null
        };
    }
    const selection = element.ownerDocument.getSelection(); // there should be no editing if the focusNode is outside of element
    // TODO: properly handle selection ranges
    if (selection != null && selection.rangeCount && element.contains(selection.focusNode)) {
        const range = selection.getRangeAt(0);
        return {
            selectionStart: range.startOffset,
            selectionEnd: range.endOffset
        };
    } else return {
        selectionStart: null,
        selectionEnd: null
    };
}
function setSelectionRange(element, newSelectionStart, newSelectionEnd) {
    const { selectionStart, selectionEnd } = getSelectionRange(element);
    if (selectionStart === newSelectionStart && selectionEnd === newSelectionEnd) return;
    if (hasSelectionSupport(element)) element.setSelectionRange(newSelectionStart, newSelectionEnd);
    if ((0, _isElementType.isElementType)(element, "input")) element[InputSelection] = {
        selectionStart: newSelectionStart,
        selectionEnd: newSelectionEnd
    };
     // Moving the selection inside <input> or <textarea> does not alter the document Selection.
    if ((0, _isElementType.isElementType)(element, "input") || (0, _isElementType.isElementType)(element, "textarea")) return;
    const range = element.ownerDocument.createRange();
    range.selectNodeContents(element); // istanbul ignore else
    if (element.firstChild) {
        range.setStart(element.firstChild, newSelectionStart);
        range.setEnd(element.firstChild, newSelectionEnd);
    }
    const selection = element.ownerDocument.getSelection(); // istanbul ignore else
    if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

},{"177c9c9a52a0cb56":"jxtrE"}],"7r1k4":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getValue = getValue;
var _isContentEditable = require("ca0c303786828f7a");
function getValue(element) {
    // istanbul ignore if
    if (!element) return null;
    if ((0, _isContentEditable.isContentEditable)(element)) return element.textContent;
    return element.value;
}

},{"ca0c303786828f7a":"ajv8X"}],"ajv8X":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isContentEditable = isContentEditable;
//jsdom is not supporting isContentEditable
function isContentEditable(element) {
    return element.hasAttribute("contenteditable") && (element.getAttribute("contenteditable") == "true" || element.getAttribute("contenteditable") == "");
}

},{}],"4MBSK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isValidDateValue = isValidDateValue;
function isValidDateValue(element, value) {
    const clone = element.cloneNode();
    clone.value = value;
    return clone.value === value;
}

},{}],"kxJa3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isValidInputTimeValue = isValidInputTimeValue;
function isValidInputTimeValue(element, timeValue) {
    const clone = element.cloneNode();
    clone.value = timeValue;
    return clone.value === timeValue;
}

},{}],"85iCJ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isCursorAtEnd = isCursorAtEnd;
exports.isCursorAtStart = isCursorAtStart;
var _selectionRange = require("c594dd5bc849545f");
var _getValue2 = require("169a85aef48c1c97");
function isCursorAtEnd(element) {
    var _getValue;
    const { selectionStart, selectionEnd } = (0, _selectionRange.getSelectionRange)(element);
    return selectionStart === selectionEnd && (selectionStart != null ? selectionStart : /* istanbul ignore next */ 0) === ((_getValue = (0, _getValue2.getValue)(element)) != null ? _getValue : /* istanbul ignore next */ "").length;
}
function isCursorAtStart(element) {
    const { selectionStart, selectionEnd } = (0, _selectionRange.getSelectionRange)(element);
    return selectionStart === selectionEnd && (selectionStart != null ? selectionStart : /* istanbul ignore next */ 0) === 0;
}

},{"c594dd5bc849545f":"7brTU","169a85aef48c1c97":"7r1k4"}],"3S8Kc":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hasUnreliableEmptyValue = hasUnreliableEmptyValue;
var _isElementType = require("85aebc3560f654cc");
var unreliableValueInputTypes;
/**
 * Check if an empty IDL value on the element could mean a derivation of displayed value and IDL value
 */ (function(unreliableValueInputTypes) {
    unreliableValueInputTypes["number"] = "number";
})(unreliableValueInputTypes || (unreliableValueInputTypes = {}));
function hasUnreliableEmptyValue(element) {
    return (0, _isElementType.isElementType)(element, "input") && Boolean(unreliableValueInputTypes[element.type]);
}

},{"85aebc3560f654cc":"jxtrE"}],"3ScKH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.editableInputTypes = void 0;
exports.isEditable = isEditable;
exports.isEditableInput = isEditableInput;
var _isElementType = require("7de4eab71e2a30e4");
var _isContentEditable = require("cefac84e886cef89");
function isEditable(element) {
    return isEditableInput(element) || (0, _isElementType.isElementType)(element, "textarea", {
        readOnly: false
    }) || (0, _isContentEditable.isContentEditable)(element);
}
let editableInputTypes;
exports.editableInputTypes = editableInputTypes;
(function(editableInputTypes) {
    editableInputTypes["text"] = "text";
    editableInputTypes["date"] = "date";
    editableInputTypes["datetime-local"] = "datetime-local";
    editableInputTypes["email"] = "email";
    editableInputTypes["month"] = "month";
    editableInputTypes["number"] = "number";
    editableInputTypes["password"] = "password";
    editableInputTypes["search"] = "search";
    editableInputTypes["tel"] = "tel";
    editableInputTypes["time"] = "time";
    editableInputTypes["url"] = "url";
    editableInputTypes["week"] = "week";
})(editableInputTypes || (exports.editableInputTypes = editableInputTypes = {}));
function isEditableInput(element) {
    return (0, _isElementType.isElementType)(element, "input", {
        readOnly: false
    }) && Boolean(editableInputTypes[element.type]);
}

},{"7de4eab71e2a30e4":"jxtrE","cefac84e886cef89":"ajv8X"}],"8sZHm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSpaceUntilMaxLength = getSpaceUntilMaxLength;
var _isElementType = require("41e86266dd6391aa");
var _getValue = require("15990acf063b1c36");
var maxLengthSupportedTypes;
(function(maxLengthSupportedTypes) {
    maxLengthSupportedTypes["email"] = "email";
    maxLengthSupportedTypes["password"] = "password";
    maxLengthSupportedTypes["search"] = "search";
    maxLengthSupportedTypes["telephone"] = "telephone";
    maxLengthSupportedTypes["text"] = "text";
    maxLengthSupportedTypes["url"] = "url";
})(maxLengthSupportedTypes || (maxLengthSupportedTypes = {}));
function getSpaceUntilMaxLength(element) {
    const value = (0, _getValue.getValue)(element);
    /* istanbul ignore if */ if (value === null) return undefined;
    const maxLength = getSanitizedMaxLength(element);
    return maxLength ? maxLength - value.length : undefined;
} // can't use .maxLength property because of a jsdom bug:
// https://github.com/jsdom/jsdom/issues/2927
function getSanitizedMaxLength(element) {
    var _element$getAttribute;
    if (!supportsMaxLength(element)) return undefined;
    const attr = (_element$getAttribute = element.getAttribute("maxlength")) != null ? _element$getAttribute : "";
    return /^\d+$/.test(attr) && Number(attr) >= 0 ? Number(attr) : undefined;
}
function supportsMaxLength(element) {
    return (0, _isElementType.isElementType)(element, "textarea") || (0, _isElementType.isElementType)(element, "input") && Boolean(maxLengthSupportedTypes[element.type]);
}

},{"41e86266dd6391aa":"jxtrE","15990acf063b1c36":"7r1k4"}],"5WKGm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getActiveElement = getActiveElement;
var _isDisabled = require("9e9bf93653836e31");
function getActiveElement(document) {
    const activeElement = document.activeElement;
    if (activeElement != null && activeElement.shadowRoot) return getActiveElement(activeElement.shadowRoot);
    else {
        // Browser does not yield disabled elements as document.activeElement - jsdom does
        if ((0, _isDisabled.isDisabled)(activeElement)) return document.ownerDocument ? /* istanbul ignore next */ document.ownerDocument.body : document.body;
        return activeElement;
    }
}

},{"9e9bf93653836e31":"6ULMn"}],"6ULMn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isDisabled = isDisabled;
// This should probably be extended with checking the element type
// https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/disabled
function isDisabled(element) {
    return Boolean(element && element.disabled);
}

},{}],"9Z5rV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isFocusable = isFocusable;
var _isLabelWithInternallyDisabledControl = require("c83e60cc0fe5cf96");
var _selector = require("842add350970abde");
function isFocusable(element) {
    return !(0, _isLabelWithInternallyDisabledControl.isLabelWithInternallyDisabledControl)(element) && element.matches(_selector.FOCUSABLE_SELECTOR);
}

},{"c83e60cc0fe5cf96":"4fnr7","842add350970abde":"j3g99"}],"4fnr7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isLabelWithInternallyDisabledControl = isLabelWithInternallyDisabledControl;
var _isDisabled = require("9adf3d53814acaa8");
var _isElementType = require("e972e9fab5b7cd0a");
// Absolutely NO events fire on label elements that contain their control
// if that control is disabled. NUTS!
// no joke. There are NO events for: <label><input disabled /><label>
function isLabelWithInternallyDisabledControl(element) {
    if (!(0, _isElementType.isElementType)(element, "label")) return false;
    const control = element.control;
    return Boolean(control && element.contains(control) && (0, _isDisabled.isDisabled)(control));
}

},{"9adf3d53814acaa8":"6ULMn","e972e9fab5b7cd0a":"jxtrE"}],"j3g99":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FOCUSABLE_SELECTOR = void 0;
const FOCUSABLE_SELECTOR = [
    "input:not([type=hidden]):not([disabled])",
    "button:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    '[contenteditable=""]',
    '[contenteditable="true"]',
    "a[href]",
    "[tabindex]:not([disabled])"
].join(", ");
exports.FOCUSABLE_SELECTOR = FOCUSABLE_SELECTOR;

},{}],"4A1jm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.eventWrapper = eventWrapper;
var _dom = require("5c72a2b72a440097");
function eventWrapper(cb) {
    let result;
    (0, _dom.getConfig)().eventWrapper(()=>{
        result = cb();
    });
    return result;
}

},{"5c72a2b72a440097":"kP1Vu"}],"kP1Vu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "prettyFormat", ()=>_prettyFormat);
parcelHelpers.export(exports, "buildQueries", ()=>buildQueries);
parcelHelpers.export(exports, "configure", ()=>configure);
parcelHelpers.export(exports, "createEvent", ()=>createEvent);
parcelHelpers.export(exports, "findAllByAltText", ()=>findAllByAltText);
parcelHelpers.export(exports, "findAllByDisplayValue", ()=>findAllByDisplayValue);
parcelHelpers.export(exports, "findAllByLabelText", ()=>findAllByLabelText);
parcelHelpers.export(exports, "findAllByPlaceholderText", ()=>findAllByPlaceholderText);
parcelHelpers.export(exports, "findAllByRole", ()=>findAllByRole);
parcelHelpers.export(exports, "findAllByTestId", ()=>findAllByTestId);
parcelHelpers.export(exports, "findAllByText", ()=>findAllByText);
parcelHelpers.export(exports, "findAllByTitle", ()=>findAllByTitle);
parcelHelpers.export(exports, "findByAltText", ()=>findByAltText);
parcelHelpers.export(exports, "findByDisplayValue", ()=>findByDisplayValue);
parcelHelpers.export(exports, "findByLabelText", ()=>findByLabelText);
parcelHelpers.export(exports, "findByPlaceholderText", ()=>findByPlaceholderText);
parcelHelpers.export(exports, "findByRole", ()=>findByRole);
parcelHelpers.export(exports, "findByTestId", ()=>findByTestId);
parcelHelpers.export(exports, "findByText", ()=>findByText);
parcelHelpers.export(exports, "findByTitle", ()=>findByTitle);
parcelHelpers.export(exports, "fireEvent", ()=>fireEvent);
parcelHelpers.export(exports, "getAllByAltText", ()=>getAllByAltText);
parcelHelpers.export(exports, "getAllByDisplayValue", ()=>getAllByDisplayValue);
parcelHelpers.export(exports, "getAllByLabelText", ()=>getAllByLabelTextWithSuggestions);
parcelHelpers.export(exports, "getAllByPlaceholderText", ()=>getAllByPlaceholderText);
parcelHelpers.export(exports, "getAllByRole", ()=>getAllByRole);
parcelHelpers.export(exports, "getAllByTestId", ()=>getAllByTestId);
parcelHelpers.export(exports, "getAllByText", ()=>getAllByText);
parcelHelpers.export(exports, "getAllByTitle", ()=>getAllByTitle);
parcelHelpers.export(exports, "getByAltText", ()=>getByAltText);
parcelHelpers.export(exports, "getByDisplayValue", ()=>getByDisplayValue);
parcelHelpers.export(exports, "getByLabelText", ()=>getByLabelTextWithSuggestions);
parcelHelpers.export(exports, "getByPlaceholderText", ()=>getByPlaceholderText);
parcelHelpers.export(exports, "getByRole", ()=>getByRole);
parcelHelpers.export(exports, "getByTestId", ()=>getByTestId);
parcelHelpers.export(exports, "getByText", ()=>getByText);
parcelHelpers.export(exports, "getByTitle", ()=>getByTitle);
parcelHelpers.export(exports, "getConfig", ()=>getConfig);
parcelHelpers.export(exports, "getDefaultNormalizer", ()=>getDefaultNormalizer);
parcelHelpers.export(exports, "getElementError", ()=>getElementError);
parcelHelpers.export(exports, "getMultipleElementsFoundError", ()=>getMultipleElementsFoundError);
parcelHelpers.export(exports, "getNodeText", ()=>getNodeText);
parcelHelpers.export(exports, "getQueriesForElement", ()=>getQueriesForElement);
parcelHelpers.export(exports, "getRoles", ()=>getRoles);
parcelHelpers.export(exports, "getSuggestedQuery", ()=>getSuggestedQuery);
parcelHelpers.export(exports, "isInaccessible", ()=>isInaccessible);
parcelHelpers.export(exports, "logDOM", ()=>logDOM);
parcelHelpers.export(exports, "logRoles", ()=>logRoles);
parcelHelpers.export(exports, "makeFindQuery", ()=>makeFindQuery);
parcelHelpers.export(exports, "makeGetAllQuery", ()=>makeGetAllQuery);
parcelHelpers.export(exports, "makeSingleQuery", ()=>makeSingleQuery);
parcelHelpers.export(exports, "prettyDOM", ()=>prettyDOM);
parcelHelpers.export(exports, "queries", ()=>queries);
parcelHelpers.export(exports, "queryAllByAltText", ()=>queryAllByAltTextWithSuggestions);
parcelHelpers.export(exports, "queryAllByAttribute", ()=>queryAllByAttribute);
parcelHelpers.export(exports, "queryAllByDisplayValue", ()=>queryAllByDisplayValueWithSuggestions);
parcelHelpers.export(exports, "queryAllByLabelText", ()=>queryAllByLabelTextWithSuggestions);
parcelHelpers.export(exports, "queryAllByPlaceholderText", ()=>queryAllByPlaceholderTextWithSuggestions);
parcelHelpers.export(exports, "queryAllByRole", ()=>queryAllByRoleWithSuggestions);
parcelHelpers.export(exports, "queryAllByTestId", ()=>queryAllByTestIdWithSuggestions);
parcelHelpers.export(exports, "queryAllByText", ()=>queryAllByTextWithSuggestions);
parcelHelpers.export(exports, "queryAllByTitle", ()=>queryAllByTitleWithSuggestions);
parcelHelpers.export(exports, "queryByAltText", ()=>queryByAltText);
parcelHelpers.export(exports, "queryByAttribute", ()=>queryByAttribute);
parcelHelpers.export(exports, "queryByDisplayValue", ()=>queryByDisplayValue);
parcelHelpers.export(exports, "queryByLabelText", ()=>queryByLabelText);
parcelHelpers.export(exports, "queryByPlaceholderText", ()=>queryByPlaceholderText);
parcelHelpers.export(exports, "queryByRole", ()=>queryByRole);
parcelHelpers.export(exports, "queryByTestId", ()=>queryByTestId);
parcelHelpers.export(exports, "queryByText", ()=>queryByText);
parcelHelpers.export(exports, "queryByTitle", ()=>queryByTitle);
parcelHelpers.export(exports, "queryHelpers", ()=>queryHelpers);
parcelHelpers.export(exports, "screen", ()=>screen);
parcelHelpers.export(exports, "waitFor", ()=>waitForWrapper);
parcelHelpers.export(exports, "waitForElementToBeRemoved", ()=>waitForElementToBeRemoved);
parcelHelpers.export(exports, "within", ()=>getQueriesForElement);
parcelHelpers.export(exports, "wrapAllByQueryWithSuggestion", ()=>wrapAllByQueryWithSuggestion);
parcelHelpers.export(exports, "wrapSingleQueryWithSuggestion", ()=>wrapSingleQueryWithSuggestion);
var _prettyFormat = require("pretty-format");
var _domAccessibilityApi = require("dom-accessibility-api");
var _ariaQuery = require("aria-query");
var _lzString = require("lz-string");
var _lzStringDefault = parcelHelpers.interopDefault(_lzString);
var process = require("889d729cdad65251");
/**
 * Source: https://github.com/facebook/jest/blob/e7bb6a1e26ffab90611b2593912df15b69315611/packages/pretty-format/src/plugins/DOMElement.ts
 */ /* eslint-disable -- trying to stay as close to the original as possible */ /* istanbul ignore file */ function escapeHTML(str) {
    return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
} // Return empty string if keys is empty.
const printProps = (keys, props, config, indentation, depth, refs, printer)=>{
    const indentationNext = indentation + config.indent;
    const colors = config.colors;
    return keys.map((key)=>{
        const value = props[key];
        let printed = printer(value, config, indentationNext, depth, refs);
        if (typeof value !== "string") {
            if (printed.indexOf("\n") !== -1) printed = config.spacingOuter + indentationNext + printed + config.spacingOuter + indentation;
            printed = "{" + printed + "}";
        }
        return config.spacingInner + indentation + colors.prop.open + key + colors.prop.close + "=" + colors.value.open + printed + colors.value.close;
    }).join("");
}; // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType#node_type_constants
const NodeTypeTextNode = 3; // Return empty string if children is empty.
const printChildren = (children, config, indentation, depth, refs, printer)=>children.map((child)=>{
        const printedChild = typeof child === "string" ? printText(child, config) : printer(child, config, indentation, depth, refs);
        if (printedChild === "" && typeof child === "object" && child !== null && child.nodeType !== NodeTypeTextNode) // A plugin serialized this Node to '' meaning we should ignore it.
        return "";
        return config.spacingOuter + indentation + printedChild;
    }).join("");
const printText = (text, config)=>{
    const contentColor = config.colors.content;
    return contentColor.open + escapeHTML(text) + contentColor.close;
};
const printComment = (comment, config)=>{
    const commentColor = config.colors.comment;
    return commentColor.open + "<!--" + escapeHTML(comment) + "-->" + commentColor.close;
}; // Separate the functions to format props, children, and element,
// so a plugin could override a particular function, if needed.
// Too bad, so sad: the traditional (but unnecessary) space
// in a self-closing tagColor requires a second test of printedProps.
const printElement = (type, printedProps, printedChildren, config, indentation)=>{
    const tagColor = config.colors.tag;
    return tagColor.open + "<" + type + (printedProps && tagColor.close + printedProps + config.spacingOuter + indentation + tagColor.open) + (printedChildren ? ">" + tagColor.close + printedChildren + config.spacingOuter + indentation + tagColor.open + "</" + type : (printedProps && !config.min ? "" : " ") + "/") + ">" + tagColor.close;
};
const printElementAsLeaf = (type, config)=>{
    const tagColor = config.colors.tag;
    return tagColor.open + "<" + type + tagColor.close + " …" + tagColor.open + " />" + tagColor.close;
};
const ELEMENT_NODE$1 = 1;
const TEXT_NODE$1 = 3;
const COMMENT_NODE$1 = 8;
const FRAGMENT_NODE = 11;
const ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/;
const testNode = (val)=>{
    const constructorName = val.constructor.name;
    const { nodeType, tagName } = val;
    const isCustomElement = typeof tagName === "string" && tagName.includes("-") || typeof val.hasAttribute === "function" && val.hasAttribute("is");
    return nodeType === ELEMENT_NODE$1 && (ELEMENT_REGEXP.test(constructorName) || isCustomElement) || nodeType === TEXT_NODE$1 && constructorName === "Text" || nodeType === COMMENT_NODE$1 && constructorName === "Comment" || nodeType === FRAGMENT_NODE && constructorName === "DocumentFragment";
};
function nodeIsText(node) {
    return node.nodeType === TEXT_NODE$1;
}
function nodeIsComment(node) {
    return node.nodeType === COMMENT_NODE$1;
}
function nodeIsFragment(node) {
    return node.nodeType === FRAGMENT_NODE;
}
function createDOMElementFilter(filterNode) {
    return {
        test: (val)=>{
            var _val$constructor2;
            return (val == null ? void 0 : (_val$constructor2 = val.constructor) == null ? void 0 : _val$constructor2.name) && testNode(val);
        },
        serialize: (node, config, indentation, depth, refs, printer)=>{
            if (nodeIsText(node)) return printText(node.data, config);
            if (nodeIsComment(node)) return printComment(node.data, config);
            const type = nodeIsFragment(node) ? "DocumentFragment" : node.tagName.toLowerCase();
            if (++depth > config.maxDepth) return printElementAsLeaf(type, config);
            return printElement(type, printProps(nodeIsFragment(node) ? [] : Array.from(node.attributes).map((attr)=>attr.name).sort(), nodeIsFragment(node) ? {} : Array.from(node.attributes).reduce((props, attribute)=>{
                props[attribute.name] = attribute.value;
                return props;
            }, {}), config, indentation + config.indent, depth, refs, printer), printChildren(Array.prototype.slice.call(node.childNodes || node.children).filter(filterNode), config, indentation + config.indent, depth, refs, printer), config, indentation);
        }
    };
}
// We try to load node dependencies
let chalk = null;
let readFileSync = null;
let codeFrameColumns = null;
try {
    const nodeRequire = module && module.require;
    readFileSync = nodeRequire.call(module, "fs").readFileSync;
    codeFrameColumns = nodeRequire.call(module, "@babel/code-frame").codeFrameColumns;
    chalk = nodeRequire.call(module, "chalk");
} catch  {} // frame has the form "at myMethod (location/to/my/file.js:10:2)"
function getCodeFrame(frame) {
    const locationStart = frame.indexOf("(") + 1;
    const locationEnd = frame.indexOf(")");
    const frameLocation = frame.slice(locationStart, locationEnd);
    const frameLocationElements = frameLocation.split(":");
    const [filename, line, column] = [
        frameLocationElements[0],
        parseInt(frameLocationElements[1], 10),
        parseInt(frameLocationElements[2], 10)
    ];
    let rawFileContents = "";
    try {
        rawFileContents = readFileSync(filename, "utf-8");
    } catch  {
        return "";
    }
    const codeFrame = codeFrameColumns(rawFileContents, {
        start: {
            line,
            column
        }
    }, {
        highlightCode: true,
        linesBelow: 0
    });
    return chalk.dim(frameLocation) + "\n" + codeFrame + "\n";
}
function getUserCodeFrame() {
    // If we couldn't load dependencies, we can't generate the user trace
    /* istanbul ignore next */ if (!readFileSync || !codeFrameColumns) return "";
    const err = new Error();
    const firstClientCodeFrame = err.stack.split("\n").slice(1) // Remove first line which has the form "Error: TypeError"
    .find((frame)=>!frame.includes("node_modules/")); // Ignore frames from 3rd party libraries
    return getCodeFrame(firstClientCodeFrame);
}
// Constant node.nodeType for text nodes, see:
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType#Node_type_constants
const TEXT_NODE = 3;
function jestFakeTimersAreEnabled() {
    /* istanbul ignore else */ // eslint-disable-next-line
    if (typeof jest !== "undefined" && jest !== null) return setTimeout._isMockFunction === true || // modern timers
    Object.prototype.hasOwnProperty.call(setTimeout, "clock");
     // istanbul ignore next
    return false;
}
function getDocument() {
    /* istanbul ignore if */ if (typeof window === "undefined") throw new Error("Could not find default container");
    return window.document;
}
function getWindowFromNode(node) {
    if (node.defaultView) // node is document
    return node.defaultView;
    else if (node.ownerDocument && node.ownerDocument.defaultView) // node is a DOM node
    return node.ownerDocument.defaultView;
    else if (node.window) // node is window
    return node.window;
    else if (node.ownerDocument && node.ownerDocument.defaultView === null) throw new Error("It looks like the window object is not available for the provided node.");
    else if (node.then instanceof Function) throw new Error("It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?");
    else if (Array.isArray(node)) throw new Error("It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?");
    else if (typeof node.debug === "function" && typeof node.logTestingPlaygroundURL === "function") throw new Error("It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?");
    else // The user passed something unusual to a calling function
    throw new Error("The given node is not an Element, the node type is: " + typeof node + ".");
}
function checkContainerType(container) {
    if (!container || !(typeof container.querySelector === "function") || !(typeof container.querySelectorAll === "function")) throw new TypeError("Expected container to be an Element, a Document or a DocumentFragment but got " + getTypeName(container) + ".");
    function getTypeName(object) {
        if (typeof object === "object") return object === null ? "null" : object.constructor.name;
        return typeof object;
    }
}
const shouldHighlight = ()=>{
    let colors;
    try {
        var _process, _process$env;
        colors = JSON.parse((_process = process) == null ? void 0 : (_process$env = _process.env) == null ? void 0 : _process$env.COLORS);
    } catch (e) {
    // care about `true` or `false`, we can safely ignore the error.
    }
    if (typeof colors === "boolean") // If `colors` is set explicitly (both `true` and `false`), use that value.
    return colors;
    else // If `colors` is not set, colorize if we're in node.
    return typeof process !== "undefined" && process.versions !== undefined && process.versions.node !== undefined;
};
const { DOMCollection } = _prettyFormat.plugins; // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType#node_type_constants
const ELEMENT_NODE = 1;
const COMMENT_NODE = 8; // https://github.com/facebook/jest/blob/615084195ae1ae61ddd56162c62bbdda17587569/packages/pretty-format/src/plugins/DOMElement.ts#L50
function filterCommentsAndDefaultIgnoreTagsTags(value) {
    return value.nodeType !== COMMENT_NODE && (value.nodeType !== ELEMENT_NODE || !value.matches(getConfig().defaultIgnore));
}
function prettyDOM(dom, maxLength, options) {
    if (options === void 0) options = {};
    if (!dom) dom = getDocument().body;
    if (typeof maxLength !== "number") maxLength = (typeof process !== "undefined" && undefined, 7000);
    if (maxLength === 0) return "";
    if (dom.documentElement) dom = dom.documentElement;
    let domTypeName = typeof dom;
    if (domTypeName === "object") domTypeName = dom.constructor.name;
    else // To don't fall with `in` operator
    dom = {};
    if (!("outerHTML" in dom)) throw new TypeError("Expected an element or document but got " + domTypeName);
    const { filterNode = filterCommentsAndDefaultIgnoreTagsTags, ...prettyFormatOptions } = options;
    const debugContent = _prettyFormat.format(dom, {
        plugins: [
            createDOMElementFilter(filterNode),
            DOMCollection
        ],
        printFunctionName: false,
        highlight: shouldHighlight(),
        ...prettyFormatOptions
    });
    return maxLength !== undefined && dom.outerHTML.length > maxLength ? debugContent.slice(0, maxLength) + "..." : debugContent;
}
const logDOM = function() {
    const userCodeFrame = getUserCodeFrame();
    if (userCodeFrame) console.log(prettyDOM(...arguments) + "\n\n" + userCodeFrame);
    else console.log(prettyDOM(...arguments));
};
// It would be cleaner for this to live inside './queries', but
// other parts of the code assume that all exports from
// './queries' are query functions.
let config = {
    testIdAttribute: "data-testid",
    asyncUtilTimeout: 1000,
    // asyncWrapper and advanceTimersWrapper is to support React's async `act` function.
    // forcing react-testing-library to wrap all async functions would've been
    // a total nightmare (consider wrapping every findBy* query and then also
    // updating `within` so those would be wrapped too. Total nightmare).
    // so we have this config option that's really only intended for
    // react-testing-library to use. For that reason, this feature will remain
    // undocumented.
    asyncWrapper: (cb)=>cb(),
    unstable_advanceTimersWrapper: (cb)=>cb(),
    eventWrapper: (cb)=>cb(),
    // default value for the `hidden` option in `ByRole` queries
    defaultHidden: false,
    // default value for the `ignore` option in `ByText` queries
    defaultIgnore: "script, style",
    // showOriginalStackTrace flag to show the full error stack traces for async errors
    showOriginalStackTrace: false,
    // throw errors w/ suggestions for better queries. Opt in so off by default.
    throwSuggestions: false,
    // called when getBy* queries fail. (message, container) => Error
    getElementError (message, container) {
        const prettifiedDOM = prettyDOM(container);
        const error = new Error([
            message,
            "Ignored nodes: comments, " + config.defaultIgnore + "\n" + prettifiedDOM
        ].filter(Boolean).join("\n\n"));
        error.name = "TestingLibraryElementError";
        return error;
    },
    _disableExpensiveErrorDiagnostics: false,
    computedStyleSupportsPseudoElements: false
};
function runWithExpensiveErrorDiagnosticsDisabled(callback) {
    try {
        config._disableExpensiveErrorDiagnostics = true;
        return callback();
    } finally{
        config._disableExpensiveErrorDiagnostics = false;
    }
}
function configure(newConfig) {
    if (typeof newConfig === "function") // Pass the existing config out to the provided function
    // and accept a delta in return
    newConfig = newConfig(config);
     // Merge the incoming config delta
    config = {
        ...config,
        ...newConfig
    };
}
function getConfig() {
    return config;
}
const labelledNodeNames = [
    "button",
    "meter",
    "output",
    "progress",
    "select",
    "textarea",
    "input"
];
function getTextContent(node) {
    if (labelledNodeNames.includes(node.nodeName.toLowerCase())) return "";
    if (node.nodeType === TEXT_NODE) return node.textContent;
    return Array.from(node.childNodes).map((childNode)=>getTextContent(childNode)).join("");
}
function getLabelContent(element) {
    let textContent;
    if (element.tagName.toLowerCase() === "label") textContent = getTextContent(element);
    else textContent = element.value || element.textContent;
    return textContent;
} // Based on https://github.com/eps1lon/dom-accessibility-api/pull/352
function getRealLabels(element) {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- types are not aware of older browsers that don't implement `labels`
    if (element.labels !== undefined) {
        var _labels;
        return (_labels = element.labels) != null ? _labels : [];
    }
    if (!isLabelable(element)) return [];
    const labels = element.ownerDocument.querySelectorAll("label");
    return Array.from(labels).filter((label)=>label.control === element);
}
function isLabelable(element) {
    return /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(element.tagName) || element.tagName === "INPUT" && element.getAttribute("type") !== "hidden";
}
function getLabels(container, element, _temp) {
    let { selector = "*" } = _temp === void 0 ? {} : _temp;
    const ariaLabelledBy = element.getAttribute("aria-labelledby");
    const labelsId = ariaLabelledBy ? ariaLabelledBy.split(" ") : [];
    return labelsId.length ? labelsId.map((labelId)=>{
        const labellingElement = container.querySelector('[id="' + labelId + '"]');
        return labellingElement ? {
            content: getLabelContent(labellingElement),
            formControl: null
        } : {
            content: "",
            formControl: null
        };
    }) : Array.from(getRealLabels(element)).map((label)=>{
        const textToMatch = getLabelContent(label);
        const formControlSelector = "button, input, meter, output, progress, select, textarea";
        const labelledFormControl = Array.from(label.querySelectorAll(formControlSelector)).filter((formControlElement)=>formControlElement.matches(selector))[0];
        return {
            content: textToMatch,
            formControl: labelledFormControl
        };
    });
}
function assertNotNullOrUndefined(matcher) {
    if (matcher === null || matcher === undefined) throw new Error("It looks like " + matcher + " was passed instead of a matcher. Did you do something like getByText(" + matcher + ")?");
}
function fuzzyMatches(textToMatch, node, matcher, normalizer) {
    if (typeof textToMatch !== "string") return false;
    assertNotNullOrUndefined(matcher);
    const normalizedText = normalizer(textToMatch);
    if (typeof matcher === "string" || typeof matcher === "number") return normalizedText.toLowerCase().includes(matcher.toString().toLowerCase());
    else if (typeof matcher === "function") return matcher(normalizedText, node);
    else return matchRegExp(matcher, normalizedText);
}
function matches(textToMatch, node, matcher, normalizer) {
    if (typeof textToMatch !== "string") return false;
    assertNotNullOrUndefined(matcher);
    const normalizedText = normalizer(textToMatch);
    if (matcher instanceof Function) return matcher(normalizedText, node);
    else if (matcher instanceof RegExp) return matchRegExp(matcher, normalizedText);
    else return normalizedText === String(matcher);
}
function getDefaultNormalizer(_temp) {
    let { trim = true, collapseWhitespace = true } = _temp === void 0 ? {} : _temp;
    return (text)=>{
        let normalizedText = text;
        normalizedText = trim ? normalizedText.trim() : normalizedText;
        normalizedText = collapseWhitespace ? normalizedText.replace(/\s+/g, " ") : normalizedText;
        return normalizedText;
    };
}
/**
 * Constructs a normalizer to pass to functions in matches.js
 * @param {boolean|undefined} trim The user-specified value for `trim`, without
 * any defaulting having been applied
 * @param {boolean|undefined} collapseWhitespace The user-specified value for
 * `collapseWhitespace`, without any defaulting having been applied
 * @param {Function|undefined} normalizer The user-specified normalizer
 * @returns {Function} A normalizer
 */ function makeNormalizer(_ref) {
    let { trim, collapseWhitespace, normalizer } = _ref;
    if (!normalizer) // No custom normalizer specified. Just use default.
    return getDefaultNormalizer({
        trim,
        collapseWhitespace
    });
    if (typeof trim !== "undefined" || typeof collapseWhitespace !== "undefined") // They've also specified a value for trim or collapseWhitespace
    throw new Error('trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer');
    return normalizer;
}
function matchRegExp(matcher, text) {
    const match = matcher.test(text);
    if (matcher.global && matcher.lastIndex !== 0) {
        console.warn("To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp.");
        matcher.lastIndex = 0;
    }
    return match;
}
function getNodeText(node) {
    if (node.matches("input[type=submit], input[type=button], input[type=reset]")) return node.value;
    return Array.from(node.childNodes).filter((child)=>child.nodeType === TEXT_NODE && Boolean(child.textContent)).map((c)=>c.textContent).join("");
}
const elementRoleList = buildElementRoleList((0, _ariaQuery.elementRoles));
/**
 * @param {Element} element -
 * @returns {boolean} - `true` if `element` and its subtree are inaccessible
 */ function isSubtreeInaccessible(element) {
    if (element.hidden === true) return true;
    if (element.getAttribute("aria-hidden") === "true") return true;
    const window1 = element.ownerDocument.defaultView;
    if (window1.getComputedStyle(element).display === "none") return true;
    return false;
}
/**
 * Partial implementation https://www.w3.org/TR/wai-aria-1.2/#tree_exclusion
 * which should only be used for elements with a non-presentational role i.e.
 * `role="none"` and `role="presentation"` will not be excluded.
 *
 * Implements aria-hidden semantics (i.e. parent overrides child)
 * Ignores "Child Presentational: True" characteristics
 *
 * @param {Element} element -
 * @param {object} [options] -
 * @param {function (element: Element): boolean} options.isSubtreeInaccessible -
 * can be used to return cached results from previous isSubtreeInaccessible calls
 * @returns {boolean} true if excluded, otherwise false
 */ function isInaccessible(element, options) {
    if (options === void 0) options = {};
    const { isSubtreeInaccessible: isSubtreeInaccessibleImpl = isSubtreeInaccessible } = options;
    const window1 = element.ownerDocument.defaultView; // since visibility is inherited we can exit early
    if (window1.getComputedStyle(element).visibility === "hidden") return true;
    let currentElement = element;
    while(currentElement){
        if (isSubtreeInaccessibleImpl(currentElement)) return true;
        currentElement = currentElement.parentElement;
    }
    return false;
}
function getImplicitAriaRoles(currentNode) {
    // eslint bug here:
    // eslint-disable-next-line no-unused-vars
    for (const { match, roles } of elementRoleList){
        if (match(currentNode)) return [
            ...roles
        ];
    }
    return [];
}
function buildElementRoleList(elementRolesMap) {
    function makeElementSelector(_ref) {
        let { name, attributes } = _ref;
        return "" + name + attributes.map((_ref2)=>{
            let { name: attributeName, value, constraints = [] } = _ref2;
            const shouldNotExist = constraints.indexOf("undefined") !== -1;
            if (shouldNotExist) return ":not([" + attributeName + "])";
            else if (value) return "[" + attributeName + '="' + value + '"]';
            else return "[" + attributeName + "]";
        }).join("");
    }
    function getSelectorSpecificity(_ref3) {
        let { attributes = [] } = _ref3;
        return attributes.length;
    }
    function bySelectorSpecificity(_ref4, _ref5) {
        let { specificity: leftSpecificity } = _ref4;
        let { specificity: rightSpecificity } = _ref5;
        return rightSpecificity - leftSpecificity;
    }
    function match(element) {
        let { attributes = [] } = element; // https://github.com/testing-library/dom-testing-library/issues/814
        const typeTextIndex = attributes.findIndex((attribute)=>attribute.value && attribute.name === "type" && attribute.value === "text");
        if (typeTextIndex >= 0) // not using splice to not mutate the attributes array
        attributes = [
            ...attributes.slice(0, typeTextIndex),
            ...attributes.slice(typeTextIndex + 1)
        ];
        const selector = makeElementSelector({
            ...element,
            attributes
        });
        return (node)=>{
            if (typeTextIndex >= 0 && node.type !== "text") return false;
            return node.matches(selector);
        };
    }
    let result = []; // eslint bug here:
    // eslint-disable-next-line no-unused-vars
    for (const [element, roles] of elementRolesMap.entries())result = [
        ...result,
        {
            match: match(element),
            roles: Array.from(roles),
            specificity: getSelectorSpecificity(element)
        }
    ];
    return result.sort(bySelectorSpecificity);
}
function getRoles(container, _temp) {
    let { hidden = false } = _temp === void 0 ? {} : _temp;
    function flattenDOM(node) {
        return [
            node,
            ...Array.from(node.children).reduce((acc, child)=>[
                    ...acc,
                    ...flattenDOM(child)
                ], [])
        ];
    }
    return flattenDOM(container).filter((element)=>{
        return hidden === false ? isInaccessible(element) === false : true;
    }).reduce((acc, node)=>{
        let roles = []; // TODO: This violates html-aria which does not allow any role on every element
        if (node.hasAttribute("role")) roles = node.getAttribute("role").split(" ").slice(0, 1);
        else roles = getImplicitAriaRoles(node);
        return roles.reduce((rolesAcc, role)=>Array.isArray(rolesAcc[role]) ? {
                ...rolesAcc,
                [role]: [
                    ...rolesAcc[role],
                    node
                ]
            } : {
                ...rolesAcc,
                [role]: [
                    node
                ]
            }, acc);
    }, {});
}
function prettyRoles(dom, _ref6) {
    let { hidden, includeDescription } = _ref6;
    const roles = getRoles(dom, {
        hidden
    }); // We prefer to skip generic role, we don't recommend it
    return Object.entries(roles).filter((_ref7)=>{
        let [role] = _ref7;
        return role !== "generic";
    }).map((_ref8)=>{
        let [role, elements] = _ref8;
        const delimiterBar = "-".repeat(50);
        const elementsString = elements.map((el)=>{
            const nameString = 'Name "' + (0, _domAccessibilityApi.computeAccessibleName)(el, {
                computedStyleSupportsPseudoElements: getConfig().computedStyleSupportsPseudoElements
            }) + '":\n';
            const domString = prettyDOM(el.cloneNode(false));
            if (includeDescription) {
                const descriptionString = 'Description "' + (0, _domAccessibilityApi.computeAccessibleDescription)(el, {
                    computedStyleSupportsPseudoElements: getConfig().computedStyleSupportsPseudoElements
                }) + '":\n';
                return "" + nameString + descriptionString + domString;
            }
            return "" + nameString + domString;
        }).join("\n\n");
        return role + ":\n\n" + elementsString + "\n\n" + delimiterBar;
    }).join("\n");
}
const logRoles = function(dom, _temp2) {
    let { hidden = false } = _temp2 === void 0 ? {} : _temp2;
    return console.log(prettyRoles(dom, {
        hidden
    }));
};
/**
 * @param {Element} element -
 * @returns {boolean | undefined} - false/true if (not)selected, undefined if not selectable
 */ function computeAriaSelected(element) {
    // implicit value from html-aam mappings: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings
    // https://www.w3.org/TR/html-aam-1.0/#details-id-97
    if (element.tagName === "OPTION") return element.selected;
     // explicit value
    return checkBooleanAttribute(element, "aria-selected");
}
/**
 * @param {Element} element -
 * @returns {boolean | undefined} - false/true if (not)checked, undefined if not checked-able
 */ function computeAriaChecked(element) {
    // implicit value from html-aam mappings: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings
    // https://www.w3.org/TR/html-aam-1.0/#details-id-56
    // https://www.w3.org/TR/html-aam-1.0/#details-id-67
    if ("indeterminate" in element && element.indeterminate) return undefined;
    if ("checked" in element) return element.checked;
     // explicit value
    return checkBooleanAttribute(element, "aria-checked");
}
/**
 * @param {Element} element -
 * @returns {boolean | undefined} - false/true if (not)pressed, undefined if not press-able
 */ function computeAriaPressed(element) {
    // https://www.w3.org/TR/wai-aria-1.1/#aria-pressed
    return checkBooleanAttribute(element, "aria-pressed");
}
/**
 * @param {Element} element -
 * @returns {boolean | string | null} -
 */ function computeAriaCurrent(element) {
    var _ref9, _checkBooleanAttribut;
    // https://www.w3.org/TR/wai-aria-1.1/#aria-current
    return (_ref9 = (_checkBooleanAttribut = checkBooleanAttribute(element, "aria-current")) != null ? _checkBooleanAttribut : element.getAttribute("aria-current")) != null ? _ref9 : false;
}
/**
 * @param {Element} element -
 * @returns {boolean | undefined} - false/true if (not)expanded, undefined if not expand-able
 */ function computeAriaExpanded(element) {
    // https://www.w3.org/TR/wai-aria-1.1/#aria-expanded
    return checkBooleanAttribute(element, "aria-expanded");
}
function checkBooleanAttribute(element, attribute) {
    const attributeValue = element.getAttribute(attribute);
    if (attributeValue === "true") return true;
    if (attributeValue === "false") return false;
    return undefined;
}
/**
 * @param {Element} element -
 * @returns {number | undefined} - number if implicit heading or aria-level present, otherwise undefined
 */ function computeHeadingLevel(element) {
    // https://w3c.github.io/html-aam/#el-h1-h6
    // https://w3c.github.io/html-aam/#el-h1-h6
    const implicitHeadingLevels = {
        H1: 1,
        H2: 2,
        H3: 3,
        H4: 4,
        H5: 5,
        H6: 6
    }; // explicit aria-level value
    // https://www.w3.org/TR/wai-aria-1.2/#aria-level
    const ariaLevelAttribute = element.getAttribute("aria-level") && Number(element.getAttribute("aria-level"));
    return ariaLevelAttribute || implicitHeadingLevels[element.tagName];
}
const normalize = getDefaultNormalizer();
function escapeRegExp(string) {
    return string.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
function getRegExpMatcher(string) {
    return new RegExp(escapeRegExp(string.toLowerCase()), "i");
}
function makeSuggestion(queryName, element, content, _ref) {
    let { variant, name } = _ref;
    let warning = "";
    const queryOptions = {};
    const queryArgs = [
        [
            "Role",
            "TestId"
        ].includes(queryName) ? content : getRegExpMatcher(content)
    ];
    if (name) queryOptions.name = getRegExpMatcher(name);
    if (queryName === "Role" && isInaccessible(element)) {
        queryOptions.hidden = true;
        warning = "Element is inaccessible. This means that the element and all its children are invisible to screen readers.\n    If you are using the aria-hidden prop, make sure this is the right choice for your case.\n    ";
    }
    if (Object.keys(queryOptions).length > 0) queryArgs.push(queryOptions);
    const queryMethod = variant + "By" + queryName;
    return {
        queryName,
        queryMethod,
        queryArgs,
        variant,
        warning,
        toString () {
            if (warning) console.warn(warning);
            let [text, options] = queryArgs;
            text = typeof text === "string" ? "'" + text + "'" : text;
            options = options ? ", { " + Object.entries(options).map((_ref2)=>{
                let [k, v] = _ref2;
                return k + ": " + v;
            }).join(", ") + " }" : "";
            return queryMethod + "(" + text + options + ")";
        }
    };
}
function canSuggest(currentMethod, requestedMethod, data) {
    return data && (!requestedMethod || requestedMethod.toLowerCase() === currentMethod.toLowerCase());
}
function getSuggestedQuery(element, variant, method) {
    var _element$getAttribute, _getImplicitAriaRoles;
    if (variant === void 0) variant = "get";
    // don't create suggestions for script and style elements
    if (element.matches(getConfig().defaultIgnore)) return undefined;
     //We prefer to suggest something else if the role is generic
    const role = (_element$getAttribute = element.getAttribute("role")) != null ? _element$getAttribute : (_getImplicitAriaRoles = getImplicitAriaRoles(element)) == null ? void 0 : _getImplicitAriaRoles[0];
    if (role !== "generic" && canSuggest("Role", method, role)) return makeSuggestion("Role", element, role, {
        variant,
        name: (0, _domAccessibilityApi.computeAccessibleName)(element, {
            computedStyleSupportsPseudoElements: getConfig().computedStyleSupportsPseudoElements
        })
    });
    const labelText = getLabels(document, element).map((label)=>label.content).join(" ");
    if (canSuggest("LabelText", method, labelText)) return makeSuggestion("LabelText", element, labelText, {
        variant
    });
    const placeholderText = element.getAttribute("placeholder");
    if (canSuggest("PlaceholderText", method, placeholderText)) return makeSuggestion("PlaceholderText", element, placeholderText, {
        variant
    });
    const textContent = normalize(getNodeText(element));
    if (canSuggest("Text", method, textContent)) return makeSuggestion("Text", element, textContent, {
        variant
    });
    if (canSuggest("DisplayValue", method, element.value)) return makeSuggestion("DisplayValue", element, normalize(element.value), {
        variant
    });
    const alt = element.getAttribute("alt");
    if (canSuggest("AltText", method, alt)) return makeSuggestion("AltText", element, alt, {
        variant
    });
    const title = element.getAttribute("title");
    if (canSuggest("Title", method, title)) return makeSuggestion("Title", element, title, {
        variant
    });
    const testId = element.getAttribute(getConfig().testIdAttribute);
    if (canSuggest("TestId", method, testId)) return makeSuggestion("TestId", element, testId, {
        variant
    });
    return undefined;
}
// closer to their code (because async stack traces are hard to follow).
function copyStackTrace(target, source) {
    target.stack = source.stack.replace(source.message, target.message);
}
function waitFor(callback, _ref) {
    let { container = getDocument(), timeout = getConfig().asyncUtilTimeout, showOriginalStackTrace = getConfig().showOriginalStackTrace, stackTraceError, interval = 50, onTimeout = (error)=>{
        error.message = getConfig().getElementError(error.message, container).message;
        return error;
    }, mutationObserverOptions = {
        subtree: true,
        childList: true,
        attributes: true,
        characterData: true
    } } = _ref;
    if (typeof callback !== "function") throw new TypeError("Received `callback` arg must be a function");
    return new Promise(async (resolve, reject)=>{
        let lastError, intervalId, observer;
        let finished = false;
        let promiseStatus = "idle";
        const overallTimeoutTimer = setTimeout(handleTimeout, timeout);
        const usingJestFakeTimers = jestFakeTimersAreEnabled();
        if (usingJestFakeTimers) {
            const { unstable_advanceTimersWrapper: advanceTimersWrapper } = getConfig();
            checkCallback(); // this is a dangerous rule to disable because it could lead to an
            // infinite loop. However, eslint isn't smart enough to know that we're
            // setting finished inside `onDone` which will be called when we're done
            // waiting or when we've timed out.
            // eslint-disable-next-line no-unmodified-loop-condition
            while(!finished){
                if (!jestFakeTimersAreEnabled()) {
                    const error = new Error("Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
                    if (!showOriginalStackTrace) copyStackTrace(error, stackTraceError);
                    reject(error);
                    return;
                } // we *could* (maybe should?) use `advanceTimersToNextTimer` but it's
                // possible that could make this loop go on forever if someone is using
                // third party code that's setting up recursive timers so rapidly that
                // the user's timer's don't get a chance to resolve. So we'll advance
                // by an interval instead. (We have a test for this case).
                advanceTimersWrapper(()=>{
                    jest.advanceTimersByTime(interval);
                }); // It's really important that checkCallback is run *before* we flush
                // in-flight promises. To be honest, I'm not sure why, and I can't quite
                // think of a way to reproduce the problem in a test, but I spent
                // an entire day banging my head against a wall on this.
                checkCallback();
                if (finished) break;
                 // In this rare case, we *need* to wait for in-flight promises
                // to resolve before continuing. We don't need to take advantage
                // of parallelization so we're fine.
                // https://stackoverflow.com/a/59243586/971592
                // eslint-disable-next-line no-await-in-loop
                await advanceTimersWrapper(async ()=>{
                    await new Promise((r)=>{
                        setTimeout(r, 0);
                        jest.advanceTimersByTime(0);
                    });
                });
            }
        } else {
            try {
                checkContainerType(container);
            } catch (e) {
                reject(e);
                return;
            }
            intervalId = setInterval(checkRealTimersCallback, interval);
            const { MutationObserver } = getWindowFromNode(container);
            observer = new MutationObserver(checkRealTimersCallback);
            observer.observe(container, mutationObserverOptions);
            checkCallback();
        }
        function onDone(error, result) {
            finished = true;
            clearTimeout(overallTimeoutTimer);
            if (!usingJestFakeTimers) {
                clearInterval(intervalId);
                observer.disconnect();
            }
            if (error) reject(error);
            else resolve(result);
        }
        function checkRealTimersCallback() {
            if (jestFakeTimersAreEnabled()) {
                const error = new Error("Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830");
                if (!showOriginalStackTrace) copyStackTrace(error, stackTraceError);
                return reject(error);
            } else return checkCallback();
        }
        function checkCallback() {
            if (promiseStatus === "pending") return;
            try {
                const result = runWithExpensiveErrorDiagnosticsDisabled(callback);
                if (typeof (result == null ? void 0 : result.then) === "function") {
                    promiseStatus = "pending";
                    result.then((resolvedValue)=>{
                        promiseStatus = "resolved";
                        onDone(null, resolvedValue);
                    }, (rejectedValue)=>{
                        promiseStatus = "rejected";
                        lastError = rejectedValue;
                    });
                } else onDone(null, result);
                 // If `callback` throws, wait for the next mutation, interval, or timeout.
            } catch (error) {
                // Save the most recent callback error to reject the promise with it in the event of a timeout
                lastError = error;
            }
        }
        function handleTimeout() {
            let error;
            if (lastError) {
                error = lastError;
                if (!showOriginalStackTrace && error.name === "TestingLibraryElementError") copyStackTrace(error, stackTraceError);
            } else {
                error = new Error("Timed out in waitFor.");
                if (!showOriginalStackTrace) copyStackTrace(error, stackTraceError);
            }
            onDone(onTimeout(error), null);
        }
    });
}
function waitForWrapper(callback, options) {
    // create the error here so its stack trace is as close to the
    // calling code as possible
    const stackTraceError = new Error("STACK_TRACE_MESSAGE");
    return getConfig().asyncWrapper(()=>waitFor(callback, {
            stackTraceError,
            ...options
        }));
}
/*
eslint
  max-lines-per-function: ["error", {"max": 200}],
*/ function getElementError(message, container) {
    return getConfig().getElementError(message, container);
}
function getMultipleElementsFoundError(message, container) {
    return getElementError(message + "\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).", container);
}
function queryAllByAttribute(attribute, container, text, _temp) {
    let { exact = true, collapseWhitespace, trim, normalizer } = _temp === void 0 ? {} : _temp;
    const matcher = exact ? matches : fuzzyMatches;
    const matchNormalizer = makeNormalizer({
        collapseWhitespace,
        trim,
        normalizer
    });
    return Array.from(container.querySelectorAll("[" + attribute + "]")).filter((node)=>matcher(node.getAttribute(attribute), node, text, matchNormalizer));
}
function queryByAttribute(attribute, container, text, options) {
    const els = queryAllByAttribute(attribute, container, text, options);
    if (els.length > 1) throw getMultipleElementsFoundError("Found multiple elements by [" + attribute + "=" + text + "]", container);
    return els[0] || null;
} // this accepts a query function and returns a function which throws an error
// if more than one elements is returned, otherwise it returns the first
// element or null
function makeSingleQuery(allQuery, getMultipleError) {
    return function(container) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
        const els = allQuery(container, ...args);
        if (els.length > 1) {
            const elementStrings = els.map((element)=>getElementError(null, element).message).join("\n\n");
            throw getMultipleElementsFoundError(getMultipleError(container, ...args) + "\n\nHere are the matching elements:\n\n" + elementStrings, container);
        }
        return els[0] || null;
    };
}
function getSuggestionError(suggestion, container) {
    return getConfig().getElementError("A better query is available, try this:\n" + suggestion.toString() + "\n", container);
} // this accepts a query function and returns a function which throws an error
// if an empty list of elements is returned
function makeGetAllQuery(allQuery, getMissingError) {
    return function(container) {
        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
        const els = allQuery(container, ...args);
        if (!els.length) throw getConfig().getElementError(getMissingError(container, ...args), container);
        return els;
    };
} // this accepts a getter query function and returns a function which calls
// waitFor and passing a function which invokes the getter.
function makeFindQuery(getter) {
    return (container, text, options, waitForOptions)=>{
        return waitForWrapper(()=>{
            return getter(container, text, options);
        }, {
            container,
            ...waitForOptions
        });
    };
}
const wrapSingleQueryWithSuggestion = (query, queryAllByName, variant)=>function(container) {
        for(var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)args[_key3 - 1] = arguments[_key3];
        const element = query(container, ...args);
        const [{ suggest = getConfig().throwSuggestions } = {}] = args.slice(-1);
        if (element && suggest) {
            const suggestion = getSuggestedQuery(element, variant);
            if (suggestion && !queryAllByName.endsWith(suggestion.queryName)) throw getSuggestionError(suggestion.toString(), container);
        }
        return element;
    };
const wrapAllByQueryWithSuggestion = (query, queryAllByName, variant)=>function(container) {
        for(var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++)args[_key4 - 1] = arguments[_key4];
        const els = query(container, ...args);
        const [{ suggest = getConfig().throwSuggestions } = {}] = args.slice(-1);
        if (els.length && suggest) {
            // get a unique list of all suggestion messages.  We are only going to make a suggestion if
            // all the suggestions are the same
            const uniqueSuggestionMessages = [
                ...new Set(els.map((element)=>{
                    var _getSuggestedQuery;
                    return (_getSuggestedQuery = getSuggestedQuery(element, variant)) == null ? void 0 : _getSuggestedQuery.toString();
                }))
            ];
            if (uniqueSuggestionMessages.length === 1 && !queryAllByName.endsWith(getSuggestedQuery(els[0], variant).queryName)) throw getSuggestionError(uniqueSuggestionMessages[0], container);
        }
        return els;
    }; // TODO: This deviates from the published declarations
// However, the implementation always required a dyadic (after `container`) not variadic `queryAllBy` considering the implementation of `makeFindQuery`
// This is at least statically true and can be verified by accepting `QueryMethod<Arguments, HTMLElement[]>`
function buildQueries(queryAllBy, getMultipleError, getMissingError) {
    const queryBy = wrapSingleQueryWithSuggestion(makeSingleQuery(queryAllBy, getMultipleError), queryAllBy.name, "query");
    const getAllBy = makeGetAllQuery(queryAllBy, getMissingError);
    const getBy = makeSingleQuery(getAllBy, getMultipleError);
    const getByWithSuggestions = wrapSingleQueryWithSuggestion(getBy, queryAllBy.name, "get");
    const getAllWithSuggestions = wrapAllByQueryWithSuggestion(getAllBy, queryAllBy.name.replace("query", "get"), "getAll");
    const findAllBy = makeFindQuery(wrapAllByQueryWithSuggestion(getAllBy, queryAllBy.name, "findAll"));
    const findBy = makeFindQuery(wrapSingleQueryWithSuggestion(getBy, queryAllBy.name, "find"));
    return [
        queryBy,
        getAllWithSuggestions,
        getByWithSuggestions,
        findAllBy,
        findBy
    ];
}
var queryHelpers = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    getElementError: getElementError,
    wrapAllByQueryWithSuggestion: wrapAllByQueryWithSuggestion,
    wrapSingleQueryWithSuggestion: wrapSingleQueryWithSuggestion,
    getMultipleElementsFoundError: getMultipleElementsFoundError,
    queryAllByAttribute: queryAllByAttribute,
    queryByAttribute: queryByAttribute,
    makeSingleQuery: makeSingleQuery,
    makeGetAllQuery: makeGetAllQuery,
    makeFindQuery: makeFindQuery,
    buildQueries: buildQueries
});
function queryAllLabels(container) {
    return Array.from(container.querySelectorAll("label,input")).map((node)=>{
        return {
            node,
            textToMatch: getLabelContent(node)
        };
    }).filter((_ref)=>{
        let { textToMatch } = _ref;
        return textToMatch !== null;
    });
}
const queryAllLabelsByText = function(container, text, _temp) {
    let { exact = true, trim, collapseWhitespace, normalizer } = _temp === void 0 ? {} : _temp;
    const matcher = exact ? matches : fuzzyMatches;
    const matchNormalizer = makeNormalizer({
        collapseWhitespace,
        trim,
        normalizer
    });
    const textToMatchByLabels = queryAllLabels(container);
    return textToMatchByLabels.filter((_ref2)=>{
        let { node, textToMatch } = _ref2;
        return matcher(textToMatch, node, text, matchNormalizer);
    }).map((_ref3)=>{
        let { node } = _ref3;
        return node;
    });
};
const queryAllByLabelText = function(container, text, _temp2) {
    let { selector = "*", exact = true, collapseWhitespace, trim, normalizer } = _temp2 === void 0 ? {} : _temp2;
    checkContainerType(container);
    const matcher = exact ? matches : fuzzyMatches;
    const matchNormalizer = makeNormalizer({
        collapseWhitespace,
        trim,
        normalizer
    });
    const matchingLabelledElements = Array.from(container.querySelectorAll("*")).filter((element)=>{
        return getRealLabels(element).length || element.hasAttribute("aria-labelledby");
    }).reduce((labelledElements, labelledElement)=>{
        const labelList = getLabels(container, labelledElement, {
            selector
        });
        labelList.filter((label)=>Boolean(label.formControl)).forEach((label)=>{
            if (matcher(label.content, label.formControl, text, matchNormalizer) && label.formControl) labelledElements.push(label.formControl);
        });
        const labelsValue = labelList.filter((label)=>Boolean(label.content)).map((label)=>label.content);
        if (matcher(labelsValue.join(" "), labelledElement, text, matchNormalizer)) labelledElements.push(labelledElement);
        if (labelsValue.length > 1) labelsValue.forEach((labelValue, index)=>{
            if (matcher(labelValue, labelledElement, text, matchNormalizer)) labelledElements.push(labelledElement);
            const labelsFiltered = [
                ...labelsValue
            ];
            labelsFiltered.splice(index, 1);
            if (labelsFiltered.length > 1) {
                if (matcher(labelsFiltered.join(" "), labelledElement, text, matchNormalizer)) labelledElements.push(labelledElement);
            }
        });
        return labelledElements;
    }, []).concat(queryAllByAttribute("aria-label", container, text, {
        exact,
        normalizer: matchNormalizer
    }));
    return Array.from(new Set(matchingLabelledElements)).filter((element)=>element.matches(selector));
}; // the getAll* query would normally look like this:
// const getAllByLabelText = makeGetAllQuery(
//   queryAllByLabelText,
//   (c, text) => `Unable to find a label with the text of: ${text}`,
// )
// however, we can give a more helpful error message than the generic one,
// so we're writing this one out by hand.
const getAllByLabelText = function(container, text) {
    for(var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++)rest[_key - 2] = arguments[_key];
    const els = queryAllByLabelText(container, text, ...rest);
    if (!els.length) {
        const labels = queryAllLabelsByText(container, text, ...rest);
        if (labels.length) {
            const tagNames = labels.map((label)=>getTagNameOfElementAssociatedWithLabelViaFor(container, label)).filter((tagName)=>!!tagName);
            if (tagNames.length) throw getConfig().getElementError(tagNames.map((tagName)=>"Found a label with the text of: " + text + ", however the element associated with this label (<" + tagName + " />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <" + tagName + " />, you can use aria-label or aria-labelledby instead.").join("\n\n"), container);
            else throw getConfig().getElementError("Found a label with the text of: " + text + ', however no form control was found associated to that label. Make sure you\'re using the "for" attribute or "aria-labelledby" attribute correctly.', container);
        } else throw getConfig().getElementError("Unable to find a label with the text of: " + text, container);
    }
    return els;
};
function getTagNameOfElementAssociatedWithLabelViaFor(container, label) {
    const htmlFor = label.getAttribute("for");
    if (!htmlFor) return null;
    const element = container.querySelector('[id="' + htmlFor + '"]');
    return element ? element.tagName.toLowerCase() : null;
} // the reason mentioned above is the same reason we're not using buildQueries
const getMultipleError$7 = (c, text)=>"Found multiple elements with the text of: " + text;
const queryByLabelText = wrapSingleQueryWithSuggestion(makeSingleQuery(queryAllByLabelText, getMultipleError$7), queryAllByLabelText.name, "query");
const getByLabelText = makeSingleQuery(getAllByLabelText, getMultipleError$7);
const findAllByLabelText = makeFindQuery(wrapAllByQueryWithSuggestion(getAllByLabelText, getAllByLabelText.name, "findAll"));
const findByLabelText = makeFindQuery(wrapSingleQueryWithSuggestion(getByLabelText, getAllByLabelText.name, "find"));
const getAllByLabelTextWithSuggestions = wrapAllByQueryWithSuggestion(getAllByLabelText, getAllByLabelText.name, "getAll");
const getByLabelTextWithSuggestions = wrapSingleQueryWithSuggestion(getByLabelText, getAllByLabelText.name, "get");
const queryAllByLabelTextWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByLabelText, queryAllByLabelText.name, "queryAll");
const queryAllByPlaceholderText = function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    checkContainerType(args[0]);
    return queryAllByAttribute("placeholder", ...args);
};
const getMultipleError$6 = (c, text)=>"Found multiple elements with the placeholder text of: " + text;
const getMissingError$6 = (c, text)=>"Unable to find an element with the placeholder text of: " + text;
const queryAllByPlaceholderTextWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByPlaceholderText, queryAllByPlaceholderText.name, "queryAll");
const [queryByPlaceholderText, getAllByPlaceholderText, getByPlaceholderText, findAllByPlaceholderText, findByPlaceholderText] = buildQueries(queryAllByPlaceholderText, getMultipleError$6, getMissingError$6);
const queryAllByText = function(container, text, _temp) {
    let { selector = "*", exact = true, collapseWhitespace, trim, ignore = getConfig().defaultIgnore, normalizer } = _temp === void 0 ? {} : _temp;
    checkContainerType(container);
    const matcher = exact ? matches : fuzzyMatches;
    const matchNormalizer = makeNormalizer({
        collapseWhitespace,
        trim,
        normalizer
    });
    let baseArray = [];
    if (typeof container.matches === "function" && container.matches(selector)) baseArray = [
        container
    ];
    return [
        ...baseArray,
        ...Array.from(container.querySelectorAll(selector))
    ] // TODO: `matches` according lib.dom.d.ts can get only `string` but according our code it can handle also boolean :)
    .filter((node)=>!ignore || !node.matches(ignore)).filter((node)=>matcher(getNodeText(node), node, text, matchNormalizer));
};
const getMultipleError$5 = (c, text)=>"Found multiple elements with the text: " + text;
const getMissingError$5 = function(c, text, options) {
    if (options === void 0) options = {};
    const { collapseWhitespace, trim, normalizer, selector } = options;
    const matchNormalizer = makeNormalizer({
        collapseWhitespace,
        trim,
        normalizer
    });
    const normalizedText = matchNormalizer(text.toString());
    const isNormalizedDifferent = normalizedText !== text.toString();
    const isCustomSelector = (selector != null ? selector : "*") !== "*";
    return "Unable to find an element with the text: " + (isNormalizedDifferent ? normalizedText + " (normalized from '" + text + "')" : text) + (isCustomSelector ? ", which matches selector '" + selector + "'" : "") + ". This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.";
};
const queryAllByTextWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByText, queryAllByText.name, "queryAll");
const [queryByText, getAllByText, getByText, findAllByText, findByText] = buildQueries(queryAllByText, getMultipleError$5, getMissingError$5);
const queryAllByDisplayValue = function(container, value, _temp) {
    let { exact = true, collapseWhitespace, trim, normalizer } = _temp === void 0 ? {} : _temp;
    checkContainerType(container);
    const matcher = exact ? matches : fuzzyMatches;
    const matchNormalizer = makeNormalizer({
        collapseWhitespace,
        trim,
        normalizer
    });
    return Array.from(container.querySelectorAll("input,textarea,select")).filter((node)=>{
        if (node.tagName === "SELECT") {
            const selectedOptions = Array.from(node.options).filter((option)=>option.selected);
            return selectedOptions.some((optionNode)=>matcher(getNodeText(optionNode), optionNode, value, matchNormalizer));
        } else return matcher(node.value, node, value, matchNormalizer);
    });
};
const getMultipleError$4 = (c, value)=>"Found multiple elements with the display value: " + value + ".";
const getMissingError$4 = (c, value)=>"Unable to find an element with the display value: " + value + ".";
const queryAllByDisplayValueWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByDisplayValue, queryAllByDisplayValue.name, "queryAll");
const [queryByDisplayValue, getAllByDisplayValue, getByDisplayValue, findAllByDisplayValue, findByDisplayValue] = buildQueries(queryAllByDisplayValue, getMultipleError$4, getMissingError$4);
const VALID_TAG_REGEXP = /^(img|input|area|.+-.+)$/i;
const queryAllByAltText = function(container, alt, options) {
    if (options === void 0) options = {};
    checkContainerType(container);
    return queryAllByAttribute("alt", container, alt, options).filter((node)=>VALID_TAG_REGEXP.test(node.tagName));
};
const getMultipleError$3 = (c, alt)=>"Found multiple elements with the alt text: " + alt;
const getMissingError$3 = (c, alt)=>"Unable to find an element with the alt text: " + alt;
const queryAllByAltTextWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByAltText, queryAllByAltText.name, "queryAll");
const [queryByAltText, getAllByAltText, getByAltText, findAllByAltText, findByAltText] = buildQueries(queryAllByAltText, getMultipleError$3, getMissingError$3);
const isSvgTitle = (node)=>{
    var _node$parentElement;
    return node.tagName.toLowerCase() === "title" && ((_node$parentElement = node.parentElement) == null ? void 0 : _node$parentElement.tagName.toLowerCase()) === "svg";
};
const queryAllByTitle = function(container, text, _temp) {
    let { exact = true, collapseWhitespace, trim, normalizer } = _temp === void 0 ? {} : _temp;
    checkContainerType(container);
    const matcher = exact ? matches : fuzzyMatches;
    const matchNormalizer = makeNormalizer({
        collapseWhitespace,
        trim,
        normalizer
    });
    return Array.from(container.querySelectorAll("[title], svg > title")).filter((node)=>matcher(node.getAttribute("title"), node, text, matchNormalizer) || isSvgTitle(node) && matcher(getNodeText(node), node, text, matchNormalizer));
};
const getMultipleError$2 = (c, title)=>"Found multiple elements with the title: " + title + ".";
const getMissingError$2 = (c, title)=>"Unable to find an element with the title: " + title + ".";
const queryAllByTitleWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByTitle, queryAllByTitle.name, "queryAll");
const [queryByTitle, getAllByTitle, getByTitle, findAllByTitle, findByTitle] = buildQueries(queryAllByTitle, getMultipleError$2, getMissingError$2);
function queryAllByRole(container, role, _temp) {
    let { exact = true, collapseWhitespace, hidden = getConfig().defaultHidden, name, description, trim, normalizer, queryFallbacks = false, selected, checked, pressed, current, level, expanded } = _temp === void 0 ? {} : _temp;
    checkContainerType(container);
    const matcher = exact ? matches : fuzzyMatches;
    const matchNormalizer = makeNormalizer({
        collapseWhitespace,
        trim,
        normalizer
    });
    if (selected !== undefined) {
        var _allRoles$get;
        // guard against unknown roles
        if (((_allRoles$get = (0, _ariaQuery.roles).get(role)) == null ? void 0 : _allRoles$get.props["aria-selected"]) === undefined) throw new Error('"aria-selected" is not supported on role "' + role + '".');
    }
    if (checked !== undefined) {
        var _allRoles$get2;
        // guard against unknown roles
        if (((_allRoles$get2 = (0, _ariaQuery.roles).get(role)) == null ? void 0 : _allRoles$get2.props["aria-checked"]) === undefined) throw new Error('"aria-checked" is not supported on role "' + role + '".');
    }
    if (pressed !== undefined) {
        var _allRoles$get3;
        // guard against unknown roles
        if (((_allRoles$get3 = (0, _ariaQuery.roles).get(role)) == null ? void 0 : _allRoles$get3.props["aria-pressed"]) === undefined) throw new Error('"aria-pressed" is not supported on role "' + role + '".');
    }
    if (current !== undefined) {
        var _allRoles$get4;
        /* istanbul ignore next */ // guard against unknown roles
        // All currently released ARIA versions support `aria-current` on all roles.
        // Leaving this for symetry and forward compatibility
        if (((_allRoles$get4 = (0, _ariaQuery.roles).get(role)) == null ? void 0 : _allRoles$get4.props["aria-current"]) === undefined) throw new Error('"aria-current" is not supported on role "' + role + '".');
    }
    if (level !== undefined) {
        // guard against using `level` option with any role other than `heading`
        if (role !== "heading") throw new Error('Role "' + role + '" cannot have "level" property.');
    }
    if (expanded !== undefined) {
        var _allRoles$get5;
        // guard against unknown roles
        if (((_allRoles$get5 = (0, _ariaQuery.roles).get(role)) == null ? void 0 : _allRoles$get5.props["aria-expanded"]) === undefined) throw new Error('"aria-expanded" is not supported on role "' + role + '".');
    }
    const subtreeIsInaccessibleCache = new WeakMap();
    function cachedIsSubtreeInaccessible(element) {
        if (!subtreeIsInaccessibleCache.has(element)) subtreeIsInaccessibleCache.set(element, isSubtreeInaccessible(element));
        return subtreeIsInaccessibleCache.get(element);
    }
    return Array.from(container.querySelectorAll(makeRoleSelector(role, exact, normalizer ? matchNormalizer : undefined))).filter((node)=>{
        const isRoleSpecifiedExplicitly = node.hasAttribute("role");
        if (isRoleSpecifiedExplicitly) {
            const roleValue = node.getAttribute("role");
            if (queryFallbacks) return roleValue.split(" ").filter(Boolean).some((text)=>matcher(text, node, role, matchNormalizer));
             // if a custom normalizer is passed then let normalizer handle the role value
            if (normalizer) return matcher(roleValue, node, role, matchNormalizer);
             // other wise only send the first word to match
            const [firstWord] = roleValue.split(" ");
            return matcher(firstWord, node, role, matchNormalizer);
        }
        const implicitRoles = getImplicitAriaRoles(node);
        return implicitRoles.some((implicitRole)=>matcher(implicitRole, node, role, matchNormalizer));
    }).filter((element)=>{
        if (selected !== undefined) return selected === computeAriaSelected(element);
        if (checked !== undefined) return checked === computeAriaChecked(element);
        if (pressed !== undefined) return pressed === computeAriaPressed(element);
        if (current !== undefined) return current === computeAriaCurrent(element);
        if (expanded !== undefined) return expanded === computeAriaExpanded(element);
        if (level !== undefined) return level === computeHeadingLevel(element);
         // don't care if aria attributes are unspecified
        return true;
    }).filter((element)=>{
        if (name === undefined) // Don't care
        return true;
        return matches((0, _domAccessibilityApi.computeAccessibleName)(element, {
            computedStyleSupportsPseudoElements: getConfig().computedStyleSupportsPseudoElements
        }), element, name, (text)=>text);
    }).filter((element)=>{
        if (description === undefined) // Don't care
        return true;
        return matches((0, _domAccessibilityApi.computeAccessibleDescription)(element, {
            computedStyleSupportsPseudoElements: getConfig().computedStyleSupportsPseudoElements
        }), element, description, (text)=>text);
    }).filter((element)=>{
        return hidden === false ? isInaccessible(element, {
            isSubtreeInaccessible: cachedIsSubtreeInaccessible
        }) === false : true;
    });
}
function makeRoleSelector(role, exact, customNormalizer) {
    var _roleElements$get;
    if (typeof role !== "string") // For non-string role parameters we can not determine the implicitRoleSelectors.
    return "*";
    const explicitRoleSelector = exact && !customNormalizer ? '*[role~="' + role + '"]' : "*[role]";
    const roleRelations = (_roleElements$get = (0, _ariaQuery.roleElements).get(role)) != null ? _roleElements$get : new Set();
    const implicitRoleSelectors = new Set(Array.from(roleRelations).map((_ref)=>{
        let { name } = _ref;
        return name;
    })); // Current transpilation config sometimes assumes `...` is always applied to arrays.
    // `...` is equivalent to `Array.prototype.concat` for arrays.
    // If you replace this code with `[explicitRoleSelector, ...implicitRoleSelectors]`, make sure every transpilation target retains the `...` in favor of `Array.prototype.concat`.
    return [
        explicitRoleSelector
    ].concat(Array.from(implicitRoleSelectors)).join(",");
}
const getNameHint = (name)=>{
    let nameHint = "";
    if (name === undefined) nameHint = "";
    else if (typeof name === "string") nameHint = ' and name "' + name + '"';
    else nameHint = " and name `" + name + "`";
    return nameHint;
};
const getMultipleError$1 = function(c, role, _temp2) {
    let { name } = _temp2 === void 0 ? {} : _temp2;
    return 'Found multiple elements with the role "' + role + '"' + getNameHint(name);
};
const getMissingError$1 = function(container, role, _temp3) {
    let { hidden = getConfig().defaultHidden, name, description } = _temp3 === void 0 ? {} : _temp3;
    if (getConfig()._disableExpensiveErrorDiagnostics) return 'Unable to find role="' + role + '"' + getNameHint(name);
    let roles = "";
    Array.from(container.children).forEach((childElement)=>{
        roles += prettyRoles(childElement, {
            hidden,
            includeDescription: description !== undefined
        });
    });
    let roleMessage;
    if (roles.length === 0) {
        if (hidden === false) roleMessage = "There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole";
        else roleMessage = "There are no available roles.";
    } else roleMessage = ("\nHere are the " + (hidden === false ? "accessible" : "available") + " roles:\n\n  " + roles.replace(/\n/g, "\n  ").replace(/\n\s\s\n/g, "\n\n") + "\n").trim();
    let nameHint = "";
    if (name === undefined) nameHint = "";
    else if (typeof name === "string") nameHint = ' and name "' + name + '"';
    else nameHint = " and name `" + name + "`";
    let descriptionHint = "";
    if (description === undefined) descriptionHint = "";
    else if (typeof description === "string") descriptionHint = ' and description "' + description + '"';
    else descriptionHint = " and description `" + description + "`";
    return ("\nUnable to find an " + (hidden === false ? "accessible " : "") + 'element with the role "' + role + '"' + nameHint + descriptionHint + "\n\n" + roleMessage).trim();
};
const queryAllByRoleWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByRole, queryAllByRole.name, "queryAll");
const [queryByRole, getAllByRole, getByRole, findAllByRole, findByRole] = buildQueries(queryAllByRole, getMultipleError$1, getMissingError$1);
const getTestIdAttribute = ()=>getConfig().testIdAttribute;
const queryAllByTestId = function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    checkContainerType(args[0]);
    return queryAllByAttribute(getTestIdAttribute(), ...args);
};
const getMultipleError = (c, id)=>"Found multiple elements by: [" + getTestIdAttribute() + '="' + id + '"]';
const getMissingError = (c, id)=>"Unable to find an element by: [" + getTestIdAttribute() + '="' + id + '"]';
const queryAllByTestIdWithSuggestions = wrapAllByQueryWithSuggestion(queryAllByTestId, queryAllByTestId.name, "queryAll");
const [queryByTestId, getAllByTestId, getByTestId, findAllByTestId, findByTestId] = buildQueries(queryAllByTestId, getMultipleError, getMissingError);
var queries = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    queryAllByLabelText: queryAllByLabelTextWithSuggestions,
    queryByLabelText: queryByLabelText,
    getAllByLabelText: getAllByLabelTextWithSuggestions,
    getByLabelText: getByLabelTextWithSuggestions,
    findAllByLabelText: findAllByLabelText,
    findByLabelText: findByLabelText,
    queryByPlaceholderText: queryByPlaceholderText,
    queryAllByPlaceholderText: queryAllByPlaceholderTextWithSuggestions,
    getByPlaceholderText: getByPlaceholderText,
    getAllByPlaceholderText: getAllByPlaceholderText,
    findAllByPlaceholderText: findAllByPlaceholderText,
    findByPlaceholderText: findByPlaceholderText,
    queryByText: queryByText,
    queryAllByText: queryAllByTextWithSuggestions,
    getByText: getByText,
    getAllByText: getAllByText,
    findAllByText: findAllByText,
    findByText: findByText,
    queryByDisplayValue: queryByDisplayValue,
    queryAllByDisplayValue: queryAllByDisplayValueWithSuggestions,
    getByDisplayValue: getByDisplayValue,
    getAllByDisplayValue: getAllByDisplayValue,
    findAllByDisplayValue: findAllByDisplayValue,
    findByDisplayValue: findByDisplayValue,
    queryByAltText: queryByAltText,
    queryAllByAltText: queryAllByAltTextWithSuggestions,
    getByAltText: getByAltText,
    getAllByAltText: getAllByAltText,
    findAllByAltText: findAllByAltText,
    findByAltText: findByAltText,
    queryByTitle: queryByTitle,
    queryAllByTitle: queryAllByTitleWithSuggestions,
    getByTitle: getByTitle,
    getAllByTitle: getAllByTitle,
    findAllByTitle: findAllByTitle,
    findByTitle: findByTitle,
    queryByRole: queryByRole,
    queryAllByRole: queryAllByRoleWithSuggestions,
    getAllByRole: getAllByRole,
    getByRole: getByRole,
    findAllByRole: findAllByRole,
    findByRole: findByRole,
    queryByTestId: queryByTestId,
    queryAllByTestId: queryAllByTestIdWithSuggestions,
    getByTestId: getByTestId,
    getAllByTestId: getAllByTestId,
    findAllByTestId: findAllByTestId,
    findByTestId: findByTestId
});
/**
 * @typedef {{[key: string]: Function}} FuncMap
 */ /**
 * @param {HTMLElement} element container
 * @param {FuncMap} queries object of functions
 * @param {Object} initialValue for reducer
 * @returns {FuncMap} returns object of functions bound to container
 */ function getQueriesForElement(element, queries$1, initialValue) {
    if (queries$1 === void 0) queries$1 = queries;
    if (initialValue === void 0) initialValue = {};
    return Object.keys(queries$1).reduce((helpers, key)=>{
        const fn = queries$1[key];
        helpers[key] = fn.bind(null, element);
        return helpers;
    }, initialValue);
}
const isRemoved = (result)=>!result || Array.isArray(result) && !result.length; // Check if the element is not present.
// As the name implies, waitForElementToBeRemoved should check `present` --> `removed`
function initialCheck(elements) {
    if (isRemoved(elements)) throw new Error("The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal.");
}
async function waitForElementToBeRemoved(callback, options) {
    // created here so we get a nice stacktrace
    const timeoutError = new Error("Timed out in waitForElementToBeRemoved.");
    if (typeof callback !== "function") {
        initialCheck(callback);
        const elements = Array.isArray(callback) ? callback : [
            callback
        ];
        const getRemainingElements = elements.map((element)=>{
            let parent = element.parentElement;
            if (parent === null) return ()=>null;
            while(parent.parentElement)parent = parent.parentElement;
            return ()=>parent.contains(element) ? element : null;
        });
        callback = ()=>getRemainingElements.map((c)=>c()).filter(Boolean);
    }
    initialCheck(callback());
    return waitForWrapper(()=>{
        let result;
        try {
            result = callback();
        } catch (error) {
            if (error.name === "TestingLibraryElementError") return undefined;
            throw error;
        }
        if (!isRemoved(result)) throw timeoutError;
        return undefined;
    }, options);
}
/*
eslint
  require-await: "off"
*/ const eventMap = {
    // Clipboard Events
    copy: {
        EventType: "ClipboardEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    cut: {
        EventType: "ClipboardEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    paste: {
        EventType: "ClipboardEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    // Composition Events
    compositionEnd: {
        EventType: "CompositionEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    compositionStart: {
        EventType: "CompositionEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    compositionUpdate: {
        EventType: "CompositionEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    // Keyboard Events
    keyDown: {
        EventType: "KeyboardEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            charCode: 0,
            composed: true
        }
    },
    keyPress: {
        EventType: "KeyboardEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            charCode: 0,
            composed: true
        }
    },
    keyUp: {
        EventType: "KeyboardEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            charCode: 0,
            composed: true
        }
    },
    // Focus Events
    focus: {
        EventType: "FocusEvent",
        defaultInit: {
            bubbles: false,
            cancelable: false,
            composed: true
        }
    },
    blur: {
        EventType: "FocusEvent",
        defaultInit: {
            bubbles: false,
            cancelable: false,
            composed: true
        }
    },
    focusIn: {
        EventType: "FocusEvent",
        defaultInit: {
            bubbles: true,
            cancelable: false,
            composed: true
        }
    },
    focusOut: {
        EventType: "FocusEvent",
        defaultInit: {
            bubbles: true,
            cancelable: false,
            composed: true
        }
    },
    // Form Events
    change: {
        EventType: "Event",
        defaultInit: {
            bubbles: true,
            cancelable: false
        }
    },
    input: {
        EventType: "InputEvent",
        defaultInit: {
            bubbles: true,
            cancelable: false,
            composed: true
        }
    },
    invalid: {
        EventType: "Event",
        defaultInit: {
            bubbles: false,
            cancelable: true
        }
    },
    submit: {
        EventType: "Event",
        defaultInit: {
            bubbles: true,
            cancelable: true
        }
    },
    reset: {
        EventType: "Event",
        defaultInit: {
            bubbles: true,
            cancelable: true
        }
    },
    // Mouse Events
    click: {
        EventType: "MouseEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            button: 0,
            composed: true
        }
    },
    contextMenu: {
        EventType: "MouseEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    dblClick: {
        EventType: "MouseEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    drag: {
        EventType: "DragEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    dragEnd: {
        EventType: "DragEvent",
        defaultInit: {
            bubbles: true,
            cancelable: false,
            composed: true
        }
    },
    dragEnter: {
        EventType: "DragEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    dragExit: {
        EventType: "DragEvent",
        defaultInit: {
            bubbles: true,
            cancelable: false,
            composed: true
        }
    },
    dragLeave: {
        EventType: "DragEvent",
        defaultInit: {
            bubbles: true,
            cancelable: false,
            composed: true
        }
    },
    dragOver: {
        EventType: "DragEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    dragStart: {
        EventType: "DragEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    drop: {
        EventType: "DragEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    mouseDown: {
        EventType: "MouseEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    mouseEnter: {
        EventType: "MouseEvent",
        defaultInit: {
            bubbles: false,
            cancelable: false,
            composed: true
        }
    },
    mouseLeave: {
        EventType: "MouseEvent",
        defaultInit: {
            bubbles: false,
            cancelable: false,
            composed: true
        }
    },
    mouseMove: {
        EventType: "MouseEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    mouseOut: {
        EventType: "MouseEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    mouseOver: {
        EventType: "MouseEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    mouseUp: {
        EventType: "MouseEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    // Selection Events
    select: {
        EventType: "Event",
        defaultInit: {
            bubbles: true,
            cancelable: false
        }
    },
    // Touch Events
    touchCancel: {
        EventType: "TouchEvent",
        defaultInit: {
            bubbles: true,
            cancelable: false,
            composed: true
        }
    },
    touchEnd: {
        EventType: "TouchEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    touchMove: {
        EventType: "TouchEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    touchStart: {
        EventType: "TouchEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    // UI Events
    resize: {
        EventType: "UIEvent",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    scroll: {
        EventType: "UIEvent",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    // Wheel Events
    wheel: {
        EventType: "WheelEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    // Media Events
    abort: {
        EventType: "Event",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    canPlay: {
        EventType: "Event",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    canPlayThrough: {
        EventType: "Event",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    durationChange: {
        EventType: "Event",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    emptied: {
        EventType: "Event",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    encrypted: {
        EventType: "Event",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    ended: {
        EventType: "Event",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    loadedData: {
        EventType: "Event",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    loadedMetadata: {
        EventType: "Event",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    loadStart: {
        EventType: "ProgressEvent",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    pause: {
        EventType: "Event",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    play: {
        EventType: "Event",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    playing: {
        EventType: "Event",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    progress: {
        EventType: "ProgressEvent",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    rateChange: {
        EventType: "Event",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    seeked: {
        EventType: "Event",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    seeking: {
        EventType: "Event",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    stalled: {
        EventType: "Event",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    suspend: {
        EventType: "Event",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    timeUpdate: {
        EventType: "Event",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    volumeChange: {
        EventType: "Event",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    waiting: {
        EventType: "Event",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    // Events
    load: {
        // TODO: load events can be UIEvent or Event depending on what generated them
        // This is were this abstraction breaks down.
        // But the common targets are <img />, <script /> and window.
        // Neither of these targets receive a UIEvent
        EventType: "Event",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    error: {
        EventType: "Event",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    // Animation Events
    animationStart: {
        EventType: "AnimationEvent",
        defaultInit: {
            bubbles: true,
            cancelable: false
        }
    },
    animationEnd: {
        EventType: "AnimationEvent",
        defaultInit: {
            bubbles: true,
            cancelable: false
        }
    },
    animationIteration: {
        EventType: "AnimationEvent",
        defaultInit: {
            bubbles: true,
            cancelable: false
        }
    },
    // Transition Events
    transitionCancel: {
        EventType: "TransitionEvent",
        defaultInit: {
            bubbles: true,
            cancelable: false
        }
    },
    transitionEnd: {
        EventType: "TransitionEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true
        }
    },
    transitionRun: {
        EventType: "TransitionEvent",
        defaultInit: {
            bubbles: true,
            cancelable: false
        }
    },
    transitionStart: {
        EventType: "TransitionEvent",
        defaultInit: {
            bubbles: true,
            cancelable: false
        }
    },
    // pointer events
    pointerOver: {
        EventType: "PointerEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    pointerEnter: {
        EventType: "PointerEvent",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    pointerDown: {
        EventType: "PointerEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    pointerMove: {
        EventType: "PointerEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    pointerUp: {
        EventType: "PointerEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    pointerCancel: {
        EventType: "PointerEvent",
        defaultInit: {
            bubbles: true,
            cancelable: false,
            composed: true
        }
    },
    pointerOut: {
        EventType: "PointerEvent",
        defaultInit: {
            bubbles: true,
            cancelable: true,
            composed: true
        }
    },
    pointerLeave: {
        EventType: "PointerEvent",
        defaultInit: {
            bubbles: false,
            cancelable: false
        }
    },
    gotPointerCapture: {
        EventType: "PointerEvent",
        defaultInit: {
            bubbles: true,
            cancelable: false,
            composed: true
        }
    },
    lostPointerCapture: {
        EventType: "PointerEvent",
        defaultInit: {
            bubbles: true,
            cancelable: false,
            composed: true
        }
    },
    // history events
    popState: {
        EventType: "PopStateEvent",
        defaultInit: {
            bubbles: true,
            cancelable: false
        }
    }
};
const eventAliasMap = {
    doubleClick: "dblClick"
};
function fireEvent(element, event) {
    return getConfig().eventWrapper(()=>{
        if (!event) throw new Error("Unable to fire an event - please provide an event object.");
        if (!element) throw new Error('Unable to fire a "' + event.type + '" event - please provide a DOM element.');
        return element.dispatchEvent(event);
    });
}
function createEvent(eventName, node, init, _temp) {
    let { EventType = "Event", defaultInit = {} } = _temp === void 0 ? {} : _temp;
    if (!node) throw new Error('Unable to fire a "' + eventName + '" event - please provide a DOM element.');
    const eventInit = {
        ...defaultInit,
        ...init
    };
    const { target: { value, files, ...targetProperties } = {} } = eventInit;
    if (value !== undefined) setNativeValue(node, value);
    if (files !== undefined) // input.files is a read-only property so this is not allowed:
    // input.files = [file]
    // so we have to use this workaround to set the property
    Object.defineProperty(node, "files", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: files
    });
    Object.assign(node, targetProperties);
    const window1 = getWindowFromNode(node);
    const EventConstructor = window1[EventType] || window1.Event;
    let event;
    /* istanbul ignore else  */ if (typeof EventConstructor === "function") event = new EventConstructor(eventName, eventInit);
    else {
        // IE11 polyfill from https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
        event = window1.document.createEvent(EventType);
        const { bubbles, cancelable, detail, ...otherInit } = eventInit;
        event.initEvent(eventName, bubbles, cancelable, detail);
        Object.keys(otherInit).forEach((eventKey)=>{
            event[eventKey] = otherInit[eventKey];
        });
    } // DataTransfer is not supported in jsdom: https://github.com/jsdom/jsdom/issues/1568
    const dataTransferProperties = [
        "dataTransfer",
        "clipboardData"
    ];
    dataTransferProperties.forEach((dataTransferKey)=>{
        const dataTransferValue = eventInit[dataTransferKey];
        if (typeof dataTransferValue === "object") {
            /* istanbul ignore if  */ if (typeof window1.DataTransfer === "function") Object.defineProperty(event, dataTransferKey, {
                value: Object.getOwnPropertyNames(dataTransferValue).reduce((acc, propName)=>{
                    Object.defineProperty(acc, propName, {
                        value: dataTransferValue[propName]
                    });
                    return acc;
                }, new window1.DataTransfer())
            });
            else Object.defineProperty(event, dataTransferKey, {
                value: dataTransferValue
            });
        }
    });
    return event;
}
Object.keys(eventMap).forEach((key)=>{
    const { EventType, defaultInit } = eventMap[key];
    const eventName = key.toLowerCase();
    createEvent[key] = (node, init)=>createEvent(eventName, node, init, {
            EventType,
            defaultInit
        });
    fireEvent[key] = (node, init)=>fireEvent(node, createEvent[key](node, init));
}); // function written after some investigation here:
// https://github.com/facebook/react/issues/10135#issuecomment-401496776
function setNativeValue(element, value) {
    const { set: valueSetter } = Object.getOwnPropertyDescriptor(element, "value") || {};
    const prototype = Object.getPrototypeOf(element);
    const { set: prototypeValueSetter } = Object.getOwnPropertyDescriptor(prototype, "value") || {};
    if (prototypeValueSetter && valueSetter !== prototypeValueSetter) prototypeValueSetter.call(element, value);
    else {
        /* istanbul ignore if */ // eslint-disable-next-line no-lonely-if -- Can't be ignored by istanbul otherwise
        if (valueSetter) valueSetter.call(element, value);
        else throw new Error("The given element does not have a value setter");
    }
}
Object.keys(eventAliasMap).forEach((aliasKey)=>{
    const key = eventAliasMap[aliasKey];
    fireEvent[aliasKey] = function() {
        return fireEvent[key](...arguments);
    };
});
/* eslint complexity:["error", 9] */ // WARNING: `lz-string` only has a default export but statically we assume named exports are allowd
function unindent(string) {
    // remove white spaces first, to save a few bytes.
    // testing-playground will reformat on load any ways.
    return string.replace(/[ \t]*[\n][ \t]*/g, "\n");
}
function encode(value) {
    return (0, _lzStringDefault.default).compressToEncodedURIComponent(unindent(value));
}
function getPlaygroundUrl(markup) {
    return "https://testing-playground.com/#markup=" + encode(markup);
}
const debug = (element, maxLength, options)=>Array.isArray(element) ? element.forEach((el)=>logDOM(el, maxLength, options)) : logDOM(element, maxLength, options);
const logTestingPlaygroundURL = function(element) {
    if (element === void 0) element = getDocument().body;
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!element || !("innerHTML" in element)) {
        console.log("The element you're providing isn't a valid DOM element.");
        return;
    } // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!element.innerHTML) {
        console.log("The provided element doesn't have any children.");
        return;
    }
    const playgroundUrl = getPlaygroundUrl(element.innerHTML);
    console.log("Open this URL in your browser\n\n" + playgroundUrl);
    return playgroundUrl;
};
const initialValue = {
    debug,
    logTestingPlaygroundURL
};
const screen = typeof document !== "undefined" && document.body // eslint-disable-line @typescript-eslint/no-unnecessary-condition
 ? getQueriesForElement(document.body, queries, initialValue) : Object.keys(queries).reduce((helpers, key)=>{
    // `key` is for all intents and purposes the type of keyof `helpers`, which itself is the type of `initialValue` plus incoming properties from `queries`
    // if `Object.keys(something)` returned Array<keyof typeof something> this explicit type assertion would not be necessary
    // see https://stackoverflow.com/questions/55012174/why-doesnt-object-keys-return-a-keyof-type-in-typescript
    helpers[key] = ()=>{
        throw new TypeError("For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error");
    };
    return helpers;
}, initialValue);

},{"889d729cdad65251":"37VrC","pretty-format":"8HmzI","dom-accessibility-api":"4UfNo","aria-query":"6T0pp","lz-string":"abBjS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"37VrC":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"8HmzI":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.DEFAULT_OPTIONS = void 0;
exports.format = format;
exports.plugins = void 0;
var _ansiStyles = _interopRequireDefault(require("c3cd822a69f3df0e"));
var _collections = require("d9a1b6ebb1821b1f");
var _AsymmetricMatcher = _interopRequireDefault(require("af0f3ad9a34d5663"));
var _ConvertAnsi = _interopRequireDefault(require("90dc612791bfb26"));
var _DOMCollection = _interopRequireDefault(require("293e112ddbc09609"));
var _DOMElement = _interopRequireDefault(require("9447b2c27d768f55"));
var _Immutable = _interopRequireDefault(require("ae8c2df4c2b96959"));
var _ReactElement = _interopRequireDefault(require("eb7372e8250c5d6b"));
var _ReactTestComponent = _interopRequireDefault(require("b9c6bd6de9ca04c4"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /* eslint-disable local/ban-types-eventually */ const toString = Object.prototype.toString;
const toISOString = Date.prototype.toISOString;
const errorToString = Error.prototype.toString;
const regExpToString = RegExp.prototype.toString;
/**
 * Explicitly comparing typeof constructor to function avoids undefined as name
 * when mock identity-obj-proxy returns the key as the value for any key.
 */ const getConstructorName = (val)=>typeof val.constructor === "function" && val.constructor.name || "Object";
/* global window */ /** Is val is equal to global window object? Works even if it does not exist :) */ const isWindow = (val)=>typeof window !== "undefined" && val === window;
const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
const NEWLINE_REGEXP = /\n/gi;
class PrettyFormatPluginError extends Error {
    constructor(message, stack){
        super(message);
        this.stack = stack;
        this.name = this.constructor.name;
    }
}
function isToStringedArrayType(toStringed) {
    return toStringed === "[object Array]" || toStringed === "[object ArrayBuffer]" || toStringed === "[object DataView]" || toStringed === "[object Float32Array]" || toStringed === "[object Float64Array]" || toStringed === "[object Int8Array]" || toStringed === "[object Int16Array]" || toStringed === "[object Int32Array]" || toStringed === "[object Uint8Array]" || toStringed === "[object Uint8ClampedArray]" || toStringed === "[object Uint16Array]" || toStringed === "[object Uint32Array]";
}
function printNumber(val) {
    return Object.is(val, -0) ? "-0" : String(val);
}
function printBigInt(val) {
    return String(`${val}n`);
}
function printFunction(val, printFunctionName) {
    if (!printFunctionName) return "[Function]";
    return "[Function " + (val.name || "anonymous") + "]";
}
function printSymbol(val) {
    return String(val).replace(SYMBOL_REGEXP, "Symbol($1)");
}
function printError(val) {
    return "[" + errorToString.call(val) + "]";
}
/**
 * The first port of call for printing an object, handles most of the
 * data-types in JS.
 */ function printBasicValue(val, printFunctionName, escapeRegex, escapeString) {
    if (val === true || val === false) return "" + val;
    if (val === undefined) return "undefined";
    if (val === null) return "null";
    const typeOf = typeof val;
    if (typeOf === "number") return printNumber(val);
    if (typeOf === "bigint") return printBigInt(val);
    if (typeOf === "string") {
        if (escapeString) return '"' + val.replace(/"|\\/g, "\\$&") + '"';
        return '"' + val + '"';
    }
    if (typeOf === "function") return printFunction(val, printFunctionName);
    if (typeOf === "symbol") return printSymbol(val);
    const toStringed = toString.call(val);
    if (toStringed === "[object WeakMap]") return "WeakMap {}";
    if (toStringed === "[object WeakSet]") return "WeakSet {}";
    if (toStringed === "[object Function]" || toStringed === "[object GeneratorFunction]") return printFunction(val, printFunctionName);
    if (toStringed === "[object Symbol]") return printSymbol(val);
    if (toStringed === "[object Date]") return isNaN(+val) ? "Date { NaN }" : toISOString.call(val);
    if (toStringed === "[object Error]") return printError(val);
    if (toStringed === "[object RegExp]") {
        if (escapeRegex) // https://github.com/benjamingr/RegExp.escape/blob/main/polyfill.js
        return regExpToString.call(val).replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
        return regExpToString.call(val);
    }
    if (val instanceof Error) return printError(val);
    return null;
}
/**
 * Handles more complex objects ( such as objects with circular references.
 * maps and sets etc )
 */ function printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON) {
    if (refs.indexOf(val) !== -1) return "[Circular]";
    refs = refs.slice();
    refs.push(val);
    const hitMaxDepth = ++depth > config.maxDepth;
    const min = config.min;
    if (config.callToJSON && !hitMaxDepth && val.toJSON && typeof val.toJSON === "function" && !hasCalledToJSON) return printer(val.toJSON(), config, indentation, depth, refs, true);
    const toStringed = toString.call(val);
    if (toStringed === "[object Arguments]") return hitMaxDepth ? "[Arguments]" : (min ? "" : "Arguments ") + "[" + (0, _collections.printListItems)(val, config, indentation, depth, refs, printer) + "]";
    if (isToStringedArrayType(toStringed)) return hitMaxDepth ? "[" + val.constructor.name + "]" : (min ? "" : !config.printBasicPrototype && val.constructor.name === "Array" ? "" : val.constructor.name + " ") + "[" + (0, _collections.printListItems)(val, config, indentation, depth, refs, printer) + "]";
    if (toStringed === "[object Map]") return hitMaxDepth ? "[Map]" : "Map {" + (0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer, " => ") + "}";
    if (toStringed === "[object Set]") return hitMaxDepth ? "[Set]" : "Set {" + (0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer) + "}";
     // Avoid failure to serialize global window object in jsdom test environment.
    // For example, not even relevant if window is prop of React element.
    return hitMaxDepth || isWindow(val) ? "[" + getConstructorName(val) + "]" : (min ? "" : !config.printBasicPrototype && getConstructorName(val) === "Object" ? "" : getConstructorName(val) + " ") + "{" + (0, _collections.printObjectProperties)(val, config, indentation, depth, refs, printer) + "}";
}
function isNewPlugin(plugin) {
    return plugin.serialize != null;
}
function printPlugin(plugin, val, config, indentation, depth, refs) {
    let printed;
    try {
        printed = isNewPlugin(plugin) ? plugin.serialize(val, config, indentation, depth, refs, printer) : plugin.print(val, (valChild)=>printer(valChild, config, indentation, depth, refs), (str)=>{
            const indentationNext = indentation + config.indent;
            return indentationNext + str.replace(NEWLINE_REGEXP, "\n" + indentationNext);
        }, {
            edgeSpacing: config.spacingOuter,
            min: config.min,
            spacing: config.spacingInner
        }, config.colors);
    } catch (error) {
        throw new PrettyFormatPluginError(error.message, error.stack);
    }
    if (typeof printed !== "string") throw new Error(`pretty-format: Plugin must return type "string" but instead returned "${typeof printed}".`);
    return printed;
}
function findPlugin(plugins, val) {
    for(let p = 0; p < plugins.length; p++)try {
        if (plugins[p].test(val)) return plugins[p];
    } catch (error) {
        throw new PrettyFormatPluginError(error.message, error.stack);
    }
    return null;
}
function printer(val, config, indentation, depth, refs, hasCalledToJSON) {
    const plugin = findPlugin(config.plugins, val);
    if (plugin !== null) return printPlugin(plugin, val, config, indentation, depth, refs);
    const basicResult = printBasicValue(val, config.printFunctionName, config.escapeRegex, config.escapeString);
    if (basicResult !== null) return basicResult;
    return printComplexValue(val, config, indentation, depth, refs, hasCalledToJSON);
}
const DEFAULT_THEME = {
    comment: "gray",
    content: "reset",
    prop: "yellow",
    tag: "cyan",
    value: "green"
};
const DEFAULT_THEME_KEYS = Object.keys(DEFAULT_THEME);
const DEFAULT_OPTIONS = {
    callToJSON: true,
    compareKeys: undefined,
    escapeRegex: false,
    escapeString: true,
    highlight: false,
    indent: 2,
    maxDepth: Infinity,
    min: false,
    plugins: [],
    printBasicPrototype: true,
    printFunctionName: true,
    theme: DEFAULT_THEME
};
exports.DEFAULT_OPTIONS = DEFAULT_OPTIONS;
function validateOptions(options) {
    Object.keys(options).forEach((key)=>{
        if (!DEFAULT_OPTIONS.hasOwnProperty(key)) throw new Error(`pretty-format: Unknown option "${key}".`);
    });
    if (options.min && options.indent !== undefined && options.indent !== 0) throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
    if (options.theme !== undefined) {
        if (options.theme === null) throw new Error('pretty-format: Option "theme" must not be null.');
        if (typeof options.theme !== "object") throw new Error(`pretty-format: Option "theme" must be of type "object" but instead received "${typeof options.theme}".`);
    }
}
const getColorsHighlight = (options)=>DEFAULT_THEME_KEYS.reduce((colors, key)=>{
        const value = options.theme && options.theme[key] !== undefined ? options.theme[key] : DEFAULT_THEME[key];
        const color = value && _ansiStyles.default[value];
        if (color && typeof color.close === "string" && typeof color.open === "string") colors[key] = color;
        else throw new Error(`pretty-format: Option "theme" has a key "${key}" whose value "${value}" is undefined in ansi-styles.`);
        return colors;
    }, Object.create(null));
const getColorsEmpty = ()=>DEFAULT_THEME_KEYS.reduce((colors, key)=>{
        colors[key] = {
            close: "",
            open: ""
        };
        return colors;
    }, Object.create(null));
const getPrintFunctionName = (options)=>options && options.printFunctionName !== undefined ? options.printFunctionName : DEFAULT_OPTIONS.printFunctionName;
const getEscapeRegex = (options)=>options && options.escapeRegex !== undefined ? options.escapeRegex : DEFAULT_OPTIONS.escapeRegex;
const getEscapeString = (options)=>options && options.escapeString !== undefined ? options.escapeString : DEFAULT_OPTIONS.escapeString;
const getConfig = (options)=>{
    var _options$printBasicPr;
    return {
        callToJSON: options && options.callToJSON !== undefined ? options.callToJSON : DEFAULT_OPTIONS.callToJSON,
        colors: options && options.highlight ? getColorsHighlight(options) : getColorsEmpty(),
        compareKeys: options && typeof options.compareKeys === "function" ? options.compareKeys : DEFAULT_OPTIONS.compareKeys,
        escapeRegex: getEscapeRegex(options),
        escapeString: getEscapeString(options),
        indent: options && options.min ? "" : createIndent(options && options.indent !== undefined ? options.indent : DEFAULT_OPTIONS.indent),
        maxDepth: options && options.maxDepth !== undefined ? options.maxDepth : DEFAULT_OPTIONS.maxDepth,
        min: options && options.min !== undefined ? options.min : DEFAULT_OPTIONS.min,
        plugins: options && options.plugins !== undefined ? options.plugins : DEFAULT_OPTIONS.plugins,
        printBasicPrototype: (_options$printBasicPr = options === null || options === void 0 ? void 0 : options.printBasicPrototype) !== null && _options$printBasicPr !== void 0 ? _options$printBasicPr : true,
        printFunctionName: getPrintFunctionName(options),
        spacingInner: options && options.min ? " " : "\n",
        spacingOuter: options && options.min ? "" : "\n"
    };
};
function createIndent(indent) {
    return new Array(indent + 1).join(" ");
}
/**
 * Returns a presentation string of your `val` object
 * @param val any potential JavaScript object
 * @param options Custom settings
 */ function format(val, options) {
    if (options) {
        validateOptions(options);
        if (options.plugins) {
            const plugin = findPlugin(options.plugins, val);
            if (plugin !== null) return printPlugin(plugin, val, getConfig(options), "", 0, []);
        }
    }
    const basicResult = printBasicValue(val, getPrintFunctionName(options), getEscapeRegex(options), getEscapeString(options));
    if (basicResult !== null) return basicResult;
    return printComplexValue(val, getConfig(options), "", 0, []);
}
const plugins = {
    AsymmetricMatcher: _AsymmetricMatcher.default,
    ConvertAnsi: _ConvertAnsi.default,
    DOMCollection: _DOMCollection.default,
    DOMElement: _DOMElement.default,
    Immutable: _Immutable.default,
    ReactElement: _ReactElement.default,
    ReactTestComponent: _ReactTestComponent.default
};
exports.plugins = plugins;
var _default = format;
exports.default = _default;

},{"c3cd822a69f3df0e":"8slhu","d9a1b6ebb1821b1f":"gYlxw","af0f3ad9a34d5663":"9WInL","90dc612791bfb26":"9uYlR","293e112ddbc09609":"eg0Al","9447b2c27d768f55":"2Md2L","ae8c2df4c2b96959":"3PwRA","eb7372e8250c5d6b":"d2fte","b9c6bd6de9ca04c4":"koCn0"}],"8slhu":[function(require,module,exports) {
"use strict";
const ANSI_BACKGROUND_OFFSET = 10;
const wrapAnsi256 = (offset = 0)=>(code)=>`\u001B[${38 + offset};5;${code}m`;
const wrapAnsi16m = (offset = 0)=>(red, green, blue)=>`\u001B[${38 + offset};2;${red};${green};${blue}m`;
function assembleStyles() {
    const codes = new Map();
    const styles = {
        modifier: {
            reset: [
                0,
                0
            ],
            // 21 isn't widely supported and 22 does the same thing
            bold: [
                1,
                22
            ],
            dim: [
                2,
                22
            ],
            italic: [
                3,
                23
            ],
            underline: [
                4,
                24
            ],
            overline: [
                53,
                55
            ],
            inverse: [
                7,
                27
            ],
            hidden: [
                8,
                28
            ],
            strikethrough: [
                9,
                29
            ]
        },
        color: {
            black: [
                30,
                39
            ],
            red: [
                31,
                39
            ],
            green: [
                32,
                39
            ],
            yellow: [
                33,
                39
            ],
            blue: [
                34,
                39
            ],
            magenta: [
                35,
                39
            ],
            cyan: [
                36,
                39
            ],
            white: [
                37,
                39
            ],
            // Bright color
            blackBright: [
                90,
                39
            ],
            redBright: [
                91,
                39
            ],
            greenBright: [
                92,
                39
            ],
            yellowBright: [
                93,
                39
            ],
            blueBright: [
                94,
                39
            ],
            magentaBright: [
                95,
                39
            ],
            cyanBright: [
                96,
                39
            ],
            whiteBright: [
                97,
                39
            ]
        },
        bgColor: {
            bgBlack: [
                40,
                49
            ],
            bgRed: [
                41,
                49
            ],
            bgGreen: [
                42,
                49
            ],
            bgYellow: [
                43,
                49
            ],
            bgBlue: [
                44,
                49
            ],
            bgMagenta: [
                45,
                49
            ],
            bgCyan: [
                46,
                49
            ],
            bgWhite: [
                47,
                49
            ],
            // Bright color
            bgBlackBright: [
                100,
                49
            ],
            bgRedBright: [
                101,
                49
            ],
            bgGreenBright: [
                102,
                49
            ],
            bgYellowBright: [
                103,
                49
            ],
            bgBlueBright: [
                104,
                49
            ],
            bgMagentaBright: [
                105,
                49
            ],
            bgCyanBright: [
                106,
                49
            ],
            bgWhiteBright: [
                107,
                49
            ]
        }
    };
    // Alias bright black as gray (and grey)
    styles.color.gray = styles.color.blackBright;
    styles.bgColor.bgGray = styles.bgColor.bgBlackBright;
    styles.color.grey = styles.color.blackBright;
    styles.bgColor.bgGrey = styles.bgColor.bgBlackBright;
    for (const [groupName, group] of Object.entries(styles)){
        for (const [styleName, style] of Object.entries(group)){
            styles[styleName] = {
                open: `\u001B[${style[0]}m`,
                close: `\u001B[${style[1]}m`
            };
            group[styleName] = styles[styleName];
            codes.set(style[0], style[1]);
        }
        Object.defineProperty(styles, groupName, {
            value: group,
            enumerable: false
        });
    }
    Object.defineProperty(styles, "codes", {
        value: codes,
        enumerable: false
    });
    styles.color.close = "\x1b[39m";
    styles.bgColor.close = "\x1b[49m";
    styles.color.ansi256 = wrapAnsi256();
    styles.color.ansi16m = wrapAnsi16m();
    styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
    styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
    // From https://github.com/Qix-/color-convert/blob/3f0e0d4e92e235796ccb17f6e85c72094a651f49/conversions.js
    Object.defineProperties(styles, {
        rgbToAnsi256: {
            value: (red, green, blue)=>{
                // We use the extended greyscale palette here, with the exception of
                // black and white. normal palette only has 4 greyscale shades.
                if (red === green && green === blue) {
                    if (red < 8) return 16;
                    if (red > 248) return 231;
                    return Math.round((red - 8) / 247 * 24) + 232;
                }
                return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
            },
            enumerable: false
        },
        hexToRgb: {
            value: (hex)=>{
                const matches = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(hex.toString(16));
                if (!matches) return [
                    0,
                    0,
                    0
                ];
                let { colorString } = matches.groups;
                if (colorString.length === 3) colorString = colorString.split("").map((character)=>character + character).join("");
                const integer = Number.parseInt(colorString, 16);
                return [
                    integer >> 16 & 0xFF,
                    integer >> 8 & 0xFF,
                    integer & 0xFF
                ];
            },
            enumerable: false
        },
        hexToAnsi256: {
            value: (hex)=>styles.rgbToAnsi256(...styles.hexToRgb(hex)),
            enumerable: false
        }
    });
    return styles;
}
// Make the export immutable
Object.defineProperty(module, "exports", {
    enumerable: true,
    get: assembleStyles
});

},{}],"gYlxw":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.printIteratorEntries = printIteratorEntries;
exports.printIteratorValues = printIteratorValues;
exports.printListItems = printListItems;
exports.printObjectProperties = printObjectProperties;
/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */ const getKeysOfEnumerableProperties = (object, compareKeys)=>{
    const keys = Object.keys(object).sort(compareKeys);
    if (Object.getOwnPropertySymbols) Object.getOwnPropertySymbols(object).forEach((symbol)=>{
        if (Object.getOwnPropertyDescriptor(object, symbol).enumerable) keys.push(symbol);
    });
    return keys;
};
/**
 * Return entries (for example, of a map)
 * with spacing, indentation, and comma
 * without surrounding punctuation (for example, braces)
 */ function printIteratorEntries(iterator, config, indentation, depth, refs, printer, // What a distracting diff if you change a data structure to/from
// ECMAScript Object or Immutable.Map/OrderedMap which use the default.
separator = ": ") {
    let result = "";
    let current = iterator.next();
    if (!current.done) {
        result += config.spacingOuter;
        const indentationNext = indentation + config.indent;
        while(!current.done){
            const name = printer(current.value[0], config, indentationNext, depth, refs);
            const value = printer(current.value[1], config, indentationNext, depth, refs);
            result += indentationNext + name + separator + value;
            current = iterator.next();
            if (!current.done) result += "," + config.spacingInner;
            else if (!config.min) result += ",";
        }
        result += config.spacingOuter + indentation;
    }
    return result;
}
/**
 * Return values (for example, of a set)
 * with spacing, indentation, and comma
 * without surrounding punctuation (braces or brackets)
 */ function printIteratorValues(iterator, config, indentation, depth, refs, printer) {
    let result = "";
    let current = iterator.next();
    if (!current.done) {
        result += config.spacingOuter;
        const indentationNext = indentation + config.indent;
        while(!current.done){
            result += indentationNext + printer(current.value, config, indentationNext, depth, refs);
            current = iterator.next();
            if (!current.done) result += "," + config.spacingInner;
            else if (!config.min) result += ",";
        }
        result += config.spacingOuter + indentation;
    }
    return result;
}
/**
 * Return items (for example, of an array)
 * with spacing, indentation, and comma
 * without surrounding punctuation (for example, brackets)
 **/ function printListItems(list, config, indentation, depth, refs, printer) {
    let result = "";
    if (list.length) {
        result += config.spacingOuter;
        const indentationNext = indentation + config.indent;
        for(let i = 0; i < list.length; i++){
            result += indentationNext;
            if (i in list) result += printer(list[i], config, indentationNext, depth, refs);
            if (i < list.length - 1) result += "," + config.spacingInner;
            else if (!config.min) result += ",";
        }
        result += config.spacingOuter + indentation;
    }
    return result;
}
/**
 * Return properties of an object
 * with spacing, indentation, and comma
 * without surrounding punctuation (for example, braces)
 */ function printObjectProperties(val, config, indentation, depth, refs, printer) {
    let result = "";
    const keys = getKeysOfEnumerableProperties(val, config.compareKeys);
    if (keys.length) {
        result += config.spacingOuter;
        const indentationNext = indentation + config.indent;
        for(let i = 0; i < keys.length; i++){
            const key = keys[i];
            const name = printer(key, config, indentationNext, depth, refs);
            const value = printer(val[key], config, indentationNext, depth, refs);
            result += indentationNext + name + ": " + value;
            if (i < keys.length - 1) result += "," + config.spacingInner;
            else if (!config.min) result += ",";
        }
        result += config.spacingOuter + indentation;
    }
    return result;
}

},{}],"9WInL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.test = exports.serialize = exports.default = void 0;
var _collections = require("d8d8fe11a3f4970a");
var global = function() {
    if (typeof globalThis !== "undefined") return globalThis;
    else if (typeof global !== "undefined") return global;
    else if (typeof self !== "undefined") return self;
    else if (typeof window !== "undefined") return window;
    else return Function("return this")();
}();
var Symbol = global["jest-symbol-do-not-touch"] || global.Symbol;
const asymmetricMatcher = typeof Symbol === "function" && Symbol.for ? Symbol.for("jest.asymmetricMatcher") : 0x1357a5;
const SPACE = " ";
const serialize = (val, config, indentation, depth, refs, printer)=>{
    const stringedValue = val.toString();
    if (stringedValue === "ArrayContaining" || stringedValue === "ArrayNotContaining") {
        if (++depth > config.maxDepth) return "[" + stringedValue + "]";
        return stringedValue + SPACE + "[" + (0, _collections.printListItems)(val.sample, config, indentation, depth, refs, printer) + "]";
    }
    if (stringedValue === "ObjectContaining" || stringedValue === "ObjectNotContaining") {
        if (++depth > config.maxDepth) return "[" + stringedValue + "]";
        return stringedValue + SPACE + "{" + (0, _collections.printObjectProperties)(val.sample, config, indentation, depth, refs, printer) + "}";
    }
    if (stringedValue === "StringMatching" || stringedValue === "StringNotMatching") return stringedValue + SPACE + printer(val.sample, config, indentation, depth, refs);
    if (stringedValue === "StringContaining" || stringedValue === "StringNotContaining") return stringedValue + SPACE + printer(val.sample, config, indentation, depth, refs);
    return val.toAsymmetricMatcher();
};
exports.serialize = serialize;
const test = (val)=>val && val.$$typeof === asymmetricMatcher;
exports.test = test;
const plugin = {
    serialize,
    test
};
var _default = plugin;
exports.default = _default;

},{"d8d8fe11a3f4970a":"gYlxw"}],"9uYlR":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.test = exports.serialize = exports.default = void 0;
var _ansiRegex = _interopRequireDefault(require("8cfab43de774f05f"));
var _ansiStyles = _interopRequireDefault(require("4d689a256f69daa"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const toHumanReadableAnsi = (text)=>text.replace((0, _ansiRegex.default)(), (match)=>{
        switch(match){
            case _ansiStyles.default.red.close:
            case _ansiStyles.default.green.close:
            case _ansiStyles.default.cyan.close:
            case _ansiStyles.default.gray.close:
            case _ansiStyles.default.white.close:
            case _ansiStyles.default.yellow.close:
            case _ansiStyles.default.bgRed.close:
            case _ansiStyles.default.bgGreen.close:
            case _ansiStyles.default.bgYellow.close:
            case _ansiStyles.default.inverse.close:
            case _ansiStyles.default.dim.close:
            case _ansiStyles.default.bold.close:
            case _ansiStyles.default.reset.open:
            case _ansiStyles.default.reset.close:
                return "</>";
            case _ansiStyles.default.red.open:
                return "<red>";
            case _ansiStyles.default.green.open:
                return "<green>";
            case _ansiStyles.default.cyan.open:
                return "<cyan>";
            case _ansiStyles.default.gray.open:
                return "<gray>";
            case _ansiStyles.default.white.open:
                return "<white>";
            case _ansiStyles.default.yellow.open:
                return "<yellow>";
            case _ansiStyles.default.bgRed.open:
                return "<bgRed>";
            case _ansiStyles.default.bgGreen.open:
                return "<bgGreen>";
            case _ansiStyles.default.bgYellow.open:
                return "<bgYellow>";
            case _ansiStyles.default.inverse.open:
                return "<inverse>";
            case _ansiStyles.default.dim.open:
                return "<dim>";
            case _ansiStyles.default.bold.open:
                return "<bold>";
            default:
                return "";
        }
    });
const test = (val)=>typeof val === "string" && !!val.match((0, _ansiRegex.default)());
exports.test = test;
const serialize = (val, config, indentation, depth, refs, printer)=>printer(toHumanReadableAnsi(val), config, indentation, depth, refs);
exports.serialize = serialize;
const plugin = {
    serialize,
    test
};
var _default = plugin;
exports.default = _default;

},{"8cfab43de774f05f":"2AUEn","4d689a256f69daa":"8slhu"}],"2AUEn":[function(require,module,exports) {
"use strict";
module.exports = ({ onlyFirst = false } = {})=>{
    const pattern = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
    ].join("|");
    return new RegExp(pattern, onlyFirst ? undefined : "g");
};

},{}],"eg0Al":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.test = exports.serialize = exports.default = void 0;
var _collections = require("7ca297780fa075ec");
/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ /* eslint-disable local/ban-types-eventually */ const SPACE = " ";
const OBJECT_NAMES = [
    "DOMStringMap",
    "NamedNodeMap"
];
const ARRAY_REGEXP = /^(HTML\w*Collection|NodeList)$/;
const testName = (name)=>OBJECT_NAMES.indexOf(name) !== -1 || ARRAY_REGEXP.test(name);
const test = (val)=>val && val.constructor && !!val.constructor.name && testName(val.constructor.name);
exports.test = test;
const isNamedNodeMap = (collection)=>collection.constructor.name === "NamedNodeMap";
const serialize = (collection, config, indentation, depth, refs, printer)=>{
    const name = collection.constructor.name;
    if (++depth > config.maxDepth) return "[" + name + "]";
    return (config.min ? "" : name + SPACE) + (OBJECT_NAMES.indexOf(name) !== -1 ? "{" + (0, _collections.printObjectProperties)(isNamedNodeMap(collection) ? Array.from(collection).reduce((props, attribute)=>{
        props[attribute.name] = attribute.value;
        return props;
    }, {}) : {
        ...collection
    }, config, indentation, depth, refs, printer) + "}" : "[" + (0, _collections.printListItems)(Array.from(collection), config, indentation, depth, refs, printer) + "]");
};
exports.serialize = serialize;
const plugin = {
    serialize,
    test
};
var _default = plugin;
exports.default = _default;

},{"7ca297780fa075ec":"gYlxw"}],"2Md2L":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.test = exports.serialize = exports.default = void 0;
var _markup = require("1bd3cebdd5dcad8b");
/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ const ELEMENT_NODE = 1;
const TEXT_NODE = 3;
const COMMENT_NODE = 8;
const FRAGMENT_NODE = 11;
const ELEMENT_REGEXP = /^((HTML|SVG)\w*)?Element$/;
const testHasAttribute = (val)=>{
    try {
        return typeof val.hasAttribute === "function" && val.hasAttribute("is");
    } catch  {
        return false;
    }
};
const testNode = (val)=>{
    const constructorName = val.constructor.name;
    const { nodeType, tagName } = val;
    const isCustomElement = typeof tagName === "string" && tagName.includes("-") || testHasAttribute(val);
    return nodeType === ELEMENT_NODE && (ELEMENT_REGEXP.test(constructorName) || isCustomElement) || nodeType === TEXT_NODE && constructorName === "Text" || nodeType === COMMENT_NODE && constructorName === "Comment" || nodeType === FRAGMENT_NODE && constructorName === "DocumentFragment";
};
const test = (val)=>{
    var _val$constructor;
    return (val === null || val === void 0 ? void 0 : (_val$constructor = val.constructor) === null || _val$constructor === void 0 ? void 0 : _val$constructor.name) && testNode(val);
};
exports.test = test;
function nodeIsText(node) {
    return node.nodeType === TEXT_NODE;
}
function nodeIsComment(node) {
    return node.nodeType === COMMENT_NODE;
}
function nodeIsFragment(node) {
    return node.nodeType === FRAGMENT_NODE;
}
const serialize = (node, config, indentation, depth, refs, printer)=>{
    if (nodeIsText(node)) return (0, _markup.printText)(node.data, config);
    if (nodeIsComment(node)) return (0, _markup.printComment)(node.data, config);
    const type = nodeIsFragment(node) ? "DocumentFragment" : node.tagName.toLowerCase();
    if (++depth > config.maxDepth) return (0, _markup.printElementAsLeaf)(type, config);
    return (0, _markup.printElement)(type, (0, _markup.printProps)(nodeIsFragment(node) ? [] : Array.from(node.attributes).map((attr)=>attr.name).sort(), nodeIsFragment(node) ? {} : Array.from(node.attributes).reduce((props, attribute)=>{
        props[attribute.name] = attribute.value;
        return props;
    }, {}), config, indentation + config.indent, depth, refs, printer), (0, _markup.printChildren)(Array.prototype.slice.call(node.childNodes || node.children), config, indentation + config.indent, depth, refs, printer), config, indentation);
};
exports.serialize = serialize;
const plugin = {
    serialize,
    test
};
var _default = plugin;
exports.default = _default;

},{"1bd3cebdd5dcad8b":"4wdid"}],"4wdid":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.printText = exports.printProps = exports.printElementAsLeaf = exports.printElement = exports.printComment = exports.printChildren = void 0;
var _escapeHTML = _interopRequireDefault(require("34a702b8346ee659"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Return empty string if keys is empty.
const printProps = (keys, props, config, indentation, depth, refs, printer)=>{
    const indentationNext = indentation + config.indent;
    const colors = config.colors;
    return keys.map((key)=>{
        const value = props[key];
        let printed = printer(value, config, indentationNext, depth, refs);
        if (typeof value !== "string") {
            if (printed.indexOf("\n") !== -1) printed = config.spacingOuter + indentationNext + printed + config.spacingOuter + indentation;
            printed = "{" + printed + "}";
        }
        return config.spacingInner + indentation + colors.prop.open + key + colors.prop.close + "=" + colors.value.open + printed + colors.value.close;
    }).join("");
}; // Return empty string if children is empty.
exports.printProps = printProps;
const printChildren = (children, config, indentation, depth, refs, printer)=>children.map((child)=>config.spacingOuter + indentation + (typeof child === "string" ? printText(child, config) : printer(child, config, indentation, depth, refs))).join("");
exports.printChildren = printChildren;
const printText = (text, config)=>{
    const contentColor = config.colors.content;
    return contentColor.open + (0, _escapeHTML.default)(text) + contentColor.close;
};
exports.printText = printText;
const printComment = (comment, config)=>{
    const commentColor = config.colors.comment;
    return commentColor.open + "<!--" + (0, _escapeHTML.default)(comment) + "-->" + commentColor.close;
}; // Separate the functions to format props, children, and element,
// so a plugin could override a particular function, if needed.
// Too bad, so sad: the traditional (but unnecessary) space
// in a self-closing tagColor requires a second test of printedProps.
exports.printComment = printComment;
const printElement = (type, printedProps, printedChildren, config, indentation)=>{
    const tagColor = config.colors.tag;
    return tagColor.open + "<" + type + (printedProps && tagColor.close + printedProps + config.spacingOuter + indentation + tagColor.open) + (printedChildren ? ">" + tagColor.close + printedChildren + config.spacingOuter + indentation + tagColor.open + "</" + type : (printedProps && !config.min ? "" : " ") + "/") + ">" + tagColor.close;
};
exports.printElement = printElement;
const printElementAsLeaf = (type, config)=>{
    const tagColor = config.colors.tag;
    return tagColor.open + "<" + type + tagColor.close + " …" + tagColor.open + " />" + tagColor.close;
};
exports.printElementAsLeaf = printElementAsLeaf;

},{"34a702b8346ee659":"lVoX4"}],"lVoX4":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = escapeHTML;
/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function escapeHTML(str) {
    return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

},{}],"3PwRA":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.test = exports.serialize = exports.default = void 0;
var _collections = require("2c4675da33efa526");
/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // SENTINEL constants are from https://github.com/facebook/immutable-js
const IS_ITERABLE_SENTINEL = "@@__IMMUTABLE_ITERABLE__@@";
const IS_LIST_SENTINEL = "@@__IMMUTABLE_LIST__@@";
const IS_KEYED_SENTINEL = "@@__IMMUTABLE_KEYED__@@";
const IS_MAP_SENTINEL = "@@__IMMUTABLE_MAP__@@";
const IS_ORDERED_SENTINEL = "@@__IMMUTABLE_ORDERED__@@";
const IS_RECORD_SENTINEL = "@@__IMMUTABLE_RECORD__@@"; // immutable v4
const IS_SEQ_SENTINEL = "@@__IMMUTABLE_SEQ__@@";
const IS_SET_SENTINEL = "@@__IMMUTABLE_SET__@@";
const IS_STACK_SENTINEL = "@@__IMMUTABLE_STACK__@@";
const getImmutableName = (name)=>"Immutable." + name;
const printAsLeaf = (name)=>"[" + name + "]";
const SPACE = " ";
const LAZY = "…"; // Seq is lazy if it calls a method like filter
const printImmutableEntries = (val, config, indentation, depth, refs, printer, type)=>++depth > config.maxDepth ? printAsLeaf(getImmutableName(type)) : getImmutableName(type) + SPACE + "{" + (0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer) + "}"; // Record has an entries method because it is a collection in immutable v3.
// Return an iterator for Immutable Record from version v3 or v4.
function getRecordEntries(val) {
    let i = 0;
    return {
        next () {
            if (i < val._keys.length) {
                const key = val._keys[i++];
                return {
                    done: false,
                    value: [
                        key,
                        val.get(key)
                    ]
                };
            }
            return {
                done: true,
                value: undefined
            };
        }
    };
}
const printImmutableRecord = (val, config, indentation, depth, refs, printer)=>{
    // _name property is defined only for an Immutable Record instance
    // which was constructed with a second optional descriptive name arg
    const name = getImmutableName(val._name || "Record");
    return ++depth > config.maxDepth ? printAsLeaf(name) : name + SPACE + "{" + (0, _collections.printIteratorEntries)(getRecordEntries(val), config, indentation, depth, refs, printer) + "}";
};
const printImmutableSeq = (val, config, indentation, depth, refs, printer)=>{
    const name = getImmutableName("Seq");
    if (++depth > config.maxDepth) return printAsLeaf(name);
    if (val[IS_KEYED_SENTINEL]) return name + SPACE + "{" + // from Immutable collection of entries or from ECMAScript object
    (val._iter || val._object ? (0, _collections.printIteratorEntries)(val.entries(), config, indentation, depth, refs, printer) : LAZY) + "}";
    return name + SPACE + "[" + (val._iter || // from Immutable collection of values
    val._array || // from ECMAScript array
    val._collection || // from ECMAScript collection in immutable v4
    val._iterable // from ECMAScript collection in immutable v3
     ? (0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer) : LAZY) + "]";
};
const printImmutableValues = (val, config, indentation, depth, refs, printer, type)=>++depth > config.maxDepth ? printAsLeaf(getImmutableName(type)) : getImmutableName(type) + SPACE + "[" + (0, _collections.printIteratorValues)(val.values(), config, indentation, depth, refs, printer) + "]";
const serialize = (val, config, indentation, depth, refs, printer)=>{
    if (val[IS_MAP_SENTINEL]) return printImmutableEntries(val, config, indentation, depth, refs, printer, val[IS_ORDERED_SENTINEL] ? "OrderedMap" : "Map");
    if (val[IS_LIST_SENTINEL]) return printImmutableValues(val, config, indentation, depth, refs, printer, "List");
    if (val[IS_SET_SENTINEL]) return printImmutableValues(val, config, indentation, depth, refs, printer, val[IS_ORDERED_SENTINEL] ? "OrderedSet" : "Set");
    if (val[IS_STACK_SENTINEL]) return printImmutableValues(val, config, indentation, depth, refs, printer, "Stack");
    if (val[IS_SEQ_SENTINEL]) return printImmutableSeq(val, config, indentation, depth, refs, printer);
     // For compatibility with immutable v3 and v4, let record be the default.
    return printImmutableRecord(val, config, indentation, depth, refs, printer);
}; // Explicitly comparing sentinel properties to true avoids false positive
// when mock identity-obj-proxy returns the key as the value for any key.
exports.serialize = serialize;
const test = (val)=>val && (val[IS_ITERABLE_SENTINEL] === true || val[IS_RECORD_SENTINEL] === true);
exports.test = test;
const plugin = {
    serialize,
    test
};
var _default = plugin;
exports.default = _default;

},{"2c4675da33efa526":"gYlxw"}],"d2fte":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.test = exports.serialize = exports.default = void 0;
var ReactIs = _interopRequireWildcard(require("7dfc58b4c77e39f7"));
var _markup = require("16daabd22afedc51");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj)if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
        else newObj[key] = obj[key];
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Given element.props.children, or subtree during recursive traversal,
// return flattened array of children.
const getChildren = (arg, children = [])=>{
    if (Array.isArray(arg)) arg.forEach((item)=>{
        getChildren(item, children);
    });
    else if (arg != null && arg !== false) children.push(arg);
    return children;
};
const getType = (element)=>{
    const type = element.type;
    if (typeof type === "string") return type;
    if (typeof type === "function") return type.displayName || type.name || "Unknown";
    if (ReactIs.isFragment(element)) return "React.Fragment";
    if (ReactIs.isSuspense(element)) return "React.Suspense";
    if (typeof type === "object" && type !== null) {
        if (ReactIs.isContextProvider(element)) return "Context.Provider";
        if (ReactIs.isContextConsumer(element)) return "Context.Consumer";
        if (ReactIs.isForwardRef(element)) {
            if (type.displayName) return type.displayName;
            const functionName = type.render.displayName || type.render.name || "";
            return functionName !== "" ? "ForwardRef(" + functionName + ")" : "ForwardRef";
        }
        if (ReactIs.isMemo(element)) {
            const functionName = type.displayName || type.type.displayName || type.type.name || "";
            return functionName !== "" ? "Memo(" + functionName + ")" : "Memo";
        }
    }
    return "UNDEFINED";
};
const getPropKeys = (element)=>{
    const { props } = element;
    return Object.keys(props).filter((key)=>key !== "children" && props[key] !== undefined).sort();
};
const serialize = (element, config, indentation, depth, refs, printer)=>++depth > config.maxDepth ? (0, _markup.printElementAsLeaf)(getType(element), config) : (0, _markup.printElement)(getType(element), (0, _markup.printProps)(getPropKeys(element), element.props, config, indentation + config.indent, depth, refs, printer), (0, _markup.printChildren)(getChildren(element.props.children), config, indentation + config.indent, depth, refs, printer), config, indentation);
exports.serialize = serialize;
const test = (val)=>val != null && ReactIs.isElement(val);
exports.test = test;
const plugin = {
    serialize,
    test
};
var _default = plugin;
exports.default = _default;

},{"7dfc58b4c77e39f7":"foMEF","16daabd22afedc51":"4wdid"}],"foMEF":[function(require,module,exports) {
"use strict";
module.exports = require("4b0ceaf448a09efa");

},{"4b0ceaf448a09efa":"e1ojy"}],"e1ojy":[function(require,module,exports) {
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    "use strict";
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 0xeac7;
    var REACT_PORTAL_TYPE = 0xeaca;
    var REACT_FRAGMENT_TYPE = 0xeacb;
    var REACT_STRICT_MODE_TYPE = 0xeacc;
    var REACT_PROFILER_TYPE = 0xead2;
    var REACT_PROVIDER_TYPE = 0xeacd;
    var REACT_CONTEXT_TYPE = 0xeace;
    var REACT_FORWARD_REF_TYPE = 0xead0;
    var REACT_SUSPENSE_TYPE = 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = 0xead8;
    var REACT_MEMO_TYPE = 0xead3;
    var REACT_LAZY_TYPE = 0xead4;
    var REACT_BLOCK_TYPE = 0xead9;
    var REACT_SERVER_BLOCK_TYPE = 0xeada;
    var REACT_FUNDAMENTAL_TYPE = 0xead5;
    var REACT_SCOPE_TYPE = 0xead7;
    var REACT_OPAQUE_ID_TYPE = 0xeae0;
    var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
    var REACT_OFFSCREEN_TYPE = 0xeae2;
    var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;
    if (typeof Symbol === "function" && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor("react.element");
        REACT_PORTAL_TYPE = symbolFor("react.portal");
        REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
        REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
        REACT_PROFILER_TYPE = symbolFor("react.profiler");
        REACT_PROVIDER_TYPE = symbolFor("react.provider");
        REACT_CONTEXT_TYPE = symbolFor("react.context");
        REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
        REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
        REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
        REACT_MEMO_TYPE = symbolFor("react.memo");
        REACT_LAZY_TYPE = symbolFor("react.lazy");
        REACT_BLOCK_TYPE = symbolFor("react.block");
        REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
        REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
        REACT_SCOPE_TYPE = symbolFor("react.scope");
        REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
        REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
        REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
    }
    // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.
    var enableScopeAPI = false; // Experimental Create Event Handle API.
    function isValidElementType(type) {
        if (typeof type === "string" || typeof type === "function") return true;
         // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) return true;
        if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) return true;
        }
        return false;
    }
    function typeOf(object) {
        if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch($$typeof){
                case REACT_ELEMENT_TYPE:
                    var type = object.type;
                    switch(type){
                        case REACT_FRAGMENT_TYPE:
                        case REACT_PROFILER_TYPE:
                        case REACT_STRICT_MODE_TYPE:
                        case REACT_SUSPENSE_TYPE:
                        case REACT_SUSPENSE_LIST_TYPE:
                            return type;
                        default:
                            var $$typeofType = type && type.$$typeof;
                            switch($$typeofType){
                                case REACT_CONTEXT_TYPE:
                                case REACT_FORWARD_REF_TYPE:
                                case REACT_LAZY_TYPE:
                                case REACT_MEMO_TYPE:
                                case REACT_PROVIDER_TYPE:
                                    return $$typeofType;
                                default:
                                    return $$typeof;
                            }
                    }
                case REACT_PORTAL_TYPE:
                    return $$typeof;
            }
        }
        return undefined;
    }
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false;
    var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated
    function isAsyncMode(object) {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
            hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint
            console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
        }
        return false;
    }
    function isConcurrentMode(object) {
        if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
            hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint
            console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
        }
        return false;
    }
    function isContextConsumer(object) {
        return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
        return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
        return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
        return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
        return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
        return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
        return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
        return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
        return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
        return typeOf(object) === REACT_SUSPENSE_TYPE;
    }
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
})();

},{}],"koCn0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.test = exports.serialize = exports.default = void 0;
var _markup = require("6e4b3a7fb6733a97");
var global = function() {
    if (typeof globalThis !== "undefined") return globalThis;
    else if (typeof global !== "undefined") return global;
    else if (typeof self !== "undefined") return self;
    else if (typeof window !== "undefined") return window;
    else return Function("return this")();
}();
var Symbol = global["jest-symbol-do-not-touch"] || global.Symbol;
const testSymbol = typeof Symbol === "function" && Symbol.for ? Symbol.for("react.test.json") : 0xea71357;
const getPropKeys = (object)=>{
    const { props } = object;
    return props ? Object.keys(props).filter((key)=>props[key] !== undefined).sort() : [];
};
const serialize = (object, config, indentation, depth, refs, printer)=>++depth > config.maxDepth ? (0, _markup.printElementAsLeaf)(object.type, config) : (0, _markup.printElement)(object.type, object.props ? (0, _markup.printProps)(getPropKeys(object), object.props, config, indentation + config.indent, depth, refs, printer) : "", object.children ? (0, _markup.printChildren)(object.children, config, indentation + config.indent, depth, refs, printer) : "", config, indentation);
exports.serialize = serialize;
const test = (val)=>val && val.$$typeof === testSymbol;
exports.test = test;
const plugin = {
    serialize,
    test
};
var _default = plugin;
exports.default = _default;

},{"6e4b3a7fb6733a97":"4wdid"}],"4UfNo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "computeAccessibleDescription", ()=>(0, _accessibleDescriptionMjs.computeAccessibleDescription));
parcelHelpers.export(exports, "computeAccessibleName", ()=>(0, _accessibleNameMjs.computeAccessibleName));
parcelHelpers.export(exports, "getRole", ()=>(0, _getRoleMjsDefault.default));
var _accessibleDescriptionMjs = require("./accessible-description.mjs");
var _accessibleNameMjs = require("./accessible-name.mjs");
var _getRoleMjs = require("./getRole.mjs");
var _getRoleMjsDefault = parcelHelpers.interopDefault(_getRoleMjs);
var _isInaccessibleMjs = require("./is-inaccessible.mjs");
parcelHelpers.exportAll(_isInaccessibleMjs, exports);

},{"./accessible-description.mjs":"edwLt","./accessible-name.mjs":"5rDyG","./getRole.mjs":"8cydj","./is-inaccessible.mjs":"0hf5v","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"edwLt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * @param root
 * @param options
 * @returns
 */ parcelHelpers.export(exports, "computeAccessibleDescription", ()=>computeAccessibleDescription);
var _accessibleNameAndDescriptionMjs = require("./accessible-name-and-description.mjs");
var _utilMjs = require("./util.mjs");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function computeAccessibleDescription(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var description = (0, _utilMjs.queryIdRefs)(root, "aria-describedby").map(function(element) {
        return (0, _accessibleNameAndDescriptionMjs.computeTextAlternative)(element, _objectSpread(_objectSpread({}, options), {}, {
            compute: "description"
        }));
    }).join(" "); // TODO: Technically we need to make sure that node wasn't used for the accessible name
    //       This causes `description_1.0_combobox-focusable-manual` to fail
    //
    // https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation
    // says for so many elements to use the `title` that we assume all elements are considered
    if (description === "") {
        var title = root.getAttribute("title");
        description = title === null ? "" : title;
    }
    return description;
}

},{"./accessible-name-and-description.mjs":"2Yp99","./util.mjs":"fjORF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Yp99":[function(require,module,exports) {
/**
 * implements https://w3c.github.io/accname/
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * implements https://w3c.github.io/accname/#mapping_additional_nd_te
 * @param root
 * @param options
 * @returns
 */ parcelHelpers.export(exports, "computeTextAlternative", ()=>computeTextAlternative);
var _arrayFromMjs = require("./polyfills/array.from.mjs");
var _arrayFromMjsDefault = parcelHelpers.interopDefault(_arrayFromMjs);
var _setLikeMjs = require("./polyfills/SetLike.mjs");
var _setLikeMjsDefault = parcelHelpers.interopDefault(_setLikeMjs);
var _utilMjs = require("./util.mjs");
/**
 *  A string of characters where all carriage returns, newlines, tabs, and form-feeds are replaced with a single space, and multiple spaces are reduced to a single space. The string contains only character data; it does not contain any markup.
 */ /**
 *
 * @param {string} string -
 * @returns {FlatString} -
 */ function asFlatString(s) {
    return s.trim().replace(/\s\s+/g, " ");
}
/**
 *
 * @param node -
 * @param options - These are not optional to prevent accidentally calling it without options in `computeAccessibleName`
 * @returns {boolean} -
 */ function isHidden(node, getComputedStyleImplementation) {
    if (!(0, _utilMjs.isElement)(node)) return false;
    if (node.hasAttribute("hidden") || node.getAttribute("aria-hidden") === "true") return true;
    var style = getComputedStyleImplementation(node);
    return style.getPropertyValue("display") === "none" || style.getPropertyValue("visibility") === "hidden";
}
/**
 * @param {Node} node -
 * @returns {boolean} - As defined in step 2E of https://w3c.github.io/accname/#mapping_additional_nd_te
 */ function isControl(node) {
    return (0, _utilMjs.hasAnyConcreteRoles)(node, [
        "button",
        "combobox",
        "listbox",
        "textbox"
    ]) || hasAbstractRole(node, "range");
}
function hasAbstractRole(node, role) {
    if (!(0, _utilMjs.isElement)(node)) return false;
    switch(role){
        case "range":
            return (0, _utilMjs.hasAnyConcreteRoles)(node, [
                "meter",
                "progressbar",
                "scrollbar",
                "slider",
                "spinbutton"
            ]);
        default:
            throw new TypeError("No knowledge about abstract role '".concat(role, "'. This is likely a bug :("));
    }
}
/**
 * element.querySelectorAll but also considers owned tree
 * @param element
 * @param selectors
 */ function querySelectorAllSubtree(element, selectors) {
    var elements = (0, _arrayFromMjsDefault.default)(element.querySelectorAll(selectors));
    (0, _utilMjs.queryIdRefs)(element, "aria-owns").forEach(function(root) {
        // babel transpiles this assuming an iterator
        elements.push.apply(elements, (0, _arrayFromMjsDefault.default)(root.querySelectorAll(selectors)));
    });
    return elements;
}
function querySelectedOptions(listbox) {
    if ((0, _utilMjs.isHTMLSelectElement)(listbox)) // IE11 polyfill
    return listbox.selectedOptions || querySelectorAllSubtree(listbox, "[selected]");
    return querySelectorAllSubtree(listbox, '[aria-selected="true"]');
}
function isMarkedPresentational(node) {
    return (0, _utilMjs.hasAnyConcreteRoles)(node, [
        "none",
        "presentation"
    ]);
}
/**
 * Elements specifically listed in html-aam
 *
 * We don't need this for `label` or `legend` elements.
 * Their implicit roles already allow "naming from content".
 *
 * sources:
 *
 * - https://w3c.github.io/html-aam/#table-element
 */ function isNativeHostLanguageTextAlternativeElement(node) {
    return (0, _utilMjs.isHTMLTableCaptionElement)(node);
}
/**
 * https://w3c.github.io/aria/#namefromcontent
 */ function allowsNameFromContent(node) {
    return (0, _utilMjs.hasAnyConcreteRoles)(node, [
        "button",
        "cell",
        "checkbox",
        "columnheader",
        "gridcell",
        "heading",
        "label",
        "legend",
        "link",
        "menuitem",
        "menuitemcheckbox",
        "menuitemradio",
        "option",
        "radio",
        "row",
        "rowheader",
        "switch",
        "tab",
        "tooltip",
        "treeitem"
    ]);
}
/**
 * TODO https://github.com/eps1lon/dom-accessibility-api/issues/100
 */ function isDescendantOfNativeHostLanguageTextAlternativeElement(node) {
    return false;
}
/**
 * TODO https://github.com/eps1lon/dom-accessibility-api/issues/101
 */ // eslint-disable-next-line @typescript-eslint/no-unused-vars -- not implemented yet
function computeTooltipAttributeValue(node) {
    return null;
}
function getValueOfTextbox(element) {
    if ((0, _utilMjs.isHTMLInputElement)(element) || (0, _utilMjs.isHTMLTextAreaElement)(element)) return element.value;
     // https://github.com/eps1lon/dom-accessibility-api/issues/4
    return element.textContent || "";
}
function getTextualContent(declaration) {
    var content = declaration.getPropertyValue("content");
    if (/^["'].*["']$/.test(content)) return content.slice(1, -1);
    return "";
}
/**
 * https://html.spec.whatwg.org/multipage/forms.html#category-label
 * TODO: form-associated custom elements
 * @param element
 */ function isLabelableElement(element) {
    var localName = (0, _utilMjs.getLocalName)(element);
    return localName === "button" || localName === "input" && element.getAttribute("type") !== "hidden" || localName === "meter" || localName === "output" || localName === "progress" || localName === "select" || localName === "textarea";
}
/**
 * > [...], then the first such descendant in tree order is the label element's labeled control.
 * -- https://html.spec.whatwg.org/multipage/forms.html#labeled-control
 * @param element
 */ function findLabelableElement(element) {
    if (isLabelableElement(element)) return element;
    var labelableElement = null;
    element.childNodes.forEach(function(childNode) {
        if (labelableElement === null && (0, _utilMjs.isElement)(childNode)) {
            var descendantLabelableElement = findLabelableElement(childNode);
            if (descendantLabelableElement !== null) labelableElement = descendantLabelableElement;
        }
    });
    return labelableElement;
}
/**
 * Polyfill of HTMLLabelElement.control
 * https://html.spec.whatwg.org/multipage/forms.html#labeled-control
 * @param label
 */ function getControlOfLabel(label) {
    if (label.control !== undefined) return label.control;
    var htmlFor = label.getAttribute("for");
    if (htmlFor !== null) return label.ownerDocument.getElementById(htmlFor);
    return findLabelableElement(label);
}
/**
 * Polyfill of HTMLInputElement.labels
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/labels
 * @param element
 */ function getLabels(element) {
    var labelsProperty = element.labels;
    if (labelsProperty === null) return labelsProperty;
    if (labelsProperty !== undefined) return (0, _arrayFromMjsDefault.default)(labelsProperty);
     // polyfill
    if (!isLabelableElement(element)) return null;
    var document = element.ownerDocument;
    return (0, _arrayFromMjsDefault.default)(document.querySelectorAll("label")).filter(function(label) {
        return getControlOfLabel(label) === element;
    });
}
/**
 * Gets the contents of a slot used for computing the accname
 * @param slot
 */ function getSlotContents(slot) {
    // Computing the accessible name for elements containing slots is not
    // currently defined in the spec. This implementation reflects the
    // behavior of NVDA 2020.2/Firefox 81 and iOS VoiceOver/Safari 13.6.
    var assignedNodes = slot.assignedNodes();
    if (assignedNodes.length === 0) // if no nodes are assigned to the slot, it displays the default content
    return (0, _arrayFromMjsDefault.default)(slot.childNodes);
    return assignedNodes;
}
function computeTextAlternative(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var consultedNodes = new (0, _setLikeMjsDefault.default)();
    var window = (0, _utilMjs.safeWindow)(root);
    var _options$compute = options.compute, compute = _options$compute === void 0 ? "name" : _options$compute, _options$computedStyl = options.computedStyleSupportsPseudoElements, computedStyleSupportsPseudoElements = _options$computedStyl === void 0 ? options.getComputedStyle !== undefined : _options$computedStyl, _options$getComputedS = options.getComputedStyle, getComputedStyle = _options$getComputedS === void 0 ? window.getComputedStyle.bind(window) : _options$getComputedS, _options$hidden = options.hidden, hidden = _options$hidden === void 0 ? false : _options$hidden; // 2F.i
    function computeMiscTextAlternative(node, context) {
        var accumulatedText = "";
        if ((0, _utilMjs.isElement)(node) && computedStyleSupportsPseudoElements) {
            var pseudoBefore = getComputedStyle(node, "::before");
            var beforeContent = getTextualContent(pseudoBefore);
            accumulatedText = "".concat(beforeContent, " ").concat(accumulatedText);
        } // FIXME: Including aria-owns is not defined in the spec
        // But it is required in the web-platform-test
        var childNodes = (0, _utilMjs.isHTMLSlotElement)(node) ? getSlotContents(node) : (0, _arrayFromMjsDefault.default)(node.childNodes).concat((0, _utilMjs.queryIdRefs)(node, "aria-owns"));
        childNodes.forEach(function(child) {
            var result = computeTextAlternative(child, {
                isEmbeddedInLabel: context.isEmbeddedInLabel,
                isReferenced: false,
                recursion: true
            }); // TODO: Unclear why display affects delimiter
            // see https://github.com/w3c/accname/issues/3
            var display = (0, _utilMjs.isElement)(child) ? getComputedStyle(child).getPropertyValue("display") : "inline";
            var separator = display !== "inline" ? " " : ""; // trailing separator for wpt tests
            accumulatedText += "".concat(separator).concat(result).concat(separator);
        });
        if ((0, _utilMjs.isElement)(node) && computedStyleSupportsPseudoElements) {
            var pseudoAfter = getComputedStyle(node, "::after");
            var afterContent = getTextualContent(pseudoAfter);
            accumulatedText = "".concat(accumulatedText, " ").concat(afterContent);
        }
        return accumulatedText.trim();
    }
    function computeElementTextAlternative(node) {
        if (!(0, _utilMjs.isElement)(node)) return null;
        /**
     *
     * @param element
     * @param attributeName
     * @returns A string non-empty string or `null`
     */ function useAttribute(element, attributeName) {
            var attribute = element.getAttributeNode(attributeName);
            if (attribute !== null && !consultedNodes.has(attribute) && attribute.value.trim() !== "") {
                consultedNodes.add(attribute);
                return attribute.value;
            }
            return null;
        } // https://w3c.github.io/html-aam/#fieldset-and-legend-elements
        if ((0, _utilMjs.isHTMLFieldSetElement)(node)) {
            consultedNodes.add(node);
            var children = (0, _arrayFromMjsDefault.default)(node.childNodes);
            for(var i = 0; i < children.length; i += 1){
                var child = children[i];
                if ((0, _utilMjs.isHTMLLegendElement)(child)) return computeTextAlternative(child, {
                    isEmbeddedInLabel: false,
                    isReferenced: false,
                    recursion: false
                });
            }
        } else if ((0, _utilMjs.isHTMLTableElement)(node)) {
            // https://w3c.github.io/html-aam/#table-element
            consultedNodes.add(node);
            var _children = (0, _arrayFromMjsDefault.default)(node.childNodes);
            for(var _i = 0; _i < _children.length; _i += 1){
                var _child = _children[_i];
                if ((0, _utilMjs.isHTMLTableCaptionElement)(_child)) return computeTextAlternative(_child, {
                    isEmbeddedInLabel: false,
                    isReferenced: false,
                    recursion: false
                });
            }
        } else if ((0, _utilMjs.isSVGSVGElement)(node)) {
            // https://www.w3.org/TR/svg-aam-1.0/
            consultedNodes.add(node);
            var _children2 = (0, _arrayFromMjsDefault.default)(node.childNodes);
            for(var _i2 = 0; _i2 < _children2.length; _i2 += 1){
                var _child2 = _children2[_i2];
                if ((0, _utilMjs.isSVGTitleElement)(_child2)) return _child2.textContent;
            }
            return null;
        } else if ((0, _utilMjs.getLocalName)(node) === "img" || (0, _utilMjs.getLocalName)(node) === "area") {
            // https://w3c.github.io/html-aam/#area-element
            // https://w3c.github.io/html-aam/#img-element
            var nameFromAlt = useAttribute(node, "alt");
            if (nameFromAlt !== null) return nameFromAlt;
        } else if ((0, _utilMjs.isHTMLOptGroupElement)(node)) {
            var nameFromLabel = useAttribute(node, "label");
            if (nameFromLabel !== null) return nameFromLabel;
        }
        if ((0, _utilMjs.isHTMLInputElement)(node) && (node.type === "button" || node.type === "submit" || node.type === "reset")) {
            // https://w3c.github.io/html-aam/#input-type-text-input-type-password-input-type-search-input-type-tel-input-type-email-input-type-url-and-textarea-element-accessible-description-computation
            var nameFromValue = useAttribute(node, "value");
            if (nameFromValue !== null) return nameFromValue;
             // TODO: l10n
            if (node.type === "submit") return "Submit";
             // TODO: l10n
            if (node.type === "reset") return "Reset";
        }
        var labels = getLabels(node);
        if (labels !== null && labels.length !== 0) {
            consultedNodes.add(node);
            return (0, _arrayFromMjsDefault.default)(labels).map(function(element) {
                return computeTextAlternative(element, {
                    isEmbeddedInLabel: true,
                    isReferenced: false,
                    recursion: true
                });
            }).filter(function(label) {
                return label.length > 0;
            }).join(" ");
        } // https://w3c.github.io/html-aam/#input-type-image-accessible-name-computation
        // TODO: wpt test consider label elements but html-aam does not mention them
        // We follow existing implementations over spec
        if ((0, _utilMjs.isHTMLInputElement)(node) && node.type === "image") {
            var _nameFromAlt = useAttribute(node, "alt");
            if (_nameFromAlt !== null) return _nameFromAlt;
            var nameFromTitle = useAttribute(node, "title");
            if (nameFromTitle !== null) return nameFromTitle;
             // TODO: l10n
            return "Submit Query";
        }
        if ((0, _utilMjs.hasAnyConcreteRoles)(node, [
            "button"
        ])) {
            // https://www.w3.org/TR/html-aam-1.0/#button-element
            var nameFromSubTree = computeMiscTextAlternative(node, {
                isEmbeddedInLabel: false,
                isReferenced: false
            });
            if (nameFromSubTree !== "") return nameFromSubTree;
            return useAttribute(node, "title");
        }
        return useAttribute(node, "title");
    }
    function computeTextAlternative(current, context) {
        if (consultedNodes.has(current)) return "";
         // 2A
        if (!hidden && isHidden(current, getComputedStyle) && !context.isReferenced) {
            consultedNodes.add(current);
            return "";
        } // 2B
        var labelElements = (0, _utilMjs.queryIdRefs)(current, "aria-labelledby");
        if (compute === "name" && !context.isReferenced && labelElements.length > 0) return labelElements.map(function(element) {
            return computeTextAlternative(element, {
                isEmbeddedInLabel: context.isEmbeddedInLabel,
                isReferenced: true,
                // thais isn't recursion as specified, otherwise we would skip
                // `aria-label` in
                // <input id="myself" aria-label="foo" aria-labelledby="myself"
                recursion: false
            });
        }).join(" ");
         // 2C
        // Changed from the spec in anticipation of https://github.com/w3c/accname/issues/64
        // spec says we should only consider skipping if we have a non-empty label
        var skipToStep2E = context.recursion && isControl(current) && compute === "name";
        if (!skipToStep2E) {
            var ariaLabel = ((0, _utilMjs.isElement)(current) && current.getAttribute("aria-label") || "").trim();
            if (ariaLabel !== "" && compute === "name") {
                consultedNodes.add(current);
                return ariaLabel;
            } // 2D
            if (!isMarkedPresentational(current)) {
                var elementTextAlternative = computeElementTextAlternative(current);
                if (elementTextAlternative !== null) {
                    consultedNodes.add(current);
                    return elementTextAlternative;
                }
            }
        } // special casing, cheating to make tests pass
        // https://github.com/w3c/accname/issues/67
        if ((0, _utilMjs.hasAnyConcreteRoles)(current, [
            "menu"
        ])) {
            consultedNodes.add(current);
            return "";
        } // 2E
        if (skipToStep2E || context.isEmbeddedInLabel || context.isReferenced) {
            if ((0, _utilMjs.hasAnyConcreteRoles)(current, [
                "combobox",
                "listbox"
            ])) {
                consultedNodes.add(current);
                var selectedOptions = querySelectedOptions(current);
                if (selectedOptions.length === 0) // defined per test `name_heading_combobox`
                return (0, _utilMjs.isHTMLInputElement)(current) ? current.value : "";
                return (0, _arrayFromMjsDefault.default)(selectedOptions).map(function(selectedOption) {
                    return computeTextAlternative(selectedOption, {
                        isEmbeddedInLabel: context.isEmbeddedInLabel,
                        isReferenced: false,
                        recursion: true
                    });
                }).join(" ");
            }
            if (hasAbstractRole(current, "range")) {
                consultedNodes.add(current);
                if (current.hasAttribute("aria-valuetext")) // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- safe due to hasAttribute guard
                return current.getAttribute("aria-valuetext");
                if (current.hasAttribute("aria-valuenow")) // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- safe due to hasAttribute guard
                return current.getAttribute("aria-valuenow");
                 // Otherwise, use the value as specified by a host language attribute.
                return current.getAttribute("value") || "";
            }
            if ((0, _utilMjs.hasAnyConcreteRoles)(current, [
                "textbox"
            ])) {
                consultedNodes.add(current);
                return getValueOfTextbox(current);
            }
        } // 2F: https://w3c.github.io/accname/#step2F
        if (allowsNameFromContent(current) || (0, _utilMjs.isElement)(current) && context.isReferenced || isNativeHostLanguageTextAlternativeElement(current) || isDescendantOfNativeHostLanguageTextAlternativeElement(current)) {
            consultedNodes.add(current);
            return computeMiscTextAlternative(current, {
                isEmbeddedInLabel: context.isEmbeddedInLabel,
                isReferenced: false
            });
        }
        if (current.nodeType === current.TEXT_NODE) {
            consultedNodes.add(current);
            return current.textContent || "";
        }
        if (context.recursion) {
            consultedNodes.add(current);
            return computeMiscTextAlternative(current, {
                isEmbeddedInLabel: context.isEmbeddedInLabel,
                isReferenced: false
            });
        }
        var tooltipAttributeValue = computeTooltipAttributeValue(current);
        if (tooltipAttributeValue !== null) {
            consultedNodes.add(current);
            return tooltipAttributeValue;
        } // TODO should this be reachable?
        consultedNodes.add(current);
        return "";
    }
    return asFlatString(computeTextAlternative(root, {
        isEmbeddedInLabel: false,
        // by spec computeAccessibleDescription starts with the referenced elements as roots
        isReferenced: compute === "description",
        recursion: false
    }));
}

},{"./polyfills/array.from.mjs":"522Xn","./polyfills/SetLike.mjs":"hpjZa","./util.mjs":"fjORF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"522Xn":[function(require,module,exports) {
/**
 * @source {https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from#Polyfill}
 * but without thisArg (too hard to type, no need to `this`)
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>arrayFrom);
var toStr = Object.prototype.toString;
function isCallable(fn) {
    return typeof fn === "function" || toStr.call(fn) === "[object Function]";
}
function toInteger(value) {
    var number = Number(value);
    if (isNaN(number)) return 0;
    if (number === 0 || !isFinite(number)) return number;
    return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
}
var maxSafeInteger = Math.pow(2, 53) - 1;
function toLength(value) {
    var len = toInteger(value);
    return Math.min(Math.max(len, 0), maxSafeInteger);
}
function arrayFrom(arrayLike, mapFn) {
    // 1. Let C be the this value.
    // edit(@eps1lon): we're not calling it as Array.from
    var C = Array; // 2. Let items be ToObject(arrayLike).
    var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).
    if (arrayLike == null) throw new TypeError("Array.from requires an array-like object - not null or undefined");
     // 4. If mapfn is undefined, then let mapping be false.
    // const mapFn = arguments.length > 1 ? arguments[1] : void undefined;
    if (typeof mapFn !== "undefined") {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) throw new TypeError("Array.from: when provided, the second argument must be a function");
    } // 10. Let lenValue be Get(items, "length").
    // 11. Let len be ToLength(lenValue).
    var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
    // 13. a. Let A be the result of calling the [[Construct]] internal method
    // of C with an argument list containing the single item len.
    // 14. a. Else, Let A be ArrayCreate(len).
    var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.
    var k = 0; // 17. Repeat, while k < len… (also steps a - h)
    var kValue;
    while(k < len){
        kValue = items[k];
        if (mapFn) A[k] = mapFn(kValue, k);
        else A[k] = kValue;
        k += 1;
    } // 18. Let putStatus be Put(A, "length", len, true).
    A.length = len; // 20. Return A.
    return A;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hpjZa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
// for environments without Set we fallback to arrays with unique members
var SetLike = /*#__PURE__*/ function() {
    function SetLike() {
        var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        _classCallCheck(this, SetLike);
        _defineProperty(this, "items", void 0);
        this.items = items;
    }
    _createClass(SetLike, [
        {
            key: "add",
            value: function add(value) {
                if (this.has(value) === false) this.items.push(value);
                return this;
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.items = [];
            }
        },
        {
            key: "delete",
            value: function _delete(value) {
                var previousLength = this.items.length;
                this.items = this.items.filter(function(item) {
                    return item !== value;
                });
                return previousLength !== this.items.length;
            }
        },
        {
            key: "forEach",
            value: function forEach(callbackfn) {
                var _this = this;
                this.items.forEach(function(item) {
                    callbackfn(item, item, _this);
                });
            }
        },
        {
            key: "has",
            value: function has(value) {
                return this.items.indexOf(value) !== -1;
            }
        },
        {
            key: "size",
            get: function get() {
                return this.items.length;
            }
        }
    ]);
    return SetLike;
}();
exports.default = typeof Set === "undefined" ? Set : SetLike;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fjORF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getLocalName", ()=>(0, _getRoleMjs.getLocalName));
parcelHelpers.export(exports, "isElement", ()=>isElement);
parcelHelpers.export(exports, "isHTMLTableCaptionElement", ()=>isHTMLTableCaptionElement);
parcelHelpers.export(exports, "isHTMLInputElement", ()=>isHTMLInputElement);
parcelHelpers.export(exports, "isHTMLOptGroupElement", ()=>isHTMLOptGroupElement);
parcelHelpers.export(exports, "isHTMLSelectElement", ()=>isHTMLSelectElement);
parcelHelpers.export(exports, "isHTMLTableElement", ()=>isHTMLTableElement);
parcelHelpers.export(exports, "isHTMLTextAreaElement", ()=>isHTMLTextAreaElement);
parcelHelpers.export(exports, "safeWindow", ()=>safeWindow);
parcelHelpers.export(exports, "isHTMLFieldSetElement", ()=>isHTMLFieldSetElement);
parcelHelpers.export(exports, "isHTMLLegendElement", ()=>isHTMLLegendElement);
parcelHelpers.export(exports, "isHTMLSlotElement", ()=>isHTMLSlotElement);
parcelHelpers.export(exports, "isSVGElement", ()=>isSVGElement);
parcelHelpers.export(exports, "isSVGSVGElement", ()=>isSVGSVGElement);
parcelHelpers.export(exports, "isSVGTitleElement", ()=>isSVGTitleElement);
/**
 *
 * @param {Node} node -
 * @param {string} attributeName -
 * @returns {Element[]} -
 */ parcelHelpers.export(exports, "queryIdRefs", ()=>queryIdRefs);
parcelHelpers.export(exports, "hasAnyConcreteRoles", ()=>hasAnyConcreteRoles);
var _getRoleMjs = require("./getRole.mjs");
var _getRoleMjsDefault = parcelHelpers.interopDefault(_getRoleMjs);
function isElement(node) {
    return node !== null && node.nodeType === node.ELEMENT_NODE;
}
function isHTMLTableCaptionElement(node) {
    return isElement(node) && (0, _getRoleMjs.getLocalName)(node) === "caption";
}
function isHTMLInputElement(node) {
    return isElement(node) && (0, _getRoleMjs.getLocalName)(node) === "input";
}
function isHTMLOptGroupElement(node) {
    return isElement(node) && (0, _getRoleMjs.getLocalName)(node) === "optgroup";
}
function isHTMLSelectElement(node) {
    return isElement(node) && (0, _getRoleMjs.getLocalName)(node) === "select";
}
function isHTMLTableElement(node) {
    return isElement(node) && (0, _getRoleMjs.getLocalName)(node) === "table";
}
function isHTMLTextAreaElement(node) {
    return isElement(node) && (0, _getRoleMjs.getLocalName)(node) === "textarea";
}
function safeWindow(node) {
    var _ref = node.ownerDocument === null ? node : node.ownerDocument, defaultView = _ref.defaultView;
    if (defaultView === null) throw new TypeError("no window available");
    return defaultView;
}
function isHTMLFieldSetElement(node) {
    return isElement(node) && (0, _getRoleMjs.getLocalName)(node) === "fieldset";
}
function isHTMLLegendElement(node) {
    return isElement(node) && (0, _getRoleMjs.getLocalName)(node) === "legend";
}
function isHTMLSlotElement(node) {
    return isElement(node) && (0, _getRoleMjs.getLocalName)(node) === "slot";
}
function isSVGElement(node) {
    return isElement(node) && node.ownerSVGElement !== undefined;
}
function isSVGSVGElement(node) {
    return isElement(node) && (0, _getRoleMjs.getLocalName)(node) === "svg";
}
function isSVGTitleElement(node) {
    return isSVGElement(node) && (0, _getRoleMjs.getLocalName)(node) === "title";
}
function queryIdRefs(node, attributeName) {
    if (isElement(node) && node.hasAttribute(attributeName)) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- safe due to hasAttribute check
        var ids = node.getAttribute(attributeName).split(" "); // Browsers that don't support shadow DOM won't have getRootNode
        var root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
        return ids.map(function(id) {
            return root.getElementById(id);
        }).filter(function(element) {
            return element !== null;
        } // TODO: why does this not narrow?
        );
    }
    return [];
}
function hasAnyConcreteRoles(node, roles) {
    if (isElement(node)) return roles.indexOf((0, _getRoleMjsDefault.default)(node)) !== -1;
    return false;
}

},{"./getRole.mjs":"8cydj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8cydj":[function(require,module,exports) {
// https://w3c.github.io/html-aria/#document-conformance-requirements-for-use-of-aria-attributes-in-html
/**
 * Safe Element.localName for all supported environments
 * @param element
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getLocalName", ()=>getLocalName);
parcelHelpers.export(exports, "default", ()=>getRole);
function getLocalName(element) {
    var _element$localName;
    return (_element$localName = element.localName) !== null && _element$localName !== void 0 ? _element$localName : element.tagName.toLowerCase();
}
var localNameToRoleMappings = {
    article: "article",
    aside: "complementary",
    button: "button",
    datalist: "listbox",
    dd: "definition",
    details: "group",
    dialog: "dialog",
    dt: "term",
    fieldset: "group",
    figure: "figure",
    // WARNING: Only with an accessible name
    form: "form",
    footer: "contentinfo",
    h1: "heading",
    h2: "heading",
    h3: "heading",
    h4: "heading",
    h5: "heading",
    h6: "heading",
    header: "banner",
    hr: "separator",
    html: "document",
    legend: "legend",
    li: "listitem",
    math: "math",
    main: "main",
    menu: "list",
    nav: "navigation",
    ol: "list",
    optgroup: "group",
    // WARNING: Only in certain context
    option: "option",
    output: "status",
    progress: "progressbar",
    // WARNING: Only with an accessible name
    section: "region",
    summary: "button",
    table: "table",
    tbody: "rowgroup",
    textarea: "textbox",
    tfoot: "rowgroup",
    // WARNING: Only in certain context
    td: "cell",
    th: "columnheader",
    thead: "rowgroup",
    tr: "row",
    ul: "list"
};
var prohibitedAttributes = {
    caption: new Set([
        "aria-label",
        "aria-labelledby"
    ]),
    code: new Set([
        "aria-label",
        "aria-labelledby"
    ]),
    deletion: new Set([
        "aria-label",
        "aria-labelledby"
    ]),
    emphasis: new Set([
        "aria-label",
        "aria-labelledby"
    ]),
    generic: new Set([
        "aria-label",
        "aria-labelledby",
        "aria-roledescription"
    ]),
    insertion: new Set([
        "aria-label",
        "aria-labelledby"
    ]),
    paragraph: new Set([
        "aria-label",
        "aria-labelledby"
    ]),
    presentation: new Set([
        "aria-label",
        "aria-labelledby"
    ]),
    strong: new Set([
        "aria-label",
        "aria-labelledby"
    ]),
    subscript: new Set([
        "aria-label",
        "aria-labelledby"
    ]),
    superscript: new Set([
        "aria-label",
        "aria-labelledby"
    ])
};
/**
 *
 * @param element
 * @param role The role used for this element. This is specified to control whether you want to use the implicit or explicit role.
 */ function hasGlobalAriaAttributes(element, role) {
    // https://rawgit.com/w3c/aria/stable/#global_states
    // commented attributes are deprecated
    return [
        "aria-atomic",
        "aria-busy",
        "aria-controls",
        "aria-current",
        "aria-describedby",
        "aria-details",
        "aria-dropeffect",
        "aria-flowto",
        "aria-grabbed",
        "aria-hidden",
        "aria-keyshortcuts",
        "aria-label",
        "aria-labelledby",
        "aria-live",
        "aria-owns",
        "aria-relevant",
        "aria-roledescription"
    ].some(function(attributeName) {
        var _prohibitedAttributes;
        return element.hasAttribute(attributeName) && !((_prohibitedAttributes = prohibitedAttributes[role]) !== null && _prohibitedAttributes !== void 0 && _prohibitedAttributes.has(attributeName));
    });
}
function ignorePresentationalRole(element, implicitRole) {
    // https://rawgit.com/w3c/aria/stable/#conflict_resolution_presentation_none
    return hasGlobalAriaAttributes(element, implicitRole);
}
function getRole(element) {
    var explicitRole = getExplicitRole(element);
    if (explicitRole === null || explicitRole === "presentation") {
        var implicitRole = getImplicitRole(element);
        if (explicitRole !== "presentation" || ignorePresentationalRole(element, implicitRole || "")) return implicitRole;
    }
    return explicitRole;
}
function getImplicitRole(element) {
    var mappedByTag = localNameToRoleMappings[getLocalName(element)];
    if (mappedByTag !== undefined) return mappedByTag;
    switch(getLocalName(element)){
        case "a":
        case "area":
        case "link":
            if (element.hasAttribute("href")) return "link";
            break;
        case "img":
            if (element.getAttribute("alt") === "" && !ignorePresentationalRole(element, "img")) return "presentation";
            return "img";
        case "input":
            var _ref = element, type = _ref.type;
            switch(type){
                case "button":
                case "image":
                case "reset":
                case "submit":
                    return "button";
                case "checkbox":
                case "radio":
                    return type;
                case "range":
                    return "slider";
                case "email":
                case "tel":
                case "text":
                case "url":
                    if (element.hasAttribute("list")) return "combobox";
                    return "textbox";
                case "search":
                    if (element.hasAttribute("list")) return "combobox";
                    return "searchbox";
                case "number":
                    return "spinbutton";
                default:
                    return null;
            }
        case "select":
            if (element.hasAttribute("multiple") || element.size > 1) return "listbox";
            return "combobox";
    }
    return null;
}
function getExplicitRole(element) {
    var role = element.getAttribute("role");
    if (role !== null) {
        var explicitRole = role.trim().split(" ")[0]; // String.prototype.split(sep, limit) will always return an array with at least one member
        // as long as limit is either undefined or > 0
        if (explicitRole.length > 0) return explicitRole;
    }
    return null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5rDyG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * implements https://w3c.github.io/accname/#mapping_additional_nd_name
 * @param root
 * @param options
 * @returns
 */ parcelHelpers.export(exports, "computeAccessibleName", ()=>computeAccessibleName);
var _accessibleNameAndDescriptionMjs = require("./accessible-name-and-description.mjs");
var _utilMjs = require("./util.mjs");
/**
 * https://w3c.github.io/aria/#namefromprohibited
 */ function prohibitsNaming(node) {
    return (0, _utilMjs.hasAnyConcreteRoles)(node, [
        "caption",
        "code",
        "deletion",
        "emphasis",
        "generic",
        "insertion",
        "paragraph",
        "presentation",
        "strong",
        "subscript",
        "superscript"
    ]);
}
function computeAccessibleName(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (prohibitsNaming(root)) return "";
    return (0, _accessibleNameAndDescriptionMjs.computeTextAlternative)(root, options);
}

},{"./accessible-name-and-description.mjs":"2Yp99","./util.mjs":"fjORF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"0hf5v":[function(require,module,exports) {
/**
 * Partial implementation https://www.w3.org/TR/wai-aria-1.2/#tree_exclusion
 * which should only be used for elements with a non-presentational role i.e.
 * `role="none"` and `role="presentation"` will not be excluded.
 *
 * Implements aria-hidden semantics (i.e. parent overrides child)
 * Ignores "Child Presentational: True" characteristics
 *
 * @param element
 * @param options
 * @returns {boolean} true if excluded, otherwise false
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isInaccessible", ()=>isInaccessible);
/**
 *
 * @param element
 * @param options
 * @returns {boolean} - `true` if every child of the element is inaccessible
 */ parcelHelpers.export(exports, "isSubtreeInaccessible", ()=>isSubtreeInaccessible);
function isInaccessible(element) {
    var _element$ownerDocumen;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$getComputedS = options.getComputedStyle, getComputedStyle = _options$getComputedS === void 0 ? (_element$ownerDocumen = element.ownerDocument.defaultView) === null || _element$ownerDocumen === void 0 ? void 0 : _element$ownerDocumen.getComputedStyle : _options$getComputedS, _options$isSubtreeIna = options.isSubtreeInaccessible, isSubtreeInaccessibleImpl = _options$isSubtreeIna === void 0 ? isSubtreeInaccessible : _options$isSubtreeIna;
    if (typeof getComputedStyle !== "function") throw new TypeError("Owner document of the element needs to have an associated window.");
     // since visibility is inherited we can exit early
    if (getComputedStyle(element).visibility === "hidden") return true;
    var currentElement = element;
    while(currentElement){
        if (isSubtreeInaccessibleImpl(currentElement, {
            getComputedStyle: getComputedStyle
        })) return true;
        currentElement = currentElement.parentElement;
    }
    return false;
}
function isSubtreeInaccessible(element) {
    var _element$ownerDocumen2;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$getComputedS2 = options.getComputedStyle, getComputedStyle = _options$getComputedS2 === void 0 ? (_element$ownerDocumen2 = element.ownerDocument.defaultView) === null || _element$ownerDocumen2 === void 0 ? void 0 : _element$ownerDocumen2.getComputedStyle : _options$getComputedS2;
    if (typeof getComputedStyle !== "function") throw new TypeError("Owner document of the element needs to have an associated window.");
    if (element.hidden === true) return true;
    if (element.getAttribute("aria-hidden") === "true") return true;
    if (getComputedStyle(element).display === "none") return true;
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6T0pp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.roles = exports.roleElements = exports.elementRoles = exports.dom = exports.aria = void 0;
var _ariaPropsMap = _interopRequireDefault(require("bc59b302725552e3"));
var _domMap = _interopRequireDefault(require("f4872fd8ced12d4f"));
var _rolesMap = _interopRequireDefault(require("cff0363f25509112"));
var _elementRoleMap = _interopRequireDefault(require("5bcc3d0c9e6453f2"));
var _roleElementMap = _interopRequireDefault(require("a9c985b41df6bb24"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var aria = _ariaPropsMap.default;
exports.aria = aria;
var dom = _domMap.default;
exports.dom = dom;
var roles = _rolesMap.default;
exports.roles = roles;
var elementRoles = _elementRoleMap.default;
exports.elementRoles = elementRoles;
var roleElements = _roleElementMap.default;
exports.roleElements = roleElements;

},{"bc59b302725552e3":"1p1sp","f4872fd8ced12d4f":"4v0mi","cff0363f25509112":"4bOMs","5bcc3d0c9e6453f2":"eVJmL","a9c985b41df6bb24":"aMgqz"}],"1p1sp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _iterationDecorator = _interopRequireDefault(require("155a83cd4933a148"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e2) {
                    throw _e2;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e3) {
            didErr = true;
            err = _e3;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
var properties = [
    [
        "aria-activedescendant",
        {
            "type": "id"
        }
    ],
    [
        "aria-atomic",
        {
            "type": "boolean"
        }
    ],
    [
        "aria-autocomplete",
        {
            "type": "token",
            "values": [
                "inline",
                "list",
                "both",
                "none"
            ]
        }
    ],
    [
        "aria-busy",
        {
            "type": "boolean"
        }
    ],
    [
        "aria-checked",
        {
            "type": "tristate"
        }
    ],
    [
        "aria-colcount",
        {
            type: "integer"
        }
    ],
    [
        "aria-colindex",
        {
            type: "integer"
        }
    ],
    [
        "aria-colspan",
        {
            type: "integer"
        }
    ],
    [
        "aria-controls",
        {
            "type": "idlist"
        }
    ],
    [
        "aria-current",
        {
            type: "token",
            values: [
                "page",
                "step",
                "location",
                "date",
                "time",
                true,
                false
            ]
        }
    ],
    [
        "aria-describedby",
        {
            "type": "idlist"
        }
    ],
    [
        "aria-details",
        {
            "type": "id"
        }
    ],
    [
        "aria-disabled",
        {
            "type": "boolean"
        }
    ],
    [
        "aria-dropeffect",
        {
            "type": "tokenlist",
            "values": [
                "copy",
                "execute",
                "link",
                "move",
                "none",
                "popup"
            ]
        }
    ],
    [
        "aria-errormessage",
        {
            "type": "id"
        }
    ],
    [
        "aria-expanded",
        {
            "type": "boolean",
            "allowundefined": true
        }
    ],
    [
        "aria-flowto",
        {
            "type": "idlist"
        }
    ],
    [
        "aria-grabbed",
        {
            "type": "boolean",
            "allowundefined": true
        }
    ],
    [
        "aria-haspopup",
        {
            "type": "token",
            "values": [
                false,
                true,
                "menu",
                "listbox",
                "tree",
                "grid",
                "dialog"
            ]
        }
    ],
    [
        "aria-hidden",
        {
            "type": "boolean",
            "allowundefined": true
        }
    ],
    [
        "aria-invalid",
        {
            "type": "token",
            "values": [
                "grammar",
                false,
                "spelling",
                true
            ]
        }
    ],
    [
        "aria-keyshortcuts",
        {
            type: "string"
        }
    ],
    [
        "aria-label",
        {
            "type": "string"
        }
    ],
    [
        "aria-labelledby",
        {
            "type": "idlist"
        }
    ],
    [
        "aria-level",
        {
            "type": "integer"
        }
    ],
    [
        "aria-live",
        {
            "type": "token",
            "values": [
                "assertive",
                "off",
                "polite"
            ]
        }
    ],
    [
        "aria-modal",
        {
            type: "boolean"
        }
    ],
    [
        "aria-multiline",
        {
            "type": "boolean"
        }
    ],
    [
        "aria-multiselectable",
        {
            "type": "boolean"
        }
    ],
    [
        "aria-orientation",
        {
            "type": "token",
            "values": [
                "vertical",
                "undefined",
                "horizontal"
            ]
        }
    ],
    [
        "aria-owns",
        {
            "type": "idlist"
        }
    ],
    [
        "aria-placeholder",
        {
            type: "string"
        }
    ],
    [
        "aria-posinset",
        {
            "type": "integer"
        }
    ],
    [
        "aria-pressed",
        {
            "type": "tristate"
        }
    ],
    [
        "aria-readonly",
        {
            "type": "boolean"
        }
    ],
    [
        "aria-relevant",
        {
            "type": "tokenlist",
            "values": [
                "additions",
                "all",
                "removals",
                "text"
            ]
        }
    ],
    [
        "aria-required",
        {
            "type": "boolean"
        }
    ],
    [
        "aria-roledescription",
        {
            type: "string"
        }
    ],
    [
        "aria-rowcount",
        {
            type: "integer"
        }
    ],
    [
        "aria-rowindex",
        {
            type: "integer"
        }
    ],
    [
        "aria-rowspan",
        {
            type: "integer"
        }
    ],
    [
        "aria-selected",
        {
            "type": "boolean",
            "allowundefined": true
        }
    ],
    [
        "aria-setsize",
        {
            "type": "integer"
        }
    ],
    [
        "aria-sort",
        {
            "type": "token",
            "values": [
                "ascending",
                "descending",
                "none",
                "other"
            ]
        }
    ],
    [
        "aria-valuemax",
        {
            "type": "number"
        }
    ],
    [
        "aria-valuemin",
        {
            "type": "number"
        }
    ],
    [
        "aria-valuenow",
        {
            "type": "number"
        }
    ],
    [
        "aria-valuetext",
        {
            "type": "string"
        }
    ]
];
var ariaPropsMap = {
    entries: function entries() {
        return properties;
    },
    forEach: function forEach(fn) {
        var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var _iterator = _createForOfIteratorHelper(properties), _step;
        try {
            for(_iterator.s(); !(_step = _iterator.n()).done;){
                var _step$value = _slicedToArray(_step.value, 2), key = _step$value[0], values = _step$value[1];
                fn.call(thisArg, values, key, properties);
            }
        } catch (err) {
            _iterator.e(err);
        } finally{
            _iterator.f();
        }
    },
    get: function get(key) {
        var item = properties.find(function(tuple) {
            return tuple[0] === key ? true : false;
        });
        return item && item[1];
    },
    has: function has(key) {
        return !!this.get(key);
    },
    keys: function keys() {
        return properties.map(function(_ref) {
            var _ref2 = _slicedToArray(_ref, 1), key = _ref2[0];
            return key;
        });
    },
    values: function values() {
        return properties.map(function(_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2), values = _ref4[1];
            return values;
        });
    }
};
var _default = (0, _iterationDecorator.default)(ariaPropsMap, ariaPropsMap.entries());
exports.default = _default;

},{"155a83cd4933a148":"kSTdV"}],"kSTdV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = iterationDecorator;
var _iteratorProxy = _interopRequireDefault(require("993af1ca1ac411cd"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function iterationDecorator(collection, entries) {
    if (typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol") Object.defineProperty(collection, Symbol.iterator, {
        value: _iteratorProxy.default.bind(entries)
    });
    return collection;
}

},{"993af1ca1ac411cd":"kOGdL"}],"kOGdL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
function iteratorProxy() {
    var values = this;
    var index = 0;
    var iter = {
        "@@iterator": function iterator() {
            return iter;
        },
        next: function next() {
            if (index < values.length) {
                var value = values[index];
                index = index + 1;
                return {
                    done: false,
                    value: value
                };
            } else return {
                done: true
            };
        }
    };
    return iter;
}
var _default = iteratorProxy;
exports.default = _default;

},{}],"4v0mi":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _iterationDecorator = _interopRequireDefault(require("d07e1834a588afc8"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e2) {
                    throw _e2;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e3) {
            didErr = true;
            err = _e3;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
var dom = [
    [
        "a",
        {
            reserved: false
        }
    ],
    [
        "abbr",
        {
            reserved: false
        }
    ],
    [
        "acronym",
        {
            reserved: false
        }
    ],
    [
        "address",
        {
            reserved: false
        }
    ],
    [
        "applet",
        {
            reserved: false
        }
    ],
    [
        "area",
        {
            reserved: false
        }
    ],
    [
        "article",
        {
            reserved: false
        }
    ],
    [
        "aside",
        {
            reserved: false
        }
    ],
    [
        "audio",
        {
            reserved: false
        }
    ],
    [
        "b",
        {
            reserved: false
        }
    ],
    [
        "base",
        {
            reserved: true
        }
    ],
    [
        "bdi",
        {
            reserved: false
        }
    ],
    [
        "bdo",
        {
            reserved: false
        }
    ],
    [
        "big",
        {
            reserved: false
        }
    ],
    [
        "blink",
        {
            reserved: false
        }
    ],
    [
        "blockquote",
        {
            reserved: false
        }
    ],
    [
        "body",
        {
            reserved: false
        }
    ],
    [
        "br",
        {
            reserved: false
        }
    ],
    [
        "button",
        {
            reserved: false
        }
    ],
    [
        "canvas",
        {
            reserved: false
        }
    ],
    [
        "caption",
        {
            reserved: false
        }
    ],
    [
        "center",
        {
            reserved: false
        }
    ],
    [
        "cite",
        {
            reserved: false
        }
    ],
    [
        "code",
        {
            reserved: false
        }
    ],
    [
        "col",
        {
            reserved: true
        }
    ],
    [
        "colgroup",
        {
            reserved: true
        }
    ],
    [
        "content",
        {
            reserved: false
        }
    ],
    [
        "data",
        {
            reserved: false
        }
    ],
    [
        "datalist",
        {
            reserved: false
        }
    ],
    [
        "dd",
        {
            reserved: false
        }
    ],
    [
        "del",
        {
            reserved: false
        }
    ],
    [
        "details",
        {
            reserved: false
        }
    ],
    [
        "dfn",
        {
            reserved: false
        }
    ],
    [
        "dialog",
        {
            reserved: false
        }
    ],
    [
        "dir",
        {
            reserved: false
        }
    ],
    [
        "div",
        {
            reserved: false
        }
    ],
    [
        "dl",
        {
            reserved: false
        }
    ],
    [
        "dt",
        {
            reserved: false
        }
    ],
    [
        "em",
        {
            reserved: false
        }
    ],
    [
        "embed",
        {
            reserved: false
        }
    ],
    [
        "fieldset",
        {
            reserved: false
        }
    ],
    [
        "figcaption",
        {
            reserved: false
        }
    ],
    [
        "figure",
        {
            reserved: false
        }
    ],
    [
        "font",
        {
            reserved: false
        }
    ],
    [
        "footer",
        {
            reserved: false
        }
    ],
    [
        "form",
        {
            reserved: false
        }
    ],
    [
        "frame",
        {
            reserved: false
        }
    ],
    [
        "frameset",
        {
            reserved: false
        }
    ],
    [
        "h1",
        {
            reserved: false
        }
    ],
    [
        "h2",
        {
            reserved: false
        }
    ],
    [
        "h3",
        {
            reserved: false
        }
    ],
    [
        "h4",
        {
            reserved: false
        }
    ],
    [
        "h5",
        {
            reserved: false
        }
    ],
    [
        "h6",
        {
            reserved: false
        }
    ],
    [
        "head",
        {
            reserved: true
        }
    ],
    [
        "header",
        {
            reserved: false
        }
    ],
    [
        "hgroup",
        {
            reserved: false
        }
    ],
    [
        "hr",
        {
            reserved: false
        }
    ],
    [
        "html",
        {
            reserved: true
        }
    ],
    [
        "i",
        {
            reserved: false
        }
    ],
    [
        "iframe",
        {
            reserved: false
        }
    ],
    [
        "img",
        {
            reserved: false
        }
    ],
    [
        "input",
        {
            reserved: false
        }
    ],
    [
        "ins",
        {
            reserved: false
        }
    ],
    [
        "kbd",
        {
            reserved: false
        }
    ],
    [
        "keygen",
        {
            reserved: false
        }
    ],
    [
        "label",
        {
            reserved: false
        }
    ],
    [
        "legend",
        {
            reserved: false
        }
    ],
    [
        "li",
        {
            reserved: false
        }
    ],
    [
        "link",
        {
            reserved: true
        }
    ],
    [
        "main",
        {
            reserved: false
        }
    ],
    [
        "map",
        {
            reserved: false
        }
    ],
    [
        "mark",
        {
            reserved: false
        }
    ],
    [
        "marquee",
        {
            reserved: false
        }
    ],
    [
        "menu",
        {
            reserved: false
        }
    ],
    [
        "menuitem",
        {
            reserved: false
        }
    ],
    [
        "meta",
        {
            reserved: true
        }
    ],
    [
        "meter",
        {
            reserved: false
        }
    ],
    [
        "nav",
        {
            reserved: false
        }
    ],
    [
        "noembed",
        {
            reserved: true
        }
    ],
    [
        "noscript",
        {
            reserved: true
        }
    ],
    [
        "object",
        {
            reserved: false
        }
    ],
    [
        "ol",
        {
            reserved: false
        }
    ],
    [
        "optgroup",
        {
            reserved: false
        }
    ],
    [
        "option",
        {
            reserved: false
        }
    ],
    [
        "output",
        {
            reserved: false
        }
    ],
    [
        "p",
        {
            reserved: false
        }
    ],
    [
        "param",
        {
            reserved: true
        }
    ],
    [
        "picture",
        {
            reserved: true
        }
    ],
    [
        "pre",
        {
            reserved: false
        }
    ],
    [
        "progress",
        {
            reserved: false
        }
    ],
    [
        "q",
        {
            reserved: false
        }
    ],
    [
        "rp",
        {
            reserved: false
        }
    ],
    [
        "rt",
        {
            reserved: false
        }
    ],
    [
        "rtc",
        {
            reserved: false
        }
    ],
    [
        "ruby",
        {
            reserved: false
        }
    ],
    [
        "s",
        {
            reserved: false
        }
    ],
    [
        "samp",
        {
            reserved: false
        }
    ],
    [
        "script",
        {
            reserved: true
        }
    ],
    [
        "section",
        {
            reserved: false
        }
    ],
    [
        "select",
        {
            reserved: false
        }
    ],
    [
        "small",
        {
            reserved: false
        }
    ],
    [
        "source",
        {
            reserved: true
        }
    ],
    [
        "spacer",
        {
            reserved: false
        }
    ],
    [
        "span",
        {
            reserved: false
        }
    ],
    [
        "strike",
        {
            reserved: false
        }
    ],
    [
        "strong",
        {
            reserved: false
        }
    ],
    [
        "style",
        {
            reserved: true
        }
    ],
    [
        "sub",
        {
            reserved: false
        }
    ],
    [
        "summary",
        {
            reserved: false
        }
    ],
    [
        "sup",
        {
            reserved: false
        }
    ],
    [
        "table",
        {
            reserved: false
        }
    ],
    [
        "tbody",
        {
            reserved: false
        }
    ],
    [
        "td",
        {
            reserved: false
        }
    ],
    [
        "textarea",
        {
            reserved: false
        }
    ],
    [
        "tfoot",
        {
            reserved: false
        }
    ],
    [
        "th",
        {
            reserved: false
        }
    ],
    [
        "thead",
        {
            reserved: false
        }
    ],
    [
        "time",
        {
            reserved: false
        }
    ],
    [
        "title",
        {
            reserved: true
        }
    ],
    [
        "tr",
        {
            reserved: false
        }
    ],
    [
        "track",
        {
            reserved: true
        }
    ],
    [
        "tt",
        {
            reserved: false
        }
    ],
    [
        "u",
        {
            reserved: false
        }
    ],
    [
        "ul",
        {
            reserved: false
        }
    ],
    [
        "var",
        {
            reserved: false
        }
    ],
    [
        "video",
        {
            reserved: false
        }
    ],
    [
        "wbr",
        {
            reserved: false
        }
    ],
    [
        "xmp",
        {
            reserved: false
        }
    ]
];
var domMap = {
    entries: function entries() {
        return dom;
    },
    forEach: function forEach(fn) {
        var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var _iterator = _createForOfIteratorHelper(dom), _step;
        try {
            for(_iterator.s(); !(_step = _iterator.n()).done;){
                var _step$value = _slicedToArray(_step.value, 2), key = _step$value[0], values = _step$value[1];
                fn.call(thisArg, values, key, dom);
            }
        } catch (err) {
            _iterator.e(err);
        } finally{
            _iterator.f();
        }
    },
    get: function get(key) {
        var item = dom.find(function(tuple) {
            return tuple[0] === key ? true : false;
        });
        return item && item[1];
    },
    has: function has(key) {
        return !!this.get(key);
    },
    keys: function keys() {
        return dom.map(function(_ref) {
            var _ref2 = _slicedToArray(_ref, 1), key = _ref2[0];
            return key;
        });
    },
    values: function values() {
        return dom.map(function(_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2), values = _ref4[1];
            return values;
        });
    }
};
var _default = (0, _iterationDecorator.default)(domMap, domMap.entries());
exports.default = _default;

},{"d07e1834a588afc8":"kSTdV"}],"4bOMs":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _ariaAbstractRoles = _interopRequireDefault(require("430a8bdc84bb2fe1"));
var _ariaLiteralRoles = _interopRequireDefault(require("dd2d70dbdac382cd"));
var _ariaDpubRoles = _interopRequireDefault(require("1ca5e298a5900ba9"));
var _iterationDecorator = _interopRequireDefault(require("19e0583c674ac1aa"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e2) {
                    throw _e2;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e3) {
            didErr = true;
            err = _e3;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
var roles = [].concat(_ariaAbstractRoles.default, _ariaLiteralRoles.default, _ariaDpubRoles.default);
roles.forEach(function(_ref) {
    var _ref2 = _slicedToArray(_ref, 2), roleDefinition = _ref2[1];
    // Conglomerate the properties
    var _iterator = _createForOfIteratorHelper(roleDefinition.superClass), _step;
    try {
        for(_iterator.s(); !(_step = _iterator.n()).done;){
            var superClassIter = _step.value;
            var _iterator2 = _createForOfIteratorHelper(superClassIter), _step2;
            try {
                var _loop = function _loop() {
                    var superClassName = _step2.value;
                    var superClassRoleTuple = roles.find(function(_ref3) {
                        var _ref4 = _slicedToArray(_ref3, 1), name = _ref4[0];
                        return name === superClassName;
                    });
                    if (superClassRoleTuple) {
                        var superClassDefinition = superClassRoleTuple[1];
                        for(var _i2 = 0, _Object$keys = Object.keys(superClassDefinition.props); _i2 < _Object$keys.length; _i2++){
                            var prop = _Object$keys[_i2];
                            if (!Object.prototype.hasOwnProperty.call(roleDefinition.props, prop)) Object.assign(roleDefinition.props, _defineProperty({}, prop, superClassDefinition.props[prop]));
                        }
                    }
                };
                for(_iterator2.s(); !(_step2 = _iterator2.n()).done;)_loop();
            } catch (err) {
                _iterator2.e(err);
            } finally{
                _iterator2.f();
            }
        }
    } catch (err) {
        _iterator.e(err);
    } finally{
        _iterator.f();
    }
});
var rolesMap = {
    entries: function entries() {
        return roles;
    },
    forEach: function forEach(fn) {
        var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var _iterator3 = _createForOfIteratorHelper(roles), _step3;
        try {
            for(_iterator3.s(); !(_step3 = _iterator3.n()).done;){
                var _step3$value = _slicedToArray(_step3.value, 2), key = _step3$value[0], values = _step3$value[1];
                fn.call(thisArg, values, key, roles);
            }
        } catch (err) {
            _iterator3.e(err);
        } finally{
            _iterator3.f();
        }
    },
    get: function get(key) {
        var item = roles.find(function(tuple) {
            return tuple[0] === key ? true : false;
        });
        return item && item[1];
    },
    has: function has(key) {
        return !!this.get(key);
    },
    keys: function keys() {
        return roles.map(function(_ref5) {
            var _ref6 = _slicedToArray(_ref5, 1), key = _ref6[0];
            return key;
        });
    },
    values: function values() {
        return roles.map(function(_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2), values = _ref8[1];
            return values;
        });
    }
};
var _default = (0, _iterationDecorator.default)(rolesMap, rolesMap.entries());
exports.default = _default;

},{"430a8bdc84bb2fe1":"6RuJ5","dd2d70dbdac382cd":"cMmV5","1ca5e298a5900ba9":"bZ5IH","19e0583c674ac1aa":"kSTdV"}],"6RuJ5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _commandRole = _interopRequireDefault(require("ec9bc767781a03f"));
var _compositeRole = _interopRequireDefault(require("8161b57cb3e4392c"));
var _inputRole = _interopRequireDefault(require("82051c6ee449f5"));
var _landmarkRole = _interopRequireDefault(require("4e37b41cbd12b6e5"));
var _rangeRole = _interopRequireDefault(require("f8a7936ded4648dd"));
var _roletypeRole = _interopRequireDefault(require("ccb1bed61d479356"));
var _sectionRole = _interopRequireDefault(require("3e0dc75485f45e4f"));
var _sectionheadRole = _interopRequireDefault(require("c86428c39e25e5cf"));
var _selectRole = _interopRequireDefault(require("5393caf06ad92097"));
var _structureRole = _interopRequireDefault(require("f098c84a7bdc299f"));
var _widgetRole = _interopRequireDefault(require("b52f2051cdfdf007"));
var _windowRole = _interopRequireDefault(require("c05f57460dd76565"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var ariaAbstractRoles = [
    [
        "command",
        _commandRole.default
    ],
    [
        "composite",
        _compositeRole.default
    ],
    [
        "input",
        _inputRole.default
    ],
    [
        "landmark",
        _landmarkRole.default
    ],
    [
        "range",
        _rangeRole.default
    ],
    [
        "roletype",
        _roletypeRole.default
    ],
    [
        "section",
        _sectionRole.default
    ],
    [
        "sectionhead",
        _sectionheadRole.default
    ],
    [
        "select",
        _selectRole.default
    ],
    [
        "structure",
        _structureRole.default
    ],
    [
        "widget",
        _widgetRole.default
    ],
    [
        "window",
        _windowRole.default
    ]
];
var _default = ariaAbstractRoles;
exports.default = _default;

},{"ec9bc767781a03f":"a1PgQ","8161b57cb3e4392c":"9iZv6","82051c6ee449f5":"3Xlk7","4e37b41cbd12b6e5":"cO306","f8a7936ded4648dd":"5AOHx","ccb1bed61d479356":"kmfAZ","3e0dc75485f45e4f":"SqZ0R","c86428c39e25e5cf":"8oroJ","5393caf06ad92097":"jXOCK","f098c84a7bdc299f":"995XE","b52f2051cdfdf007":"8FUec","c05f57460dd76565":"7gIBe"}],"a1PgQ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var commandRole = {
    abstract: true,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            concept: {
                name: "menuitem"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "widget"
        ]
    ]
};
var _default = commandRole;
exports.default = _default;

},{}],"9iZv6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var compositeRole = {
    abstract: true,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-activedescendant": null,
        "aria-disabled": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "widget"
        ]
    ]
};
var _default = compositeRole;
exports.default = _default;

},{}],"3Xlk7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var inputRole = {
    abstract: true,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "input"
            },
            module: "XForms"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "widget"
        ]
    ]
};
var _default = inputRole;
exports.default = _default;

},{}],"cO306":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var landmarkRole = {
    abstract: true,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = landmarkRole;
exports.default = _default;

},{}],"5AOHx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var rangeRole = {
    abstract: true,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-valuemax": null,
        "aria-valuemin": null,
        "aria-valuenow": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure"
        ]
    ]
};
var _default = rangeRole;
exports.default = _default;

},{}],"kmfAZ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var roletypeRole = {
    abstract: true,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [],
    prohibitedProps: [],
    props: {
        "aria-atomic": null,
        "aria-busy": null,
        "aria-controls": null,
        "aria-current": null,
        "aria-describedby": null,
        "aria-details": null,
        "aria-dropeffect": null,
        "aria-flowto": null,
        "aria-grabbed": null,
        "aria-hidden": null,
        "aria-keyshortcuts": null,
        "aria-label": null,
        "aria-labelledby": null,
        "aria-live": null,
        "aria-owns": null,
        "aria-relevant": null,
        "aria-roledescription": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "rel"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "role"
            },
            module: "XHTML"
        },
        {
            concept: {
                name: "type"
            },
            module: "Dublin Core"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: []
};
var _default = roletypeRole;
exports.default = _default;

},{}],"SqZ0R":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var sectionRole = {
    abstract: true,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            concept: {
                name: "frontmatter"
            },
            module: "DTB"
        },
        {
            concept: {
                name: "level"
            },
            module: "DTB"
        },
        {
            concept: {
                name: "level"
            },
            module: "SMIL"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure"
        ]
    ]
};
var _default = sectionRole;
exports.default = _default;

},{}],"8oroJ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var sectionheadRole = {
    abstract: true,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author",
        "contents"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure"
        ]
    ]
};
var _default = sectionheadRole;
exports.default = _default;

},{}],"jXOCK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var selectRole = {
    abstract: true,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-orientation": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "widget",
            "composite"
        ],
        [
            "roletype",
            "structure",
            "section",
            "group"
        ]
    ]
};
var _default = selectRole;
exports.default = _default;

},{}],"995XE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var structureRole = {
    abstract: true,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype"
        ]
    ]
};
var _default = structureRole;
exports.default = _default;

},{}],"8FUec":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var widgetRole = {
    abstract: true,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype"
        ]
    ]
};
var _default = widgetRole;
exports.default = _default;

},{}],"7gIBe":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var windowRole = {
    abstract: true,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-modal": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype"
        ]
    ]
};
var _default = windowRole;
exports.default = _default;

},{}],"cMmV5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _alertRole = _interopRequireDefault(require("b20256ce825e6c2e"));
var _alertdialogRole = _interopRequireDefault(require("ec58730fcaac46ce"));
var _applicationRole = _interopRequireDefault(require("d71fc4cb94e82b9c"));
var _articleRole = _interopRequireDefault(require("8d11a7e041968d0b"));
var _bannerRole = _interopRequireDefault(require("b23c596c1361e48a"));
var _blockquoteRole = _interopRequireDefault(require("5a815e25d0aa140a"));
var _buttonRole = _interopRequireDefault(require("e24f0560480b5cc1"));
var _captionRole = _interopRequireDefault(require("eeb4d3131b0d6104"));
var _cellRole = _interopRequireDefault(require("1a43c8eeb8e6cb5"));
var _checkboxRole = _interopRequireDefault(require("10e8ff5c609dd78c"));
var _codeRole = _interopRequireDefault(require("7c386c522972d294"));
var _columnheaderRole = _interopRequireDefault(require("6892e2e70cae326a"));
var _comboboxRole = _interopRequireDefault(require("533c540915f2747"));
var _complementaryRole = _interopRequireDefault(require("5e5481cdf7045e87"));
var _contentinfoRole = _interopRequireDefault(require("8de1c388a52552c6"));
var _definitionRole = _interopRequireDefault(require("a9d6a736d96f3073"));
var _deletionRole = _interopRequireDefault(require("f8d6ea4717bb02f9"));
var _dialogRole = _interopRequireDefault(require("a74021bcbe5cc9f1"));
var _directoryRole = _interopRequireDefault(require("6057dfc59cd8a23e"));
var _documentRole = _interopRequireDefault(require("38208d365e59a4d3"));
var _emphasisRole = _interopRequireDefault(require("8194b8bd840d224c"));
var _feedRole = _interopRequireDefault(require("89b27d422b5d494e"));
var _figureRole = _interopRequireDefault(require("6744025ed2481639"));
var _formRole = _interopRequireDefault(require("123e8b74fc49892d"));
var _genericRole = _interopRequireDefault(require("3a01ebc9363e361d"));
var _gridRole = _interopRequireDefault(require("e4b5775e4e110a91"));
var _gridcellRole = _interopRequireDefault(require("a5f7622f6de394ab"));
var _groupRole = _interopRequireDefault(require("6690f4579ff1cc79"));
var _headingRole = _interopRequireDefault(require("3f957527123a3c0f"));
var _imgRole = _interopRequireDefault(require("bee58d31389529a6"));
var _insertionRole = _interopRequireDefault(require("8076eee50664ff5b"));
var _linkRole = _interopRequireDefault(require("5fa1dfba40e3d685"));
var _listRole = _interopRequireDefault(require("6993574a34e92436"));
var _listboxRole = _interopRequireDefault(require("6302281f0c90ea9f"));
var _listitemRole = _interopRequireDefault(require("cde8bab4e6334af9"));
var _logRole = _interopRequireDefault(require("87c415eaaede973e"));
var _mainRole = _interopRequireDefault(require("e795756a78f106fb"));
var _marqueeRole = _interopRequireDefault(require("f161822dcf8c6ff7"));
var _mathRole = _interopRequireDefault(require("4c37ae6aa67053e0"));
var _menuRole = _interopRequireDefault(require("58b4e063a737d8c1"));
var _menubarRole = _interopRequireDefault(require("eab44d342491557"));
var _menuitemRole = _interopRequireDefault(require("1926b0dd5b62d1c3"));
var _menuitemcheckboxRole = _interopRequireDefault(require("22c78be2a9c7c590"));
var _menuitemradioRole = _interopRequireDefault(require("9ba2ecb50d37efa"));
var _meterRole = _interopRequireDefault(require("45f3abae8c2c49ba"));
var _navigationRole = _interopRequireDefault(require("5236adc09d4bfcd6"));
var _noneRole = _interopRequireDefault(require("d95fbc32bd9f53ea"));
var _noteRole = _interopRequireDefault(require("52650d2f6cb6143e"));
var _optionRole = _interopRequireDefault(require("3f045af7d962bf56"));
var _paragraphRole = _interopRequireDefault(require("d801e6d3b7329be1"));
var _presentationRole = _interopRequireDefault(require("1be8e4ca22bda487"));
var _progressbarRole = _interopRequireDefault(require("d04db375a77dbe28"));
var _radioRole = _interopRequireDefault(require("e5305270cdf0f2a3"));
var _radiogroupRole = _interopRequireDefault(require("2c5052bc095def6e"));
var _regionRole = _interopRequireDefault(require("5d92bbb714f82a2c"));
var _rowRole = _interopRequireDefault(require("626dd7670e7d4ae8"));
var _rowgroupRole = _interopRequireDefault(require("3e61958897546fc7"));
var _rowheaderRole = _interopRequireDefault(require("206ee5fe4093173f"));
var _scrollbarRole = _interopRequireDefault(require("2d5ce121ee9f6489"));
var _searchRole = _interopRequireDefault(require("3e909bb5b60d84a9"));
var _searchboxRole = _interopRequireDefault(require("a0e354b71815049c"));
var _separatorRole = _interopRequireDefault(require("261c4f7b6a04b25b"));
var _sliderRole = _interopRequireDefault(require("c2fe6fe0ffebd2ab"));
var _spinbuttonRole = _interopRequireDefault(require("a79f07503deecee1"));
var _statusRole = _interopRequireDefault(require("873f4ee1c78c7ac9"));
var _strongRole = _interopRequireDefault(require("ae213510c7e55f35"));
var _subscriptRole = _interopRequireDefault(require("d8a3022e38fa0c8"));
var _superscriptRole = _interopRequireDefault(require("6612f4087da9773"));
var _switchRole = _interopRequireDefault(require("f888804272d3b82b"));
var _tabRole = _interopRequireDefault(require("920c4048fa993921"));
var _tableRole = _interopRequireDefault(require("41c5471952c4b287"));
var _tablistRole = _interopRequireDefault(require("c7b0a1c2a76599f1"));
var _tabpanelRole = _interopRequireDefault(require("a0dcc24cc7bf2b96"));
var _termRole = _interopRequireDefault(require("996cfe5d32620cb5"));
var _textboxRole = _interopRequireDefault(require("16a635113d9990d5"));
var _timeRole = _interopRequireDefault(require("20b9e07fcbaa68f1"));
var _timerRole = _interopRequireDefault(require("20aa69a388519364"));
var _toolbarRole = _interopRequireDefault(require("785fe4e4a2668905"));
var _tooltipRole = _interopRequireDefault(require("73acf28fcc95d73d"));
var _treeRole = _interopRequireDefault(require("8853a525dbdf6d79"));
var _treegridRole = _interopRequireDefault(require("a5cb6f9288dc7382"));
var _treeitemRole = _interopRequireDefault(require("fd1da8986e904f1d"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var ariaLiteralRoles = [
    [
        "alert",
        _alertRole.default
    ],
    [
        "alertdialog",
        _alertdialogRole.default
    ],
    [
        "application",
        _applicationRole.default
    ],
    [
        "article",
        _articleRole.default
    ],
    [
        "banner",
        _bannerRole.default
    ],
    [
        "blockquote",
        _blockquoteRole.default
    ],
    [
        "button",
        _buttonRole.default
    ],
    [
        "caption",
        _captionRole.default
    ],
    [
        "cell",
        _cellRole.default
    ],
    [
        "checkbox",
        _checkboxRole.default
    ],
    [
        "code",
        _codeRole.default
    ],
    [
        "columnheader",
        _columnheaderRole.default
    ],
    [
        "combobox",
        _comboboxRole.default
    ],
    [
        "complementary",
        _complementaryRole.default
    ],
    [
        "contentinfo",
        _contentinfoRole.default
    ],
    [
        "definition",
        _definitionRole.default
    ],
    [
        "deletion",
        _deletionRole.default
    ],
    [
        "dialog",
        _dialogRole.default
    ],
    [
        "directory",
        _directoryRole.default
    ],
    [
        "document",
        _documentRole.default
    ],
    [
        "emphasis",
        _emphasisRole.default
    ],
    [
        "feed",
        _feedRole.default
    ],
    [
        "figure",
        _figureRole.default
    ],
    [
        "form",
        _formRole.default
    ],
    [
        "generic",
        _genericRole.default
    ],
    [
        "grid",
        _gridRole.default
    ],
    [
        "gridcell",
        _gridcellRole.default
    ],
    [
        "group",
        _groupRole.default
    ],
    [
        "heading",
        _headingRole.default
    ],
    [
        "img",
        _imgRole.default
    ],
    [
        "insertion",
        _insertionRole.default
    ],
    [
        "link",
        _linkRole.default
    ],
    [
        "list",
        _listRole.default
    ],
    [
        "listbox",
        _listboxRole.default
    ],
    [
        "listitem",
        _listitemRole.default
    ],
    [
        "log",
        _logRole.default
    ],
    [
        "main",
        _mainRole.default
    ],
    [
        "marquee",
        _marqueeRole.default
    ],
    [
        "math",
        _mathRole.default
    ],
    [
        "menu",
        _menuRole.default
    ],
    [
        "menubar",
        _menubarRole.default
    ],
    [
        "menuitem",
        _menuitemRole.default
    ],
    [
        "menuitemcheckbox",
        _menuitemcheckboxRole.default
    ],
    [
        "menuitemradio",
        _menuitemradioRole.default
    ],
    [
        "meter",
        _meterRole.default
    ],
    [
        "navigation",
        _navigationRole.default
    ],
    [
        "none",
        _noneRole.default
    ],
    [
        "note",
        _noteRole.default
    ],
    [
        "option",
        _optionRole.default
    ],
    [
        "paragraph",
        _paragraphRole.default
    ],
    [
        "presentation",
        _presentationRole.default
    ],
    [
        "progressbar",
        _progressbarRole.default
    ],
    [
        "radio",
        _radioRole.default
    ],
    [
        "radiogroup",
        _radiogroupRole.default
    ],
    [
        "region",
        _regionRole.default
    ],
    [
        "row",
        _rowRole.default
    ],
    [
        "rowgroup",
        _rowgroupRole.default
    ],
    [
        "rowheader",
        _rowheaderRole.default
    ],
    [
        "scrollbar",
        _scrollbarRole.default
    ],
    [
        "search",
        _searchRole.default
    ],
    [
        "searchbox",
        _searchboxRole.default
    ],
    [
        "separator",
        _separatorRole.default
    ],
    [
        "slider",
        _sliderRole.default
    ],
    [
        "spinbutton",
        _spinbuttonRole.default
    ],
    [
        "status",
        _statusRole.default
    ],
    [
        "strong",
        _strongRole.default
    ],
    [
        "subscript",
        _subscriptRole.default
    ],
    [
        "superscript",
        _superscriptRole.default
    ],
    [
        "switch",
        _switchRole.default
    ],
    [
        "tab",
        _tabRole.default
    ],
    [
        "table",
        _tableRole.default
    ],
    [
        "tablist",
        _tablistRole.default
    ],
    [
        "tabpanel",
        _tabpanelRole.default
    ],
    [
        "term",
        _termRole.default
    ],
    [
        "textbox",
        _textboxRole.default
    ],
    [
        "time",
        _timeRole.default
    ],
    [
        "timer",
        _timerRole.default
    ],
    [
        "toolbar",
        _toolbarRole.default
    ],
    [
        "tooltip",
        _tooltipRole.default
    ],
    [
        "tree",
        _treeRole.default
    ],
    [
        "treegrid",
        _treegridRole.default
    ],
    [
        "treeitem",
        _treeitemRole.default
    ]
];
var _default = ariaLiteralRoles;
exports.default = _default;

},{"b20256ce825e6c2e":"2pX1r","ec58730fcaac46ce":"3UsTM","d71fc4cb94e82b9c":"UiSvK","8d11a7e041968d0b":"aVcBL","b23c596c1361e48a":"73uPX","5a815e25d0aa140a":"fLZFO","e24f0560480b5cc1":"6s17b","eeb4d3131b0d6104":"37UHG","1a43c8eeb8e6cb5":"9ePil","10e8ff5c609dd78c":"gzYDf","7c386c522972d294":"2ptMP","6892e2e70cae326a":"dfTip","533c540915f2747":"lBa73","5e5481cdf7045e87":"ePVbx","8de1c388a52552c6":"cFfJN","a9d6a736d96f3073":"5kfOW","f8d6ea4717bb02f9":"k7Y56","a74021bcbe5cc9f1":"daB6Z","6057dfc59cd8a23e":"kNxbn","38208d365e59a4d3":"h1h4Q","8194b8bd840d224c":"3xvZB","89b27d422b5d494e":"6TWCP","6744025ed2481639":"dsN0E","123e8b74fc49892d":"1EN7c","3a01ebc9363e361d":"46G41","e4b5775e4e110a91":"eIrMj","a5f7622f6de394ab":"aeeCr","6690f4579ff1cc79":"1ZLkP","3f957527123a3c0f":"f1wbH","bee58d31389529a6":"atUT5","8076eee50664ff5b":"3k4ZH","5fa1dfba40e3d685":"j9lw3","6993574a34e92436":"i7DAW","6302281f0c90ea9f":"i7SzL","cde8bab4e6334af9":"73gFi","87c415eaaede973e":"meKat","e795756a78f106fb":"1Okol","f161822dcf8c6ff7":"BLaUx","4c37ae6aa67053e0":"4wjYg","58b4e063a737d8c1":"fwJXs","eab44d342491557":"fTx5z","1926b0dd5b62d1c3":"7hc3J","22c78be2a9c7c590":"aYS1r","9ba2ecb50d37efa":"kNfWD","45f3abae8c2c49ba":"g9YCc","5236adc09d4bfcd6":"kmEGH","d95fbc32bd9f53ea":"d6czJ","52650d2f6cb6143e":"jKo9J","3f045af7d962bf56":"cE59a","d801e6d3b7329be1":"iG4tx","1be8e4ca22bda487":"6QJ42","d04db375a77dbe28":"bghXz","e5305270cdf0f2a3":"lctl5","2c5052bc095def6e":"fcqwk","5d92bbb714f82a2c":"8909B","626dd7670e7d4ae8":"7JNxR","3e61958897546fc7":"8mRj1","206ee5fe4093173f":"ffCGT","2d5ce121ee9f6489":"eN72G","3e909bb5b60d84a9":"4pAdX","a0e354b71815049c":"OQUZx","261c4f7b6a04b25b":"9GgM5","c2fe6fe0ffebd2ab":"cSiIc","a79f07503deecee1":"3ITxb","873f4ee1c78c7ac9":"lcDlg","ae213510c7e55f35":"6Kebi","d8a3022e38fa0c8":"3Xe42","6612f4087da9773":"8d0WG","f888804272d3b82b":"eThYA","920c4048fa993921":"gvzMd","41c5471952c4b287":"7Er4C","c7b0a1c2a76599f1":"kKWoS","a0dcc24cc7bf2b96":"5s3BD","996cfe5d32620cb5":"icG5c","16a635113d9990d5":"bI0en","20b9e07fcbaa68f1":"2bC2X","20aa69a388519364":"lSvts","785fe4e4a2668905":"7VJm7","73acf28fcc95d73d":"l5X4J","8853a525dbdf6d79":"lxAGn","a5cb6f9288dc7382":"o04mN","fd1da8986e904f1d":"aAkD3"}],"2pX1r":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var alertRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-atomic": "true",
        "aria-live": "assertive"
    },
    relatedConcepts: [
        {
            concept: {
                name: "alert"
            },
            module: "XForms"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = alertRole;
exports.default = _default;

},{}],"3UsTM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var alertdialogRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            concept: {
                name: "alert"
            },
            module: "XForms"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "alert"
        ],
        [
            "roletype",
            "window",
            "dialog"
        ]
    ]
};
var _default = alertdialogRole;
exports.default = _default;

},{}],"UiSvK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var applicationRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-activedescendant": null,
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "Device Independence Delivery Unit"
            }
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure"
        ]
    ]
};
var _default = applicationRole;
exports.default = _default;

},{}],"aVcBL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var articleRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-posinset": null,
        "aria-setsize": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "article"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "document"
        ]
    ]
};
var _default = articleRole;
exports.default = _default;

},{}],"73uPX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var bannerRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            concept: {
                constraints: [
                    "direct descendant of document"
                ],
                name: "header"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark"
        ]
    ]
};
var _default = bannerRole;
exports.default = _default;

},{}],"fLZFO":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var blockquoteRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = blockquoteRole;
exports.default = _default;

},{}],"6s17b":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var buttonRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: true,
    nameFrom: [
        "author",
        "contents"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-pressed": null
    },
    relatedConcepts: [
        {
            concept: {
                attributes: [
                    {
                        constraints: [
                            "set"
                        ],
                        name: "aria-pressed"
                    },
                    {
                        name: "type",
                        value: "checkbox"
                    }
                ],
                name: "input"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        name: "aria-expanded",
                        value: "false"
                    }
                ],
                name: "summary"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        name: "aria-expanded",
                        value: "true"
                    }
                ],
                constraints: [
                    "direct descendant of details element with the open attribute defined"
                ],
                name: "summary"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        name: "type",
                        value: "button"
                    }
                ],
                name: "input"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        name: "type",
                        value: "image"
                    }
                ],
                name: "input"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        name: "type",
                        value: "reset"
                    }
                ],
                name: "input"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        name: "type",
                        value: "submit"
                    }
                ],
                name: "input"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "button"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "trigger"
            },
            module: "XForms"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "widget",
            "command"
        ]
    ]
};
var _default = buttonRole;
exports.default = _default;

},{}],"37UHG":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var captionRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "prohibited"
    ],
    prohibitedProps: [
        "aria-label",
        "aria-labelledby"
    ],
    props: {},
    relatedConcepts: [],
    requireContextRole: [
        "figure",
        "grid",
        "table"
    ],
    requiredContextRole: [
        "figure",
        "grid",
        "table"
    ],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = captionRole;
exports.default = _default;

},{}],"9ePil":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var cellRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author",
        "contents"
    ],
    prohibitedProps: [],
    props: {
        "aria-colindex": null,
        "aria-colspan": null,
        "aria-rowindex": null,
        "aria-rowspan": null
    },
    relatedConcepts: [
        {
            concept: {
                constraints: [
                    "descendant of table"
                ],
                name: "td"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [
        "row"
    ],
    requiredContextRole: [
        "row"
    ],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = cellRole;
exports.default = _default;

},{}],"gzYDf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var checkboxRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: true,
    nameFrom: [
        "author",
        "contents"
    ],
    prohibitedProps: [],
    props: {
        "aria-checked": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-invalid": null,
        "aria-readonly": null,
        "aria-required": null
    },
    relatedConcepts: [
        {
            concept: {
                attributes: [
                    {
                        name: "type",
                        value: "checkbox"
                    }
                ],
                name: "input"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "option"
            },
            module: "ARIA"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
        "aria-checked": null
    },
    superClass: [
        [
            "roletype",
            "widget",
            "input"
        ]
    ]
};
var _default = checkboxRole;
exports.default = _default;

},{}],"2ptMP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var codeRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "prohibited"
    ],
    prohibitedProps: [
        "aria-label",
        "aria-labelledby"
    ],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = codeRole;
exports.default = _default;

},{}],"dfTip":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var columnheaderRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author",
        "contents"
    ],
    prohibitedProps: [],
    props: {
        "aria-sort": null
    },
    relatedConcepts: [
        {
            attributes: [
                {
                    name: "scope",
                    value: "col"
                }
            ],
            concept: {
                name: "th"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [
        "row"
    ],
    requiredContextRole: [
        "row"
    ],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "cell"
        ],
        [
            "roletype",
            "structure",
            "section",
            "cell",
            "gridcell"
        ],
        [
            "roletype",
            "widget",
            "gridcell"
        ],
        [
            "roletype",
            "structure",
            "sectionhead"
        ]
    ]
};
var _default = columnheaderRole;
exports.default = _default;

},{}],"lBa73":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var comboboxRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-activedescendant": null,
        "aria-autocomplete": null,
        "aria-errormessage": null,
        "aria-invalid": null,
        "aria-readonly": null,
        "aria-required": null,
        "aria-expanded": "false",
        "aria-haspopup": "listbox"
    },
    relatedConcepts: [
        {
            concept: {
                attributes: [
                    {
                        constraints: [
                            "set"
                        ],
                        name: "list"
                    },
                    {
                        name: "type",
                        value: "email"
                    }
                ],
                name: "input"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        constraints: [
                            "set"
                        ],
                        name: "list"
                    },
                    {
                        name: "type",
                        value: "search"
                    }
                ],
                name: "input"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        constraints: [
                            "set"
                        ],
                        name: "list"
                    },
                    {
                        name: "type",
                        value: "tel"
                    }
                ],
                name: "input"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        constraints: [
                            "set"
                        ],
                        name: "list"
                    },
                    {
                        name: "type",
                        value: "text"
                    }
                ],
                name: "input"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        constraints: [
                            "set"
                        ],
                        name: "list"
                    },
                    {
                        name: "type",
                        value: "url"
                    }
                ],
                name: "input"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        constraints: [
                            "set"
                        ],
                        name: "list"
                    },
                    {
                        name: "type",
                        value: "url"
                    }
                ],
                name: "input"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        constraints: [
                            "undefined"
                        ],
                        name: "multiple"
                    },
                    {
                        constraints: [
                            "undefined"
                        ],
                        name: "size"
                    }
                ],
                name: "select"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        constraints: [
                            "undefined"
                        ],
                        name: "multiple"
                    },
                    {
                        name: "size",
                        value: 1
                    }
                ],
                name: "select"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "select"
            },
            module: "XForms"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
        "aria-controls": null,
        "aria-expanded": "false"
    },
    superClass: [
        [
            "roletype",
            "widget",
            "input"
        ]
    ]
};
var _default = comboboxRole;
exports.default = _default;

},{}],"ePVbx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var complementaryRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            concept: {
                name: "aside"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark"
        ]
    ]
};
var _default = complementaryRole;
exports.default = _default;

},{}],"cFfJN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var contentinfoRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            concept: {
                constraints: [
                    "direct descendant of document"
                ],
                name: "footer"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark"
        ]
    ]
};
var _default = contentinfoRole;
exports.default = _default;

},{}],"5kfOW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var definitionRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            concept: {
                name: "dd"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = definitionRole;
exports.default = _default;

},{}],"k7Y56":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var deletionRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "prohibited"
    ],
    prohibitedProps: [
        "aria-label",
        "aria-labelledby"
    ],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = deletionRole;
exports.default = _default;

},{}],"daB6Z":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var dialogRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            concept: {
                name: "dialog"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "window"
        ]
    ]
};
var _default = dialogRole;
exports.default = _default;

},{}],"kNxbn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var directoryRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            module: "DAISY Guide"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "list"
        ]
    ]
};
var _default = directoryRole;
exports.default = _default;

},{}],"h1h4Q":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var documentRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            concept: {
                name: "Device Independence Delivery Unit"
            }
        },
        {
            concept: {
                name: "body"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure"
        ]
    ]
};
var _default = documentRole;
exports.default = _default;

},{}],"3xvZB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var emphasisRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "prohibited"
    ],
    prohibitedProps: [
        "aria-label",
        "aria-labelledby"
    ],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = emphasisRole;
exports.default = _default;

},{}],"6TWCP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var feedRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [
        [
            "article"
        ]
    ],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "list"
        ]
    ]
};
var _default = feedRole;
exports.default = _default;

},{}],"dsN0E":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var figureRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            concept: {
                name: "figure"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = figureRole;
exports.default = _default;

},{}],"1EN7c":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var formRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            concept: {
                attributes: [
                    {
                        constraints: [
                            "set"
                        ],
                        name: "aria-label"
                    }
                ],
                name: "form"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        constraints: [
                            "set"
                        ],
                        name: "aria-labelledby"
                    }
                ],
                name: "form"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        constraints: [
                            "set"
                        ],
                        name: "name"
                    }
                ],
                name: "form"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark"
        ]
    ]
};
var _default = formRole;
exports.default = _default;

},{}],"46G41":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var genericRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "prohibited"
    ],
    prohibitedProps: [
        "aria-label",
        "aria-labelledby"
    ],
    props: {},
    relatedConcepts: [
        {
            concept: {
                name: "span"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "div"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure"
        ]
    ]
};
var _default = genericRole;
exports.default = _default;

},{}],"eIrMj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var gridRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-multiselectable": null,
        "aria-readonly": null
    },
    relatedConcepts: [
        {
            concept: {
                attributes: [
                    {
                        name: "role",
                        value: "grid"
                    }
                ],
                name: "table"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [
        [
            "row"
        ],
        [
            "row",
            "rowgroup"
        ]
    ],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "widget",
            "composite"
        ],
        [
            "roletype",
            "structure",
            "section",
            "table"
        ]
    ]
};
var _default = gridRole;
exports.default = _default;

},{}],"aeeCr":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var gridcellRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author",
        "contents"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null,
        "aria-readonly": null,
        "aria-required": null,
        "aria-selected": null
    },
    relatedConcepts: [
        {
            concept: {
                attributes: [
                    {
                        name: "role",
                        value: "gridcell"
                    }
                ],
                name: "td"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [
        "row"
    ],
    requiredContextRole: [
        "row"
    ],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "cell"
        ],
        [
            "roletype",
            "widget"
        ]
    ]
};
var _default = gridcellRole;
exports.default = _default;

},{}],"1ZLkP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var groupRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-activedescendant": null,
        "aria-disabled": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "details"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "fieldset"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "optgroup"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = groupRole;
exports.default = _default;

},{}],"f1wbH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var headingRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author",
        "contents"
    ],
    prohibitedProps: [],
    props: {
        "aria-level": "2"
    },
    relatedConcepts: [
        {
            concept: {
                name: "h1"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "h2"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "h3"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "h4"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "h5"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "h6"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
        "aria-level": "2"
    },
    superClass: [
        [
            "roletype",
            "structure",
            "sectionhead"
        ]
    ]
};
var _default = headingRole;
exports.default = _default;

},{}],"atUT5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var imgRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: true,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            concept: {
                attributes: [
                    {
                        constraints: [
                            "set"
                        ],
                        name: "alt"
                    }
                ],
                name: "img"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        constraints: [
                            "undefined"
                        ],
                        name: "alt"
                    }
                ],
                name: "img"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "imggroup"
            },
            module: "DTB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = imgRole;
exports.default = _default;

},{}],"3k4ZH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var insertionRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "prohibited"
    ],
    prohibitedProps: [
        "aria-label",
        "aria-labelledby"
    ],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = insertionRole;
exports.default = _default;

},{}],"j9lw3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var linkRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author",
        "contents"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-expanded": null,
        "aria-haspopup": null
    },
    relatedConcepts: [
        {
            concept: {
                attributes: [
                    {
                        name: "href"
                    }
                ],
                name: "a"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        name: "href"
                    }
                ],
                name: "area"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        name: "href"
                    }
                ],
                name: "link"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "widget",
            "command"
        ]
    ]
};
var _default = linkRole;
exports.default = _default;

},{}],"i7DAW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var listRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            concept: {
                name: "menu"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "ol"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "ul"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [
        [
            "listitem"
        ]
    ],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = listRole;
exports.default = _default;

},{}],"i7SzL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var listboxRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-invalid": null,
        "aria-multiselectable": null,
        "aria-readonly": null,
        "aria-required": null,
        "aria-orientation": "vertical"
    },
    relatedConcepts: [
        {
            concept: {
                attributes: [
                    {
                        constraints: [
                            ">1"
                        ],
                        name: "size"
                    },
                    {
                        name: "multiple"
                    }
                ],
                name: "select"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        constraints: [
                            ">1"
                        ],
                        name: "size"
                    }
                ],
                name: "select"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        name: "multiple"
                    }
                ],
                name: "select"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "datalist"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "list"
            },
            module: "ARIA"
        },
        {
            concept: {
                name: "select"
            },
            module: "XForms"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [
        [
            "option",
            "group"
        ],
        [
            "option"
        ]
    ],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "widget",
            "composite",
            "select"
        ],
        [
            "roletype",
            "structure",
            "section",
            "group",
            "select"
        ]
    ]
};
var _default = listboxRole;
exports.default = _default;

},{}],"73gFi":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var listitemRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-level": null,
        "aria-posinset": null,
        "aria-setsize": null
    },
    relatedConcepts: [
        {
            concept: {
                constraints: [
                    "direct descendant of ol, ul or menu"
                ],
                name: "li"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "item"
            },
            module: "XForms"
        }
    ],
    requireContextRole: [
        "directory",
        "list"
    ],
    requiredContextRole: [
        "directory",
        "list"
    ],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = listitemRole;
exports.default = _default;

},{}],"meKat":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var logRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-live": "polite"
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = logRole;
exports.default = _default;

},{}],"1Okol":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var mainRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            concept: {
                name: "main"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark"
        ]
    ]
};
var _default = mainRole;
exports.default = _default;

},{}],"BLaUx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var marqueeRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = marqueeRole;
exports.default = _default;

},{}],"4wjYg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var mathRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            concept: {
                name: "math"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = mathRole;
exports.default = _default;

},{}],"fwJXs":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var menuRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-orientation": "vertical"
    },
    relatedConcepts: [
        {
            concept: {
                name: "MENU"
            },
            module: "JAPI"
        },
        {
            concept: {
                name: "list"
            },
            module: "ARIA"
        },
        {
            concept: {
                name: "select"
            },
            module: "XForms"
        },
        {
            concept: {
                name: "sidebar"
            },
            module: "DTB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [
        [
            "menuitem",
            "group"
        ],
        [
            "menuitemradio",
            "group"
        ],
        [
            "menuitemcheckbox",
            "group"
        ],
        [
            "menuitem"
        ],
        [
            "menuitemcheckbox"
        ],
        [
            "menuitemradio"
        ]
    ],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "widget",
            "composite",
            "select"
        ],
        [
            "roletype",
            "structure",
            "section",
            "group",
            "select"
        ]
    ]
};
var _default = menuRole;
exports.default = _default;

},{}],"fTx5z":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var menubarRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-orientation": "horizontal"
    },
    relatedConcepts: [
        {
            concept: {
                name: "toolbar"
            },
            module: "ARIA"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [
        [
            "menuitem",
            "group"
        ],
        [
            "menuitemradio",
            "group"
        ],
        [
            "menuitemcheckbox",
            "group"
        ],
        [
            "menuitem"
        ],
        [
            "menuitemcheckbox"
        ],
        [
            "menuitemradio"
        ]
    ],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "widget",
            "composite",
            "select",
            "menu"
        ],
        [
            "roletype",
            "structure",
            "section",
            "group",
            "select",
            "menu"
        ]
    ]
};
var _default = menubarRole;
exports.default = _default;

},{}],"7hc3J":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var menuitemRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author",
        "contents"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-posinset": null,
        "aria-setsize": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "MENU_ITEM"
            },
            module: "JAPI"
        },
        {
            concept: {
                name: "listitem"
            },
            module: "ARIA"
        },
        {
            concept: {
                name: "menuitem"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "option"
            },
            module: "ARIA"
        }
    ],
    requireContextRole: [
        "group",
        "menu",
        "menubar"
    ],
    requiredContextRole: [
        "group",
        "menu",
        "menubar"
    ],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "widget",
            "command"
        ]
    ]
};
var _default = menuitemRole;
exports.default = _default;

},{}],"aYS1r":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var menuitemcheckboxRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: true,
    nameFrom: [
        "author",
        "contents"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            concept: {
                name: "menuitem"
            },
            module: "ARIA"
        }
    ],
    requireContextRole: [
        "group",
        "menu",
        "menubar"
    ],
    requiredContextRole: [
        "group",
        "menu",
        "menubar"
    ],
    requiredOwnedElements: [],
    requiredProps: {
        "aria-checked": null
    },
    superClass: [
        [
            "roletype",
            "widget",
            "input",
            "checkbox"
        ],
        [
            "roletype",
            "widget",
            "command",
            "menuitem"
        ]
    ]
};
var _default = menuitemcheckboxRole;
exports.default = _default;

},{}],"kNfWD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var menuitemradioRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: true,
    nameFrom: [
        "author",
        "contents"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            concept: {
                name: "menuitem"
            },
            module: "ARIA"
        }
    ],
    requireContextRole: [
        "group",
        "menu",
        "menubar"
    ],
    requiredContextRole: [
        "group",
        "menu",
        "menubar"
    ],
    requiredOwnedElements: [],
    requiredProps: {
        "aria-checked": null
    },
    superClass: [
        [
            "roletype",
            "widget",
            "input",
            "checkbox",
            "menuitemcheckbox"
        ],
        [
            "roletype",
            "widget",
            "command",
            "menuitem",
            "menuitemcheckbox"
        ],
        [
            "roletype",
            "widget",
            "input",
            "radio"
        ]
    ]
};
var _default = menuitemradioRole;
exports.default = _default;

},{}],"g9YCc":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var meterRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: true,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-valuetext": null,
        "aria-valuemax": "100",
        "aria-valuemin": "0"
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
        "aria-valuenow": null
    },
    superClass: [
        [
            "roletype",
            "structure",
            "range"
        ]
    ]
};
var _default = meterRole;
exports.default = _default;

},{}],"kmEGH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var navigationRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            concept: {
                name: "nav"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark"
        ]
    ]
};
var _default = navigationRole;
exports.default = _default;

},{}],"d6czJ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var noneRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: []
};
var _default = noneRole;
exports.default = _default;

},{}],"jKo9J":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var noteRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = noteRole;
exports.default = _default;

},{}],"cE59a":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var optionRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: true,
    nameFrom: [
        "author",
        "contents"
    ],
    prohibitedProps: [],
    props: {
        "aria-checked": null,
        "aria-posinset": null,
        "aria-setsize": null,
        "aria-selected": "false"
    },
    relatedConcepts: [
        {
            concept: {
                name: "item"
            },
            module: "XForms"
        },
        {
            concept: {
                name: "listitem"
            },
            module: "ARIA"
        },
        {
            concept: {
                name: "option"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
        "aria-selected": "false"
    },
    superClass: [
        [
            "roletype",
            "widget",
            "input"
        ]
    ]
};
var _default = optionRole;
exports.default = _default;

},{}],"iG4tx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var paragraphRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "prohibited"
    ],
    prohibitedProps: [
        "aria-label",
        "aria-labelledby"
    ],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = paragraphRole;
exports.default = _default;

},{}],"6QJ42":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var presentationRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "prohibited"
    ],
    prohibitedProps: [
        "aria-label",
        "aria-labelledby"
    ],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure"
        ]
    ]
};
var _default = presentationRole;
exports.default = _default;

},{}],"bghXz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var progressbarRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: true,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-valuetext": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "progress"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "status"
            },
            module: "ARIA"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "range"
        ],
        [
            "roletype",
            "widget"
        ]
    ]
};
var _default = progressbarRole;
exports.default = _default;

},{}],"lctl5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var radioRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: true,
    nameFrom: [
        "author",
        "contents"
    ],
    prohibitedProps: [],
    props: {
        "aria-checked": null,
        "aria-posinset": null,
        "aria-setsize": null
    },
    relatedConcepts: [
        {
            concept: {
                attributes: [
                    {
                        name: "type",
                        value: "radio"
                    }
                ],
                name: "input"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
        "aria-checked": null
    },
    superClass: [
        [
            "roletype",
            "widget",
            "input"
        ]
    ]
};
var _default = radioRole;
exports.default = _default;

},{}],"fcqwk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var radiogroupRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-errormessage": null,
        "aria-invalid": null,
        "aria-readonly": null,
        "aria-required": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "list"
            },
            module: "ARIA"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [
        [
            "radio"
        ]
    ],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "widget",
            "composite",
            "select"
        ],
        [
            "roletype",
            "structure",
            "section",
            "group",
            "select"
        ]
    ]
};
var _default = radiogroupRole;
exports.default = _default;

},{}],"8909B":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var regionRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            concept: {
                attributes: [
                    {
                        constraints: [
                            "set"
                        ],
                        name: "aria-label"
                    }
                ],
                name: "section"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        constraints: [
                            "set"
                        ],
                        name: "aria-labelledby"
                    }
                ],
                name: "section"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "Device Independence Glossart perceivable unit"
            }
        },
        {
            concept: {
                name: "frame"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark"
        ]
    ]
};
var _default = regionRole;
exports.default = _default;

},{}],"7JNxR":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var rowRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author",
        "contents"
    ],
    prohibitedProps: [],
    props: {
        "aria-colindex": null,
        "aria-expanded": null,
        "aria-level": null,
        "aria-posinset": null,
        "aria-rowindex": null,
        "aria-selected": null,
        "aria-setsize": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "tr"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [
        "grid",
        "rowgroup",
        "table",
        "treegrid"
    ],
    requiredContextRole: [
        "grid",
        "rowgroup",
        "table",
        "treegrid"
    ],
    requiredOwnedElements: [
        [
            "cell"
        ],
        [
            "columnheader"
        ],
        [
            "gridcell"
        ],
        [
            "rowheader"
        ]
    ],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "group"
        ],
        [
            "roletype",
            "widget"
        ]
    ]
};
var _default = rowRole;
exports.default = _default;

},{}],"8mRj1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var rowgroupRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author",
        "contents"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            concept: {
                name: "tbody"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "tfoot"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "thead"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [
        "grid",
        "table",
        "treegrid"
    ],
    requiredContextRole: [
        "grid",
        "table",
        "treegrid"
    ],
    requiredOwnedElements: [
        [
            "row"
        ]
    ],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure"
        ]
    ]
};
var _default = rowgroupRole;
exports.default = _default;

},{}],"ffCGT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var rowheaderRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author",
        "contents"
    ],
    prohibitedProps: [],
    props: {
        "aria-sort": null
    },
    relatedConcepts: [
        {
            concept: {
                attributes: [
                    {
                        name: "scope",
                        value: "row"
                    }
                ],
                name: "th"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        name: "scope",
                        value: "rowgroup"
                    }
                ],
                name: "th"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [
        "row",
        "rowgroup"
    ],
    requiredContextRole: [
        "row",
        "rowgroup"
    ],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "cell"
        ],
        [
            "roletype",
            "structure",
            "section",
            "cell",
            "gridcell"
        ],
        [
            "roletype",
            "widget",
            "gridcell"
        ],
        [
            "roletype",
            "structure",
            "sectionhead"
        ]
    ]
};
var _default = rowheaderRole;
exports.default = _default;

},{}],"eN72G":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var scrollbarRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: true,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-valuetext": null,
        "aria-orientation": "vertical",
        "aria-valuemax": "100",
        "aria-valuemin": "0"
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
        "aria-controls": null,
        "aria-valuenow": null
    },
    superClass: [
        [
            "roletype",
            "structure",
            "range"
        ],
        [
            "roletype",
            "widget"
        ]
    ]
};
var _default = scrollbarRole;
exports.default = _default;

},{}],"4pAdX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var searchRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark"
        ]
    ]
};
var _default = searchRole;
exports.default = _default;

},{}],"OQUZx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var searchboxRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            concept: {
                attributes: [
                    {
                        constraints: [
                            "undefined"
                        ],
                        name: "list"
                    },
                    {
                        name: "type",
                        value: "search"
                    }
                ],
                name: "input"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "widget",
            "input",
            "textbox"
        ]
    ]
};
var _default = searchboxRole;
exports.default = _default;

},{}],"9GgM5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var separatorRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: true,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-orientation": "horizontal",
        "aria-valuemax": "100",
        "aria-valuemin": "0",
        "aria-valuenow": null,
        "aria-valuetext": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "hr"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure"
        ]
    ]
};
var _default = separatorRole;
exports.default = _default;

},{}],"cSiIc":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var sliderRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: true,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-errormessage": null,
        "aria-haspopup": null,
        "aria-invalid": null,
        "aria-readonly": null,
        "aria-valuetext": null,
        "aria-orientation": "horizontal",
        "aria-valuemax": "100",
        "aria-valuemin": "0"
    },
    relatedConcepts: [
        {
            concept: {
                attributes: [
                    {
                        name: "type",
                        value: "range"
                    }
                ],
                name: "input"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
        "aria-valuenow": null
    },
    superClass: [
        [
            "roletype",
            "widget",
            "input"
        ],
        [
            "roletype",
            "structure",
            "range"
        ]
    ]
};
var _default = sliderRole;
exports.default = _default;

},{}],"3ITxb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var spinbuttonRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-errormessage": null,
        "aria-invalid": null,
        "aria-readonly": null,
        "aria-required": null,
        "aria-valuetext": null,
        "aria-valuenow": "0"
    },
    relatedConcepts: [
        {
            concept: {
                attributes: [
                    {
                        name: "type",
                        value: "number"
                    }
                ],
                name: "input"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "widget",
            "composite"
        ],
        [
            "roletype",
            "widget",
            "input"
        ],
        [
            "roletype",
            "structure",
            "range"
        ]
    ]
};
var _default = spinbuttonRole;
exports.default = _default;

},{}],"lcDlg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var statusRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-atomic": "true",
        "aria-live": "polite"
    },
    relatedConcepts: [
        {
            concept: {
                name: "output"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = statusRole;
exports.default = _default;

},{}],"6Kebi":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var strongRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "prohibited"
    ],
    prohibitedProps: [
        "aria-label",
        "aria-labelledby"
    ],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = strongRole;
exports.default = _default;

},{}],"3Xe42":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var subscriptRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "prohibited"
    ],
    prohibitedProps: [
        "aria-label",
        "aria-labelledby"
    ],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = subscriptRole;
exports.default = _default;

},{}],"8d0WG":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var superscriptRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "prohibited"
    ],
    prohibitedProps: [
        "aria-label",
        "aria-labelledby"
    ],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = superscriptRole;
exports.default = _default;

},{}],"eThYA":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var switchRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: true,
    nameFrom: [
        "author",
        "contents"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            concept: {
                name: "button"
            },
            module: "ARIA"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {
        "aria-checked": null
    },
    superClass: [
        [
            "roletype",
            "widget",
            "input",
            "checkbox"
        ]
    ]
};
var _default = switchRole;
exports.default = _default;

},{}],"gvzMd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var tabRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: true,
    nameFrom: [
        "author",
        "contents"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-posinset": null,
        "aria-setsize": null,
        "aria-selected": "false"
    },
    relatedConcepts: [],
    requireContextRole: [
        "tablist"
    ],
    requiredContextRole: [
        "tablist"
    ],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "sectionhead"
        ],
        [
            "roletype",
            "widget"
        ]
    ]
};
var _default = tabRole;
exports.default = _default;

},{}],"7Er4C":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var tableRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-colcount": null,
        "aria-rowcount": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "table"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [
        [
            "row"
        ],
        [
            "row",
            "rowgroup"
        ]
    ],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = tableRole;
exports.default = _default;

},{}],"kKWoS":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var tablistRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-level": null,
        "aria-multiselectable": null,
        "aria-orientation": "horizontal"
    },
    relatedConcepts: [
        {
            module: "DAISY",
            concept: {
                name: "guide"
            }
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [
        [
            "tab"
        ]
    ],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "widget",
            "composite"
        ]
    ]
};
var _default = tablistRole;
exports.default = _default;

},{}],"5s3BD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var tabpanelRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = tabpanelRole;
exports.default = _default;

},{}],"icG5c":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var termRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            concept: {
                name: "dfn"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "dt"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = termRole;
exports.default = _default;

},{}],"bI0en":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var textboxRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-activedescendant": null,
        "aria-autocomplete": null,
        "aria-errormessage": null,
        "aria-haspopup": null,
        "aria-invalid": null,
        "aria-multiline": null,
        "aria-placeholder": null,
        "aria-readonly": null,
        "aria-required": null
    },
    relatedConcepts: [
        {
            concept: {
                attributes: [
                    {
                        constraints: [
                            "undefined"
                        ],
                        name: "type"
                    },
                    {
                        constraints: [
                            "undefined"
                        ],
                        name: "list"
                    }
                ],
                name: "input"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        constraints: [
                            "undefined"
                        ],
                        name: "list"
                    },
                    {
                        name: "type",
                        value: "email"
                    }
                ],
                name: "input"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        constraints: [
                            "undefined"
                        ],
                        name: "list"
                    },
                    {
                        name: "type",
                        value: "tel"
                    }
                ],
                name: "input"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        constraints: [
                            "undefined"
                        ],
                        name: "list"
                    },
                    {
                        name: "type",
                        value: "text"
                    }
                ],
                name: "input"
            },
            module: "HTML"
        },
        {
            concept: {
                attributes: [
                    {
                        constraints: [
                            "undefined"
                        ],
                        name: "list"
                    },
                    {
                        name: "type",
                        value: "url"
                    }
                ],
                name: "input"
            },
            module: "HTML"
        },
        {
            concept: {
                name: "input"
            },
            module: "XForms"
        },
        {
            concept: {
                name: "textarea"
            },
            module: "HTML"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "widget",
            "input"
        ]
    ]
};
var _default = textboxRole;
exports.default = _default;

},{}],"2bC2X":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var timeRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = timeRole;
exports.default = _default;

},{}],"lSvts":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var timerRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "status"
        ]
    ]
};
var _default = timerRole;
exports.default = _default;

},{}],"7VJm7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var toolbarRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-orientation": "horizontal"
    },
    relatedConcepts: [
        {
            concept: {
                name: "menubar"
            },
            module: "ARIA"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "group"
        ]
    ]
};
var _default = toolbarRole;
exports.default = _default;

},{}],"l5X4J":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var tooltipRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author",
        "contents"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = tooltipRole;
exports.default = _default;

},{}],"lxAGn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var treeRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-errormessage": null,
        "aria-invalid": null,
        "aria-multiselectable": null,
        "aria-required": null,
        "aria-orientation": "vertical"
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [
        [
            "treeitem",
            "group"
        ],
        [
            "treeitem"
        ]
    ],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "widget",
            "composite",
            "select"
        ],
        [
            "roletype",
            "structure",
            "section",
            "group",
            "select"
        ]
    ]
};
var _default = treeRole;
exports.default = _default;

},{}],"o04mN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var treegridRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [
        [
            "row"
        ],
        [
            "row",
            "rowgroup"
        ]
    ],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "widget",
            "composite",
            "grid"
        ],
        [
            "roletype",
            "structure",
            "section",
            "table",
            "grid"
        ],
        [
            "roletype",
            "widget",
            "composite",
            "select",
            "tree"
        ],
        [
            "roletype",
            "structure",
            "section",
            "group",
            "select",
            "tree"
        ]
    ]
};
var _default = treegridRole;
exports.default = _default;

},{}],"aAkD3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var treeitemRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author",
        "contents"
    ],
    prohibitedProps: [],
    props: {
        "aria-expanded": null,
        "aria-haspopup": null
    },
    relatedConcepts: [],
    requireContextRole: [
        "group",
        "tree"
    ],
    requiredContextRole: [
        "group",
        "tree"
    ],
    requiredOwnedElements: [],
    requiredProps: {
        "aria-selected": null
    },
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "listitem"
        ],
        [
            "roletype",
            "widget",
            "input",
            "option"
        ]
    ]
};
var _default = treeitemRole;
exports.default = _default;

},{}],"bZ5IH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _docAbstractRole = _interopRequireDefault(require("453a165aabaa193f"));
var _docAcknowledgmentsRole = _interopRequireDefault(require("2de74b5049835800"));
var _docAfterwordRole = _interopRequireDefault(require("828970a5a74c219e"));
var _docAppendixRole = _interopRequireDefault(require("31aacc06120111b8"));
var _docBacklinkRole = _interopRequireDefault(require("29e01dc2be5a53fc"));
var _docBiblioentryRole = _interopRequireDefault(require("8e1b7507319dac63"));
var _docBibliographyRole = _interopRequireDefault(require("3cdeb73195889123"));
var _docBibliorefRole = _interopRequireDefault(require("7f8e4bfeaf39802"));
var _docChapterRole = _interopRequireDefault(require("5ee1d4670b9b0d9d"));
var _docColophonRole = _interopRequireDefault(require("51ba88e95ef27ebb"));
var _docConclusionRole = _interopRequireDefault(require("67afce50821300fe"));
var _docCoverRole = _interopRequireDefault(require("437e693726356dd2"));
var _docCreditRole = _interopRequireDefault(require("a7faae78a54aa9ab"));
var _docCreditsRole = _interopRequireDefault(require("ef43eb4f8b6f2154"));
var _docDedicationRole = _interopRequireDefault(require("805f612ecc12eab9"));
var _docEndnoteRole = _interopRequireDefault(require("9a2641044dd078ca"));
var _docEndnotesRole = _interopRequireDefault(require("ffb52e422bf77d8e"));
var _docEpigraphRole = _interopRequireDefault(require("2cf8083899b5943f"));
var _docEpilogueRole = _interopRequireDefault(require("a10c7bc3e329a898"));
var _docErrataRole = _interopRequireDefault(require("300ca08c39e485d4"));
var _docExampleRole = _interopRequireDefault(require("1d63d217099734f"));
var _docFootnoteRole = _interopRequireDefault(require("8e8f33f1b1c7f70a"));
var _docForewordRole = _interopRequireDefault(require("151e220d0e3c6598"));
var _docGlossaryRole = _interopRequireDefault(require("df427bac684b55c5"));
var _docGlossrefRole = _interopRequireDefault(require("6d3cc0f826eb2c3b"));
var _docIndexRole = _interopRequireDefault(require("bc6e01924b5e64ea"));
var _docIntroductionRole = _interopRequireDefault(require("b4e2689bf016b5cf"));
var _docNoterefRole = _interopRequireDefault(require("2ef89a073fda24ed"));
var _docNoticeRole = _interopRequireDefault(require("c21953bec9189ed3"));
var _docPagebreakRole = _interopRequireDefault(require("4fd86b13a69deaef"));
var _docPagelistRole = _interopRequireDefault(require("e1c9349f48e6969e"));
var _docPartRole = _interopRequireDefault(require("661d859ca5b49747"));
var _docPrefaceRole = _interopRequireDefault(require("a10ef3b8ac9a03e3"));
var _docPrologueRole = _interopRequireDefault(require("527e29231fce47e4"));
var _docPullquoteRole = _interopRequireDefault(require("1c3b92c336ede6e9"));
var _docQnaRole = _interopRequireDefault(require("171b23c1c5b4433"));
var _docSubtitleRole = _interopRequireDefault(require("90f3edf3a2654a85"));
var _docTipRole = _interopRequireDefault(require("dd01f4d2adf00129"));
var _docTocRole = _interopRequireDefault(require("3473e4ffdb4e1096"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var ariaDpubRoles = [
    [
        "doc-abstract",
        _docAbstractRole.default
    ],
    [
        "doc-acknowledgments",
        _docAcknowledgmentsRole.default
    ],
    [
        "doc-afterword",
        _docAfterwordRole.default
    ],
    [
        "doc-appendix",
        _docAppendixRole.default
    ],
    [
        "doc-backlink",
        _docBacklinkRole.default
    ],
    [
        "doc-biblioentry",
        _docBiblioentryRole.default
    ],
    [
        "doc-bibliography",
        _docBibliographyRole.default
    ],
    [
        "doc-biblioref",
        _docBibliorefRole.default
    ],
    [
        "doc-chapter",
        _docChapterRole.default
    ],
    [
        "doc-colophon",
        _docColophonRole.default
    ],
    [
        "doc-conclusion",
        _docConclusionRole.default
    ],
    [
        "doc-cover",
        _docCoverRole.default
    ],
    [
        "doc-credit",
        _docCreditRole.default
    ],
    [
        "doc-credits",
        _docCreditsRole.default
    ],
    [
        "doc-dedication",
        _docDedicationRole.default
    ],
    [
        "doc-endnote",
        _docEndnoteRole.default
    ],
    [
        "doc-endnotes",
        _docEndnotesRole.default
    ],
    [
        "doc-epigraph",
        _docEpigraphRole.default
    ],
    [
        "doc-epilogue",
        _docEpilogueRole.default
    ],
    [
        "doc-errata",
        _docErrataRole.default
    ],
    [
        "doc-example",
        _docExampleRole.default
    ],
    [
        "doc-footnote",
        _docFootnoteRole.default
    ],
    [
        "doc-foreword",
        _docForewordRole.default
    ],
    [
        "doc-glossary",
        _docGlossaryRole.default
    ],
    [
        "doc-glossref",
        _docGlossrefRole.default
    ],
    [
        "doc-index",
        _docIndexRole.default
    ],
    [
        "doc-introduction",
        _docIntroductionRole.default
    ],
    [
        "doc-noteref",
        _docNoterefRole.default
    ],
    [
        "doc-notice",
        _docNoticeRole.default
    ],
    [
        "doc-pagebreak",
        _docPagebreakRole.default
    ],
    [
        "doc-pagelist",
        _docPagelistRole.default
    ],
    [
        "doc-part",
        _docPartRole.default
    ],
    [
        "doc-preface",
        _docPrefaceRole.default
    ],
    [
        "doc-prologue",
        _docPrologueRole.default
    ],
    [
        "doc-pullquote",
        _docPullquoteRole.default
    ],
    [
        "doc-qna",
        _docQnaRole.default
    ],
    [
        "doc-subtitle",
        _docSubtitleRole.default
    ],
    [
        "doc-tip",
        _docTipRole.default
    ],
    [
        "doc-toc",
        _docTocRole.default
    ]
];
var _default = ariaDpubRoles;
exports.default = _default;

},{"453a165aabaa193f":"3QhYu","2de74b5049835800":"kDTOB","828970a5a74c219e":"7fgsh","31aacc06120111b8":"dct5v","29e01dc2be5a53fc":"aniEZ","8e1b7507319dac63":"l2ODW","3cdeb73195889123":"iVNoC","7f8e4bfeaf39802":"5J8nP","5ee1d4670b9b0d9d":"CGmFr","51ba88e95ef27ebb":"9R175","67afce50821300fe":"8n3nx","437e693726356dd2":"02p6n","a7faae78a54aa9ab":"gjqNT","ef43eb4f8b6f2154":"5oixS","805f612ecc12eab9":"7kL8Y","9a2641044dd078ca":"9HBYf","ffb52e422bf77d8e":"iHlcE","2cf8083899b5943f":"i6qii","a10c7bc3e329a898":"fmEdq","300ca08c39e485d4":"13WNK","1d63d217099734f":"6PC6P","8e8f33f1b1c7f70a":"b9rA5","151e220d0e3c6598":"is58r","df427bac684b55c5":"h8eZ5","6d3cc0f826eb2c3b":"bSXas","bc6e01924b5e64ea":"7beHX","b4e2689bf016b5cf":"57TPd","2ef89a073fda24ed":"2ntod","c21953bec9189ed3":"bqtwf","4fd86b13a69deaef":"gMklS","e1c9349f48e6969e":"9H3UT","661d859ca5b49747":"h3Tjn","a10ef3b8ac9a03e3":"23xMv","527e29231fce47e4":"lxDOP","1c3b92c336ede6e9":"8y3Jp","171b23c1c5b4433":"90OwY","90f3edf3a2654a85":"5bdK2","dd01f4d2adf00129":"2pxMy","3473e4ffdb4e1096":"bvoTd"}],"3QhYu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docAbstractRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "abstract [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = docAbstractRole;
exports.default = _default;

},{}],"kDTOB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docAcknowledgmentsRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "acknowledgments [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark"
        ]
    ]
};
var _default = docAcknowledgmentsRole;
exports.default = _default;

},{}],"7fgsh":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docAfterwordRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "afterword [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark"
        ]
    ]
};
var _default = docAfterwordRole;
exports.default = _default;

},{}],"dct5v":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docAppendixRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "appendix [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark"
        ]
    ]
};
var _default = docAppendixRole;
exports.default = _default;

},{}],"aniEZ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docBacklinkRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author",
        "content"
    ],
    prohibitedProps: [],
    props: {
        "aria-errormessage": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "referrer [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "widget",
            "command",
            "link"
        ]
    ]
};
var _default = docBacklinkRole;
exports.default = _default;

},{}],"l2ODW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docBiblioentryRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "EPUB biblioentry [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [
        "doc-bibliography"
    ],
    requiredContextRole: [
        "doc-bibliography"
    ],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "listitem"
        ]
    ]
};
var _default = docBiblioentryRole;
exports.default = _default;

},{}],"iVNoC":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docBibliographyRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "bibliography [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [
        [
            "doc-biblioentry"
        ]
    ],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark"
        ]
    ]
};
var _default = docBibliographyRole;
exports.default = _default;

},{}],"5J8nP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docBibliorefRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author",
        "contents"
    ],
    prohibitedProps: [],
    props: {
        "aria-errormessage": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "biblioref [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "widget",
            "command",
            "link"
        ]
    ]
};
var _default = docBibliorefRole;
exports.default = _default;

},{}],"CGmFr":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docChapterRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "chapter [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark"
        ]
    ]
};
var _default = docChapterRole;
exports.default = _default;

},{}],"9R175":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docColophonRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "colophon [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = docColophonRole;
exports.default = _default;

},{}],"8n3nx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docConclusionRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "conclusion [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark"
        ]
    ]
};
var _default = docConclusionRole;
exports.default = _default;

},{}],"02p6n":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docCoverRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "cover [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "img"
        ]
    ]
};
var _default = docCoverRole;
exports.default = _default;

},{}],"gjqNT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docCreditRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "credit [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = docCreditRole;
exports.default = _default;

},{}],"5oixS":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docCreditsRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "credits [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark"
        ]
    ]
};
var _default = docCreditsRole;
exports.default = _default;

},{}],"7kL8Y":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docDedicationRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "dedication [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = docDedicationRole;
exports.default = _default;

},{}],"9HBYf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docEndnoteRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "rearnote [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [
        "doc-endnotes"
    ],
    requiredContextRole: [
        "doc-endnotes"
    ],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "listitem"
        ]
    ]
};
var _default = docEndnoteRole;
exports.default = _default;

},{}],"iHlcE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docEndnotesRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "rearnotes [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [
        [
            "doc-endnote"
        ]
    ],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark"
        ]
    ]
};
var _default = docEndnotesRole;
exports.default = _default;

},{}],"i6qii":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docEpigraphRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "epigraph [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = docEpigraphRole;
exports.default = _default;

},{}],"fmEdq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docEpilogueRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "epilogue [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark"
        ]
    ]
};
var _default = docEpilogueRole;
exports.default = _default;

},{}],"13WNK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docErrataRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "errata [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark"
        ]
    ]
};
var _default = docErrataRole;
exports.default = _default;

},{}],"6PC6P":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docExampleRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = docExampleRole;
exports.default = _default;

},{}],"b9rA5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docFootnoteRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "footnote [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = docFootnoteRole;
exports.default = _default;

},{}],"is58r":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docForewordRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "foreword [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark"
        ]
    ]
};
var _default = docForewordRole;
exports.default = _default;

},{}],"h8eZ5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docGlossaryRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "glossary [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [
        [
            "definition"
        ],
        [
            "term"
        ]
    ],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark"
        ]
    ]
};
var _default = docGlossaryRole;
exports.default = _default;

},{}],"bSXas":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docGlossrefRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author",
        "contents"
    ],
    prohibitedProps: [],
    props: {
        "aria-errormessage": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "glossref [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "widget",
            "command",
            "link"
        ]
    ]
};
var _default = docGlossrefRole;
exports.default = _default;

},{}],"7beHX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docIndexRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "index [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark",
            "navigation"
        ]
    ]
};
var _default = docIndexRole;
exports.default = _default;

},{}],"57TPd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docIntroductionRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "introduction [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark"
        ]
    ]
};
var _default = docIntroductionRole;
exports.default = _default;

},{}],"2ntod":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docNoterefRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author",
        "contents"
    ],
    prohibitedProps: [],
    props: {
        "aria-errormessage": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "noteref [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "widget",
            "command",
            "link"
        ]
    ]
};
var _default = docNoterefRole;
exports.default = _default;

},{}],"bqtwf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docNoticeRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "notice [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "note"
        ]
    ]
};
var _default = docNoticeRole;
exports.default = _default;

},{}],"gMklS":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docPagebreakRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: true,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "pagebreak [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "separator"
        ]
    ]
};
var _default = docPagebreakRole;
exports.default = _default;

},{}],"9H3UT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docPagelistRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "page-list [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark",
            "navigation"
        ]
    ]
};
var _default = docPagelistRole;
exports.default = _default;

},{}],"h3Tjn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docPartRole = {
    abstract: false,
    accessibleNameRequired: true,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "part [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark"
        ]
    ]
};
var _default = docPartRole;
exports.default = _default;

},{}],"23xMv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docPrefaceRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "preface [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark"
        ]
    ]
};
var _default = docPrefaceRole;
exports.default = _default;

},{}],"lxDOP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docPrologueRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "prologue [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark"
        ]
    ]
};
var _default = docPrologueRole;
exports.default = _default;

},{}],"8y3Jp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docPullquoteRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
        {
            concept: {
                name: "pullquote [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "none"
        ]
    ]
};
var _default = docPullquoteRole;
exports.default = _default;

},{}],"90OwY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docQnaRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "qna [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section"
        ]
    ]
};
var _default = docQnaRole;
exports.default = _default;

},{}],"5bdK2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docSubtitleRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "subtitle [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "sectionhead"
        ]
    ]
};
var _default = docSubtitleRole;
exports.default = _default;

},{}],"2pxMy":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docTipRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "help [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "note"
        ]
    ]
};
var _default = docTipRole;
exports.default = _default;

},{}],"bvoTd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var docTocRole = {
    abstract: false,
    accessibleNameRequired: false,
    baseConcepts: [],
    childrenPresentational: false,
    nameFrom: [
        "author"
    ],
    prohibitedProps: [],
    props: {
        "aria-disabled": null,
        "aria-errormessage": null,
        "aria-expanded": null,
        "aria-haspopup": null,
        "aria-invalid": null
    },
    relatedConcepts: [
        {
            concept: {
                name: "toc [EPUB-SSV]"
            },
            module: "EPUB"
        }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
        [
            "roletype",
            "structure",
            "section",
            "landmark",
            "navigation"
        ]
    ]
};
var _default = docTocRole;
exports.default = _default;

},{}],"eVJmL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _deepEqual = _interopRequireDefault(require("49a51fdc284e30fe"));
var _iterationDecorator = _interopRequireDefault(require("5a2e338697946922"));
var _rolesMap = _interopRequireDefault(require("6125135587a51bfc"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e2) {
                    throw _e2;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e3) {
            didErr = true;
            err = _e3;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
var elementRoles = [];
var keys = _rolesMap.default.keys();
for(var i = 0; i < keys.length; i++){
    var key = keys[i];
    var role = _rolesMap.default.get(key);
    if (role) {
        var concepts = [].concat(role.baseConcepts, role.relatedConcepts);
        for(var k = 0; k < concepts.length; k++){
            var relation = concepts[k];
            if (relation.module === "HTML") {
                var concept = relation.concept;
                if (concept) (function() {
                    var conceptStr = JSON.stringify(concept);
                    var elementRoleRelation = elementRoles.find(function(relation) {
                        return JSON.stringify(relation[0]) === conceptStr;
                    });
                    var roles = void 0;
                    if (elementRoleRelation) roles = elementRoleRelation[1];
                    else roles = [];
                    var isUnique = true;
                    for(var _i = 0; _i < roles.length; _i++)if (roles[_i] === key) {
                        isUnique = false;
                        break;
                    }
                    if (isUnique) roles.push(key);
                    elementRoles.push([
                        concept,
                        roles
                    ]);
                })();
            }
        }
    }
}
var elementRoleMap = {
    entries: function entries() {
        return elementRoles;
    },
    forEach: function forEach(fn) {
        var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var _iterator = _createForOfIteratorHelper(elementRoles), _step;
        try {
            for(_iterator.s(); !(_step = _iterator.n()).done;){
                var _step$value = _slicedToArray(_step.value, 2), _key = _step$value[0], values = _step$value[1];
                fn.call(thisArg, values, _key, elementRoles);
            }
        } catch (err) {
            _iterator.e(err);
        } finally{
            _iterator.f();
        }
    },
    get: function get(key) {
        var item = elementRoles.find(function(tuple) {
            return (0, _deepEqual.default)(key, tuple[0]);
        });
        return item && item[1];
    },
    has: function has(key) {
        return !!this.get(key);
    },
    keys: function keys() {
        return elementRoles.map(function(_ref) {
            var _ref2 = _slicedToArray(_ref, 1), key = _ref2[0];
            return key;
        });
    },
    values: function values() {
        return elementRoles.map(function(_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2), values = _ref4[1];
            return values;
        });
    }
};
var _default = (0, _iterationDecorator.default)(elementRoleMap, elementRoleMap.entries());
exports.default = _default;

},{"49a51fdc284e30fe":"lLAyU","5a2e338697946922":"kSTdV","6125135587a51bfc":"4bOMs"}],"lLAyU":[function(require,module,exports) {
"use strict";
var objectKeys = require("b793e584f9616d94");
var isArguments = require("2652cdb5019169a3");
var is = require("c4afd84d7aab60da");
var isRegex = require("45e7d026fdd240ed");
var flags = require("b1fe884ffe98dff8");
var isArray = require("e25060a0fc8c3cec");
var isDate = require("96cab9a5e49cd8c1");
var whichBoxedPrimitive = require("d3896313ac41a95e");
var GetIntrinsic = require("9c597b43f13e8f67");
var callBound = require("3487017881e41381");
var whichCollection = require("63483a518a9a3a0");
var getIterator = require("479227ec3274d48c");
var getSideChannel = require("1f871ca01a29958c");
var whichTypedArray = require("b788b55b85ac1aae");
var assign = require("87c333cda5dfc1cf");
var $getTime = callBound("Date.prototype.getTime");
var gPO = Object.getPrototypeOf;
var $objToString = callBound("Object.prototype.toString");
var $Set = GetIntrinsic("%Set%", true);
var $mapHas = callBound("Map.prototype.has", true);
var $mapGet = callBound("Map.prototype.get", true);
var $mapSize = callBound("Map.prototype.size", true);
var $setAdd = callBound("Set.prototype.add", true);
var $setDelete = callBound("Set.prototype.delete", true);
var $setHas = callBound("Set.prototype.has", true);
var $setSize = callBound("Set.prototype.size", true);
// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L401-L414
function setHasEqualElement(set, val1, opts, channel) {
    var i = getIterator(set);
    var result;
    while((result = i.next()) && !result.done)if (internalDeepEqual(val1, result.value, opts, channel)) {
        // Remove the matching element to make sure we do not check that again.
        $setDelete(set, result.value);
        return true;
    }
    return false;
}
// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L416-L439
function findLooseMatchingPrimitives(prim) {
    if (typeof prim === "undefined") return null;
    if (typeof prim === "object") return void 0;
    if (typeof prim === "symbol") return false;
    if (typeof prim === "string" || typeof prim === "number") // Loose equal entries exist only if the string is possible to convert to a regular number and not NaN.
    return +prim === +prim; // eslint-disable-line no-implicit-coercion
    return true;
}
// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L449-L460
function mapMightHaveLoosePrim(a, b, prim, item, opts, channel) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) return altValue;
    var curB = $mapGet(b, altValue);
    var looseOpts = assign({}, opts, {
        strict: false
    });
    if (typeof curB === "undefined" && !$mapHas(b, altValue) || !internalDeepEqual(item, curB, looseOpts, channel)) return false;
    // eslint-disable-next-line no-use-before-define
    return !$mapHas(a, altValue) && internalDeepEqual(item, curB, looseOpts, channel);
}
// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L441-L447
function setMightHaveLoosePrim(a, b, prim) {
    var altValue = findLooseMatchingPrimitives(prim);
    if (altValue != null) return altValue;
    return $setHas(b, altValue) && !$setHas(a, altValue);
}
// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L518-L533
function mapHasEqualEntry(set, map, key1, item1, opts, channel) {
    var i = getIterator(set);
    var result;
    var key2;
    while((result = i.next()) && !result.done){
        key2 = result.value;
        if (// eslint-disable-next-line no-use-before-define
        internalDeepEqual(key1, key2, opts, channel) && internalDeepEqual(item1, $mapGet(map, key2), opts, channel)) {
            $setDelete(set, key2);
            return true;
        }
    }
    return false;
}
function internalDeepEqual(actual, expected, options, channel) {
    var opts = options || {};
    // 7.1. All identical values are equivalent, as determined by ===.
    if (opts.strict ? is(actual, expected) : actual === expected) return true;
    var actualBoxed = whichBoxedPrimitive(actual);
    var expectedBoxed = whichBoxedPrimitive(expected);
    if (actualBoxed !== expectedBoxed) return false;
    // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
    if (!actual || !expected || typeof actual !== "object" && typeof expected !== "object") return opts.strict ? is(actual, expected) : actual == expected; // eslint-disable-line eqeqeq
    /*
   * 7.4. For all other Object pairs, including Array objects, equivalence is
   * determined by having the same number of owned properties (as verified
   * with Object.prototype.hasOwnProperty.call), the same set of keys
   * (although not necessarily the same order), equivalent values for every
   * corresponding key, and an identical 'prototype' property. Note: this
   * accounts for both named and indexed properties on Arrays.
   */ // see https://github.com/nodejs/node/commit/d3aafd02efd3a403d646a3044adcf14e63a88d32 for memos/channel inspiration
    var hasActual = channel.has(actual);
    var hasExpected = channel.has(expected);
    var sentinel;
    if (hasActual && hasExpected) {
        if (channel.get(actual) === channel.get(expected)) return true;
    } else sentinel = {};
    if (!hasActual) channel.set(actual, sentinel);
    if (!hasExpected) channel.set(expected, sentinel);
    // eslint-disable-next-line no-use-before-define
    return objEquiv(actual, expected, opts, channel);
}
function isBuffer(x) {
    if (!x || typeof x !== "object" || typeof x.length !== "number") return false;
    if (typeof x.copy !== "function" || typeof x.slice !== "function") return false;
    if (x.length > 0 && typeof x[0] !== "number") return false;
    return !!(x.constructor && x.constructor.isBuffer && x.constructor.isBuffer(x));
}
function setEquiv(a, b, opts, channel) {
    if ($setSize(a) !== $setSize(b)) return false;
    var iA = getIterator(a);
    var iB = getIterator(b);
    var resultA;
    var resultB;
    var set;
    while((resultA = iA.next()) && !resultA.done){
        if (resultA.value && typeof resultA.value === "object") {
            if (!set) set = new $Set();
            $setAdd(set, resultA.value);
        } else if (!$setHas(b, resultA.value)) {
            if (opts.strict) return false;
            if (!setMightHaveLoosePrim(a, b, resultA.value)) return false;
            if (!set) set = new $Set();
            $setAdd(set, resultA.value);
        }
    }
    if (set) {
        while((resultB = iB.next()) && !resultB.done){
            // We have to check if a primitive value is already matching and only if it's not, go hunting for it.
            if (resultB.value && typeof resultB.value === "object") {
                if (!setHasEqualElement(set, resultB.value, opts.strict, channel)) return false;
            } else if (!opts.strict && !$setHas(a, resultB.value) && !setHasEqualElement(set, resultB.value, opts.strict, channel)) return false;
        }
        return $setSize(set) === 0;
    }
    return true;
}
function mapEquiv(a, b, opts, channel) {
    if ($mapSize(a) !== $mapSize(b)) return false;
    var iA = getIterator(a);
    var iB = getIterator(b);
    var resultA;
    var resultB;
    var set;
    var key;
    var item1;
    var item2;
    while((resultA = iA.next()) && !resultA.done){
        key = resultA.value[0];
        item1 = resultA.value[1];
        if (key && typeof key === "object") {
            if (!set) set = new $Set();
            $setAdd(set, key);
        } else {
            item2 = $mapGet(b, key);
            if (typeof item2 === "undefined" && !$mapHas(b, key) || !internalDeepEqual(item1, item2, opts, channel)) {
                if (opts.strict) return false;
                if (!mapMightHaveLoosePrim(a, b, key, item1, opts, channel)) return false;
                if (!set) set = new $Set();
                $setAdd(set, key);
            }
        }
    }
    if (set) {
        while((resultB = iB.next()) && !resultB.done){
            key = resultB.value[0];
            item2 = resultB.value[1];
            if (key && typeof key === "object") {
                if (!mapHasEqualEntry(set, a, key, item2, opts, channel)) return false;
            } else if (!opts.strict && (!a.has(key) || !internalDeepEqual($mapGet(a, key), item2, opts, channel)) && !mapHasEqualEntry(set, a, key, item2, assign({}, opts, {
                strict: false
            }), channel)) return false;
        }
        return $setSize(set) === 0;
    }
    return true;
}
function objEquiv(a, b, opts, channel) {
    /* eslint max-statements: [2, 100], max-lines-per-function: [2, 120], max-depth: [2, 5] */ var i, key;
    if (typeof a !== typeof b) return false;
    if (a == null || b == null) return false;
    if ($objToString(a) !== $objToString(b)) return false;
    if (isArguments(a) !== isArguments(b)) return false;
    var aIsArray = isArray(a);
    var bIsArray = isArray(b);
    if (aIsArray !== bIsArray) return false;
    // TODO: replace when a cross-realm brand check is available
    var aIsError = a instanceof Error;
    var bIsError = b instanceof Error;
    if (aIsError !== bIsError) return false;
    if (aIsError || bIsError) {
        if (a.name !== b.name || a.message !== b.message) return false;
    }
    var aIsRegex = isRegex(a);
    var bIsRegex = isRegex(b);
    if (aIsRegex !== bIsRegex) return false;
    if ((aIsRegex || bIsRegex) && (a.source !== b.source || flags(a) !== flags(b))) return false;
    var aIsDate = isDate(a);
    var bIsDate = isDate(b);
    if (aIsDate !== bIsDate) return false;
    if (aIsDate || bIsDate) {
        if ($getTime(a) !== $getTime(b)) return false;
    }
    if (opts.strict && gPO && gPO(a) !== gPO(b)) return false;
    if (whichTypedArray(a) !== whichTypedArray(b)) return false;
    var aIsBuffer = isBuffer(a);
    var bIsBuffer = isBuffer(b);
    if (aIsBuffer !== bIsBuffer) return false;
    if (aIsBuffer || bIsBuffer) {
        if (a.length !== b.length) return false;
        for(i = 0; i < a.length; i++){
            if (a[i] !== b[i]) return false;
        }
        return true;
    }
    if (typeof a !== typeof b) return false;
    var ka = objectKeys(a);
    var kb = objectKeys(b);
    // having the same number of owned properties (keys incorporates hasOwnProperty)
    if (ka.length !== kb.length) return false;
    // the same set of keys (although not necessarily the same order),
    ka.sort();
    kb.sort();
    // ~~~cheap key test
    for(i = ka.length - 1; i >= 0; i--){
        if (ka[i] != kb[i]) return false;
         // eslint-disable-line eqeqeq
    }
    // equivalent values for every corresponding key, and ~~~possibly expensive deep test
    for(i = ka.length - 1; i >= 0; i--){
        key = ka[i];
        if (!internalDeepEqual(a[key], b[key], opts, channel)) return false;
    }
    var aCollection = whichCollection(a);
    var bCollection = whichCollection(b);
    if (aCollection !== bCollection) return false;
    if (aCollection === "Set" || bCollection === "Set") return setEquiv(a, b, opts, channel);
    if (aCollection === "Map") return mapEquiv(a, b, opts, channel);
    return true;
}
module.exports = function deepEqual(a, b, opts) {
    return internalDeepEqual(a, b, opts, getSideChannel());
};

},{"b793e584f9616d94":"fRqhn","2652cdb5019169a3":"3vnij","c4afd84d7aab60da":"g4mHL","45e7d026fdd240ed":"gp1Mr","b1fe884ffe98dff8":"dTdaB","e25060a0fc8c3cec":"7jHzg","96cab9a5e49cd8c1":"3ql0n","d3896313ac41a95e":"lxA6U","9c597b43f13e8f67":"cHvuQ","3487017881e41381":"b8wdo","63483a518a9a3a0":"huybi","479227ec3274d48c":"20Q90","1f871ca01a29958c":"2W13r","b788b55b85ac1aae":"1TjNZ","87c333cda5dfc1cf":"6TDCy"}],"fRqhn":[function(require,module,exports) {
"use strict";
var slice = Array.prototype.slice;
var isArgs = require("a4e667f01090a831");
var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) {
    return origKeys(o);
} : require("4d9cc597cc67d55a");
var originalKeys = Object.keys;
keysShim.shim = function shimObjectKeys() {
    if (Object.keys) {
        var keysWorksWithArguments = function() {
            // Safari 5.0 bug
            var args = Object.keys(arguments);
            return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) Object.keys = function keys(object) {
            if (isArgs(object)) return originalKeys(slice.call(object));
            return originalKeys(object);
        };
    } else Object.keys = keysShim;
    return Object.keys || keysShim;
};
module.exports = keysShim;

},{"a4e667f01090a831":"l1NQw","4d9cc597cc67d55a":"gN83j"}],"l1NQw":[function(require,module,exports) {
"use strict";
var toStr = Object.prototype.toString;
module.exports = function isArguments(value) {
    var str = toStr.call(value);
    var isArgs = str === "[object Arguments]";
    if (!isArgs) isArgs = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr.call(value.callee) === "[object Function]";
    return isArgs;
};

},{}],"gN83j":[function(require,module,exports) {
"use strict";
var keysShim;
if (!Object.keys) {
    // modified from https://github.com/es-shims/es5-shim
    var has = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var isArgs = require("92408f3d63be13b7"); // eslint-disable-line global-require
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var hasDontEnumBug = !isEnumerable.call({
        toString: null
    }, "toString");
    var hasProtoEnumBug = isEnumerable.call(function() {}, "prototype");
    var dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
    ];
    var equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
    };
    var excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
    };
    var hasAutomationEqualityBug = function() {
        /* global window */ if (typeof window === "undefined") return false;
        for(var k in window)try {
            if (!excludedKeys["$" + k] && has.call(window, k) && window[k] !== null && typeof window[k] === "object") try {
                equalsConstructorPrototype(window[k]);
            } catch (e) {
                return true;
            }
        } catch (e) {
            return true;
        }
        return false;
    }();
    var equalsConstructorPrototypeIfNotBuggy = function(o) {
        /* global window */ if (typeof window === "undefined" || !hasAutomationEqualityBug) return equalsConstructorPrototype(o);
        try {
            return equalsConstructorPrototype(o);
        } catch (e) {
            return false;
        }
    };
    keysShim = function keys(object) {
        var isObject = object !== null && typeof object === "object";
        var isFunction = toStr.call(object) === "[object Function]";
        var isArguments = isArgs(object);
        var isString = isObject && toStr.call(object) === "[object String]";
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments) throw new TypeError("Object.keys called on a non-object");
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) for(var i = 0; i < object.length; ++i)theKeys.push(String(i));
        if (isArguments && object.length > 0) for(var j = 0; j < object.length; ++j)theKeys.push(String(j));
        else {
            for(var name in object)if (!(skipProto && name === "prototype") && has.call(object, name)) theKeys.push(String(name));
        }
        if (hasDontEnumBug) {
            var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
            for(var k = 0; k < dontEnums.length; ++k)if (!(skipConstructor && dontEnums[k] === "constructor") && has.call(object, dontEnums[k])) theKeys.push(dontEnums[k]);
        }
        return theKeys;
    };
}
module.exports = keysShim;

},{"92408f3d63be13b7":"l1NQw"}],"3vnij":[function(require,module,exports) {
"use strict";
var hasToStringTag = require("e68daacdd93dbfd8")();
var callBound = require("5974563e0a763fa5");
var $toString = callBound("Object.prototype.toString");
var isStandardArguments = function isArguments(value) {
    if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) return false;
    return $toString(value) === "[object Arguments]";
};
var isLegacyArguments = function isArguments(value) {
    if (isStandardArguments(value)) return true;
    return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && $toString(value.callee) === "[object Function]";
};
var supportsStandardArguments = function() {
    return isStandardArguments(arguments);
}();
isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests
module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;

},{"e68daacdd93dbfd8":"bCXMz","5974563e0a763fa5":"b8wdo"}],"bCXMz":[function(require,module,exports) {
"use strict";
var hasSymbols = require("8b713d85d77566d3");
module.exports = function hasToStringTagShams() {
    return hasSymbols() && !!Symbol.toStringTag;
};

},{"8b713d85d77566d3":"eJV7C"}],"eJV7C":[function(require,module,exports) {
"use strict";
/* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") return false;
    if (typeof Symbol.iterator === "symbol") return true;
    var obj = {};
    var sym = Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") return false;
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") return false;
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") return false;
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(sym in obj)return false;
     // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) return false;
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) return false;
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) return false;
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
    if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
    }
    return true;
};

},{}],"b8wdo":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("d6f9f536f5c7fedc");
var callBind = require("5c83d8073f624461");
var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
module.exports = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) return callBind(intrinsic);
    return intrinsic;
};

},{"d6f9f536f5c7fedc":"cHvuQ","5c83d8073f624461":"lC0X3"}],"cHvuQ":[function(require,module,exports) {
"use strict";
var undefined;
var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch (e) {}
};
var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) try {
    $gOPD({}, "");
} catch (e) {
    $gOPD = null; // this is IE 8, which has a broken gOPD
}
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = require("2c5513874b20b79c")();
var getProto = Object.getPrototypeOf || function(x) {
    return x.__proto__;
}; // eslint-disable-line no-proto
var needsEval = {};
var TypedArray = typeof Uint8Array === "undefined" ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    "%AggregateError%": typeof AggregateError === "undefined" ? undefined : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined : ArrayBuffer,
    "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
    "%AsyncFromSyncIteratorPrototype%": undefined,
    "%AsyncFunction%": needsEval,
    "%AsyncGenerator%": needsEval,
    "%AsyncGeneratorFunction%": needsEval,
    "%AsyncIteratorPrototype%": needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? undefined : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? undefined : BigInt,
    "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? undefined : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array === "undefined" ? undefined : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? undefined : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined : FinalizationRegistry,
    "%Function%": $Function,
    "%GeneratorFunction%": needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? undefined : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? undefined : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? undefined : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
    "%JSON%": typeof JSON === "object" ? JSON : undefined,
    "%Map%": typeof Map === "undefined" ? undefined : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? undefined : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? undefined : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? undefined : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? undefined : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined,
    "%Symbol%": hasSymbols ? Symbol : undefined,
    "%SyntaxError%": $SyntaxError,
    "%ThrowTypeError%": ThrowTypeError,
    "%TypedArray%": TypedArray,
    "%TypeError%": $TypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? undefined : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? undefined : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? undefined : WeakSet
};
try {
    null.error; // eslint-disable-line no-unused-expressions
} catch (e) {
    // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
    var errorProto = getProto(getProto(e));
    INTRINSICS["%Error.prototype%"] = errorProto;
}
var doEval = function doEval(name) {
    var value;
    if (name === "%AsyncFunction%") value = getEvalledConstructor("async function () {}");
    else if (name === "%GeneratorFunction%") value = getEvalledConstructor("function* () {}");
    else if (name === "%AsyncGeneratorFunction%") value = getEvalledConstructor("async function* () {}");
    else if (name === "%AsyncGenerator%") {
        var fn = doEval("%AsyncGeneratorFunction%");
        if (fn) value = fn.prototype;
    } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval("%AsyncGenerator%");
        if (gen) value = getProto(gen.prototype);
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    "%ArrayBufferPrototype%": [
        "ArrayBuffer",
        "prototype"
    ],
    "%ArrayPrototype%": [
        "Array",
        "prototype"
    ],
    "%ArrayProto_entries%": [
        "Array",
        "prototype",
        "entries"
    ],
    "%ArrayProto_forEach%": [
        "Array",
        "prototype",
        "forEach"
    ],
    "%ArrayProto_keys%": [
        "Array",
        "prototype",
        "keys"
    ],
    "%ArrayProto_values%": [
        "Array",
        "prototype",
        "values"
    ],
    "%AsyncFunctionPrototype%": [
        "AsyncFunction",
        "prototype"
    ],
    "%AsyncGenerator%": [
        "AsyncGeneratorFunction",
        "prototype"
    ],
    "%AsyncGeneratorPrototype%": [
        "AsyncGeneratorFunction",
        "prototype",
        "prototype"
    ],
    "%BooleanPrototype%": [
        "Boolean",
        "prototype"
    ],
    "%DataViewPrototype%": [
        "DataView",
        "prototype"
    ],
    "%DatePrototype%": [
        "Date",
        "prototype"
    ],
    "%ErrorPrototype%": [
        "Error",
        "prototype"
    ],
    "%EvalErrorPrototype%": [
        "EvalError",
        "prototype"
    ],
    "%Float32ArrayPrototype%": [
        "Float32Array",
        "prototype"
    ],
    "%Float64ArrayPrototype%": [
        "Float64Array",
        "prototype"
    ],
    "%FunctionPrototype%": [
        "Function",
        "prototype"
    ],
    "%Generator%": [
        "GeneratorFunction",
        "prototype"
    ],
    "%GeneratorPrototype%": [
        "GeneratorFunction",
        "prototype",
        "prototype"
    ],
    "%Int8ArrayPrototype%": [
        "Int8Array",
        "prototype"
    ],
    "%Int16ArrayPrototype%": [
        "Int16Array",
        "prototype"
    ],
    "%Int32ArrayPrototype%": [
        "Int32Array",
        "prototype"
    ],
    "%JSONParse%": [
        "JSON",
        "parse"
    ],
    "%JSONStringify%": [
        "JSON",
        "stringify"
    ],
    "%MapPrototype%": [
        "Map",
        "prototype"
    ],
    "%NumberPrototype%": [
        "Number",
        "prototype"
    ],
    "%ObjectPrototype%": [
        "Object",
        "prototype"
    ],
    "%ObjProto_toString%": [
        "Object",
        "prototype",
        "toString"
    ],
    "%ObjProto_valueOf%": [
        "Object",
        "prototype",
        "valueOf"
    ],
    "%PromisePrototype%": [
        "Promise",
        "prototype"
    ],
    "%PromiseProto_then%": [
        "Promise",
        "prototype",
        "then"
    ],
    "%Promise_all%": [
        "Promise",
        "all"
    ],
    "%Promise_reject%": [
        "Promise",
        "reject"
    ],
    "%Promise_resolve%": [
        "Promise",
        "resolve"
    ],
    "%RangeErrorPrototype%": [
        "RangeError",
        "prototype"
    ],
    "%ReferenceErrorPrototype%": [
        "ReferenceError",
        "prototype"
    ],
    "%RegExpPrototype%": [
        "RegExp",
        "prototype"
    ],
    "%SetPrototype%": [
        "Set",
        "prototype"
    ],
    "%SharedArrayBufferPrototype%": [
        "SharedArrayBuffer",
        "prototype"
    ],
    "%StringPrototype%": [
        "String",
        "prototype"
    ],
    "%SymbolPrototype%": [
        "Symbol",
        "prototype"
    ],
    "%SyntaxErrorPrototype%": [
        "SyntaxError",
        "prototype"
    ],
    "%TypedArrayPrototype%": [
        "TypedArray",
        "prototype"
    ],
    "%TypeErrorPrototype%": [
        "TypeError",
        "prototype"
    ],
    "%Uint8ArrayPrototype%": [
        "Uint8Array",
        "prototype"
    ],
    "%Uint8ClampedArrayPrototype%": [
        "Uint8ClampedArray",
        "prototype"
    ],
    "%Uint16ArrayPrototype%": [
        "Uint16Array",
        "prototype"
    ],
    "%Uint32ArrayPrototype%": [
        "Uint32Array",
        "prototype"
    ],
    "%URIErrorPrototype%": [
        "URIError",
        "prototype"
    ],
    "%WeakMapPrototype%": [
        "WeakMap",
        "prototype"
    ],
    "%WeakSetPrototype%": [
        "WeakSet",
        "prototype"
    ]
};
var bind = require("a207102719bc15f4");
var hasOwn = require("1fdb1fef10d626b6");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
var $exec = bind.call(Function.call, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === "%" && last !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    else if (last === "%" && first !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) value = doEval(intrinsicName);
        if (typeof value === "undefined" && !allowMissing) throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError("intrinsic " + name + " does not exist!");
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== "string" || name.length === 0) throw new $TypeError("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof allowMissing !== "boolean") throw new $TypeError('"allowMissing" argument must be a boolean');
    if ($exec(/^%?[^%]*%?$/, name) === null) throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || last === '"' || last === "'" || last === "`") && first !== last) throw new $SyntaxError("property names with quotes must have matching quotes");
        if (part === "constructor" || !isOwn) skipFurtherCaching = true;
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) value = INTRINSICS[intrinsicRealName];
        else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
                return void 0;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && "get" in desc && !("originalValue" in desc.get)) value = desc.get;
                else value = value[part];
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) INTRINSICS[intrinsicRealName] = value;
        }
    }
    return value;
};

},{"2c5513874b20b79c":"fDGjG","a207102719bc15f4":"8l5hZ","1fdb1fef10d626b6":"1d1fJ"}],"fDGjG":[function(require,module,exports) {
"use strict";
var origSymbol = typeof Symbol !== "undefined" && Symbol;
var hasSymbolSham = require("9bebc3bd7e816130");
module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== "function") return false;
    if (typeof Symbol !== "function") return false;
    if (typeof origSymbol("foo") !== "symbol") return false;
    if (typeof Symbol("bar") !== "symbol") return false;
    return hasSymbolSham();
};

},{"9bebc3bd7e816130":"eJV7C"}],"8l5hZ":[function(require,module,exports) {
"use strict";
var implementation = require("47d828b7c5ba7e0a");
module.exports = Function.prototype.bind || implementation;

},{"47d828b7c5ba7e0a":"8QC7E"}],"8QC7E":[function(require,module,exports) {
"use strict";
/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = "[object Function]";
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== "function" || toStr.call(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
    var args = slice.call(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, args.concat(slice.call(arguments)));
            if (Object(result) === result) return result;
            return this;
        } else return target.apply(that, args.concat(slice.call(arguments)));
    };
    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++)boundArgs.push("$" + i);
    bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};

},{}],"1d1fJ":[function(require,module,exports) {
"use strict";
var bind = require("7d7a031bfc039d8c");
module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);

},{"7d7a031bfc039d8c":"8l5hZ"}],"lC0X3":[function(require,module,exports) {
"use strict";
var bind = require("cd46c52d25819987");
var GetIntrinsic = require("70f7c9da6b07143d");
var $apply = GetIntrinsic("%Function.prototype.apply%");
var $call = GetIntrinsic("%Function.prototype.call%");
var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
var $max = GetIntrinsic("%Math.max%");
if ($defineProperty) try {
    $defineProperty({}, "a", {
        value: 1
    });
} catch (e) {
    // IE 8 has a broken defineProperty
    $defineProperty = null;
}
module.exports = function callBind(originalFunction) {
    var func = $reflectApply(bind, $call, arguments);
    if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, "length");
        if (desc.configurable) // original length, plus the receiver, minus any additional arguments (after the receiver)
        $defineProperty(func, "length", {
            value: 1 + $max(0, originalFunction.length - (arguments.length - 1))
        });
    }
    return func;
};
var applyBind = function applyBind() {
    return $reflectApply(bind, $apply, arguments);
};
if ($defineProperty) $defineProperty(module.exports, "apply", {
    value: applyBind
});
else module.exports.apply = applyBind;

},{"cd46c52d25819987":"8l5hZ","70f7c9da6b07143d":"cHvuQ"}],"g4mHL":[function(require,module,exports) {
"use strict";
var define = require("8ec7e6c609b6309a");
var callBind = require("a2ac951cb83e5164");
var implementation = require("61b8af970593861b");
var getPolyfill = require("8921f300c62c420d");
var shim = require("12c7b7ef1dd6ba93");
var polyfill = callBind(getPolyfill(), Object);
define(polyfill, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
});
module.exports = polyfill;

},{"8ec7e6c609b6309a":"9JfrK","a2ac951cb83e5164":"lC0X3","61b8af970593861b":"a9KHI","8921f300c62c420d":"g8nKm","12c7b7ef1dd6ba93":"cfzsF"}],"9JfrK":[function(require,module,exports) {
"use strict";
var keys = require("2b1249373083e78b");
var hasSymbols = typeof Symbol === "function" && typeof Symbol("foo") === "symbol";
var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;
var isFunction = function(fn) {
    return typeof fn === "function" && toStr.call(fn) === "[object Function]";
};
var hasPropertyDescriptors = require("e426ee657026f109")();
var supportsDescriptors = origDefineProperty && hasPropertyDescriptors;
var defineProperty = function(object, name, value, predicate) {
    if (name in object) {
        if (predicate === true) {
            if (object[name] === value) return;
        } else if (!isFunction(predicate) || !predicate()) return;
    }
    if (supportsDescriptors) origDefineProperty(object, name, {
        configurable: true,
        enumerable: false,
        value: value,
        writable: true
    });
    else object[name] = value; // eslint-disable-line no-param-reassign
};
var defineProperties = function(object, map) {
    var predicates = arguments.length > 2 ? arguments[2] : {};
    var props = keys(map);
    if (hasSymbols) props = concat.call(props, Object.getOwnPropertySymbols(map));
    for(var i = 0; i < props.length; i += 1)defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
};
defineProperties.supportsDescriptors = !!supportsDescriptors;
module.exports = defineProperties;

},{"2b1249373083e78b":"fRqhn","e426ee657026f109":"h0mr6"}],"h0mr6":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("459bc73ba6548fca");
var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
var hasPropertyDescriptors = function hasPropertyDescriptors() {
    if ($defineProperty) try {
        $defineProperty({}, "a", {
            value: 1
        });
        return true;
    } catch (e) {
        // IE 8 has a broken defineProperty
        return false;
    }
    return false;
};
hasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {
    // node v0.6 has a bug where array lengths can be Set but not Defined
    if (!hasPropertyDescriptors()) return null;
    try {
        return $defineProperty([], "length", {
            value: 1
        }).length !== 1;
    } catch (e) {
        // In Firefox 4-22, defining length on an array throws an exception.
        return true;
    }
};
module.exports = hasPropertyDescriptors;

},{"459bc73ba6548fca":"cHvuQ"}],"a9KHI":[function(require,module,exports) {
"use strict";
var numberIsNaN = function(value) {
    return value !== value;
};
module.exports = function is(a, b) {
    if (a === 0 && b === 0) return 1 / a === 1 / b;
    if (a === b) return true;
    if (numberIsNaN(a) && numberIsNaN(b)) return true;
    return false;
};

},{}],"g8nKm":[function(require,module,exports) {
"use strict";
var implementation = require("27217be26ba1bc68");
module.exports = function getPolyfill() {
    return typeof Object.is === "function" ? Object.is : implementation;
};

},{"27217be26ba1bc68":"a9KHI"}],"cfzsF":[function(require,module,exports) {
"use strict";
var getPolyfill = require("a1ef25ad0748d5c7");
var define = require("6aa1ce28b4e98782");
module.exports = function shimObjectIs() {
    var polyfill = getPolyfill();
    define(Object, {
        is: polyfill
    }, {
        is: function testObjectIs() {
            return Object.is !== polyfill;
        }
    });
    return polyfill;
};

},{"a1ef25ad0748d5c7":"g8nKm","6aa1ce28b4e98782":"9JfrK"}],"gp1Mr":[function(require,module,exports) {
"use strict";
var callBound = require("a9ba4d8024200e1f");
var hasToStringTag = require("3b05d6c99e095f0a")();
var has;
var $exec;
var isRegexMarker;
var badStringifier;
if (hasToStringTag) {
    has = callBound("Object.prototype.hasOwnProperty");
    $exec = callBound("RegExp.prototype.exec");
    isRegexMarker = {};
    var throwRegexMarker = function() {
        throw isRegexMarker;
    };
    badStringifier = {
        toString: throwRegexMarker,
        valueOf: throwRegexMarker
    };
    if (typeof Symbol.toPrimitive === "symbol") badStringifier[Symbol.toPrimitive] = throwRegexMarker;
}
var $toString = callBound("Object.prototype.toString");
var gOPD = Object.getOwnPropertyDescriptor;
var regexClass = "[object RegExp]";
module.exports = hasToStringTag ? function isRegex(value) {
    if (!value || typeof value !== "object") return false;
    var descriptor = gOPD(value, "lastIndex");
    var hasLastIndexDataProperty = descriptor && has(descriptor, "value");
    if (!hasLastIndexDataProperty) return false;
    try {
        $exec(value, badStringifier);
    } catch (e) {
        return e === isRegexMarker;
    }
} : function isRegex(value) {
    // In older browsers, typeof regex incorrectly returns 'function'
    if (!value || typeof value !== "object" && typeof value !== "function") return false;
    return $toString(value) === regexClass;
};

},{"a9ba4d8024200e1f":"b8wdo","3b05d6c99e095f0a":"bCXMz"}],"dTdaB":[function(require,module,exports) {
"use strict";
var define = require("544dc5203b33e710");
var callBind = require("3b420e3a6897b1f7");
var implementation = require("831f2ebbc921f422");
var getPolyfill = require("56d4dd31cb9b7212");
var shim = require("8382974e1f6b2ee4");
var flagsBound = callBind(getPolyfill());
define(flagsBound, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
});
module.exports = flagsBound;

},{"544dc5203b33e710":"9JfrK","3b420e3a6897b1f7":"lC0X3","831f2ebbc921f422":"feeks","56d4dd31cb9b7212":"4sDa1","8382974e1f6b2ee4":"34I69"}],"feeks":[function(require,module,exports) {
"use strict";
var functionsHaveConfigurableNames = require("469b71a5d50e65e6").functionsHaveConfigurableNames();
var $Object = Object;
var $TypeError = TypeError;
module.exports = function flags() {
    if (this != null && this !== $Object(this)) throw new $TypeError("RegExp.prototype.flags getter called on non-object");
    var result = "";
    if (this.hasIndices) result += "d";
    if (this.global) result += "g";
    if (this.ignoreCase) result += "i";
    if (this.multiline) result += "m";
    if (this.dotAll) result += "s";
    if (this.unicode) result += "u";
    if (this.sticky) result += "y";
    return result;
};
if (functionsHaveConfigurableNames && Object.defineProperty) Object.defineProperty(module.exports, "name", {
    value: "get flags"
});

},{"469b71a5d50e65e6":"cWZQu"}],"cWZQu":[function(require,module,exports) {
"use strict";
var functionsHaveNames = function functionsHaveNames() {
    return typeof (function f() {}).name === "string";
};
var gOPD = Object.getOwnPropertyDescriptor;
if (gOPD) try {
    gOPD([], "length");
} catch (e) {
    // IE 8 has a broken gOPD
    gOPD = null;
}
functionsHaveNames.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
    if (!functionsHaveNames() || !gOPD) return false;
    var desc = gOPD(function() {}, "name");
    return !!desc && !!desc.configurable;
};
var $bind = Function.prototype.bind;
functionsHaveNames.boundFunctionsHaveNames = function boundFunctionsHaveNames() {
    return functionsHaveNames() && typeof $bind === "function" && (function f() {}).bind().name !== "";
};
module.exports = functionsHaveNames;

},{}],"4sDa1":[function(require,module,exports) {
"use strict";
var implementation = require("7da4e8f2bccd7560");
var supportsDescriptors = require("a9b8c127bd4aabe9").supportsDescriptors;
var $gOPD = Object.getOwnPropertyDescriptor;
module.exports = function getPolyfill() {
    if (supportsDescriptors && /a/mig.flags === "gim") {
        var descriptor = $gOPD(RegExp.prototype, "flags");
        if (descriptor && typeof descriptor.get === "function" && typeof RegExp.prototype.dotAll === "boolean" && typeof RegExp.prototype.hasIndices === "boolean") {
            /* eslint getter-return: 0 */ var calls = "";
            var o = {};
            Object.defineProperty(o, "hasIndices", {
                get: function() {
                    calls += "d";
                }
            });
            Object.defineProperty(o, "sticky", {
                get: function() {
                    calls += "y";
                }
            });
            if (calls === "dy") return descriptor.get;
        }
    }
    return implementation;
};

},{"7da4e8f2bccd7560":"feeks","a9b8c127bd4aabe9":"9JfrK"}],"34I69":[function(require,module,exports) {
"use strict";
var supportsDescriptors = require("24331d3e39d1f9dd").supportsDescriptors;
var getPolyfill = require("a80114c940fbdb3f");
var gOPD = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var TypeErr = TypeError;
var getProto = Object.getPrototypeOf;
var regex = /a/;
module.exports = function shimFlags() {
    if (!supportsDescriptors || !getProto) throw new TypeErr("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");
    var polyfill = getPolyfill();
    var proto = getProto(regex);
    var descriptor = gOPD(proto, "flags");
    if (!descriptor || descriptor.get !== polyfill) defineProperty(proto, "flags", {
        configurable: true,
        enumerable: false,
        get: polyfill
    });
    return polyfill;
};

},{"24331d3e39d1f9dd":"9JfrK","a80114c940fbdb3f":"4sDa1"}],"7jHzg":[function(require,module,exports) {
var toString = {}.toString;
module.exports = Array.isArray || function(arr) {
    return toString.call(arr) == "[object Array]";
};

},{}],"3ql0n":[function(require,module,exports) {
"use strict";
var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
    try {
        getDay.call(value);
        return true;
    } catch (e) {
        return false;
    }
};
var toStr = Object.prototype.toString;
var dateClass = "[object Date]";
var hasToStringTag = require("8d4b5eade7b2f70b")();
module.exports = function isDateObject(value) {
    if (typeof value !== "object" || value === null) return false;
    return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};

},{"8d4b5eade7b2f70b":"bCXMz"}],"lxA6U":[function(require,module,exports) {
"use strict";
var isString = require("608d53224a7b40e2");
var isNumber = require("8795c221a5b68e95");
var isBoolean = require("86ddd9d94e6851dd");
var isSymbol = require("fd997e3f5729f81f");
var isBigInt = require("e4cd200bc95dceaf");
// eslint-disable-next-line consistent-return
module.exports = function whichBoxedPrimitive(value) {
    // eslint-disable-next-line eqeqeq
    if (value == null || typeof value !== "object" && typeof value !== "function") return null;
    if (isString(value)) return "String";
    if (isNumber(value)) return "Number";
    if (isBoolean(value)) return "Boolean";
    if (isSymbol(value)) return "Symbol";
    if (isBigInt(value)) return "BigInt";
};

},{"608d53224a7b40e2":"4Jj9b","8795c221a5b68e95":"biCyI","86ddd9d94e6851dd":"3TyU2","fd997e3f5729f81f":"i3AZK","e4cd200bc95dceaf":"fRZDP"}],"4Jj9b":[function(require,module,exports) {
"use strict";
var strValue = String.prototype.valueOf;
var tryStringObject = function tryStringObject(value) {
    try {
        strValue.call(value);
        return true;
    } catch (e) {
        return false;
    }
};
var toStr = Object.prototype.toString;
var strClass = "[object String]";
var hasToStringTag = require("2c3a02adcd321c26")();
module.exports = function isString(value) {
    if (typeof value === "string") return true;
    if (typeof value !== "object") return false;
    return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};

},{"2c3a02adcd321c26":"bCXMz"}],"biCyI":[function(require,module,exports) {
"use strict";
var numToStr = Number.prototype.toString;
var tryNumberObject = function tryNumberObject(value) {
    try {
        numToStr.call(value);
        return true;
    } catch (e) {
        return false;
    }
};
var toStr = Object.prototype.toString;
var numClass = "[object Number]";
var hasToStringTag = require("5eaf08deca3447bc")();
module.exports = function isNumberObject(value) {
    if (typeof value === "number") return true;
    if (typeof value !== "object") return false;
    return hasToStringTag ? tryNumberObject(value) : toStr.call(value) === numClass;
};

},{"5eaf08deca3447bc":"bCXMz"}],"3TyU2":[function(require,module,exports) {
"use strict";
var callBound = require("2ad1f9c70e9aea0");
var $boolToStr = callBound("Boolean.prototype.toString");
var $toString = callBound("Object.prototype.toString");
var tryBooleanObject = function booleanBrandCheck(value) {
    try {
        $boolToStr(value);
        return true;
    } catch (e) {
        return false;
    }
};
var boolClass = "[object Boolean]";
var hasToStringTag = require("2d8affeac0c7e9d7")();
module.exports = function isBoolean(value) {
    if (typeof value === "boolean") return true;
    if (value === null || typeof value !== "object") return false;
    return hasToStringTag && Symbol.toStringTag in value ? tryBooleanObject(value) : $toString(value) === boolClass;
};

},{"2ad1f9c70e9aea0":"b8wdo","2d8affeac0c7e9d7":"bCXMz"}],"i3AZK":[function(require,module,exports) {
"use strict";
var toStr = Object.prototype.toString;
var hasSymbols = require("301c8c3f8b04c10f")();
if (hasSymbols) {
    var symToStr = Symbol.prototype.toString;
    var symStringRegex = /^Symbol\(.*\)$/;
    var isSymbolObject = function isRealSymbolObject(value) {
        if (typeof value.valueOf() !== "symbol") return false;
        return symStringRegex.test(symToStr.call(value));
    };
    module.exports = function isSymbol(value) {
        if (typeof value === "symbol") return true;
        if (toStr.call(value) !== "[object Symbol]") return false;
        try {
            return isSymbolObject(value);
        } catch (e) {
            return false;
        }
    };
} else module.exports = function isSymbol(value) {
    // this environment does not support Symbols.
    return false;
};

},{"301c8c3f8b04c10f":"fDGjG"}],"fRZDP":[function(require,module,exports) {
"use strict";
var hasBigInts = require("549358eb13654b28")();
if (hasBigInts) {
    var bigIntValueOf = BigInt.prototype.valueOf;
    var tryBigInt = function tryBigIntObject(value) {
        try {
            bigIntValueOf.call(value);
            return true;
        } catch (e) {}
        return false;
    };
    module.exports = function isBigInt(value) {
        if (value === null || typeof value === "undefined" || typeof value === "boolean" || typeof value === "string" || typeof value === "number" || typeof value === "symbol" || typeof value === "function") return false;
        if (typeof value === "bigint") return true;
        return tryBigInt(value);
    };
} else module.exports = function isBigInt(value) {
    return false;
};

},{"549358eb13654b28":"hd3X0"}],"hd3X0":[function(require,module,exports) {
"use strict";
var $BigInt = typeof BigInt !== "undefined" && BigInt;
module.exports = function hasNativeBigInts() {
    return typeof $BigInt === "function" && typeof BigInt === "function" && typeof $BigInt(42) === "bigint" // eslint-disable-line no-magic-numbers
     && typeof BigInt(42) === "bigint"; // eslint-disable-line no-magic-numbers
};

},{}],"huybi":[function(require,module,exports) {
"use strict";
var isMap = require("7a4703da32b45770");
var isSet = require("4366820b9d28248e");
var isWeakMap = require("7c20bb63ecfba6fc");
var isWeakSet = require("5d3bd6554a44e31f");
module.exports = function whichCollection(value) {
    if (value && typeof value === "object") {
        if (isMap(value)) return "Map";
        if (isSet(value)) return "Set";
        if (isWeakMap(value)) return "WeakMap";
        if (isWeakSet(value)) return "WeakSet";
    }
    return false;
};

},{"7a4703da32b45770":"a2L9U","4366820b9d28248e":"dVNMd","7c20bb63ecfba6fc":"bnSBv","5d3bd6554a44e31f":"imh5e"}],"a2L9U":[function(require,module,exports) {
"use strict";
var $Map = typeof Map === "function" && Map.prototype ? Map : null;
var $Set = typeof Set === "function" && Set.prototype ? Set : null;
var exported;
if (!$Map) // eslint-disable-next-line no-unused-vars
exported = function isMap(x) {
    // `Map` is not present in this environment.
    return false;
};
var $mapHas = $Map ? Map.prototype.has : null;
var $setHas = $Set ? Set.prototype.has : null;
if (!exported && !$mapHas) // eslint-disable-next-line no-unused-vars
exported = function isMap(x) {
    // `Map` does not have a `has` method
    return false;
};
module.exports = exported || function isMap(x) {
    if (!x || typeof x !== "object") return false;
    try {
        $mapHas.call(x);
        if ($setHas) try {
            $setHas.call(x);
        } catch (e) {
            return true;
        }
        return x instanceof $Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
};

},{}],"dVNMd":[function(require,module,exports) {
"use strict";
var $Map = typeof Map === "function" && Map.prototype ? Map : null;
var $Set = typeof Set === "function" && Set.prototype ? Set : null;
var exported;
if (!$Set) // eslint-disable-next-line no-unused-vars
exported = function isSet(x) {
    // `Set` is not present in this environment.
    return false;
};
var $mapHas = $Map ? Map.prototype.has : null;
var $setHas = $Set ? Set.prototype.has : null;
if (!exported && !$setHas) // eslint-disable-next-line no-unused-vars
exported = function isSet(x) {
    // `Set` does not have a `has` method
    return false;
};
module.exports = exported || function isSet(x) {
    if (!x || typeof x !== "object") return false;
    try {
        $setHas.call(x);
        if ($mapHas) try {
            $mapHas.call(x);
        } catch (e) {
            return true;
        }
        return x instanceof $Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
};

},{}],"bnSBv":[function(require,module,exports) {
"use strict";
var $WeakMap = typeof WeakMap === "function" && WeakMap.prototype ? WeakMap : null;
var $WeakSet = typeof WeakSet === "function" && WeakSet.prototype ? WeakSet : null;
var exported;
if (!$WeakMap) // eslint-disable-next-line no-unused-vars
exported = function isWeakMap(x) {
    // `WeakMap` is not present in this environment.
    return false;
};
var $mapHas = $WeakMap ? $WeakMap.prototype.has : null;
var $setHas = $WeakSet ? $WeakSet.prototype.has : null;
if (!exported && !$mapHas) // eslint-disable-next-line no-unused-vars
exported = function isWeakMap(x) {
    // `WeakMap` does not have a `has` method
    return false;
};
module.exports = exported || function isWeakMap(x) {
    if (!x || typeof x !== "object") return false;
    try {
        $mapHas.call(x, $mapHas);
        if ($setHas) try {
            $setHas.call(x, $setHas);
        } catch (e) {
            return true;
        }
        return x instanceof $WeakMap; // core-js workaround, pre-v3
    } catch (e) {}
    return false;
};

},{}],"imh5e":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("6eeb661a433b133b");
var callBound = require("86e70fd93b67ae48");
var $WeakSet = GetIntrinsic("%WeakSet%", true);
var $setHas = callBound("WeakSet.prototype.has", true);
if ($setHas) {
    var $mapHas = callBound("WeakMap.prototype.has", true);
    module.exports = function isWeakSet(x) {
        if (!x || typeof x !== "object") return false;
        try {
            $setHas(x, $setHas);
            if ($mapHas) try {
                $mapHas(x, $mapHas);
            } catch (e) {
                return true;
            }
            return x instanceof $WeakSet; // core-js workaround, pre-v3
        } catch (e) {}
        return false;
    };
} else // eslint-disable-next-line no-unused-vars
module.exports = function isWeakSet(x) {
    // `WeakSet` does not exist, or does not have a `has` method
    return false;
};

},{"6eeb661a433b133b":"cHvuQ","86e70fd93b67ae48":"b8wdo"}],"20Q90":[function(require,module,exports) {
var process = require("eb4ef597a4a5f826");
"use strict";
/* eslint global-require: 0 */ // the code is structured this way so that bundlers can
// alias out `has-symbols` to `() => true` or `() => false` if your target
// environments' Symbol capabilities are known, and then use
// dead code elimination on the rest of this module.
//
// Similarly, `isarray` can be aliased to `Array.isArray` if
// available in all target environments.
var isArguments = require("7593a76533de1185");
if (require("f0ecff54da8b2959")() || require("81280494d8b4581b")()) {
    var $iterator = Symbol.iterator;
    // Symbol is available natively or shammed
    // natively:
    //  - Chrome >= 38
    //  - Edge 12-14?, Edge >= 15 for sure
    //  - FF >= 36
    //  - Safari >= 9
    //  - node >= 0.12
    module.exports = function getIterator(iterable) {
        // alternatively, `iterable[$iterator]?.()`
        if (iterable != null && typeof iterable[$iterator] !== "undefined") return iterable[$iterator]();
        if (isArguments(iterable)) // arguments objects lack Symbol.iterator
        // - node 0.12
        return Array.prototype[$iterator].call(iterable);
    };
} else {
    // Symbol is not available, native or shammed
    var isArray = require("b8775d0f6b12dc8b");
    var isString = require("68e25a40304bd1e0");
    var GetIntrinsic = require("7ca931d31b458f7d");
    var $Map = GetIntrinsic("%Map%", true);
    var $Set = GetIntrinsic("%Set%", true);
    var callBound = require("495d84a332e21c5");
    var $arrayPush = callBound("Array.prototype.push");
    var $charCodeAt = callBound("String.prototype.charCodeAt");
    var $stringSlice = callBound("String.prototype.slice");
    var advanceStringIndex = function advanceStringIndex(S, index) {
        var length = S.length;
        if (index + 1 >= length) return index + 1;
        var first = $charCodeAt(S, index);
        if (first < 0xD800 || first > 0xDBFF) return index + 1;
        var second = $charCodeAt(S, index + 1);
        if (second < 0xDC00 || second > 0xDFFF) return index + 1;
        return index + 2;
    };
    var getArrayIterator = function getArrayIterator(arraylike) {
        var i = 0;
        return {
            next: function next() {
                var done = i >= arraylike.length;
                var value;
                if (!done) {
                    value = arraylike[i];
                    i += 1;
                }
                return {
                    done: done,
                    value: value
                };
            }
        };
    };
    var getNonCollectionIterator = function getNonCollectionIterator(iterable, noPrimordialCollections) {
        if (isArray(iterable) || isArguments(iterable)) return getArrayIterator(iterable);
        if (isString(iterable)) {
            var i = 0;
            return {
                next: function next() {
                    var nextIndex = advanceStringIndex(iterable, i);
                    var value = $stringSlice(iterable, i, nextIndex);
                    i = nextIndex;
                    return {
                        done: nextIndex > iterable.length,
                        value: value
                    };
                }
            };
        }
        // es6-shim and es-shims' es-map use a string "_es6-shim iterator_" property on different iterables, such as MapIterator.
        if (noPrimordialCollections && typeof iterable["_es6-shim iterator_"] !== "undefined") return iterable["_es6-shim iterator_"]();
    };
    if (!$Map && !$Set) // the only language iterables are Array, String, arguments
    // - Safari <= 6.0
    // - Chrome < 38
    // - node < 0.12
    // - FF < 13
    // - IE < 11
    // - Edge < 11
    module.exports = function getIterator(iterable) {
        if (iterable != null) return getNonCollectionIterator(iterable, true);
    };
    else {
        // either Map or Set are available, but Symbol is not
        // - es6-shim on an ES5 browser
        // - Safari 6.2 (maybe 6.1?)
        // - FF v[13, 36)
        // - IE 11
        // - Edge 11
        // - Safari v[6, 9)
        var isMap = require("e554a68ad4ccb825");
        var isSet = require("fa7a3463c81d986e");
        // Firefox >= 27, IE 11, Safari 6.2 - 9, Edge 11, es6-shim in older envs, all have forEach
        var $mapForEach = callBound("Map.prototype.forEach", true);
        var $setForEach = callBound("Set.prototype.forEach", true);
        if (typeof process === "undefined" || !process.versions || !process.versions.node) {
            // Firefox 17 - 26 has `.iterator()`, whose iterator `.next()` either
            // returns a value, or throws a StopIteration object. These browsers
            // do not have any other mechanism for iteration.
            var $mapIterator = callBound("Map.prototype.iterator", true);
            var $setIterator = callBound("Set.prototype.iterator", true);
            var getStopIterationIterator = function(iterator) {
                var done = false;
                return {
                    next: function next() {
                        try {
                            return {
                                done: done,
                                value: done ? undefined : iterator.next()
                            };
                        } catch (e) {
                            done = true;
                            return {
                                done: true,
                                value: undefined
                            };
                        }
                    }
                };
            };
        }
        // Firefox 27-35, and some older es6-shim versions, use a string "@@iterator" property
        // this returns a proper iterator object, so we should use it instead of forEach.
        // newer es6-shim versions use a string "_es6-shim iterator_" property.
        var $mapAtAtIterator = callBound("Map.prototype.@@iterator", true) || callBound("Map.prototype._es6-shim iterator_", true);
        var $setAtAtIterator = callBound("Set.prototype.@@iterator", true) || callBound("Set.prototype._es6-shim iterator_", true);
        var getCollectionIterator = function getCollectionIterator(iterable) {
            if (isMap(iterable)) {
                if ($mapIterator) return getStopIterationIterator($mapIterator(iterable));
                if ($mapAtAtIterator) return $mapAtAtIterator(iterable);
                if ($mapForEach) {
                    var entries = [];
                    $mapForEach(iterable, function(v, k) {
                        $arrayPush(entries, [
                            k,
                            v
                        ]);
                    });
                    return getArrayIterator(entries);
                }
            }
            if (isSet(iterable)) {
                if ($setIterator) return getStopIterationIterator($setIterator(iterable));
                if ($setAtAtIterator) return $setAtAtIterator(iterable);
                if ($setForEach) {
                    var values = [];
                    $setForEach(iterable, function(v) {
                        $arrayPush(values, v);
                    });
                    return getArrayIterator(values);
                }
            }
        };
        module.exports = function getIterator(iterable) {
            return getCollectionIterator(iterable) || getNonCollectionIterator(iterable);
        };
    }
}

},{"eb4ef597a4a5f826":"37VrC","7593a76533de1185":"3vnij","f0ecff54da8b2959":"fDGjG","81280494d8b4581b":"eJV7C","b8775d0f6b12dc8b":"iVHXj","68e25a40304bd1e0":"4Jj9b","7ca931d31b458f7d":"cHvuQ","495d84a332e21c5":"b8wdo","e554a68ad4ccb825":"a2L9U","fa7a3463c81d986e":"dVNMd"}],"iVHXj":[function(require,module,exports) {
var toString = {}.toString;
module.exports = Array.isArray || function(arr) {
    return toString.call(arr) == "[object Array]";
};

},{}],"2W13r":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("6eeb556a51405473");
var callBound = require("6d1587b92bb26b9f");
var inspect = require("d99e2c3d4122e6c7");
var $TypeError = GetIntrinsic("%TypeError%");
var $WeakMap = GetIntrinsic("%WeakMap%", true);
var $Map = GetIntrinsic("%Map%", true);
var $weakMapGet = callBound("WeakMap.prototype.get", true);
var $weakMapSet = callBound("WeakMap.prototype.set", true);
var $weakMapHas = callBound("WeakMap.prototype.has", true);
var $mapGet = callBound("Map.prototype.get", true);
var $mapSet = callBound("Map.prototype.set", true);
var $mapHas = callBound("Map.prototype.has", true);
/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */ var listGetNode = function(list, key) {
    for(var prev = list, curr; (curr = prev.next) !== null; prev = curr)if (curr.key === key) {
        prev.next = curr.next;
        curr.next = list.next;
        list.next = curr; // eslint-disable-line no-param-reassign
        return curr;
    }
};
var listGet = function(objects, key) {
    var node = listGetNode(objects, key);
    return node && node.value;
};
var listSet = function(objects, key, value) {
    var node = listGetNode(objects, key);
    if (node) node.value = value;
    else // Prepend the new node to the beginning of the list
    objects.next = {
        key: key,
        next: objects.next,
        value: value
    };
};
var listHas = function(objects, key) {
    return !!listGetNode(objects, key);
};
module.exports = function getSideChannel() {
    var $wm;
    var $m;
    var $o;
    var channel = {
        assert: function(key) {
            if (!channel.has(key)) throw new $TypeError("Side channel does not contain " + inspect(key));
        },
        get: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if ($wm) return $weakMapGet($wm, key);
            } else if ($Map) {
                if ($m) return $mapGet($m, key);
            } else {
                if ($o) return listGet($o, key);
            }
        },
        has: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if ($wm) return $weakMapHas($wm, key);
            } else if ($Map) {
                if ($m) return $mapHas($m, key);
            } else {
                if ($o) return listHas($o, key);
            }
            return false;
        },
        set: function(key, value) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if (!$wm) $wm = new $WeakMap();
                $weakMapSet($wm, key, value);
            } else if ($Map) {
                if (!$m) $m = new $Map();
                $mapSet($m, key, value);
            } else {
                if (!$o) /*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */ $o = {
                    key: {},
                    next: null
                };
                listSet($o, key, value);
            }
        }
    };
    return channel;
};

},{"6eeb556a51405473":"cHvuQ","6d1587b92bb26b9f":"b8wdo","d99e2c3d4122e6c7":"gyttf"}],"gyttf":[function(require,module,exports) {
var hasMap = typeof Map === "function" && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === "function" && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;
var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype // eslint-disable-line no-proto
 ? function(O) {
    return O.__proto__; // eslint-disable-line no-proto
} : null);
function addNumericSeparator(num, str) {
    if (num === Infinity || num === -Infinity || num !== num || num && num > -1000 && num < 1000 || $test.call(/e/, str)) return str;
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
    }
    return $replace.call(str, sepRegex, "$&_");
}
var utilInspect = require("fbfba31527d9fbfb");
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};
    if (has(opts, "quoteStyle") && opts.quoteStyle !== "single" && opts.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
    if (typeof customInspect !== "boolean" && customInspect !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var numericSeparator = opts.numericSeparator;
    if (typeof obj === "undefined") return "undefined";
    if (obj === null) return "null";
    if (typeof obj === "boolean") return obj ? "true" : "false";
    if (typeof obj === "string") return inspectString(obj, opts);
    if (typeof obj === "number") {
        if (obj === 0) return Infinity / obj > 0 ? "0" : "-0";
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }
    var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
    if (typeof depth === "undefined") depth = 0;
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") return isArray(obj) ? "[Array]" : "[Object]";
    var indent = getIndent(opts, depth);
    if (typeof seen === "undefined") seen = [];
    else if (indexOf(seen, obj) >= 0) return "[Circular]";
    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, "quoteStyle")) newOpts.quoteStyle = opts.quoteStyle;
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }
    if (typeof obj === "function" && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for(var i = 0; i < attrs.length; i++)s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        s += ">";
        if (obj.childNodes && obj.childNodes.length) s += "...";
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) return "[]";
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) return "[" + indentedJoin(xs, indent) + "]";
        return "[ " + $join.call(xs, ", ") + " ]";
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        if (parts.length === 0) return "[" + String(obj) + "]";
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
    }
    if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) return utilInspect(obj, {
            depth: maxDepth - depth
        });
        else if (customInspect !== "symbol" && typeof obj.inspect === "function") return obj.inspect();
    }
    if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) mapForEach.call(obj, function(value, key) {
            mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
        });
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        if (setForEach) setForEach.call(obj, function(value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf("Set", setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) return weakCollectionOf("WeakMap");
    if (isWeakSet(obj)) return weakCollectionOf("WeakSet");
    if (isWeakRef(obj)) return weakCollectionOf("WeakRef");
    if (isNumber(obj)) return markBoxed(inspect(Number(obj)));
    if (isBigInt(obj)) return markBoxed(inspect(bigIntValueOf.call(obj)));
    if (isBoolean(obj)) return markBoxed(booleanValueOf.call(obj));
    if (isString(obj)) return markBoxed(inspect(String(obj)));
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) return tag + "{}";
        if (indent) return tag + "{" + indentedJoin(ys, indent) + "}";
        return tag + "{ " + $join.call(ys, ", ") + " }";
    }
    return String(obj);
};
function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
    return quoteChar + s + quoteChar;
}
function quote(s) {
    return $replace.call(String(s), /"/g, "&quot;");
}
function isArray(obj) {
    return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isDate(obj) {
    return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isRegExp(obj) {
    return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isError(obj) {
    return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isString(obj) {
    return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isNumber(obj) {
    return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isBoolean(obj) {
    return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) return obj && typeof obj === "object" && obj instanceof Symbol;
    if (typeof obj === "symbol") return true;
    if (!obj || typeof obj !== "object" || !symToString) return false;
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}
function isBigInt(obj) {
    if (!obj || typeof obj !== "object" || !bigIntValueOf) return false;
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}
var hasOwn = Object.prototype.hasOwnProperty || function(key) {
    return key in this;
};
function has(obj, key) {
    return hasOwn.call(obj, key);
}
function toStr(obj) {
    return objectToString.call(obj);
}
function nameOf(f) {
    if (f.name) return f.name;
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) return m[1];
    return null;
}
function indexOf(xs, x) {
    if (xs.indexOf) return xs.indexOf(x);
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) return i;
    }
    return -1;
}
function isMap(x) {
    if (!mapSize || !x || typeof x !== "object") return false;
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== "object") return false;
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== "object") return false;
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}
function isSet(x) {
    if (!setSize || !x || typeof x !== "object") return false;
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== "object") return false;
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isElement(x) {
    if (!x || typeof x !== "object") return false;
    if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) return true;
    return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
}
function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, "single", opts);
}
function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
    }[n];
    if (x) return "\\" + x;
    return "\\x" + (n < 0x10 ? "0" : "") + $toUpperCase.call(n.toString(16));
}
function markBoxed(str) {
    return "Object(" + str + ")";
}
function weakCollectionOf(type) {
    return type + " { ? }";
}
function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
    return type + " (" + size + ") {" + joinedEntries + "}";
}
function singleLineValues(xs) {
    for(var i = 0; i < xs.length; i++){
        if (indexOf(xs[i], "\n") >= 0) return false;
    }
    return true;
}
function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === "	") baseIndent = "	";
    else if (typeof opts.indent === "number" && opts.indent > 0) baseIndent = $join.call(Array(opts.indent + 1), " ");
    else return null;
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}
function indentedJoin(xs, indent) {
    if (xs.length === 0) return "";
    var lineJoiner = "\n" + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
}
function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for(var i = 0; i < obj.length; i++)xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
    }
    var syms = typeof gOPS === "function" ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for(var k = 0; k < syms.length; k++)symMap["$" + syms[k]] = syms[k];
    }
    for(var key in obj){
        if (!has(obj, key)) continue;
         // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) continue;
         // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) continue; // eslint-disable-line no-restricted-syntax, no-continue
        else if ($test.call(/[^\w$]/, key)) xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        else xs.push(key + ": " + inspect(obj[key], obj));
    }
    if (typeof gOPS === "function") {
        for(var j = 0; j < syms.length; j++)if (isEnumerable.call(obj, syms[j])) xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
    }
    return xs;
}

},{"fbfba31527d9fbfb":"jhUEF"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"1TjNZ":[function(require,module,exports) {
var global = arguments[3];
"use strict";
var forEach = require("176f36bdc577fd97");
var availableTypedArrays = require("3ee05b3061c0fdf0");
var callBound = require("3846b00a4bc70b39");
var gOPD = require("1d5e85a21c6629c3");
var $toString = callBound("Object.prototype.toString");
var hasToStringTag = require("7fd458ddddd5586c")();
var g = typeof globalThis === "undefined" ? global : globalThis;
var typedArrays = availableTypedArrays();
var $slice = callBound("String.prototype.slice");
var toStrTags = {};
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) forEach(typedArrays, function(typedArray) {
    if (typeof g[typedArray] === "function") {
        var arr = new g[typedArray]();
        if (Symbol.toStringTag in arr) {
            var proto = getPrototypeOf(arr);
            var descriptor = gOPD(proto, Symbol.toStringTag);
            if (!descriptor) {
                var superProto = getPrototypeOf(proto);
                descriptor = gOPD(superProto, Symbol.toStringTag);
            }
            toStrTags[typedArray] = descriptor.get;
        }
    }
});
var tryTypedArrays = function tryAllTypedArrays(value) {
    var foundName = false;
    forEach(toStrTags, function(getter, typedArray) {
        if (!foundName) try {
            var name = getter.call(value);
            if (name === typedArray) foundName = name;
        } catch (e) {}
    });
    return foundName;
};
var isTypedArray = require("5930c9af4bc240bb");
module.exports = function whichTypedArray(value) {
    if (!isTypedArray(value)) return false;
    if (!hasToStringTag || !(Symbol.toStringTag in value)) return $slice($toString(value), 8, -1);
    return tryTypedArrays(value);
};

},{"176f36bdc577fd97":"1AGeq","3ee05b3061c0fdf0":"bNne4","3846b00a4bc70b39":"b8wdo","1d5e85a21c6629c3":"f5bwT","7fd458ddddd5586c":"bCXMz","5930c9af4bc240bb":"kvblZ"}],"1AGeq":[function(require,module,exports) {
"use strict";
var isCallable = require("9f153403e29ac066");
var toStr = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var forEachArray = function forEachArray(array, iterator, receiver) {
    for(var i = 0, len = array.length; i < len; i++)if (hasOwnProperty.call(array, i)) {
        if (receiver == null) iterator(array[i], i, array);
        else iterator.call(receiver, array[i], i, array);
    }
};
var forEachString = function forEachString(string, iterator, receiver) {
    for(var i = 0, len = string.length; i < len; i++)// no such thing as a sparse string.
    if (receiver == null) iterator(string.charAt(i), i, string);
    else iterator.call(receiver, string.charAt(i), i, string);
};
var forEachObject = function forEachObject(object, iterator, receiver) {
    for(var k in object)if (hasOwnProperty.call(object, k)) {
        if (receiver == null) iterator(object[k], k, object);
        else iterator.call(receiver, object[k], k, object);
    }
};
var forEach = function forEach(list, iterator, thisArg) {
    if (!isCallable(iterator)) throw new TypeError("iterator must be a function");
    var receiver;
    if (arguments.length >= 3) receiver = thisArg;
    if (toStr.call(list) === "[object Array]") forEachArray(list, iterator, receiver);
    else if (typeof list === "string") forEachString(list, iterator, receiver);
    else forEachObject(list, iterator, receiver);
};
module.exports = forEach;

},{"9f153403e29ac066":"IDzRE"}],"IDzRE":[function(require,module,exports) {
"use strict";
var fnToStr = Function.prototype.toString;
var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
var badArrayLike;
var isCallableMarker;
if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") try {
    badArrayLike = Object.defineProperty({}, "length", {
        get: function() {
            throw isCallableMarker;
        }
    });
    isCallableMarker = {};
    // eslint-disable-next-line no-throw-literal
    reflectApply(function() {
        throw 42;
    }, null, badArrayLike);
} catch (_) {
    if (_ !== isCallableMarker) reflectApply = null;
}
else reflectApply = null;
var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
    try {
        var fnStr = fnToStr.call(value);
        return constructorRegex.test(fnStr);
    } catch (e) {
        return false; // not a function
    }
};
var tryFunctionObject = function tryFunctionToStr(value) {
    try {
        if (isES6ClassFn(value)) return false;
        fnToStr.call(value);
        return true;
    } catch (e) {
        return false;
    }
};
var toStr = Object.prototype.toString;
var objectClass = "[object Object]";
var fnClass = "[object Function]";
var genClass = "[object GeneratorFunction]";
var ddaClass = "[object HTMLAllCollection]"; // IE 11
var ddaClass2 = "[object HTML document.all class]";
var ddaClass3 = "[object HTMLCollection]"; // IE 9-10
var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag; // better: use `has-tostringtag`
var isIE68 = !(0 in [
    , 
]); // eslint-disable-line no-sparse-arrays, comma-spacing
var isDDA = function isDocumentDotAll() {
    return false;
};
if (typeof document === "object") {
    // Firefox 3 canonicalizes DDA to undefined when it's not accessed directly
    var all = document.all;
    if (toStr.call(all) === toStr.call(document.all)) isDDA = function isDocumentDotAll(value) {
        /* globals document: false */ // in IE 6-8, typeof document.all is "object" and it's truthy
        if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) try {
            var str = toStr.call(value);
            return (str === ddaClass || str === ddaClass2 || str === ddaClass3 // opera 12.16
             || str === objectClass // IE 6-8
            ) && value("") == null; // eslint-disable-line eqeqeq
        } catch (e) {}
        return false;
    };
}
module.exports = reflectApply ? function isCallable(value) {
    if (isDDA(value)) return true;
    if (!value) return false;
    if (typeof value !== "function" && typeof value !== "object") return false;
    try {
        reflectApply(value, null, badArrayLike);
    } catch (e) {
        if (e !== isCallableMarker) return false;
    }
    return !isES6ClassFn(value) && tryFunctionObject(value);
} : function isCallable(value) {
    if (isDDA(value)) return true;
    if (!value) return false;
    if (typeof value !== "function" && typeof value !== "object") return false;
    if (hasToStringTag) return tryFunctionObject(value);
    if (isES6ClassFn(value)) return false;
    var strClass = toStr.call(value);
    if (strClass !== fnClass && strClass !== genClass && !/^\[object HTML/.test(strClass)) return false;
    return tryFunctionObject(value);
};

},{}],"bNne4":[function(require,module,exports) {
var global = arguments[3];
"use strict";
var possibleNames = [
    "BigInt64Array",
    "BigUint64Array",
    "Float32Array",
    "Float64Array",
    "Int16Array",
    "Int32Array",
    "Int8Array",
    "Uint16Array",
    "Uint32Array",
    "Uint8Array",
    "Uint8ClampedArray"
];
var g = typeof globalThis === "undefined" ? global : globalThis;
module.exports = function availableTypedArrays() {
    var out = [];
    for(var i = 0; i < possibleNames.length; i++)if (typeof g[possibleNames[i]] === "function") out[out.length] = possibleNames[i];
    return out;
};

},{}],"f5bwT":[function(require,module,exports) {
"use strict";
var GetIntrinsic = require("173e8048c545a5a0");
var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
if ($gOPD) try {
    $gOPD([], "length");
} catch (e) {
    // IE 8 has a broken gOPD
    $gOPD = null;
}
module.exports = $gOPD;

},{"173e8048c545a5a0":"cHvuQ"}],"kvblZ":[function(require,module,exports) {
var global = arguments[3];
"use strict";
var forEach = require("c094e93d7b7ed44c");
var availableTypedArrays = require("25b0ba91f2fa7ca6");
var callBound = require("b03ea1cb6f38e5f4");
var $toString = callBound("Object.prototype.toString");
var hasToStringTag = require("a0fc86477b8aa594")();
var gOPD = require("b146999ec6f0bbc4");
var g = typeof globalThis === "undefined" ? global : globalThis;
var typedArrays = availableTypedArrays();
var $indexOf = callBound("Array.prototype.indexOf", true) || function indexOf(array, value) {
    for(var i = 0; i < array.length; i += 1){
        if (array[i] === value) return i;
    }
    return -1;
};
var $slice = callBound("String.prototype.slice");
var toStrTags = {};
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) forEach(typedArrays, function(typedArray) {
    var arr = new g[typedArray]();
    if (Symbol.toStringTag in arr) {
        var proto = getPrototypeOf(arr);
        var descriptor = gOPD(proto, Symbol.toStringTag);
        if (!descriptor) {
            var superProto = getPrototypeOf(proto);
            descriptor = gOPD(superProto, Symbol.toStringTag);
        }
        toStrTags[typedArray] = descriptor.get;
    }
});
var tryTypedArrays = function tryAllTypedArrays(value) {
    var anyTrue = false;
    forEach(toStrTags, function(getter, typedArray) {
        if (!anyTrue) try {
            anyTrue = getter.call(value) === typedArray;
        } catch (e) {}
    });
    return anyTrue;
};
module.exports = function isTypedArray(value) {
    if (!value || typeof value !== "object") return false;
    if (!hasToStringTag || !(Symbol.toStringTag in value)) {
        var tag = $slice($toString(value), 8, -1);
        return $indexOf(typedArrays, tag) > -1;
    }
    if (!gOPD) return false;
    return tryTypedArrays(value);
};

},{"c094e93d7b7ed44c":"1AGeq","25b0ba91f2fa7ca6":"bNne4","b03ea1cb6f38e5f4":"b8wdo","a0fc86477b8aa594":"bCXMz","b146999ec6f0bbc4":"f5bwT"}],"6TDCy":[function(require,module,exports) {
"use strict";
var defineProperties = require("f9fe2312ed00ab3b");
var callBind = require("b0a4a24f7b0ee17e");
var implementation = require("ae2de15041fae8e8");
var getPolyfill = require("f09b5fcef73ce05");
var shim = require("6abee06aecda0e97");
var polyfill = callBind.apply(getPolyfill());
// eslint-disable-next-line no-unused-vars
var bound = function assign(target, source1) {
    return polyfill(Object, arguments);
};
defineProperties(bound, {
    getPolyfill: getPolyfill,
    implementation: implementation,
    shim: shim
});
module.exports = bound;

},{"f9fe2312ed00ab3b":"9JfrK","b0a4a24f7b0ee17e":"lC0X3","ae2de15041fae8e8":"3hcQc","f09b5fcef73ce05":"1b4Vw","6abee06aecda0e97":"fJone"}],"3hcQc":[function(require,module,exports) {
"use strict";
// modified from https://github.com/es-shims/es6-shim
var objectKeys = require("e33a6e0f7ed9c04d");
var hasSymbols = require("17f27657c72a342")();
var callBound = require("e8b69706c2c23041");
var toObject = Object;
var $push = callBound("Array.prototype.push");
var $propIsEnumerable = callBound("Object.prototype.propertyIsEnumerable");
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;
// eslint-disable-next-line no-unused-vars
module.exports = function assign(target, source1) {
    if (target == null) throw new TypeError("target must be an object");
    var to = toObject(target); // step 1
    if (arguments.length === 1) return to; // step 2
    for(var s = 1; s < arguments.length; ++s){
        var from = toObject(arguments[s]); // step 3.a.i
        // step 3.a.ii:
        var keys = objectKeys(from);
        var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
        if (getSymbols) {
            var syms = getSymbols(from);
            for(var j = 0; j < syms.length; ++j){
                var key = syms[j];
                if ($propIsEnumerable(from, key)) $push(keys, key);
            }
        }
        // step 3.a.iii:
        for(var i = 0; i < keys.length; ++i){
            var nextKey = keys[i];
            if ($propIsEnumerable(from, nextKey)) {
                var propValue = from[nextKey]; // step 3.a.iii.2.a
                to[nextKey] = propValue; // step 3.a.iii.2.b
            }
        }
    }
    return to; // step 4
};

},{"e33a6e0f7ed9c04d":"fRqhn","17f27657c72a342":"eJV7C","e8b69706c2c23041":"b8wdo"}],"1b4Vw":[function(require,module,exports) {
"use strict";
var implementation = require("dd422f9dd54fab91");
var lacksProperEnumerationOrder = function() {
    if (!Object.assign) return false;
    /*
	 * v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	 * note: this does not detect the bug unless there's 20 characters
	 */ var str = "abcdefghijklmnopqrst";
    var letters = str.split("");
    var map = {};
    for(var i = 0; i < letters.length; ++i)map[letters[i]] = letters[i];
    var obj = Object.assign({}, map);
    var actual = "";
    for(var k in obj)actual += k;
    return str !== actual;
};
var assignHasPendingExceptions = function() {
    if (!Object.assign || !Object.preventExtensions) return false;
    /*
	 * Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	 * which is 72% slower than our shim, and Firefox 40's native implementation.
	 */ var thrower = Object.preventExtensions({
        1: 2
    });
    try {
        Object.assign(thrower, "xy");
    } catch (e) {
        return thrower[1] === "y";
    }
    return false;
};
module.exports = function getPolyfill() {
    if (!Object.assign) return implementation;
    if (lacksProperEnumerationOrder()) return implementation;
    if (assignHasPendingExceptions()) return implementation;
    return Object.assign;
};

},{"dd422f9dd54fab91":"3hcQc"}],"fJone":[function(require,module,exports) {
"use strict";
var define = require("aabf47218d88c6ef");
var getPolyfill = require("211dc68fdaa7e906");
module.exports = function shimAssign() {
    var polyfill = getPolyfill();
    define(Object, {
        assign: polyfill
    }, {
        assign: function() {
            return Object.assign !== polyfill;
        }
    });
    return polyfill;
};

},{"aabf47218d88c6ef":"9JfrK","211dc68fdaa7e906":"1b4Vw"}],"aMgqz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _iterationDecorator = _interopRequireDefault(require("91e81581741b7ffd"));
var _rolesMap = _interopRequireDefault(require("c6200156ca00538f"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e2) {
                    throw _e2;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e3) {
            didErr = true;
            err = _e3;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
var roleElement = [];
var keys = _rolesMap.default.keys();
var _loop = function _loop(i) {
    var key = keys[i];
    var role = _rolesMap.default.get(key);
    if (role) {
        var concepts = [].concat(role.baseConcepts, role.relatedConcepts);
        for(var k = 0; k < concepts.length; k++){
            var relation = concepts[k];
            if (relation.module === "HTML") {
                var concept = relation.concept;
                if (concept) {
                    var roleElementRelation = roleElement.find(function(item) {
                        return item[0] === key;
                    });
                    var relationConcepts = void 0;
                    if (roleElementRelation) relationConcepts = roleElementRelation[1];
                    else relationConcepts = [];
                    relationConcepts.push(concept);
                    roleElement.push([
                        key,
                        relationConcepts
                    ]);
                }
            }
        }
    }
};
for(var i = 0; i < keys.length; i++)_loop(i);
var roleElementMap = {
    entries: function entries() {
        return roleElement;
    },
    forEach: function forEach(fn) {
        var thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var _iterator = _createForOfIteratorHelper(roleElement), _step;
        try {
            for(_iterator.s(); !(_step = _iterator.n()).done;){
                var _step$value = _slicedToArray(_step.value, 2), key = _step$value[0], values = _step$value[1];
                fn.call(thisArg, values, key, roleElement);
            }
        } catch (err) {
            _iterator.e(err);
        } finally{
            _iterator.f();
        }
    },
    get: function get(key) {
        var item = roleElement.find(function(tuple) {
            return tuple[0] === key ? true : false;
        });
        return item && item[1];
    },
    has: function has(key) {
        return !!this.get(key);
    },
    keys: function keys() {
        return roleElement.map(function(_ref) {
            var _ref2 = _slicedToArray(_ref, 1), key = _ref2[0];
            return key;
        });
    },
    values: function values() {
        return roleElement.map(function(_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2), values = _ref4[1];
            return values;
        });
    }
};
var _default = (0, _iterationDecorator.default)(roleElementMap, roleElementMap.entries());
exports.default = _default;

},{"91e81581741b7ffd":"kSTdV","c6200156ca00538f":"4bOMs"}],"abBjS":[function(require,module,exports) {
// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
// This work is free. You can redistribute it and/or modify it
// under the terms of the WTFPL, Version 2
// For more information see LICENSE.txt or http://www.wtfpl.net/
//
// For more information, the home page:
// http://pieroxy.net/blog/pages/lz-string/testing.html
//
// LZ-based compression algorithm, version 1.4.4
var LZString = function() {
    // private property
    var f = String.fromCharCode;
    var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
    var baseReverseDic = {};
    function getBaseValue(alphabet, character) {
        if (!baseReverseDic[alphabet]) {
            baseReverseDic[alphabet] = {};
            for(var i = 0; i < alphabet.length; i++)baseReverseDic[alphabet][alphabet.charAt(i)] = i;
        }
        return baseReverseDic[alphabet][character];
    }
    var LZString = {
        compressToBase64: function(input) {
            if (input == null) return "";
            var res = LZString._compress(input, 6, function(a) {
                return keyStrBase64.charAt(a);
            });
            switch(res.length % 4){
                default:
                case 0:
                    return res;
                case 1:
                    return res + "===";
                case 2:
                    return res + "==";
                case 3:
                    return res + "=";
            }
        },
        decompressFromBase64: function(input) {
            if (input == null) return "";
            if (input == "") return null;
            return LZString._decompress(input.length, 32, function(index) {
                return getBaseValue(keyStrBase64, input.charAt(index));
            });
        },
        compressToUTF16: function(input) {
            if (input == null) return "";
            return LZString._compress(input, 15, function(a) {
                return f(a + 32);
            }) + " ";
        },
        decompressFromUTF16: function(compressed) {
            if (compressed == null) return "";
            if (compressed == "") return null;
            return LZString._decompress(compressed.length, 16384, function(index) {
                return compressed.charCodeAt(index) - 32;
            });
        },
        //compress into uint8array (UCS-2 big endian format)
        compressToUint8Array: function(uncompressed) {
            var compressed = LZString.compress(uncompressed);
            var buf = new Uint8Array(compressed.length * 2); // 2 bytes per character
            for(var i = 0, TotalLen = compressed.length; i < TotalLen; i++){
                var current_value = compressed.charCodeAt(i);
                buf[i * 2] = current_value >>> 8;
                buf[i * 2 + 1] = current_value % 256;
            }
            return buf;
        },
        //decompress from uint8array (UCS-2 big endian format)
        decompressFromUint8Array: function(compressed) {
            if (compressed === null || compressed === undefined) return LZString.decompress(compressed);
            else {
                var buf = new Array(compressed.length / 2); // 2 bytes per character
                for(var i = 0, TotalLen = buf.length; i < TotalLen; i++)buf[i] = compressed[i * 2] * 256 + compressed[i * 2 + 1];
                var result = [];
                buf.forEach(function(c) {
                    result.push(f(c));
                });
                return LZString.decompress(result.join(""));
            }
        },
        //compress into a string that is already URI encoded
        compressToEncodedURIComponent: function(input) {
            if (input == null) return "";
            return LZString._compress(input, 6, function(a) {
                return keyStrUriSafe.charAt(a);
            });
        },
        //decompress from an output of compressToEncodedURIComponent
        decompressFromEncodedURIComponent: function(input) {
            if (input == null) return "";
            if (input == "") return null;
            input = input.replace(/ /g, "+");
            return LZString._decompress(input.length, 32, function(index) {
                return getBaseValue(keyStrUriSafe, input.charAt(index));
            });
        },
        compress: function(uncompressed) {
            return LZString._compress(uncompressed, 16, function(a) {
                return f(a);
            });
        },
        _compress: function(uncompressed, bitsPerChar, getCharFromInt) {
            if (uncompressed == null) return "";
            var i, value, context_dictionary = {}, context_dictionaryToCreate = {}, context_c = "", context_wc = "", context_w = "", context_enlargeIn = 2, context_dictSize = 3, context_numBits = 2, context_data = [], context_data_val = 0, context_data_position = 0, ii;
            for(ii = 0; ii < uncompressed.length; ii += 1){
                context_c = uncompressed.charAt(ii);
                if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
                    context_dictionary[context_c] = context_dictSize++;
                    context_dictionaryToCreate[context_c] = true;
                }
                context_wc = context_w + context_c;
                if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) context_w = context_wc;
                else {
                    if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                        if (context_w.charCodeAt(0) < 256) {
                            for(i = 0; i < context_numBits; i++){
                                context_data_val = context_data_val << 1;
                                if (context_data_position == bitsPerChar - 1) {
                                    context_data_position = 0;
                                    context_data.push(getCharFromInt(context_data_val));
                                    context_data_val = 0;
                                } else context_data_position++;
                            }
                            value = context_w.charCodeAt(0);
                            for(i = 0; i < 8; i++){
                                context_data_val = context_data_val << 1 | value & 1;
                                if (context_data_position == bitsPerChar - 1) {
                                    context_data_position = 0;
                                    context_data.push(getCharFromInt(context_data_val));
                                    context_data_val = 0;
                                } else context_data_position++;
                                value = value >> 1;
                            }
                        } else {
                            value = 1;
                            for(i = 0; i < context_numBits; i++){
                                context_data_val = context_data_val << 1 | value;
                                if (context_data_position == bitsPerChar - 1) {
                                    context_data_position = 0;
                                    context_data.push(getCharFromInt(context_data_val));
                                    context_data_val = 0;
                                } else context_data_position++;
                                value = 0;
                            }
                            value = context_w.charCodeAt(0);
                            for(i = 0; i < 16; i++){
                                context_data_val = context_data_val << 1 | value & 1;
                                if (context_data_position == bitsPerChar - 1) {
                                    context_data_position = 0;
                                    context_data.push(getCharFromInt(context_data_val));
                                    context_data_val = 0;
                                } else context_data_position++;
                                value = value >> 1;
                            }
                        }
                        context_enlargeIn--;
                        if (context_enlargeIn == 0) {
                            context_enlargeIn = Math.pow(2, context_numBits);
                            context_numBits++;
                        }
                        delete context_dictionaryToCreate[context_w];
                    } else {
                        value = context_dictionary[context_w];
                        for(i = 0; i < context_numBits; i++){
                            context_data_val = context_data_val << 1 | value & 1;
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0;
                            } else context_data_position++;
                            value = value >> 1;
                        }
                    }
                    context_enlargeIn--;
                    if (context_enlargeIn == 0) {
                        context_enlargeIn = Math.pow(2, context_numBits);
                        context_numBits++;
                    }
                    // Add wc to the dictionary.
                    context_dictionary[context_wc] = context_dictSize++;
                    context_w = String(context_c);
                }
            }
            // Output the code for w.
            if (context_w !== "") {
                if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
                    if (context_w.charCodeAt(0) < 256) {
                        for(i = 0; i < context_numBits; i++){
                            context_data_val = context_data_val << 1;
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0;
                            } else context_data_position++;
                        }
                        value = context_w.charCodeAt(0);
                        for(i = 0; i < 8; i++){
                            context_data_val = context_data_val << 1 | value & 1;
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0;
                            } else context_data_position++;
                            value = value >> 1;
                        }
                    } else {
                        value = 1;
                        for(i = 0; i < context_numBits; i++){
                            context_data_val = context_data_val << 1 | value;
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0;
                            } else context_data_position++;
                            value = 0;
                        }
                        value = context_w.charCodeAt(0);
                        for(i = 0; i < 16; i++){
                            context_data_val = context_data_val << 1 | value & 1;
                            if (context_data_position == bitsPerChar - 1) {
                                context_data_position = 0;
                                context_data.push(getCharFromInt(context_data_val));
                                context_data_val = 0;
                            } else context_data_position++;
                            value = value >> 1;
                        }
                    }
                    context_enlargeIn--;
                    if (context_enlargeIn == 0) {
                        context_enlargeIn = Math.pow(2, context_numBits);
                        context_numBits++;
                    }
                    delete context_dictionaryToCreate[context_w];
                } else {
                    value = context_dictionary[context_w];
                    for(i = 0; i < context_numBits; i++){
                        context_data_val = context_data_val << 1 | value & 1;
                        if (context_data_position == bitsPerChar - 1) {
                            context_data_position = 0;
                            context_data.push(getCharFromInt(context_data_val));
                            context_data_val = 0;
                        } else context_data_position++;
                        value = value >> 1;
                    }
                }
                context_enlargeIn--;
                if (context_enlargeIn == 0) {
                    context_enlargeIn = Math.pow(2, context_numBits);
                    context_numBits++;
                }
            }
            // Mark the end of the stream
            value = 2;
            for(i = 0; i < context_numBits; i++){
                context_data_val = context_data_val << 1 | value & 1;
                if (context_data_position == bitsPerChar - 1) {
                    context_data_position = 0;
                    context_data.push(getCharFromInt(context_data_val));
                    context_data_val = 0;
                } else context_data_position++;
                value = value >> 1;
            }
            // Flush the last char
            while(true){
                context_data_val = context_data_val << 1;
                if (context_data_position == bitsPerChar - 1) {
                    context_data.push(getCharFromInt(context_data_val));
                    break;
                } else context_data_position++;
            }
            return context_data.join("");
        },
        decompress: function(compressed) {
            if (compressed == null) return "";
            if (compressed == "") return null;
            return LZString._decompress(compressed.length, 32768, function(index) {
                return compressed.charCodeAt(index);
            });
        },
        _decompress: function(length, resetValue, getNextValue) {
            var dictionary = [], next, enlargeIn = 4, dictSize = 4, numBits = 3, entry = "", result = [], i, w, bits, resb, maxpower, power, c, data = {
                val: getNextValue(0),
                position: resetValue,
                index: 1
            };
            for(i = 0; i < 3; i += 1)dictionary[i] = i;
            bits = 0;
            maxpower = Math.pow(2, 2);
            power = 1;
            while(power != maxpower){
                resb = data.val & data.position;
                data.position >>= 1;
                if (data.position == 0) {
                    data.position = resetValue;
                    data.val = getNextValue(data.index++);
                }
                bits |= (resb > 0 ? 1 : 0) * power;
                power <<= 1;
            }
            switch(next = bits){
                case 0:
                    bits = 0;
                    maxpower = Math.pow(2, 8);
                    power = 1;
                    while(power != maxpower){
                        resb = data.val & data.position;
                        data.position >>= 1;
                        if (data.position == 0) {
                            data.position = resetValue;
                            data.val = getNextValue(data.index++);
                        }
                        bits |= (resb > 0 ? 1 : 0) * power;
                        power <<= 1;
                    }
                    c = f(bits);
                    break;
                case 1:
                    bits = 0;
                    maxpower = Math.pow(2, 16);
                    power = 1;
                    while(power != maxpower){
                        resb = data.val & data.position;
                        data.position >>= 1;
                        if (data.position == 0) {
                            data.position = resetValue;
                            data.val = getNextValue(data.index++);
                        }
                        bits |= (resb > 0 ? 1 : 0) * power;
                        power <<= 1;
                    }
                    c = f(bits);
                    break;
                case 2:
                    return "";
            }
            dictionary[3] = c;
            w = c;
            result.push(c);
            while(true){
                if (data.index > length) return "";
                bits = 0;
                maxpower = Math.pow(2, numBits);
                power = 1;
                while(power != maxpower){
                    resb = data.val & data.position;
                    data.position >>= 1;
                    if (data.position == 0) {
                        data.position = resetValue;
                        data.val = getNextValue(data.index++);
                    }
                    bits |= (resb > 0 ? 1 : 0) * power;
                    power <<= 1;
                }
                switch(c = bits){
                    case 0:
                        bits = 0;
                        maxpower = Math.pow(2, 8);
                        power = 1;
                        while(power != maxpower){
                            resb = data.val & data.position;
                            data.position >>= 1;
                            if (data.position == 0) {
                                data.position = resetValue;
                                data.val = getNextValue(data.index++);
                            }
                            bits |= (resb > 0 ? 1 : 0) * power;
                            power <<= 1;
                        }
                        dictionary[dictSize++] = f(bits);
                        c = dictSize - 1;
                        enlargeIn--;
                        break;
                    case 1:
                        bits = 0;
                        maxpower = Math.pow(2, 16);
                        power = 1;
                        while(power != maxpower){
                            resb = data.val & data.position;
                            data.position >>= 1;
                            if (data.position == 0) {
                                data.position = resetValue;
                                data.val = getNextValue(data.index++);
                            }
                            bits |= (resb > 0 ? 1 : 0) * power;
                            power <<= 1;
                        }
                        dictionary[dictSize++] = f(bits);
                        c = dictSize - 1;
                        enlargeIn--;
                        break;
                    case 2:
                        return result.join("");
                }
                if (enlargeIn == 0) {
                    enlargeIn = Math.pow(2, numBits);
                    numBits++;
                }
                if (dictionary[c]) entry = dictionary[c];
                else {
                    if (c === dictSize) entry = w + w.charAt(0);
                    else return null;
                }
                result.push(entry);
                // Add w+entry[0] to the dictionary.
                dictionary[dictSize++] = w + entry.charAt(0);
                enlargeIn--;
                w = entry;
                if (enlargeIn == 0) {
                    enlargeIn = Math.pow(2, numBits);
                    numBits++;
                }
            }
        }
    };
    return LZString;
}();
if (typeof define === "function" && define.amd) define(function() {
    return LZString;
});
else if (module != null) module.exports = LZString;

},{}],"kPbXd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isVisible = isVisible;
var _helpers = require("cc621b25681f1961");
function isVisible(element) {
    const window = (0, _helpers.getWindowFromNode)(element);
    for(let el = element; (_el = el) != null && _el.ownerDocument; el = el.parentElement){
        var _el;
        const display = window.getComputedStyle(el).display;
        if (display === "none") return false;
    }
    return true;
}

},{"cc621b25681f1961":"jL4Qd"}],"jL4Qd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TEXT_NODE = void 0;
exports.checkContainerType = checkContainerType;
exports.getDocument = getDocument;
exports.getWindowFromNode = getWindowFromNode;
exports.jestFakeTimersAreEnabled = jestFakeTimersAreEnabled;
// Constant node.nodeType for text nodes, see:
// https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType#Node_type_constants
const TEXT_NODE = 3;
exports.TEXT_NODE = TEXT_NODE;
function jestFakeTimersAreEnabled() {
    /* istanbul ignore else */ // eslint-disable-next-line
    if (typeof jest !== "undefined" && jest !== null) return setTimeout._isMockFunction === true || // modern timers
    Object.prototype.hasOwnProperty.call(setTimeout, "clock");
     // istanbul ignore next
    return false;
}
function getDocument() {
    /* istanbul ignore if */ if (typeof window === "undefined") throw new Error("Could not find default container");
    return window.document;
}
function getWindowFromNode(node) {
    if (node.defaultView) // node is document
    return node.defaultView;
    else if (node.ownerDocument && node.ownerDocument.defaultView) // node is a DOM node
    return node.ownerDocument.defaultView;
    else if (node.window) // node is window
    return node.window;
    else if (node.ownerDocument && node.ownerDocument.defaultView === null) throw new Error(`It looks like the window object is not available for the provided node.`);
    else if (node.then instanceof Function) throw new Error(`It looks like you passed a Promise object instead of a DOM node. Did you do something like \`fireEvent.click(screen.findBy...\` when you meant to use a \`getBy\` query \`fireEvent.click(screen.getBy...\`, or await the findBy query \`fireEvent.click(await screen.findBy...\`?`);
    else if (Array.isArray(node)) throw new Error(`It looks like you passed an Array instead of a DOM node. Did you do something like \`fireEvent.click(screen.getAllBy...\` when you meant to use a \`getBy\` query \`fireEvent.click(screen.getBy...\`?`);
    else if (typeof node.debug === "function" && typeof node.logTestingPlaygroundURL === "function") throw new Error(`It looks like you passed a \`screen\` object. Did you do something like \`fireEvent.click(screen, ...\` when you meant to use a query, e.g. \`fireEvent.click(screen.getBy..., \`?`);
    else // The user passed something unusual to a calling function
    throw new Error(`The given node is not an Element, the node type is: ${typeof node}.`);
}
function checkContainerType(container) {
    if (!container || !(typeof container.querySelector === "function") || !(typeof container.querySelectorAll === "function")) throw new TypeError(`Expected container to be an Element, a Document or a DocumentFragment but got ${getTypeName(container)}.`);
    function getTypeName(object) {
        if (typeof object === "object") return object === null ? "null" : object.constructor.name;
        return typeof object;
    }
}

},{}],"axsk6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isDocument = isDocument;
function isDocument(el) {
    return el.nodeType === el.DOCUMENT_NODE;
}

},{}],"bjyWd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wait = wait;
function wait(time) {
    return new Promise((resolve)=>setTimeout(()=>resolve(), time));
}

},{}],"7L0no":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hasPointerEvents = hasPointerEvents;
var _helpers = require("e30fe8b65f2633f1");
function hasPointerEvents(element) {
    const window = (0, _helpers.getWindowFromNode)(element);
    for(let el = element; (_el = el) != null && _el.ownerDocument; el = el.parentElement){
        var _el;
        const pointerEvents = window.getComputedStyle(el).pointerEvents;
        if (pointerEvents && ![
            "inherit",
            "unset"
        ].includes(pointerEvents)) return pointerEvents !== "none";
    }
    return true;
}

},{"e30fe8b65f2633f1":"jL4Qd"}],"62rfK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.hasFormSubmit = void 0;
const hasFormSubmit = (form)=>!!(form && (form.querySelector('input[type="submit"]') || form.querySelector('button[type="submit"]')));
exports.hasFormSubmit = hasFormSubmit;

},{}],"4vOtk":[function(require,module,exports) {

},{}],"1mhF7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewMjs = require("./View.mjs");
var _viewMjsDefault = parcelHelpers.interopDefault(_viewMjs);
class carouselView extends (0, _viewMjsDefault.default) {
    toggleSlide() {
        const slides = document.querySelectorAll(".slide");
        const slidesNav = document.querySelector(".slides-nav");
        const indicators = document.querySelectorAll(".nav-indicator");
        let curSlide = 0;
        let maxSlide = slides.length - 1;
        const nextSlide = document.querySelector("#slide-arrow-next");
        const prevSlide = document.querySelector("#slide-arrow-prev");
        nextSlide.addEventListener("click", function() {
            if (curSlide === maxSlide) curSlide = 0;
            else curSlide++;
            slides.forEach((slide, index)=>{
                slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
                if (index === curSlide) indicators[index].style.backgroundColor = "white";
                else indicators[index].style.backgroundColor = "grey";
            });
        });
        prevSlide.addEventListener("click", function() {
            if (curSlide === 0) curSlide = maxSlide;
            else curSlide--;
            slides.forEach((slide, index)=>{
                slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
                if (index === curSlide) indicators[index].style.backgroundColor = "white";
                else indicators[index].style.backgroundColor = "grey";
            });
        });
        slidesNav.addEventListener("click", function(e) {
            const targetSlide = e.target.closest(".nav-indicator");
            if (!targetSlide) return;
            curSlide = +targetSlide.dataset.index;
            console.log(curSlide);
            slides.forEach((slide, index)=>{
                slide.style.transform = `translateX(${100 * (index - curSlide)}%)`;
                if (index === curSlide) indicators[index].style.backgroundColor = "white";
                else indicators[index].style.backgroundColor = "grey";
            });
        });
    }
    addLazyLoad() {
        const callback = (entries)=>{
            return entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.style.opacity = "100";
                }
            });
        };
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.50
        };
        const observer = new IntersectionObserver(callback, options);
        const targets = [
            document.querySelector(".carousel-info"),
            document.querySelector(".greeting-hero")
        ];
        targets.forEach((target)=>{
            observer.observe(target);
        });
    }
}
exports.default = new carouselView();

},{"./View.mjs":"1xEUf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eec1k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewMjs = require("./View.mjs");
var _viewMjsDefault = parcelHelpers.interopDefault(_viewMjs);
class WatchlistView extends (0, _viewMjsDefault.default) {
    _parentElement = document.querySelector(".watchlist-preview__container");
    addHandlerSeeWatchlist() {
        this._parentElement.closest(".watchlist").addEventListener("mouseenter", function(e) {
            const watchlist = e.target.closest(".watchlist");
            if (!watchlist) return;
            document.querySelector(".watchlist-preview__container").classList.remove("hidden");
        });
        this._parentElement.closest(".watchlist").addEventListener("mouseleave", function(e) {
            const watchlist = e.target.closest(".watchlist");
            if (!watchlist) return;
            document.querySelector(".watchlist-preview__container").classList.add("hidden");
        });
    }
    _generateMarkup() {
        const watchlist = this._data?.length > 0 ? this._data.map((bookmark)=>{
            return `
        <div class="watchlist-preview">
           <img src="${Object.keys(bookmark.posterURLs).length > 0 ? Object.values(bookmark.posterURLs)[Object.values(bookmark.posterURLs).length - 1] : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/640px-No-Image-Placeholder.svg.png"}" alt="" class="watchlist-preview__poster">
           <h3 class="watchlist-preview__title">${bookmark.title}</p>
        </div>`;
        }).join("") : `<p class="watchlist-backuptext">No saved items! Search for movies or TV shows to add to watchlist.</p>`;
        return watchlist;
    }
}
exports.default = new WatchlistView();

},{"./View.mjs":"1xEUf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["9scb0","1aybq"], "1aybq", "parcelRequirecbca")

//# sourceMappingURL=index.85e3cad1.js.map
