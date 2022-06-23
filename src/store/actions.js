import * as ACTIONS from "../config/constants/action-types";
import * as MUTATIONS from "../config/constants/mutation-types";
import router from "@/router";


/* eslint-disable no-async-promise-executor */

export default {
  [ACTIONS.DO_ROUTE](context, payload) {
    context.commit(MUTATIONS.ON_ROUTE, payload);
  },
  [ACTIONS.DO_SAVE_COUNTRY](context, payload) {
    context.commit(MUTATIONS.ON_SAVE_COUNTRY(payload));
    router.push("/"+payload);
  }
};
