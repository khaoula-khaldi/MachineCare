const dashboardService = require("../services/dashboard.service");

const getStatistics = async (req, res) => {
    try {
        const statistics = await dashboardService.getStatistics();

        res.status(200).json({
            statistics
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getStatistics
};