<template>
	<form @submit.prevent>
		<input v-model="inputField"
			   @input="emitSearchInput"
			   type="text"
			   placeholder="Search for beer..."
		>
	</form>
</template>

<script>
    export default {
        name: "SearchPosts",
        data() {
            return {
                inputField: '',
            }
        },
		methods: {
            emitSearchInput(event) {
                this.$emit('searchInput', this.inputField.toLowerCase())
			}
		}
    }
</script>

<style lang="scss" scoped>
	form {
		display: flex;
		justify-content: space-between;

		margin: 25px auto;

		width: 80%;

		input {
			width: 100%;
			padding: 15px 25px;

			font-size: 32px;

			border-radius: 15px;

			border: 1px solid lightgray;

			&:focus {
				box-shadow: 0 0 15px -5px lightgray;
			}
		}

	}
</style>