/**
 * This function is used to get the name of a body part on a player.
 * @param bodyPartID An integer representing the body part ID you wish to retrieve the name of.
 * @returns This function returns a string containing the body part name if the ID is valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetBodyPartName
 **/
declare function getBodyPartName(bodyPartID: number): string | false;

/**
 * This function is used to get the texture and model of clothes by the clothes type and index.
 * (Scans through the list of clothes for the specific type).
 * @param clothesType An integer representing the clothes slot/type to scan through.
 * @param clothesIndex An integer representing the index (0 based) set of clothes in the list you wish to retrieve.Each type has a different number of valid indexes.
 * @returns This function returns 2 strings, a texture and model respectively, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/GetClothesByTypeIndex
 * @tupleReturn
 **/
declare function getClothesByTypeIndex(clothesType: number, clothesIndex: number): [string, string] | [false];

/**
 * This function is used to get the name of a certain clothes type.
 * @param clothesType An integer determining the type of clothes you want to get the clothes of.
 * @returns This function returns a string (the name of the clothes type) if found, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetClothesTypeName
 **/
declare function getClothesTypeName(clothesType: number): string | false;

/**
 * This function is used to get the clothes type and index from the texture and model.
 * (Scans through the list of clothes for the specific type).
 * @param clothesTexture A string determining the clothes texture that you wish to retrieve the type and index from. See the clothes catalog.
 * @param clothesModel A string determining the corresponding clothes model that you wish to retrieve the type and index from. See the clothes catalog.
 * @returns This function returns two integers, type and index respectively, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/GetTypeIndexFromClothes
 * @tupleReturn
 **/
declare function getTypeIndexFromClothes(clothesTexture: string, clothesModel: string): [number, number] | [false];