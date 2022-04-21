<template>
    <div>
        <div class="image-holder d-flex justify-content-center">
            <img :src="image" alt="image" class="img-fluid">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Images',
        props: {
            image: String,
        }
    }
</script>

<style lang="stylus" scoped>

</style>