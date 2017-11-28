<template lang="html">
<div v-if="isActive">

    <div class="row">
        <div class="col-md-12">
            <ul class="nav nav-pills nav-fill" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">BBC</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">CNN</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Techcrunch</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Disabled</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Disabled</a>
                </li>
            </ul>
        </div>

        <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"></div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"></div>
            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"></div>
        </div>
    </div>

    <br>

    <div class="media item">
        <div class="media-left">
            <a href="#">
                <img 
                    class="media-object img-fluid" 
                    src="/static/img/casablanca.jpg" alt="" 
                    width="150" height="150">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">
                Media heading
            </h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique maxime repellendus obcaecati a
            </p>
        </div>
    </div>

</div>
</template>

<script>
export default{
    props: {
        name: {required: true},
        selected: {default: false},
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