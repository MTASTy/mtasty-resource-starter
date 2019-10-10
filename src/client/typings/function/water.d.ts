/** @noSelf **/
declare namespace Client {
  /**
   * Creates an area of water.
   * The largest possible size of a water area is 5996×5996.
   * Also be aware that the function will change all x and y coordinates you specify into even integer numbers if necessary: this is because of a limitation of San Andreas.
   * You are able to give the water a shallow water effect, which practically changes the water invisible to the eye.
   * However, all elements still work the same way as without the shallow effect - allowing swimming, diving, vehicles to sink, etc.
   * - Note: X and Y positions will be changed to an even integer. i.e. -2, 0, 2, 4 etc.
   * - Important note: If you're working with dimensions, be sure to apply it by using setElementDimension.
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

  // TODO: getWaterColor
  // TODO: getWaterLevel
  // TODO: getWaterVertexPosition
  // TODO: getWaveHeight
  // TODO: isWaterDrawnLast
  // TODO: resetWaterColor
  // TODO: resetWaterLevel
  // TODO: setWaterColor
  // TODO: setWaterDrawnLast
  // TODO: setWaterLevel
  // TODO: setWaterVertexPosition
  // TODO: setWaveHeight
}