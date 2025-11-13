import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './menus/analytics/analytics.component';
import { DataplatformComponent } from './menus/dataplatform/dataplatform.component';
import { SolutionmarketplaceRoutingModule } from './solutionmarketplace-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './container/container.component';
import { MicrosoftfabricComponent } from './menus/microsoftfabric/microsoftfabric.component';
import { SecuritygovernanceComponent } from './menus/securitygovernance/securitygovernance.component';
import { ApplicationmodernizationComponent } from './menus/applicationmodernization/applicationmodernization.component';
import { AiSolutionsComponent } from './menus/ai-solutions/ai-solutions.component';
import { DatabricksComponent } from './menus/databricks/databricks.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SalesforceComponent } from './menus/salesforce/salesforce.component';



@NgModule({
  declarations: [
    AnalyticsComponent,
    DataplatformComponent,
    ContainerComponent,
    MicrosoftfabricComponent,
    SecuritygovernanceComponent,
    ApplicationmodernizationComponent,
    AiSolutionsComponent,
    DatabricksComponent,
    SalesforceComponent
  ],
  imports: [
    CommonModule,
    SolutionmarketplaceRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    CarouselModule
  ]
})
export class SolutionmarketplaceModule { }
