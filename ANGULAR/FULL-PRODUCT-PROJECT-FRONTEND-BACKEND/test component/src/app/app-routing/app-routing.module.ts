import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SampleComponent } from '../sample/sample.component';
import { IncdecComponent } from '../incdec/incdec.component';

export const routes :Routes=[
  { path:'home',component:HomeComponent},
  { path:'sample',component:SampleComponent},
  { path:'incdec',component:IncdecComponent},
]

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
