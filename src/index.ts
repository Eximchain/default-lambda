'use strict';

exports.handler = async (event:any) => {
    console.log("[DEFAULT FUNCTION] request: " + JSON.stringify(event));

    throw Error("Expected function not yet deployed");
};