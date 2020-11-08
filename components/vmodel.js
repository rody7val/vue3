app.directive('focus', {
  mounted(el) {
  	el.focus()
  }
})

app.component('vmodel', {
  setup() {
    const framework = ref("Vue 3")
    return { framework }
  },
  template: `
    <h3>vmodel</h3>
  	<input v-model="framework" v-focus/>
  	<p>value: {{ framework }}</p>
  `
})