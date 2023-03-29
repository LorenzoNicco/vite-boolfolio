<script>
import axios from 'axios';
import { store } from '../store';

import ProjectCard from './ProjectCard.vue';
export default {
    name: "AppMain",
    data() {
        return {
            store
        };
    },
    components: {
        ProjectCard
    },
    created () {
        axios.get('http://127.0.0.1:8000/api/projects')
        .then(response => {
            console.log(response.data);

            this.store.projects = response.data.data.data;
        })
    }
};
</script>

<template>
    <h1>Parte Frontend</h1>
    <ProjectCard />
</template>

<style lang="scss" scoped>
    h1 {
        text-align: center;
        margin: 20px 0;
    }
</style>
