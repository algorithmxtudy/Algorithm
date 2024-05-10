function canPlaceFlowers(flowerbed, n) {
  if (flowerbed.length === 1) {
    if (flowerbed[0] === 1 && n >= 1) {
      return false;
    } else {
      return true;
    }
  }

  for (let i = 0; i < flowerbed.length; i++) {
    if (n <= 0) break;

    if (i === 0 && flowerbed[i] === 0) {
      if (flowerbed[i + 1] === 0) {
        flowerbed[i] = 1;
        n--;
      }
    } else if (i === flowerbed.length - 1) {
      if (flowerbed[i - 1] === 0 && flowerbed[i] === 0) {
        flowerbed[i] = 1;
        n--;
      }
    } else {
      if (
        flowerbed[i - 1] === 0 &&
        flowerbed[i + 1] === 0 &&
        flowerbed[i] === 0
      ) {
        flowerbed[i] = 1;
        n--;
      }
    }
  }

  if (n === 0) return true;
  else return false;
}

// canPlaceFlowers([1, 0, 0, 0, 1], 1);
// canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 1);
// canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2);
canPlaceFlowers([0, 0, 0, 0, 1], 2);
// canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 0);
// canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2);
// canPlaceFlowers([1, 0, 0, 0, 0, 1], 2);
