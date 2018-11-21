import { addition ,substraction,IncCounter} from './my.component';

xdescribe("The Addition Suit",()=>{
    xit("Should return 0 if 0+0  Test Happy Flow",()=>{
        expect(addition(0,0)).toEqual(0);
    });
    xit("Should return 30 if 10+20  Test Happy Flow",()=>{
        expect(addition(10,20)).toEqual(30);
    });
    xit("Should return 20 if -10+30  Test Happy Flow",()=>{
        expect(addition(-10,30)).toEqual(20);
    });
});
xdescribe("The Substraction Suit Wich always give Positive",()=>{
    xit("Should return 0 if 0-0  Test Happy Flow",()=>{
        expect(substraction(0,0)).toEqual(0);
    });
    xit("Should return 0 if 10-10  Test Happy Flow",()=>{
        expect(substraction(10,10)).toEqual(0);
    });
    xit("Should return 30 if 10-20  Test Happy Flow",()=>{
        expect(substraction(10,20)).toEqual(10);
    });
    xit("Should return -40 if -10-30  Test Happy Flow",()=>{
        expect(substraction(-10,30)).toEqual(40);
    });
    xit("Should return 'operation not allowed' if 10a-30  Test Happy Flow",()=>{
        expect(substraction("10a",30)).toEqual("operation not allowed");
    });
})