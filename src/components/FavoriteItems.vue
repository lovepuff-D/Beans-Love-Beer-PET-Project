<template>
	<h2 class="title">Favorite</h2>
	<section class="cards">
		<div v-for="item in items" :key="item.id"
			 class="cards__item-wrapper">
			<Item :item="item"
				  @addToFavorite="addToFavorite"
			></Item>
		</div>
	</section>
	<h2 v-if="items.length === 0" style="text-align: center">Список пуст</h2>
</template>

<script>
    import Item from "@/components/Item"

    export default {
        components: {
            Item
        },
        name: "FavoriteItems",
        props: {
            items: {
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

<style lang="scss" scoped>
	.cards {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;

		padding: 10px;

		&__item-wrapper {

			width: 33.333333%;
			padding: 15px;
		}
	}

	.title {
		margin: 15px auto;
		text-align: center;
	}
</style>