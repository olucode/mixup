<template lang="html">
<div v-if="isActive">

    <div class="row">
        <h2 class="text-center">News Items From Hacker News</h2>
    </div>

    <br>

    <div class="row">
        <div v-if="isLoading"> Fetching top stories on {{ this.name }} </div>

        <div class="item col-md-12" v-for="story in stories">
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
            status: 'Fetching trending repos',
            stories: [],
        }
    },

    created(){
        this.isActive = this.selected;
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

            axios.get(url)
                .then((response) => {

                    this.isLoading = false;
                    this.stories = response.data;

                })
                .catch((error) => {
                    this.status = "Oops! Something Went Wrong. :(";
                });
        },
    }
}
</script>

<style lang="css" scoped>
.item{
    border-top: 3px groove #FF6600;
    border-bottom: 3px groove #FF6600;
    background-color: #F6F6EF;
}
.item:nth-child(even){
    background-color: #e5e5e5;
}
</style>