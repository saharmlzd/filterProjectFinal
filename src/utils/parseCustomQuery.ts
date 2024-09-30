import { castQueryParam } from "./castQueryParam";

export function parseCustomQuery(query: string): { [key: string]: string | string[] } {
    const params: { [key: string]: string | string[] } = {};
  
    query.replace(/^\?/, '')
      .split('+')
      .forEach(part => {
        const [key, value] = part.split('~');
        if (value.includes('--')) {
            console.log('------');
            
          params[key] = value.split('--').map(item => castQueryParam(item));
        } else {
          params[key] = castQueryParam(value);
        }
      });
      console.log(params);
      
    return params;
}
