import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


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
                    SortstringPipe, SortnumPipe, ConsumeserviceComponent, Consumeservice2Component, RemoteComponent, UpdateFriendComponent, ParentComponent, ChildComponent],
    imports: [ BrowserModule, 
              AppRoutingModule,
              FormsModule,
              ReactiveFormsModule,
              HttpClientModule ],
    providers: [],
    bootstrap: [RootComponent]
  }
)

export class RootModule { }
