const Afterware = require("../lib/afterware");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const Collection = require("../models/fallback");
const { query } = require("express");

class FallbackController {
    static async viewAll(req, res) {
        try {
            const collections = await Collection.find({});
            return Afterware.sendResponse(req, res, 200, {
                status: "success",
                data: collections,
            });
        } catch (error) {
            console.log(error);
            return Afterware.sendResponse(req, res, 500, {
                status: "error",
                message: "Internal Server Error",
            });
        }
    }

    static async addFallback(req, res) {
        try {
            const collection = new Collection();
            collection.query = req.body.query;
            console.log("Collection: " + collection);
            collection.save();
            return Afterware.sendResponse(req, res, 200, {
                status: "success",
                message: "new Query added created successfully",
            });
        } catch (error) {
            console.log(error);
            return Afterware.sendResponse(req, res, 500, {
                status: error,
                message: "internal error",
            })
        }
    }
}

module.exports = FallbackController;