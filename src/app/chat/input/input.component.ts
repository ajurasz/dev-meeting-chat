import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { tap, flatMap, mergeMap, concatMap } from 'rxjs/operators';
import { DbService } from '../../shared/db.service';
import { Message } from '../../shared/message.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  submited = false;
  form: FormGroup;
  submit$ = new Subject<FormGroup>();
  constructor(private fb: FormBuilder, private db: DbService) {}

  ngOnInit() {
    this.form = this.fb.group({
      sender: [null, Validators.required],
      body: [null, Validators.required]
    });

    this.submit$
      .pipe(
        tap(_ => {
          this.submited = true;
        }),
        flatMap(f => {
          const m = new Message({ ...f.value });
          return this.db.add(m);
        })
      )
      .subscribe(result => {
        if (result) {
          this.form.reset();
        }
        this.submited = false;
      });
  }

  private toogleSubmited() {
    this.submited = !this.submited;
  }

  onSubmit() {
    this.submit$.next(this.form);
  }
}
