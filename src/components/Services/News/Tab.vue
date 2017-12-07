<template lang="html">
<div class="row" v-if="isTabActive">

    <div class="row">
        <div v-if="isLoading">Fetching Top Headlines From {{ this.name }}</div>

        <div class="alert alert-danger" v-if="failed">
            Oops! Something Went Wrong.
        </div>
    </div>

    <div class="row">

        <div class="news-item col-lg-12" v-for="article in articles">
            <h4> {{ article.title }} </h4>
            <div class="item-content">
                <p> {{ article.description }} </p>
                <p>
                    <a :href="article.url" target="_blank"> View Article </a> ({{ article.author }})
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
            failed: false,
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
                    this.articles = response.data.articles;
                })
                .catch((error) => {
                    this.failed = true;
                    this.isLoading = false;
                });
        },
    },

}
</script>

<style lang="css" scoped>
.news-item{
    margin-bottom: 15px;
    padding-top: 10px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 35px;
    border-top: 3px solid #000;
    border-bottom: 3px solid #000;
}
.news-item:nth-child(even){
    background-color: #F5F8FA;
}
</style>