import Vue from 'vue'
import Button from '../src/index'
import '../assets/index.less'
const ButtonGroup = Button.Group
new Vue({
  el: '#app',
  template: `
    <div>
        <Button />
        <ButtonGroup />
    </div>
    `,
  data: { name: 'World' },
  components: {
    Button,
    ButtonGroup,
  },
})
