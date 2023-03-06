function Validation() {
    this.kiemTraRong = function (value, spanId, mess) {
      if (value === "") {
        getEle(spanId).style.display = "block";
        getEle(spanId).innerHTML = mess;
        return false;
      }
  
      getEle(spanId).style.display = "none";
      getEle(spanId).innerHTML = "";
      return true;
    };
  
    // this.kiemTraChucVu = function(idSelect, spanId, mess){
    //   if(getEle(idSelect).selectedIndex != 0){
    //     getEle(spanId).style.display = "none";
    //     getEle(spanId).innerHTML = "";
    //     return true;
    //   }else 
    //   getEle(spanId).style.display = "block";
    //   getEle(spanId).innerHTML = mess;
    //   return false;
    // };
  
    // this.kiemTraDoDaiKyTu = function(value, spanId, mess, min, max){
    //   if(value.length >= min && value.length <= max){
    //     getEle(spanId).style.display = "none";
    //     getEle(spanId).innerHTML = "";
    //     return true;
    //   }else 
    //   getEle(spanId).style.display = "block";
    //   getEle(spanId).innerHTML = mess;
    //   return false;
    // };
  
    this.kiemTraChuoiKyTu = function(value, spanId, mess){
      var letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
      if(value.match(letter)){
        getEle(spanId).style.display = "none";
        getEle(spanId).innerHTML = "";
        return true;
      }
      getEle(spanId).style.display = "block";
      getEle(spanId).innerHTML = mess;
      return false;
    };
  
    this.kiemTraEmail = function(value, spanId, mess){
      var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(value.match(letter)){
        getEle(spanId).style.display = "none";
        getEle(spanId).innerHTML = "";
        return true;
      }
      getEle(spanId).style.display = "block";
      getEle(spanId).innerHTML = mess;
      return false;
    };
  
    // this.kiemTraMatKhau = function(value, spanId, mess){
    //   var letter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/s;
    //   if(value.match(letter)){
    //     getEle(spanId).style.display = "none";
    //     getEle(spanId).innerHTML = "";
    //     return true;
    //   }
    //   getEle(spanId).style.display = "block";
    //   getEle(spanId).innerHTML = mess;
    //   return false;
    // };
  
    // this.kiemTraMaNV = function(value, spanId, mess, arr){
    //   var exist = false;
  
    //   for(var i = 0; i < arr.length; i++){
    //     var nv = arr[i];
    //     if(nv.maNV == value){
    //       exist = true;
    //       break;
    //     }
    //   }
  
    //   if (exist) {
    //     getEle(spanId).style.display = "block";
    //     getEle(spanId).innerHTML = mess;
    //     return false;
    //   }
    //     getEle(spanId).style.display = "none";
    //     getEle(spanId).innerHTML = "";
    //     return true;
  
    // };
  }
  