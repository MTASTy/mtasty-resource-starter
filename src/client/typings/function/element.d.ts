/** @noSelf **/
declare namespace Client {
  /**
   * This function attaches one element to another, so that the first one follows the second whenever it moves.
   * If an attempt is made to attach two elements that are already attached the opposite way (eg theElement becomes theAttachToElement and vice versa), the 1st attachment order is automatically detached in favor of the 2nd attachment order.
   * For example, if carA was attached to carB, now carB is attached to carA.
   * Also, an element cannot be attached to two separate elements at one time.
   * For example, two cars can be attached to one single car, but one single car cannot be attached to two separate cars.
   * If you attempt to do this, the existing attachment will automatically be dropped in favor of the new attachment.
   * For example, if carA is asked to attached to carB then carC, it is only attached to carC.
   * This is not compatible with all elements.
   * The following elements are compatible:
   * - Note: The offset coordinates reflect the object space, not the world space. This means that you cannot calculate the exact offsets between two objects by pre-positioning them in the map editor as a reference. Please see attachElementsOffsets for more details.
   * Due to a limitation in GTA, unexpected attach rotations may occur if all rotation offsets are non-zero. (i.e. Try to ensure at least one of 'xRotOffset', 'yRotOffset' or 'zRotOffset' is zero).
   * @param theElement The element to be attached.
   * @param theAttachToElement The element to attach the first to.
   * @param [xPosOffset=0] The x offset, if you want the elements to be a certain distance from one another (default 0).
   * @param [yPosOffset=0] The y offset (default 0).
   * @param [zPosOffset=0] The z offset (default 0).
   * @param [xRotOffset=0] The x rotation offset (default 0).
   * @param [yRotOffset=0] The y rotation offset (default 0).
   * @param [zRotOffset=0] The z rotation offset (default 0).
   * @returns Returns true if the attaching process was successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/AttachElements
   **/
  function attachElements(theElement: Element, theAttachToElement: Element, xPosOffset?: number, yPosOffset?: number, zPosOffset?: number, xRotOffset?: number, yRotOffset?: number, zRotOffset?: number): boolean;

  /**
   * This function attaches a trailer type vehicle to a trailer-towing-type vehicle.
   * @param theVehicle the vehicle you wish to attach a trailer to.
   * @param theTrailer the trailer you wish to be attached.
   * @returns Returns true if the vehicle's were successfully attached, false otherwise.
   * @see https://wiki.mtasa.com/wiki/AttachTrailerToVehicle
   **/
  function attachTrailerToVehicle(theVehicle: Vehicle, theTrailer: Vehicle): boolean;

  /**
   * This function is used to create a new dummy element in the element tree which do not necessarily represent an entity within the San Andreas world.
   * A common use for this function is for creating custom elements, such as a Flag or a Base.
   * Elements created using this function are placed in the element tree with their parent as the 'dynamic' map element.
   * @param elementType The type of element being created.
   * @param [elementID=null] The ID of the element being created.
   * @returns Returns the element if it was successfully created. Returns false if the arguments are wrong.
   * @see https://wiki.mtasa.com/wiki/CreateElement
   **/
  function createElement(elementType: string, elementID?: string): Element | false;

  /**
   * Creates an area of water.
   * The largest possible size of a water area is 5996&#0215;5996.
   * Also be aware that the function will change all x and y coordinates you specify into even integer numbers if necessary: this is because of a limitation of San Andreas.
   * You are able to give the water a shallow water effect, which practically changes the water invisible to the eye.
   * However, all elements still work the same way as without the shallow effect - allowing swimming, diving, vehicles to sink, etc.
   * - Note: X and Y positions will be changed to an even integer. i.e. -2, 0, 2, 4 etc.
   * Important note: If you're working with dimensions, be sure to apply it by using setElementDimension.
   * @param x1 position of bottom left (south-west) corner.
   * @param y1 position of bottom left (south-west) corner.
   * @param z1 position of bottom left (south-west) corner.
   * @param x2 position of bottom right (south-east) corner.
   * @param y2 position of bottom right (south-east) corner.
   * @param z2 position of bottom right (south-east) corner.
   * @param x3 position of top left (north-west) corner.
   * @param y3 position of top left (north-west) corner.
   * @param z3 position of top left (north-west) corner.
   * @param x4 position of top right (north-east) corner.
   * @param y4 position of top right (north-east) corner.
   * @param z4 position of top right (north-east) corner.
   * @param [bShallow=false] gives the water a shallow water effect.
   * @returns Returns a water element if successful, false otherwise. The water element can be repositioned with setElementPosition and destroyed with destroyElement.
   * @see https://wiki.mtasa.com/wiki/CreateWater
   **/
  function createWater(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number, bShallow?: boolean): Water;

  /**
   * This function detaches attached elements from one another.
   * @param theElement The element to be detached (the "child")
   * @param theAttachToElement The element you wish to detach from, will detach from the attached element if this isn't specified.
   * @returns Returns true if the detaching was successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/DetachElements
   **/
   function detachElements(theElement: Element, theAttachToElement: Element): boolean;

  //TODO: FIX TYPES
  /**
   * This function returns a table of all the elements attached to the specified element
   * @param theElement The element which you require the information from.
   * @returns Returns a table of all the elements attached to the specified element.
   * @see https://wiki.mtasa.com/wiki/GetAttachedElements
   **/
  function getAttachedElements(theElement: Element): object;

  /**
   * This function returns the alpha (transparency) value for the specified element.
   * This can be a player, ped, object, vehicle or weapon.
   * @param theElement The element whose alpha you want to retrieve.
   * @returns Returns an integer (0-255; 0 = transparent) indicating the element's alpha, or false if invalid arguments were passed.
   * @see https://wiki.mtasa.com/wiki/GetElementAlpha
   **/
  function getElementAlpha(theElement: Element): number | false;


  /**
   * This function returns the offsets of an element that has been attached to another element using attachElements.
   * @param theElement The attached element.
   * @returns Returns 6 floats, of which the first 3 indicate the position offset (x, y, z), and the last 3 indicate the rotation offset (x, y, z), if successful. false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetElementAttachedOffsets
   * @tupleReturn
   **/
  function getElementAttachedOffsets(theElement: Element): [number, number, number, number, number, number] | [false, null, null, null, null, null];

  /**
   * This function determines the element that the specified element is attached to.
   * @param theElement The element you require the information for.
   * @returns Returns the element that the chosen element is attached to, or false if the element isn't attached to another element.
   * @see https://wiki.mtasa.com/wiki/GetElementAttachedTo
   **/
  function getElementAttachedTo(theElement: Element): Element | false;

  /**
   * This function returns the minimum and maximum coordinates of an element's bounding box.
   * It should be noted that the values returned are relative to the position of the element, and as such if you wish to get world coordinates for drawing, etc., you should retrieve the position of the element and add the returned values onto that.
   * - Note: The element must be streamed in for this function to work.
   * @param theElement the element whose bounding box we want to get.
   * @returns Returns min x, min y, min z, max x, max y, max z if the passed element is valid and streamed in, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetElementBoundingBox
   * @tupleReturn
   **/
  function getElementBoundingBox(theElement: Element): [number, number, number, number, number, number] | [false, null, null, null, null, null];

  /**
   * This function returns an element from the specified ID. If more than one element with the same ID exists, only the first one in the order it appears in the XML tree will be returned by this function.
   * - Note: The ID in this context is the value of the 'id' data item of the element (the attribute in the .map file), NOT the model ID, weapon ID or similiar.
   * @param id The ID of the element as it appears in the XML file or as set by setElementID.
   * @param [index=0] If there are two or more elements of the same ID it will return the element with the specified index starting at 0.
   * @returns Returns the element with the given ID, or false if no such element exists.
   * @see https://wiki.mtasa.com/wiki/GetElementByID
   **/
  function getElementByID(id: string, index?: number): Element | false;

  // TODO: FIX TYPES
  /**
   * This function is used to retrieve a list of the child elements of a given parent element.
   * Note that it will only return direct children and not elements that are further down the element tree.
   * @param parent Supply this argument with the parent of the children you want returned.
   * @param [theType=nil] The type of element you want a list of. This is the same as the tag name in the .map file, so this can be used with a custom element type if desired. Built in types are
   * @returns This function returns a table that contains a list of elements that the parent has. If the element has no children, it will return an empy table. It will return false if the parent element does not exist.
   * @see https://wiki.mtasa.com/wiki/GetElementChildren
   **/
  function getElementChildren(parent: Element, theType?: string): object | false;

  /**
   * This function returns the number of children an element has.
   * Note that only the direct children are counted and not elements that are further down the element tree.
   * @param parent the parent element
   * @returns Returns an int with the number of child elements, or false if the parent element does not exist.
   * @see https://wiki.mtasa.com/wiki/GetElementChildrenCount
   **/
  function getElementChildrenCount(parent: Element): number | false;

  /**
   * Some elements have an associated colshape, for example Marker and Pickup.
   * This function is used to get the associated colshape.
   * @param theElement The element you want to get the colshape of
   * @returns Returns colshape of the element, false if not or an invalid argument was passed to the function.
   * @see https://wiki.mtasa.com/wiki/GetElementColShape
   **/
  function getElementColShape(theElement: Element): ColShape | false;

  /**
   * This function indicates if a specific element is set to have collisions disabled.
   * An element without collisions does not interact with the physical environment and remains static.
   * @param theElement The element for which you want to check whether collisions are enabled
   * @returns Returns true if the collisions are enabled, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetElementCollisionsEnabled
   **/
  function getElementCollisionsEnabled(theElement: Element): boolean;

  /**
   * This function retrieves element data attached to an element under a certain key.
   * @param theElement This is the element with data you want to retrieve.
   * @param key The name of the element data entry you want to retrieve. (Maximum 31 characters.)
   * @param [inherit=true] - toggles whether or not the function should go up the hierarchy to find the requested key in case the specified element doesn't have it.
   * @returns This function returns a variable containing the requested element data, or false if the element or the element data does not exist. When getting data corresponding to a XML attribute, this is always a string.
   * @see https://wiki.mtasa.com/wiki/GetElementData
   **/
  function getElementData(theElement: Element, key: string, inherit?: boolean): any | false;

  /**
   * This function allows you to retrieve the dimension of any element.
   * The dimension determines what/who the element is visible to.
   * @param theElement The element in which you'd like to retrieve the dimension of.
   * @returns Returns an integer for the dimension if theElement is valid, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetElementDimension
   **/
  function getElementDimension(theElement: Element): number | false;

  /**
   * This function is used to retrieve the distance between a element's centre of mass to the base of the model.
   * This can be used to calculate the position the element has to be set to, to have it on ground level.
   * @param theElement The element you want to retrieve the value of.
   * @returns Returns a float with the distance, or false if the element is invalid.
   * @see https://wiki.mtasa.com/wiki/GetElementDistanceFromCentreOfMassToBaseOfModel
   **/
  function getElementDistanceFromCentreOfMassToBaseOfModel(theElement: Element): number | false;

  /**
   * This function returns the current health for the specified element.
   * This can be a player, a ped, a vehicle, or an object.
   * @param theElement The player or vehicle whose health you want to check.
   * @returns Returns a float indicating the element's health, or false if invalid arguments were passed.
   * @see https://wiki.mtasa.com/wiki/GetElementHealth
   **/
  function getElementHealth(theElement: Element): number | false;

  /**
   * This function gets the ID of an element.
   * This is the "id" attribute of the element and is a string, NOT a number like a model ID, weapons ID or similar.
   * @param theElement the element from which to retrieve the ID.
   * @returns This returns a string containing the element ID. It will return an empty string if it has no ID. It will return false if the element is invalid.
   * @see https://wiki.mtasa.com/wiki/GetElementID
   **/
  function getElementID(theElement: Element): string | false;

  /**
   * This function allows you to retrieve the interior of any element.
   * An interior is the current loaded place, 0 being outside.
   * @param theElement The element of which you'd like to retrieve the interior
   * @returns Returns an int for the interior if theElement is valid, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetElementInterior
   **/
  function getElementInterior(theElement: Element): number | false;

  /**
   * This function gets an element's transform matrix.
   * This contains 16 float values that multiplied to a point will give you the point transformed.
   * It is most useful for matrix calculations such as calculating offsets.
   * For further information, please refer to a tutorial of matrices in computer graphics programming.
   * - Note: The matrix returned by this function is not setup correctly for some calculations unless the legacy argument is set to false.
   * - Tip: For matrix manipulation which goes beyond the basic examples given on this page, see the Lua matrix library. If you are using MTA: SA 1.4 or higher, using the built-in matrix class is also recommended.
   * @param theElement The element which you wish to retrieve the matrix for.
   * @param [legacy=true] Set to false to return correctly setup matrix (i.e. Last column in the first 3 rows set to zero).
   * @returns Returns a multi-dimensional array (which can be transformed into a proper matrix class using Matrix.create method) containing a 4x4 matrix. Returns false if the element is not streamed in, and not a vehicle, ped or object.
   * @see https://wiki.mtasa.com/wiki/GetElementMatrix
   **/
  function getElementMatrix(theElement: Element, legacy?: boolean): object | false;

  /**
   * Returns the model ID of a given element.
   * This can be a player/ped skin, a pickup model, an object model or a vehicle model.
   * @param theElement the element to retrieve the model ID of.
   * @returns Returns the model ID if successful, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetElementModel
   **/
  function getElementModel(theElement: Element): number | false;

  /**
   * This function is used to determine the parent of an element.
   * @param theElement The child of the parent element you want returned.
   * @returns This returns the parent as an element. It returns false if theElement is invalid, or is the root node.
   * @see https://wiki.mtasa.com/wiki/GetElementParent
   **/
  function getElementParent(theElement: Element): Element | false;

  /**
   * The getElementPosition function allows you to retrieve the position coordinates of an element.
   * This can be any real world element, including:
   * @param theElement The element which you'd like to retrieve the location of
   * @returns Returns three floats indicating the position of the element, x, y and z respectively.
   * @see https://wiki.mtasa.com/wiki/GetElementPosition
   * @tupleReturn
   **/
  function getElementPosition(theElement: Element): [number, number, number] | [false, null, null];

  /**
   * This function gets the radius of an element.
   * Normally, sphere or circle-shaped elements tend to return a more accurate and expected radius than others with another shapes.
   * @param theElement The element to get the radius of. It can be any entity type, such as
   * @returns Returns a float containing the radius if the element is valid, false otherwise.
   * @see https://wiki.mtasa.com/wiki/GetElementRadius
   **/
  function getElementRadius(theElement: Element): number | false;

  /**
   * Retrieve the rotation of elements.
   * @param theElement The element whose rotation will be retrieved
   * @param [rotOrder=default] A string representing the rotation order desired when returning the euler angles. If omitted, default value is "default". Allowed values are
   * @returns rx, ry, rz: 3 floats representing the Euler rotation angles on the axis X, Y and Z (with the rotation order depending on the rotOrder argument) if element exists and is a valid element, false if it's invalid.
   * @see https://wiki.mtasa.com/wiki/GetElementRotation
   * @tupleReturn
   **/
  function getElementRotation(theElement: Element, rotOrder?: string): [number, number, number] | [false, null, null];

  /**
   * This function is used to retrieve the type of an element.
   * @param theElement The element you wish to get the type of.
   * @returns Returns a string containing the element type, false if invalid arguments were passed.
   * @see https://wiki.mtasa.com/wiki/GetElementType
   **/
  function getElementType(theElement: Element): string | false;

  //TODO: BIG PROBLEM
  /**
   * This function returns three floats containing the velocity (movement speeds) along the X, Y, and Z axis respectively.
   * This means that velocity values can be positive and negative for each axis.
   * @param theElement The element you wish to retrieve the velocity of.
   * @returns If successful, returns three floats that represent the element's current velocity along the x, y, and z axis respectively. This function can fail if the element is a player in a car. Use the vehicle element in this case. It will also fail if the element specified does not have a velocity, or does not exist. In case of failure, the first return value will be false. The returned values are expressed in GTA units per 1/50th of a second. A GTA Unit is equal to one metre.
   * @see https://wiki.mtasa.com/wiki/GetElementVelocity
   **/
  function getElementVelocity(theElement: Element): [number, number, number] | [false, null, null];

  // TODO: getElementsByType
  // TODO: getElementsWithinColShape
  // TODO: getElementsWithinRange
  // TODO: getLowLODElement
  // TODO: getRootElement
  // TODO: isElement
  // TODO: isElementAttached
  // TODO: isElementCallPropagationEnabled
  // TODO: isElementCollidableWith
  // TODO: isElementDoubleSided
  // TODO: isElementFrozen
  // TODO: isElementInWater
  // TODO: isElementLocal
  // TODO: isElementLowLOD
  // TODO: isElementOnScreen
  // TODO: isElementStreamable
  // TODO: isElementStreamedIn
  // TODO: isElementSyncer
  // TODO: isElementWaitingForGroundToLoad
  // TODO: isElementWithinColShape
  // TODO: setElementAlpha
  // TODO: setElementAngularVelocity
  // TODO: getElementAngularVelocity
  // TODO: setElementAttachedOffsets
  // TODO: setElementCallPropagationEnabled
  // TODO: setElementCollidableWith
  // TODO: setElementCollisionsEnabled
  // TODO: setElementData
  // TODO: setElementDimension
  // TODO: setElementDoubleSided
  // TODO: setElementFrozen
  // TODO: setElementHealth
  // TODO: setElementID
  // TODO: setElementInterior
  // TODO: setElementMatrix
  // TODO: setElementModel
  // TODO: setElementParent
  // TODO: setElementPosition
  // TODO: setElementRotation
  // TODO: setElementStreamable
  // TODO: setElementVelocity
  // TODO: setLowLODElement
}
