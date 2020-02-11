import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {OrganizationHeaderComponent} from './organization-header.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {EntityTitleModule} from '../entity-title/entity-title.module';
import {Subject} from 'rxjs';
import {OrganizationHeaderFacade} from './organization-header.facade';
import {MatDialog} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material';

describe('OrganizationHeaderComponent', () => {
  let component: OrganizationHeaderComponent;
  let fixture: ComponentFixture<OrganizationHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationHeaderComponent ],
      providers: [
        {
          provide: OrganizationHeaderFacade,
          useValue: {
            select: () => {},
            rename: () => {},
            initSubscriptions : () => {},
            unsubscribe : () => {},
            organization$: new Subject(),
            userRole$: new Subject(),
            selectedId$: new Subject(),
          }
        },
        {
          provide: MatDialog,
          useValue: {}
        }
      ],
      imports: [
        CommonModule,
        RouterModule,
        MatButtonModule,
        EntityTitleModule,
        MatCardModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
