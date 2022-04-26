<template>
	<HeaderUser></HeaderUser>
	<PostItems @search-input="searchField"
			   @addToFavorite="addToFavorite"
			   @getNewtPage="getNewtPage"
			   :items="items"
	>
	</PostItems>
	<router-view></router-view>

</template>

<script>
    import HeaderUser from "@/components/HeaderUser"
    import PostItems from "@/components/PostItems"
    import FavoriteItems from "@/components/FavoriteItems"

    export default {
        components: {
            HeaderUser, PostItems, FavoriteItems
        },
        name: 'HomePage',
        props: {
            items: {
                type: Array,
            }
        },
        methods: {
            searchField(respond) {
                this.$emit('searchInput', respond)
            },
            addToFavorite(item) {
                this.$emit('addToFavorite', item)
            },

            getNewtPage(numberPage) {
                this.$emit('getNewtPage', numberPage)
            },
        },

    }
</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

	* {
		box-sizing: border-box;
	}

	body {
		margin: 0;
		font-size: 16px;
		font-family: 'Roboto', sans-serif;
	}

	h1, h2, h3, p {
		margin: 0;
	}

	button {
		font-family: 'Roboto', sans-serif;

		cursor: pointer;
		border: none;

		background-color: transparent;

		transition: background-color .3s;
	}

	input {
		&:focus {
			outline: none;
		}
	}

</style>