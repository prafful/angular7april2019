import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './app.component';
import { FamilyComponent } from './nuclearfamily/family/family.component';
import { FatherComponent } from './nuclearfamily/father/father.component';
import { MotherComponent } from './nuclearfamily/mother/mother.component';
import { DaughterComponent } from './nuclearfamily/daughter/daughter.component';
import { SonComponent } from './nuclearfamily/son/son.component';
import { SuperComponent } from './directive/super/super.component';
import { NotfoundComponent } from './notfound/notfound/notfound.component';
import { ReviewComponent } from './review/review/review.component';
import { DummyComponent } from './dummy/dummy/dummy.component';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { TaskComponent } from './todo/task/task.component';
import { InbuiltComponent } from './pipe/inbuilt/inbuilt.component';
import { SortstringPipe } from './custompipe/sortstring.pipe';
import { SortnumPipe } from './custompipe/sortnum.pipe';
import { ConsumeserviceComponent } from './consume/consumeservice/consumeservice.component';
import { Consumeservice2Component } from './consume/consumeservice2/consumeservice2.component';
import { RemoteComponent } from './consume/remote/remote.component';
import { UpdateFriendComponent } from './consume/update-friend/update-friend.component';
import { ParentComponent } from './eventbinding/parent/parent.component';
import { ChildComponent } from './eventbinding/child/child.component';
import { AnimateComponent } from './animation/animate/animate.component';
import { Delete1Component } from './delete/delete1/delete1.component';
import { Delete2Component } from './delete/delete2/delete2.component';
import { Delete3Component } from './delete/delete3/delete3.component';
import { Delete4Component } from './delete/delete4/delete4.component';
import { Delete5Component } from './delete/delete5/delete5.component';
import { Delete6Component } from './delete/notinfolder/delete6.component';
import { Delete7Component } from './delete/notinfolder/delete7.component';
import { Delete8Component } from './delete/notinfolder/delete8.component';
import { SampleComponent } from './bootstrap/sample/sample.component';
//import { LazyComponentComponent } from './lazy/lazy-component/lazy-component.component';


@NgModule(
  {
    declarations: [ RootComponent, 
                    FamilyComponent, 
                    FatherComponent, 
                    MotherComponent, 
                    DaughterComponent, 
                    SonComponent, 
                    SuperComponent, 
                    NotfoundComponent, 
                    ReviewComponent, 
                    DummyComponent, 
                    TemplateformComponent, 
                    ReactiveComponent, 
                    TaskComponent,
                    InbuiltComponent, 
                    SortstringPipe, 
                    SortnumPipe, 
                    ConsumeserviceComponent, 
                    Consumeservice2Component, 
                    RemoteComponent, 
                    UpdateFriendComponent, 
                    ParentComponent, 
                    ChildComponent, 
                    AnimateComponent, 
                    Delete1Component, 
                    Delete2Component, 
                    Delete3Component, 
                    Delete4Component,
                     Delete5Component, 
                     Delete6Component, 
                     Delete7Component, 
                     Delete8Component, 
                     SampleComponent
                     //LazyComponentComponent
                    ],
    imports: [ BrowserModule, 
              AppRoutingModule,
              FormsModule,
              ReactiveFormsModule,
              HttpClientModule,
              BrowserAnimationsModule ],
    providers: [],
    bootstrap: [RootComponent]
  }
)

export class RootModule { }
