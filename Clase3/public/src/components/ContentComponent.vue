<template>
    <div class="row justify-content-around">
        <div class="col-9 col-md-5 col-lg-3 mb-5" v-for="data in result" v-bind:key="data.id">
            <div class="card">
                <div class="card-body">
                    <img src="./../assets/picture.png" alt="">
                    <h3 class="card-title">{{ data.name }} • {{ data.reference }}</h3>
                    <p class="card-text">
                        <b>Cilindraje: </b> {{ data.cylinder }} cm<sup>3</sup> <br />
                        <b>Precio: </b>$ {{ data.price }} <br />
                        <b>Unidades disponibles: </b> {{ data.stock }}
                    </p>
                    <div class="row justify-content-around">
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import Swal from 'sweetalert2';

export default {
    data() {
        return {
            result: {},
            page: "http://localhost:8088/api/v1/products/",
        };
    },
    created() {
        this.ProductsLoad();
    },
    methods: {
        async ProductsLoad() {
            await axios.get(this.page)
                .then(({ data }) => this.result = data.products)
                .catch(({ err }) => console.log(err))
        },

        /* save() {
            this.ProductSave();
        },
        ProductSave() {
            axios
                .post(this.page, this.product)
                .then(({ data }) => {
                    console.log(this.product);
                    console.log(data);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.ProductsLoad();
                })
                .catch(({ data }) => {
                    console.log(data);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href="">Why do I have this issue?</a>'
                    })
                });
        }, */

        deleted(info) {
            Swal.fire({
                title: '¿Realmente deseas eliminar?',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: 'Confirmar',
                denyButtonText: `Cancelar`,
            }).then((result) => {
                if (result.isConfirmed) {
                    this.ProductsDelete(info.id);
                } else if (result.isDenied) {
                    Swal.fire('Cancelando la eliminación', '', 'info')
                }
            })
        },
        
        async ProductsDelete(product) {
            const url = `${this.page}${product}`;

            await axios.delete(url)
                .then(() => {
                    setTimeout(() => {
                        this.ProductsLoad();
                        Swal.fire('¡Producto eliminado!', '', 'success');
                    }, 800);
                })
                .catch(({ err }) => {
                    console.error(err);
                    Swal.fire('¡Ha ocurrido un error!', '', 'error');
                })
        }
    }
}
</script>
<style>
.card img {
    width: 100%;
    height: auto;
    max-width: 30vmin;
    border-radius: 20px;
}
</style>