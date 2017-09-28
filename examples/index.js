import Vue from 'vue'
import Button from './button.vue'
import '../assets/index.less'
new Vue({
  el: '#app',
  template: `
    <div>
        <AntButton />
    </div>
    `,
  components: {
    AntButton: Button,
  },
})
