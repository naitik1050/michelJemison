
export default abstract class TileHelper {
     static generateCoordinates(rowIndex: number,columnIndex: number): string {
        return `${rowIndex}_${columnIndex}`;
    }
}