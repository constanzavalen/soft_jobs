import { findError } from '../utils/utils.js';

import {getAllUserModel} from '../models/getUserModel.js';

const getAllUser = async (req, res) => {
    try {
        const user = await getAllUserModel();
        res.status(200).json({ user: user});
    } catch (error) {
        const errorFound = findError(error.code);
        return res
          .status(errorFound[0]?.status)
          .json({ error: errorFound[0]?.message });
    }
    

};

export {getAllUser};