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

export function loadPostsApi(
  pageSize: number,
  page: number
): Promise<{ posts: Array<Post>; totalPosts: number }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.ceil(posts.length / pageSize) >= page || (posts.length === 0 && page === 1)) {
        resolve({
          posts: posts.filter(
            (_, index) => index <= pageSize * page - 1 && index > (page - 1) * pageSize - 1
          ),
          totalPosts: posts.length,
        });
      } else {
        reject();
      }
    }, 1000);
  });
}

export function deletePostApi(id: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.find((post) => post.id === id)) {
        const index = posts.findIndex((post) => post.id === id);
        if (index !== -1) {
          posts.splice(index, 1);
        }
        resolve(id);
      } else {
        reject();
      }
    }, 1000);
  });
}
