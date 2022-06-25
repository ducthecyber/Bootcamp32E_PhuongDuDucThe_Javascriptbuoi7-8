//Xây dựng mảng chung cho toàn bài
// var mangSo = [-6, -8, -16, -20, -7, -2, -300, -6, - 1, -2];
var mangSo = [];
document.getElementById('themPhanTu').onclick = function () {
    //input: phanTu: number
    var phanTu = Number(document.getElementById('phanTu').value);
    //output: mang: string
    var output = '';
    //progress
    mangSo.push(phanTu);
    output = '[' + mangSo + ']';
    document.getElementById('mang').innerHTML = output;
}

//Bài tập 1: Tổng số dương trong mảng
document.getElementById('btnTinhTong').onclick = function () {
    //input mangSo: array
    //output: tongSoDuong: number
    var tongSoDuong = 0;
    console.log(mangSo);
    //progress
    for (var index = 0; index < mangSo.length; index++) {
        if (mangSo[index] > 0) {
            tongSoDuong += mangSo[index];
        }
    }
    document.getElementById('ketQuaB1').innerHTML = 'Tổng số dương là ' + tongSoDuong;
}

//Bài tập 2: Đếm số dương
document.getElementById('btnDemSo').onclick = function () {
    //input: mangSo: array
    //output: demSoDuong: number
    var demSoDuong = 0;
    for (var index = 0; index < mangSo.length; index++) {
        if (mangSo[index] > 0) {
            demSoDuong++;
        }
    }
    document.getElementById('ketQuaB2').innerHTML = 'Số lượng số dương là ' + demSoDuong;
}

//Bài tập 3: Tìm số nhỏ nhất
document.getElementById('btnSoNhoNhat').onclick = function () {
    //input: mangSo: array
    //output: soNhoNhat: number
    var soNhoNhat = mangSo[0];
    //progress
    for (var index = 0; index < mangSo.length; index++) {
        if (soNhoNhat > mangSo[index]) {
            soNhoNhat = mangSo[index];
        }
    }
    document.getElementById('ketQuaB3').innerHTML = 'Số nhỏ nhất là ' + soNhoNhat;
}

//Bài tập 4: Tìm số dương nhỏ nhất trong mảng
var mangSoDuong = [];
document.getElementById('btnSoDuongNhoNhat').onclick = function () {
    //input: mangSo: array
    //output: ketQuaB4: string
    var ketQuaB4 = '';
    //progress
    for (index = 0; index < mangSo.length; index++) {
        if (mangSo[index] > 0) {
            mangSoDuong.push(mangSo[index]);
        }
    }
    if (mangSoDuong.length > 0) {
        var soDuongNhoNhat = mangSoDuong[0];
        for (index = 0; index < mangSoDuong.length; index++) {
            if (soDuongNhoNhat > mangSoDuong[index]) {
                soDuongNhoNhat = mangSoDuong[index];
            }
        }
        ketQuaB4 = 'Số dương nhỏ nhất là ' + soDuongNhoNhat;
    }
    else {
        ketQuaB4 = 'Mảng không chứa số dương';
    }
    // console.log(mangSoDuong);
    document.getElementById('ketQuaB4').innerHTML = ketQuaB4;
}

//Bài tập 5: Tìm số chẵn cuối cùng trong mảng
document.getElementById('btnSoChanCuoiCung').onclick = function () {
    //input: mangSo: array
    //output: soChanCuoiCung:number
    var soChanCuoiCung = mangSo[0];
    //progress
    for (var index = 0; index < mangSo.length; index++) {
        if (mangSo[index] % 2 == 0) {
            soChanCuoiCung = mangSo[index];
        }
        else {
            soChanCuoiCung = 'không có! ';
        }
    }
    document.getElementById('ketQuaB5').innerHTML = 'Số chẵn cuối cùng là ' + soChanCuoiCung;
}

//Bài tập 6: Đổi chỗ phần tử trong mảng
document.getElementById('btnDoiCho').onclick = function () {
    //input: mangSo: array, soThuTuX: number;soThuTuY: number
    var X = Number(document.getElementById('soThuTuX').value);
    var Y = Number(document.getElementById('soThuTuY').value);
    //output: newMangSo: array
    var newMangSo = '';
    //progress
    var bienTam = mangSo[X];
    mangSo[X] = mangSo[Y];
    mangSo[Y] = bienTam;
    var newMangSo = '[ ' + mangSo + ' ]';
    document.getElementById('ketQuaB6').innerHTML = 'Mảng sau khi đổi chỗ: ' + newMangSo;
}

//Bài tập 7: Sắp xếp theo thứ tự tăng dần
document.getElementById('btnSapXep').onclick = function () {
    //input: mangSo: array
    //output: newArray: array
    var newArray = '';
    //progress
    newArray = mangSo.sort(function (a, b) { return a - b });
    output = '[ ' + newArray + ' ]';
    document.getElementById('ketQuaB7').innerHTML = 'Mảng theo thứ tự tăng dần là: ' + output;
}

//Bài tập 8: Tìm số nguyên tố đầu tiên trong mảng
document.getElementById('btnTimSoNguyen').onclick = function () {
    //input: mangSo: array
    //output: soNguyen: string
    var soNguyenTo = '';
    //progress

    for (index = 0; index < mangSo.length; index++) {
        var uoc = 1;
        var sum = 0;
        while (uoc <= mangSo[index]) {
            if (mangSo[index] % uoc == 0) {
                sum += 1;
            }
            uoc++;
        }
        if (sum == 2) {
            soNguyenTo = 'Số nguyên tố đầu tiên là ' + mangSo[index];
            break;
        }
        else {
            soNguyenTo = -1 + ' (Mảng không có số nguyên tố) ';
        }
    }
    document.getElementById('ketQuaB8').innerHTML = soNguyenTo;
}

//Bài 9: Nhập thêm 1 mảng số thực. Tìm bao nhiêu số nguyên trong đó
var mangSoMoi = [];
document.getElementById('btnNhapSoB9').onclick = function () {
    //input: soNhapB9: number
    var soNhapB9 = Number(document.getElementById('nhapSo').value);
    //output: outputB9
    var outputB9 = '';
    //progress
    mangSoMoi.push(' ' + soNhapB9 + ' ');
    outputB9 = '[' + mangSoMoi + ']';
    document.getElementById('mangMoi').innerHTML = outputB9;
}

document.getElementById('btnDemSoNguyen').onclick = function () {
    //input: mangSoMoi: array
    //output: demSoNguyen: number
    var demSoNguyen = 0;
    //progress

    for (index = 0; index < mangSoMoi.length; index++) {
        var soI = Number.isInteger(+mangSoMoi[index]);
        if (soI == true) {//kiểu dữ liệu boolean soI == true
            demSoNguyen += 1;
        }
    }
    document.getElementById('ketQuaB9').innerHTML = 'Có ' + demSoNguyen + ' số nguyên trong mảng';
}

//Bài tập 10:So sánh số lượng số lượng số âm và số dương
document.getElementById('btnSoSanh').onclick = function () {
    //input: mangSo: array
    //output: soSanh: string
    var soSanh = '';
    //progress
    var soAm = 0;
    var soDuong = 0;
    for (index = 0; index < mangSo.length; index++) {
        if (mangSo[index] > 0) {
            soDuong += 1;
        }
        else if (mangSo[index] < 0) {
            soAm += 1;
        }
        else { }
    }
    if (soDuong > soAm) {
        soSanh = 'Số lượng số dương > Số lượng số âm trong mảng';
    }
    else if (soDuong < soAm) {
        soSanh = 'Số lượng số âm > Số lượng số dương trong mảng';
    }
    else {
        soSanh = 'Số lượng số dương = Số lượng số âm trong mảng';
    }
    document.getElementById('ketQuaB10').innerHTML = soSanh;
}