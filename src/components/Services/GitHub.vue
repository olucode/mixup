<template lang="html">
<div v-if="isActive">

    <div class="row">
        <h2 class="text-center">Trending Repos on GitHub</h2>
    </div>

    <br>

    <div class="row">
        <div v-if="isLoading"> 
            Fetching trending repos (today) from <a href="http://github.com">{{ this.name }}</a> 
        </div>

        <div class="alert alert-danger" v-if="failed">
            Oops! Something Went Wrong.
        </div>

        <div class="item col-md-12" v-for="repo in repos">
            <h4> {{ repo.name }} </h4>
            <p> {{ repo.description }} </p>
            <p> 
                by <a :href=" 'https://github.com/' + repo.author">{{ repo.author }}</a> 
                <span class="divider"> | </span>
                <a :href="repo.url" target="_blank"> View Repo </a>  &nbsp; |  &nbsp;
                <span class="divider"> | </span>
                Stars ({{ repo.stars }})
                <span class="divider"> | </span>
                Forks ({{ repo.forks }}) 
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
            failed: false,
            repos: [],
        }
    },

    created(){
        this.isActive = this.selected;
    },

    watch: {
        isActive (){
            if (this.isActive && this.repos.length == 0) {
                this.fetchGithubTrending();
            }
        }
    },

    methods: {
        fetchGithubTrending(){
            const url = 'http://localhost:9090/api/github';

            axios.get(url)
                .then((response) => {
                    this.isLoading = false;
                    this.repos = response.data;
                })
                .catch((error) => {
                    this.failed = true;
                    this.isLoading = false;
                })
        }
    }
}
</script>

<style lang="css" scoped>
span.divider{
    padding-left: 5px;
    padding-right: 5px;
}
</style>
