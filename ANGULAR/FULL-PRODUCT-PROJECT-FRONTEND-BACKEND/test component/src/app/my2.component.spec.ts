import {MyComponent} from './my2.component';
import { log } from 'util';
xdescribe("The Users Suit ",()=>{
    let mycomp;
    beforeEach(()=>{
        mycomp = new MyComponent(); // setup call to create object
        console.log("This will exicute befor each it block");
        
    });
    afterEach(()=>{
        mycomp =null;
        console.log("This will Exicute afyter evey it block");
        
    })
    it("Should Contains 'John' if cacatstr called with john  Test Happy Flow",()=>{
        expect(mycomp.concatStr("John")).toContain("John");
        expect(mycomp.incVal()).toBe(0);
    });
    it("Should Contains 'John' if getUsers called with john  Test Happy Flow",()=>{
        expect(mycomp.getUsers()).toContain("John");
        expect(mycomp.getUsers()).toContain("Sam");
        expect(mycomp.getUsers()).toContain("Mike");
        expect(mycomp.incVal()).toBe(0);
    });
    // it("Should return 30 if 10+20  Test Happy Flow",()=>{
    //     expect(addition(10,20)).toEqual(30);
    // });
    // it("Should return 20 if -10+30  Test Happy Flow",()=>{
    //     expect(addition(-10,30)).toEqual(20);
    // });
});