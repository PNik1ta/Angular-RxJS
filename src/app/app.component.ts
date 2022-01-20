import { Component } from '@angular/core';
import { filter, interval, map, Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // sub: Subscription;
  stream$: Subject<void> = new Subject<void>();
  constructor() {
    // const intervalStream$ = interval(1000);

    // this.sub = intervalStream$.pipe(filter((value) => value % 2 == 0), map((value) => 'Mapped value: ' + value)).subscribe((value) => {
    //   console.log(value);
    // });


    // const stream$ = new Observable(observer => {
    //   setTimeout(() => {
    //     observer.next(1)
    //   }, 1500);

    //   setTimeout(() => {
    //     observer.error('Something went wrong')
    //   }, 2000)

    //   setTimeout(() => {
    //     observer.next(2)
    //   }, 2500);
    // })

    // stream$.subscribe(
    //   value => console.log('Next: ' + value),
    //   error => console.log('Error: ' + error),
    //   () => console.log('Complete')
    // )


    this.stream$.subscribe(value => console.log('Subscribe: ', value))


  }

  // stop(): void {
  //   this.sub.unsubscribe();
  // }
}
