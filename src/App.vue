<template>
  <div id="wrapper" class="">

    <sidebar-wrapper>
        <hacker-news name="Hacker News"></hacker-news>

        <indie-hackers name="IndieHackers"></indie-hackers>

        <product-hunt name="Product Hunt" :selected="true"></product-hunt>

        <github-trending name="GitHub Trending"></github-trending>

        <medium-trending name="Medium"></medium-trending>

        <news-component name="News"></news-component>
    </sidebar-wrapper>

</div>
</template>

<script>

import SidebarWrapper from './components/SidebarWrapper.vue';
import HackerNews from './components/Services/HackerNews.vue';
import LifeHacker from './components/Services/LifeHacker.vue';
import ProductHunt from './components/Services/ProductHunt.vue';
import NewsComponent from './components/Services/NewsComponent.vue';
import GitHub from './components/Services/GitHub.vue';
import Medium from './components/Services/Medium.vue';
import IndieHackers from './components/Services/IndieHackers.vue';

export default {
    name: 'app',

    components: {
        'sidebar-wrapper' : SidebarWrapper,
        'hacker-news': HackerNews,
        'life-hacker': LifeHacker,
        'product-hunt': ProductHunt,
        'github-trending': GitHub,
        'medium-trending': Medium,
        'news-component': NewsComponent,
        'indie-hackers': IndieHackers,
    },

}
</script>

<style>
.item {
    margin-bottom: 20px;
    padding-top: 12px;
    padding-bottom: 3px;
    padding-left: 35px;
    padding-right: 35px;
    border-top: 3px groove blue;
    border-bottom: 3px groove blue;
    background-color: #F5F8FA;
}
.item > .media-left{
    margin-right: 10px;
}

.item:nth-child(even){
    background-color: #e5e5e5;
}

body{
    font-family: "Raleway", sans-serif;
    background-color: #fff;
}

</style>
