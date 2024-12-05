
require('./dbConn');
const Blog = require('./blogSchema');



module.exports.main = async (args) => {
    try {
        if(Object.keys(args).length !==0){
            const blog = await Blog.create(args);
            console.log(blog);
            return {
                statusCode : 201,
                body: blog
            };
        }else{
            return {
                statusCode: 204
            }
        }
    }catch (err) {
        console.log(err);
        return{
            statusCode: 500,
            body: err.message
        }
    }
}