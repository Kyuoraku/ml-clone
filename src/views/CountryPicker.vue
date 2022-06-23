/* eslint-disable vue/require-v-for-key */
<template>
    <div class="country-picker">
        <img src="../assets/img/ML-big-logo.png" alt="ML-big-logo" class="ml-logo">
        <div class="country-container">
            <div v-for="pais in paises" :key="pais.label" class="country-label" v-on:click="saveCountry(pais.value)">
                <img :src="getImage(pais.flag)" :alt="'Bandera de '+pais.label" class="country-flag">
                <span v-html="pais.label" class="country-name" ></span>
            </div>
        </div>
    </div>
</template>

<script>
import { paises } from "@/config/constants";
import DO_SAVE_COUNTRY from "@/store/actions";
export default {
    name: "CountryPicker",
    data() {
        return {
            paises: paises
        };
    },
    methods: {
        getImage(flag) {
            const images = {
                info: require(`@/assets/img/${flag}`)
            };

            return images["info"];
        },
        saveCountry(country) {
            this.$store.dispatch(DO_SAVE_COUNTRY, country);
        }
    }
}
</script>

<style scoped>
@import '../assets/common-css/var.css';
.country-picker {
    height: 100vh;
    width: 100vw;
    background-color: var(--yellow-background);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

img.ml-logo {
    height: 500px;
}

img.country-flag {
    padding-right: 10px;
    height: 20px;
}

span.country-name {
    font-size: 15px;
    color: blue;
}

.country-label{
    background-color: rgba(255,255,255,.5);
    border-radius: 4px;
    margin-bottom: 5px;
    padding:3px;

    cursor: pointer;
}
</style>