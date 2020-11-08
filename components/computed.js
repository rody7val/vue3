app.component("computed", {

  setup() {
    const name = ref("Computed")
    const surname = ref("Properties")
    const fullname = computed(() => {
      return `${name.value} ${surname.value}`
    })
    return { name, surname, fullname }
  },

  template: `
    <h3>computed</h3>
    <p>{{ fullname }}</p>
  `
})
