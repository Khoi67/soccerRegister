var callApi = new CallApi();
var validation = new Validation();

function getEle(id) {
  return document.getElementById(id);
}

function getListProduct() {
  getEle("loader").style.display = "block";
  var promise = callApi.fetchListData();

  promise
    .then(function (result) {
      renderData(result.data);
      getEle("loader").style.display = "none";
    })
    .catch(function (error) {
      console.log(error);
      getEle("loader").style.display = "block";
    });
}

getListProduct();

function renderData(data) {
  var content = "";
  data.forEach(function (product, i) {
    content += `
        <tr>
           <td>${i + 1}</td>
           <td>${product.tenSP}</td>
           <td>${product.gia}</td> 
           <td>
           <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onClick="handleEdit(${
             product.id
           })">Edit</button>
           <button class="btn btn-danger" data-toggle="modal" data-target="#loginModal" onClick="login(${
             product.id
           })">Delete</button>
           </td>
        </tr>
        `;
  });
  getEle("tblDanhSachSP").innerHTML = content;
}
function login(id) {
  document.getElementsByClassName("modal-title")[1].innerHTML = "Đăng nhập";
  var btnLogin = `<button class="btn btn-success" onclick="handleDelete(${id})">Xác thực</button>`;
  document.getElementsByClassName("modal-footer")[1].innerHTML = btnLogin;
}
/**
 * Delete Products
 */
function handleDelete(id) {
  
  var tenSP = getEle("login").value;
  var giaSP = getEle("password").value;
  if (tenSP === "admin" && giaSP === "admin123") {
    callApi
      .deleteProduct(id)
      .then(function () {
        getListProduct();
        document.getElementsByClassName("close")[1].click();
      })
      .catch(function (error) {
        console.log(error);
      });
  }else{
    alert("(*) Không được xóa!");
    document.getElementsByClassName("close")[1].click();
  }
}
/**
 * Add
 * Thêm
 * Chức năng
 */
getEle("btnThemSP").addEventListener("click", function () {
  document.getElementsByClassName("modal-title")[0].innerHTML =
    "Đăng ký tham gia";
  var btnAdd =
    '<button class="btn btn-success" onclick="handleAdd()">Đồng ý</button>';
  document.getElementsByClassName("modal-footer")[0].innerHTML = btnAdd;
});

function handleAdd() {
  var tenSP = getEle("TenSP").value;
  var giaSP = getEle("GiaSP").value;
  var isValid = true;
  isValid &=
    validation.kiemTraRong(tenSP, "tbTen", "(*) Vui lòng nhập họ tên!") &&
    validation.kiemTraChuoiKyTu(tenSP, "tbTen", "(*) Họ tên không hợp lệ!");
  // Email
  isValid &=
    validation.kiemTraRong(giaSP, "tbEmail", "(*) Vui lòng nhập email!") &&
    validation.kiemTraEmail(giaSP, "tbEmail", "(*) Email không hợp lệ!");

  if (!isValid) return null;

  var product = new Product("", tenSP, giaSP);

  callApi
    .addProduct(product)
    .then(function () {
      document.getElementsByClassName("close")[0].click();
      getListProduct();
    })
    .catch(function (error) {
      console.log(error);
    });
}

/**
 * Edit
 */

function handleEdit(id) {
  document.getElementsByClassName("modal-title")[0].innerHTML = "Edit sản phẩm";
  var btnUpdate = `<button class="btn btn-success" onclick="handleUpdate(${id})">Update</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = btnUpdate;

  callApi
    .editProduct(id)
    .then(function (result) {
      var product = result.data;
      getEle("TenSP").value = product.tenSP;
      getEle("GiaSP").value = product.gia;
    })
    .catch(function (error) {
      console.log(error);
    });
}
function handleUpdate(id) {
  var tenSP = getEle("TenSP").value;
  var giaSP = getEle("GiaSP").value;

  var isValid = true;
  isValid &=
    validation.kiemTraRong(tenSP, "tbTen", "(*) Vui lòng nhập họ tên!") &&
    validation.kiemTraChuoiKyTu(tenSP, "tbTen", "(*) Họ tên không hợp lệ!");
  // Email
  isValid &=
    validation.kiemTraRong(giaSP, "tbEmail", "(*) Vui lòng nhập email!") &&
    validation.kiemTraEmail(giaSP, "tbEmail", "(*) Email không hợp lệ!");

  if (!isValid) return null;

  var product = new Product(id, tenSP, giaSP);

  callApi
    .updateProduct(product)
    .then(function () {
      document.getElementsByClassName("close")[0].click();
      getListProduct();
    })
    .catch(function (error) {
      console.log(error);
    });
}
