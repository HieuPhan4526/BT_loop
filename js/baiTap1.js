/**
 * Khối 1 : tổng biến bước nhảy sum
 * 
 * Khối 2 : tạo hàm
 *  B1: sử dụng for đk đếm bước nhảy <= n
 *      Nếu sum < 10000 => n++, sum = sum + n;
 *  B2: gắn sự kiện onclick và hiển thị trên UI
 * Khối 3 : số nguyên dương nhỏ nhất : n
 */
//! Bài làm

 var n = 1;
 var sum = 0;
function tinhTong() {
 
    for ( var i = 1; i <= n ; i++) {
       if (sum < 10000) {
           n++;
           sum += n;
       }
    }
    document.getElementById("txtKetQua").innerHTML = "Tổng: " + sum + "<br> Số nguyên dương nhỏ nhất: " + n
    
}