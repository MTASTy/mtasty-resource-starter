

/**
 * This function allows tracing of MTA functions and events.
 * It should only be used when debugging scripts as it may degrade script performance.
 * Debug hooks are not recursive, so functions and events triggered inside the hook callback will not be traced.
 * @param hookType The type of hook to add. This can be
 * @param callbackFunction The function to call
 * @param nameList Table of strings for restricting which functions and events the hook will be triggered on
 * @returns Returns true if the hook was successfully added, or false otherwise.
 * @see https://wiki.mtasa.com/wiki/AddDebugHook
**/
declare function addDebugHook(hookType: string, callbackFunction: Function, nameList: object): boolean;

/**
 * This function allows you to register a custom event.
 * Custom events function exactly like the built-in events.
 * See event system for more information on the event system.
 * @param eventName The name of the event you wish to create.
 * @param [allowRemoteTrigger=false] A boolean specifying whether this event can be called remotely using triggerClientEvent / triggerServerEvent or not.
 * @returns Returns true if the event was added successfully, false if the event was already added.
 * @see https://wiki.mtasa.com/wiki/AddEvent
**/
declare function addEvent(eventName: string, allowRemoteTrigger?: boolean): boolean;

/**
 * Gets whether the traffic lights are currently locked or not.
 * If the lights are locked, it means they won't change unless you do setTrafficLightState.
 * @returns Returns true the traffic lights are currently locked, false otherwise.
 * @see https://wiki.mtasa.com/wiki/AreTrafficLightsLocked
**/
declare function areTrafficLightsLocked(): boolean;

/**
 * This function returns the decrypted data from base64 representation of the encrypted block
 * @param data unknown
 * @returns Returns the decrypted data from base64 representation of the encrypted block if the decryption process was successfully completed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/Base64Decode
**/
declare function base64Decode(data: string): string;

/**
 * This function returns the base64 representation of the encoded block of data
 * @param data unknown
 * @returns Returns the base64 representation of the encoded data if the encoding process was successfully completed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/Base64Encode
**/
declare function base64Encode(data: string): string;

/**
 * This function performs a bitwise AND-conjunction on two or more (unsigned) 32-bit integers.
 * See Bitwise operation for more details.
 * @param varN The value you want to perform an AND-conjunction on
 * @returns Returns the conjuncted value.
 * @see https://wiki.mtasa.com/wiki/BitAnd
**/
declare function bitAnd(...varN: number[]): number;

/**
 * This functions performs an arithmetic shift on the integer value by integer n positions.
 * In an arithmetic shift, zeros are shifted in to replace the discarded bits.
 * In a right arithmetic shift, the sign bit is shifted in on the left, thus preserving the sign of the operand.
 * See Bitwise operation for more details.
 * @param value The value you want to perform the arithmetic shift on.
 * @param n The amount of positions to shift the value by.
 * @returns Returns the arithmetic shifted value as integer.
 * @see https://wiki.mtasa.com/wiki/BitArShift
**/
declare function bitArShift(value: number, n: number): number;

/**
 * This function returns the unsigned number formed by the bits field to field + width - 1 (range: 0-31).
 * @param var unknown
 * @param field unknown
 * @param [width=1] unknown
 * @returns Returns the extracted value/bit sequence.
 * @see https://wiki.mtasa.com/wiki/BitExtract
**/
declare function bitExtract(var: unknown, field: number, width?: number): unknown;

/**
 * This functions performs a bitwise circular left-rotation on the integer value by integer n positions.
 * See Bitwise operation for more details.
 * @param value unknown
 * @param n unknown
 * @returns Returns the circular left-rotated value as integer.
 * @see https://wiki.mtasa.com/wiki/BitLRotate
**/
declare function bitLRotate(value: number, n: number): number;

/**
 * This functions performs a logical left shift on the integer value by integer n positions.
 * In a logical shift, zeros are shifted in to replace the discarded bits.
 * See Bitwise operation for more details.
 * @param value unknown
 * @param n unknown
 * @returns Returns the logical left shifted value as integer.
 * @see https://wiki.mtasa.com/wiki/BitLShift
**/
declare function bitLShift(value: number, n: number): number;

/**
 * integer]].
 * See Bitwise operation for more details.
 * @param var unknown
 * @returns Returns the value on which the operation has been performed.
 * @see https://wiki.mtasa.com/wiki/BitNot
**/
declare function bitNot(var: unknown): unknown;

/**
 * integers]].
 * See Bitwise operation for more details.
 * @param var1 unknown
 * @param var2 unknown
 * @param ) unknown
 * @returns Returns the conjuncted value.
 * @see https://wiki.mtasa.com/wiki/BitOr
**/
declare function bitOr(var1: unknown, var2: unknown, ): unknown): unknown;

/**
 * This functions performs a bitwise circular right-rotation on the integer value by integer n positions.
 * See Bitwise operation for more details.
 * @param value unknown
 * @param n unknown
 * @returns Returns the circular right-rotated value as integer.
 * @see https://wiki.mtasa.com/wiki/BitRRotate
**/
declare function bitRRotate(value: number, n: number): number;

/**
 * This functions performs a logical right shift on the integer value by integer n positions.
 * In a logical shift, zeros are shifted in to replace the discarded bits.
 * See Bitwise operation for more details.
 * @param value unknown
 * @param n unknown
 * @returns Returns the logical right shifted value as integer.
 * @see https://wiki.mtasa.com/wiki/BitRShift
**/
declare function bitRShift(value: number, n: number): number;

/**
 * This function returns the unsigned number formed by var value with replacement specified at bits field to field + width - 1
 * @param var unknown
 * @param replaceValue unknown
 * @param field unknown
 * @param [width=1] unknown
 * @returns Returns the replaced value/bit sequence.
 * @see https://wiki.mtasa.com/wiki/BitReplace
**/
declare function bitReplace(var: unknown, replaceValue: unknown, field: number, width?: number): unknown;

/**
 * integers]] and checks, whether the conjuncted value is zero or not.
 * See Bitwise operation for more details.
 * @param var1 unknown
 * @param var2 unknown
 * @param ) unknown
 * @returns Returns true if the conjuncted value is not zero, false otherwise. If a bad argument was passed to bitTest, you'll get nil.
 * @see https://wiki.mtasa.com/wiki/BitTest
**/
declare function bitTest(var1: unknown, var2: unknown, ): unknown): boolean;

/**
 * integers]].
 * See Bitwise operation for more details.
 * @param var1 unknown
 * @param var2 unknown
 * @param ) unknown
 * @returns Returns the conjuncted value.
 * @see https://wiki.mtasa.com/wiki/BitXor
**/
declare function bitXor(var1: unknown, var2: unknown, ): unknown): unknown;

/**
 * This function will blow up a vehicle.
 * This will cause an explosion and will kill the driver and any passengers inside it.
 * @param vehicleToBlow the vehicle that you wish to blow up.
 * @returns Returns true if the vehicle was blown up, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/BlowVehicle
**/
declare function blowVehicle(vehicleToBlow: Vehicle): boolean;

/**
 * This function is used to call a function from another resource (which must be running).
 * The function which you wish to call must first be exported within the resource's meta.
 * For example:
 * <info author="jbeta" type="script" description="Scoreboard resource" />
 * <script src="scoreboard_client.lua" type="client"/>
 * <script src="scoreboard_exports.lua" type="server"/>
 * <script src="scoreboard_http.lua" type="server"/>
 * <export function="getScoreboardColumns" http="true" />
 * <export function="getScoreboardRows" http="true" />
 * <export function="addScoreboardColumn" type="server"/>
 * <export function="removeScoreboardColumn" type="server"/>
 * <export function="setPlayerScoreboardForced" type="server"/>
 * <export function="setScoreboardForced" type="client"/>
 * This enables other resources to call a function from this resource.
 * You cannot call a server function from the client or vice versa.
 * See triggerServerEvent and triggerClientEvent for possibilities to do that.
 * There is an easier syntax replacing this function.
 * For example, you can instead of:
 * call ( getResourceFromName ( "resource" ), "exportedFunction", 1, "2", "three" )
 * do much like a normal call:
 * exports.resource:exportedFunction ( 1, "2", "three" )
 * If the resource name contains illegal characters (such as hyphens), you can also do:
 * exports["resource-name"]:exportedFunction ( 1, "2", "three" )
 * Two extra "hidden" variables are passed to the exported function:
 * - Note: Calls may incur a performance overhead - they are not equivalent in performance to calling functions in the same resource.
 * Important note: The sourceResource and sourceResourceRoot "hidden" variables are available even if you use exports.*:*
 * @param arguments Any arguments you may want to pass to the function when it is called.Any number of arguments of can be specified, each being passed to the designated function.
 * @returns Returns anything that the designated function has returned, if the function has no return, nil is returned. If the function does not exist, is not exported, or the call was not successful it will return false.Returns anything that the designated function has returned, if the function has no return, nil is returned. If the function does not exist, is not exported, or the call was not successful it will return false.
 * @see https://wiki.mtasa.com/wiki/Call
**/
declare function call(...arguments: any[]): any;

/**
 * This function is used to stop the automatic internal handling of events, for example this can be used to prevent an item being given to a player when they walk over a pickup, by canceling the onPickupUse event.
 * cancelEvent does not have an effect on all events, see the individual event's pages for information on what happens when the event is canceled.
 * cancelEvent does not stop further event handlers from being called, as the order of event handlers being called is undefined in many cases.
 * Instead, you can see if the currently active event has been cancelled using wasEventCancelled.
 * The use of cancelEvent outside of an event handler has no effect.
 * If you implement your own custom events and want to handle them being cancelled, you should call wasEventCancelled to check after your call to triggerEvent.

 * @returns Always returns true.
 * @see https://wiki.mtasa.com/wiki/CancelEvent
**/
declare function cancelEvent(): boolean;

/**
 * Stops a latent event from completing
 * @param handle A handle previous got from getLatentEventHandles.
 * @returns Returns a true if the latent event was successfully cancelled, or false if it was not
 * @see https://wiki.mtasa.com/wiki/CancelLatentEvent
**/
declare function cancelLatentEvent(handle: number): boolean;

/**
 * This function is for returning the number of players in the specified team.
 * @param theTeam The team you wish to retrieve the player count of.
 * @returns Returns an integer containing the number of players in the team, false if it could not be retrieved.
 * @see https://wiki.mtasa.com/wiki/CountPlayersInTeam
**/
declare function countPlayersInTeam(theTeam: Team): number;

// TODO: CreateBlip
/**
 * @see https://wiki.mtasa.com/wiki/CreateBlip
**/

// TODO: CreateBlipAttachedTo
/**
 * @see https://wiki.mtasa.com/wiki/CreateBlipAttachedTo
**/

/**
 * This function creates a collision circle.
 * This is a shape that has a position and a radius and infinite height that you can use to detect a player's presence.
 * Events will be triggered when a player enters or leaves it.
 * Visualizecolshape
 * @param fX The collision circle's center point's X axis position
 * @param fY The collision circle's center point's Y axis position
 * @param radius unknown
 * @returns Returns a colshape element if successful, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/CreateColCircle
**/
declare function createColCircle(fX: number, fY: number, radius: number): ColShape;

/**
 * This function creates a collision cuboid.
 * This is a shape that has a position, width, depth and height.
 * See Wikipedia for a definition of a cuboid.
 * The XYZ of the col starts at the southwest bottom corner of the shape.
 * Visualizecolshape
 * - Note: Attaching a cuboid colshape to another element may give unexpected results as the origin is not at the cuboid centre. Try using a collision sphere for attaching instead
 * @param fX The X position of the collision cuboid's western side
 * @param fY The Y position of the collision cuboid's southern side
 * @param fZ The Z position of the collision cuboid's lowest side
 * @param fWidth The collision cuboid's width
 * @param fDepth The collision cuboid's depth
 * @param fHeight The collision cuboid's height
 * @returns Returns a colshape element if successful, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/CreateColCuboid
**/
declare function createColCuboid(fX: number, fY: number, fZ: number, fWidth: number, fDepth: number, fHeight: number): ColShape;

/**
 * This function creates a collision polygon.
 * See Wikipedia for a definition of a polygon.
 * The first set of X Y of this shape is not part of the colshape bounds, so can set anywhere in the game world, however for performance, place it as close to the centre of the polygon as you can.
 * It should be noted this shape is 2D. There should be at least 3 bound points set.
 * - Note: For this function to work correctly, get/set your bound points in an anti-clockwise fashion.
 * Visualizecolshape
 * @param fCenterX The X position of the collision polygon's position - the position that will be returned from getElementPosition.
 * @param fCenterY The Y position of the collision polygon's position - the position that will be returned from getElementPosition.
 * @param fX1 The 1st X position of the collision polygon's bound point
 * @param fY1 The 1st Y position of the collision polygon's bound point
 * @param fX2 The 2nd X position of the collision polygon's bound point
 * @param fY2 The 2nd Y position of the collision polygon's bound point
 * @param fX3 The 3rd X position of the collision polygon's bound point
 * @param fY3 The 3rd Y position of the collision polygon's bound point
 * @param ) unknown
 * @returns Returns a colshape element if successful, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/CreateColPolygon
**/
declare function createColPolygon(fCenterX: number, fCenterY: number, fX1: number, fY1: number, fX2: number, fY2: number, fX3: number, fY3: number, ): unknown): ColShape;

/**
 * This function creates a collision rectangle.
 * This is a shape that has a position and a width and a depth.
 * See Rectangle for a definition of a rectangle.
 * XY marks on the south west corner of the colshape.
 * Visualizecolshape
 * - Note: Attaching a rectangle colshape to another element may give unexpected results as the origin is not at the rectangle centre. Try using a collision circle for attaching instead
 * @param fX The X position of the collision rectangle's west side
 * @param fY The Y position of the collision rectangle's south side
 * @param fWidth The collision rectangle's width
 * @param fHeight The collision rectangle's height
 * @returns Returns a colshape element if successful, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/CreateColRectangle
**/
declare function createColRectangle(fX: number, fY: number, fWidth: number, fHeight: number): ColShape;

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
 * Creates an explosion of a certain type at a specified point in the world.
 * If creator is specified, the explosion will occur only in its dimension.
 * @param x a float value that specifies the X world coordinate where the explosion is created at.
 * @param y a float value that specifies the Y world coordinate where the explosion is created at.
 * @param z a float value that specifies the Z world coordinate where the explosion is created at.
 * @param theType a integer specifying the explosion type. Valid types are
 * @param [makeSound=true] a boolean specifying whether the explosion should be heard or not.
 * @param [camShake=1] a float specifying the camera shake's intensity.
 * @param , unknown
 * @param [damaging=true] a boolean specifying whether the explosion should cause damage or not.
 * @returns 
 * @see https://wiki.mtasa.com/wiki/CreateExplosion
**/
declare function createExplosion(x: number, y: number, z: number, theType: number, makeSound?: boolean, camShake?: number, ,: unknown, damaging?: boolean): boolean;

/**
 * This function creates a marker.
 * A marker is a 3D model in the world that can highlight a particular point or area, often used to instruct players where to go to perform actions such as entering buildings.
 * There are various limits that govern the maximum number of each type that can be visible at once.
 * These are:
 * You are able to create as many markers as you wish (memory and element limit permitting), but the player will only be able to see the nearest ones up to the limit.
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.
 * @param [theType=checkpoint] unknown
 * @param [size=4] unknown
 * @param , unknown
 * @param [r=0] unknown
 * @param [g=0] unknown
 * @param [b=255] unknown
 * @param [a=255] unknown
 * @returns Returns the marker element that was created, or false if the arguments are incorrect.
 * @see https://wiki.mtasa.com/wiki/CreateMarker
**/
declare function createMarker(x: number, y: number, z: number, theType?: string, size?: number, ,: unknown, r?: number, g?: number, b?: number, a?: number): Marker;

/**
 * Creates an object in the GTA world.
 * - Note: Dynamic objects do not automatically have physics applied to them. Use setElementVelocity(object, 0, 0, 0) to fix this.
 * @param modelid a whole integer specifying the GTASA object model ID.
 * @param x a floating point number representing the X coordinate on the map.
 * @param y a floating point number representing the Y coordinate on the map.
 * @param z a floating point number representing the Z coordinate on the map.
 * @param rx a floating point number representing the rotation about the X axis in degrees.
 * @param ry a floating point number representing the rotation about the Y axis in degrees.
 * @param rz a floating point number representing the rotation about the Z axis in degrees.
 * @param [isLowLOD=false] unknown
 * @returns 
 * @see https://wiki.mtasa.com/wiki/CreateObject
**/
declare function createObject(modelid: number, x: number, y: number, z: number, rx: number, ry: number, rz: number, isLowLOD?: boolean): Object;

/**
 * Creates a Ped in the GTA world.
 * @param modelid A whole integer specifying the GTASA skin ID.
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.
 * @param [rot=0] A floating point number representing the rotation in degrees.
 * @param ] unknown
 * @returns Returns a ped element if it was successfully created.
 * @see https://wiki.mtasa.com/wiki/CreatePed
**/
declare function createPed(modelid: number, x: number, y: number, z: number, rot?: number, ]: unknown): Ped;

/**
 * This function creates a pickup element, which is placed in the GTA world and can be picked up to retrieve a health, armour or a weapon.
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.
 * @param theType This is an integer representing the type of pickup, representing the following types
 * @param amount/weapon unknown
 * @param , unknown
 * @param [respawnTime=30000] How long before the pickup respawns in milliseconds (This parameter is ignored on the client!)
 * @param [ammo=50] An integer representing the amount of ammo a pickup contains. This is only valid when the pickup type is a weapon pickup.
 * @returns Returns pickup element if the pickup was created succesfully, otherwise returns false.
 * @see https://wiki.mtasa.com/wiki/CreatePickup
**/
declare function createPickup(x: number, y: number, z: number, theType: number, amount/weapon: number, ,: unknown, respawnTime?: number, ammo?: number): Pickup;

/**
 * This function can be used to create custom radar areas on the radar.
 * @param startPosX A float representing the origin 'x' position of the radar area.
 * @param startPosY A float representing the origin 'y' position of the radar area.
 * @param sizeX A float representing the width of the radar area.
 * @param sizeY A float representing the height of the radar area.
 * @param [r=255] An integer representing the amount of red in the color. Maximum value is 255
 * @param [g=0] An integer representing the amount of green in the color. Maximum value is 255
 * @param [b=0] An integer representing the amount of blue in the color. Maximum value is 255
 * @param [a=255] An integer representing the amount of alpha in the color. This allows setting the transparency of the radar area.  255 is opaque and 0 is transparent.
 * @param [visibleTo=getRootElement()] An element that you wish to restrict the visibility of the radar area to. (Server function only)
 * @returns 
 * @see https://wiki.mtasa.com/wiki/CreateRadarArea
**/
declare function createRadarArea(startPosX: number, startPosY: number, sizeX: number, sizeY: number, r?: number, g?: number, b?: number, a?: number, visibleTo?: Element): RadarArea;

/**
 * This function creates a vehicle at the specified location.
 * Its worth nothing that the position of the vehicle is the center point of the vehicle, not its base.
 * As such, you need to ensure that the z value (vertical axis) is some height above the ground.
 * You can find the exact height using the client side function getElementDistanceFromCentreOfMassToBaseOfModel, or you can estimate it yourself and just spawn the vehicle so it drops to the ground.
 * - Note: Vehicles (and other elements) created client-side are only seen by the client that created them, aren't synced and players cannot enter them. They are essentially for display only.
 * @param model The vehicle ID of the vehicle being created.
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.
 * @param rx A floating point number representing the rotation about the X axis in degrees.
 * @param ry A floating point number representing the rotation about the Y axis in degrees.
 * @param rz A floating point number representing the rotation about the Z axis in degrees.
 * @param numberplate A string that will go on the number plate of the vehicle (max 8 characters).
 * @param bDirection unknown
 * @param variant1 An integer for the first vehicle variant. See vehicle variants.
 * @param variant2 An integer for the second vehicle variant. See vehicle variants.
 * @returns Returns the vehicle element that was created. Returns false if the arguments are incorrect, or if the vehicle limit of 65535 is exceeded.
 * @see https://wiki.mtasa.com/wiki/CreateVehicle
**/
declare function createVehicle(model: number, x: number, y: number, z: number, rx: number, ry: number, rz: number, numberplate: string, bDirection: boolean, variant1: number, variant2: number): Vehicle;

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
declare function createWater(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number, bShallow?: boolean): Water;

/**
 * debugSleep freezes the client/server for the specified time.
 * This means that all synchronization, rendering and script execution will stop except HTTP processing invoked by fetchRemote.
 * This function only works, if development mode is enabled by setDevelopmentMode and can be utilised to build a debugger that communicates via HTTP requests with the editor/IDE.
 * Warning: Only use this function if you know what you are doing!,true
 * @param sleep An integer value in milliseconds.
 * @returns Returns true if the development mode is enabled and arguments are correct, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DebugSleep
**/
declare function debugSleep(sleep: number): boolean;

/**
 * This function decodes an encoded string using the specified algorithm.
 * The counterpart of this function is encodeString.
 * @param algorithm The algorithm to use.
 * @param input The input to decode.
 * @param options A table with options and other neccessary data for the algorithm, as detailed below.
 * @returns Returns the decoded string if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DecodeString
**/
declare function decodeString(algorithm: string, input: string, options: object): string;

/**
 * This function destroys an element and all elements within it in the hierarchy (its children, the children of those children etc).
 * Player elements cannot be destroyed using this function.
 * A player can only be removed from the hierarchy when they quit or are kicked.
 * The root element also cannot be destroyed, however, passing the root as an argument will wipe all elements from the server, except for the players and clients, which will become direct descendants of the root node, and other elements that cannot be destroyed, such as resource root elements.
 * Players are not the only elements that cannot be deleted.
 * This list also includes remote clients and console elements.
 * - Note: As element ids are eventually recycled, always make sure you nil variables containing the element after calling this function
 * @param elementToDestroy The element you wish to destroy.
 * @returns Returns true if the element was destroyed successfully, false if either the element passed to it was invalid or it could not be destroyed for some other reason (for example, clientside destroyElement can't destroy serverside elements).
 * @see https://wiki.mtasa.com/wiki/DestroyElement
**/
declare function destroyElement(elementToDestroy: Element): boolean;

/**
 * This function detaches attached elements from one another.
 * @param theElement The element to be detached (the "child")
 * @param theAttachToElement The element you wish to detach from, will detach from the attached element if this isn't specified.
 * @returns Returns true if the detaching was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DetachElements
**/
declare function detachElements(theElement: Element, theAttachToElement: Element): boolean;

/**
 * This function detaches an already attached trailer from a vehicle.
 * @param theVehicle The vehicle you wish to detach a trailer from.
 * @param [theTrailer=nil] The trailer you wish to be detached.
 * @returns Returns 'true' if the vehicle's were successfully detached, 'false' otherwise.
 * @see https://wiki.mtasa.com/wiki/DetachTrailerFromVehicle
**/
declare function detachTrailerFromVehicle(theVehicle: Vehicle, theTrailer?: Vehicle): boolean;

// TODO: DxDrawMaterialPrimitive3D
/**
 * @see https://wiki.mtasa.com/wiki/DxDrawMaterialPrimitive3D
**/

/**
 * This function draws a 3D primitive in the 3D world - rendered for one frame.
 * This should be used in conjunction with onClientRender in order to display continuously.
 * @param primitiveType The type of primitive to be drawn.This could be:"pointlist""linelist""linestrip""trianglefan""trianglelist""trianglestrip"The vertex should be passed like this:
 * @param postGUI A bool representing whether the line should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
 * @param vertex1 A table with the coordinates of the vertex plus its color.
 * @param vertex2 A table with the coordinates of the vertex plus its color.
 * @param vertex3 A table with the coordinates of the vertex plus its color.
 * @param vertex4 unknown
 * @param ] unknown
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxDrawPrimitive3D
**/
declare function dxDrawPrimitive3D(primitiveType: string, postGUI: boolean, vertex1: object, vertex2: object, vertex3: object, vertex4: object, ]: unknown): boolean;

// TODO: DxIsAspectRatioAdjustmentEnabled
/**
 * @see https://wiki.mtasa.com/wiki/DxIsAspectRatioAdjustmentEnabled
**/

/**
 * This function encodes a string using the specified algorithm.
 * The counterpart of this function is decodeString.
 * @param algorithm The algorithm to use.
 * @param input The input to encode.
 * @param options A table with options and other neccessary data for the algorithm, as detailed below.
 * @returns Returns the encoded string if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EncodeString
**/
declare function encodeString(algorithm: string, input: string, options: object): string;

// TODO: EngineSetObjectGroupPhysicalProperty
/**
 * @see https://wiki.mtasa.com/wiki/EngineSetObjectGroupPhysicalProperty
**/

/**
 * This function will call all the attached functions of an existing console command, for a specified player.
 * - Note: You can only execute commands created with addCommandHandler. You cannot execute MTA harcoded commands due to security reasons.
 * - Note: Serverside commands can only be executed by the server. The same applies to the client side
 * @param commandName The name of the command you wish to execute.This is what must be typed into the console to trigger the function.
 * @param args Additional parameters that will be passed to the handler function(s) of the command that is called, separated by spaces.
 * @returns Returns true if the command handler was called successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ExecuteCommandHandler
**/
declare function executeCommandHandler(commandName: string, args: string): boolean;

/**
 * This function allows you to post and receive data from HTTP servers.
 * The calls are asynchronous so you do not get an immediate result from the call, instead a callback function you specify is called when the download completes.
 * In the case when the call fails, a string containing "ERROR" followed by an integer containing the error reason will be passed to the callback function.
 * The reason for failure will be similar to errors found with websites - file not found, server not found and timeouts.
 * If you are using fetchRemote to connect to a PHP script, you can use file_get_contents("php://input") to read the postData sent from this function.
 * - Note: Client side function only works with the server the player is connected to unless the domain has been accepted with requestBrowserDomains
 * Warning: function won't trigger inside another fetchRemote function
 * @param URL A full URL in the format  . A port can be specified with a colon followed by a port number appended to the hostname.
 * @param options A table containing any request options
 * @param callbackFunction This is the function that should receive the data returned from the remote server. The callback argument list should be
 * @param callbackArguments unknown
 * @returns Returns true if the arguments are correct, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FetchRemote
**/
declare function fetchRemote(URL: string, options: object, callbackFunction: unknown, callbackArguments: object): boolean;

/**
 * Closes a file handle obtained by fileCreate or fileOpen.
 * @param theFile The file handle to close.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FileClose
**/
declare function fileClose(theFile: unknown): boolean;

/**
 * This function copies a file.
 * - Note: The file functions should not be used to implement configuration files. It is encouraged to use the XML functions for this instead.
 * - Tip: If you do not want to share the content of the created file with other servers, prepend the file path with @ (See filepath for more information)
 * @param filePath The path of the file you want to copy.
 * @param copyToFilePath Where to copy the specified file to.
 * @param [overwrite=false] If set to true it will overwrite a file that already exists at copyToFilePath.
 * @returns Return true if the file was copied, else false if the 'filePath' doesn't exist.
 * @see https://wiki.mtasa.com/wiki/FileCopy
**/
declare function fileCopy(filePath: string, copyToFilePath: string, overwrite?: boolean): boolean;

/**
 * Creates a new file in a directory of a resource.
 * If there already exists a file with the specified name, it is overwritten with an empty file.
 * - Note: To prevent memory leaks, ensure each successful call to fileCreate has a matching call to fileClose
 * - Note: The file functions should not be used to implement configuration files. It is encouraged to use the XML functions for this instead.
 * - Tip: If you do not want to share the content of the created file with other servers, prepend the file path with @ (See filepath for more information)
 * @param filePath The filepath of the file to be created in the following format
 * @returns If successful, returns a file handle which can be used with other file functions (fileWrite, fileClose...). Returns false if an error occured.
 * @see https://wiki.mtasa.com/wiki/FileCreate
**/
declare function fileCreate(filePath: string): unknown;

/**
 * Deletes the specified file.
 * @param filePath The filepath of the file to delete in the following format
 * @returns Returns true if successful, false otherwise (for example if there exists no file with the given name, or it does exist but is in use).
 * @see https://wiki.mtasa.com/wiki/FileDelete
**/
declare function fileDelete(filePath: string): boolean;

/**
 * This functions checks whether a specified file exists inside a resource.
 * @param filePath The filepath of the file, whose existence is going to be checked, in the following format
 * @returns Returns true if the file exists, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FileExists
**/
declare function fileExists(filePath: string): boolean;

/**
 * Forces pending disk writes to be executed.
 * fileWrite doesn't directly write to the hard disk but places the data in a temporary buffer; only when there is enough data in the buffer it is actually written to disk.
 * Call this function if you need the data written right now without closing the file.
 * This is useful for log files that might want to be read while the resource is still executing.
 * fileFlush can be called after each log entry is written.
 * Without this, the file may appear empty or outdated to the user.
 * @param theFile The file handle of the file you wish to flush.
 * @returns Returns true if succeeded, false in case of failure (e.g. the file handle is invalid).
 * @see https://wiki.mtasa.com/wiki/FileFlush
**/
declare function fileFlush(theFile: unknown): boolean;

/**
 * This function retrieves the path of the given file.
 * @param theFile The file you want to get the path.
 * @returns Returns a string representing the file path, false if invalid file was provided.
 * @see https://wiki.mtasa.com/wiki/FileGetPath
**/
declare function fileGetPath(theFile: unknown): string;

/**
 * Returns the current read/write position in the given file.
 * @param theFile the file handle you wish to get the position of.
 * @returns Returns the file position if successful, or false if an error occured (e.g. an invalid handle was passed).
 * @see https://wiki.mtasa.com/wiki/FileGetPos
**/
declare function fileGetPos(theFile: unknown): number;

/**
 * Returns the total size in bytes of the given file.
 * @param theFile the file handle you wish to get the size of.
 * @returns Returns the file size if successful, or false if an error occured (e.g. an invalid file handle was passed).
 * @see https://wiki.mtasa.com/wiki/FileGetSize
**/
declare function fileGetSize(theFile: unknown): number;

/**
 * Checks if the file position is at the end of the file.
 * - Note: Due to underlying C API restrictions this function may return false until an attempt to read further than the end of the file is made.
 * @param theFile A handle to the file you wish to check.
 * @returns Returns true if the file position of the specified file is at the end of the file, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FileIsEOF
**/
declare function fileIsEOF(theFile: unknown): boolean;

/**
 * Opens an existing file for reading and writing.
 * - Note: To prevent memory leaks, ensure each successful call to fileOpen has a matching call to fileClose.
 * - Tip: The file functions should not be used to implement configuration files. It is encouraged to use the XML functions for this instead.
 * Messagebox
 * @param filePath The filepath of the file in the following format
 * @param [readOnly=false] By default, the file is opened with reading and writing access.You can specify true for this parameter if you only need reading access.
 * @returns If successful, returns a file handle for the file. Otherwise returns false (f.e. if the file doesn't exist).
 * @see https://wiki.mtasa.com/wiki/FileOpen
**/
declare function fileOpen(filePath: string, readOnly?: boolean): unknown;

/**
 * Reads the specified number of bytes from the given file starting at its current read/write position, and returns them as a string.
 * @param theFile A handle to the file you wish to read from. Use fileOpen to obtain this handle.
 * @param count The number of bytes you wish to read.
 * @returns Returns the bytes that were read in a string. Note that this string might not contain as many bytes as you specified if an error occured, i.e. end of file.
 * @see https://wiki.mtasa.com/wiki/FileRead
**/
declare function fileRead(theFile: unknown, count: number): string;

/**
 * Renames the specified file.
 * - Note: Also with this function you can move specified file to a new location, new folder or even to another resource's folder. But for this action executing resource must have 'ModifyOtherObjects' ACL right set to true.
 * @param filePath The filepath of the source file in the following format
 * @param newFilePath Destination filepath for the specified source file in the same format.
 * @returns If successful, returns true. Otherwise returns false.
 * @see https://wiki.mtasa.com/wiki/FileRename
**/
declare function fileRename(filePath: string, newFilePath: string): boolean;

/**
 * Sets the current read/write position in the file.
 * @param theFile The file handle of which you want to change the read/write position.
 * @param offset The new position. This is the number of bytes from the beginning of the file. If this value is larger than the file size, it is limited to 52,428,800 bytes (50 MB).
 * @returns Returns where the offset was actually set at. I.e. if offset was past the end of the file, it will be set at the end of the file, and this position will be returned. Returns false in case of failure (e.g. the specified file handle is invalid).
 * @see https://wiki.mtasa.com/wiki/FileSetPos
**/
declare function fileSetPos(theFile: unknown, offset: number): number;

/**
 * Writes one or more strings to a given file, starting at the current read/write position.
 * Advances the position over the number of bytes that were written.
 * @param theFile A handle to the file you wish to write to. The file must have been opened with write access, i.e. the file handle must be a result of fileCreate or fileOpen with the readonly parameter set to false.
 * @param string1 The string to write.
 * @param string2 unknown
 * @param string3 unknown
 * @param ] unknown
 * @returns Returns the number of bytes successfully written to the file, returns false if invalid arguments were specified.
 * @see https://wiki.mtasa.com/wiki/FileWrite
**/
declare function fileWrite(theFile: unknown, string1: string, string2: string, string3: string, ]: unknown): number;

/**
 * This function will set a vehicle's health to full and fix its damage model.
 * If you wish to only change the vehicle's health, without affecting its damage model, use setElementHealth.
 * @param theVehicle the vehicle you wish to fix
 * @returns Returns true if the vehicle was fixed, false if theVehicle is invalid.
 * @see https://wiki.mtasa.com/wiki/FixVehicle
**/
declare function fixVehicle(theVehicle: Vehicle): boolean;

/**
 * This function is used to forcefully show a player's radar map.
 * @param forceOn A boolean value representing whether or not the players radar map will be forced on
 * @returns Returns true if the player's radar map was forced on, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ForcePlayerMap
**/
declare function forcePlayerMap(forceOn: boolean): boolean;

/**
 * This function parses a JSON formatted string into variables.
 * You can use toJSON to encode variables into a JSON string that can be read by this function.
 * @param json A JSON formatted string
 * @returns Returns variables read from the JSON string. Note: Indices of a JSON object such as "1": "cat" are being returned as string, not as integer.
 * @see https://wiki.mtasa.com/wiki/FromJSON
**/
declare function fromJSON(json: string): unknown;

/**
 * This function gets the maximum height at which aircraft can fly without their engines turning off.
 * @param getAircraftMaxHeight unknown
 * @returns Returns a float containing the max aircraft height.
 * @see https://wiki.mtasa.com/wiki/GetAircraftMaxHeight
**/
declare function getAircraftMaxHeight(getAircraftMaxHeight: number): [];

/**
 * This function returns the maximum velocity at which aircrafts could fly.
 * Using this function server-side will return the server-side value, not necessarily the same that is set client-side.

 * @returns Returns a float being the max velocity that is currently set, depending on which side it is used.
 * @see https://wiki.mtasa.com/wiki/GetAircraftMaxVelocity
**/
declare function getAircraftMaxVelocity(): number;

/**
 * This function returns a table of all the elements attached to the specified element
 * @param theElement The element which you require the information from.
 * @returns Returns a table of all the elements attached to the specified element.
 * @see https://wiki.mtasa.com/wiki/GetAttachedElements
**/
declare function getAttachedElements(theElement: Element): object;

/**
 * This function will tell you what color a blip is. This color is only applicable to the default blip icon (, or ).
 * All other icons will ignore this.
 * @param theBlip The blip whose color you wish to get.
 * @returns Returns four integers in RGBA format, with a maximum value of 255 for each. The values are, in order, red, green, blue, and alpha. Alpha decides the transparancy where 255 is opaque and 0 is fully transparent. false is returned if the blip is invalid.
 * @see https://wiki.mtasa.com/wiki/GetBlipColor
**/
declare function getBlipColor(theBlip: Blip): [number, number, number, number];

/**
 * This function returns the icon a blip currently has.
 * @param theBlip the blip we're getting the icon number of.
 * @returns Returns an int indicating which icon the blip has. Valid values are listed on the Radar Blips page.
 * @see https://wiki.mtasa.com/wiki/GetBlipIcon
**/
declare function getBlipIcon(theBlip: Blip): number;

/**
 * This function gets the Z ordering value of a blip.
 * The Z ordering determines if a blip appears on top of or below other blips.
 * Blips with a higher Z ordering value appear on top of blips with a lower value.
 * The default value for all blips is 0.
 * @param theBlip the blip to retrieve the Z ordering value of.
 * @returns Returns the Z ordering value of the blip if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetBlipOrdering
**/
declare function getBlipOrdering(theBlip: Blip): number;

/**
 * This function gets the size of a blip..
 * @param theBlip The blip you wish to get the size of.
 * @returns Returns an int indicating the size of the blip. The default value is 2. The maximum value is 25.
 * @see https://wiki.mtasa.com/wiki/GetBlipSize
**/
declare function getBlipSize(theBlip: Blip): number;

/**
 * This function will tell you what visible distance a blip has.
 * @param theBlip The blip whose visible distance you wish to get.
 * @returns Returns one float with the blips visible distance, false if the blip is invalid.
 * @see https://wiki.mtasa.com/wiki/GetBlipVisibleDistance
**/
declare function getBlipVisibleDistance(theBlip: Blip): number;

/**
 * This function is used to get the name of a body part on a player.
 * @param bodyPartID An integer representing the body part ID you wish to retrieve the name of.
 * @returns This function returns a string containing the body part name if the ID is valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetBodyPartName
**/
declare function getBodyPartName(bodyPartID: number): string;

/**
 * This function gets the position of the camera and the position of the point it is facing.
 * Important note: Server-side this functions returns false or the latest value set via setCameraMatrix (called from server or client).

 * @returns This function returns 8 floats if the argument is valid (when applicable); the first three indicate the position of the camera, the next three indicate the position of the point it's facing, and the last two are the roll and field of view. Returns false if the argument is invalid.
 * @see https://wiki.mtasa.com/wiki/GetCameraMatrix
**/
declare function getCameraMatrix(): [number, number, number, number, number, number, number, number];

/**
 * This function returns an element that corresponds to the current target of the specified player's camera (i.e. what it is following).
 * @param thePlayer The player whose camera you wish to receive the target of.<section class="client" name="Client" show="true">
 * @returns * Returns an element of the target if the function was successful, or false if bad arguments were specified
 * @see https://wiki.mtasa.com/wiki/GetCameraTarget
**/
declare function getCameraTarget(thePlayer: Player): Element;

/**
 * This function is used to get the texture and model of clothes by the clothes type and index.
 * (Scans through the list of clothes for the specific type).
 * @param clothesType An integer representing the clothes slot/type to scan through.
 * @param clothesIndex An integer representing the index (0 based) set of clothes in the list you wish to retrieve.Each type has a different number of valid indexes.
 * @returns This function returns 2 strings, a texture and model respectively, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/GetClothesByTypeIndex
**/
declare function getClothesByTypeIndex(clothesType: number, clothesIndex: number): [string, string];

/**
 * This function is used to get the name of a certain clothes type.
 * @param clothesType An integer determining the type of clothes you want to get the clothes of.
 * @returns This function returns a string (the name of the clothes type) if found, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetClothesTypeName
**/
declare function getClothesTypeName(clothesType: number): string;

/**
 * This function will tell you if clouds are enabled or disabled.

 * @returns Returns true if the clouds are enabled or false if clouds are disabled.
 * @see https://wiki.mtasa.com/wiki/GetCloudsEnabled
**/
declare function getCloudsEnabled(): boolean;

/**
 * This function is used to retrieve the type of an colshape.
 * @param shape The colshape you wish to get the type of.
 * @returns Returns false if invalid arguments were passed, or an integer of the type of the colshape, which include:
 * @see https://wiki.mtasa.com/wiki/GetColShapeType
**/
declare function getColShapeType(shape: ColShape): number;

/**
 * This function will extract Red, Green, Blue and Alpha values from a hex string you provide it. These strings follow the same format as used in HTML, with addition of the Alpha values.
 * @param theColor A string containing a valid color code.All colors used must begin with a # sign.
 * @returns Returns four integers in RGBA format, with a maximum value of 255 for each. Each stands for red, green, blue, and alpha. Alpha decides transparancy where 255 is opaque and 0 is transparent. false is returned if the string passed is invalid (for example, is missing the preceeding # sign).
 * @see https://wiki.mtasa.com/wiki/GetColorFromString
**/
declare function getColorFromString(theColor: string): [number, number, number, number];

/**
 * Function also added client-side.
 * New items: 3.0153,1.5.3,This function is used to retrieve a list of all the registered command handlers of a given resource (or of all resources).
 * @param theResource The resource from which you wish to retrieve all command handlers.Or leave it empty to retrieve command handlers of all resources.
 * @returns Returns a table containing all the commands of the given resource or a table with subtables containing the command and theResource pointer ( { "command", theResource } ). See examples below if you don't understand it.
 * @see https://wiki.mtasa.com/wiki/GetCommandHandlers
**/
declare function getCommandHandlers(theResource: Resource): object;

/**
 * This function is used to get the development mode of the client.
 * For more information see setDevelopmentMode

 * @returns Returns true if the development mode is on, false if off.
 * @see https://wiki.mtasa.com/wiki/GetDevelopmentMode
**/
declare function getDevelopmentMode(): boolean;

/**
 * This function returns the distance between two 2 dimensional points using the pythagorean theorem.
 * - Note: This function is equivalent to the Vector2 class getLength method when used with a vector that holds the direction and distance between two points. In other words, it produces exactly the same result as substracting the points' coordinates and getting the length of the result vector.
 * @param x1 The X position of the first point
 * @param y1 The Y position of the first point
 * @param x2 The X position of the second point
 * @param y2 The Y position of the second point
 * @returns Returns a float containing the 2D distance between the two points. Returns false if invalid parameters are passed.
 * @see https://wiki.mtasa.com/wiki/GetDistanceBetweenPoints2D
**/
declare function getDistanceBetweenPoints2D(x1: number, y1: number, x2: number, y2: number): number;

/**
 * This function returns the distance between two 3 dimensional points using the pythagorean theorem.
 * - Note: This function is equivalent to the Vector3 class getLength method when used with a vector that holds the direction and distance between two points. In other words, it produces exactly the same result as substracting the points' coordinates and getting the length of the result vector.
 * @param x1 The X position of the first point
 * @param y1 The Y position of the first point
 * @param z1 The Z position of the first point
 * @param x2 The X position of the second point
 * @param y2 The Y position of the second point
 * @param z2 The Z position of the second point
 * @returns Returns a float containing the distance between the two points as a float. Returns false if an argument passed was invalid.
 * @see https://wiki.mtasa.com/wiki/GetDistanceBetweenPoints3D
**/
declare function getDistanceBetweenPoints3D(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

/**
 * Used for custom Lua based interpolation, returns the easing value (animation time to use in your custom interpolation) given a progress and an easing function.
 * In most cases, either moveObject or interpolateBetween can do the job.
 * getEasingValue is only provided in case you want to do your own custom interpolation based on easing.
 * @param fProgress float between 0 and 1 indicating the interpolation progress (0 at the beginning of the interpolation, 1 at the end).
 * @param strEasingType the easing function to use for the interpolation
 * @param fEasingPeriod the period of the easing function (only some easing functions use this parameter)
 * @param fEasingAmplitude the amplitude of the easing function (only some easing functions use this parameter)
 * @param fEasingOvershoot the overshoot of the easing function (only some easing functions use this parameter)
 * @returns Returns fAnimationTime the animation time given by the easing function (can be 1 since some easing functions have overshoot or bounce/spring effects, false otherwise (error in parameters).
 * @see https://wiki.mtasa.com/wiki/GetEasingValue
**/
declare function getEasingValue(fProgress: number, strEasingType: string, fEasingPeriod: number, fEasingAmplitude: number, fEasingOvershoot: number): number;

/**
 * This function returns the alpha (transparency) value for the specified element.
 * This can be a player, ped, object, vehicle or weapon.
 * @param theElement The element whose alpha you want to retrieve.
 * @returns Returns an integer (0-255; 0 = transparent) indicating the element's alpha, or false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GetElementAlpha
**/
declare function getElementAlpha(theElement: Element): number;

/**
 * Gets the current angular velocity of a specified, supported element.
 * @param theElement The element to retrieve the angular velocity from.Can be either a player, ped, object, vehicle or a custom weapon.Server side supports only vehicles currently.
 * @returns Returns three floats describing the x, y and z rotation
 * @see https://wiki.mtasa.com/wiki/GetElementAngularVelocity
**/
declare function getElementAngularVelocity(theElement: Element): [number, number, number];

/**
 * This function returns the offsets of an element that has been attached to another element using attachElements.
 * @param theElement The attached element.
 * @returns Returns 6 floats, of which the first 3 indicate the position offset (x, y, z), and the last 3 indicate the rotation offset (x, y, z), if successful. false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetElementAttachedOffsets
**/
declare function getElementAttachedOffsets(theElement: Element): [number, number, number, number, number, number];

/**
 * This function determines the element that the specified element is attached to.
 * @param theElement The element you require the information for.
 * @returns Returns the element that the chosen element is attached to, or false if the element isn't attached to another element.
 * @see https://wiki.mtasa.com/wiki/GetElementAttachedTo
**/
declare function getElementAttachedTo(theElement: Element): Element | false;

/**
 * This function returns the minimum and maximum coordinates of an element's bounding box.
 * It should be noted that the values returned are relative to the position of the element, and as such if you wish to get world coordinates for drawing, etc., you should retrieve the position of the element and add the returned values onto that.
 * - Note: The element must be streamed in for this function to work.
 * @param theElement the element whose bounding box we want to get.
 * @returns Returns min x, min y, min z, max x, max y, max z if the passed element is valid and streamed in, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetElementBoundingBox
 * @tupleReturn
**/
function getElementBoundingBox(theElement: Element): [number, number, number, number, number, number] | false;

/**
 * This function returns an element from the specified ID. If more than one element with the same ID exists, only the first one in the order it appears in the XML tree will be returned by this function.
 * - Note: The ID in this context is the value of the 'id' data item of the element (the attribute in the .map file), NOT the model ID, weapon ID or similiar.
 * @param id The ID of the element as it appears in the XML file or as set by setElementID.
 * @param [index=0] If there are two or more elements of the same ID it will return the element with the specified index starting at 0.
 * @returns Returns the element with the given ID, or false if no such element exists.
 * @see https://wiki.mtasa.com/wiki/GetElementByID
**/
declare function getElementByID(id: string, index?: number): Element | false;

/**
 * This function returns one of the child elements of a given parent element.
 * The child element is selected by its index (0 for the first child, 1 for the second and so on).
 * @param parent the element above the one to be returned in the hierarchy.
 * @param index the element's index (0 for the first element, 1 for the second, etc).
 * @returns Returns the requested element if it exists, or false if it doesn't.
 * @see https://wiki.mtasa.com/wiki/GetElementChild
**/
declare function getElementChild(parent: Element, index: number): Element | false;

/**
 * This function is used to retrieve a list of the child elements of a given parent element.
 * Note that it will only return direct children and not elements that are further down the element tree.
 * @param parent Supply this argument with the parent of the children you want returned.
 * @param [theType=nil] The type of element you want a list of. This is the same as the tag name in the .map file, so this can be used with a custom element type if desired. Built in types are
 * @returns This function returns a table that contains a list of elements that the parent has. If the element has no children, it will return an empy table. It will return false if the parent element does not exist.
 * @see https://wiki.mtasa.com/wiki/GetElementChildren
**/
declare function getElementChildren(parent: Element, theType?: string): object | false;

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
declare function getElementColShape(theElement: Element): ColShape;

/**
 * This function indicates if a specific element is set to have collisions disabled.
 * An element without collisions does not interact with the physical environment and remains static.
 * @param theElement The element for which you want to check whether collisions are enabled
 * @returns Returns true if the collisions are enabled, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetElementCollisionsEnabled
**/
declare function getElementCollisionsEnabled(theElement: Element): boolean;

/**
 * This function retrieves element data attached to an element under a certain key.
 * @param theElement This is the element with data you want to retrieve.
 * @param key The name of the element data entry you want to retrieve. (Maximum 31 characters.)
 * @param [inherit=true] - toggles whether or not the function should go up the hierarchy to find the requested key in case the specified element doesn't have it.
 * @returns This function returns a variable containing the requested element data, or false if the element or the element data does not exist. When getting data corresponding to a XML attribute, this is always a string.
 * @see https://wiki.mtasa.com/wiki/GetElementData
**/
declare function getElementData(theElement: Element, key: string, inherit?: boolean): any | false;

/**
 * This function allows you to retrieve the dimension of any element.
 * The dimension determines what/who the element is visible to.
 * @param theElement The element in which you'd like to retrieve the dimension of.
 * @returns Returns an integer for the dimension if theElement is valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetElementDimension
**/
declare function getElementDimension(theElement: Element): number | false;

/**
 * This function is used to retrieve the distance between a element's centre of mass to the base of the model.
 * This can be used to calculate the position the element has to be set to, to have it on ground level.
 * @param theElement The element you want to retrieve the value of.
 * @returns Returns a float with the distance, or false if the element is invalid.
 * @see https://wiki.mtasa.com/wiki/GetElementDistanceFromCentreOfMassToBaseOfModel
**/
declare function getElementDistanceFromCentreOfMassToBaseOfModel(theElement: Element): number | false;

/**
 * This function returns the current health for the specified element.
 * This can be a player, a ped, a vehicle, or an object.
 * @param theElement The player or vehicle whose health you want to check.
 * @returns Returns a float indicating the element's health, or false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GetElementHealth
**/
declare function getElementHealth(theElement: Element): number | false;

/**
 * This function gets the ID of an element.
 * This is the "id" attribute of the element and is a string, NOT a number like a model ID, weapons ID or similar.
 * @param theElement the element from which to retrieve the ID.
 * @returns This returns a string containing the element ID. It will return an empty string if it has no ID. It will return false if the element is invalid.
 * @see https://wiki.mtasa.com/wiki/GetElementID
**/
declare function getElementID(theElement: Element): string | false;

/**
 * This function allows you to retrieve the interior of any element.
 * An interior is the current loaded place, 0 being outside.
 * @param theElement The element of which you'd like to retrieve the interior
 * @returns Returns an int for the interior if theElement is valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetElementInterior
**/
declare function getElementInterior(theElement: Element): number | false;

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
declare function getElementMatrix(theElement: Element, legacy?: boolean): object | false;

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
function getElementPosition(theElement: Element): [number, number, number];

/**
 * Retrieve the rotation of elements.
 * @param theElement The element whose rotation will be retrieved
 * @param [rotOrder=default] A string representing the rotation order desired when returning the euler angles. If omitted, default value is "default". Allowed values are
 * @returns rx, ry, rz: 3 floats representing the Euler rotation angles on the axis X, Y and Z (with the rotation order depending on the rotOrder argument) if element exists and is a valid element, false if it's invalid.
 * @see https://wiki.mtasa.com/wiki/GetElementRotation
**/
declare function getElementRotation(theElement: Element, rotOrder?: string): [number, number, number] | false;

/**
 * This function is used to retrieve the type of an element.
 * @param theElement The element you wish to get the type of.
 * @returns Returns a string containing the element type, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GetElementType
**/
declare function getElementType(theElement: Element): string | false;

/**
 * This function returns three floats containing the velocity (movement speeds) along the X, Y, and Z axis respectively.
 * This means that velocity values can be positive and negative for each axis.
 * @param theElement The element you wish to retrieve the velocity of.
 * @returns If successful, returns three floats that represent the element's current velocity along the x, y, and z axis respectively. This function can fail if the element is a player in a car. Use the vehicle element in this case. It will also fail if the element specified does not have a velocity, or does not exist. In case of failure, the first return value will be false. The returned values are expressed in GTA units per 1/50th of a second. A GTA Unit is equal to one metre.
 * @see https://wiki.mtasa.com/wiki/GetElementVelocity
**/
declare function getElementVelocity(theElement: Element): [number, number, number];

/**
 * This function is used to retrieve a list of all elements in a colshape, of the specified type.
 * - Note: * For legacy reasons, a colshape created on the client does not collide with elements already existing at that location until they first move
 * * This function doesn't verify whether elements are in the same dimension and interior, additional checks could be implemented manually if they are needed
 * @param theShape The colshape you want to get the elements from.
 * @param [elemType=nil] The type of element you want a list of. This can be any element type, the common ones being
 * @returns Returns a table containing all the elements inside the colshape, of the specified type. Returns an empty table if there are no elements inside. Returns false if the colshape is invalid.
 * @see https://wiki.mtasa.com/wiki/GetElementsWithinColShape
**/
declare function getElementsWithinColShape(theShape: ColShape, elemType?: string): object;

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
 * This function gets the attached functions from the event and attached element from current lua script.
 * @param eventName The name of the event. For example ( "onPlayerWasted" ).
 * @param attachedTo The element attached to.
 * @returns Returns table with attached functions, empty table otherwise.
 * @see https://wiki.mtasa.com/wiki/GetEventHandlers
**/
declare function getEventHandlers(eventName: string, attachedTo: Element): object;

/**
 * This function will tell you what is the current render distance.
 * - Note: The function will return false server-side if far clip distance has not been set before the function is called.
 * @param getFarClipDistance unknown
 * @returns Returns a float with the current render distance, false if the operation could not be completed.
 * @see https://wiki.mtasa.com/wiki/GetFarClipDistance
**/
declare function getFarClipDistance(getFarClipDistance: number): [];

/**
 * This function will tell you what is the current fog render distance.
 * - Note: The function will return false server-side if fog distance has not been set before the function is called.
 * @param getFogDistance unknown
 * @returns Returns a float with the current fog render distance, false if the operation could not be completed.
 * @see https://wiki.mtasa.com/wiki/GetFogDistance
**/
declare function getFogDistance(getFogDistance: number): [];

/**
 * This function gets the current game speed value.
 * @param getGameSpeed unknown
 * @returns Returns a float representing the speed of the game.
 * @see https://wiki.mtasa.com/wiki/GetGameSpeed
**/
declare function getGameSpeed(getGameSpeed: number): [];

/**
 * This function returns the current gravity level for the context in which it is called (server or client).

 * @returns Returns a float with the current server or client (depending on where you call the function) gravity level.
 * @see https://wiki.mtasa.com/wiki/GetGravity
**/
declare function getGravity(): number;

/**
 * This function will return the current heat haze effect settings.
 * - Note: The server can only return the heat haze settings if it has actually been set by script.
 * @param , unknown
 * @param , unknown
 * @param , unknown
 * @param , unknown
 * @param , unknown
 * @param , unknown
 * @param , unknown
 * @param , unknown
 * @param getHeatHaze unknown
 * @returns Returns 9 values, which are the same used as arguments in SetHeatHaze:
 * @see https://wiki.mtasa.com/wiki/GetHeatHaze
**/
declare function getHeatHaze(,: number, ,: number, ,: number, ,: number, ,: number, ,: number, ,: number, ,: number, getHeatHaze: boolean): [number, number, number, number, number, number, number, number];



/**
 * This function gets the maximum height at which your jetpack can fly without failing to go higher.
 * @param getJetpackMaxHeight unknown
 * @returns Returns a float containing the max jetpack height.
 * @see https://wiki.mtasa.com/wiki/GetJetpackMaxHeight
**/
declare function getJetpackMaxHeight(getJetpackMaxHeight: number): [];

/**
 * Gets the currently queued latent events.
 * The last one in the table is always the latest event queued.
 * Each returned handle can be used with getLatentEventStatus or cancelLatentEvent
 * Needs example
 * @param getLatentEventHandles unknown
 * @returns Returns a table of handles or false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GetLatentEventHandles
**/
declare function getLatentEventHandles(getLatentEventHandles: object): [];

/**
 * Gets the status of one queued latent event.
 * @param handle A handle previous got from getLatentEventHandles.
 * @returns Returns a table with the following info or false if invalid arguments were passed:
 * @see https://wiki.mtasa.com/wiki/GetLatentEventStatus
**/
declare function getLatentEventStatus(handle: number): object;

/**
 * This function return the low LOD element that an element is associated with.
 * @param theElement The element whose low LOD version we want to get.
 * @returns Returns a low LOD element if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetLowLODElement
**/
declare function getLowLODElement(theElement: Element): Element;

/**
 * This function returns the color and transparency for a marker element.
 * Not all marker types support transparency.
 * @param theMarker The marker that you wish to retrieve the color of.
 * @returns Returns four ints corresponding to the amount of red, green, blue and alpha (respectively) of the marker, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GetMarkerColor
**/
declare function getMarkerColor(theMarker: Marker): [number, number, number, number];

/**
 * Returns the number of markers that currently exist in the world.
 * @param getMarkerCount unknown
 * @returns Returns the number of markers that currently exist.
 * @see https://wiki.mtasa.com/wiki/GetMarkerCount
**/
declare function getMarkerCount(getMarkerCount: number): [];

/**
 * This function returns the icon name for a marker.
 * @param theMarker A marker element referencing the specified marker.
 * @returns Returns false if the marker passed is invalid or a string containing one of the following:
 * @see https://wiki.mtasa.com/wiki/GetMarkerIcon
**/
declare function getMarkerIcon(theMarker: Marker): string;

/**
 * This function returns a float containing the size of the specified marker.
 * @param myMarker The marker that you wish to retrieve the size of.
 * @returns Returns a float containing the size of the specified marker.
 * @see https://wiki.mtasa.com/wiki/GetMarkerSize
**/
declare function getMarkerSize(myMarker: Marker): number;

/**
 * This function returns the position of the specified marker's target, the position it points to. This only works for checkpoint markers and ring markers.
 * For checkpoints it returns the position the arrow is pointing to, for ring markers it returns the position the ring is facing.
 * You can set this target with setMarkerTarget.
 * @param theMarker The marker you wish to retrieve the target position of.
 * @returns Returns three floats if a target is set, or false in the first variable and nil in the two others if the marker is invalid or no target is set.
 * @see https://wiki.mtasa.com/wiki/GetMarkerTarget
**/
declare function getMarkerTarget(theMarker: Marker): [number, number, number];

/**
 * This function returns a marker's type.
 * @param theMarker A marker element referencing the specified marker.
 * @returns * Returns one of the following strings: If an invalid marker is specified, false is returned.
 * @see https://wiki.mtasa.com/wiki/GetMarkerType
**/
declare function getMarkerType(theMarker: Marker): string;

/**
 * Tells you how long an ingame minute takes in real-world milliseconds.
 * The default GTA value is 1000.
 * @param getMinuteDuration unknown
 * @returns Returns the number of real-world milliseconds that go in an ingame minute.
 * @see https://wiki.mtasa.com/wiki/GetMinuteDuration
**/
declare function getMinuteDuration(getMinuteDuration: number): [];

/**
 * This function returns the moon size.
 * Using this function server-side will return the server-side value, not necessarily the same that is set client-side.

 * @returns Returns a integer being the moon size that is currently set, depending on which side it is used.
 * @see https://wiki.mtasa.com/wiki/GetMoonSize
**/
declare function getMoonSize(): number;

/**
 * This function returns network status information.
 * @param getNetworkStats unknown
 * @returns Returns a table, the indexes in the table are the following:
 * @see https://wiki.mtasa.com/wiki/GetNetworkStats
**/
declare function getNetworkStats(getNetworkStats: object): [];

/**
 * This function returns a table containing network usage information about inbound and outbound packets.
 * @param getNetworkUsageData unknown
 * @returns Returns a table with two fields: "in" and "out". Each of these contain a table with two fields: "bits" and "count". Each of these contain a table with 256 numeric fields ranging from 0 to 255, containing the appropriate network usage data for such packet id.
 * @see https://wiki.mtasa.com/wiki/GetNetworkUsageData
**/
declare function getNetworkUsageData(getNetworkUsageData: object): [];

/**
 * This function returns the visible size of an object.
 * @param theObject the object you wish to return the scale of.
 * @returns 
 * @see https://wiki.mtasa.com/wiki/GetObjectScale
**/
declare function getObjectScale(theObject: Object): [number, number, number];

/**
 * This function is used to get "occlusions enabled" state.
 * - Note: Occlusions are used by GTA to enhance performance by hiding objects that are (normally) obscured by certain large buildings. However when removeWorldModel is used they may also have the undesired effect of making parts of the map disappear. Disabling occlusions will fix that.
 * @param getOcclusionsEnabled unknown
 * @returns Returns true if occlusions are enabled, or false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetOcclusionsEnabled
**/
declare function getOcclusionsEnabled(getOcclusionsEnabled: boolean): [];

/**
 * This function returns a table of the original vehicle handling.
 * Use getVehicleHandling if you wish to get the current handling of a vehicle, or getModelHandling for a specific vehicle model.
 * @param modelID The vehicle ID you wish to get the original handling from.
 * @returns Returns a table containing all the handling data, false otherwise. Here a list of valid table properties and what they return:
 * @see https://wiki.mtasa.com/wiki/GetOriginalHandling
**/
declare function getOriginalHandling(modelID: number): object;

/**
 * This function gets the original weapon property of the specified weapons specified weapon type.
 * @param weaponID/string unknown
 * @param , unknown
 * @param weaponSkill Either
 * @param property The property you want to get the value of
 * @returns On success: int: The weapon property On failure: bool: False if the passed arguments were invalid
 * @see https://wiki.mtasa.com/wiki/GetOriginalWeaponProperty
**/
declare function getOriginalWeaponProperty(weaponID/string: number, ,: unknown, weaponSkill: string, property: string): number;

/**
 * This function returns an integer that contains the ammo in a specified ped's weapon.
 * See Weapon Info
 * @param thePed The ped whose ammo you want to check.
 * @param [weaponSlot=current] an integer representing the weapon slot (set to the ped's currently selected slot if not specified).
 * @returns Returns an int containing the amount of ammo in the specified ped's currently selected or specified clip, or 0 if the ped specified is invalid.
 * @see https://wiki.mtasa.com/wiki/GetPedAmmoInClip
**/
declare function getPedAmmoInClip(thePed: Ped, weaponSlot?: number): number;

/**
 * This function returns the current armor of the specified ped.
 * @param thePed The ped whose armor you want to check
 * @returns A float with the armor, false if an invalid ped was given.
 * @see https://wiki.mtasa.com/wiki/GetPedArmor
**/
declare function getPedArmor(thePed: Ped): number;

/**
 * This function detects the element a ped is standing on. This can be a vehicle or an object.
 * @param thePed The ped of which you want to get the element he is standing on.
 * @returns Returns an object or a vehicle if the ped is standing on one, false if he is touching none or an invalid element was passed.
 * @see https://wiki.mtasa.com/wiki/GetPedContactElement
**/
declare function getPedContactElement(thePed: Ped): Element;

/**
 * Retrieves the fighting style a player/ped is currently using.
 * Function also added client-side.
 * @param thePed the ped whose current fighting style ID you wish to retrieve.
 * @returns Returns the ped's current fighting style as an integer ID, false if it fails to retrieve a value.
 * @see https://wiki.mtasa.com/wiki/GetPedFightingStyle
**/
declare function getPedFightingStyle(thePed: Ped): number;

/**
 * This function gets the vehicle that the ped is currently in or is trying to enter, if any.
 * @param thePed The ped whose vehicle you're looking up.
 * @returns Returns the vehicle that the specified ped is in, or false if the ped is not in a vehicle or is an invalid ped.
 * @see https://wiki.mtasa.com/wiki/GetPedOccupiedVehicle
**/
declare function getPedOccupiedVehicle(thePed: Ped): Vehicle;

/**
 * This function gets the seat that a specific ped is sitting in in a vehicle.
 * @param thePed The ped whose vehicle seat you're looking up.
 * @returns Returns false if the ped is on foot, or the ped doesn't exist.
 * @see https://wiki.mtasa.com/wiki/GetPedOccupiedVehicleSeat
**/
declare function getPedOccupiedVehicleSeat(thePed: Ped): number;



/**
 * This function returns the value of the specified statistic of a specific ped.
 * @param thePed The ped whose stat you want to retrieve.
 * @param stat A whole number determining the stat ID.
 * @returns Returns the value of the requested statistic.
 * @see https://wiki.mtasa.com/wiki/GetPedStat
**/
declare function getPedStat(thePed: Ped, stat: number): number;

/**
 * This function is used to get the element a ped is currently targeting.
 * @param thePed The ped whose target you want to retrieve.
 * @returns Returns the element that's being targeted, or false if there isn't one. This is only effective on physical GTA elements, namely:
 * @see https://wiki.mtasa.com/wiki/GetPedTarget
**/
declare function getPedTarget(thePed: Ped): Element;

/**
 * This function returns an integer that contains the total ammo in a specified ped's weapon.
 * See Weapon Info
 * - Note: Clientside, this function will not return a correct value for remote player weapons that aren't in hand.
 * @param thePed The ped whose ammo you want to check.
 * @param [weaponSlot=current] an integer representing the weapon slot (set to the ped's current slot if not given)
 * @returns Returns an int containing the total amount of ammo for the specified ped's weapon, or 0 if the ped specified is invalid.
 * @see https://wiki.mtasa.com/wiki/GetPedTotalAmmo
**/
declare function getPedTotalAmmo(thePed: Ped, weaponSlot?: number): number;

/**
 * Returns the walking style ID of a ped.
 * This ID determines the set of animations that is used for walking, running etc.
 * @param thePed the ped whose walking style to retrieve.
 * @returns Returns the walking style ID if successful, false otherwise. The possible walking styles are as follows:
 * @see https://wiki.mtasa.com/wiki/GetPedWalkingStyle
**/
declare function getPedWalkingStyle(thePed: Ped): number;

/**
 * This function tells you which weapon type is in a certain weapon slot of a ped.
 * See Weapon Info
 * @param thePed the ped you want to get the weapon type from.
 * @param [weaponSlot=current] an integer representing the weapon slot (set to the ped's current slot if not given).
 * @returns Returns an int indicating the type of the weapon the ped has in the specified slot. If the slot is empty, it returns 0. It should be noted that if a ped runs out of ammo for a weapon, it will still return the ID of that weapon in the slot (even if it appears as if the ped does not have a weapon at all), though getPedTotalAmmo will return 0. Therefore, getPedTotalAmmo should be used in conjunction with getPedWeapon in order to check if a ped has a weapon.
 * @see https://wiki.mtasa.com/wiki/GetPedWeapon
**/
declare function getPedWeapon(thePed: Ped, weaponSlot?: number): number;

/**
 * This function gets a ped's selected weapon slot.
 * @param thePed the ped to get the current weapon slot of.
 * @returns Returns the selected weapon slot ID on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetPedWeaponSlot
**/
declare function getPedWeaponSlot(thePed: Ped): number;

/**
 * This function returns performance information.
 * @param category Performance statistics category.If empty string is given, list of all categories is returned.See categories for more information.
 * @param [options=] Category specific ',' separated options. All categories supports 'h' option for help.
 * @param [filter=] Case-sensitive filter used to select returned rows. Only 'name' column is filtered.
 * @returns Returns two tables. First contains column names. The second contains result rows. Each row is table of cells.
 * @see https://wiki.mtasa.com/wiki/GetPerformanceStats
**/
declare function getPerformanceStats(category: string, options?: string, filter?: string): [object, object];

/**
 * This function retrieves the amount of ammo in a weapon pickup.
 * @param thePickup The pickup in which you wish to retrieve the ammo of
 * @returns Returns an integer of the amount of ammo in the pickup, false if the pickup element is invalid, 0 if it's no weapon pickup.
 * @see https://wiki.mtasa.com/wiki/GetPickupAmmo
**/
declare function getPickupAmmo(thePickup: Pickup): number;

/**
 * This function retrieves the amount of health or armor given from a pickup.
 * @param thePickup The pickup you wish to retrieve the amount from.
 * @returns Returns an integer of the amount the pickup is set to, false if it's invalid, 0 if it's no health or amor pickup.
 * @see https://wiki.mtasa.com/wiki/GetPickupAmount
**/
declare function getPickupAmount(thePickup: Pickup): number;

/**
 * This function retrieves the type of a pickup, either a health, armour or weapon pickup.
 * @param thePickup The pickup you wish to retrieve the type of.
 * @returns Returns false if the pickup is invalid, or an integer of the type of the pickup, which include:
 * @see https://wiki.mtasa.com/wiki/GetPickupType
**/
declare function getPickupType(thePickup: Pickup): number;

/**
 * This function retrieves the weapon ID of a weapon pickup.
 * @param thePickup The pickup of which you wish to retrieve the weapon
 * @returns Returns the Weapon ID of the pickup, or false if the pickup is invalid.
 * @see https://wiki.mtasa.com/wiki/GetPickupWeapon
**/
declare function getPickupWeapon(thePickup: Pickup): number;

/**
 * This function returns a player element for the player with the name passed to the function.
 * @param playerName A string containing the name of the player you want to reference
 * @returns Returns a player element for the player with the nickname provided. If there is no player with that name, false is returned.
 * @see https://wiki.mtasa.com/wiki/GetPlayerFromName
**/
declare function getPlayerFromName(playerName: string): Player;

/**
 * Returns the amount of money a player currently has.
 * - Note: The amount may vary between the server and client, you shouldn't trust the client side value to always be accurate.
 * @param thePlayer The player you wish the retrieve the amount of money from.
 * @returns Returns an integer with the amount of money the specified player has, false if the player is invalid. <section show="true" name="Client" class="client">Returns an integer with the amount of money the local player has.
 * @see https://wiki.mtasa.com/wiki/GetPlayerMoney
**/
declare function getPlayerMoney(thePlayer: Player): number;

/**
 * This function returns a string containing the name of the specified player.
 * @param thePlayer the player you want to get the name of
 * @returns Returns a string containing the requested player's name, or false if the player passed to the function is invalid.
 * @see https://wiki.mtasa.com/wiki/GetPlayerName
**/
declare function getPlayerName(thePlayer: Player): string;

/**
 * This function gets the current color of a player's name tag as RGB values.
 * These are in the range 0-255.
 * @param thePlayer The player whose name tag RGB color values you wish to retrieve.
 * @returns Returns red, green and blue values if an existent player was specified, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetPlayerNametagColor
**/
declare function getPlayerNametagColor(thePlayer: Player): [number, number, number];

/**
 * This will allow you to retrieve the name tag a player is currently using.
 * @param thePlayer The person whose name tag you want to retrieve
 * @returns Returns a string with the nametag text, false if the player is invalid.
 * @see https://wiki.mtasa.com/wiki/GetPlayerNametagText
**/
declare function getPlayerNametagText(thePlayer: Player): string;

/**
 * This function returns the ping of a specified player.
 * The ping is the number of milliseconds that data takes to travel from the player's client to the server or vice versa.
 * @param thePlayer The player whose ping you want to determine.
 * @returns Returns the ping as an int, or false if the player is invalid.
 * @see https://wiki.mtasa.com/wiki/GetPlayerPing
**/
declare function getPlayerPing(thePlayer: Player): number;

/**
 * This function gets the current team a player is on.
 * @param thePlayer The player whose team you want to find out.
 * @returns Returns a team element representing the team the player is on, false if the player is not part of a team.
 * @see https://wiki.mtasa.com/wiki/GetPlayerTeam
**/
declare function getPlayerTeam(thePlayer: Player): Team;

/**
 * This function gets a player's current wanted level.
 * The wanted level is indicated by the amount of stars a player has on the GTA HUD.
 * @param getPlayerWantedLevel unknown
 * @returns Returns an int from 0 to 6 representing the player's wanted level, false if the player does not exist.
 * @see https://wiki.mtasa.com/wiki/GetPlayerWantedLevel
**/
declare function getPlayerWantedLevel(getPlayerWantedLevel: number): [];

/**
 * This function retrieves all the players of the specified team.
 * @param theTeam unknown
 * @returns Returns a table of all the players in the team, or an empty one if there are none else false if invalid arguments are passed.
 * @see https://wiki.mtasa.com/wiki/GetPlayersInTeam
**/
declare function getPlayersInTeam(theTeam: Team): object;

/**
 * This function can be used to retrieve the current color of a radar area.
 * @param theRadararea The radar area you wish to retrieve the colour of.
 * @returns Returns four integers in RGBA format (red, green, blue, alpha), with a maximum value of 255 for each. Alpha decides transparency where 255 is opaque and 0 is transparent. Returns false if the radararea is invalid.
 * @see https://wiki.mtasa.com/wiki/GetRadarAreaColor
**/
declare function getRadarAreaColor(theRadararea: RadarArea): [number, number, number, number];

/**
 * This function is used for getting the X and Y size of an existing radar area.
 * @param theRadararea The radar area element whose size you wish to get.
 * @returns Returns two floats indicating the X and Y length of the radar area respectively, false if the radar area is invalid.
 * @see https://wiki.mtasa.com/wiki/GetRadarAreaSize
**/
declare function getRadarAreaSize(theRadararea: RadarArea): [number, number];

/**
 * This function is used to get the current rain level.
 * - Note: The server can only return the rain level if it has actually been set by script, otherwise it will return false.
 * @param getRainLevel unknown
 * @returns Returns the rain level as a number.
 * @see https://wiki.mtasa.com/wiki/GetRainLevel
**/
declare function getRainLevel(getRainLevel: number): [];

/**
 * This function gets the server or client (if used client sided it returns time as set on client's computer) real time and returns it in a table.
 * If you want to get the in-game time (shown on GTA's clock) use getTime.
 * @param [seconds=current] A count in seconds from the year 1970.Useful for storing points in time, or for retrieving time information for getBanTime.The valid range of this argument is 0 to 32,000,000,000
 * @param [localTime=true] Set to true to adjust for the locally set timezone.
 * @returns Returns a table of substrings with different time format or false if the seconds argument is out of range. * second is generally 0-59. Extra range to accommodate for leap seconds in certain systems.
 * @see https://wiki.mtasa.com/wiki/GetRealTime
**/
declare function getRealTime(seconds?: number, localTime?: boolean): object;

/**
 * This function retrieves the dynamic element root of a specified resource.
 * The dynamic element root is the parent of elements that are created by scripts (e.g. with createObject) unless they specify a different parent.
 * @param theResource the resource of which dynamic element root we want.
 * @returns Returns an element of the resource's dynamic element root if the resource specified was valid and active (currently running), false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetResourceDynamicElementRoot
**/
declare function getResourceDynamicElementRoot(theResource: Resource): Element;

/**
 * Returns a table containing the names of the functions that a resource exports.
 * It will return the exports of the current resource if there is no argument passed in.
 * @param [theResource=getThisResource] the resource of which you want to know the exported functions.
 * @returns Returns a table of function names if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetResourceExportedFunctions
**/
declare function getResourceExportedFunctions(theResource?: Resource): object;

/**
 * This function is used to retrieve a resource from its name.
 * A resource's name is the same as its folder or file archive name on the server (without the extension).
 * @param resourceName the name of the resource you wish to get.
 * @returns Returns the resource with the specified name, or false if no resource of that name exists.
 * @see https://wiki.mtasa.com/wiki/GetResourceFromName
**/
declare function getResourceFromName(resourceName: string): Resource;

/**
 * This function gets the name of the specified resource.
 * @param res The resource you wish to get the name of.
 * @returns Returns a string with the resource name in it, or false if the resource does not exist.
 * @see https://wiki.mtasa.com/wiki/GetResourceName
**/
declare function getResourceName(res: Resource): string;

/**
 * This function retrieves a resource's root element.
 * The resource's root element is the element in the element tree which is the parent of all elements that belong to a particular resource (except for elements specifically created elsewhere).
 * You can attach event handlers to this element to easily capture events that originate from your resource (and global events that originate from the root element).
 * - Note: every resource has a predefined global variable called resourceRoot whose value is the root element of that resource.
 * @param [theResource=getThisResource()] the resource whose root element we are getting.If not specified, assumes the current resource.(the resource returned from getThisResource)
 * @returns Returns an element representing the resource's root, false if the specified resource doesn't exist.
 * @see https://wiki.mtasa.com/wiki/GetResourceRootElement
**/
declare function getResourceRootElement(theResource?: Resource): Element;

/**
 * This function returns the state of a given resource
 * @param theResource The resource you wish to get the state of.
 * @returns If successful returns a string with the resource state in it, false otherwise. The state can be one of:
 * @see https://wiki.mtasa.com/wiki/GetResourceState
**/
declare function getResourceState(theResource: Resource): string;

/**
 * This function returns the root node of the element tree, called root.
 * This node contains every other element: all resource root elements, players and remote clients.
 * It is never destroyed and cannot be destroyed using destroyElement.
 * It is often used to attach handler functions to events triggered for any element, or also to make a scripting function affect all elements.
 * - Note: All resources have a predefined global variable called root that has the root element as value. The variable exists server side as well as client side.
 * @param getRootElement unknown
 * @returns Returns the root element.
 * @see https://wiki.mtasa.com/wiki/GetRootElement
**/
declare function getRootElement(getRootElement: Element): [];

/**
 * This function allows you to identify the weapon slot that a weapon belongs to.
 * @param weaponid Weapon to find the weapon slot of.
 * @returns Returns an integer representing the given weapon ID's associated weapon slot, false if the ID was invalid.
 * @see https://wiki.mtasa.com/wiki/GetSlotFromWeapon
**/
declare function getSlotFromWeapon(weaponid: number): number;

/**
 * This function is used to get the color of the sun.
 * @param , unknown
 * @param , unknown
 * @param , unknown
 * @param , unknown
 * @param , unknown
 * @param getSunColor unknown
 * @returns Returns the color of the sun as six numbers, false if its default.
 * @see https://wiki.mtasa.com/wiki/GetSunColor
**/
declare function getSunColor(,: number, ,: number, ,: number, ,: number, ,: number, getSunColor: number): [number, number, number, number, number];

/**
 * This function is used to get the size of the sun.
 * @param getSunSize unknown
 * @returns Returns the size of the sun as a number, false if the size of the sun is at its default.
 * @see https://wiki.mtasa.com/wiki/GetSunSize
**/
declare function getSunSize(getSunSize: number): [];

/**
 * This function retrieves the color of a team.
 * @param theTeam The team you want to get the color of.
 * @returns Returns 3 integers representing the red, green, and blue color components of the team if it's valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetTeamColor
**/
declare function getTeamColor(theTeam: Team): [number, number, number];

/**
 * This function tells you if friendly fire is turned on for the specified team.
 * @param theTeam The team object that will be checked
 * @returns Returns true if friendly fire is on for the specified team, false if it is turned off or if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/GetTeamFriendlyFire
**/
declare function getTeamFriendlyFire(theTeam: Team): boolean;

/**
 * This function finds a team element using the provided team name.
 * @param teamName A string determining the name of the team you wish to find.
 * @returns Returns the team element if it was found, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetTeamFromName
**/
declare function getTeamFromName(teamName: string): Team;

/**
 * This function gets the team name of a team object.
 * @param theTeam The team you want to retrieve the name of.
 * @returns Returns a string representing the team's name if the team object was valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetTeamName
**/
declare function getTeamName(theTeam: Team): string;

/**
 * This function retrieves the resource from which the function call was made.
 * - Note: Every resource has a predefined global variable called resource that contains the resource pointer for that resource, in other words, the value that this function returns.
 * @param getThisResource unknown
 * @returns Returns the resource in which the current script is.
 * @see https://wiki.mtasa.com/wiki/GetThisResource
**/
declare function getThisResource(getThisResource: Resource): [];

/**
 * This function returns amount of time that your system has been running in milliseconds.
 * By comparing two values of getTickCount, you can determine how much time has passed (in milliseconds) between two events.
 * This could be used to determine how efficient your code is, or to time how long a player takes to complete a task.

 * @returns Returns an integer containing the number of milliseconds since the system the server is running on started. This has the potential to wrap-around.
 * @see https://wiki.mtasa.com/wiki/GetTickCount
**/
declare function getTickCount(): number;

/**
 * This function is used to get the current time in the game.
 * If you want to get the real server time, use getRealTime.

 * @returns Returns two ints that represent hours and minutes.
 * @see https://wiki.mtasa.com/wiki/GetTime
**/
declare function getTime(): [number, number];

/**
 * This function is for getting the details of a running timer.
 * @param theTimer A timer element.
 * @returns * Returns false if the timer doesn't exist or stopped running. Also, debugscript will say "Bad Argument @ 'getTimerDetails'". To prevent this, you can check if the timer exists with isTimer.
 * @see https://wiki.mtasa.com/wiki/GetTimerDetails
**/
declare function getTimerDetails(theTimer: unknown): [number, number, number];

/**
 * This function returns a table of all active timers that the resource that calls it has created.
 * Alternatively, only the timers with a remaining time less than or equal to a certain value can be retrieved.
 * @param [theTime=nil] The maximum time left (in milliseconds) on the timers you wish to retrieve.
 * @returns Returns a table of all the active timers.
 * @see https://wiki.mtasa.com/wiki/GetTimers
**/
declare function getTimers(theTime?: number): object;

/**
 * Gets the current traffic light state.
 * This state controls the traffic light colors.
 * For instance, state 1 will cause the north and south traffic lights to be amber, and the ones left and east will turn red.
 * @param getTrafficLightState unknown
 * @returns Returns the current state of the traffic lights.
 * @see https://wiki.mtasa.com/wiki/GetTrafficLightState
**/
declare function getTrafficLightState(getTrafficLightState: number): [];

/**
 * Gets the direction in which a train is driving (clockwise or counterclockwise).
 * @param train the train of which to get the driving direction.
 * @returns Returns true if the train is driving clockwise on the train track, false if it is going counterclockwise or a failure occured.
 * @see https://wiki.mtasa.com/wiki/GetTrainDirection
**/
declare function getTrainDirection(train: Vehicle): boolean;

/**
 * Gets the position the train is currently on the track
 * @param train the train to get the position of
 * @returns Returns a float that represents how along the track it is, false if there is problem with train element.
 * @see https://wiki.mtasa.com/wiki/GetTrainPosition
**/
declare function getTrainPosition(train: Vehicle): number;

/**
 * Gets the speed at which a train is traveling on the rails.
 * @param train the train of which to retrieve the speed.
 * @returns Returns the train's speed if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetTrainSpeed
**/
declare function getTrainSpeed(train: Vehicle): number;

/**
 * Gets the track of a train
 * Disabled
 * @param train the train of which to get the track.
 * @returns Returns an integer (whole number) that represents the train track, false if there is problem with train element.
 * @see https://wiki.mtasa.com/wiki/GetTrainTrack
**/
declare function getTrainTrack(train: Vehicle): number;

/**
 * This function is used to get the clothes type and index from the texture and model.
 * (Scans through the list of clothes for the specific type).
 * @param clothesTexture A string determining the clothes texture that you wish to retrieve the type and index from. See the clothes catalog.
 * @param clothesModel A string determining the corresponding clothes model that you wish to retrieve the type and index from. See the clothes catalog.
 * @returns This function returns two integers, type and index respectively, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/GetTypeIndexFromClothes
**/
declare function getTypeIndexFromClothes(clothesTexture: string, clothesModel: string): [number, number];

/**
 * This function gets the type of a userdata value, which is not always a element in the element tree.
 * @param value A userdata value to get the type of. Userdata types can be
 * @returns Returns a string containing the specified userdata's type, or false plus an error message if the given value is not userdata.
 * @see https://wiki.mtasa.com/wiki/GetUserdataType
**/
declare function getUserdataType(value: unknown): string;

/**
 * This function returns all valid ped models.
 * @param getValidPedModels unknown
 * @returns Returns a table with all valid ped models.
 * @see https://wiki.mtasa.com/wiki/GetValidPedModels
**/
declare function getValidPedModels(getValidPedModels: object): [];

/**
 * This function returns the color of the specified vehicle.
 * A vehicle can have up to four colors.
 * @param theVehicle The vehicle that you wish to get the color of.
 * @param bRGB A boolean specifying whether to return RGB values. A setting of false will result in the function returning color ids instead.
 * @returns Valid color ids if bRGB is set to false:
 * @see https://wiki.mtasa.com/wiki/GetVehicleColor
**/
declare function getVehicleColor(theVehicle: Vehicle, bRGB: boolean): [number, number, number, number, number, number, number, number, number, number, number, number];

/**
 * This function returns a table of all the compatible upgrades (or all for a specified slot, optionally) for a specified vehicle.
 * @param theVehicle the vehicle you wish to retrieve the list of compatible upgrades of.
 * @param slot the upgrade slot number for which you're getting the list (from 0 to 16).Compatible upgrades for all slots are listed if this is not specified.
 * @returns Returns a table with all the compatible upgrades, or false if invalid arguments are passed.
 * @see https://wiki.mtasa.com/wiki/GetVehicleCompatibleUpgrades
**/
declare function getVehicleCompatibleUpgrades(theVehicle: Vehicle, slot: number): object;

/**
 * This function gets the component rotation of a vehicle.
 * - Note: Before r6974 the component rotations went the wrong way (i.e. opposite to the vehicle rotations). This has been corrected, so you'll have to modify any scripts written before r6974 that use this function.
 * @param theVehicle The vehicle you wish to get component rotation of.
 * @param theComponent A vehicle component (this is the frame name from the model file of the component you wish to modify)
 * @param [base=parent] A string representing what the returned rotation is relative to. It can be one of the following values
 * @returns Returns three floats indicating the rotation of the component, x, y and z respectively.
 * @see https://wiki.mtasa.com/wiki/GetVehicleComponentRotation
**/
declare function getVehicleComponentRotation(theVehicle: Vehicle, theComponent: string, base?: string): [number, number, number];

/**
 * This function tells you how open a door is (the 'open ratio').
 * Doors include boots/trunks and bonnets on vehicles that have them.
 * @param theVehicle The vehicle that you wish to get the door open ratio of.
 * @param door A whole number, 0 (hood), 1 (trunk), 2 (front left), 3 (front right), 4 (rear left), 5 (rear right)
 * @returns Returns a number between 0 and 1 that indicates how open the door is. 0 is closed, and 1 is fully open. Returns false if invalid arguments are passed.
 * @see https://wiki.mtasa.com/wiki/GetVehicleDoorOpenRatio
**/
declare function getVehicleDoorOpenRatio(theVehicle: Vehicle, door: number): number;

/**
 * This function returns the current state of the specifed door on the vehicle.
 * @param theVehicle the vehicle you want to get the door status of.
 * @param door a whole number representing which door to get the status of. Valid values are
 * @returns If successful, one of the following integers will be returned:
 * @see https://wiki.mtasa.com/wiki/GetVehicleDoorState
**/
declare function getVehicleDoorState(theVehicle: Vehicle, door: number): number;

/**
 * This function returns a vehicle's engine state (on or off).
 * @param theVehicle the vehicle you wish to get the engine state of.
 * @returns Returns true if the vehicle's engine is started, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetVehicleEngineState
**/
declare function getVehicleEngineState(theVehicle: Vehicle): boolean;

/**
 * This function returns a table of the current vehicle handling data.
 * @param theVehicle the vehicle you wish to get the handling data of.
 * @returns Returns a table containing all the handling data, false otherwise. Here's a list of valid table properties and what they return:
 * @see https://wiki.mtasa.com/wiki/GetVehicleHandling
**/
declare function getVehicleHandling(theVehicle: Element): object;

/**
 * This function will get the headlight color of a vehicle.
 * @param theVehicle The vehicle that you wish to set the headlight color of.
 * @returns Returns three integers for the red, green and blue of the headlight color for the specified vehicle, false if an invalid vehicle was specified.
 * @see https://wiki.mtasa.com/wiki/GetVehicleHeadLightColor
**/
declare function getVehicleHeadLightColor(theVehicle: Vehicle): [number, number, number];

/**
 * This function is used to check whether a vehicle's landing gear is down or not.
 * Only planes can be used with this function.
 * @param theVehicle the vehicle of which you wish to check the landing gear state.
 * @returns Returns true if landing gear is down, false if the landing gear is up. Returns nil if the vehicle has no landing gear, or is invalid.
 * @see https://wiki.mtasa.com/wiki/GetVehicleLandingGearDown
**/
declare function getVehicleLandingGearDown(theVehicle: Vehicle): boolean;

/**
 * This function returns the current state of the specified light on the vehicle.
 * @param theVehicle the vehicle that you wish to know the light state of.
 * @param light A whole number determining the individual light
 * @returns Returns 0 (working) or 1 (broken)
 * @see https://wiki.mtasa.com/wiki/GetVehicleLightState
**/
declare function getVehicleLightState(theVehicle: Vehicle, light: number): number;

/**
 * This function returns the maximum number of passengers that a specified vehicle can hold.
 * Only passenger seats are counted, the driver seat is excluded.
 * Important note: Only passenger seats are counted, the driver seat is excluded.
 * @param theVehicle the vehicle that you wish to know the maximum capacity of.OR
 * @param modelID the model id that you wish to know the maximum capacity of.
 * @returns Returns an int indicating the maximum number of passengers that can enter a vehicle.
 * @see https://wiki.mtasa.com/wiki/GetVehicleMaxPassengers
**/
declare function getVehicleMaxPassengers(theVehicle: Vehicle, modelID: number): number;

/**
 * This function returns a string containing the name of the vehicle
 * @param theVehicle the vehicle you want to get the name of.
 * @returns Returns a string containing the requested vehicle's name, or false if the vehicle passed to the function is invalid.
 * @see https://wiki.mtasa.com/wiki/GetVehicleName
**/
declare function getVehicleName(theVehicle: Vehicle): string;

/**
 * Gets the name of a vehicle by its model ID.
 * @param model This is the vehicle model ID. See vehicle IDs to see what values will return names.
 * @returns Returns the name of the vehicle if the model ID was valid, empty string otherwise.
 * @see https://wiki.mtasa.com/wiki/GetVehicleNameFromModel
**/
declare function getVehicleNameFromModel(model: number): string;

/**
 * This function gets the player sitting/trying to enter the specified vehicle.
 * @param theVehicle the vehicle of which you wish to retrieve the driver or a passenger.
 * @param [seat=0] the seat where the player is sitting (0 for driver, 1+ for passengers).
 * @returns Returns the player sitting in the vehicle, or false if the seat is unoccupied or doesn't exist.
 * @see https://wiki.mtasa.com/wiki/GetVehicleOccupant
**/
declare function getVehicleOccupant(theVehicle: Vehicle, seat?: number): Player;

/**
 * This function gets all players sitting in the specified vehicle.
 * @param theVehicle the vehicle of which you wish to retrieve the occupants.
 * @returns Returns a table with seat ID as an index and the occupant as an element like this: table[seat] = occupant Returns false if an invalid vehicle was passed or if the vehicle has no seats (like a trailer) <div style='font-weight: bold;background:blue;color:white;padding:2px; padding-left:8px;'>COUNTING PLAYERS IN A VEHICLE Don't use an ipairs loop with the table returned by this function. It will skip the driver, as ipairs starts at 1 and the driver seat is ID 0. And if there's an empty seat, ipairs will stop looping. You should use a pairs loop instead.
 * @see https://wiki.mtasa.com/wiki/GetVehicleOccupants
**/
declare function getVehicleOccupants(theVehicle: Vehicle): object;

/**
 * This function is used to find out the current state of the override-lights setting of a vehicle.
 * @param theVehicle the vehicle you wish to retrieve the override lights setting of.
 * @returns Returns an integer value: 0 (No override), 1 (Force off) or 2 (Force on).
 * @see https://wiki.mtasa.com/wiki/GetVehicleOverrideLights
**/
declare function getVehicleOverrideLights(theVehicle: Vehicle): number;

/**
 * This function gets the current paintjob on the specified vehicle.
 * @param theVehicle the vehicle you wish to get the paintjob of.
 * @returns Returns an integer representing the current paintjob on the vehicle.
 * @see https://wiki.mtasa.com/wiki/GetVehiclePaintjob
**/
declare function getVehiclePaintjob(theVehicle: Vehicle): number;

/**
 * This function returns the current state of a specifed panel on the vehicle.
 * A vehicle can have up to 7 panels.
 * @param theVehicle the vehicle that you wish to know the panel state of.
 * @param panel an integer specifying the panel you want to know the state of. Not every vehicle has every panel. Possible values are
 * @returns Returns an int indicating the state of the specified the panel. This is a value between 0 and 3, with 0 indicating the panel is undamaged and 3 indicating it is very damaged.
 * @see https://wiki.mtasa.com/wiki/GetVehiclePanelState
**/
declare function getVehiclePanelState(theVehicle: Vehicle, panel: number): number;

/**
 * This function is used to retrieve the text on the number plate of a specified vehicle.
 * @param theVehicle the vehicle that you wish to retrieve the plate text from.
 * @returns Returns a string that corresponds to the plate on the text, false if a bad argument was passed or if it is not a vehicle. Every vehicle (including planes, boats, etc.) has a numberplate, even if it's not visible.
 * @see https://wiki.mtasa.com/wiki/GetVehiclePlateText
**/
declare function getVehiclePlateText(theVehicle: Vehicle): string;

/**
 * This function gets the properties of a vehicle's sirens.
 * @param theVehicle The vehicle to get siren information of.
 * @returns If the vehicle is invalid, it returns false. Otherwise, returns a table with sub tables containing the properties of each siren point in the following manner:
 * @see https://wiki.mtasa.com/wiki/GetVehicleSirens
**/
declare function getVehicleSirens(theVehicle: Vehicle): object;

/**
 * This function returns whether the sirens are turned on for the specified vehicle.
 * @param theVehicle The vehicle that will be checked.
 * @returns Returns true if the sirens are turned on for the specified vehicle, false if the sirens are turned off for the specified vehicle, if the vehicle doesn't have sirens or if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/GetVehicleSirensOn
**/
declare function getVehicleSirensOn(theVehicle: Vehicle): boolean;

/**
 * This function is used to get the vehicle being towed by another.
 * @param theVehicle The vehicle you wish to get the towed vehicle from.
 * @returns Returns the vehicle that theVehicle is towing, false if it isn't towing a vehicle.
 * @see https://wiki.mtasa.com/wiki/GetVehicleTowedByVehicle
**/
declare function getVehicleTowedByVehicle(theVehicle: Vehicle): Vehicle;

/**
 * This function is used to get the vehicle that is towing another.
 * @param theVehicle the vehicle being towed.
 * @returns 
 * @see https://wiki.mtasa.com/wiki/GetVehicleTowingVehicle
**/
declare function getVehicleTowingVehicle(theVehicle: Vehicle): Vehicle;

/**
 * This function gets the position of a vehicle's turret, if it has one.
 * Vehicles with turrets include firetrucks and tanks.
 * @param turretVehicle The vehicle whose turret position you want to retrieve.This should be a vehicle with a turret.
 * @returns Returns two floats for the X (horizontal) and Y (vertical) axis rotation respectively. These values are in radians. The function will return 0, 0 if the vehicle is not a vehicle with a turret.
 * @see https://wiki.mtasa.com/wiki/GetVehicleTurretPosition
**/
declare function getVehicleTurretPosition(turretVehicle: Vehicle): [number, number];

/**
 * New feature: 3,1.0,This function retrieves the type of a vehicle (such as if it is a car or a boat).
 * @param modelId unknown
 * @returns Returns a string with vehicle type or false if an invalid modelID has been supplied, or an empty string if the vehicle is blocked internally (some trailers). Possible strings returned:
 * @see https://wiki.mtasa.com/wiki/GetVehicleType
**/
declare function getVehicleType(modelId: number): string;

/**
 * This function returns the current upgrade id on the specified vehicle's 'upgrade slot'
 * An upgrade slot is a certain type of upgrade (eg: exhaust, spoiler), there are 17 slots (0 to 16).
 * @param theVehicle The vehicle whose upgrade you want to retrieve.
 * @param slot The slot id of the upgrade. (Upgrade list ordered by slot number)
 * @returns Returns an integer with the upgrade on the slot if correct arguments were passed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetVehicleUpgradeOnSlot
**/
declare function getVehicleUpgradeOnSlot(theVehicle: Vehicle, slot: number): number;

/**
 * This function returns the name of an upgrade slot name (e.g. roof, spoiler).
 * @param slot/upgrade the slot ID or corresponding upgrade ID of which you want the name.
 * @returns Returns a string with the slot name if a valid slot or upgrade ID was given, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetVehicleUpgradeSlotName
**/
declare function getVehicleUpgradeSlotName(slot/upgrade: number): string;

/**
 * This function returns a table of all the upgrades on a specifed vehicle.
 * @param theVehicle The vehicle you wish to retrieve the upgrades of.
 * @returns Returns a table of all the upgrades on each slot of a vehicle, which may be empty, or false if a valid vehicle is not passed.
 * @see https://wiki.mtasa.com/wiki/GetVehicleUpgrades
**/
declare function getVehicleUpgrades(theVehicle: Vehicle): object;

/**
 * This function gets the variant of a specified vehicle.
 * In GTA SA some vehicles are different for example the labelling on trucks or the contents of a pick-up truck and the varying types of a motor bike.
 * For the default GTA SA variant list see: Vehicle variants
 * @param theVehicle A handle to the vehicle that you want to get the variant of.
 * @returns On success: On failure: * bool: False because the specified vehicle didn't exist
 * @see https://wiki.mtasa.com/wiki/GetVehicleVariant
**/
declare function getVehicleVariant(theVehicle: Vehicle): [number, number];

/**
 * This function returns the current states of all the wheels on the vehicle.
 * No vehicles have more than 4 wheels, if they appear to they will be duplicating other wheels.
 * @param theVehicle A handle to the vehicle that you wish to know the wheel states of.
 * @returns Returns 4 ints indicating the states of the wheels (front left, rear left, front right, rear right). These values can be:
 * @see https://wiki.mtasa.com/wiki/GetVehicleWheelStates
**/
declare function getVehicleWheelStates(theVehicle: Vehicle): [number, number, number, number];

/**
 * This function gives you various version information about MTA and the operating system.
 * - Note: Clientside will return the version from the player, and the server-sided will return version from the server.
 * @param getVersion unknown
 * @returns Returns a table with version information. Specifically these keys are present in the table:
 * @see https://wiki.mtasa.com/wiki/GetVersion
**/
declare function getVersion(getVersion: object): [];

/**
 * This function returns the water color of the GTA world.
 * - Note: The server can only return the water color, if it has actually been set by script.
 * @param , unknown
 * @param , unknown
 * @param , unknown
 * @param getWaterColor unknown
 * @returns Returns 4 ints, indicating the color of the water. (RGBA)
 * @see https://wiki.mtasa.com/wiki/GetWaterColor
**/
declare function getWaterColor(,: number, ,: number, ,: number, getWaterColor: number): [number, number, number];

/**
 * Gets the world position of a vertex (i.e. corner) of a water area.
 * Each water area is either a triangle or quad (rectangle) so each has 3 or 4 corners.
 * Needs example
 * @param theWater the water element to get the vertex of
 * @param vertexIndex the index of the vertex whose position to get. Values range from 1 to 4 for a water quad, or 1 to 3 for a triangle.
 * @returns Returns the x, y and z coordinates of the specified vertex if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetWaterVertexPosition
**/
declare function getWaterVertexPosition(theWater: Water, vertexIndex: number): [number, number, number];

/**
 * This function returns the current wave height.

 * @returns Returns the height as a float, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetWaveHeight
**/
declare function getWaveHeight(): number;

/**
 * This function will obtain the ID of a particular weapon from its name.
 * @param name A string containing the name of the weapon.Names can be: (Case is ignored)
 * @returns Returns an int if the name matches that of a weapon, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetWeaponIDFromName
**/
declare function getWeaponIDFromName(name: string): number;

/**
 * This function allows you to retrieve the name of a weapon from an ID.
 * - Note: You can also retrieve the name of other methods of death, such as Fall and Rammed.
 * @param id The ID you wish to retrieve the name of
 * @returns Returns a string of the name of the weapon, false otherwise. Names will be like these: (Ignoring case)
 * @see https://wiki.mtasa.com/wiki/GetWeaponNameFromID
**/
declare function getWeaponNameFromID(id: number): string;

/**
 * This function returns the current Weather ID.

 * @returns Returns two integers indicating the weather type that is currently active. The first integer says what weather is currently considered to be active. The second integer is the weather id that is being blended into if any, otherwise it is nil.
 * @see https://wiki.mtasa.com/wiki/GetWeather
**/
declare function getWeather(): [number, number];

/**
 * This function gets the wind velocity in San Andreas.
 * @param , unknown
 * @param , unknown
 * @param getWindVelocity unknown
 * @returns 
 * @see https://wiki.mtasa.com/wiki/GetWindVelocity
**/
declare function getWindVelocity(,: number, ,: number, getWindVelocity: number): [number, number];

/**
 * This function allows you to retrieve the zone name of a certain location.
 * ''Note that between versions 1.1 and 1.3.0-3749 the default value for citiesonly was incorrect when called the client side.
 * The work around for clients before 1.3.0-3749 is to always declare a value for citiesonly. Server side getZoneName was unaffected.''
 * @param x The X axis position
 * @param y The Y axis position
 * @param z The Z axis position
 * @param [citiesonly=false] An optional argument to choose if you want to return the city name (eg Las Venturas)
 * @returns Returns the string of the zone name
 * @see https://wiki.mtasa.com/wiki/GetZoneName
**/
declare function getZoneName(x: number, y: number, z: number, citiesonly?: boolean): string;

/**
 * This function splits a string using the given separating character and returns one specified substring.
 * @param text the string that should be split.
 * @param tokenNumber which token should be returned (1 for the first, 2 for the second, and so on).
 * @param int unknown
 * @param ) unknown
 * @returns Returns a string containing the token if it exists, false otherwise.
 * @see https://wiki.mtasa.com/wiki/Gettok
**/
declare function gettok(text: string, tokenNumber: number, int: string, ): unknown): string;

/**
 * This function adds money to a player's current money amount.
 * To set absolute values, setPlayerMoney can be used.
 * - Note: Using this function client side (not recommended) will not change a players money server side.
 * @param amount a positive integer number specifying the amount of money to give to the player.
 * @returns Returns true if the money was added, or false if invalid parameters were passed.
 * @see https://wiki.mtasa.com/wiki/GivePlayerMoney
**/
declare function givePlayerMoney(amount: number): boolean;

/**
 * This function returns a hash of the specified string in the specified algorithm.
 * @param algorithm A string which must be one of these
 * @param dataToHash A string of the data to hash.
 * @returns Returns the hash of the data, false if an invalid argument was used.
 * @see https://wiki.mtasa.com/wiki/Hash
**/
declare function hash(algorithm: string, dataToHash: string): string;

/**
 * New items: 3.0153,1.5.3,This function returns human-readable representations of tables and MTA datatypes as a string.
 * @param var A variable of any datatype.
 * @param options A table of options. It is not mandatory, but when it is provided, it must be a table. For a list of options, see the Inspect's GitHub page.
 * @returns Always returns a string.
 * @see https://wiki.mtasa.com/wiki/Inspect
**/
declare function inspect(var: any, options: object): string;

// TODO: InterpolateBetween
/**
 * @see https://wiki.mtasa.com/wiki/InterpolateBetween
**/

/**
 * New items: 3.0153,1.5.3,This function intelligently outputs debug messages into the Debug Console. It is similar to outputDebugString, but outputs useful information for any variable type, and does not require use of Lua's tostring. This includes information about element types, and table structures. It is especially useful for quick debug tasks.
 * @param var1 A variable of any type to print intelligent information for.
 * @param var2 unknown
 * @param var3 unknown
 * @param ] unknown
 * @returns Always returns nil.
 * @see https://wiki.mtasa.com/wiki/Iprint
**/
declare function iprint(var1: any, var2: any, var3: any, ]: unknown): boolean;

/**
 * This function checks if a value is an element or not.
 * - Note: This function is not reliable as element ids are eventually recycled. Always make sure you nil variables containing an element after calling destroyElement or handle onElementDestroy for players and elements that might be destroyed by another resource
 * @param theValue The value that we want to check.
 * @returns Returns true if the passed value is an element, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsElement
**/
declare function isElement(theValue: unknown): boolean;

/**
 * This functions checks whether or not an element is attached to another element.
 * @param theElement The element to check for attachment.
 * @returns Returns true if the specified element is attached to another element, false if it is not attached or nil if an improper argument was passed.
 * @see https://wiki.mtasa.com/wiki/IsElementAttached
**/
declare function isElementAttached(theElement: Element): boolean;

/**
 * This function checks whether an element is double-sided as set by setElementDoubleSided or not.
 * @param theElement The element in which you'd like to check the double-sidedness of.
 * @returns Returns true if the theElement is double-sided, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsElementDoubleSided
**/
declare function isElementDoubleSided(theElement: Element): boolean;

/**
 * This function checks if element has been frozen.
 * @param theElement the element whose freeze status we want to check.
 * @returns *Returns true if the element is frozen, false if it isn't or if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/IsElementFrozen
**/
declare function isElementFrozen(theElement: Element): boolean;

/**
 * This function checks whether an element is submerged in water.
 * @param theElement The element to check.
 * @returns Returns true if the passed element is in water, false if it isn't, or if the element is invalid.
 * @see https://wiki.mtasa.com/wiki/IsElementInWater
**/
declare function isElementInWater(theElement: Element): boolean;

/**
 * This function reveals if an element is low LOD.
 * @param theElement The element whose low LOD status we want to get.
 * @returns Returns true if the element is low LOD, false otherwise. <section name="Clientside" class="client" show="true"> This example will show how many low lods objects is around you. <section name="Serverside" class="server" show="false"> This example will show how many low lods objects is around all the world.
 * @see https://wiki.mtasa.com/wiki/IsElementLowLOD
**/
declare function isElementLowLOD(theElement: Element): boolean;

/**
 * This function is used to determine if an element is within a collision shape.
 * Please note that for legacy reasons, a colshape created on the client does not collide with elements already existing at that location until they first move.
 * Please also note that before 1.0.3, this did not function correctly when moving a colshape.
 * Please note that this function doesn't verify whether element is in the same dimension and interior, additional checks could be implemented manually if they are needed.
 * @param theElement The element you're checking.
 * @param theShape The colshape you're checking
 * @returns Returns true if the element is within the colshape, false otherwise
 * @see https://wiki.mtasa.com/wiki/IsElementWithinColShape
**/
declare function isElementWithinColShape(theElement: Element, theShape: ColShape): boolean;

/**
 * This function checks whether or not a specific garage door is open.
 * @param garageID The garage ID that represents the garage door that is being checked.
 * @returns Returns true if the garage is open, false if it is closed or an invalid garage ID was given.
 * @see https://wiki.mtasa.com/wiki/IsGarageOpen
**/
declare function isGarageOpen(garageID: number): boolean;

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
 * This function checks if a 2D position is inside a radar area or not.
 * Messagebox
 * @param theArea The radar area you're checking the position against.
 * @param posX The X coordinate of the position you're checking.
 * @param posY The Y coordinate of the position you're checking.
 * @returns Returns true if the position is inside the radar area, false if it isn't or if any parameters are invalid.
 * @see https://wiki.mtasa.com/wiki/IsInsideRadarArea
**/
declare function isInsideRadarArea(theArea: RadarArea, posX: number, posY: number): boolean;

/**
 * This function checks whether OOP (Object Oriented Programming) is enabled in the current resource or not.
 * @param isOOPEnabled unknown
 * @returns Returns true or false if OOP is enabled or not. Returns nil if an error arised.
 * @see https://wiki.mtasa.com/wiki/IsOOPEnabled
**/
declare function isOOPEnabled(isOOPEnabled: boolean): [];

/**
 * This function checks if the specified ped is choking (coughing) or not.
 * This happens as a result of weapons that produce smoke - smoke grenades, fire extinguisher and the spray can.
 * @param thePed The ped you wish to check
 * @returns Returns true if the ped is choking, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPedChoking
**/
declare function isPedChoking(thePed: Ped): boolean;

/**
 * This function checks if the specified ped is ducked (crouched) or not.
 * @param thePed The ped to check.
 * @returns Returns true if the ped is ducked, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPedDucked
**/
declare function isPedDucked(thePed: Ped): boolean;

/**
 * With this function, you can check if a ped has a head or not.
 * @param thePed The ped to check.
 * @returns Returns true if the ped is headless, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPedHeadless
**/
declare function isPedHeadless(thePed: Ped): boolean;

/**
 * Checks whether or not a given ped is currently in a vehicle.
 * This also returns true if they're trying to enter a vehicle.
 * - Note: Client side IsPedInVehicle can be unreliable. Solution is to use: not getPedOccupiedVehicle(ped)
 * @param thePed the ped you want to check.
 * @returns Returns true if the ped is in a vehicle, false if he is on foot or an invalid element was passed.
 * @see https://wiki.mtasa.com/wiki/IsPedInVehicle
**/
declare function isPedInVehicle(thePed: Ped): boolean;

/**
 * This function checks if the specified ped is on fire or not.
 * @param thePed The ped to check.
 * @returns Returns true if the ped is on fire, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPedOnFire
**/
declare function isPedOnFire(thePed: Ped): boolean;

/**
 * This function is used to determine whether or not a ped is on the ground.
 * This is for on-foot usage only.
 * @param thePed The ped you are checking.
 * @returns Returns true if the ped is on foot and on the ground, false otherwise, even if he is in a car that stands still or on object outside world map.
 * @see https://wiki.mtasa.com/wiki/IsPedOnGround
**/
declare function isPedOnGround(thePed: Ped): boolean;

/**
 * Checks whether or not a ped is currently wearing a jetpack.
 * @param thePed the ped you want to check
 * @returns Returns true if the ped is carrying a jetpack, false if he is not or an invalid element was passed.
 * @see https://wiki.mtasa.com/wiki/IsPedWearingJetpack
**/
declare function isPedWearingJetpack(thePed: Ped): boolean;

/**
 * This function checks if the specified player's radar map has been forced on or not.

 * @returns Returns true if the player's radar map is forced on, false otherwise.Returns true if the local player's radar map is forced on, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPlayerMapForced
**/
declare function isPlayerMapForced(): boolean;

/**
 * This function will allow you to determine if a player's name tag is currently showing.
 * Deprecated feature: 3,1.0,Serverside only in DP2.x
 * @param thePlayer The player whose current name tag condition you want to check
 * @returns Returns true if the player's name tag is being shown, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPlayerNametagShowing
**/
declare function isPlayerNametagShowing(thePlayer: Player): boolean;

/**
 * This function allows detection of whether a radar area is flashing or not.
 * @param theRadararea The radar area you wish to check the state of flashing
 * @returns Returns true if the radar area is flashing, false if it is not or if it doesn't exist.
 * @see https://wiki.mtasa.com/wiki/IsRadarAreaFlashing
**/
declare function isRadarAreaFlashing(theRadararea: RadarArea): boolean;

/**
 * This function checks if a variable is a timer.
 * - Note: This function is not reliable as timer ids are eventually recycled. Always make sure you nil variables containing a timer after it has expired.
 * @param theTimer The variable that we want to check.
 * @returns Returns true if the passed value is a timer, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsTimer
**/
declare function isTimer(theTimer: unknown): boolean;

/**
 * This function will check if a train or tram is derailable.
 * @param vehicleToCheck The vehicle you wish to check.
 * @returns Returns true if the train is derailable, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsTrainDerailable
**/
declare function isTrainDerailable(vehicleToCheck: Vehicle): boolean;

/**
 * This function will check if a train or tram is derailed.
 * @param vehicleToCheck the vehicle that you wish to check is derailed.
 * @returns Returns true if the train is derailed, false if the train is still on the rails
 * @see https://wiki.mtasa.com/wiki/IsTrainDerailed
**/
declare function isTrainDerailed(vehicleToCheck: Vehicle): boolean;

/**
 * This function allows you to determine whether a vehicle is blown or still intact.
 * @param theVehicle The vehicle that you want to obtain the blown status of.
 * @returns Returns true if the vehicle specified has blown up, false if it is still intact or the vehicle specified is invalid.
 * @see https://wiki.mtasa.com/wiki/IsVehicleBlown
**/
declare function isVehicleBlown(theVehicle: Vehicle): boolean;

/**
 * This function checks if a vehicle is damage proof (set with setVehicleDamageProof).
 * @param theVehicle the vehicle whose invincibility status we want to check.
 * @returns Returns true if the vehicle is damage proof, false if it isn't or if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/IsVehicleDamageProof
**/
declare function isVehicleDamageProof(theVehicle: Vehicle): boolean;

/**
 * This will tell you if a vehicle's petrol tank is explodable.
 * @param theVehicle The vehicle that you want to obtain the fuel tank status of.
 * @returns Returns true if the specified vehicle is valid and its fuel tank is explodable, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsVehicleFuelTankExplodable
**/
declare function isVehicleFuelTankExplodable(theVehicle: Vehicle): boolean;

/**
 * This will tell you if a vehicle is locked.
 * @param theVehicle The vehicle that you want to obtain the locked status of.
 * @returns Returns true if the vehicle specified is locked, false if is unlocked or the vehicle specified is invalid.
 * @see https://wiki.mtasa.com/wiki/IsVehicleLocked
**/
declare function isVehicleLocked(theVehicle: Vehicle): boolean;

/**
 * Checks to see if a vehicle has contact with the ground.
 * @param theVehicle The vehicle you wish to check.
 * @returns Returns true if vehicle is on the ground, false if it is not.
 * @see https://wiki.mtasa.com/wiki/IsVehicleOnGround
**/
declare function isVehicleOnGround(theVehicle: Vehicle): boolean;

/**
 * This function will get the taxi light state of a taxi (vehicle IDs 420 and 438)
 * @param taxi The vehicle element of the taxi that you wish to get the light state of.
 * @returns Returns true if the light is on, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsVehicleTaxiLightOn
**/
declare function isVehicleTaxiLightOn(taxi: Vehicle): boolean;

/**
 * Added to client side.
 * This function allows you to make the server reveal whether or not voice is currently enabled.
 * @param isVoiceEnabled unknown
 * @returns Returns true if the voice is enabled on the server, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsVoiceEnabled
**/
declare function isVoiceEnabled(isVoiceEnabled: boolean): [];

/**
 * This function kills the specified ped.
 * From v1.5.3 onwards this function is now available client side.
 * Only works on client side peds.
 * @param thePed The ped to kill
 * @param [theKiller=nil] The ped responsible for the kill
 * @param [weapon=255] The ID of the weapon or Damage Types that should appear to have killed the ped (doesn't affect how they die)
 * @param [bodyPart=255] The ID of the body part that should appear to have been hit by the weapon (doesn't affect how they die)
 * @param [stealth=false] Boolean value, representing whether or not this a stealth kill
 * @returns Returns true if the ped was killed, false if the ped specified could not be killed or is invalid.
 * @see https://wiki.mtasa.com/wiki/KillPed
**/
declare function killPed(thePed: Ped, theKiller?: Ped, weapon?: number, bodyPart?: number, stealth?: boolean): boolean;

/**
 * This function allows you to kill/halt existing timers.
 * @param theTimer The timer you wish to halt.
 * @returns Returns true if the timer was successfully killed, false if no such timer existed.
 * @see https://wiki.mtasa.com/wiki/KillTimer
**/
declare function killTimer(theTimer: unknown): boolean;

/**
 * Calculates the MD5 hash of the specified string and returns its hexadecimal representation.
 * Warning: It is strongly recommended to use passwordHash to hash passwords, md5 is easily decodeable.
 * - Note: It returns an uppercase string, so make sure you string.upper() anything else you are checking against that has been MD5'd elsewhere.
 * @param str the string to hash.
 * @returns Returns the MD5 hash of the input string if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/Md5
**/
declare function md5(str: string): string;

/**
 * This function will smoothly move an object from its current position to a specified rotation and position.
 * @param theObject the object that will be moved.
 * @param time the time in milliseconds the object will arrive at the destination.
 * @param targetx the X value of the target position
 * @param targety the Y value of the target position
 * @param targetz the Z value of the target position
 * @param moverx the rotation along the X axis relative to its current rotation, which is its starting angle.
 * @param movery the rotation along the Y axis relative to its current rotation, which is its starting angle.
 * @param moverz the rotation along the Z axis relative to its current rotation, which is its starting angle.
 * @param strEasingType the easing function to use for the interpolation (default is "Linear")
 * @param fEasingPeriod the period of the easing function (only some easing functions use this parameter)
 * @param fEasingAmplitude the amplitude of the easing function (only some easing functions use this parameter)
 * @param fEasingOvershoot the overshoot of the easing function (only some easing functions use this parameter)
 * @returns 
 * @see https://wiki.mtasa.com/wiki/MoveObject
**/
declare function moveObject(theObject: Object, time: number, targetx: number, targety: number, targetz: number, moverx: number, movery: number, moverz: number, strEasingType: string, fEasingPeriod: number, fEasingAmplitude: number, fEasingOvershoot: number): boolean;

/**
 * This function creates a new password hash using a specified hashing algorithm.
 * - Note: Using passwordHash is the recommended way of storing passwords.
 * Warning: It is strongly recommended to use the async version of the function (i.e. provide a callback function). Otherwise, you will experience short freezes due to the slow nature of the bcrypt algorithm
 * @param password The password to hash.
 * @param algorithm The algorithm to use
 * @param options table with options for the hashing algorithm, as detailed below.
 * @param callback providing a callback will run this function asynchronously, the arguments to the callback are the same as the returned values below.
 * @returns Returns the hash as a string if hashing was successful, false otherwise. If a callback was provided, the aforementioned values are arguments to the callback, and this function will always return true.
 * @see https://wiki.mtasa.com/wiki/PasswordHash
**/
declare function passwordHash(password: string, algorithm: string, options: object, callback: Function): string;

/**
 * This function verifies whether a password matches a password hash.
 * - Note: Using passwordHash is the recommended way of storing passwords.
 * Warning: It is strongly recommended to use the async version of the function (i.e. provide a callback function). Otherwise, you will experience short freezes due to the slow nature of the bcrypt algorithm
 * @param password The password to check.
 * @param hash A supported hash (see passwordHash). Note that only the prefix $2y$ is supported for type bcrypt (older prefixes can cause security issues).
 * @param options advanced options
 * @param callback providing a callback will run this function asynchronously, the arguments to the callback are the same as the returned values below.
 * @returns Returns true if the password matches the hash. Returns false if the password does not match, or if an unknown hash was passed. If a callback was provided, the aforementioned values are arguments to the callback, and this function will always return true.
 * @see https://wiki.mtasa.com/wiki/PasswordVerify
**/
declare function passwordVerify(password: string, hash: string, options: object, callback: Function): boolean;

/**
 * New items: 3.0135,1.3.5,This function stops at the first occurrence of the pattern in the input string and returns the result of the search.
 * Warning: When declaring a pattern string in quotes, the backslash character should be doubled up. e.g. "(" will match a single bracket.
 * Warning: Multiline flag does not work correctly
 * @param subject The input string
 * @param pattern The pattern string to search for in the input string.
 * @param flags Conjuncted value that contains flags ( 1 - ignorecase, 2 - multiline, 4 - dotall, 8 - extended, 16 - unicode ) or ( i - Ignore case, m - Multiline, d - Dotall, e - Extended, u - Unicode )
 * @returns Returns true if the pattern was found in the input string, false otherwise.
 * @see https://wiki.mtasa.com/wiki/PregFind
**/
declare function pregFind(subject: string, pattern: string, flags: unknown): boolean;

/**
 * New items: 3.0135,1.3.5,This function returns all matches.
 * Warning: When declaring a pattern string in quotes, the backslash character should be doubled up. e.g. "(" will match a single bracket.
 * Warning: Multiline flag does not work correctly
 * @param base The base string for replace.
 * @param pattern The pattern for match in base string.
 * @param [flags=0] Conjuncted value that contains flags ( 1 - ignorecase, 2 - multiline, 4 - dotall, 8 - extended, 16 - unicode ) or ( i - Ignore case, m - Multiline, d - Dotall, e - Extended, u - Unicode )
 * @param [maxResults=100000] Maximum number of results to return
 * @returns Returns a table if one or more match is found, false otherwise.
 * @see https://wiki.mtasa.com/wiki/PregMatch
**/
declare function pregMatch(base: string, pattern: string, flags?: unknown, maxResults?: number): object;

/**
 * New items: 3.0135,1.3.5,This function performs a regular expression search and replace and returns the replaced string.
 * Warning: When declaring a pattern string in quotes, the backslash character should be doubled up. e.g. "(" will match a single bracket. This also applies to the replacement string.
 * Warning: Multiline flag does not work correctly
 * @param subject The input string.
 * @param pattern The pattern string to search for in the input string.
 * @param replacement The replacement string to replace all matches within the input string.
 * @param flags Conjuncted value that contains flags ( 1 - ignorecase, 2 - multiline, 4 - dotall, 8 - extended, 16 - unicode ) or ( i - Ignore case, m - Multiline, d - Dotall, e - Extended, u - Unicode )
 * @returns Returns the replaced string, or bool false otherwise.
 * @see https://wiki.mtasa.com/wiki/PregReplace
**/
declare function pregReplace(subject: string, pattern: string, replacement: string, flags: unknown): string;

/**
 * This function removes hooks added by addDebugHook
 * @param hookType The type of hook to remove. This can be
 * @param callbackFunction The callback function to remove
 * @returns Returns true if the hook was successfully removed, or false otherwise.
 * @see https://wiki.mtasa.com/wiki/RemoveDebugHook
**/
declare function removeDebugHook(hookType: string, callbackFunction: Function): boolean;

/**
 * This functions removes a handler function from an event, so that the function is not called anymore when the event is triggered.
 * See event system for more information on how the event system works.
 * @param eventName The name of the event you want to detach the handler function from.
 * @param attachedTo The element the handler was attached to.
 * @param functionVar The handler function that was attached.
 * @returns Returns true if the event handler was removed successfully. Returns false if the specified event handler could not be found or invalid parameters were passed.
 * @see https://wiki.mtasa.com/wiki/RemoveEventHandler
**/
declare function removeEventHandler(eventName: string, attachedTo: Element, functionVar: Function): boolean;

/**
 * This function removes a ped from a vehicle immediately.
 * This works for drivers and passengers.
 * Note that this removes the ped from the vehicle and puts him in the exact position where the command was initiated.
 * Available client side from 1.3.1 (It will only work with client side vehicles and peds)
 * @param thePed The ped you wish to remove from a vehicle
 * @returns Returns true if the operation was successful, false if the specified ped is not valid or if it isn't in a vehicle.
 * @see https://wiki.mtasa.com/wiki/RemovePedFromVehicle
**/
declare function removePedFromVehicle(thePed: Ped): boolean;

/**
 * 
 * @param theVehicle The element representing the vehicle you wish to remove the upgrade from
 * @param upgrade The ID of the upgrade you wish to remove.
 * @returns Returns true if the upgrade was successfully removed from the vehicle, otherwise false.
 * @see https://wiki.mtasa.com/wiki/RemoveVehicleUpgrade
**/
declare function removeVehicleUpgrade(theVehicle: Vehicle, upgrade: number): boolean;

/**
 * This function is used to remove a world object.
 * @param modelID A whole integer specifying the GTASA object model ID.
 * @param radius A floating point number representing the radius that will be eliminated.
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.
 * @param [interior=0] unknown
 * @returns Returns true if the object was removed, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/RemoveWorldModel
**/
declare function removeWorldModel(modelID: number, radius: number, x: number, y: number, z: number, interior?: number): boolean;

/**
 * This function resets the far clip distance to its default state.
 * - Note: The function will not reset far clip distance client-side, unless it is relying on a value set by the server.
 * - Note: The function will reset the far clip distance to false server-side, as there is no default value to begin with.
 * @param resetFarClipDistance unknown
 * @returns Returns true if operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetFarClipDistance
**/
declare function resetFarClipDistance(resetFarClipDistance: boolean): [];

/**
 * This function resets the fog render distance to its default state.
 * - Note: The function will reset the fog render distance to false server-side, as there is no default value to begin with.
 * @param resetFogDistance unknown
 * @returns Returns true if operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetFogDistance
**/
declare function resetFogDistance(resetFogDistance: boolean): [];

/**
 * This function restores the default heat haze.

 * @returns Returns true if the heat haze was reset correctly, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetHeatHaze
**/
declare function resetHeatHaze(): boolean;

/**
 * This function is used to reset the size of the moon to its normal size.
 * @param resetMoonSize unknown
 * @returns Returns true if the size of the moon was reset, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetMoonSize
**/
declare function resetMoonSize(resetMoonSize: boolean): [];

/**
 * This function resets the rain level of the current weather to its default.
 * @param resetRainLevel unknown
 * @returns Returns true if the rain level was reset.
 * @see https://wiki.mtasa.com/wiki/ResetRainLevel
**/
declare function resetRainLevel(resetRainLevel: boolean): [];

/**
 * This function allows restoring of a changed sky gradient as a result of setSkyGradient.

 * @returns Returns true if sky color was reset correctly, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetSkyGradient
**/
declare function resetSkyGradient(): boolean;

/**
 * This function is used to reset the color of the sun to its normal color.
 * @param resetSunColor unknown
 * @returns Returns true if the color of the sun was reset, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetSunColor
**/
declare function resetSunColor(resetSunColor: boolean): [];

/**
 * This function is used to reset the size of the sun to its normal size.
 * @param resetSunSize unknown
 * @returns Returns true if the size of the sun was reset, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetSunSize
**/
declare function resetSunSize(resetSunSize: boolean): [];

/**
 * This function allows you to reset the elapsed time in existing timers to zero.
 * The function does not reset the 'times to execute' count on timers which have a limited amout of repetitions.
 * @param theTimer The timer whose elapsed time you wish to reset.
 * @returns Returns true if the timer was successfully reset, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetTimer
**/
declare function resetTimer(theTimer: unknown): boolean;

/**
 * This function reset the water color of the GTA world to default.
 * @param resetWaterColor unknown
 * @returns Returns true if water color was reset correctly, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetWaterColor
**/
declare function resetWaterColor(resetWaterColor: boolean): [];

/**
 * This function resets the water of the GTA world back to its default level.
 * Water elements are not affected.

 * @returns Returns true if water level was reset correctly, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetWaterLevel
**/
declare function resetWaterLevel(): boolean;

/**
 * This function resets the wind velocity in San Andreas to its default state.
 * @param resetWindVelocity unknown
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetWindVelocity
**/
declare function resetWindVelocity(resetWindVelocity: boolean): [];

/**
 * This function allows restoring of all world objects,which were removed with RemoveWorldModel.
 * @param restoreAllWorldModels unknown
 * @returns Returns true if the world objects were restored, false otherwise.
 * @see https://wiki.mtasa.com/wiki/RestoreAllWorldModels
**/
declare function restoreAllWorldModels(restoreAllWorldModels: boolean): [];

/**
 * This function allows restoring of world object,which was removed with RemoveWorldModel.
 * @param modelID A whole integer specifying the GTASA object model ID.
 * @param radius A floating point number representing the radius that will be eliminated.
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.
 * @param [iInterior=1] unknown
 * @returns Returns true if the world object was restored, false otherwise.
 * @see https://wiki.mtasa.com/wiki/RestoreWorldModel
**/
declare function restoreWorldModel(modelID: number, radius: number, x: number, y: number, z: number, iInterior?: number): boolean;

/**
 * This function sets the maximum velocity at which aircrafts could fly.
 * Using this function server-side will overwrite the value that was previously set client-side.
 * @param velocity The max velocity, can be 0 or any positive value.Default is 1.5.
 * @returns Returns true if the max velocity was set correctly, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetAircraftMaxVelocity
**/
declare function setAircraftMaxVelocity(velocity: number): boolean;

/**
 * This function will let you change the color of a blip.
 * This color is only applicable to the default blip icon (, or ).
 * All other icons will ignore this.
 * @param theBlip The blip who's color you wish to set.
 * @param red The amount of red in the blip's color (0 - 255).
 * @param green The amount of green in the blip's color (0 - 255).
 * @param blue The amount of blue in the blip's color (0 - 255).
 * @param alpha The amount of alpha in the blip's color (0 - 255). Alpha decides transparancy where 255 is opaque and 0 is transparent.
 * @returns Returns true if the blip's color was set successfully. Returns false if the blip passed to the function is invalid, or any of the colors are out of the valid range.
 * @see https://wiki.mtasa.com/wiki/SetBlipColor
**/
declare function setBlipColor(theBlip: Blip, red: number, green: number, blue: number, alpha: number): boolean;

/**
 * This function sets the icon for an existing blip element.
 * @param theBlip unknown
 * @param icon A number indicating the icon you wish to change it do. Valid values are listed on the Radar Blips page.
 * @returns Returns true if the icon was successfully set, false if the element passed was not a valid blip or the icon value was not a valid icon number.
 * @see https://wiki.mtasa.com/wiki/SetBlipIcon
**/
declare function setBlipIcon(theBlip: Blip, icon: number): boolean;

/**
 * This function sets the Z ordering of a blip.
 * It allows you to make a blip appear on top of or below other blips.
 * @param theBlip the blip whose Z ordering to change.
 * @param ordering the new Z ordering value. Blips with higher values will appear on top of blips with lower values. Possible range
 * @returns Returns true if the blip ordering was changed successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetBlipOrdering
**/
declare function setBlipOrdering(theBlip: Blip, ordering: number): boolean;

/**
 * This function sets the size of a blip's icon.
 * @param theBlip The blip you wish to get the size of.
 * @param iconSize The size you wish the icon to be. 2 is the default value. 25 is the maximum value. Value gets clamped between 0 and 25.
 * @returns Returns an true if the blip's size was set successfully. Returns false if the element passed was not a blip or if the icon size passed was invalid.
 * @see https://wiki.mtasa.com/wiki/SetBlipSize
**/
declare function setBlipSize(theBlip: Blip, iconSize: number): boolean;

/**
 * This function will set the visible distance of a blip.
 * @param theBlip The blip whose visible distance you wish to get.
 * @param theDistance The distance you want the blip to be visible for. Value gets clamped between 0 and 65535.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetBlipVisibleDistance
**/
declare function setBlipVisibleDistance(theBlip: Blip, theDistance: number): boolean;

/**
 * Sets the interior of the local camera.
 * Only the interior of the camera is changed, the local player stays in the interior he was in.
 * @param interior the interior to place the camera in.
 * @returns Returns true if the camera's interior was changed successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetCameraInterior
**/
declare function setCameraInterior(interior: number): boolean;

/**
 * This function sets the camera's position and direction.
 * The first three arguments are the point at which the camera lies, the last three are the point the camera faces (or the point it "looks at").
 * - Note: Calling this function takes the camera's focus away from the player and sets the camera in a fixed position and rotation. The camera's focus can be brought back to the player using the setCameraTarget function.
 * @param positionX The x coordinate of the camera's position.
 * @param positionY The y coordinate of the camera's position.
 * @param positionZ The z coordinate of the camera's position.
 * @param lookAtX The x coordinate of the point the camera faces.
 * @param lookAtY The y coordinate of the point the camera faces.
 * @param lookAtZ The z coordinate of the point the camera faces.
 * @param [roll=0] The camera roll angle, -180 to 180. A value of 0 means the camera sits straight, positive values will turn it counter-clockwise and negative values will turn it clockwise. -180 or 180 means the camera is upside down.
 * @param [fov=70] the field of view angle, 0.01 to 180. The higher this value is, the more you will be able to see what is to your sides.
 * @returns Returns true if the arguments are valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetCameraMatrix
**/
declare function setCameraMatrix(positionX: number, positionY: number, positionZ: number, lookAtX: number, lookAtY: number, lookAtZ: number, roll?: number, fov?: number): boolean;

/**
 * This function will enable or disable clouds.
 * This is useful for race maps which are placed high up as clouds can cause low FPS.
 * @param enabled A boolean value determining if clouds should be shown.Use true to show clouds and false to hide them.
 * @returns Returns true if the cloud state was changed succesfully, false if an invalid argument was specified.
 * @see https://wiki.mtasa.com/wiki/SetCloudsEnabled
**/
declare function setCloudsEnabled(enabled: boolean): boolean;

/**
 * This function is used to set the development mode.
 * Setting development mode allows access to special commands which can assist with script debugging.
 * Client-side development mode commands:
 * Shared development mode functions:
 * * debugSleep: Sets the freeze time for the client/server.
 * @param enable A boolean to indicate whether development mode is on (true) or off (false)
 * @param [enableWeb=false] A boolean to indicate whether browser debug messages will be filtered (false) or not (true)
 * @returns Returns true if the mode was set correctly, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetDevelopmentMode
**/
declare function setDevelopmentMode(enable: boolean, enableWeb?: boolean): boolean;

/**
 * This function sets the alpha (transparency) value for the specified element.
 * This can be a player, ped, object, vehicle or weapon.
 * @param theElement The element whose alpha you want to set.
 * @param alpha The alpha value to set. Values are 0-255, where 255 is fully opaque and 0 is fully transparent.
 * @returns Returns true or false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/SetElementAlpha
**/
declare function setElementAlpha(theElement: Element, alpha: number): boolean;

/**
 * Sets the angular velocity of a specified, supported element (Applies a spin to it).
 * @param theElement The element to apply the spin to. Can be either a player, ped, object, vehicle or a custom weapon.
 * @param rx velocity around the X axis
 * @param ry velocity around the Y axis
 * @param rz velocity around the Z axis
 * @returns Returns true if it was succesful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementAngularVelocity
**/
declare function setElementAngularVelocity(theElement: Element, rx: number, ry: number, rz: number): boolean;

/**
 * This function updates the offsets of an element that has been attached to another element using attachElements.
 * @param theElement The attached element.
 * @param xPosOffset The x offset, if you want the elements to be a certain distance from one another (default 0).
 * @param yPosOffset The y offset (default 0).
 * @param zPosOffset The z offset (default 0).
 * @param xRotOffset The x rotation offset (default 0).
 * @param yRotOffset The y rotation offset (default 0).
 * @param zRotOffset The z rotation offset (default 0).
 * @returns Returns true if the attaching process was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementAttachedOffsets
**/
declare function setElementAttachedOffsets(theElement: Element, xPosOffset: number, yPosOffset: number, zPosOffset: number, xRotOffset: number, yRotOffset: number, zRotOffset: number): boolean;

/**
 * This function can disable or enable an element's collisions.
 * An element without collisions does not interact with the physical environment and remains static.
 * - Note: Vehicles that are collisionless and have a driver will cause bugs.
 * - Note: Enabling a players collisions when they're inside a vehicle will cause bugs.
 * - Note: Disabling a peds collisions will cause some problems, such as it being unable to move.
 * @param theElement The element you wish to set the collisions of
 * @param enabled A boolean to indicate whether collisions are enabled (true) or disabled (false)
 * @returns Returns true if the collisions were set succesfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementCollisionsEnabled
**/
declare function setElementCollisionsEnabled(theElement: Element, enabled: boolean): boolean;

/**
 * This function stores element data under a certain key, attached to an element.
 * Element data set using this is then synced with all clients and the server.
 * The data can contain server created elements, but you should avoid passing data that is not able to be synced such as xmlnodes, acls, aclgroups etc.
 * As element data is synced to all clients, it can generate a lot of network traffic and be heavy on performance.
 * Events are much more efficient for sending data from a client to the server only, or from the server to a specific client.
 * Usage of element data should be disencouraged where your goal can be achieved with events like above, and tables for storing and retrieving data.
 * - Tip: A simple and efficient way to make a variable known to the server and clients is to use setElementData on the root element.
 * - Note: See Script security for tips on preventing cheaters when using events and element data
 * - Note: For performance reasons, never use setElementData in events that fire often (like onClientRender) without further optimization or conditions.
 * @param theElement The element you wish to attach the data to.
 * @param key The key you wish to store the data under. (Maximum 31 characters.)
 * @param value The value you wish to store. See element data for a list of acceptable datatypes.
 * @param [synchronize=true] Determines whether or not the data will be synchronized with the clients(server-side variation) or server(client-side variation)
 * @returns Returns true if the data was set succesfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementData
**/
declare function setElementData(theElement: Element, key: string, value: unknown, synchronize?: boolean): boolean;

/**
 * This function allows you to set the dimension of any element.
 * The dimension determines what/who the element is visible to.
 * @param theElement The element in which you'd like to set the dimension of.
 * @param dimension An integer representing the dimension ID. You can also use -1 to make the element visible in all dimensions (only valid to objects). Valid values are 0 to 65535.
 * @returns Returns true if theElement and dimension are valid, false otherwise. Also returns false if theElement is a player and it's not alive.
 * @see https://wiki.mtasa.com/wiki/SetElementDimension
**/
declare function setElementDimension(theElement: Element, dimension: number): boolean;

/**
 * This function allows you to set the double-sidedness of an element's model.
 * When an element's model is double-sided, it's back facing triangles become visible.
 * Possible uses of double-sidedness are: Elimination of invisible walls, using buildings as enclosures, using inverted landmasses as large pits or to make cave networks.
 * It can also remove the need to add extra triangles to custom models when trying to make them appear solid from all directions.
 * @param theElement The element in which you'd like to set the double-sidedness of.
 * @param enable Set to true/false to enable/disable double-sidedness.
 * @returns Returns true if theElement is valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementDoubleSided
**/
declare function setElementDoubleSided(theElement: Element, enable: boolean): boolean;

/**
 * This function freezes an element (stops it in its position and disables movement) or unfreezes it.
 * Warning: This function cancels any animation set by setPedAnimation if you freeze the ped.
 * @param theElement The element whose freeze status we want to change.
 * @param freezeStatus A boolean denoting whether we want to freeze (true) or unfreeze (false) it.
 * @returns Returns true if the element was frozen, false if it wasn't or if invalid arguments are passed.
 * @see https://wiki.mtasa.com/wiki/SetElementFrozen
**/
declare function setElementFrozen(theElement: Element, freezeStatus: boolean): boolean;

/**
 * This function sets the health for the specified element.
 * This can be a ped, object or a vehicle.
 * - Note: In the case of the vehicle element, the following effects appear, depending on the health value:
 * *650: white steam 0%, black smoke 0%
 * *450: white steam 100%, black smoke 50%
 * *250: white steam 0%, black smoke 100%
 * *249: fire with big black smoke
 * @param theElement The ped, vehicle or object whose health you want to set.
 * @param newHealth A float indicating the new health to set for the element.
 * @returns Returns true if the new health was set successfully, or false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/SetElementHealth
**/
declare function setElementHealth(theElement: Element, newHealth: number): boolean;

/**
 * This function sets the ID of an element to a string.
 * This can be anything from an identifying number, to a name.
 * You can only change the ID of an element clientside if that element has been created clientside as well.
 * @param theElement The element you want to set the ID of.
 * @param name The new ID for theElement.
 * @returns This returns true if successful. It will return false if theElement is invalid, or does not exist, or if name is invalid, or is not a string.
 * @see https://wiki.mtasa.com/wiki/SetElementID
**/
declare function setElementID(theElement: Element, name: string): boolean;

/**
 * This function allows you to set the interior of any element.
 * An interior is the current loaded place, 0 being outside.
 * - Note: If passing the same interior as the element is in, the call will be ignored and position (optional arguments) will not be set either. Use setElementPosition separately to be sure the position will be set.
 * @param theElement The element in which you'd like to set the interior of.
 * @param interior The interior you want to set the element to. Valid values are 0 to 255.
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.
 * @returns Returns true if theElement and interior are valid arguments, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementInterior
**/
declare function setElementInterior(theElement: Element, interior: number, x: number, y: number, z: number): boolean;

/**
 * Sets the model of a given element.
 * This allows you to change the model of a player (or ped), a vehicle or an object.
 * @param theElement the element you want to change.
 * @param model the model ID to set.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementModel
**/
declare function setElementModel(theElement: Element, model: number): boolean;

/**
 * This function is used for setting an element as the parent of another element.
 * Important note: The client-side version of this function can only be used on client-created elements. It cannot be used to modify the parent of server side elements.
 * - Note: This function does not change when an element will be destroyed - Elements are always destroyed when the resource that created them is stopped.
 * - Note: When an element is destroyed, its parent becomes the new parent of its children.
 * - Note: setElementParent only works if new parent is the root element, map root, or ancestor of map root
 * - Tip: This function does not affect the child elements position. To attach elements use the function attachElements.
 * @param theElement The element that you wish to set the parent of.
 * @param parent The element you wish to be the parent of theElement.
 * @returns Returns true if both elements are valid, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementParent
**/
declare function setElementParent(theElement: Element, parent: Element): boolean;

/**
 * This function sets the position of an element to the specified coordinates.
 * Warning: Do not use this function to spawn a player. It will cause problems with other functions like warpPedIntoVehicle. Use spawnPlayer instead.
 * @param theElement A valid element to be moved.
 * @param x The x coordinate of the destination.
 * @param y The y coordinate of the destination.
 * @param z The z coordinate of the destination.
 * @param [warp=true] teleports players, resetting any animations they were doing.Setting this to false preserves the current animation.
 * @returns Returns true if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementPosition
**/
declare function setElementPosition(theElement: Element, x: number, y: number, z: number, warp?: boolean): boolean;

/**
 * Sets the rotation of elements according to the world (does not work with players that are on the ground).
 * - Tip: New scripts should set conformPedRotation to true when using this function on peds. This will prevent quirky old behaviour.
 * @param theElement The element whose rotation will be set
 * @param rotX The element's rotation around the x axis in degrees
 * @param rotY The element's rotation around the y axis in degrees
 * @param rotZ The element's rotation around the z axis in degrees
 * @param [rotOrder=default] unknown
 * @param [conformPedRotation=false] Relevant only for peds and will be ignored for other element types. A bool which should be set to true to ensure the ped rotation is correctly set in all circumstances.Failing to set this argument may result in the ped rotation being inverted whilst it is in the air and other inconsistencies.The default value of false is for backward compatibility with scripts which may depend upon the incorrect behaviour.
 * @returns Returns true if the element rotation was successfully set and false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementRotation
**/
declare function setElementRotation(theElement: Element, rotX: number, rotY: number, rotZ: number, rotOrder?: string, conformPedRotation?: boolean): boolean;

/**
 * This function sets the velocity (movement speeds) along each axis, for an element.
 * This is not compatible with all elements.
 * Only the following elements are compatible:
 * Deprecated feature: 3.0140,1.4,Objects and projectiles velocity can only be set clientside.
 * @param theElement The element you wish to set the velocity of.
 * @param speedX A floating point value determining the speed along the X axis.
 * @param speedY A floating point value determining the speed along the Y axis.
 * @param speedZ A floating point value determining the speed along the Z axis.
 * @returns Returns true if the speed was set successfully, false if a bad element was specified or other bad arguments.
 * @see https://wiki.mtasa.com/wiki/SetElementVelocity
**/
declare function setElementVelocity(theElement: Element, speedX: number, speedY: number, speedZ: number): boolean;

/**
 * This function is used to set the distance of render.
 * Areas beyond the specified distance will not be rendered.
 * @param distance A float specifying the distance of render.Setting this less than 5 will cause problems to the client.
 * @returns Returns true if the distance was set correctly, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/SetFarClipDistance
**/
declare function setFarClipDistance(distance: number): boolean;

/**
 * This function changes the distance at which fog appears.
 * Keep in mind that this function doesn't change the distance of render.
 * @param distance unknown
 * @returns Returns true if the distance changed successfully, false if bad arguments were passed.
 * @see https://wiki.mtasa.com/wiki/SetFogDistance
**/
declare function setFogDistance(distance: number): boolean;

/**
 * This function sets the game speed to the given value.
 * @param value The float value of the game speed (Range 0 - 10)
 * @returns Returns true if the gamespeed was set successfully, false otherwise. The normal game speed is '1'.
 * @see https://wiki.mtasa.com/wiki/SetGameSpeed
**/
declare function setGameSpeed(value: number): boolean;

/**
 * This function opens or closes the specified garage door in the world.
 * - Note: setGarageOpen does not work with ID 32 (Pay 'n' Spray near Royal Casino). This garage doesn't work in SP too. You can remove this gate by removeWorldModel and recreate them for later using with moveObject.
 * @param garageID The garage ID that represents the garage door being opened or closed.
 * @param open unknown
 * @returns Returns true if successful, false if an invalid garage id was given.
 * @see https://wiki.mtasa.com/wiki/SetGarageOpen
**/
declare function setGarageOpen(garageID: number, open: boolean): boolean;

/**
 * This function sets the server's gravity level.
 * - Note: *This does not effect peds/players; to set ped/player gravity use setPedGravity.
 * *Setting the gravity level to different values on clients can cause animation bugs (players floating across ground because players see different fall animation.)
 * @param level The level of gravity (default is 0.008).
 * @returns Returns true if gravity was changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetGravity
**/
declare function setGravity(level: number): boolean;

/**
 * This function changes the heat haze effect.
 * @param intensity unknown
 * @param [randomShift=0] unknown
 * @param [speedMin=12] unknown
 * @param [speedMax=18] unknown
 * @param [scanSizeX=75] unknown
 * @param [scanSizeY=80] unknown
 * @param [renderSizeX=80] unknown
 * @param [renderSizeY=85] unknown
 * @param [bShowInside=false] unknown
 * @returns Returns true if the heat haze effect was set correctly, false if invalid values were passed.
 * @see https://wiki.mtasa.com/wiki/SetHeatHaze
**/
declare function setHeatHaze(intensity: number, randomShift?: number, speedMin?: number, speedMax?: number, scanSizeX?: number, scanSizeY?: number, renderSizeX?: number, renderSizeY?: number, bShowInside?: boolean): boolean;

/**
 * This function toggles furniture generation in interiors with the specified room ID.
 * @param roomID The room type which you want disable or enable the furniture in
 * @param enabled A bool representing whether the interior furniture is enabled or disabled.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetInteriorFurnitureEnabled
**/
declare function setInteriorFurnitureEnabled(roomID: number, enabled: boolean): boolean;

/**
 * This function disables or enables the ambient sounds played by GTA in most interiors, like restaurants, casinos, clubs, houses, etc.
 * @param enabled unknown
 * @returns If a boolean was passed to the function, it always succeeds and returns true.
 * @see https://wiki.mtasa.com/wiki/SetInteriorSoundsEnabled
**/
declare function setInteriorSoundsEnabled(enabled: boolean): boolean;

/**
 * This function changes the maximum flying height of jetpack.
 * @param Height The max height starting at approximately -20.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetJetpackMaxHeight
**/
declare function setJetpackMaxHeight(Height: number): boolean;

/**
 * This function assigns a low LOD element to an element.
 * The low LOD element is displayed when its associated element is not fully visible.
 * If a low LOD element is assigned to several elements, it will be displayed when any of these elements are not fully visible.
 * @param theElement The element whose low LOD version we want to change.
 * @param lowLODElement A low LOD element to display when the first element is not fully visible.
 * @returns Returns true if the assignment was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetLowLODElement
**/
declare function setLowLODElement(theElement: Element, lowLODElement: Element): boolean;

/**
 * This function sets the color of the specified marker by modifying the values for red, green and blue.
 * @param theMarker The marker that you wish to set the color of.
 * @param r The amount of red in the final color (0 to 255).
 * @param g The amount of green in the final color (0 to 255).
 * @param b The amount of blue in the final color (0 to 255).
 * @param a The amount of alpha in the final color (0 to 255).
 * @returns 
 * @see https://wiki.mtasa.com/wiki/SetMarkerColor
**/
declare function setMarkerColor(theMarker: Marker, r: number, g: number, b: number, a: number): boolean;

/**
 * 
 * @param theMarker The marker to change the visual style of
 * @param icon A string referring to the type of icon, acceptable values are
 * @returns 
 * @see https://wiki.mtasa.com/wiki/SetMarkerIcon
**/
declare function setMarkerIcon(theMarker: Marker, icon: string): boolean;

/**
 * This function sets the size of the specified marker.
 * Setting negative value will "flip" the marker, do nothing or make it invisible:
 * @param theMarker The marker that you wish to set the size of.
 * @param size A float representing new size of the marker.
 * @returns Returns true if successful, false if failed.
 * @see https://wiki.mtasa.com/wiki/SetMarkerSize
**/
declare function setMarkerSize(theMarker: Marker, size: number): boolean;

/**
 * This function sets the 'target' for a marker.
 * Only the checkpoint and ring marker types can have a target.
 * For checkpoint markers, the target is shown as an arrow aiming at the point specified.
 * For ring markers, the target is shown by rotating the whole ring so that it faces the point specified.
 * This function is most useful for setting up markers for races, where each marker points to the next one's position.
 * (This is mostly used in races!)
 * @param theMarker The marker to set the target of
 * @param x The x axis of the coordinate to target the marker at
 * @param y The y axis of the coordinate to target the marker at
 * @param z The z axis of the coordinate to target the marker at
 * @returns Returns true if target was set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetMarkerTarget
**/
declare function setMarkerTarget(theMarker: Marker, x: number, y: number, z: number): boolean;

/**
 * This function changes a marker's type.
 * The type controls how the marker is displayed in the game.
 * It's important that you use marker types that users are used to from the single player game.
 * For example, checkpoints are used in races, rings are used for aircraft races, arrows are used for entering buildings etc.
 * @param theMarker A marker element referencing the specified marker.
 * @param markerType A string denoting the marker type. Valid values are
 * @returns Returns true if the marker type was changed, false if it wasn't or marker values were invalid.
 * @see https://wiki.mtasa.com/wiki/SetMarkerType
**/
declare function setMarkerType(theMarker: Marker, markerType: string): boolean;

/**
 * Sets the real-world duration of an ingame minute.
 * The GTA default is 1000.
 * @param milliseconds the new duration of an ingame minute, accepted values 0 - 4294967296.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetMinuteDuration
**/
declare function setMinuteDuration(milliseconds: number): boolean;

/**
 * This function sets the moon size.
 * Using this function server-side will overwrite the value that was previously set client-side.
 * @param size The size, can be 0 or any positive value.Default is 3.
 * @returns Returns true if the moon size was set correctly, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetMoonSize
**/
declare function setMoonSize(size: number): boolean;

/**
 * This function changes the visible size of an object.
 * - Note: setObjectScale does not affect the collision models for the object, as such is unsuitable for use for interaction with players, vehicles or other objects.
 * @param theObject the object you wish to change the scale of.
 * @param scale a float containing the new scale. 1.0 is the standard scale, with 0.5 being half the size and 2.0 being twice the size. If the scaleY is set, this will be scaleX.
 * @param [scaleY=scale] a float containing the new scale on the Y axis
 * @param [scaleZ=scale] a float containing the new scale on the Z axis
 * @returns 
 * @see https://wiki.mtasa.com/wiki/SetObjectScale
**/
declare function setObjectScale(theObject: Object, scale: number, scaleY?: number, scaleZ?: number): boolean;

/**
 * This function is used to enable or disable occlusions.
 * Occlusions are used by GTA to enhance performance by hiding objects that are (normally) obscured by certain large buildings.
 * However when removeWorldModel is used they may also have the undesired effect of making parts of the map disappear.
 * Disabling occlusions will fix that.
 * @param enabled A bool specifying if GTA occlusions should be enabled
 * @returns Returns true if the setting was set correctly, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/SetOcclusionsEnabled
**/
declare function setOcclusionsEnabled(enabled: boolean): boolean;

/**
 * Sets the current animation of a player or ped.
 * Not specifying the type of animation will automatically cancel the current one.
 * Warning: The animation will be cancelled if you use setElementFrozen on the ped.
 * @param thePed the player or ped you want to apply an animation to.
 * @param [block=nil] the animation block's name.
 * @param [anim=nil] the name of the animation within the block.
 * @param [time=1] how long the animation will run for in milliseconds.
 * @param [loop=true] indicates whether or not the animation will loop.
 * @param [updatePosition=true] will change the actual coordinates of the ped according to the animation. Use this for e.g. walking animations.
 * @param [interruptable=true] if set to false other tasks wont be able to interupt the animation. Setting this to 'false' also gives this function more power to override other animations that are running. For example, squatting after a jump can be terminated.
 * @param [freezeLastFrame=true] if set to true after animation the last frame will be frozen, otherwise the animation will end and controls will return.
 * @param [blendTime=250] how long the animation will mixed with the previous one in milliseconds.
 * @param [retainPedState=false] unknown
 * @returns Returns true if succesful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedAnimation
**/
declare function setPedAnimation(thePed: Ped, block?: string, anim?: string, time?: number, loop?: boolean, updatePosition?: boolean, interruptable?: boolean, freezeLastFrame?: boolean, blendTime?: number, retainPedState?: boolean): boolean;

/**
 * Sets the current animation progress of a player or ped.
 * @param thePed the player or ped you want to change animation progress.
 * @param anim the animation name currently applied to ped, if not supplied, the animation will stop
 * @param progress current animation progress you want to apply, value from 0.0 to 1.0, if not supplied will default to 0.0
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedAnimationProgress
**/
declare function setPedAnimationProgress(thePed: Ped, anim: string, progress: number): boolean;

/**
 * Sets the speed of a currently running animation for a particular player or ped.
 * @param thePed the player or ped you want to change animation speed of.
 * @param [anim=] the animation name it will affect.
 * @param [speed=1] a float containing the speed between 0.0–1.0 you want to apply to the animation. This limitation may be adjusted in the future, so do not provide speeds outside this boundary.
 * @param ] unknown
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedAnimationSpeed
**/
declare function setPedAnimationSpeed(thePed: Ped, anim?: string, speed?: number, ]: unknown): boolean;

/**
 * This function allows you to set the armor value of a ped.
 * Function also added client-side.
 * @param thePed the ped whose armor you want to modify.
 * @param armor the amount of armor you want to set on the ped. Valid values are from 0 to 100.
 * @returns Returns true if the armor was changed succesfully. Returns false if an invalid ped was specified, or the armor value specified is out of acceptable range.
 * @see https://wiki.mtasa.com/wiki/SetPedArmor
**/
declare function setPedArmor(thePed: Ped, armor: number): boolean;

/**
 * This function sets the driveby state of a ped.
 * @param thePed The ped element whose state is to be changed.
 * @param state A boolean value representing the drive-by state, true meaning enabled and false disabled.
 * @returns Returns true if the driveby state could be changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedDoingGangDriveby
**/
declare function setPedDoingGangDriveby(thePed: Ped, state: boolean): boolean;

/**
 * Changes a ped's fighting style.
 * Most styles only change the 'special attack' which is done using the Aim and Enter keys.
 * Function also added client-side.
 * @param thePed The ped whose fighting style to change.
 * @param style The fighting style ID to apply.
 * @returns Returns true in case of success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedFightingStyle
**/
declare function setPedFightingStyle(thePed: Ped, style: number): boolean;

/**
 * With this function, you can set if a ped has a head or not.
 * @param thePed The ped to check.
 * @param headState head state, use true if you want the ped be headless, use false to give back the head.
 * @returns Returns true if successful, false otherwise
 * @see https://wiki.mtasa.com/wiki/SetPedHeadless
**/
declare function setPedHeadless(thePed: Ped, headState: boolean): boolean;

/**
 * This function can be used to set a ped on fire or extinguish a fire on it.
 * @param thePed The ped that we want to set/unset
 * @param isOnFire true to set the ped on fire, false to extinguish any fire on him
 * @returns Returns true if successful, false otherwise
 * @see https://wiki.mtasa.com/wiki/SetPedOnFire
**/
declare function setPedOnFire(thePed: Ped, isOnFire: boolean): boolean;

/**
 * Sets the walking style of a ped.
 * A walking style consists of a set of animations that are used for walking, running etc.
 * @param thePed the ped whose walking style to change.
 * @param style the walking style to set.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedWalkingStyle
**/
declare function setPedWalkingStyle(thePed: Ped, style: number): boolean;

/**
 * This function changes the selected weapon slot of a ped.
 * @param thePed the ped whose weapon slot you want to set. In a clientside script, this cannot be used on remote players.
 * @param weaponSlot the weapon slot to set.
 * @returns Returns true if successful in setting the ped's equipped weapon slot, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedWeaponSlot
**/
declare function setPedWeaponSlot(thePed: Ped, weaponSlot: number): boolean;

/**
 * This function allows changing the type of a pickup to a Weapon, Armour or Health pickup, and allows you to set the health points or the weapon and ammo that the pickup will give.
 * @param thePickup The pickup which you wish to change the settings of
 * @param theType An integer representing the type of pickup. You can choose from
 * @param amount/weapon unknown
 * @param [ unknown
 * @param ammo An integer representing the amount of ammo a pickup contains.This argument is only valid when the pickup type is a Weapon Pickup, and must be specified in that case.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPickupType
**/
declare function setPickupType(thePickup: Pickup, theType: number, amount/weapon: number, [: unknown, ammo: number): boolean;

/**
 * This function will show or hide a part of the player's HUD.
 * - Note: This function is identical to showPlayerHudComponent
 * @param component The component you wish to show or hide. Valid values are
 * @param show Specify if the component should be shown (true) or hidden (false)
 * @returns Returns true if the component was shown or hidden succesfully, false if an invalid argument was specified.
 * @see https://wiki.mtasa.com/wiki/SetPlayerHudComponentVisible
**/
declare function setPlayerHudComponentVisible(component: string, show: boolean): boolean;

/**
 * Sets a player's money to a certain value, regardless of current player money.
 * It should be noted that setting negative values does not work and in fact gives the player large amounts of money.
 * - Note: Using this function client side (not recommended) will not change a players money server side.
 * @param amount A whole integer specifying the new amount of money the local player will have.
 * @param [instant=false] unknown
 * @returns Returns true if the money was added, or false if invalid parameters were passed.
 * @see https://wiki.mtasa.com/wiki/SetPlayerMoney
**/
declare function setPlayerMoney(amount: number, instant?: boolean): boolean;

/**
 * This allows you to change the RGB color mixture in the name tags of players.
 * - Note: If the player is using a hexcode in front of their name, it will override this function. You must first strip the name of the hexcode using removeHex
 * @param thePlayer The player whose name tag text you wish to change the color of
 * @param r The amount of red you want in the mixture of RGB (0-255 is valid)
 * @param g The amount of green you want in the mixture of RGB (0-255 is valid)
 * @param b The amount of blue you want in the mixture of RGB (0-255 is valid)
 * @returns Returns true if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPlayerNametagColor
**/
declare function setPlayerNametagColor(thePlayer: Player, r: number, g: number, b: number): boolean;

/**
 * Use this to define whether the player's name tag is visible or invisible.
 * New feature: 3,1.0,This function allows you to set whether a player's nametag visibility both clientside and serverside
 * @param thePlayer Define the player whos tag visiblity status you want to change
 * @param showing Use true or false to show/hide the tag
 * @returns Returns true if successful, false otherwise
 * @see https://wiki.mtasa.com/wiki/SetPlayerNametagShowing
**/
declare function setPlayerNametagShowing(thePlayer: Player, showing: boolean): boolean;

/**
 * This will change the text of a player's nickname in the world to something besides the nickname he chose.
 * This will not change the player's actual nickname, it only changes the visible aspect inside the world (you will see his original nickname in the scoreboard and will refer to his original name in scripts).
 * @param thePlayer The player whose nickname text you wish to change
 * @param text The new nickname text that will be displayed
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPlayerNametagText
**/
declare function setPlayerNametagText(thePlayer: Player, text: string): boolean;

/**
 * Sets the color of an existing radar area.
 * @param theRadarArea the radararea element whose color you wish to set.
 * @param r an integer representing the amount of red in the color (0 for no red, 255 for solid red)
 * @param g an integer representing the amount of green in the color (0 for no green, 255 for solid green)
 * @param b an integer representing the amount of blue in the color (0 for no blue, 255 for solid blue)
 * @param a an integer representing the color's alpha (0 for transparent, 255 for opaque)
 * @returns Returns true if the color was set successfully, false if the radar area doesn't exist or the color arguments are improper.
 * @see https://wiki.mtasa.com/wiki/SetRadarAreaColor
**/
declare function setRadarAreaColor(theRadarArea: RadarArea, r: number, g: number, b: number, a: number): boolean;

/**
 * This function makes an existing radar area flash in transparency.
 * @param theRadarArea the radararea element we want to change flashing state of.
 * @param flash a bool indicating whether the radar area should flash (true to flash, false to not flash).
 * @returns Returns true if the new flash state was successfully set, false if the radar area doesn't exist or invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/SetRadarAreaFlashing
**/
declare function setRadarAreaFlashing(theRadarArea: RadarArea, flash: boolean): boolean;

/**
 * This function changes the size of an existing radar area.
 * @param theRadararea the radararea element whose size is to be changed.
 * @param x the x length of the radar area.
 * @param y the y length of the radar area.
 * @returns Returns true if the size was set successfully, false if invalid arguments are passed.
 * @see https://wiki.mtasa.com/wiki/SetRadarAreaSize
**/
declare function setRadarAreaSize(theRadararea: RadarArea, x: number, y: number): boolean;

/**
 * This function sets the rain level to any weather available in GTA.
 * Use resetRainLevel to undo the changes.
 * @param level A floating point number representing the rain level. 1 represents the maximum rain level usually available in GTA, but higher values are accepted.
 * @returns Returns true if the rain level was set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetRainLevel
**/
declare function setRainLevel(level: number): boolean;

/**
 * This function changes the sky color to a two-color gradient.
 * @param [topRed=0] The red value of the upper part of the sky, from 0 to 255.
 * @param [topGreen=0] The green value of the upper part of the sky, from 0 to 255.
 * @param [topBlue=0] The blue value of the upper part of the sky, from 0 to 255.
 * @param [bottomRed=0] The red value of the lower part of the sky, from 0 to 255.
 * @param [bottomGreen=0] The green value of the lower part of the sky, from 0 to 255.
 * @param [bottomBlue=0] The blue value of the lower part of the sky, from 0 to 255.
 * @returns Returns true if sky color was set correctly, false if invalid values were passed.
 * @see https://wiki.mtasa.com/wiki/SetSkyGradient
**/
declare function setSkyGradient(topRed?: number, topGreen?: number, topBlue?: number, bottomRed?: number, bottomGreen?: number, bottomBlue?: number): boolean;

/**
 * This function is used to set the color of the sun.
 * @param aRed The amount of red (0-255) you want the sun to be.
 * @param aGreen The amount of green (0-255) you want the sun to be.
 * @param aBlue The amount of blue (0-255) you want the sun to be.
 * @param bRed The amount of red (0-255) you want the sun to be.
 * @param bGreen The amount of green (0-255) you want the sun to be.
 * @param bBlue The amount of blue (0-255) you want the sun to be.
 * @returns Returns true if the color of the sun was set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetSunColor
**/
declare function setSunColor(aRed: number, aGreen: number, aBlue: number, bRed: number, bGreen: number, bBlue: number): boolean;

/**
 * This function is used to set the size of the sun.
 * @param Size The size you want the sun to be in the sky.
 * @returns Returns true if the size of the sun was set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetSunSize
**/
declare function setSunSize(Size: number): boolean;

/**
 * This function sets the current GTA time to the given time.
 * @param hour The hour of the new time (range 0-23).
 * @param minute The minute of the new time (range 0-59).
 * @returns Returns true if the new time was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetTime
**/
declare function setTime(hour: number, minute: number): boolean;

/**
 * This function allows you to trigger a function after a number of milliseconds have elapsed.
 * You can call one of your own functions or a built-in function.
 * For example, you could set a timer to spawn a player after a number of seconds have elapsed.
 * Once a timer has finished repeating, it no longer exists.
 * The minimum accepted interval is 0ms.
 * Multi Theft Auto guarantees that the timer will be triggered after at least the interval you specify.
 * The resolution of the timer is tied to the frame rate (server side and client-side).
 * All the overdue timers are triggered at a single point each frame.
 * This means that if, for example, the player is running at 30 frames per second, then two timers specified to occur after 100ms and 110ms would more than likely occur during the same frame, as the difference in time between the two timers (10ms) is less than half the length of the frame (33ms).
 * As with most timers provided by other languages, you shouldn't rely on the timer triggering at an exact point in the future.
 * Important note: The speed at which a client side timer runs can be completely unreliable if a client is maliciously modifying their operating system speed, timers could run much faster or slower.
 * @param theFunction The function you wish the timer to call.
 * @param timeInterval The number of milliseconds that should elapse before the function is called. (the minimum is 50 (0 on 1.5.6 r16715); 1000 milliseconds = 1 second)
 * @param timesToExecute The number of times you want the timer to execute, or 0 for infinite repetitions.
 * @param arguments Any arguments you wish to pass to the function can be listed after the timesToExecute argument.Note that any tables you want to pass will get cloned, whereas metatables and functions/function references in that passed table will get lost.Also changes you make in the original table before the function gets called won't get transferred.
 * @param ] unknown
 * @returns Returns a timer pointer if the timer was set successfully, false if the arguments are invalid or the timer could not be set.
 * @see https://wiki.mtasa.com/wiki/SetTimer
**/
declare function setTimer(theFunction: Function, timeInterval: number, timesToExecute: number, arguments: unknown, ]: unknown): unknown;

/**
 * Sets the current traffic light state.
 * This state controls the traffic light colors.
 * For instance, state 1 will cause the north and south traffic lights to be amber, and the ones left and east will turn red.
 * @param colorNS unknown
 * @param colorEW unknown
 * @returns Returns true if the state was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetTrafficLightState
**/
declare function setTrafficLightState(colorNS: string, colorEW: string): boolean;

/**
 * Toggles whether you want the traffic lights to be locked.
 * If the lights are locked, it means they won't change unless you do setTrafficLightState.
 * @param toggle A bool indicating whether you want the traffic lights to change automatically, or not
 * @returns Returns true if the successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetTrafficLightsLocked
**/
declare function setTrafficLightsLocked(toggle: boolean): boolean;

/**
 * This function will set a train or tram as derailable.
 * This is, if it can derail when it goes above the maximum speed.
 * @param derailableVehicle The vehicle that you wish to set derailable.
 * @param derailable whether the train or tram is derailable. True as derailable, False as non-derailable.
 * @returns Returns true if the state was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetTrainDerailable
**/
declare function setTrainDerailable(derailableVehicle: Vehicle, derailable: boolean): boolean;

/**
 * This function will set a train or tram as derailed.
 * @param vehicleToDerail The vehicle that you wish to derail.
 * @param derailed whether the train is derailed.
 * @returns Returns true if the state was successfully set
 * @see https://wiki.mtasa.com/wiki/SetTrainDerailed
**/
declare function setTrainDerailed(vehicleToDerail: Vehicle, derailed: boolean): boolean;

/**
 * Sets the direction in which a train or tram drives over the rails (clockwise or counterclockwise).
 * @param train the train whose direction to change.
 * @param clockwise if true, will make the train go clockwise. If false, makes it go counterclockwise.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetTrainDirection
**/
declare function setTrainDirection(train: Vehicle, clockwise: boolean): boolean;

/**
 * Sets the position the train is currently on the track
 * @param train the train of which to set the track
 * @param position the position along the track (0 - 18107 a complete way round)
 * @returns Returns true if the train position was set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetTrainPosition
**/
declare function setTrainPosition(train: Vehicle, position: number): boolean;

/**
 * Sets the on-track speed of a train.
 * @param train the train whose speed to change.
 * @param speed the new on-track speed of the train. A positive value will make it go clockwise, a negative value counter clockwise.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetTrainSpeed
**/
declare function setTrainSpeed(train: Vehicle, speed: number): boolean;

/**
 * Sets the track of a train
 * Disabled
 * @param train the train of which to set the track
 * @param track the track where you want to set the train. It can be 0, 1, 2 or 3.
 * @returns Returns true if the track was set to the train, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetTrainTrack
**/
declare function setTrainTrack(train: Vehicle, track: number): boolean;

/**
 * This function will set the color of a vehicle.
 * Colors are in RGB format, vehicles can have up to 4 colors.
 * Most vehicles have 2 colors only.
 * {{New feature|3.0110|1.1|
 * @param theVehicle The vehicle that you wish to set the color of.
 * @param r1 unknown
 * @param g1 unknown
 * @param b1 unknown
 * @param r2 unknown
 * @param g2 unknown
 * @param b2 unknown
 * @param r3 unknown
 * @param g3 unknown
 * @param b3 unknown
 * @param r4 unknown
 * @param g4 unknown
 * @param b4 unknown
 * @returns Returns true if vehicle's color was set, false if an invalid vehicle or invalid colors were specified.
 * @see https://wiki.mtasa.com/wiki/SetVehicleColor
**/
declare function setVehicleColor(theVehicle: Vehicle, r1: number, g1: number, b1: number, r2: number, g2: number, b2: number, r3: number, g3: number, b3: number, r4: number, g4: number, b4: number): boolean;

/**
 * This functions makes a vehicle damage proof, so it won't take damage from bullets, hits, explosions or fire.
 * A damage proof's vehicle health can still be changed via script.
 * @param theVehicle The vehicle you wish to make damage proof.
 * @param damageProof true is damage proof, false is damageable.
 * @returns Returns true if the vehicle was set damage proof succesfully, false if the arguments are invalid or it failed.
 * @see https://wiki.mtasa.com/wiki/SetVehicleDamageProof
**/
declare function setVehicleDamageProof(theVehicle: Vehicle, damageProof: boolean): boolean;

/**
 * This function sets how much a vehicle's door is open.
 * Doors include the boot/trunk and the bonnet of the vehicle.
 * @param theVehicle The vehicle that you wish to change the door open ratio of.
 * @param door A whole number, 0 (hood), 1 (trunk), 2 (front left), 3 (front right), 4 (rear left), 5 (rear right)
 * @param ratio The ratio value, ranging from 0 (fully closed) to 1 (fully open).
 * @param [time=0] The number of milliseconds the door should take to reach the value you have specified.A value of 0 will change the door open ratio instantly.
 * @returns Returns true if the door open ratio was successfully set, false if invalid arguments are passed.
 * @see https://wiki.mtasa.com/wiki/SetVehicleDoorOpenRatio
**/
declare function setVehicleDoorOpenRatio(theVehicle: Vehicle, door: number, ratio: number, time?: number): boolean;

/**
 * This function sets the state of the specified door on a vehicle.
 * @param theVehicle The vehicle that you wish to change the door state of.
 * @param door An integer representing which door to set the state of. Valid values are
 * @param state An integer representing the state to set the door to. Valid values are
 * @returns Returns true if the door state was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleDoorState
**/
declare function setVehicleDoorState(theVehicle: Vehicle, door: number, state: number): boolean;

/**
 * This function makes a vehicle's doors undamageable, so they won't fall off when they're hit.
 * Note that the vehicle has to be locked using setVehicleLocked for this setting to have any effect.
 * @param theVehicle The vehicle of which you wish to set the car door damageability.
 * @param state A boolean denoting whether the vehicle's doors are undamageable (true) or damageable (false).
 * @returns Returns true if the damageability state was successfully changed, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/SetVehicleDoorsUndamageable
**/
declare function setVehicleDoorsUndamageable(theVehicle: Vehicle, state: boolean): boolean;

/**
 * This function turns a vehicle's engine on or off.
 * Note that the engine will always be turned on when someone enters the driver seat, unless you override that behaviour with scripts.
 * @param theVehicle The vehicle you wish to change the engine state of.
 * @param engineState A boolean value representing whether the engine will be turned on (true) or off (false).
 * @returns Returns true if the vehicle's engine state was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleEngineState
**/
declare function setVehicleEngineState(theVehicle: Vehicle, engineState: boolean): boolean;

/**
 * This function changes the 'explodable state' of a vehicle's fuel tank, which toggles the ability to blow the vehicle up by shooting the tank.
 * This function will have no effect on vehicles with tanks that cannot be shot in single player.
 * @param theVehicle The vehicle you wish to change the fuel tank explodable state of.
 * @param explodable A boolean value representing whether or not the fuel tank will be explodable.
 * @returns Returns true if the vehicle's fuel tank explodable state was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleFuelTankExplodable
**/
declare function setVehicleFuelTankExplodable(theVehicle: Vehicle, explodable: boolean): boolean;

/**
 * This function is used to change the handling data of a vehicle.
 * Implemented also for client-sided vehicles.
 * @param theVehicle The vehicle you wish to set the handling of.
 * @param property The property you wish to set the handling of the vehicle to.
 * @param , unknown
 * @param ) unknown
 * @param one unknown
 * @param to unknown
 * @param handling unknown
 * @param bool unknown
 * @param ( unknown
 * @param theVehicle The vehicle you wish to set the handling of.
 * @param property The property you wish to set the handling of the vehicle to.
 * @param , unknown
 * @param ) unknown
 * @param one unknown
 * @param to unknown
 * @param default unknown
 * @param bool unknown
 * @param ( unknown
 * @param theVehicle The vehicle you wish to set the handling of.
 * @param ) unknown
 * @param all unknown
 * @param to unknown
 * @param handling unknown
 * @param bool unknown
 * @param ( unknown
 * @param theVehicle The vehicle you wish to set the handling of.
 * @param ) unknown
 * @param all unknown
 * @param to unknown
 * @param default unknown
 * @returns Returns true if the handling was set successfully, false otherwise. See below a list of valid properties and their required values:
 * @see https://wiki.mtasa.com/wiki/SetVehicleHandling
**/
declare function setVehicleHandling(theVehicle: Element, property: string, ,: null, ): unknown, one: unknown, to: unknown, handling: unknown, bool: unknown, (: unknown, theVehicle: Element, property: string, ,: null, ): unknown, one: unknown, to: unknown, default: unknown, bool: unknown, (: unknown, theVehicle: Element, ): unknown, all: unknown, to: unknown, handling: unknown, bool: unknown, (: unknown, theVehicle: Element, ): unknown, all: unknown, to: unknown, default: unknown): boolean;

/**
 * This function will set the headlight color of a vehicle.
 * valid Red Green and Blue arguments range from 0-255
 * @param theVehicle The vehicle that you wish to set the headlight color of.
 * @param red An integer indicating the amount of red for the vehicle's headlights
 * @param green An integer indicating the amount of green for the vehicle's headlights
 * @param blue An integer indicating the amount of blue for the vehicle's headlights
 * @returns Returns true if vehicle's headlight color was set, false if an invalid vehicle or invalid color ranges were specified for red,green or blue.
 * @see https://wiki.mtasa.com/wiki/SetVehicleHeadLightColor
**/
declare function setVehicleHeadLightColor(theVehicle: Vehicle, red: number, green: number, blue: number): boolean;

/**
 * This function sets the state of the light on the vehicle.
 * @param theVehicle A handle to the vehicle that you wish to change the light state of.
 * @param light A whole number determining the individual light
 * @param state A whole number determining the new state of the light.0 represents normal lights, and 1 represents broken lights.
 * @returns Returns true if the light state was set successfully, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/SetVehicleLightState
**/
declare function setVehicleLightState(theVehicle: Vehicle, light: number, state: number): boolean;

/**
 * This function can be used to set a vehicle to be locked or unlocked.
 * Locking a vehicle restricts access to all doors of a vehicle.
 * @param theVehicle The vehicle which you wish to change the lock status of
 * @param locked Boolean for the status you wish to set. Set true to lock, false to unlock
 * @returns Returns true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleLocked
**/
declare function setVehicleLocked(theVehicle: Vehicle, locked: boolean): boolean;

/**
 * This function changes the light overriding setting on a vehicle.
 * @param theVehicle The vehicle you wish to change the override lights setting of.
 * @param value A whole number representing the state of the lights
 * @returns Returns true if the vehicle's lights setting was changed. Otherwise false.
 * @see https://wiki.mtasa.com/wiki/SetVehicleOverrideLights
**/
declare function setVehicleOverrideLights(theVehicle: Vehicle, value: number): boolean;

/**
 * This function changes the paintjob on the specified vehicle.
 * See paintjob for list of supported vehicles.
 * @param theVehicle The vehicle you wish to change the paintjob of.
 * @param value A whole number representing the new paintjob id. Ranges from 0 up to 3.
 * @returns Returns true if the vehicle's paintjob was changed. Otherwise false.
 * @see https://wiki.mtasa.com/wiki/SetVehiclePaintjob
**/
declare function setVehiclePaintjob(theVehicle: Vehicle, value: number): boolean;

/**
 * This function allows you to change the state of one of the six panels vehicle's can have.
 * When executed on the server-side resources, the damage will be synched for all players, whereas the change is only client-side if the function is used in a client resource.
 * @param theVehicle The vehicle you would like to modify the panel of.
 * @param panelID An ID specifying the part of the vehicle. Possible values are
 * @param state How damaged the part is on the scale of 0 to 3, with 0 being undamaged and 3 being very damaged.How this is manifested depends on the panel and the vehicle.
 * @returns Returns true if the panel state has been updated, false otherwise
 * @see https://wiki.mtasa.com/wiki/SetVehiclePanelState
**/
declare function setVehiclePanelState(theVehicle: Vehicle, panelID: number, state: number): boolean;

/**
 * This function can be used to set the numberplate text of a car.
 * It now also changes the numberplate text of any vehicle that has visual numberplates.
 * @param theVehicle the vehicle whose numberplate you want to change.
 * @param numberplate a string that will go on the number plate of the car (max 8 characters).
 * @returns Returns true if the numberplate was changed successfully, or false if invalid arguments were passed
 * @see https://wiki.mtasa.com/wiki/SetVehiclePlateText
**/
declare function setVehiclePlateText(theVehicle: Element, numberplate: string): boolean;

/**
 * This function changes the properties of a vehicles siren point.
 * - Note: Although you may be able to add sirens to any vehice, this function may not work. This function fails on the Buffalo for example.
 * @param theVehicle The vehicle to modify
 * @param sirenPoint The siren point to modify
 * @param posX The x position of this siren point from the center of the vehicle
 * @param posY The y position of this siren point from the center of the vehicle
 * @param posZ The z position of this siren point from the center of the vehicle
 * @param red The amount of red from 0 to 255
 * @param green The amount of green from 0 to 255
 * @param blue The amount of blue from 0 to 255
 * @param [alpha=255] The alpha of the siren from 0 to 255
 * @param [minAlpha=0] The minimum alpha of the light during day time
 * @param ] unknown
 * @returns Returns true if the siren point was successfully changed on the vehicle, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleSirens
**/
declare function setVehicleSirens(theVehicle: Vehicle, sirenPoint: number, posX: number, posY: number, posZ: number, red: number, green: number, blue: number, alpha?: number, minAlpha?: number, ]: unknown): boolean;

/**
 * This function changes the state of the sirens on the specified vehicle.
 * @param theVehicle The vehicle that will have the sirens set
 * @param sirensOn The state to set the sirens to
 * @returns Returns true if the sirens are set for the specified vehicle, false if the sirens can't be set for the specified vehicle, if the vehicle doesn't have sirens or if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/SetVehicleSirensOn
**/
declare function setVehicleSirensOn(theVehicle: Vehicle, sirensOn: boolean): boolean;

/**
 * This function will set the taxi light on in a taxi (vehicle ID's 420 and 438)
 * @param taxi The vehicle element of the taxi that you wish to turn the light on.
 * @param LightState whether the light is on. True for on, False for off.
 * @returns Returns true if the state was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleTaxiLightOn
**/
declare function setVehicleTaxiLightOn(taxi: Vehicle, LightState: boolean): boolean;

/**
 * This function sets the position of a vehicle's turret, if it has one.
 * This can be used to influence the turret's rotation, so it doesn't follow the camera.
 * Vehicles with turrets include firetrucks and tanks.
 * @param turretVehicle The vehicle whose turret position you want to retrieve. This should be a vehicle with a turret.
 * @param positionX The horizontal position of the turret. In radians
 * @param positionY The vertical position of the turret. In radians
 * @returns Returns a true if a valid vehicle element and valid positions were passed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleTurretPosition
**/
declare function setVehicleTurretPosition(turretVehicle: Vehicle, positionX: number, positionY: number): boolean;

/**
 * This function sets the state of wheels on the vehicle.
 * Internally, no vehicles have more than 4 wheels.
 * If they appear to, they will be duplicating other wheels.
 * @param theVehicle A handle to the vehicle that you wish to change the wheel states of.
 * @param frontLeft A whole number representing the wheel state (-1 for no change)
 * @param [rearLeft=1] A whole number representing the wheel state (-1 for no change)
 * @param [frontRight=1] A whole number representing the wheel state (-1 for no change)
 * @param [rearRight=1] A whole number representing the wheel state (-1 for no change)
 * @returns Returns a boolean value true or false that tells you if it was successful or not.
 * @see https://wiki.mtasa.com/wiki/SetVehicleWheelStates
**/
declare function setVehicleWheelStates(theVehicle: Vehicle, frontLeft: number, rearLeft?: number, frontRight?: number, rearRight?: number): boolean;

/**
 * Sets the distance of vehicles LOD.
 * @param vehiclesDistance general distance used for most vehicles, this value is clamped to 0 – 500
 * @param [trainsAndPlanesDistance=vehiclesDistance] distance used for trains and planes, this value is clamped to 0 – 500
 * @param 14 unknown
 * @returns 
 * @see https://wiki.mtasa.com/wiki/SetVehiclesLODDistance
**/
declare function setVehiclesLODDistance(vehiclesDistance: number, trainsAndPlanesDistance?: number, 14: unknown): boolean;

/**
 * This function changes the water color of the GTA world.
 * @param red The red value of the water, from 0 to 255.
 * @param green The green value of the water, from 0 to 255.
 * @param blue The blue value of the water, from 0 to 255.
 * @param [alpha=200] The alpha (visibility) value of the water, from 0 to 255.Defaults to 200 if not declared.
 * @returns Returns true if water color was set correctly, false if invalid values were passed.
 * @see https://wiki.mtasa.com/wiki/SetWaterColor
**/
declare function setWaterColor(red: number, green: number, blue: number, alpha?: number): boolean;

/**
 * Sets the height of some or all the water in the game world.
 * - Note: When the water level is 0, the standard GTA rendering is performed so that water is visible when viewed through translucent surfaces, such as vehicle windows. However, some MTA custom objects placed underwater will appear in front of the water. Setting the water level to any non-zero value (i.e. setWaterLevel(0.001) ) forces alternative rendering and MTA custom objects placed underwater will be drawn correctly.
 * @param level the new Z coordinate of the water surface
 * @param [includeWaterFeatures=true] a boolean indicating whether to also set the level of water features such as ponds and pools.
 * @param [includeWaterElements=true] a boolean indicating whether to also set the level of all water elements.
 * @returns Returns true if successful, false in case of failure.Returns true if successful, false in case of failure (there is no water at the specified coordinates).
 * @see https://wiki.mtasa.com/wiki/SetWaterLevel
**/
declare function setWaterLevel(level: number, includeWaterFeatures?: boolean, includeWaterElements?: boolean): boolean;

/**
 * Sets the world position of a corner point of a water area.
 * - Note: X and Y positions will be changed to an even integer. i.e. -2, 0, 2, 4 etc.
 * @param theWater the water element of which to change a vertex.
 * @param vertexIndex the index of the vertex to move. Values range from 1 to 4 for water quads, and 1 to 3 for triangles.
 * @param x the X coordinate to set for the vertex.
 * @param y the Y coordinate to set for the vertex.
 * @param z the Z coordinate to set for the vertex.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetWaterVertexPosition
**/
declare function setWaterVertexPosition(theWater: Water, vertexIndex: number, x: number, y: number, z: number): boolean;

/**
 * This function sets the wave height to the desired value, the default is 0.
 * @param height A float between 0 and 100.
 * @returns Returns a boolean value true or false that tells you if it was successful or not.
 * @see https://wiki.mtasa.com/wiki/SetWaveHeight
**/
declare function setWaveHeight(height: number): boolean;

// TODO: SetWeaponProperty
/**
 * @see https://wiki.mtasa.com/wiki/SetWeaponProperty
**/

/**
 * This function sets the current weather to the given valid value.
 * To change the weather gradually, see setWeatherBlended.
 * @param weatherID The ID of new weather.Valid values are 0 to 255 inclusive.
 * @returns Returns true if the weather was set succesfully, false if an invalid weatherID was specified.
 * @see https://wiki.mtasa.com/wiki/SetWeather
**/
declare function setWeather(weatherID: number): boolean;

/**
 * This function will change the current weather to another in a smooth manner, over the period of 1-2 in-game hours (unlike setWeather, which sets a new weather instantly).
 * To ensure this transition performs as expected, you should not call this function until getWeather indicates that no transition is already being done.
 * @param weatherID The ID of the weather state you wish to set.Valid values are 0 to 255 inclusive.
 * @returns Returns true if successful, false if an invalid weatherID is passed.
 * @see https://wiki.mtasa.com/wiki/SetWeatherBlended
**/
declare function setWeatherBlended(weatherID: number): boolean;

/**
 * This function changes the wind velocity.
 * The wind shakes the vegetation and makes particles fly in a direction.
 * The intensity and direction of the effect deppends of the wind velocity in each axis.
 * @param velocityX The velocity of the wind along the x axis.
 * @param velocityY The velocity of the wind along the y axis.
 * @param velocityZ The velocity of the wind along the z axis.
 * @returns Returns true if successful, false if bad arguments were passed.
 * @see https://wiki.mtasa.com/wiki/SetWindVelocity
**/
declare function setWindVelocity(velocityX: number, velocityY: number, velocityZ: number): boolean;

/**
 * Calculates the sha256 hash of the specified string.
 * - Tip: * The sha module and this function may conflict with eachother, if you use this function uninstall the module!
 * * This function returns an uppercase string, so make sure you string.upper() anything else you are checking against that has been sha256'd elsewhere.
 * @param str the string to hash.
 * @returns Returns the sha256 hash of the input string if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/Sha256
**/
declare function sha256(str: string): string;

/**
 * This function splits a string into substrings.
 * You specify a character that will act as a separating character; this will determine where to split the sub-strings.
 * For example, it can split the string "Hello World" into two strings containing the two words, by spliting using a space as a separator.
 * - Note: You can use the function gettok to retrieve a single token from the string at a specific index.
 * This may be faster for one-off lookups, but considerably slower if you are going to check each token in a long string.
 * @param stringToSplit unknown
 * @param int unknown
 * @param ) unknown
 * @returns Returns a table of substrings split from the original string if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/Split
**/
declare function split(stringToSplit: string, int: string, ): unknown): object;

/**
 * This will allow you to stop an object that is currently moving.
 * @param theobject the object whose movement you wish to stop
 * @returns 
 * @see https://wiki.mtasa.com/wiki/StopObject
**/
declare function stopObject(theobject: Object): boolean;

/**
 * This function subtracts money from a player's current money amount.
 * - Note: Using this function client side (not recommended) will not change a players money server side.
 * @param amount an integer number specifying the amount of money to take from the player.
 * @returns Returns true if the money was taken, or false if invalid parameters were passed.
 * @see https://wiki.mtasa.com/wiki/TakePlayerMoney
**/
declare function takePlayerMoney(amount: number): boolean;

/**
 * This function converts a single value (preferably a Lua table) into a JSON encoded string.
 * You can use this to store the data and then load it again using fromJSON.
 * @param value unknown
 * @param [compact=false] a boolean representing whether the string will contain whitespaces.To remove whitespaces from JSON string, use true.String will contain whitespaces per default.
 * @param [prettyType=none] a type string from below
 * @returns Returns a JSON formatted string.
 * @see https://wiki.mtasa.com/wiki/ToJSON
**/
declare function toJSON(value: unknown, compact?: boolean, prettyType?: string): string;

/**
 * This function retrieves the hex number of a specified color, useful for the dx functions.
 * Added server-side.
 * @param red The amount of red in the color (0-255).
 * @param green The amount of green in the color (0-255).
 * @param blue The amount of blue in the color (0-255).
 * @param [alpha=255] The amount of alpha in the color (0-255).
 * @returns Returns a single value representing the color.
 * @see https://wiki.mtasa.com/wiki/Tocolor
**/
declare function tocolor(red: number, green: number, blue: number, alpha?: number): number;

/**
 * This function will trigger a named event on a specific element in the element tree.
 * See event system for more information on how the event system works.
 * You can use the value returned from this function to determine if the event was cancelled by one of the event handlers.
 * You should determine what your response (if any) to this should be based on the event's purpose.
 * Generally, cancelling an event should prevent any further code being run that is dependent on whatever triggered that event.
 * For example, if you have an onFlagCapture event, cancelling it would be expected to prevent the flag being able to be captured.
 * Similarly, if you have onPlayerKill as an event you trigger, canceling it would either be expected to prevent the player being killed from dying or at least prevent the player from getting a score for it.
 * - Note: You should avoid triggering events on the root element unless you really need to. Doing this triggers the event on every element in the element tree, which is potentially very CPU intensive. Use as specific (i.e. low down the tree) element as you can.
 * - Note: See Event Source Element for a descriptive visualization of the event system handling an event trigger.
 * @param eventName The name of the event you wish to trigger
 * @param baseElement The element you wish to trigger the event on. See event system for information on how this works.
 * @param argument1 The first argument that the event handler expects should be added after the baseElement variable.
 * @param ] unknown
 * @returns 
 * @see https://wiki.mtasa.com/wiki/TriggerEvent
**/
declare function triggerEvent(eventName: string, baseElement: Element, argument1: unknown, ]: unknown): boolean;

/**
 * Returns the codepoints for the i-th through j-th character of the string passed.
 * @param input A string character sequence
 * @param [i=1] An integer representing the beginning position.
 * @param [j=1] An integer representing the ending position.
 * @returns Returns a sequence of integer values from the original string if successful, nil otherwise.
 * @see https://wiki.mtasa.com/wiki/Utf8.byte
**/
declare function utf8.byte(input: string, i?: number, j?: number): [number, , ];

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
 * The function returns the string of the specified UTF code.
 * @param characterCode The UTF code, to get the string of.
 * @returns Returns a string if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/UtfChar
**/
declare function utfChar(characterCode: number): string;

/**
 * The function returns the UTF codes of the given string.
 * @param theString The string to get the UTF code of.
 * @returns Returns an int if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/UtfCode
**/
declare function utfCode(theString: string): number;

/**
 * The function gets the real length of a string, in characters.
 * @param theString The string to get the length of.
 * @returns Returns an int if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/UtfLen
**/
declare function utfLen(theString: string): number;

/**
 * The function returns the byte position at specified character position.
 * @param theString The string.
 * @param position An int with the specified charachter position.
 * @returns Returns an int if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/UtfSeek
**/
declare function utfSeek(theString: string, position: number): number;

/**
 * The function returns a sub string, from the specified positions on a character.
 * @param theString The string.
 * @param Start An int with the start position.
 * @param End An int with the end position.
 * @returns Returns a string if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/UtfSub
**/
declare function utfSub(theString: string, Start: number, End: number): string;

/**
 * This function is used to warp or force a ped into a vehicle.
 * There are no animations involved when this happens.
 * Available client side from 1.3.1 (It will only work with client side vehicles and peds)
 * Attention: If you used setElementPosition to spawn the ped/player, this function will not work and returns false.
 * @param thePed The ped which you wish to force inside the vehicle
 * @param theVehicle The vehicle you wish to force the ped into
 * @param [seat=0] An integer representing the seat ID.
 * @returns Returns true if the operation is successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/WarpPedIntoVehicle
**/
declare function warpPedIntoVehicle(thePed: Ped, theVehicle: Vehicle, seat?: number): boolean;

/**
 * This function checks if the last completed event was cancelled.
 * This is mainly useful for custom events created by scripts.
 * Events can be cancelled using cancelEvent, this indicates that the resource which triggered the event should do whatever it can to reverse any changes made by whatever caused the event.
 * See triggerEvent for a more detailed explanation of this.
 * @param wasEventCancelled unknown
 * @returns Returns true if the event was cancelled, false if it wasn't or doesn't exist.
 * @see https://wiki.mtasa.com/wiki/WasEventCancelled
**/
declare function wasEventCancelled(wasEventCancelled: boolean): [];

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
 * This function will return the current sky color.
 * - Note: The server can only return the sky color if it has actually been set by script.
 * @param , unknown
 * @param , unknown
 * @param , unknown
 * @param , unknown
 * @param , unknown
 * @param getSkyGradient unknown
 * @returns Returns 6 ints, of which the first 3 represent the sky's "top" color, (in RGB) and the last 3 represent the bottom colors.
 * @see https://wiki.mtasa.com/wiki/GetSkyGradient
**/
declare function getSkyGradient(,: number, ,: number, ,: number, ,: number, ,: number, getSkyGradient: number): [number, number, number, number, number];

/**
 * Sets a state of a specified player's control, as if they pressed or released it.
 * @param thePlayer The player you wish to set the control state of.
 * @param control The control that you want to set the state of. See control names for a list of possible controls.
 * @param state A boolean value representing whether or not the key will be set to pressed or not.
 * @returns Returns true if the control state was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetControlState
**/
declare function setControlState(thePlayer: Player, control: string, state: boolean): boolean;

/**
 * This function is used to simulate the player using a pickup
 * @param thePickup The pickup element to be picked up/used.
 * @param thePlayer The player to use the pickup.
 * @returns 
 * @see https://wiki.mtasa.com/wiki/UsePickup
**/
declare function usePickup(thePickup: Pickup, thePlayer: Player): boolean;
