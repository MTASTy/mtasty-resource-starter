/**
 * This function will attach a scripting function (handler) to a console command, so that whenever a player or administrator uses the command the function is called.
 * Multiple command handlers can be attached to a single command, and they will be called in the order that the handlers were attached.
 * Equally, multiple commands can be handled by a single function, and the commandName parameter used to decide the course of action.
 * For users, a command is in the format:
 * commandName argument1 argument2
 * This can be triggered from the player's console or directly from the chat box by prefixing the message with a forward slash (/). For server side handlers, the server admin is also able to trigger these directly from the server's console in the same way as they are triggered from a player's console.
 * Important note: Do NOT use the same name for your handler function as the command name, as this can lead to confusion if multiple handler functions are used. Use a name that describes your handler's purpose more specifically.
 * - Note: You cannot use "check", "list" or "test" as a command name.
 * @param commandName This is the name of the command you wish to attach a handler to. This is what must be typed into the console to trigger the function.
 * @param handlerFunction This is the function that you want the command to trigger, which has to be defined before you add the handler. This function can take commandName parameter, followed by as many parameters as you expect after your command (see below). These are all optional.
 * @param [caseSensitive=true] Specifies if the command handler will ignore the case for this command name.
 * @returns Returns true if the command handler was added successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/AddCommandHandler
**/
declare function addCommandHandler(commandName: string, handlerFunction: (commandName: string, ...args: string[]) => void, caseSensitive?: boolean): boolean;

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
 * This function will add an event handler.
 * An event handler is a function that will be called when the event it's attached to is triggered.
 * See event system for more information on how the event system works.
 * Event handlers are functions that are called when a particular event happens.
 * Each event specifies a specific set of variables that are passed to the event handler and can be read by your function.
 * The following global variables are available for use in handler functions:
 * It is important to remember that events pass up and down the element tree.
 * An event triggered on the root element is triggered on every element in the tree.
 * An event triggered on any other element is triggered on its ancestors (its parent element and its parent's parent etc) and its children, grandchildren and great-grandchildren.
 * You can use the getPropagated argument to specify if you wish your handler to receive events that have propagated up or down the tree.
 * The order in which event handlers are triggered is undefined, you should not rely on one event handler being executed before another.
 * Important note: Do NOT use the same name for your handler function as the event name, as this can lead to confusion if multiple handler functions are used.
 * New feature: 3,1.0,*eventName: the name of the event which triggered the handler function.
 * - Note: See Script security for tips on preventing cheaters when using events and element data
 * - Note: See Event Source Element for a descriptive visualization of the event system handling an event trigger.
 * @param eventName The name of the event you want to attach the handler function to.
 * @param attachedTo The element you wish to attach the handler to. The handler will only be called when the event it is attached to is triggered for this element, or one of its children. Often, this can be the root element (meaning the handler will be called when the event is triggered for any element).
 * @param handlerFunction The handler function you wish to call when the event is triggered. This function will be passed all of the event's parameters as arguments, but it isn't required that it takes all of them.
 * @param [getPropagated=true] A boolean representing whether the handler will be triggered if the event was propagated down or up the element tree (starting from the source), and not triggered directly on attachedTo (that is, handlers attached with this argument set to false will only be triggered if source == this).
 * @param [priority=normal] unknown
 * @returns Returns true if the event handler was attached successfully. Returns false if the specified event could not be found or any parameters were invalid.
 * @see https://wiki.mtasa.com/wiki/AddEventHandler
**/
declare function addEventHandler(eventName: string, attachedTo: Element, handlerFunction: Function, getPropagated?: boolean, priority?: string): boolean;

/**
 * This function adds an upgrade to a vehicle, e.g. nitrous, hydraulics.
 * @param theVehicle The element representing the vehicle you wish to add the upgrade to.
 * @param upgrade The id of the upgrade you wish to add. (1000 to 1193), see Vehicle Upgrades
 * @returns Returns true if the upgrade was successfully added to the vehicle, otherwise false.
 * @see https://wiki.mtasa.com/wiki/AddVehicleUpgrade
**/
declare function addVehicleUpgrade(theVehicle: Vehicle, upgrade: number): boolean;

/**
 * Gets whether the traffic lights are currently locked or not.
 * If the lights are locked, it means they won't change unless you do setTrafficLightState.
 * @returns Returns true the traffic lights are currently locked, false otherwise.
 * @see https://wiki.mtasa.com/wiki/AreTrafficLightsLocked
**/
declare function areTrafficLightsLocked(): boolean;

/**
 * This function is used to find out whether the lights of the vehicle are on.
 * - Note: *This is different to getVehicleOverrideLights because this function will return true if the lights were turned on by natural causes.
 * * Unless setVehicleOverrideLights is used, vehicles always automatically disable their lights between 06:00 and 07:00 and enable them between 20:00 and 21:00.
 * @param theVehicle the vehicle you wish to retrieve the lights state of.
 * @returns Returns true if the lights are on, false otherwise.
 * @see https://wiki.mtasa.com/wiki/AreVehicleLightsOn
**/
declare function areVehicleLightsOn(theVehicle: Vehicle): boolean;





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

// TODO: Fix it
/**
 * Binds a player's key to a handler function or command, which will be called when the key is pressed.
 * @param thePlayer The player you wish to bind the key of.
 * @param key The key or control you wish to bind to the command. See key names for a list of possible keys.
 * @param keyState A string that has one of the following values
 * @param handlerFunction The function that will be triggered when the player's key is pressed. This function should have the form
 * @param arguments Any arguments you may want to pass to the function when the key is pressed by the user.Any number of arguments of can be specified, each being passed to the designated function.You may not pass functions.
 * @param ] unknown
 * @returns Returns true if the key was bound, false otherwise.
 * @see https://wiki.mtasa.com/wiki/BindKey
**/
declare function bindKey(thePlayer: Player, key: string, keyState: string, handlerFunction: Function, arguments: unknown, ]: unknown): boolean;

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
 * This function breaks a specific object.
 * - Note: Only breakable objects can be broken.
 * @param theObject an object element
 * @returns 
 * @see https://wiki.mtasa.com/wiki/BreakObject
**/
declare function breakObject(theObject: Object): boolean;

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
 * This function checks if the given ped can fall off bikes.
 * @param thePed the ped you want to check.
 * @returns Returns true if the ped can be knocked off bikes, false if he cannot or an invalid element was passed.
 * @see https://wiki.mtasa.com/wiki/CanPedBeKnockedOffBike
**/
declare function canPedBeKnockedOffBike(thePed: Ped): boolean;

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
 * This function clears the chatbox.
 * It does not clear the console (F8)

 * @returns Returns true if the player's chat was cleared successfully, false otherwise.Returns true if the player's chat was cleared successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ClearChatBox
**/
declare function clearChatBox(): boolean;

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
 * New items: 3.0140,1.4,Creates an effect on specified position.
 * - Note: Not all effects support rotation (e.g. the "fire" - effect doesn't).
 * - Note: All effects have their own duration.
 * @param name A string contains effect name.
 * @param x A floating point number representing the X coordinate on the map.
 * @param y A floating point number representing the Y coordinate on the map.
 * @param z A floating point number representing the Z coordinate on the map.
 * @param rX A floating point number representing the rotation about the X axis in degrees.
 * @param rY A floating point number representing the rotation about the Y axis in degrees.
 * @param rZ A floating point number representing the rotation about the Z axis in degrees.
 * @param [drawDistance=0] A floating point number between 1 and 8191 which represents the draw distance of the effect, or 0 to use the default draw distance.
 * @param [soundEnable=false] to enable the sound of the effect.
 * @returns Returns the effect element if creation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CreateEffect
**/
declare function createEffect(name: string, x: number, y: number, z: number, rX: number, rY: number, rZ: number, drawDistance?: number, soundEnable?: boolean): Effect;



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
 * Creates a patch of fire that will spread a bit and die out after a while.
 * Because it's a client side only function, other players won't see it, so custom events or custom objects will be needed to make a fire visible to some players.
 * @param x unknown
 * @param y unknown
 * @param z unknown
 * @param [size=1] a float value indicating the size of the initial patch of fire.It will also make the fire to stay alive more or less time.
 * @param ] unknown
 * @returns Returns true if successful, false if bad arguments were passed or the limit of active fires was reached. There can be a maximum of 60 active fires.
 * @see https://wiki.mtasa.com/wiki/CreateFire
**/
declare function createFire(x: number, y: number, z: number, size?: number, ]: unknown): boolean;

/**
 * light]] in the world.
 * - Note: * The direction of the light only has any effect if the light type is spot light.
 * * One light will only apply illumination effects to peds, players, wheels and number plates (like a emergency vehicle siren light does).
 * * Two or more lights will apply illumination effects to everything (excluding objects) that is in range of, at least, two of them.
 * @param lightType An integer representing the type of light to create.
 * @param posX A floating point number representing the X coordinate on the map.
 * @param posY A floating point number representing the Y coordinate on the map.
 * @param posZ A floating point number representing the Z coordinate on the map.
 * @param [radius=3] A floating point number representing the radius of the light.
 * @param [r=255] An integer number representing the amount of red to use in the colouring of the light (0 - 255).
 * @param [g=0] An integer number representing the amount of green to use in the colouring of the light (0 - 255).
 * @param [b=0] An integer number representing the amount of blue to use in the colouring of the light (0 - 255).
 * @param [dirX=0] A floating point number representing the light direction's X coordinate on the map.
 * @param [dirY=0] A floating point number representing the light direction's Y coordinate on the map.
 * @param [dirZ=0] A floating point number representing the light direction's Z coordinate on the map.
 * @param [createsShadow=false] A boolean representing whether or not does the light cast shadows.
 * @returns Returns the light element if creation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CreateLight
**/
declare function createLight(lightType: number, posX: number, posY: number, posZ: number, radius?: number, r?: number, g?: number, b?: number, dirX?: number, dirY?: number, dirZ?: number, createsShadow?: boolean): Light;

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
 * This function creates a projectile of the specified type on the specified coordinates.
 * - Note: *Model argument is not synchronized between clients. Clients differs from local player see always standard projectile model.
 * *Target argument can only be defined as a player or another projectile.
 * @param creator The element representing creator of the projectile. In case you want the projectile to be synced for everybody creator must be the local player or his vehicle.
 * @param weaponType int representing the projectile weaponType (characteristics). Valid IDs are
 * @param posX unknown
 * @param posY unknown
 * @param posZ unknown
 * @param [force=1] float representing the starting force for throwable projectiles.
 * @param , unknown
 * @param [target=nil] element target used for heat seeking rockets.
 * @param rotX unknown
 * @param rotY unknown
 * @param rotZ unknown
 * @param velX unknown
 * @param velY unknown
 * @param velZ unknown
 * @param model Integer representing the projectile's model, uses default model for weaponType if not specified.
 * @returns Returns a projectile element if projectile creation was successful. Returns false if unable to create a projectile (wrong weapon ID or projectiles limit was reached).
 * @see https://wiki.mtasa.com/wiki/CreateProjectile
**/
declare function createProjectile(creator: Element, weaponType: number, posX: number, posY: number, posZ: number, force?: number, ,: unknown, target?: Element, rotX: number, rotY: number, rotZ: number, velX: number, velY: number, velZ: number, model: number): Projectile;

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
 * Creates a SWAT rope like that of the rope in single player used by SWAT Teams abseiling from the Police Maverick.
 * @param fx unknown
 * @param fy unknown
 * @param fZ unknown
 * @param duration the amount in miliseconds the rope will be there before falling to the ground.
 * @returns 
 * @see https://wiki.mtasa.com/wiki/CreateSWATRope
**/
declare function createSWATRope(fx: number, fy: number, fZ: number, duration: number): boolean;

/**
 * searchlight]] is a spotlight which looks like the one available in the Police Maverick.
 * - Tip: You should only use this function when you are sure that the searchlight will point upwards or downwards. Using them horizontally or almost horizontally will generate visual artifacts in the searchlight.
 * @param startX the X coordinate where the searchlight light cone will start.
 * @param startY the Y coordinate where the searchlight light cone will start.
 * @param startZ the Z coordinate where the searchlight light cone will start.
 * @param endX the X coordinate of the direction where the searchlight will point to.
 * @param endY the Y coordinate of the direction where the searchlight will point to.
 * @param endZ the Z coordinate of the direction where the searchlight will point to.
 * @param startRadius the radius of the searchlight's light cone in its beginning.
 * @param endRadius the radius of the searchlight's light cone in its end.
 * @param [renderSpot=true] if true, the searchlight will lighten the surface where it ends.
 * @returns If every argument is correct and the limit of 1000 searchlights has not been reached, this function returns a searchlight element. Otherwise, it returns false.
 * @see https://wiki.mtasa.com/wiki/CreateSearchLight
**/
declare function createSearchLight(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, startRadius: number, endRadius: number, renderSpot?: boolean): Searchlight;

/**
 * This functions creates a notification ballon on the desktop.
 * - Note: MTA won't show any tray notifications if the MTA window is focused, because there is no reason to show tray notifications if you are ingame. If you want to test this function you should use a Timer and switch to your desktop.
 * - Note: You can only show a tray notification every 30 seconds.
 * @param notificationText The text to send in the notification.
 * @param [iconType=default] The notification icon type. Possible values are
 * @param [useSound=true] A boolean value indicating whether or not to play a sound when receiving the notification.
 * @returns Returns true if the notification is correctly created, false otherwise.
 * @see https://wiki.mtasa.com/wiki/CreateTrayNotification
**/
declare function createTrayNotification(notificationText: string, iconType?: string, useSound?: boolean): boolean;

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
 * Creates a custom weapon that can fire bullets.
 * Do not confuse this with player held weapons.
 * - Tip: Some weapons (such as the minigun) visually point to a slightly different direction to where they fire. To adjust this, use setWeaponProperty with 'fire_rotation'. See the example below.
 * @param theType The weapon type which can be
 * @param x The x position to create the weapon.
 * @param y The y position to create the weapon.
 * @param z The z position to create the weapon.
 * @returns Returns a custom weapon element, which represents a weapon floating at that position.
 * @see https://wiki.mtasa.com/wiki/CreateWeapon
**/
declare function createWeapon(theType: string, x: number, y: number, z: number): Weapon;

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

/**
 * This function can be used to detonate a players satchels.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DetonateSatchels
**/
declare function detonateSatchels(): boolean;

/**
 * New items: 3.0140,1.4,This function ensures the requested resource file is correct and then triggers onClientFileDownloadComplete. If the file has been previously downloaded and the CRC matches, the file will not be downloaded again but onClientFileDownloadComplete will still run. The file should also be included in the resource meta.xml with the download attribute set to "false", see meta.xml for more details.
 * - Tip: If you are only using downloadFile to download mod files after other resources, then do not use downloadFile, and instead set '<download_priority_group>-1</download_priority_group>' in the resource meta.xml
 * - Note: This function may cause performance issues with client and/or server.
 * - Tip: Avoid using fileExists before calling downloadFile. Always call downloadFile and handle the result in onClientFileDownloadComplete
 * @param fileName A string referencing the name of the file to download
 * @returns Returns true if file download has been queued, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DownloadFile
**/
declare function downloadFile(fileName: string): boolean;

/**
 * This function converts pixels from one format to another.
 * @param pixels The pixels to convert the format of
 * @param newFormat The new format required ('plain' or 'png' or 'jpeg')
 * @param [quality=80] The quality of the returned pixels if the new format is 'jpeg'
 * @returns Returns a copy of the pixels in the new format, or false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/DxConvertPixels
**/
declare function dxConvertPixels(pixels: string, newFormat: string, quality?: number): string;

/**
 * This function creates a DX font element that can be used in dxDrawText.
 * Successful font creation is not guaranteed, and may fail due to hardware or memory limitations.
 * To see if creation is likely to fail, use dxGetStatus.
 * (When VideoMemoryFreeForMTA is zero, failure is guaranteed.)
 * - Note: The size can't be less than 5 or more than 150
 * @param filepath the name of the file containing the font
 * @param [size=9] size of the font
 * @param [bold=false] flag to indicate if the font should be bold
 * @param [quality=proof] the font quality
 * @returns Returns a DX font element if successful, false if invalid arguments were passed to the function, or there is insufficient resources available. You should always check to see if this function has returned false.
 * @see https://wiki.mtasa.com/wiki/DxCreateFont
**/
declare function dxCreateFont(filepath: string, size?: number, bold?: boolean, quality?: string): Element;

/**
 * This function creates a render target element, which is a special type of texture that can be drawn on with the dx functions.
 * Successful render target creation is not guaranteed, and may fail due to hardware or memory limitations.
 * To see if creation is likely to fail, use dxGetStatus.
 * (When VideoMemoryFreeForMTA is zero, failure is guaranteed.)
 * - Tip: Use dxSetBlendMode to get better quality
 * - Tip: It is highly recommended that dxSetTestMode is used when writing and testing scripts using dxCreateRenderTarget.
 * - Note: Render targets are usually cleared when the player minimizes MTA (i.e. alt-tab). See onClientRestore for details on when to restore any fixed content.
 * @param width The width of the texture in pixels.
 * @param height The height of the texture in pixels.
 * @param [withAlpha=false] The render target will be created with an alpha channel. 'false' will turn images' alpha channels to black color
 * @returns Returns a texture element if successful, false if the system is unable to create a render target. You should always check to see if this function has returned false.
 * @see https://wiki.mtasa.com/wiki/DxCreateRenderTarget
**/
declare function dxCreateRenderTarget(width: number, height: number, withAlpha?: boolean): Element;

/**
 * This function creates a screen source, which is a special type of texture that contains the screen as rendered by GTA
 * Note that successful screen source creation is not guaranteed, and may fail due to hardware or memory limitations.
 * You should always check to see if this function has returned false.
 * @param width The width of the texture in pixels.
 * @param height The height of the texture in pixels.
 * @returns Returns a texture element if successful, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/DxCreateScreenSource
**/
declare function dxCreateScreenSource(width: number, height: number): Element;

/**
 * This function creates a shader element that can be used in the dxDraw functions.
 * Successful shader creation is not guaranteed unless the Effect File contains a fallback technique which will work on every PC in the universe.
 * It is highly recommended that dxSetTestMode is used when writing and testing scripts using dxCreateShader.
 * @param filepath unknown
 * @param raw_data unknown
 * @param [priority=0] If more than one shader is matched to a world texture, the shader with the highest priority will be used. If there is more than one shader with the same highest priority, the most recently created shader is used.
 * @param [maxDistance=0] If non-zero, the shader will be applied to textures nearer than maxDistance only. This can speed up rendering, but (to look good) may require the shader to fade out it's own effect as the texture reaches maxDistance.
 * @param [layered=false] When set to true, the shader will be drawn in a separate render pass. Several layered shaders can be drawn on the same world texture. (To avoid Z fighting artifacts, you may have to add DepthBias -0.0002; to the technique pass, but this might cause visual artifacts when applied on vehicles)
 * @param [elementTypes=world,vehicle,object,other] A comma seperated list of element types to restrict this shader to. Valid element types are
 * @returns element: A shader element if successful, false if invalid arguments were passed to the function. You should always check to see if this function has returned false. Also return string: The name of the technique that will be used.
 * @see https://wiki.mtasa.com/wiki/DxCreateShader
**/
declare function dxCreateShader(filepath: string, raw_data: string, priority?: number, maxDistance?: number, layered?: boolean, elementTypes?: string): [Element, string] | [false];

/**
 * This function creates a texture element that can be used in the dxDraw functions.
 * It is possible to use dxCreateTexture to load cubemaps and volume textures, but these will only be useable as inputs for a shader.
 * The Microsoft utility DxTex can view and change cubemaps and volume textures.
 * DxTex can also convert standard textures into DXT1/3/5 compressed .dds which should reduce file sizes.
 * Important note: It seems like dxCreateTexture uses both VRAM and RAM (more of RAM), so, if you want to have big render targets (on which you don't draw every frame), this is a good solution using dxSetTexturePixels.
 * - Note: The times shown at the right of the page are only the time needed to add the thing to the draw queue, its not the actual time it takes to draw them.
 * @param width Desired width, preferably power of two (16, 32, 64 etc.), maximum is 16384
 * @param height Desired height, preferably power of two (16, 32, 64 etc.), maximum is 16384
 * @param [textureFormat=argb] A string representing the desired texture format, which can be one of
 * @param [textureEdge=wrap] A string representing the desired texture edge handling, which can be one of
 * @param [textureType=2d] A string representing the desired texture type, which can be one of
 * @param [depth=1] Desired number of slices when creating a volume texture
 * @returns Returns a texture if successful, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/DxCreateTexture
**/
declare function dxCreateTexture(width: number, height: number, textureFormat?: string, textureEdge?: string, textureType?: string, depth?: number): Element;

/**
 * Draws an image on the screen for a single frame.
 * In order for the image to stay visible continuously, you need to call this function with the same parameters on each frame update (see onClientRender).
 * Image files should ideally have dimensions that are a power of two, to prevent possible blurring.
 * <b>Power of two: 2px, 4px, 8px, 16px, 32px, 64px, 128px, 256px, 512px, 1024px...</b>
 * - Tip: Use a texture created with dxCreateTexture to speed up drawing.
 * - Tip: To help prevent edge artifacts when drawing textures, set textureEdge to "clamp" when calling dxCreateTexture
 * @param posX the absolute X coordinate of the top left corner of the image
 * @param posY the absolute Y coordinate of the top left corner of the image
 * @param width the absolute width of the image
 * @param height the absolute height of the image
 * @param image Either a material element or a filepath of the image which is going to be drawn. (.dds images are also supported). Image files should ideally have dimensions that are a power of two, to prevent possible blurring. Use a texture created with dxCreateTexture to speed up drawing.
 * @param [rotation=0] the rotation, in degrees for the image.
 * @param [rotationCenterOffsetX=0] the absolute X offset from the image center for which to rotate the image from.
 * @param [rotationCenterOffsetY=0] the absolute Y offset from the image center for which to rotate the image from.
 * @param [color=tocolor(255,255,255,255)] Tints the image with a value produced by tocolor or hexadecimal number in format
 * @param [postGUI=false] A bool representing whether the image should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxDrawImage
**/
declare function dxDrawImage(posX: number, posY: number, width: number, height: number, image: any, rotation?: number, rotationCenterOffsetX?: number, rotationCenterOffsetY?: number, color?: number, postGUI?: boolean): boolean;

/**
 * Differing from dxDrawImage, this function only draws a part of an image on the screen for a single frame.
 * In order for the image to stay visible continuously, you need to call this function with the same parameters on each frame update (see onClientRender).
 * Image files should ideally have dimensions that are a power of two, to prevent possible blurring.
 * <b>Power of two: 2px, 4px, 8px, 16px, 32px, 64px, 128px, 256px, 512px, 1024px...</b>
 * - Tip: Use a texture created with dxCreateTexture to speed up drawing.
 * - Tip: To help prevent edge artifacts when drawing textures, set textureEdge to "clamp" when calling dxCreateTexture
 * @param posX the absolute X coordinate of the top left corner of the image
 * @param posY the absolute Y coordinate of the top left corner of the image
 * @param width the absolute width of the image
 * @param height the absolute height of the image
 * @param u the absolute X coordinate of the top left corner of the section which should be drawn from image
 * @param v the absolute Y coordinate of the top left corner of the section which should be drawn from image
 * @param usize the absolute width of the image section
 * @param vsize the absolute height of the image section
 * @param image Either a material element or a filepath of the image which is going to be drawn. (.dds images are also supported). Image files should ideally have dimensions that are a power of two, to prevent possible blurring. Use a texture created with dxCreateTexture to speed up drawing.
 * @param [rotation=0] the rotation, in degrees for the image.
 * @param [rotationCenterOffsetX=0] the absolute X offset from the image center for which to rotate the image from.
 * @param [rotationCenterOffsetY=0] the absolute Y offset from the image center for which to rotate the image from.
 * @param [color=white] the color of the image, a value produced by tocolor or hexadecimal number in format
 * @param [postGUI=false] unknown
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxDrawImageSection
**/
declare function dxDrawImageSection(posX: number, posY: number, width: number, height: number, u: number, v: number, usize: number, vsize: number, image: any, rotation?: number, rotationCenterOffsetX?: number, rotationCenterOffsetY?: number, color?: number, postGUI?: boolean): boolean;

/**
 * This function draws a 2D line across the screen - rendered for one frame.
 * This should be used in conjunction with onClientRender in order to display continuously.
 * @param startX An integer representing the absolute start X position of the line, represented by pixels on the screen.
 * @param startY An integer representing the absolute start Y position of the line, represented by pixels on the screen.
 * @param endX An integer representing the absolute end X position of the line, represented by pixels on the screen.
 * @param endY An integer representing the absolute end Y position of the line, represented by pixels on the screen.
 * @param color An integer of the hex color, produced using tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
 * @param [width=1] The width/thickness of the line
 * @param , unknown
 * @param [postGUI=false] A bool representing whether the line should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxDrawLine
**/
declare function dxDrawLine(startX: number, startY: number, endX: number, endY: number, color: number, width?: number, ,: unknown, postGUI?: boolean): boolean;

/**
 * This function draws a 3D line between two points in the 3D world - rendered for one frame.
 * This should be used in conjunction with onClientRender in order to display continuously.
 * @param startX The start X position of the 3D line, representing a coordinate in the GTA world.
 * @param startY The start Y position of the 3D line, representing a coordinate in the GTA world.
 * @param startZ The start Z position of the 3D line, representing a coordinate in the GTA world.
 * @param endX The end X position of the 3D line, representing a coordinate in the GTA world.
 * @param endY The end Y position of the 3D line, representing a coordinate in the GTA world.
 * @param endZ The end Z position of the 3D line, representing a coordinate in the GTA world.
 * @param [color=0xFFFFFFFF] An integer of the hex color, produced using tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
 * @param [width=1] The width/thickness of the line
 * @param , unknown
 * @param [postGUI=false] A bool representing whether the line should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxDrawLine3D
**/
declare function dxDrawLine3D(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, color?: number, width?: number, ,: unknown, postGUI?: boolean): boolean;

/**
 * This function draws a textured 3D line between two points in the 3D world - rendered for one frame.
 * This should be used in conjunction with onClientPreRender in order to display continuously.
 * The 3D line with a large width value effectively becomes a rectangle, so it it possible to construct basic shapes such as boxes with several large width lines and the appropriate values for 'faceToward'.
 * 3D lines are drawn at a particular place in the game processing order, so use onClientPreRender for drawing if you are attaching them to world elements.
 * @param startX unknown
 * @param startY unknown
 * @param startZ unknown
 * @param endX unknown
 * @param endY unknown
 * @param endZ unknown
 * @param material A material to draw the line with.
 * @param width The width/thickness of the line in GTA world units. (This is 1/75th of the width used in dxDrawLine3D)
 * @param [color=white] An integer of the hex color, produced using tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
 * @param [postGUI=false] unknown
 * @param faceTowardX unknown
 * @param faceTowardY unknown
 * @param faceTowardZ unknown
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxDrawMaterialLine3D
**/
declare function dxDrawMaterialLine3D(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, material: Element, width: number, color?: number, postGUI?: boolean, faceTowardX: number, faceTowardY: number, faceTowardZ: number): boolean;

/**
 * This function draws a 2D primitive shape with material applied to it across the screen - rendered for one frame.
 * This should be used in conjunction with onClientRender in order to display continuously.
 * If image file is used, it should ideally have dimensions that are a power of two, to prevent possible blurring.
 * Power of two: 2px, 4px, 8px, 16px, 32px, 64px, 128px, 256px, 512px, 1024px...
 * @param pType Type of primitive to be drawn.
 * @param material unknown
 * @param postGUI A bool representing whether the line should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
 * @param vertice1 unknown
 * @param vertice2 unknown
 * @param ] unknown
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxDrawMaterialPrimitive
**/
declare function dxDrawMaterialPrimitive(pType: unknown, material: any, postGUI: boolean, vertice1: object, vertice2: object, ]: unknown): boolean;

// TODO: DxDrawMaterialPrimitive3D
/**
 * @see https://wiki.mtasa.com/wiki/DxDrawMaterialPrimitive3D
**/

/**
 * This function draws a textured 3D line between two points in the 3D world - rendered for one frame.
 * This should be used in conjunction with onClientPreRender in order to display continuously.
 * The 3D line with a large width value effectively becomes a rectangle, so it it possible to construct basic shapes such as boxes with several large width lines and the appropriate values for 'faceToward'.
 * @param startX unknown
 * @param startY unknown
 * @param startZ unknown
 * @param endX unknown
 * @param endY unknown
 * @param endZ unknown
 * @param u the absolute X coordinate of the top left corner of the section
 * @param v the absolute Y coordinate of the top left corner of the section
 * @param usize the absolute width of the section
 * @param vsize the absolute height of the section
 * @param material A material to draw the line with.
 * @param width The width/thickness of the line in GTA world units. (This is 1/75th of the width used in dxDrawLine3D)
 * @param [color=white] An integer of the hex color, produced using tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
 * @param [postGUI=false] unknown
 * @param faceTowardX unknown
 * @param faceTowardY unknown
 * @param faceTowardZ unknown
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxDrawMaterialSectionLine3D
**/
declare function dxDrawMaterialSectionLine3D(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, u: number, v: number, usize: number, vsize: number, material: Element, width: number, color?: number, postGUI?: boolean, faceTowardX: number, faceTowardY: number, faceTowardZ: number): boolean;

/**
 * This function draws a 2D primitive shape across the screen - rendered for one frame.
 * This should be used in conjunction with onClientRender in order to display continuously.
 * @param pType Type of primitive to be drawn.
 * @param postGUI A bool representing whether the line should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
 * @param vertice1 unknown
 * @param vertice2 unknown
 * @param ] unknown
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxDrawPrimitive
**/
declare function dxDrawPrimitive(pType: string, postGUI: boolean, vertice1: object, vertice2: object, ]: unknown): boolean;

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

/**
 * This function draws a 2D rectangle across the screen - rendered for one frame.
 * This should be used in conjunction with onClientRender in order to display continuously.
 * @param startX An float representing the absolute origin X position of the rectangle, represented by pixels on the screen.
 * @param startY An float representing the absolute origin Y position of the rectangle, represented by pixels on the screen.
 * @param width An float representing the width of the rectangle, drawn in a right direction from the origin.
 * @param height An float representing the height of the rectangle, drawn in a downwards direction from the origin.
 * @param [color=white] the hex color of the rectangle, produced using tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
 * @param [postGUI=false] A bool representing whether the line should be drawn on top of or behind any ingame GUI.
 * @param [subPixelPositioning=false] A bool representing whether the rectangle can be positioned sub-pixel-ly.
 * @returns Returns true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxDrawRectangle
**/
declare function dxDrawRectangle(startX: number, startY: number, width: number, height: number, color?: number, postGUI?: boolean, subPixelPositioning?: boolean): boolean;

/**
 * Draws a string of text on the screen for one frame.
 * In order for the text to stay visible continuously, you need to call this function with the same parameters on each frame update (see onClientRender).
 * @param text the text to draw
 * @param leftX the absolute X coordinate of the top left corner of the text
 * @param topY the absolute Y coordinate of the top left corner of the text
 * @param [rightX=leftX] the absolute X coordinate of the right side of the text bounding box. Used for text aligning, clipping and word breaking.
 * @param [bottomY=topY] the absolute Y coordinate of the bottom side of the text bounding box. Used for text aligning, clipping and word breaking.
 * @param [color=white] the color of the text, a value produced by tocolor or 0xAARRGGBB (AA = alpha, RR = red, GG = green, BB = blue).
 * @param [scaleXY=1] unknown
 * @param [ unknown
 * @param [scaleY=1] unknown
 * @param ] unknown
 * @param [font=default] Either a custom DX font element or the name of a built-in DX font
 * @param [alignX=left] horizontal alignment of the text within the bounding box. Can be "left", "center" or "right".
 * @param [alignY=top] vertical alignment of the text within the bounding box. Can be "top", "center" or "bottom".
 * @param [clip=false] if set to true, the parts of the text that don't fit within the bounding box will be cut off.
 * @param [wordBreak=false] if set to true, the text will wrap to a new line whenever it reaches the right side of the bounding box. If false, the text will always be completely on one line.
 * @param [postGUI=false] A bool representing whether the text should be drawn on top of or behind any ingame GUI (rendered by CEGUI).
 * @param [colorCoded=false] Set to true to enable embedded #FFFFFF color codes. Note
 * @param [subPixelPositioning=false] A bool representing whether the text can be positioned sub-pixel-ly. Looks nicer for moving/scaling animations.
 * @param [fRotation=0] Rotation'''
 * @param , unknown
 * @param [fRotationCenterX=0] Rotation Origin X'''
 * @param , unknown
 * @param [fRotationCenterY=0] Rotation Origin Y'''
 * @param ] unknown
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxDrawText
**/
declare function dxDrawText(text: string, leftX: number, topY: number, rightX?: number, bottomY?: number, color?: number, scaleXY?: number, [: unknown, scaleY?: number, ]: unknown, font?: any, alignX?: string, alignY?: string, clip?: boolean, wordBreak?: boolean, postGUI?: boolean, colorCoded?: boolean, subPixelPositioning?: boolean, fRotation?: number, ,: unknown, fRotationCenterX?: number, ,: unknown, fRotationCenterY?: number, ]: unknown): boolean;

/**
 * This function returns the current blend mode for the dxDraw functions.
 * The blend mode is set using dxSetBlendMode
 * @returns Returns the current blend mode, which can be one of:
 * @see https://wiki.mtasa.com/wiki/DxGetBlendMode
**/
declare function dxGetBlendMode(): string;

/**
 * This function retrieves the theoretical height of a certain piece of text, if it were to be drawn using dxDrawText.
 * - Note: The returned height will be in logical units which are 1.75 times the actual pixel height.
 * @param [scale=1] The size of the text.
 * @param [font=default] Either a custom DX font element or the name of a built-in dx font
 * @returns Returns an integer of the height of the text.
 * @see https://wiki.mtasa.com/wiki/DxGetFontHeight
**/
declare function dxGetFontHeight(scale?: number, font?: any): number;

/**
 * This gets the dimensions of the supplied material element.
 * @param material The material element whose size is to be gotten
 * @returns Returns two ints representing the width and height in pixels of the material, or false if an invalid parameter was passed to the function. If the material is a volume texture, this function will return three ints representing the width, height and depth.
 * @see https://wiki.mtasa.com/wiki/DxGetMaterialSize
**/
declare function dxGetMaterialSize(material: Element): [number, number];

/**
 * This function gets the color of a single pixel from pixels contained in a string.
 * It only works with 'plain' format pixels.
 * @param pixels The pixels to use
 * @param x The X coordinate for the pixel
 * @param y The Y coordinate for the pixel
 * @returns Returns 4 ints representing the rgba color value of the pixel if succesful, or false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/DxGetPixelColor
**/
declare function dxGetPixelColor(pixels: string, x: number, y: number): [number, number, number, number];

/**
 * This function returns the format of pixels contained in a string.
 * @param pixels The pixels to get the format of
 * @returns Returns the format of the pixels if successful ('plain' or 'png' or 'jpeg'), false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/DxGetPixelsFormat
**/
declare function dxGetPixelsFormat(pixels: string): string;

/**
 * This function gets the dimensions of pixels contained in a string.
 * It works with all pixel formats.
 * @param pixels The pixels to get the dimensions of
 * @returns Returns width and height of the pixels if successful, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/DxGetPixelsSize
**/
declare function dxGetPixelsSize(pixels: string): [number, number];

/**
 * This function gets information about various internal datum
 * @param dxGetStatus unknown
 * @returns Returns a table with the following entries: *SettingHighDetailVehicles: High detail vehicles setting (true/false).
 * @see https://wiki.mtasa.com/wiki/DxGetStatus
**/
declare function dxGetStatus(dxGetStatus: object): [];

/**
 * This function retrieves the theoretical width of a certain piece of text, if it were to be drawn using dxDrawText.
 * NOTE: This function is relative to the client's screen resolution.
 * @param text A string representing the text for which you wish to retrieve with width for.
 * @param [scale=1] The size of the text.
 * @param [font=default] Either a custom DX font element or the name of a built-in dx font
 * @param [bColorCoded=false] Should we exclude color codes from the width?(false will include the hex in the length)
 * @returns Returns the float of the width of the text.
 * @see https://wiki.mtasa.com/wiki/DxGetTextWidth
**/
declare function dxGetTextWidth(text: string, scale?: number, font?: any, bColorCoded?: boolean): number;

/**
 * This function fetches the pixels from a texture element.
 * It can be used with a standard texture, render target or screen source.
 * Important note: dxGetTexturePixels will not work on a screen source or render target if the player has disabled screen upload.
 * - Note: *This function is slow and not something you want to be doing once a frame.
 * *It is slower when reading pixels from a render target or screen source.
 * *And is very slow indeed if the texture format is not 'argb' .
 * @param [surfaceIndex=0] Desired slice to get if the texture is a volume texture, or desired face to get if the texture is a cube map.By default the pixels from the whole texture is returned.To get only a portion of the texture, define a rectangular area using all four of these optional arguments:
 * @param texture The texture element to get the pixels from
 * @param [x=0] Rectangle left position
 * @param [y=0] Rectangle top position
 * @param [width=0] Rectangle width
 * @param [height=0] Rectangle height
 * @returns Returns a 'plain' format pixels string if successful, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/DxGetTexturePixels
**/
declare function dxGetTexturePixels(surfaceIndex?: number, texture: Element, x?: number, y?: number, width?: number, height?: number): string;

// TODO: DxIsAspectRatioAdjustmentEnabled
/**
 * @see https://wiki.mtasa.com/wiki/DxIsAspectRatioAdjustmentEnabled
**/

/**
 * This function allows for the positioning of dxDraw calls to be automatically adjusted according to the client's aspect ratio setting.
 * This lasts for a single execution of an event handler for one of the following events: onClientRender, onClientPreRender and onClientHUDRender.
 * So the function has to be called every frame, just like dxDraws.
 * This is particularly useful for draws that must align with the GTA HUD, for which the sizing and positioning can vary for different aspect ratios.
 * @param bEnabled Should the adjustment be enabled or disabled.
 * @param [sourceRatio=4/3] This should be set to the aspect ratio the dxDraws were originally designed in.
 * @returns Returns true when it was changed successfully, or false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxSetAspectRatioAdjustmentEnabled
**/
declare function dxSetAspectRatioAdjustmentEnabled(bEnabled: boolean, sourceRatio?: number): boolean;

/**
 * This function sets the current blend mode for the dxDraw functions.
 * Changing the blend mode can increase the quality when drawing text or certain other images to a render target.
 * As a general guide use modulate_add when drawing text to a render target, and add when drawing the render target to the screen.
 * Don't forget to restore the default blend at the end - See the example below.
 * @param blendMode The blend mode to use which can be one of
 * @returns Returns true if successful, or false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/DxSetBlendMode
**/
declare function dxSetBlendMode(blendMode: string): boolean;

/**
 * This function sets the color of a single pixel for pixels contained in a string.
 * It only works with 'plain' format pixels.
 * @param pixels The pixels to use
 * @param x The X coordinate for the pixel
 * @param y The Y coordinate for the pixel
 * @param r The red channel for the color (0-255)
 * @param g The green channel for the color (0-255)
 * @param b The blue channel for the color (0-255)
 * @param [a=255] The alpha channel for the color (0-255)
 * @returns Returns true if successful, or false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/DxSetPixelColor
**/
declare function dxSetPixelColor(pixels: string, x: number, y: number, r: number, g: number, b: number, a?: number): boolean;

/**
 * This function changes the drawing destination for the dx functions.
 * It can be used to select a previously created render target, or if called with no arguments, restore drawing directly to the screen.
 * @param renderTarget The render target element whose pixels we want to draw on.
 * @param [clear=false] If set to true, the render target will also be cleared.
 * @returns Returns true if the render target was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxSetRenderTarget
**/
declare function dxSetRenderTarget(renderTarget: Element, clear?: boolean): boolean;

/**
 * This function sets the amount of geometric sub-division to use when drawing a shader element with dxDrawImage.
 * Using tessellation allows a shader to manipulate the shape of the rendered image at each sub-division boundary.
 * Needs checking: The example should depict better how does this function actually work with a texture.
 * @param theShader The shader element whose tessellation is to be changed
 * @param tessellationX The number of sub-division points along the X axis. Range is 1 to 500.
 * @param tessellationY The number of sub-division points along the Y axis. Range is 1 to 500.
 * @returns Returns true if the shader element's tessellation was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxSetShaderTessellation
**/
declare function dxSetShaderTessellation(theShader: Element, tessellationX: number, tessellationY: number): boolean;

/**
 * This function applies a 3D transformation to a shader element when it is drawn with dxDrawImage.
 * Needs example
 * @param theShader The shader element whose transformation is to be changed
 * @param rotationX Rotation angle in degrees around the X axis (Left,right). This will make the shader rotate along its width.
 * @param rotationY Rotation angle in degrees around the Y axis (Up,down). This will make the shader rotate along its height.
 * @param rotationZ Rotation angle in degrees around the Z axis (In,out). This will make the shader rotate in a similar way to the rotation argument in dxDrawImage.
 * @param [rotationCenterOffsetX=0] The center of rotation offset X position in screen relative units.
 * @param [rotationCenterOffsetY=0] The center of rotation offset Y position in screen relative units.
 * @param [rotationCenterOffsetZ=0] The center of rotation offset Z position in screen relative units.
 * @param [bRotationCenterOffsetOriginIsScreen=false] Set to true if the center of rotation origin should be the center of the screen rather than the center of the image.
 * @param [perspectiveCenterOffsetX=0] The center of perspective offset X position in screen relative units.
 * @param [perspectiveCenterOffsetY=0] The center of perspective offset Y position in screen relative units.
 * @param [bPerspectiveCenterOffsetOriginIsScreen=false] Set to true if the center of perspective origin should be the center of the screen rather than the center of the image.
 * @returns Returns true if the shader element's transform was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxSetShaderTransform
**/
declare function dxSetShaderTransform(theShader: Element, rotationX: number, rotationY: number, rotationZ: number, rotationCenterOffsetX?: number, rotationCenterOffsetY?: number, rotationCenterOffsetZ?: number, bRotationCenterOffsetOriginIsScreen?: boolean, perspectiveCenterOffsetX?: number, perspectiveCenterOffsetY?: number, bPerspectiveCenterOffsetOriginIsScreen?: boolean): boolean;

/**
 * This sets a named parameter for a shader element
 * Important note: It's enough to set the texture only once if it's a render target
 * @param theShader The shader element whose parameter is to be changed
 * @param parameterName The name of parameter
 * @param value The value to set, which can be a texture, a bool, a number or a list of numbers(max 16 floats(numbers))
 * @returns Returns true if the shader element's parameter was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxSetShaderValue
**/
declare function dxSetShaderValue(theShader: Element, parameterName: string, value: any): boolean;

/**
 * This function is used for testing scripts written using guiCreateFont, dxCreateFont, dxCreateShader and dxCreateRenderTarget.
 * Each one of the 3 test modes should be used in turn to help highlight any potential problems.
 * @param testMode The test mode to be set. It can be one of the following values
 * @returns Returns true if the test mode was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxSetTestMode
**/
declare function dxSetTestMode(testMode: string): boolean;

/**
 * New items: 3.0135,1.3.5,This functions allows you to change the edge handling after creating the texture.
 * @param theTexture The affected texture
 * @param textureEdge The texture edge mode. Available modes are wrap, mirror, clamp, border, mirror-once
 * @param border unknown
 * @param ] unknown
 * @returns 
 * @see https://wiki.mtasa.com/wiki/DxSetTextureEdge
**/
declare function dxSetTextureEdge(theTexture: DxTexture, textureEdge: string, border: number, ]: unknown): boolean;

/**
 * This function sets the pixels of a texture element.
 * It can be used with a standard texture, render target or screen source.
 * Only 'plain' format pixels please.
 * Needs example
 * - Note: * This function is slow and not something you want to be doing once a frame.
 * * It is very slow when setting pixels to a render target or screen source.
 * * And is very slow indeed if the texture format is not "argb".
 * @param [surfaceIndex=0] Desired slice to set if the texture is a volume texture, or desired face to set if the texture is a cube map.By default the pixels are set starting at the top left corner of the texture.To set a different region, define a rectangular area using all four of these optional arguments:
 * @param texture The texture element to set the pixels of
 * @param pixels The 'plain' format pixels to use
 * @param [x=0] Rectangle left position
 * @param [y=0] Rectangle top position
 * @param [width=0] Rectangle width
 * @param [height=0] Rectangle height
 * @returns Returns a string if successful, false if invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/DxSetTexturePixels
**/
declare function dxSetTexturePixels(surfaceIndex?: number, texture: Element, pixels: string, x?: number, y?: number, width?: number, height?: number): boolean;

/**
 * This function updates the contents of a screen source texture with the screen output from GTA
 * @param screenSource The screen source element whose pixels we want to fill with the screen capture
 * @param [resampleNow=false] A bool to indicate if the screen should be captured immediately.The default is false which means the screen from the end of the previous frame is used (better for performance and consistency).Use true for layering fullscreen effects.
 * @returns Returns true if the screen was successfully captured, false otherwise.
 * @see https://wiki.mtasa.com/wiki/DxUpdateScreenSource
**/
declare function dxUpdateScreenSource(screenSource: Element, resampleNow?: boolean): boolean;

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

/**
 * This function applies a shader to one or more world textures.
 * - Tip: * The resource shader_tex_names can help in finding the names of world textures.
 * * When replacing the texture for a ped using the CJ skin, set textureName to "CJ"
 * * The shader inherits the render states of the original when it is drawn, so texture stage 0 will already be set to the original texture.
 * * When using with a 'ped', ensure you have set 'ped' or 'all' in the elementTypes when calling dxCreateShader
 * * CJ body parts textures can be replaced by using: "cj_ped_head", "cj_ped_hat", "cj_ped_torso", "cj_ped_legs", "cj_ped_feet", "cj_ped_glasses", "cj_ped_necklace", "cj_ped_watch" and "cj_ped_extra1". Latest version of shader_tex_names will show what is being used.
 * @param shader The shader which is to be applied
 * @param textureName The name of the world texture to apply the shader to. Wildcard matching e.g. "ro?ds*" can be used to apply to more than one texture at a time.
 * @param [targetElement=nil] unknown
 * @param [appendLayers=true] allows two or more layered shaders to be applied in the same texture.You may want to modify the DepthBias in the technique pass to avoid Z-fighting artifacts when using this.
 * @returns Returns true if the shader was successfully applied, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineApplyShaderToWorldTexture
**/
declare function engineApplyShaderToWorldTexture(shader: Element, textureName: string, targetElement?: Element, appendLayers?: boolean): boolean;

/**
 * This function is used to un-assign the specified model ID from the engineRequestModel assignment.
 * @param modelID the model ID you want to have un-assigned.
 * @returns Returns true if the model was successfully freed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineFreeModel
**/
declare function engineFreeModel(modelID: number): boolean;

/**
 * This function gets the model ID of an object model from object name.
 * This function is the counterpart of engineGetModelNameFromID.
 * @param modelName The model name of the object
 * @returns Returns an int with the ID of the object model, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineGetModelIDFromName
**/
declare function engineGetModelIDFromName(modelName: string): number;

/**
 * This function gets the LOD distance for any object / model ID.
 * @param model The model / object ID number you want to get the LOD distance of.
 * @returns Returns a float representing the LOD distance of the model, or false if the model argument is incorrect.
 * @see https://wiki.mtasa.com/wiki/EngineGetModelLODDistance
**/
declare function engineGetModelLODDistance(model: number): number;

/**
 * This function gets the model name of an object model from model ID. This function is the counterpart of engineGetModelIDFromName.
 * @param modelID The model ID of the object
 * @returns Returns a string with the name of the object model, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineGetModelNameFromID
**/
declare function engineGetModelNameFromID(modelID: number): string;

// TODO: EngineGetModelPhysicalPropertiesGroup
/**
 * @see https://wiki.mtasa.com/wiki/EngineGetModelPhysicalPropertiesGroup
**/

// TODO: EngineGetModelTextureNames
/**
 * @see https://wiki.mtasa.com/wiki/EngineGetModelTextureNames
**/

// TODO: EngineGetObjectGroupPhysicalProperty
/**
 * @see https://wiki.mtasa.com/wiki/EngineGetObjectGroupPhysicalProperty
**/

/**
 * This function retrieves the value of a surface property.
 * @param surfaceID Material ID from 0 to 178
 * @param property Property name
 * @returns Returns the current property value. See the table below for possible values.
 * @see https://wiki.mtasa.com/wiki/EngineGetSurfaceProperties
**/
declare function engineGetSurfaceProperties(surfaceID: number, property: string): any;

/**
 * This function returns a list of the world textures which are being used to draw the current scene.
 * @param [nameFilter=*] Only include textures that match the wildcard string.
 * @param [modelId=] Only include textures that are used by the model id (or model name)
 * @returns Returns a table of texture names.
 * @see https://wiki.mtasa.com/wiki/EngineGetVisibleTextureNames
**/
declare function engineGetVisibleTextureNames(nameFilter?: string, modelId?: string): object;

/**
 * This function imports (adds) a loaded RenderWare Texture Dictionary into a specific model.
 * This is necessary in order for the DFF loader to find any new textures.
 * Please call this function before loading the DFF model file, in order to allow the DFF loading process to find the new textures.
 * This function can also replace default GTA textures, so that it becomes possible to e.g. put custom images on existing billboards.
 * Ped and weapon textures are also supported.
 * See here for tips on reducing the size of TXD files.
 * this page]]
 * - Note: Please note the loading order that is used in the examples as other orders can cause collisions, textures or the DFF not to load due to technical limitations
 * @param texture The TXD that was loaded with engineLoadTXD
 * @param model_id The model id to import the TXD into
 * @returns Returns true if the function executed succesfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineImportTXD
**/
declare function engineImportTXD(texture: Txd, model_id: number): boolean;

/**
 * This function loads a RenderWare Collision (COL 1/2/3) file into GTA.
 * The collisions can then be used to provide collisions for in-game objects.
 * For vehicles, please omit this function by embedding your COL file into your DFF file.
 * This way, you can be sure that the COL file is correctly (and automatically) loaded when calling engineLoadDFF.
 * This is a client side function.
 * Be sure to transfer your COL file by including it in the meta file.
 * - Note: Please note the loading order that is used in the examples as other orders can cause collisions, textures or the DFF not to load due to technical limitations
 * - Note: Collision libraries (.col files containing multiple collision models) are not supported. See COL for details.
 * @param col_file unknown
 * @param raw_data unknown
 * @returns Returns a COL if the file was loaded, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineLoadCOL
**/
declare function engineLoadCOL(col_file: string, raw_data: string): Col;

/**
 * This function loads a RenderWare Model (DFF) file into GTA.
 * To successfully load your model with textures, be sure to use engineLoadTXD and engineImportTXD before calling this function.
 * If some error occurs while loading the DFF, MTA will output a message - check out DFF error messages to know what they mean.
 * This is a client side function.
 * Be sure to transfer your DFF file by including it in the meta file.
 * The returned DFF element is an element in the element tree, just like vehicles and objects.
 * When the dff is destroyed, ie on resource unload or using destroyElement, any elements that use the DFF, such as vehicles or objects will be reset.
 * - Note: Please note the loading order that is used in the examples as other orders can cause collisions, textures or the DFF not to load due to technical limitations.
 * @param dff_file unknown
 * @param raw_data unknown
 * @returns Returns a DFF element if the dff file loaded, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineLoadDFF
**/
declare function engineLoadDFF(dff_file: string, raw_data: string): EngineDFF;

/**
 * destroyElement]], restarting or stopping the resource can also unload the IFP file automatically.
 * @param ifp_file unknown
 * @param raw_data unknown
 * @param CustomBlockName the new block name for the IFP file. You cannot use the GTA default internal block names. You should namespace this name using a string like resource.blockname
 * @returns Returns an IFP element if the IFP file loaded, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineLoadIFP
**/
declare function engineLoadIFP(ifp_file: string, raw_data: string, CustomBlockName: string): EngineIFP;

/**
 * This function loads a RenderWare Texture Dictionary (TXD) file into GTA.
 * The texture dictionary can then be used to provide textures.
 * This is a client side function.
 * Be sure to transfer your TXD file by including it in the meta file.
 * - Note: Please note the loading order that is used in the examples as other orders can cause collisions, textures or the DFF not to load due to technical limitations
 * - Tip: Do your TXD files take megabytes of disk space? You can read some tips on reducing the size of TXD files to compress them without ruining texture quality.
 * @param txd_file unknown
 * @param raw_data unknown
 * @param [filteringEnabled=true] Whether to enable texture filtering.
 * @returns Returns a TXD if the file was loaded, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineLoadTXD
**/
declare function engineLoadTXD(txd_file: string, raw_data: string, filteringEnabled?: boolean): Txd;

/**
 * This function removes a shader from one or more world textures.
 * @param shader The shader which is to be removed
 * @param textureName The name of the world texture to remove the shader from. It should be exactly the same string as used with engineApplyShaderToWorldTexture when the shader was initially applied.
 * @param [targetElement=nil] The element to remove the shader from.It should be the same element as used with engineApplyShaderToWorldTexture when the shader was initially applied.
 * @returns Returns true if the shader was successfully removed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineRemoveShaderFromWorldTexture
**/
declare function engineRemoveShaderFromWorldTexture(shader: Element, textureName: string, targetElement?: Element): boolean;

/**
 * engineRestoreAnimation]].
 * It should be noted that partial animations are not supported, you can still replace them, but they won't work as intended, for example, "FightA_block" animation from "ped" block is a partial animation, you can't replace it properly, only a few animations are partial, rest of them are not, so it shouldn't be a problem.
 * @param thePed the player or ped you want to replace an animation for.
 * @param InternalBlockName the internal block name.
 * @param InternalAnimName the internal animation name inside InternalBlockName.
 * @param CustomBlockName the custom block name of the loaded IFP file that you passed to engineLoadIFP as second parameter.
 * @param CustomAnimName the custom animation name inside the loaded IFP file with CustomBlockName.
 * @returns Returns true on success, false in case of failure.
 * @see https://wiki.mtasa.com/wiki/EngineReplaceAnimation
**/
declare function engineReplaceAnimation(thePed: Ped, InternalBlockName: string, InternalAnimName: string, CustomBlockName: string, CustomAnimName: string): boolean;

/**
 * This function replaces the collision file of the given model id to the collision file passed.
 * Use engineLoadCOL to load the collision file first.
 * - Note: Please note the loading order that is used in the examples as other orders can cause collisions, textures or the DFF not to load due to technical limitations
 * - Note: Collision libraries (.col files containing multiple collision models) are not supported. See COL for details. Object models are supported only (no vehicles or players).
 * @param theCol The collision file to replace with
 * @param modelID The model ID whose collision file you want to replace
 * @returns Returns true if the collision was successfully replaced, false or nil if the collision could not be replaced for a reason.
 * @see https://wiki.mtasa.com/wiki/EngineReplaceCOL
**/
declare function engineReplaceCOL(theCol: EngineCOL, modelID: number): boolean;

/**
 * This function replaces the given model ID with the model contained in a DFF file loaded by engineLoadDFF.
 * This function supports vehicles, objects, peds and players but not CJ clothing and body parts.
 * To replace weapon models you must use their object IDs, not weapon IDs.
 * There is a weapon model list available at weapons.
 * - Note: Please note the loading order that is used in the examples as other orders can cause collisions, textures or the DFF not to load due to technical limitations
 * Deprecated feature: 3.0111,1.1.1,This function does not support ped and weapon models.
 * - Note: * Default GTA map objects behave inconsistently when using this function on them. If you want to replace models in the original GTA map, use one of the methods shown here.
 * @param theModel The model to replace the given model ID with
 * @param modelID The model it to replace the model of
 * @param [alphaTransparency=false] Set to true if model uses semi-transparent textures, e.g. windows.This will ensure other objects behind the semi-transparent textures are rendered correctly.(Can slightly impact performance, so only set when required)
 * @returns Returns true if the model was successfully replaced, false if it failed for some reason, ie. the DFF or the model ID is not valid.
 * @see https://wiki.mtasa.com/wiki/EngineReplaceModel
**/
declare function engineReplaceModel(theModel: EngineDFF, modelID: number, alphaTransparency?: boolean): boolean;

/**
 * This function is used to assign the next available model ID to a certain element type.
 * Currently only "ped" is supported.
 * @param elementType this must be "ped".
 * @returns Returns an integer of the model ID that was available to be assigned to the element type, false if no free model ID available or invalid element type.
 * @see https://wiki.mtasa.com/wiki/EngineRequestModel
**/
declare function engineRequestModel(elementType: unknown): number;

/**
 * This function resets a surface property to its default value.
 * If no ID is provided, it will reset all surfaces' properties to their original values.
 * @param surfaceID Material ID from 0 to 178
 * @returns Returns true if the function executed succesfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineResetSurfaceProperties
**/
declare function engineResetSurfaceProperties(surfaceID: number): any;

/**
 * ped]]) is provided to this function, all replaced animations are restored.
 * If block name is also provided for 2nd parameter, then replaced animations within that block are restored.
 * If 3rd parameter (animation name) is provided, then only that specific animation within that specific block is restored.
 * @param thePed the player or ped you want to restore an animation(s) for.
 * @param InternalBlockName the internal block name.
 * @param InternalAnimName the internal animation name inside InternalBlockName.
 * @returns Returns true on success, false in case of failure.
 * @see https://wiki.mtasa.com/wiki/EngineRestoreAnimation
**/
declare function engineRestoreAnimation(thePed: Ped, InternalBlockName: string, InternalAnimName: string): boolean;

/**
 * This function restores the original collision model of the given model ID. Reverses the effect of engineReplaceCOL.
 * @param modelID The ID of the model to restore the model of
 * @returns Returns true if this function succeeds, false or nil if it fails for some reason.
 * @see https://wiki.mtasa.com/wiki/EngineRestoreCOL
**/
declare function engineRestoreCOL(modelID: number): boolean;

/**
 * This function restores the visual DFF model of the given model ID. This restores the result of engineReplaceModel.
 * @param modelID The model ID to restore the visuals of
 * @returns Returns true if the model was successfully restored, false or nil if it failed for some reason.
 * @see https://wiki.mtasa.com/wiki/EngineRestoreModel
**/
declare function engineRestoreModel(modelID: number): boolean;

// TODO: EngineRestoreModelPhysicalPropertiesGroup
/**
 * @see https://wiki.mtasa.com/wiki/EngineRestoreModelPhysicalPropertiesGroup
**/

// TODO: EngineRestoreObjectGroupPhysicalProperties
/**
 * @see https://wiki.mtasa.com/wiki/EngineRestoreObjectGroupPhysicalProperties
**/

/**
 * This function enables or disables asynchronous model loading.
 * Enabling asynchronous model loading may reduce the small pauses that occur when a new model is displayed for the first time.
 * However, it can cause the new models to appear slightly later than they might have otherwise.
 * Warning: Using this function with a large amounts of engineReplace* at the same time may cause loading times to be exponentially slower
 * @param enable Set to true/false to enable/disable asynchronous loading. Only works if the client's preferences has 'Asynchronous Loading' set to 'Auto'.
 * @param force If set to true, ignores the client's preferences.
 * @returns Returns true if the function executed successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineSetAsynchronousLoading
**/
declare function engineSetAsynchronousLoading(enable: boolean, force: boolean): boolean;

/**
 * This function sets a custom LOD distance for any object / model ID. This is the distance at which objects of that model ID are switched to their LOD model, or (if there is no LOD model) become invisible.
 * Notes:
 * The actual draw distance used is modified by the draw distance slider in the settings 'Video' tab of the MTA client.
 * However, there is a general draw distance limit of 300 units.
 * So engineSetModelLODDistance(1337,400) will mean model 1337 will be visible up to a distance of 300 units no matter what the 'Video' tab says.
 * Therefore, unless it's really important, engineSetModelLODDistance should not be set to anything greater than 170.
 * 170 will still give the maximum draw distance (of 300 units) on clients that have a 'Video' tab draw distance setting of 100%, and it will help reduce lag for players who chose a lower draw distance in their settings.
 * For low LOD elements, engineSetModelLODDistance still has a limit of 300 units, but the actual draw distance used is 5 times the setting value.
 * Also, low LOD elements ignore the 'Video' tab draw distance slider.
 * So a setting of 200 will mean a low LOD element will always have a draw distance of 1000 units.
 * @param model The model / object ID number you want to change the LOD distance of.
 * @param distance New LOD distance value in San Andreas units.
 * @returns Returns true if the function executed succesfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineSetModelLODDistance
**/
declare function engineSetModelLODDistance(model: number, distance: number): boolean;

// TODO: EngineSetModelPhysicalPropertiesGroup
/**
 * @see https://wiki.mtasa.com/wiki/EngineSetModelPhysicalPropertiesGroup
**/

// TODO: EngineSetObjectGroupPhysicalProperty
/**
 * @see https://wiki.mtasa.com/wiki/EngineSetObjectGroupPhysicalProperty
**/

/**
 * This function changes a property of a surface.
 * @param surfaceID Material ID from 0 to 178
 * @param property Property name
 * @param value New value from table below
 * @returns Returns true if the function executed succesfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/EngineSetSurfaceProperties
**/
declare function engineSetSurfaceProperties(surfaceID: number, property: string, value: any): boolean;

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
 * This function is used to extinguish all spreading fire, or spreading fire at specified coordinates.
 * @param x unknown
 * @param y unknown
 * @param z unknown
 * @param [radius=1] a float value indicating the radius in which to extinguish fire.
 * @param ] unknown
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ExtinguishFire
**/
declare function extinguishFire(x: number, y: number, z: number, radius?: number, ]: unknown): boolean;

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
 * Fires one shot from a custom weapon.
 * @param theWeapon The weapon to be fired.
 * @returns Returns true if the shot weapon is valid and therefore the shot was fired, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FireWeapon
**/
declare function fireWeapon(theWeapon: Weapon): boolean;

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
 * Creates a blood splatter particle effect.
 * @param posX unknown
 * @param posY unknown
 * @param posZ unknown
 * @param dirX unknown
 * @param dirY unknown
 * @param dirZ unknown
 * @param [count=1] the number of flying droplets to create.
 * @param [brightness=1] the brightness. Ranges from 0 (almost black) to 1 (normal color).
 * @param ] unknown
 * @returns 
 * @see https://wiki.mtasa.com/wiki/FxAddBlood
**/
declare function fxAddBlood(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, count?: number, brightness?: number, ]: unknown): boolean;

/**
 * Creates a bullet impact particle effect, consisting of a small smoke cloud and a number of sparks.
 * @param posX unknown
 * @param posY unknown
 * @param posZ unknown
 * @param dirX unknown
 * @param dirY unknown
 * @param dirZ unknown
 * @param [smokeSize=1] the size of the smoke cloud.
 * @param [sparkCount=1] the number of sparks to create.
 * @param [smokeIntensity=1] the amount/transparency of smoke, ranges from 0 to 1.
 * @param ] unknown
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddBulletImpact
**/
declare function fxAddBulletImpact(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, smokeSize?: number, sparkCount?: number, smokeIntensity?: number, ]: unknown): boolean;

/**
 * This function creates a bullet splash particle effect, normally created when shooting into water.
 * @param posX A float representing the x position of the splash
 * @param posY A float representing the y position of the splash
 * @param posZ A float representing the z position of the splash
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddBulletSplash
**/
declare function fxAddBulletSplash(posX: number, posY: number, posZ: number): boolean;

/**
 * Creates a debris particle effect (e.g. bits that fly off a car when ramming a wall).
 * @param posX unknown
 * @param posY unknown
 * @param posZ unknown
 * @param [colorR=255] unknown
 * @param [colorG=0] unknown
 * @param [colorB=0] unknown
 * @param [colorA=255] unknown
 * @param [scale=1] the size of the chunks.
 * @param , unknown
 * @param [count=1] the number of chunks to create.
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddDebris
**/
declare function fxAddDebris(posX: number, posY: number, posZ: number, colorR?: number, colorG?: number, colorB?: number, colorA?: number, scale?: number, ,: unknown, count?: number): boolean;

/**
 * This function creates a foot splash particle effect, normally created when walking into water.
 * @param posX A float representing the x position of the splash
 * @param posY A float representing the y position of the splash
 * @param posZ A float representing the z position of the splash
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddFootSplash
**/
declare function fxAddFootSplash(posX: number, posY: number, posZ: number): boolean;

/**
 * This function creates a glass particle effect.
 * @param posX A float representing the x position of the glass
 * @param posY A float representing the y position of the glass
 * @param posZ A float representing the z position of the glass
 * @param [colorR=255] unknown
 * @param [colorG=0] unknown
 * @param [colorB=0] unknown
 * @param [colorA=255] unknown
 * @param [scale=1] A float representing the size of the particle effect, where 1 is the standard size.
 * @param , unknown
 * @param [count=1] The density of the particle effect.
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddGlass
**/
declare function fxAddGlass(posX: number, posY: number, posZ: number, colorR?: number, colorG?: number, colorB?: number, colorA?: number, scale?: number, ,: unknown, count?: number): boolean;

/**
 * This function creates a gunshot particle effect.
 * @param posX unknown
 * @param posY unknown
 * @param posZ unknown
 * @param dirX unknown
 * @param dirY unknown
 * @param dirZ unknown
 * @param [includeSparks=true] A bool representing whether the particle effect will generate sparks.
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddGunshot
**/
declare function fxAddGunshot(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, includeSparks?: boolean): boolean;

/**
 * Creates a punch impact particle effect (a small dust cloud).
 * @param posX unknown
 * @param posY unknown
 * @param posZ unknown
 * @param dirX unknown
 * @param dirY unknown
 * @param dirZ unknown
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddPunchImpact
**/
declare function fxAddPunchImpact(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number): boolean;

/**
 * Creates a number of sparks originating from a point or along a line.
 * @param posX unknown
 * @param posY unknown
 * @param posZ unknown
 * @param dirX unknown
 * @param dirY unknown
 * @param dirZ unknown
 * @param [force=1] speed factor
 * @param , unknown
 * @param [count=1] the number of effects to create.
 * @param [acrossLineX=0] unknown
 * @param , unknown
 * @param [acrossLineY=0] unknown
 * @param , unknown
 * @param [acrossLineZ=0] unknown
 * @param , unknown
 * @param [blur=false] if false, creates standard bullet impact-like sparks. If true, adds motion blur to the sparks.
 * @param [spread=1] determines how strongly the particles deviate from each other. With low values the particles will stay quite close together, high values will make them fly in all directions. Also affects their speed.
 * @param , unknown
 * @param [life=1] the higher this value, the longer the sparks survive before they disappear.
 * @param ] unknown
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddSparks
**/
declare function fxAddSparks(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, force?: number, ,: unknown, count?: number, acrossLineX?: number, ,: unknown, acrossLineY?: number, ,: unknown, acrossLineZ?: number, ,: unknown, blur?: boolean, spread?: number, ,: unknown, life?: number, ]: unknown): boolean;

/**
 * This function creates a tank firing particle effect.
 * @param posX unknown
 * @param posY unknown
 * @param posZ unknown
 * @param dirX unknown
 * @param dirY unknown
 * @param dirZ unknown
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddTankFire
**/
declare function fxAddTankFire(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number): boolean;

/**
 * Creates a tyre burst particle effect (a small white smoke puff).
 * @param posX unknown
 * @param posY unknown
 * @param posZ unknown
 * @param dirX unknown
 * @param dirY unknown
 * @param dirZ unknown
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddTyreBurst
**/
declare function fxAddTyreBurst(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number): boolean;

/**
 * This function creates a water hydrant particle effect.
 * @param posX A float representing the x position of the hydrant
 * @param posY A float representing the y position of the hydrant
 * @param posZ A float representing the z position of the hydrant
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddWaterHydrant
**/
declare function fxAddWaterHydrant(posX: number, posY: number, posZ: number): boolean;

/**
 * This function creates a water splash particle effect.
 * @param posX A float representing the x position of the splash
 * @param posY A float representing the y position of the splash
 * @param posZ A float representing the z position of the splash
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddWaterSplash
**/
declare function fxAddWaterSplash(posX: number, posY: number, posZ: number): boolean;

/**
 * Creates a wood splinter particle effect.
 * @param posX unknown
 * @param posY unknown
 * @param posZ unknown
 * @param dirX unknown
 * @param dirY unknown
 * @param dirZ unknown
 * @param [count=1] the number of splinters to create.
 * @param [brightness=1] the brightness. Ranges from 0 (black) to 1 (normal color).
 * @returns Returns a true if the operation was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/FxAddWood
**/
declare function fxAddWood(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, count?: number, brightness?: number): boolean;

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
 * This retrieves the analog control state of a control.
 * This is useful for detecting sensitive controls, such as those used on a joypad.
 * To get the analog control state for a ped, please use getPedAnalogControlState.
 * @param control The control that you want to get the state of. See control names for a list of possible controls.
 * @returns Returns a float between 0 and 1 indicating the amount the control is pressed.
 * @see https://wiki.mtasa.com/wiki/GetAnalogControlState
**/
declare function getAnalogControlState(control: string): number;

/**
 * This function returns a table of all the elements attached to the specified element
 * @param theElement The element which you require the information from.
 * @returns Returns a table of all the elements attached to the specified element.
 * @see https://wiki.mtasa.com/wiki/GetAttachedElements
**/
declare function getAttachedElements(theElement: Element): object;

/**
 * This function will tell you if the birds are enabled or disabled.

 * @returns Returns true if the birds are enabled or false if the birds are disabled.
 * @see https://wiki.mtasa.com/wiki/GetBirdsEnabled
**/
declare function getBirdsEnabled(): boolean;

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
 * Returns a list of key names that are bound to the specified game control or console command.
 * @param command/control the name of a game control or a console command.See the control names page for valid controls.
 * @returns If one or more keys are bound to the specified control or console command, a table is returned indexed by the names of the keys and containing key states as values. If no keys are bound or an invalid name was passed, returns false.
 * @see https://wiki.mtasa.com/wiki/GetBoundKeys
**/
declare function getBoundKeys(command/control: string): object;

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
 * Returns information about how the chatbox looks.
 * These values come from the file called: Chatboxpresets.xml but it depends on what type of preset you currently have, which is chosen from your settings in the 'Interface' tab.
 * @param CVar the name of the property you want returned. Can be the following values
 * @returns 
 * @see https://wiki.mtasa.com/wiki/GetChatboxLayout
**/
declare function getChatboxLayout(CVar: string): [, object];

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
 * Gets the commands bound to a key.
 * @param theKey See key names for a list of possible keys
 * @param keyState A string that has one of the following values
 * @returns Returns a table of the commands bound on that key.
 * @see https://wiki.mtasa.com/wiki/GetCommandsBoundToKey
**/
declare function getCommandsBoundToKey(theKey: string, keyState: string): object;

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
 * New items: 3.014,1.4 r6208,This function gets the density of certain effect.
 * @param theEffect The effect to get density of.
 * @returns 
 * @see https://wiki.mtasa.com/wiki/GetEffectDensity
**/
declare function getEffectDensity(theEffect: Effect): number;

/**
 * New items: 3.014,1.4 r6208,This function gets the speed of a specified effect.
 * @param theEffect The effect to get the speed of.
 * @returns Returns float containing the effect's speed, false if invalid arguments were specified.
 * @see https://wiki.mtasa.com/wiki/GetEffectSpeed
**/
declare function getEffectSpeed(theEffect: Effect): number;

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
 * This function retrieves the maximum FPS (Frames per second) that players on the server can run their game at.

 * @returns Returns an integer between 25 and 100 of the maximum FPS that players can run their game at.
 * @see https://wiki.mtasa.com/wiki/GetFPSLimit
**/
declare function getFPSLimit(): number;

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
 * Gets the functions bound to a key.
 * To bind a function to a key use the bindKey function
 * @param thePlayer The player to get the functions from a key.
 * @param key unknown
 * @param keyState A string that has one of the following values
 * @returns Returns a table of the key function(s).
 * @see https://wiki.mtasa.com/wiki/GetFunctionsBoundToKey
**/
declare function getFunctionsBoundToKey(thePlayer: Player, key: string, keyState: string): object;

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
 * This function gets the Z level of the highest ground below a point.
 * It is required that the point is near enough to the local player so that it's within the area where collision data is loaded.
 * If this is not the case, an incorrect position will be returned.
 * @param x A floating point number representing the X world coordinate of the point.
 * @param y A floating point number representing the Y world coordinate of the point.
 * @param z A floating point number representing the Z world coordinate of the point.
 * @returns Returns a float with the highest ground-level Z coord if parameters are valid, 0 if the point you tried to test is outside the loaded world map, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetGroundPosition
**/
declare function getGroundPosition(x: number, y: number, z: number): number;

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
 * This function gets the state of the helicopter blades collisions on the specified vehicle.
 * @param theVehicle The vehicle that will be checked.
 * @returns Returns true if the collisions are enabled for specified vehicle, false if the collisions aren't enabled for the specified vehicle, if the vehicle is not a helicopter or if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/GetHeliBladeCollisionsEnabled
**/
declare function getHeliBladeCollisionsEnabled(theVehicle: Vehicle): boolean;

/**
 * Retrieves the speed at which the rotor of a helicopter rotates.
 * @param heli the helicopter element to get the rotor speed of.
 * @returns Returns the rotor speed if successful. This is 0 when the helicopter is parked, and about 0.2 when it is fully spun up. It can be negative if the rotor rotates counter-clockwise. Returns false in case of failure (an invalid element or a vehicle element that is not a helicopter was passed).
 * @see https://wiki.mtasa.com/wiki/GetHelicopterRotorSpeed
**/
declare function getHelicopterRotorSpeed(heli: Vehicle): number;

/**
 * This function will tell you if interior furniture are enabled or disabled in a specified room ID.
 * @param roomID unknown
 * @returns Returns true if interior furniture is enabled or false if interior furniture is disabled.
 * @see https://wiki.mtasa.com/wiki/GetInteriorFurnitureEnabled
**/
declare function getInteriorFurnitureEnabled(roomID: number): boolean;

/**
 * This function checks to see if the music played by default in clubs is disabled or not.
 * @param getInteriorSoundsEnabled unknown
 * @returns Returns true if music is playing, returns false if music is not playing.
 * @see https://wiki.mtasa.com/wiki/GetInteriorSoundsEnabled
**/
declare function getInteriorSoundsEnabled(getInteriorSoundsEnabled: boolean): [];

/**
 * This function gets the maximum height at which your jetpack can fly without failing to go higher.
 * @param getJetpackMaxHeight unknown
 * @returns Returns a float containing the max jetpack height.
 * @see https://wiki.mtasa.com/wiki/GetJetpackMaxHeight
**/
declare function getJetpackMaxHeight(getJetpackMaxHeight: number): [];

/**
 * This function allow you get first key bound to command.
 * @param command command what you need check.
 * @returns Returns a string of first key binded to current command.
 * @see https://wiki.mtasa.com/wiki/GetKeyBoundToCommand
**/
declare function getKeyBoundToCommand(command: string): string;

/**
 * getKeyBoundToFunction allows retrieval of the first key bound to a function.
 * @param theFunction The function in which you would like to check the bound key
 * @returns Returns a string of the first key the function was bound to.Returns a string of the first key the function was bound to.
 * @see https://wiki.mtasa.com/wiki/GetKeyBoundToFunction
**/
declare function getKeyBoundToFunction(theFunction: Function): string;

/**
 * This function determines if a certain key is pressed or not.
 * - Note: 'ralt' may trigger both 'ralt' and 'lctrl', this is due to AltGr
 * @param keyName The name of the key you're checking state of. See Key names.
 * @returns Returns true if the specified key is pressed, false if it isn't or if an invalid key name is passed.
 * @see https://wiki.mtasa.com/wiki/GetKeyState
**/
declare function getKeyState(keyName: string): boolean;

/**
 * This function gets the player's keyboard layout settings, which they are currently (keyboard layout can be changed at any moment) using at the time of invocation.

 * @returns Returns a table with keyboard layout properties:
 * @see https://wiki.mtasa.com/wiki/GetKeyboardLayout
**/
declare function getKeyboardLayout(): object;

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
 * light]] element.
 * @param theLight The light that you wish to retrieve the color of.
 * @returns Returns three ints corresponding to the amount of red, green and blue (respectively) of the light, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GetLightColor
**/
declare function getLightColor(theLight: Light): [number, number, number];

/**
 * light]] element.
 * @param theLight The light that you wish to retrieve the direction of.
 * @returns Returns three ints corresponding to the x, y and z coordinates (respectively) of the light direction, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GetLightDirection
**/
declare function getLightDirection(theLight: Light): [number, number, number];

/**
 * light]] element.
 * @param theLight The light that you wish to retrieve the radius of.
 * @returns Returns a float containing the radius of the specified light, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GetLightRadius
**/
declare function getLightRadius(theLight: Light): number;

/**
 * light]] element.
 * @param theLight The light that you wish to retrieve the type of.
 * @returns Returns an int containing the type of the specified light, false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GetLightType
**/
declare function getLightType(theLight: Light): number;

/**
 * This function gets the player element of the client running the current script.
 * You can use the predefined variable localPlayer instead of typing getLocalPlayer()
 * @returns Returns the local player element.
 * @see https://wiki.mtasa.com/wiki/GetLocalPlayer
**/
declare function getLocalPlayer(): Player;

/**
 * New items: 3.0140,1.4,This function gets the player's localization setting as set in the MTA client.
 * @param getLocalization unknown
 * @returns Returns a table with the following entries:
 * @see https://wiki.mtasa.com/wiki/GetLocalization
**/
declare function getLocalization(getLocalization: object): [];

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
 * This function gets the distance from the camera at which the world starts rendering.
 * For more information about this please refer to setNearClipDistance.
 * @param getNearClipDistance unknown
 * @returns This function returns a float containing the actual near clip distance.
 * @see https://wiki.mtasa.com/wiki/GetNearClipDistance
**/
declare function getNearClipDistance(getNearClipDistance: number): [];

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
 * This function gets a property of the specified object.
 * @param theObject the object you wish to get a property of.
 * @param property unknown
 * @returns On success: table for all, 3 floats for center_of_mass or float for other properties On failure: false
 * @see https://wiki.mtasa.com/wiki/GetObjectProperty
**/
declare function getObjectProperty(theObject: Object, property: string): any;

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
 * This function retrieves the analog control state of a ped, as set by setPedAnalogControlState.
 * Needs example
 * @param thePed The ped you wish to retrieve the control state of.
 * @param controlName The control. See control names for a list of possible controls.
 * @returns Returns a float between 0 ( full release ) and 1 ( full push ) indicating the amount the control is pushed.
 * @see https://wiki.mtasa.com/wiki/GetPedAnalogControlState
**/
declare function getPedAnalogControlState(thePed: Ped, controlName: string): number;

/**
 * Gets the animation of a player or ped that was set using setPedAnimation.
 * - Note: Use getPedTask to monitor what movements the player is currently doing.''
 * @param thePed the player or ped you want to get the animation of.
 * @returns Returns two strings: the first is the name of the block, the second is the name of the animation. Returns false if there was an error or if the ped is not doing an animation.
 * @see https://wiki.mtasa.com/wiki/GetPedAnimation
**/
declare function getPedAnimation(thePed: Ped): [string, string];

/**
 * This function returns the current armor of the specified ped.
 * @param thePed The ped whose armor you want to check
 * @returns A float with the armor, false if an invalid ped was given.
 * @see https://wiki.mtasa.com/wiki/GetPedArmor
**/
declare function getPedArmor(thePed: Ped): number;

/**
 * Returns the 3D world coordinates of a specific bone of a given ped.
 * - Tip: If you want attach element to ped bone, use https://community.mtasa.com/index.php?p=resources&s=details&id=2540 bone_attach resource
 * @param thePed the ped you want to inspect.
 * @param bone the number of the bone to get the position of.
 * @returns Returns the x, y, z world position of the bone.
 * @see https://wiki.mtasa.com/wiki/GetPedBonePosition
**/
declare function getPedBonePosition(thePed: Ped, bone: number): [number, number, number];

/**
 * This function detects the element a ped is standing on. This can be a vehicle or an object.
 * @param thePed The ped of which you want to get the element he is standing on.
 * @returns Returns an object or a vehicle if the ped is standing on one, false if he is touching none or an invalid element was passed.
 * @see https://wiki.mtasa.com/wiki/GetPedContactElement
**/
declare function getPedContactElement(thePed: Ped): Element;

/**
 * Checks whether a ped or the localplayer has a certain control pressed.
 * @param thePed the ped you want to check.
 * @param control the control to get the status of. See control names for a list of valid names.
 * @returns Returns true if the ped is pressing the specified control, false if not or an invalid argument was passed.
 * @see https://wiki.mtasa.com/wiki/GetPedControlState
**/
declare function getPedControlState(thePed: Ped, control: string): boolean;

/**
 * Retrieves the fighting style a player/ped is currently using.
 * Function also added client-side.
 * @param thePed the ped whose current fighting style ID you wish to retrieve.
 * @returns Returns the ped's current fighting style as an integer ID, false if it fails to retrieve a value.
 * @see https://wiki.mtasa.com/wiki/GetPedFightingStyle
**/
declare function getPedFightingStyle(thePed: Ped): number;

/**
 * This function returns the current move state for the specified ped.
 * @param thePed The ped whose move state you want to know
 * @returns Returns a string indicating the ped's move state, or false if the ped is not streamed in, the movement type is unknown, the ped is in a vehicle or the ped is invalid.
 * @see https://wiki.mtasa.com/wiki/GetPedMoveState
**/
declare function getPedMoveState(thePed: Ped): string;

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
 * This function returns the current oxygen level of the specified ped.
 * @param thePed The ped whose oxygen level you want to check
 * @returns A float with the oxygen level, false if an invalid ped was given.
 * @see https://wiki.mtasa.com/wiki/GetPedOxygenLevel
**/
declare function getPedOxygenLevel(thePed: Ped): number;

/**
 * This function is used to get the name of a specified ped's current simplest task.
 * - Note: See getPedTask to get a all tasks.
 * @param thePed The ped whose task you want to retrieve.
 * @returns Returns a string representing the name of the ped's simplest, active task.
 * @see https://wiki.mtasa.com/wiki/GetPedSimplestTask
**/
declare function getPedSimplestTask(thePed: Ped): string;

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
 * This function allows retrieval of where a ped's target is blocked.
 * It will only be blocked if there is an obstacle within a ped's target range.
 * @param targetingPed This is the ped whose target collision you wish to retrieve
 * @returns Returns three floats, x,y,z, representing the position where the ped's target collides, or false if it was unsuccessful.
 * @see https://wiki.mtasa.com/wiki/GetPedTargetCollision
**/
declare function getPedTargetCollision(targetingPed: Ped): [number, number, number];

/**
 * This function allows retrieval of the position where a ped's target range ends, when he is aiming with a weapon.
 * @param targetingPed the ped who is targeting whose target end you wish to retrieve
 * @returns Returns three floats, x,y,z, representing the position where the ped's target ends according to his range, or false if it was unsuccessful.
 * @see https://wiki.mtasa.com/wiki/GetPedTargetEnd
**/
declare function getPedTargetEnd(targetingPed: Ped): [number, number, number];

/**
 * This function allows retrieval of the position a ped's target range begins, when he is aiming with a weapon.
 * @param targetingPed The ped whose target start you wish to retrieve
 * @returns Returns three floats, x,y,z, representing the position where the ped's target starts, or false if it was unsuccessful.
 * @see https://wiki.mtasa.com/wiki/GetPedTargetStart
**/
declare function getPedTargetStart(targetingPed: Ped): [number, number, number];

/**
 * This function is used to get any simple or complex task of a certain type for a ped.
 * It can provide feedback on all tasks relating to a ped.
 * For example, while jumping, getPedSimplestTask will return TASK_SIMPLE_IN_AIR.
 * If you wanted to know specifically if the player has jumped, you would use this function.
 * If you did you will discover that while jumping Primary task 3 is TASK_COMPLEX_JUMP.
 * @param thePed The ped whose task you want to retrieve.
 * @param priority A string determining which set of tasks you want to retrieve it from. This must be either "primary" or "secondary".
 * @param taskType An integer value representing the task type (or slot) you want to get the task from. Types can be
 * @returns Returns the name of the most complex task. See list of player tasks for valid strings. Returns false if invalid arguments are specified or if there is no task of the type specified.
 * @see https://wiki.mtasa.com/wiki/GetPedTask
**/
declare function getPedTask(thePed: Ped, priority: string, taskType: number): [string, string, string, string];

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
 * Gets the current voice of a ped.
 * @param thePed the ped to get the voice of.
 * @returns If successul, returns the current voice type name and the voice name of the ped (see ped voices for possible names). Returns false in case of failure.
 * @see https://wiki.mtasa.com/wiki/GetPedVoice
**/
declare function getPedVoice(thePed: Ped): [string, string];

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
 * Returns the world position of the muzzle of the weapon that a ped is currently carrying.
 * The weapon muzzle is the end of the gun barrel where the bullets/rockets/... come out.
 * The position may not be accurate if the ped is off screen.
 * @param thePed the ped whose weapon muzzle position to retrieve.
 * @returns If successful, returns the x/y/z coordinates of the weapon muzzle. Returns false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetPedWeaponMuzzlePosition
**/
declare function getPedWeaponMuzzlePosition(thePed: Ped): [number, number, number];

/**
 * This function gets a ped's selected weapon slot.
 * @param thePed the ped to get the current weapon slot of.
 * @returns Returns the selected weapon slot ID on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetPedWeaponSlot
**/
declare function getPedWeaponSlot(thePed: Ped): number;

/**
 * This function gets the peds LOD distance.
 * @param getPedsLODDistance unknown
 * @returns This function returns a float containing the peds LOD distance.
 * @see https://wiki.mtasa.com/wiki/GetPedsLODDistance
**/
declare function getPedsLODDistance(getPedsLODDistance: number): [];

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
 * This function allows you to check the current blur level of a specified player.

 * @returns Returns the player's blur level if successful, false if an invalid player was given.Returns the local blur level.
 * @see https://wiki.mtasa.com/wiki/GetPlayerBlurLevel
**/
declare function getPlayerBlurLevel(): number;

/**
 * This function returns a player element for the player with the name passed to the function.
 * @param playerName A string containing the name of the player you want to reference
 * @returns Returns a player element for the player with the nickname provided. If there is no player with that name, false is returned.
 * @see https://wiki.mtasa.com/wiki/GetPlayerFromName
**/
declare function getPlayerFromName(playerName: string): Player;

/**
 * This function gets the GUI bounding box of the radar map texture.

 * @returns 
 * @see https://wiki.mtasa.com/wiki/GetPlayerMapBoundingBox
**/
declare function getPlayerMapBoundingBox(): [number, number, number, number];

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
 * Get the time left before a projectile detonates.
 * @param projectile the projectile to get the timer of.
 * @returns Returns the the time in milliseconds to detonation which depending on the projectile type will do different things:
 * @see https://wiki.mtasa.com/wiki/GetProjectileCounter
**/
declare function getProjectileCounter(projectile: Projectile): number;

/**
 * This function returns the creator of the specified projectile.
 * @param theProjectile The projectile element which creator you want to retrieve.
 * @returns Returns the element which created the projectile if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetProjectileCreator
**/
declare function getProjectileCreator(theProjectile: Projectile): Element;

/**
 * This function returns the force of the specified projectile.
 * @param theProjectile The projectile element which force you want to retrieve.
 * @returns Returns a float if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetProjectileForce
**/
declare function getProjectileForce(theProjectile: Projectile): number;

/**
 * This function returns the target of the specified projectile.
 * @param theProjectile The projectile element which target you want to retrieve.
 * @returns Returns the element which is the projectile's target if the projectile is valid and can have a target (like a heat-seeking rocket), false otherwise. If the projectile is a satchel charge, returns the element at which it is glued to (or nil if it isn't glued to any).
 * @see https://wiki.mtasa.com/wiki/GetProjectileTarget
**/
declare function getProjectileTarget(theProjectile: Projectile): Element;

/**
 * This function returns the type of the specified projectile.
 * @param theProjectile The projectile element which type you want to retrieve.
 * @returns Returns an integer over the type of the projectile or false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GetProjectileType
**/
declare function getProjectileType(theProjectile: Projectile): number;

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
 * This function retrieves a resource's GUI element.
 * The resource's GUI element is the element in the element tree which is the default parent of all GUI elements that belong to a particular resource.
 * It has a predefined variable called guiRoot, and each resource has one of these.
 * You can attach event handlers to this element to easily capture events that originate from your resource (and global events that originate from the root element).
 * @param [theResource=getThisResource] the resource whose GUI element we are getting.If not specified, assumes the current resource.
 * @returns Returns the root GUI element that contains all the other GUI elements.
 * @see https://wiki.mtasa.com/wiki/GetResourceGUIElement
**/
declare function getResourceGUIElement(theResource?: Resource): GuiElement;

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
 * This function gets the screen position of a point in the world.
 * This is useful for attaching 2D gui elements to parts of the world (e.g. players) or detecting if a point is on the screen (though it does not check if it is actually visible, you should use processLineOfSight for that).
 * @param x A float value indicating the x position in the world.
 * @param y A float value indicating the y position in the world.
 * @param z A float value indicating the z position in the world.
 * @param [edgeTolerance=0] A float value indicating the distance the position can be off screen before the function returns false. Note
 * @param , unknown
 * @param [relative=true] A boolean value that indicates if edgeTolerance is in pixels [false], or relative to the screen size [true].
 * @returns Returns two x, y floats indicating the screen position and float distance between screen and given position if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetScreenFromWorldPosition
**/
declare function getScreenFromWorldPosition(x: number, y: number, z: number, edgeTolerance?: number, ,: unknown, relative?: boolean): [number, number];

/**
 * This function gets the end position of a searchlight element.
 * Needs example
 * @param theSearchLight the searchlight to get the position where the searchlight's light cone ends.
 * @returns If the specified searchlight element is valid, this function will return three float, which are the three coordinates of searchlight's end position. If not, it will return false plus an error message.
 * @see https://wiki.mtasa.com/wiki/GetSearchLightEndPosition
**/
declare function getSearchLightEndPosition(theSearchLight: Searchlight): [number, number, number];

/**
 * This function gets the end radius of a searchlight element.
 * Needs example
 * @param theSearchLight the searchlight to get the radius of the searchlight's light cone in its end.
 * @returns If the specified searchlight element is valid, this function will return one float, which is the searchlight's end radius. If not, it will return false plus an error message.
 * @see https://wiki.mtasa.com/wiki/GetSearchLightEndRadius
**/
declare function getSearchLightEndRadius(theSearchLight: Searchlight): number;

/**
 * This function gets the start position of a searchlight element.
 * Needs example
 * @param theSearchLight the searchlight to get the position where the searchlight's light cone starts.
 * @returns If the specified searchlight element is valid, this function will return three float, which are the three coordinates of searchlight's start position. If not, it will return false plus an error message.
 * @see https://wiki.mtasa.com/wiki/GetSearchLightStartPosition
**/
declare function getSearchLightStartPosition(theSearchLight: Searchlight): [number, number, number];

/**
 * This function gets the start radius of a searchlight element.
 * Needs example
 * @param theSearchLight the searchlight to get the radius of the searchlight's light cone in its beginning.
 * @returns If the specified searchlight element is valid, this function will return one float, which is the searchlight's start radius. If not, it will return false plus an error message.
 * @see https://wiki.mtasa.com/wiki/GetSearchLightStartRadius
**/
declare function getSearchLightStartRadius(theSearchLight: Searchlight): number;

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
 * Use this to get the value of a vehicles adjustable property.
 * This property relates to movable parts of a model, for example hydra jets or dump truck tray.
 * @param theVehicle The vehicle you want to get the adjustable property of.
 * @returns Returns a value from 0 upwards representing adjustment. 0 is default position. Maximum varies per vehicle, for example hydra horizontal flight is 5000, while dump truck tray max tilt is 2500. Or returns false if the vehicle passed to the function is invalid.
 * @see https://wiki.mtasa.com/wiki/GetVehicleAdjustableProperty
**/
declare function getVehicleAdjustableProperty(theVehicle: Vehicle): number;

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
 * This function gets the component position of a vehicle.
 * @param theVehicle The vehicle you wish to get component position of.
 * @param theComponent A vehicle component (this is the frame name from the model file of the component you wish to modify)
 * @param [base=root] A string representing what the returned position is relative to. It can be one of the following values
 * @returns Returns three floats indicating the position of the component, x, y and z respectively.
 * @see https://wiki.mtasa.com/wiki/GetVehicleComponentPosition
**/
declare function getVehicleComponentPosition(theVehicle: Vehicle, theComponent: string, base?: string): [number, number, number];

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
 * This function gets the component scale of a vehicle.
 * @param theVehicle The vehicle you wish to get component scale of.
 * @param theComponent A vehicle component (this is the frame name from the model file of the component you wish to modify)
 * @param [base=root] A string representing what the returned scale is relative to. It can be one of the following values
 * @returns Returns three floats indicating the scale of the component, x, y and z respectively.
 * @see https://wiki.mtasa.com/wiki/GetVehicleComponentScale
**/
declare function getVehicleComponentScale(theVehicle: Vehicle, theComponent: string, base?: string): [number, number, number];

/**
 * This function get component visibility for vehicle.
 * @param theVehicle The vehicle you wish to get component visibility of.
 * @param theComponent A vehicle component (this is the frame name from the model file of the component you wish to modify)
 * @returns Returns a bool indicating the visible state of the component.
 * @see https://wiki.mtasa.com/wiki/GetVehicleComponentVisible
**/
declare function getVehicleComponentVisible(theVehicle: Vehicle, theComponent: string): boolean;

/**
 * This function gets a table of the components currently on a vehicle.
 * @param theVehicle The vehicle you wish to get the components of.
 * @returns Returns a table containing the name of the component as the key and visibility flag of that component as the value
 * @see https://wiki.mtasa.com/wiki/GetVehicleComponents
**/
declare function getVehicleComponents(theVehicle: Vehicle): object;

/**
 * This function is used to get the player in control of the specified vehicle which includes somebody who is trying to enter the drivers seat.
 * @param theVehicle the vehicle you want to get the 'controller' of.
 * @returns Returns a player object, if there isn't a driver, it will search the 'trailer chain' for the front driver, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetVehicleController
**/
declare function getVehicleController(theVehicle: Vehicle): Player;

/**
 * Gets the specified vehicle's current gear.
 * @param theVehicle the vehicle to get the gear of
 * @returns Returns the gear if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetVehicleCurrentGear
**/
declare function getVehicleCurrentGear(theVehicle: Vehicle): number;

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
 * Retrieves the current gravity vector of a vehicle.
 * This is the direction in which the vehicle falls, also the cameras of any passengers will be rotated to match it.
 * @param theVehicle the vehicle to retrieve the gravity vector of.
 * @returns Returns the x, y and z components of the gravity vector if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetVehicleGravity
**/
declare function getVehicleGravity(theVehicle: Vehicle): [number, number, number];

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
 * This function gets position of the dummies contained in a vehicle model.
 * @param modelID The model ID which you want to apply the change to
 * @param dummy The dummy whose position you want to get
 * @returns Returns the position of given dummy if everything went fine, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetVehicleModelDummyPosition
**/
declare function getVehicleModelDummyPosition(modelID: number, dummy: string): boolean;

/**
 * This function returns the position of the exhaust fumes the vehicle model emits.
 * @param modelID The vehicle model ID.
 * @returns Returns the position of the exhaust fumes if everything went fine or false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetVehicleModelExhaustFumesPosition
**/
declare function getVehicleModelExhaustFumesPosition(modelID: number): [number, number, number];

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
 * This function gets the nitro count of the vehicle.
 * Warning: Only works if the vehicle is streamed in, use isElementStreamedIn to check.
 * @param theVehicle unknown
 * @returns Returns an integer determining the amount of nitro counts of the vehicle, false if there is no nitro in the vehicle.
 * @see https://wiki.mtasa.com/wiki/GetVehicleNitroCount
**/
declare function getVehicleNitroCount(theVehicle: Vehicle): number;

/**
 * This function gets the nitro level of the vehicle.
 * Warning: Only works if the vehicle is streamed in
 * @param theVehicle unknown
 * @returns Returns a float determining the nitro level (ranges from 0.0001 to 1.0) of the vehicle, false if there is no nitro in the vehicle.
 * @see https://wiki.mtasa.com/wiki/GetVehicleNitroLevel
**/
declare function getVehicleNitroLevel(theVehicle: Vehicle): number;

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
 * This function get the parameters of a vehicles siren.
 * @param theVehicle The vehicle to get the siren parameters of
 * @returns Returns a table with the siren count, siren type and a sub table for the four flags. False otherwise.
 * @see https://wiki.mtasa.com/wiki/GetVehicleSirenParams
**/
declare function getVehicleSirenParams(theVehicle: Vehicle): object;

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
 * Returns the distance of vehicles LOD.
 * @param , unknown
 * @param getVehiclesLODDistance unknown
 * @returns 
 * @see https://wiki.mtasa.com/wiki/GetVehiclesLODDistance
**/
declare function getVehiclesLODDistance(,: number, getVehiclesLODDistance: number): [number];

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
 * This function allows you to retrieve the water level from a certain location.
 * The water level is 0 in most places though it can vary (e.g. it's higher near the dam).
 * - Note: Some small water areas within parts of the city do not count as water to be used with this function. For example, the shallow water area in Northwest San Fierro.
 * @param theWater the water element
 * @returns Returns an integer of the water level if the localPlayer/position is near the water (-3 to 20 on the Z coordinate) else false if there's no water near the localPlayer/position.
 * @see https://wiki.mtasa.com/wiki/GetWaterLevel
**/
declare function getWaterLevel(theWater: Water): number;

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
 * This function gets the total ammo a custom weapon has.
 * @param theWeapon unknown
 * @returns Returns an integer containing how many ammo left has the weapon. Returns false if an error occured.
 * @see https://wiki.mtasa.com/wiki/GetWeaponAmmo
**/
declare function getWeaponAmmo(theWeapon: Weapon): number;

/**
 * This function gets the amount of ammo left in a custom weapon's magazine/clip.
 * @param theWeapon the weapon to get the clip ammo of.
 * @returns Returns the amount of ammo in the custom weapon's clip, false if an error occured.
 * @see https://wiki.mtasa.com/wiki/GetWeaponClipAmmo
**/
declare function getWeaponClipAmmo(theWeapon: Weapon): number;

/**
 * This gets the firing rate to be used when a custom weapon opens fire.
 * @param theWeapon The weapon to modify the firing rate of.
 * @returns Returns an integer with the firing rate of the custom weapon, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetWeaponFiringRate
**/
declare function getWeaponFiringRate(theWeapon: Weapon): number;

/**
 * This function gets the flags of a custom weapon.
 * @param theWeapon the weapon to get the flag of.
 * @param theFlag the weapon flag to get
 * @returns Returns the true or false on success (flags flag returns 8 values) if the flag is enabled or not. Returns false if the weapon element isn't valid or an error occured.
 * @see https://wiki.mtasa.com/wiki/GetWeaponFlags
**/
declare function getWeaponFlags(theWeapon: Weapon, theFlag: string): boolean;

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
 * This function gets the owner of a custom weapon.
 * Weapon ownership system was, however, disabled, so this function always returns false.
 * Please refer to setWeaponOwner for details.
 * @param theWeapon The weapon to get the owner of.
 * @returns This function was intended to return the player which owns the custom weapon, and false if an error occured. However, at the moment it always returns false.
 * @see https://wiki.mtasa.com/wiki/GetWeaponOwner
**/
declare function getWeaponOwner(theWeapon: Weapon): boolean;

/**
 * This function gets a weapon property of the specified custom weapon (clientside only) or specified player-held weapon (both client and server).
 * @param weaponID/string unknown
 * @param , unknown
 * @param weaponSkill Either
 * @param property The property you want to get the value of
 * @returns On success: int: The weapon property On failure: bool: False if the passed arguments were invalid
 * @see https://wiki.mtasa.com/wiki/GetWeaponProperty
**/
declare function getWeaponProperty(weaponID/string: number, ,: unknown, weaponSkill: string, property: string): number;

/**
 * This function gets the state of a custom weapon.
 * @param theWeapon unknown
 * @returns 
 * @see https://wiki.mtasa.com/wiki/GetWeaponState
**/
declare function getWeaponState(theWeapon: Weapon): string;

/**
 * This functions gets the target of a custom weapon.
 * @param theWeapon The weapon to get the target of.
 * @returns 
 * @see https://wiki.mtasa.com/wiki/GetWeaponTarget
**/
declare function getWeaponTarget(theWeapon: Weapon): [, number];

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
 * This function allows you to retrieve the world position corresponding to a 2D position on the screen, at a certain depth.
 * If you want to detect what element is at a particular point on the screen, use processLineOfSight between the camera position and the position returned from this function when passed a high depth value (100 or so, depending how far away you want to detect elements at).
 * As expected, setting 0 as the distance will cause the point retrived to be within the camera itself.
 * That means that drawing any 3D thing in that point would result in it not being visible.
 * Depending on the camera near clip distance, however, the minimum distance to be able to view it can vary.
 * @param x A float value indicating the x position on the screen, in pixels.
 * @param y A float value indicating the y position on the screen, in pixels.
 * @param depth A float value indicating the distance from the camera of the point whose coordinates we are retrieving, in units.
 * @returns Returns three x, y, z floats indicating the world position if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetWorldFromScreenPosition
**/
declare function getWorldFromScreenPosition(x: number, y: number, depth: number): [number, number, number];

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
 * This function gives the specified weapon to the specified ped.
 * This function can't be used on players, use giveWeapon for that.
 * This function is mainly useful for client side created peds however you can use it on a server side ped, though note that the weapon wouldn't be synced between clients unless your script gives the weapon to the ped on every client.
 * There is an optional argument to specify ammunition and whether to set as the current weapon.
 * If you don't specify an ammo value it will give 30 ammo by default and for a melee weapon you can specify just 1 or above.
 * - Note: *When setting ammo for weapons in slot 0,1,10,11 or 12 the maximum ammo is 1
 * *When setting ammo for weapons in slot 3,4,5 the ammo is added
 * *When setting ammo for weapons in slot 2,6,7,8,9 and the slot weapon is changing, the ammo is replaced
 * @param thePed A ped element.
 * @param weapon A whole number integer that refers to a Weapon ID. Click here for a list of possible weapon IDs.
 * @param [ammo=30] A whole number integer serving as the ammo amount for the given weapon. For weapons that do not require ammo, such as melee, this should be at least 1.
 * @param [setAsCurrent=false] A boolean value determining whether or not the weapon will be set as the peds currently selected weapon.
 * @returns Returns true if weapon was successfully given to the ped, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GivePedWeapon
**/
declare function givePedWeapon(thePed: Ped, weapon: number, ammo?: number, setAsCurrent?: boolean): boolean;

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
 * This function defocuses a focused GUI element.
 * Used primarily for edit fields and memos.
 * @param guiElement the GUI element that you want to defocus
 * @returns Returns true if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiBlur
**/
declare function guiBlur(guiElement: Element): boolean;

/**
 * This function brings a GUI element on top of others.
 * - Note: If property "AlwaysOnTop" sets to "True", this function will return false.
 * @param guiElement the GUI element that you want to move to the front.
 * @returns Returns true if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiBringToFront
**/
declare function guiBringToFront(guiElement: Element): boolean;

/**
 * This function gets a checkbox's selection state.
 * @param theCheckbox The checkbox you wish to retrieve the selection state of.
 * @returns Returns true if the checkbox is selected, false if it is not.
 * @see https://wiki.mtasa.com/wiki/GuiCheckBoxGetSelected
**/
declare function guiCheckBoxGetSelected(theCheckbox: Element): boolean;

/**
 * This function selects (ticks) or unselects a checkbox.
 * @param theCheckbox The GUI element in which you wish to change the selection state of
 * @param state The state of the checkbox, where true indicates selected, and false indicates unselected.
 * @returns Returns true if the checkbox's selection state was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCheckBoxSetSelected
**/
declare function guiCheckBoxSetSelected(theCheckbox: Element, state: boolean): boolean;

/**
 * Adds an item to a combobox.
 * @param comboBox The combobox you want to add a row to
 * @param value The text that the item will contain.
 * @returns Returns the item ID if it has been created, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiComboBoxAddItem
**/
declare function guiComboBoxAddItem(comboBox: GuiComboBox, value: string): number;

/**
 * This function removes all the items from a combobox.
 * @param comboBox The combobox element to be cleared
 * @returns Returns true if the combobox element is valid and has been cleared successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiComboBoxClear
**/
declare function guiComboBoxClear(comboBox: GuiComboBox): boolean;

/**
 * This function returns the number of items in a combo box.
 * @param comboBox The combo box to get the number of items from.
 * @returns Returns the number of items if the function is successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiComboBoxGetItemCount
**/
declare function guiComboBoxGetItemCount(comboBox: GuiComboBox): number;

/**
 * This function retrieves the text from a specific combobox item.
 * @param comboBox The combobox containing the item you're interested in
 * @param itemId The index of the item
 * @returns Returns the text of the item if the arguments are right, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiComboBoxGetItemText
**/
declare function guiComboBoxGetItemText(comboBox: GuiComboBox, itemId: number): string;

/**
 * This function returns the index of the selected combobox item.
 * @param comboBox the combobox you want to know the selected item index of
 * @returns Returns the index of the selected item if the specified combobox is valid and has a selected item, -1 if no item is selected, nil otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiComboBoxGetSelected
**/
declare function guiComboBoxGetSelected(comboBox: GuiComboBox): number;

/**
 * This function returns the state of combobox.
 * @param comboBox The combo box to get the state.
 * @returns Returns true if combobox is opened, false if combobox is closed, nil otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiComboBoxIsOpen
**/
declare function guiComboBoxIsOpen(comboBox: GuiComboBox): boolean;

/**
 * This function removes an item from a combobox.
 * @param comboBox The combobox containing the item you're interested in
 * @param itemId The index of the item to remove
 * @returns Returns true if the item was removes successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiComboBoxRemoveItem
**/
declare function guiComboBoxRemoveItem(comboBox: GuiComboBox, itemId: number): boolean;

/**
 * This function changes the text of a combobox item.
 * @param comboBox The combobox containing the item you're interested in
 * @param itemId The index of the item
 * @param text The text you want to put in (does NOT accept numbers, use tostring for that)
 * @returns Returns true if the text was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiComboBoxSetItemText
**/
declare function guiComboBoxSetItemText(comboBox: GuiComboBox, itemId: number, text: string): boolean;

/**
 * This function set combo box state as open or close.
 * @param comboBox The combobox to be opened or closed.
 * @param state The state of combobox. true, if the combobox is to be opened. false if the combobox is to be closed.
 * @returns Returns true if is successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiComboBoxSetOpen
**/
declare function guiComboBoxSetOpen(comboBox: GuiComboBox, state: boolean): boolean;

/**
 * This function sets the selected item from a combobox.
 * @param comboBox the combobox you want to select an item from
 * @param itemIndex the item you want to select (item 0 is the first item). If -1 is specified, then the combo box text is set to it's caption.
 * @returns Returns true if the selected item has been changed successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiComboBoxSetSelected
**/
declare function guiComboBoxSetSelected(comboBox: GuiComboBox, itemIndex: number): boolean;

/**
 * browser]] element.
 * @param x A float of the 2D x position of the browser on a player's screen. This is affected by the relative argument.
 * @param y A float of the 2D y position of the browser on a player's screen. This is affected by the relative argument.
 * @param width The browser's native width. This should be greater than or equal to 1.
 * @param height The browser's native height. This should be greater than or equal to 1.
 * @param isLocal Sets whether the browser can only show local content or content from the internet (see examples over here for more information)
 * @param isTransparent true if you want the browser to support transparency, false otherwise
 * @param isRelative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height floats must be between 0 and 1, representing sizes/positions as a fraction of the screen size. If false, then the size and co-ordinates are based on client's resolution, accessible using guiGetScreenSize.
 * @param [parent=nil] This is the parent that the radio button is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent.If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @returns Returns a gui-browser element if it was created successfully, false otherwise. Returns also false, if the user disabled remote pages and isLocal was set to false.
 * @see https://wiki.mtasa.com/wiki/GuiCreateBrowser
**/
declare function guiCreateBrowser(x: number, y: number, width: number, height: number, isLocal: boolean, isTransparent: boolean, isRelative: boolean, parent?: GuiElement): GuiBrowser;

/**
 * This function allows creation of a GUI Button, which is a clickable item as part of GUI.
 * @param x A float of the 2D x position of the GUI button on a player's screen. This is affected by the relative argument.
 * @param y A float of the 2D y position of the GUI button on a player's screen. This is affected by the relative argument.
 * @param width A float of the width of the GUI button. This is affected by the relative argument.
 * @param height A float of the height of the GUI button. This is affected by the relative argument.
 * @param text A string of the text that will be displayed as a label on the button.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x, y, width and height floats must be between 0 and 1, representing sizes relative to the parent.
 * @param [parent=nil] This is the parent that the gui button is attached to.If the relative argument is true, sizes and positioning will be made relative to this parent.If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @returns Returns an element of the created button if it was successfully created, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateButton
**/
declare function guiCreateButton(x: number, y: number, width: number, height: number, text: string, relative: boolean, parent?: Element): Element;

/**
 * This function creates a checkbox.
 * @param x A float of the 2D x position of the checkbox on a player's screen. This is affected by the relative argument.
 * @param y A float of the 2D y position of the checkbox on a player's screen. This is affected by the relative argument.
 * @param width A float of the width of the text field next to the checkbox. This is affected by the relative argument.
 * @param height A float of the height of the text field next to the checkbox. This is affected by the relative argument.
 * @param text The text to be displayed next to the checkbox.
 * @param selected A boolean representing whether the checkbox created should be selected by default.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height floats must be between 0 and 1, representing measures relative to the parent.
 * @param [parent=nil] This is the parent that the checkbox is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent.If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @returns Returns element of the checkbox if it was created succesfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateCheckBox
**/
declare function guiCreateCheckBox(x: number, y: number, width: number, height: number, text: string, selected: boolean, relative: boolean, parent?: Element): Element;

/**
 * This function creates a combobox GUI element, which you can compare to a gridlist with a dropdown feature.
 * - Note: The height of a combobox must be enough to fit the drop down menu, else the drop down won't appear. See guiComboBoxAdjustHeight to give your combobox the correct height.
 * @param x A float of the 2D x position of the GUI combobox on a player's screen. This is affected by the relative argument.
 * @param y A float of the 2D y position of the GUI combobox on a player's screen. This is affected by the relative argument.
 * @param width A float of the width of the GUI combobox. This is affected by the relative argument.
 * @param height A float of the height of the GUI combobox. This is affected by the relative argument. Note
 * @param caption A string for what the title of your combobox will be. This will be shown if no item is selected.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height floats must be between 0 and 1, representing sizes relative to the parent.
 * @param [parent=nil] This is the parent that the GUI combobox is attached to.If the relative argument is true, sizes and positioning will be made relative to this parent.If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @returns Returns an element of the created combobox if it was successfully created, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateComboBox
**/
declare function guiCreateComboBox(x: number, y: number, width: number, height: number, caption: string, relative: boolean, parent?: Element): Element;

/**
 * This function is for creating a new GUI edit box.
 * This is a text box in which the user can input text.
 * Edit boxes only allow a single line of text.
 * If you want to allow multiple lines of text create a memo box using guiCreateMemo.
 * @param x A float of the 2D x position of the GUI edit box on a player's screen. This is affected by the relative argument.
 * @param y A float of the 2D y position of the GUI edit box on a player's screen. This is affected by the relative argument.
 * @param width A float of the width of the GUI edit box. This is affected by the relative argument.
 * @param height A float of the height of the GUI edit box. This is affected by the relative argument.
 * @param text A string of the text that will be displayed by default in the edit box.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height floats must be between 0 and 1, representing measures relative to the parent.
 * @param [parent=nil] This is the parent that the GUI edit box is attached to.If the relative argument is true, sizes and positioning will be made relative to this parent.If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @returns Returns a gui-edit element of the created edit box if it was successfully created, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateEdit
**/
declare function guiCreateEdit(x: number, y: number, width: number, height: number, text: string, relative: boolean, parent?: Element): Element;

/**
 * This function creates a GUI font element that can be used in guiSetFont.
 * Successful font creation is not guaranteed, and may fail due to hardware or memory limitations.
 * To see if creation is likely to fail, use dxGetStatus.
 * (When VideoMemoryFreeForMTA is zero, failure is guaranteed.)
 * @param filepath the name of the file containing the font
 * @param [size=9] size of the font
 * @returns Returns a GUI font element if successful, false if invalid arguments were passed to the function, or there is insufficient resources available. You should always check to see if this function has returned false.
 * @see https://wiki.mtasa.com/wiki/GuiCreateFont
**/
declare function guiCreateFont(filepath: string, size?: number): Element;

/**
 * This function creates a grid list GUI element.
 * These are menu's which are designed in lists and can have multiple columns.
 * A good example of a gridlist element can be found in MTA's settings box, under Controls.
 * @param x A float of the 2D x position of the GUI gridlist on a player's screen. This is affected by the relative argument.
 * @param y A float of the 2D y position of the GUI gridlist on a player's screen. This is affected by the relative argument.
 * @param width A float of the width of the GUI gridlist. This is affected by the relative argument.
 * @param height A float of the height of the GUI gridlist. This is affected by the relative argument.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height floats must be between 0 and 1, representing sizes relative to the parent.
 * @param [parent=nil] This is the parent that the gui gridlist is attached to.If the relative argument is true, sizes and positioning will be made relative to this parent.If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @returns Returns an element of the created gridlist if it was successfully created, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateGridList
**/
declare function guiCreateGridList(x: number, y: number, width: number, height: number, relative: boolean, parent?: Element): Element;

/**
 * 
 * @param x A float of the 2D x position of the GUI label on a player's screen. This is affected by the relative argument.
 * @param y A float of the 2D y position of the GUI label on a player's screen. This is affected by the relative argument.
 * @param width A float of the width of the GUI label. This is affected by the relative argument.
 * @param height A float of the height of the GUI label. This is affected by the relative argument.
 * @param text A string of the text that will be displayed by the label.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height floats must be between 0 and 1, representing sizes relative to the parent.
 * @param [parent=nil] This is the parent that the gui label is attached to.If the relative argument is true, sizes and positioning will be made relative to this parent.If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @returns Returns an element of the created label if it was successfully created, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateLabel
**/
declare function guiCreateLabel(x: number, y: number, width: number, height: number, text: string, relative: boolean, parent?: Element): Element;

/**
 * This function creates a new GUI memo.
 * This is a multiline edit box in which the user can input text.
 * @param x A float of the 2D x position of the GUI memo on a player's screen. This is affected by the relative argument.
 * @param y A float of the 2D y position of the GUI memo on a player's screen. This is affected by the relative argument.
 * @param width A float of the width of the GUI memo. This is affected by the relative argument.
 * @param height A float of the height of the GUI memo. This is affected by the relative argument.
 * @param text A string of the text that will be displayed by default in the memo.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height floats must be between 0 and 1, representing measures relative to the parent.
 * @param [parent=nil] This is the parent that the GUI memo is attached to.If the relative argument is true, sizes and positioning will be made relative to this parent.If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @returns Returns a gui-memo element of the created memo if it was successfully created, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateMemo
**/
declare function guiCreateMemo(x: number, y: number, width: number, height: number, text: string, relative: boolean, parent?: Element): [, ];

/**
 * This function creates a progress bar.
 * @param x A float of the 2D x position of the progress bar on a player's screen. This is affected by the relative argument.
 * @param y A float of the 2D y position of the progress bar on a player's screen. This is affected by the relative argument.
 * @param width A float of the width of the progress bar. This is affected by the relative argument.
 * @param height A float of the height of the progress bar. This is affected by the relative argument.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height floats must be between 0 and 1, representing measures relative to the parent.
 * @param [parent=nil] This is the parent that the progress bar is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent.If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @returns Returns element of the progress bar if it was created succesfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateProgressBar
**/
declare function guiCreateProgressBar(x: number, y: number, width: number, height: number, relative: boolean, parent?: Element): Element;

/**
 * This function creates a radio button.
 * @param x A float of the 2D x position of the radio button on a player's screen. This is affected by the relative argument.
 * @param y A float of the 2D y position of the radio button on a player's screen. This is affected by the relative argument.
 * @param width A float of the width of the text field next to the radio button. This is affected by the relative argument.
 * @param height A float of the height of the text field next to the radio button. This is affected by the relative argument.
 * @param text The text to be displayed next to the radio button.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height floats must be between 0 and 1, representing measures relative to the parent.
 * @param [parent=nil] This is the parent that the radio button is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent.If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.NOTE: All radio buttons become grouped together with their parent item.Only ONE radio button per group/parent will be able to be selected at the same time.
 * @returns Returns element of the radio button if it was created succesfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateRadioButton
**/
declare function guiCreateRadioButton(x: number, y: number, width: number, height: number, text: string, relative: boolean, parent?: Element): Element;

/**
 * This function creates a GUI scrollbar.
 * You can use the functions guiScrollPaneSetHorizontalScrollPosition, guiScrollPaneSetVerticalScrollPosition, guiScrollPaneGetHorizontalScrollPosition and guiScrollPaneGetVerticalScrollPosition to read and modify the scrollbar's scroll.
 * @param x the 2D x offset of the GUI scrollbar from its parent. This is affected by the relative argument.
 * @param y the 2D y offset of the GUI scrollbar from its parent. This is affected by the relative argument.
 * @param width the width of the GUI scrollbar. This is affected by the relative argument.
 * @param height the height of the GUI scrollbar. This is affected by the relative argument.
 * @param horizontal whether this scrollbar is horizontal (true) or vertical (false).
 * @param relative whether sizes and positions are relative to their parent's. If this is true, then all measures must be between 0 and 1, representing sizes/positions as a fraction of the parent widget's size.
 * @param element unknown
 * @param = unknown
 * @param ] unknown
 * @returns Returns a gui-scrollbar if it was created successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateScrollBar
**/
declare function guiCreateScrollBar(x: number, y: number, width: number, height: number, horizontal: boolean, relative: boolean, element: unknown, =: unknown, ]: null): [, ];

/**
 * This creates a GUI scroll pane.
 * @param x the 2D x offset of the GUI scrollpane from its parent. This is affected by the relative argument.
 * @param y the 2D y offset of the GUI scrollpane from its parent. This is affected by the relative argument.
 * @param width the width of the GUI scrollpane. This is affected by the relative argument.
 * @param height the height of the GUI scrollpane. This is affected by the relative argument.
 * @param relative whether sizes and positions are relative to their parent's. If this is true, then all measures must be between 0 and 1, representing sizes/positions as a fraction of the parent widget's size.
 * @param element unknown
 * @param = unknown
 * @param ] unknown
 * @returns The gui-element if created, otherwise false.
 * @see https://wiki.mtasa.com/wiki/GuiCreateScrollPane
**/
declare function guiCreateScrollPane(x: number, y: number, width: number, height: number, relative: boolean, element: unknown, =: unknown, ]: null): Element;

/**
 * This function creates a static image using a .png image in the resource.
 * @param x A float of the 2D x position of the image on a player's screen. This is affected by the relative argument.
 * @param y A float of the 2D y position of the image on a player's screen. This is affected by the relative argument.
 * @param width A float of the width of the image. This is affected by the relative argument.
 * @param height A float of the height of the image. This is affected by the relative argument.
 * @param path The filepath of the image file that is being loaded.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height floats must be between 0 and 1, representing measures relative to the parent.
 * @param [parent=nil] This is the parent that the image is attached to. If the relative argument is true, sizes and positioning will be made relative to this parent.If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @returns Returns element if image was created successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateStaticImage
**/
declare function guiCreateStaticImage(x: number, y: number, width: number, height: number, path: string, relative: boolean, parent?: Element): Element;

/**
 * This function creates a tab on a pre-existing tab panel.
 * A tab is a button as well as a 'dimension' that can be used to switch between information by clicking on the tabs.
 * Tabs are sorted on a tab panel in the order that they are created.
 * @param text The caption for the tab
 * @param parent The parent tab panel, as a tab panel element type
 * @returns Returns a tab element if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateTab
**/
declare function guiCreateTab(text: string, parent: Element): Element;

/**
 * This function creates a Tab Panel, which acts as a template to create Tabs upon.
 * @param x A float of the 2D x position of the GUI tab panel on a player's screen. This is affected by the relative argument.
 * @param y A float of the 2D y position of the GUI tab panel on a player's screen. This is affected by the relative argument.
 * @param width A float of the width of the GUI tab panel. This is affected by the relative argument.
 * @param height A float of the height of the GUI tab panel. This is affected by the relative argument.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height floats must be between 0 and 1, representing sizes relative to the parent.
 * @param [parent=nil] This is the parent that the tab panel is attached to.If the relative argument is true, sizes and positioning will be made relative to this parent.If the relative argument is false, positioning will be the number of offset pixels from the parent's origin.If no parent is passed, the parent will become the screen - causing positioning and sizing according to screen positioning.
 * @returns Returns a GUI tab panel element if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateTabPanel
**/
declare function guiCreateTabPanel(x: number, y: number, width: number, height: number, relative: boolean, parent?: Element): Element;

/**
 * This function is for creating a new GUI window.
 * This provides a base for other gui elements to be created within.
 * However, windows do not have a parent and cannot be created in any GUI elements.
 * @param x A float of the 2D x position of the GUI window on a player's screen. This is affected by the relative argument.
 * @param y A float of the 2D y position of the GUI window on a player's screen. This is affected by the relative argument.
 * @param width A float of the width of the GUI window. This is affected by the relative argument.
 * @param height A float of the height of the GUI window. This is affected by the relative argument.
 * @param titleBarText A string of the text that will be displayed in the title bar of the window.
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height floats must be between 0 and 1, representing sizes/positions as a fraction of the screen size. If false, then the size and co-ordinates are based on client's resolution, accessible using guiGetScreenSize.
 * @returns Returns a gui window element if it was created successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiCreateWindow
**/
declare function guiCreateWindow(x: number, y: number, width: number, height: number, titleBarText: string, relative: boolean): Element;

/**
 * This function deletes a tab from a tab panel.
 * @param tabToDelete This is an element representing the tab that you want to delete.
 * @param tabPanel This is the tab panel parent that the tab is attached to.
 * @returns Returns true the tab was successfully deleted, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiDeleteTab
**/
declare function guiDeleteTab(tabToDelete: Element, tabPanel: Element): boolean;

/**
 * This function returns the caret (the text cursor) position within the editbox.
 * @param theElement The edit box you want to get the caret position from
 * @returns Returns the caret index on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiEditGetCaretIndex
**/
declare function guiEditGetCaretIndex(theElement: Element): number;

/**
 * This function returns the maximum text length that can be typed within an edit box.
 * @param edit unknown
 * @param ) unknown
 * @returns Returns the maximum text length on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiEditGetMaxLength
**/
declare function guiEditGetMaxLength(edit: unknown, ): unknown): number;

/**
 * This function checks if an edit box is masked.
 * @param edit unknown
 * @param ) unknown
 * @returns Returns true if the edit box is masked, false if not, nil if an invalid edit box was provided.
 * @see https://wiki.mtasa.com/wiki/GuiEditIsMasked
**/
declare function guiEditIsMasked(edit: unknown, ): unknown): boolean;

/**
 * This function checks if an edit box is read-only.
 * @param edit unknown
 * @param ) unknown
 * @returns Returns true if the edit box is read-only, false if not, nil if an invalid edit box was provided.
 * @see https://wiki.mtasa.com/wiki/GuiEditIsReadOnly
**/
declare function guiEditIsReadOnly(edit: unknown, ): unknown): boolean;

/**
 * This function sets the current position of the caret (the text cursor) within the edit box.
 * @param theElement The edit box to be changed.
 * @param index An integer referring to the desired position within the box.
 * @returns Returns true if the index was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiEditSetCaretIndex
**/
declare function guiEditSetCaretIndex(theElement: Element, index: number): boolean;

/**
 * This function sets the maximum text length that can be typed into an edit box.
 * @param guiEdit unknown
 * @param length An integer indicating the maximum number of characters that can be typed into the box.
 * @returns Returns true if the max length was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiEditSetMaxLength
**/
declare function guiEditSetMaxLength(guiEdit: Element, length: number): boolean;

/**
 * This function allows you to set or remove read-only status for an edit box.
 * If read-only is set to true, the box is not editable.
 * @param editField The element of the edit field to be modified.
 * @param status A boolean value indicating whether read-only is to be enabled or disabled.
 * @returns Returns true if edit field's read-only status was changed successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiEditSetReadOnly
**/
declare function guiEditSetReadOnly(editField: Element, status: boolean): boolean;

/**
 * This function focuses a defocused GUI element.
 * Used primarily for edit fields and memos.
 * @param guiElement the GUI element that you want to focus
 * @returns Returns true if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiFocus
**/
declare function guiFocus(guiElement: Element): boolean;

/**
 * Alpha represents the transparency of a gui element.
 * This function allows retrieval of a gui element's current alpha.
 * @param guiElement The gui element in which you want to retrieve the alpha of.
 * @returns This function returns a positive integer in between 0 and 1 of the gui element's current alpha, or false if it could not be retrieved.
 * @see https://wiki.mtasa.com/wiki/GuiGetAlpha
**/
declare function guiGetAlpha(guiElement: Element): number;

/**
 * This function creates gets the browser element behind a gui-browser (a browser that has been created via guiCreateBrowser).
 * @param browser unknown
 * @param ) unknown
 * @returns Returns the Browser element if a correct gui-browser has been passed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGetBrowser
**/
declare function guiGetBrowser(browser: unknown, ): unknown): Browser;

/**
 * This function is used to get the type of the current cursor image.
 * @param guiGetCursorType unknown
 * @returns Returns a string containing the cursor type:
 * @see https://wiki.mtasa.com/wiki/GuiGetCursorType
**/
declare function guiGetCursorType(guiGetCursorType: string): [];

/**
 * This function determines if a GUI element is enabled.
 * @param guiElement the GUI element to be checked.
 * @returns Returns true if the element is enabled, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGetEnabled
**/
declare function guiGetEnabled(guiElement: Element): boolean;

/**
 * This function is used to get the current font that is used to draw text in GUI elements.
 * @param guiElement element you wish to get the font of.
 * @returns 
 * @see https://wiki.mtasa.com/wiki/GuiGetFont
**/
declare function guiGetFont(guiElement: Element): [string, Element];

/**
 * This function checks whether user input is focused on the GUI or the game.
 * @param guiGetInputEnabled unknown
 * @returns Returns true if input is focused on GUI, false if it's focused on the game.
 * @see https://wiki.mtasa.com/wiki/GuiGetInputEnabled
**/
declare function guiGetInputEnabled(guiGetInputEnabled: boolean): [];

/**
 * This function returns the current input mode as set by guiSetInputMode.
 * Default mode is "allow_binds".
 * @param guiGetInputMode unknown
 * @returns Returns a string defining the current input mode, potential values are:
 * @see https://wiki.mtasa.com/wiki/GuiGetInputMode
**/
declare function guiGetInputMode(guiGetInputMode: string): [];

/**
 * This function allows retrieval of a GUI element's current position, relative to its parent.
 * @param guiElement The gui element of which you wish to retrieve the position.
 * @param relative A boolean representing whether the position should be relative to the element's parent width, or the number of offset pixels from the parent's origin.
 * @returns Returns floats representing the x and y position of the element, or false if the position could not be retrieved.
 * @see https://wiki.mtasa.com/wiki/GuiGetPosition
**/
declare function guiGetPosition(guiElement: Element, relative: boolean): [number, number];

/**
 * This function gets a list of the CEGUI property names and values of a GUI element.
 * To find out what the different properties mean, check out the CEGUI properties page.
 * @param guiElement the GUI element you wish to get the properties of.
 * @returns If the function succeeds, the return value is a table. Its keys are property names, the corresponding values are the values of the properties (both names and values are always strings). If the function fails, it returns false.
 * @see https://wiki.mtasa.com/wiki/GuiGetProperties
**/
declare function guiGetProperties(guiElement: Element): object;

/**
 * This function gets the value of a specific CEGUI property of a GUI element.
 * For a list of properties and their meaning, see the CEGUI properties page.
 * @param guiElement the GUI element you wish to get a property of.
 * @param property the name of of property you want the value of.
 * @returns If the function succeeds, it returns a string with the value of the property. If it fails, it returns false.
 * @see https://wiki.mtasa.com/wiki/GuiGetProperty
**/
declare function guiGetProperty(guiElement: Element, property: string): string;

/**
 * This function retrieves the local screen size according to the resolution they are using.

 * @returns This returns two floats representing the player's screen resolution, width and height.
 * @see https://wiki.mtasa.com/wiki/GuiGetScreenSize
**/
declare function guiGetScreenSize(): [number, number];

/**
 * This function returns the currently selected tab in the specified tab panel.
 * @param tabPanel The tab panel which current tab you want to retrieve.
 * @returns Returns an element of the tab if a tab was selected or nil if no tab was selected. If passed arguments were invalid or something went wrong, the function will return false.
 * @see https://wiki.mtasa.com/wiki/GuiGetSelectedTab
**/
declare function guiGetSelectedTab(tabPanel: Element): Element;

/**
 * This function gets the size of a GUI element.
 * @param theElement The GUI element to get size of.
 * @param relative A boolean representing whether the size should be relative to the element's parent width, or an absolute size in pixels.
 * @returns Returns the GUI element size x and y if the function has been successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGetSize
**/
declare function guiGetSize(theElement: Element, relative: boolean): [number, number];

/**
 * This function is used to get the text of GUI elements like edit boxes, labels, buttons etc.
 * @param guiElement element you wish to get text of.
 * @returns Returns a string containing the requested element's text, or false if the gui element passed to the function is invalid.
 * @see https://wiki.mtasa.com/wiki/GuiGetText
**/
declare function guiGetText(guiElement: Element): string;

/**
 * This function determines if a GUI element is visible.
 * @param guiElement the GUI element to be checked
 * @returns Returns true if the element is visible, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGetVisible
**/
declare function guiGetVisible(guiElement: Element): boolean;

/**
 * This function is used to create columns in grid lists.
 * @param gridList The grid list you want to add a column to
 * @param title Title of the column
 * @param width Column width, relative to the grid list width
 * @returns Returns the column id if it was created, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListAddColumn
**/
declare function guiGridListAddColumn(gridList: Element, title: string, width: number): number;

/**
 * Adds a row to a grid list, and optionally add simple text items with your rows.
 * Use guiGridListSetItemText to add row headers.
 * Deprecated feature: 3.0153,1.5.2,ATTENTION: Without guiGridListSetItemText there is no row added to the grid. 
 * Look at the example, first you give the row a name with row = guiGridListAddRow ( playerList ), and then you use guiGridListSetItemText.
 * @param gridList The grid list you want to add a row to
 * @param itemText1 The text for the first column item in the row. Either a string or a number can be passed (use numbers for sorting purposes).
 * @param itemText2 The text for the second column item in the row. Either a string or a number can be passed (use numbers for sorting purposes).
 * @param ] unknown
 * @returns Returns the row id if it has been created, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListAddRow
**/
declare function guiGridListAddRow(gridList: Element, itemText1: unknown, itemText2: unknown, ]: unknown): number;

/**
 * This allows you to automatically size a column to display everything in it correctly, with the most minimal width.
 * @param gridList The grid list element where the column is located.
 * @param columnIndex The ID of the column you want to be auto-sized.
 * @returns Returns true if the column was auto-sized, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListAutoSizeColumn
**/
declare function guiGridListAutoSizeColumn(gridList: Element, columnIndex: number): boolean;

/**
 * This function clears all the data from a grid list.
 * @param gridList The grid list element to be cleared
 * @returns Returns true if the grid list element is valid and has been cleared successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListClear
**/
declare function guiGridListClear(gridList: Element): boolean;

/**
 * This allows you to get the count of existing columns in a gridlist.
 * @param gridList The grid list you want to add a column to
 * @returns Returns an integer with the amount of columns in the gridlist, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListGetColumnCount
**/
declare function guiGridListGetColumnCount(gridList: Element): number;

/**
 * This allows you to get the width of an existing column in a gridlist.
 * @param gridList The grid list you want to add a column to
 * @param columnIndex Column ID of the Get size
 * @param relative A boolean defining whether width measurements will be relative to the Gridlist size, or absolute pixels.
 * @returns Returns the width of the gridlist column, false if bad arguments were given.
 * @see https://wiki.mtasa.com/wiki/GuiGridListGetColumnWidth
**/
declare function guiGridListGetColumnWidth(gridList: Element, columnIndex: number, relative: boolean): number;

/**
 * This function gets the color of a gridlist item.
 * @param gridList The grid list element
 * @param rowIndex Row ID
 * @param columnIndex Column ID
 * @returns Returns four int values, representing the amount of red, green, blue and alpha if successful. false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListGetItemColor
**/
declare function guiGridListGetItemColor(gridList: Element, rowIndex: number, columnIndex: number): [number, number, number, number];

/**
 * With this function you can retrieve the string data associated with an item in a grid list.
 * This is not the text that is displayed on the item, but an internal string that you can use to hold extra information about the item.
 * - Note: This function will only work after you set the item's text using guiGridListSetItemText!
 * @param gridList the grid list containing the item you're interested in
 * @param rowIndex the row index of the item
 * @param columnIndex the column index of the item
 * @returns Returns the item data of the specified item if succesful, false if one of the arguments was invalid.
 * @see https://wiki.mtasa.com/wiki/GuiGridListGetItemData
**/
declare function guiGridListGetItemData(gridList: Element, rowIndex: number, columnIndex: number): unknown;

/**
 * This function retrieves the text from a specific grid list item.
 * @param gridList the gridlist containing the item you're interested in
 * @param rowIndex row id of the item
 * @param columnIndex column id of the item
 * @returns Returns the text of the item if the arguments are right, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListGetItemText
**/
declare function guiGridListGetItemText(gridList: Element, rowIndex: number, columnIndex: number): string;

/**
 * This function returns the number of rows in a grid list.
 * @param gridList The grid list to get the number of rows from.
 * @returns Returns the number of rows if the function is successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListGetRowCount
**/
declare function guiGridListGetRowCount(gridList: Element): number;

/**
 * This function returns the amount of options selected in the specified grid list.
 * @param gridList The grid list which amount of selected items you want to retrieve.
 * @returns Returns an integer representing the amount of selected options if everything was successful or false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GuiGridListGetSelectedCount
**/
declare function guiGridListGetSelectedCount(gridList: Element): number;

/**
 * This function returns the row and column indexes of the selected item in a grid list.
 * @param gridList the grid list you want to know the selected row index of
 * @returns Returns the row and column indexes of the selected item if the specified grid list is valid and has a selected item, (-1, -1) if no item is selected, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListGetSelectedItem
**/
declare function guiGridListGetSelectedItem(gridList: Element): [number, number];

/**
 * This function returns the items selected in the specified grid list.
 * Note that for some reason the column ID is 1 lower than it should be, for example 0 is returned but if you try and get the text for column 0 there is nothing, but column 1 has what you clicked on.
 * @param gridList The grid list which selected items you want to retrieve.
 * @returns Returns a table over the selected items in the grid list in this format: if everything was successful or false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GuiGridListGetSelectedItems
**/
declare function guiGridListGetSelectedItems(gridList: Element): object;

/**
 * This function retrieves the current selection mode of a gui gridlist.
 * @param Element unknown
 * @param ) unknown
 * @returns Returns the ID of the current gridlist's selection mode.
 * @see https://wiki.mtasa.com/wiki/GuiGridListGetSelectionMode
**/
declare function guiGridListGetSelectionMode(Element: unknown, ): unknown): number;

/**
 * This allows you to insert a new row after a specified row, and simultaneously set text.
 * Good for inserting new rows in the middle of existing rows.
 * To insert at the top use -1 as row index.
 * @param gridList The grid list you want to add a row to
 * @param rowIndex Row ID of the row you want to insert the new row after.
 * @param itemText1 The text for the first column item in the row. Either a string or a number can be passed (use numbers for sorting purposes).
 * @param itemText2 The text for the second column item in the row. Either a string or a number can be passed (use numbers for sorting purposes).
 * @param ] unknown
 * @returns Returns true if the row was successfully added, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListInsertRowAfter
**/
declare function guiGridListInsertRowAfter(gridList: Element, rowIndex: number, itemText1: unknown, itemText2: unknown, ]: unknown): number;

/**
 * This function checks whether the gridlist sorting is enabled or disabled.
 * @param guiGridlist The GUI gridlist you wish to check if sorting is enabled or not.
 * @returns Returns true if sorting is enabled, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListIsSortingEnabled
**/
declare function guiGridListIsSortingEnabled(guiGridlist: Element): boolean;

/**
 * This allows you to delete columns that exist in grid lists.
 * @param gridList The grid list you want to remove a column from
 * @param columnIndex Column ID
 * @returns Returns true if the grid list column was successfully removed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListRemoveColumn
**/
declare function guiGridListRemoveColumn(gridList: Element, columnIndex: number): boolean;

/**
 * This allows you to delete rows that exist in grid lists.
 * @param gridList The grid list you want to remove a row from
 * @param rowIndex The row ID which you want to remove
 * @returns Returns true if the grid list row was successfully removed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListRemoveRow
**/
declare function guiGridListRemoveRow(gridList: Element, rowIndex: number): boolean;

/**
 * This allows you to set the width of an existing column in a gridlist.
 * @param gridList The grid list you want to add a column to
 * @param columnIndex Column ID of the size you want to change
 * @param width A float or integer of the width of the column depending on the relative argument.
 * @param relative A boolean defining whether width measurements will be relative to the Gridlist size, or absolute pixels.
 * @returns Returns true if the gridlist column width was successfully set, false if bad arguments were given.
 * @see https://wiki.mtasa.com/wiki/GuiGridListSetColumnWidth
**/
declare function guiGridListSetColumnWidth(gridList: Element, columnIndex: number, width: unknown, relative: boolean): boolean;

/**
 * This function changes the color of a gridlist item.
 * @param gridList The grid list element
 * @param rowIndex Row ID
 * @param columnIndex Column ID
 * @param red The amount of red in the color (0-255)
 * @param green The amount of green in the color (0-255)
 * @param blue The amount of blue in the color (0-255)
 * @param [alpha=255] The amount of alpha in the color (0-255).
 * @returns Returns true if the item color was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListSetItemColor
**/
declare function guiGridListSetItemColor(gridList: Element, rowIndex: number, columnIndex: number, red: number, green: number, blue: number, alpha?: number): boolean;

/**
 * This function sets a Item Data associated to a grid list item.
 * - Note: This function will only work after you set the item's text using guiGridListSetItemText!
 * @param gridList A gridlist element of the data you wish to set to
 * @param rowIndex The row of the item you wish to set to
 * @param columnIndex The column of the item you wish to set to
 * @param data The data you wish to set to the item.
 * @returns Returns true if the data was set successfully, false otherwise
 * @see https://wiki.mtasa.com/wiki/GuiGridListSetItemData
**/
declare function guiGridListSetItemData(gridList: Element, rowIndex: number, columnIndex: number, data: unknown): boolean;

/**
 * This function changes the text of a gridlist item.
 * Notice: This function doesn't work well with Sorting.
 * If you are using sorting, please use the optional arguments of guiGridListAddRow as much as possible.
 * @param gridList The grid list element
 * @param rowIndex Row ID
 * @param columnIndex Column ID
 * @param text The text you want to put in (does NOT accept numbers, use tostring for that)
 * @param section Determines if the item is a section
 * @param number Tells whether the text item is a number value or not (used for sorting)
 * @returns Returns true if the item text was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListSetItemText
**/
declare function guiGridListSetItemText(gridList: Element, rowIndex: number, columnIndex: number, text: string, section: boolean, number: boolean): boolean;

/**
 * This function allows a gridlist's scrollbar to be forced on, or returned to default.
 * @param guiGridlist The GUI gridlist you wish to change the state of scrollbars
 * @param horizontalBar A bool where true forces the horizontal scrollbar on, and false returns them to default.
 * @param verticalBar A bool where true forces the verical scrollbar on, and false returns them to default.
 * @returns Returns true if the scrollbars were successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListSetScrollBars
**/
declare function guiGridListSetScrollBars(guiGridlist: Element, horizontalBar: boolean, verticalBar: boolean): boolean;

/**
 * This function selects an item from a gridlist.
 * If you wish to deselect whatever item is selected, pass 0 as both the rowIndex and columnIndex arguments.
 * @param gridList the grid list you want to select an item from
 * @param rowIndex the row you want to select (index 0 is the first row)
 * @param columnIndex the column you want to select (index 1 is the first column)
 * @param [bReset=true] set to false for multiple selections}}
 * @returns Returns true if the passed arguments are correct and the item has been selected, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListSetSelectedItem
**/
declare function guiGridListSetSelectedItem(gridList: Element, rowIndex: number, columnIndex: number, bReset?: boolean): boolean;

/**
 * This function sets the selection mode of a gui gridlist.
 * For example, the MTA server browser selects a whole row, while the Controls dialog selects a single cell.
 * To select multiple items you must be holding down 'ctrl'.
 * @param Element unknown
 * @param , unknown
 * @param mode The mode of the selection. Can be the following values
 * @returns Returns true if the selection mode was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListSetSelectionMode
**/
declare function guiGridListSetSelectionMode(Element: unknown, ,: unknown, mode: number): boolean;

/**
 * This function allows the disabling or enabling of sorting within a gridlist.
 * Sorting is achieved by clicking a column header.
 * Gridlist items will be sorted according to the clicked column.
 * By default, gridlists have sorting enabled.
 * This function will allow you to toggle this.
 * @param guiGridlist The GUI gridlist you wish to toggle the sorting of.
 * @param enabled A boolean representing whether the sorting is enabled, or disabled.
 * @returns Returns true if sorting was successfully toggled., false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiGridListSetSortingEnabled
**/
declare function guiGridListSetSortingEnabled(guiGridlist: Element, enabled: boolean): boolean;

/**
 * This function gets the color of a label.
 * @param element unknown
 * @param ) unknown
 * @returns Returns three int values, representing the amount of red, green, blue if successful. false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiLabelGetColor
**/
declare function guiLabelGetColor(element: unknown, ): unknown): [number, number, number];

/**
 * This function returns the height of the font currently used in a GUI text label.
 * @param theLabel The text label to get the font height from.
 * @returns Returns the absolute height of the font currently used in the text label if the function is successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiLabelGetFontHeight
**/
declare function guiLabelGetFontHeight(theLabel: Element): number;

/**
 * This function returns the extent, or width, of the current text inside a GUI text label.
 * @param theLabel The text label to get the text extent from.
 * @returns Returns the absolute width of the current text inside the text label if the function is successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiLabelGetTextExtent
**/
declare function guiLabelGetTextExtent(theLabel: Element): number;

/**
 * This function allows you to set the color of a GUI label.
 * @param theElement The label to be changed.
 * @param red An integer specifying the amount of red (0 to 255).
 * @param green An integer specifying the amount of green (0 to 255).
 * @param blue An integer specifying the amount of blue (0 to 255).
 * @returns Returns true if the the color of the gui label was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiLabelSetColor
**/
declare function guiLabelSetColor(theElement: Element, red: number, green: number, blue: number): boolean;

/**
 * This function sets the horizontal alignment of a text label.
 * @param theLabel The text label to set the horizontal alignment on.
 * @param align The alignment type. Valid type strings are
 * @param [wordwrap=false] Whether or not to enable wordwrap for the gui-label.
 * @returns Returns true on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiLabelSetHorizontalAlign
**/
declare function guiLabelSetHorizontalAlign(theLabel: Element, align: string, wordwrap?: boolean): boolean;

/**
 * This function sets the vertical alignment of a text label.
 * @param theLabel The text label to set the vertical alignment on.
 * @param align The alignment type. Valid type strings are
 * @returns Returns true on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiLabelSetVerticalAlign
**/
declare function guiLabelSetVerticalAlign(theLabel: Element, align: string): boolean;

/**
 * This function returns the caret (the text cursor) position within the memo box.
 * @param theElement The memo box you want to get the caret position from
 * @returns Returns the caret index on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiMemoGetCaretIndex
**/
declare function guiMemoGetCaretIndex(theElement: Element): number;

/**
 * This function checking if memo is read only or no.
 * @param memo unknown
 * @param ) unknown
 * @returns Returns true if the memo is read only, false if the memo isn't read only, nil otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiMemoIsReadOnly
**/
declare function guiMemoIsReadOnly(memo: unknown, ): unknown): boolean;

/**
 * This function sets the current position of the caret (the text cursor) within the memo.
 * @param memo unknown
 * @param , unknown
 * @param index An integer referring to the desired character position within the box. 0 would be before the first character in the box, 1 before the second, etc.
 * @returns Returns true if the caret was successfully moved, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiMemoSetCaretIndex
**/
declare function guiMemoSetCaretIndex(memo: unknown, ,: unknown, index: number): boolean;

/**
 * This function allows you to set or remove read-only status for a GUI memo.
 * If read-only is set to true, the contents are not editable.
 * @param memo unknown
 * @param , unknown
 * @param status A boolean value indicating whether read-only is to be enabled or disabled.
 * @returns Returns true if the status was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiMemoSetReadOnly
**/
declare function guiMemoSetReadOnly(memo: unknown, ,: unknown, status: boolean): boolean;

/**
 * This function moves a GUI element to the very back of all other GUI elements.
 * @param guiElement the GUI element that you want to move to the back
 * @returns Returns true if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiMoveToBack
**/
declare function guiMoveToBack(guiElement: Element): boolean;

/**
 * This function gets a radio button's selection state.
 * @param guiRadioButton The radio button you wish to retrieve the selection state of.
 * @returns Returns true if the radio button is selected, false if it is not.
 * @see https://wiki.mtasa.com/wiki/GuiRadioButtonGetSelected
**/
declare function guiRadioButtonGetSelected(guiRadioButton: Element): boolean;

/**
 * This function selects or unselects a radio button.
 * @param guiRadioButton The GUI radio button in which you wish to change the selection state of
 * @param state The state of the radio button, where true indicates selected, and false indicates unselected.
 * @returns Returns true if the radio button's selection state was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiRadioButtonSetSelected
**/
declare function guiRadioButtonSetSelected(guiRadioButton: Element, state: boolean): boolean;

/**
 * This function allows a scrollpane's scrollbars to be forced on, or returned to default.
 * @param scrollPane the GUI scrollpane element you want to set the scrollbars of.
 * @param horizontal A bool where true forces the horizontal scrollbar on, and false returns them to default.
 * @param vertical A bool where true forces the vertical scrollbar on, and false returns them to default.
 * @returns Returns true if the call was successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiScrollPaneSetScrollBars
**/
declare function guiScrollPaneSetScrollBars(scrollPane: Element, horizontal: boolean, vertical: boolean): boolean;

/**
 * This changes the alpha level (the visibleness/transparency) of a GUI element
 * @param guielement unknown
 * @param alpha The visibility/transparency of the GUI element. Ranges from 0 (fully transparent) to 1 (fully opaque). Default value is 0.80.
 * @returns Returns true if the gui element's alpha was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiSetAlpha
**/
declare function guiSetAlpha(guielement: Element, alpha: number): boolean;

/**
 * This function enables/disables a GUI element.
 * A disabled GUI element can't be used, gets a gray aspect and doesn't receive any events.
 * @param guiElement the GUI element you wish to enable or disable
 * @param enabled the new state
 * @returns If the function succeeds it returns true, if it fails it returns false.
 * @see https://wiki.mtasa.com/wiki/GuiSetEnabled
**/
declare function guiSetEnabled(guiElement: Element, enabled: boolean): boolean;

/**
 * This function sets the font of a GUI element to be used when drawing text.
 * @param guiElement The GUI element you wish to change the font of
 * @param font Either a custom GUI font element or the name of a built-in GUI font. See Standard GUI Font Names
 * @returns Returns true if the font has been successfully set on the gui element, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiSetFont
**/
declare function guiSetFont(guiElement: Element, font: any): boolean;

/**
 * This function enables or disables input focus for the GUI.
 * This means that any keybinds or MTA binds are overidden so that text can be input into an editbox, for example.
 * In other words, keys such as t and y which activate the chatbox are disabled.
 * New feature: 3.0110,1.1,guiSetInputMode can be used as an extended version of guiSetInputEnabled since it provides the same functionality with one added feature.
 * @param enabled true if input should go to GUI, false if it should go to the game.
 * @returns Returns true if input mode could be changed, false if invalid parameters are passed.
 * @see https://wiki.mtasa.com/wiki/GuiSetInputEnabled
**/
declare function guiSetInputEnabled(enabled: boolean): boolean;

/**
 * This function controls the input mode to define whether or not (and when) keybinds or MTA binds are overridden (disabled) so that text can be input into an editbox, for example.
 * The binds can be either:
 * @param mode a string representing the desired input mode. Accepted values are
 * @returns Returns true if input mode could be changed, false if invalid parameters are passed.
 * @see https://wiki.mtasa.com/wiki/GuiSetInputMode
**/
declare function guiSetInputMode(mode: string): boolean;

/**
 * This function sets the position of a GUI element.
 * @param theElement The GUI element to change position for
 * @param x Position over the X axis
 * @param y Position over the Y axis
 * @param relative Bool that indicates if the x/y positions are relative to the elements parent element.
 * @returns Returns true if the position has been successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiSetPosition
**/
declare function guiSetPosition(theElement: Element, x: number, y: number, relative: boolean): boolean;

/**
 * This function sets the value of a specific CEGUI property of a GUI element.
 * For a list of properties and their meaning, see the CEGUI properties page.
 * @param guiElement the GUI element you wish to get a property of.
 * @param property the name of of property you want the value of.
 * @param value the new value for the property.
 * @returns If the function succeeds it returns true, if it fails it returns false.
 * @see https://wiki.mtasa.com/wiki/GuiSetProperty
**/
declare function guiSetProperty(guiElement: Element, property: string, value: string): boolean;

/**
 * This function is used to change the currently selected tab in a tab panel.
 * @param tabPanel The tab panel which current tab you want to change.
 * @param theTab The tab which will be the new active tab.
 * @returns Returns true if the selected tab was changed to a new one successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiSetSelectedTab
**/
declare function guiSetSelectedTab(tabPanel: Element, theTab: Element): boolean;

/**
 * This function sets the dimensions (size) of a GUI element.
 * It refers to the bounding box size for GUI elements.
 * It does not make GUI elements smaller or larger in appearance.
 * @param guiElement the GUI element whose visibility is to be changed
 * @param width The desired width setting for the gui element
 * @param height The desired height setting for the gui element
 * @param relative This is whether sizes and positioning are relative. If this is true, then all x,y,width,height floats must be between 0 and 1, representing sizes relative to the parent.
 * @returns Returns true if the gui element's size was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiSetSize
**/
declare function guiSetSize(guiElement: Element, width: number, height: number, relative: boolean): boolean;

/**
 * This function sets the text of a GUI element.
 * @param guiElement The GUI element you wish to change the text of
 * @param text The new text
 * @returns Returns true if text has been successfully set on the gui element, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiSetText
**/
declare function guiSetText(guiElement: Element, text: string): boolean;

/**
 * This function changes the visibility state of a GUI element.
 * @param guiElement the GUI element whose visibility is to be changed
 * @param state the new visibility state
 * @returns Returns true if the element's visibility could be changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiSetVisible
**/
declare function guiSetVisible(guiElement: Element, state: boolean): boolean;

/**
 * This function gets the native size of image.
 * That means the original size in pixels of the image file.
 * @param theImage The static image element to get the original size of.
 * @returns Returns two integers where first is the width and second the height of the image in pixels, false if the image element was invalid.
 * @see https://wiki.mtasa.com/wiki/GuiStaticImageGetNativeSize
**/
declare function guiStaticImageGetNativeSize(theImage: Element): [number, number];

/**
 * This function allows you to change the image in GUI static image element to another one.
 * - Tip: If you set other images as children you will have to use setElementCallPropagationEnabled to only affect the parent image.
 * @param theElement The static image element to be changed.
 * @param filename A string specifying the filepath of the image file being loaded in current resource.
 * @returns Returns true if the the image in the static image element was successfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiStaticImageLoadImage
**/
declare function guiStaticImageLoadImage(theElement: Element, filename: string): boolean;

/**
 * This function checks if a GUI window is movable.
 * @param window unknown
 * @param ) unknown
 * @returns Returns true if the window is movable, false if not, nil if an invalid window was provided.
 * @see https://wiki.mtasa.com/wiki/GuiWindowIsMovable
**/
declare function guiWindowIsMovable(window: unknown, ): unknown): boolean;

/**
 * This function checks if a GUI window is sizable.
 * @param window unknown
 * @param ) unknown
 * @returns Returns true if the window is sizable, false if not, nil if an invalid window was provided.
 * @see https://wiki.mtasa.com/wiki/GuiWindowIsSizable
**/
declare function guiWindowIsSizable(window: unknown, ): unknown): boolean;

/**
 * This function allows you to specify whether or not a user can move a GUI window.
 * @param theElement The window to be changed.
 * @param status A boolean value indicating whether the window is movable or not.
 * @returns Returns true if the function is successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiWindowSetMovable
**/
declare function guiWindowSetMovable(theElement: Element, status: boolean): boolean;

/**
 * This function enables or disables user resizing of a GUI window.
 * @param theElement The window to be changed.
 * @param status A boolean value indicating whether user resizing is to be enabled or disabled.
 * @returns Returns true if the function is successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GuiWindowSetSizable
**/
declare function guiWindowSetSizable(theElement: Element, status: boolean): boolean;

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
 * This function allows you to check if some background sound effects are enabled.
 * @param theType The type of ambient sound to test.Can be either "gunfire" or "general".
 * @returns Returns true if the ambient sound is enabled, false if it is disabled or invalid values were passed.
 * @see https://wiki.mtasa.com/wiki/IsAmbientSoundEnabled
**/
declare function isAmbientSoundEnabled(theType: string): boolean;

/**
 * This function returns whether the ingame chatbox is being used (accepting chatbox input) or not.

 * @returns Returns true if the chatbox is receiving input, false if not active.
 * @see https://wiki.mtasa.com/wiki/IsChatBoxInputActive
**/
declare function isChatBoxInputActive(): boolean;

/**
 * This function checks if player's chat is visible.
 * @param isChatVisible unknown
 * @returns Returns true if the chat is visible, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsChatVisible
**/
declare function isChatVisible(isChatVisible: boolean): [];

/**
 * This function returns whether the ingame console window is visible or not.

 * @returns Returns true if the console is visible, false if not.
 * @see https://wiki.mtasa.com/wiki/IsConsoleActive
**/
declare function isConsoleActive(): boolean;

/**
 * Checks whether a GTA control is enabled or disabled for a certain player.
 * @param control The control you wish to check.See control names for a list of possible controls.
 * @returns Returns true if control is enabled, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsControlEnabled
**/
declare function isControlEnabled(control: string): boolean;

/**
 * This function returns whether the ingame debug window is visible or not.
 * This is the debugwindow visible using the "debugscript " command.

 * @returns Returns true if the debug view is visible, false if not.
 * @see https://wiki.mtasa.com/wiki/IsDebugViewActive
**/
declare function isDebugViewActive(): boolean;

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
 * This function can be used to check whether specified element is collidable with another element.
 * - Note: You can only use this function with the element types listed below.
 * @param theElement The element which colliding you want to get
 * @param withElement The other element which colliding with the first entity you want to get
 * @returns Returns true if the elements collide with eachother, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsElementCollidableWith
**/
declare function isElementCollidableWith(theElement: Element, withElement: Element): boolean;

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
 * This function checks whether a clientside element is local to the client (doesn't exist in the server) or not.
 * @param theElement The element that we want to check.
 * @returns Returns true if the passed element is local, false if not or if invalid parameters are passed.
 * @see https://wiki.mtasa.com/wiki/IsElementLocal
**/
declare function isElementLocal(theElement: Element): boolean;

/**
 * This function reveals if an element is low LOD.
 * @param theElement The element whose low LOD status we want to get.
 * @returns Returns true if the element is low LOD, false otherwise. <section name="Clientside" class="client" show="true"> This example will show how many low lods objects is around you. <section name="Serverside" class="server" show="false"> This example will show how many low lods objects is around all the world.
 * @see https://wiki.mtasa.com/wiki/IsElementLowLOD
**/
declare function isElementLowLOD(theElement: Element): boolean;

/**
 * This function will check if an element is on the screen.
 * Elements behind objects but still in the camera view count as being on screen.
 * This function is particularly useful for detecting if dynamic objects are in "destroyed" state.
 * Destroyed objects will return false.
 * @param theElement The element of which you wish to check wether it's being rendered on screen.
 * @returns Returns true if element is on screen, false if not.
 * @see https://wiki.mtasa.com/wiki/IsElementOnScreen
**/
declare function isElementOnScreen(theElement: Element): boolean;

/**
 * This function checks whether an element is streamable as set by setElementStreamable or not.
 * Needs example
 * @param theElement The element to check the streamability of.
 * @returns Returns true if the passed element is streamable like normal, false if this element must always be streamed in.
 * @see https://wiki.mtasa.com/wiki/IsElementStreamable
**/
declare function isElementStreamable(theElement: Element): boolean;

/**
 * This function checks whether an element is currently streamed in (not virtualized) and are actual GTA objects in the world.
 * You can force an element to be streamed in using setElementStreamable.
 * Deprecated feature: 3,1.0,DP2 can return true even if this element is not fully streamed in. This can happen during the period when the vehicle/object model is loading while the element is not actually fully created yet.
 * @param theElement The element to check whether is streamed in or not.
 * @returns Returns true if the passed element is currently streamed in, false if it is virtualized.
 * @see https://wiki.mtasa.com/wiki/IsElementStreamedIn
**/
declare function isElementStreamedIn(theElement: Element): boolean;

/**
 * This function checks whether an element is synced by the local player or not.
 * Accepted elements are peds and vehicles.
 * @param theElement The element to check.
 * @returns Returns true if the passed element is synced by the local player, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsElementSyncer
**/
declare function isElementSyncer(theElement: Element): boolean;

/**
 * This function checks whether MTA has frozen an element because it is above map objects which are still loading or not.
 * - Note: When vehicles are frozen waiting for collisions to load they do not overwrite the frozen status set by setElementFrozen.
 * @param theElement unknown
 * @returns Returns true if the specified element is frozen waiting for collisions of custom map objects to load. Returns false if it's not or if the specified element is invalid.
 * @see https://wiki.mtasa.com/wiki/IsElementWaitingForGroundToLoad
**/
declare function isElementWaitingForGroundToLoad(theElement: Element): boolean;

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
 * This function is used to determine if an element is within a marker.
 * @param theElement The element you're checking.
 * @param theMarker The marker you're checking.
 * @returns Returns true if the element is within the marker, false otherwise
 * @see https://wiki.mtasa.com/wiki/IsElementWithinMarker
**/
declare function isElementWithinMarker(theElement: Element, theMarker: Marker): boolean;

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
 * This function checks if there are obstacles between two points of the game world, optionally ignoring certain kinds of elements.
 * Use processLineOfSight if you want more information about what the ray hits.
 * @param startX The first point's world X coordinate.
 * @param startY The first point's world Y coordinate.
 * @param startZ The first point's world Z coordinate.
 * @param endX The second point's world X coordinate.
 * @param endY The second point's world Y coordinate.
 * @param endZ The second point's world Z coordinate.
 * @param [checkBuildings=true] Allow the line of sight to be blocked by GTA's internally placed buildings, i.e. the world map.
 * @param [checkVehicles=true] Allow the line of sight to be blocked by vehicles.
 * @param [checkPeds=true] Allow the line of sight to be blocked by peds, i.e. players.
 * @param [checkObjects=true] Allow the line of sight to be blocked by objects.
 * @param [checkDummies=true] Allow the line of sight to be blocked by GTA's internal dummies. These are not used in the current MTA version so this argument can be set to false.
 * @param [seeThroughStuff=false] Allow the line of sight to be blocked by translucent game objects, e.g. glass.
 * @param [ignoreSomeObjectsForCamera=false] Allow the line of sight to pass through objects that have (K) property enabled in "object.dat" data file. (i.e. Most dynamic objects like boxes or barrels)
 * @param [ignoredElement=nil] Allow the line of sight to pass through a certain specified element.
 * @returns Returns true if the line between the specified points is clear, false if there's an obstacle or if invalid parameters are passed.
 * @see https://wiki.mtasa.com/wiki/IsLineOfSightClear
**/
declare function isLineOfSightClear(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, checkBuildings?: boolean, checkVehicles?: boolean, checkPeds?: boolean, checkObjects?: boolean, checkDummies?: boolean, seeThroughStuff?: boolean, ignoreSomeObjectsForCamera?: boolean, ignoredElement?: Element): boolean;

/**
 * This function returns whether any system windows that take focus are active.
 * This includes:
 * To get the status of the debug view, see isDebugViewActive.

 * @returns Returns true if the focus is on the MTA window, false if it isn't.
 * @see https://wiki.mtasa.com/wiki/IsMTAWindowActive
**/
declare function isMTAWindowActive(): boolean;

/**
 * This function returns whether the user is in the mainmenu or not.

 * @returns Returns true if the mainmenu is visible, false if not.
 * @see https://wiki.mtasa.com/wiki/IsMainMenuActive
**/
declare function isMainMenuActive(): boolean;

/**
 * This function checks whether OOP (Object Oriented Programming) is enabled in the current resource or not.
 * @param isOOPEnabled unknown
 * @returns Returns true or false if OOP is enabled or not. Returns nil if an error arised.
 * @see https://wiki.mtasa.com/wiki/IsOOPEnabled
**/
declare function isOOPEnabled(isOOPEnabled: boolean): [];

/**
 * This function checks if an object / model ID is breakable.
 * @param theObject unknown
 * @param modelId unknown
 * @returns 
 * @see https://wiki.mtasa.com/wiki/IsObjectBreakable
**/
declare function isObjectBreakable(theObject: Object, modelId: number): boolean;

/**
 * This function checks if the specified ped is choking (coughing) or not.
 * This happens as a result of weapons that produce smoke - smoke grenades, fire extinguisher and the spray can.
 * @param thePed The ped you wish to check
 * @returns Returns true if the ped is choking, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPedChoking
**/
declare function isPedChoking(thePed: Ped): boolean;

/**
 * This function checks if the ped is in the driveby state.
 * @param thePed The ped element whose state is to be checked.
 * @returns Returns true if the driveby state is enabled, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPedDoingGangDriveby
**/
declare function isPedDoingGangDriveby(thePed: Ped): boolean;

/**
 * This function checks if the specified ped is carrying out a certain task.
 * @param thePed The ped you want to check.
 * @param taskName A string containing the name of the task you're checking for.
 * @returns Returns true if the player is currently doing the task, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPedDoingTask
**/
declare function isPedDoingTask(thePed: Ped, taskName: string): boolean;

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
 * This function is used to determine whether or not a ped is currently reloading their weapon.
 * Useful to stop certain quick reload exploits.
 * @param thePed The ped you are checking.
 * @returns Returns true if the ped is currently reloading a weapon, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPedReloadingWeapon
**/
declare function isPedReloadingWeapon(thePed: Ped): boolean;

/**
 * This function checks whether health target markers are drawn as set by setPedTargetingMarkerEnabled or not.
 * @param isPedTargetingMarkerEnabled unknown
 * @returns Returns true if the health target markers are enabled, false if not.
 * @see https://wiki.mtasa.com/wiki/IsPedTargetingMarkerEnabled
**/
declare function isPedTargetingMarkerEnabled(isPedTargetingMarkerEnabled: boolean): [];

/**
 * Checks whether or not a ped is currently wearing a jetpack.
 * @param thePed the ped you want to check
 * @returns Returns true if the ped is carrying a jetpack, false if he is not or an invalid element was passed.
 * @see https://wiki.mtasa.com/wiki/IsPedWearingJetpack
**/
declare function isPedWearingJetpack(thePed: Ped): boolean;

/**
 * This function can be used to check whether an hud component is visable or not.
 * @param component The component you wish to check. Valid values are
 * @returns Returns true if the component is visable, false if not.
 * @see https://wiki.mtasa.com/wiki/IsPlayerHudComponentVisible
**/
declare function isPlayerHudComponentVisible(component: string): boolean;

/**
 * This function checks if the specified player's radar map has been forced on or not.

 * @returns Returns true if the player's radar map is forced on, false otherwise.Returns true if the local player's radar map is forced on, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPlayerMapForced
**/
declare function isPlayerMapForced(): boolean;

/**
 * This function checks if the local player has their map showing.

 * @returns Returns true if the player has the map visible, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsPlayerMapVisible
**/
declare function isPlayerMapVisible(): boolean;

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
 * New items: 3.0140,1.4,This function checks if a train is a chain engine (moves the rest of the chain's carriages) or not.
 * @param theTrain unknown
 * @returns 
 * @see https://wiki.mtasa.com/wiki/IsTrainChainEngine
**/
declare function isTrainChainEngine(theTrain: Vehicle): boolean;

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
 * This function returns whether the file downloading dialog box is active or not.
 * This appears when a resource is started and the client doesn't have all the files that resource requires the client to have.
 * It's important to note that resources aren't started on the client until they're completely downloaded, so a resource cannot use this function to detect if it's own files are downloaded.
 * A client-side resource triggers the onClientResourceStart event when the files it requires are downloaded.

 * @returns Returns true if the file transfer box is visible, false if not.
 * @see https://wiki.mtasa.com/wiki/IsTransferBoxActive
**/
declare function isTransferBoxActive(): boolean;

/**
 * This function returns a boolean value whether the client has enabled tray notifications in his settings or not.
 * @param isTrayNotificationEnabled unknown
 * @returns Returns true if the tray notifications are enabled in the settings, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsTrayNotificationEnabled
**/
declare function isTrayNotificationEnabled(isTrayNotificationEnabled: boolean): [];

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
 * This function checks if nitro is activated on the vehicle.
 * Warning: Only works if the vehicle is steamed in
 * @param theVehicle unknown
 * @returns Returns true if the nitro is currently activated on the vehicle, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsVehicleNitroActivated
**/
declare function isVehicleNitroActivated(theVehicle: Vehicle): boolean;

/**
 * This function checks if nitro is recharging on the vehicle.
 * Warning: Only works if the vehicle is steamed in
 * @param theVehicle unknown
 * @returns Returns true if the nitro is currently recharging on the vehicle, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsVehicleNitroRecharging
**/
declare function isVehicleNitroRecharging(theVehicle: Vehicle): boolean;

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
 * This function returns a boolean whether the vehicle's wheel is on ground (true) or in air (false).
 * - Note: In vehicles with 3 wheels, the wheels are combined 2 in 1, in motorbikes only the left - and
 * @param theVehicle unknown
 * @param wheel unknown
 * @returns Returns true if the vehicle wheel is on ground/collided, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsVehicleWheelOnGround
**/
declare function isVehicleWheelOnGround(theVehicle: Vehicle, wheel: unknown): boolean;

/**
 * This function gets the vehicle window state.
 * @param theVehicle unknown
 * @param window unknown
 * @returns This function returns a boolean which represents window open state.
 * @see https://wiki.mtasa.com/wiki/IsVehicleWindowOpen
**/
declare function isVehicleWindowOpen(theVehicle: Vehicle, window: number): boolean;

/**
 * Added to client side.
 * This function allows you to make the server reveal whether or not voice is currently enabled.
 * @param isVoiceEnabled unknown
 * @returns Returns true if the voice is enabled on the server, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsVoiceEnabled
**/
declare function isVoiceEnabled(isVoiceEnabled: boolean): [];

/**
 * This function determines whether water is drawn last in the rendering order.
 * @param isWaterDrawnLast unknown
 * @returns Returns true if water is drawn last in the rendering order, false otherwise.
 * @see https://wiki.mtasa.com/wiki/IsWaterDrawnLast
**/
declare function isWaterDrawnLast(isWaterDrawnLast: boolean): [];

/**
 * This function allows you to check if certain world sound effects have not been disabled by setWorldSoundEnabled
 * }}
 * @param group An integer representing the world sound group
 * @param [index=1] unknown
 * @returns Returns true if the world sounds are enabled, false if they are disabled or invalid values were passed.
 * @see https://wiki.mtasa.com/wiki/IsWorldSoundEnabled
**/
declare function isWorldSoundEnabled(group: number, index?: number): boolean;

/**
 * Checks if a special world property (cheat) is enabled or not.
 * @param propname the name of the property to retrieve.Possible values are listed on SetWorldSpecialPropertyEnabled.
 * @returns Returns true if the property is enabled, false if it is disabled or the specified property name is invalid.
 * @see https://wiki.mtasa.com/wiki/IsWorldSpecialPropertyEnabled
**/
declare function isWorldSpecialPropertyEnabled(propname: string): boolean;

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
 * This outputs the specified text string to the chatbox.
 * It can be specified as a message to certain player(s) or all players.
 * It can optionally allow you to embed color changes into the string by setting the colorCoded boolean to true.
 * This allows:
 * outputChatBox ( "#FF0000Hello #00FF00World", getRootElement(), 255, 255, 255, true )
 * This will display as: Hello World 
 * - Note: Avoid outputting text to the chatbox that isn't actually chat, as this can be annoying for players. Output information and status messages to the HUD.
 * @param text The text string that you wish to send to the chat window.If more than 256 characters it will not be showed in chat.
 * @param [r=231] The amount of red in the color of the text. Default value is 231.
 * @param [g=217] The amount of green in the color of the text. Default value is 217.
 * @param [b=176] The amount of blue in the color of the text. Default value is 176.
 * @param [colorCoded=false] A boolean value determining whether or not '#RRGGBB' tags should be used.
 * @returns Returns true if the message was displayed successfully. Returns false if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/OutputChatBox
**/
declare function outputChatBox(text: string, r?: number, g?: number, b?: number, colorCoded?: boolean): boolean;

/**
 * This outputs the specified text string to the console window (accessed with F8 or ~ key).
 * It can be specified as a message to certain player(s) or all players.
 * @param text The text string that you wish to send to the console window
 * @returns 
 * @see https://wiki.mtasa.com/wiki/OutputConsole
**/
declare function outputConsole(text: string): boolean;

/**
 * This function outputs scripting debug messages, which can be read by enabling the debug textbox.
 * The debug display level can then be set so that info or warning messages get filtered out.
 * @param text the text to be output to the debug box.
 * @param [level=3] the debug message level. Possible values are
 * @param [red=255] The amount of red in the color of the text. Default value is 255.
 * @param [green=255] The amount of green in the color of the text. Default value is 255.
 * @param [blue=255] The amount of blue in the color of the text. Default value is 255.
 * @returns Returns true if the debug message was successfully output, false if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/OutputDebugString
**/
declare function outputDebugString(text: string, level?: number, red?: number, green?: number, blue?: number): boolean;

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
 * This function casts a ray between two points in the world, and tells you information about the point that was hit, if any.
 * The two positions must be within the local player's draw distance as the collision data is not loaded outside this area, and the call will just fail as if the ray didn't hit.
 * This function is relatively expensive to call, so over use of this in scripts may have a detrimental effect on performance.
 * This function is useful for checking for collisions and for editor-style scripts.
 * If you wish to find what element is positioned at a particular point on the screen, use this function combined with getWorldFromScreenPosition.
 * If you wish to just know if something is hit, and don't care about what or where was hit, use isLineOfSightClear.
 * @param startX The start x position
 * @param startY The start y position
 * @param startZ The start z position
 * @param endX The end x position
 * @param endY The end y position
 * @param endZ The end z position
 * @param [checkBuildings=true] Allow the line of sight to be blocked by GTA's internally placed buildings, i.e. the world map.
 * @param [checkVehicles=true] Allow the line of sight to be blocked by vehicles.
 * @param [checkPlayers=true] Allow the line of sight to be blocked by players.
 * @param [checkObjects=true] Allow the line of sight to be blocked by objects.
 * @param [checkDummies=true] Allow the line of sight to be blocked by GTA's internal dummies. These are not used in the current MTA version so this argument can be set to false.
 * @param [seeThroughStuff=false] Allow the line of sight to be blocked by translucent game objects, e.g. glass.
 * @param [ignoreSomeObjectsForCamera=false] Allow the line of sight to pass through objects that have (K) property enabled in "object.dat" data file. (i.e. Most dynamic objects like boxes or barrels)
 * @param [shootThroughStuff=false] Allow the line of sight to be blocked by things that can be shot through
 * @param [ignoredElement=nil] Allow the line of sight to pass through a certain specified element. This is usually set to the object you are tracing from so it does not interfere with the results.
 * @param [includeWorldModelInformation=false] Include the results of hitting a world model.
 * @param bIncludeCarTyres Includes car tyre hits.
 * @returns *hit: true if there is a collision, false otherwise The other values are only filled if there is a collision, they contain nil otherwise **For vehicles, piece represents the vehicle part hit:
 * @see https://wiki.mtasa.com/wiki/ProcessLineOfSight
**/
declare function processLineOfSight(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number, checkBuildings?: boolean, checkVehicles?: boolean, checkPlayers?: boolean, checkObjects?: boolean, checkDummies?: boolean, seeThroughStuff?: boolean, ignoreSomeObjectsForCamera?: boolean, shootThroughStuff?: boolean, ignoredElement?: Element, includeWorldModelInformation?: boolean, bIncludeCarTyres: boolean): [boolean, , number, number, number, , , , Element, , number, number, number, , , , number, Material, number, , number, , number, , number, number, number, , , , number, number, number, , , , number, ];

/**
 * This function removes a command handler, that is one that has been added using addCommandHandler.
 * This function can only remove command handlers that were added by the resource that it is called in.
 * @param commandName the name of the command you wish to remove.
 * @param handler the specific handler function to remove.If not specified, all handler functions for the command (from the calling resource) will be removed.This argument is only available in the server.
 * @returns Returns true if the command handler was removed successfully, false if the command doesn't exist.
 * @see https://wiki.mtasa.com/wiki/RemoveCommandHandler
**/
declare function removeCommandHandler(commandName: string, handler: Function): boolean;

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
 * This function is used to reset the background sounds to the default setting.

 * @returns Returns true if the ambient sounds were reset, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetAmbientSounds
**/
declare function resetAmbientSounds(): boolean;

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
 * Resets the distance of peds LOD to default.
 * Default values depends on client setting.
 * If client has enabled high detail peds in video options, value will be reset to 500 - otherwise to 60.
 * @param resetPedsLODDistance unknown
 * @returns Returns true if the peds LOD distance was reset, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetPedsLODDistance
**/
declare function resetPedsLODDistance(resetPedsLODDistance: boolean): [];

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
 * This function reset to default component position for vehicle.
 * @param theVehicle The vehicle you wish to reset component position.
 * @param theComponent A vehicle component (this is the frame name from the model file of the component you wish to modify)
 * @returns Returns true if the position of the component was reset, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetVehicleComponentPosition
**/
declare function resetVehicleComponentPosition(theVehicle: Vehicle, theComponent: string): boolean;

/**
 * This function reset to default component rotation for vehicle.
 * @param theVehicle The vehicle you wish to reset component rotation.
 * @param theComponent A vehicle component (this is the frame name from the model file of the component you wish to modify)
 * @returns Returns true if the rotation of the component was reset, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetVehicleComponentRotation
**/
declare function resetVehicleComponentRotation(theVehicle: Vehicle, theComponent: string): boolean;

/**
 * This function reset to default component scale for vehicle.
 * @param theVehicle The vehicle you wish to reset component scale.
 * @param theComponent A vehicle component (this is the frame name from the model file of the component you wish to modify)
 * @returns Returns true if the scale of the component was reset, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetVehicleComponentScale
**/
declare function resetVehicleComponentScale(theVehicle: Vehicle, theComponent: string): boolean;

/**
 * Resets the distance of vehicles LOD to default.
 * Default values depends on client setting.
 * If client has enabled high detail vehicles in video options, value will be reset to (500, 500) - otherwise to (70, 150).
 * You can check value of this option using dxGetStatus (SettingHighDetailVehicles).
 * @param resetVehiclesLODDistance unknown
 * @returns Returns true if the vehicles LOD distance was reset, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetVehiclesLODDistance
**/
declare function resetVehiclesLODDistance(resetVehiclesLODDistance: boolean): [];

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
 * This function resets the firing rate of a custom weapon to the default one.
 * @param theWeapon the weapon to reset the firing rate of.
 * @returns Returns true on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetWeaponFiringRate
**/
declare function resetWeaponFiringRate(theWeapon: Weapon): boolean;

/**
 * This function resets the wind velocity in San Andreas to its default state.
 * @param resetWindVelocity unknown
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetWindVelocity
**/
declare function resetWindVelocity(resetWindVelocity: boolean): [];

/**
 * Needs example
 * New items: 3.0140,1.3.1,This function is used to reset the world sounds to the default setting.

 * @returns Returns true if the world sounds were reset, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ResetWorldSounds
**/
declare function resetWorldSounds(): boolean;

/**
 * This function respawns a specific object.
 * @param theObject an object element
 * @returns 
 * @see https://wiki.mtasa.com/wiki/RespawnObject
**/
declare function respawnObject(theObject: Object): boolean;

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
 * This function changes the maximum flying height of aircraft.
 * @param Height unknown
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetAircraftMaxHeight
**/
declare function setAircraftMaxHeight(Height: number): boolean;

/**
 * This function sets the maximum velocity at which aircrafts could fly.
 * Using this function server-side will overwrite the value that was previously set client-side.
 * @param velocity The max velocity, can be 0 or any positive value.Default is 1.5.
 * @returns Returns true if the max velocity was set correctly, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetAircraftMaxVelocity
**/
declare function setAircraftMaxVelocity(velocity: number): boolean;

/**
 * This function allows you to disable some background sound effects.
 * See also: setWorldSoundEnabled.
 * @param theType The type of ambient sound to toggle. Can be either "gunfire" or "general".
 * @param enable Set false to turn off, true to turn on
 * @returns Returns true if the ambient sound was set correctly, false if invalid values were passed.
 * @see https://wiki.mtasa.com/wiki/SetAmbientSoundEnabled
**/
declare function setAmbientSoundEnabled(theType: string, enable: boolean): boolean;

/**
 * This sets the analog control state of a control for the local player.
 * To change the analog controls for a ped, please use setPedAnalogControlState.
 * @param control The control that you want to set the state of. See control names for a list of possible controls.
 * @param state A float between 0 and 1 indicating the amount the control is pressed.If no value is provided, the analog control is removed.
 * @returns Returns true if the control state was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetAnalogControlState
**/
declare function setAnalogControlState(control: string, state: number): boolean;

/**
 * This function allows you to disable the flying birds.
 * @param enable unknown
 * @returns Returns true if the birds state was changed succesfully, false if an invalid argument was specified.
 * @see https://wiki.mtasa.com/wiki/SetBirdsEnabled
**/
declare function setBirdsEnabled(enable: boolean): boolean;

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
 * This function sets the players clipboard text (what appears when you paste with CTRL + V) Note that there is no getClipBoard function for safety reasons.
 * @param theText The new text to be in the players clipboard when the player pastes with CTRL + V.
 * @returns Returns true if the text in the clip board was set correctly.
 * @see https://wiki.mtasa.com/wiki/SetClipboard
**/
declare function setClipboard(theText: string): boolean;

/**
 * This function will enable or disable clouds.
 * This is useful for race maps which are placed high up as clouds can cause low FPS.
 * @param enabled A boolean value determining if clouds should be shown.Use true to show clouds and false to hide them.
 * @returns Returns true if the cloud state was changed succesfully, false if an invalid argument was specified.
 * @see https://wiki.mtasa.com/wiki/SetCloudsEnabled
**/
declare function setCloudsEnabled(enabled: boolean): boolean;

/**
 * This function enables or disables the debug window.
 * @param enabled true if debug window should be visible, false otherwise.
 * @returns Returns true, false if invalid parameters are passed.
 * @see https://wiki.mtasa.com/wiki/SetDebugViewActive
**/
declare function setDebugViewActive(enabled: boolean): boolean;

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
 * This function sets the density of a specified effect.
 * Warning: Upper density limit of this function depends on client FX Quality setting.
 * The limit is 1 for Low, 1.5 for Medium, and 2 for High/Very high.,true
 * @param theEffect The effect to change the speed of.
 * @param density The level of density (from 0 to 2).
 * @returns Returns true if the density was succesfully changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetEffectDensity
**/
declare function setEffectDensity(theEffect: Effect, density: number): boolean;

/**
 * New items: 3.014,1.4 r6208,This function sets the speed of a specified effect.
 * @param theEffect The effect to change the speed of.
 * @param speed The speed to set.
 * @returns Returns true if the effect speed was succesfuly changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetEffectSpeed
**/
declare function setEffectSpeed(theEffect: Effect, speed: number): boolean;

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
 * This function can be used to set an element to collide with another element.
 * An element with collisions disabled does not interact physically with the other element.
 * - Note: You can only use this function with the element types listed below.
 * @param theElement The element which colliding you want to change
 * @param withElement The other element you wish the first entity to collide with
 * @param enabled A boolean to indicate whether elements should be able to collide with eachother (true) or not (false)
 * @returns Returns true if the collisions were set succesfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementCollidableWith
**/
declare function setElementCollidableWith(theElement: Element, withElement: Element, enabled: boolean): boolean;

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
 * This function sets matrix to element.
 * Needs example
 * @param theElement The element which you set matrix
 * @param theMatrix The matrix.
 * @returns Returns true if the matrix was set succesfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetElementMatrix
**/
declare function setElementMatrix(theElement: Element, theMatrix: object): boolean;

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
 * This function can be used to disable streaming for an element.
 * This will make sure the element is not virtualized (streamed out from GTA) when the player moves far away from it. This function only works in elements with a physical representation in the world (entities), such as players, peds, vehicles and objects.
 * - Tip: Always use this function with caution. Not doing so can cause the following problems:
 * * There is a limit of elements that can be streamed in safely for every GTA entity type. If you bypass said limit by using this function, the client can experience problems of disappearing objects and unstability when trying to stream in new elements of that type.
 * * In general, if you disable too many elements (of the same type or not) to stream out, GTA will always try to render them, so it can cause a noticeable FPS drop.
 * @param theElement The element you wish to set the streaming of
 * @param streamable true if this element should stream in/out like normal, false if it should always be streamed in.
 * @returns Returns whether the element could be set to be streamable.
 * @see https://wiki.mtasa.com/wiki/SetElementStreamable
**/
declare function setElementStreamable(theElement: Element, streamable: boolean): boolean;

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
 * This function sets the maximum FPS (Frames per second) that players on the server can run their game at.
 * - Note: When set client side, the actual limit used is the lowest of both the server and client set values
 * @param fpsLimit An integer value representing the maximum FPS.This value may be between 25 and 100 FPS.You can also pass 0 or false, in which case the FPS limit will be the one set in the client settings (by default, 100 FPS).
 * @returns Returns true if successful, or false if it was not possible to set the limit or an invalid value was passed.
 * @see https://wiki.mtasa.com/wiki/SetFPSLimit
**/
declare function setFPSLimit(fpsLimit: number): boolean;

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
 * This function changes the state of the helicopter blades collisions on the specified vehicle.
 * @param theVehicle The helicopter that will have the blades collisions set.
 * @param collisions The state of the helicopter blades collisions.
 * @returns Returns true if the collisions are set for the specified vehicle, false if the collisions can't be set for the specified vehicle, if the vehicle is not a helicopter or if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/SetHeliBladeCollisionsEnabled
**/
declare function setHeliBladeCollisionsEnabled(theVehicle: Vehicle, collisions: boolean): boolean;

/**
 * Sets the rotor speed of a helicopter.
 * - Note: Setting higher values will cause problems to the client
 * @param heli the helicopter to adjust the rotor of.
 * @param speed the new rotor speed. Usual values are 0 if the helicopter stands still, or 0.2 if the rotor is fully spun up. Higher values than normal will not affect the helicopter's handling. Negative values are allowed and will make the rotor spin in the opposite direction (pushing the helicopter down).
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetHelicopterRotorSpeed
**/
declare function setHelicopterRotorSpeed(heli: Vehicle, speed: number): boolean;

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
 * This function sets the color for a light element.
 * @param theLight The light that you wish to set the color of.
 * @param r unknown
 * @param g unknown
 * @param b unknown
 * @returns Returns true if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetLightColor
**/
declare function setLightColor(theLight: Light, r: number, g: number, b: number): boolean;

/**
 * This function sets the direction for a light element.
 * @param theLight The light that you wish to set the direction of.
 * @param x unknown
 * @param y unknown
 * @param z unknown
 * @returns Returns true if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetLightDirection
**/
declare function setLightDirection(theLight: Light, x: number, y: number, z: number): boolean;

/**
 * light]] element.
 * @param theLight The light that you wish to set the radius of.
 * @param radius unknown
 * @returns Returns true if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetLightRadius
**/
declare function setLightRadius(theLight: unknown, radius: number): boolean;

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
 * This function sets the distance from the camera at which the world starts rendering.
 * Do not use this function unless you have a specific reason to do so, as any values can cause artifacts and flickering problems.
 * It can be used in many ways, including: reducing Z-fighting, creating more sophisticated first person views, allowing the camera to fly closer to the ground without passing through it, etcetera.
 * - Note: setNearClipDistance should only be used when the camera orientation is controlled by setCameraMatrix, because GTA automatically adjusts this value for the optimum setting when the camera is attached to a player. Therefore ensure resetNearClipDistance is called when returning camera control back to GTA.
 * @param distance unknown
 * @returns This function returns true if the argument is valid. Returns false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetNearClipDistance
**/
declare function setNearClipDistance(distance: number): boolean;

/**
 * This function sets an object to be breakable/unbreakable.
 * @param theObject unknown
 * @param breakable unknown
 * @returns 
 * @see https://wiki.mtasa.com/wiki/SetObjectBreakable
**/
declare function setObjectBreakable(theObject: Object, breakable: boolean): boolean;

/**
 * This function sets a property of the specified object.
 * @param theObject the object you wish to change a property of.
 * @param property unknown
 * @param value unknown
 * @returns Returns true if the property was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetObjectProperty
**/
declare function setObjectProperty(theObject: Object, property: string, value: unknown): boolean;

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
 * This function allows you to set a ped's aim target to a specific point.
 * If a ped is within a certain range defined by getPedTargetStart and getPedTargetEnd he will be targeted and shot.
 * - Note: If you wish to make a ped shoot you must use this in conjunction with an equipped weapon and setPedControlState.
 * @param thePed The ped whose target you want to set. Only peds and remote players will work; this function has no effect on the local player.
 * @param x The x coordinate of the aim target point.
 * @param y The y coordinate of the aim target point.
 * @param z The z coordinate of the aim target point.
 * @returns Returns true if the function was successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedAimTarget
**/
declare function setPedAimTarget(thePed: Ped, x: number, y: number, z: number): boolean;

/**
 * Sets an analog state of a specified ped's control, as if they pressed or released it.
 * This function only works on peds, to change the analog control state for a player, please use setAnalogControlState.
 * @param thePed The ped you wish to set the control state of.
 * @param control The control that you want to set the state of. See control names for a list of possible controls.
 * @param state A float between 0 and 1 indicating the amount the control is pressed.
 * @returns Returns true if the control state was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedAnalogControlState
**/
declare function setPedAnalogControlState(thePed: Ped, control: string, state: number): boolean;

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
 * This function sets the camera rotation of a ped, e.g. where its camera will look at. Don't confuse this with getCameraMatrix, because that function is designed for fixed (scripted) camera moves.
 * - Note: getPedCameraRotation may not return the value set by this function. Please refer to getPedCameraRotation for details.
 * @param thePed The ped whose camera rotation is to be changed.
 * @param cameraRotation The new direction that the ped will walk if you set their forwards control state. If the ped is the local player, it will also change where his camera is looking at if it isn't fixed (i.e. camera target is the local player).
 * @returns Returns true if the camera rotation was changed, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedCameraRotation
**/
declare function setPedCameraRotation(thePed: Ped, cameraRotation: number): boolean;

/**
 * This function controls if a ped can fall of his bike by accident - namely by banging into a wall.
 * @param thePed the ped whose knockoffstatus is being changed
 * @param canBeKnockedOffBike true or false
 * @returns 
 * @see https://wiki.mtasa.com/wiki/SetPedCanBeKnockedOffBike
**/
declare function setPedCanBeKnockedOffBike(thePed: Ped, canBeKnockedOffBike: boolean): boolean;

/**
 * This function makes a ped or player press or release a certain control.
 * - Note: You can't use enter_exit or enter_passenger on a ped.
 * @param thePed the ped you want to press or release a control.
 * @param control the name of the control of which to change the state. See control names for a list of valid names.
 * @param state the new control state. true means pressed, false is released.
 * @returns Returns true if successful, false if otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedControlState
**/
declare function setPedControlState(thePed: Ped, control: string, state: boolean): boolean;

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
 * This function makes a players foot prints bloody.
 * @param thePlayer The player to give bloody foot prints to.
 * @param enabled Boolean specifying whether or not to have bloody feet.
 * @returns Returns true if changing the players bloody feet status worked.
 * @see https://wiki.mtasa.com/wiki/SetPedFootBloodEnabled
**/
declare function setPedFootBloodEnabled(thePlayer: Element, enabled: boolean): boolean;

/**
 * With this function, you can set if a ped has a head or not.
 * @param thePed The ped to check.
 * @param headState head state, use true if you want the ped be headless, use false to give back the head.
 * @returns Returns true if successful, false otherwise
 * @see https://wiki.mtasa.com/wiki/SetPedHeadless
**/
declare function setPedHeadless(thePed: Ped, headState: boolean): boolean;

/**
 * Makes a ped turn his head and look at a specific world position or element.
 * - Note: Avoid calling setPedLookAt every frame as this can cause bugs like being invincible to burning.
 * - Note: For remote players, you have to use setPedAimTarget before setPedLookAt.
 * @param thePed the ped to change the lookat of.
 * @param x the x coordinate of the world position to look at.
 * @param y the y coordinate of the world position to look at.
 * @param z the z coordinate of the world position to look at.
 * @param [time=3000] the time, in milliseconds, during which the ped will look at the target. Once this time has elapsed, he will look ahead again like before the function was applied. A time of 0 will immediately stop any lookat. A negative time will make the ped look at the target indefinitely.
 * @param [blend=1000] the time, in milliseconds, during which the look will blend.
 * @param [target=nil] if this argument is specified, the position arguments will be ignored and the ped's gaze will follow the specified element instead. Can be a player, a vehicle, another ped etc.
 * @returns 
 * @see https://wiki.mtasa.com/wiki/SetPedLookAt
**/
declare function setPedLookAt(thePed: Ped, x: number, y: number, z: number, time?: number, blend?: number, target?: Element): boolean;

/**
 * This function can be used to set a ped on fire or extinguish a fire on it.
 * @param thePed The ped that we want to set/unset
 * @param isOnFire true to set the ped on fire, false to extinguish any fire on him
 * @returns Returns true if successful, false otherwise
 * @see https://wiki.mtasa.com/wiki/SetPedOnFire
**/
declare function setPedOnFire(thePed: Ped, isOnFire: boolean): boolean;

/**
 * This function allows you to set the oxygen level of a ped.
 * @param thePed the ped whose oxygen level you want to modify.
 * @param oxygen the amount of oxygen you want to set on the ped. Native values are from 0 to 1000. Each of the stamina (22) and underwater stamina (225) stat maximum adds a bonus of 1500. So the maximum oxygen level is 4000.
 * @returns Returns true if the oxygen level was changed succesfully. Returns false if an invalid ped and/or oxygen level was specified.
 * @see https://wiki.mtasa.com/wiki/SetPedOxygenLevel
**/
declare function setPedOxygenLevel(thePed: Ped, oxygen: number): boolean;

/**
 * This function allows you to set the value of a specific statistic for a ped.
 * Visual stats (FAT and BODY_MUSCLE) can only be used on the CJ skin, they have no effect on other skins.
 * When this function is used client side, it can only be used on client side created peds.
 * Needs checking: *Things like infinite run, fire proof CJ, 150 armor have special activation flags. They need a way to be triggered on/off.
 * @param thePed the ped whose statistic you want to modify.
 * @param stat the stat ID.
 * @param value the new value of the stat.It must be between 0 and 1000.
 * @returns Returns true if the statistic was changed succesfully. Returns false if an invalid player is specified, if the stat-id/value is out of acceptable range or if the FAT or BODY_MUSCLE stats are used on non-CJ players.
 * @see https://wiki.mtasa.com/wiki/SetPedStat
**/
declare function setPedStat(thePed: Ped, stat: number, value: number): boolean;

/**
 * This function is used to toggle the health target marker on top of all pedestrians.
 * @param enabled A boolean denoting whether we want to enable (true) or disable (false) the markers.
 * @returns Returns true if the markers were enabled, false if weren't or if invalid arguments are passed.
 * @see https://wiki.mtasa.com/wiki/SetPedTargetingMarkerEnabled
**/
declare function setPedTargetingMarkerEnabled(enabled: boolean): boolean;

/**
 * Changes the voice of a ped.
 * - Note: A ped voice is one of the GTA built in voice character types. Not to be confused with a https://wiki.multitheftauto.com/wiki/Resource:Voice player voice
 * @param thePed the ped whose voice to change.
 * @param voiceType the voice type. See ped voices for possible types.
 * @param voiceName the voice name within the specified type. See ped voices for possible voices.
 * @returns Returns true when the voice was successfully set, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedVoice
**/
declare function setPedVoice(thePed: Ped, voiceType: string, voiceName: string): boolean;

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
 * This function sets the peds LOD distance.
 * @param distance unknown
 * @returns This function returns true if the argument is valid. Returns false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetPedsLODDistance
**/
declare function setPedsLODDistance(distance: number): boolean;

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
 * Sets the motion blur level on the clients screen.
 * Accepts a value between 0 and 255.
 * @param level The level to set the blur to (default
 * @returns 
 * @see https://wiki.mtasa.com/wiki/SetPlayerBlurLevel
**/
declare function setPlayerBlurLevel(level: number): boolean;

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
 * Will change the projectile counter timer which depending on the projectile type will do different things:
 * @param projectile The projectile to edit the timer of.
 * @param timeToDetonate The time in milliseconds to detonation.
 * @returns Returns true on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetProjectileCounter
**/
declare function setProjectileCounter(projectile: Projectile, timeToDetonate: number): boolean;

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
 * 
 * @param theSearchLight the searchlight to modify the property of.
 * @param endX the X coordinate where the searchlight light cone will end.
 * @param endY the Y coordinate where the searchlight light cone will end.
 * @param endZ the Z coordinate where the searchlight light cone will end.
 * @returns If every argument is correct, this function returns true. If not, it will return false plus an error message.
 * @see https://wiki.mtasa.com/wiki/SetSearchLightEndPosition
**/
declare function setSearchLightEndPosition(theSearchLight: Searchlight, endX: number, endY: number, endZ: number): boolean;

/**
 * This function sets the end radius of a searchlight element.
 * @param theSearchlight unknown
 * @param endRadius the radius of the searchlight's light cone in its end.
 * @returns If every argument is correct, this function returns true. If not, it will return false plus an error message.
 * @see https://wiki.mtasa.com/wiki/SetSearchLightEndRadius
**/
declare function setSearchLightEndRadius(theSearchlight: Searchlight, endRadius: number): boolean;

/**
 * This function sets the start position of a searchlight element.
 * @param theSearchLight the searchlight to modify the property of.
 * @param startX the X coordinate where the searchlight light cone will start.
 * @param startY the Y coordinate where the searchlight light cone will start.
 * @param startZ the Z coordinate where the searchlight light cone will start.
 * @returns If every argument is correct, this function returns true. If not, it will return false plus an error message.
 * @see https://wiki.mtasa.com/wiki/SetSearchLightStartPosition
**/
declare function setSearchLightStartPosition(theSearchLight: Searchlight, startX: number, startY: number, startZ: number): boolean;

/**
 * This function sets the start radius of a searchlight element.
 * @param theSearchlight unknown
 * @param startRadius the radius of the searchlight's light cone in its beginning.
 * @returns If every argument is correct, this function returns true. If not, it will return false plus an error message.
 * @see https://wiki.mtasa.com/wiki/SetSearchLightStartRadius
**/
declare function setSearchLightStartRadius(theSearchlight: Searchlight, startRadius: number): boolean;

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
 * This function sets the component position of a vehicle.
 * @param theVehicle The vehicle you wish to set component position.
 * @param theComponent A vehicle component (this is the frame name from the model file of the component you wish to modify)
 * @param posX The new x position of this component.
 * @param posY The new y position of this component.
 * @param posZ The new z position of this component.
 * @param [base=root] A string representing what the supplied position (posX, posY, posZ) is relative to. It can be one of the following values
 * @returns Returns true if component position was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleComponentPosition
**/
declare function setVehicleComponentPosition(theVehicle: Vehicle, theComponent: string, posX: number, posY: number, posZ: number, base?: string): boolean;

/**
 * This function sets the component rotation of a vehicle.
 * - Note: Before r6974 the component rotations went the wrong way (i.e. opposite to the vehicle rotations). This has been corrected, so you'll have to modify any scripts written before r6974 that use this function.
 * @param theVehicle The vehicle you wish to set component rotation of.
 * @param theComponent A vehicle component (this is the frame name from the model file of the component you wish to modify)
 * @param rotX The component's rotation around the x axis in degrees.
 * @param rotY The component's rotation around the y axis in degrees.
 * @param rotZ The component's rotation around the z axis in degrees.
 * @param [base=parent] A string representing what the supplied rotation (rotX, rotY, rotZ) is relative to. It can be one of the following values
 * @returns Returns true if the component rotation was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleComponentRotation
**/
declare function setVehicleComponentRotation(theVehicle: Vehicle, theComponent: string, rotX: number, rotY: number, rotZ: number, base?: string): boolean;

/**
 * This function sets the component scale of a vehicle.
 * @param theVehicle The vehicle you wish to set component scale.
 * @param theComponent A vehicle component (this is the frame name from the model file of the component you wish to modify)
 * @param scaleX The new x scale of this component.
 * @param scaleY The new y scale of this component.
 * @param scaleZ The new z scale of this component.
 * @param [base=root] A string representing what the supplied scale (scaleX, scaleY, scaleZ) is relative to. It can be one of the following values
 * @returns Returns true if component scale was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleComponentScale
**/
declare function setVehicleComponentScale(theVehicle: Vehicle, theComponent: string, scaleX: number, scaleY: number, scaleZ: number, base?: string): boolean;

/**
 * This function sets component visibility for vehicle.
 * @param theVehicle The vehicle you wish to set component visibility of.
 * @param theComponent A vehicle component (this is the component's frame name (also called 'dummy') from the vehicle model's DFF file of which you want to manipulate components)
 * @param visible a bool which determines if the component should be visible
 * @returns Returns a bool indicating if the visiblity was changed successfully.
 * @see https://wiki.mtasa.com/wiki/SetVehicleComponentVisible
**/
declare function setVehicleComponentVisible(theVehicle: Vehicle, theComponent: string, visible: boolean): boolean;

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
 * This function sets the dirt level on a vehicle.
 * Disabled: This function doesn't work actually. See the bugtracker for updates and more information.
 * @param theVehicle The vehicle that you want to set the dirt level from
 * @param dirtLevel The dirt level
 * @returns Returns true if the dirt level was set on the vehicle, false if the dirt level was not set or if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/SetVehicleDirtLevel
**/
declare function setVehicleDirtLevel(theVehicle: Vehicle, dirtLevel: number): boolean;

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
 * Sets the gravity vector of a vehicle.
 * The vehicle will fall in this direction, and the camera of any occupants will also be rotated to match it. Can be used for e.g. driving on walls or upside down on ceilings.
 * @param theVehicle the vehicle of which to change the gravity.
 * @param x unknown
 * @param y unknown
 * @param z unknown
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleGravity
**/
declare function setVehicleGravity(theVehicle: Vehicle, x: number, y: number, z: number): boolean;

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
 * This function is used to set the landing gear state of certain vehicles.
 * @param theVehicle The vehicle of which you wish to set the landing gear state.
 * @param gearState A bool representing the state of the landing gear. true represents a collapsed landing gear, while false represents a disabled landing gear.
 * @returns Returns true if the landing gear was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleLandingGearDown
**/
declare function setVehicleLandingGearDown(theVehicle: Vehicle, gearState: boolean): boolean;

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
 * This function sets the position of the dummies contained in a vehicle model.
 * Use setVehicleComponentPosition to adjust the vehicle component positions.
 * @param modelID The model ID which you want to apply the change to
 * @param dummy The dummy whose position you want to change
 * @param x unknown
 * @param y unknown
 * @param z unknown
 * @returns Returns true if everything went fine, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleModelDummyPosition
**/
declare function setVehicleModelDummyPosition(modelID: number, dummy: string, x: number, y: number, z: number): boolean;

/**
 * This function sets the position of the exhaust fumes the vehicle model emits.
 * Use setVehicleComponentPosition to adjust the exhaust position.
 * @param modelID The model ID which you want to apply the change to
 * @param posX unknown
 * @param posY unknown
 * @param posZ unknown
 * @returns Returns true if everything went fine, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleModelExhaustFumesPosition
**/
declare function setVehicleModelExhaustFumesPosition(modelID: number, posX: number, posY: number, posZ: number): boolean;

/**
 * This function activates or deactivates the nitro on the specified vehicle, like if a player pressed the button for activating nitro.
 * Warning: Only works if the vehicle is steamed in.
 * @param theVehicle unknown
 * @param state unknown
 * @returns Returns true if the nitro activation state was modified successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleNitroActivated
**/
declare function setVehicleNitroActivated(theVehicle: Vehicle, state: boolean): boolean;

/**
 * This function sets how many times a player can activate the nitro on a specified vehicle.
 * Warning: Only works if the vehicle is streamed in.
 * @param theVehicle the vehicle which you want to modify how many times a player can use its nitro.
 * @param count how many times should the player be able to use the nitro of this vehicle (from 0-100 times; 0 means that it can't be used and 101 means that it can be used infinite times).
 * @returns Returns true if the nitro count was set successfully to the vehicle, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleNitroCount
**/
declare function setVehicleNitroCount(theVehicle: Vehicle, count: number): boolean;

/**
 * This function sets the nitro level of the vehicle.
 * Warning: Only works if the vehicle is steamed in
 * @param theVehicle unknown
 * @param level unknown
 * @returns Returns true if the nitro level was set successfully to the vehicle, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetVehicleNitroLevel
**/
declare function setVehicleNitroLevel(theVehicle: Vehicle, level: number): boolean;

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
 * This function sets the vehicle window state.
 * @param theVehicle unknown
 * @param window unknown
 * @param open unknown
 * @returns 
 * @see https://wiki.mtasa.com/wiki/SetVehicleWindowOpen
**/
declare function setVehicleWindowOpen(theVehicle: Vehicle, window: number, open: boolean): boolean;

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
 * This function changes the water rendering order.
 * @param bEnabled A boolean value determining whether water should be drawn last.
 * @returns Returns true if the rendering order was changed successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetWaterDrawnLast
**/
declare function setWaterDrawnLast(bEnabled: boolean): boolean;

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

/**
 * <section name="setWeaponAmmo" class="server" show="true">
 * Sets the ammo to a certain amount for a specified weapon (if they already have it), regardless of current ammo.
 * @param theWeapon unknown
 * @param ammo unknown
 * @returns Returns a boolean value true or false that tells you if it was successful or not.Returns true on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetWeaponAmmo
**/
declare function setWeaponAmmo(theWeapon: Weapon, ammo: number): boolean;

/**
 * This function sets the ammo left in a custom weapon's magazine/clip.
 * @param theWeapon The weapon to set the clip ammo of.
 * @param clipAmmo The amount of ammo in the clip.
 * @returns This function returns true if the arguments are valid and the weapon clip ammo could be changed; false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetWeaponClipAmmo
**/
declare function setWeaponClipAmmo(theWeapon: Weapon, clipAmmo: number): boolean;

/**
 * This function sets the firing rate to be used when a custom weapon is in firing state.
 * @param theWeapon The weapon to modify the firing rate of.
 * @param firingRate The weapon firing rate. It seems to be a kind of frecuency value, so the lower the quicker the custom weapon will shoot.
 * @returns Returns true on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetWeaponFiringRate
**/
declare function setWeaponFiringRate(theWeapon: Weapon, firingRate: number): boolean;

/**
 * This function sets a custom weapon flags, used to change how it behaves or finds a possible target to shoot.
 * - Note: Do not confuse this function with setWeaponProperty. Although setWeaponProperty works with player-held weapons and custom weapons (in a limited extent), this function does not work with player-held weapons.
 * @param theWeapon the weapon element to set the flag of.
 * @param theFlag the weapon flag to change (all of them can be true or false)
 * @param enable whether to enable or disable the specified flag.
 * @returns Returns true if all arguments are valid and the flags where changed; false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetWeaponFlags
**/
declare function setWeaponFlags(theWeapon: Weapon, theFlag: string, enable: boolean): boolean;

// TODO: SetWeaponProperty
/**
 * @see https://wiki.mtasa.com/wiki/SetWeaponProperty
**/

/**
 * This function sets a custom weapon's state.
 * @param theWeapon the weapon you wish to set the state of.
 * @param theState the state you wish to set
 * @returns Returns true on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetWeaponState
**/
declare function setWeaponState(theWeapon: Weapon, theState: string): boolean;

// TODO: SetWeaponTarget
/**
 * @see https://wiki.mtasa.com/wiki/SetWeaponTarget
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
 * This function allows the window to flash in the Windows taskbar.
 * @param shouldFlash whether the window should flash
 * @param [count=10] the number of times the window should flash, defaults to 10 times
 * @returns Returns false if: Returns true otherwise
 * @see https://wiki.mtasa.com/wiki/SetWindowFlashing
**/
declare function setWindowFlashing(shouldFlash: boolean, count?: number): boolean;

/**
 * This function allows you to disable world sounds.
 * A world sound is a sound effect which has not been caused by playSound or playSound3D.
 * - Note: *The values for group and index can be determined by using the client command showsound in conjunction with setDevelopmentMode
 * *This function does not affect sounds which are already playing, such as the wind sound that can only be stopped by entering an interior.
 * * See also: setAmbientSoundEnabled
 * @param group An integer representing the world sound group
 * @param [index=1] An integer representing an individual sound within the group
 * @param enable Set to false to disable, true to enable
 * @param [immediate=false] A boolean if set to true will cancel the sound if it's already playing.This parameter only works for stopping the sound.
 * @returns Returns true if the world sound was correctly enabled/disabled, false if invalid values were passed.
 * @see https://wiki.mtasa.com/wiki/SetWorldSoundEnabled
**/
declare function setWorldSoundEnabled(group: number, index?: number, enable: boolean, immediate?: boolean): boolean;

/**
 * Enables or disables a special world property.
 * @param propname the name of the property to set. Possible values are
 * @param enable whether or not to enable the property.
 * @returns Returns true if successful, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetWorldSpecialPropertyEnabled
**/
declare function setWorldSpecialPropertyEnabled(propname: string, enable: boolean): boolean;

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
 * This function is used to show or hide the player's chat.
 * @param show A boolean value determining whether to show (true) or hide (false) the chat.
 * @returns Returns true if the player's chat was shown or hidden successfully, false otherwise.Returns true if the player's chat was shown or hidden successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ShowChat
**/
declare function showChat(show: boolean): boolean;

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
 * This function checks to see if a line between two points collides with the water.
 * This is similar to processLineOfSight, but only collides with water.
 * Waves are taken into account when testing the line.
 * @param startX unknown
 * @param startY unknown
 * @param startZ unknown
 * @param endX unknown
 * @param endY unknown
 * @param endZ unknown
 * @returns Returns true and the position of the intersection point of the line and the water surface if there is a collision, or false if there is no collision.
 * @see https://wiki.mtasa.com/wiki/TestLineAgainstWater
**/
declare function testLineAgainstWater(startX: number, startY: number, startZ: number, endX: number, endY: number, endZ: number): [boolean, number, number, number];

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
 * Enables or disables the use of all GTA controls for a specified player.
 * @param enabled A boolean value representing whether or not the controls will be usable.
 * @param [gtaControls=true] A boolean deciding whether the enabled parameter will affect GTA's internal controls.
 * @param [mtaControls=true] A boolean deciding whether the enabled parameter will affect MTA's own controls., e.g. chatbox.
 * @returns This function returns true if controls were toggled successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ToggleAllControls
**/
declare function toggleAllControls(enabled: boolean, gtaControls?: boolean, mtaControls?: boolean): boolean;

/**
 * Enables or disables the use of a GTA control for a specific player.
 * @param control The control that you want to toggle the ability of. See control names for a list of possible controls.
 * @param enabled A boolean value representing whether or not the key will be usable or not.
 * @returns This function true if the control was set successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/ToggleControl
**/
declare function toggleControl(control: string, enabled: boolean): boolean;

/**
 * This function is used to toggle if an object should respawn after it got destroyed
 * @param theObject the object you want to toggle the respawn from
 * @param respawn a bool denoting whether we want to enable (true) or disable (false) respawning
 * @returns 
 * @see https://wiki.mtasa.com/wiki/ToggleObjectRespawn
**/
declare function toggleObjectRespawn(theObject: Object, respawn: boolean): boolean;

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
 * This function is the same as triggerServerEvent except the transmission rate of the data contained in the arguments can be limited and other network traffic is not blocked while the data is being transferred.
 * @param event The name of the event to trigger server-side. You should register this event with addEvent and add at least one event handler using addEventHandler.
 * @param [bandwidth=5000] The bytes per second rate to send the data contained in the arguments.
 * @param [persist=false] A bool indicating whether the transmission should be allowed to continue even after the resource that triggered it has since stopped.
 * @param theElement The element that is the source of the event. This could be another player, or if this isn't relevant, use the root element.
 * @param arguments unknown
 * @returns Returns true if the event trigger has been sent, false if invalid arguments were specified.
 * @see https://wiki.mtasa.com/wiki/TriggerLatentServerEvent
**/
declare function triggerLatentServerEvent(event: string, bandwidth?: number, persist?: boolean, theElement: Element, arguments: ...any[]): boolean;

/**
 * This function triggers an event previously registered on the server.
 * This is the primary means of passing information between the client and the server.
 * Servers have a similar triggerClientEvent function that can do the reverse.
 * You can treat this function as if it was an asynchronous function call, using triggerClientEvent to pass back any returned information if necessary.
 * Almost any data types can be passed as expected, including elements and complex nested tables.
 * Non-element MTA data types like xmlNodes or resource pointers will not be able to be passed as they do not necessarily have a valid representation on the client.
 * Elements of the Vector or Matrix classes cannot be passed!
 * Events are sent reliably, so the server will receive them, but there may be (but shouldn't be) a significant delay before they are received.
 * You should take this into account when using them.
 * Keep in mind the bandwidth issues when using events - don't pass a large list of arguments unless you really need to. It is marginally more efficient to pass one large event than two smaller ones.
 * Warning: You should use the global variable client serverside instead of passing the localPlayer by parameter or source. Otherwise event faking (passing another player instead of the localPlayer) would be possible. More information at addEventHandler
 * @param event The name of the event to trigger server-side. You should register this event with addEvent and add at least one event handler using addEventHandler.
 * @param theElement The element that is the source of the event.
 * @param arguments unknown
 * @returns Returns true if the event trigger has been sent, false if invalid arguments were specified or a client side element was a parameter.
 * @see https://wiki.mtasa.com/wiki/TriggerServerEvent
**/
declare function triggerServerEvent(event: string, theElement: Element, arguments: ...any[]): boolean;

/**
 * Removes an existing key bind from the specified player.
 * - Note: unbindKey will only work on binds that were added by the same resource
 * - Note: unbindKey on the server may return true on failure
 * @param key The key you wish to unbind. See Key names for a list of valid key names.
 * @param keyState is optional in Syntax 2.
 * @param handler (Syntax 2) The function you wish to unbind.
 * @returns Returns 'true if the key was unbound, false if it was not previously bound or invalid arguments were passed to the function.Returns 'true if the key was unbound, false if it was not previously bound or invalid arguments were passed to the function.
 * @see https://wiki.mtasa.com/wiki/UnbindKey
**/
declare function unbindKey(key: string, keyState: string, handler: Function): boolean;

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
