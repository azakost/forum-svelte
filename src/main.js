import App from "./App.svelte";

import { writable } from "svelte/store";

const inStore = (name, defval) => {
  let l = localStorage.getItem(name);
  return l == null ? defval : l;
};

export const language = writable(inStore("lang", "en"));
export const login = writable(inStore("login", false));
export const username = writable(inStore("username", ""));
export const fullname = writable(inStore("fullname", ""));

export const userlogin = writable("");

const app = new App({
  target: document.body,
});

export default app;
