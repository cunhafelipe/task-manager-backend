const notFoundError = (res) => {
    res.status(404).send("Este dado não foi encotnrado no banco de dados.");
};

const objectIdError = (res) => {
    res.status(500).send(
        "Ocorreu um erro ao recuperar este dado no banco de dados."
    );
};

module.exports = {
    notFoundError,
    objectIdError,
};
