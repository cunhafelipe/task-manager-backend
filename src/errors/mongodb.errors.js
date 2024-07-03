const notFoundError = (res) => {
    res.status(404).send("Este dado não foi encotnrado no banco de dados.");
};

module.exports = {
    notFoundError,
};
