import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export const ApiVersionInterceptor = (request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
    const modifiedReq = request.clone({
        headers: request.headers.set('X-Api-Version', '11'),
    });
    return next(modifiedReq);
}
