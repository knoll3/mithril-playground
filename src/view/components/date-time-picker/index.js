"use strict";
import m from "mithril";
import styles from "./index.scss";
import timePicker from "./time-picker";
import datePicker from "./date-picker";

export default {
  oninit: function(vnode) {},
  view: function(vnode) {
    return m(".dt-selector", [
      m(".dt-selector__time-container", m(timePicker)),
      m(".dt-selector__date-container", m(datePicker)),
      m(".dt-selector__done")
    ]);
  }
};
