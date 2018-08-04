<template>
    <div class="banner">
        <slot name="content"></slot>
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.banner {
    padding: 5px 10px;
    font-size: 16px;
    font-weight: bold;
    color: orange;
}
</style>
