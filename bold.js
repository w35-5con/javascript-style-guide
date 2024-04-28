const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const buildOutputPath = path.join(repositoryRootPath, 'out');
const uniqueArr = (arr) => [...new Set(arr)];