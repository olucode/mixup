<template lang="html">
<div>
    <div class="container">
        <div class="row">
            <ul class="nav nav-pills nav-fill">
                <li class="nav-item" v-for="newsTab in services">
                    <a 
                        class="nav-link" 
                        :class="{'active': newsTab.isTabActive}" 
                        @click="switchNewsTab(newsTab)" 
                        href="#">
                        {{ newsTab.name }}
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <br>

    <div class="container">
        <slot></slot>
    </div>
</div>
</template>

<script>
export default{
    data(){
        return {
            services: [],
        }
    },
    created (){
        // Get the components that were inserted into the slot
        this.services = this.$children;
    },
    methods: {
        switchNewsTab (clickedTab){
            this.services.forEach((item) => {
                // Check if the clicked item is equal to any of the items in the list  of servicesof services
                // Then, mutate the component's isActive data
                item.isTabActive = (item.name == clickedTab.name);
            });
        }
    }
}
</script>

<style lang="css">
	
</style>