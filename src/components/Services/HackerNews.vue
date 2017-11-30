<template lang="html">
<div v-if="isActive">

    <div class="row">
        <h2 class="text-center">News Items From Hacker News</h2>
    </div>

    <br>

    <div class="row">
        <div v-show="isLoading">Fetching trending Stories</div>
        <div class="item" v-for="story in stories">
            <h4> {{ story.title }} </h4>
            <p> 
                {{ story.author }} | 
                <a :href="story.url" target="_blank"> View Story </a> | 
                <a :href="story.comments_link" 
                    target="_blank"> 
                    View Comments ({{ story.comments }})
                </a> | 
                Votes ({{ story.score }})
            </p>
        </div>
    </div>
</div>
</template>

<script>
export default{
    props: {
        name: {required: true},
        selected: {default: false},
    },
    data(){
        return {
            isActive: false,
            isLoading: true,
            stories: [],
        }
    },

    created(){
        this.isActive = this.selected;
    },
    mounted(){
        // Since the news fetching is an expensive operation, wait till the component is mounted before doing anything.
        // this.fetchHackerNews()
    },

    watch: {
        isActive (){
            if (this.isActive && this.stories.length == 0) {
                this.fetchHackerNews();
            }
        }
    },

    methods: {
        fetchHackerNews(){
            const url = 'http://localhost:9090/api/hackernews';
            const allStories =[];

            axios.get(url)
                .then((response) => {

                    this.isLoading = false;
                    this.stories = response.data;

                })
                .catch((error) => {

                });
        },
    }
}
</script>

<style lang="css">
	
</style>