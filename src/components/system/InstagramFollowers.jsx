"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const InstagramFollowers = () => {
  const [followers, setFollowers] = useState(0);
  const username = "Arshahdul_ahmed";

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await axios.get(
          `https://www.instagram.com/${username}/?__a=1`
        );
        const pattern =
          /<script type="text\/javascript">window._sharedData = ([\s\S]*?);<\/script>/gi;
        const matches = pattern.exec(post.data);
        const scriptContent = matches[1];
        const json = JSON.parse(scriptContent);

        if (json.entry_data.LoginAndSignupPage)
          throw new Error("Login required");
        const followerCount = json.entry_data.ProfilePage[0].graphql.user.edge_follow.count;
        console.log(json.entry_data.ProfilePage[0].graphql.user)
        setFollowers(followerCount);
      } catch (error) {
        console.error("Error fetching followers:", error);
      }
    };

    fetchFollowers();
  }, [username]);

  return <div>{followers !== null ? <>{followers}</> : <>...</>}</div>;
};

export default InstagramFollowers;
