global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};

const Enzyme = require("enzyme");
const { default: Adapter } = require("@cfaester/enzyme-adapter-react-18");

Enzyme.configure({ adapter: new Adapter() });
