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
 
    public static sort(cadena:string):string{
        return cadena.split('').sort().join('');
    }
    public static randLetter(){
        return String.fromCharCode(97 + Math.floor(Math.random()*26));
    }
    public static replaceLetter(cadena:string):string{
        let index = Math.floor(Math.random()*100 % cadena.length);
        let nueva = cadena.slice(0,index) + cadena.slice(index + 1);
        nueva +=StringLib.randLetter();
        return nueva;
    }
    public static check(cadena,aux){
        return StringLib.sort(cadena) == StringLib.sort(aux);
    }

}
