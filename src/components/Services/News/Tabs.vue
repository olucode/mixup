<template lang="html">
<div>
    <ul class="nav nav-pills nav-fill">
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

    <br>

    <div class="tab-content" id="pills-tabContent">
        <slot></slot>
    </div>
</div>
</template>

<script>
export default{

}
</script>

<style lang="css">
	
</style>