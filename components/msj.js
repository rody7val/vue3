app.component("msj", {

  setup() {
    const title = ref("Hola mundo")
    return { title }
  },

  template: `
    <h3>ref</h3>
    <p>{{ title }}</p>
  `
})
