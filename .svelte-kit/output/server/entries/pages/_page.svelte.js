import "clsx";
import { m as current_component, k as pop, p as push } from "../../chunks/index2.js";
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
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
const isAuthenticated = writable(false);
const logo = "/_app/immutable/assets/logo.Bb0tbaBR.png";
function Navbar($$payload, $$props) {
  push();
  $$payload.out += `<nav class="svelte-j4k8iq"><img${attr("src", logo)} alt="Logo" class="svelte-j4k8iq"> <div id="navtext" class="ml-auto"><a href="/" class="svelte-j4k8iq">Home</a> <a href="/feedback" class="svelte-j4k8iq">Feedback</a> <a href="/facility" class="svelte-j4k8iq">Facility</a> <a href="/callback/" class="svelte-j4k8iq">Login</a></div></nav>`;
  pop();
}
function Navbar_logged_in($$payload) {
  $$payload.out += `<nav class="svelte-1t3hlvm"><img${attr("src", logo)} alt="Logo" class="svelte-1t3hlvm"> <div class="nav-links svelte-1t3hlvm"><a href="/" class="svelte-1t3hlvm">Home</a> <div class="dropdown-container svelte-1t3hlvm"><a href="/facility" class="svelte-1t3hlvm">Facility</a> <div class="dropdown svelte-1t3hlvm"><a href="/facility/resources" class="svelte-1t3hlvm">Resources</a> <a href="/facility/activity" class="svelte-1t3hlvm">Activity</a> <a href="/facility/roster" class="svelte-1t3hlvm">Roster</a> <a href="/facility/staff" class="svelte-1t3hlvm">Staff</a></div></div> <a href="/contact" class="svelte-1t3hlvm">Feedback</a> <div class="dropdown-container svelte-1t3hlvm"><a href="/user" class="svelte-1t3hlvm">User</a> <div class="dropdown svelte-1t3hlvm"><a href="/user/logout" class="svelte-1t3hlvm">Logout</a></div></div></div></nav>`;
}
function _page($$payload, $$props) {
  push();
  let auth = false;
  const unsubscribe = isAuthenticated.subscribe((value) => {
    auth = value;
  });
  onDestroy(() => {
    unsubscribe();
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
