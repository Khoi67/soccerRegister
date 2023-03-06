function CallApi() {
    this.fetchListData = function () {
        /**
         * Promise
         *  - Pending
         *  - Resolve
         *  - Reject
         */
        return axios({
            url: "https://63df6f47a76cfd41058267d7.mockapi.io/api/PhoneProducts",
            method: "GET",
        });
    };
    this.deleteProduct = function (id) {
        return axios({
            url: `https://63df6f47a76cfd41058267d7.mockapi.io/api/PhoneProducts/${id}`,
            method: "DELETE",
        });
    };
    this.addProduct = function (product) {
        return axios({
            url: "https://63df6f47a76cfd41058267d7.mockapi.io/api/PhoneProducts",
            method: "POST",
            data: product,
        });
    }
    this.editProduct = function (id) {
        return axios({
            url: `https://63df6f47a76cfd41058267d7.mockapi.io/api/PhoneProducts/${id}`,
            method: "GET",
        });
    }
    this.updateProduct = function (product) {
        return axios({
            url: `https://63df6f47a76cfd41058267d7.mockapi.io/api/PhoneProducts/${product.id}`,
            method: "PUT",
            data: product,
        });
    }

}