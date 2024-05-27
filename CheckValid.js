const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const randomString = () => Math.random().toString(36).slice(2);