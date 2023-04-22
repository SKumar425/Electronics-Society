import React from "react";


const data = [
  {
    id: "information-technology",
    title: "Electronics Researcher",
    membersCount: 3,
    members: [
      {
        name: "Prof. Pradyumn Kumar Patra",
        avatar: "/assets/1.jpg",
        profession: "Mentor",
        socialMedia: {
          present: true,
          links: [
            {
              platform: "linked-in",
              url: "https://linkedin.com",
            },
            {
              platform: "instagram",
              url: "https://instagram.com/shoubhik.codes",
            },
            {
              platform: "twitter",
              url: "https://twitter.com/shoubhikraj",
            },
            {
              platform: "facebook",
              url: "https://facebook.com",
            },
          ],
        },
      },
      {
        name: "Swadhin  Kumar Senapati",
        avatar: "/assets/profile_picture_2.jpg",
        profession: "Electronics Researcher",
        socialMedia: {
          present: true,
          links: [
            {
              platform: "linked-in",
              url: "www.linkedin.com/in/swadhinkumarsenapati585339230",
            },
            {
              platform: "instagram",
              url: "https://www.instagram.com/s_w_a_d_h_i_n45/",
            },
            {
              platform: "twitter",
              url: "https://twitter.com/SwadhinKumarSe9",
            },
            {
              platform: "facebook",
              url: "https://www.facebook.com/swadhinkumar.senapati.35",
            },
          ],
        },
      },
      {
        name: "Shiwam Rai",
        avatar: "/assets/profile_picture_1.jpg",
        profession: "Electronics Researcher",
        socialMedia: {
          present: true,
          links: [
            
            {
              platform: "linked-in",
              url: "https://linkedin.com",
            },
            {
              platform: "instagram",
              url: "https://instagram.com/shoubhik.codes",
            },
            {
              platform: "twitter",
              url: "https://twitter.com/shoubhikraj",
            },
            {
              platform: "facebook",
              url: "https://facebook.com",
            },
          ],
        },
      },

    
      
    ],
  },

  {
    id: "development",
    title: "Developer",
    membersCount: 3,
    members: [
      {
        name: "Prof. Pradyumn Patra",
        avatar: "/assets/1.jpg",
        profession: "Mentor",
        socialMedia: {
          present: true,
          links: [
            {
              platform: "linked-in",
              url: "https://linkedin.com",
            },
            {
              platform: "instagram",
              url: "https://instagram.com/shoubhik.codes",
            },
            {
              platform: "twitter",
              url: "https://twitter.com/shoubhikraj",
            },
            {
              platform: "facebook",
              url: "https://facebook.com",
            },
          ],
        },
      },
      {
        name: "Swadhin Kumar Senapati",
        avatar: "/assets/profile_picture_2.jpg",
        profession: "Frontend Developer",
        socialMedia: {
          present: true,
          links: [
            {
              platform: "linked-in",
              url: "https://linkedin.com",
            },
            {
              platform: "instagram",
              url: "https://instagram.com/shoubhik.codes",
            },
            {
              platform: "twitter",
              url: "https://twitter.com/shoubhikraj",
            },
            {
              platform: "facebook",
              url: "https://facebook.com",
            },
          ],
        },
      },
      {
        name: "Shiwam Rai",
        avatar: "/assets/profile_picture_1.jpg",
        profession: "Backend Developer",
        socialMedia: {
          present: true,
          links: [
            {
              platform: "linked-in",
              url: "https://linkedin.com",
            },
            {
              platform: "instagram",
              url: "https://instagram.com/shoubhik.codes",
            },
            {
              platform: "twitter",
              url: "https://twitter.com/shoubhikraj",
            },
            {
              platform: "facebook",
              url: "https://facebook.com",
            },
          ],
        },
      },
    ],
  },
];

const Team = () => {
  return (
    <div className="pt-[64px] relative md:overflow-hidden">
      <div className="p-9">
        <h1 className="text-center text-5xl text-gray-600 text-right font-bold mb-4">Team</h1>
        <div className="py-9">
        
          {data
            ? data.map((category) => (
                <div className="bg-white bg-opacity-30 border-3 border-white rounded-3xl backdrop-blur-3xl backdrop-filter p-2 pt-8 sm:p-4 md:p-6 lg:p-8 mb-20 shadow">
                  <h3 className="text-center text-xl">{category.title}</h3>
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-16 px-8">
                    {category.members.map((member) => (
                      <div className="bg-white rounded-xl flex items-center justify-center flex-col p-8">
                        <img
                          src={member.avatar}
                          alt="image"
                          className="rounded-full w-32 mb-3"
                        />
                        <div className="flex flex-col items-center justify-center">
                          <p className="text-sm text-gray-700 font-poppins text-center">
                            {member.name}
                          </p>
                          <small className="text-xs text-gray-500 font-light text-center">
                            {member.profession}
                          </small>
                          <div className="flex flex-row justify-center items-center flex-wrap mt-2">
                            {member.socialMedia.links.map((social) => (
                              <a
                                href={social.url}
                                className="hover:bg-gray-100 rounded-full"
                              >
                                {social.platform === "twitter" ? (
                                  <img
                                    src="/assets/twitter_icon.png"
                                    alt="twitter_icon"
                                    className="w-9 h-9 p-1"
                                  />
                                ) : social.platform === "linked-in" ? (
                                  <img
                                    src="/assets/linkedin_icon.png"
                                    alt="linkedin_icon"
                                    className="w-9 h-9 p-1"
                                  />
                                ) : social.platform === "instagram" ? (
                                  <img
                                    src="/assets/instagram_icon.png"
                                    alt="instagram_icon"
                                    className="w-9 h-9 p-1"
                                  />
                                ) : social.platform === "facebook" ? (
                                  <img
                                    src="/assets/facebook_icon.png"
                                    alt="facebook_icon"
                                    className="w-9 h-9 p-1"
                                  />
                                ) : social.platform === "youtube" ? (
                                  <img
                                    src="/assets/youtube_icon.png"
                                    alt="youtube_icon"
                                    className="w-9 h-9 p-1"
                                  />
                                ) : null}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default Team;
