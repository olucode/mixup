<template lang="html">
<div v-if="isActive">

    <news-tabs>
        <news-tab name="BBC" newsId="bbc-news" :isTabSelected="true">
        </news-tab>

        <news-tab name="CNN" newsId="cnn">
        </news-tab>

        <news-tab name="Tech Crunch" newsId="techcrunch">           
        </news-tab>

        <news-tab name="The Next Web" newsId="the-next-web">           
        </news-tab>

        <news-tab name="BBC Sport" newsId="bbc-sport">           
        </news-tab>
    </news-tabs>

</div>
</template>

<script>
import Tabs from './News/Tabs.vue';
import Tab from './News/Tab.vue';

export default{
    props: {
        name: {required: true},
        selected: {default: false},
    },
    components: {
        'news-tabs': Tabs,
        'news-tab': Tab
    },
    data(){
        return {
            isActive: false,
        }
    },
    created(){
        this.isActive = this.selected;
    }, 
}
</script>

<style lang="css">
	
</style>