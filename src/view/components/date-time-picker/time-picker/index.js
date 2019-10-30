"use strict";
import m from "mithril";
import styles from "./index.scss";

export default {
  view: function(vnode) {
    return m(".time-picker", [
      m(".time-picker__analogue-clock"),
      m(".time-picker__text-clock"),
      m(".time-picker__reset")
    ]);
  }
};
