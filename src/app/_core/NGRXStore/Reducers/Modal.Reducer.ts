// https://ngrx.io/guide/store/install

import { Action } from "@ngrx/store";

const stateDefault: FilmModal = {
    maPhim: '1',
    tenPhim: 'Tên Phim Reducer',
    hinhAnh: 'https://picsum.photos/id/1/200/200'
}

export const modalReducer = (state: FilmModal = stateDefault, action: any) => {
    
    switch (action.type) {
        case 'XEM_CHI_TIET': {
            state = action.film;
            return {...state}
        }

        default: return {...state}
    }
}


interface FilmModal{
    maPhim: string,
    tenPhim: string,
    hinhAnh:string
}