import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('Tokens');

  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
    return next(cloned)
  }
  return next(req);
};

export const httperror: HttpInterceptorFn = (req, nxt) => {

  return nxt(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 0) {
        alert('🌐 Server reachable or URL தவறு.')
      }
      else if (error.status === 404) {
        alert('❌ URL (404 Not Found)');
      }
      else if (error.status === 401) {
        alert('🔐 Unauthorized Access')
      }
      else if (error.status === 500) {
        alert('💥 Server Error (500)');
      }
      else {
        alert(`Unknown Error ${error.message}`)
      }
      return throwError(() => error)
    })
  )
}