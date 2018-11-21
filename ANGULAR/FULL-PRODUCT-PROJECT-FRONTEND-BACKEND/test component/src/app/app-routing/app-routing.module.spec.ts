import { AppRoutingModule,routes } from './app-routing.module';
import { HomeComponent } from '../home/home.component';
import { SampleComponent } from '../sample/sample.component';
import { IncdecComponent } from '../incdec/incdec.component';
import { DataComponent } from '../data/data.component';

describe('AppRoutingModule', () => {
  let appRoutingModule: AppRoutingModule;

  beforeEach(() => {
    appRoutingModule = new AppRoutingModule();
  });

  it('should create an instance', () => {
    expect(appRoutingModule).toBeTruthy();
  });
  it('should contain Home routing path and components', () => {
    expect(routes).toContain({ path:'home',component:HomeComponent});
  });
  it('should contain Sample routing path and components', () => {
    expect(routes).toContain({ path:'sample',component:SampleComponent});
  });
  it('should contain IncDec routing path and components', () => {
    expect(routes).toContain({ path:'incdec',component:IncdecComponent});
    expect(routes).not.toContain({ path:'data',component:DataComponent});
  });
});
