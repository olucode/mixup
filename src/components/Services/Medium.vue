<template lang="html">
<div v-if="isActive">

    <div class="row">
        <h2 class="text-center">Trending Stories on Medium </h2>
    </div>

        <div v-show="isLoading">Fetching trending Stories</div>

        <div class="item" v-for="article in articles">
            <h4> {{ article.title }} </h4>
            <div class="item-content">
                <p> {{ article.subtitle }} </p>
                <p>
                    <a :href="article.url" target="_blank"> View Article </a>
                    <br>
                    <span 
                        class="badge badge-dark tag" 
                        v-for="tag in article.tags">
                        {{ tag }}
                    </span>
                    &nbsp;
                </p>
            </div>

    </div>
</div>
</template>

<script>
export default{
    props: {
        name: {required: true},
        selected: {default: false}
    },
    data(){
        return {
            isActive: false,
            isLoading: true,
            articles: [],
        }
    },
    created(){
        this.isActive = this.selected;
    },
    mounted(){

    },

    watch: {
        isActive (){
            if (this.isActive && this.articles.length == 0) {
                this.fetchMediumTrending();
            }
        }
    },

    methods: {
        fetchMediumTrending(){
            const url = "http://localhost:9090/api/medium";

            axios.get(url)
                .then((response) => {
                    this.isLoading = false;
                    this.articles =response.data;
                })
                .catch(error => console.log(error))

        }
    }
}
</script>

<style lang="css" scoped>
.tag{
    margin-right: 3px;
}
</style>
