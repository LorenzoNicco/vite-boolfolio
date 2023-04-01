<script>
    import axios from 'axios';

    export default {
        name: "AppShow",
        data(){
            return {
                project: null,
                defaultImage: 'https://media.istockphoto.com/id/1404184397/it/foto/alba-sul-lago-k%C3%B6nigssee-con-watzmann-sullo-sfondo-xxxl-panorama.jpg?b=1&s=170667a&w=0&k=20&c=N-dhhw94og46H9iv9doWJC8ecpltOCGj7-SytONrlEM='
            }
        },
        created() {
            this.getProject();
        },
        methods: {
            getProject() {
                axios
                .get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`)
                .then(response => {
                    console.log(response.data);

                    if (response.data.success) {
                        this.project = response.data.project;
                    }
                    else {
                        this.$router.push({ name: 'not-found' });
                    }
                });
            }
        }
    }
</script>

<template>
    <section>
        <h1 class="mt-5 mb-3">Pagina dettaglio</h1>

        <div class="my-container">
            <h2>{{ project.title }}</h2>

            <h6>{{ project.slug }}</h6>

            <p>{{ project.description }}</p>

            <img :src="project.img ?? defaultImage" :alt="project.title">
        </div>
    </section>
</template>

<style lang="scss" scoped>
    h1 {
        text-align: center;
        margin: 20px 0;
    }

    .my-container {
        width: 900px;
        margin: 0 auto;
        background-color: cornflowerblue;
        border-radius: 20px;
        padding: 20px;
    }

    h6 {
        margin: 20px 0;
    }

    img {
        width: 50%;
        margin-top: 20px;
    }
</style>