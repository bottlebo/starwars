<template>
  <q-page>
    <div class="home">
      <q-toolbar class="bg-sw2 text-white shadow-2">
        <q-toolbar-title>Characters</q-toolbar-title>
      </q-toolbar>
      <div
        id="p"
        class="q-pa-md bg-white shadow-3"
        style="max-height: calc(100vh - 200px); overflow: auto;"
      >
        <q-infinite-scroll @load="nextPage" :offset="250" scroll-target="#p">
          <q-list>
            <q-expansion-item
              group="persons"
              v-for="person in persons"
              v-bind:key="person.name"
              @before-show="expand"
              :data-id="getId(person.url)"
            >
              <template v-slot:header>
                <q-item-section avatar class="q-my-sm" clickable>
                  <q-avatar color="sw2" text-color="white">{{firstLetter(person.name)}}</q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6 text-sw2">{{person.name}}</q-item-label>
                </q-item-section>
              </template>
              <q-item-section side top>
                <div class="my-card shadow-2 bg-light">
                  <q-toolbar class="bg-sw2 text-white">
                    <q-avatar icon="fingerprint" />
                    <q-toolbar-title shrink>Сharacteristics</q-toolbar-title>
                  </q-toolbar>
                  <div class="pad-20">
                    <div class="row infotab">
                      <div class="col">
                        <span>Home world:</span>
                        <span>
                          <HyperLink
                            :selectedPersonId="selectedPersonId"
                            :person="person"
                            :prop="'homeworld'"
                            :propName="'name'"
                            :icon="'public'"
                          />
                        </span>
                      </div>
                      <div class="col">
                        <span>Hair color:</span>
                        <span>{{person.hair_color}}</span>
                      </div>
                    </div>
                    <div class="row infotab">
                      <div class="col">
                        <span>Birth year:</span>
                        <span>{{person.birth_year}}</span>
                      </div>
                      <div class="col">
                        <span>Eye color:</span>
                        <span>{{person.eye_color}}</span>
                      </div>
                    </div>
                    <div class="row infotab">
                      <div class="col">
                        <span>Gender:</span>
                        <span>{{person.gender}}</span>
                      </div>
                      <div class="col">
                        <span>Skin color:</span>
                        <span>{{person.skin_color}}</span>
                      </div>
                    </div>
                    <div class="row infotab">
                      <div class="col">
                        <span>Height:</span>
                        <span>{{person.height}}</span>
                      </div>
                      <div class="col"></div>
                    </div>
                    <div class="row infotab">
                      <div class="col">
                        <span>Mass:</span>
                        <span>{{person.mass}}</span>
                      </div>
                      <div class="col"></div>
                    </div>
                  </div>
                </div>
                <div class="my-card">
                  <div class="row">
                    <div class="col shadow-2 bg-light" style="margin-right:10px">
                      <q-toolbar class="bg-sw2 text-white">
                        <q-avatar icon="directions_car" />
                        <q-toolbar-title shrink>Vehicles</q-toolbar-title>
                      </q-toolbar>
                      <div class="pad-20">
                        <div v-for="(vehicle, index) in person.vehicles" :key="index">
                          <HyperLink
                            :selectedPersonId="selectedPersonId"
                            :person="person"
                            :prop="'vehicles'"
                            :propName="'name'"
                            :index="index"
                            :icon="'directions_car'"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col shadow-2 bg-light" style="margin-left:10px">
                      <q-toolbar class="bg-sw2 text-white">
                        <q-avatar icon="flight_takeoff" />
                        <q-toolbar-title shrink>Starships</q-toolbar-title>
                      </q-toolbar>
                      <div class="pad-20">
                        <div v-for="(vehicle, index) in person.starships" :key="index">
                          <HyperLink
                            :selectedPersonId="selectedPersonId"
                            :person="person"
                            :prop="'starships'"
                            :propName="'name'"
                            :index="index"
                            :icon="'flight_takeoff'"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="my-card shadow-2 bg-light">
                  <q-toolbar class="bg-sw2 text-white">
                    <q-avatar icon="local_movies" />
                    <q-toolbar-title shrink>Films</q-toolbar-title>
                  </q-toolbar>
                  <div class="pad-20">
                    <div v-for="(film, index) in person.films" :key="index">
                      <HyperLink
                        :selectedPersonId="selectedPersonId"
                        :person="person"
                        :prop="'films'"
                        :propName="'title'"
                        :index="index"
                        :icon="'local_movies'"
                      />
                    </div>
                  </div>
                </div>
              </q-item-section>
            </q-expansion-item>
          </q-list>
          <template v-slot:loading>
            <div class="row justify-center q-my-md">
              <q-spinner-dots color="sw2" size="40px" v-if="persons.length < personsCount" />
            </div>
          </template>
        </q-infinite-scroll>
      </div>
    </div>
  </q-page>
</template>

<script>
import HyperLink from "@/components/HyperLink.vue";
import { personsService } from "../services/persons.service";

export default {
  name: "persons",
  data() {
    return {
      persons: [],
      pageNum: 0,
      selectedPersonId: 0,
      personsCount: 1
    };
  },
  methods: {
    firstLetter(strName) {
      return strName[0].toUpperCase();
    },
    getId(url) {
      let arr = url.split("/");
      return arr[arr.length - 2];
    },
    async nextPage(index, done) {
      if (this.persons.length < this.personsCount) {
        const data = await personsService.getPage(index);
        this.personsCount = data.count;
        this.persons = this.persons.concat(data.results);
        done();
      }
    },
    expand(evt) {
      let current = evt.target;
      while (!current.hasAttribute("data-id")) {
        current = current.parentNode;
      }
      this.selectedPersonId = current.getAttribute("data-id");
    }
  },
  components: {
    HyperLink
  }
};
</script>
<style scoped>
.my-card {
  width: 90%;
  margin: 10px 40px 10px 70px;
}
.infotab div span:first-child {
  font-weight: bold;
  margin-right: 4px;
}
.infotab div span {
  color: #212223;
}
.pad-20 {
  padding: 20px;
}
.home {
  padding: 50px;
}
</style>
