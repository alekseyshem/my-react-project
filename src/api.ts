import dayjs from "dayjs";
import Post from "./dto/Post";

const posts = [
  {
    title: "name 1",
    description: "description",
    id: 1,
    createdAt: dayjs(),
    updatedAt: dayjs(),
  },
  {
    title: "name 2",
    description: "description",
    id: 2,
    createdAt: dayjs(),
    updatedAt: dayjs(),
  },
  {
    title: "name 3",
    description: "description",
    id: 3,
    createdAt: dayjs(),
    updatedAt: dayjs(),
  },
  {
    title: "name 4",
    description: "description",
    id: 4,
    createdAt: dayjs(),
    updatedAt: dayjs(),
  },
  {
    title: "name 5",
    description: "description",
    id: 5,
    createdAt: dayjs(),
    updatedAt: dayjs(),
  },
  {
    title: "name 6",
    description: "description",
    id: 6,
    createdAt: dayjs(),
    updatedAt: dayjs(),
  },
];

export function loadPostsApi(pageSize: number, page: number): Promise<{ posts: Array<Post>; totalPosts: number }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length / pageSize + 1 >= page) {
        resolve({
          posts: posts.filter((_, index) => index <= pageSize * page - 1 && index > (page - 1) * pageSize - 1),
          totalPosts: posts.length,
        });
      } else {
        reject();
      }
    }, 1500);
  });
}
