export function castQueryParam(value: any): any {
    if (isFinite(value)) {
        return +value
    }

    switch (value) {
        case 'true':
            return true;
        case 'false':
            return false;
    }

    return value
}
