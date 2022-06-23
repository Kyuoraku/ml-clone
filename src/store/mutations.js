import Vue from "vue";
import * as MUTATIONS from "../config/constants/mutation-types";

export default {
  [MUTATIONS.ON_ROUTE]: (state, payload) => {
    Vue.set(state, "route", payload);
  },
  [MUTATIONS.ON_SAVE_COUNTRY]: (state, payload) => {
    Vue.set(state, "country", payload);
  }
};
