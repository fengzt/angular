// a-pipe
import { Pipe, PipeTransform } from '@angular/core';

// Khai báo trong module (giống component)
/*
    {{value | pipeName : params}}
    vd: {{value | shortcut: 100}}

    Với 100 là giới hạn - limit kí tự của đoạn văn bản
    Sẽ truyền limit khi gọi hàm
*/

@Pipe({
  name: 'shortcut',
})

export class ShortCutPipe implements PipeTransform {
  // ---
  // tham số thứ 2: có thể khai báo dạng đối tượng, gồm nhiều điều kiện

  transform(value: any, limit: number): any {
    if (value.length > limit) {
      return value.substr(0, limit) + '...';
    }

    return value;
  }
}
