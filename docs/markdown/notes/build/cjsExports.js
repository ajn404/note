if (ProcessingInstruction.env.NODE_ENV === 'production') {
    module.exports = require("my-lib.production.js");
} else {
    module.exports = require("my-lib.development.js");
}