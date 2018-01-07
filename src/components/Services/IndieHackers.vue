<template lang="html">
<div v-if="isActive">

    <div class="row">
        <div class="col-lg-12">
            <h2 class="text-center">Featured on <a href="https://indiehackers.com" class="site-link">IndieHackers</a></h2>
        </div>
    </div>

    <br>

    <div class="row">
        <div v-if="isLoading">
            Fetching featured stories on Indiehackers</a>
        </div>

        <div class="alert alert-danger" v-if="failed">
            Oops! Something Went Wrong.
        </div>

        <div v-for="story in stories" class="story col-md-12">
          <a :href="story.url" target="_blank" class="story-url">
            <div class="item">
                <h4> {{ story.title }} </h4>
                <div class="item-content">
                    <p> {{ story.subtitle }} </p>
                    <p>
                      Comments ({{ story.comment_count }})
                      <span class="divider"> | </span>
                      Votes ({{ story.score }})
                        &nbsp;
                    </p>
                </div>
            </div>
          </a>
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
            stories: [],
        }
    },

    created(){
        this.isActive = this.selected;
    },

    watch: {
        isActive (){
            if (this.isActive && this.stories.length == 0) {
                this.fetchIndieStories();
            }
        }
    },

    methods: {
        fetchIndieStories(){
            const url = `${apiUrl}/api/indiehackers`;

            axios.get(url)
                .then((response) => {
                    this.isLoading = false;
                    this.stories = response.data;
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
.story{
    margin-bottom: 20px;
    border-top: 3px groove #24292E;
    border-bottom: 3px groove #24292E;
    background-color: #F6F6EF;
}
.story:nth-child(even){
    background-color: rgb(68, 93, 117);
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
    background-color: #142B40;
}

a.story-url{
  text-decoration:none;
  color:#000;
}
</style>
