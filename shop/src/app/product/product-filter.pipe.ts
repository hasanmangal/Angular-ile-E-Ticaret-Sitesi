import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product'
@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";

    return filterText ? value.filter((p: Product) =>
      p.name.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }
}

//   transform(value: Product[], filterText?: string ):Product[] { filterText= filterText?filterText.toLocaleLowerCase():null
//          return filterText?value.filter((p:Product)=>p.name.toLocaleLowerCase().trim().indexOf(filterText)!==-1):value;  }
// 




// export class ProductFilterPipe implements PipeTransform {


//   transform(value: Product[], filterText?: string): Product[] {
//     filterText = filterText?filterText.toLocaleLowerCase():null!
//     return filterText?value.filter((p:Product)=>p.name.toLocaleLowerCase().indexOf(filterText!)!==-1):value;
//   }

// }

