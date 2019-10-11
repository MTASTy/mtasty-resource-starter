/** @noSelf **/
declare namespace Server {

  /**
   * This function creates a collision circle.
   * This is a shape that has a position and a radius and infinite height that you can use to detect a player's presence.
   * Events will be triggered when a player enters or leaves it.
   * - Tip: To visualize a colshape when writing scripts, use the client console command "/showcol".
   * @param fX The collision circle's center point's X axis position.
   * @param fY The collision circle's center point's Y axis position.
   * @param radius The radius of the collision circle.
   * @returns Returns a colshape element if successful, false if invalid arguments were passed to the function.
   * @see https://wiki.mtasa.com/wiki/CreateColCircle
   **/
  function createColCircle(fX: number, fY: number, radius: number): ColShape | false;

  /**
   * This function creates a collision cuboid.
   * This is a shape that has a position, width, depth and height.
   * The XYZ of the col starts at the southwest bottom corner of the shape.
   * - Tip: To visualize a colshape when writing scripts, use the client console command "/showcol".
   * - Note: Attaching a cuboid colshape to another element may give unexpected results as the origin is not at the cuboid centre. Try using a collision sphere for attaching instead.
   * @param fX The X position of the collision cuboid's western side.
   * @param fY The Y position of the collision cuboid's southern side.
   * @param fZ The Z position of the collision cuboid's lowest side.
   * @param fWidth The collision cuboid's width.
   * @param fDepth The collision cuboid's depth.
   * @param fHeight The collision cuboid's height.
   * @returns Returns a colshape element if successful, false if invalid arguments were passed to the function.
   * @see https://wiki.mtasa.com/wiki/CreateColCuboid
   **/
  function createColCuboid(fX: number, fY: number, fZ: number, fWidth: number, fDepth: number, fHeight: number): ColShape | false;

  /**
   * This function creates a collision polygon.
   * See Wikipedia for a definition of a polygon.
   * The first set of X Y of this shape is not part of the colshape bounds, so can set anywhere in the game world, however for performance, place it as close to the centre of the polygon as you can.
   * It should be noted this shape is 2D. There should be at least 3 bound points set.
   * - Note: For this function to work correctly, get/set your bound points in an anti-clockwise fashion.
   * - Tip: To visualize a colshape when writing scripts, use the client console command "/showcol".
   * @param fCenterX The X position of the collision polygon's position - the position that will be returned from getElementPosition.
   * @param fCenterY The Y position of the collision polygon's position - the position that will be returned from getElementPosition.
   * @param fX1 The 1st X position of the collision polygon's bound point.
   * @param fY1 The 1st Y position of the collision polygon's bound point.
   * @param fX2 The 2nd X position of the collision polygon's bound point.
   * @param fY2 The 2nd Y position of the collision polygon's bound point.
   * @param fX3 The 3rd X position of the collision polygon's bound point.
   * @param fY3 The 3rd Y position of the collision polygon's bound point.
   * @param coords From the 3rd position you can have as many points as you require to create the colshape.
   * @returns Returns a colshape element if successful, false if invalid arguments were passed to the function.
   * @see https://wiki.mtasa.com/wiki/CreateColPolygon
   **/
  function createColPolygon(fCenterX: number, fCenterY: number, fX1: number, fY1: number, fX2: number, fY2: number, fX3: number, fY3: number, ...coords: number[]): ColShape | false;

  /**
   * This function creates a collision rectangle.
   * This is a shape that has a position and a width and a depth.
   * See Rectangle for a definition of a rectangle.
   * XY marks on the south west corner of the colshape.
   * - Tip: To visualize a colshape when writing scripts, use the client console command "/showcol".
   * - Note: Attaching a rectangle colshape to another element may give unexpected results as the origin is not at the rectangle centre. Try using a collision circle for attaching instead.
   * @param fX The X position of the collision rectangle's west side.
   * @param fY The Y position of the collision rectangle's south side.
   * @param fWidth The collision rectangle's width.
   * @param fHeight The collision rectangle's height.
   * @returns Returns a colshape element if successful, false if invalid arguments were passed to the function.
   * @see https://wiki.mtasa.com/wiki/CreateColRectangle
   **/
  function createColRectangle(fX: number, fY: number, fWidth: number, fHeight: number): ColShape | false;

}
