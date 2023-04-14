<template>
    <div class="container">
        <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#modalAdd">
            <i class="fa-solid fa-plus"></i>
        </button>

        <!-- Modal Add -->
        <div class="modal fade" id="modalAdd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Registro de Productos</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <!-- Form -->
                        <form @submit.prevent="save">
                            <div class="form-group mb-3">
                                <label class="form-label">Nombre de Producto</label>
                                <input autofocus required tabindex="1" type="text" class="form-control"
                                    v-model="product.name" />
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label">Referencia de Producto</label>
                                <input required tabindex="2" type="text" class="form-control" v-model="product.reference" />
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-label">Precio de Producto</label>
                                <input required tabindex="3" type="text" class="form-control" v-model="product.price" />
                            </div>
                            <div class="form-group mb-3 row">
                                <div class="col-6">
                                    <label class="form-label">Cilindraje Total de Motor</label>
                                    <input required tabindex="4" type="text" class="form-control"
                                        v-model="product.cylinder" />
                                </div>
                                <div class="col-6">
                                    <label class="form-label">Cantidad existencias</label>
                                    <input required tabindex="5" type="text" class="form-control" v-model="product.stock" />
                                </div>
                            </div>
                            <div class="form-group mb-3">
                                <button type="submit" class="btn btn-info" tabindex="6">
                                    <i class="fa-solid fa-floppy-disk"></i>
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>

        <table class="table table-dark table-hover mt-5">
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
                        <button type="button" class="btn btn-primary" @click="ProductLoad(data.id)">
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
            product: {
                name: "",
                reference: "",
                price: "",
                cylinder: "",
                stock: "",
            },
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

        async ProductLoad(info) {
            await axios.get(this.page + info)
                .then(({ data }) => this.result = data.product)
                .catch(({ err }) => console.log(err))
        },

        save() {
            this.ProductSave();
        },

        async ProductSave() {
            await axios.post(this.page, this.product)
                .then((data) => {
                    const { success } = data.data;
                    setTimeout(() => {
                        this.ProductsLoad();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: success,
                            showConfirmButton: false,
                            timer: 1000
                        });
                    }, 800);
                })
                .catch(({ response }) => {
                    const { error } = response.data;
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: error
                    })
                });
        },

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