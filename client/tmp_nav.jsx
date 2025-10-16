import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/components/Navbar.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=07026991"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=07026991"; const React = __vite__cjsImport1_react.__esModule ? __vite__cjsImport1_react.default : __vite__cjsImport1_react; const useState = __vite__cjsImport1_react["useState"];
import { Link } from "/node_modules/.vite/deps/react-router-dom.js?v=07026991";
import { XMarkIcon, Bars3Icon } from "/node_modules/.vite/deps/@heroicons_react_24_outline.js?v=07026991";
const Navbar = () => {
  _s();
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxDEV("nav", { className: "bg-white shadow-md", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-center justify-between h-16", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "text-2xl font-bold text-blue-600", children: "OkFees" }, void 0, false, {
        fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx",
        lineNumber: 15,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "hidden md:block", children: /* @__PURE__ */ jsxDEV("div", { className: "ml-10 flex items-baseline space-x-4", children: [
        /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium", children: "Courses" }, void 0, false, {
          fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx",
          lineNumber: 19,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium", children: "About" }, void 0, false, {
          fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx",
          lineNumber: 20,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { to: "/login", className: "text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium", children: "Login" }, void 0, false, {
          fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx",
          lineNumber: 21,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ jsxDEV(Link, { to: "/signup", className: "bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700", children: "Start Now" }, void 0, false, {
          fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx",
          lineNumber: 22,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx",
        lineNumber: 18,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx",
        lineNumber: 17,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "-mr-2 flex md:hidden", children: /* @__PURE__ */ jsxDEV("button", { onClick: () => setIsOpen(!isOpen), className: "bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
          fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx",
          lineNumber: 27,
          columnNumber: 15
        }, this),
        isOpen ? /* @__PURE__ */ jsxDEV(XMarkIcon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
          fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx",
          lineNumber: 29,
          columnNumber: 15
        }, this) : /* @__PURE__ */ jsxDEV(Bars3Icon, { className: "block h-6 w-6", "aria-hidden": "true" }, void 0, false, {
          fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx",
          lineNumber: 31,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx",
        lineNumber: 26,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx",
        lineNumber: 25,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    isOpen && /* @__PURE__ */ jsxDEV("div", { className: "md:hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "px-2 pt-2 pb-3 space-y-1 sm:px-3", children: [
      /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium", children: "Courses" }, void 0, false, {
        fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx",
        lineNumber: 41,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium", children: "About" }, void 0, false, {
        fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx",
        lineNumber: 42,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { to: "/login", className: "text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium", children: "Login" }, void 0, false, {
        fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx",
        lineNumber: 43,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ jsxDEV(Link, { to: "/signup", className: "bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700", children: "Start Now" }, void 0, false, {
        fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx",
        lineNumber: 44,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx",
      lineNumber: 40,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
};
_s(Navbar, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = Navbar;
export default Navbar;
var _c;
$RefreshReg$(_c, "Navbar");
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}
function $RefreshReg$(type, id) {
  return RefreshRuntime.register(type, "C:/Users/Hariom kumbhkar/Downloads/newokfeeeee/client/src/components/Navbar.jsx " + id);
}
function $RefreshSig$() {
  return RefreshRuntime.createSignatureFunctionForTransform();
}

//# sourceMappingURL=data:application/json;base64,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IiwiWE1hcmtJY29uIiwiQmFyczNJY29uIiwiTmF2YmFyIiwiX3MiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJOYXZiYXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbi8vIEhlcm9pY29ucyB2MiB1c2VzIG5hbWVzIGxpa2UgWE1hcmtJY29uIGFuZCBCYXJzM0ljb24gYW5kIHRoZSBwYWNrYWdlIHBhdGhcbi8vIGNoYW5nZWQgdG8gQGhlcm9pY29ucy9yZWFjdC8yNC9vdXRsaW5lXG5pbXBvcnQgeyBYTWFya0ljb24sIEJhcnMzSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZSc7XG5cbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LW1kXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHB4LTQgc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGgtMTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ibHVlLTYwMFwiPk9rRmVlczwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0xMCBmbGV4IGl0ZW1zLWJhc2VsaW5lIHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOnRleHQtZ3JheS05MDAgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1zbSBmb250LW1lZGl1bVwiPkNvdXJzZXM8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6dGV4dC1ncmF5LTkwMCBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+QWJvdXQ8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtc20gZm9udC1tZWRpdW1cIj5Mb2dpbjwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvc2lnbnVwXCIgY2xhc3NOYW1lPVwiYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LXNtIGZvbnQtbWVkaXVtIGhvdmVyOmJnLWJsdWUtNzAwXCI+U3RhcnQgTm93PC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXItMiBmbGV4IG1kOmhpZGRlblwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9IGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTIgcm91bmRlZC1tZCB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS01MDAgaG92ZXI6YmctZ3JheS0yMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctb2Zmc2V0LWdyYXktMTAwIGZvY3VzOnJpbmctYmx1ZS01MDBcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPk9wZW4gbWFpbiBtZW51PC9zcGFuPlxuICAgICAgICAgICAgICB7aXNPcGVuID8gKFxuICAgICAgICAgICAgICAgIDxYTWFya0ljb24gY2xhc3NOYW1lPVwiYmxvY2sgaC02IHctNlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIC8+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPEJhcnMzSWNvbiBjbGFzc05hbWU9XCJibG9jayBoLTYgdy02XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7aXNPcGVuICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgcHQtMiBwYi0zIHNwYWNlLXktMSBzbTpweC0zXCI+XG4gICAgICAgICAgICA8TGluayB0bz1cIi9cIiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOnRleHQtZ3JheS05MDAgYmxvY2sgcHgtMyBweS0yIHJvdW5kZWQtbWQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtXCI+Q291cnNlczwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6dGV4dC1ncmF5LTkwMCBibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW1cIj5BYm91dDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIGJsb2NrIHB4LTMgcHktMiByb3VuZGVkLW1kIHRleHQtYmFzZSBmb250LW1lZGl1bVwiPkxvZ2luPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgdG89XCIvc2lnbnVwXCIgY2xhc3NOYW1lPVwiYmctYmx1ZS02MDAgdGV4dC13aGl0ZSBibG9jayBweC0zIHB5LTIgcm91bmRlZC1tZCB0ZXh0LWJhc2UgZm9udC1tZWRpdW0gaG92ZXI6YmctYmx1ZS03MDBcIj5TdGFydCBOb3c8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJmaWxlIjoiQzovVXNlcnMvSGFyaW9tIGt1bWJoa2FyL0Rvd25sb2Fkcy9uZXdva2ZlZWVlZS9jbGllbnQvc3JjL2NvbXBvbmVudHMvTmF2YmFyLmpzeCJ9