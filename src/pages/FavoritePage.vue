<template>
	<HeaderUser></HeaderUser>
	<FavoriteItems :items="favoriteItem"
				   @addToFavorite="addToFavorite"
	></FavoriteItems>
</template>

<script>
    import FavoriteItems from "@/components/FavoriteItems"
    import HeaderUser from "@/components/HeaderUser"

    export default {
        components: {
            FavoriteItems, HeaderUser
        },
        data() {
            return {}
        },
        props: {
            favoriteItem: {
                type: Array,
            }
        },
        methods: {
            addToFavorite(item) {
                this.$emit('addToFavorite', item)
            }
        }
    }
</script>

<style scoped>

</style>