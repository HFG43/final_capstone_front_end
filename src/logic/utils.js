const getRandomDiscount = (range) => parseInt(
  Math.ceil((Math.random() * (range.end - range.start)) + range.start), 10,
);

export default getRandomDiscount;
