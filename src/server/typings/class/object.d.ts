/** @customConstructor Object */
declare class MapObject extends Element {
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
  constructor(modelid: number, x: number, y: number, z: number, rx: number, ry: number, rz: number, isLowLOD?: boolean);
}