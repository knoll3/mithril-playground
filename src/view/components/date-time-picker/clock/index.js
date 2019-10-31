"use strict";
import m from "mithril";
import styles from "./index.scss";

function globalMouseActions(vnode) {
  return {
    onmousemove: function(e) {
      if (vnode.state.mouse.down) {
        // force return if mouse not down
        if (e.buttons === 0) {
          vnode.state.mouse.down = false;
          return;
        }

        // get clock position
        const clock = vnode.dom;
        const clockLeft = clock.getBoundingClientRect().left;
        const clockTop = clock.getBoundingClientRect().top;
        const clockPos = {
          x: clockLeft + clock.offsetWidth / 2,
          y: clockTop + clock.offsetHeight / 2
        };

        // get mouse position
        const mousePos = {
          x: e.clientX,
          y: e.clientY
        };

        // calculate the angle
        const deltaX = mousePos.x - clockPos.x;
        const deltaY = mousePos.y - clockPos.y;
        const angle = 180 - Math.atan2(deltaX, deltaY) * (180 / Math.PI);

        // apply angle to the element
        vnode.state.mouse.target.style.transform = "rotateZ(" + angle + "deg)";
        vnode.state.mouse.target.angle = angle;
      }
    },
    onmouseup: function(e) {
      vnode.state.mouse.down = false;
    }
  };
}

export default {
  oninit: function(vnode) {
    vnode.state.mouse = {
      down: false,
      target: document
    };
    Object.assign(document, globalMouseActions(vnode));
  },
  oncreate: function(vnode) {},
  view: function(vnode) {
    return m(".clock", [
      m(".hours-container", [
        m(".hours", {
          onmousedown: function(e) {
            vnode.state.mouse.down = true;
            vnode.state.mouse.target = e.target;
          },
          style: {
            transform: "rotateZ(" + this.angle || 0 + "deg)"
          }
        })
      ]),
      m(".minutes-container", [
        m(".minutes", {
          onmousedown: function(e) {
            vnode.state.mouse.down = true;
            vnode.state.mouse.target = e.target;
          },
          style: {
            transform: "rotateZ(" + this.angle || 0 + "deg)"
          }
        })
      ])
    ]);
  }
};
