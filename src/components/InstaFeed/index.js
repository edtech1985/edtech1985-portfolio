import React, { useEffect, useState } from "react";
import { FeedContainer, Post, ImageLink } from "./InstaFeed";

const InstaFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const accessToken =
      "IGQVJXbWtEUHVXZAE5DS0V4VEtKSkJsVUJaQzJxUHBMWGpfcTVoMXVDaTBKTEY1eTR3VkEwbmFPeVBFYTJibjBVVThuOGhaNGNINHVUT05XdWVkM1NESmlpMlE5WmUzaDBObTNib3BHM2RnU0lxWjZAzYgZDZD";
    fetch(
      `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,permalink,children{media_url}&limit=8&access_token=${accessToken}`
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
            <ImageLink
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={post.media_url} alt="Instagram Post" />
            </ImageLink>
          ) : post.media_type === "VIDEO" ? (
            <video src={post.media_url} controls />
          ) : (
            post.children &&
            post.children.data.length > 0 && (
              <ImageLink
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={post.children.data[0].media_url}
                  alt="Instagram Post"
                />
              </ImageLink>
            )
          )}
        </Post>
      ))}
    </FeedContainer>
  );
};

export default InstaFeed;
