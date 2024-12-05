
require('./dbConn');
const Blog = require('./blogSchema');


module.exports.main = async (args) => {
    
    const {id, body} = args;
    try {
        const blogs = await Blog.findByIdAndUpdate(id,body);
        // const blogs = await Blog.findById('62ce8a66d030b467b919a6c1');
        // console.log(blogs);
        return {
            statusCode: 200,
            body : {
                message: "Updated successfully"
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