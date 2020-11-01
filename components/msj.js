app.component("msj", {

	setup() {
		const title = ref("Hola mundo")
		return { title }
	},

	template: `
		<p>{{ title }}</p>
	`
})