"use strict";
import "./styles.scss";

export default {
  view: function() {
    return m(
      ".scene .scene--card",
      m(
        ".card",
        {
          onclick: function() {
            console.log("clicked");
            this.classList.toggle("is-flipped");
          }
        },
        [
          m(".card__face card__face--front", "front"),
          m(".card__face card__face--back", "back")
        ]
      )
    );
  }
};
