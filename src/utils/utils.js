export const payloadCreator = (asyncFunc) => async (arg, thunkAPI) => {
    try {
        const res = await asyncFunc(arg);
        return res;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
};
export function extractErrorMessage(error) {
    return error.response?.data?.message || error.message || error.toString();
}
export const payloadRegister = (asyncFunc) => async (arg, thunkAPI) => {
    try {
        const res = await asyncFunc(arg);
        return res;
    } catch (error) {
        return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
};
