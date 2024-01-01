"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YouTubeCount = () => {
  const [subscribers, setSubscribers] = useState(null);
  const apiKey = `${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`;
  const channelId = 'UCntvVtj1IihyJSgI7nKyhyw';

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`
        );
        const subscriberCount = response.data.items[0]?.statistics.subscriberCount;

        setSubscribers(subscriberCount);
      } catch (error) {
        console.error('Error fetching subscribers:', error);
      }
    };

    fetchSubscribers();
  }, [apiKey, channelId]);

  return (
    <>
      {subscribers !== null ? (
        <>{subscribers}</>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default YouTubeCount;