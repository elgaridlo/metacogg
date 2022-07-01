const errorResponseStatus = require("../../utils/errorRespStatus");

exports.deleteOne = (Model) =>
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

exports.getAll = (Model) => 
    async (req, res) => {

        console.log('req.sort = ', req.sort)

        const data = await Model.find().sort(req.sort).exec()

        res.status(200).json({
            status: 'Success',
            data
        })
    }