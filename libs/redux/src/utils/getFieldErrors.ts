export const getFieldErrors = (data) => {
    if (data.payload instanceof Array) {
        return data.payload.reduce((result, item) => {
            if (item.field && item.message) {
                result[item.field] = item.message;
            }

            return result;
        }, {});
    }
};
