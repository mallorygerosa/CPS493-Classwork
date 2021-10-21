<template>
    <div class="container">
        <Nav />
    <Messages />
        <router-view/>        
    </div>

</template>

<style lang="scss">
</style>

<script>
import Nav from "./components/Nav";
import Messages from "./components/Messages"
export default {
    components: {
        Nav,
        Messages
    }
}
</script>