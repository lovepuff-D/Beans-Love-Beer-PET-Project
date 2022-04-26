<template>
	<header>
		<h1>Beans Love Beers</h1>
		<nav>
			<button @click="$router.push('/Beans-Love-Beer-PET-Project')">Main</button>
			<button @click="$router.push('/Beans-Love-Beer-PET-Project/favorite')">Favorite</button>
		</nav>
	</header>
</template>

<script>
    export default {
        name: 'HeaderUser'
    }
</script>

<style lang="scss" scoped>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: 25px 20px;

		background-color: mediumseagreen;
		color: white;

		h1 {
			font-weight: 500;

			font-size: 55px;
		}

		nav {
			display: flex;
			justify-content: flex-end;
		}
	}

	button {
		padding: 15px;
		border: none;

		color: white;
		background-color: transparent;
		cursor: pointer;

		font-size: 24px;

		transition: color .3s;

		&:hover {
			color: rgba(255,255,255, .8);
		}
	}
</style>