import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideNoopAnimations } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { provideHttpClient } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
    providers: [
        provideNoopAnimations(),
        provideHttpClient(),
        importProvidersFrom(AppRoutingModule)
    ]
};
