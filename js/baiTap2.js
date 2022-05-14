/**
 * Khối 1: soX, soN
 * 
 * Khối 2:
 * B1: tạo hàm và lấy giá trị từ form
 * B2: sử dụng hàm for
 *       var i ; i >= 0 , i++
 *        i =+ x * x^n
 * 
 * 
 * Khối 3 : sum
 * 
 */

function tinhTongTich() {
    var soX = document.getElementById("num1").value;
    var soN = document.getElementById("num2").value;
    var sum = 0;
    var tinhGiaiThua = 1;
    for(var i = 1; i <= soN; i++){
        tinhGiaiThua = tinhGiaiThua * soX;
        sum += tinhGiaiThua;
        }
        document.getElementById("txtTinhTong").innerHTML = "Tổng: " + sum;
    }
    
