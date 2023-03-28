<template>
    <div class="container">
        <!-- Main Content -->
        <div class="row justify-content-center">
                <div class="col-3 mb-3" v-for="data in result" v-bind:key="data.id">
                    <!-- {{ data.picture }} -->
                    <div class="card">
                        <div class="card-body">
                            <!-- <img src="./../assets/img/1001.jpg" alt="Foto Serie" width="230"> -->
                            <h3 class="card-title">{{ data.id }} • {{ data.name }}</h3>
                            <p class="card-text">
                                <b>Episodios: </b> {{ data.episodes }} <br />
                                <b>Género: </b> {{ data.gender }} <br />
                                <b>Año: </b> {{ data.age }}
                            </p>
                            <!-- <div class="row justify-content-around">
                                <div class="col">
                                    <button type="button" class="btn btn-secondary">
                                        <i class="fa-solid fa-pen"></i>
                                    </button>
                                </div>
                                <div class="col">
                                    <button type="button" class="btn btn-danger" @click="deleted(data)">
                                        <i class="fa-solid fa-trash"></i>
                                    </button>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>

    </div>
</template>
<script>
import axios from "axios";
/* import Swal from 'sweetalert2'; */

export default {
    data() {
        return {
            result: {},
            serie: {
                age: "",
                episodes: "",
                gender: [],
                id: 0,
                name: "",
                picture: "",
                status: 0
            },
            page: "http://localhost:8188/api",
        };
    },
    created() {
        this.SeriesLoad();
    },
    methods: {
        async SeriesLoad() {
            await axios.get(this.page)
                .then(({ data }) => {
                    console.log(data)
                    this.result = data 
                })
                .catch(({ data }) => console.log(data) )
        }
        /* save() {
            this.SeriesSave();
        },
        SeriesSave() {
            axios
                .post(this.page, this.movie)
                    .then(({data}) => {
                        console.log(this.movie);
                        console.log(data);
                        Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                        })
                        this.SeriesLoad();
                    })
                    .catch(({data}) => {
                        console.log(data);
                        Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Something went wrong!',
                                    footer: '<a href="">Why do I have this issue?</a>'
                                    })
                    });
        },
        deleted(info) {
            console.log(info);
            Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
            }).then((result) => {
            /* Read more about isConfirmed, isDenied below /
            if (result.isConfirmed) {
                Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
            })
            .then((willDelete) => {
                if (willDelete) {
                    this.MoviesDelete(info.id);
                    Swal.fire('Saved!', '', 'success')
                } else {
                    Swal.fire('Changes are not saved', '', 'info')
                }
            });

        },
        MoviesDelete(movie){
            console.log(movie);
            const url = `${this.page}${movie}`;
            console.log(url);
            axios.delete(url)
                .then(()=>{
                    this.SeriesLoad();
                })
                .catch( ({data}) => console.log(data) )
        } */
    }
}
</script>