<script>
import axios from 'axios';
export default {
    name: "AppMain",
    data() {
        return {
        };
    },
    created () {
        axios.get('http://127.0.0.1:8000/api/projects')
        .then(response => {
            console.log(response.data);
        })
    }
};
</script>

<template>
    <h1>Parte Frontend</h1>
</template>

<style scoped>

</style>
