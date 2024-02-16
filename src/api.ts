import dayjs from "dayjs";
import Post from "./dto/Post";


export function loadPosts(): Promise<Array<Post>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            title: "name",
            description: "description",
            id: 1,
            createdAt: dayjs(),
            updatedAt: dayjs(),
          },
          {
            title: "name",
            description: "description",
            id: 2,
            createdAt: dayjs(),
            updatedAt: dayjs(),
          },
        ]);
      }, 2000);
    });
  }