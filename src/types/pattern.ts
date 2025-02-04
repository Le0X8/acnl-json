import { Buffer } from 'buffer/';
import { parsePersonalId } from './personalid';

export function parsePattern(buffer: Buffer) {
  return {
    name: buffer.toString('utf16le', 0x00000, 0x0002a),
    creator: parsePersonalId(buffer.subarray(0x0002a, 0x00058) as Buffer),
    colorPalette: Array.from(buffer.subarray(0x00058, 0x00067)),
    unknown0x00067: buffer.readUInt8(0x00067),
    unknown0x00068: buffer.readUInt8(0x00068),
    type: buffer.readUInt8(0x00069),
    padding0x0006a: buffer.readUInt16LE(0x0006a),
    designData1: Array.from(buffer.subarray(0x0006c, 0x0026c)),
    designData2: Array.from(buffer.subarray(0x0026c, 0x0046c)),
    designData3: Array.from(buffer.subarray(0x0046c, 0x0066c)),
    designData4: Array.from(buffer.subarray(0x0066c, 0x0086c)),
    padding0x0086c: buffer.readUInt32LE(0x0086c),
  };
}
