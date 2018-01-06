<template lang="html">
<div v-if="isActive">

    <div class="row">
        <div class="col-lg-12">
            <h2 class="text-center">Featured Stories on <a href="https://medium.com" class="site-link">Medium</a></h2>
        </div>
    </div>

    <br>

    <div class="row">
        <div v-if="isLoading"> Fetching top stories on {{ this.name }} </div>

        <div class="alert alert-danger" v-if="failed">
            Oops! Something Went Wrong.
        </div>

        <div class="item col-md-12" v-for="article in articles">
            <h4> {{ article.title }} </h4>
            <div class="item-content">
                <p> {{ article.subtitle }} </p>
                <p>
                    <a :href="article.url" target="_blank"> View Article </a>
                    <br>
                    <span 
                        class="badge badge-dark tag" 
                        v-for="tag in article.tags">
                        {{ tag }}
                    </span>
                    &nbsp;
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
        selected: {default: false}
    },
    data(){
        return {
            isActive: false,
            isLoading: true,
            failed: false,
            status: 'Fetching trending Stories',
            articles: [],
        }
    },
    created(){
        this.isActive = this.selected;
    },

    watch: {
        isActive (){
            if (this.isActive && this.articles.length == 0) {
                this.fetchMediumTrending();
            }
        }
    },

    methods: {
        fetchMediumTrending(){
            const url = `${apiUrl}/api/medium`;

            axios.get(url)
                .then((response) => {
                    this.isLoading = false;
                    this.failed = false;
                    this.articles =response.data;
                })
                .catch((error) => {
                    this.failed = true;
                    this.isLoading = false;
                });

        }
    }
}
</script>

<style lang="css" scoped>
.tag{
    margin-right: 3px;
}

.item {
    margin-bottom: 20px;
    padding-top: 12px;
    padding-bottom: 3px;
    padding-left: 35px;
    padding-right: 35px;
    border-top: 3px groove #0BE370;
    border-bottom: 3px groove #0BE370;
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
    background-color: #0BE370;
}
</style>
