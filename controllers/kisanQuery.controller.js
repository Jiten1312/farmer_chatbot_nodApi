const Afterware = require("../lib/afterware");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const Collection = require("../models/kisanQuery");
const { query } = require("express");

class KisanQueryController {

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

    static async dataFetch(req, res) {
        var regex_plant = new RegExp(req.body.plant_name);
        const plant_area = req.body.plant_area;
        var regex_area = new RegExp(req.body.plant_area);
        const plant_problem = req.body.plant_problem;
        var regex_problem = new RegExp(req.body.plant_problem);
        try {
            const collections = await Collection.find({
                sector: { $in: ['ખેત', 'બાગાયત'] },
                crop: regex_plant,
                query_text: { $in: [regex_area, regex_problem] },
                response: { $not: /કિસાન કોલ સેન્ટર/ }
            });
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

    static async dataFetchAll(req, res) {
        var regState = new RegExp(req.body.state);
        try {
            const collections = await Collection.find({
                sector: req.body.sector,
                category: req.body.category,
                crop: req.body.crop,
                query_type: req.body.query_type,
                state: regState,
                district: req.body.district,
                response: { $not: /કિસાન કોલ સેન્ટર/ }
            });
            return Afterware.sendResponse(req, res, 200, {
                status: "success",
                data: collections,
            });

        } catch (error) {
            console.log(error);
            return Afterware.sendResponse(req, res, 500, {
                status: "error",
                message: "Internal Server Error",
            })
        }

    }

    static async getPrice(req, res) {
        try {
            var regex_plant = new RegExp(req.body.plant_name);
            const collections = await Collection.find({
                sector: { $in: ['ખેત', 'બાગાયત'] },
                crop: regex_plant,
                query_type: 'બજાર માહિતી',
                response: { $not: /કિસાન કોલ સેન્ટર/ }
            });
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

    static async getFertilizer(req, res) {
        try {
            var regex_plant = new RegExp(req.body.plant_name);
            const collections = await Collection.find({
                sector: { $in: ['ખેત', 'બાગાયત'] },
                crop: regex_plant,
                query_type: 'ખાતર ઉપયોગ અને ઉપલબ્ધિ',
                query_text: { $in: [/Gernal/, /ખાતર/, /PGR/] },
                response: { $not: /કિસાન કોલ સેન્ટર/ }
            });
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

    static async addQuery(req, res) {
        try {
            const collection = new Collection();
            collection.sector = req.body.sector;
            collection.save();
            return Afterware.sendResponse(req, res, 200, {
                status: "success",
                message: "new Query added created successfully",
            });
        } catch (error) {
            console.log(error);
            return Afterware.sendResponse(req, res, 500, {
                status: "error",
                message: "internal server error"
            })
        }
    }
}

module.exports = KisanQueryController;