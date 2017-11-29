<template lang="html">
<div>
        <!-- Sidebar -->
        <div id="sidebar-wrapper">
            <ul class="sidebar-nav">

            	<!-- Sidebar Image -->
                <li class="sidebar-brand">
                    <a href="#">
                        <img src="/static/img/dblogo.png"
                            class="img-fluid"
                            width="100" height="100"
                            alt="">
                    </a>
                </li>

                <!-- Default Services  -->
                <li v-for="item in services">
                	<a
                    href="#"
                    :class="{'is-active': item.isActive}"
                    @click="switchTab(item)">
                    {{ item.name }}
                  </a>
                </li>
            </ul>
        </div>
        <!-- /#sidebar-wrapper -->

        <!-- Page Content -->
        <div id="page-content-wrapper">
            <div class="container">
                <br>
                <div class="row">
                    <div class="col-lg-12">
                    	<!-- Vue Service Components go here -->
                    	<slot></slot>
                    </div>
                </div>
            </div>
        </div>
        <!-- /#page-content-wrapper -->
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
        switchTab (clickedTab){
            this.services.forEach((item) => {
                // Check if the clicked item is equal to any of the items in the list  of servicesof services
                // Then, mutate the isActive data
                item.isActive = (item.name == clickedTab.name);
            });
        }
    }
}
</script>

<style lang="css">
	.is-active{
        background: blue;
    }
</style>
