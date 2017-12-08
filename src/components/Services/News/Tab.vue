<template lang="html">
<div class="row" v-if="isTabActive">

    <div class="row">
        <div v-show="isLoading">{{ status }}</div>
    </div>

    <div class="col-lg-12" v-for="article in articles">
        <div class="media news-item">
            <div class="media-left">
                <a :href="article.url">
                    <img 
                        class="media-object img-fluid" 
                        :src="article.urlToImage" :alt="article.title">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">
                    {{ article.title }}
                </h4>
                <p>
                    {{ article.description }}
                </p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default{

    props: {
        name: {required: true},
        newsId: {required: true},
        isTabSelected : {default: false},
    },
    data(){
        return {
            isTabActive: false,
            isLoading: true,
            articles: [],
        }
    },

    created(){
        this.isTabActive = this.isTabSelected;
    },

    watch: {
        isTabActive (){
            if (this.isTabActive && this.articles.length == 0) {
                this.fetchHeadlines();
            }
        }
    },

    methods: {
        fetchHeadlines() {
            const url = `http://localhost:9090/api/news/${this.newsId}`;

            axios.get(url)
                .then((response) => {
                    this.isLoading = false;
                    this.articles = response.data;
                })
                .catch((error) => {
                    this.status = "Oops! Something Went Wrong. :(";
                })
        }
    },

    computed: {
        status(){
            return `Fetching top stories on ${this.name}`;
        }
    }

}
</script>

<style lang="css">
.news-item{
    margin-bottom: 20px;
    padding-top: 12px;
    padding-bottom: 13px;
    padding-left: 15px;
    padding-right: 35px;
    border-top: 3px solid blue;
    border-bottom: 3px solid blue;
}
.media-body{
    padding-left: 10px;
}
</style>