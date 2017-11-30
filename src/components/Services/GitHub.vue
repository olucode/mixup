<template lang="html">
<div v-if="isActive">

    <div class="row">
        <h2 class="text-center">Trending Repos on GitHub</h2>
    </div>

    <div class="row">
        <div v-show="isLoading">Fetching trending repos</div>

        <div class="item" v-for="repo in repos">
            <h4> {{ repo.name }} </h4>
            <p> {{ repo.description }} </p>
            <p> 
                <a :href="repo.href" target="_blank"> View Repo </a> |
                Stars {{ repo.stars }}
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
            repos: [],
        }
    },

    created(){
        this.isActive = this.selected;
    },
    mounted(){
        // this.fetchGithubTrending();
    },

    watch: {
        isActive (){
            console.log("Tab Changed to " + this.name);
        }
    },

    methods: {
        fetchGithubTrending(){
            const fetchTrending = require('trending-github');

            fetchTrending()
                .then((trending) => {
                    this.isLoading = false;
                    this.repos = trending;
                });
        }
    }
}
</script>

<style lang="css">

</style>
