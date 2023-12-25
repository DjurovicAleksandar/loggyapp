import map from "@/assets/images/nav/map.png";
import app from "@/assets/images/nav/app.png";
import maintenance from "@/assets/images/nav/maintenance.png";
import cms from "@/assets/images/nav/cms.png";
import ux from "@/assets/images/nav/ux.png";
import coding from "@/assets/images/nav/coding.png";
import Image from "next/image";
import NavServicesList from "./NavServicesList";

const recentBlogPosts = [
  {
    blogName: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 1",
    href: "#",
  },
  {
    blogName: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 2",
    href: "#",
  },
  {
    blogName: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 3",
    href: "#",
  },
  {
    blogName: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 4",
    href: "#",
  },
  {
    blogName: "Lorem ipsum dolor sit amet consectetur adipisicing elit. 5",
    href: "#",
  },
];

const NavServices = () => {
  return (
    <div className=" absolute w-[700px]  bg-white z-10 -bottom-[650px] left-1/2  -translate-x-1/2 shadow-md rounded-xl">
      <NavServicesList />
      <div className="bg-gray-50 px-padXMobile py-padYMobile">
        <h2 className="mb-4 font-bold">Recent Posts</h2>
        <div className="flex flex-col gap-2">
          {recentBlogPosts.map(({ blogName, href }, i) => {
            return (
              <a
                href={href}
                key={i}
                className="text-md font-light hover:text-primary"
              >
                {blogName}
              </a>
            );
          })}

          <a href="#" className="mt-4">
            {" "}
            View all posts →
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavServices;
