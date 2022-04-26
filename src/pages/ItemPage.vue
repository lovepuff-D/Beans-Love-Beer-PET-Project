<template>
	<HeaderUser></HeaderUser>
	<div class="card__wrapper">
		<div class="cards__item cards-item">
			<img :src="item.image_url" alt="">
			<div class="cards-item__text">
				<p class="item-title">{{item.name}}</p>
				<p class="item-description"><b>Description:</b> {{item['description']}}</p>
				<p><b>ABV:</b> {{item.abv}}</p>
				<p><b>IBU:</b> {{item.ibu}}</p>
				<div>
					<b>Pair food:</b>
					<ul>
						<li v-for="pair_food in item.food_pairing">
							{{pair_food}}
						</li>
					</ul>
				</div>
				<p>{{item.brewers_tips}}</p>
				<div>
					<button class="button_favorite"
							:class="{'favorite-item' : item['favorite']}"
							@click="[addToFavorite($event, item)]"
					>
						Favorite
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import HeaderUser from "@/components/HeaderUser"

    export default {
        components: {
            HeaderUser
        },
        name: "Item",
        data() {
            return {
                item: [],
            }
        },
        props: {
            items: {
                type: Array,
            }
        },
        methods: {
            findItem() {
                this.item = this.items.find(item => item.id == this.$route.params.id)
                console.log(this.item.name)
            },
            addToFavorite(event, item) {
                this.$emit('addToFavorite', item)
            }
        },
        mounted() {
            this.findItem()
        },
    }
</script>

<style lang="scss" scoped>

	p {
		margin-bottom: 15px;
	}

	.card__wrapper {
		padding: 25px;
	}

	.cards__item {
		max-width: 760px;
		width: 100%;

		margin: 0 auto;


		display: flex;
		flex-direction: column;
		justify-content: space-between;

		border: 1px solid lightgray;
		border-radius: 15px;

		padding: 25px;

		text-align: left;

		.cards-item {

			&__text {
				display: flex;
				flex-direction: column;
				justify-content: space-between;


				.item-title {
					font-size: 24px;
					font-weight: 500;

					margin-bottom: 25px;
				}
			}

		}

		img {
			align-self: center;

			max-width: 300px;
			max-height: 300px;

			margin-bottom: 35px;
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

		div:last-child {
			margin: 0 auto;
			width: 100%;
		}

		.button_favorite {
			width: 100%;
			margin-right: 15px;
		}
	}

	.favorite-item {
		background-color: gold;
	}
</style>