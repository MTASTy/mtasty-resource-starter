/**
 * Returns the codepoints for the i-th through j-th character of the string passed.
 * @param input A string character sequence.
 * @param [i=1] An integer representing the beginning position.
 * @param [j=1] An integer representing the ending position.
 * @returns Returns a sequence of number values from the original string if successful, nil otherwise.
 * @see https://wiki.mtasa.com/wiki/Utf8.byte
 **/
declare function utf8byte(input: string, i?: number, j?: number): number | undefined;

// TODO: add utf8.char
// TODO: add utf8.charpos
// TODO: add utf8.escape
// TODO: add utf8.find
// TODO: add utf8.fold
// TODO: add utf8.gmatch
// TODO: add utf8.gsub
// TODO: add utf8.insert
// TODO: add utf8.len
// TODO: add utf8.lower
// TODO: add utf8.match
// TODO: add utf8.ncasecmp
// TODO: add utf8.next
// TODO: add utf8.remove
// TODO: add utf8.reverse
// TODO: add utf8.sub
// TODO: add utf8.title
// TODO: add utf8.upper
// TODO: add utf8.width
// TODO: add utf8.widthindex