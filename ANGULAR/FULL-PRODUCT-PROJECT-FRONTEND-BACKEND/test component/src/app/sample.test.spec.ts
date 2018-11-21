function helloWorld():string{
    return 'Hello World !';
}

// describe(string,function)
xdescribe("Hello World Suit",function(){
    it("Say Hello To World",()=>{
        expect(helloWorld()).toEqual('Hello World !')
    });
    it("Say Hello To World",()=>{
        expect(helloWorld()).toBe('Hello World !')
    });
    it("Say Hello To World",()=>{
        expect(helloWorld()).toContain('World')
    });
});