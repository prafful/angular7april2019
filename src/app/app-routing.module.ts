import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamilyComponent } from './nuclearfamily/family/family.component';
import { SuperComponent } from './directive/super/super.component';
import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { ReviewComponent } from './review/review/review.component';
import { FatherComponent } from './nuclearfamily/father/father.component';
import { MotherComponent } from './nuclearfamily/mother/mother.component';
import { DaughterComponent } from './nuclearfamily/daughter/daughter.component';
import { SonComponent } from './nuclearfamily/son/son.component';
import { TemplateformComponent } from './forms/templateform/templateform.component';

const routes: Routes = [ 
  {
  path:'',
  redirectTo:'directive',
  pathMatch:"full"
},
{
  path:'family',
  component:FamilyComponent,
  children:[
    {
      path:'',
      redirectTo:'father',
      pathMatch:'full'
    },
    {
      path:'father',
      component:FatherComponent
    },
    {
      path:'mother',
      component:MotherComponent
    },
    {
       path:'daughter',
       component:DaughterComponent
    },
    {
      path:'son',
      component:SonComponent
    }
   
  ]
},
{
  path:'directive',
  component:SuperComponent
},
{
  path:'review',
  component:ReviewComponent
},
{
  path:'template',
  component:TemplateformComponent
},
{
  path:'**',
  component:NotfoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
