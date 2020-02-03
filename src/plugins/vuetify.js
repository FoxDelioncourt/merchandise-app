import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#000000",
        secondary: "#ffd400",
        accent: "#525252",
        error: "#b71c1c",
        anchor: "ffffff"
      }
    }
  }
});
