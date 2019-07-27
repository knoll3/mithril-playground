"use strict";
import "./index.scss";

export default {
  view: function(vnode) {
    return m(
      ".button_advanced",
      {
        onclick: function() {
          if (typeof vnode.attrs.onclick == "function") {
            vnode.attrs.onclick();
          }
        }
      },
      [
        m(".button_shine"),
        m(".button_flash"),
        m(".button_text", vnode.attrs.text || "BUTTON")
      ]
    );
  }
};
