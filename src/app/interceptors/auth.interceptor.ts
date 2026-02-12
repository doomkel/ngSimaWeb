import { HttpInterceptorFn } from '@angular/common/http';

// Adds Authorization: Bearer <token> from localStorage to each request
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  try {
    const token = localStorage.getItem('token');
    if (token) {
      req = req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
    }
  } catch {
    // ignore storage errors
  }
  return next(req);
};
