<template>
	<router-view
			:items="items"
			:favoriteItem="favoriteItem"
			@search-input="FindItems"
			@addToFavorite="addToFavorite"

			@getNewtPage="getNewtPage"
	></router-view>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "App",
        data() {
            return {
                fetchItems: [],
                items: [],
                filtered: [],
                favoriteItem: [],
                numberPage: 1,
            }
        },
        methods: {
            async fetchAPI() {
                try {
                    const respond = await axios.get('https://api.punkapi.com/v2/beers', {
                        params: {
                            page: this.numberPage
                        },
                    })
                    this.items = respond.data
                    this.fetchItems = respond.data
                } catch (e) {
                    alert('Error')
                }
            },
            FindItems(valueSearchField) {
                this.filtered = this.fetchItems.filter(_item => _item.name.toLowerCase().includes(valueSearchField))
                this.items = this.filtered
            },
            addToFavorite(item) {
                this.items.find(_item => _item === item).favorite = true
                if (this.favoriteItem.find(_item => _item === item)) {
                    this.items.find(_item => _item === item).favorite = false
                    this.favoriteItem.splice(this.favoriteItem.map(_item => _item.id).indexOf(item.id), 1)
                    console.log(this.favoriteItem)
                    return
                }
                this.favoriteItem.push(item)
                console.log(this.favoriteItem, 'favoriteArray')
            },
            getNewtPage(numberPage) {
                this.numberPage = numberPage
                this.fetchAPI()
            }
        },
        mounted() {
            // setTimeout(() => {
                this.fetchAPI()
            // }, 1000)
        },
    }
</script>

<style lang="scss">
	html {
		scroll-behavior: smooth;
	}
</style>