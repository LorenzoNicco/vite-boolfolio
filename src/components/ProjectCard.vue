<script>
import { store } from '../store';
export default {
    name: "ProjectCard",
    data() {
        return {
            store
        };
    },
    props: [
        'projects'
    ]
};
</script>

<template>
    <main>
        <div v-for="project in store.projects" class="card">
            <h2>{{ project.title }}</h2>

            <h6>{{ project.slug }}</h6>

            <h4>{{ project.type ? project.type.title : '-' }}</h4>
            
            <div v-if="project.technologies.length > 0">
                <ul>
                    <li v-for="technology in project.technologies">
                        {{ technology.name }}
                    </li>
                </ul>
            </div>
            <div v-else>
                <p>Tecnologia non specificata</p>
            </div>

            <p>{{ project.description }}</p>

            <div>
                <img :src="project.img" alt="Immagine non presente">
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    main {
        width: 1200px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 0 auto;

        .card {
            width: calc((1200px / 3) - 50px);
            text-align: center;
            border: 1px solid black;
            border-radius: 20px;
            margin-bottom: 20px;
            padding: 10px;

            h6 {
                margin: 20px 0;
            }

            p {
                margin: 20px 0;
            }

            ul {
                list-style: none;
                display: flex;
                justify-content: space-around;
                flex-wrap: wrap;
            }
        }
    }
</style>
