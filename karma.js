// called by karma
const testsContext = require.context('./test', true, /tests/);
testsContext.keys().forEach(testsContext);
