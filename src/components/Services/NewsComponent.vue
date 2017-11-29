<template lang="html">
<div v-if="isActive">

    <news-tabs>
        <tab name="BBC"></tab>
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
        'tab': Tab
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