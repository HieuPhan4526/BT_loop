/**
 * Khối 1: n
 * 
 * 
 * Khối 2: tạo hàm
 *      + lấy giá trị từ form
 *      + sử dụng vòng lặp for (i=1;i<=n;i++)
 *             tinhGiaiThua = tinhGiaiThua*n
 * 
 * Khối 3: tinhGiaiThua
 */

//!Bai lam

function tinhTich() {
    var  n = document.getElementById("number").value;
    var tinhGiaiThua = 1;
    for (var i = 1; i <= n; i++) {
        tinhGiaiThua *= i;
        // console.log(tinhGiaiThua);
    }
    document.getElementById("txtTinhGiaiThua").innerHTML = tinhGiaiThua;
}