import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAuthorDetailsComponent } from './post-author-details.component';

describe('PostAuthorDetailsComponent', () => {
  let component: PostAuthorDetailsComponent;
  let fixture: ComponentFixture<PostAuthorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostAuthorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAuthorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
