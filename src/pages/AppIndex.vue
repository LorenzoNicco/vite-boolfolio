<script>
    import axios from 'axios';
    import { store } from '../store';

    import ProjectCard from '../components/ProjectCard.vue';
    export default {
        name: "AppHome",
        data() {
            return {
                store,
                currentPage: 1,
                lastPage: 1
            };
        },
        components: {
            ProjectCard
        },
        created() {
        this.getProjects();
        },
        methods: {
            changePage(page) {
                this.currentPage = page;
                this.getProjects();
            },
            getProjects() {
                axios
                    .get('http://127.0.0.1:8000/api/projects', {
                        params: {
                            page: this.currentPage
                        }
                    })
                    .then(response => {
                        console.log(response.data);
                        this.store.projects = response.data.data.data;
                        this.lastPage = response.data.data.last_page;
                    });
            }
        }
    }
</script>

<template>
    <section>
        <h1 class="mt-5 mb-3">Homepage</h1>

        <ul class="pagination">
            <li class="page-item" v-for="i in lastPage">
                <button class="page-link" :class="{ active: currentPage == i }" @click="changePage(i)">
                    {{ i }}
                </button>
            </li>
        </ul>

        <ProjectCard />
    </section>
</template>

<style scoped>
    h1 {
        text-align: center;
        margin: 20px 0;
    }

    .pagination {
        display: flex;
        list-style: none;
        justify-content: center;
        margin-bottom: 20px;
    }

    .page-link {
        width: 50px;
    }
</style>