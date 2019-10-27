import Vue from 'vue'

import './styles/quasar.styl'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import {
  Quasar,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QAvatar,
  QInfiniteScroll,
  QSpinnerDots,
  QExpansionItem,
  QCard,
  QCardSection,
  QSeparator,
  QDialog,
  ClosePopup,
  QSpace
} from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QAvatar,
    QInfiniteScroll,
    QSpinnerDots,
    QExpansionItem,
    QCard,
    QCardSection,
    QSeparator,
    QDialog,
    QSpace
  },
  directives: {
    ClosePopup
  },
  plugins: {
  }
})
