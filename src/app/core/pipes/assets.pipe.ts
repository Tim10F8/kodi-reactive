import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assets',
  standalone: true
})
export class AssetsPipe implements PipeTransform {
  base =  'http://192.168.0.178:8080/image/image%3A%2F%2Fmusic%40%252f';
  base2 = 'http://192.168.0.178:8080/image/image%3A%2F%2F%252f';

  transform(value: string | undefined, ...args: unknown[]): string {
    let spaceSpecials = false;
    if (args[0]) {
      if (args[0] === 'scape') {
        spaceSpecials = true;        
      }
    }
    if(!value) return '';
    const isHttp = value.includes('http');
    if (value.includes('image://%2fmedia')) {
      value = value.replace('image://%2fmedia', '%2fmedia');
      value = value.substring(0, value.length - 1);
      value = `${value}%2F`;
    } else if(value.includes('image://music@')){     
      value = value.replace('image://music@%2f', '');      
      value = value.replace(/%3a/g, '%3A');
      value = value.replace(/%20/g, '%2520');
      value = value.replace(/%c3%ba/g, '%25c3%25ba');
      value = value.substring(0, value.length - 1);
      value = `${value}%2F`;
    }
    if(isHttp) {
      value = value.replace(/image:\/\//g, '');
      value = value.replace(/%3a/g, ':');
      value = value.replace(/%2f/g, '/');
      value = value.substring(0, value.length - 1);
    } 
    value = value.replace(/%2f/g, '%252f');
    if (spaceSpecials) {
      value = value.replace(/\(/g, '\\\(');
      value = value.replace(/\)/g, '\\\)');
    }
    
    return `${isHttp ? '' :  this.base}${value}`;
  }

}
