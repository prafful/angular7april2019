import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


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
                    TemplateformComponent],
    imports: [ BrowserModule, 
              AppRoutingModule,
              FormsModule ],
    providers: [],
    bootstrap: [RootComponent]
  }
)

export class RootModule { }
