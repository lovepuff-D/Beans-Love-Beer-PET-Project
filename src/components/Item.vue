<template>
	<div>
		<div class="cards__item cards-item">
			<img :src="item.image_url" alt="">
			<div class="cards-item__text">
				<p class="item-title">{{item.name}}</p>
				<p class="item-description">{{item.description}}</p>
				<div>
					<button class="button_favorite"
							:class="{'favorite-item' : item['favorite']}"
							@click="[addToFavorite($event, item)]"
					>
						Favorite
					</button>
					<button @click="$router.push(`/${item.id}`)"
							:item="item"
					>
						More info...
					</button>
				</div>
			</div>
		</div>
	</div>
	<router-view :item="item"></router-view>
</template>

<script>
    export default {
        name: "Item",
        props: {
            item: {
                type: Object,
            }
        },
        methods: {
            addToFavorite(event, item) {
                this.$emit('addToFavorite', item)
            }
        }
    }
</script>

<style lang="scss" scoped>
	.cards__item {
		display: flex;
		justify-content: space-between;

		border: 1px solid lightgray;
		border-radius: 15px;

		padding: 25px;


		.cards-item {

			&__text {
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				text-align: right;

				.item-title {
					font-size: 24px;
					font-weight: 500;

					margin-bottom: 25px;
				}

				.item-description {
					overflow: hidden;
					text-wrap: none;
					display: -webkit-box;
					-webkit-line-clamp: 4;
					-webkit-box-orient: vertical;
					text-overflow: ellipsis;
					margin-bottom: auto;
				}
			}

		}

		img {
			max-width: 300px;
			max-height: 300px;
			margin-right: 25px;
		}

		button {
			align-self: flex-end;

			margin-top: auto;

			padding: 15px;
			border: 1px solid lightgray;

			font-size: 16px;

			&:hover {
				background-color: rgba(0, 0, 0, .05);
			}
		}

		.button_favorite {
			margin-right: 15px;
		}
	}

	.favorite-item {
		background-color: gold;
	}
</style>