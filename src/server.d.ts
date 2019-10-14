

/**
 * This function creates a collision sphere.
 * This is a shape that has a position and a radius.
 * See Wikipedia for a definition of a sphere.
 * Visualizecolshape
 * @param fX The collision sphere's center point's X axis position
 * @param fY The collision sphere's center point's Y axis position
 * @param fZ The collision sphere's center point's Z axis position
 * @param fRadius The collision sphere's radius
 * @returns Returns a colshape element if successful, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/CreateColSphere
**/
declare function createColSphere(fX: number, fY: number, fZ: number, fRadius: number): ColShape;

/**
 * This function creates a collision tube.
 * This is a shape that has a position and a 2D (X/Y) radius and a height.
 * See Cylinder for a definition of a tube.
 * A tube is similar to a colcircle, except that it has a limited height, this means you can limit the distance above the position defined by (fX, fY, fZ) that the collision is detected.
 * Visualizecolshape
 * @param fX The position of the base of the tube's center on the X axis
 * @param fY The position of the base of the tube's center on the Y axis
 * @param fZ The position of the base of the tube's center on the Z axis
 * @param fRadius The collision tube's radius
 * @param fHeight The collision tube's height
 * @returns Returns a colshape element if successful, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/CreateColTube
**/
declare function createColTube(fX: number, fY: number, fZ: number, fRadius: number, fHeight: number): ColShape;

/**
 * This function gets the maximum height at which aircraft can fly without their engines turning off.
 * @returns Returns a float containing the max aircraft height.
 * @see https://wiki.mtasa.com/wiki/GetAircraftMaxHeight
**/
declare function getAircraftMaxHeight(): number;

/**
 * This function is used to retrieve the type of an colshape.
 * @param shape The colshape you wish to get the type of.
 * @returns Returns false if invalid arguments were passed, or an integer of the type of the colshape, which include:
 * @see https://wiki.mtasa.com/wiki/GetColShapeType
**/
declare function getColShapeType(shape: ColShape): number;

/**
 * This function is used to retrieve a list of all elements of specified type within a range of 3D coordinates.
 * - Note: * This function doesn't verify whether elements are in the same dimension and interior, additional checks could be implemented manually if they are needed.
 * * This function checks if elements are in a box, not in a circle.
 * * Z argument isn't in use currently, but make your scripts like it is for future compatibility reasons.
 * * This function doesn't work with elements which is created by createElement.
 * @param x the x coordinate at which to retrieve elements
 * @param y the y coordinate at which to retrieve elements
 * @param z the z coordinate at which to retrieve elements
 * @param range the range at the coordinates in which to retrieve elements
 * @param [elemType=] The type of element you want a list of. This can be any element type, such as
 * @returns Returns a table containing all the elements of the specified type within range. Returns an empty table if there are no elements within range. Returns false if the arguments are invalid.
 * @see https://wiki.mtasa.com/wiki/GetElementsWithinRange
**/
declare function getElementsWithinRange(x: number, y: number, z: number, range: number, elemType?: string): object;

/**
 * Gets the currently queued latent events.
 * The last one in the table is always the latest event queued.
 * Each returned handle can be used with getLatentEventStatus or cancelLatentEvent
 * Needs example
 * @param thePlayer The player who is receiving the events.
 * @returns Returns a table of handles or false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GetLatentEventHandles
**/
declare function getLatentEventHandles(thePlayer: Player): object;

/**
 * This function checks if a 3D position is inside a colshape or not.
 * @param theShape The colshape you're checking the position against.
 * @param posX The X coordinate of the position you're checking.
 * @param posY The Y coordinate of the position you're checking.
 * @param posZ The Z coordinate of the position you're checking.
 * @returns Returns true if the position is inside the colshape, false if it isn't or if any parameters are invalid.
 * @see https://wiki.mtasa.com/wiki/IsInsideColShape
**/
declare function isInsideColShape(theShape: ColShape, posX: number, posY: number, posZ: number): boolean;

/**
 * This function changes the maximum flying height of aircraft.
 * @param Height unknown
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetAircraftMaxHeight
**/
declare function setAircraftMaxHeight(Height: number): boolean;

/**
 * This function changes the maximum flying height of jetpack.
 * @param Height The max height starting at approximately -20.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetJetpackMaxHeight
**/
declare function setJetpackMaxHeight(Height: number): boolean;

/**
 * This function sets the dirt level on a vehicle.
 * Disabled: This function doesn't work actually. See the bugtracker for updates and more information.
 * @param theVehicle The vehicle that you want to set the dirt level from
 * @param dirtLevel The dirt level
 * @returns Returns true if the dirt level was set on the vehicle, false if the dirt level was not set or if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/SetVehicleDirtLevel
**/
declare function setVehicleDirtLevel(theVehicle: Vehicle, dirtLevel: number): boolean;

/**
 * Generates a string representing the character codepoints as arguments.
 * @param codepoints An variable argument sequence of code points representing the desired unicode characters.
 * @param ] unknown
 * @returns Returns a string representation of the codepoints passed.
 * @see https://wiki.mtasa.com/wiki/Utf8.char
**/
declare function utf8.char(codepoints: number, ]: unknown): [string, ];

/**
 * Converts the UTF-8 codepoint position to byte-string position.
 * - Note: Code point characters beyond the byte value range (0-127) require at least 2 bytes to represent the character
 * @param input A string character sequence
 * @param [charpos=0] An integer representing the beginning position (offset will be added/subtracted).
 * @param [offset=1] An integer representing the offset to charpos.
 * @returns Returns the integer position as in a byte string and the integer codepoint at this position, nil otherwise.
 * @see https://wiki.mtasa.com/wiki/Utf8.charpos
**/
declare function utf8.charpos(input: string, charpos?: number, offset?: number): [number, number, ];

/**
 * Escapes a string to a UTF-8 format string.
 * It supports several escape formats, see the formatting table.
 * @param input A string character sequence
 * @returns Returns a string containing the escaped UTF-8 characters from the original string.
 * @see https://wiki.mtasa.com/wiki/Utf8.escape
**/
declare function utf8.escape(input: string): [string, ];

/**
 * Finds the first occurrence of the pattern in the string passed.
 * If an instance of the pattern is found, a pair of values representing the start and the end of the matched string is returned.
 * @param input A string character sequence
 * @param pattern A string match pattern (you can disable pattern matching by using the optional fourth argument plain)
 * @param [startpos=1] An integer representing the beginning position.
 * @param [plain=false] A boolean, if pattern matching should be turned off
 * @returns Returns two number values for the beginning and ending position of the matched string, nil otherwise.
 * @see https://wiki.mtasa.com/wiki/Utf8.find
**/
declare function utf8.find(input: string, pattern: string, startpos?: number, plain?: unknown): [string, ];

/**
 * Converts a UTF-8 string to folded case (lowercase), which can be used to compare two strings.
 * If input is an integer, it's treat as a codepoint and a convert codepoint (integer) is returned.
 * - Note: You may want to read up on case folding for more information about the use of this function.
 * @param input A string character sequence OR an integer value
 * @returns Returns a string in lowercase OR returns an integer (see description).
 * @see https://wiki.mtasa.com/wiki/Utf8.fold
**/
declare function utf8.fold(input: unknown): [, ];

/**
 * This function returns a pattern finding iterator for UTF-8 strings.
 * The iterator will search through the string input looking for instances of the pattern you passed.
 * For more information on iterators read the ForTutorial and IteratorsTutorial.
 * @param input A string character sequence
 * @param pattern A string match pattern
 * @returns Returns an function for iterations on the input string by using the passed pattern string.
 * @see https://wiki.mtasa.com/wiki/Utf8.gmatch
**/
declare function utf8.gmatch(input: string, pattern: string): [, ];

/**
 * Returns a copy of the original input string with replaced matches from the pattern by the replacement value.
 * Warning: This function may modify your input string even if no changes were made. Try it with runcode: srun utf8.gsub(utf8.char(66376), "", "") == utf8.char(66376)
 * @param input A string character sequence
 * @param pattern A string match pattern
 * @param replace A string literal OR an integer value OR a function (see examples below) OR a table ({ match = replacement })
 * @param [match_limit=utf8] An integer to limit the number of substitutions made
 * @param ( unknown
 * @param ) unknown
 * @returns Returns a pair of values, the modified string and the integer number of substitutions made.
 * @see https://wiki.mtasa.com/wiki/Utf8.gsub
**/
declare function utf8.gsub(input: string, pattern: string, replace: any, match_limit?: number, (: unknown, ): unknown): [string, ];

/**
 * Inserts a substring into input string.
 * If insert-position is given, the substring will be inserted before the character at this index, otherwise the substring will concatenate to input.
 * The insert position may be negative.
 * @param input A string character sequence
 * @param [insert_pos=utf8] An integer representing the position, where the substring will be inserted at.
 * @param ( unknown
 * @param ) unknown
 * @param ] unknown
 * @param substring A string character sequence which should be inserted
 * @returns Returns a string with the inserted substring value.
 * @see https://wiki.mtasa.com/wiki/Utf8.insert
**/
declare function utf8.insert(input: string, insert_pos?: number, (: unknown, ): unknown, ]: unknown, substring: string): [string, ];

/**
 * Returns the length of the string passed.
 * @param input A string character sequence
 * @param [i=1] An integer representing the beginning position for measuring the length of the section (may be negative).
 * @param [j=utf8] An integer representing the ending position for measuring the length of the section (may be negative).
 * @param ( unknown
 * @param ) unknown
 * @returns Returns the length of the string as an integer.
 * @see https://wiki.mtasa.com/wiki/Utf8.len
**/
declare function utf8.len(input: string, i?: number, j?: number, (: unknown, ): unknown): [number, ];

/**
 * Converts a UTF-8 string to folded case (lowercase), which can be used to compare two strings.
 * If input is an integer, it's treat as a codepoint and a convert codepoint (integer) is returned.
 * - Note: You may want to read up on case folding for more information about the use of this function.
 * @param input A string character sequence OR an integer value
 * @returns Returns a string in lowercase OR returns an integer (see description).
 * @see https://wiki.mtasa.com/wiki/Utf8.fold
**/
declare function utf8.fold(input: unknown): [, ];

/**
 * Extract substrings by matching patterns in the input string.
 * This function can be used to extract specific information from a string.
 * @param input A string character sequence
 * @param pattern A string match pattern
 * @param [index=1] An integer representing the beginning position for the pattern matching
 * @returns Returns a sequence of string matches from the input string, nil otherwise.
 * @see https://wiki.mtasa.com/wiki/Utf8.match
**/
declare function utf8.match(input: string, pattern: string, index?: number): [string, , ];

/**
 * Compares two strings in lower-case and returns the difference indicator (see table below) as an integer value.
 * @param a A string character sequence
 * @param b A string character sequence
 * @returns Returns an integer, which indicates the difference, see the table below for further information.
 * @see https://wiki.mtasa.com/wiki/Utf8.ncasecmp
**/
declare function utf8.ncasecmp(a: string, b: string): [number, ];

/**
 * This is an iteration function to traverse each single codepoint of a UTF-8 string.
 * @param input A string character sequence
 * @param [charpos=0] An integer representing the beginning position (offset will be added/subtracted).
 * @param [offset=1] An integer representing the offset to charpos.
 * @returns Returns the integer position in bytes and the integer codepoint at this position, nil otherwise.
 * @see https://wiki.mtasa.com/wiki/Utf8.next
**/
declare function utf8.next(input: string, charpos?: number, offset?: number): [number, number, ];

/**
 * This function removes a substring in a UTF-8 string by using a position range.
 * @param input A string character sequence
 * @param [start=1] An integer representing the beginning position.
 * @param [stop=1] An integer representing the ending position.
 * @returns Returns the string with the removed substring from the range.
 * @see https://wiki.mtasa.com/wiki/Utf8.remove
**/
declare function utf8.remove(input: string, start?: number, stop?: number): [string, ];

/**
 * Reverses the input string.
 * @param input A string character sequence
 * @returns Returns a string containing the reversed original UTF-8 string.
 * @see https://wiki.mtasa.com/wiki/Utf8.reverse
**/
declare function utf8.reverse(input: string): [string, ];

/**
 * Returns a substring of the string passed.
 * The substring starts at i.
 * If the third argument j is not given, the substring will end at the end of the string.
 * If the third argument is given, the substring ends at and includes j.
 * @param input A string character sequence
 * @param [i=1] An integer representing the beginning position (may be negative).
 * @param [j=utf8] An integer representing the ending position (may be negative).
 * @param ( unknown
 * @param ) unknown
 * @returns Returns a string substring of the original string, containing the selected range from the original string.
 * @see https://wiki.mtasa.com/wiki/Utf8.sub
**/
declare function utf8.sub(input: string, i?: number, j?: number, (: unknown, ): unknown): [string, ];

/**
 * Converts a UTF-8 string to title case (uppercase).
 * If input is an integer, it is treated as a codepoint and a converted codepoint (integer) is returned.
 * - Note: You may want to read up on case folding for more information about the use of this function.
 * @param input A string character sequence OR an integer value
 * @returns Returns a string in uppercase OR returns an integer (see description).
 * @see https://wiki.mtasa.com/wiki/Utf8.title
**/
declare function utf8.title(input: unknown): [string, ];

/**
 * Converts a UTF-8 string to title case (uppercase).
 * If input is an integer, it is treated as a codepoint and a converted codepoint (integer) is returned.
 * - Note: You may want to read up on case folding for more information about the use of this function.
 * @param input A string character sequence OR an integer value
 * @returns Returns a string in uppercase OR returns an integer (see description).
 * @see https://wiki.mtasa.com/wiki/Utf8.title
**/
declare function utf8.title(input: unknown): [string, ];

/**
 * Calculates the width of UTF-8 strings with special/unprintable characters, which require special width treatment.
 * @param input A string character sequence OR a codepoint integer
 * @param [ambi_is_double=false] A boolean, if set to true, ambiguous character's width is 2 (see example below).
 * @param [default_width=0] An integer, if given, is used as width for unprintable characters.
 * @returns Returns the integer width of the input string OR the width of the codepoint integer.
 * @see https://wiki.mtasa.com/wiki/Utf8.width
**/
declare function utf8.width(input: unknown, ambi_is_double?: boolean, default_width?: number): [number, ];

/**
 * Returns the location, offset and width of the character at the given location in the UTF-8 string.
 * @param input A string character sequence
 * @param location unknown
 * @param [ambi_is_double=false] A boolean, if set to true, ambiguous character's width is 2 (see example).
 * @param [default_width=0] An integer, if given, is used as width for unprintable characters.
 * @returns Returns the given location, the offset in UTF-8 encoding (if cursor is in the middle of the wide char - offset will be 2) and the width of the character, otherwise only the location as integer will be returned.
 * @see https://wiki.mtasa.com/wiki/Utf8.widthindex
**/
declare function utf8.widthindex(input: string, location: number, ambi_is_double?: boolean, default_width?: number): [number, number, number, ];


/**
 * This function copies all contents of a certain node in a XML document to a new document file, so the copied node becomes the new file's root node.
 * The new file will not be saved to file system until xmlSaveFile() is called
 * - Note: To prevent memory leaks, ensure each call to xmlCopyFile has a matching call to xmlUnloadFile
 * @param nodeToCopy the xmlnode that is to be copied to a new document.
 * @param newFilePath the path of the file that is to be created, in the following format
 * @returns Returns the xmlnode of the copy if the node was successfully copied, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/XmlCopyFile
**/
declare function xmlCopyFile(nodeToCopy: unknown, newFilePath: string): unknown;

/**
 * This function creates a new child node under an XML node.
 * @param parentNode the xmlnode you want to create a new child node under.
 * @param tagName the type of the child node that will be created.
 * @returns Returns the created xmlnode if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/XmlCreateChild
**/
declare function xmlCreateChild(parentNode: unknown, tagName: string): unknown;

/**
 * This function creates a new XML document, which can later be saved to a file by using xmlSaveFile.
 * This function will overwrite the file specified if it already exists.
 * - Note: To prevent memory leaks, ensure each call to xmlCreateFile has a matching call to xmlUnloadFile
 * - Tip: If you do not want to share the content of the created file with other servers, prepend the file path with @ (See filepath for more information)
 * @param filePath The filepath of the file in the following format
 * @param rootNodeName the name of the root node in the XML document.
 * @returns Returns the root xmlnode object of the new XML file if successful, or false otherwise.
 * @see https://wiki.mtasa.com/wiki/XmlCreateFile
**/
declare function xmlCreateFile(filePath: string, rootNodeName: string): unknown;

/**
 * This function destroys a XML node from the XML node tree.
 * @param theXMLNode The xml node you want to destroy.
 * @returns Returns true if the xml node was successfully destroyed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/XmlDestroyNode
**/
declare function xmlDestroyNode(theXMLNode: unknown): boolean;

/**
 * This function returns a named child node of an XML node.
 * @param parent This is an xmlnode that you want to find the child node under.
 * @param tagName This is the name of the child node you wish to find (case-sensitive).
 * @param index This is the 0-based index of the node you wish to find. For example, to find the 5th subnode with a particular name, you would use 4 as the index value. To find the first occurence, use 0.
 * @returns Returns an xmlnode if the node was found, false otherwise.
 * @see https://wiki.mtasa.com/wiki/XmlFindChild
**/
declare function xmlFindChild(parent: unknown, tagName: string, index: number): unknown;

/**
 * This function provides an alternative way to load XML files to getResourceConfig.
 * This function loads an XML file and returns the node by specifying a specific file path, while getResourceConfig allows for loading an XML file from a resource.
 * - Note: To prevent memory leaks, ensure each call to xmlLoadFile has a matching call to xmlUnloadFile
 * @param filePath The filepath of the file in the following format
 * @param [readOnly=false] By default, the XML file is opened with reading and writing access.You can specify true for this parameter if you only need reading access.
 * @returns Returns the root xmlnode object of an xml file if successful, or false otherwise.
 * @see https://wiki.mtasa.com/wiki/XmlLoadFile
**/
declare function xmlLoadFile(filePath: string, readOnly?: boolean): unknown;

/**
 * This function creates an Xmlnode from a string input.
 * @param xmlString A string containing XML data
 * @returns Returns the root xmlnode object of an xml string if successful, or false otherwise (invalid XML string).
 * @see https://wiki.mtasa.com/wiki/XmlLoadString
**/
declare function xmlLoadString(xmlString: string): unknown;

/**
 * This function is used to return an attribute of a node in a configuration file.
 * @param node The node from which you wish to return the attribute
 * @param name The name of the attribute.
 * @returns Returns the attribute in string form or false, if the attribute is not defined.
 * @see https://wiki.mtasa.com/wiki/XmlNodeGetAttribute
**/
declare function xmlNodeGetAttribute(node: unknown, name: string): string;

/**
 * Returns all the attributes of a specific XML node.
 * @param node the XML node to get the attributes of.
 * @returns If successful, returns a table with as keys the names of the attributes and as values the corresponding attribute values. If the node has no attributes, returns an empty table. In case of failure, returns false.
 * @see https://wiki.mtasa.com/wiki/XmlNodeGetAttributes
**/
declare function xmlNodeGetAttributes(node: unknown): object;

/**
 * This function returns all children of a particular XML node, or a particular child node.
 * @param parent This is the xmlnode you want to retrieve one or all child nodes of.
 * @param index If you only want to retrieve one particular child node, specify its (0-based) index here.For example if you only want the first node, specify 0; the fifth node has index 4, etc.
 * @returns If index isn't specified, returns a table containing all child nodes. If index is specified, returns the corresponding child node if it exists. If no nodes are found, it returns an empty table. Returns false in case of failure.
 * @see https://wiki.mtasa.com/wiki/XmlNodeGetChildren
**/
declare function xmlNodeGetChildren(parent: unknown, index: number): unknown;

/**
 * Gets the tag name of the specified XML node.
 * @param node the node to get the tag name of.
 * @returns Returns the tag name of the node if successful, false otherwise. <section name="Example 1" class="both" show="true">
 * @see https://wiki.mtasa.com/wiki/XmlNodeGetName
**/
declare function xmlNodeGetName(node: unknown): string;

/**
 * Returns the parent node of an xml node.
 * Needs example
 * @param node the node of which you want to know the parent.
 * @returns Returns the parent node of the specified node if successful. Returns false if the specified node is the root node or an invalid node was passed.
 * @see https://wiki.mtasa.com/wiki/XmlNodeGetParent
**/
declare function xmlNodeGetParent(node: unknown): unknown;

/**
 * This function is made to be able to read tag values in XML files (eg.
 * anything ).
 * @param theXMLNode The xml node of which you need to know the value.
 * @returns Returns the value of the node as a string if it was received successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/XmlNodeGetValue
**/
declare function xmlNodeGetValue(theXMLNode: unknown): string;

/**
 * This function is used to edit an attribute of a node in a configuration file.
 * @param node The node of which you wish to edit an attribute.
 * @param name The name of the attribute.
 * @param value The value which you wish to change the attribute to. (Note
 * @returns Returns true if the attribute was set successfully, false if the node and/or attribute do not exist, or if they're faulty.
 * @see https://wiki.mtasa.com/wiki/XmlNodeSetAttribute
**/
declare function xmlNodeSetAttribute(node: unknown, name: string, value: unknown): boolean;

/**
 * Sets the tag name of the specified XML node.
 * @param node the node to change the tag name of.
 * @param name the new tag name to set.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/XmlNodeSetName
**/
declare function xmlNodeSetName(node: unknown, name: string): boolean;

/**
 * This function is made to be able to assign values to tags in XML files (eg.
 * anything ).
 * @param theXMLNode The xml node you want to set the value of.
 * @param value The string value you want the node to have.
 * @param [setCDATA=false] A boolean indicating if you want the value to be enclosed inside CDATA tags.
 * @returns Returns true if value was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/XmlNodeSetValue
**/
declare function xmlNodeSetValue(theXMLNode: unknown, value: string, setCDATA?: boolean): boolean;

/**
 * This function saves a loaded XML file.
 * @param rootNode the root xmlnode of the loaded XML file.
 * @returns Returns true if save was successful, false if the XML file does not exist.
 * @see https://wiki.mtasa.com/wiki/XmlSaveFile
**/
declare function xmlSaveFile(rootNode: unknown): boolean;

/**
 * Unloads an XML document from memory.
 * @param node root of the XML document to unload
 * @returns Returns true if the document was unloaded successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/XmlUnloadFile
**/
declare function xmlUnloadFile(node: unknown): boolean;

/**
 * This function triggers an event previously registered on a client.
 * This is the primary means of passing information between the server and the client.
 * Clients have a similar triggerServerEvent function that can do the reverse.
 * You can treat this function as if it was an asynchronous function call, using triggerServerEvent to pass back any returned information if necessary.
 * Almost any data types can be passed as expected, including elements and complex nested tables.
 * Non-element MTA data types like xmlNodes or resource pointers will not be able to be passed as they do not necessarily have a valid representation on the client.
 * Events are sent reliably, so clients will receive them, but there may be (but shouldn't be) a significant delay before they are received.
 * You should take this into account when using them.
 * Keep in mind the bandwidth issues when using events - don't pass a large list of arguments unless you really need to. It is marginally more efficient to pass one large event than two smaller ones.
 * Important note: Non-element MTA data types like xmlNodes or resource pointers will not be able to be passed as they do not necessarily have a valid representation on the client.
 * - Note: It is marginally more efficient to pass one large event than two smaller ones
 * @param [sendTo=getRootElement()] The event will be sent to all players that are children of the specified element. By default this is the root element, and hence the event is sent to all players. If you specify a single player it will just be sent to that player. This argument can also be a table of player elements.
 * @param name The name of the event to trigger client side. You should register this event with addEvent and add at least one event handler using addEventHandler.
 * @param sourceElement The element that is the source of the event.
 * @param arguments unknown
 * @returns Returns true if the event trigger has been sent, false if invalid arguments were specified.
 * @see https://wiki.mtasa.com/wiki/TriggerClientEvent
**/
declare function triggerClientEvent(sendTo?: unknown, name: string, sourceElement: Element, arguments: ...any[]): boolean;