import { ApplicationConfig } from '@angular/core';
import { provideNoopAnimations } from "@angular/platform-browser/animations";
import { routes } from "./routes";
import { provideHttpClient } from "@angular/common/http";
import { provideRouter } from "@angular/router";

export const appConfig: ApplicationConfig = {
    providers: [
        provideNoopAnimations(),
        provideHttpClient(),
        provideRouter(routes)
    ]
};
