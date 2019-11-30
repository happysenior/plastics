import models from "../../models";
import api from "../tools/common";

function getBusinessTypes(req, res, next) {
  models.BusinessType.findAll({
    attributes: ["id", "name"]
  })
    .then(types => {
      api.ok(res, types);
    })
    .catch(e => {
      api.error(res, e.message, 500);
    });
}

module.exports = {
  getBusinessTypes
};
