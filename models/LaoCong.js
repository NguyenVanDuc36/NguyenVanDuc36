import {NhanVien} from './nhanVien.js'
export class LaoCong extends NhanVien{
    
    constructor(name){
        super(name)
    }

    CongViec(){
        console.log('Cong Viec');
    }

    tinhLuong(){
        return super.tinhLuong + 200;
    }
}
