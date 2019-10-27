<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-sw1">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />
        <q-toolbar-title>
          <div style="line-height:15px;margin-top: 10px;">Star Wars API</div>
          <div class="text-caption">May the Force be with you</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      content-class="bg-sw2 shadow-2"
    >
     <q-list no-border link inset-delimiter class="nav">
          <q-item-label header>Navigation</q-item-label>
          <q-item to="/" exact>
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Characters</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/about">
            <q-item-section avatar>
              <q-icon name="public" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Planet</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/about">
            <q-item-section avatar>
              <q-icon name="directions_car" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Vehicles</q-item-label>
            </q-item-section>
          </q-item>
           <q-item to="/about">
            <q-item-section avatar>
              <q-icon name="flight_takeoff" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Starships</q-item-label>
            </q-item-section>
          </q-item>
     </q-list>
    </q-drawer>
    <q-page-container class="bg-light" >
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>

<style>
.text-light {
  color:#BCC8DD;
}
.bg-light {
  background-color: #BCC8DD;
}
.bg-sw1 {
  background-color: #4C596E;
}
.bg-sw2 {
  background-color: #6790BB;
}
.bg-sw3 {
  background-color: #AB866C;
}
.text-sw3 {
  color: #AB866C;
}
.text-sw2 {
  color: #6790BB;
}
.text-light {
  color: #BCC8DD;
}
.nav .q-item.q-router-link--active, .nav .q-item--active {
  color: #fff;
}
</style>
