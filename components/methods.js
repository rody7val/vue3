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
    <p @click="helloUser">click me</p>
  `
})
