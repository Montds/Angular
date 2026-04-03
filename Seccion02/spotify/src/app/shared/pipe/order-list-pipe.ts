import { Pipe, PipeTransform } from '@angular/core';
import {TrackModel} from '@core/models/tracks.model';
@Pipe({
  name: 'orderList',
})

export class OrderListPipe implements PipeTransform
{
  transform(value: any[] , args:string | null = null , sort:string="asc"): TrackModel[]
  {
    //para ordenar los tracks tengo que ver si hay una libreria que me deje hacer esto
        try
        {
          if (args === null)
          {
            return value;
          }

          else
          {
            //aqui se ordena la lista
            //para indicar el comportamiento del sort, es obligatorio colocarlo
            const tmpList = value.sort( (a, b) =>
            {

                  if (a[args] < b[args])
                  {
                    return -1;
                  }
                  if (a[args] === b[args])
                  {
                    return 0;
                  }
                  if (a[args] > b[args])
                  {
                    return 1;
                  }
                  return 1;
              }
              );

            return (sort === 'asc') ? tmpList : tmpList.reverse();
          }

        }
        catch(err)
        {
          console.log("un error paso");
          return value;
        }

  }

}
