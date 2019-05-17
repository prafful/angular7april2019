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
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { TaskComponent } from './todo/task/task.component';
import { InbuiltComponent } from './pipe/inbuilt/inbuilt.component';
import { ConsumeserviceComponent } from './consume/consumeservice/consumeservice.component';
import { Consumeservice2Component } from './consume/consumeservice2/consumeservice2.component';
import { RemoteComponent } from './consume/remote/remote.component';
import { UpdateFriendComponent } from './consume/update-friend/update-friend.component';
import { ParentComponent } from './eventbinding/parent/parent.component';
import { AnimateComponent } from './animation/animate/animate.component';

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
  path:'reactive',
  component:ReactiveComponent
},
{
  path:'todo',
  component:TaskComponent
},
{
  path:'pipe',
  component:InbuiltComponent
},
{
  path:'consume1',
  component:ConsumeserviceComponent
},
{
  path:'consume2',
  component:Consumeservice2Component
},
{
  path:'remote',
  component:RemoteComponent
},
{
  path:'updatefriend/:myid',
  component:UpdateFriendComponent
},
{
  path:'eventbinding',
  component:ParentComponent
},
{
  path:'animate',
  component:AnimateComponent
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
