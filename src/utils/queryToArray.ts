import { castQueryParam } from "./castQueryParam";

export function queryToArray(query: string): any[] {
    return query.split('--').map((value) => castQueryParam(value));
}
