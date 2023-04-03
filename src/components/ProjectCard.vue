<script>
import { store } from '../store';
export default {
    name: "ProjectCard",
    data() {
        return {
            store,
            defaultImage: 'https://media.istockphoto.com/id/1404184397/it/foto/alba-sul-lago-k%C3%B6nigssee-con-watzmann-sullo-sfondo-xxxl-panorama.jpg?b=1&s=170667a&w=0&k=20&c=N-dhhw94og46H9iv9doWJC8ecpltOCGj7-SytONrlEM='
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

            <div class="img-container">
                <img :src="project.full_img_path ?? defaultImage" alt="Immagine non presente">
            </div>

            <button class="detail-button">
                <router-link :to="{ name: 'show', params: { slug: project.slug } }">Dettagli</router-link>
            </button>
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

            .img-container {
                width: 100%;
                border-radius: 5px;

                img {
                    width: 100%;
                }
            }

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

            .detail-button {
                background-color: cadetblue;
                border: none;
                border-radius: 5px;
                padding: 10px;
                cursor: pointer;
                margin-top: 20px;
            }
        }
    }
</style>
