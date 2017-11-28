<template>
  <div id="wrapper" class="toggled">

    <sidebar-wrapper>
        <hacker-news name="Hacker News" :selected="true"></hacker-news>

        <life-hacker name="Life Hacker"></life-hacker>

        <product-hunt name="Product Hunt"></product-hunt>

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

export default {
    name: 'app',

    components: {
        'sidebar-wrapper' : SidebarWrapper,
        'hacker-news': HackerNews,
        'life-hacker': LifeHacker,
        'product-hunt': ProductHunt,
        'news-component': NewsComponent,
    }
}
</script>

<style>
.item {
    margin-bottom: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 35px;
    padding-right: 35px;
    border-top: 3px groove blue;
    border-bottom: 3px groove blue;
}
.item > .media-left{
    margin-right: 10px;
}
</style>
