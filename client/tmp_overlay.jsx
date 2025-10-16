import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/ErrorOverlay.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=07026991"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=07026991"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react; const useEffect = __vite__cjsImport1_react["useEffect"]; const useState = __vite__cjsImport1_react["useState"];
export default function ErrorOverlay() {
  _s();
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    const onError = (message, source, lineno, colno, error) => {
      setErrors((e) => [...e, { message: message?.toString() || String(error), stack: error?.stack }]);
      return false;
    };
    const onRejection = (ev) => {
      const reason = ev?.reason || ev;
      setErrors((e) => [...e, { message: reason?.message || String(reason), stack: reason?.stack }]);
    };
    window.addEventListener("error", (e) => onError(e.message, e.filename, e.lineno, e.colno, e.error));
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);
  if (!errors.length) return null;
  return /* @__PURE__ */ jsxDEV("div", { style: { position: "fixed", left: 12, right: 12, bottom: 12, zIndex: 9999 }, children: errors.map(
    (err, i) => /* @__PURE__ */ jsxDEV("div", { style: { background: "#411111", color: "white", padding: 12, borderRadius: 8, marginBottom: 8, boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }, children: [
      /* @__PURE__ */ jsxDEV("div", { style: { fontWeight: 700, marginBottom: 6 }, children: "Runtime Error" }, void 0, false, {
        fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/ErrorOverlay.jsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { whiteSpace: "pre-wrap", fontFamily: "monospace", fontSize: 13 }, children: [
        err.message,
        err.stack ? "\n\n" + err.stack : null
      ] }, void 0, true, {
        fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/ErrorOverlay.jsx",
        lineNumber: 33,
        columnNumber: 11
      }, this)
    ] }, i, true, {
      fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/ErrorOverlay.jsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ) }, void 0, false, {
    fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/ErrorOverlay.jsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}
_s(ErrorOverlay, "G9zbw3Ax5XkMBt8coz+TwsliNXQ=");
_c = ErrorOverlay;
var _c;
$RefreshReg$(_c, "ErrorOverlay");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/ErrorOverlay.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/ErrorOverlay.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/ErrorOverlay.jsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBK0JVOztBQS9CVixPQUFPQSxTQUFTQyxXQUFXQyxnQkFBZ0I7QUFFM0Msd0JBQXdCQyxlQUFlO0FBQUFDLEtBQUE7QUFDckMsUUFBTSxDQUFDQyxRQUFRQyxTQUFTLElBQUlKLFNBQVMsRUFBRTtBQUV2Q0QsWUFBVSxNQUFNO0FBQ2QsVUFBTU0sVUFBVUEsQ0FBQ0MsU0FBU0MsUUFBUUMsUUFBUUMsT0FBT0MsVUFBVTtBQUN6RE4sZ0JBQVUsQ0FBQ08sTUFBTSxDQUFDLEdBQUdBLEdBQUcsRUFBRUwsU0FBU0EsU0FBU00sU0FBUyxLQUFLQyxPQUFPSCxLQUFLLEdBQUdJLE9BQU9KLE9BQU9JLE1BQU0sQ0FBQyxDQUFDO0FBQy9GLGFBQU87QUFBQSxJQUNUO0FBRUEsVUFBTUMsY0FBY0EsQ0FBQ0MsT0FBTztBQUMxQixZQUFNQyxTQUFTRCxJQUFJQyxVQUFVRDtBQUM3QlosZ0JBQVUsQ0FBQ08sTUFBTSxDQUFDLEdBQUdBLEdBQUcsRUFBRUwsU0FBU1csUUFBUVgsV0FBV08sT0FBT0ksTUFBTSxHQUFHSCxPQUFPRyxRQUFRSCxNQUFNLENBQUMsQ0FBQztBQUFBLElBQy9GO0FBRUFJLFdBQU9DLGlCQUFpQixTQUFTLENBQUNSLE1BQU1OLFFBQVFNLEVBQUVMLFNBQVNLLEVBQUVTLFVBQVVULEVBQUVILFFBQVFHLEVBQUVGLE9BQU9FLEVBQUVELEtBQUssQ0FBQztBQUNsR1EsV0FBT0MsaUJBQWlCLHNCQUFzQkosV0FBVztBQUV6RCxXQUFPLE1BQU07QUFDWEcsYUFBT0csb0JBQW9CLFNBQVNoQixPQUFPO0FBQzNDYSxhQUFPRyxvQkFBb0Isc0JBQXNCTixXQUFXO0FBQUEsSUFDOUQ7QUFBQSxFQUNGLEdBQUcsRUFBRTtBQUVMLE1BQUksQ0FBQ1osT0FBT21CLE9BQVEsUUFBTztBQUUzQixTQUNFLHVCQUFDLFNBQUksT0FBTyxFQUFFQyxVQUFVLFNBQVNDLE1BQU0sSUFBSUMsT0FBTyxJQUFJQyxRQUFRLElBQUlDLFFBQVEsS0FBSyxHQUM1RXhCLGlCQUFPeUI7QUFBQUEsSUFBSSxDQUFDQyxLQUFLQyxNQUNoQix1QkFBQyxTQUFZLE9BQU8sRUFBRUMsWUFBWSxXQUFXQyxPQUFPLFNBQVNDLFNBQVMsSUFBSUMsY0FBYyxHQUFHQyxjQUFjLEdBQUdDLFdBQVcsNkJBQTZCLEdBQ2xKO0FBQUEsNkJBQUMsU0FBSSxPQUFPLEVBQUVDLFlBQVksS0FBS0YsY0FBYyxFQUFFLEdBQUcsNkJBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBK0Q7QUFBQSxNQUMvRCx1QkFBQyxTQUFJLE9BQU8sRUFBRUcsWUFBWSxZQUFZQyxZQUFZLGFBQWFDLFVBQVUsR0FBRyxHQUN6RVg7QUFBQUEsWUFBSXZCO0FBQUFBLFFBQ0p1QixJQUFJZixRQUFRLFNBQVNlLElBQUlmLFFBQVE7QUFBQSxXQUZwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBR0E7QUFBQSxTQUxRZ0IsR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBTUE7QUFBQSxFQUNELEtBVEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVVBO0FBRUo7QUFBQzVCLEdBdEN1QkQsY0FBWTtBQUFBd0MsS0FBWnhDO0FBQVksSUFBQXdDO0FBQUFDLGFBQUFELElBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRXJyb3JPdmVybGF5IiwiX3MiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJvbkVycm9yIiwibWVzc2FnZSIsInNvdXJjZSIsImxpbmVubyIsImNvbG5vIiwiZXJyb3IiLCJlIiwidG9TdHJpbmciLCJTdHJpbmciLCJzdGFjayIsIm9uUmVqZWN0aW9uIiwiZXYiLCJyZWFzb24iLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZmlsZW5hbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGVuZ3RoIiwicG9zaXRpb24iLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJ6SW5kZXgiLCJtYXAiLCJlcnIiLCJpIiwiYmFja2dyb3VuZCIsImNvbG9yIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsIm1hcmdpbkJvdHRvbSIsImJveFNoYWRvdyIsImZvbnRXZWlnaHQiLCJ3aGl0ZVNwYWNlIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiRXJyb3JPdmVybGF5LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVycm9yT3ZlcmxheSgpIHtcclxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3Qgb25FcnJvciA9IChtZXNzYWdlLCBzb3VyY2UsIGxpbmVubywgY29sbm8sIGVycm9yKSA9PiB7XHJcbiAgICAgIHNldEVycm9ycygoZSkgPT4gWy4uLmUsIHsgbWVzc2FnZTogbWVzc2FnZT8udG9TdHJpbmcoKSB8fCBTdHJpbmcoZXJyb3IpLCBzdGFjazogZXJyb3I/LnN0YWNrIH1dKTtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvblJlamVjdGlvbiA9IChldikgPT4ge1xyXG4gICAgICBjb25zdCByZWFzb24gPSBldj8ucmVhc29uIHx8IGV2O1xyXG4gICAgICBzZXRFcnJvcnMoKGUpID0+IFsuLi5lLCB7IG1lc3NhZ2U6IHJlYXNvbj8ubWVzc2FnZSB8fCBTdHJpbmcocmVhc29uKSwgc3RhY2s6IHJlYXNvbj8uc3RhY2sgfV0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoZSkgPT4gb25FcnJvcihlLm1lc3NhZ2UsIGUuZmlsZW5hbWUsIGUubGluZW5vLCBlLmNvbG5vLCBlLmVycm9yKSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndW5oYW5kbGVkcmVqZWN0aW9uJywgb25SZWplY3Rpb24pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIG9uRXJyb3IpO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndW5oYW5kbGVkcmVqZWN0aW9uJywgb25SZWplY3Rpb24pO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmICghZXJyb3JzLmxlbmd0aCkgcmV0dXJuIG51bGw7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnZml4ZWQnLCBsZWZ0OiAxMiwgcmlnaHQ6IDEyLCBib3R0b206IDEyLCB6SW5kZXg6IDk5OTkgfX0+XHJcbiAgICAgIHtlcnJvcnMubWFwKChlcnIsIGkpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17aX0gc3R5bGU9e3sgYmFja2dyb3VuZDogJyM0MTExMTEnLCBjb2xvcjogJ3doaXRlJywgcGFkZGluZzogMTIsIGJvcmRlclJhZGl1czogOCwgbWFyZ2luQm90dG9tOiA4LCBib3hTaGFkb3c6ICcwIDhweCAyNHB4IHJnYmEoMCwwLDAsMC40KScgfX0+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDcwMCwgbWFyZ2luQm90dG9tOiA2IH19PlJ1bnRpbWUgRXJyb3I8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2hpdGVTcGFjZTogJ3ByZS13cmFwJywgZm9udEZhbWlseTogJ21vbm9zcGFjZScsIGZvbnRTaXplOiAxMyB9fT5cclxuICAgICAgICAgICAge2Vyci5tZXNzYWdlfVxyXG4gICAgICAgICAgICB7ZXJyLnN0YWNrID8gJ1xcblxcbicgKyBlcnIuc3RhY2sgOiBudWxsfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwiZmlsZSI6IkM6L1VzZXJzL0hhcmlvbSBrdW1iaGthci9Eb3dubG9hZHMvbmV3b2tmZWVlZWUvY2xpZW50L3NyYy9FcnJvck92ZXJsYXkuanN4In0=