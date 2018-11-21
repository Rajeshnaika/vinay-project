import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Router,RouterModule} from '@angular/router';
import { RouterTestingModule} from '@angular/router/testing';
class RouterDummy{
  navigate(params){}
}
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers:[{ provide:Router,useClass:RouterDummy}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate /sample uri ', () => {
    let router = TestBed.get(Router);
    console.log("Dummy ROuter ",router);
    
    let spy = spyOn(router,'navigate');
    component.navTO();
    component.increament();

    expect(spy).toHaveBeenCalledWith(['/sample'])

  });
});
