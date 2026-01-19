import { agfaTapes, ManufacturerTape } from './agfaTapes';
import { denonTapes } from './denonTapes';
import { goldstarTapes } from './goldstarTapes';
import { sonyTapesNew } from './sonyTapesNew';
import { tdkTapes } from './tdkTapes';

export type { ManufacturerTape };

export const getManufacturerTapes = (manufacturerId: string): ManufacturerTape[] => {
  switch (manufacturerId) {
    case 'agfa':
      return agfaTapes;
    case 'denon':
      return denonTapes;
    case 'goldstar':
      return goldstarTapes;
    case 'sony':
      return sonyTapesNew;
    case 'tdk':
      return tdkTapes;
    default:
      return [];
  }
};

export const hasLocalTapes = (manufacturerId: string): boolean => {
  return ['agfa', 'denon', 'goldstar', 'sony', 'basf', 'maxell', 'tdk'].includes(manufacturerId);
};
