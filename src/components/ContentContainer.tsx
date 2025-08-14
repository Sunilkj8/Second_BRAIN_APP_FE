import axios from "axios";
import React, { useEffect, useState } from "react";
import VideoIcon from "./Icons/VideoIcon";
import DocumentIcon from "./Icons/DocumentIcon";
import LinkIcon from "./Icons/LinkIcon";
import TwitterIcon from "./Icons/TwitterIcon";
import DeleteButton from "./DeleteButton";

const ContentContainer = () => {
  const [userContent, setUserContent] = useState([]);

  async function getContentInfo() {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/content", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      console.log(res.data);
      setUserContent(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getContentInfo();
  }, []);
  // console.log(userContent);
  return (
    <div className="h-full overflow-hidden flex flex-wrap p-4 gap-10 ">
      {userContent.map((elem: any) => {
        console.log(elem.link.replace("watch", "embed").replace("?v=", "/"));
        return (
          <div className="h-full  max-h-[80vh] w-[30%] flex flex-col items-center py-3 overflow-hidden  gap-10 px-2 bg-white rounded-xl shadow-sm">
            <div className="flex gap-2 items-center">
              {elem.type.toLowerCase() == "video".toLowerCase() ? (
                <VideoIcon />
              ) : null}
              {elem.type.toLowerCase() == "document".toLowerCase() ? (
                <DocumentIcon />
              ) : null}
              {elem.type.toLowerCase() == "link".toLowerCase() ? (
                <LinkIcon />
              ) : null}
              {elem.type.toLowerCase() == "tweet".toLowerCase() ? (
                <TwitterIcon />
              ) : null}

              <span className="w-full    rounded-md p-2   px-4">
                {elem.title}
              </span>
              <span>
                <DeleteButton contentId={elem._id} />
              </span>
            </div>
            <div className="max-h-[50%] h-40 overflow-hidden">
              {elem.type.toLowerCase() == "video" ? (
                <iframe
                  className="w-full min-h-0.5 h-44"
                  src={elem.link.replace("watch", "embed").replace("?v=", "/")}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              ) : (
                ""
              )}
              {elem.type.toLowerCase() == "tweet" ? (
                <blockquote className="twitter-tweet">
                  <a href={elem.link.replace("x.com", "twitter.com")}></a>
                </blockquote>
              ) : (
                ""
              )}
            </div>
            <div className="text-center">{elem.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentContainer;
