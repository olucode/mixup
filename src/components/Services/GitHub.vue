<template lang="html">
<div v-if="isActive">

    <div class="row">
        <div class="col-lg-12">
            <h2 class="text-center">Trending Repos on <a href="https://github.com/trending/?since=daily" class="site-link">GitHub</a></h2>
        </div>
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
                <a :href="repo.url" target="_blank"> View Repo </a> 
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
            const url = `${apiUrl}/api/github`;

            axios.get(url)
                .then((response) => {
                    this.isLoading = false;
                    this.repos = response.data;
                    this.failed = false;
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
.item{
    border-top: 3px groove #000;
    border-bottom: 3px groove #000;
    background-color: #F6F6EF;
}
.item:nth-child(even){
    background-color: #24292E;
    color: #FFF;
}

.site-link{
    display: inline-block;
    padding: .25em .4em;
    font-size: 75%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25rem;

    color: #fff;
    background-color: #24292E;
}
</style>
