import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { DealerPagesRoutingModule } from "./dealer-pages-routing.module";
import { DealerLayoutPageComponent } from './dealer-layout-page.component';
import { OverviewComponent } from './overview/overview.component';
import { OrdersComponent } from './orders/orders.component';
import { InventoryComponent } from './inventory/inventory.component';
import { EnquiriesComponent } from './enquiries/enquiries.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
    CommonModule,
        DealerPagesRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,   
    ],
    declarations: [
        DealerLayoutPageComponent,
        OverviewComponent,
        OrdersComponent,
        InventoryComponent,
        EnquiriesComponent,
        ProfilesComponent,
        

    ]
})
export class DealerPagesModule { }
