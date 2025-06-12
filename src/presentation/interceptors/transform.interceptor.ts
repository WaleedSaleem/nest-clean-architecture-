// import {
//   Injectable,
//   NestInterceptor,
//   ExecutionContext,
//   CallHandler,
// } from '@nestjs/common';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// @Injectable()
// export class TransformInterceptor<T> implements NestInterceptor<T, any> {
//   constructor(private readonly transformFn: (data: T) => any) {}

//   intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
//     return next.handle().pipe(map(this.transformFn));
//   }
// }
