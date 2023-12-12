import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";

import { Observable, tap } from "rxjs";
import { SpinnerService } from "../pages/spinner/spinner.service";

@Injectable()

export class AuthHeaderIneterceptor implements HttpInterceptor {

    constructor(private spinnerService: SpinnerService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {


        this.spinnerService.requestStarted();
        //console.log("herllo")
        return this.handler(next, request);
    }
    handler(next: any, request: any) {
        return next.handle(request)
            .pipe(
                tap(
                    (event) => {
                        if (event instanceof HttpResponse) {
                            this.spinnerService.requestEnded();
                        }
                    },
                    (error: HttpErrorResponse) => {
                        this.spinnerService.resetSpinner();
                        throw error;
                    }
                )
            )
    }
}