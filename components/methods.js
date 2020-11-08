app.component("methods", {

  setup() {
    const name = ref("Computed")
    const surname = ref("Properties")
    const fullname = computed(() => {
      return `${name.value} ${surname.value}`
    })
    const helloUser = () => {
    	alert(fullname.value)
    }
    return { helloUser }
  },

  template: `
    <h3>methods</h3>
    <p @click="helloUser">click me</p>
  `
})
