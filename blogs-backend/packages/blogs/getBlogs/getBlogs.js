

require('./dbConn');
const Blog = require('./blogSchema');


module.exports.main = async (args) => {
    try {
        const blogs = await Blog.find();
        if(blogs.length){
            return {
                statusCode: 200,
                body : blogs
            };
        }else{
            return {
                statusCode: 404,
                body: {message: 'Blogs not found'}
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