/**
 * Khối 1: tạo danh sách thẻ div
 * content = ""
 * 
 * Khối 2: tạo for với đk i < 11
 * 
 *          B1: nếu i % 2 == 0 => content = content + "div chẵn"
 *              Ngược lại => content = content + "div lẻ".
 *          B2: gắn sự kiện onclick.
 * Khối 3: hiển thị UI
 */

//! Bài làm

var content = ""

function changeColor() {
    for (var i = 0; i < 10; i++) {
        if ((i + 1) % 2 == 0) {
           content += content.innerHTML = "<h2 style = 'background-color :red ;color: white'>div chẵn</h2><br>";

        }else{
            content += content.innerHTML = "<h2 style = 'background-color :blue ;color: white'>div le</h2><br>";
        }


    }
    document.getElementById("txtTaoDiv").innerHTML = content
}

