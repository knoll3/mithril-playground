import SampleComponent from "../components/sample-component";
import buttonAdvanced from "../components/button_advanced";
import button from "../components/button";
import cardFlip from "../components/card_flip";
import styles from "./index.scss";
import menu from "../components/horizontal_menu";
import toggle from "../components/toggle";
import dateTimePicker from "../components/date-time-picker";

export default function() {
  return {
    view() {
      return m(".button_container", [
        m(dateTimePicker, {
          onDone: function(e, v) {
            console.log("submitted:", v);
          }
        })
      ]);
    }
  };
}
