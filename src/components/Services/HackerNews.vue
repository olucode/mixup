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
                {{ story.by }} | 
                <a :href="story.url" target="_blank"> View Story </a> | 
                <a :href="`https://news.ycombinator.com/item?id=${story.id}`" 
                    target="_blank"> 
                    View Comments ({{ story.descendants }})
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
        this.fetchHackerNews()
            .then(() => {
                this.isLoading = false;
            });

    },

    methods: {
        fetchHackerNews(){
            const topStoriesUrl = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
            const allStories =[];

            return axios.get(topStoriesUrl)
                .then((response) => {
                    const limit = 5;

                    // Select First 20 items
                    const items = response.data.slice(0, limit);

                    items.forEach((item) => {

                        axios.get(this.storyUrl(item))
                            .then((storyResponse) => {
                                allStories.push(storyResponse.data);
                            });

                    });

                    this.stories = allStories;

                })
                .catch((error) => {

                });
        },
        storyUrl(itemId){
            const url = `https://hacker-news.firebaseio.com/v0/item/${itemId}.json?print=pretty`;
            return url;
        }
    }
}
</script>

<style lang="css">
	
</style>