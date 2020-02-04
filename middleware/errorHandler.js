/*
This Middleware will catch all ERRORS from the Express App ( does not deal or work with NEXTJS )
Example:
  router.get('/easel_api/someapi', async (req, res, next) => {
    try {
      throw new CustomError('Basic Error')
      or
      throw new PaletteError()
      or
      throw new ApiError({ endpoint: 'GET:/easel_api/test/error', message('Something failed') })
    } catch (error) {
      next(error)
    }
  })
*/
const errorHandlerMiddleware = (error, req, res, next) => {
  const { name, message, data } = error;
  switch (name) {
    default:
      // Type - CustomError || Error
      return res.status(500).send({ payload: {}, success: false });
  }
};

module.exports = errorHandlerMiddleware;
