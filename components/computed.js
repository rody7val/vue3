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
    <p>{{ fullname }}</p>
  `
})
