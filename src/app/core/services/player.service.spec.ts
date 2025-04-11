import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { PlayerService } from './player.service';
import { PipesModule } from '../pipes/pipes-module';
import { HttpClient } from '@angular/common/http';

describe('PlayerService', () => {
  let injector: TestBed;
  let service: PlayerService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, PipesModule],
      providers: [PlayerService],
    });
    await TestBed.compileComponents();
    service = TestBed.inject(PlayerService);
    httpClient = TestBed.inject(HttpClient);
    //  service = injector.get();
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have uriMediaPlayer', () => {
    expect(service.uriMediaPlayer).toBe('http://localhost:8008/jsonrpc');
  });

  it('should getAlbum must have the right payload', async () => {
    const mockResponse = {
      /* mock response object */
    };
    const req = await httpMock.expectOne('http://localhost:8008/jsonrpc');

    expect(req.request.method).toBe('POST');
    req.flush({});
    httpMock.verify();
  });
});
