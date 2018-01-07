<template lang="html">
<div v-if="isActive">

    <div class="row">
        <div class="col-lg-12">
            <h2 class="text-center">Top Stories on <a href="https://news.ycombinator.com" class="site-link">Hacker News</a></h2>
        </div>
    </div>

    <br>

    <div class="row">
        <div v-if="isLoading"> Fetching top stories on {{ this.name }} </div>

        <div class="alert alert-danger" v-if="failed">
            Oops! Something Went Wrong. :(
        </div>

        <div v-for="story in stories" class="story col-md-12">
          <a :href="story.url" target="_blank" class="story-url">
            <div class="item">
                <h4> {{ story.title }} </h4>
                <p>
                    {{ story.author }} |
                    Votes ({{ story.score }})
                </p>
            </div>
          </a>
          <a class="comment-button" :href="story.comments_link" target="_blank">
              View HN Comments ({{ story.comments }})
          </a>
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
            failed: false,
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
            const url = `${apiUrl}/api/hackernews`;

            axios.get(url)
                .then((response) => {

                    this.isLoading = false;
                    this.failed = false;
                    this.stories = response.data;

                })
                .catch((error) => {
                    this.failed = true;
                    this.isLoading = false;
                });
        },
    }
}
</script>

<style lang="css" scoped>
.story{
  margin-top:12px;
  margin-bottom:12px;
}
a.story-url{
  text-decoration:none;
  color:#000;
}

.item{
    border-top: 3px groove #FF6600;
    border-bottom: 3px groove #FF6600;
    background-color: #F6F6EF;
}
.item:nth-child(even){
    background-color: #e5e5e5;
}

.comment-button{
  padding: .25em .4em;
  background-color: #e5e5e5;
  color:#000;
  text-decoration: none;
  border:1px solid #000;
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

    color: #000;
    background-color: #FF6600;
}
</style>
