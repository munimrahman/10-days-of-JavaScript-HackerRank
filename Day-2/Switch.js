function getLetter(s) {
    let letter;
    const a = 'aeiou';
    const b = 'bcdfg';
    const c = 'hjklm';
    const d = 'npqrstvwxyz';

    const firstChar = s[0];

    switch (true) {
        case a.includes(firstChar):
            letter = 'A';
            break;
        case b.includes(firstChar):
            letter = 'B';
            break;
        case c.includes(firstChar):
            letter = 'C'
            break;
        case d.includes(firstChar):
            letter = 'D';
            break;
    }

    return letter;
}
