import { ApplicationConfig } from '@angular/core';
import { provideNoopAnimations } from "@angular/platform-browser/animations";
import { routes } from "./routes";
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { provideRouter } from "@angular/router";
import { TokenInterceptor } from "./book/token.interceptor";

export const appConfig: ApplicationConfig = {
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true,
        },
        provideNoopAnimations(),
        provideHttpClient(
            withInterceptorsFromDi()
        ),
        provideRouter(routes)
    ]
};
