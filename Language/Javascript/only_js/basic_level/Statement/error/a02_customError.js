class customError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError_name";
    }
};

throw new customError("This is the Custom error");