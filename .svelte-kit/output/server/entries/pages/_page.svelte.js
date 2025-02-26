import "clsx";
import { k as pop, p as push } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
const isAuthenticated = writable(false);
const logo = "/_app/immutable/assets/logo.Bb0tbaBR.png";
function Navbar($$payload, $$props) {
  push();
  $$payload.out += `<nav class="svelte-j4k8iq"><img${attr("src", logo)} alt="Logo" class="svelte-j4k8iq"> <div id="navtext" class="ml-auto"><a href="/" class="svelte-j4k8iq">Home</a> <a href="/feedback" class="svelte-j4k8iq">Feedback</a> <a href="/facility" class="svelte-j4k8iq">Facility</a> <a href="#" class="svelte-j4k8iq">Login</a></div></nav>`;
  pop();
}
function Navbar_logged_in($$payload) {
  $$payload.out += `<nav class="svelte-hy1hc2"><img${attr("src", logo)} alt="Logo" class="svelte-hy1hc2"> <div id="navtext" class="ml-auto"><a href="/" class="svelte-hy1hc2">Home</a> <a href="/facility" class="svelte-hy1hc2">Facility</a> <a href="/contact" class="svelte-hy1hc2">Feedback</a> <a href="/user" class="svelte-hy1hc2">User</a></div></nav>`;
}
function _page($$payload, $$props) {
  push();
  let auth = false;
  isAuthenticated.subscribe((value) => {
    auth = value;
  });
  if (auth) {
    $$payload.out += "<!--[-->";
    Navbar_logged_in($$payload);
  } else {
    $$payload.out += "<!--[!-->";
    Navbar($$payload);
  }
  $$payload.out += `<!--]--> <div id="body"></div>`;
  pop();
}
export {
  _page as default
};
