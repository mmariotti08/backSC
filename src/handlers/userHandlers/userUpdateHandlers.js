
const { User } = require('../../db');

const userUpdateHandlers = async (active, id) => {
  try {

    const updateUser = await User.findByPk(id);

    if (!updateUser) throw Error (`user id: ${id} not found`)

    await User.update({ active: active},{
        where: {
            id: id,
        }
    })
    return find = await User.findByPk(id);

  } catch (error) {

    return error.message;
  }
};

module.exports = { userUpdateHandlers };
