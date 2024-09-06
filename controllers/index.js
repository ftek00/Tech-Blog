const apiCommentRoutes = require("./api/comment-routes");
const apiIndexRoutes = require("./api/index-routes");
const apiPostRoutes = require("./api/post-routes");
const homeRoutes = require("./home-routes");

module.exports = {
  api: {
    commentRoutes: apiCommentRoutes,
    indexRoutes: apiIndexRoutes,
    postRoutes: apiPostRoutes,
  },
  homeRoutes: homeRoutes,
};
