import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService, MessageService],
      imports: [BrowserModule,
        FormsModule,
        RouterModule,
        RouterTestingModule,
        HttpClientModule ]
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});
