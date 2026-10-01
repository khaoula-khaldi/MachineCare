const dashboardRepository = require("../repositories/dashboard.repository");

const getStatistics = async () => {

    const users = await dashboardRepository.getUsersCount();

    const ateliers = await dashboardRepository.getAtelierCount();

    const machines = await dashboardRepository.getMachineCount();

    const pannes = await dashboardRepository.getPanneCount();

    return {
        users,
        ateliers,
        machines,
        pannes
    };
};

module.exports = {
    getStatistics
};