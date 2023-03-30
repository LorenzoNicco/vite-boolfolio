<script>
    export default {
        name: "AppShow"
    }
</script>

<template>
    <section>
        <h1 class="mt-5 mb-3">Pagina dettaglio</h1>

        
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
                <img :src="project.img ?? defaultImage" alt="Immagine non presente">
            </div>

            <button class="detail-button">Dettagli</button>
        </div>
    
    </section>
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