

/**
 * Gets whether the traffic lights are currently locked or not.
 * If the lights are locked, it means they won't change unless you do setTrafficLightState.
 * @param areTrafficLightsLocked unknown
 * @returns Returns true the traffic lights are currently locked, false otherwise.
 * @see https://wiki.mtasa.com/wiki/AreTrafficLightsLocked
**/
declare function areTrafficLightsLocked(areTrafficLightsLocked: boolean): [];

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
 * Creates an area of water.
 * The largest possible size of a water area is 5996&#0215;5996.
 * Also be aware that the function will change all x and y coordinates you specify into even integer numbers if necessary: this is because of a limitation of San Andreas.
 * You are able to give the water a shallow water effect, which practically changes the water invisible to the eye.
 * However, all elements still work the same way as without the shallow effect - allowing swimming, diving, vehicles to sink, etc.
 * - Note: X and Y positions will be changed to an even integer. i.e. -2, 0, 2, 4 etc.
 * Important note: If you're working with dimensions, be sure to apply it by using setElementDimension.
 * @param x1 unknown
 * @param y1 unknown
 * @param z1 unknown
 * @param x2 unknown
 * @param y2 unknown
 * @param z2 unknown
 * @param x3 unknown
 * @param y3 unknown
 * @param z3 unknown
 * @param x4 unknown
 * @param y4 unknown
 * @param z4 unknown
 * @param [bShallow=false] gives the water a shallow water effect.
 * @returns Returns a water element if successful, false otherwise. The water element can be repositioned with setElementPosition and destroyed with destroyElement.
 * @see https://wiki.mtasa.com/wiki/CreateWater
**/
declare function createWater(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number, bShallow?: boolean): Water;

/**
 * This function gets the maximum height at which aircraft can fly without their engines turning off.
 * @returns Returns a float containing the max aircraft height.
 * @see https://wiki.mtasa.com/wiki/GetAircraftMaxHeight
**/
declare function getAircraftMaxHeight(): number;

/**
 * This function returns the maximum velocity at which aircrafts could fly.
 * Using this function server-side will return the server-side value, not necessarily the same that is set client-side.

 * @returns Returns a float being the max velocity that is currently set, depending on which side it is used.
 * @see https://wiki.mtasa.com/wiki/GetAircraftMaxVelocity
**/
declare function getAircraftMaxVelocity(): number;

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
 * @param thePlayer The player who is receiving the events.
 * @returns Returns a table of handles or false if invalid arguments were passed.
 * @see https://wiki.mtasa.com/wiki/GetLatentEventHandles
**/
declare function getLatentEventHandles(thePlayer: Player): object;

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
 * This function is used to get "occlusions enabled" state.
 * - Note: Occlusions are used by GTA to enhance performance by hiding objects that are (normally) obscured by certain large buildings. However when removeWorldModel is used they may also have the undesired effect of making parts of the map disappear. Disabling occlusions will fix that.
 * @param getOcclusionsEnabled unknown
 * @returns Returns true if occlusions are enabled, or false otherwise.
 * @see https://wiki.mtasa.com/wiki/GetOcclusionsEnabled
**/
declare function getOcclusionsEnabled(getOcclusionsEnabled: boolean): [];

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
 * This function is used to get the current rain level.
 * - Note: The server can only return the rain level if it has actually been set by script, otherwise it will return false.
 * @param getRainLevel unknown
 * @returns Returns the rain level as a number.
 * @see https://wiki.mtasa.com/wiki/GetRainLevel
**/
declare function getRainLevel(getRainLevel: number): [];


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
 * This function is used to get the current time in the game.
 * If you want to get the real server time, use getRealTime.

 * @returns Returns two ints that represent hours and minutes.
 * @see https://wiki.mtasa.com/wiki/GetTime
**/
declare function getTime(): [number, number];

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
 * This function will enable or disable clouds.
 * This is useful for race maps which are placed high up as clouds can cause low FPS.
 * @param enabled A boolean value determining if clouds should be shown.Use true to show clouds and false to hide them.
 * @returns Returns true if the cloud state was changed succesfully, false if an invalid argument was specified.
 * @see https://wiki.mtasa.com/wiki/SetCloudsEnabled
**/
declare function setCloudsEnabled(enabled: boolean): boolean;

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
 * This function sets the dirt level on a vehicle.
 * Disabled: This function doesn't work actually. See the bugtracker for updates and more information.
 * @param theVehicle The vehicle that you want to set the dirt level from
 * @param dirtLevel The dirt level
 * @returns Returns true if the dirt level was set on the vehicle, false if the dirt level was not set or if invalid arguments are specified.
 * @see https://wiki.mtasa.com/wiki/SetVehicleDirtLevel
**/
declare function setVehicleDirtLevel(theVehicle: Vehicle, dirtLevel: number): boolean;

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

/**
 * <section name="setWeaponAmmo" class="server" show="true">
 * Sets the ammo to a certain amount for a specified weapon (if they already have it), regardless of current ammo.
 * @param theWeapon unknown
 * @param ammo unknown
 * @returns Returns a boolean value true or false that tells you if it was successful or not.Returns true on success, false otherwise.
 * @see https://wiki.mtasa.com/wiki/SetWeaponAmmo
**/
declare function setWeaponAmmo(theWeapon: Weapon, ammo: number): boolean;

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
 * This function checks if a weapon is usable while on a Jetpack.
 * @param weapon The weapon that's being checked if it's usable on a Jetpack.
 * @returns Returns true if the weapon is enabled, else false if the weapon isn't or invalid arguments are passed.
 * @see https://wiki.mtasa.com/wiki/GetJetpackWeaponEnabled
**/
declare function getJetpackWeaponEnabled(weapon: string): boolean;

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
 * giveWeapon gives a specified weapon to a certain player or ped.
 * There is an optional argument to specify ammunition.
 * For example, a melee weapon doesn't need an ammo argument.
 * - Note: *When setting ammo for weapons in slot 0,1,10,11 or 12, the ammo max is 1
 * *When setting ammo for weapons in slot 3,4,5, the ammo is added
 * *When setting ammo for weapons in slot 2,6,7,8,9 and the slot weapon is changing, the ammo is replaced
 * @param thePlayer A player or ped object referencing the specified player (or ped)
 * @param weapon A whole number integer that refers to a Weapon ID. Click here for a list of possible weapon IDs.
 * @param [ammo=30] A whole number integer serving as the ammo amount for the given weapon. For weapons that do not require ammo, such as melee, this should be at least 1.
 * @param [setAsCurrent=false] A boolean value determining whether or not the weapon will be set as the players current.
 * @returns Returns true if weapon was successfully acquired, false otherwise.
 * @see https://wiki.mtasa.com/wiki/GiveWeapon
**/
declare function giveWeapon(thePlayer: Ped, weapon: number, ammo?: number, setAsCurrent?: boolean): boolean;

/**
 * This function sets a weapon usable while using the Jetpack.
 * - Note: colt 45, sawed-off, tec-9 and uzi are always enabled for the Jetpack and are not affected by this function
 * @param weapon unknown
 * @param enabled unknown
 * @returns Returns true, else false if invalid arguments are passed.
 * @see https://wiki.mtasa.com/wiki/SetJetpackWeaponEnabled
**/
declare function setJetpackWeaponEnabled(weapon: string, enabled: boolean): boolean;

/**
 * This function removes evegetFPSLimitry weapons from a specified ped, rendering it unarmed.
 * - Note: Weapons are removed when a ped dies by default. This means that it is only appropriate to use this function while a ped is alive.
 * @param thePed A ped element referencing the specified ped
 * @returns Returns true if the function succeeded, false otherwise.
 * @see https://wiki.mtasa.com/wiki/TakeAllWeapons
**/
declare function takeAllWeapons(thePed: Ped): boolean;

/**
 * This function removes a specified weapon or ammo from a certain player's inventory.
 * @param thePlayer A player object referencing the specified player.
 * @param weaponId An integer that refers to a weapon that you wish to remove.
 * @param ammo If used, this amount of ammo will be taken instead and the weapon will not be removed.
 * @returns Returns a true if the weapon/ammo was removed successfully, false otherwise.
 * @see https://wiki.mtasa.com/wiki/TakeWeapon
**/
declare function takeWeapon(thePlayer: Player, weaponId: number, ammo: number): boolean;

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