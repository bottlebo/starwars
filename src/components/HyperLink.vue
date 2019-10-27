<template>
  <span>
    <span @click="showResult" class="link text-sw3" v-if="result[propName]">{{result[propName]}}</span>
    <span v-else>
      <q-spinner-dots color="sw3" size="20px" />
    </span>
    <q-dialog v-model="showDialog">
      <q-card>
        <q-card-section class="row items-center">
          <q-toolbar class="bg-sw2 text-white">
            <q-avatar :icon="icon" />
            <q-toolbar-title shrink>{{result[propName]}}</q-toolbar-title>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup right />
          </q-toolbar>
        </q-card-section>
        <q-card-section>
          <div class="row list">
            <div v-for="(p,index) in prepareResult()" :key="index" class="col" style="min-width:45%; margin-right:5px">
              <span>{{p.prop}}:</span>
              <span v-if="p.prop=='url'"><a :href="p.val" class="link text-sw3" target="_blank">{{p.val}}</a></span>
              <span v-else>{{p.val}}</span>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </span>
</template>
<script>
import { commonService } from "../services/common.service";
const hidenProp = ['created', 'edited', 'opening_crawl'];
export default {
  name: "HyperLink",
  props: ["selectedPersonId", "person", "prop", "propName", "index", "icon"],
  data() {
    return {
      currentPerson: "",
      result: {},
      showDialog: false
    };
  },
  methods: {
    showResult: function() {
      if (this.result[this.propName] != 'unknown') {
        this.showDialog = true;
      }
    },
    prepareResult: function() {
      let r = [];
      for (const _prop of Object.keys(this.result)) {
        if (!Array.isArray(this.result[_prop]) && !hidenProp.includes(_prop)) {
          r.push({ prop: _prop.replace('_', ' '), val: this.result[_prop] });
        }
      }
      return r;
    }
  },
  watch: {
    selectedPersonId: async function(val) {
      let arr = this.person.url.split("/");
      if (val == arr[arr.length - 2] && !this.result[this.propName]) {
        const url = this.person[this.prop];
        let _url = "";
        if (Array.isArray(url)) {
          _url = url[this.index];
        } else {
          _url = url;
        }
        this.result = await commonService.get(_url);
      }
    }
  }
};
</script>
<style scoped>
.link {
  text-decoration: underline;
  font-weight: 700;
  cursor: pointer;
}
.list .col span:first-child {
  font-weight: 700;
  text-transform: capitalize;
  margin-right: 4px;
}
</style>
