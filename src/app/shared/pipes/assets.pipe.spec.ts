import { AssetsPipe } from './assets.pipe';
const kodiLocalUri = 'image://%2fmedia%2fserver%2fMy%20Passport%2fM%c3%basica%2fDavid%20Byrne%2fRei%20Momo%2fcover.jpg/';
const externalAssetUri ='https://assets.fanart.tv/fanart/music/d4659efb-b8eb-4f03-95e9-f69ce35967a9/artistbackground/david-byrne-4e9b43f156e0e.jpg';
const kodiExternalUri = 'image://https%3a%2f%2fassets.fanart.tv%2ffanart%2fmusic%2fd4659efb-b8eb-4f03-95e9-f69ce35967a9%2fartistbackground%2fdavid-byrne-4e9b43f156e0e.jpg/'
const kodiHttpAssetsLocalUri = 'http://192.168.0.178:8080/image/image%3A%2F%2Fmusic%40%252f%252fmedia%252fserver%252fMy%20Passport%252fM%c3%basica%252fDavid%20Byrne%252fRei%20Momo%252fcover.jpg%2F';
const kodiValueWithmedia = 'image://music@%2fmedia%2fserver%2fMy%20Passport%2fM%c3%basica%2fJhon%20Legend%2fStudio%20Albums%2fEvolver%2f1.%20Good%20Morning%20(intro).mp3/'
const kodiValueWithmediaFixed = 'http://192.168.0.178:8080/image/image%3A%2F%2Fmusic%40%252fmedia%252fserver%252fMy%2520Passport%252fM%25c3%25basica%252fJhon%2520Legend%252fStudio%2520Albums%252fEvolver%252f1.%2520Good%2520Morning%2520(intro).mp3%2F';
const kodiAssetwithDoubleParenthesisUrl ='http://192.168.0.178:8080/image/image%3A%2F%2Fmusic%40%252f%252fmedia%252fserver%252fMy%20Passport%252fM%c3%basica%252fDe-Phazz%252fCompilations%252f2012%20The%20Uppercut%20Collection%20\\(CD\\)%252fCD7%20De-Phazz%20Naive%20\\(Acoustic%20Versions\\)%252fcover.jpg%2F';
const kodiAssetwithDoubleParenthesis = "image://%2fmedia%2fserver%2fMy%20Passport%2fM%c3%basica%2fDe-Phazz%2fCompilations%2f2012%20The%20Uppercut%20Collection%20(CD)%2fCD7%20De-Phazz%20Naive%20(Acoustic%20Versions)%2fcover.jpg/"
describe('AssetsPipe', () => {
  it('create an instance', () => {
    const pipe = new AssetsPipe();

    expect(pipe).toBeTruthy();
  });

  it('should return a empty string if is undefined', () => {
    const pipe = new AssetsPipe();
    const url = pipe.transform(undefined);

    expect(url).toBe('');
  });

  it('should return the correct local url', () => {
    const pipe = new AssetsPipe();
    const url = pipe.transform(kodiLocalUri);

    expect(url).toBe(kodiHttpAssetsLocalUri);
  });

  it('should return the correct http url for a external asset', () => {
    const pipe = new AssetsPipe();
    const url = pipe.transform(kodiExternalUri);

    expect(url).toBe(externalAssetUri);
  });

  it('should return the correct http url for a asset with media', () => {
    const pipe = new AssetsPipe();
    const url = pipe.transform(kodiValueWithmedia);

    expect(url).toBe(kodiValueWithmediaFixed);
  }); 
  
  it('should return all parenthesis escaped un the url', () => {
    const pipe = new AssetsPipe();
    const url = pipe.transform(kodiAssetwithDoubleParenthesis, 'scape');

    expect(url).toBe(kodiAssetwithDoubleParenthesisUrl);
  });
});
