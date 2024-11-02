import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { RemixServer, Link as Link$1, useLocation, useNavigate, useNavigation, useLoaderData, useFetcher, Meta, Links, Outlet, ScrollRestoration, Scripts, useRouteError } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToReadableStream } from "react-dom/server";
import { createCookieSessionStorage, json } from "@remix-run/cloudflare";
import { createContext, useContext, forwardRef, useRef, useEffect, useState, memo, Fragment, useCallback, useId, lazy, Children, useSyncExternalStore, Suspense } from "react";
import { useReducedMotion, AnimatePresence, usePresence, useSpring } from "framer-motion";
import { useMDXComponents, MDXProvider } from "@mdx-js/react";
import emailjs from "emailjs-com";
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  const body = await renderToReadableStream(
    /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }),
    {
      signal: request.signal,
      onError(error2) {
        console.error(error2);
        responseStatusCode = 500;
      }
    }
  );
  if (isBotRequest(request.headers.get("user-agent"))) {
    await body.allReady;
  }
  responseHeaders.set("Content-Type", "text/html");
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  if ("isbot" in isbotModule && typeof isbotModule.isbot === "function") {
    return isbotModule.isbot(userAgent);
  }
  if ("default" in isbotModule && typeof isbotModule.default === "function") {
    return isbotModule.default(userAgent);
  }
  return false;
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const GothamBoldItalic = "/assets/gotham-bold-italic-C_msAlmW.woff2";
const GothamBold = "/assets/gotham-bold-D1kvQ7KV.woff2";
const GothamBookItalic = "/assets/gotham-book-italic-Bm2IEtSK.woff2";
const GothamBook = "/assets/gotham-book-Bnaws0Ef.woff2";
const GothamMediumItalic = "/assets/gotham-medium-italic-Dok430ou.woff2";
const GothamMedium = "/assets/gotham-medium-0VT3RO8I.woff2";
const IPAGothic = "/assets/ipa-gothic-DimHCOud.woff2";
const media = {
  desktop: 2080,
  laptop: 1680,
  tablet: 1040,
  mobile: 696,
  mobileS: 400
};
const numToPx = (num) => `${num}px`;
const pxToRem = (px) => `${px / 16}rem`;
const msToNum$1 = (msString) => Number(msString.replace("ms", ""));
const numToMs$1 = (num) => `${num}ms`;
function cssProps$1(props, style = {}) {
  let result = {};
  const keys = Object.keys(props);
  for (const key of keys) {
    let value2 = props[key];
    if (typeof value2 === "number" && key === "delay") {
      value2 = numToMs$1(value2);
    }
    if (typeof value2 === "number" && key !== "opacity") {
      value2 = numToPx(value2);
    }
    if (typeof value2 === "number" && key === "opacity") {
      value2 = `${value2 * 100}%`;
    }
    result[`--${key}`] = value2;
  }
  return { ...result, ...style };
}
function classes(...classes2) {
  return classes2.filter(Boolean).join(" ");
}
const baseTokens = {
  black: "oklch(0% 0 0)",
  white: "oklch(100% 0 0)",
  bezierFastoutSlowin: "cubic-bezier(0.4, 0.0, 0.2, 1)",
  durationXS: "200ms",
  durationS: "300ms",
  durationM: "400ms",
  durationL: "600ms",
  durationXL: "800ms",
  systemFontStack: "system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",
  fontStack: `Gotham, var(--systemFontStack)`,
  monoFontStack: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  japaneseFontStack: "IPA Gothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif",
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeH0: pxToRem(140),
  fontSizeH1: pxToRem(100),
  fontSizeH2: pxToRem(58),
  fontSizeH3: pxToRem(38),
  fontSizeH4: pxToRem(28),
  fontSizeH5: pxToRem(24),
  fontSizeBodyXL: pxToRem(22),
  fontSizeBodyL: pxToRem(20),
  fontSizeBodyM: pxToRem(18),
  fontSizeBodyS: pxToRem(16),
  fontSizeBodyXS: pxToRem(14),
  lineHeightTitle: "1.1",
  lineHeightBody: "1.6",
  maxWidthS: "540px",
  maxWidthM: "720px",
  maxWidthL: "1096px",
  maxWidthXL: "1680px",
  spaceOuter: "64px",
  spaceXS: "4px",
  spaceS: "8px",
  spaceM: "16px",
  spaceL: "24px",
  spaceXL: "32px",
  space2XL: "48px",
  space3XL: "64px",
  space4XL: "96px",
  space5XL: "128px",
  zIndex0: 0,
  zIndex1: 4,
  zIndex2: 8,
  zIndex3: 16,
  zIndex4: 32,
  zIndex5: 64
};
const tokensDesktop = {
  fontSizeH0: pxToRem(120),
  fontSizeH1: pxToRem(80)
};
const tokensLaptop = {
  maxWidthS: "480px",
  maxWidthM: "640px",
  maxWidthL: "1000px",
  maxWidthXL: "1100px",
  spaceOuter: "48px",
  fontSizeH0: pxToRem(100),
  fontSizeH1: pxToRem(70),
  fontSizeH2: pxToRem(50),
  fontSizeH3: pxToRem(36),
  fontSizeH4: pxToRem(26),
  fontSizeH5: pxToRem(22)
};
const tokensTablet = {
  fontSizeH0: pxToRem(80),
  fontSizeH1: pxToRem(60),
  fontSizeH2: pxToRem(48),
  fontSizeH3: pxToRem(32),
  fontSizeH4: pxToRem(24),
  fontSizeH5: pxToRem(20)
};
const tokensMobile = {
  spaceOuter: "24px",
  fontSizeH0: pxToRem(56),
  fontSizeH1: pxToRem(40),
  fontSizeH2: pxToRem(34),
  fontSizeH3: pxToRem(28),
  fontSizeH4: pxToRem(22),
  fontSizeH5: pxToRem(18),
  fontSizeBodyL: pxToRem(17),
  fontSizeBodyM: pxToRem(16),
  fontSizeBodyS: pxToRem(14)
};
const tokensMobileSmall = {
  spaceOuter: "16px",
  fontSizeH0: pxToRem(42),
  fontSizeH1: pxToRem(38),
  fontSizeH2: pxToRem(28),
  fontSizeH3: pxToRem(24),
  fontSizeH4: pxToRem(20)
};
const dark = {
  background: "oklch(17.76% 0 0)",
  backgroundLight: "oklch(21.78% 0 0)",
  primary: "oklch(84.42% 0.19 202.24)",
  accent: "oklch(84.42% 0.19 202.24)",
  error: "oklch(65.91% 0.249 13.76)",
  text: "var(--white)",
  textTitle: "var(--text)",
  textBody: "color-mix(in lab, var(--text) 80%, transparent)",
  textLight: "color-mix(in lab, var(--text) 60%, transparent)"
};
const light = {
  background: "oklch(96.12% 0 0)",
  backgroundLight: "var(--white)",
  primary: "var(--black)",
  accent: "oklch(84.42% 0.19 202.24)",
  error: "oklch(63.17% 0.259 25.41)",
  text: "var(--black)",
  textTitle: "color-mix(in lab, var(--text) 90%, transparent)",
  textBody: "color-mix(in lab, var(--text) 75%, transparent)",
  textLight: "color-mix(in lab, var(--text) 55%, transparent)"
};
const tokens = {
  base: baseTokens,
  desktop: tokensDesktop,
  laptop: tokensLaptop,
  tablet: tokensTablet,
  mobile: tokensMobile,
  mobileS: tokensMobileSmall
};
const themes = { dark, light };
const ThemeContext = createContext({});
const ThemeProvider = ({
  theme = "dark",
  children,
  className,
  as: Component = "div",
  toggleTheme,
  ...rest
}) => {
  const parentTheme = useTheme();
  const isRootProvider = !parentTheme.theme;
  return /* @__PURE__ */ jsxs(
    ThemeContext.Provider,
    {
      value: {
        theme,
        toggleTheme: toggleTheme || parentTheme.toggleTheme
      },
      children: [
        isRootProvider && children,
        !isRootProvider && /* @__PURE__ */ jsx(Component, { className: classes(className), "data-theme": theme, ...rest, children })
      ]
    }
  );
};
function useTheme() {
  const currentTheme = useContext(ThemeContext);
  return currentTheme;
}
function squish(styles2) {
  return styles2.replace(/\s\s+/g, " ");
}
function createThemeProperties(theme) {
  return squish(
    Object.keys(theme).map((key) => `--${key}: ${theme[key]};`).join("\n\n")
  );
}
function createMediaTokenProperties() {
  return squish(
    Object.keys(media).map((key) => {
      return `
        @media (max-width: ${media[key]}px) {
          :root {
            ${createThemeProperties(tokens[key])}
          }
        }
      `;
    }).join("\n")
  );
}
const layerStyles = squish(`
  @layer theme, base, components, layout;
`);
const tokenStyles = squish(`
  :root {
    ${createThemeProperties(tokens.base)}
  }

  ${createMediaTokenProperties()}

  [data-theme='dark'] {
    ${createThemeProperties(themes.dark)}
  }

  [data-theme='light'] {
    ${createThemeProperties(themes.light)}
  }
`);
const fontStyles = squish(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBook}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBookItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMedium}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMediumItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBold}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBoldItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${IPAGothic}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`);
const themeStyles = squish(`
  ${layerStyles}

  @layer theme {
    ${tokenStyles}
    ${fontStyles}
  }
`);
const notFoundPoster = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCABAAEADAREAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAABAYDBQABBwL/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAA5V08yLHoDDYNgxJHRa8hFEklbmS9AoObTssxD6/KwqJ6VRg4APobRBbZj3O5QslX1GlT21TtokddVIHubc7rotmtg0vhhlBMtofQzWMe2qits4MULqvSbGlenLMibq3QhVZWsVXV6BHLM8lcqXKySlWe0besFLm6rgBirP8A/8QAJBAAAgICAgMBAAIDAAAAAAAAAgMAAQQFERIGITETFDIgIiP/2gAIAQEAAT8A2eWY49zPdbGl/hgl1dVzUt74dVEIqmWVzea2qximxTa3lUpdyllF4pFXyIxDptepoEF+NVcDD7B6mev+UsqqbTRf9ruVqxD7UHXK5jEgu+BmMpY8EU1D080NXUwMcWBVjD3YY43XaZO9pz+OZ1F+P2D7HA0LuIxWPLmbUixw4mHtmoZzRTxzzCl8Uwo/OY0vsE2du08c2Fc0DLmXjJbj9g4mH+aFl2nkmTTWlQwoDSD5cwfGGtP2MzPHLQn+sDVuSfYJh5TxDofMHHbkDdDN1rWJu7uovCY0vVQNI66/rMLZoAuPU2mWgkWVwtoi2WHqIpLq7DxMNqkD7nkmekyuvU0P4tZ7qGKgD0NTHYX6fZsmM/iX7v5GtMX37v7NLmECq7XLyLeF0E3K2U/3PGkXXu5lF/pP/8QAGxEAAwEBAAMAAAAAAAAAAAAAAAECERASICH/2gAIAQIBAT8AbG/WRiejXMFJhKKrCZQ5MMF2xs0Q0Io0pb2R8rrrBUJmjrDdMPEuBJokS0uCVghDKXIof0tYIR//xAAbEQADAQEBAQEAAAAAAAAAAAAAAQIREhAgMf/aAAgBAwEBPwCCV8MsRCwXumlkoVCo00Q0OWRJEHJhhnnJKwz5Xzpp0I06Js0ejbQrIKYxEswuNOcI/CvP/9k=";
const notFoundVideo = "/assets/notfound-Cfa33_DP.mp4";
const flatlinePoster = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAACXBIWXMAAAsRAAALEQF/ZF+RAAACnElEQVQ4y1VU4ZrbIAyzwc3dbft2P/f+T7lrAniS7dBb+xHaAJYly+ifX58uoqLa8GzSMHc1jC69dTGM1rCigm1Llk+ZPuScQy6Ohf9ribsLv/fH62mP3jHFafwnkMYCp46HdZWjmzwsQQCBoENsXPI1sB/jEoImyB0+fiGefRwHssLBJTFL8olgwEbwJj8Ok7eHBRiPngD4e/ZKJkdbZLd2eGK5gsHv93cZeH/NJWM66OYiZekYhzUE7wFymMWhc1hIyoTcybzJ1FkAmT3Z8L99fvyM4E+gfF0Th7ER2ZBBQ4YEMowHmHBEwngM7LnsiKR8aQAgpGhBMDhrEwye2NTPiaULS0PGGEWc2ZFR0ues+ZZ2CCNYe8jqGmbQqJ1vgGtOsTd7IBKlaXghyIiMMyipUjJuvAq0N0gTMiIY5IHHxAAkkKzhHJkTiEXveGe3rfSWJAb1zVqQJgGeI8kzU+rudEW5hsUOcLquSSTcshxi9DKznjNt1mqjxCEPoAGAwaJrnBXuWiVd2sVzoT6tMmbt7LzYNF7Fosak5tkWZbpVTBZkXBHo1VgsLIcU41U2Z3KUy87BjgTAymylFhSPSIzSpXXKetmWEnOOVlAB6tkrlI1MjPoy+6Tsm16MVDjrUiCRqd41k2g+BsvMpZyke7agXsG1Cnb3gNyWjH7IgCKvfYa+4DxVy3XZyemkPGteskTStdj/c5RWwBepuKe2a5g9xqq5uvlmay+becjQ6pJj0/Z2A2z77PtSv7Gk5lOzZxIsS89vApQYmaWyZ+JwAtUNy4Pq+8ZULdvyhq2iuGq1RlqYgBtA9AaSLUn7JpVX+qt0avLS+XaTfjeus5sna5DRwt7qL/3y3t61kapFywO7e7PPfFv4/k3zcPwDeTTjchlA+6QAAAAASUVORK5CYII=";
const flatlineVideo = "/assets/flatline-DaiGY3H4.mp4";
const icon$2 = "_icon_nm21j_3";
const styles$y = {
  icon: icon$2
};
const sprites = "/assets/icons-B-8LW4L9.svg";
const Icon = forwardRef(({ icon: icon2, className, size, ...rest }, ref) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      "aria-hidden": true,
      ref,
      className: classes(styles$y.icon, className),
      width: size || 24,
      height: size || 24,
      ...rest,
      children: /* @__PURE__ */ jsx("use", { href: `${sprites}#${icon2}` })
    }
  );
});
const text$5 = "_text_w1gy9_3";
const styles$x = {
  text: text$5
};
const Text = ({
  children,
  size = "m",
  as: Component = "span",
  align = "auto",
  weight = "auto",
  secondary,
  className,
  ...rest
}) => {
  return /* @__PURE__ */ jsx(
    Component,
    {
      className: classes(styles$x.text, className),
      "data-align": align,
      "data-size": size,
      "data-weight": weight,
      "data-secondary": secondary,
      ...rest,
      children
    }
  );
};
const loader$6 = "_loader_11zpc_3";
const text$4 = "_text_11zpc_33";
const span = "_span_11zpc_85";
const loaderSpan = "_loaderSpan_11zpc_1";
const styles$w = {
  loader: loader$6,
  text: text$4,
  span,
  loaderSpan
};
const Loader = forwardRef(
  ({ className, style, width = 32, height = 4, text: text2 = "Loading...", center, ...rest }, ref) => {
    const reduceMotion = useReducedMotion();
    if (reduceMotion) {
      return /* @__PURE__ */ jsx(Text, { className: classes(styles$w.text, className), weight: "medium", ...rest, children: text2 });
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: classes(styles$w.loader, className),
        "data-center": center,
        style: cssProps$1({ width, height }, style),
        ...rest,
        children: /* @__PURE__ */ jsx("div", { className: styles$w.span })
      }
    );
  }
);
const Transition = ({ children, in: show, unmount, initial = true, ...props }) => {
  const enterTimeout = useRef();
  const exitTimeout = useRef();
  useEffect(() => {
    if (show) {
      clearTimeout(exitTimeout.current);
    } else {
      clearTimeout(enterTimeout.current);
    }
  }, [show]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: (show || !unmount) && /* @__PURE__ */ jsx(
    TransitionContent,
    {
      enterTimeout,
      exitTimeout,
      in: show,
      initial,
      ...props,
      children
    }
  ) });
};
const TransitionContent = ({
  children,
  timeout = 0,
  enterTimeout,
  exitTimeout,
  onEnter,
  onEntered,
  onExit,
  onExited,
  initial,
  nodeRef: defaultNodeRef,
  in: show
}) => {
  const [status, setStatus] = useState(initial ? "exited" : "entered");
  const [isPresent, safeToRemove] = usePresence();
  const [hasEntered, setHasEntered] = useState(initial ? false : true);
  const splitTimeout = typeof timeout === "object";
  const internalNodeRef = useRef(null);
  const nodeRef = defaultNodeRef || internalNodeRef;
  const visible = hasEntered && show ? isPresent : false;
  useEffect(() => {
    var _a;
    if (hasEntered || !show)
      return;
    const actualTimeout = splitTimeout ? timeout.enter : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setHasEntered(true);
    setStatus("entering");
    onEnter == null ? void 0 : onEnter();
    (_a = nodeRef.current) == null ? void 0 : _a.offsetHeight;
    enterTimeout.current = setTimeout(() => {
      setStatus("entered");
      onEntered == null ? void 0 : onEntered();
    }, actualTimeout);
  }, [onEnter, onEntered, timeout, status, show]);
  useEffect(() => {
    var _a;
    if (isPresent && show)
      return;
    const actualTimeout = splitTimeout ? timeout.exit : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setStatus("exiting");
    onExit == null ? void 0 : onExit();
    (_a = nodeRef.current) == null ? void 0 : _a.offsetHeight;
    exitTimeout.current = setTimeout(() => {
      setStatus("exited");
      safeToRemove == null ? void 0 : safeToRemove();
      onExited == null ? void 0 : onExited();
    }, actualTimeout);
  }, [isPresent, onExit, safeToRemove, timeout, onExited, show]);
  return children({ visible, status, nodeRef });
};
const button$6 = "_button_4jwwg_3";
const text$3 = "_text_4jwwg_263";
const loader$5 = "_loader_4jwwg_289";
const icon$1 = "_icon_4jwwg_315";
const styles$v = {
  button: button$6,
  text: text$3,
  loader: loader$5,
  icon: icon$1
};
function isExternalLink(href) {
  return href == null ? void 0 : href.includes("://");
}
const Button = forwardRef(({ href, ...rest }, ref) => {
  if (isExternalLink(href) || !href) {
    return /* @__PURE__ */ jsx(ButtonContent, { href, ref, ...rest });
  }
  return /* @__PURE__ */ jsx(
    ButtonContent,
    {
      unstable_viewTransition: true,
      as: Link$1,
      prefetch: "intent",
      to: href,
      ref,
      ...rest
    }
  );
});
const ButtonContent = forwardRef(
  ({
    className,
    as,
    secondary,
    loading,
    loadingText = "loading",
    icon: icon2,
    iconEnd,
    iconHoverShift,
    iconOnly,
    children,
    rel,
    target,
    href,
    disabled,
    ...rest
  }, ref) => {
    const isExternal = isExternalLink(href);
    const defaultComponent = href ? "a" : "button";
    const Component = as || defaultComponent;
    return /* @__PURE__ */ jsxs(
      Component,
      {
        className: classes(styles$v.button, className),
        "data-loading": loading,
        "data-icon-only": iconOnly,
        "data-secondary": secondary,
        "data-icon": icon2,
        href,
        rel: rel || isExternal ? "noopener noreferrer" : void 0,
        target: target || isExternal ? "_blank" : void 0,
        disabled,
        ref,
        ...rest,
        children: [
          !!icon2 && /* @__PURE__ */ jsx(
            Icon,
            {
              className: styles$v.icon,
              "data-start": !iconOnly,
              "data-shift": iconHoverShift,
              icon: icon2
            }
          ),
          !!children && /* @__PURE__ */ jsx("span", { className: styles$v.text, children }),
          !!iconEnd && /* @__PURE__ */ jsx(
            Icon,
            {
              className: styles$v.icon,
              "data-end": !iconOnly,
              "data-shift": iconHoverShift,
              icon: iconEnd
            }
          ),
          /* @__PURE__ */ jsx(Transition, { unmount: true, in: loading, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx(
            Loader,
            {
              ref: nodeRef,
              className: styles$v.loader,
              size: 32,
              text: loadingText,
              "data-visible": visible
            }
          ) })
        ]
      }
    );
  }
);
const hidden = "_hidden_u59mf_3";
const styles$u = {
  hidden
};
const VisuallyHidden = forwardRef(
  ({ className, showOnFocus, as: Component = "span", children, visible, ...rest }, ref) => {
    return /* @__PURE__ */ jsx(
      Component,
      {
        className: classes(styles$u.hidden, className),
        "data-hidden": !visible && !showOnFocus,
        "data-show-on-focus": showOnFocus,
        ref,
        ...rest,
        children
      }
    );
  }
);
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const text$2 = "_text_81hf5_3";
const glyph = "_glyph_81hf5_17";
const value = "_value_81hf5_31";
const styles$t = {
  text: text$2,
  glyph,
  value
};
const glyphs = [
  "ア",
  "イ",
  "ウ",
  "エ",
  "オ",
  "カ",
  "キ",
  "ク",
  "ケ",
  "コ",
  "サ",
  "シ",
  "ス",
  "セ",
  "ソ",
  "タ",
  "チ",
  "ツ",
  "テ",
  "ト",
  "ナ",
  "ニ",
  "ヌ",
  "ネ",
  "ノ",
  "ハ",
  "ヒ",
  "フ",
  "ヘ",
  "ホ",
  "マ",
  "ミ",
  "ム",
  "メ",
  "モ",
  "ヤ",
  "ユ",
  "ヨ",
  "ー",
  "ラ",
  "リ",
  "ル",
  "レ",
  "ロ",
  "ワ",
  "ヰ",
  "ヱ",
  "ヲ",
  "ン",
  "ガ",
  "ギ",
  "グ",
  "ゲ",
  "ゴ",
  "ザ",
  "ジ",
  "ズ",
  "ゼ",
  "ゾ",
  "ダ",
  "ヂ",
  "ヅ",
  "デ",
  "ド",
  "バ",
  "ビ",
  "ブ",
  "ベ",
  "ボ",
  "パ",
  "ピ",
  "プ",
  "ペ",
  "ポ"
];
const CharType = {
  Glyph: "glyph",
  Value: "value"
};
function shuffle(content2, output, position) {
  return content2.map((value2, index2) => {
    if (index2 < position) {
      return { type: CharType.Value, value: value2 };
    }
    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }
    return { type: CharType.Glyph, value: output[index2].value };
  });
}
const DecoderText = memo(
  ({ text: text2, start = true, delay: startDelay = 0, className, ...rest }) => {
    const output = useRef([{ type: CharType.Glyph, value: "" }]);
    const container2 = useRef();
    const reduceMotion = useReducedMotion();
    const decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });
    useEffect(() => {
      const containerInstance = container2.current;
      const content2 = text2.split("");
      let animation;
      const renderOutput = () => {
        const characterMap = output.current.map((item2) => {
          return `<span class="${styles$t[item2.type]}">${item2.value}</span>`;
        });
        containerInstance.innerHTML = characterMap.join("");
      };
      const unsubscribeSpring = decoderSpring.on("change", (value2) => {
        output.current = shuffle(content2, output.current, value2);
        renderOutput();
      });
      const startSpring = async () => {
        await delay(startDelay);
        decoderSpring.set(content2.length);
      };
      if (start && !animation && !reduceMotion) {
        startSpring();
      }
      if (reduceMotion) {
        output.current = content2.map((value2, index2) => ({
          type: CharType.Value,
          value: content2[index2]
        }));
        renderOutput();
      }
      return () => {
        unsubscribeSpring == null ? void 0 : unsubscribeSpring();
      };
    }, [decoderSpring, reduceMotion, start, startDelay, text2]);
    return /* @__PURE__ */ jsxs("span", { className: classes(styles$t.text, className), ...rest, children: [
      /* @__PURE__ */ jsx(VisuallyHidden, { className: styles$t.label, children: text2 }),
      /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: styles$t.content, ref: container2 })
    ] });
  }
);
const heading$2 = "_heading_8oupr_3";
const styles$s = {
  heading: heading$2
};
const Heading = ({
  children,
  level = 1,
  as,
  align = "auto",
  weight = "medium",
  className,
  ...rest
}) => {
  const clampedLevel = Math.min(Math.max(level, 0), 5);
  const Component = as || `h${Math.max(clampedLevel, 1)}`;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Component,
    {
      className: classes(styles$s.heading, className),
      "data-align": align,
      "data-weight": weight,
      "data-level": clampedLevel,
      ...rest,
      children
    }
  ) });
};
const page = "_page_3rfjn_3";
const videoContainer = "_videoContainer_3rfjn_43";
const video$2 = "_video_3rfjn_43";
const credit = "_credit_3rfjn_155";
const details$3 = "_details_3rfjn_203";
const text$1 = "_text_3rfjn_229";
const title$7 = "_title_3rfjn_243";
const titleFlatline = "_titleFlatline_3rfjn_245";
const subheading = "_subheading_3rfjn_309";
const description$5 = "_description_3rfjn_369";
const button$5 = "_button_3rfjn_407";
const styles$r = {
  page,
  videoContainer,
  video: video$2,
  credit,
  details: details$3,
  text: text$1,
  title: title$7,
  titleFlatline,
  subheading,
  description: description$5,
  button: button$5
};
function useFormInput(initialValue = "") {
  const [value2, setValue] = useState(initialValue);
  const [error2, setError] = useState();
  const [isDirty, setIsDirty] = useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
    setIsDirty(true);
    if (error2 && event.target.checkValidity()) {
      setError(null);
    }
  };
  const handleInvalid = (event) => {
    event.preventDefault();
    setError(event.target.validationMessage);
  };
  const handleBlur = (event) => {
    if (isDirty) {
      event.target.checkValidity();
    }
  };
  return {
    value: value2,
    error: error2,
    onChange: handleChange,
    onBlur: handleBlur,
    onInvalid: handleInvalid
  };
}
function useHasMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
function useInterval(callback, delay2, reset) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay2 !== null) {
      let id = setInterval(tick, delay2);
      return () => clearInterval(id);
    }
  }, [delay2, reset]);
}
function useInViewport(elementRef, unobserveOnIntersect, options2 = {}, shouldObserve = true) {
  const [intersect, setIntersect] = useState(false);
  const [isUnobserved, setIsUnobserved] = useState(false);
  useEffect(() => {
    if (!(elementRef == null ? void 0 : elementRef.current))
      return;
    const observer = new IntersectionObserver(([entry2]) => {
      const { isIntersecting, target } = entry2;
      setIntersect(isIntersecting);
      if (isIntersecting && unobserveOnIntersect) {
        observer.unobserve(target);
        setIsUnobserved(true);
      }
    }, options2);
    if (!isUnobserved && shouldObserve) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [elementRef, unobserveOnIntersect, options2, isUnobserved, shouldObserve]);
  return intersect;
}
function useParallax(multiplier, onChange) {
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    let ticking = false;
    let animationFrame = null;
    const animate = () => {
      const { innerHeight } = window;
      const offsetValue = Math.max(0, window.scrollY) * multiplier;
      const clampedOffsetValue = Math.max(
        -innerHeight,
        Math.min(innerHeight, offsetValue)
      );
      onChange(clampedOffsetValue);
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        animationFrame = requestAnimationFrame(animate);
      }
    };
    if (!reduceMotion) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [multiplier, onChange, reduceMotion]);
}
function usePrevious(value2) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value2;
  }, [value2]);
  return ref.current;
}
function useScrollToHash() {
  const scrollTimeout = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const scrollToHash = useCallback(
    (hash, onDone) => {
      const id = hash.split("#")[1];
      const targetElement = document.getElementById(id);
      targetElement.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      const handleScroll = () => {
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          window.removeEventListener("scroll", handleScroll);
          if (window.location.pathname === location.pathname) {
            onDone == null ? void 0 : onDone();
            navigate(`${location.pathname}#${id}`, { scroll: false });
          }
        }, 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(scrollTimeout.current);
      };
    },
    [navigate, reduceMotion, location.pathname]
  );
  return scrollToHash;
}
function useWindowSize() {
  const dimensions = useRef(() => ({ w: 1280, h: 800 }));
  const createRuler = useCallback(() => {
    let ruler = document.createElement("div");
    ruler.style.position = "fixed";
    ruler.style.height = "100vh";
    ruler.style.width = 0;
    ruler.style.top = 0;
    document.documentElement.appendChild(ruler);
    dimensions.current.w = window.innerWidth;
    dimensions.current.h = ruler.offsetHeight;
    document.documentElement.removeChild(ruler);
    ruler = null;
  }, []);
  const getHeight = useCallback(() => {
    const isIOS = navigator == null ? void 0 : navigator.userAgent.match(/iphone|ipod|ipad/i);
    if (isIOS) {
      createRuler();
      return dimensions.current.h;
    }
    return window.innerHeight;
  }, [createRuler]);
  const getSize = useCallback(() => {
    return {
      width: window.innerWidth,
      height: getHeight()
    };
  }, [getHeight]);
  const [windowSize, setWindowSize] = useState(dimensions.current);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getSize]);
  return windowSize;
}
async function loadImageFromSrcSet({ src, srcSet, sizes }) {
  return new Promise((resolve, reject) => {
    try {
      if (!src && !srcSet) {
        throw new Error("No image src or srcSet provided");
      }
      let tempImage = new Image();
      if (src) {
        tempImage.src = src;
      }
      if (srcSet) {
        tempImage.srcset = srcSet;
      }
      if (sizes) {
        tempImage.sizes = sizes;
      }
      const onLoad = () => {
        tempImage.removeEventListener("load", onLoad);
        const source = tempImage.currentSrc;
        tempImage = null;
        resolve(source);
      };
      tempImage.addEventListener("load", onLoad);
    } catch (error2) {
      reject(`Error loading ${srcSet}: ${error2}`);
    }
  });
}
async function generateImage(width = 1, height = 1) {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.fillRect(0, 0, width, height);
    canvas.toBlob(async (blob) => {
      if (!blob)
        throw new Error("Video thumbnail failed to load");
      const image2 = URL.createObjectURL(blob);
      canvas.remove();
      resolve(image2);
    });
  });
}
async function resolveSrcFromSrcSet({ srcSet, sizes }) {
  const sources = await Promise.all(
    srcSet.split(", ").map(async (srcString) => {
      const [src, width] = srcString.split(" ");
      const size = Number(width.replace("w", ""));
      const image2 = await generateImage(size);
      return { src, image: image2, width };
    })
  );
  const fakeSrcSet = sources.map(({ image: image2, width }) => `${image2} ${width}`).join(", ");
  const fakeSrc = await loadImageFromSrcSet({ srcSet: fakeSrcSet, sizes });
  const output = sources.find((src) => src.image === fakeSrc);
  return output.src;
}
const image$3 = "_image_1yz75_3";
const container$3 = "_container_1yz75_83";
const elementWrapper = "_elementWrapper_1yz75_97";
const placeholder = "_placeholder_1yz75_141";
const element = "_element_1yz75_97";
const button$4 = "_button_1yz75_207";
const styles$q = {
  image: image$3,
  container: container$3,
  elementWrapper,
  placeholder,
  element,
  button: button$4
};
const Image$1 = ({
  className,
  style,
  reveal,
  delay: delay2 = 0,
  raised,
  src: baseSrc,
  srcSet,
  placeholder: placeholder2,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const { theme } = useTheme();
  const containerRef = useRef();
  const src = baseSrc || srcSet.split(" ")[0];
  const inViewport = useInViewport(containerRef, !getIsVideo(src));
  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: classes(styles$q.image, className),
      "data-visible": inViewport || loaded,
      "data-reveal": reveal,
      "data-raised": raised,
      "data-theme": theme,
      style: cssProps$1({ delay: numToMs$1(delay2) }, style),
      ref: containerRef,
      children: /* @__PURE__ */ jsx(
        ImageElements,
        {
          delay: delay2,
          onLoad,
          loaded,
          inViewport,
          reveal,
          src,
          srcSet,
          placeholder: placeholder2,
          ...rest
        }
      )
    }
  );
};
const ImageElements = ({
  onLoad,
  loaded,
  inViewport,
  srcSet,
  placeholder: placeholder2,
  delay: delay2,
  src,
  alt,
  play = true,
  restartOnPause,
  reveal,
  sizes,
  width,
  height,
  noPauseButton,
  cover,
  ...rest
}) => {
  const reduceMotion = useReducedMotion();
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [playing, setPlaying] = useState(!reduceMotion);
  const [videoSrc, setVideoSrc] = useState();
  const [videoInteracted, setVideoInteracted] = useState(false);
  const placeholderRef = useRef();
  const videoRef = useRef();
  const isVideo = getIsVideo(src);
  const showFullRes = inViewport;
  const hasMounted = useHasMounted();
  useEffect(() => {
    const resolveVideoSrc = async () => {
      const resolvedVideoSrc = await resolveSrcFromSrcSet({ srcSet, sizes });
      setVideoSrc(resolvedVideoSrc);
    };
    if (isVideo && srcSet) {
      resolveVideoSrc();
    } else if (isVideo) {
      setVideoSrc(src);
    }
  }, [isVideo, sizes, src, srcSet]);
  useEffect(() => {
    if (!videoRef.current || !videoSrc)
      return;
    const playVideo = () => {
      setPlaying(true);
      videoRef.current.play();
    };
    const pauseVideo = () => {
      setPlaying(false);
      videoRef.current.pause();
    };
    if (!play) {
      pauseVideo();
      if (restartOnPause) {
        videoRef.current.currentTime = 0;
      }
    }
    if (videoInteracted)
      return;
    if (!inViewport) {
      pauseVideo();
    } else if (inViewport && !reduceMotion && play) {
      playVideo();
    }
  }, [inViewport, play, reduceMotion, restartOnPause, videoInteracted, videoSrc]);
  const togglePlaying = (event) => {
    event.preventDefault();
    setVideoInteracted(true);
    if (videoRef.current.paused) {
      setPlaying(true);
      videoRef.current.play();
    } else {
      setPlaying(false);
      videoRef.current.pause();
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$q.elementWrapper,
      "data-reveal": reveal,
      "data-visible": inViewport || loaded,
      style: cssProps$1({ delay: numToMs$1(delay2 + 1e3) }),
      children: [
        isVideo && hasMounted && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "video",
            {
              muted: true,
              loop: true,
              playsInline: true,
              className: styles$q.element,
              "data-loaded": loaded,
              "data-cover": cover,
              autoPlay: !reduceMotion,
              onLoadStart: onLoad,
              src: videoSrc,
              "aria-label": alt,
              ref: videoRef,
              ...rest
            }
          ),
          !noPauseButton && /* @__PURE__ */ jsxs(Button, { className: styles$q.button, onClick: togglePlaying, children: [
            /* @__PURE__ */ jsx(Icon, { icon: playing ? "pause" : "play" }),
            playing ? "Pause" : "Play"
          ] })
        ] }),
        !isVideo && /* @__PURE__ */ jsx(
          "img",
          {
            className: styles$q.element,
            "data-loaded": loaded,
            "data-cover": cover,
            onLoad,
            decoding: "async",
            src: showFullRes ? src : void 0,
            srcSet: showFullRes ? srcSet : void 0,
            width,
            height,
            alt,
            sizes,
            ...rest
          }
        ),
        showPlaceholder && /* @__PURE__ */ jsx(
          "img",
          {
            "aria-hidden": true,
            className: styles$q.placeholder,
            "data-loaded": loaded,
            "data-cover": cover,
            style: cssProps$1({ delay: numToMs$1(delay2) }),
            ref: placeholderRef,
            src: placeholder2,
            width,
            height,
            onTransitionEnd: () => setShowPlaceholder(false),
            decoding: "async",
            loading: "lazy",
            alt: "",
            role: "presentation"
          }
        )
      ]
    }
  );
};
function getIsVideo(src) {
  return typeof src === "string" && src.includes(".mp4");
}
const flatlineSkull = "/assets/error-flatline-BCo2ngDH.svg";
function Error$1({ error: error2 }) {
  const flatlined = !error2.status;
  const getMessage = () => {
    switch (error2.status) {
      case 404:
        return {
          summary: "Error: redacted",
          message: "This page could not be found. It either doesn’t exist or was deleted. Or perhaps you don’t exist and this webpage couldn’t find you."
        };
      case 405:
        return {
          summary: "Error: method denied",
          message: error2.data
        };
      default:
        return {
          summary: "Error: anomaly",
          message: error2.statusText || error2.data || error2.toString()
        };
    }
  };
  const { summary: summary2, message } = getMessage();
  return /* @__PURE__ */ jsxs("section", { className: styles$r.page, children: [
    flatlined && /* @__PURE__ */ jsx(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: `
            [data-theme='dark'] {
              --primary: oklch(69.27% 0.242 25.41);
              --accent: oklch(69.27% 0.242 25.41);
            }
            [data-theme='light'] {
              --primary: oklch(56.29% 0.182 26.5);
              --accent: oklch(56.29% 0.182 26.5);
            }
          `
        }
      }
    ),
    /* @__PURE__ */ jsx(Transition, { in: true, children: ({ visible }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("div", { className: styles$r.details, children: /* @__PURE__ */ jsxs("div", { className: styles$r.text, children: [
        !flatlined && /* @__PURE__ */ jsx(
          Heading,
          {
            className: styles$r.title,
            "data-visible": visible,
            level: 0,
            weight: "bold",
            children: error2.status
          }
        ),
        flatlined && /* @__PURE__ */ jsxs(
          Heading,
          {
            className: styles$r.titleFlatline,
            "data-visible": visible,
            level: 2,
            as: "h1",
            children: [
              /* @__PURE__ */ jsx("svg", { width: "60", height: "80", viewBox: "0 0 60 80", children: /* @__PURE__ */ jsx("use", { href: `${flatlineSkull}#skull` }) }),
              /* @__PURE__ */ jsx(DecoderText, { text: "Flatlined", start: visible, delay: 300 })
            ]
          }
        ),
        !flatlined && /* @__PURE__ */ jsx(
          Heading,
          {
            "aria-hidden": true,
            className: styles$r.subheading,
            "data-visible": visible,
            as: "h2",
            level: 4,
            children: /* @__PURE__ */ jsx(DecoderText, { text: summary2, start: visible, delay: 300 })
          }
        ),
        /* @__PURE__ */ jsx(Text, { className: styles$r.description, "data-visible": visible, as: "p", children: message }),
        flatlined ? /* @__PURE__ */ jsx(
          Button,
          {
            secondary: true,
            iconHoverShift: true,
            className: styles$r.button,
            "data-visible": visible,
            href: "https://www.youtube.com/watch?v=EuQzHGcsjlA",
            icon: "chevron-right",
            children: "Emotional support"
          }
        ) : /* @__PURE__ */ jsx(
          Button,
          {
            secondary: true,
            iconHoverShift: true,
            className: styles$r.button,
            "data-visible": visible,
            href: "/",
            icon: "chevron-right",
            children: "Back to homepage"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: styles$r.videoContainer, "data-visible": visible, children: [
        /* @__PURE__ */ jsx(
          Image$1,
          {
            reveal: true,
            cover: true,
            noPauseButton: true,
            delay: 600,
            className: styles$r.video,
            src: flatlined ? flatlineVideo : notFoundVideo,
            placeholder: flatlined ? flatlinePoster : notFoundPoster
          }
        ),
        flatlined ? /* @__PURE__ */ jsx(
          "a",
          {
            className: styles$r.credit,
            "data-visible": visible,
            href: "https://www.imdb.com/title/tt0318871/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Animation from Berserk (1997)"
          }
        ) : /* @__PURE__ */ jsx(
          "a",
          {
            className: styles$r.credit,
            "data-visible": visible,
            href: "https://www.imdb.com/title/tt0113568/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Animation from Ghost in the Shell (1995)"
          }
        )
      ] })
    ] }) })
  ] });
}
const monogram = "_monogram_1c5ju_3";
const highlight = "_highlight_1c5ju_15";
const styles$p = {
  monogram,
  highlight
};
const Monogram = forwardRef(({ highlight: highlight2, className, ...props }, ref) => {
  useId();
  return /* @__PURE__ */ jsx(
    "svg",
    {
      version: "1.0",
      xmlns: "http://www.w3.org/2000/svg",
      className: classes(styles$p.monogram, className),
      ...props,
      width: "57.000000pt",
      height: "70.000000pt",
      viewBox: "5 10 290.000000 100.000000",
      preserveAspectRatio: "xMidYMid meet",
      children: /* @__PURE__ */ jsxs(
        "g",
        {
          transform: "translate(0.000000,207.000000) scale(0.100000,-0.100000)",
          fill: "#000000",
          stroke: "#000000",
          children: [
            /* @__PURE__ */ jsx("path", { d: "M2508 2945 c-8 -8 46 -38 98 -55 18 -6 35 -17 38 -25 3 -8 11 -15 18\r\n-15 13 0 106 -92 125 -125 73 -121 98 -265 82 -455 -10 -101 -23 -164 -40\r\n-185 -4 -6 -4 -17 1 -25 14 -23 48 46 71 148 39 168 10 385 -68 520 -35 59\r\n-138 159 -195 188 -50 25 -118 40 -130 29z" }),
            /* @__PURE__ */ jsx("path", { d: "M2490 2894 c0 -3 33 -41 73 -84 82 -88 149 -210 174 -318 8 -38 17\r\n-142 20 -238 5 -164 12 -208 30 -190 10 10 10 322 0 405 -4 35 -17 83 -27 107\r\n-11 24 -20 53 -21 66 0 22 -1 22 -9 3 -8 -20 -9 -19 -9 1 -1 29 -42 100 -86\r\n148 -19 22 -35 43 -35 47 0 4 -10 11 -22 15 -13 4 -34 15 -47 25 -24 19 -41\r\n24 -41 13z" }),
            /* @__PURE__ */ jsx("path", { d: "M2372 2838 c3 -7 13 -15 22 -16 10 -2 26 -11 35 -20 10 -10 28 -24\r\n40 -32 48 -32 124 -112 145 -152 13 -24 33 -72 46 -108 37 -105 39 -376 4\r\n-520 -3 -14 -10 -44 -15 -68 -4 -23 -13 -52 -19 -63 -7 -11 -18 -44 -27 -72\r\n-8 -29 -20 -56 -26 -62 -14 -11 -33 -49 -42 -82 -4 -13 -11 -23 -16 -23 -5 0\r\n-9 -8 -9 -19 0 -10 -8 -29 -18 -42 -10 -13 -23 -35 -30 -49 -31 -60 -51 -94\r\n-52 -86 0 10 -40 -38 -41 -51 0 -4 -16 -28 -35 -53 -18 -25 -38 -55 -44 -67\r\n-5 -13 -14 -23 -20 -23 -6 0 -15 -10 -20 -22 -5 -13 -9 -16 -9 -8 -1 8 -16 -8\r\n-35 -35 -28 -42 -123 -137 -270 -269 -16 -14 -35 -26 -43 -26 -7 0 -16 -7 -19\r\n-15 -7 -18 -104 -88 -121 -88 -7 0 -13 -4 -13 -9 0 -4 -17 -16 -37 -25 l-38\r\n-18 -3 -218 c-1 -139 1 -225 8 -237 7 -14 7 -20 0 -21 -5 0 -88 0 -182 -1\r\nl-173 0 -2 115 c0 64 3 133 7 154 5 20 7 40 4 42 -2 3 -26 -3 -52 -12 -26 -9\r\n-60 -17 -77 -18 -24 0 -26 -2 -10 -8 16 -7 14 -9 -14 -14 -56 -11 -191 -22\r\n-276 -22 -92 0 -228 22 -219 36 3 5 -4 9 -15 9 -11 0 -22 4 -25 9 -3 5 -18 12\r\n-33 16 -32 7 -92 45 -146 92 -20 18 -42 33 -49 33 -6 0 -8 3 -5 7 4 3 -4 20\r\n-16 37 -35 47 -62 104 -86 181 -17 57 -21 95 -21 210 0 144 0 146 56 315 31\r\n94 80 200 93 200 4 0 15 17 24 38 9 20 27 55 41 77 25 40 66 116 66 122 0 2\r\n-9 -2 -20 -10 -56 -39 -187 -250 -231 -371 -17 -47 -39 -95 -50 -107 -10 -12\r\n-20 -26 -20 -31 -3 -18 -5 -23 -11 -33 -3 -5 -14 -50 -24 -100 -25 -121 -25\r\n-332 0 -428 9 -38 18 -77 19 -88 1 -10 4 -19 8 -19 3 0 12 -18 19 -40 7 -21\r\n17 -37 21 -34 5 3 9 -1 9 -8 0 -7 14 -28 31 -46 16 -17 27 -32 24 -32 -4 0 12\r\n-16 36 -36 53 -44 141 -89 194 -98 22 -4 49 -13 60 -20 34 -21 125 -35 278\r\n-42 109 -5 147 -4 147 5 0 20 -46 30 -173 40 -140 12 -309 50 -384 88 -151 76\r\n-240 220 -259 423 -7 71 5 74 26 5 18 -57 63 -145 106 -205 59 -82 206 -176\r\n340 -217 90 -27 360 -25 465 5 41 12 80 22 86 22 8 0 12 -41 15 -121 3 -118 4\r\n-121 31 -145 27 -23 33 -24 191 -24 227 0 210 -22 216 268 l5 227 66 45 c37\r\n25 82 57 100 72 19 15 48 38 66 51 125 92 334 314 440 469 110 159 124 184\r\n197 333 172 349 203 693 85 942 -31 67 -51 92 -108 144 -88 78 -202 137 -189\r\n97z m-2105 -1800 c-2 -35 -3 -9 -3 57 0 66 1 94 3 63 2 -32 2 -86 0 -120z" }),
            /* @__PURE__ */ jsx("path", { d: "M2340 2795 c0 -2 23 -30 51 -62 41 -47 79 -109 79 -129 0 -2 -16 4\r\n-35 12 -29 12 -174 14 -954 14 l-919 0 -31 -31 -31 -31 0 -152 c0 -153 6 -182\r\n44 -208 6 -4 165 -8 353 -8 188 0 348 -3 357 -6 14 -6 16 -68 17 -593 1 -322\r\n4 -599 8 -616 3 -17 19 -38 37 -50 l30 -21 -95 -41 c-106 -46 -188 -68 -301\r\n-79 -172 -17 -261 2 -338 71 -87 78 -121 181 -122 366 0 147 33 313 100 501\r\n23 67 24 78 7 78 -13 0 -67 -109 -67 -138 0 -10 -6 -27 -14 -38 -8 -11 -17\r\n-38 -21 -60 -4 -21 -14 -61 -22 -89 -20 -66 -29 -341 -14 -415 13 -62 13 -64\r\n29 -103 7 -16 12 -31 12 -34 0 -3 18 -28 40 -55 22 -28 40 -55 40 -60 0 -5 4\r\n-7 9 -4 4 3 22 -5 40 -18 18 -13 49 -27 69 -31 20 -4 42 -11 49 -17 14 -12\r\n171 -6 273 11 100 16 254 65 286 90 15 12 32 21 39 21 15 0 111 49 170 86 22\r\n14 48 28 58 31 15 4 16 8 5 14 -10 7 -9 9 4 9 19 0 91 46 136 87 17 16 36 29\r\n43 31 7 2 38 28 68 58 31 31 77 72 104 92 26 20 47 40 47 45 0 4 38 46 84 92\r\n47 45 83 85 80 88 -3 2 7 15 21 28 13 13 25 29 25 34 0 6 9 16 20 23 11 7 20\r\n19 20 28 0 8 4 13 9 10 5 -3 14 8 20 24 5 17 15 30 20 30 6 0 11 4 11 9 0 5\r\n18 37 40 70 22 33 40 65 40 71 0 11 29 61 41 70 7 5 41 79 43 92 1 3 4 10 9\r\n14 4 4 7 14 7 23 1 9 9 34 20 56 11 22 19 50 20 61 0 12 8 41 17 65 20 54 25\r\n321 6 360 -6 13 -16 38 -21 56 -13 38 -82 133 -98 133 -6 0 -17 6 -23 14 -11\r\n13 -51 29 -51 21z m95 -386 l0 -170 -388 1 -388 1 1 -545 c1 -300 -1 -550 -5\r\n-556 -3 -5 -12 -10 -19 -10 -7 0 -21 -9 -31 -20 -10 -11 -26 -20 -35 -20 -9 0\r\n-25 -8 -36 -17 -32 -28 -101 -63 -126 -64 -13 0 -17 -3 -10 -6 13 -5 -52 -43\r\n-74 -43 -8 0 -10 160 -7 613 2 336 5 623 6 637 l2 25 -390 2 -390 1 -3 163\r\nc-1 90 -1 168 1 174 3 7 303 9 948 8 l944 -3 0 -171z m69 -4 c0 -56 -6 -109\r\n-12 -120 -9 -16 -11 10 -11 120 0 114 2 136 12 120 7 -12 12 -58 11 -120z\r\nm-45 -271 c-36 -121 -91 -230 -214 -428 -35 -55 -158 -209 -210 -262 -27 -27\r\n-64 -66 -81 -85 -33 -36 -206 -188 -230 -202 -12 -7 -14 69 -14 506 0 386 3\r\n516 12 525 9 9 103 12 363 12 338 0 353 1 370 20 32 36 33 11 4 -86z" }),
            /* @__PURE__ */ jsx("path", { d: "M168 1338 c-30 -53 -49 -105 -85 -233 -24 -88 -27 -117 -27 -240 0\r\n-119 4 -150 23 -205 55 -159 103 -232 204 -317 70 -58 113 -85 188 -117 115\r\n-49 292 -60 425 -25 72 18 164 61 164 76 0 8 -91 -5 -104 -16 -20 -16 -149\r\n-35 -236 -34 -130 1 -238 26 -310 73 -8 6 -24 14 -35 19 -41 19 -154 139 -185\r\n197 -18 32 -36 64 -40 69 -10 13 -40 133 -41 166 -1 22 -2 21 -9 -6 -5 -18 -8\r\n26 -8 110 0 84 3 130 8 115 7 -22 8 -20 9 15 1 23 8 67 16 98 8 32 15 68 15\r\n80 0 12 7 35 15 50 8 16 20 56 27 90 7 34 17 65 23 69 6 5 6 8 -2 8 -6 0 -22\r\n-19 -35 -42z" })
          ]
        }
      )
    }
  );
});
const toggle$1 = "_toggle_h91zx_3";
const inner = "_inner_h91zx_33";
const icon = "_icon_h91zx_49";
const styles$o = {
  toggle: toggle$1,
  inner,
  icon
};
const NavToggle = ({ menuOpen, ...rest }) => {
  return /* @__PURE__ */ jsx(
    Button,
    {
      iconOnly: true,
      className: styles$o.toggle,
      "aria-label": "Menu",
      "aria-expanded": menuOpen,
      ...rest,
      children: /* @__PURE__ */ jsxs("div", { className: styles$o.inner, children: [
        /* @__PURE__ */ jsx(Icon, { className: styles$o.icon, "data-menu": true, "data-open": menuOpen, icon: "menu" }),
        /* @__PURE__ */ jsx(
          Icon,
          {
            className: styles$o.icon,
            "data-close": true,
            "data-open": menuOpen,
            icon: "close"
          }
        )
      ] })
    }
  );
};
const toggle = "_toggle_y3n84_3";
const circle = "_circle_y3n84_57";
const mask = "_mask_y3n84_107";
const path = "_path_y3n84_143";
const styles$n = {
  toggle,
  circle,
  mask,
  path
};
const ThemeToggle = ({ isMobile, ...rest }) => {
  const id = useId();
  const { toggleTheme } = useTheme();
  const maskId = `${id}theme-toggle-mask`;
  return /* @__PURE__ */ jsx(
    Button,
    {
      iconOnly: true,
      className: styles$n.toggle,
      "data-mobile": isMobile,
      "aria-label": "Toggle theme",
      onClick: () => toggleTheme(),
      ...rest,
      children: /* @__PURE__ */ jsxs("svg", { "aria-hidden": true, className: styles$n.svg, width: "38", height: "38", viewBox: "0 0 38 38", children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("mask", { id: maskId, children: [
          /* @__PURE__ */ jsx("circle", { className: styles$n.circle, "data-mask": true, cx: "19", cy: "19", r: "13" }),
          /* @__PURE__ */ jsx("circle", { className: styles$n.mask, cx: "25", cy: "14", r: "9" })
        ] }) }),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: styles$n.path,
            d: "M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            className: styles$n.circle,
            mask: `url(#${maskId})`,
            cx: "19",
            cy: "19",
            r: "12"
          }
        )
      ] })
    }
  );
};
const name$2 = "Tarunbalaji";
const role = "DevSecOps Engineer";
const disciplines = [
  "AWS/Azure",
  "Cloud Engineer",
  "Innovator",
  "Technologist",
  "Researcher",
  "Strategist"
];
const url$1 = "https://github.com/Tarunbalaji2003";
const github = "Tarunbalaji2003";
const repo = "https://github.com/Tarunbalaji2003";
const ascii = "__  __  __\n\\ \\ \\ \\ \\∕\n \\ \\∕\\ \\\n  \\∕  \\∕\n";
const twitter$1 = "mr_dynamite_lad";
const linkedin = "tarunbalaji";
const config = {
  name: name$2,
  role,
  disciplines,
  url: url$1,
  github,
  repo,
  ascii,
  twitter: twitter$1,
  linkedin
};
const navLinks = [
  {
    label: "Projects",
    pathname: "/#project-1"
  },
  {
    label: "Details",
    pathname: "/#details"
  },
  {
    label: "Articles",
    pathname: "/articles"
  },
  {
    label: "Contact",
    pathname: "/contact"
  }
];
const socialLinks = [
  {
    label: "Twitter",
    url: `https://twitter.com/${config.twitter}`,
    icon: "twitter"
  },
  {
    label: "Linkedin",
    url: `https://www.linkedin.com/in/tarunbalaji/`,
    icon: "linkedin"
  },
  {
    label: "Github",
    url: `https://github.com/${config.github}`,
    icon: "github"
  }
];
const navbar = "_navbar_1qbli_3";
const logo = "_logo_1qbli_53";
const nav = "_nav_1qbli_3";
const navList = "_navList_1qbli_101";
const navLink = "_navLink_1qbli_117";
const navIcons = "_navIcons_1qbli_203";
const navIconLink = "_navIconLink_1qbli_251";
const navIcon = "_navIcon_1qbli_203";
const mobileNav = "_mobileNav_1qbli_293";
const mobileNavLink = "_mobileNavLink_1qbli_353";
const styles$m = {
  navbar,
  logo,
  nav,
  navList,
  navLink,
  navIcons,
  navIconLink,
  navIcon,
  mobileNav,
  mobileNavLink
};
const Navbar = () => {
  const [current, setCurrent] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [target, setTarget] = useState();
  const { theme } = useTheme();
  const location = useLocation();
  const windowSize = useWindowSize();
  const headerRef = useRef();
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;
  const scrollToHash = useScrollToHash();
  useEffect(() => {
    setCurrent(`${location.pathname}${location.hash}`);
  }, [location]);
  useEffect(() => {
    if (!target || location.pathname !== "/")
      return;
    setCurrent(`${location.pathname}${target}`);
    scrollToHash(target, () => setTarget(null));
  }, [location.pathname, scrollToHash, target]);
  useEffect(() => {
    const navItems = document.querySelectorAll("[data-navbar-item]");
    const inverseTheme = theme === "dark" ? "light" : "dark";
    const { innerHeight } = window;
    let inverseMeasurements = [];
    let navItemMeasurements = [];
    const isOverlap = (rect1, rect2, scrollY) => {
      return !(rect1.bottom - scrollY < rect2.top || rect1.top - scrollY > rect2.bottom);
    };
    const resetNavTheme = () => {
      for (const measurement of navItemMeasurements) {
        measurement.element.dataset.theme = "";
      }
    };
    const handleInversion = () => {
      const invertedElements = document.querySelectorAll(
        `[data-theme='${inverseTheme}'][data-invert]`
      );
      if (!invertedElements)
        return;
      inverseMeasurements = Array.from(invertedElements).map((item2) => ({
        element: item2,
        top: item2.offsetTop,
        bottom: item2.offsetTop + item2.offsetHeight
      }));
      const { scrollY } = window;
      resetNavTheme();
      for (const inverseMeasurement of inverseMeasurements) {
        if (inverseMeasurement.top - scrollY > innerHeight || inverseMeasurement.bottom - scrollY < 0) {
          continue;
        }
        for (const measurement of navItemMeasurements) {
          if (isOverlap(inverseMeasurement, measurement, scrollY)) {
            measurement.element.dataset.theme = inverseTheme;
          } else {
            measurement.element.dataset.theme = "";
          }
        }
      }
    };
    if (theme === "light") {
      navItemMeasurements = Array.from(navItems).map((item2) => {
        const rect = item2.getBoundingClientRect();
        return {
          element: item2,
          top: rect.top,
          bottom: rect.bottom
        };
      });
      document.addEventListener("scroll", handleInversion);
      handleInversion();
    }
    return () => {
      document.removeEventListener("scroll", handleInversion);
      resetNavTheme();
    };
  }, [theme, windowSize, location.key]);
  const getCurrent = (url2 = "") => {
    const nonTrailing = (current == null ? void 0 : current.endsWith("/")) ? current == null ? void 0 : current.slice(0, -1) : current;
    if (url2 === nonTrailing) {
      return "page";
    }
    return "";
  };
  const handleNavItemClick = (event) => {
    const hash = event.currentTarget.href.split("#")[1];
    setTarget(null);
    if (hash && location.pathname === "/") {
      setTarget(`#${hash}`);
      event.preventDefault();
    }
  };
  const handleMobileNavClick = (event) => {
    handleNavItemClick(event);
    if (menuOpen)
      setMenuOpen(false);
  };
  return /* @__PURE__ */ jsxs("header", { className: styles$m.navbar, ref: headerRef, children: [
    /* @__PURE__ */ jsx(
      Link$1,
      {
        unstable_viewTransition: true,
        prefetch: "intent",
        to: location.pathname === "/" ? "/#intro" : "/",
        "data-navbar-item": true,
        className: styles$m.logo,
        "aria-label": `${config.name}, ${config.role}`,
        onClick: handleMobileNavClick,
        children: /* @__PURE__ */ jsx(Monogram, {})
      }
    ),
    /* @__PURE__ */ jsx(NavToggle, { onClick: () => setMenuOpen(!menuOpen), menuOpen }),
    /* @__PURE__ */ jsxs("nav", { className: styles$m.nav, children: [
      /* @__PURE__ */ jsx("div", { className: styles$m.navList, children: navLinks.map(({ label: label2, pathname }) => /* @__PURE__ */ jsx(
        Link$1,
        {
          unstable_viewTransition: true,
          prefetch: "intent",
          to: pathname,
          "data-navbar-item": true,
          className: styles$m.navLink,
          "aria-current": getCurrent(pathname),
          onClick: handleNavItemClick,
          children: label2
        },
        label2
      )) }),
      /* @__PURE__ */ jsx(NavbarIcons, { desktop: true })
    ] }),
    /* @__PURE__ */ jsx(Transition, { unmount: true, in: menuOpen, timeout: msToNum$1(tokens.base.durationL), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs("nav", { className: styles$m.mobileNav, "data-visible": visible, ref: nodeRef, children: [
      navLinks.map(({ label: label2, pathname }, index2) => /* @__PURE__ */ jsx(
        Link$1,
        {
          unstable_viewTransition: true,
          prefetch: "intent",
          to: pathname,
          className: styles$m.mobileNavLink,
          "data-visible": visible,
          "aria-current": getCurrent(pathname),
          onClick: handleMobileNavClick,
          style: cssProps$1({
            transitionDelay: numToMs$1(
              Number(msToNum$1(tokens.base.durationS)) + index2 * 50
            )
          }),
          children: label2
        },
        label2
      )),
      /* @__PURE__ */ jsx(NavbarIcons, {}),
      /* @__PURE__ */ jsx(ThemeToggle, { isMobile: true })
    ] }) }),
    !isMobile && /* @__PURE__ */ jsx(ThemeToggle, { "data-navbar-item": true })
  ] });
};
const NavbarIcons = ({ desktop }) => /* @__PURE__ */ jsx("div", { className: styles$m.navIcons, children: socialLinks.map(({ label: label2, url: url2, icon: icon2 }) => /* @__PURE__ */ jsx(
  "a",
  {
    "data-navbar-item": desktop || void 0,
    className: styles$m.navIconLink,
    "aria-label": label2,
    href: url2,
    target: "_blank",
    rel: "noopener noreferrer",
    children: /* @__PURE__ */ jsx(Icon, { className: styles$m.navIcon, icon: icon2 })
  },
  label2
)) });
const progress = "_progress_brpaj_3";
const styles$l = {
  progress
};
function Progress() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [visible, setVisible] = useState(false);
  const { state } = useNavigation();
  const progressRef = useRef();
  const timeout = useRef(0);
  useEffect(() => {
    clearTimeout(timeout.current);
    if (state !== "idle") {
      timeout.current = setTimeout(() => {
        setVisible(true);
      }, 500);
    } else if (animationComplete) {
      timeout.current = setTimeout(() => {
        setVisible(false);
      }, 300);
    }
  }, [state, animationComplete]);
  useEffect(() => {
    if (!progressRef.current)
      return;
    const controller = new AbortController();
    if (state !== "idle") {
      return setAnimationComplete(false);
    }
    Promise.all(
      progressRef.current.getAnimations({ subtree: true }).map((animation) => animation.finished)
    ).then(() => {
      if (controller.signal.aborted)
        return;
      setAnimationComplete(true);
    });
    return () => {
      controller.abort();
    };
  }, [state]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: styles$l.progress,
      "data-status": state,
      "data-visible": visible,
      "data-complete": animationComplete,
      ref: progressRef
    }
  );
}
const container$2 = "_container_1g4r3_3";
const skip = "_skip_1g4r3_23";
const styles$k = {
  container: container$2,
  skip
};
const reset_module = {};
const global_module = {};
const links$1 = () => [
  {
    rel: "preload",
    href: GothamMedium,
    as: "font",
    type: "font/woff2",
    crossOrigin: ""
  },
  {
    rel: "preload",
    href: GothamBook,
    as: "font",
    type: "font/woff2",
    crossOrigin: ""
  },
  { rel: "manifest", href: "/manifest.json" },
  { rel: "icon", href: "/favicon.ico" },
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "shortcut_icon", href: "/shortcut.png", type: "image/png", sizes: "64x64" },
  { rel: "apple-touch-icon", href: "/icon-256.png", sizes: "256x256" },
  { rel: "author", href: "/humans.txt", type: "text/plain" }
];
const loader$4 = async ({ request, context }) => {
  const { url: url2 } = request;
  const { pathname } = new URL(url2);
  const pathnameSliced = pathname.endsWith("/") ? pathname.slice(0, -1) : url2;
  const canonicalUrl = `${config.url}${pathnameSliced}`;
  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 604800,
      path: "/",
      sameSite: "lax",
      secrets: [context.cloudflare.env.SESSION_SECRET || " "],
      secure: true
    }
  });
  const session = await getSession(request.headers.get("Cookie"));
  const theme = session.get("theme") || "dark";
  return json(
    { canonicalUrl, theme },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
};
function App() {
  var _a;
  let { canonicalUrl, theme } = useLoaderData();
  const fetcher = useFetcher();
  const { state } = useNavigation();
  if ((_a = fetcher.formData) == null ? void 0 : _a.has("theme")) {
    theme = fetcher.formData.get("theme");
  }
  function toggleTheme(newTheme) {
    fetcher.submit(
      { theme: newTheme ? newTheme : theme === "dark" ? "light" : "dark" },
      { action: "/api/set-theme", method: "post" }
    );
  }
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: theme === "dark" ? "#111" : "#F2F2F2" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "color-scheme",
          content: theme === "light" ? "light dark" : "dark light"
        }
      ),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {}),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl })
    ] }),
    /* @__PURE__ */ jsxs("body", { "data-theme": theme, children: [
      /* @__PURE__ */ jsxs(ThemeProvider, { theme, toggleTheme, children: [
        /* @__PURE__ */ jsx(Progress, {}),
        /* @__PURE__ */ jsx(VisuallyHidden, { showOnFocus: true, as: "a", className: styles$k.skip, href: "#main-content", children: "Skip to main content" }),
        /* @__PURE__ */ jsx(Navbar, {}),
        /* @__PURE__ */ jsx(
          "main",
          {
            id: "main-content",
            className: styles$k.container,
            tabIndex: -1,
            "data-loading": state === "loading",
            children: /* @__PURE__ */ jsx(Outlet, {})
          }
        )
      ] }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function ErrorBoundary$1() {
  const error2 = useRouteError();
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: "#111" }),
      /* @__PURE__ */ jsx("meta", { name: "color-scheme", content: "dark light" }),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { "data-theme": "dark", children: [
      /* @__PURE__ */ jsx(Error$1, { error: error2 }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$1,
  default: App,
  links: links$1,
  loader: loader$4
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$1 = {
  "title": "Demystifying DevOps vs DevSecOps",
  "abstract": "In this tech era, DevOps practices have become the emerging way for developers to deliver software faster. With the increasing digital threats in the world today, it has become essential to implement security into DevOps practices.",
  "date": "2022-04-21",
  "banner": "/static/hello-world-banner.jpg"
};
function _createMdxContent$1(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(Fragment$1, {
    children: [jsx(_components.h1, {
      id: "transitioning-from-devops-to-devsecops-challenges-and-benefits",
      children: "Transitioning from DevOps to DevSecOps: Challenges and Benefits"
    }), "\n", jsxs(_components.p, {
      children: ["In this tech era, DevOps practices have become the emerging way for developers to deliver software faster. With the increasing digital threats in the world today, it has become essential to implement security into DevOps practices. This is where ", jsx(_components.strong, {
        children: "DevSecOps"
      }), " comes into the picture, providing security through vulnerability analysis with tools like SonarQube before pushing to Docker or releasing software."]
    }), "\n", jsx(_components.p, {
      children: "In this article, we will explore the challenges and benefits of transitioning from DevOps to DevSecOps."
    }), "\n", jsx(_components.h2, {
      id: "what-is-devops",
      children: "What is DevOps?"
    }), "\n", jsxs(_components.p, {
      children: ["DevOps is the combination of ", jsx(_components.strong, {
        children: "Development"
      }), " and ", jsx(_components.strong, {
        children: "Operations"
      }), ", aiming to bridge the gap between software development teams and IT operations teams. The main objective of DevOps is to automate processes by implementing ", jsx(_components.strong, {
        children: "continuous integration"
      }), " (CI) and ", jsx(_components.strong, {
        children: "continuous deployment"
      }), " (CD)."]
    }), "\n", jsx(_components.h2, {
      id: "what-is-devsecops",
      children: "What is DevSecOps?"
    }), "\n", jsxs(_components.p, {
      children: ["DevSecOps is an extension of DevOps that embeds ", jsx(_components.strong, {
        children: "security"
      }), " as a shared responsibility throughout the Software Development Lifecycle (SDLC). Instead of treating security as an afterthought or a separate process post-development, DevSecOps integrates security practices from the very beginning of the development cycle."]
    }), "\n", jsx(_components.h2, {
      id: "key-differences-between-devops-and-devsecops",
      children: "Key Differences Between DevOps and DevSecOps:"
    }), "\n", jsx(_components.h3, {
      id: "security-first-approach",
      children: "Security-First Approach:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "DevOps:"
        }), " Focuses primarily on development and operational efficiency, with security typically handled in later stages."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "DevSecOps:"
        }), ' Emphasizes "security as code," integrating security testing and auditing throughout the development process.']
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "cultural-shift",
      children: "Cultural Shift:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "DevOps:"
        }), " Encourages collaboration between development and operations teams."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "DevSecOps:"
        }), " Adds security to the collaboration, making it everyone’s responsibility to ensure security, not just the security team’s."]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "tooling",
      children: "Tooling:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "DevOps:"
        }), " Relies on automation tools like Jenkins, Docker, Kubernetes, and Terraform for CI/CD pipelines."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "DevSecOps:"
        }), " Builds on DevOps with security tools like SonarQube (for static code analysis), Snyk (for vulnerability detection), and container security scanners."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "benefits-of-devsecops",
      children: "Benefits of DevSecOps:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Proactive Security:"
        }), " By integrating security testing early in the development pipeline, vulnerabilities are caught before they reach production, reducing the risk of breaches."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Cost and Time Efficiency:"
        }), " Detecting and fixing security issues earlier in the lifecycle saves time and money compared to addressing them later in production."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Increased Confidence in Deliverables:"
        }), " Security concerns are addressed in every release, giving teams and customers greater confidence in the product."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "challenges-in-transitioning-from-devops-to-devsecops",
      children: "Challenges in Transitioning from DevOps to DevSecOps:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Security Skills Gap:"
        }), " Many development and operations teams lack the expertise to incorporate security practices into their workflows. Upskilling in secure coding practices and vulnerability detection is crucial."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Cultural Resistance:"
        }), " Transitioning to DevSecOps requires a cultural shift where developers, operations, and security teams collaborate closely. This can sometimes face resistance."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "automation-tools-in-devops-vs-devsecops",
      children: "Automation Tools in DevOps vs. DevSecOps:"
    }), "\n", jsx(_components.h3, {
      id: "devops-tools",
      children: "DevOps Tools:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Jenkins"
        }), ": For CI/CD automation."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Docker"
        }), ": For containerization."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Kubernetes"
        }), ": For orchestration, making infrastructure management more efficient."]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "devsecops-tools",
      children: "DevSecOps Tools:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "SonarQube"
        }), ": Performs static code analysis to identify vulnerabilities early in the development process."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Snyk"
        }), ": Detects vulnerabilities in third-party dependencies and open-source software."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Aqua Security"
        }), ": Monitors container security and ensures that only secure images are deployed in production environments."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "devsecops-in-the-cloud",
      children: "DevSecOps in the Cloud:"
    }), "\n", jsx(_components.p, {
      children: "Cloud platforms like AWS, Azure, and GCP are widely used in DevOps. However, DevSecOps brings cloud security into focus, utilizing tools like automated cloud security scanners and secret management tools (e.g., HashiCorp Vault) to protect cloud-native applications."
    }), "\n", jsx(_components.h2, {
      id: "steps-to-transition-from-devops-to-devsecops",
      children: "Steps to Transition from DevOps to DevSecOps:"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Evaluate Security Needs:"
        }), " Identify the specific security requirements of your applications. Are there known vulnerabilities in your code or third-party libraries? How do your containers handle sensitive information?"]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Embed Security into CI/CD Pipelines:"
        }), " Add security checks into Jenkins, GitLab CI, or CircleCI pipelines. Integrate tools like SonarQube and Snyk to automatically identify vulnerabilities."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Upskill Teams:"
        }), " Train developers and operations teams on secure coding practices, threat modeling, and using security automation tools."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Adopt a Shift-Left Approach:"
        }), " Shift security testing earlier in the SDLC to identify and fix vulnerabilities when they are easier and cheaper to address."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Continuous Monitoring:"
        }), " Even after code deployment, continuous monitoring using tools like Prometheus and Grafana (for DevOps) and Aqua Security (for DevSecOps) is necessary to maintain security."]
      }), "\n"]
    })]
  });
}
function MDXContent$1(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$1, {
      ...props
    })
  }) : _createMdxContent$1(props);
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$1,
  frontmatter: frontmatter$1
}, Symbol.toStringTag, { value: "Module" }));
const backgroundSprLarge = "/assets/spr-background-large-nYeU3Kau.jpg";
const backgroundSprPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wgARCAAQABgDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQFCP/EABgBAQADAQAAAAAAAAAAAAAAAAMBAgQF/9oADAMBAAIQAxAAAADJ1+YyYzk2GgjwSltH/8QAHxAAAAUFAQEAAAAAAAAAAAAAAAECAwQFERITMSFh/9oACAEBAAE/AI8S7dyCqdm19D8TT0NzNasS4DqSkiVJN70x/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAIBEgMRE//aAAgBAgEBPwCxOQVtlTmKtT//xAAaEQACAgMAAAAAAAAAAAAAAAAAAQMSAgQR/9oACAEDAQE/AM5uMWzxmE1hw2QtVMjiof/Z";
const backgroundSpr = "/assets/spr-background-BYcr6wKu.jpg";
const sprTextureLarge = "/assets/license-plate-output-CaeUv2Md.png";
const imageSprDesignSystemLightPlaceholder = "/assets/deepstream-flow-Df_nDpDj.png";
const imageSprDesignSystemDarkPlaceholder = "/assets/spr-design-system-dark-placeholder-BnG6UVwD.png";
const sprTexturePlaceholder = "/assets/spr-lesson-builder-dark-placeholder-BYjrS8rr.jpg";
const link$1 = "_link_4ieiq_3";
const styles$j = {
  link: link$1
};
const VALID_EXT = ["txt", "png", "jpg"];
function isAnchor(href) {
  const isValidExtension = VALID_EXT.includes(href == null ? void 0 : href.split(".").pop());
  return (href == null ? void 0 : href.includes("://")) || (href == null ? void 0 : href[0]) === "#" || isValidExtension;
}
const Link = forwardRef(
  ({ rel, target, children, secondary, className, href, ...rest }, ref) => {
    const isExternal = href == null ? void 0 : href.includes("://");
    const relValue = rel || (isExternal ? "noreferrer noopener" : void 0);
    const targetValue = target || (isExternal ? "_blank" : void 0);
    const linkProps = {
      className: classes(styles$j.link, className),
      ["data-secondary"]: secondary,
      rel: relValue,
      href,
      target: targetValue,
      ref,
      ...rest
    };
    if (isAnchor(href)) {
      return /* @__PURE__ */ jsx("a", { ...linkProps, href, children });
    }
    return /* @__PURE__ */ jsx(Link$1, { unstable_viewTransition: true, prefetch: "intent", ...linkProps, to: href, children });
  }
);
const footer$1 = "_footer_if18v_3";
const link = "_link_if18v_31";
const date$1 = "_date_if18v_39";
const styles$i = {
  footer: footer$1,
  link,
  date: date$1
};
const Footer = ({ className }) => /* @__PURE__ */ jsx("footer", { className: classes(styles$i.footer, className), children: /* @__PURE__ */ jsxs(Text, { size: "s", align: "center", children: [
  /* @__PURE__ */ jsx("span", { className: styles$i.date, children: `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${config.name}.` }),
  /* @__PURE__ */ jsx(Link, { secondary: true, className: styles$i.link, href: "/humans.txt", target: "_self", children: "Crafted by yours truly" })
] }) });
const container$1 = "_container_1lkfa_3";
const options = "_options_1lkfa_11";
const button$3 = "_button_1lkfa_51";
const indicator = "_indicator_1lkfa_133";
const styles$h = {
  container: container$1,
  options,
  button: button$3,
  indicator
};
const SegmentedControlContext = createContext({});
const SegmentedControl = ({
  children,
  currentIndex,
  onChange,
  label: label2,
  ...props
}) => {
  const id = useId();
  const labelId = `${id}segmented-control-label`;
  const optionRefs = useRef([]);
  const [indicator2, setIndicator] = useState();
  const handleKeyDown = (event) => {
    const { length } = optionRefs.current;
    const prevIndex = (currentIndex - 1 + length) % length;
    const nextIndex = (currentIndex + 1) % length;
    if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
      onChange(prevIndex);
      optionRefs.current[prevIndex].current.focus();
    } else if (["ArrowRight", "ArrowDown"].includes(event.key)) {
      onChange(nextIndex);
      optionRefs.current[nextIndex].current.focus();
    }
  };
  const registerOption = useCallback((optionRef) => {
    optionRefs.current = [...optionRefs.current, optionRef];
  }, []);
  const unRegisterOption = useCallback((optionRef) => {
    optionRefs.current = optionRefs.current.filter((ref) => ref !== optionRef);
  }, []);
  useEffect(() => {
    var _a;
    const currentOption = (_a = optionRefs.current[currentIndex]) == null ? void 0 : _a.current;
    const resizeObserver = new ResizeObserver(() => {
      const rect = currentOption == null ? void 0 : currentOption.getBoundingClientRect();
      const left = currentOption == null ? void 0 : currentOption.offsetLeft;
      setIndicator({ width: rect == null ? void 0 : rect.width, left });
    });
    resizeObserver.observe(currentOption);
    return () => {
      resizeObserver.disconnect();
    };
  }, [currentIndex]);
  return /* @__PURE__ */ jsx(
    SegmentedControlContext.Provider,
    {
      value: { optionRefs, currentIndex, onChange, registerOption, unRegisterOption },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: styles$h.container,
          role: "radiogroup",
          tabIndex: "0",
          "aria-labelledby": labelId,
          onKeyDown: handleKeyDown,
          ...props,
          children: [
            /* @__PURE__ */ jsx(VisuallyHidden, { as: "label", id: labelId, children: label2 }),
            /* @__PURE__ */ jsxs("div", { className: styles$h.options, children: [
              !!indicator2 && /* @__PURE__ */ jsx(
                "div",
                {
                  className: styles$h.indicator,
                  "data-last": currentIndex === optionRefs.current.length - 1,
                  style: cssProps$1(indicator2)
                }
              ),
              children
            ] })
          ]
        }
      )
    }
  );
};
const SegmentedControlOption = ({ children, ...props }) => {
  const { optionRefs, currentIndex, onChange, registerOption, unRegisterOption } = useContext(SegmentedControlContext);
  const optionRef = useRef();
  const index2 = optionRefs.current.indexOf(optionRef);
  const isSelected = currentIndex === index2;
  useEffect(() => {
    registerOption(optionRef);
    return () => {
      unRegisterOption(optionRef);
    };
  }, [registerOption, unRegisterOption]);
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: styles$h.button,
      tabIndex: isSelected ? 0 : -1,
      role: "radio",
      "aria-checked": isSelected,
      onClick: () => onChange(index2),
      ref: optionRef,
      ...props,
      children
    }
  );
};
const section$2 = "_section_1278e_3";
const styles$g = {
  section: section$2
};
const Section = forwardRef(
  ({ as: Component = "div", children, className, ...rest }, ref) => /* @__PURE__ */ jsx(Component, { className: classes(styles$g.section, className), ref, ...rest, children })
);
const project = "_project_1n18f_39";
const section$1 = "_section_1n18f_57";
const sectionInner = "_sectionInner_1n18f_87";
const sectionBackground = "_sectionBackground_1n18f_177";
const backgroundImage = "_backgroundImage_1n18f_275";
const backgroundImageElement = "_backgroundImageElement_1n18f_313";
const backgroundScrim = "_backgroundScrim_1n18f_351";
const header$2 = "_header_1n18f_383";
const headerContent = "_headerContent_1n18f_423";
const details$2 = "_details_1n18f_499";
const title$6 = "_title_1n18f_523";
const projectFadeSlide = "_projectFadeSlide_1n18f_1";
const description$4 = "_description_1n18f_543";
const linkButton = "_linkButton_1n18f_563";
const meta$8 = "_meta_1n18f_583";
const metaItem = "_metaItem_1n18f_613";
const image$2 = "_image_1n18f_653";
const sectionContent = "_sectionContent_1n18f_669";
const sectionHeading = "_sectionHeading_1n18f_715";
const sectionText = "_sectionText_1n18f_723";
const textRow = "_textRow_1n18f_737";
const sectionColumns = "_sectionColumns_1n18f_849";
const styles$f = {
  project,
  section: section$1,
  sectionInner,
  sectionBackground,
  backgroundImage,
  backgroundImageElement,
  backgroundScrim,
  header: header$2,
  headerContent,
  details: details$2,
  title: title$6,
  projectFadeSlide,
  description: description$4,
  linkButton,
  meta: meta$8,
  metaItem,
  image: image$2,
  sectionContent,
  sectionHeading,
  sectionText,
  textRow,
  sectionColumns
};
const initDelay = 300;
function ProjectHeader({
  title: title2,
  description: description2,
  linkLabel = "Visit website",
  url: url2,
  roles: roles2,
  className
}) {
  return /* @__PURE__ */ jsx(Section, { className: classes(styles$f.header, className), as: "section", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$f.headerContent,
      style: cssProps$1({ initDelay: numToMs$1(initDelay) }),
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles$f.details, children: [
          /* @__PURE__ */ jsx(Heading, { className: styles$f.title, level: 2, as: "h1", children: title2 }),
          /* @__PURE__ */ jsx(Text, { className: styles$f.description, size: "xl", as: "p", children: description2 }),
          !!url2 && /* @__PURE__ */ jsx(
            Button,
            {
              secondary: true,
              iconHoverShift: true,
              className: styles$f.linkButton,
              icon: "chevron-right",
              href: url2,
              children: linkLabel
            }
          )
        ] }),
        !!(roles2 == null ? void 0 : roles2.length) && /* @__PURE__ */ jsx("ul", { className: styles$f.meta, children: roles2 == null ? void 0 : roles2.map((role2, index2) => /* @__PURE__ */ jsx(
          "li",
          {
            className: styles$f.metaItem,
            style: cssProps$1({ delay: numToMs$1(initDelay + 300 + index2 * 140) }),
            children: /* @__PURE__ */ jsx(Text, { secondary: true, children: role2 })
          },
          role2
        )) })
      ]
    }
  ) });
}
const ProjectContainer = ({ className, ...rest }) => /* @__PURE__ */ jsx("article", { className: classes(styles$f.project, className), ...rest });
const ProjectSection = forwardRef(
  ({
    className,
    light: light2,
    padding = "both",
    fullHeight,
    backgroundOverlayOpacity = 0.9,
    backgroundElement,
    children,
    ...rest
  }, ref) => /* @__PURE__ */ jsxs(
    "section",
    {
      className: classes(styles$f.section, className),
      "data-light": light2,
      "data-full-height": fullHeight,
      ref,
      ...rest,
      children: [
        !!backgroundElement && /* @__PURE__ */ jsx(
          "div",
          {
            className: styles$f.sectionBackground,
            style: cssProps$1({ opacity: backgroundOverlayOpacity }),
            children: backgroundElement
          }
        ),
        /* @__PURE__ */ jsx(Section, { className: styles$f.sectionInner, "data-padding": padding, children })
      ]
    }
  )
);
const ProjectBackground = ({ opacity = 0.7, className, ...rest }) => {
  const imageRef = useRef();
  useParallax(0.6, (value2) => {
    if (!imageRef.current)
      return;
    imageRef.current.style.setProperty("--offset", `${value2}px`);
  });
  return /* @__PURE__ */ jsx(Transition, { in: true, timeout: msToNum$1(tokens.base.durationM), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: classes(styles$f.backgroundImage, className),
      "data-visible": visible,
      ref: nodeRef,
      children: [
        /* @__PURE__ */ jsx("div", { className: styles$f.backgroundImageElement, ref: imageRef, children: /* @__PURE__ */ jsx(Image$1, { cover: true, alt: "", role: "presentation", ...rest }) }),
        /* @__PURE__ */ jsx("div", { className: styles$f.backgroundScrim, style: cssProps$1({ opacity }) })
      ]
    }
  ) });
};
const ProjectSectionContent = ({ className, width = "l", ...rest }) => /* @__PURE__ */ jsx(
  "div",
  {
    className: classes(styles$f.sectionContent, className),
    "data-width": width,
    ...rest
  }
);
const ProjectSectionHeading = ({ className, level = 3, as = "h2", ...rest }) => /* @__PURE__ */ jsx(
  Heading,
  {
    className: classes(styles$f.sectionHeading, className),
    as,
    level,
    align: "auto",
    ...rest
  }
);
const ProjectSectionText = ({ className, ...rest }) => /* @__PURE__ */ jsx(Text, { className: classes(styles$f.sectionText, className), size: "l", as: "p", ...rest });
const ProjectTextRow = ({
  center,
  stretch,
  justify = "center",
  width = "m",
  noMargin,
  className,
  centerMobile,
  ...rest
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: classes(styles$f.textRow, className),
    "data-center": center,
    "data-stretch": stretch,
    "data-center-mobile": centerMobile,
    "data-no-margin": noMargin,
    "data-width": width,
    "data-justify": justify,
    ...rest
  }
);
const { name: name$1, url, twitter } = config;
const defaultOgImage = `${url}/social-image.png`;
function baseMeta({
  title: title2,
  description: description2,
  prefix = name$1,
  ogImage = defaultOgImage
}) {
  const titleText = [prefix, title2].filter(Boolean).join(" | ");
  return [
    { title: titleText },
    { name: "description", content: description2 },
    { name: "author", content: name$1 },
    { property: "og:image", content: ogImage },
    { property: "og:image:alt", content: "Banner for the site" },
    { property: "og:image:width", content: "1280" },
    { property: "og:image:height", content: "800" },
    { property: "og:title", content: titleText },
    { property: "og:site_name", content: name$1 },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:description", content: description2 },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:description", content: description2 },
    { property: "twitter:title", content: titleText },
    { property: "twitter:site", content: url },
    { property: "twitter:creator", content: twitter },
    { property: "twitter:image", content: ogImage }
  ];
}
const video$1 = "_video_169iy_1";
const sidebarImages$1 = "_sidebarImages_169iy_25";
const sidebarImage$1 = "_sidebarImage_169iy_25";
const smartSparrow_module$1 = {
  video: video$1,
  sidebarImages: sidebarImages$1,
  sidebarImage: sidebarImage$1
};
lazy(() => import("./earth-DQirZjB3.js").then((module) => ({ default: module.Earth })));
lazy(
  () => import("./earth-DQirZjB3.js").then((module) => ({ default: module.EarthSection }))
);
const title$5 = "Real-Time License Plate Recongistion System  Powered by NVIDIA DeepStream: Scalable, Fast, and Accurate";
const description$3 = "I worked as the lead developer on a major project using NVIDIA DeepStream to build a real-time license plate detection system. We took the solution in an innovative direction by leveraging the power of DeepStream for efficient video analytics and object detection. The system was designed to be deployed on edge devices for real-time processing and analysis.";
const roles$1 = [
  "System Architecture and Design",
  "DeepStream Model Development",
  "Computer Vision and AI Integration",
  "Real-time Data Processing Optimization",
  " Edge Computing Deployment"
];
const meta$7 = () => {
  return baseMeta({ title: title$5, description: description$3, prefix: "Projects" });
};
const SmartSparrow = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const themes2 = ["dark", "light"];
  const handleThemeChange = (index2) => {
    toggleTheme(themes2[index2]);
  };
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          opacity: isDark ? 0.5 : 0.8,
          src: backgroundSpr,
          srcSet: `${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`,
          placeholder: backgroundSprPlaceholder
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: title$5,
          description: description$3,
          url: "https://github.com/Tarunbalaji2003/Deepstream_Number-plate",
          roles: roles$1
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "The problem" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { children: "With the increasing demand for efficient vehicle monitoring and security, traditional license plate recognition systems struggle to handle high-volume, real-time data processing, leading to delays, inaccuracies, and limited scalability. Existing solutions often lack the computational power to analyze multiple video streams simultaneously while ensuring precise detection and recognition of license plates. There is a need for a scalable, real-time system that can process live video feeds with high accuracy, handle large datasets, and be easily deployable on edge devices or in the cloud for wide-scale implementation." })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { light: isDark, children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsx(
          Image$1,
          {
            srcSet: isDark ? `${sprTextureLarge} 1024w, ${sprTextureLarge} 2048w` : `${sprTextureLarge} 1024w, ${sprTextureLarge} 2048w`,
            width: 1024,
            hright: 800,
            placeholder: isDark ? sprTextureLarge : sprTextureLarge,
            alt: `A set of ${theme} themed components for the aero design system`,
            sizes: "100vw"
          },
          theme
        ),
        /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsxs(
          SegmentedControl,
          {
            currentIndex: themes2.indexOf(theme),
            onChange: handleThemeChange,
            children: [
              /* @__PURE__ */ jsx(SegmentedControlOption, { children: "Dark theme" }),
              /* @__PURE__ */ jsx(SegmentedControlOption, { children: "Light theme" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "The system Design" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "The NVIDIA DeepStream-based license plate detection system is designed for real-time vehicle monitoring using live video feeds. Leveraging advanced computer vision and GPU acceleration, the system detects vehicles and reads license plates efficiently through a DeepStream pipeline and optimized inference engine. It supports scalable deployment on edge devices or the cloud, offering high-performance detection with integrated data storage, alerting, and reporting capabilities. The below image is souced from offical documentation." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsx(
          Image$1,
          {
            raised: true,
            srcSet: isDark ? `${imageSprDesignSystemLightPlaceholder} 1180w, ${imageSprDesignSystemLightPlaceholder} 2000w` : `${imageSprDesignSystemLightPlaceholder} 1280w, ${imageSprDesignSystemLightPlaceholder} 2560w`,
            width: 1280,
            height: 800,
            placeholder: isDark ? imageSprDesignSystemDarkPlaceholder : imageSprDesignSystemLightPlaceholder,
            alt: "The homepage of the aero design system docs website linking to principles and components.",
            sizes: "100vw"
          },
          theme
        ),
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Solution" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Our NVIDIA DeepStream-based license plate detection system addresses the challenges of real-time vehicle monitoring with cutting-edge technology. By leveraging GPU-accelerated video analytics, our solution enables rapid and accurate detection of license plates from live video streams, ensuring high performance even with large datasets. With support for scalable deployment on edge devices and cloud platforms, our system integrates seamlessly into various security and traffic management infrastructures, offering real-time alerts, data storage, and comprehensive reporting for enhanced operational efficiency." })
        ] }),
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Techstack" }),
          /* @__PURE__ */ jsxs(ProjectSectionText, { children: [
            " ",
            /* @__PURE__ */ jsxs("ol", { children: [
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "NVIDIA DeepStream SDK:" }),
                " Utilized for real-time video analytics and GPU-accelerated processing of video streams."
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "TensorRT:" }),
                " Employed for optimized model inference, enhancing the performance of object detection and recognition."
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Optical Character Recognition (OCR):" }),
                " Integrated for accurate extraction and interpretation of license plate characters."
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Python:" }),
                " Used for scripting and integrating various components of the system."
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Docker:" }),
                " Implemented for containerization, ensuring consistent deployment across different environments."
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "CUDA:" }),
                " Leveraged for parallel computing and accelerating GPU-based tasks."
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Cloud Services AWS:" }),
                " Optional for scalable storage and processing capabilities."
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Get in Touch" }),
          /* @__PURE__ */ jsxs(ProjectSectionText, { children: [
            /* @__PURE__ */ jsx("p", { children: "If you’re interested in learning more about our license plate detection solution or would like to schedule a demo, here’s how you can reach out:" }),
            /* @__PURE__ */ jsxs("ul", { children: [
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Request a Demo:" }),
                " Contact us to arrange a personalized demonstration of the system’s capabilities."
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Contact Us:" }),
                " Send us an email at ",
                /* @__PURE__ */ jsx("a", { href: "mailto:tarunbalaji170703@gmail.com", children: "tarunbalaji170703@gmail.com" }),
                " for inquiries or further information."
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Follow Us:" }),
                " Stay updated with our latest developments on  ",
                /* @__PURE__ */ jsx("a", { href: "www.linkedin.com/in/tarunbalaji", children: "LinkedIn" }),
                "."
              ] })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ThemeProvider, { theme: "dark", "data-invert": true })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SmartSparrow,
  meta: meta$7
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter = {
  "title": "Monolithic vs. Microservices Architecture:-  The DevOps Transformation",
  "abstract": "The evolution of software architecture from monolithic to microservices has marked a significant shift in software development.",
  "date": "2022-05-01",
  "banner": "/static/modern-styling-in-react-banner.jpg",
  "featured": true
};
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(Fragment$1, {
    children: [jsx(_components.h1, {
      id: "monolithic-vs-microservices-architecture-the-devops-transformation",
      children: "Monolithic vs. Microservices Architecture: The DevOps Transformation"
    }), "\n", jsx(_components.p, {
      children: "The evolution of software architecture from monolithic to microservices has marked a significant shift in the field of software development. This transformation has been driven by the adoption of DevOps practices, which emphasize automation, continuous integration, and improved collaboration. In this article, we will explore the characteristics of both monolithic and microservices architectures, discuss their respective challenges, and analyze how DevOps methodologies have revolutionized their development and management."
    }), "\n", jsx(_components.h2, {
      id: "monolithic-architecture",
      children: "Monolithic Architecture"
    }), "\n", jsx(_components.h3, {
      id: "what-is-monolithic-architecture",
      children: "What is Monolithic Architecture?"
    }), "\n", jsx(_components.p, {
      children: "Monolithic architecture represents a traditional approach to software design where all components of an application are tightly integrated into a single, unified codebase. In a monolithic application, various functionalities—such as user interface, business logic, and data access—are encapsulated within one large codebase. This model follows a layered architecture where each layer serves a specific purpose but is closely coupled with other layers."
    }), "\n", jsx(_components.h3, {
      id: "characteristics-of-monolithic-architecture",
      children: "Characteristics of Monolithic Architecture"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Single Codebase"
          }), ": A monolithic application is built and managed as a single codebase. This means that the entire application, including all its functionalities and components, is housed within one large repository."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Tightly Coupled Components"
          }), ": In monolithic architecture, components are interdependent. A change in one part of the application often necessitates changes in other parts, leading to a tightly coupled system where different components are not easily separable."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Scalability Challenges"
          }), ": Scaling a monolithic application typically involves scaling the entire application rather than individual components. This approach can be inefficient and costly, particularly if only one part of the application requires additional resources."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Deployment Complexity"
          }), ": Deploying a monolithic application can be complex and risky. Any change requires redeploying the entire application, which increases the potential for downtime and deployment failures."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Limited Flexibility"
          }), ": The monolithic approach often limits flexibility, making it difficult to implement changes or updates to specific parts of the application without affecting the whole system."]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "pre-devops-challenges",
      children: "Pre-DevOps Challenges"
    }), "\n", jsx(_components.p, {
      children: "Before the advent of DevOps, managing monolithic applications posed several significant challenges:"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Slow Release Cycles"
          }), ": The need to deploy the entire application for any change led to long release cycles. Development teams faced delays in delivering new features and bug fixes."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Limited Flexibility"
          }), ": Changes or updates to one part of the application could inadvertently impact other parts, making it challenging to implement modifications and improvements."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Difficult Scaling"
          }), ": Scaling a monolithic application required replicating the entire application, which could be inefficient and costly. The lack of granularity in scaling led to underutilization of resources."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Risk of Downtime"
          }), ": Since the entire application needed to be redeployed for any change, the risk of downtime increased. This was particularly problematic for mission-critical applications where high availability was essential."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Challenges in Testing and Maintenance"
          }), ": Testing and maintaining a monolithic application could be cumbersome, as any change required extensive testing of the entire application, rather than isolated components."]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "microservices-architecture",
      children: "Microservices Architecture"
    }), "\n", jsx(_components.h3, {
      id: "what-is-microservices-architecture",
      children: "What is Microservices Architecture?"
    }), "\n", jsx(_components.p, {
      children: "Microservices architecture represents a departure from the monolithic model by breaking down applications into smaller, independent services that communicate over a network. Each microservice is responsible for a specific functionality and can be developed, deployed, and scaled independently. This modular approach offers greater flexibility and agility in managing complex systems."
    }), "\n", jsx(_components.h3, {
      id: "characteristics-of-microservices-architecture",
      children: "Characteristics of Microservices Architecture"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Independent Services"
          }), ": Microservices architecture decomposes applications into self-contained units, each with its own codebase, data storage, and functionality. This independence allows for greater flexibility in development and deployment."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Decoupled Components"
          }), ": Services in a microservices architecture are loosely coupled, meaning changes to one service do not necessarily impact others. This decoupling enables teams to work on different services concurrently without interference."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Scalability"
          }), ": Microservices allow for independent scaling of services based on demand. This granular approach to scaling ensures efficient resource utilization and cost-effectiveness."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Continuous Deployment"
          }), ": Microservices support frequent and incremental deployments. This capability aligns with modern DevOps practices, enabling continuous integration and delivery of new features and updates."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Flexibility and Agility"
          }), ": The modular nature of microservices provides greater flexibility in implementing changes and updates. Teams can deploy, test, and scale individual services without affecting the entire system."]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "devops-driven-transformation",
      children: "DevOps-Driven Transformation"
    }), "\n", jsx(_components.p, {
      children: "The adoption of DevOps practices has significantly influenced the development and management of microservices:"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Automation"
          }), ": DevOps tools and practices automate the deployment, testing, and monitoring of microservices. Automation reduces manual intervention, improves reliability, and accelerates the development lifecycle."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Continuous Integration and Continuous Deployment (CI/CD)"
          }), ": DevOps pipelines facilitate continuous integration and deployment of microservices. Automated testing and deployment ensure that changes are integrated and delivered quickly and efficiently."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Infrastructure as Code (IaC)"
          }), ": Tools like Terraform and Ansible enable the management of infrastructure programmatically. IaC ensures consistent and repeatable deployments across different environments, reducing configuration drift and errors."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Monitoring and Logging"
          }), ": DevOps emphasizes the use of monitoring and logging tools to gain insights into service performance and health. Tools like Prometheus and the ELK Stack provide real-time visibility and help in quickly identifying and resolving issues."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Containerization and Orchestration"
          }), ": Docker and Kubernetes are central to the management of microservices. Docker provides a consistent environment for services, while Kubernetes automates the orchestration, scaling, and management of containerized applications."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: [jsx(_components.strong, {
            children: "Improved Collaboration"
          }), ": DevOps fosters a culture of collaboration between development and operations teams. Enhanced communication and shared goals lead to more efficient development processes and better alignment with business objectives."]
        }), "\n"]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "comparing-monolithic-and-microservices-architectures",
      children: "Comparing Monolithic and Microservices Architectures"
    }), "\n", jsx(_components.h3, {
      id: "development-and-deployment",
      children: "Development and Deployment"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Monolithic"
        }), ": Development and deployment are done as a single unit. Changes require redeploying the entire application, which can be time-consuming and risky."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Microservices"
        }), ": Development and deployment are done independently for each service. Changes can be deployed incrementally, reducing risk and allowing for faster releases."]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "scalability",
      children: "Scalability"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Monolithic"
        }), ": Scaling requires replicating the entire application, which can be inefficient and costly. Limited granularity in scaling leads to underutilization of resources."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Microservices"
        }), ": Services can be scaled independently based on demand, optimizing resource usage and cost. Granular scaling ensures efficient use of infrastructure."]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "flexibility",
      children: "Flexibility"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Monolithic"
        }), ": Limited flexibility due to tightly coupled components. Changes to one part of the application can impact others."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Microservices"
        }), ": Greater flexibility with loosely coupled services. Changes to one service do not necessarily affect others, enabling more agile development."]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "maintenance",
      children: "Maintenance"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Monolithic"
        }), ": Maintenance can be challenging due to the interdependencies between components. Any change requires extensive testing of the entire application."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Microservices"
        }), ": Maintenance is easier with isolated services. Changes can be tested and deployed independently, reducing the risk of impacting other services."]
      }), "\n"]
    }), "\n", jsx(_components.h3, {
      id: "testing",
      children: "Testing"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Monolithic"
        }), ": Testing involves the entire application, which can be complex and time-consuming. Integration testing is crucial to ensure that changes do not disrupt the system."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Microservices"
        }), ": Testing is more focused on individual services. Automated testing frameworks and CI/CD pipelines facilitate frequent and reliable testing of services."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "the-role-of-devops-in-enhancing-microservices",
      children: "The Role of DevOps in Enhancing Microservices"
    }), "\n", jsx(_components.h3, {
      id: "automation-and-cicd",
      children: "Automation and CI/CD"
    }), "\n", jsx(_components.p, {
      children: "DevOps practices emphasize automation and continuous integration and deployment (CI/CD) pipelines. Automation tools streamline the build, test, and deployment processes, reducing manual intervention and improving efficiency. CI/CD pipelines enable frequent updates and ensure that changes are integrated and deployed quickly, facilitating a more agile development approach."
    }), "\n", jsx(_components.h3, {
      id: "infrastructure-management",
      children: "Infrastructure Management"
    }), "\n", jsx(_components.p, {
      children: "Infrastructure as Code (IaC) tools like Terraform and Ansible play a crucial role in managing microservices environments. IaC allows teams to define and provision infrastructure programmatically, ensuring consistency and repeatability across different environments. This approach reduces configuration drift and improves the reliability of deployments."
    }), "\n", jsx(_components.h3, {
      id: "monitoring-and-observability",
      children: "Monitoring and Observability"
    }), "\n", jsx(_components.p, {
      children: "Effective monitoring and observability are essential for managing microservices. DevOps practices emphasize the use of monitoring and logging tools to gain real-time insights into service performance and health. Tools like Prometheus, Grafana, and the ELK Stack provide visibility into the system, enabling teams to quickly identify and resolve issues."
    }), "\n", jsx(_components.h3, {
      id: "containerization-and-orchestration",
      children: "Containerization and Orchestration"
    }), "\n", jsx(_components.p, {
      children: "Containerization with Docker and orchestration with Kubernetes are integral to managing microservices. Docker containers provide a consistent environment for services, ensuring that they run reliably across different environments. Kubernetes automates the orchestration, scaling, and management of containerized applications, enhancing operational efficiency and scalability."
    }), "\n", jsx(_components.h3, {
      id: "security-and-compliance",
      children: "Security and Compliance"
    }), "\n", jsx(_components.p, {
      children: "DevOps practices also address security and compliance in microservices environments. Automated security testing, vulnerability scanning, and compliance checks are integrated into CI/CD pipelines to ensure that services meet security standards and regulatory requirements. This proactive approach to security helps in identifying and mitigating potential risks early in the development process."
    }), "\n", jsx(_components.h2, {
      id: "case-studies-and-real-world-examples",
      children: "Case Studies and Real-World Examples"
    }), "\n", jsx(_components.h3, {
      id: "case-study-e-commerce-platform",
      children: "Case Study: E-Commerce Platform"
    }), "\n", jsx(_components.p, {
      children: "An e-commerce platform transitioned from a monolithic architecture to a microservices-based approach to address scalability and flexibility challenges. By adopting microservices and DevOps practices, the platform achieved significant improvements in deployment speed, system reliability, and customer experience. Automation tools and CI/CD pipelines enabled rapid deployment of new features and updates, while containerization and orchestration provided efficient resource management."
    }), "\n", jsx(_components.h3, {
      id: "case-study-financial-services",
      children: "Case Study: Financial Services"
    }), "\n", jsx(_components.p, {
      children: "A financial services company implemented microservices and DevOps to enhance its ability to deliver new products and services. The adoption of microservices allowed the company to develop and deploy features independently, while DevOps practices streamlined the development lifecycle. The use of IaC and automated testing ensured consistent and reliable deployments,"
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent,
  frontmatter
}, Symbol.toStringTag, { value: "Module" }));
const __variableDynamicImportRuntimeHelper = (glob, path2) => {
  const v = glob[path2];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path2)));
  });
};
function formatTimecode(time) {
  const hours = time / 1e3 / 60 / 60;
  const h = Math.floor(hours);
  const m = Math.floor((hours - h) * 60);
  const s = Math.floor(((hours - h) * 60 - m) * 60);
  const c = Math.floor((((hours - h) * 60 - m) * 60 - s) * 1e3 / 10);
  return `${zeroPrefix(h)}:${zeroPrefix(m)}:${zeroPrefix(s)}:${zeroPrefix(c)}`;
}
function zeroPrefix(value2) {
  return value2 < 10 ? `0${value2}` : `${value2}`;
}
function readingTime(text2) {
  const wpm = 225;
  const words = text2.trim().split(/\s+/).length;
  const time = words / wpm;
  return time * 1e3 * 60;
}
async function getPosts() {
  const modules = /* @__PURE__ */ Object.assign({ "../articles.demystifying.mdx": route1, "../articles.devops.mdx": route5 });
  const build = await Promise.resolve().then(() => serverBuild);
  const posts = await Promise.all(
    Object.entries(modules).map(async ([file, post2]) => {
      let id = file.replace("../", "routes/").replace(/\.mdx$/, "");
      let slug = build.routes[id].path;
      if (slug === void 0)
        throw new Error(`No route for ${id}`);
      const text2 = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../articles.demystifying.mdx": () => import("./articles.demystifying-D761RfpE.js"), "../articles.devops.mdx": () => import("./articles.devops-D9DJwgqq.js") }), `../articles.${slug}.mdx`);
      const readTime = readingTime(text2.default);
      const timecode2 = formatTimecode(readTime);
      return {
        slug,
        timecode: timecode2,
        frontmatter: post2.frontmatter
      };
    })
  );
  return sortBy(posts, (post2) => post2.frontmatter.date, "desc");
}
function sortBy(arr, key, dir = "asc") {
  return arr.sort((a, b) => {
    const res = compare(key(a), key(b));
    return dir === "asc" ? res : -res;
  });
}
function compare(a, b) {
  if (a < b)
    return -1;
  if (a > b)
    return 1;
  return 0;
}
const divider$2 = "_divider_uwer4_3";
const line$1 = "_line_uwer4_15";
const notch = "_notch_uwer4_59";
const styles$e = {
  divider: divider$2,
  line: line$1,
  notch
};
const Divider = ({
  lineWidth,
  lineHeight,
  notchWidth,
  notchHeight,
  collapseDelay,
  collapsed,
  className,
  style,
  ...rest
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: classes(styles$e.divider, className),
    style: cssProps$1(
      {
        lineWidth,
        lineHeight,
        notchWidth,
        notchHeight,
        collapseDelay: numToMs$1(collapseDelay)
      },
      style
    ),
    ...rest,
    children: [
      /* @__PURE__ */ jsx("div", { className: styles$e.line, "data-collapsed": collapsed }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: styles$e.notch,
          "data-collapsed": collapsed,
          style: cssProps$1({ collapseDelay: numToMs$1(collapseDelay + 160) })
        }
      )
    ]
  }
);
Divider.defaultProps = {
  lineWidth: "100%",
  lineHeight: "2px",
  notchWidth: "90px",
  notchHeight: "10px",
  collapsed: false,
  collapseDelay: 0
};
function formatDate(date2) {
  return new Date(date2).toLocaleDateString("default", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  });
}
const articles = "_articles_11xm9_5";
const grid = "_grid_11xm9_29";
const header$1 = "_header_11xm9_105";
const heading$1 = "_heading_11xm9_141";
const list$2 = "_list_11xm9_151";
const divider$1 = "_divider_11xm9_159";
const skeleton = "_skeleton_11xm9_169";
const skeletonBone = "_skeletonBone_11xm9_187";
const post$1 = "_post_11xm9_195";
const postLabel = "_postLabel_11xm9_295";
const postTag = "_postTag_11xm9_297";
const labelIn = "_labelIn_11xm9_1";
const tagIn = "_tagIn_11xm9_1";
const postLink = "_postLink_11xm9_445";
const postDate = "_postDate_11xm9_559";
const postImage = "_postImage_11xm9_579";
const postDetails = "_postDetails_11xm9_679";
const postFooter = "_postFooter_11xm9_711";
const timecode$1 = "_timecode_11xm9_739";
const barcode = "_barcode_11xm9_765";
const styles$d = {
  articles,
  grid,
  header: header$1,
  heading: heading$1,
  list: list$2,
  divider: divider$1,
  skeleton,
  skeletonBone,
  post: post$1,
  postLabel,
  postTag,
  labelIn,
  tagIn,
  postLink,
  postDate,
  postImage,
  postDetails,
  postFooter,
  timecode: timecode$1,
  barcode
};
function ArticlesPost({ slug, frontmatter: frontmatter2, timecode: timecode2, index: index2 }) {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();
  const { title: title2, abstract, date: date2, featured, banner: banner2 } = frontmatter2;
  useEffect(() => {
    setDateTime(formatDate(date2));
  }, [date2, dateTime]);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return /* @__PURE__ */ jsxs(
    "article",
    {
      className: styles$d.post,
      "data-featured": !!featured,
      style: index2 !== void 0 ? cssProps$1({ delay: index2 * 100 + 200 }) : void 0,
      children: [
        featured && /* @__PURE__ */ jsx(Text, { className: styles$d.postLabel, size: "s", children: "Featured" }),
        featured && !!banner2 && /* @__PURE__ */ jsx("div", { className: styles$d.postImage, children: /* @__PURE__ */ jsx(
          Image$1,
          {
            noPauseButton: true,
            play: !reduceMotion ? hovered : void 0,
            src: banner2,
            placeholder: `${banner2.split(".")[0]}-placeholder.jpg`,
            alt: "",
            role: "presentation"
          }
        ) }),
        /* @__PURE__ */ jsx(
          Link$1,
          {
            unstable_viewTransition: true,
            prefetch: "intent",
            to: `/articles/${slug}`,
            className: styles$d.postLink,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            children: /* @__PURE__ */ jsxs("div", { className: styles$d.postDetails, children: [
              /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$d.postDate, children: [
                /* @__PURE__ */ jsx(Divider, { notchWidth: "64px", notchHeight: "8px" }),
                dateTime
              ] }),
              /* @__PURE__ */ jsx(Heading, { as: "h2", level: featured ? 2 : 4, children: title2 }),
              /* @__PURE__ */ jsx(Text, { size: featured ? "l" : "s", as: "p", children: abstract }),
              /* @__PURE__ */ jsxs("div", { className: styles$d.postFooter, children: [
                /* @__PURE__ */ jsx(Button, { secondary: true, iconHoverShift: true, icon: "chevron-right", as: "div", children: "Read article" }),
                /* @__PURE__ */ jsx(Text, { className: styles$d.timecode, size: "s", children: timecode2 })
              ] })
            ] })
          }
        ),
        featured && /* @__PURE__ */ jsx(Text, { "aria-hidden": true, className: styles$d.postTag, size: "s", children: "477" })
      ]
    }
  );
}
function SkeletonPost({ index: index2 }) {
  return /* @__PURE__ */ jsx(
    "article",
    {
      "aria-hidden": "true",
      className: classes(styles$d.post, styles$d.skeleton),
      "data-featured": "false",
      style: index2 !== void 0 ? cssProps$1({ delay: index2 * 100 + 200 }) : void 0,
      children: /* @__PURE__ */ jsx("div", { className: styles$d.postLink, children: /* @__PURE__ */ jsxs("div", { className: styles$d.postDetails, children: [
        /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$d.postDate, children: [
          /* @__PURE__ */ jsx(Divider, { notchWidth: "64px", notchHeight: "8px" }),
          "Coming soon..."
        ] }),
        /* @__PURE__ */ jsx(
          Heading,
          {
            className: styles$d.skeletonBone,
            as: "h2",
            level: 4,
            style: { height: 24, width: "70%" }
          }
        ),
        /* @__PURE__ */ jsx(
          Text,
          {
            className: styles$d.skeletonBone,
            size: "s",
            as: "p",
            style: { height: 90, width: "100%" }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: styles$d.postFooter, children: [
          /* @__PURE__ */ jsx(Button, { secondary: true, iconHoverShift: true, icon: "chevron-right", as: "div", children: "Read more" }),
          /* @__PURE__ */ jsx(Text, { className: styles$d.timecode, size: "s", children: "00:00:00:00" })
        ] })
      ] }) })
    }
  );
}
function Articles$1() {
  const { posts, featured } = useLoaderData();
  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;
  const postsHeader = /* @__PURE__ */ jsxs("header", { className: styles$d.header, children: [
    /* @__PURE__ */ jsx(Heading, { className: styles$d.heading, level: 5, as: "h1", children: /* @__PURE__ */ jsx(DecoderText, { text: "Latest articles" }) }),
    /* @__PURE__ */ jsx(Barcode, { className: styles$d.barcode })
  ] });
  const postList = /* @__PURE__ */ jsxs("div", { className: styles$d.list, children: [
    !isSingleColumn && postsHeader,
    posts.map(({ slug, ...post2 }, index2) => /* @__PURE__ */ jsx(ArticlesPost, { slug, index: index2, ...post2 }, slug)),
    Array(2).fill().map((skeleton2, index2) => /* @__PURE__ */ jsx(SkeletonPost, { index: index2 }, index2))
  ] });
  const featuredPost = /* @__PURE__ */ jsx(ArticlesPost, { ...featured });
  return /* @__PURE__ */ jsxs("article", { className: styles$d.articles, children: [
    /* @__PURE__ */ jsxs(Section, { className: styles$d.content, children: [
      !isSingleColumn && /* @__PURE__ */ jsxs("div", { className: styles$d.grid, children: [
        postList,
        featuredPost
      ] }),
      isSingleColumn && /* @__PURE__ */ jsxs("div", { className: styles$d.grid, children: [
        postsHeader,
        featuredPost,
        postList
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Barcode({ className }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      className,
      width: "153",
      height: "20",
      fill: "currentColor",
      viewBox: "0 0 153 20",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fillOpacity: ".6",
          d: "M153 0v20h-2V0h2Zm-4 0v20h-4V0h4Zm-6 0v20h-2V0h2Zm-4 4v3h-2V4h2Zm-5 0V0h3v4h-3Zm-2 0h2v6h-2V4Zm0 0h-2V0h2v4Zm-4-4v4h-4v5h-2v4h-5V9h3V6h-5V0h13Zm-11 13v3h-2v-3h2Zm-4-13v6h-2v4h2v4h-2v2h2v4h-4V0h4Zm-6 4V0h-2v4h2Zm-1 6V7h-4V4h-2V0h-2v4h-2V0H86v4h-2v3h-2v2h-2v4h6v3h-2v4h6v-4h-2v-3h-2V9h-2V7h4V4h3v9h2v7h7v-4h-5v-3h-2V9h2V7h3v3h2v4h6v-4ZM74 7v3h-2v2h2v8h-4V0h8v5h-3V4h-3v3h2Zm28 13h4v-4h-4v4Zm28-6v-4h-2v6h2v4h2v-6h-2Zm9 2v-6h-2v6h-2v4h4v-4Zm-12 4v-4h-4v4h4ZM0 20h2V0H0v20Zm4 0h4V0H4v20Zm6 0h2V0h-2v20Zm5 0h7V0h-7v20Zm12 0h-3V0h3v20Zm5 0h3v-4h5v-6h-5V6h7V3h3V0h-7v3h-3V0h-3v20ZM52 3v3h-3v3h-4V6h1V3h6Zm23 13h6v4h-6v-4Zm-29-6v3h3v-3h3v3h-2v6h-3v-3h-2v-3h-2v-3h3Zm8 6v3h-2v-3h2Zm3 0v3h2v-3h2v-3h-2v3h-2Zm0 0v-6h-3v6h3Zm4-7V6h2V0h-2v6h-2v3h2Zm5-3v3h-2V6h2Zm2 0h-2V3h2v3Zm-9-3V0h-2v3h2Z"
        }
      )
    }
  );
}
async function loader$3() {
  const allPosts = await getPosts();
  const featured = allPosts.filter((post2) => post2.frontmatter.featured)[0];
  const posts = allPosts.filter((post2) => (featured == null ? void 0 : featured.slug) !== post2.slug);
  return json({ posts, featured });
}
function meta$6() {
  return baseMeta({
    title: "Articles",
    description: "A collection of technical design and development articles. May contain incoherent ramblings."
  });
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Articles$1,
  loader: loader$3,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
const jenkinspipeline = "/assets/jenkinspiepline-mwx7nRh1.jpg";
const jenkinsstage = "/assets/jenkinsstage-H0eDU_4w.jpg";
const video = "_video_1h0ag_1";
const sidebarImages = "_sidebarImages_1h0ag_25";
const sidebarImage = "_sidebarImage_1h0ag_25";
const smartSparrow_module = {
  video,
  sidebarImages,
  sidebarImage
};
lazy(() => import("./earth-6D_Pn4Hy.js").then((module) => ({ default: module.Earth })));
lazy(
  () => import("./earth-6D_Pn4Hy.js").then((module) => ({ default: module.EarthSection }))
);
const title$4 = "Automated Deployment with Jenkins: Streamlining CI/CD Processes";
const description$2 = "As the lead developer, I spearheaded the integration of Jenkins into our CI/CD pipeline, facilitating seamless code deployment, automated testing, and artifact management. This system enhances our development workflow, ensuring high-quality code delivery with minimal manual intervention.";
const roles = [
  "CI/CD Pipeline Design and Implementation",
  "Jenkins Integration for Automated Deployments",
  "Code Quality Assurance through SonarQube",
  "Docker Containerization for Application Deployment",
  "Nexus Artifact Management for Efficient Storage"
];
const meta$5 = () => {
  return baseMeta({ title: title$4, description: description$2, prefix: "Projects" });
};
const jenkins = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const themes2 = ["dark", "light"];
  const handleThemeChange = (index2) => {
    toggleTheme(themes2[index2]);
  };
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          opacity: isDark ? 0.5 : 0.8,
          src: backgroundSpr,
          srcSet: `${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`,
          placeholder: backgroundSprPlaceholder
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: title$4,
          description: description$2,
          url: "https://github.com/Tarunbalaji2003",
          roles
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "The Challenge" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { children: "In today’s fast-paced development environment, manually deploying code and managing releases can lead to delays, inconsistencies, and increased risk of errors. The challenge was to create a robust CI/CD pipeline that automates the build, testing, and deployment processes to enhance efficiency and maintain high-quality standards." })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { light: isDark, children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsx(
          Image$1,
          {
            srcSet: isDark ? `${jenkinspipeline} 1024w, ${jenkinspipeline} 2048w` : `${jenkinspipeline} 1024w, ${jenkinspipeline} 2048w`,
            width: 1024,
            height: 800,
            placeholder: isDark ? jenkinspipeline : jenkinspipeline,
            alt: "CI/CD Pipeline Overview",
            sizes: "100vw"
          },
          theme
        ),
        /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsxs(
          SegmentedControl,
          {
            currentIndex: themes2.indexOf(theme),
            onChange: handleThemeChange,
            children: [
              /* @__PURE__ */ jsx(SegmentedControlOption, { children: "Dark theme" }),
              /* @__PURE__ */ jsx(SegmentedControlOption, { children: "Light theme" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Pipeline Design" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Our CI/CD pipeline integrates Jenkins for continuous integration and delivery, allowing for automatic builds and deployments upon code commits. The pipeline includes automated testing to ensure code quality and stability before deploying to production environments." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsx(
          Image$1,
          {
            raised: true,
            srcSet: isDark ? `${jenkinsstage} 1180w, ${jenkinsstage} 2000w` : `${jenkinsstage} 1280w, ${jenkinsstage} 2560w`,
            width: 1280,
            height: 800,
            placeholder: isDark ? jenkinsstage : jenkinsstage,
            alt: "Jenkins Pipeline Diagram",
            sizes: "100vw"
          },
          theme
        ),
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Our Solution" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "By utilizing Jenkins, we automate the process of building, testing, and deploying our applications. This not only saves time but also ensures that every piece of code is thoroughly tested and vetted before going live. The integration with SonarQube helps maintain high code quality standards, while Docker allows us to package applications consistently across environments. Finally, Nexus acts as a repository for managing our artifacts efficiently." })
        ] }),
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Tech Stack" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: /* @__PURE__ */ jsxs("ol", { children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Jenkins:" }),
              " Used for automating the CI/CD process."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "SonarQube:" }),
              " Integrated for continuous code quality inspection."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Docker:" }),
              " Employed for containerization of applications."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Nexus:" }),
              " Used for artifact management and storage."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Git:" }),
              " Version control for managing source code."
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "AWS:" }),
              " Optional cloud services for scalable deployments."
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Get in Touch" }),
          /* @__PURE__ */ jsxs(ProjectSectionText, { children: [
            /* @__PURE__ */ jsx("p", { children: "If you’re interested in learning more about our automated deployment processes or would like to schedule a demo, here’s how you can reach out:" }),
            /* @__PURE__ */ jsxs("ul", { children: [
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Request a Demo:" }),
                " Contact us to arrange a personalized demonstration of our CI/CD capabilities."
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Contact Us:" }),
                " Send us an email at ",
                /* @__PURE__ */ jsx("a", { href: "mailto:tarunbalaji170703@gmail.com", children: "tarunbalaji170703@gmail.com" }),
                " for inquiries or further information."
              ] }),
              /* @__PURE__ */ jsxs("li", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Follow Us:" }),
                " Stay updated with our latest developments on ",
                /* @__PURE__ */ jsx("a", { href: "https://www.linkedin.com/in/tarunbalaji", children: "LinkedIn" }),
                "."
              ] })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ThemeProvider, { theme: "dark", "data-invert": true })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jenkins,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
async function action({ request, context }) {
  const formData = await request.formData();
  const theme = formData.get("theme");
  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 604800,
      path: "/",
      sameSite: "lax",
      secrets: [context.cloudflare.env.SESSION_SECRET || " "],
      secure: true
    }
  });
  const session = await getSession(request.headers.get("Cookie"));
  session.set("theme", theme);
  return json(
    { status: "success" },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
}
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action
}, Symbol.toStringTag, { value: "Module" }));
const clamp = (number, boundOne, boundTwo) => {
  if (!boundTwo) {
    return Math.max(number, boundOne) === boundOne ? number : boundOne;
  } else if (Math.min(number, boundOne) === number) {
    return boundOne;
  } else if (Math.max(number, boundTwo) === number) {
    return boundTwo;
  }
  return number;
};
const post = "_post_opidu_39";
const header = "_header_opidu_87";
const headerText = "_headerText_opidu_109";
const date = "_date_opidu_157";
const dateText = "_dateText_opidu_181";
const titleWordWrapper = "_titleWordWrapper_opidu_235";
const titleWord = "_titleWord_opidu_235";
const postTitleWord = "_postTitleWord_opidu_1";
const banner = "_banner_opidu_275";
const bannerImage = "_bannerImage_opidu_379";
const bannerImageBlur = "_bannerImageBlur_opidu_381";
const details$1 = "_details_opidu_403";
const arrow = "_arrow_opidu_417";
const timecode = "_timecode_opidu_465";
const wrapper = "_wrapper_opidu_507";
const content$3 = "_content_opidu_531";
const styles$c = {
  post,
  header,
  headerText,
  date,
  dateText,
  titleWordWrapper,
  titleWord,
  postTitleWord,
  banner,
  bannerImage,
  bannerImageBlur,
  details: details$1,
  arrow,
  timecode,
  wrapper,
  content: content$3
};
const Post = ({ children, title: title2, date: date2, banner: banner2, timecode: timecode2 }) => {
  const scrollToHash = useScrollToHash();
  const imageRef = useRef();
  const [dateTime, setDateTime] = useState(null);
  useEffect(() => {
    setDateTime(formatDate(date2));
  }, [date2, dateTime]);
  useParallax(4e-3, (value2) => {
    if (!imageRef.current)
      return;
    imageRef.current.style.setProperty("--blurOpacity", clamp(value2, 0, 1));
  });
  const handleScrollIndicatorClick = (event) => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };
  const placeholder2 = `${banner2 == null ? void 0 : banner2.split(".")[0]}-placeholder.jpg`;
  return /* @__PURE__ */ jsxs("article", { className: styles$c.post, children: [
    /* @__PURE__ */ jsxs(Section, { children: [
      banner2 && /* @__PURE__ */ jsxs("div", { className: styles$c.banner, ref: imageRef, children: [
        /* @__PURE__ */ jsx("div", { className: styles$c.bannerImage, children: /* @__PURE__ */ jsx(Image$1, { role: "presentation", src: banner2, placeholder: placeholder2, alt: "" }) }),
        /* @__PURE__ */ jsx("div", { className: styles$c.bannerImageBlur, children: /* @__PURE__ */ jsx(
          Image$1,
          {
            role: "presentation",
            src: placeholder2,
            placeholder: placeholder2,
            alt: ""
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("header", { className: styles$c.header, children: /* @__PURE__ */ jsxs("div", { className: styles$c.headerText, children: [
        /* @__PURE__ */ jsx(Transition, { in: true, timeout: msToNum$1(tokens.base.durationM), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$c.date, ref: nodeRef, children: [
          /* @__PURE__ */ jsx(Divider, { notchWidth: "64px", notchHeight: "8px", collapsed: !visible }),
          /* @__PURE__ */ jsx(Text, { className: styles$c.dateText, "data-visible": visible, children: dateTime })
        ] }) }),
        /* @__PURE__ */ jsx(Heading, { level: 2, as: "h1", className: styles$c.title, "aria-label": title2, children: title2.split(" ").map((word2, index2) => /* @__PURE__ */ jsx("span", { className: styles$c.titleWordWrapper, children: /* @__PURE__ */ jsxs(
          "span",
          {
            className: styles$c.titleWord,
            style: cssProps$1({ delay: numToMs$1(index2 * 100 + 100) }),
            children: [
              word2,
              index2 !== title2.split(" ").length - 1 ? " " : ""
            ]
          }
        ) }, `${word2}-${index2}`)) }),
        /* @__PURE__ */ jsxs("div", { className: styles$c.details, children: [
          /* @__PURE__ */ jsx(
            Link$1,
            {
              to: "#postContent",
              className: styles$c.arrow,
              "aria-label": "Scroll to post content",
              onClick: handleScrollIndicatorClick,
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  "aria-hidden": true,
                  stroke: "currentColor",
                  width: "43",
                  height: "15",
                  viewBox: "0 0 43 15",
                  children: /* @__PURE__ */ jsx("path", { d: "M1 1l20.5 12L42 1", strokeWidth: "2", fill: "none" })
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("div", { className: styles$c.timecode, children: timecode2 })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Section, { className: styles$c.wrapper, id: "postContent", tabIndex: -1, children: /* @__PURE__ */ jsx(Text, { as: "div", size: "l", className: styles$c.content, children }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const code$1 = "_code_1t56o_3";
const actions = "_actions_1t56o_317";
const copyIcon = "_copyIcon_1t56o_351";
const lang = "_lang_1t56o_395";
const styles$b = {
  code: code$1,
  actions,
  copyIcon,
  lang
};
const Code = (props) => {
  var _a;
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const elementRef = useRef();
  const copyTimeout = useRef();
  const lang2 = (_a = props.className) == null ? void 0 : _a.split("-")[1];
  const handleCopy = () => {
    clearTimeout(copyTimeout);
    navigator.clipboard.writeText(elementRef.current.textContent);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2e3);
  };
  return /* @__PURE__ */ jsxs("div", { className: styles$b.code, "data-theme": theme, children: [
    !!lang2 && /* @__PURE__ */ jsx(Text, { secondary: true, size: "s", className: styles$b.lang, children: lang2 }),
    /* @__PURE__ */ jsx("pre", { ref: elementRef, ...props }),
    /* @__PURE__ */ jsx("div", { className: styles$b.actions, children: /* @__PURE__ */ jsx(Button, { iconOnly: true, onClick: handleCopy, "aria-label": "Copy", children: /* @__PURE__ */ jsxs("span", { className: styles$b.copyIcon, children: [
      /* @__PURE__ */ jsx(Transition, { in: !copied, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx(Icon, { ref: nodeRef, icon: "copy", "data-visible": visible }) }),
      /* @__PURE__ */ jsx(Transition, { in: copied, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx(Icon, { ref: nodeRef, icon: "check", "data-visible": visible }) })
    ] }) }) })
  ] });
};
const list$1 = "_list_eti0y_3";
const item = "_item_eti0y_29";
const styles$a = {
  list: list$1,
  item
};
const List = ({ ordered, children, className, ...rest }) => {
  const Element = ordered ? "ol" : "ul";
  return /* @__PURE__ */ jsx(Element, { className: classes(styles$a.list, className), ...rest, children });
};
const ListItem = ({ children, ...rest }) => {
  return /* @__PURE__ */ jsx("li", { className: styles$a.item, ...rest, children });
};
const heading = "_heading_1ckm2_3";
const paragraph = "_paragraph_1ckm2_27";
const list = "_list_1ckm2_27";
const image$1 = "_image_1ckm2_27";
const headingLink = "_headingLink_1ckm2_37";
const code = "_code_1ckm2_143";
const pre = "_pre_1ckm2_179";
const hr = "_hr_1ckm2_211";
const blockquote = "_blockquote_1ckm2_239";
const strong = "_strong_1ckm2_277";
const embed = "_embed_1ckm2_285";
const styles$9 = {
  heading,
  paragraph,
  list,
  image: image$1,
  headingLink,
  code,
  pre,
  hr,
  blockquote,
  strong,
  embed
};
const PostHeadingLink = ({ id }) => {
  return /* @__PURE__ */ jsx(Link$1, { className: styles$9.headingLink, to: `#${id}`, "aria-label": "Link to heading", children: /* @__PURE__ */ jsx(Icon, { icon: "link" }) });
};
const PostH1 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$9.heading, id, level: 2, as: "h1", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostH2 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$9.heading, id, level: 3, as: "h2", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostH3 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$9.heading, id, level: 4, as: "h3", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostH4 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$9.heading, id, level: 5, as: "h4", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostParagraph = ({ children, ...rest }) => {
  const hasSingleChild = Children.count(children) === 1;
  const firstChild = Children.toArray(children)[0];
  if (hasSingleChild && firstChild.type === PostImage) {
    return children;
  }
  return /* @__PURE__ */ jsx(Text, { className: styles$9.paragraph, size: "l", as: "p", ...rest, children });
};
const PostLink = ({ ...props }) => /* @__PURE__ */ jsx(Link, { ...props });
const PostUl = (props) => {
  return /* @__PURE__ */ jsx(List, { className: styles$9.list, ...props });
};
const PostOl = (props) => {
  return /* @__PURE__ */ jsx(List, { className: styles$9.list, ordered: true, ...props });
};
const PostLi = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx(ListItem, { ...props, children });
};
const PostCode = ({ children, ...rest }) => /* @__PURE__ */ jsx("code", { className: styles$9.code, ...rest, children });
const PostPre = (props) => {
  return /* @__PURE__ */ jsx("div", { className: styles$9.pre, children: /* @__PURE__ */ jsx(Code, { ...props }) });
};
const PostBlockquote = (props) => {
  return /* @__PURE__ */ jsx("blockquote", { className: styles$9.blockquote, ...props });
};
const PostHr = (props) => {
  return /* @__PURE__ */ jsx("hr", { className: styles$9.hr, ...props });
};
const PostStrong = (props) => {
  return /* @__PURE__ */ jsx("strong", { className: styles$9.strong, ...props });
};
const PostImage = ({ src, alt, width, height, ...rest }) => {
  return /* @__PURE__ */ jsx(
    "img",
    {
      className: styles$9.image,
      src,
      loading: "lazy",
      alt,
      width,
      height,
      ...rest
    }
  );
};
const Embed = ({ src }) => {
  return /* @__PURE__ */ jsx("div", { className: styles$9.embed, children: /* @__PURE__ */ jsx("iframe", { src, loading: "lazy", title: "Embed" }) });
};
const postMarkdown = {
  h1: PostH1,
  h2: PostH2,
  h3: PostH3,
  h4: PostH4,
  p: PostParagraph,
  a: PostLink,
  ul: PostUl,
  ol: PostOl,
  li: PostLi,
  pre: PostPre,
  code: PostCode,
  blockquote: PostBlockquote,
  hr: PostHr,
  img: PostImage,
  strong: PostStrong,
  Embed
};
async function loader$2({ request }) {
  const slug = request.url.split("/").at(-1);
  const module = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../articles.demystifying.mdx": () => Promise.resolve().then(() => route1), "../articles.devops.mdx": () => Promise.resolve().then(() => route5) }), `../articles.${slug}.mdx`);
  const text2 = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../articles.demystifying.mdx": () => import("./articles.demystifying-D761RfpE.js"), "../articles.devops.mdx": () => import("./articles.devops-D9DJwgqq.js") }), `../articles.${slug}.mdx`);
  const readTime = readingTime(text2.default);
  const ogImage = `${config.url}/static/${slug}-og.jpg`;
  return json({
    ogImage,
    frontmatter: module.frontmatter,
    timecode: formatTimecode(readTime)
  });
}
function meta$4({ data }) {
  const { title: title2, abstract } = data.frontmatter;
  return baseMeta({ title: title2, description: abstract, prefix: "", ogImage: data.ogImage });
}
function Articles() {
  const { frontmatter: frontmatter2, timecode: timecode2 } = useLoaderData();
  return /* @__PURE__ */ jsx(MDXProvider, { components: postMarkdown, children: /* @__PURE__ */ jsx(Post, { ...frontmatter2, timecode: timecode2, children: /* @__PURE__ */ jsx(Outlet, {}) }) });
}
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Articles,
  loader: loader$2,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
const textarea = "_textarea_13d9g_3";
const styles$8 = {
  textarea
};
const TextArea = ({
  className,
  resize = "none",
  value: value2,
  onChange,
  minRows = 1,
  maxRows,
  ...rest
}) => {
  const [rows, setRows] = useState(minRows);
  const [textareaDimensions, setTextareaDimensions] = useState();
  const textareaRef = useRef();
  useEffect(() => {
    const style = getComputedStyle(textareaRef.current);
    const lineHeight = parseInt(style.lineHeight, 10);
    const paddingHeight = parseInt(style.paddingTop, 10) + parseInt(style.paddingBottom, 10);
    setTextareaDimensions({ lineHeight, paddingHeight });
  }, []);
  const handleChange = (event) => {
    onChange(event);
    const { lineHeight, paddingHeight } = textareaDimensions;
    const previousRows = event.target.rows;
    event.target.rows = minRows;
    const currentRows = ~~((event.target.scrollHeight - paddingHeight) / lineHeight);
    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }
    if (maxRows && currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }
    setRows(maxRows && currentRows > maxRows ? maxRows : currentRows);
  };
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: classes(styles$8.textarea, className),
      ref: textareaRef,
      onChange: handleChange,
      style: cssProps$1({ resize }),
      rows,
      value: value2,
      ...rest
    }
  );
};
const container = "_container_17spy_3";
const content$2 = "_content_17spy_31";
const input$1 = "_input_17spy_41";
const root = "_root_17spy_1";
const underline = "_underline_17spy_109";
const label = "_label_17spy_145";
const error = "_error_17spy_189";
const errorMessage = "_errorMessage_17spy_221";
const styles$7 = {
  container,
  content: content$2,
  input: input$1,
  root,
  underline,
  label,
  error,
  errorMessage
};
const Input = ({
  id,
  label: label2,
  value: value2,
  multiline,
  className,
  style,
  error: error2,
  onBlur,
  autoComplete,
  required,
  maxLength,
  type,
  onChange,
  name: name2,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const generatedId = useId();
  const errorRef = useRef();
  const inputId = id || `${generatedId}input`;
  const labelId = `${inputId}-label`;
  const errorId = `${inputId}-error`;
  const InputElement = multiline ? TextArea : "input";
  const handleBlur = (event) => {
    setFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: classes(styles$7.container, className),
      "data-error": !!error2,
      style,
      ...rest,
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles$7.content, children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              className: styles$7.label,
              "data-focused": focused,
              "data-filled": !!value2,
              id: labelId,
              htmlFor: inputId,
              children: label2
            }
          ),
          /* @__PURE__ */ jsx(
            InputElement,
            {
              className: styles$7.input,
              id: inputId,
              "aria-labelledby": labelId,
              "aria-describedby": error2 ? errorId : void 0,
              onFocus: () => setFocused(true),
              onBlur: handleBlur,
              value: value2,
              onChange,
              autoComplete,
              required,
              maxLength,
              type,
              name: name2
            }
          ),
          /* @__PURE__ */ jsx("div", { className: styles$7.underline, "data-focused": focused })
        ] }),
        /* @__PURE__ */ jsx(Transition, { unmount: true, in: error2, timeout: msToNum$1(tokens.base.durationM), children: ({ visible, nodeRef }) => {
          var _a;
          return /* @__PURE__ */ jsx(
            "div",
            {
              ref: nodeRef,
              className: styles$7.error,
              "data-visible": visible,
              id: errorId,
              role: "alert",
              style: cssProps$1({
                height: visible ? (_a = errorRef.current) == null ? void 0 : _a.getBoundingClientRect().height : 0
              }),
              children: /* @__PURE__ */ jsxs("div", { className: styles$7.errorMessage, ref: errorRef, children: [
                /* @__PURE__ */ jsx(Icon, { icon: "error" }),
                error2
              ] })
            }
          );
        } })
      ]
    }
  );
};
const contact = "_contact_1p6je_1";
const form = "_form_1p6je_35";
const title$3 = "_title_1p6je_59";
const divider = "_divider_1p6je_119";
const input = "_input_1p6je_195";
const botkiller = "_botkiller_1p6je_279";
const button$2 = "_button_1p6je_287";
const complete = "_complete_1p6je_407";
const completeTitle = "_completeTitle_1p6je_429";
const completeText = "_completeText_1p6je_467";
const completeButton = "_completeButton_1p6je_505";
const formError = "_formError_1p6je_557";
const formErrorContent = "_formErrorContent_1p6je_581";
const formErrorMessage = "_formErrorMessage_1p6je_589";
const formErrorIcon = "_formErrorIcon_1p6je_605";
const footer = "_footer_1p6je_615";
const styles$6 = {
  contact,
  form,
  title: title$3,
  divider,
  input,
  botkiller,
  button: button$2,
  complete,
  completeTitle,
  completeText,
  completeButton,
  formError,
  formErrorContent,
  formErrorMessage,
  formErrorIcon,
  footer
};
const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;
const meta$3 = () => {
  return [
    {
      title: "Contact"
    },
    {
      name: "description",
      content: "Send me a message if you’re interested in discussing a project or if you just want to say hi"
    }
  ];
};
const Contact = () => {
  const errorRef = useRef();
  const email = useFormInput("");
  const message = useFormInput("");
  const initDelay2 = tokens.base.durationS;
  const [actionData, setActionData] = useState(null);
  const [sending, setSending] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    const emailValue = email.value;
    const messageValue = message.value;
    const errors = {};
    if (!emailValue || !EMAIL_PATTERN.test(emailValue)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!messageValue) {
      errors.message = "Please enter a message.";
    }
    if (emailValue.length > MAX_EMAIL_LENGTH) {
      errors.email = `Email address must be shorter than ${MAX_EMAIL_LENGTH} characters.`;
    }
    if (messageValue.length > MAX_MESSAGE_LENGTH) {
      errors.message = `Message must be shorter than ${MAX_MESSAGE_LENGTH} characters.`;
    }
    if (Object.keys(errors).length > 0) {
      setActionData({ errors });
      setSending(false);
      return;
    }
    emailjs.send(
      "service_kf9fo3d",
      "template_nh0zuvc",
      {
        from_name: emailValue,
        message: messageValue
      },
      "ap_dt1Z_0-_sKfc56"
      // Replace with your EmailJS public key
    ).then(
      (result) => {
        console.log(result.text);
        setActionData({ success: true });
      },
      (error2) => {
        console.error(error2.text);
        setActionData({ errors: { message: "Failed to send message. Please try again later." } });
      }
    ).finally(() => setSending(false));
  };
  return /* @__PURE__ */ jsxs(Section, { className: styles$6.contact, children: [
    /* @__PURE__ */ jsx(Transition, { unmount: true, in: !(actionData == null ? void 0 : actionData.success), timeout: 1600, children: ({ status, nodeRef }) => {
      var _a, _b;
      return /* @__PURE__ */ jsxs("form", { className: styles$6.form, method: "post", ref: nodeRef, onSubmit: handleSubmit, children: [
        /* @__PURE__ */ jsx(
          Heading,
          {
            className: styles$6.title,
            "data-status": status,
            level: 3,
            as: "h1",
            style: getDelay(tokens.base.durationXS, initDelay2, 0.3),
            children: /* @__PURE__ */ jsx(DecoderText, { text: "Say hello", start: status !== "exited", delay: 300 })
          }
        ),
        /* @__PURE__ */ jsx(
          Divider,
          {
            className: styles$6.divider,
            "data-status": status,
            style: getDelay(tokens.base.durationXS, initDelay2, 0.4)
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            required: true,
            className: styles$6.input,
            "data-status": status,
            style: getDelay(tokens.base.durationXS, initDelay2),
            autoComplete: "email",
            label: "Your email",
            type: "email",
            name: "email",
            maxLength: MAX_EMAIL_LENGTH,
            ...email
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            required: true,
            multiline: true,
            className: styles$6.input,
            "data-status": status,
            style: getDelay(tokens.base.durationS, initDelay2),
            autoComplete: "off",
            label: "Message",
            name: "message",
            maxLength: MAX_MESSAGE_LENGTH,
            ...message
          }
        ),
        (actionData == null ? void 0 : actionData.errors) && /* @__PURE__ */ jsx("div", { className: styles$6.formError, ref: errorRef, children: /* @__PURE__ */ jsx("div", { className: styles$6.formErrorContent, children: /* @__PURE__ */ jsxs("div", { className: styles$6.formErrorMessage, children: [
          /* @__PURE__ */ jsx(Icon, { className: styles$6.formErrorIcon, icon: "error" }),
          (_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.email,
          (_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.message
        ] }) }) }),
        /* @__PURE__ */ jsx(
          Button,
          {
            className: styles$6.button,
            "data-status": status,
            "data-sending": sending,
            style: getDelay(tokens.base.durationM, initDelay2),
            disabled: sending,
            loading: sending,
            loadingText: "Sending...",
            icon: "send",
            type: "submit",
            children: "Send message"
          }
        )
      ] });
    } }),
    /* @__PURE__ */ jsx(Transition, { unmount: true, in: actionData == null ? void 0 : actionData.success, children: ({ status, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$6.complete, "aria-live": "polite", ref: nodeRef, children: [
      /* @__PURE__ */ jsx(
        Heading,
        {
          level: 3,
          as: "h3",
          className: styles$6.completeTitle,
          "data-status": status,
          children: "Message Sent"
        }
      ),
      /* @__PURE__ */ jsx(
        Text,
        {
          size: "l",
          as: "p",
          className: styles$6.completeText,
          "data-status": status,
          style: getDelay(tokens.base.durationXS),
          children: "I’ll get back to you within a couple days, sit tight"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          secondary: true,
          iconHoverShift: true,
          className: styles$6.completeButton,
          "data-status": status,
          style: getDelay(tokens.base.durationM),
          href: "/",
          icon: "chevron-right",
          children: "Back to homepage"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(Footer, { className: styles$6.footer })
  ] });
};
function msToNum(ms) {
  return parseFloat(ms.replace("ms", ""));
}
function numToMs(num) {
  return `${num}ms`;
}
function cssProps(props) {
  return Object.keys(props).reduce((acc, key) => {
    acc[key] = props[key];
    return acc;
  }, {});
}
function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Contact,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
function subscribe() {
  return () => {
  };
}
function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
const intro = "_intro_100iz_1";
const text = "_text_100iz_17";
const name = "_name_100iz_71";
const title$2 = "_title_100iz_147";
const row$1 = "_row_100iz_155";
const word = "_word_100iz_213";
const introTextReveal = "_introTextReveal_100iz_1";
const line = "_line_100iz_365";
const introLine = "_introLine_100iz_1";
const scrollIndicator = "_scrollIndicator_100iz_463";
const introScrollIndicator = "_introScrollIndicator_100iz_1";
const mobileScrollIndicator = "_mobileScrollIndicator_100iz_597";
const introMobileScrollIndicator = "_introMobileScrollIndicator_100iz_1";
const styles$5 = {
  intro,
  text,
  name,
  title: title$2,
  row: row$1,
  word,
  introTextReveal,
  line,
  introLine,
  scrollIndicator,
  introScrollIndicator,
  mobileScrollIndicator,
  introMobileScrollIndicator
};
const DisplacementSphere = lazy(
  () => import("./displacement-sphere-Bf3PUvf8.js").then((module) => ({ default: module.DisplacementSphere }))
);
function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const { theme } = useTheme();
  const { disciplines: disciplines2 } = config;
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const prevTheme = usePrevious(theme);
  const introLabel = [disciplines2.slice(0, -1).join(", "), disciplines2.slice(-1)[0]].join(
    ", and "
  );
  const currentDiscipline = disciplines2.find((item2, index2) => index2 === disciplineIndex);
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();
  const isHydrated = useHydrated();
  useInterval(
    () => {
      const index2 = (disciplineIndex + 1) % disciplines2.length;
      setDisciplineIndex(index2);
    },
    5e3,
    theme
  );
  useEffect(() => {
    if (prevTheme && prevTheme !== theme) {
      setDisciplineIndex(0);
    }
  }, [theme, prevTheme]);
  const handleScrollClick = (event) => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$5.intro,
      as: "section",
      ref: sectionRef,
      id,
      "aria-labelledby": titleId,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx(Transition, { in: true, timeout: 3e3, children: ({ visible, status }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        isHydrated && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(DisplacementSphere, {}) }),
        /* @__PURE__ */ jsxs("header", { className: styles$5.text, children: [
          /* @__PURE__ */ jsx("h1", { className: styles$5.name, "data-visible": visible, id: titleId, children: /* @__PURE__ */ jsx(DecoderText, { text: config.name, delay: 500 }) }),
          /* @__PURE__ */ jsxs(Heading, { level: 0, as: "h2", className: styles$5.title, children: [
            /* @__PURE__ */ jsx(VisuallyHidden, { className: styles$5.label, children: `${config.role} + ${introLabel}` }),
            /* @__PURE__ */ jsxs("span", { "aria-hidden": true, className: styles$5.row, children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: styles$5.word,
                  "data-status": status,
                  style: cssProps$1({ delay: tokens.base.durationXS }),
                  children: config.role
                }
              ),
              /* @__PURE__ */ jsx("span", { className: styles$5.line, "data-status": status })
            ] }),
            /* @__PURE__ */ jsx("div", { className: styles$5.row, children: disciplines2.map((item2) => /* @__PURE__ */ jsx(
              Transition,
              {
                unmount: true,
                in: item2 === currentDiscipline,
                timeout: { enter: 3e3, exit: 2e3 },
                children: ({ status: status2, nodeRef }) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    "aria-hidden": true,
                    ref: nodeRef,
                    className: styles$5.word,
                    "data-plus": true,
                    "data-status": status2,
                    style: cssProps$1({ delay: tokens.base.durationL }),
                    children: item2
                  }
                )
              },
              item2
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Link$1,
          {
            to: "/#project-1",
            className: styles$5.scrollIndicator,
            "data-status": status,
            "data-hidden": scrollIndicatorHidden,
            onClick: handleScrollClick,
            children: /* @__PURE__ */ jsx(VisuallyHidden, { children: "Scroll to projects" })
          }
        ),
        /* @__PURE__ */ jsxs(
          Link$1,
          {
            to: "/#project-1",
            className: styles$5.mobileScrollIndicator,
            "data-status": status,
            "data-hidden": scrollIndicatorHidden,
            onClick: handleScrollClick,
            children: [
              /* @__PURE__ */ jsx(VisuallyHidden, { children: "Scroll to projects" }),
              /* @__PURE__ */ jsx(
                "svg",
                {
                  "aria-hidden": true,
                  stroke: "currentColor",
                  width: "43",
                  height: "15",
                  viewBox: "0 0 43 15",
                  children: /* @__PURE__ */ jsx("path", { d: "M1 1l20.5 12L42 1", strokeWidth: "2", fill: "none" })
                }
              )
            ]
          }
        )
      ] }) }, theme)
    }
  );
}
const tarun = "/assets/tarun-BRcqi0IW.jpg";
const katakana = "/assets/katakana-BzoNNmI1.svg";
const profile = "_profile_1pmvm_1";
const content$1 = "_content_1pmvm_73";
const column = "_column_1pmvm_99";
const title$1 = "_title_1pmvm_117";
const description$1 = "_description_1pmvm_139";
const tag = "_tag_1pmvm_159";
const tagText = "_tagText_1pmvm_185";
const image = "_image_1pmvm_227";
const svg$1 = "_svg_1pmvm_237";
const button$1 = "_button_1pmvm_269";
const styles$4 = {
  profile,
  content: content$1,
  column,
  title: title$1,
  description: description$1,
  tag,
  tagText,
  image,
  svg: svg$1,
  button: button$1
};
const ProfileText = ({ visible, titleId }) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Heading, { className: styles$4.title, "data-visible": visible, level: 3, id: titleId, children: /* @__PURE__ */ jsx(DecoderText, { text: "Hi there", start: visible, delay: 500 }) }),
  /* @__PURE__ */ jsx(Text, { className: styles$4.description, "data-visible": visible, size: "l", as: "p", children: "I’m Tarun, currently living in Tiruppur, pursuing my B.Tech (Hons) in Artificial Intelligence & Data Science. My work spans across cloud computing, AI, and DevOps, with projects in areas like Kubernetes, CI/CD pipelines, and number plate recognition systems. I’m passionate about building scalable solutions and leveraging AI, generative AI, Docker, AWS, and Kubernetes to solve real-world problems." }),
  /* @__PURE__ */ jsx(Text, { className: styles$4.description, "data-visible": visible, size: "l", as: "p", children: "In my free time, I enjoy working on personal projects, practicing my coding skills, and exploring cutting-edge AI technologies. I’m always keen to hear about exciting projects, so feel free to reach out!" })
] });
const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$4.profile,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      as: "section",
      id,
      ref: sectionRef,
      "aria-labelledby": titleId,
      tabIndex: -1,
      children: /* @__PURE__ */ jsx(Transition, { in: visible || focused, timeout: 0, children: ({ visible: visible2, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$4.content, ref: nodeRef, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$4.column, children: [
          /* @__PURE__ */ jsx(ProfileText, { visible: visible2, titleId }),
          /* @__PURE__ */ jsx(
            Button,
            {
              secondary: true,
              className: styles$4.button,
              "data-visible": visible2,
              href: "/contact",
              icon: "send",
              children: "Send me a message"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$4.column, children: [
          /* @__PURE__ */ jsxs("div", { className: styles$4.tag, "aria-hidden": true, children: [
            /* @__PURE__ */ jsx(
              Divider,
              {
                notchWidth: "64px",
                notchHeight: "8px",
                collapsed: !visible2,
                collapseDelay: 1e3
              }
            ),
            /* @__PURE__ */ jsx("div", { className: styles$4.tagText, "data-visible": visible2, children: "About me" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: styles$4.image, children: [
            /* @__PURE__ */ jsx(
              Image$1,
              {
                reveal: true,
                delay: 100,
                placeholder: tarun,
                srcSet: `${tarun} 480w, ${tarun}} 960w`,
                width: 960,
                height: 1280,
                sizes: `(max-width: ${media.mobile}px) 100vw, 480px`,
                alt: "Me in the seashore..."
              }
            ),
            /* @__PURE__ */ jsx("svg", { className: styles$4.svg, "data-visible": visible2, viewBox: "0 0 136 766", children: /* @__PURE__ */ jsx("use", { href: `${katakana}#katakana-profile` }) })
          ] })
        ] })
      ] }) })
    }
  );
};
const iphone11 = "/assets/iphone-11-DGIHa_Ph.glb";
const macbookPro = "/assets/macbook-pro-DZn-FKKF.glb";
const ModelAnimationType = {
  SpringUp: "spring-up",
  LaptopOpen: "laptop-open"
};
const deviceModels = {
  phone: {
    url: iphone11,
    width: 374,
    height: 512,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.SpringUp
  },
  laptop: {
    url: macbookPro,
    width: 1280,
    height: 800,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.LaptopOpen
  }
};
const summary = "_summary_4rpvx_1";
const content = "_content_4rpvx_69";
const details = "_details_4rpvx_129";
const preview = "_preview_4rpvx_155";
const model = "_model_4rpvx_175";
const loader$1 = "_loader_4rpvx_283";
const svg = "_svg_4rpvx_301";
const index = "_index_4rpvx_383";
const indexNumber = "_indexNumber_4rpvx_401";
const title = "_title_4rpvx_443";
const description = "_description_4rpvx_481";
const button = "_button_4rpvx_519";
const styles$3 = {
  summary,
  content,
  details,
  preview,
  model,
  loader: loader$1,
  svg,
  index,
  indexNumber,
  title,
  description,
  button
};
const Model = lazy(
  () => import("./index-B525xMHQ.js").then((module) => ({ default: module.Model }))
);
function ProjectSummary({
  id,
  visible: sectionVisible,
  sectionRef,
  index: index2,
  title: title2,
  description: description2,
  model: model2,
  buttonText,
  buttonLink,
  alternate,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const { theme } = useTheme();
  const { width } = useWindowSize();
  const isHydrated = useHydrated();
  const titleId = `${id}-title`;
  const isMobile = width <= media.tablet;
  const svgOpacity = theme === "light" ? 0.7 : 1;
  const indexText = index2 < 10 ? `0${index2}` : index2;
  const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;
  function handleModelLoad() {
    setModelLoaded(true);
  }
  function renderKatakana(device, visible) {
    return /* @__PURE__ */ jsx(
      "svg",
      {
        type: "project",
        "data-visible": visible && modelLoaded,
        "data-light": theme === "light",
        style: cssProps$1({ opacity: svgOpacity }),
        className: styles$3.svg,
        "data-device": device,
        viewBox: "0 0 751 136",
        children: /* @__PURE__ */ jsx("use", { href: `${katakana}#katakana-project` })
      }
    );
  }
  function renderDetails(visible) {
    return /* @__PURE__ */ jsxs("div", { className: styles$3.details, children: [
      /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$3.index, children: [
        /* @__PURE__ */ jsx(
          Divider,
          {
            notchWidth: "64px",
            notchHeight: "8px",
            collapsed: !visible,
            collapseDelay: 1e3
          }
        ),
        /* @__PURE__ */ jsx("span", { className: styles$3.indexNumber, "data-visible": visible, children: indexText })
      ] }),
      /* @__PURE__ */ jsx(
        Heading,
        {
          level: 3,
          as: "h2",
          className: styles$3.title,
          "data-visible": visible,
          id: titleId,
          children: title2
        }
      ),
      /* @__PURE__ */ jsx(Text, { className: styles$3.description, "data-visible": visible, as: "p", children: description2 }),
      /* @__PURE__ */ jsx("div", { className: styles$3.button, "data-visible": visible, children: /* @__PURE__ */ jsx(Button, { iconHoverShift: true, href: buttonLink, iconEnd: "arrow-right", children: buttonText }) })
    ] });
  }
  function renderPreview(visible) {
    return /* @__PURE__ */ jsxs("div", { className: styles$3.preview, children: [
      model2.type === "laptop" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
        renderKatakana("laptop", visible),
        /* @__PURE__ */ jsxs("div", { className: styles$3.model, "data-device": "laptop", children: [
          !modelLoaded && /* @__PURE__ */ jsx(Loader, { center: true, className: styles$3.loader, "data-visible": visible }),
          isHydrated && visible && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
            Model,
            {
              alt: model2.alt,
              cameraPosition: { x: 0, y: 0, z: 8 },
              showDelay: 700,
              onLoad: handleModelLoad,
              show: visible,
              models: [
                {
                  ...deviceModels.laptop,
                  texture: {
                    ...model2.textures[0],
                    sizes: laptopSizes
                  }
                }
              ]
            }
          ) })
        ] })
      ] }),
      model2.type === "phone" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
        renderKatakana("phone", visible),
        /* @__PURE__ */ jsxs("div", { className: styles$3.model, "data-device": "phone", children: [
          !modelLoaded && /* @__PURE__ */ jsx(Loader, { center: true, className: styles$3.loader, "data-visible": visible }),
          isHydrated && visible && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
            Model,
            {
              alt: model2.alt,
              cameraPosition: { x: 0, y: 0, z: 11.5 },
              showDelay: 300,
              onLoad: handleModelLoad,
              show: visible,
              models: [
                {
                  ...deviceModels.phone,
                  position: { x: -0.6, y: 1.1, z: 0 },
                  texture: {
                    ...model2.textures[0],
                    sizes: phoneSizes
                  }
                },
                {
                  ...deviceModels.phone,
                  position: { x: 0.6, y: -0.5, z: 0.3 },
                  texture: {
                    ...model2.textures[1],
                    sizes: phoneSizes
                  }
                }
              ]
            }
          ) })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$3.summary,
      "data-alternate": alternate,
      "data-first": index2 === 1,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      as: "section",
      "aria-labelledby": titleId,
      ref: sectionRef,
      id,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx("div", { className: styles$3.content, children: /* @__PURE__ */ jsx(Transition, { in: sectionVisible || focused, children: ({ visible }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        !alternate && !isMobile && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          renderDetails(visible),
          renderPreview(visible)
        ] }),
        (alternate || isMobile) && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          renderPreview(visible),
          renderDetails(visible)
        ] })
      ] }) }) })
    }
  );
}
const home = "_home_1xwlb_9";
const outer = "_outer_1xwlb_19";
const projectSummary = "_projectSummary_1xwlb_41";
const styles$2 = {
  home,
  outer,
  projectSummary
};
const alertmail = "/assets/alertmail-1Q223vcY.jpg";
const alertmanager = "/assets/alertmanager-BpkHHhcJ.jpg";
const links = () => {
  return [
    {
      rel: "prefetch",
      href: "/draco/draco_wasm_wrapper.js",
      as: "script",
      type: "text/javascript",
      importance: "low"
    },
    {
      rel: "prefetch",
      href: "/draco/draco_decoder.wasm",
      as: "fetch",
      type: "application/wasm",
      importance: "low"
    }
  ];
};
const meta$2 = () => {
  return baseMeta({
    title: " Developer",
    description: `Design portfolio of ${config.name} — a DevSecOps engineer.`
  });
};
const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro2 = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details2 = useRef();
  useEffect(() => {
    const sections = [intro2, projectOne, projectTwo, projectThree, details2];
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            const section2 = entry2.target;
            observer.unobserve(section2);
            if (visibleSections.includes(section2))
              return;
            setVisibleSections((prevSections) => [...prevSections, section2]);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    const indicatorObserver = new IntersectionObserver(
      ([entry2]) => {
        setScrollIndicatorHidden(!entry2.isIntersecting);
      },
      { rootMargin: "-100% 0px 0px 0px" }
    );
    sections.forEach((section2) => {
      sectionObserver.observe(section2.current);
    });
    indicatorObserver.observe(intro2.current);
    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);
  return /* @__PURE__ */ jsxs("div", { className: styles$2.home, children: [
    /* @__PURE__ */ jsx(
      Intro,
      {
        id: "intro",
        sectionRef: intro2,
        scrollIndicatorHidden
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "project-1",
        sectionRef: projectOne,
        visible: visibleSections.includes(projectOne.current),
        index: 1,
        title: "Real-Time License Plate Detection Redefined",
        description: "Delivers real-time, high-accuracy license plate detection with scalable deployment and instant alerts",
        buttonText: "View project",
        buttonLink: "/projects/numberplate",
        model: {
          type: "laptop",
          alt: "Demo",
          textures: [
            {
              srcSet: `${sprTextureLarge} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "project-2",
        alternate: true,
        sectionRef: projectTwo,
        visible: visibleSections.includes(projectTwo.current),
        index: 2,
        title: "Prometheus Alert Manager",
        description: "Configuration and development of a system using Prometheus to monitor metrics and send alerts via email.",
        buttonText: "Click for Github link",
        buttonLink: "",
        model: {
          type: "phone",
          alt: "App login screen",
          textures: [
            {
              srcSet: `${alertmanager} 375w, ${alertmanager} 750w`,
              placeholder: alertmanager
            },
            {
              srcSet: `${alertmail} 375w, ${alertmail} 750w`,
              placeholder: alertmail
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "project-3",
        sectionRef: projectThree,
        visible: visibleSections.includes(projectThree.current),
        index: 3,
        title: "Automated Deployment with Jenkins",
        description: "Streamlining CI/CD processes with Jenkins, SonarQube, Docker, and Nexus for efficient code deployment and artifact management.",
        buttonText: "View project",
        buttonLink: "/projects/jenkins",
        model: {
          type: "laptop",
          alt: "Jenkins pipeline stages for automated deployment",
          textures: [
            {
              srcSet: `${jenkinsstage} 800w, ${jenkinsstage} 1920w`,
              placeholder: jenkinsstage
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(
      Profile,
      {
        sectionRef: details2,
        visible: visibleSections.includes(details2.current),
        id: "details"
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home,
  links,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
const usesBackgroundPlaceholder = "/assets/uses-background-placeholder-ppC4yTdE.jpg";
const usesBackground = "/assets/uses-background-DVBwh5G1.mp4";
const table = "_table_1pu3l_3";
const row = "_row_1pu3l_13";
const head = "_head_1pu3l_31";
const headCell = "_headCell_1pu3l_41";
const cell = "_cell_1pu3l_51";
const styles$1 = {
  table,
  row,
  head,
  headCell,
  cell
};
const Table = ({ children }) => /* @__PURE__ */ jsx("table", { className: styles$1.table, children });
const TableRow = ({ children }) => /* @__PURE__ */ jsx("tr", { className: styles$1.row, children });
const TableBody = ({ children }) => /* @__PURE__ */ jsx("tbody", { className: styles$1.body, children });
const TableHeadCell = ({ children }) => /* @__PURE__ */ jsx("th", { className: styles$1.headCell, children });
const TableCell = ({ children }) => /* @__PURE__ */ jsx("td", { className: styles$1.cell, children });
const uses = "_uses_1mnj9_1";
const section = "_section_1mnj9_9";
const styles = {
  uses,
  section
};
const meta$1 = () => {
  return baseMeta({
    title: "Uses",
    description: "A list of hardware and software I use to do my thing"
  });
};
const Uses = () => {
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { className: styles.uses, children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          src: usesBackground,
          placeholder: usesBackgroundPlaceholder,
          opacity: 0.7
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: "Uses",
          description: "A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things. And yeah, that is a Johnny Mnemonic GIF in the background."
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "none", className: styles.section, children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { width: "m", children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Design" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { as: "div", children: /* @__PURE__ */ jsx(List, { children: /* @__PURE__ */ jsxs(ListItem, { children: [
          "Any motion graphics I create are created in Adobe After Effects. So far I haven’t found a non-Adobe product that’s as good. If anyone has suggestions please ",
          /* @__PURE__ */ jsx(Link, { href: "/contact", children: "message me" }),
          "."
        ] }) }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "none", className: styles.section, children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { width: "m", children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Development" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { as: "div", children: /* @__PURE__ */ jsxs(List, { children: [
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "I use ",
            /* @__PURE__ */ jsx(Link, { href: "https://vscodium.com/", children: "VSCodium" }),
            " as my text editor, with the Tokyo Night theme and Operator Mono as my typeface of choice."
          ] }),
          /* @__PURE__ */ jsx(ListItem, { children: "Firefox is my main browser for both development and general use." }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            /* @__PURE__ */ jsx(Link, { href: "https://reactjs.org/", children: "React" }),
            " is my front end Javascript library of choice. The component-centric mental model is the first thing that truly made sense to me as a designer."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "For 3D effects and image shaders I use",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://threejs.org/", children: "three.js" }),
            ". It has a bit of a learning curve but you can do some really powerful stuff with it."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "For CSS I’ve used a myriad pre-processors and css-in-js solutions like styled-components, but these days I’m using vanilla CSS with",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://postcss.org/", children: "PostCSS" }),
            " to get upcoming CSS features today."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "For Javascript animations I use",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.framer.com/motion/", children: "Framer Motion" }),
            ", it’s a great way to add spring animations to React and three.js."
          ] })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "none", className: styles.section, children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { stretch: true, width: "m", children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Hardware" }),
        /* @__PURE__ */ jsx(Table, { children: /* @__PURE__ */ jsxs(TableBody, { children: [
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Laptop" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Dell insiprion" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Operating system" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Windows 11, Ubuntu 22" })
          ] })
        ] }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Uses,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
async function loader() {
  throw new Response(null, { status: 404, statusText: "Not found" });
}
const meta = () => {
  return [{ title: "404 | Redacted" }];
};
function ErrorBoundary() {
  const error2 = useRouteError();
  return /* @__PURE__ */ jsx(Error$1, { error: error2 });
}
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  loader,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-rfTj1TMs.js?client-route=1", "imports": ["/assets/jsx-runtime-BfF-YriY.js", "/assets/components-7U91X0lH.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-BDa1rTma.js?client-route=1", "imports": ["/assets/jsx-runtime-BfF-YriY.js", "/assets/components-7U91X0lH.js", "/assets/heading-B2sVkuwd.js", "/assets/visually-hidden-DQc8RACT.js", "/assets/use-spring-CcAbRleG.js", "/assets/decoder-text-B3P9jeDG.js", "/assets/image-sm8zEGQ6.js", "/assets/error-yoh6JAus.js", "/assets/useScrollToHash-B_IqptpU.js", "/assets/useWindowSize-CCgmKmhO.js", "/assets/config-C6BTT1dW.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/image-cNt8ozvO.css", "/assets/visually-hidden-NrYl-3i8.css", "/assets/decoder-text-BAWoexd9.css", "/assets/error-Cq_yTnRj.css", "/assets/root-VoCZYOo5.css"] }, "routes/articles.demystifying": { "id": "routes/articles.demystifying", "parentId": "routes/articles", "path": "demystifying", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/articles.demystifying-BXIVZr3X.js?client-route=1", "imports": ["/assets/jsx-runtime-BfF-YriY.js", "/assets/index-DUWVTWgJ.js"], "css": [] }, "routes/projects.numberplate": { "id": "routes/projects.numberplate", "parentId": "root", "path": "projects/numberplate", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-D0ehrcd_.js?client-route=1", "imports": ["/assets/jsx-runtime-BfF-YriY.js", "/assets/components-7U91X0lH.js", "/assets/heading-B2sVkuwd.js", "/assets/visually-hidden-DQc8RACT.js", "/assets/config-C6BTT1dW.js", "/assets/image-sm8zEGQ6.js", "/assets/section-DMpVui18.js", "/assets/useParallax-DgEY-Xo-.js", "/assets/segmented-control-DoCJiWxP.js", "/assets/license-plate-output-DAPrN-Lt.js", "/assets/project-D_9FNF9d.js", "/assets/meta-DxDjxI8D.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/visually-hidden-NrYl-3i8.css", "/assets/segmented-control-DiF3ckgv.css", "/assets/section-CErneW72.css", "/assets/image-cNt8ozvO.css", "/assets/project-CMTDR1YT.css", "/assets/route-C0nMciqU.css"] }, "routes/articles_._index": { "id": "routes/articles_._index", "parentId": "root", "path": "articles", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-CuZYteRY.js?client-route=1", "imports": ["/assets/config-C6BTT1dW.js", "/assets/jsx-runtime-BfF-YriY.js", "/assets/components-7U91X0lH.js", "/assets/heading-B2sVkuwd.js", "/assets/visually-hidden-DQc8RACT.js", "/assets/use-spring-CcAbRleG.js", "/assets/meta-DxDjxI8D.js", "/assets/decoder-text-B3P9jeDG.js", "/assets/divider-BHVqM2G5.js", "/assets/section-DMpVui18.js", "/assets/image-sm8zEGQ6.js", "/assets/useWindowSize-CCgmKmhO.js", "/assets/date-DvyCAN0s.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/visually-hidden-NrYl-3i8.css", "/assets/decoder-text-BAWoexd9.css", "/assets/divider-BGrE333F.css", "/assets/section-CErneW72.css", "/assets/image-cNt8ozvO.css", "/assets/route-Cl8BF6JV.css"] }, "routes/projects.jenkins": { "id": "routes/projects.jenkins", "parentId": "root", "path": "projects/jenkins", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-uERfvlXb.js?client-route=1", "imports": ["/assets/jsx-runtime-BfF-YriY.js", "/assets/components-7U91X0lH.js", "/assets/heading-B2sVkuwd.js", "/assets/visually-hidden-DQc8RACT.js", "/assets/config-C6BTT1dW.js", "/assets/image-sm8zEGQ6.js", "/assets/section-DMpVui18.js", "/assets/useParallax-DgEY-Xo-.js", "/assets/segmented-control-DoCJiWxP.js", "/assets/jenkinsstage-CJ9X_G6q.js", "/assets/project-D_9FNF9d.js", "/assets/meta-DxDjxI8D.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/visually-hidden-NrYl-3i8.css", "/assets/segmented-control-DiF3ckgv.css", "/assets/section-CErneW72.css", "/assets/image-cNt8ozvO.css", "/assets/project-CMTDR1YT.css", "/assets/route-r6bKzQ88.css"] }, "routes/articles.devops": { "id": "routes/articles.devops", "parentId": "routes/articles", "path": "devops", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/articles.devops-DVlw5mEF.js?client-route=1", "imports": ["/assets/jsx-runtime-BfF-YriY.js", "/assets/index-DUWVTWgJ.js"], "css": [] }, "routes/api.set-theme": { "id": "routes/api.set-theme", "parentId": "root", "path": "api/set-theme", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.set-theme-l0sNRNKZ.js?client-route=1", "imports": [], "css": [] }, "routes/articles": { "id": "routes/articles", "parentId": "root", "path": "articles", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-CCn0nGPA.js?client-route=1", "imports": ["/assets/jsx-runtime-BfF-YriY.js", "/assets/components-7U91X0lH.js", "/assets/heading-B2sVkuwd.js", "/assets/config-C6BTT1dW.js", "/assets/divider-BHVqM2G5.js", "/assets/section-DMpVui18.js", "/assets/image-sm8zEGQ6.js", "/assets/useParallax-DgEY-Xo-.js", "/assets/useScrollToHash-B_IqptpU.js", "/assets/clamp-e7DugykH.js", "/assets/date-DvyCAN0s.js", "/assets/list-Dggtdeoj.js", "/assets/meta-DxDjxI8D.js", "/assets/index-DUWVTWgJ.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/divider-BGrE333F.css", "/assets/section-CErneW72.css", "/assets/image-cNt8ozvO.css", "/assets/list-Bzmr24nT.css", "/assets/route-CIB4zeEr.css"] }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-Dxq87GJb.js?client-route=1", "imports": ["/assets/jsx-runtime-BfF-YriY.js", "/assets/components-7U91X0lH.js", "/assets/heading-B2sVkuwd.js", "/assets/visually-hidden-DQc8RACT.js", "/assets/use-spring-CcAbRleG.js", "/assets/config-C6BTT1dW.js", "/assets/decoder-text-B3P9jeDG.js", "/assets/divider-BHVqM2G5.js", "/assets/section-DMpVui18.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/visually-hidden-NrYl-3i8.css", "/assets/decoder-text-BAWoexd9.css", "/assets/divider-BGrE333F.css", "/assets/section-CErneW72.css", "/assets/route-CKif1uL8.css"] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DgSBThdo.js?client-route=1", "imports": ["/assets/jsx-runtime-BfF-YriY.js", "/assets/components-7U91X0lH.js", "/assets/heading-B2sVkuwd.js", "/assets/config-C6BTT1dW.js", "/assets/visually-hidden-DQc8RACT.js", "/assets/use-spring-CcAbRleG.js", "/assets/license-plate-output-DAPrN-Lt.js", "/assets/section-DMpVui18.js", "/assets/meta-DxDjxI8D.js", "/assets/decoder-text-B3P9jeDG.js", "/assets/image-sm8zEGQ6.js", "/assets/useScrollToHash-B_IqptpU.js", "/assets/divider-BHVqM2G5.js", "/assets/useWindowSize-CCgmKmhO.js", "/assets/jenkinsstage-CJ9X_G6q.js", "/assets/route-CSV6nG7Q.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/section-CErneW72.css", "/assets/visually-hidden-NrYl-3i8.css", "/assets/decoder-text-BAWoexd9.css", "/assets/image-cNt8ozvO.css", "/assets/divider-BGrE333F.css", "/assets/route-uzXEAS6C.css"] }, "routes/uses": { "id": "routes/uses", "parentId": "root", "path": "uses", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-B3lQZ8Cz.js?client-route=1", "imports": ["/assets/jsx-runtime-BfF-YriY.js", "/assets/components-7U91X0lH.js", "/assets/heading-B2sVkuwd.js", "/assets/config-C6BTT1dW.js", "/assets/image-sm8zEGQ6.js", "/assets/section-DMpVui18.js", "/assets/useParallax-DgEY-Xo-.js", "/assets/list-Dggtdeoj.js", "/assets/project-D_9FNF9d.js", "/assets/meta-DxDjxI8D.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/section-CErneW72.css", "/assets/list-Bzmr24nT.css", "/assets/image-cNt8ozvO.css", "/assets/project-CMTDR1YT.css", "/assets/route-DZeEc7Bh.css"] }, "routes/$": { "id": "routes/$", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/_-D3iTyCk8.js?client-route=1", "imports": ["/assets/jsx-runtime-BfF-YriY.js", "/assets/components-7U91X0lH.js", "/assets/heading-B2sVkuwd.js", "/assets/visually-hidden-DQc8RACT.js", "/assets/use-spring-CcAbRleG.js", "/assets/decoder-text-B3P9jeDG.js", "/assets/image-sm8zEGQ6.js", "/assets/error-yoh6JAus.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/visually-hidden-NrYl-3i8.css", "/assets/decoder-text-BAWoexd9.css", "/assets/image-cNt8ozvO.css", "/assets/error-Cq_yTnRj.css"] }, "routes/home/route": { "id": "routes/home/route", "parentId": "root", "path": "/", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DgSBThdo.js?client-route=1", "imports": ["/assets/jsx-runtime-BfF-YriY.js", "/assets/components-7U91X0lH.js", "/assets/heading-B2sVkuwd.js", "/assets/config-C6BTT1dW.js", "/assets/visually-hidden-DQc8RACT.js", "/assets/use-spring-CcAbRleG.js", "/assets/license-plate-output-DAPrN-Lt.js", "/assets/section-DMpVui18.js", "/assets/meta-DxDjxI8D.js", "/assets/decoder-text-B3P9jeDG.js", "/assets/image-sm8zEGQ6.js", "/assets/useScrollToHash-B_IqptpU.js", "/assets/divider-BHVqM2G5.js", "/assets/useWindowSize-CCgmKmhO.js", "/assets/jenkinsstage-CJ9X_G6q.js", "/assets/route-CSV6nG7Q.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/section-CErneW72.css", "/assets/visually-hidden-NrYl-3i8.css", "/assets/decoder-text-BAWoexd9.css", "/assets/image-cNt8ozvO.css", "/assets/divider-BGrE333F.css", "/assets/route-uzXEAS6C.css"] } }, "url": "/assets/manifest-b5219d16.js", "version": "b5219d16" };
const mode = "production";
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/articles.demystifying": {
    id: "routes/articles.demystifying",
    parentId: "routes/articles",
    path: "demystifying",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/projects.numberplate": {
    id: "routes/projects.numberplate",
    parentId: "root",
    path: "projects/numberplate",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/articles_._index": {
    id: "routes/articles_._index",
    parentId: "root",
    path: "articles",
    index: true,
    caseSensitive: void 0,
    module: route3
  },
  "routes/projects.jenkins": {
    id: "routes/projects.jenkins",
    parentId: "root",
    path: "projects/jenkins",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/articles.devops": {
    id: "routes/articles.devops",
    parentId: "routes/articles",
    path: "devops",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/api.set-theme": {
    id: "routes/api.set-theme",
    parentId: "root",
    path: "api/set-theme",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/articles": {
    id: "routes/articles",
    parentId: "root",
    path: "articles",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: route12
  },
  "routes/uses": {
    id: "routes/uses",
    parentId: "root",
    path: "uses",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: route11
  },
  "routes/home/route": {
    id: "routes/home/route",
    parentId: "root",
    path: "/",
    index: true,
    caseSensitive: void 0,
    module: route12
  }
};
const serverBuild = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assets: serverManifest,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
}, Symbol.toStringTag, { value: "Module" }));
export {
  Loader as L,
  ModelAnimationType as M,
  Section as S,
  Transition as T,
  useWindowSize as a,
  msToNum$1 as b,
  classes as c,
  clamp as d,
  cssProps$1 as e,
  numToMs$1 as f,
  mode as g,
  assetsBuildDirectory as h,
  basename as i,
  future as j,
  isSpaMode as k,
  entry as l,
  media as m,
  numToPx as n,
  routes as o,
  publicPath as p,
  resolveSrcFromSrcSet as r,
  serverManifest as s,
  tokens as t,
  useInViewport as u
};
