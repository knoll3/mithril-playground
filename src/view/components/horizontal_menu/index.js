"use strict";
import m from "mithril";
import styles from "./index.scss";

const menuOption = {
  view: function(vnode) {
    return m(
      ".menu_option",
      {
        id: vnode.attrs.id,
        onclick: function(e) {
          if (typeof vnode.attrs.onclick === "function") {
            vnode.attrs.onclick(e);
          }
        }
      },
      vnode.attrs.name
    );
  }
};

const transformIndicator = function(vnode, target) {
  const colorMap = vnode.state.colorMap;
  const indicator = document.querySelector(".menu_indicator");
  const menuOptions = document.querySelectorAll(".menu_option");

  // clear all styles and selected class
  menuOptions.forEach(option => {
    option.removeAttribute("style");
    option.classList.remove("selected");
  });
  target.classList.add("selected");

  // transform indicator
  indicator.style.left = `${target.offsetLeft + 6}px`;
  indicator.style.width = `${target.offsetWidth - 16}px`;

  // change color based on option index
  const index = Array.prototype.indexOf.call(menuOptions, target);
  indicator.style.borderColor = colorMap[index];
  indicator.style.boxShadow = `0 0 5px 0px ${colorMap[index]}, inset 0 0 5px 0px ${colorMap[index]}`;
  target.style.color = colorMap[index];
};

export default {
  oninit: function(vnode) {
    if (vnode.attrs.selected) {
      vnode.state.selected = vnode.attrs.selected;
    }
  },

  oncreate: function(vnode) {
    // Define the color map
    vnode.state.colorMap = vnode.attrs.colorMap || [
      "cyan",
      "gold",
      "lightgreen",
      "orange",
      "pink"
    ];

    // Add some random colors if there are not enough
    const menuOptions = document.querySelectorAll(".menu_option");
    while (menuOptions.length > vnode.state.colorMap.length) {
      const randomColor = `hsla(${~~(Math.random() * 255)}, 35%, 60%, 1)`;
      vnode.state.colorMap.push(randomColor);
    }

    // Set the indicator on the first option by default
    const firstOption = document.querySelector(".menu_options").firstChild;
    transformIndicator(vnode, firstOption);
  },

  view: function(vnode) {
    const options = vnode.attrs.options || [
      // Set some default values
      "Home",
      "About",
      "Testimonials",
      "Blog",
      "Contact"
    ];

    // Set default selected option
    const selected = vnode.state.selected || options[0];

    return m(".horizontal_menu", [
      m(
        ".menu_options",
        options.map(option => {
          return m(menuOption, {
            id: option,
            name: option,
            selected: selected,
            onclick: function(e) {
              vnode.state.selected = option;
              transformIndicator(vnode, e.target);
            }
          });
        })
      ),
      m(".menu_indicator")
    ]);
  }
};
