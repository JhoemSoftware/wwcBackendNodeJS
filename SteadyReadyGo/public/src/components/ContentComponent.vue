<template>
    <div class="container">
        <table class="table table-dark table-hover">
            <thead>
                <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Referencia</th>
                    <th scope="col">Cilindraje</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Unidades Disponibles</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="data in result" v-bind:key="data.id">
                    <th scope="row">{{ data.id }}</th>
                    <td>{{ data.name }}</td>
                    <td>{{ data.reference }}</td>
                    <td>{{ data.cylinder }}</td>
                    <td>$ {{ data.price }}</td>
                    <td>{{ data.stock }}</td>
                    <td>
                        <button type="button" class="btn btn-primary">
                            <i class="fa-solid fa-eye"></i>
                        </button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-secondary">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-danger" @click="deleted(data)">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
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