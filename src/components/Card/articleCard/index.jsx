const PostCard = ({ post }) => {
    return (
      <div className="border rounded-lg shadow-md p-4 max-w-sm mb-4">
        {/* Image */}
        <img
          src={post.imageUrl}
          alt="Post image"
          className="w-full h-40 object-cover rounded-md mb-2"
        />
        
        {/* User Info */}
        <div className="flex items-center mb-2">
          <div className="w-8 h-8 bg-red-500 rounded-full mr-2"></div>
          <span className="text-sm font-medium">{post.username}</span>
        </div>
  
        {/* Post Title */}
        <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
  
        {/* Stats and Date */}
        <div className="flex justify-between text-gray-500 text-sm">
          <span>{post.date}</span>
          <div className="flex space-x-2">
            <span>🤲 {post.likes}</span>
            <span>💬 {post.comments}</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default PostCard;