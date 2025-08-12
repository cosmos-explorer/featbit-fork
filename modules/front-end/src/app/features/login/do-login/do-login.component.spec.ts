import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoLoginComponent } from './do-login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { NzMessageModule } from "ng-zorro-antd/message";

describe('DoLoginComponent', () => {
  let component: DoLoginComponent;
  let fixture: ComponentFixture<DoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [DoLoginComponent],
    imports: [ReactiveFormsModule,
        FormsModule,
        NzMessageModule],
    providers: [provideHttpClient(withInterceptorsFromDi())]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
