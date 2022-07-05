const expressAsyncHandler = require("express-async-handler");
const appError = require("../../utils/error/appError");

const deleteOne = (Model) =>
    expressAsyncHandler(async (req, res, next) => {
        const doc = await Model.findByIdAndDelete(req.params.id);

        if (!doc) {
            return next(new appError('No document found with that ID', 500))
        }

        res.status(204).json({
            status: 'Success',
            data: null,
        });
    });

const getAll = (Model) => 
    async (req, res, next) => {
        let filter 
        console.log('req.filter = ',req.filter)
        console.log('req.filterPass = ',req.filterPass)

        if(req.filter && req.filterPass) {
            filter = req.filter
        }
        console.log('filter = ', filter)
        const data = await Model.find(filter).sort(req.sort).exec()

        req.data = data

        next()
    }

const getResponse = async(req, res) => {
    const {data} = req
    res.status(200).json({
        status: 'Success',
        length: data.length,
        data
    })
}

const sortMiddleware = async(req, res, next) => {
    const sortBy = req.query.sort
    const sortByOrder = req.query.sortOrder
    if (sortBy ) {
        let obj = {}
        obj[sortBy] = sortByOrder === 'desc' ? -1 : 1
        req.sort = obj
    }
    next()
}

const filterData = async(req, res, next) => {
    const {min, max, field} = req.query

    console.log('req.params = ', req.query)
    if (!field) {
        req.filter = undefined
        return next()
    }

    const filter = {
        [field]: { $gte: min, $lte: max}
    }
    if (filter[field]['$gte'] === undefined) {
        delete filter[field]['$gte']
    }
    if (filter[field]['$lte'] === undefined) {
        delete filter[field]['$lte']
    }
    req.filter = filter
    req.filterPass = req.query.hasOwnProperty('field')
    next()
}

const updateOne = async(Model, updateFilter, dataupdate) => {
    console.log('filter = ', updateFilter)
    console.log('update = ', dataupdate)
    await Model.updateOne(updateFilter, dataupdate, {new: true}).exec()
};

module.exports = {sortMiddleware, deleteOne,getAll,getResponse, updateOne, filterData}