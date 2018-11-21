export class MyComponent {
    value =0;
    concatStr(str):string{
        return "Hello " +str +" ! Welocome"
    }
    users =["John","Sam","Mike"];
    getUsers(){
        return this.users;
    }
    incVal(){
        return this.value++;
    }
}