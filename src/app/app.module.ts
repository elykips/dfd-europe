// import modules
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// import components
import { AppComponent } from './app.component';
import { GuestLayoutComponent } from "./layouts/guest/guest-layout.component";
import { DealerLayoutComponent } from './layouts/dealer/dealer-layout.component';

// import services
import { AuthService } from './services/auth/auth.service';
import { FormBuilder, FormsModule } from '@angular/forms';
import { ToastrService } from './services/toastr/toastr.service';
import { ToastsManager, ToastOptions, ToastModule } from 'ng2-toastr';


@NgModule({
    declarations: [
        AppComponent,
        DealerLayoutComponent,
        GuestLayoutComponent,

    ],
    imports: [
BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        ToastModule.forRoot(),
        FormsModule,
        NgbModule.forRoot()
    ],
    providers: [
        AuthService,
        FormBuilder,
        ToastrService,
        ToastsManager,
        ToastOptions
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }