import SampleComponent from "../components/sample-component";
import buttonAdvanced from "../components/button_advanced";
import button from "../components/button";
import cardFlip from "../components/card_flip";
import styles from "./index.scss";

export default function() {
  return {
    view() {
      return m(".button_container", [m(button), m(buttonAdvanced)]);
    }
  };
}
