import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PostListComponent } from 'src/app/components/post-list/post-list.component';
import { PostService } from 'src/app/core/services/post/post.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const postServiceStub = {
    fetchPosts: () => of([]),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, PostListComponent],
      providers: [{ provide: PostService, useValue: postServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'frontend'`, () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Coders Network'
    );
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.subtitle')?.textContent).toContain(
      'Made by coders!'
    );
  });
});
