<template>
    <div>
        <div v-for="(message, index) in messages" :key="index">
            <MessageItem :message="message" />
        </div>
    </div>
</template>

<script>
import MessageItem from "./messageItem.vue";
export default {
    components: {
        MessageItem,
    },
    props: {
        messages: [Object, Array],
    }
}
</script>

<style>

</style>