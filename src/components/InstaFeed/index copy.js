import React, { useEffect, useState } from "react";
import { FeedContainer, Post } from "./InstaFeed";

const InstaFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const accessToken =
      "IGQVJXbWtEUHVXZAE5DS0V4VEtKSkJsVUJaQzJxUHBMWGpfcTVoMXVDaTBKTEY1eTR3VkEwbmFPeVBFYTJibjBVVThuOGhaNGNINHVUT05XdWVkM1NESmlpMlE5WmUzaDBObTNib3BHM2RnU0lxWjZAzYgZDZD";
    fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,children{media_url}&limit=8&access_token=${accessToken}`
    )
      .then((response) => response.json())
      .then((data) => setPosts(data.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <FeedContainer>
      {posts.map((post) => (
        <Post key={post.id}>
          {post.media_type === "IMAGE" ? (
            <img src={post.media_url} alt="Instagram Post" />
          ) : post.media_type === "VIDEO" ? (
            <video src={post.media_url} controls />
          ) : (
            post.children &&
            post.children.data.length > 0 && (
              <img src={post.children.data[0].media_url} alt="Instagram Post" />
            )
          )}
        </Post>
      ))}
    </FeedContainer>
  );
};

export default InstaFeed;
