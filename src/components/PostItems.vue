<template>
	<SearchPosts
			@search-input="searchField"
	></SearchPosts>
	<section class="cards">
		<div v-for="item in items" :key="item.id"
			 class="cards__item-wrapper">
			<Item :item="item"
				  @addToFavorite="addToFavorite"
			></Item>
		</div>
		<div v-if="items.length === 0"
			 class="lds-ring preloader">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	</section>
	<div class="pagination">
		<button v-for="index in 10" :key="index"
				@click="getNewtPage(index)"
		>
			{{index}}
		</button>
	</div>
</template>

<script>
    import SearchPosts from "@/components/SearchPosts"
    import Item from "@/components/Item"

    export default {
        components: {
            SearchPosts, Item
        },
        name: "PostItems",
        data() {
            return {
                testField: '',
                nextPage: 1,
            }
        },
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

            getNewtPage(index) {
                if (this.items.length === 0) return
                this.$emit('getNewtPage', index)
				window.scroll(0,0)
            },
        }
    }
</script>

<style lang="scss" scoped>
	.cards {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;

		padding: 10px;

		&__item-wrapper {

			width: 33.333333%;
			padding: 15px;
		}
	}

	.pagination {
		text-align: center;

		button {
			font-size: 32px;

			&:hover {
				opacity: .7;
			}
		}
	}

	//Прелоадер

	.lds-ring {
		display: inline-block;

		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		width: 80px;
		height: 80px;

	}

	.lds-ring div {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: 64px;
		height: 64px;
		margin: 8px;
		border: 8px solid #fff;
		border-radius: 50%;
		animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		border-color: black transparent transparent transparent;
	}

	.lds-ring div:nth-child(1) {
		animation-delay: -0.45s;
	}

	.lds-ring div:nth-child(2) {
		animation-delay: -0.3s;
	}

	.lds-ring div:nth-child(3) {
		animation-delay: -0.15s;
	}

	@keyframes lds-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>