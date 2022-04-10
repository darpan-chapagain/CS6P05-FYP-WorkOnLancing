<template>
  <div>
    <p>
      {{ message.user.first_name }}
    </p>
    <p>{{ message.message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: [Object, Array],
  },
};
</script>

<style>
</style>