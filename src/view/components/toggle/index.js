"use strict";

import m from "mithril";
import styles from "./index.scss";

export default {
  view: function(vnode) {
    return m(".toggle", [
      m("input", { id: "toggle", type: "checkbox" }),
      m("label", { for: "toggle" }),
      m(".toggle-background", [m(".on-side"), m(".off-side"), m(".knob")])
    ]);
  }
};
