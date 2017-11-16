export class StringLib {
    
        public static shuffle(cadena:string):string{
            let arr = cadena.split('');
            for (let  i = arr.length; i > 0;) {
              let random = Math.floor(Math.random() * i);
              let aux = arr[--i];
              arr[i] = arr[random];
              arr[random] = aux;
            }
            return arr.join('');
        }
     
        public static check(cadena,aux){
            return cadena === aux;
        }
    
    }
    