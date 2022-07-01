const errorResponseStatus = require("../../utils/errorRespStatus");

const deleteOne = (Model) =>
    async (req, res, next) => {
        const doc = await Model.findByIdAndDelete(req.params.id);

        if (!doc) {
            errorResponseStatus(500,'No document found with that ID',res);
        }

        res.status(204).json({
            status: 'Success',
            data: null,
        });
    };

const getAll = (Model) => 
    async (req, res, next) => {

        const data = await Model.find().sort(req.sort).exec()

        req.data = data

        next()
    }

const getResponse = async(req, res) => {
    const {data} = req
    res.status(200).json({
        status: 'Success',
        data
    })
}

const sortMiddleware = async(req, res, next) => {
    const sortBy = req.query.sort
    if (sortBy ) {
        let obj = {}
        obj[sortBy] = 1
        req.sort = obj
    }
    next()
}

module.exports = {sortMiddleware, deleteOne,getAll,getResponse}