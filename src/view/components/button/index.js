"use strict";
import "./index.scss";

/*
 * A basic button
 *
 * inputs
 * text: the text to be shown on the button.
 * color: the color of the button, choices limited to
 *        green, blue, red, and orange. Leave blank for gray
 * onclick: what happens on click
 *
 */

export default {
  view: function(vnode) {
    let color = "";
    if (vnode.attrs.color) {
      color = vnode.attrs.color.toLowerCase();
    }
    const cssClass = vnode.attrs.class || "";
    return m(
      ".button " + color + " " + cssClass,
      {
        onclick: function() {
          if (typeof vnode.attrs.onclick === "function") {
            vnode.attrs.onclick();
          }
        }
      },
      [
        m(".button_gradient " + color + " " + cssClass),
        m(".button_text", vnode.attrs.text || "BUTTON")
      ]
    );
  }
};
