import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleAnnouncement } from "../store/actions/announcement_actions";

import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  WhatsappIcon,
} from "react-share";

const SingleAnnouncement = () => {
  const slug = useParams();
  const dispatch = useDispatch();
  const announcementData = useSelector(
    (state) => state.announcements.single_announcement
  );

  useEffect(() => {
    dispatch(fetchSingleAnnouncement(slug));
  }, []);

  return (
    <div className="bg-gray-100 pb-32 pt-[64px]">
      {announcementData ? (
        <>
          <div
            className="pt-[64px] bg-center bg-no-repeat bg-cover h-[300px] w-full bg-fixed"
            style={{
              backgroundImage: `url('${announcementData.featured_image}')`,
            }}
          ></div>
          <div className="relative mx-auto px-8 md:px-12 bg-opacity-50 bg-white border-3 border-white rounded max-w-4xl shadow-xl z-10 backdrop-filter backdrop-blur-xl pb-8">
            <h2 className="my-8 font-poppins font-semibold text-2xl text-center">
              {announcementData.title}
            </h2>
            <div
              className="py-4"
              dangerouslySetInnerHTML={{ __html: announcementData.content }}
            ></div>
            <div className="flex flex-col md:flex-row items-center justify-start">
              <p className="text-gray-500 text-base font-semibold mr-3">
                Share
              </p>
              <div className="flex items-center justify-center">
                <FacebookShareButton
                  url={announcementData.url}
                  quote={announcementData.title}
                >
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>
                <WhatsappShareButton
                  url={announcementData.url}
                  quote={announcementData.title}
                >
                  <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
              </div>
            </div>
          </div>
          <div className="w-44 h-44 md:w-[500px] md:h-[500px] bg-purple-500 opacity-20 rounded-full absolute -bottom-96 left-0"></div>
        </>
      ) : null}
    </div>
  );
};

export default SingleAnnouncement;
