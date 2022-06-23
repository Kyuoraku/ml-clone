import Vue from "vue";
import router from "@/router";
import conf from "./brands";

const values = {};

const config = {
  install(Vue) {
    Vue.mixin({
      mounted() {},
      computed: {
        config() {
          return this.$config.get();
        }
      }
    });
  },
  start(_callback) {
    // Voy a buscar la config del Branding
    // Guardo la config en la instancia local
    values.json = conf;
    // Armo los 'routes' usando los pasos
    let routes = [];
    for (let key in conf.pasos) {
      if (Object.prototype.hasOwnProperty.call(conf.pasos, key)) {
        let route = conf.pasos[key];

        // Armo un objeto para guardar el 'route'
        let routeSave = {};
        routeSave.path = route.path;

        // Como 'route.name', el key en la config
        routeSave.name = key;
        routeSave.component = () => import("@/" + route.component);
        routes.push(routeSave);
      }
    }

    routes.forEach(route => router.addRoute(route));
    _callback();
  },
  get() {
    return values.json;
  },
  getPasoProperties(paso) {
    return this.get().pasos[paso];
  }
};

Vue.prototype.$config = config;

export default config;
