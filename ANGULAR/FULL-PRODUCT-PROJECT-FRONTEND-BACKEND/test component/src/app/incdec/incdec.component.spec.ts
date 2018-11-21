import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncdecComponent } from './incdec.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('IncdecComponent Suit Block', () => {
  let component: IncdecComponent;
  let fixture: ComponentFixture<IncdecComponent>;
  let de :DebugElement;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[
        IncdecComponent
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(IncdecComponent);
    console.log("fixture ====>",fixture);
    de = fixture.debugElement;    
  });

  it("Should Increament/Decreament Value Test Happy Flow",()=>{
    expect(fixture.componentInstance).toBeTruthy();
    //For Increament method
    fixture.componentInstance.increament();
    expect(fixture.componentInstance.value).toEqual(1);
    expect(fixture.componentInstance.message).toEqual("You can still Increase Value");
    //For Decreament Method

    fixture.componentInstance.decrement();
    expect(fixture.componentInstance.value).toEqual(0);
    expect(fixture.componentInstance.message).toEqual("You can still decrease Value");

  });
  it("Should have HTML Template Test Happy Flow",()=>{
    de.query(By.css('button.increament')).triggerEventHandler('click',null)
    
    fixture.detectChanges();

    console.log(de.query(By.css('h1')).nativeElement);
    
    var value = de.query(By.css('h1')).nativeElement.innerText;
    expect(value).toEqual('1')
  })

});
