"use strict";
import m from "mithril";
import styles from "./index.scss";
import clock from "../clock";

export default {
  view: function(vnode) {
    return m(".time-picker", [
      m(".time-picker__analogue-clock", [m(clock)]),
      m(".time-picker__text-clock"),
      m(".time-picker__reset")
    ]);
  }
};
