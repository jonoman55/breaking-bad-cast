export function formatName(s) {
    s = s.replace(/\s+/g, '+');
    s = noTilde(s);
    return s;
}

export function noTilde(s) {
    if (s.normalize !== undefined) {
        s = s.normalize('NFKD');
    }
    return s.replace(/[\u0300-\u036F]/g, '');
}