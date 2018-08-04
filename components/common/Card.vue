<template>
    <div class="card">
        <slot name="title"></slot>
        <slot name="content"></slot>
        <slot name="footer"></slot>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'card',
    data () {
        return {
            
        }
    }
}
</script>

<style scoped>
.card {
    width: 90%;
    padding: 10px;
    border-radius: 5px;
    border: .5px solid #ddd;
    box-shadow: 0 2px 3px 0 #ddd;
    margin-bottom: 10px;
}
</style>
