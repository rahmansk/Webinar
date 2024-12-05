
require('./dbConn');
const Blog = require('./blogSchema');


module.exports.main = async (args) => {
    
    const {id} = args;
    try {
        const blogs = await Blog.findByIdAndDelete(id);
        return {
            statusCode: 200,
            body : {
                message: "Deleted successfully"
            }
        };
        
    }catch (err) {
        console.log(err);
        return{
            statusCode: 500,
            body: err.message
        }
    }
}